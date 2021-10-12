import { buildFile } from "../file-builder/build-filepath.js";
import { AAanimationData } from "../../aa-classes/animation-data.js";
const wait = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

export async function sneakAttack(handler, autoObject) {

    const data = {}
    if (autoObject) {
        const autoOverridden = handler.autoOverride?.enable
        Object.assign(data, autoObject);
        data.animation = data.animation || "";
        data.color = autoOverridden ? handler.autoOverride?.color : data.color;
        data.repeat = autoOverridden ? handler.autoOverride?.repeat : data.repeat;
        data.delay = autoOverridden ? handler.autoOverride?.delay : data.delay;
        data.variant = autoOverridden ? handler.autoOverride?.variant : data.variant;
    } else {
        data.animation = handler.animation;
        data.color = handler.color;
        data.scale = 1;
        data.below = false;
        data.anchorX = handler.anchorX;
        data.anchorY = handler.anchorY;
    }
    const sneak = await buildFile(true, data.animation, "static", "01", data.color)
    const sourceToken = handler.actorToken;

    const sourceFX = await AAanimationData._sourceFX(handler, sourceToken);

    async function cast() {
        new Sequence("Automated Animations")
            .addSequence(sourceFX.sourceSeq)
            .effect()
                .file(sneak.file)
                .atLocation(sourceToken)
                .scale((2 * sourceToken.w / sneak.metadata.width) * data.scale)
                .gridSize(canvas.grid.size)
                .belowTokens(data.below)
                .anchor({ x: data.anchorX, y: data.anchorY })
            .play()
    }
    cast();

}