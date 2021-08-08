import { buildShieldFile, buildSourceTokenFile } from "../file-builder/build-filepath.js"
import { JB2APATREONDB } from "../databases/jb2a-patreon-database.js";
import { JB2AFREEDB } from "../databases/jb2a-free-database.js";
//import { AAITEMCHECK } from "./item-arrays.js";

const wait = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

export async function shieldSpell(handler) {
    function moduleIncludes(test) {
        return !!game.modules.get(test);
    }
    let obj01 = moduleIncludes("jb2a_patreon") === true ? JB2APATREONDB : JB2AFREEDB;
    //let itemName = handler.convertedName;
    let globalDelay = game.settings.get("autoanimations", "globaldelay");
    await wait(globalDelay);

    // Random Color pull given object path
    //Builds standard File Path
    let onToken = await buildShieldFile(obj01, handler);
    // builds Source Token file if Enabled, and pulls from flags if already set
    let sourceFX;
    if (handler.sourceEnable) {
        sourceFX = await buildSourceTokenFile(obj01, handler.sourceName, handler)
    }

    let sourceToken = handler.actorToken;
    //let animWidth = onToken.metadata.width;
    let scale = ((sourceToken.w / onToken.metadata.width) * 1.75) * handler.scale

    async function cast() {
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
                    .file(onToken.file01)
                    .scale(scale)
                    .atLocation(sourceToken)
                    .waitUntilFinished(-500)        
                .effect()
                    .file(onToken.file02)
                    .scale(scale)
                    .atLocation(sourceToken)
                    .fadeIn(300)
                    .fadeOut(300)
                    .waitUntilFinished(-500)
                .effect()
                    .file(onToken.file03)
                    .scale(scale)
                    .atLocation(sourceToken)                          
                .play()
            //await wait(250)
    }
    cast()
}
