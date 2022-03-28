import { trafficCop } from "../router/traffic-cop.js";
import systemData from "../system-handlers/system-data.js";
import { aaDebugger } from "../constants/constants.js";

var killAllAnimations;
export function disableAnimations() {
    socket.off('module.sequencer')
    killAllAnimations = true;
}

export async function createActiveEffects5e(effect) {

    if (killAllAnimations) { return; }

    const aeItem = effect;

    aeItem.data.origin = aeItem.data.origin ? aeItem.data.origin : effect.uuid;
    aeItem.isCreatedAe = true;
    aeItem.data.flags.aaAeStatus = 'on';

    const aeToken = canvas.tokens.placeables.find(token => token.actor?.effects?.get(aeItem.id))

    let handler = AutoAnimations.playAnimation(aeToken, [], aeItem);
    if (!handler.item || !handler.sourceToken) {
        return;
    }
    trafficCop(handler);
}

/**
 * 
 * @param {*} effect // The Active Effect being removed
 * 
 */
export async function deleteActiveEffects5e(effect) {
    // Origin UUID of the effect
    let aeOrigin = effect.data?.origin || effect.uuid
    if (!aeOrigin) { return; };

    // Finds all active Animations on the scene that match aeOrigin
    let aaEffects = Sequencer.EffectManager.getEffects({ origin: aeOrigin})

    // If no animations, exit early, Else continue with gathering data
    if (aaEffects.length < 1) { return; }
    else {
        const itemData = aaEffects[0].data?.flags?.autoanimations ?? {};
        const data = {
            token: undefined,
            targets: [],
            item: effect,
        };
        // Compile data for the system handler
        const handler = await systemData.make(null, null, data);

        // If a Macro is enabled on the Item, compile that data
        const macroData = {};
        if ( itemData.macro?.enable && itemData.macro?.name && (itemData.override || itemData.killAnim) ) {
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

        // Filters the active Animations to isolate the ones active on the Token
        let currentEffect = aaEffects.filter(i => effect.uuid.includes(i.source?.actor?.id));
        currentEffect = currentEffect.length < 1 ? aaEffects.filter(i => effect.uuid.includes(i.source?.id)) : currentEffect;
        if (currentEffect.length < 0) { return; }

        // Sets the Source Token on the Handler document
        handler.sourceToken = currentEffect[0].source;
        // If no Item or Source Token was found, exit early with Debug
        if (!handler.item || !handler.sourceToken) {
            if (aaDebug) { aaDebugger("Failed to find the Item or Source Token", handler) }
            return;
        }
    
        // If a Macro was defined, it will run here with "off" as args[0]
        if (macroData.shouldRun) {
            let userData = macroData.args;
            new Sequence()
            .macro(macroData.name, "off", handler, ...userData)
            .play()
        }

        // End all Animations on the token with .origin(aeOrigin)
        Sequencer.EffectManager.endEffects({ origin: aeOrigin, object: handler.sourceToken })
    }
}

export async function toggleActiveEffects5e(effect, toggle) {
    if (toggle.disabled === true) {
        let aeOrigin = effect.data?.origin;
        if (!aeOrigin) { return; };
        if (Sequencer.EffectManager.getEffects({ origin: aeOrigin }).length) {
            Sequencer.EffectManager.endEffects({ origin: aeOrigin })
        }
    } else if (toggle.disabled === false) {
        if (killAllAnimations) { return; }

        const aeItem = effect;
        const aeToken = canvas.tokens.placeables.find(token => token.actor?.effects?.get(aeItem.id))
        console.log(aeItem)
        console.log(aeToken)
        let handler = AutoAnimations.playAnimation(aeToken, [], aeItem);

        if (!handler.item || !handler.sourceToken) {
            if (aaDebug) { aaDebugger("Failed to find the Item or Source Token", handler) }
            return;
        }
        trafficCop(handler);
    }
}