import { AAAnimationData } from "../../aa-classes/AAAnimationData.js";
import { aaDebugger } from "../../constants/constants.js";

const wait = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

export async function hmSeq(handler, animationData) {

    function moduleIncludes(test) {
        return !!game.modules.get(test);
    }

    const data = animationData.primary;
    /*
    if (data.isAuto) {
        const autoOverridden = handler.autorecOverrides?.enable
        data.anchorX = autoOverridden ? handler.autorecOverrides?.anchorX : data.anchorX || 0.5;
        data.anchorY = autoOverridden ? handler.autorecOverrides?.anchorY : data.anchorY || 0.7;
    }
    */
    //const hmData =  handler.flags?.preset?.huntersmark;
    const hmData = data.isAuto ? handler.autorecObject?.huntersmark : handler.flags?.preset?.huntersmark;

    if (!hmData) { return; }
    const cleanData = {
        variant: hmData.variant || "eye",
        color: hmData.color || "blue",
        below: hmData.below || false,
        anchorX: hmData.anchorX || 0.5,
        anchorY: hmData.anchorY || 0.7,
        scale: hmData.scale || 1,
        persistent: hmData.persistent || false
    }



    const sourceToken = handler.sourceToken;
    const sourceFX = animationData.sourceFX;
    const targetFX = animationData.targetFX;
    //let target = handler.allTargets[0] || null;

    const animLoop = cleanData.variant + "loop";
    let hmPulse = cleanData.color === 'random' ? `autoanimations.static.spell.huntersmark.${cleanData.variant}` : `autoanimations.static.spell.huntersmark.${cleanData.variant}.${cleanData.color}`;

    let hmLoop = cleanData.color === 'random' ? `autoanimations.static.spell.huntersmark.${animLoop}` : `autoanimations.static.spell.huntersmark.${animLoop}.${cleanData.color}`

    //const checkAnim = Sequencer.EffectManager.getEffects({ object: target, name: "huntersmark" }).length > 0

    const scale = cleanData.scale || 1

    const sourceTokenGS = sourceToken.w / canvas.grid.size;

    if (handler.debug) { aaDebugger("Aura Animation Start", data, cleanData) }

    //const playPersist = (!checkAnim && data.persistent) ? true : false;
    let aaSeq = await new Sequence()
    // Play Macro if Awaiting
    if (data.playMacro && data.macro.playWhen === "1") {
        let userData = data.macro.args;
        aaSeq.macro(data.macro.name, handler.workflow, handler, [...userData])
    }
    // Extra Effects => Source Token if active
    if (sourceFX.enabled) {
        aaSeq.addSequence(sourceFX.sourceSeq)
    }
    if (data.playSound) {
        aaSeq.addSequence(await AAAnimationData._sounds({ animationData }))
    }
    // Animation Start Hook
    aaSeq.thenDo(function () {
        Hooks.callAll("aa.animationStart", sourceToken, handler.allTargets)
    })
    aaSeq.effect()
        .file(hmPulse)
        .atLocation(sourceToken)
        .belowTokens(cleanData.below)
        .size(sourceTokenGS * cleanData.scale, {gridUnits: true})
    for (let target of handler.allTargets) {
        let targetTokenGS = target.w / canvas.grid.size;
        let checkAnim = Sequencer.EffectManager.getEffects({ object: target, origin: handler.itemUuid }).length > 0

        aaSeq.effect()
            .file(hmPulse)
            .atLocation(target)
            .belowTokens(cleanData.below)
            .size(targetTokenGS * cleanData.scale, {gridUnits: true})
            //.playIf(target)
        if (!checkAnim && cleanData.persistent) {
            aaSeq.effect()
                .file(hmLoop)
                .attachTo(target)
                .anchor({ x: cleanData.anchorX, y: cleanData.anchorY })
                .delay(1500)
                .size(targetTokenGS * .25, {gridUnits: true})
                .belowTokens(cleanData.below)
                .name("huntersmark")
                .persist()
                .origin(handler.itemUuid)
                .loopProperty("sprite", "width", { from: ((targetTokenGS * .5) * 0.7), to: (targetTokenGS * .5), duration: 4000, pingPong: true, gridUnits: true })
                .loopProperty("sprite", "height", { from: ((targetTokenGS * .5) * 0.7), to: (targetTokenGS * .5), duration: 4000, pingPong: true, gridUnits: true })
                .loopProperty("sprite", "alpha", { from: 0.25, to: 1, duration: 4000, pingPong: true })
        }
        if (targetFX.enabled) {
            let targetSequence = AAAnimationData._targetSequence(targetFX, target, handler);
            aaSeq.addSequence(targetSequence.targetSeq)
        }
    }
    if (data.playMacro && data.macro.playWhen === "0") {
        let userData = data.macro.args;
        new Sequence()
            .macro(data.macro.name, handler.workflow, handler, [...userData])
            .play()
    }
    aaSeq.play()
    Hooks.callAll("aa.animationEnd", sourceToken, handler.allTargets)
}