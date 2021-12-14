import { buildFile } from "./file-builder/build-filepath.js"
import { aaDebugger } from "../constants/constants.js"
import { AAanimationData } from "../aa-classes/animation-data.js";

const wait = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

export async function rangedAnimations(handler, autoObject) {
    const aaDebug = game.settings.get("autoanimations", "debug")

    // Sets JB2A database and Global Delay
    //let jb2a = moduleIncludes("jb2a_patreon") === true ? JB2APATREONDB : JB2AFREEDB;
    let globalDelay = game.settings.get("autoanimations", "globaldelay");
    await wait(globalDelay);

    const data = await AAanimationData._primaryData(handler, autoObject);
    if (aaDebug) { aaDebugger("Ranged Animation Start", data) }
    const attack = await buildFile(false, data.animation, "range", data.variant, data.color)

    const sourceToken = handler.actorToken;

    //const explosion = await AAanimationData._explosionData(handler);
    //const explosionSound = AAanimationData._explosionSound(handler);
    const sourceFX = await AAanimationData._sourceFX(handler, sourceToken);
    const targetFX = await AAanimationData._targetFX(handler);

    //const scale = ((200 * handler.explosionRadius) / explosion?.data?.metadata?.width) ?? 1;

    async function cast() {
        let arrayLength = handler.allTargets.length;
        for (var i = 0; i < arrayLength; i++) {

            let target = handler.allTargets[i];
            //console.log(target)
            //console.log(sourceToken)
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
                .thenDo(function() {
                    Hooks.callAll("aa.animationStart", sourceToken, target)
                })
                .sound()
                    .file(data.itemAudio.file)
                    .volume(data.itemAudio.volume)
                    .delay(data.itemAudio.delay)
                    .playIf(() => {
                        return data.itemAudio.enable && data.itemAudio.file;
                    })
                .effect()
                    .file(attack.file)
                    .atLocation(sourceToken)
                    .reachTowards(target)
                    //.JB2A()
                    .randomizeMirrorY()
                    .repeats(data.repeat, data.delay)
                    .missed(hit)
                    .name("animation")
                    .belowTokens(data.below)
                    .waitUntilFinished(data.explosion?.delay)
                .effect()
                    .atLocation("animation")
                    .file(data.explosion?.data?.file)
                    .scale({ x: data.explosion?.scale, y: data.explosion?.scale })
                    .delay(500 + data.explosion?.delay)
                    .repeats(data.repeat, data.delay)
                    .belowTokens(data.explosion?.below)
                    .playIf(data.explosion?.enabled)
                    //.waitUntilFinished(explosionDelay)
                .sound()
                    .file(data.explosion?.audio?.file)
                    .playIf(() => {return explosion.enabled && data.explosion?.audio?.enable})
                    .delay(data.explosion?.audio?.delay)
                    .volume(data.explosion?.audio?.volume)
                    .repeats(data.repeat, data.delay)
                .addSequence(targetSequence.targetSeq)
                .play()
                await wait(handler.animEnd)
                Hooks.callAll("aa.animationEnd", sourceToken, target)
        }
    }
    cast()
}
