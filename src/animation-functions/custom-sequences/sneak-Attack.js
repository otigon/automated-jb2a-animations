import { buildFile } from "../file-builder/build-filepath.js";
import { AAanimationData } from "../../aa-classes/animation-data.js";
const wait = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

export async function sneakAttack(handler, animationData) {

    const data = animationData.primary;
    const sourceFX = animationData.sourceFX;
    const sneak = await buildFile(true, data.animation, "static", "01", data.color)
    const sourceToken = handler.actorToken;

    //const sourceFX = await AAanimationData._sourceFX(handler, sourceToken);
    const sourceScale = sourceToken.w;
    async function cast() {
        new Sequence("Automated Animations")
            .addSequence(sourceFX.sourceSeq)
            .sound()
                .file(data.itemAudio.file)
                .volume(data.itemAudio.volume)
                .delay(data.itemAudio.delay)
                .playIf(data.playSound)
            .effect()
                .file(sneak.file)
                .atLocation(sourceToken)
                .scale((2 * sourceScale / sneak.metadata.width) * 1)
                .gridSize(canvas.grid.size)
                .belowTokens(false)
                .anchor({ x: data.anchorX, y: data.anchorY })
            .play()
    }
    cast();

}