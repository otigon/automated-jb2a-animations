export async function manageActiveEffects5e(effect) {
    let aeOrigin = effect.data?.origin;
    if (!aeOrigin) { return; };

    //let currentEffect = Sequencer.EffectManager.getEffects( {origin: aeOrigin} )
    //let tactor = effect.data?.flags?.dae?.token;
    //console.log(await fromUuid(tactor))
    if (Sequencer.EffectManager.getEffects( {origin: aeOrigin/*, target: effect.data?.flags?.dae?.token, object: tactor*/} ).length) {
        Sequencer.EffectManager.endEffects( {origin: aeOrigin/*, target: effect.data?.flags?.dae?.token, object: tactor*/} )
    }
}