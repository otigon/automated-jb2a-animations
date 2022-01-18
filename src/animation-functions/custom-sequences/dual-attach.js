import { buildFile } from "../file-builder/build-filepath.js";
import { aaDebugger } from "../../constants/constants.js";
//import { AAanimationData } from "../../aa-classes/animation-data.js";

const wait = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

export async function dualAttach(handler, animationData) {
    const aaDebug = game.settings.get("autoanimations", "debug")

    // Sets JB2A database and Global Delay
    let globalDelay = game.settings.get("autoanimations", "globaldelay");
    await wait(globalDelay);

    const data = animationData.primary;

    if (data.isAuto) {
        data.itemName = data.subAnimation || "";
    } else {
        data.itemName = data.options?.name || "";
    }

    const animFile = await buildFile(false, data.itemName, "range", data.variant, data.color, data.customPath)
    const onlyX = data.enableCustom ? data.onlyX : false;

    const sourceToken = handler.actorToken;
    let effectExists = Sequencer.EffectManager.getEffects({ object: sourceToken, origin: handler.item.uuid })
    if (aaDebug) { aaDebugger("Dual Attach Animation Start", data, animFile) }
    async function cast() {

        //for (let target of targets) {
        let arrayLength = handler.allTargets.length;
        for (var i = 0; i < arrayLength; i++) {
            let target = handler.allTargets[i];
            let checkTarget = effectExists.filter(i => i.data.target.includes(target.id)).length > 0;
            new Sequence("Automated Animations")
                /*
                .thenDo(function() {
                    Hooks.callAll("aa.animationStart", sourceToken, target)
                })
                */
                .sound()
                    .file(data.itemAudio.file, true)
                    .volume(data.itemAudio.volume)
                    .delay(data.itemAudio.delay)
                    .repeats(data.itemAudio.repeat, data.delay)
                    .playIf(data.playSound)
                .effect()
                    .file(animFile.file)
                    .attachTo(sourceToken)
                    .stretchTo(target, {attachTo: true, onlyX: onlyX})
                    .persist(true)
                    .playbackRate(data.playbackRate)
                    .origin(handler.item.uuid)
                    .belowTokens(data.below)
                    .playIf(!checkTarget)
                .play()
                //Hooks.callAll("aa.animationEnd", sourceToken, target)
        }
    }
    cast()
}
