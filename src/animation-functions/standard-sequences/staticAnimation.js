import { buildTargetSeq } from "../buildTargetSeq.js";
import { howToDelete } from "../../constants/constants.js";

export async function ontoken(handler, animationData) {

    const sourceToken = handler.sourceToken;

    const data = animationData.primary;
    const secondary = animationData.secondary;
    const sourceFX = animationData.sourceFX;
    const targetFX = animationData.targetFX;
    const macro = animationData.macro;
    const sourceSize = handler.getSize(data.options.isRadius, data.options.size, sourceToken, data.options.addTokenWidth)

    const aaSeq = await new Sequence("Automated Animations")
    const bottomAnim = data.path.fileData?.replace('Above', 'Below')

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
        Hooks.callAll("aa.animationStart", sourceToken, handler.allTargets)
    })

    if (data.options.playOn === "source" || (data.options.playOn === "default" && handler.allTargets.length < 1)) {

        const sourceCheckAnim = Sequencer.EffectManager.getEffects({ object: sourceToken, origin: handler.itemUuid }).length > 0
        //const playPersist = (!checkAnim && data.options.persistent) ? true : false;
        if ((data.options.persistent && !sourceCheckAnim) || !data.options.persistent) {
            //setPrimary(sourceToken, handler.isActiveEffect)
            if (data.options.isShieldFX) {
                let bottomEffect = aaSeq.effect();
                if (handler.isActiveEffect) {
                    bottomEffect.name(handler.itemName + `${sourceToken.id}`)
                } else {
                    bottomEffect.name("spot" + ` ${sourceToken.id}`)
                }
                setBottom(sourceToken, sourceSize, bottomEffect)
                let topEffect = aaSeq.effect();
                if (handler.isActiveEffect) {
                    topEffect.name(handler.itemName + `${sourceToken.id}`)
                } else {
                    topEffect.name("spot" + ` ${sourceToken.id}`)
                }
                setTop(sourceToken, sourceSize, topEffect)
                if (data.options.isWait) {
                    topEffect.waitUntilFinished(data.options.wait)
                }
            } else {
                let aaEffect = aaSeq.effect();
                if (handler.isActiveEffect) {
                    aaEffect.name(handler.itemName + `${sourceToken.id}`)
                } else {
                    aaEffect.name("spot" + ` ${sourceToken.id}`)
                }
                setPrimary(sourceToken, sourceSize, aaEffect)
                if (data.options.isWait) {
                    aaEffect.waitUntilFinished(data.options.delay)
                }
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

    // Target Effect sections
    if ((data.options.playOn === 'target' || data.options.playOn === 'default') && handler.allTargets.length > 0) {

        for (let i = 0; i < handler.allTargets.length; i++) {
            let currentTarget = handler.allTargets[i]
            //let targetTokenGS = data.options.isRadius ? data.options.size : (currentTarget.w / canvas.grid.size) * 1.5 * data.options.size;
            let targetSize = handler.getSize(data.options.isRadius, data.options.size, currentTarget, data.options.addTokenWidth)
            let checkAnim = Sequencer.EffectManager.getEffects({ object: currentTarget, origin: handler.itemUuid }).length > 0
            let hit;

            if (handler.playOnMiss) {
                hit = handler.hitTargetsId.includes(currentTarget.id) ? true : false;
            } else {
                hit = true;
            }

            if ((data.options.persistent && !checkAnim) || !data.options.persistent) {
                if (data.options.isShieldFX) {
                    let bottomEffect = aaSeq.effect();
                    bottomEffect.name("spot" + ` ${currentTarget.id}`)
                    setBottom(currentTarget, targetSize, bottomEffect)

                    let topEffect = aaSeq.effect();
                    topEffect.name("spot" + ` ${currentTarget.id}`)
                    setTop(currentTarget, targetSize, topEffect)

                    if (i === handler.allTargets.length - 1 && data.options.isWait) {
                        topEffect.waitUntilFinished(data.options.delay)
                    } else if (!data.options.isWait) {
                        topEffect.delay(data.options.delay)
                    }
                } else {
                    let aaEffect = aaSeq.effect();
                    aaEffect.name("spot" + ` ${currentTarget.id}`)
                    setPrimary(currentTarget, targetSize, aaEffect)

                    if (i === handler.allTargets.length - 1 && data.options.isWait) {
                        aaEffect.waitUntilFinished(data.options.delay)
                    } else if (!data.options.isWait) {
                        aaEffect.delay(data.options.delay)
                    }
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
                let hit;
                if (handler.playOnMiss) {
                    hit = handler.hitTargetsId.includes(currentTarget.id) ? true : false;
                } else {
                    hit = true;
                }
                if (hit) {
                    let targetSequence = buildTargetSeq(targetFX, currentTarget, handler);
                    aaSeq.addSequence(targetSequence.targetSeq)
                }
            }
        }
    }

    if (data.options.playOn === "both") {

        const sourceCheckAnim = Sequencer.EffectManager.getEffects({ object: sourceToken, origin: handler.itemUuid }).length > 0
        if ((data.options.persistent && !sourceCheckAnim) || !data.options.persistent) {
            if (data.options.isShieldFX) {
                let bottomEffect = aaSeq.effect();
                bottomEffect.name("spot" + ` ${sourceToken.id}`);
                setBottom(sourceToken, sourceSize, bottomEffect)

                let topEffect = aaSeq.effect();
                topEffect.name("spot" + ` ${sourceToken.id}`)
                setTop(sourceToken, sourceSize, topEffect)

                if (handler.allTargets.length < 1 && data.options.isWait) {
                    topEffect.waitUntilFinished(data.options.delay)
                } else if (!data.options.isWait) {
                    topEffect.delay(data.options.delay)
                }
            } else {
                let aaEffect = aaSeq.effect();
                aaEffect.name("spot" + ` ${sourceToken.id}`)
                setPrimary(sourceToken, sourceSize, aaEffect)

                if (handler.allTargets.length < 1 && data.options.isWait) {
                    aaEffect.waitUntilFinished(data.options.delay)
                } else if (!data.options.isWait) {
                    aaEffect.delay(data.options.delay)
                }
            }
        }

        for (let i = 0; i < handler.allTargets.length; i++) {
            let currentTarget = handler.allTargets[i]
            let targetSize = handler.getSize(data.options.isRadius, data.options.size, currentTarget, data.options.addTokenWidth);

            let checkAnim = Sequencer.EffectManager.getEffects({ object: currentTarget, origin: handler.itemUuid }).length > 0;

            let hit;
            if (handler.playOnMiss) {
                hit = handler.hitTargetsId.includes(currentTarget.id) ? true : false;
            } else {
                hit = true;
            }

            if ((data.options.persistent && !checkAnim) || !data.options.persistent) {
                if (data.options.isShieldFX) {
                    let bottomEffect = aaSeq.effect();
                    bottomEffect.name("spot" + ` ${currentTarget.id}`)
                    setBottom(currentTarget, targetSize, bottomEffect)

                    let topEffect = aaSeq.effect();
                    topEffect.name("spot" + ` ${currentTarget.id}`)
                    setTop(currentTarget, targetSize, topEffect)

                    if (i === handler.allTargets.length - 1 && data.options.isWait) {
                        topEffect.waitUntilFinished(data.options.delay)
                    } else if (!data.options.isWait) {
                        topEffect.delay(data.options.delay)
                    }
                } else {
                    let aaEffect = aaSeq.effect();
                    aaEffect.name("spot" + ` ${currentTarget.id}`)
                    setPrimary(currentTarget, targetSize, aaEffect)

                    if (i === handler.allTargets.length - 1 && data.options.isWait) {
                        aaEffect.waitUntilFinished(data.options.delay)
                    } else if (!data.options.isWait) {
                        aaEffect.delay(data.options.delay)
                    }
                }
            }
        }

        if (secondary && secondary.sound) {
            aaSeq.addSequence(secondary.sound)
        }

        if (secondary) {
            let sourceSecondarySeq = aaSeq.effect()
            setSecondary(sourceToken, sourceSecondarySeq)

            if (handler.allTargets.length < 1 && secondary.options.isWait && targetFX.enable) {
                sourceSecondarySeq.waitUntilFinished(secondary.options.delay)
            } else if (!secondary.options.isWait) {
                sourceSecondarySeq.delay(secondary.options.delay)
            }
        }

        if (secondary && handler.allTargets.length > 0) {
            //if (secondary.sound) {
                //aaSeq.addSequence(secondary.sound)
            //}
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
                let hit;
                if (handler.playOnMiss) {
                    hit = handler.hitTargetsId.includes(currentTarget.id) ? true : false;
                } else {
                    hit = true;
                }
                if (hit) {
                    let targetSequence = buildTargetSeq(targetFX, currentTarget, handler);
                    aaSeq.addSequence(targetSequence.targetSeq)
                }
            }
        }
    }  

    function setBottom(token, size, seq) {
        seq.file(bottomAnim)
        seq.opacity(data.options.opacity)
        seq.size(size, { gridUnits: true })
        seq.elevation(1000)
        if (data.options.isMasked) {
            bottomEffect.mask(token)
        }
        seq.rotate(180)
        seq.fadeIn(250)
        seq.fadeOut(500)
        if (!data.options.persistent) {
            seq.atLocation(token)
            seq.repeats(data.options.repeat, data.options.repeatDelay)
        }
        if (data.options.persistent) {
            seq.attachTo(token, { bindAlpha: data.options.unbindAlpha, bindVisibility: data.options.unbindVisibility })
            seq.persist(true)
            seq.origin(handler.itemUuid)
        }
    }
    function setTop(token, size, seq) {
        seq.file(data.path.fileData)
        seq.opacity(data.options.opacity)
        seq.size(size, { gridUnits: true })
        seq.elevation(0)
        if (data.options.isMasked) {
            seq.mask(token)
        }
        seq.fadeIn(250)
        seq.fadeOut(500)
        if (!data.options.persistent) {
            seq.atLocation(token)
            seq.repeats(data.options.repeat, data.options.repeatDelay)
        }
        if (data.options.persistent) {
            seq.attachTo(token, { bindAlpha: data.options.unbindAlpha, bindVisibility: data.options.unbindVisibility })
            seq.persist(true)
            seq.origin(handler.itemUuid)
        }
    }
    function setPrimary(token, size, seq) {
        seq.file(data.path.file)
        seq.opacity(data.options.opacity)
        seq.size(size, { gridUnits: true })
        seq.elevation(data.options.elevation)
        if (data.options.isMasked) {
            seq.mask(token)
        }
        seq.fadeIn(250)
        seq.fadeOut(500)
        seq.zIndex(data.options.zIndex)
        if (!data.options.persistent) {
            seq.atLocation(token)
            seq.repeats(data.options.repeat, data.options.repeatDelay)
        }
        if (data.options.persistent) {
            seq.attachTo(token, { bindAlpha: data.options.unbindAlpha, bindVisibility: data.options.unbindVisibility })
            seq.persist(true)
            seq.origin(handler.itemUuid)
        }
    }
    function setSecondary(token, seq) {
        let size = handler.getSize(secondary.options.isRadius, secondary.options.size, token, secondary.options.addTokenWidth)

        seq.atLocation("spot" + ` ${token.id}`)
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
    Hooks.callAll("aa.animationEnd", sourceToken, handler.allTargets)
    if (data.options.persistent) { howToDelete("sequencerground") }
}
