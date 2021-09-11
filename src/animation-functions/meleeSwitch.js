import { buildFile } from "./file-builder/build-filepath.js"
//import { AAITEMCHECK } from "./item-arrays.js";

const wait = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

export async function meleeSwitch(handler, target, autoObject) {
    function moduleIncludes(test) {
        return !!game.modules.get(test);
    }

    //Builds Primary File Path and Pulls from flags if already set
    const data = {};
    if (autoObject) {
        const autoOverridden = handler.options?.overrideAuto
        Object.assign(data, autoObject[0]);
        //if (!data.switchAnimation) { data.switchAnimation = data.animation; }
        data.switchAnimation = data.switchAnimation === undefined ? data.animation : data.switchAnimation;
        data.switchColor = data.switchColor === undefined ? data.color : data.switchColor;
        data.color = autoOverridden ? handler.options?.autoColor : data.color;
        data.repeat = autoOverridden ? handler.options?.autoRepeat : data.repeat;
        data.delay = autoOverridden ? handler.options?.autoDelay : data.delay;
    } else {
        data.switchAnimation = handler.switchName || handler.convertedName;
        //data.variant = data.itemName === "unarmedstrike" || data.itemName === "flurryofblows" ? handler.uaStrikeType : "01";
        data.customPath = handler.enableCustom01 ? handler.custom01 : false;
        data.color = handler.switchColor;
        data.switchType = handler.switchType;
        data.detect = handler.switchDetect;
        data.repeat = handler.animationLoops;
        data.delay = handler.loopDelay;
        data.return = handler.switchReturn
        data.switchVariant = data.switchAnimation === "lasersword" || data.switchAnimation === "dagger" || data.switchAnimation === "handaxe" ? handler.switchVariant : handler.switchDmgType;
    }
    const attack = await buildFile(false, data.switchAnimation, "range", data.switchVariant, data.switchColor);//need to finish
    const sourceToken = handler.actorToken;
    //let variant = data.itemName === "lasersword" || data.itemName === "dagger" || data.itemName === "handaxe" ? handler.switchVariant : handler.switchDmgType;

    //Builds Explosion File Path if Enabled, and pulls from flags if already set
    //let explosion;
    //let customExplosionPath;
    const explosion = {};
    if (handler.flags.explosion) {
        explosion.customExplosionPath = handler.customExplode ? handler.customExplosionPath : false;
        explosion.data = await buildFile(true, handler.explosionVariant, "static", "01", handler.explosionColor, explosion.customExplosionPath)
    }
    /*
    let explosionSound = handler.allSounds?.explosion;
    let explosionVolume = 0.25;
    let explosionDelay = 1;
    let explosionFile = "";
    let playExSound = explosion && handler.explodeSound
    if (handler.explodeSound) {
        explosionVolume = explosionSound?.volume || 0.25;
        explosionDelay = explosionSound?.delay === 0 ? 1 : explosionSound?.delay;
        explosionFile = explosionSound?.file;
    }
    */
    const explosionSound = {};
    explosionSound.volume = handler.allSounds?.explosion?.volume || 0.25;
    explosionSound.delay = handler.allSounds?.explosion?.delay || 1;
    explosionSound.file = handler.allSounds?.explosion?.file || ""

    // builds Source Token file if Enabled, and pulls from flags if already set
    //let sourceFX;
    //let sFXScale;
    //let customSourcePath; 
    const sourceFX = {};
    if (handler.sourceEnable) {
        sourceFX.customSourcePath = handler.sourceCustomEnable ? handler.sourceCustomPath : false;
        sourceFX.data = await buildFile(true, handler.sourceName, "static", handler.sourceVariant, handler.sourceColor, customSourcePath);
        sourceFX.sFXScale = 2 * sourceToken.w / sourceFX.data.metadata.width;
    }
    // builds Target Token file if Enabled, and pulls from flags if already set
    //let targetFX;
    //let tFXScale;
    //let customTargetPath;
    const targetFX = {};
    if (handler.targetEnable) {
        targetFX.customTargetPath = handler.targetCustomEnable ? handler.targetCustomPath : false;
        targetFX.data = await buildFile(true, handler.targetName, "static", handler.targetVariant, handler.targetColor, targetFX.customTargetPath);
    }

    //logging explosion Scale
    let scale = ((200 * handler.explosionRadius) / explosion?.data?.metadata?.width) ?? 1;

    let returnWeapons = ['dagger', 'hammer', 'greatsword', 'chakram']
    let switchReturn = returnWeapons.some(el => data.switchAnimation.includes(el)) ? data.return : false;
    let returnDelay;
    switch (true) {
        case data.switchAnimation.includes('dagger'):
        case data.switchAnimation.includes('hammer'):
            returnDelay = 1000;
            break;
        default:
            returnDelay = 1500;
    }
    async function cast() {
        //let arrayLength = handler.allTargets.length;
        //for (var i = 0; i < arrayLength; i++) {

        //let target = handler.allTargets[i];
        if (handler.targetEnable) {
            targetFX.tFXScale = 2 * target.w / targetFX.data.metadata.width;
        }

        //Checks Range and sends it to Range Builder if true
        let hit;
        if (handler.playOnMiss) {
            hit = handler.hitTargetsId.includes(target.id) ? false : true;
        } else {
            hit = false;
        }

        await new Sequence()
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
            .thenDo(function () {
                Hooks.callAll("aaAnimationStart", sourceToken, target)
            })
            .effect()
                .file(attack.file)
                .atLocation(sourceToken)
                .reachTowards(target)
                .JB2A()
                .randomizeMirrorY()
                .repeats(handler.animationLoops, handler.loopDelay)
                .missed(hit)
                .name("animation")
                .belowTokens(handler.animLevel)
                .addOverride(
                    async (effect, data) => {
                        return data
                    })
            //.waitUntilFinished(-700/* + handler.explosionDelay*/)
            .effect()
                .file(attack.returnFile)
                .delay(returnDelay)
                .atLocation(sourceToken)
                .repeats(handler.animationLoops, handler.loopDelay)
                .reachTowards("animation")
                .playIf(switchReturn)
                .JB2A()
            .effect()
                .atLocation("animation")
                //.file(explosion.file)
                .scale({ x: scale, y: scale })
                .delay(handler.explosionDelay)
                .repeats(handler.animationLoops, handler.loopDelay)
                .belowTokens(handler.explosionLevel)
                .playIf(() => { return handler.explosion })
                .addOverride(async (effect, data) => {
                    if (handler.explosion) {
                        data.file = explosion.data.file;
                    }
                    return data;
                })
            .sound()
                .file(explosionSound.file)
                .playIf(() => { return explosion.data && handler.explodeSound })
                .delay(explosionSound.delay)
                .volume(explosionSound.volume)
                .repeats(handler.animationLoops, handler.loopDelay)
            .effect()
                .delay(handler.targetDelay)
                .atLocation(target)
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
        await wait(handler.animEnd)
        Hooks.callAll("aa.animationEnd", sourceToken, target)
        //}
    }
    cast()
}
