import { buildFile } from "./file-builder/build-filepath.js"

const wait = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

export async function staticAnimation(handler, autoObject) {

    let globalDelay = game.settings.get("autoanimations", "globaldelay");
    await wait(globalDelay);
    const sourceToken = handler.actorToken;

    const data = {}
    if (autoObject) {
        const autoOverridden = handler.options?.overrideAuto
        Object.assign(data, autoObject[0])
        data.itemName = data.animation || "";
        data.customPath = data.custom ? data.customPath : false;
        data.color = autoOverridden ? handler.options?.autoColor : data.color;
        data.repeat = autoOverridden ? handler.options?.autoRepeat : data.repeat;
        data.delay = autoOverridden ? handler.options?.autoDelay : data.delay;
        data.scale = autoOverridden ? handler.options?.autoScale : data.scale;
        data.variant = autoOverridden ? handler.options?.autoVariant : data.variant;
    } else {
        data.itemName = handler.convertedName;
        data.variant = handler.spellVariant;
        data.color = handler.color;
        data.repeat = handler.animationLoops;
        data.delay = handler.loopDelay;
        data.customPath = handler.enableCustom01 ? handler.custom01 : false;
        data.below = handler.animLevel;
        data.scale = handler.scale;
    }
    const onToken = await buildFile(true, data.itemName, "static", data.variant, data.color, data.customPath);
    // builds Source Token file if Enabled, and pulls from flags if already set
    const sourceFX = {};
    if (handler.sourceEnable) {
        sourceFX.customSourcePath = handler.sourceCustomEnable ? handler.sourceCustomPath : false;
        sourceFX.data = await buildFile(true, handler.sourceName, "static", handler.sourceVariant, handler.sourceColor, sourceFX.customSourcePath);
        sourceFX.sFXScale = 2 * sourceToken.w / sourceFX.data.metadata.width;
    }
    // builds Target Token file if Enabled, and pulls from flags if already set
    const targetFX = {};
    if (handler.targetEnable) {
        targetFX.customTargetPath = handler.targetCustomEnable ? handler.targetCustomPath : false;
        targetFX.data = await buildFile(true, handler.targetName, "static", handler.targetVariant, handler.targetColor, targetFX.customTargetPath);
    }

    const explosion = {};
    if (handler.flags.explosion) {
        explosion.customExplosionPath = handler.customExplode ? handler.customExplosionPath : false;
        explosion.data = await buildFile(true, handler.explosionVariant, "static", "01", handler.explosionColor, explosion.customExplosionPath)
    }

    const explosionSound = {};
    explosionSound.volume = handler.allSounds?.explosion?.volume || 0.25;
    explosionSound.delay = handler.allSounds?.explosion?.delay || 1;
    explosionSound.file = handler.allSounds?.explosion?.file || "";

    let exScale = ((200 * handler.explosionRadius) / explosion?.metadata?.width) ?? 1;
    let animWidth = onToken.metadata.width;
    const arrayLength = handler.allTargets.length;

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
    if (data.type === 'source') {
        selfCast()
    }

    if (data.type === 'target') {
        targetCast()
    }

    if (data.type === 'sourcetarget') {
        selfCast()
        targetCast()
    }

    async function selfCast() {
        new Sequence()
        .effect()
            .atLocation(sourceToken)
            .scale(sourceFX.sFXScale * handler.sourceScale)
            .repeats(handler.sourceLoops, handler.sourceLoopDelay)
            .belowTokens(handler.sourceLevel)
            .waitUntilFinished(handler.sourceDelay)
            .playIf(handler.sourceEnable)
            .addOverride(async (effect, data) => {
                if (handler.sourceEnable) {
                    data.file = sourceFX.data.file;
                }
                return data;
            })
        .thenDo(function() {
            Hooks.callAll("aa.animationStart", sourceToken, "no-target")
        })             
        .effect()
            .file(onToken.file)
            .atLocation(sourceToken)
            //.randomizeMirrorY()
            .repeats(data.repeat, data.delay)
            //.missed(hit)
            .scale(((sourceToken.w / animWidth) * 1.5) * data.scale)
            .belowTokens(data.below)
        .effect()
            .atLocation(sourceToken)
            .scale(exScale)
            .delay(handler.explosionDelay)
            //.randomizeMirrorY()
            .repeats(data.repeat, data.delay)
            .belowTokens(handler.explosionLevel)
            .playIf(() => {return explosion.data})
            .addOverride(async (effect, data) => {
                if (explosion.data) {
                    data.file = explosion.data.file;
                }
                return data;
            })
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
            if (handler.targetEnable) {
                tFXScale = 2 * target.w / targetFX.metadata.width;
            }        

            let scale = data.itemName.includes("creature") ? (sourceToken.w / animWidth) * 1.5 : (target.w / animWidth) * 1.75
            let hit;
            if (handler.playOnMiss) {
                hit = handler.hitTargetsId.includes(target.id) ? false : true;
            } else {
                hit = false;
            }

            new Sequence()
                .effect()
                    .atLocation(sourceToken)
                    .scale(sourceFX.sFXScale * handler.sourceScale)
                    .repeats(handler.sourceLoops, handler.sourceLoopDelay)
                    .belowTokens(handler.sourceLevel)
                    .waitUntilFinished(handler.sourceDelay)
                    .playIf(handler.sourceEnable)
                    .addOverride(async (effect, data) => {
                        if (handler.sourceEnable) {
                            data.file = sourceFX.data.file;
                        }
                        return data;
                    })
                .thenDo(function() {
                    Hooks.callAll("aa.animationStart", sourceToken, target)
                })             
                .effect()
                    .file(onToken.file)
                    .atLocation(target)
                    //.randomizeMirrorY()
                    .repeats(data.repeat, data.delay)
                    .scale(scale * data.scale)
                    .belowTokens(data.below)
                    .name("animation")
                    .playIf(() => { return arrayLength })
                .effect()
                    .atLocation("animation")
                    .scale(exScale)
                    .delay(handler.explosionDelay)
                    //.randomizeMirrorY()
                    .repeats(data.repeat, data.delay)
                    .belowTokens(handler.explosionLevel)
                    .playIf(() => {return explosion.data})
                    .addOverride(async (effect, data) => {
                        if (explosion.data) {
                            data.file = explosion.data.file;
                        }
                        return data;
                    })
                .sound()
                    .file(explosionSound.file)
                    .playIf(() => {return explosion.data && handler.explodeSound})
                    .delay(explosionSound.delay)
                    .volume(explosionSound.volume)
                    .repeats(data.repeat, data.delay)
                .effect()
                    .delay(handler.targetDelay)
                    .atLocation("animation")
                    .scale(targetFX.tFXScale * handler.targetScale)
                    .repeats(handler.targetLoops, handler.targetLoopDelay)
                    .belowTokens(handler.targetLevel)
                    .playIf(handler.targetEnable)
                    .addOverride(async (effect, data) => {
                        if (handler.targetEnable) {
                            data.file = targetFX.data.file;
                        }
                        return data;
                    })            
                .play()
                //await wait(500)
                Hooks.callAll("aa.animationEnd", sourceToken, target)
        }
    }
}
