import { trafficCop }       from "../router/traffic-cop.js";
import AAHandler            from "../system-handlers/workflow-data.js";
import { debug }            from "../constants/constants.js";
import { socketlibSocket }  from "../socketset.js";
import { AnimationState }   from "../AnimationState.js";
import { DataSanitizer }    from "../aa-classes/DataSanitizer.js";

/**
 *
 * @param {*} // The Active Effect being applied
 *
 */
export async function createActiveEffects(effect) {

    if (effect.disabled) { return; }

    if (!AnimationState.enabled) { return; }

    // Gets the Token that the Active Effect is applied to (which can also be from an actor's embedded item)
    const actor = effect.parent instanceof Item ? effect.parent.actor : effect.parent;
    const aeToken = actor.token ?? actor.getActiveTokens()[0];
    if (!aeToken) {
        debug("Failed to find the Token for the Active Effect")
        return;
    }
    const aeNameField = (effect.name ?? effect.label) + `${aeToken.id}`
    const checkAnim = Sequencer.EffectManager.getEffects({ object: aeToken, name: aeNameField }).length > 0
    if (checkAnim) {
        debug("Animation is already present on the Token, returning.")
        return;
    }

    const data = {
        token: aeToken,
        targets: [aeToken],
        item: effect,
        activeEffect: true,
        tieToDocuments: true,
    }

    let handler = await AAHandler.make(data);
    if (!handler) { return; }
    // Exits early if Item or Source Token returns null. Total Failure
    if (!handler.item || !handler.sourceToken) {
        debug("Failed to find the Item or Source Token", handler)
        return;
    }
    // Sends the data to begin the animation Sequence
    trafficCop(handler);
}

export async function deleteActiveEffects(effect, shouldDelete = false) {
    //let aaEffects = Sequencer.EffectManager.getEffects({ origin: effect.uuid })

    const actor = effect.parent instanceof Item ? effect.parent.actor : effect.parent;
    const token = actor.token ?? actor.getActiveTokens()[0];

    const data = {
        token: token,
        targets: [],
        item: effect,
        activeEffect: true,
    };

    // Compile data for the system handler
    const handler = await AAHandler.make(data);
    if (!handler) { return; }

    const flagData = handler.animationData
    //? foundry.utils.deepClone(handler.flags)
    //: foundry.utils.deepClone(handler.autorecObject);

    const macro = await DataSanitizer.compileMacro(handler, flagData);
    if (macro) {
        if (foundry.utils.isNewerVersion(game.version, 11)) {
            new Sequence()
            .macro(macro.name, {args: ["off", handler, macro.args]})
            .play()
        } else {
            if (game.modules.get("advanced-macros")?.active) {
                new Sequence()
                    .macro(macro.name, "off", handler, macro.args)
                    .play()
            } else {
                new Sequence()
                    .macro(macro.name)
                    .play()
            }
        }
    }

    if (shouldDelete) {
        let aaEffects = Sequencer.EffectManager.getEffects({ origin: effect.uuid });
        if (aaEffects.length > 0) {
            // Filters the active Animations to isolate the ones active on the Token
            let currentEffect = aaEffects.filter(i => effect.uuid.includes(i.source?.actor?.id));
            currentEffect = currentEffect.length < 1 ? aaEffects.filter(i => effect.uuid.includes(i.source?.id)) : currentEffect;
            if (currentEffect.length < 0) { return; }

            // Fallback for the Source Token
            if (!handler.sourceToken) {
                handler.sourceToken = currentEffect[0].source;
            }

            // End all Animations on the token with .origin(effect.uuid)
            Sequencer.EffectManager.endEffects({ origin: effect.uuid, object: handler.sourceToken })
        }
    }
}

/**
 *
 * @param {Active Effect being updated} effect
 * @param {Toggle Check On/Off for Effect} toggle
 */
export async function toggleActiveEffects(effect, toggle) {

    if (toggle.disabled === true) {
        deleteActiveEffects(effect, true)
    } else if (toggle.disabled === false) {
        createActiveEffects(effect);
    }
}

// Used to delete Tile effects when Midi-QOL Concentration is lost
export async function checkConcentration(effect) {

    // Check effect label and return if it is not equal to "concentrating"
    const label = (effect.name ?? effect.label) || "";
    if (label.toLowerCase() !== "concentrating") { return; }

    // Get Originating Item. If no Origin, return
    const origin = effect.origin
    if (!origin) {
        debug("Failed to find an Origin for Concentration")
        return;
    }

    // Get arrays of Background and Foreground Tiles with the A-A Origin flag UUID matching the Effect Origin
    const tiles = canvas.tiles.placeables.filter(i => i.document.flags?.autoanimations?.origin === origin)
    if (tiles.length < 1) {
        debug("Failed to find any Tiles tied to Concentration")
        return;
    }
    let tileIdArray = []
    if (tiles.length) {
        for (let tile of tiles) {
            tileIdArray.push(tile.id)
        }
        socketlibSocket.executeAsGM("removeTile", tileIdArray)
    }
}
