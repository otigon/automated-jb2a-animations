import { buildFile } from "../file-builder/build-filepath.js";
import { AAanimationData } from "../../aa-classes/animation-data.js";
const wait = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

export async function sneakAttack(handler, autoObject) {
    /*
    const data = {}
    if (autoObject) {
        //const autoOverridden = handler.autoOverride?.enable
        Object.assign(data, autoObject);
        //data.animation = data.animation || "";
        //data.color = autoOverridden ? handler.autoOverride?.color : data.color;
        //data.repeat = autoOverridden ? handler.autoOverride?.repeat : data.repeat;
        //data.delay = autoOverridden ? handler.autoOverride?.delay : data.delay;
        //data.variant = autoOverridden ? handler.autoOverride?.variant : data.variant;
        //data.itemAudio = {
            //enable: data.enableSound || false,
            //file: data.soundFile,
            //volume: data.soundVolume || 0.25,
            //delay: data.soundDelay || 0,
        //}
    } else {
        //data.animation = handler.animation;
        //data.color = handler.color;
        data.scale = 1;
        data.below = false;
        //data.anchorX = handler.anchorX;
        //data.anchorY = handler.anchorY;
        //data.itemAudio = {
            //enable: handler.allSounds?.items?.enable || false,
            //file: handler.allSounds?.items?.file,
            //volume: handler.allSounds?.items?.volume || 0.25,
            //delay: handler.allSounds?.items?.delay || 0,
        //}
    }
    */
    const data = await AAanimationData._primaryData(handler, autoObject);
    const sneak = await buildFile(true, data.animation, "static", "01", data.color)
    const sourceToken = handler.actorToken;

    const sourceFX = await AAanimationData._sourceFX(handler, sourceToken);
    const sourceScale = sourceToken.w;
    async function cast() {
        new Sequence("Automated Animations")
            .addSequence(sourceFX.sourceSeq)
            .sound()
                .file(data.itemAudio.file)
                .volume(data.itemAudio.volume)
                .delay(data.itemAudio.delay)
                .playIf(() => {
                    return data.itemAudio.enable && data.itemAudio.file;
                })
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