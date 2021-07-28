import { JB2APATREONDB } from "./jb2a-database.js/jb2a-patreon-database.js";
import { JB2AFREEDB } from "./jb2a-database.js/jb2a-free-database.js";
import { buildTokenAnimationFile, buildSourceTokenFile, buildTargetTokenFile } from "./file-builder/build-filepath.js";
const wait = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

export async function sneakAttack(handler) {

    function moduleIncludes(test) {
        return !!game.modules.get(test);
    }

    let obj01 = moduleIncludes("jb2a_patreon") === true ? JB2APATREONDB : JB2AFREEDB;
    let itemName = handler.convertedName;
    let sneak = await buildTokenAnimationFile(obj01, itemName, handler)
    let sourceToken = handler.actorToken;

    // builds Source Token file if Enabled, and pulls from flags if already set
    let sourceFX;
    let sFXScale;
    if (handler.sourceEnable) {
        sourceFX = await buildSourceTokenFile(obj01, handler.sourceName, handler);
        sFXScale = 2 * sourceToken.w / sourceFX.metadata.width;
    }
    // builds Target Token file if Enabled, and pulls from flags if already set
    /*
    let targetFX;
    if (handler.targetEnable) {
        targetFX = await buildTargetTokenFile(obj01, handler.targetName, handler)
    }
    */


    async function cast() {
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
                //console.log(data)
                return data;
            })

            .effect()
            .file(sneak.file)
            .atLocation(sourceToken)
            .scale(2 * sourceToken.w / sneak.metadata.width)
            .anchor({ x: 0.5, y: 0.7 })
            .play()
    }
    cast();

}