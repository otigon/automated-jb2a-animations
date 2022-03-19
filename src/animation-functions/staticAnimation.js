import { buildFile } from "./file-builder/build-filepath.js"
import { aaDebugger } from "../constants/constants.js"
import { AAanimationData } from "../aa-classes/animation-data.js";

const wait = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

export async function staticAnimation(handler, animationData) {
    //console.log(animationData)

    let globalDelay = game.settings.get("autoanimations", "globaldelay");
    await wait(globalDelay);
    const sourceToken = handler.sourceToken;

    const data = animationData.primary;
    const sourceFX = animationData.sourceFX;
    const targetFX = animationData.targetFX;

    const onToken = await buildFile(true, data.menuType, data.animation, "static", data.variant, data.color, data.customPath);

    if (handler.debug) { aaDebugger("Static Animation Start", animationData, onToken) }

    //const exScale = ((100 * handler.explosionRadius) / explosion?.metadata?.width) ?? 1;
    const animWidth = onToken.metadata.width;

    let aaSeq = await new Sequence("Automated Animations")
    const bottomAnim = onToken.file.replace('top', 'bottom')

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
    let explosionSound = false;
    if (data.staticType === "source" || data.staticType === "sourcetarget" || (data.staticType === "targetDefault" && handler.allTargets.length < 1)) {
        const checkAnim = Sequencer.EffectManager.getEffects({ object: sourceToken, origin: handler.item.uuid }).length > 0
        const playPersist = (!checkAnim && data.persistent) ? true : false;
        if (data.staticOptions === 'shieldfx') {
            let bottomEffect = aaSeq.effect();
            bottomEffect.file(bottomAnim)
            bottomEffect.name("spot" + ` ${sourceToken.id}`)
            bottomEffect.repeats(data.repeat, data.delay)
            bottomEffect.opacity(data.opacity)
            bottomEffect.size(sourceToken.w * 1.5 * data.scale)
            bottomEffect.belowTokens(true)
            bottomEffect.fadeIn(250)
            bottomEffect.fadeOut(500)
            if (!data.persistent) { bottomEffect.atLocation(sourceToken) }
            if (playPersist) { bottomEffect.attachTo(sourceToken); bottomEffect.persist(true); bottomEffect.origin(handler.item.uuid) }
            if (checkAnim) { bottomEffect.playIf(false); }

            let topEffect = aaSeq.effect();
            topEffect.file(onToken.file)
            topEffect.name("spot" + ` ${sourceToken.id}`)
            topEffect.repeats(data.repeat, data.delay)
            topEffect.opacity(data.opacity)
            topEffect.size(sourceToken.w * 1.5 * data.scale)
            topEffect.belowTokens(false)
            topEffect.fadeIn(250)
            topEffect.fadeOut(500)
            if (!data.persistent) { topEffect.atLocation(sourceToken) }
            if (playPersist) { topEffect.attachTo(sourceToken); topEffect.persist(true); topEffect.origin(handler.item.uuid) }
            if (checkAnim) { topEffect.playIf(false); }

        } else {
            let aaEffect = aaSeq.effect();
            aaEffect.file(onToken.file)
            aaEffect.name("spot" + ` ${sourceToken.id}`)
            aaEffect.repeats(data.repeat, data.delay)
            aaEffect.opacity(data.opacity)
            aaEffect.size(sourceToken.w * 1.5 * data.scale)
            aaEffect.belowTokens(data.below)
            aaEffect.fadeIn(250)
            aaEffect.fadeOut(500)
            if (!data.persistent) { aaEffect.atLocation(sourceToken) }
            if (playPersist) { aaEffect.attachTo(sourceToken); aaEffect.persist(true); aaEffect.origin(handler.item.uuid) }
            if (checkAnim) { aaEffect.playIf(false); }

        }

        if (data.explosion.enabled) {
            aaSeq.effect()
                .atLocation("spot" + ` ${sourceToken.id}`)
                .file(data.explosion?.data?.file, true)
                .scale({ x: data.explosion?.scale, y: data.explosion?.scale })
                .delay(data.explosion?.delay)
                .repeats(data.repeat, data.delay)
                .belowTokens(data.explosion?.below)
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
            let checkAnim = Sequencer.EffectManager.getEffects({ object: target, origin: handler.item.uuid }).length > 0
            let hit;
            if (handler.playOnMiss) {
                hit = handler.hitTargetsId.includes(target.id) ? true : false;
            } else {
                hit = true;
            }
            if (hit) { targetSound = true }
            if ((data.persistent && !checkAnim) || !data.persistent) {
                if (data.staticOptions === 'shieldfx') {
                    let bottomEffect = aaSeq.effect();
                    bottomEffect.file(bottomAnim)
                    bottomEffect.name("spot" + ` ${target.id}`)
                    bottomEffect.repeats(data.repeat, data.delay)
                    bottomEffect.opacity(data.opacity)
                    bottomEffect.size(target.w * 1.5 * data.scale)
                    bottomEffect.belowTokens(true)
                    bottomEffect.fadeIn(250)
                    bottomEffect.fadeOut(500)
                    if (!data.persistent) { bottomEffect.atLocation(target); bottomEffect.missed(!hit) }
                    else { bottomEffect.attachTo(target); bottomEffect.persist(true); bottomEffect.origin(handler.item.uuid) }

                    let topEffect = aaSeq.effect();
                    topEffect.file(onToken.file)
                    topEffect.name("spot" + ` ${target.id}`)
                    topEffect.repeats(data.repeat, data.delay)
                    topEffect.opacity(data.opacity)
                    topEffect.size(target.w * 1.5 * data.scale)
                    topEffect.belowTokens(false)
                    topEffect.fadeIn(250)
                    topEffect.fadeOut(500)
                    if (!data.persistent) { topEffect.atLocation(target); topEffect.missed(!hit) }
                    else { topEffect.attachTo(target); topEffect.persist(true); topEffect.origin(handler.item.uuid) }

                } else {
                    let scale = data.animation === "bite" || data.animation === "claw" ? (sourceToken.w / animWidth) * 1.5 : (target.w / animWidth) * 1.75
                    let aaEffect = aaSeq.effect();
                    aaEffect.file(onToken.file)
                    aaEffect.name("spot" + ` ${target.id}`)
                    aaEffect.repeats(data.repeat, data.delay)
                    aaEffect.opacity(data.opacity)
                    aaEffect.scale(scale * data.scale)
                    aaEffect.belowTokens(data.below)
                    aaEffect.fadeIn(250)
                    aaEffect.fadeOut(500)
                    if (!data.persistent) { aaEffect.atLocation(target); aaEffect.missed(!hit) }
                    else { aaEffect.attachTo(target); aaEffect.persist(true); aaEffect.origin(handler.item.uuid) }
                }

                if (data.explosion.enabled) {
                    aaSeq.effect()
                        .atLocation("spot" + ` ${target.id}`)
                        .file(data.explosion?.data?.file, true)
                        .scale({ x: data.explosion?.scale, y: data.explosion?.scale })
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
    /*
    if (data.menuType) {
        const bottomAnim = onToken.file.replace('top', 'bottom')

        switch (data.staticType) {
            case 'source':
                selfCast()
                break;
            case 'target':
                if (arrayLength === 0) { return; }
                targetCast()
                break;
            case 'targetDefault':
                if (arrayLength === 0) {
                    selfCast()
                } else { targetCast() }
                break;
            case 'sourcetarget':
                selfCast()
                if (arrayLength === 0) { return; }
                targetCast()
                break;
        }

        async function selfCast() {
            const checkAnim = Sequencer.EffectManager.getEffects({ object: sourceToken, origin: handler.item.uuid }).length > 0
            const playPersist = (!checkAnim && data.persistent) ? true : false;

            const sourceScale = sourceToken.w;
            new Sequence()
            .addSequence(sourceFX.sourceSeq)
            .thenDo(function() {
                Hooks.callAll("aa.animationStart", sourceToken, "no-target")
            })
            .sound()
                .file(data.itemAudio.file, true)
                .volume(data.itemAudio.volume)
                .delay(data.itemAudio.delay)
                .repeats(data.itemAudio.repeat, data.delay)
                .playIf(data.playSound)
            .effect()
                .file(bottomAnim)
                .atLocation(sourceToken)
                .name('animation')
                .repeats(data.repeat, data.delay)
                .opacity(data.opacity)
                .size(sourceScale * 1.5 * data.scale)
                .belowTokens(true)
                .fadeIn(250)
                .fadeOut(500)
                .playIf(!data.persistent)
            .effect()
                .file(onToken.file)
                .atLocation(sourceToken)
                .name('animation')
                .repeats(data.repeat, data.delay)
                .opacity(data.opacity)
                .size(sourceScale * 1.5 * data.scale)
                .belowTokens(false)
                .fadeIn(250)
                .fadeOut(500)
                .playIf(!data.persistent)
            .effect()
                .file(bottomAnim)
                .attachTo(sourceToken)
                .name('animation')
                .size(sourceScale * 1.5 * data.scale)
                .belowTokens(true)
                .persist(data.persistent)
                .opacity(data.opacity)
                .origin(handler.item.uuid)
                .fadeIn(250)
                .fadeOut(500)
                .playIf(playPersist)
            .effect()
                .file(onToken.file)
                .attachTo(sourceToken)
                .name('animation')
                .size(sourceScale * 1.5 * data.scale)
                .belowTokens(false)
                .persist(data.persistent)
                .opacity(data.opacity)
                .origin(handler.item.uuid)
                .fadeIn(250)
                .fadeOut(500)
                .playIf(playPersist)
            .sound()
                .file(data.explosion?.audio?.file, true)
                .playIf(data.explosion?.playSound)
                .delay(data.explosion?.audio?.delay + data.explosion?.delay)
                .volume(data.explosion?.audio?.volume)
                .repeats(data.explosion?.audio?.repeat, data.delay)
            .effect()
                .atLocation("animation")
                .file(data.explosion?.data?.file, true)
                .scale({ x: data.explosion?.scale, y: data.explosion?.scale })
                .delay(data.explosion?.delay)
                .repeats(data.repeat, data.delay)
                .belowTokens(data.explosion?.below)
                .playIf(data.explosion?.enabled)
            .play()
            //await wait(500)
            Hooks.callAll("aa.animationEnd", sourceToken, "no-target")
        }
    
        async function targetCast() {

            for (var i = 0; i < arrayLength; i++) {
    
                let target = handler.allTargets[i];
                const checkAnim = Sequencer.EffectManager.getEffects({ object: target, origin: handler.item.uuid }).length > 0
                const playPersist = (!checkAnim && data.persistent) ? true : false;    
                /
                if (targetFX.enabled) {
                    targetFX.tFXScale = 2 * target.w / targetFX.data.metadata.width;
                }        
                /
                let targetSequence = AAanimationData._targetSequence(targetFX, target, handler);
    
                let scale = target.w;
                let hit;
                if (handler.playOnMiss) {
                    hit = handler.hitTargetsId.includes(target.id) ? false : true;
                } else {
                    hit = false;
                }
    
                new Sequence("Automated Animations")
                    .addSequence(sourceFX.sourceSeq)
                    .thenDo(function() {
                        Hooks.callAll("aa.animationStart", sourceToken, target)
                    })
                    .sound()
                        .file(data.itemAudio.file, true)
                        .volume(data.itemAudio.volume)
                        .delay(data.itemAudio.delay)
                        .repeats(data.itemAudio.repeat, data.delay)
                        .playIf(data.playSound)    
                    .effect()
                        .file(bottomAnim)
                        .atLocation(target)
                        .repeats(data.repeat, data.delay)
                        .opacity(data.opacity)
                        .size(scale * 1.5 * data.scale)
                        .belowTokens(true)
                        .name("animation")
                        .fadeIn(250)
                        .fadeOut(500)        
                        .playIf(!data.persistent)
                    .effect()
                        .file(onToken.file)
                        .atLocation(target)
                        .repeats(data.repeat, data.delay)
                        .opacity(data.opacity)
                        .size(scale * 1.5 * data.scale)
                        .belowTokens(false)
                        .name("animation")
                        .fadeIn(250)
                        .fadeOut(500)        
                        .playIf(!data.persistent)
                    .effect()
                        .file(bottomAnim)
                        .attachTo(target)
                        .name('animation')
                        .size(scale * 1.5 * data.scale)
                        .belowTokens(true)
                        .persist(data.persistent)
                        .opacity(data.opacity)
                        .origin(handler.item.uuid)
                        .fadeIn(250)
                        .fadeOut(500)        
                        .playIf(playPersist)
                    .effect()
                        .file(onToken.file)
                        .attachTo(target)
                        .name('animation')
                        .size(scale * 1.5 * data.scale)
                        .belowTokens(false)
                        .persist(data.persistent)
                        .opacity(data.opacity)
                        .origin(handler.item.uuid)
                        .fadeIn(250)
                        .fadeOut(500)        
                        .playIf(playPersist)
                    .sound()
                        .file(data.explosion?.audio?.file, true)
                        .playIf(data.explosion?.playSound)
                        .delay(data.explosion?.audio?.delay + data.explosion?.delay)
                        .volume(data.explosion?.audio?.volume)
                        .repeats(data.explosion?.audio?.repeat, data.delay)
                    .effect()
                        .atLocation("animation")
                        .file(data.explosion?.data?.file, true)
                        .scale({ x: data.explosion?.scale, y: data.explosion?.scale })
                        .delay(data.explosion?.delay)
                        .repeats(data.repeat, data.delay)
                        .belowTokens(data.explosion?.below)
                        .playIf(data.explosion?.enabled)
                    .addSequence(targetSequence.targetSeq)
                    .play()
                    //await wait(500)
                    Hooks.callAll("aa.animationEnd", sourceToken, target)
            }
        }    
    } else {
        switch (data.staticType) {
            case 'source':
                selfCast()
                break;
            case 'target':
                if (arrayLength === 0) { return; }
                targetCast()
                break;
            case 'targetDefault':
                if (arrayLength === 0) {
                    selfCast()
                } else { targetCast() }
                break;
            case 'sourcetarget':
                selfCast()
                if (arrayLength === 0) { return; }
                targetCast()
                break;
        }
    
        async function selfCast() {
            const checkAnim = Sequencer.EffectManager.getEffects({ object: sourceToken, origin: handler.item.uuid }).length > 0
            const playPersist = (!checkAnim && data.persistent) ? true : false;
            const sourceScale = sourceToken.w;
            new Sequence()
            .addSequence(sourceFX.sourceSeq)
            .thenDo(function() {
                Hooks.callAll("aa.animationStart", sourceToken, "no-target")
            })
            .sound()
                .file(data.itemAudio.file, true)
                .volume(data.itemAudio.volume)
                .delay(data.itemAudio.delay)
                .repeats(data.itemAudio.repeat, data.delay)
                .playIf(data.playSound)    
            .effect()
                .file(onToken.file)
                .atLocation(sourceToken)
                .name('animation')
                .repeats(data.repeat, data.delay)
                .opacity(data.opacity)
                .size(sourceScale * 1.5 * data.scale)
                .belowTokens(data.below)
                .fadeIn(250)
                .fadeOut(500)
                .playIf(!data.persistent)
            .effect()
                .file(onToken.file)
                .attachTo(sourceToken)
                .name('animation')
                .size(sourceScale * 1.5 * data.scale)
                .belowTokens(data.below)
                .persist(data.persistent)
                .opacity(data.opacity)
                .origin(handler.item.uuid)
                .fadeIn(250)
                .fadeOut(500)
                .playIf(playPersist)
            .sound()
                .file(data.explosion?.audio?.file, true)
                .playIf(data.explosion?.playSound)
                .delay(data.explosion?.audio?.delay + data.explosion?.delay)
                .volume(data.explosion?.audio?.volume)
                .repeats(data.explosion?.audio?.repeat, data.delay)
            .effect()
                .atLocation("animation")
                .file(data.explosion?.data?.file, true)
                .scale({ x: data.explosion?.scale, y: data.explosion?.scale })
                .delay(data.explosion?.delay)
                .repeats(data.repeat, data.delay)
                .belowTokens(data.explosion?.below)
                .playIf(data.explosion?.enabled)
            .play()
            //await wait(500)
            Hooks.callAll("aa.animationEnd", sourceToken, "no-target")
        }
    
        async function targetCast() {
            const sourceScale = sourceToken.w;
            for (var i = 0; i < arrayLength; i++) {
    
                let target = handler.allTargets[i];
                const checkAnim = Sequencer.EffectManager.getEffects({ object: target, origin: handler.item.uuid }).length > 0
                const playPersist = (!checkAnim && data.persistent) ? true : false;    
                /
                if (targetFX.enabled) {
                    targetFX.tFXScale = 2 * target.w / targetFX.data.metadata.width;
                }        
                /
                let targetSequence = AAanimationData._targetSequence(targetFX, target, handler);
    
                let scale = data.animation === "bite" || data.animation === "claw" ? (sourceScale / animWidth) * 1.5 : (target.w / animWidth) * 1.75
                let hit;
                if (handler.playOnMiss) {
                    hit = handler.hitTargetsId.includes(target.id) ? false : true;
                } else {
                    hit = false;
                }
    
                new Sequence("Automated Animations")
                    .addSequence(sourceFX.sourceSeq)
                    .thenDo(function() {
                        Hooks.callAll("aa.animationStart", sourceToken, target)
                    })
                    .sound()
                        .file(data.itemAudio.file, true)
                        .volume(data.itemAudio.volume)
                        .delay(data.itemAudio.delay)
                        .repeats(data.itemAudio.repeat, data.delay)
                        .playIf(data.playSound)        
                    .effect()
                        .file(onToken.file)
                        .atLocation(target)
                        .repeats(data.repeat, data.delay)
                        .opacity(data.opacity)
                        .scale(scale * data.scale)
                        .belowTokens(data.below)
                        .name("animation")
                        .fadeIn(250)
                        .fadeOut(500)        
                        .playIf(!data.persistent)
                    .effect()
                        .file(onToken.file)
                        .attachTo(target)
                        .name('animation')
                        .scale(scale * data.scale)
                        .belowTokens(data.below)
                        .persist(data.persistent)
                        .opacity(data.opacity)
                        .origin(handler.item.uuid)
                        .fadeIn(250)
                        .fadeOut(500)        
                        .playIf(playPersist)
                    .sound()
                        .file(data.explosion?.audio?.file, true)
                        .playIf(data.explosion?.playSound)
                        .delay(data.explosion?.audio?.delay + data.explosion?.delay)
                        .volume(data.explosion?.audio?.volume)
                        .repeats(data.explosion?.audio?.repeat, data.delay)
                    .effect()
                        .atLocation("animation")
                        .file(data.explosion?.data?.file, true)
                        .scale({ x: data.explosion?.scale, y: data.explosion?.scale })
                        .delay(data.explosion?.delay)
                        .repeats(data.repeat, data.delay)
                        .belowTokens(data.explosion?.below)
                        .playIf(data.explosion?.enabled)
                        //.waitUntilFinished(explosionDelay)
                    .addSequence(targetSequence.targetSeq)
                    .play()
                    //await wait(500)
                    Hooks.callAll("aa.animationEnd", sourceToken, target)
            }
        }
    }
    */
}
