import { buildRangedFile, buildAfterFile, buildSourceTokenFile, buildTargetTokenFile } from "./file-builder/build-filepath.js"
import { JB2APATREONDB } from "./jb2a-database.js/jb2a-patreon-database.js";
import { JB2AFREEDB } from "./jb2a-database.js/jb2a-free-database.js";
//import { AAITEMCHECK } from "./item-arrays.js";

const wait = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

export async function rangedAnimations(handler) {
    function moduleIncludes(test) {
        return !!game.modules.get(test);
    }

    // Sets JB2A database and Global Delay
    let jb2a = moduleIncludes("jb2a_patreon") === true ? JB2APATREONDB : JB2AFREEDB;
    let itemName = handler.convertedName;
    switch (handler.convertedName) {
        case "dagger":
        case "handaxe":
        case "spear":
            itemName = "range" + itemName;
            console.log("adjusted name is " + itemName);
            break;
    }
    let globalDelay = game.settings.get("autoanimations", "globaldelay");
    await wait(globalDelay);

    //Builds Primary File Path and Pulls from flags if already set
    let attack =  await buildRangedFile(jb2a, itemName, handler);
    let sourceToken = handler.actorToken;

    //Builds Explosion File Path if Enabled, and pulls from flags if already set
    let explosion;
    if (handler.flags.explosion) {
        explosion = await buildAfterFile(jb2a, handler)
    }

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

    //logging explosion Scale
    let scale = explosion?.scale ?? 1;

    async function cast() {
        let arrayLength = handler.allTargets.length;
        for (var i = 0; i < arrayLength; i++) {

            let target = handler.allTargets[i];

            //Checks Range and sends it to Range Builder if true
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
                            console.log(data)
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
                        //console.log(data)
                        return data;
                    })
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
            await wait(750)
        }
    }
    cast()
}
