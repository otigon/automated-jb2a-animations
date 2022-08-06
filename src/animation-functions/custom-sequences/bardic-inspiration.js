import { aaDebugger } from "../../constants/constants.js";
import { AAAnimationData } from "../../aa-classes/AAAnimationData.js";

const wait = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

export async function biSeq(handler, animationData) {

    const sourceToken = handler.sourceToken;
    const flags = handler.flags;

    const data = animationData.primary;
    const sourceFX = animationData.sourceFX;
    const targetFX = animationData.targetFX;

    //const biData =  flags.preset?.bardicinspiration;
    const biData = data.isAuto ? handler.autorecObject?.bardicinspiration : handler.flags?.preset?.bardicinspiration;
    if (!biData) { return; }
    const cleanData = {
        scale: biData.scale || 1,
        below: biData.below || false,
        self: {
            enable: biData.self?.enable || false,
            animation: biData.self?.animation || "bardicinspiration",
            variant: biData.self?.variant || "inspire",
            color: biData.self?.color || "yellowblue",
        },
        target: {
            enable: biData.target?.enable || false,
            animation: biData.target?.animation || "bardicinspiration",
            variant: biData.target?.variant || "inspire",
            color: biData.target?.color || "yellowblue",
        },
        marker: {
            enable: biData.marker?.enable || false,
            selfColor: biData.marker?.selfColor || "yellowblue",
            targetColor: biData.marker?.targetColor || "yellowblue",
        },
    };


    /*
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
    */
    if (handler.debug) { aaDebugger("Bardic Inspiration Animation Start", data, cleanData) }

    const selfMarkerPath = cleanData.marker.selfColor === "random" ? `autoanimations.static.spell.bardicinspiration.marker` : `autoanimations.static.spell.bardicinspiration.marker.${cleanData.marker.selfColor}`;
    const targetMarkerPath = cleanData.marker.targetColor === "random" ? `autoanimations.static.spell.bardicinspiration.marker` : `autoanimations.static.spell.bardicinspiration.marker.${cleanData.marker.targetColor}`
    const selfMusicPath = cleanData.self.color === "random" ? `autoanimations.static.music.notes.01` : `autoanimations.static.music.notes.01.${cleanData.self.color}`
    const targetMusicPath = cleanData.target.color === "random" ? `autoanimations.static.music.notes.01` : `autoanimations.static.music.notes.01.${cleanData.target.color}`
    const selfBIPath = cleanData.self.color === "random" ? `autoanimations.static.spell.bardicinspiration.inspire` : `autoanimations.static.spell.bardicinspiration.inspire.${cleanData.self.color}`
    const targetBIPath = cleanData.target.color === "random" ? `autoanimations.static.spell.bardicinspiration.inspire` : `autoanimations.static.spell.bardicinspiration.inspire.${cleanData.target.color}`

    let aaSeq = await new Sequence("Automated Animations")

    // Play Macro if Awaiting
    if (data.playMacro && data.macro.playWhen === "1") {
        let userData = data.macro.args;
        aaSeq.macro(data.macro.name, handler.workflow, handler, [...userData])
    }
    // Extra Effects => Source Token if active
    if (sourceFX.enabled) {
        aaSeq.addSequence(sourceFX.sourceSeq)
    }
    // Animation Start Hook
    aaSeq.thenDo(function () {
        Hooks.callAll("aa.animationStart", sourceToken, handler.allTargets)
    })
    if (cleanData.self.enable) {
        const sourceTokenGS = (sourceToken.w / canvas.grid.size) * 1.75 * data.scale;
        let selfEffect = aaSeq.effect()
        if (cleanData.self.animation === 'notes') {
            selfEffect.atLocation(sourceToken, {randomOffset: true})
            selfEffect.file(selfMusicPath)
            selfEffect.size((sourceToken.w / canvas.grid.size), { gridUnits: true })
            selfEffect.repeats(10, 350)
        } else {
            selfEffect.atLocation(sourceToken)
            selfEffect.file(selfBIPath)
            selfEffect.size(sourceTokenGS, { gridUnits: true })
        }
        if (cleanData.marker.enable) {
            aaSeq.effect()
                .file(selfMarkerPath)
                .fadeIn(500)
                .fadeOut(500)
                .atLocation(sourceToken)
                .size(sourceTokenGS, { gridUnits: true })
                .belowTokens(true)
        }
    }
    let targetSound = false;
    if (cleanData.target.enable && handler.allTargets.length > 0) {
        for (let target of handler.allTargets) {
            let targetTokenGS = (target.w / canvas.grid.size) * 1.75 * cleanData.scale
            let targetEffect = aaSeq.effect()
            if (cleanData.target.animation === 'notes') {
                targetEffect.atLocation(target, {randomOffset: true})
                targetEffect.file(targetMusicPath)
                targetEffect.size((target.w / canvas.grid.size), { gridUnits: true })
                targetEffect.repeats(10, 350)
            } else {
                targetEffect.atLocation(target)
                targetEffect.file(targetBIPath)
                targetEffect.size(targetTokenGS, { gridUnits: true })
            }
            if (cleanData.marker.enable) {
                aaSeq.effect()
                    .file(targetMarkerPath)
                    .fadeIn(500)
                    .fadeOut(500)
                    .atLocation(target)
                    .size(targetTokenGS, { gridUnits: true })
                    .belowTokens(true)
            }
            if (targetFX.enabled) {
                let targetSequence = AAAnimationData._targetSequence(targetFX, target, handler);
                aaSeq.addSequence(targetSequence.targetSeq)
                targetSound = true;
            }
        }
    }
    aaSeq.addSequence(await AAAnimationData._sounds({ animationData, targetSound }))
    // Macro if Concurrent
    if (data.playMacro && data.macro.playWhen === "0") {
        let userData = data.macro.args;
        new Sequence()
            .macro(data.macro.name, handler.workflow, handler, [...userData])
            .play()
    }
    aaSeq.play()
    // Animation End Hook
    Hooks.callAll("aa.animationEnd", sourceToken, handler.allTargets)
}
