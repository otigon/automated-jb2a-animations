import { aaReturnWeapons } from "../../database/jb2a-menu-options.js";

const wait = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

export async function range(handler, animationData) {

    const data = animationData.primary;
    const secondary = animationData.secondary;
    const sourceFX = animationData.sourceFX;
    const targetFX = animationData.targetFX;
    const macro = animationData.macro;
    const sourceToken = handler.sourceToken;
    const onlyX = data.enableCustom ? data.onlyX : false;
    const switchReturn = aaReturnWeapons.includes(data.video.animation) && !data.video.enableCustom ? data.options.isReturning : false;

    let returnDelay;
    switch (true) {
        case data.video.animation.includes('dagger'):
        case data.video.animation.includes('hammer'):
            returnDelay = 1000;
            break;
        default:
            returnDelay = 1500;
    }

    let aaSeq = await new Sequence(handler.sequenceData)

    // Play Macro if Awaiting
    if (macro && macro.playWhen === "1") {
        handler.complileMacroSection(aaSeq, macro)
    }
    // Extra Effects => Source Token if active
    if (sourceFX) {
        handler.compileSourceEffect(sourceFX, aaSeq)
    }
    // Primary Sound
    if (data.sound) {
        aaSeq.addSequence(data.sound)
    }
    // Animation Start Hook
    aaSeq.thenDo(function () {
        Hooks.callAll("aa.animationStart", sourceToken, handler.allTargets)
    })
    // Primary Animation
    for (let i = 0; i < handler.allTargets.length; i++) {
        let currentTarget = handler.allTargets[i]
        let hit;

        if (handler.playOnMiss) {
            hit = handler.hitTargetsId.includes(currentTarget.id) ? true : false;
        } else {
            hit = true;
        }
        let nextSeq = aaSeq.effect()
        nextSeq.file(data.path.file)
        if (data.options.animationSource) {
            nextSeq.atLocation({ x: data.options.fakeLocation.x, y: data.options.fakeLocation.y })
        } else {
            if (data.options.reverse) {
                nextSeq.atLocation(currentTarget)
            } else {
                nextSeq.atLocation(sourceToken)
            }
        }
        if (data.options.reverse) {
            nextSeq.stretchTo(sourceToken, { onlyX: onlyX, randomOffset: data.options.randomOffset })
        } else {
            nextSeq.stretchTo(currentTarget, { onlyX: onlyX, randomOffset: data.options.randomOffset })
        }
        nextSeq.randomizeMirrorY()
        nextSeq.repeats(data.options.repeat, data.options.repeatDelay)
        nextSeq.opacity(data.options.opacity)
        nextSeq.missed(!hit || handler.systemData.forceMiss || false)
        nextSeq.name("spot" + ` ${currentTarget.id}`)
        if (data.options.elevation === 0) {
            nextSeq.belowTokens(true)
        } else {
            nextSeq.elevation(handler.elevation(sourceToken, data.options.isAbsolute, data.options.elevation), { absolute: data.options.isAbsolute })
        }
        nextSeq.zIndex(data.options.zIndex)
        if (data.options.tint) {
            nextSeq.tint(data.options.tintColor)
            nextSeq.filter("ColorMatrix", { contrast: data.options.contrast, saturate: data.options.saturation })
        }
        if (i === handler.allTargets.length - 1 && data.options.isWait) {
            nextSeq.waitUntilFinished(data.options.delay)
        } else if (!data.options.isWait) {
            nextSeq.delay(data.options.delay)
        }
        nextSeq.playbackRate(data.options.playbackRate)
    }

    // Return Animation if Enabled
    if (switchReturn) {
        for (let i = 0; i < handler.allTargets.length; i++) {
            let currentTarget = handler.allTargets[i]

            let returnSeq = aaSeq.effect()
            returnSeq.file(data.path.returnFile)
            returnSeq.opacity(data.options.opacity)
            returnSeq.atLocation(sourceToken)
            returnSeq.repeats(data.options.repeat, data.options.repeatDelay)
            returnSeq.stretchTo("spot" + ` ${currentTarget.id}`)
            returnSeq.zIndex(data.options.zIndex)
            returnSeq.playbackRate(data.options.playbackRate)
            if (data.options.tint) {
                returnSeq.tint(data.options.tintColor)
                returnSeq.filter("ColorMatrix", { contrast: data.options.contrast, saturate: data.options.saturation })
            }
        }
    }

    // secondary animation and sound
    if (secondary) {
        handler.compileSecondaryEffect(secondary, aaSeq, handler.allTargets, targetFX.enable, true)
    }
    if (targetFX) {
        handler.compileTargetEffect(targetFX, aaSeq, handler.allTargets, true)
    }

    // Macro if Concurrent
    if (macro && macro.playWhen === "0") {
        handler.runMacro(macro)
    }

    // Macro if Awaiting Animation. This will respect the Delay/Wait options in the Animation chains
    if (macro && macro.playWhen === "3") {
        handler.complileMacroSection(aaSeq, macro)
    }

    aaSeq.play()
    await wait(handler.animEnd)

    // Animation End Hook
    Hooks.callAll("aa.animationEnd", sourceToken, handler.allTargets)
}
