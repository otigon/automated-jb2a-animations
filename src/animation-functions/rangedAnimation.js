import { buildFile } from "./file-builder/build-filepath.js"
import { JB2APATREONDB } from "./databases/jb2a-patreon-database.js";
import { JB2AFREEDB } from "./databases/jb2a-free-database.js";
import { AAITEMCHECK } from "./item-arrays.js";

const wait = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

export async function rangedAnimations(handler) {
    function moduleIncludes(test) {
        return !!game.modules.get(test);
    }

    // Sets JB2A database and Global Delay
    let jb2a = moduleIncludes("jb2a_patreon") === true ? JB2APATREONDB : JB2AFREEDB;
    let itemName = handler.convertedName;
    console.log(itemName)
    let globalDelay = game.settings.get("autoanimations", "globaldelay");
    await wait(globalDelay);

    let dmgType;
    if (itemName === "arrow") { dmgType = handler.rangedOptions?.rangeDmgType ?? "regular" } else {
        dmgType = handler.rangedOptions?.rangeDmgType ?? "physical";
    }
    let variant = AAITEMCHECK.spellattack.some(el => itemName.includes(el)) ? handler.spellVariant : dmgType;
    variant = itemName === "rangelasersword" || itemName === "rangedagger" || itemName === "rangehandaxe" ? handler.dtvar : variant;
    console.log(variant)
    //Builds Primary File Path and Pulls from flags if already set
    let attack = await buildFile(false, itemName, "range", variant, handler.color)
    //let attack =  await buildRangedFile(jb2a, itemName, handler);
    let sourceToken = handler.actorToken;

    //Builds Explosion File Path if Enabled, and pulls from flags if already set
    let explosion;
    if (handler.flags.explosion) {
        explosion = await buildFile(true, handler.explosionVariant, "static", "01", handler.explosionColor)
    }

    let explosionSound = handler.allSounds?.explosion;
    let explosionVolume = 0.25;
    let explosionDelay = 1;
    let explosionFile = "";
    let playExSound = explosion && handler.explodeSound
    if (handler.explodeSound){
        explosionVolume = explosionSound?.volume || 0.25;
        explosionDelay = explosionSound?.delay === 0 ? 1 : explosionSound?.delay;
        explosionFile = explosionSound?.file;
    }

    // builds Source Token file if Enabled, and pulls from flags if already set
    let sourceFX;
    let sFXScale;
    if (handler.sourceEnable) {
        sourceFX = await buildFile(true, handler.sourceName, "static", handler.sourceVariant, handler.sourceColor);
        sFXScale = 2 * sourceToken.w / sourceFX.metadata.width;
    }
    // builds Target Token file if Enabled, and pulls from flags if already set
    let targetFX;
    let tFXScale;
    if (handler.targetEnable) {
        targetFX = await buildFile(true, handler.targetName, "static", handler.targetVariant, handler.targetColor)
    }

    //logging explosion Scale
    let scale = explosion?.scale ?? 1;

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
                 //console.log(handler.animEnd)
                await wait(handler.animEnd)
                Hooks.callAll("aa.animationEnd", sourceToken, target)
        }
    }
    cast()
}
