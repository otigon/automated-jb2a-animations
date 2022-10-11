import { trafficCop }       from "../router/traffic-cop.js";
import systemData           from "../system-handlers/system-data.js";
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
    //const wait = (delay) => new Promise((resolve) => setTimeout(resolve, delay));
    //await wait(150)

    if (!AnimationState.enabled) { return; }

    // Gets the Token that the Active Effect is applied to
    const aeToken = effect.parent?.token || canvas.tokens.placeables.find(token => token.actor?.effects?.get(effect.id));
    if (!aeToken) {
        debug("Failed to find the Token for the Active Effect")
        return;
    }
    const aeNameField = effect.label + `${aeToken.id}`
    const checkAnim = Sequencer.EffectManager.getEffects({ object: aeToken, name: aeNameField }).length > 0
    if (checkAnim) {
        debug("Animation is already present on the Token, returning.")
        return;
    }

    const data = {
        token: aeToken,
        targets: [],
        item: effect,
        activeEffect: true,
    }

    let handler = await systemData.make(null, null, data);
    if (!handler.isEnabled || (!handler.autorecObject && !handler.isCustomized)) {
        debug("Active Effect has no animation defined, exiting early", handler)
        return;
    }
    // Exits early if Item or Source Token returns null. Total Failure
    if (!handler.item || !handler.sourceToken) {
        debug("Failed to find the Item or Source Token", handler)
        return;
    }
    // Sends the data to begin the animation Sequence
    trafficCop(handler);
}

export async function deleteActiveEffects(effect) {
    let aaEffects = Sequencer.EffectManager.getEffects({ origin: effect.uuid })

    const token = effect.parent?.token || canvas.tokens.placeables.find(token => token.actor?.effects?.get(effect.id))

    const data = {
        token: token,
        targets: [],
        item: effect,
    };

    // Compile data for the system handler
    const handler = await systemData.make(null, null, data);
    if (!handler.isEnabled || (!handler.autorecObject && !handler.isCustomized)) {
        debug("Active Effect has no animation defined, exiting early", handler)
        return;
    }

    const flagData = handler.isCustomized
    ? foundry.utils.deepClone(handler.flags)
    : foundry.utils.deepClone(handler.autorecObject);

    const macro = await DataSanitizer.compileMacro(handler, flagData);

    if (aaEffects.length > 0) {  
        // Filters the active Animations to isolate the ones active on the Token
        let currentEffect = aaEffects.filter(i => effect.uuid.includes(i.source?.actor?.id));
        currentEffect = currentEffect.length < 1 ? aaEffects.filter(i => effect.uuid.includes(i.source?.id)) : currentEffect;
        if (currentEffect.length < 0) { return; }

        // Fallback for the Source Token
        if (!handler.sourceToken) {
            handler.sourceToken = currentEffect[0].source;
        }

        // If a Macro was defined, it will run here with "off" as args[0]
        if (macro) {
            let userData = macro.args;
            new Sequence()
                .macro(macro.name, "off", handler, userData)
                .play()
        }

        // End all Animations on the token with .origin(effect.uuid)
        Sequencer.EffectManager.endEffects({ origin: effect.uuid, object: handler.sourceToken })
    } else {
        if (macro) {
            let userData = macro.args;
            new Sequence()
                .macro(macro.name, "off", handler, userData)
                .play()
        }
    }
}


/**
 *
 * @param {*} effect // The Active Effect being removed
 *
 */
export async function OlddeleteActiveEffects(effect) {
    const aeToken = effect.parent?.token || canvas.tokens.placeables.find(token => token.actor?.effects?.get(effect.id))

    // Finds all active Animations on the scene that match .origin(effect.uuid)
    let aaEffects = Sequencer.EffectManager.getEffects({ origin: effect.uuid })

    // If no animations, exit early, Else continue with gathering data
    if (aaEffects.length > 0) {  
        const itemData = effect.flags?.autoanimations ?? {};
        const data = {
            token: undefined,
            targets: [],
            item: effect,
        };
        // Compile data for the system handler
        const handler = await systemData.make(null, null, data);

        // If a Macro is enabled on the Item, compile that data
        const macroData = {};
        if (itemData.isEnabled && itemData.macro?.enable && itemData.macro?.name) {
            //Sets macro data if it is defined on the Item and is active
            macroData.shouldRun = true;
            macroData.name = itemData.macro?.name ?? "";
            macroData.args = strToObj(itemData.macro?.args);
        } else if (handler.autorecObject && handler.autorecObject?.macro?.enable && handler.autorecObject?.macro?.name) {
            //Sets macro data if none is defined/active on the item and it is present in the Automatic Recognition Menu
            macroData.shouldRun = true;
            macroData.name = handler.autorecObject?.macro?.name ?? "";
            macroData.args = strToObj(handler.autorecObject?.macro?.args);
        }

        function strToObj(data) {
            if (!data) { return []; }
            let obj = {};
            try {
                if (data && typeof data === 'string') {
                    let objStr = data.replaceAll("\n", "").match(/\{(.)+\}/g);
                    eval("obj =" + objStr);
                }
                return obj || data.split(',').map(s => s.trim())
            }
            catch (err) {
                return data.split(',').map(s => s.trim())
            }
        }
    
        // Filters the active Animations to isolate the ones active on the Token
        let currentEffect = aaEffects.filter(i => effect.uuid.includes(i.source?.actor?.id));
        currentEffect = currentEffect.length < 1 ? aaEffects.filter(i => effect.uuid.includes(i.source?.id)) : currentEffect;
        if (currentEffect.length < 0) { return; }

        // Sets the Source Token on the Handler document
        handler.sourceToken = currentEffect[0].source;
        // If no Item or Source Token was found, exit early with Debug
        if (!handler.item || !handler.sourceToken) {
            debug("Failed to find the Item or Source Token", handler)
            return;
        }

        // If a Macro was defined, it will run here with "off" as args[0]
        if (macroData.shouldRun) {
            let userData = macroData.args;
            new Sequence()
                .macro(macroData.name, "off", handler, userData)
                .play()
        }

        // End all Animations on the token with .origin(effect.uuid)
        Sequencer.EffectManager.endEffects({ origin: effect.uuid, object: handler.sourceToken })
    } else {
        const itemData = effect.flags?.autoanimations ?? {};
        //const aeToken = canvas.tokens.get(itemData.aaAeTokenId)
        const data = {
            token: aeToken,
            targets: [],
            item: effect,
        };
        // Compile data for the system handler
        const handler = await systemData.make(null, null, data);
        const macroData = {};
        if ((handler.isCustomized && handler.macroOnly) || (handler.isDisabled && handler.macroOnly)) {
            //Sets macro data if it is defined on the Item and is active
            macroData.shouldRun = true;
            macroData.name = itemData.macro?.name ?? "";
            macroData.args = itemData.macro?.args ? macroData.args.split(',').map(s => s.trim()) : "";
        } else if (handler.autorecObject && handler.autorecObject?.macro?.enable && handler.autorecObject?.macro?.name) {
            //Sets macro data if none is defined/active on the item and it is present in the Automatic Recognition Menu
            macroData.shouldRun = true;
            macroData.name = handler.autorecObject?.macro?.name ?? "";
            macroData.args = handler.autorecObject?.macro?.args ? macroData.args.split(',').map(s => s.trim()) : "";
        }
        // If no Item or Source Token was found, exit early with Debug
        if (!handler.item || !handler.sourceToken) {
            debug("Failed to find the Item or Source Token", handler)
            return;
        }

        // If a Macro was defined, it will run here with "off" as args[0]
        if (macroData.shouldRun) {
            let userData = macroData.args;
            new Sequence()
                .macro(macroData.name, "off", handler, userData)
                .play()
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
        deleteActiveEffects(effect)
    } else if (toggle.disabled === false) {
        createActiveEffects(effect);
    }
}

// Used to delete Tile effects when Midi-QOL Concentration is lost
export async function checkConcentration(effect) {

    // Check effect label and return if it is not equal to "concentrating"
    const label = effect.label || "";
    if (label.toLowerCase() !== "concentrating") { return; }

    // Get Originating Item. If no Origin, return
    const origin = effect.origin
    if (!origin) {
        debug("Failed to find an Origin for Concentration")
        return;
    }

    // Get arrays of Background and Foreground Tiles with the A-A Origin flag UUID matching the Effect Origin
    const tiles = canvas.tiles.placeables.filter(i => i.data.flags?.autoanimations?.origin === origin)
    //const fgTiles = canvas.foreground.placeables.filter(i => i.flags?.autoanimations?.origin === origin);
    if (tiles.length < 1) {
        debug("Failed to find any Tiles tied to Concentration")
        return;
    }
    let tileIdArray = []
    if (tiles.length) {
        //if (bgTiles.length) {
        for (let tile of tiles) {
            tileIdArray.push(tile.id)
        }
        //}
        //if (fgTiles.length) {
        //for (let tile of fgTiles) {
            //tileIdArray.push(tile.id)
        //}
        //}
        socketlibSocket.executeAsGM("removeTile", tileIdArray)
    }

    //Sequencer.EffectManager.endEffects({ origin: origin })

}
