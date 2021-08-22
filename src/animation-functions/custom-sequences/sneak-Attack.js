import { JB2APATREONDB } from "../databases/jb2a-patreon-database.js";
import { JB2AFREEDB } from "../databases/jb2a-free-database.js";
import { buildFile } from "../file-builder/build-filepath.js";
const wait = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

export async function sneakAttack(handler) {

    let itemName = handler.convertedName;
    let sneak = await buildFile(true, itemName, "static", "01", handler.color)
    let sourceToken = handler.actorToken;

    // builds Source Token file if Enabled, and pulls from flags if already set
    let sourceFX;
    let sFXScale;
    if (handler.sourceEnable) {
        sourceFX = await buildFile(true, handler.sourceName, "static", handler.sourceVariant, handler.sourceColor);
        sFXScale = 2 * sourceToken.w / sourceFX.metadata.width;
    }
    // builds Target Token file if Enabled, and pulls from flags if already set
    /*
    let targetFX;
    if (handler.targetEnable) {
        targetFX = await buildTargetTokenFile(obj01, handler.targetName, handler)
    }
    */
    const anchorX = handler.options?.anchorX || 0.5;
    const anchorY = handler.options?.anchorY || 0.7;

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
                return data;
            })

            .effect()
            .file(sneak.file)
            .atLocation(sourceToken)
            .scale(2 * sourceToken.w / sneak.metadata.width)
            .anchor({ x: anchorX, y: anchorY })
            .play()
    }
    cast();

}