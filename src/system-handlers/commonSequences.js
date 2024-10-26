export function sourceEffect(sourceFX, seq, handler) {
    const options = sourceFX.options;
    if (sourceFX.sound) {
        seq.addSequence(sourceFX.sound)
    }
    let thisSeq = seq.effect()
        .file(sourceFX.path.file)
        .anchor({ x: options.anchor.x, y: options.anchor.y })
        .fadeIn(options.fadeIn)
        .opacity(options.opacity)
        .origin(handler.itemUuid)
        .playbackRate(options.playbackRate)
        .repeats(options.repeat, options.repeatDelay)
        .size(handler.getSize(options.isRadius, options.size, handler.sourceToken, options.addTokenWidth), { gridUnits: true })
        .zIndex(options.zIndex)

    if (options.elevation === 0) {
        thisSeq.belowTokens(true)
    } else {
        thisSeq.elevation(options.isAbsolute ? options.elevation : options.elevation - 1, { absolute: options.isAbsolute })
    }
    if (options.tint) {
        thisSeq.tint(options.tintColor)
        thisSeq.filter("ColorMatrix", { contrast: options.contrast, saturate: options.saturation })
    }
    if (options.animationSource) {
        thisSeq.atLocation({ x: options.fakeLocation.x, y: options.fakeLocation.y })
    } else {
        if (options.persistent) {
            thisSeq.attachTo(handler.sourceToken)
            thisSeq.persist(true, { persistTokenPrototype: true })
        } else {
            thisSeq.attachTo(handler.sourceToken)
        }
    }
    if (options.isMasked) {
        thisSeq.mask(handler.sourceToken)
    }
    if (handler.systemData.tieToDocuments) {
        thisSeq.tieToDocuments(handler.item)
    }
    if (sourceFX.video.variant === "complete" || sourceFX.video.animation === "complete") { }
    else { thisSeq.fadeOut(options.fadeOut) }
    if (options.isWait) { thisSeq.waitUntilFinished(options.delay) }
    else { thisSeq.delay(options.delay) }
}

export function secondaryEffect(secondary, seq, targetArray, targetEnabled = false, missable = false, handler) {
    const options = secondary.options;
    if (secondary.sound) {
        seq.addSequence(secondary.sound)
    }
    for (let i = 0; i < targetArray.length; i++) {
        let currentTarget = targetArray[i];

        let thisSeq = seq.effect()
            .file(secondary.path?.file)
            .anchor({ x: options.anchor.x, y: options.anchor.y })
            .atLocation(missable ? `spot ${currentTarget.id}` : currentTarget)
            .fadeIn(options.fadeIn)
            .fadeOut(options.fadeOut)
            .opacity(options.opacity)
            .origin(handler.itemUuid)
            .playbackRate(options.playbackRate)
            .repeats(options.repeat, options.repeatDelay)
            .size(handler.getSize(options.isRadius, options.size, currentTarget, options.addTokenWidth), { gridUnits: true })
            .zIndex(options.zIndex)

        if (options.elevation === 0) {
            thisSeq.belowTokens(true)
        } else {
            thisSeq.elevation(handler.elevation(currentTarget, options.isAbsolute, options.elevation), { absolute: options.isAbsolute })
        }
        if (options.tint) {
            thisSeq.tint(options.tintColor)
            thisSeq.filter("ColorMatrix", { contrast: options.contrast, saturate: options.saturation })
        }
        if (i === handler.allTargets.length - 1 && options.isWait && targetEnabled) {
            thisSeq.waitUntilFinished(options.delay)
        } else if (!options.isWait) {
            thisSeq.delay(options.delay)
        }
        if (options.rotateSource) {
            thisSeq.rotateTowards(handler.sourceToken)
            thisSeq.rotate(180)
        }
        if (options.isMasked) {
            thisSeq.mask(currentTarget)
        }
    }
}

export function targetEffect(targetFX, seq, targetArray, missable = false, handler) {
    const options = targetFX.options;
    if (targetFX.sound) {
        seq.addSequence(targetFX.sound)
    }
    for (let i = 0; i < targetArray.length; i++) {
        let currentTarget = targetArray[i];
        let checkAnim = Sequencer.EffectManager.getEffects({ object: currentTarget, origin: handler.itemUuid }).length > 0;
        if (checkAnim) { continue; }

        let thisSeq = seq.effect()
            .file(targetFX.path?.file)
            .anchor({ x: options.anchor.x, y: options.anchor.y })
            .delay(options.delay)
            .fadeIn(options.fadeIn)
            .opacity(options.opacity)
            .origin(handler.itemUuid)
            .playbackRate(options.playbackRate)
            .repeats(options.repeat, options.repeatDelay)
            .size(handler.getSize(options.isRadius, options.size, currentTarget, options.addTokenWidth), { gridUnits: true })
            .zIndex(options.zIndex)

        if (options.elevation === 0) {
            thisSeq.belowTokens(true)
        } else {
            thisSeq.elevation(handler.elevation(currentTarget, options.isAbsolute, options.elevation), { absolute: options.isAbsolute })
        }
        if (options.tint) {
            thisSeq.tint(options.tintColor)
            thisSeq.filter("ColorMatrix", { contrast: options.contrast, saturate: options.saturation })
        }
        if (options.persistent) {
            thisSeq.persist(true, { persistTokenPrototype: true })
            thisSeq.attachTo(currentTarget, { bindVisibility: !targetFX.unbindVisibility, bindAlpha: !targetFX.unbindAlpha })
        } else {
            thisSeq.atLocation(missable ? `spot ${currentTarget.id}` : currentTarget)
        }
        if (options.rotateSource) {
            thisSeq.rotateTowards(handler.sourceToken)
            thisSeq.rotate(180)
        }
        if (options.isMasked) {
            thisSeq.mask(currentTarget)
        }
        if (targetFX.video?.variant === "complete" || targetFX.video?.animation === "complete") { } else {
            thisSeq.fadeOut(options.fadeOut)
        }
    }
}

export function macroSection(seq, macro, handler) {
    let userData = macro.args
    if (foundry.utils.isNewerVersion(game.version, 11)) {
        seq.macro(macro.name, { args: [handler.workflow, handler, userData] })
    } else {
        if (game.modules.get("advanced-macros")?.active) {
            seq.macro(macro.name, handler.workflow, handler, userData)
        } else {
            seq.macro(macro.name)
        }
    }
}
