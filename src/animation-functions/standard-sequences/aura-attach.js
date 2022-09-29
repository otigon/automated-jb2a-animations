import { howToDelete } from "../../constants/constants.js";

export async function aura(handler, animationData) {

    const data = animationData.primary;
    const secondary = animationData.secondary;
    const sourceFX = animationData.sourceFX;
    const targetFX = animationData.targetFX;
    const macro = animationData.macro;
    const easeArray = ['easeInOutCubic', 'easeInOutQuart', 'easeInQuad', 'easeInOutQuad', 'easeInCirc']
    const sourceToken = handler.sourceToken;
    //const aura = await buildFile(false, data.video.menuType, data.video.animation, "static", data.video.variant, data.video.color, data.video.customPath);
    console.log(data)
    let aaSeq = new Sequence("Automated Animations")
    // Play Macro if Awaiting
    if (macro && macro.playWhen === "1") {
        let userData = macro.args;
        aaSeq.macro(macro.name, handler.workflow, handler, userData)
    }
    // Extra Effects => Source Token if active
    if (sourceFX.enable) {
        aaSeq.addSequence(sourceFX.sourceSeq)
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
            if (secondary.sound) {
                aaSeq.addSequence(secondary.sound)
            }
            let secondarySeq = aaSeq.effect()
            setSecondary(sourceToken, secondarySeq)
            secondarySeq.delay(secondary.options.delay)
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
            if (secondary.sound) {
                aaSeq.addSequence(secondary.sound)
            }
            for (let i = 0; i < newTargetArray.length; i++) {
                let currentTarget = newTargetArray[i]
                let secondarySeq = aaSeq.effect()
                setSecondary(currentTarget, secondarySeq)

                if (i === newTargetArray.length - 1 && secondary.options.isWait && targetFX.enable) {
                    secondarySeq.waitUntilFinished(secondary.options.delay)
                } else if (!secondary.options.isWait) {
                    secondarySeq.delay(secondary.options.delay)
                }
            }
        }

        if (targetFX.enable) {
            if (targetFX.sound) {
                aaSeq.addSequence(targetFX.sound)
            }
            for (let currentTarget of newTargetArray) {
                let targetSequence = handler.buildTargetSeq(targetFX, currentTarget);
                aaSeq.addSequence(targetSequence.targetSeq)
            }
        }
    }

    if (data.options.playOn === "both") {
        const sourceCheckAnim = Sequencer.EffectManager.getEffects({ object: sourceToken, origin: handler.itemUuid }).length > 0;
        let newTargetArray = [];
        for (let target of handler.allTargets) {
            let checkAnim = Sequencer.EffectManager.getEffects({ object: target, origin: handler.itemUuid }).length > 0;
            if (!checkAnim) { newTargetArray.push(target) }
        }
        if (sourceCheckAnim && newTargetArray.length < 1) { return; 
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
        if (secondary && secondary.sound) {
            aaSeq.addSequence(secondary.sound)
        }

        if (secondary && !sourceCheckAnim) {
            let sourceSecondarySeq = aaSeq.effect()
            setSecondary(sourceToken, sourceSecondarySeq)

            if (newTargetArray.length < 1 && secondary.options.isWait) {
                sourceSecondarySeq.waitUntilFinished(secondary.options.delay)
            } else if (!secondary.options.isWait) {
                sourceSecondarySeq.delay(secondary.options.delay)
            }
        }

        if (newTargetArray.length > 0) {
            if (secondary && newTargetArray.length > 0) {
                for (let i = 0; i < newTargetArray.length; i++) {
                    let currentTarget = newTargetArray[i];
                    let secondarySeq = aaSeq.effect()
                    setSecondary(currentTarget, secondarySeq)

                    if (i === newTargetArray.length - 1 && secondary.options.isWait && targetFX.enable) {
                        secondarySeq.waitUntilFinished(secondary.options.delay)
                    } else if (!secondary.options.isWait) {
                        secondarySeq.delay(secondary.options.delay)
                    }
                }
            }

            if (targetFX.enable && newTargetArray.length > 0) {
                if (targetFX.sound) {
                    aaSeq.addSequence(targetFX.sound)
                }
                for (let currentTarget of newTargetArray) {
                    let targetSequence = handler.buildTargetSeq(targetFX, currentTarget);
                    aaSeq.addSequence(targetSequence.targetSeq)
                }
            }
        }
    }

    function randomEase() {
        return easeArray[Math.floor(Math.random() * easeArray.length)]
    }

    function setPrimary(token, seq) {
        const size = handler.getSize(true, data.options.size, token, data.options.addTokenWidth)
        seq.file(data.path.file)
        seq.persist()
        seq.origin(handler.itemUuid)
        if (data.options.tint) {
            seq.tint(data.options.tintColor)
            seq.filter("ColorMatrix", {saturate: data.options.tintSaturate})
            //seq.filter("ColorMatrix", {tint: data.options.tintColor})
        }
        seq.size(size, { gridUnits: true })
        seq.elevation(data.options.elevation)
        seq.attachTo(token, { bindAlpha: data.options.unbindAlpha, bindVisibility: data.options.unbindVisibility })
        seq.opacity(data.options.opacity)
        seq.fadeIn(data.options.fadeIn)
        seq.fadeOut(data.options.fadeOut)
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
    }

    function setSecondary(token, seq) {
        let size = handler.getSize(secondary.options.isRadius, secondary.options.size, token, secondary.options.addTokenWidth)

        seq.atLocation(token)
        seq.file(secondary.path?.file, true)
        seq.size(size, { gridUnits: true })
        seq.elevation(secondary.options.elevation)
        seq.zIndex(secondary.options.zIndex)
        seq.opacity(secondary.options.opacity)
        seq.fadeIn(secondary.options.fadeIn)
        seq.fadeOut(secondary.options.fadeOut)
        if (secondary.options.isMasked) {
            seq.mask(token)
        }
    }

    // Macro if Concurrent
    if (macro && macro.playWhen === "0") {
        let userData = macro.args;
        new Sequence()
            .macro(macro.name, handler.workflow, handler, userData)
            .play()
    }

    aaSeq.play()

    howToDelete("sequencerground")

}