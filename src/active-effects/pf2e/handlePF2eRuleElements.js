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
        new Sequence()
            .macro(macro.name, "off", handler, macro.args)
            .play()
    }
}


export async function oldDeletePF2e(item) {
    const aePF2eTypes = ['condition', 'effect']
    if (!aePF2eTypes.includes(item.type)) { return; }

    // Finds all active Animations on the scene that match .origin(effect.uuid)
    let aaEffects = Sequencer.EffectManager.getEffects({ origin: item.uuid })

    // If no animations, exit early, Else continue with gathering data
    if (aaEffects.length > 0) {
        const itemData = item.flags?.autoanimations ?? {};
        const data = {
            token: undefined,
            targets: [],
            item: item,
        };
        // Compile data for the system handler
        const handler = await AAHandler.make(data);

        // If a Macro is enabled on the Item, compile that data
        const macroData = {};
        if (itemData.macro?.enable && itemData.macro?.name && (itemData.override || itemData.killAnim)) {
            //Sets macro data if it is defined on the Item and is active
            macroData.shouldRun = true;
            macroData.name = itemData.macro?.name ?? "";
            macroData.args = itemData.macro?.args ? itemData.macro?.args.split(',').map(s => s.trim()) : "";
        } else if (handler.autorecObject && handler.autorecObject?.macro?.enable && handler.autorecObject?.macro?.name) {
            //Sets macro data if none is defined/active on the item and it is present in the Automatic Recognition Menu
            macroData.shouldRun = true;
            macroData.name = handler.autorecObject?.macro?.name ?? "";
            macroData.args = handler.autorecObject?.macro?.args ?  handler.autorecObject?.macro?.args.split(',').map(s => s.trim()) : "";
        }

        // Filters the active Animations to isolate the ones active on the Token
        let currentEffect = aaEffects.filter(i => item.uuid.includes(i.source?.actor?.id));
        currentEffect = currentEffect.length < 1 ? aaEffects.filter(i => item.uuid.includes(i.source?.id)) : currentEffect;
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
        Sequencer.EffectManager.endEffects({ origin: item.uuid, object: handler.sourceToken })
    } else {
        const itemData = item.flags?.autoanimations ?? {};
        //const aeToken = canvas.tokens.get(itemData.aaAeTokenId)
        const itemId = item.id;
        const aeToken = canvas.tokens.placeables.find(token => token.actor?.items?.get(itemId) != null)
        const data = {
            token: aeToken,
            targets: [],
            item: item,
        };
        // Compile data for the system handler
        const handler = await AAHandler.make(data);
        const macroData = {};
        if ((handler.isCustomized && handler.macroOnly) || (handler.isDisabled && handler.macroOnly)) {
            //Sets macro data if it is defined on the Item and is active
            macroData.shouldRun = true;
            macroData.name = itemData.macro?.name ?? "";
            macroData.args = itemData.macro?.args ? itemData.macro?.args.split(',').map(s => s.trim()) : "";
        } else if (handler.autorecObject && handler.autorecObject?.macro?.enable && handler.autorecObject?.macro?.name) {
            //Sets macro data if none is defined/active on the item and it is present in the Automatic Recognition Menu
            macroData.shouldRun = true;
            macroData.name = handler.autorecObject?.macro?.name ?? "";
            macroData.args = handler.autorecObject?.macro?.args ? handler.autorecObject?.macro?.args.split(',').map(s => s.trim()) : "";
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