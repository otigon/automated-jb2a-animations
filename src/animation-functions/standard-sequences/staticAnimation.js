//import { buildFile } from "../file-builder/build-filepath.js"
import { aaDebugger } from "../../constants/constants.js"
import { AAAnimationData } from "../../aa-classes/AAAnimationData.js";

const wait = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

export async function ontokenSeq(handler, animationData) {

    let globalDelay = game.settings.get("autoanimations", "globaldelay");
    await wait(globalDelay);
    const sourceToken = handler.sourceToken;

    const data = animationData.primary;
    const secondary = animationData.secondary;
    const sourceFX = animationData.sourceFX;
    const targetFX = animationData.targetFX;
    const macro = animationData.macro;

    //const onToken = await buildFile(false, data.video.menuType, data.video.animation, "static", data.video.variant, data.video.color, data.video.customPath);

    if (handler.debug) { aaDebugger("Static Animation Start", animationData) }

    if (handler.isActiveEffect) {
        //TO-DO: add AEDelay option on Active Effects
        //await wait(data.aeDelay)
    }
    let aaSeq = await new Sequence("Automated Animations")
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
    let sourceTokenGS = data.options.isRadius ? data.options.size * 2 : (sourceToken.w / canvas.grid.size) * 1.5 * data.options.size;
    //let secondarySound = false;
    if (data.options.playOn === "source" || data.options.playOn === "both" || (data.options.playOn === "default" && handler.allTargets.length < 1)) {
        const checkAnim = Sequencer.EffectManager.getEffects({ object: sourceToken, origin: handler.itemUuid }).length > 0
        const playPersist = (!checkAnim && data.options.persistent) ? true : false;
        if (data.options.isShieldFX) {
            let bottomEffect = aaSeq.effect();
            bottomEffect.file(bottomAnim)
            if (handler.isActiveEffect) {
                bottomEffect.name(handler.itemName + `${sourceToken.id}`)
            } else {
                bottomEffect.name("spot" + ` ${sourceToken.id}`)
            }
            bottomEffect.opacity(data.options.opacity)
            bottomEffect.size(sourceTokenGS, { gridUnits: true })
            bottomEffect.elevation(1000)
            if (data.options.isMasked) {
                bottomEffect.mask(sourceToken)
            }
            bottomEffect.rotate(180)
            bottomEffect.fadeIn(250)
            bottomEffect.fadeOut(500)
            if (!data.options.persistent) { bottomEffect.atLocation(sourceToken); bottomEffect.repeats(data.options.repeat, data.options.repeatDelay) }
            if (playPersist) { bottomEffect.attachTo(sourceToken, { bindAlpha: data.options.unbindAlpha, bindVisibility: data.options.unbindVisibility }); bottomEffect.persist(true); bottomEffect.origin(handler.itemUuid) }
            if (checkAnim) { bottomEffect.playIf(false); }

            let topEffect = aaSeq.effect();
            topEffect.file(data.path.fileData)
            if (handler.isActiveEffect) {
                topEffect.name(handler.itemName + `${sourceToken.id}`)
            } else {
                topEffect.name("spot" + ` ${sourceToken.id}`)
            }
            topEffect.opacity(data.options.opacity)
            topEffect.size(sourceTokenGS, { gridUnits: true })
            topEffect.elevation(0)
            if (data.options.isMasked) {
                topEffect.mask(sourceToken)
            }
            topEffect.fadeIn(250)
            topEffect.fadeOut(500)
            if (!data.options.persistent) { topEffect.atLocation(sourceToken); topEffect.repeats(data.options.repeat, data.options.repeatDelay) }
            if (playPersist) { topEffect.attachTo(sourceToken, { bindAlpha: data.options.unbindAlpha, bindVisibility: data.options.unbindVisibility }); topEffect.persist(true); topEffect.origin(handler.itemUuid) }
            if (checkAnim) { topEffect.playIf(false); }
            if (data.options.isWait) {
                topEffect.waitUntilFinished(data.options.wait)
            }
        } else {
            let aaEffect = aaSeq.effect();
            aaEffect.file(data.path.file)
            if (handler.isActiveEffect) {
                aaEffect.name(handler.itemName + `${sourceToken.id}`)
            } else {
                aaEffect.name("spot" + ` ${sourceToken.id}`)
            }
            aaEffect.opacity(data.options.opacity)
            aaEffect.size(sourceTokenGS, { gridUnits: true })
            aaEffect.elevation(data.options.elevation)
            if (data.options.isMasked) {
                aaEffect.mask(sourceToken)
            }
            aaEffect.fadeIn(250)
            aaEffect.fadeOut(500)
            aaEffect.zIndex(data.options.zIndex)
            if (!data.options.persistent) { aaEffect.atLocation(sourceToken); aaEffect.repeats(data.options.repeat, data.options.repeatDelay) }
            if (playPersist) { aaEffect.attachTo(sourceToken, { bindAlpha: data.options.unbindAlpha, bindVisibility: data.options.unbindVisibility }); aaEffect.persist(true); aaEffect.origin(handler.itemUuid) }
            if (checkAnim) { aaEffect.playIf(false); }
            if (data.options.isWait) {
                aaEffect.waitUntilFinished(data.options.wait)
            }
        }
        if (secondary) {
            let secondarySize = secondary.options.isRadius ? secondary.options.size * 2 : (sourceToken.w / canvas.grid.size) * 1.5 * secondary.options.size;
            if (secondary.sound) {
                aaSeq.addSequence(secondary.sound)
            }
            let secondarySeq = aaSeq.effect()
            secondarySeq.atLocation("spot" + ` ${sourceToken.id}`)
            secondarySeq.file(secondary.path?.file, true)
            secondarySeq.size(secondarySize, { gridUnits: true })
            secondarySeq.repeats(secondary.options.repeat, secondary.options.repeatDelay)
            if (secondary.options.isWait && targetFX.enable) {
                secondarySeq.waitUntilFinished(secondary.options.delay)
            } else if (!secondary.options.isWait) {
                secondarySeq.delay(secondary.options.delay)
            }
            secondarySeq.elevation(secondary.options.elevation)
            secondarySeq.zIndex(secondary.options.zIndex)
            secondarySeq.opacity(secondary.options.opacity)
            if (secondary.options.isMasked) {
                secondarySeq.mask(sourceToken)
            }
        }
    }
    //let targetSound = false;
    // Target Effect sections
    if ((data.options.playOn === 'target' || data.options.playOn === 'default' || data.options.playOn === 'both') && handler.allTargets.length > 0) {
        //for (var i = 0; i < handler.allTargets.length; i++) {
        //let target = handler.allTargets[i]
        for (let i = 0; i < handler.allTargets.length; i++) {
            //for (let currentTarget of handler.allTargets) {
            let currentTarget = handler.allTargets[i]
            //for (let target of handler.allTargets) {
            let targetTokenGS = data.options.isRadius ? data.options.size : (currentTarget.w / canvas.grid.size) * 1.5 * data.options.size;
            let checkAnim = Sequencer.EffectManager.getEffects({ object: currentTarget, origin: handler.itemUuid }).length > 0
            let hit;
            if (handler.playOnMiss) {
                hit = handler.hitTargetsId.includes(currentTarget.id) ? true : false;
            } else {
                hit = true;
            }
            //if (hit) { targetSound = true }
            if ((data.options.persistent && !checkAnim) || !data.options.persistent) {
                if (data.options.isShieldFX) {
                    let bottomEffect = aaSeq.effect();
                    bottomEffect.file(bottomAnim)
                    bottomEffect.name("spot" + ` ${currentTarget.id}`)
                    bottomEffect.opacity(data.options.opacity)
                    bottomEffect.size(targetTokenGS, { gridUnits: true })
                    bottomEffect.elevation(0)
                    if (data.options.isMasked) {
                        bottomEffect.mask(currentTarget)
                    }
                    bottomEffect.rotate(180)
                    bottomEffect.fadeIn(250)
                    bottomEffect.fadeOut(500)
                    if (!data.options.persistent) { bottomEffect.atLocation(currentTarget); bottomEffect.missed(!hit); bottomEffect.repeats(data.options.repeat, data.options.repeatDelay) }
                    else { bottomEffect.attachTo(currentTarget, { bindAlpha: data.options.unbindAlpha, bindVisibility: false }); bottomEffect.persist(true); bottomEffect.origin(handler.itemUuid) }

                    let topEffect = aaSeq.effect();
                    topEffect.file(data.path.fileData)
                    topEffect.name("spot" + ` ${currentTarget.id}`)
                    topEffect.opacity(data.options.opacity)
                    topEffect.size(targetTokenGS, { gridUnits: true })
                    topEffect.elevation(1000)
                    if (data.options.isMasked) {
                        topEffect.mask(currentTarget)
                    }
                    topEffect.fadeIn(250)
                    topEffect.fadeOut(500)
                    if (!data.options.persistent) { topEffect.atLocation(currentTarget); topEffect.missed(!hit); topEffect.repeats(data.options.repeat, data.options.repeatDelay) }
                    else { topEffect.attachTo(currentTarget, { bindAlpha: data.options.unbindAlpha, bindVisibility: false }); topEffect.persist(true); topEffect.origin(handler.itemUuid) }
                    if (i === handler.allTargets.length - 1 && data.options.isWait) {
                        topEffect.waitUntilFinished(data.options.delay)
                    } else if (!data.options.isWait) {
                        topEffect.delay(data.options.delay)
                    }
                } else {
                    let effectScale = data.video.animation === 'bite' || data.video.animation === 'claw' ? sourceTokenGS : targetTokenGS
                    //let scale = data.animation === "bite" || data.animation === "claw" ? (sourceToken.w / animWidth) * 1.5 : (target.w / animWidth) * 1.75
                    let aaEffect = aaSeq.effect();
                    aaEffect.file(data.path.file)
                    aaEffect.name("spot" + ` ${currentTarget.id}`)
                    aaEffect.opacity(data.options.opacity)
                    //aaEffect.scale(scale * data.scale)
                    aaEffect.size(effectScale, { gridUnits: true })
                    aaEffect.elevation(data.options.elevation)
                    if (data.options.isMasked) {
                        aaEffect.mask(currentTarget)
                    }
                    aaEffect.fadeIn(250)
                    aaEffect.fadeOut(500)
                    aaEffect.zIndex(data.options.zIndex)
                    if (!data.options.persistent) { aaEffect.atLocation(currentTarget); aaEffect.missed(!hit); aaEffect.repeats(data.options.repeat, data.options.repeatDelay) }
                    else { aaEffect.attachTo(currentTarget, { bindAlpha: data.options.unbindAlpha, bindVisibility: false }); aaEffect.persist(true); aaEffect.origin(handler.itemUuid) }
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
            //for (let currentTarget of handler.allTargets) {
                let currentTarget = handler.allTargets[i]
                let hit;
                if (handler.playOnMiss) {
                    hit = handler.hitTargetsId.includes(currentTarget.id) ? true : false;
                } else {
                    hit = true;
                }
                let secondarySeq = aaSeq.effect()
                secondarySeq.atLocation("spot" + ` ${currentTarget.id}`)
                secondarySeq.file(secondary.path?.file, true)
                secondarySeq.size(secondary.options.size * 2, { gridUnits: true })
                if (i === handler.allTargets.length - 1 && secondary.options.isWait && targetFX.enable) {
                    secondarySeq.waitUntilFinished(secondary.options.delay)
                } else if (!secondary.options.isWait) {
                    secondarySeq.delay(secondary.options.delay)
                }
                secondarySeq.elevation(secondary.options.elevation)
                secondarySeq.zIndex(secondary.options.zIndex)
                secondarySeq.opacity(secondary.options.opacity)
                if (secondary.options.isMasked) {
                    secondarySeq.mask(currentTarget)
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
                    let targetSequence = AAAnimationData._targetSequence(targetFX, currentTarget, handler);
                    aaSeq.addSequence(targetSequence.targetSeq)
                }
            }
        }
    }
    //aaSeq.addSequence(await AAAnimationData._sounds({ animationData, secondarySound: data.playOn !== "source" && secondarySound, targetSound }))
    // Macro if Concurrent
    if (macro && macro.playWhen === "0") {
        let userData = macro.args;
        new Sequence()
            .macro(macro.name, handler.workflow, handler, userData)
            .play()
    }
    aaSeq.play()
    Hooks.callAll("aa.animationEnd", sourceToken, handler.allTargets)
    if (data.persistent) { AAAnimationData.howToDelete("sequencerground") }
}
