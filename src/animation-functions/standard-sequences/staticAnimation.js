import { howToDelete } from "../../constants/constants.js";

export async function ontoken(handler, animationData) {

    const sourceToken = handler.sourceToken;

    const data = animationData.primary;
    const secondary = animationData.secondary;
    const sourceFX = animationData.sourceFX;
    const targetFX = animationData.targetFX;
    const macro = animationData.macro;
    const sourceSize = handler.getSize(data.options.isRadius, data.options.size, sourceToken, data.options.addTokenWidth)

    const aaSeq = await new Sequence(handler.sequenceData)
    const bottomAnim = data.path.filePath?.replace('Above', 'Below')

    let newTargetArray = [];
    for (let target of handler.allTargets) {
        let checkAnim = Sequencer.EffectManager.getEffects({ object: target, origin: handler.itemUuid }).length > 0;
        if (!checkAnim) { newTargetArray.push(target) }
    }

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

    if (data.options.playOn === "source" || (data.options.playOn === "default" && handler.allTargets.length < 1)) {

        const sourceCheckAnim = Sequencer.EffectManager.getEffects({ object: sourceToken, origin: handler.itemUuid }).length > 0
        if (sourceCheckAnim) { return; }

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

        if (secondary) {
            handler.compileSecondaryEffect(secondary, aaSeq, [sourceToken], false, false)
        }
    }

    // Target Effect sections
    if ((data.options.playOn === 'target' || data.options.playOn === 'default') && handler.allTargets.length > 0) {

        if (newTargetArray.length < 1) { return; }

        for (let i = 0; i < newTargetArray.length; i++) {
            let currentTarget = newTargetArray[i]
            //let targetTokenGS = data.options.isRadius ? data.options.size : (currentTarget.w / canvas.grid.size) * 1.5 * data.options.size;
            let targetSize = handler.getSize(data.options.isRadius, data.options.size, currentTarget, data.options.addTokenWidth)
            let hit;

            if (handler.playOnMiss) {
                hit = handler.hitTargetsId.includes(currentTarget.id) ? true : false;
            } else {
                hit = true;
            }

            if (data.options.isShieldFX) {
                let bottomEffect = aaSeq.effect();
                bottomEffect.name("spot" + ` ${currentTarget.id}`)
                setBottom(currentTarget, targetSize, bottomEffect)

                let topEffect = aaSeq.effect();
                topEffect.name("spot" + ` ${currentTarget.id}`)
                setTop(currentTarget, targetSize, topEffect)

                if (i === newTargetArray.length - 1 && data.options.isWait) {
                    topEffect.waitUntilFinished(data.options.delay)
                } else if (!data.options.isWait) {
                    topEffect.delay(data.options.delay)
                }
            } else {
                let aaEffect = aaSeq.effect();
                aaEffect.name("spot" + ` ${currentTarget.id}`)
                setPrimary(currentTarget, targetSize, aaEffect)

                if (i === newTargetArray.length - 1 && data.options.isWait) {
                    aaEffect.waitUntilFinished(data.options.delay)
                } else if (!data.options.isWait) {
                    aaEffect.delay(data.options.delay)
                }
            }
        }

        if (secondary) {
            handler.compileSecondaryEffect(secondary, aaSeq, newTargetArray, targetFX.enable, true)
        }
        if (targetFX) {
            handler.compileTargetEffect(targetFX, aaSeq, handler.allTargets, true)
        }
    }

    if (data.options.playOn === "both") {

        const sourceCheckAnim = Sequencer.EffectManager.getEffects({ object: sourceToken, origin: handler.itemUuid }).length > 0
        let newTargetArray = [];
        for (let target of handler.allTargets) {
            let checkAnim = Sequencer.EffectManager.getEffects({ object: target, origin: handler.itemUuid }).length > 0;
            if (!checkAnim) { newTargetArray.push(target) }
        }
        if (sourceCheckAnim && newTargetArray.length < 1) {
            return;
        }
        if (!sourceCheckAnim) {
            if (data.options.isShieldFX) {
                let bottomEffect = aaSeq.effect();
                bottomEffect.name("spot" + ` ${sourceToken.id}`);
                setBottom(sourceToken, sourceSize, bottomEffect)

                let topEffect = aaSeq.effect();
                topEffect.name("spot" + ` ${sourceToken.id}`)
                setTop(sourceToken, sourceSize, topEffect)

                if (newTargetArray.length < 1 && data.options.isWait) {
                    topEffect.waitUntilFinished(data.options.delay)
                } else if (!data.options.isWait) {
                    topEffect.delay(data.options.delay)
                }
            } else {
                let aaEffect = aaSeq.effect();
                aaEffect.name("spot" + ` ${sourceToken.id}`)
                setPrimary(sourceToken, sourceSize, aaEffect)

                if (newTargetArray.length < 1 && data.options.isWait) {
                    aaEffect.waitUntilFinished(data.options.delay)
                } else if (!data.options.isWait) {
                    aaEffect.delay(data.options.delay)
                }
            }
        }

        if (newTargetArray.length) {
            for (let i = 0; i < newTargetArray.length; i++) {
                let currentTarget = newTargetArray[i]
                let targetSize = handler.getSize(data.options.isRadius, data.options.size, currentTarget, data.options.addTokenWidth);

                let hit;
                if (handler.playOnMiss) {
                    hit = handler.hitTargetsId.includes(currentTarget.id) ? true : false;
                } else {
                    hit = true;
                }

                if (data.options.isShieldFX) {
                    let bottomEffect = aaSeq.effect();
                    bottomEffect.name("spot" + ` ${currentTarget.id}`)
                    setBottom(currentTarget, targetSize, bottomEffect)

                    let topEffect = aaSeq.effect();
                    topEffect.name("spot" + ` ${currentTarget.id}`)
                    setTop(currentTarget, targetSize, topEffect)

                    if (i === newTargetArray.length - 1 && data.options.isWait) {
                        topEffect.waitUntilFinished(data.options.delay)
                    } else if (!data.options.isWait) {
                        topEffect.delay(data.options.delay)
                    }
                } else {
                    let aaEffect = aaSeq.effect();
                    aaEffect.name("spot" + ` ${currentTarget.id}`)
                    setPrimary(currentTarget, targetSize, aaEffect)

                    if (i === newTargetArray.length - 1 && data.options.isWait) {
                        aaEffect.waitUntilFinished(data.options.delay)
                    } else if (!data.options.isWait) {
                        aaEffect.delay(data.options.delay)
                    }
                }
            }
        }

        if (secondary && !sourceCheckAnim) {
            handler.compileSecondaryEffect(secondary, aaSeq, [sourceToken], false, false)
        }
        if (newTargetArray.length) {
            if (secondary) {
                handler.compileSecondaryEffect(secondary, aaSeq, newTargetArray, targetFX.enable, true)
            }
            if (targetFX) {
                handler.compileTargetEffect(targetFX, aaSeq, handler.allTargets, true)
            }
        }
    }

    function setBottom(token, size, seq) {
        seq.file(bottomAnim)
        seq.opacity(data.options.opacity)
        seq.size(size, { gridUnits: true })
        seq.elevation(token.document?.elevation - 1)
        if (data.options.isMasked) {
            bottomEffect.mask(token)
        }
        seq.rotate(180)
        seq.fadeIn(250)
        seq.fadeOut(500)
        if (data.options.tint) {
            seq.tint(data.options.tintColor)
            seq.filter("ColorMatrix", { contrast: data.options.contrast, saturate: data.options.saturation })
        }
        if (!data.options.persistent) {
            seq.atLocation(token)
            seq.repeats(data.options.repeat, data.options.repeatDelay)
        }
        if (data.options.persistent) {
            seq.attachTo(token, { bindAlpha: data.options.unbindAlpha, bindVisibility: data.options.unbindVisibility })
            seq.persist(true, { persistTokenPrototype: true })
            seq.origin(handler.itemUuid)
        }
        seq.playbackRate(data.options.playbackRate)
        if (handler.systemData.tieToDocuments) {
            seq.tieToDocuments(handler.item)
        }
    }
    function setTop(token, size, seq) {
        seq.file(data.path.filePath)
        seq.opacity(data.options.opacity)
        seq.size(size, { gridUnits: true })
        seq.elevation(token.document?.elevation)
        if (data.options.isMasked) {
            seq.mask(token)
        }
        seq.fadeIn(250)
        seq.fadeOut(500)
        if (data.options.tint) {
            seq.tint(data.options.tintColor)
            seq.filter("ColorMatrix", { contrast: data.options.contrast, saturate: data.options.saturation })
        }
        if (!data.options.persistent) {
            seq.atLocation(token)
            seq.repeats(data.options.repeat, data.options.repeatDelay)
        }
        if (data.options.persistent) {
            seq.attachTo(token, { bindAlpha: data.options.unbindAlpha, bindVisibility: data.options.unbindVisibility })
            seq.persist(true, { persistTokenPrototype: true })
            seq.origin(handler.itemUuid)
        }
        seq.playbackRate(data.options.playbackRate)
        if (handler.systemData.tieToDocuments) {
            seq.tieToDocuments(handler.item)
        }
    }
    function setPrimary(token, size, seq) {
        seq.file(data.path.file)
        seq.opacity(data.options.opacity)
        seq.size(size, { gridUnits: true })
        if (data.options.elevation === 0) {
            seq.belowTokens(true)
        } else {
            seq.elevation(handler.elevation(token, data.options.isAbsolute, data.options.elevation), { absolute: data.options.isAbsolute })
        }
        if (data.options.isMasked) {
            seq.mask(token)
        }
        seq.zIndex(data.options.zIndex)
        if (data.options.tint) {
            seq.tint(data.options.tintColor)
            seq.filter("ColorMatrix", { contrast: data.options.contrast, saturate: data.options.saturation })
        }
        if (!data.options.persistent) {
            seq.atLocation(token)
            seq.repeats(data.options.repeat, data.options.repeatDelay)
            seq.fadeIn(data.options.fadeIn)
            seq.fadeOut(data.options.fadeOut)
        }
        if (data.options.persistent) {
            seq.fadeIn(data.options.fadeIn)
            if (data.video.variant === "complete" || data.video.animation === "complete") { }
            else {
                seq.fadeOut(data.options.fadeOut)
            }
            seq.attachTo(token, { bindAlpha: data.options.unbindAlpha, bindVisibility: data.options.unbindVisibility })
            seq.persist(true, { persistTokenPrototype: true })
            seq.origin(handler.itemUuid)
        }
        seq.anchor({ x: data.options.anchor.x, y: data.options.anchor.y })
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

    Hooks.callAll("aa.animationEnd", sourceToken, handler.allTargets)
    if (data.options.persistent) { howToDelete("sequencerground") }
}
