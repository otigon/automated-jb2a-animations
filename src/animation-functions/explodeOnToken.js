import { buildAfterFile, buildSourceTokenFile, buildTargetTokenFile } from "./file-builder/build-filepath.js"
import { JB2APATREONDB } from "./jb2a-database.js/jb2a-patreon-database.js";
import { JB2AFREEDB } from "./jb2a-database.js/jb2a-free-database.js";
//import { AAITEMCHECK } from "./item-arrays.js";

const wait = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

export async function explodeOnToken(handler) {
    function moduleIncludes(test) {
        return !!game.modules.get(test);
    }
    //console.log(JB2APATREONDB)
    let obj01 = moduleIncludes("jb2a_patreon") === true ? JB2APATREONDB : JB2AFREEDB;
    let globalDelay = game.settings.get("autoanimations", "globaldelay");
    await wait(globalDelay);

    let sourceToken = handler.actorToken;
    let explosion = await buildAfterFile(obj01, handler)

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
    

    //console.log(handler.animLevel);
    if (handler.animType === "t10") {
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
                //console.log(data)
                return data;
                })            
            .effect()
                .file(explosion.file)
                .atLocation(sourceToken)
                .randomizeMirrorY()
                .repeats(handler.explosionLoops, handler.explosionDelay)
                //.missed(hit)
                .scale(explosion.scale)
                .belowTokens(handler.animLevel)
                .addOverride(
                    async (effect, data) => {
                        //console.log(data)
                        return data
                    })
            .play()
        return
    } else {
        //.waitUntilFinished(-500 + handler.explosionDelay)

        async function cast() {
            let arrayLength = handler.allTargets.length;
            for (var i = 0; i < arrayLength; i++) {

                let target = handler.allTargets[i];

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
                            //console.log(data)
                            return data;
                            })            
                    .effect()
                        .file(explosion.file)
                        .atLocation(target)
                        //.randomizeMirrorY()
                        .repeats(handler.explosionLoops, handler.explosionDelay)
                        .scale(explosion.scale)
                        .belowTokens(handler.animLevel)
                        .playIf(() => { return arrayLength })
                    .effect()
                        .delay(handler.targetDelay)
                        .atLocation(target)
                        .scale(handler.targetScale)
                        .repeats(handler.targetLoops, handler.targetLoopDelay)
                        .belowTokens(handler.targetLevel)
                        .playIf(handler.targetEnable)
                        .addOverride(async (effect, data) => {
                            if (handler.targetEnable) {
                                data.file = targetFX.file;
                            }
                            //console.log(data)
                            return data;
                        })                
                        .play()
                //await wait(250)
            }
        }
        cast()
    }
}
