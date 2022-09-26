import { howToDelete } from "../../constants/constants.js";
import { buildTargetSeq } from "../buildTargetSeq.js";

export async function aura(handler, animationData) {

    const data = animationData.primary;
    const secondary = animationData.secondary;
    const sourceFX = animationData.sourceFX;
    const targetFX = animationData.targetFX;
    const macro = animationData.macro;
    const easeArray = ['easeInOutCubic', 'easeInOutQuart', 'easeInQuad', 'easeInOutQuad', 'easeInCirc']
    const sourceToken = handler.sourceToken;
    //const aura = await buildFile(false, data.video.menuType, data.video.animation, "static", data.video.variant, data.video.color, data.video.customPath);
    
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
        if ((data.options.persistent && !sourceCheckAnim) || !data.options.persistent) {
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
        for (let i = 0; i < handler.allTargets.length; i++) {
            let currentTarget = handler.allTargets[i]
            //let targetTokenGS = data.options.isRadius ? data.options.size : (currentTarget.w / canvas.grid.size) * 1.5 * data.options.size;
            let checkAnim = Sequencer.EffectManager.getEffects({ object: currentTarget, origin: handler.itemUuid }).length > 0

            if ((data.options.persistent && !checkAnim) || !data.options.persistent) {
                let aaEffect = aaSeq.effect();
                setPrimary(currentTarget, aaEffect)

                if (i === handler.allTargets.length - 1 && data.options.isWait) {
                    aaEffect.waitUntilFinished(data.options.delay)
                } else if (!data.options.isWait) {
                    aaEffect.delay(data.options.delay)
                }
            }
        }

        if (secondary) {
            if (secondary.sound) {
                aaSeq.addSequence(secondary.sound)
            }
            for (let i = 0; i < handler.allTargets.length; i++) {
                let currentTarget = handler.allTargets[i]
                let secondarySeq = aaSeq.effect()
                setSecondary(currentTarget, secondarySeq)

                if (i === handler.allTargets.length - 1 && secondary.options.isWait && targetFX.enable) {
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
            for (let currentTarget of handler.allTargets) {
                let targetSequence = buildTargetSeq(targetFX, currentTarget, handler);
                aaSeq.addSequence(targetSequence.targetSeq)
            }
        }
    }

    if (data.options.playOn === "both") {
        const sourceCheckAnim = Sequencer.EffectManager.getEffects({ object: sourceToken, origin: handler.itemUuid }).length > 0
        if ((data.options.persistent && !sourceCheckAnim) || !data.options.persistent) {
            let aaEffect = aaSeq.effect();
            setPrimary(sourceToken, aaEffect)

            if (handler.allTargets.length < 1 && data.options.isWait) {
                aaEffect.waitUntilFinished(data.options.delay)
            } else if (!data.options.isWait) {
                aaEffect.delay(data.options.delay)
            }
        }

        for (let i = 0; i < handler.allTargets.length; i++) {
            let currentTarget = handler.allTargets[i]

            let checkAnim = Sequencer.EffectManager.getEffects({ object: currentTarget, origin: handler.itemUuid }).length > 0;

            if ((data.options.persistent && !checkAnim) || !data.options.persistent) {
                let aaEffect = aaSeq.effect();
                setPrimary(currentTarget, aaEffect)

                if (i === handler.allTargets.length - 1 && data.options.isWait) {
                    aaEffect.waitUntilFinished(data.options.delay)
                } else if (!data.options.isWait) {
                    aaEffect.delay(data.options.delay)
                }
            }
        }

        if (secondary && handler.allTargets.length > 0) {
            if (secondary.sound) {
                aaSeq.addSequence(secondary.sound)
            }
            for (let i = 0; i < handler.allTargets.length; i++) {
                let currentTarget = handler.allTargets[i];
                let secondarySeq = aaSeq.effect()
                setSecondary(currentTarget, secondarySeq)

                if (i === handler.allTargets.length - 1 && secondary.options.isWait && targetFX.enable) {
                    secondarySeq.waitUntilFinished(secondary.options.delay)
                } else if (!secondary.options.isWait) {
                    secondarySeq.delay(secondary.options.delay)
                }
            }
        }

        if (targetFX.enable && handler.allTargets.length > 0) {
            if (targetFX.sound) {
                aaSeq.addSequence(targetFX.sound)
            }
            for (let currentTarget of handler.allTargets) {
                let targetSequence = buildTargetSeq(targetFX, currentTarget, handler);
                aaSeq.addSequence(targetSequence.targetSeq)
            }
        }
    }

    function randomEase() {
        return easeArray[Math.floor(Math.random() * easeArray.length)]
    }

    function setPrimary(token, seq) {
        const size = handler.getSize(true, data.options.size, token, data.options.addTokenWidth)
        let easeIt = randomEase()
        seq.file(data.path.file)
        seq.persist()
        seq.origin(handler.itemUuid)
        //seq.size(size, { gridUnits: true })
        seq.elevation(data.options.elevation)
        seq.attachTo(token, { bindAlpha: data.options.unbindAlpha, bindVisibility: data.options.unbindVisibility })
        seq.opacity(data.options.opacity)
        seq.fadeIn(data.options.fadeIn)
        seq.fadeOut(data.options.fadeOut)
        seq.zIndex(data.options.zIndex)
        seq.animateProperty("sprite", "width", { from: 0, to: size, duration: 1000, ease: easeIt, gridUnits: true })
        seq.animateProperty("sprite", "height", { from: 0, to: size, duration: 1000, ease: easeIt, gridUnits: true })
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