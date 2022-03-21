import { trafficCop } from "../router/traffic-cop.js";
var killAllAnimations;
export function disableAnimations() {
    socket.off('module.sequencer')
    killAllAnimations = true;
}

export async function createActiveEffects5e(effect) {

    if (killAllAnimations) { return; }
    const aeItem = effect;
    const aeToken = canvas.tokens.placeables.find(token => token.actor?.effects?.get(aeItem.id))
    console.log(aeItem)
    console.log(aeToken)
    let handler = AutoAnimations.playAnimation(aeToken, [], aeItem);
    if (!handler.item || !handler.sourceToken) {
        return;
    }
    trafficCop(handler);
}

export async function deleteActiveEffects5e(effect) {
    let aeOrigin = effect.data?.origin;
    if (!aeOrigin) { return; };

    const tactorUuid = effect.data?.flags?.dae?.token;

    if (Sequencer.EffectManager.getEffects( {origin: aeOrigin, object: tactorUuid} ).length) {
        Sequencer.EffectManager.endEffects( {origin: aeOrigin, object: tactorUuid} )
    }
}

export async function toggleActiveEffects5e(effect, toggle) {
    if (toggle.disabled === true) {
        let aeOrigin = effect.data?.origin;
        if (!aeOrigin) { return; };
        if (Sequencer.EffectManager.getEffects( {origin: aeOrigin} ).length) {
            Sequencer.EffectManager.endEffects( {origin: aeOrigin} )
        }    
    } else if (toggle.disabled === false) {
        if (killAllAnimations) { return; }

        const aeItem = effect;
        const aeToken = canvas.tokens.placeables.find(token => token.actor?.effects?.get(aeItem.id))
        console.log(aeItem)
        console.log(aeToken)
        let handler = AutoAnimations.playAnimation(aeToken, Array.from(game.user.targets), aeItem);
        if (!handler.item || !handler.sourceToken) {
            return;
        }
        trafficCop(handler);
    }
}