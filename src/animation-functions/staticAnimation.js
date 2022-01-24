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
    
    const onToken = await buildFile(true, data.animation, "static", data.variant, data.color, data.customPath);

    if (handler.debug) { aaDebugger("Static Animation Start", animationData, onToken) }

    //const exScale = ((100 * handler.explosionRadius) / explosion?.metadata?.width) ?? 1;
    const animWidth = onToken.metadata.width;
    const arrayLength = handler.allTargets.length;

    let aaSeq = await new Sequence("Automated Animations")
    const bottomAnim = onToken.file.replace('top', 'bottom')

    // Play Macro if Awaiting
    if (data.playMacro && data.macro.playWhen === "1") {
        let userData = data.macro.args;
        aaSeq.macro(data.macro.name, handler.workflow, handler, [...userData])
            .play()
    }
    // Extra Effects => Source Token if active
    if (sourceFX.enabled) {
        aaSeq.addSequence(sourceFX.sourceSeq)
    }
    // Animation Start Hook
    aaSeq.thenDo(function () {
        Hooks.callAll("aa.animationStart", sourceToken, handler.allTargets)
    })
    // Sounds if enabled
    if (data.itemAudio.enable) {
        aaSeq.sound()
            .file(data.itemAudio.file, true)
            .volume(data.itemAudio.volume)
            .delay(data.itemAudio.delay)
            .repeats(data.itemAudio.repeat, data.delay)
            .playIf(data.playSound)
    }
    if (data.explosion.audio.enabled && data.explosion.enabled && handler.allTargets.length > 0 && data.staticType !== "source") {
        aaSeq.sound()
            .file(data.explosion?.audio?.file, true)
            .playIf(data.explosion?.playSound)
            .delay(data.explosion?.audio?.delay + data.explosion?.delay)
            .volume(data.explosion?.audio?.volume)
            .repeats(data.explosion?.audio?.repeat, data.delay)
    }
    // Source Effect sections
    if (data.staticType === "source" || data.staticType === "sourcetarget" || (data.staticType === "targetDefault" && handler.allTargets.length < 1)) {
        const checkAnim = Sequencer.EffectManager.getEffects({ object: sourceToken, origin: handler.item.uuid }).length > 0
        const playPersist = (!checkAnim && data.persistent) ? true : false;
        if (!data.persistent) {
            if (data.staticOptions === 'shieldfx') {
                aaSeq.effect()
                    .file(bottomAnim)
                    .atLocation(sourceToken)
                    .name("spot" + ` ${sourceToken.id}`)
                    .repeats(data.repeat, data.delay)
                    .opacity(data.opacity)
                    .size(sourceToken.w * 1.5 * data.scale)
                    .belowTokens(true)
                    .fadeIn(250)
                    .fadeOut(500)
                    //.playIf(!data.persistent)
                aaSeq.effect()
                    .file(onToken.file)
                    .atLocation(sourceToken)
                    .name("spot" + ` ${sourceToken.id}`)
                    .repeats(data.repeat, data.delay)
                    .opacity(data.opacity)
                    .size(sourceToken.w * 1.5 * data.scale)
                    .belowTokens(false)
                    .fadeIn(250)
                    .fadeOut(500)
                    //.playIf(!data.persistent)
            } else {
                aaSeq.effect()
                    .file(onToken.file)
                    .atLocation(sourceToken)
                    .name("spot" + ` ${sourceToken.id}`)
                    .repeats(data.repeat, data.delay)
                    .opacity(data.opacity)
                    .size(sourceToken.w * 1.5 * data.scale)
                    .belowTokens(data.below)
                    .fadeIn(250)
                    .fadeOut(500)
                    //.playIf(!data.persistent)
            }
        }
        if (playPersist) {
            if (data.staticOptions === 'shieldfx') {
                aaSeq.effect()
                    .file(bottomAnim)
                    .attachTo(sourceToken)
                    .name("spot" + ` ${sourceToken.id}`)
                    .size(sourceToken.w * 1.5 * data.scale)
                    .belowTokens(true)
                    .persist(data.persistent)
                    .opacity(data.opacity)
                    .origin(handler.item.uuid)
                    .fadeIn(250)
                    .fadeOut(500)
                    //.playIf(playPersist)
                aaSeq.effect()
                    .file(onToken.file)
                    .attachTo(sourceToken)
                    .name("spot" + ` ${sourceToken.id}`)
                    .size(sourceToken.w * 1.5 * data.scale)
                    .belowTokens(false)
                    .persist(data.persistent)
                    .opacity(data.opacity)
                    .origin(handler.item.uuid)
                    .fadeIn(250)
                    .fadeOut(500)
                    //.playIf(playPersist)
            } else {
                aaSeq.effect()
                    .file(onToken.file)
                    .attachTo(sourceToken)
                    .name("spot" + ` ${sourceToken.id}`)
                    .size(sourceToken.w * 1.5 * data.scale)
                    .belowTokens(data.below)
                    .persist(data.persistent)
                    .opacity(data.opacity)
                    .origin(handler.item.uuid)
                    .fadeIn(250)
                    .fadeOut(500)
                    //.playIf(playPersist)
            }

        }
    }
    // Target Effect sections
    if ((data.staticType === 'target' || data.staticType === 'targetDefault' || data.staticType === 'sourcetarget') && handler.allTargets.length > 0) {
        for (let target of handler.allTargets) {
            let checkAnim = Sequencer.EffectManager.getEffects({ object: target, origin: handler.item.uuid }).length > 0
            let playPersist = (!checkAnim && data.persistent) ? true : false;
            if (!data.persistent) {
                if (data.staticOptions === 'shieldfx') {
                    aaSeq.effect()
                        .file(bottomAnim)
                        .atLocation(target)
                        .repeats(data.repeat, data.delay)
                        .opacity(data.opacity)
                        .size(target.w * 1.5 * data.scale)
                        .belowTokens(true)
                        .name("spot" + ` ${target.id}`)
                        .fadeIn(250)
                        .fadeOut(500)
                        //.playIf(!data.persistent)
                    aaSeq.effect()
                        .file(onToken.file)
                        .atLocation(target)
                        .repeats(data.repeat, data.delay)
                        .opacity(data.opacity)
                        .size(target.w * 1.5 * data.scale)
                        .belowTokens(false)
                        .name("spot" + ` ${target.id}`)
                        .fadeIn(250)
                        .fadeOut(500)
                        //.playIf(!data.persistent)
                } else {
                    let scale = data.animation === "bite" || data.animation === "claw" ? (sourceToken.w / animWidth) * 1.5 : (target.w / animWidth) * 1.75
                    aaSeq.effect()
                        .file(onToken.file)
                        .atLocation(target)
                        .repeats(data.repeat, data.delay)
                        .opacity(data.opacity)
                        .scale(scale * data.scale)
                        .belowTokens(data.below)
                        .name("spot" + ` ${target.id}`)
                        .fadeIn(250)
                        .fadeOut(500)
                        //.playIf(!data.persistent)
                }
            }
            if (playPersist) {
                if (data.staticOptions === 'shieldfx') {
                    aaSeq.effect()
                        .file(bottomAnim)
                        .attachTo(target)
                        .name("spot" + ` ${target.id}`)
                        .size(scale * 1.5 * data.scale)
                        .belowTokens(true)
                        .persist(data.persistent)
                        .opacity(data.opacity)
                        .origin(handler.item.uuid)
                        .fadeIn(250)
                        .fadeOut(500)
                        //.playIf(playPersist)
                    aaSeq.effect()
                        .file(onToken.file)
                        .attachTo(target)
                        .name("spot" + ` ${target.id}`)
                        .size(scale * 1.5 * data.scale)
                        .belowTokens(false)
                        .persist(data.persistent)
                        .opacity(data.opacity)
                        .origin(handler.item.uuid)
                        .fadeIn(250)
                        .fadeOut(500)
                        //.playIf(playPersist)
                } else {
                    aaSeq.effect()
                        .file(onToken.file)
                        .attachTo(target)
                        .name("spot" + ` ${target.id}`)
                        .scale(scale * data.scale)
                        .belowTokens(data.below)
                        .persist(data.persistent)
                        .opacity(data.opacity)
                        .origin(handler.item.uuid)
                        .fadeIn(250)
                        .fadeOut(500)
                        //.playIf(playPersist)
                }
            }
            if (targetFX.enabled) {
                let targetSequence = AAanimationData._targetSequence(targetFX, target, handler);
                aaSeq.addSequence(targetSequence.targetSeq)
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
        }
    }

    aaSeq.play()
    //await wait(500)
    Hooks.callAll("aa.animationEnd", sourceToken, handler.allTargets)

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
