import { buildFile } from "./file-builder/build-filepath.js"
import { JB2APATREONDB } from "./databases/jb2a-patreon-database.js";
import { JB2AFREEDB } from "./databases/jb2a-free-database.js";
import { aaDebugger } from "../constants/constants.js"
//import { AAITEMCHECK } from "./item-arrays.js";

const wait = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

export async function onTokenAnimation(handler) {
    const aaDebug = game.settings.get("autoanimations", "debug")
    function moduleIncludes(test) {
        return !!game.modules.get(test);
    }
    let obj01 = moduleIncludes("jb2a_patreon") === true ? JB2APATREONDB : JB2AFREEDB;
    let itemName = handler.convertedName;
    let globalDelay = game.settings.get("autoanimations", "globaldelay");
    await wait(globalDelay);
    let sourceToken = handler.actorToken;

    // Random Color pull given object path
    //Builds standard File Path
    let customPath = handler.enableCustom01 ? handler.custom01 : false;
    let onToken = await buildFile(true, itemName, "static", handler.spellVariant, handler.color, customPath);
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

    let explosion;
    let customExplosionPath;
    if (handler.explosion) {
        customExplosionPath = handler.customExplode ? handler.customExplosionPath : false;
        explosion = await buildFile(true, handler.explosionVariant, "static", "01", handler.explosionColor, customExplosionPath)
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
    let exScale = ((200 * handler.explosionRadius) / explosion?.metadata?.width) ?? 1;
    let animWidth = onToken.metadata.width;
    if (handler.allTargets.length === 0 && (itemName === "curewounds" || itemName === "generichealing")) {
    new Sequence()
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
            Hooks.callAll("aa.animationStart", sourceToken, "no-target")
        })             
        .effect()
            .atLocation(sourceToken)
            .scale(exScale)
            .delay(handler.explosionDelay)
            //.randomizeMirrorY()
            .repeats(handler.animationLoops, handler.loopDelay)
            .belowTokens(handler.explosionLevel)
            .playIf(() => {return explosion})
            .addOverride(async (effect, data) => {
                if (explosion) {
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
            .file(onToken.file)
            .atLocation(sourceToken)
            //.randomizeMirrorY()
            .repeats(handler.animationLoops, handler.loopDelay)
            //.missed(hit)
            .scale(((sourceToken.w / animWidth) * 1.5) * handler.scale)
            .belowTokens(handler.animLevel)
            .addOverride(
                async (effect, data) => {
                    return data
                })
        .play()
        await wait(500)
        Hooks.callAll("aa.animationEnd", sourceToken, "no-target")
    }
    //.waitUntilFinished(-500 + handler.explosionDelay)

    async function cast() {
        let arrayLength = handler.allTargets.length;
        for (var i = 0; i < arrayLength; i++) {

            let target = handler.allTargets[i];
            if (handler.targetEnable) {
                tFXScale = 2 * target.w / targetFX.metadata.width;
            }        

            let scale = itemName.includes("creature") ? (sourceToken.w / animWidth) * 1.5 : (target.w / animWidth) * 1.75
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
                    .file(onToken.file)
                    .atLocation(target)
                    //.randomizeMirrorY()
                    .repeats(handler.animationLoops, handler.loopDelay)
                    .scale(scale * handler.scale)
                    .belowTokens(handler.animLevel)
                    .name("animation")
                    .playIf(() => { return arrayLength })
                .effect()
                    .atLocation("animation")
                    .scale(exScale)
                    .delay(handler.explosionDelay)
                    //.randomizeMirrorY()
                    .repeats(handler.animationLoops, handler.loopDelay)
                    .belowTokens(handler.explosionLevel)
                    .playIf(() => {return explosion})
                    .addOverride(async (effect, data) => {
                        if (explosion) {
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
                    .atLocation("animation")
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
                await wait(500)
                Hooks.callAll("aa.animationEnd", sourceToken, target)
        }
    }
    cast()
}
