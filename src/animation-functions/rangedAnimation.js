import { buildFile } from "./file-builder/build-filepath.js"
//import { JB2APATREONDB } from "./databases/jb2a-patreon-database.js";
//import { JB2AFREEDB } from "./databases/jb2a-free-database.js";
import { AAITEMCHECK } from "./item-arrays.js";

const wait = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

export async function rangedAnimations(handler, autoObject) {
    function moduleIncludes(test) {
        return !!game.modules.get(test);
    }

    // Sets JB2A database and Global Delay
    //let jb2a = moduleIncludes("jb2a_patreon") === true ? JB2APATREONDB : JB2AFREEDB;
    let globalDelay = game.settings.get("autoanimations", "globaldelay");
    await wait(globalDelay);

    const data = {}
    if (autoObject) {
        const autoOverridden = handler.options?.overrideAuto
        Object.assign(data, autoObject[0])
        data.itemName = data.animation;
        data.color = autoOverridden ? handler.options?.autoColor : data.color;
        data.repeat = autoOverridden ? handler.options?.autoRepeat : data.repeat;
        data.delay = autoOverridden ? handler.options?.autoDelay : data.delay;
    } else {
        data.itemName = handler.convertedName;
        if (data.itemName === "arrow") { data.dmgType = handler.rangedOptions?.rangeDmgType ?? "regular" } else {
            data.dmgType = handler.rangedOptions?.rangeDmgType ?? "physical";
        }
        let dmgType;
        if (data.itemName === "arrow") { dmgType = handler.rangedOptions?.rangeDmgType ?? "regular" } else {
            dmgType = handler.rangedOptions?.rangeDmgType ?? "physical";
        }    
        const variant = AAITEMCHECK.spellattack.some(el => data.itemName.includes(el)) ? handler.spellVariant : dmgType;
        data.variant = data.itemName === "rangelasersword" || data.itemName === "rangedagger" || data.itemName === "rangehandaxe" || data.itemName === "chakram" ? handler.dtvar : variant;
        data.color = handler.color;
        data.repeat = handler.animationLoops;
        data.delay = handler.loopDelay;
    }
    //Builds Primary File Path and Pulls from flags if already set
    const attack = await buildFile(false, data.itemName, "range", data.variant, data.color)
    //let attack =  await buildRangedFile(jb2a, itemName, handler);
    const sourceToken = handler.actorToken;

    //Builds Explosion File Path if Enabled, and pulls from flags if already set
    //let explosion;
    //let customExplosionPath;
    const explosion = {};
    if (handler.flags.explosion) {
        explosion.customExplosionPath = handler.customExplode ? handler.customExplosionPath : false;
        explosion.data = await buildFile(true, handler.explosionVariant, "static", "01", handler.explosionColor, explosion.customExplosionPath)
    }

    //let explosionSound = handler.allSounds?.explosion;
    //let explosionVolume = 0.25;
    //let explosionDelay = 1;
    //let explosionFile = "";
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
        sourceFX.data = await buildFile(true, handler.sourceName, "static", handler.sourceVariant, handler.sourceColor, sourceFX.customSourcePath);
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
    let scale = ((200 * handler.explosionRadius) / explosion?.metadata?.width) ?? 1;

    async function cast() {
        let arrayLength = handler.allTargets.length;
        for (var i = 0; i < arrayLength; i++) {

            let target = handler.allTargets[i];
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
                .thenDo(function() {
                    Hooks.callAll("aa.animationStart", sourceToken, target)
                })                       
                .effect()
                    .file(attack.file)
                    .atLocation(sourceToken)
                    .reachTowards(target)
                    .JB2A()
                    .randomizeMirrorY()
                    .repeats(data.repeat, data.delay)
                    .missed(hit)
                    .name("animation")
                    .belowTokens(handler.animLevel)
                    .addOverride(
                        async (effect, data) => {
                            return data
                        })
                    //.waitUntilFinished(-500 + handler.explosionDelay)
                .effect()
                    .atLocation("animation")
                    //.file(explosion.file)
                    .scale({ x: scale, y: scale })
                    .delay(500 + handler.explosionDelay)
                    .repeats(data.repeat, data.delay)
                    .belowTokens(handler.explosionLevel)
                    .playIf(() => { return explosion.data })
                    .addOverride(async (effect, data) => {
                        if (explosion.data) {
                            data.file = explosion.data.file;
                        }
                        return data;
                    })
                .sound()
                    .file(explosionSound.file)
                    .playIf(() => {return explosion && handler.explodeSound})
                    .delay(explosionSound.delay)
                    .volume(explosionSound.volume)
                    .repeats(data.repeat, data.delay)
                .effect()
                    .delay(handler.targetDelay)
                    .atLocation(target)
                    .scale( targetFX.tFXScale * handler.targetScale)
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
        }
    }
    cast()
}
