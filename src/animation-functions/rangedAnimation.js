import { buildFile } from "./file-builder/build-filepath.js"
import { JB2APATREONDB } from "./databases/jb2a-patreon-database.js";
import { JB2AFREEDB } from "./databases/jb2a-free-database.js";
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
    //console.log(autoObject);
    //console.log(autoObject[0].animation)
    /*
    let itemName = handler.convertedName;
    let dmgType;
    if (itemName === "arrow") { dmgType = handler.rangedOptions?.rangeDmgType ?? "regular" } else {
        dmgType = handler.rangedOptions?.rangeDmgType ?? "physical";
    }
    let variant = AAITEMCHECK.spellattack.some(el => itemName.includes(el)) ? handler.spellVariant : dmgType;
    variant = itemName === "rangelasersword" || itemName === "rangedagger" || itemName === "rangehandaxe" || itemName === "chakram" ? handler.dtvar : variant;
    let color = handler.color
    */
    let itemName;
    let dmgType;
    let variant;
    let color;
    if (autoObject) {
        const auto = autoObject[0]
        itemName = auto.animation;
        variant = auto.variant;
        color = auto.color;
    } else {
        itemName = handler.convertedName;
        if (itemName === "arrow") { dmgType = handler.rangedOptions?.rangeDmgType ?? "regular" } else {
            dmgType = handler.rangedOptions?.rangeDmgType ?? "physical";
        }
        variant = AAITEMCHECK.spellattack.some(el => itemName.includes(el)) ? handler.spellVariant : dmgType;
        variant = itemName === "rangelasersword" || itemName === "rangedagger" || itemName === "rangehandaxe" || itemName === "chakram" ? handler.dtvar : variant;
        color = handler.color
    }
    //Builds Primary File Path and Pulls from flags if already set
    let attack = await buildFile(false, itemName, "range", variant, color)
    //let attack =  await buildRangedFile(jb2a, itemName, handler);
    let sourceToken = handler.actorToken;

    //Builds Explosion File Path if Enabled, and pulls from flags if already set
    let explosion;
    let customExplosionPath;
    if (handler.flags.explosion) {
        customExplosionPath = handler.customExplode ? handler.customExplosionPath : false;
        explosion = await buildFile(true, handler.explosionVariant, "static", "01", handler.explosionColor, customExplosionPath)
    }

    let explosionSound = handler.allSounds?.explosion;
    let explosionVolume = 0.25;
    let explosionDelay = 1;
    let explosionFile = "";
    if (handler.explodeSound){
        explosionVolume = explosionSound?.volume || 0.25;
        explosionDelay = explosionSound?.delay === 0 ? 1 : explosionSound?.delay;
        explosionFile = explosionSound?.file;
    }

    // builds Source Token file if Enabled, and pulls from flags if already set
    let sourceFX;
    let sFXScale;
    let customSourcePath; 
    if (handler.sourceEnable) {
        customSourcePath = handler.sourceCustomEnable ? handler.sourceCustomPath : false;
        sourceFX = await buildFile(true, handler.sourceName, "static", handler.sourceVariant, handler.sourceColor, customSourcePath);
        sFXScale = 2 * sourceToken.w / sourceFX.metadata.width;
    }
    // builds Target Token file if Enabled, and pulls from flags if already set
    let targetFX;
    let tFXScale;
    let customTargetPath; 
    if (handler.targetEnable) {
        customTargetPath = handler.targetCustomEnable ? handler.targetCustomPath : false;
        targetFX = await buildFile(true, handler.targetName, "static", handler.targetVariant, handler.targetColor, customTargetPath);
    }

    //logging explosion Scale
    let scale = ((200 * handler.explosionRadius) / explosion?.metadata?.width) ?? 1;

    async function cast() {
        let arrayLength = handler.allTargets.length;
        for (var i = 0; i < arrayLength; i++) {

            let target = handler.allTargets[i];
            if (handler.targetEnable) {
                tFXScale = 2 * target.w / targetFX.metadata.width;
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
                    .scale(sFXScale * handler.sourceScale)
                    .repeats(handler.sourceLoops, handler.sourceLoopDelay)
                    .belowTokens(handler.sourceLevel)
                    .waitUntilFinished(handler.sourceDelay)
                    .playIf(handler.sourceEnable)
                    .addOverride(async (effect, data) => {
                        if (handler.sourceEnable) {
                            data.file = sourceFX.file;
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
                    .repeats(handler.animationLoops, handler.loopDelay)
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
                    .repeats(handler.animationLoops, handler.loopDelay)
                    .belowTokens(handler.explosionLevel)
                    .playIf(() => { return handler.explosion })
                    .addOverride(async (effect, data) => {
                        if (handler.explosion) {
                            data.file = explosion.file;
                        }
                        return data;
                    })
                .sound()
                    .file(explosionFile)
                    .playIf(() => {return explosion && handler.explodeSound})
                    .delay(explosionDelay)
                    .volume(explosionVolume)
                    .repeats(handler.animationLoops, handler.loopDelay)
                .effect()
                    .delay(handler.targetDelay)
                    .atLocation(target)
                    .scale(tFXScale * handler.targetScale)
                    .repeats(handler.targetLoops, handler.targetLoopDelay)
                    .belowTokens(handler.targetLevel)
                    .playIf(handler.targetEnable)
                    .addOverride(async (effect, data) => {
                        if (handler.targetEnable) {
                            data.file = targetFX.file;
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
