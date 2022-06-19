import { aaDebugger } from "../../constants/constants.js";
import { AAanimationData } from "../../aa-classes/animation-data.js";

const wait = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

export async function bardicInspiration(handler, animationData) {

    const sourceToken = handler.sourceToken;
    const flags = handler.flags;

    const data = animationData.primary;
    const sourceFX = animationData.sourceFX;
    const targetFX = animationData.targetFX;

    if (data.isAuto) {

    } else {
        const bards = flags.bards ?? {};

        data.selfColor = bards.bardSelfColor;
        data.targetColor = bards.bardTargetColor;
        data.selfMarkerColor = bards.markerColor;
        data.targetMarkerColor = bards.markerColorTarget;
        data.animateSelf = bards.bardSelf;
        data.animateTarget = bards.bardTarget;
        data.marker = bards.marker;
        data.selfAnimation = bards.bardAnim;
        data.targetAnimation = bards.bardTargetAnim;
    }

    if (handler.debug) { aaDebugger("Bardic Inspiration Animation Start", data) }

    const selfMarkerPath = data.selfMarkerColor === "random" ? `autoanimations.static.spell.bardicinspiration.marker` : `autoanimations.static.spell.bardicinspiration.marker.${data.selfMarkerColor}`;
    const targetMarkerPath = data.targetMarkerColor === "random" ? `autoanimations.static.spell.bardicinspiration.marker` : `autoanimations.static.spell.bardicinspiration.marker.${data.targetMarkerColor}`
    const selfMusicPath = data.selfColor === "random" ? `autoanimations.static.music.notes.01` : `autoanimations.static.music.notes.01.${data.selfColor}`
    const targetMusicPath = data.targetColor === "random" ? `autoanimations.static.music.notes.01` : `autoanimations.static.music.notes.01.${data.targetColor}`
    const selfBIPath = data.selfColor === "random" ? `autoanimations.static.spell.bardicinspiration.inspire` : `autoanimations.static.spell.bardicinspiration.inspire.${data.selfColor}`
    const targetBIPath = data.targetColor === "random" ? `autoanimations.static.spell.bardicinspiration.inspire` : `autoanimations.static.spell.bardicinspiration.inspire.${data.targetColor}`

    let aaSeq = await new Sequence("Automated Animations")

    // Play Macro if Awaiting
    if (data.playMacro && data.macro.playWhen === "1") {
        let userData = data.macro.args;
        aaSeq.macro(data.macro.name, handler.workflow, handler, ...userData)
    }
    // Extra Effects => Source Token if active
    if (sourceFX.enabled) {
        aaSeq.addSequence(sourceFX.sourceSeq)
    }
    // Animation Start Hook
    aaSeq.thenDo(function () {
        Hooks.callAll("aa.animationStart", sourceToken, handler.allTargets)
    })
    if (data.animateSelf) {
        const sourceTokenGS = (sourceToken.w / canvas.grid.size) * 1.75 * data.scale;
        let selfEffect = aaSeq.effect()
        selfEffect.atLocation(sourceToken)
        if (data.selfAnimation === 'music') {
            selfEffect.file(selfMusicPath)
            selfEffect.size((sourceToken.w / canvas.grid.size), { gridUnits: true })
            selfEffect.repeats(10, 350)
            selfEffect.randomOffset()
        } else {
            selfEffect.file(selfBIPath)
            selfEffect.size(sourceTokenGS, { gridUnits: true })
        }
        if (data.marker) {
            aaSeq.effect()
                .file(selfMarkerPath)
                .atLocation(sourceToken)
                .size(sourceTokenGS, { gridUnits: true })
                .belowTokens(true)
        }
    }
    let targetSound = false;
    if (data.animateTarget && handler.allTargets.length > 0) {
        for (let target of handler.allTargets) {
            let targetTokenGS = (target.w / canvas.grid.size) * 1.75 * data.scale
            let targetEffect = aaSeq.effect()
            targetEffect.atLocation(target)
            if (data.targetAnimation === 'music') {
                targetEffect.file(targetMusicPath)
                targetEffect.size((target.w / canvas.grid.size), { gridUnits: true })
                targetEffect.repeats(10, 350)
                targetEffect.randomOffset()
            } else {
                targetEffect.file(targetBIPath)
                targetEffect.size(targetTokenGS, { gridUnits: true })
            }
            if (data.marker) {
                aaSeq.effect()
                    .file(targetMarkerPath)
                    .atLocation(target)
                    .size(targetTokenGS, { gridUnits: true })
                    .belowTokens(true)
            }
            if (targetFX.enabled) {
                let targetSequence = AAanimationData._targetSequence(targetFX, target, handler);
                aaSeq.addSequence(targetSequence.targetSeq)
                targetSound = true;
            }
        }
    }
    aaSeq.addSequence(await AAanimationData._sounds({ animationData, targetSound }))
    // Macro if Concurrent
    if (data.playMacro && data.macro.playWhen === "0") {
        let userData = data.macro.args;
        new Sequence()
            .macro(data.macro.name, handler.workflow, handler, ...userData)
            .play()
    }
    aaSeq.play()
    // Animation End Hook
    Hooks.callAll("aa.animationEnd", sourceToken, handler.allTargets)
}
