import { buildTokenAnimationFile, buildAfterFile } from "./common-functions/build-filepath.js"
import { JB2APATREONDB } from "./jb2a-patreon-database.js";
import { JB2AFREEDB } from "./jb2a-free-database.js";
//import { AAITEMCHECK } from "./item-arrays.js";
//import getVideoDimensionsOf from "../canvas-animation/video-metadata.js";

const wait = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

export async function onTokenAnimation(handler) {
    function moduleIncludes(test) {
        return !!game.modules.get(test);
    }
    console.log("START")
    //console.log(JB2APATREONDB)
    let obj01 = moduleIncludes("jb2a_patreon") === true ? JB2APATREONDB : JB2AFREEDB;
    let itemName = handler.convertedName;
    let globalDelay = game.settings.get("autoanimations", "globaldelay");
    await wait(globalDelay);

    // Random Color pull given object path
    //Builds standard File Path
    let onToken = handler.flags.defaults?.primary !== undefined ? handler.flags.defaults.primary : await buildTokenAnimationFile(obj01, itemName, handler);
    console.log(onToken)
    /*
    if (handler.flags.options.customPath01) {
        filePath = handler.flags.options.customPath01
    }
    console.log(filePath);
    */
    let sourceToken = handler.actorToken;
    let explosion;
    if (handler.flags.explosion) {
        explosion = handler.flags.defaults?.explosion !== undefined ? handler.flags.defaults.explosion : await buildAfterFile(obj01, handler)
    }
    //console.log(explosion);
    let animWidth = onToken.metadata.width;
    if (handler.allTargets.length === 0 && (itemName === "curewounds" || itemName === "generichealing")) {
    new Sequence()
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
                console.log(data)
                return data
            }
        )
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
                .file(onToken.file)
                .atLocation(target)
                //.randomizeMirrorY()
                .repeats(handler.animationLoops, handler.loopDelay)
                .scale(scale * handler.scale)
                .belowTokens(handler.animLevel)
                .playIf(() => { return arrayLength })
                .addOverride(async (effect, data) => {
                    if (handler.explosion) {
                        data.file = explosion.file;
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
