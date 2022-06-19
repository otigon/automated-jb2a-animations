import { buildFile } from "./file-builder/build-filepath.js"
import { aaDebugger } from "../constants/constants.js"
import { AAanimationData } from "../aa-classes/animation-data.js";

const wait = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

export async function staticAnimation(handler, animationData) {

    let globalDelay = game.settings.get("autoanimations", "globaldelay");
    await wait(globalDelay);
    const sourceToken = handler.sourceToken;

    const data = animationData.primary;
    const sourceFX = animationData.sourceFX;
    const targetFX = animationData.targetFX;

    const onToken = await buildFile(false, data.menuType, data.animation, "static", data.variant, data.color, data.customPath);

    if (handler.debug) { aaDebugger("Static Animation Start", animationData, onToken) }

    //const exScale = ((100 * handler.explosionRadius) / explosion?.metadata?.width) ?? 1;
    //const animWidth = onToken.metadata.width;
    if (handler.isActiveEffect) {
        await wait(data.aeDelay)
    }
    let aaSeq = await new Sequence("Automated Animations")
    const bottomAnim = onToken.fileData?.replace('Above', 'Below')

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
    let sourceTokenGS = sourceToken.w / canvas.grid.size;
    let explosionSound = false;
    if (data.staticType === "source" || data.staticType === "sourcetarget" || (data.staticType === "targetDefault" && handler.allTargets.length < 1)) {
        const checkAnim = Sequencer.EffectManager.getEffects({ object: sourceToken, origin: handler.itemUuid }).length > 0
        const playPersist = (!checkAnim && data.persistent) ? true : false;
        if (data.isShieldFX) {
            let bottomEffect = aaSeq.effect();
            bottomEffect.file(bottomAnim)
            if (handler.isActiveEffect) {
                bottomEffect.name(handler.itemName + `${sourceToken.id}`)
            } else {
                bottomEffect.name("spot" + ` ${sourceToken.id}`)
            }
            bottomEffect.opacity(data.opacity)
            bottomEffect.size(sourceTokenGS * 1.5 * data.scale, {gridUnits: true})
            bottomEffect.belowTokens(true)
            bottomEffect.rotate(180)
            bottomEffect.fadeIn(250)
            bottomEffect.fadeOut(500)
            if (!data.persistent) { bottomEffect.atLocation(sourceToken); bottomEffect.repeats(data.repeat, data.delay) }
            if (playPersist) { bottomEffect.attachTo(sourceToken, {bindAlpha: data.unbindAlpha, bindVisibility: data.unbindVisibility}); bottomEffect.persist(true); bottomEffect.origin(handler.itemUuid) }
            if (checkAnim) { bottomEffect.playIf(false); }

            let topEffect = aaSeq.effect();
            topEffect.file(onToken.fileData)
            if (handler.isActiveEffect) {
                topEffect.name(handler.itemName + `${sourceToken.id}`)
            } else {
                topEffect.name("spot" + ` ${sourceToken.id}`)
            }
            topEffect.opacity(data.opacity)
            topEffect.size(sourceTokenGS * 1.5 * data.scale, {gridUnits: true})
            topEffect.belowTokens(false)
            topEffect.fadeIn(250)
            topEffect.fadeOut(500)
            if (!data.persistent) { topEffect.atLocation(sourceToken); topEffect.repeats(data.repeat, data.delay) }
            if (playPersist) { topEffect.attachTo(sourceToken, {bindAlpha: data.unbindAlpha, bindVisibility: data.unbindVisibility}); topEffect.persist(true); topEffect.origin(handler.itemUuid) }
            if (checkAnim) { topEffect.playIf(false); }

        } else {
            let aaEffect = aaSeq.effect();
            aaEffect.file(onToken.file)
            if (handler.isActiveEffect) {
                aaEffect.name(handler.itemName + `${sourceToken.id}`)
            } else {
                aaEffect.name("spot" + ` ${sourceToken.id}`)
            }
            aaEffect.opacity(data.opacity)
            aaEffect.size(sourceTokenGS * 1.5 * data.scale, {gridUnits: true})
            aaEffect.belowTokens(data.below)
            aaEffect.fadeIn(250)
            aaEffect.fadeOut(500)
            if (!data.persistent) { aaEffect.atLocation(sourceToken); aaEffect.repeats(data.repeat, data.delay) }
            if (playPersist) { aaEffect.attachTo(sourceToken, {bindAlpha: data.unbindAlpha, bindVisibility: data.unbindVisibility}); aaEffect.persist(true); aaEffect.origin(handler.itemUuid) }
            if (checkAnim) { aaEffect.playIf(false); }

        }

        if (data.explosion.enabled) {
            aaSeq.effect()
                .atLocation("spot" + ` ${sourceToken.id}`)
                .file(data.explosion?.data?.file, true)
                //.scale({ x: data.explosion?.scale, y: data.explosion?.scale })
                .size(data.explosion?.radius * 2, {gridUnits: true})
                .delay(data.explosion?.delay)
                .repeats(data.repeat, data.delay)
                .belowTokens(data.explosion?.below)
                .fadeOut(500)
                .playIf(data.explosion?.enabled)
        }
        explosionSound = true;
    }
    let targetSound = false;
    // Target Effect sections
    if ((data.staticType === 'target' || data.staticType === 'targetDefault' || data.staticType === 'sourcetarget') && handler.allTargets.length > 0) {
        //for (var i = 0; i < handler.allTargets.length; i++) {
        //let target = handler.allTargets[i]
        for (let target of handler.allTargets) {
            let targetTokenGS = target.w / canvas.grid.size
            let checkAnim = Sequencer.EffectManager.getEffects({ object: target, origin: handler.itemUuid }).length > 0
            let hit;
            if (handler.playOnMiss) {
                hit = handler.hitTargetsId.includes(target.id) ? true : false;
            } else {
                hit = true;
            }
            if (hit) { targetSound = true }
            if ((data.persistent && !checkAnim) || !data.persistent) {
                if (data.isShieldFX) {
                    let bottomEffect = aaSeq.effect();
                    bottomEffect.file(bottomAnim)
                    bottomEffect.name("spot" + ` ${target.id}`)
                    bottomEffect.opacity(data.opacity)
                    bottomEffect.size(targetTokenGS * 1.5 * data.scale, {gridUnits: true})
                    bottomEffect.belowTokens(true)
                    bottomEffect.rotate(180)
                    bottomEffect.fadeIn(250)
                    bottomEffect.fadeOut(500)
                    if (!data.persistent) { bottomEffect.atLocation(target); bottomEffect.missed(!hit); bottomEffect.repeats(data.repeat, data.delay) }
                    else { bottomEffect.attachTo(target, {bindAlpha: data.unbindAlpha, bindVisibility: false}); bottomEffect.persist(true); bottomEffect.origin(handler.itemUuid) }

                    let topEffect = aaSeq.effect();
                    topEffect.file(onToken.fileData)
                    topEffect.name("spot" + ` ${target.id}`)
                    topEffect.opacity(data.opacity)
                    topEffect.size(targetTokenGS * 1.5 * data.scale, {gridUnits: true})
                    topEffect.belowTokens(false)
                    topEffect.fadeIn(250)
                    topEffect.fadeOut(500)
                    if (!data.persistent) { topEffect.atLocation(target); topEffect.missed(!hit); topEffect.repeats(data.repeat, data.delay) }
                    else { topEffect.attachTo(target, {bindAlpha: data.unbindAlpha, bindVisibility: false}); topEffect.persist(true); topEffect.origin(handler.itemUuid) }

                } else {
                    let effectScale = data.animation === 'bite' || data.animation === 'claw' ? sourceTokenGS : targetTokenGS
                    //let scale = data.animation === "bite" || data.animation === "claw" ? (sourceToken.w / animWidth) * 1.5 : (target.w / animWidth) * 1.75
                    let aaEffect = aaSeq.effect();
                    aaEffect.file(onToken.file)
                    aaEffect.name("spot" + ` ${target.id}`)
                    aaEffect.opacity(data.opacity)
                    //aaEffect.scale(scale * data.scale)
                    aaEffect.size(effectScale * 1.5 * data.scale, {gridUnits: true})
                    aaEffect.belowTokens(data.below)
                    aaEffect.fadeIn(250)
                    aaEffect.fadeOut(500)
                    if (!data.persistent) { aaEffect.atLocation(target); aaEffect.missed(!hit); aaEffect.repeats(data.repeat, data.delay) }
                    else { aaEffect.attachTo(target, {bindAlpha: data.unbindAlpha, bindVisibility: false}); aaEffect.persist(true); aaEffect.origin(handler.itemUuid) }
                }

                if (data.explosion.enabled) {
                    aaSeq.effect()
                        .atLocation("spot" + ` ${target.id}`)
                        .file(data.explosion?.data?.file, true)
                        //.scale({ x: data.explosion?.scale, y: data.explosion?.scale })
                        .size(data.explosion?.radius * 2, {gridUnits: true})
                        .delay(data.explosion?.delay)
                        .repeats(data.repeat, data.delay)
                        .belowTokens(data.explosion?.below)
                        .playIf(data.explosion?.enabled)
                }
                explosionSound = true;
            }
            if (targetFX.enabled && hit) {
                let targetSequence = AAanimationData._targetSequence(targetFX, target, handler);
                aaSeq.addSequence(targetSequence.targetSeq)
            }
        }
    }
    aaSeq.addSequence(await AAanimationData._sounds({ animationData, explosionSound: data.staticType !== "source" && explosionSound, targetSound }))
    // Macro if Concurrent
    if (data.playMacro && data.macro.playWhen === "0") {
        let userData = data.macro.args;
        new Sequence()
            .macro(data.macro.name, handler.workflow, handler, ...userData)
            .play()
    }
    aaSeq.play()
    Hooks.callAll("aa.animationEnd", sourceToken, handler.allTargets)
    if (data.persistent) { AAanimationData.howToDelete("sequencerground") }
}
