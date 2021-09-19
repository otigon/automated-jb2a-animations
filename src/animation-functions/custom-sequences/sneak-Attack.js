import { JB2APATREONDB } from "../databases/jb2a-patreon-database.js";
import { JB2AFREEDB } from "../databases/jb2a-free-database.js";
import { buildFile } from "../file-builder/build-filepath.js";
import { AAanimationData } from "../../aa-classes/animation-data.js";
const wait = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

export async function sneakAttack(handler) {

    let itemName = handler.convertedName;
    let sneak = await buildFile(true, itemName, "static", "01", handler.color)
    const sourceToken = handler.actorToken;

    // builds Source Token file if Enabled, and pulls from flags if already set
    const sourceFX = await AAanimationData._sourceFX(handler, sourceToken);
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
            .scale(sourceFX.sFXScale * sourceFX.scale)
            .repeats(sourceFX.repeat, sourceFX.delay)
            .belowTokens(sourceFX.below)
            .waitUntilFinished(sourceFX.startDelay)
            .playIf(sourceFX.enabled)
            .addOverride(async (effect, data) => {
                if (sourceFX.enabled) {
                    data.file = sourceFX.data.file;
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