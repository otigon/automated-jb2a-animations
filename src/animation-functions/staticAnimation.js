import { buildFile } from "./file-builder/build-filepath.js"
import { aaDebugger } from "../constants/constants.js"
import { AAanimationData } from "../aa-classes/animation-data.js";

const wait = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

export async function staticAnimation(handler, autoObject) {

    const aaDebug = game.settings.get("autoanimations", "debug")
    let globalDelay = game.settings.get("autoanimations", "globaldelay");
    await wait(globalDelay);
    const sourceToken = handler.actorToken;

    const data = await AAanimationData._primaryData(handler, autoObject);
    if (aaDebug) { aaDebugger("Static Animation Start", data) }
    const onToken = await buildFile(true, data.animation, "static", data.variant, data.color, data.customPath);

    //const explosion = await AAanimationData._explosionData(handler);
    //const explosionSound = AAanimationData._explosionSound(handler);
    const sourceFX = await AAanimationData._sourceFX(handler, sourceToken);
    const targetFX = await AAanimationData._targetFX(handler);

    //const exScale = ((100 * handler.explosionRadius) / explosion?.metadata?.width) ?? 1;
    const animWidth = onToken.metadata.width;
    const arrayLength = handler.allTargets.length;
    const gridSize = canvas.grid.size;
    

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
            .effect()
                .file(bottomAnim)
                .atLocation(sourceToken)
                .name('animation')
                .repeats(data.repeat, data.delay)
                .opacity(data.opacity)
                .size(sourceScale * 1.5 * data.scale)
                .belowTokens(true)
                .playIf(!data.persistent)
            .effect()
                .file(onToken.file)
                .atLocation(sourceToken)
                .name('animation')
                .repeats(data.repeat, data.delay)
                .opacity(data.opacity)
                .size(sourceScale * 1.5 * data.scale)
                .belowTokens(false)
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
                .playIf(playPersist)
            .sound()
                .file(data.itemAudio.file)
                .volume(data.itemAudio.volume)
                .delay(data.itemAudio.delay)
                .playIf(() => {
                    return data.itemAudio.enable && data.itemAudio.file;
                })
            .effect()
                .atLocation("animation")
                .file(data.explosion?.data?.file)
                .scale({ x: data.explosion?.scale, y: data.explosion?.scale })
                .delay(500 + data.explosion?.delay)
                .repeats(data.repeat, data.delay)
                .belowTokens(data.explosion?.below)
                .playIf(data.explosion?.enabled)
                //.waitUntilFinished(explosionDelay)
            .sound()
                .file(data.explosion?.audio?.file)
                .playIf(() => {return data.explosion?.enabled && data.explosion?.audio?.enable})
                .delay(data.explosion?.audio?.delay)
                .volume(data.explosion?.audio?.volume)
                .repeats(data.repeat, data.delay)
            .play()
            //await wait(500)
            Hooks.callAll("aa.animationEnd", sourceToken, "no-target")
        }
    
        async function targetCast() {

            for (var i = 0; i < arrayLength; i++) {
    
                let target = handler.allTargets[i];
                const checkAnim = Sequencer.EffectManager.getEffects({ object: target, origin: handler.item.uuid }).length > 0
                const playPersist = (!checkAnim && data.persistent) ? true : false;    
                /*
                if (targetFX.enabled) {
                    targetFX.tFXScale = 2 * target.w / targetFX.data.metadata.width;
                }        
                */
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
                    .effect()
                        .file(bottomAnim)
                        .atLocation(target)
                        .gridSize(gridSize)
                        .repeats(data.repeat, data.delay)
                        .opacity(data.opacity)
                        .size(scale * 1.5 * data.scale)
                        .belowTokens(true)
                        .name("animation")
                        .playIf(!data.persistent)
                    .effect()
                        .file(onToken.file)
                        .atLocation(target)
                        .gridSize(gridSize)
                        .repeats(data.repeat, data.delay)
                        .opacity(data.opacity)
                        .size(scale * 1.5 * data.scale)
                        .belowTokens(false)
                        .name("animation")
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
                        .playIf(playPersist)
                    .sound()
                        .file(data.itemAudio.file)
                        .volume(data.itemAudio.volume)
                        .delay(data.itemAudio.delay)
                        .playIf(() => {
                            return data.itemAudio.enable && data.itemAudio.file;
                        })        
                    .effect()
                        .atLocation("animation")
                        .file(data.explosion?.data?.file)
                        .scale({ x: data.explosion?.scale, y: data.explosion?.scale })
                        .delay(500 + data.explosion?.delay)
                        .repeats(data.repeat, data.delay)
                        .belowTokens(data.explosion?.below)
                        .playIf(data.explosion?.enabled)
                        //.waitUntilFinished(explosionDelay)
                    .sound()
                    .file(data.explosion?.audio?.file)
                        .playIf(() => {return explosion.enabled && data.explosion?.audio?.enable})
                        .delay(data.explosion?.audio?.delay)
                        .volume(data.explosion?.audio?.volume)
                        .repeats(data.repeat, data.delay)
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
            .effect()
                .file(onToken.file)
                .atLocation(sourceToken)
                .name('animation')
                .repeats(data.repeat, data.delay)
                .opacity(data.opacity)
                .size(sourceScale * 1.5 * data.scale)
                .belowTokens(data.below)
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
                .playIf(playPersist)
            .sound()
                .file(data.itemAudio.file)
                .volume(data.itemAudio.volume)
                .delay(data.itemAudio.delay)
                .playIf(() => {
                    return data.itemAudio.enable && data.itemAudio.file;
                })
            .effect()
                .atLocation("animation")
                .file(data.explosion?.data?.file)
                .scale({ x: data.explosion?.scale, y: data.explosion?.scale })
                .delay(500 + data.explosion?.delay)
                .repeats(data.repeat, data.delay)
                .belowTokens(data.explosion?.below)
                .playIf(data.explosion?.enabled)
                //.waitUntilFinished(explosionDelay)
            .sound()
                .file(data.explosion?.audio?.file)
                .playIf(() => {return explosion.enabled && data.explosion?.audio?.enable})
                .delay(data.explosion?.audio?.delay)
                .volume(data.explosion?.audio?.volume)
                .repeats(data.repeat, data.delay)
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
                /*
                if (targetFX.enabled) {
                    targetFX.tFXScale = 2 * target.w / targetFX.data.metadata.width;
                }        
                */
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
                    .effect()
                        .file(onToken.file)
                        .atLocation(target)
                        .gridSize(gridSize)
                        .repeats(data.repeat, data.delay)
                        .opacity(data.opacity)
                        .scale(scale * data.scale)
                        .belowTokens(data.below)
                        .name("animation")
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
                        .playIf(playPersist)
                    .sound()
                        .file(data.itemAudio.file)
                        .volume(data.itemAudio.volume)
                        .delay(data.itemAudio.delay)
                        .playIf(() => {
                            return data.itemAudio.enable && data.itemAudio.file;
                        })        
                    .effect()
                        .atLocation("animation")
                        .file(data.explosion?.data?.file)
                        .scale({ x: data.explosion?.scale, y: data.explosion?.scale })
                        .delay(500 + data.explosion?.delay)
                        .repeats(data.repeat, data.delay)
                        .belowTokens(data.explosion?.below)
                        .playIf(data.explosion?.enabled)
                        //.waitUntilFinished(explosionDelay)
                    .sound()
                        .file(data.explosion?.audio?.file)
                        .playIf(() => {return explosion.enabled && data.explosion?.audio?.enable})
                        .delay(data.explosion?.audio?.delay)
                        .volume(data.explosion?.audio?.volume)
                        .repeats(data.repeat, data.delay)
                    .addSequence(targetSequence.targetSeq)
                    .play()
                    //await wait(500)
                    Hooks.callAll("aa.animationEnd", sourceToken, target)
            }
        }
    }
}
