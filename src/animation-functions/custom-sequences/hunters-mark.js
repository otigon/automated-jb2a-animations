import { AAanimationData } from "../../aa-classes/animation-data.js";
import { aaDebugger } from "../../constants/constants.js";

const wait = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

export async function huntersMark(handler, animationData) {

    function moduleIncludes(test) {
        return !!game.modules.get(test);
    }

    const data = animationData.primary;
    if (data.isAuto) {
        const autoOverridden = handler.autorecOverrides?.enable
        data.anchorX = autoOverridden ? handler.autorecOverrides?.anchorX : data.anchorX || 0.5;
        data.anchorY = autoOverridden ? handler.autorecOverrides?.anchorY : data.anchorY || 0.7;
    }

    const sourceToken = handler.sourceToken;
    const sourceFX = animationData.sourceFX;
    const targetFX = animationData.targetFX;
    //let target = handler.allTargets[0] || null;

    const animLoop = data.variant + "loop";
    let hmPulse = data.color === 'random' ? `autoanimations.static.huntersmark.${data.variant}` : `autoanimations.static.huntersmark.${data.variant}.${data.color}`;

    let hmLoop = data.color === 'random' ? `autoanimations.static.huntersmark.${animLoop}` : `autoanimations.static.huntersmark.${animLoop}.${data.color}`

    //const checkAnim = Sequencer.EffectManager.getEffects({ object: target, name: "huntersmark" }).length > 0

    const scale = data.scale || 1
    const finalScale = (canvas.grid.size / 200) * scale

    if (handler.debug) { aaDebugger("Aura Animation Start", data) }

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
        aaSeq.addSequence(await AAanimationData._sounds({ animationData }))
    }
    // Animation Start Hook
    aaSeq.thenDo(function () {
        Hooks.callAll("aa.animationStart", sourceToken, handler.allTargets)
    })
    aaSeq.effect()
        .file(hmPulse)
        .atLocation(sourceToken)
    for (let target of handler.allTargets) {
        let checkAnim = Sequencer.EffectManager.getEffects({ object: target, origin: handler.item.uuid }).length > 0

        aaSeq.effect()
            .file(hmPulse)
            .atLocation(target)
            .playIf(target)
        if (!checkAnim && data.persistent) {
            aaSeq.effect()
                .file(hmLoop)
                .attachTo(target)
                .anchor({ x: data.anchorX, y: data.anchorY })
                .delay(1500)
                .scale(finalScale)
                .belowTokens(false)
                .name("huntersmark")
                .persist()
                .origin(handler.item.uuid)
                .loopProperty("sprite", "scale.x", { from: (finalScale * 0.4), to: finalScale, duration: 4000, pingPong: true })
                .loopProperty("sprite", "scale.y", { from: (finalScale * 0.4), to: finalScale, duration: 4000, pingPong: true })
                .loopProperty("sprite", "alpha", { from: 0.25, to: 1, duration: 4000, pingPong: true })
        }
        if (targetFX.enabled) {
            let targetSequence = AAanimationData._targetSequence(targetFX, target, handler);
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