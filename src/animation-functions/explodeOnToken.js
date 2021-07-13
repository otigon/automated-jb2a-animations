import { buildTokenAnimationFile, buildAfterFile } from "./common-functions/build-filepath.js"
import { JB2APATREONDB } from "./jb2a-patreon-database.js";
import { JB2AFREEDB } from "./jb2a-free-database.js";
//import { AAITEMCHECK } from "./item-arrays.js";
//import getVideoDimensionsOf from "../canvas-animation/video-metadata.js";

const wait = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

export async function explodeOnToken(handler) {
    function moduleIncludes(test) {
        return !!game.modules.get(test);
    }
    console.log("START")
    console.log(handler)
    //console.log(JB2APATREONDB)
    let obj01 = moduleIncludes("jb2a_patreon") === true ? JB2APATREONDB : JB2AFREEDB;
    let globalDelay = game.settings.get("autoanimations", "globaldelay");
    await wait(globalDelay);

    /*
    if (handler.flags.options.customPath01) {
        filePath = handler.flags.options.customPath01
    }
    console.log(filePath);
    */
    let sourceToken = handler.actorToken;
    let explosion = await buildAfterFile(obj01, handler);
    console.log(explosion);
    if (handler.animType === "t10") {
        new Sequence()
            .effect()
            .file(explosion.file)
            .atLocation(sourceToken)
            .randomizeMirrorY()
            .repeats(explosion.loops, explosion.delay)
            //.missed(hit)
            .scale(explosion.scale)
            .belowTokens(explosion.level)
            .addOverride(
                async (effect, data) => {
                    console.log(data)
                    return data
                }
            )
            .play()
        return
    } else {
        //.waitUntilFinished(-500 + handler.explosionDelay)

        async function cast() {
            let arrayLength = handler.allTargets.length;
            for (var i = 0; i < arrayLength; i++) {

                let target = handler.allTargets[i];
                let hit = handler.hitTargetsId.includes(target.id) ? false : true;

                new Sequence()
                    .effect()
                    .file(explosion.file)
                    .atLocation(target)
                    //.randomizeMirrorY()
                    .repeats(explosion.loops, explosion.delay)
                    .scale(explosion.scale)
                    .belowTokens(explosion.level)
                    .playIf(() => { return arrayLength })
                    .play()
                //await wait(250)
            }
        }
        cast()
    }
}
