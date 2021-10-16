import { buildFile } from "./file-builder/build-filepath.js"
import { aaDebugger } from "../constants/constants.js"
import { AAanimationData } from "../aa-classes/animation-data.js";

const wait = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

export async function staticAnimation(handler, autoObject) {
    const aaDebug = game.settings.get("autoanimations", "debug")
    let globalDelay = game.settings.get("autoanimations", "globaldelay");
    await wait(globalDelay);
    const sourceToken = handler.actorToken;

    const data = AAanimationData._primaryData(handler, autoObject);
    if (aaDebug) { aaDebugger("Static Animation Start", data) }
    const onToken = await buildFile(true, data.animation, "static", data.variant, data.color, data.customPath);

    const explosion = handler.explosion.enable ? await AAanimationData._explosionData(handler) : {};
    const explosionSound = AAanimationData._explosionSound(handler);
    const sourceFX = await AAanimationData._sourceFX(handler, sourceToken);
    const targetFX = await AAanimationData._targetFX(handler);

    //const exScale = ((100 * handler.explosionRadius) / explosion?.metadata?.width) ?? 1;
    const animWidth = onToken.metadata.width;
    const arrayLength = handler.allTargets.length;
    const gridSize = canvas.grid.size;
    
    switch (data.type) {
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
            .size(sourceToken.w * 1.5 * data.scale)
            .belowTokens(data.below)
            .playIf(!data.persistent)
        .effect()
            .file(onToken.file)
            .attachTo(sourceToken)
            .name('animation')
            .size(sourceToken.w * 1.5 * data.scale)
            .belowTokens(data.below)
            .persist(data.persistent)
            .playIf(data.persistent)
        .effect()
            .atLocation("animation")
            .file(explosion.data?.file)
            .scale({ x: explosion.scale, y: explosion.scale })
            .delay(500 + explosion.delay)
            .repeats(data.repeat, data.delay)
            .belowTokens(explosion.below)
            .playIf(explosion.enabled)
            //.waitUntilFinished(explosionDelay)
        .sound()
            .file(explosionSound.file)
            .playIf(() => {return explosion.data && handler.explodeSound})
            .delay(explosionSound.delay)
            .volume(explosionSound.volume)
            .repeats(data.repeat, data.delay)
        .play()
        //await wait(500)
        Hooks.callAll("aa.animationEnd", sourceToken, "no-target")
    }

    async function targetCast() {
        for (var i = 0; i < arrayLength; i++) {

            let target = handler.allTargets[i];
            /*
            if (targetFX.enabled) {
                targetFX.tFXScale = 2 * target.w / targetFX.data.metadata.width;
            }        
            */
            let targetSequence = AAanimationData._targetSequence(targetFX, target, handler);

            let scale = data.animation === "bite" || data.animation === "claw" ? (sourceToken.w / animWidth) * 1.5 : (target.w / animWidth) * 1.75
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
                    .playIf(data.persistent)
                .effect()
                    .atLocation("animation")
                    .file(explosion.data?.file)
                    .scale({ x: explosion.scale, y: explosion.scale })
                    .delay(500 + explosion.delay)
                    .repeats(data.repeat, data.delay)
                    .belowTokens(explosion.below)
                    .playIf(explosion.enabled)
                    //.waitUntilFinished(explosionDelay)
                .sound()
                    .file(explosionSound.file)
                    .playIf(() => {return explosion.enabled && handler.explodeSound})
                    .delay(explosionSound.delay)
                    .volume(explosionSound.volume)
                    .repeats(data.repeat, data.delay)
                .addSequence(targetSequence.targetSeq)
                .play()
                //await wait(500)
                Hooks.callAll("aa.animationEnd", sourceToken, target)
        }
    }
}
