import { buildTokenAnimationFile, buildAfterFile, buildSourceTokenFile, buildTargetTokenFile } from "./file-builder/build-filepath.js"
import { JB2APATREONDB } from "./jb2a-database.js/jb2a-patreon-database.js";
import { JB2AFREEDB } from "./jb2a-database.js/jb2a-free-database.js";
//import { AAITEMCHECK } from "./item-arrays.js";

const wait = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

export async function onTokenAnimation(handler) {
    function moduleIncludes(test) {
        return !!game.modules.get(test);
    }
    let obj01 = moduleIncludes("jb2a_patreon") === true ? JB2APATREONDB : JB2AFREEDB;
    let itemName = handler.convertedName;
    let globalDelay = game.settings.get("autoanimations", "globaldelay");
    await wait(globalDelay);

    // Random Color pull given object path
    //Builds standard File Path
    let onToken = await buildTokenAnimationFile(obj01, itemName, handler);
    // builds Source Token file if Enabled, and pulls from flags if already set
    let sourceFX;
    if (handler.sourceEnable) {
        sourceFX = await buildSourceTokenFile(obj01, handler.sourceName, handler)
    }
    // builds Target Token file if Enabled, and pulls from flags if already set
    let targetFX;
    if (handler.targetEnable) {
        targetFX = await buildTargetTokenFile(obj01, handler.targetName, handler)
    }

    let sourceToken = handler.actorToken;
    let explosion;
    if (handler.explosion) {
        explosion = await buildAfterFile(obj01, handler);
    }
    let exScale = explosion?.scale ?? 1;
    let animWidth = onToken.metadata.width;
    if (handler.allTargets.length === 0 && (itemName === "curewounds" || itemName === "generichealing")) {
    new Sequence()
        .effect()
            .atLocation(sourceToken)
            .scale(handler.sourceScale)
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
        .effect()
            .file(onToken.file)
            .atLocation(sourceToken)
            .randomizeMirrorY()
            .repeats(handler.animationLoops, handler.loopDelay)
            //.missed(hit)
            .scale(((sourceToken.w / animWidth) * 1.5) * handler.scale)
            .belowTokens(handler.animLevel)
            .addOverride(
                async (effect, data) => {
                    return data
                })
        .play()
    }
    //.waitUntilFinished(-500 + handler.explosionDelay)

    async function cast() {
        let arrayLength = handler.allTargets.length;
        for (var i = 0; i < arrayLength; i++) {

            let target = handler.allTargets[i];
            let scale = itemName.includes("creature") ? (sourceToken.w / animWidth) * 1.5 : (target.w / animWidth) * 1.75
            let hit;
            if (handler.playOnMiss) {
                hit = handler.hitTargetsId.includes(target.id) ? false : true;
            } else {
                hit = false;
            }

            new Sequence()
                    .effect()
                    .atLocation(sourceToken)
                    .scale(handler.sourceScale)
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
                .effect()
                    .delay(handler.targetDelay)
                    .atLocation("animation")
                    .scale(handler.targetScale)
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
            //await wait(250)
        }
    }
    cast()
}
