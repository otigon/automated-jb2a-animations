import { howToDelete } from "../../constants/constants.js";

export async function aura(handler, animationData) {

    const data = animationData.primary;
    const secondary = animationData.secondary;
    const sourceFX = animationData.sourceFX;
    const targetFX = animationData.targetFX;
    const macro = animationData.macro;
    const easeArray = ['easeInOutCubic', 'easeInOutQuart', 'easeInQuad', 'easeInOutQuad', 'easeInCirc']
    const sourceToken = handler.sourceToken;

    let newTargetArray = [];
    for (let target of handler.allTargets) {
        let checkAnim = Sequencer.EffectManager.getEffects({ object: target, origin: handler.itemUuid }).length > 0;
        if (!checkAnim) { newTargetArray.push(target) }
    }

    let aaSeq = new Sequence(handler.sequenceData)
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
        Hooks.callAll("aa.animationStart", handler)
    })

    if (data.options.playOn === "source" || (data.options.playOn === "default" && handler.allTargets.length < 1)) {
        const sourceCheckAnim = Sequencer.EffectManager.getEffects({ object: sourceToken, origin: handler.itemUuid }).length > 0;
        if (sourceCheckAnim) { return; }

        let aaEffect = aaSeq.effect();
        if (handler.isActiveEffect) {
            aaEffect.name(handler.itemName + `${sourceToken.id}`)
        } else {
            aaEffect.name("spot" + ` ${sourceToken.id}`)
        }
        setPrimary(sourceToken, aaEffect)
        if (data.options.isWait) {
            aaEffect.waitUntilFinished(data.options.delay)
        }

        if (secondary) {
            handler.compileSecondaryEffect(secondary, aaSeq, [sourceToken], false, false)
        }
    }

    if ((data.options.playOn === 'target' || data.options.playOn === 'default') && handler.allTargets.length > 0) {

        let newTargetArray = [];
        for (let target of handler.allTargets) {
            let checkAnim = Sequencer.EffectManager.getEffects({ object: target, origin: handler.itemUuid }).length > 0;
            if (!checkAnim) { newTargetArray.push(target) }
        }
        if (newTargetArray.length < 1) { return; }

        for (let i = 0; i < newTargetArray.length; i++) {
            let currentTarget = newTargetArray[i]

            let aaEffect = aaSeq.effect();
            setPrimary(currentTarget, aaEffect)

            if (i === newTargetArray.length - 1 && data.options.isWait) {
                aaEffect.waitUntilFinished(data.options.delay)
            } else if (!data.options.isWait) {
                aaEffect.delay(data.options.delay)
            }
        }
        if (secondary) {
            handler.compileSecondaryEffect(secondary, aaSeq, newTargetArray, targetFX.enable, false)
        }
        if (targetFX) {
            handler.compileTargetEffect(targetFX, aaSeq, newTargetArray, false)
        }
    }

    if (data.options.playOn === "both") {
        const sourceCheckAnim = Sequencer.EffectManager.getEffects({ object: sourceToken, origin: handler.itemUuid }).length > 0;
        let newTargetArray = [];
        for (let target of handler.allTargets) {
            let checkAnim = Sequencer.EffectManager.getEffects({ object: target, origin: handler.itemUuid }).length > 0;
            if (!checkAnim) { newTargetArray.push(target) }
        }
        if (sourceCheckAnim && newTargetArray.length < 1) {
            return;
        }
        if (!sourceCheckAnim) {
            let aaEffect = aaSeq.effect();
            setPrimary(sourceToken, aaEffect)

            if (handler.allTargets.length < 1 && data.options.isWait) {
                aaEffect.waitUntilFinished(data.options.delay)
            } else if (!data.options.isWait) {
                aaEffect.delay(data.options.delay)
            }
        }

        if (newTargetArray.length > 0) {
            for (let i = 0; i < newTargetArray.length; i++) {
                let currentTarget = newTargetArray[i]

                let aaEffect = aaSeq.effect();
                setPrimary(currentTarget, aaEffect)

                if (i === newTargetArray.length - 1 && data.options.isWait) {
                    aaEffect.waitUntilFinished(data.options.delay)
                } else if (!data.options.isWait) {
                    aaEffect.delay(data.options.delay)
                }
            }
        }

        if (secondary) {
            handler.compileSecondaryEffect(secondary, aaSeq, [sourceToken], false, false)
        }
        if (newTargetArray.length > 0) {
            if (secondary) {
                handler.compileSecondaryEffect(secondary, aaSeq, newTargetArray, targetFX.enable, false)
            }
            if (targetFX) {
                handler.compileTargetEffect(targetFX, aaSeq, newTargetArray, false)
            }
        }
    }

    function randomEase() {
        return easeArray[Math.floor(Math.random() * easeArray.length)]
    }

    function setPrimary(token, seq) {
        const size = handler.getSize(true, data.options.size, token, data.options.addTokenWidth)
        seq.file(data.path.file)
        seq.persist(true, { persistTokenPrototype: true })
        seq.origin(handler.itemUuid)
        if (data.options.tint) {
            seq.tint(data.options.tintColor)
            seq.filter("ColorMatrix", { saturate: data.options.tintSaturate })
            //seq.filter("ColorMatrix", {tint: data.options.tintColor})
        }
        seq.size(size, { gridUnits: true })
        if (data.options.elevation === 0) {
            seq.belowTokens(true)
        } else {
            seq.elevation(handler.elevation(token, data.options.isAbsolute, data.options.elevation), { absolute: data.options.isAbsolute })
        }
        seq.attachTo(token, { bindAlpha: data.options.unbindAlpha, bindVisibility: data.options.unbindVisibility })
        seq.opacity(data.options.opacity)
        seq.fadeIn(data.options.fadeIn)
        if (data.video.variant === "complete" || data.video.animation === "complete") { }
        else {
            seq.fadeOut(data.options.fadeOut)
        }
        seq.zIndex(data.options.zIndex)
        /*
        if (data.options.easeIn) {
            seq.animateProperty("sprite", "width", { from: 0, to: size, duration: 750, ease: data.options.ease, gridUnits: true })
            seq.animateProperty("sprite", "height", { from: 0, to: size, duration: 750, ease: data.options.ease, gridUnits: true })
        }
        */
        if (data.options.breath) {
            seq.loopProperty("sprite", "scale.x", { from: data.options.breathMin, to: data.options.breathMax, duration: data.options.breathDuration, pingPong: true, ease: 'easeInOutSine', gridUnits: true })
            seq.loopProperty("sprite", "scale.y", { from: data.options.breathMin, to: data.options.breathMax, duration: data.options.breathDuration, pingPong: true, ease: 'easeInOutSine', gridUnits: true })
        }
        if (data.options.alpha) {
            seq.loopProperty("alphaFilter", "alpha", { from: data.options.alphaMin, to: data.options.alphaMax, duration: data.options.alphaDuration, pingPong: true })
        }
        seq.playbackRate(data.options.playbackRate)
        if (handler.systemData.tieToDocuments) {
            seq.tieToDocuments(handler.item)
        }
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

    howToDelete("sequencerground")

}