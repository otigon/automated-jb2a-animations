import { debug }            from "../../constants/constants.js";
import { trafficCop }       from "../../router/traffic-cop.js";
import AAHandler            from "../../system-handlers/workflow-data.js";
import { AnimationState }   from "../../AnimationState.js";
import { DataSanitizer }    from "../../aa-classes/DataSanitizer.js";


export async function createRuleElementPF2e(item) {
    const aePF2eTypes = ['condition', 'effect']
    if (!aePF2eTypes.includes(item.type)) { return; }

    if (!AnimationState.enabled) { return; }

    // Get the Item ID and Token it is on
    const itemId = item.id;
    const aeToken = canvas.tokens.placeables.find(token => token.actor?.items?.get(itemId) != null)
    if (!aeToken) {
        debug("Failed to find the Token for the Active Effect")
        return;
    }

    if (game.settings.get("autoanimations", "disableGrantedAuraEffects")) {
        let tactorId = aeToken.actor.id;
        let origin = item.flags?.pf2e?.aura?.origin;
        if (origin) {
            let idSplit = origin.split('.');
            let id = idSplit[idSplit.length - 1];
            if (tactorId !== id) {
                debug("This is a Granted Ruleset, exiting early")
                return;
            }
        }
    }

    const aeNameField = item.name.replace(/[^A-Za-z0-9 .*_-]/g, "") + `${aeToken.id}`
    const checkAnim = await Sequencer.EffectManager.getEffects({ object: aeToken, name: aeNameField }).length > 0
    if (checkAnim) {
        debug("Animation is already present on the Token, returning.")
        return;
    }

    const data = {
        token: aeToken,
        targets: [],
        item: item,
        activeEffect: true,
        tieToDocuments: true,
    }
    let handler = await AAHandler.make(data);
    if (!handler) { return; }
    /*
    if (!handler.isEnabled || (!handler.autorecObject && !handler.isCustomized)) {
        debug("Active Effect has no animation defined, exiting early", handler)
        return;
    }
    */
    // Exits early if Item or Source Token returns null. Total Failure
    if (!handler.item || !handler.sourceToken) {
        debug("Failed to find the Item or Source Token", handler)
        return;
    }

    // Sends the data to begin the animation Sequence
    trafficCop(handler);

}

export async function deleteRuleElementPF2e(itemData = {}) {

    const data = {
        token: itemData.token,
        targets: [],
        item: itemData.item,
        activeEffect: true,
    };

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
}
