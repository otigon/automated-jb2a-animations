import { buildFile } from "./file-builder/build-filepath.js"
import { aaDebugger } from "../constants/constants.js"
import { AAanimationData } from "../aa-classes/animation-data.js";
//import { AAITEMCHECK } from "./item-arrays.js";

const wait = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

export async function meleeSwitch(handler, target, data, sourceFX, targetFX) {
    const aaDebug = game.settings.get("autoanimations", "debug")

    //Builds Primary File Path and Pulls from flags if already set
    //const data = await AAanimationData._primaryData(handler, autoObject);
    if (aaDebug) { aaDebugger("Switch Animation Start", data) }

    const attack = await buildFile(false, data.switchAnimation, "range", data.switchVariant, data.switchColor);//need to finish
    
    const sourceToken = handler.actorToken;

    const returnWeapons = ['dagger', 'hammer', 'greatsword', 'chakram']
    const switchReturn = returnWeapons.some(el => data.switchAnimation.includes(el)) ? data.return : false;
    let returnDelay;
    switch (true) {
        case data.switchAnimation.includes('dagger'):
        case data.switchAnimation.includes('hammer'):
            returnDelay = 1000;
            break;
        default:
            returnDelay = 1500;
    }
    async function cast() {

        let targetSequence = AAanimationData._targetSequence(targetFX, target, handler);

        //Checks Range and sends it to Range Builder if true
        let hit;
        if (handler.playOnMiss) {
            hit = handler.hitTargetsId.includes(target.id) ? false : true;
        } else {
            hit = false;
        }

        await new Sequence("Automated Animations")
            .addSequence(sourceFX.sourceSeq)
            .thenDo(function () {
                Hooks.callAll("aaAnimationStart", sourceToken, target)
            })
            .sound()
                .file(data.switchAudio.file)
                .volume(data.switchAudio.volume)
                .delay(data.switchAudio.delay)
                .repeats(data.repeat, data.delay)
                .playIf(() => {
                    return data.switchAudio.enable && data.switchAudio.file && data.switchType !== "off";
                })
            .effect()
                .file(attack.file)
                .atLocation(sourceToken)
                .reachTowards(target)
                .randomizeMirrorY()
                .repeats(data.repeat, data.delay)
                .missed(hit)
                .name("animation")
                .belowTokens(data.below)
                //.waitUntilFinished(data.explosion?.delay)
            .effect()
                .file(attack.returnFile)
                .delay(returnDelay)
                .atLocation(sourceToken)
                .repeats(data.repeat, data.delay)
                .reachTowards("animation")
                .playIf(switchReturn)
            .sound()
                .file(data.explosion?.audio?.file)
                .playIf(data.explosion?.playSound)
                .delay(data.explosion?.audio?.delay + data.explosion?.delay)
                .volume(data.explosion?.audio?.volume)
                .repeats(data.repeat, data.delay)
            .effect()
                .atLocation("animation")
                .file(data.explosion?.data?.file)
                .scale({ x: data.explosion?.scale, y: data.explosion?.scale })
                .delay(data.explosion?.delay)
                .repeats(data.repeat, data.delay)
                .belowTokens(data.explosion?.below)
                .playIf(data.explosion?.enabled)
            .addSequence(targetSequence.targetSeq)
            .play()
        await wait(handler.animEnd)
        Hooks.callAll("aa.animationEnd", sourceToken, target)
        //}
    }
    cast()
}
