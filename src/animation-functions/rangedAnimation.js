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

    const data = AAanimationData._rangeData(handler, autoObject);
    if (aaDebug) { aaDebugger("Ranged Animation Start", data) }
    const attack = await buildFile(false, data.itemName, "range", data.variant, data.color)

    const sourceToken = handler.actorToken;

    const explosion = handler.flags.explosion ? await AAanimationData._explosionData(handler) : {};
    const explosionSound = AAanimationData._explosionSound(handler);
    const sourceFX = await AAanimationData._sourceFX(handler, sourceToken);
    const targetFX = await AAanimationData._targetFX(handler);

    const scale = ((200 * handler.explosionRadius) / explosion?.data?.metadata?.width) ?? 1;

    async function cast() {
        let arrayLength = handler.allTargets.length;
        for (var i = 0; i < arrayLength; i++) {

            let target = handler.allTargets[i];
            if (targetFX.enabled) {
                targetFX.tFXScale = 2 * target.w / targetFX.data.metadata.width;
            }        

            //Checks Range and sends it to Range Builder if true
            let hit;
            if (handler.playOnMiss) {
                hit = handler.hitTargetsId.includes(target.id) ? false : true;
            } else {
                hit = false;
            }

            await new Sequence("Automated Animations")
                .sequence(sourceFX.sourceSeq)
                .thenDo(function() {
                    Hooks.callAll("aa.animationStart", sourceToken, target)
                })                       
                .effect()
                    .file(attack.file)
                    .atLocation(sourceToken)
                    .reachTowards(target)
                    .JB2A()
                    .randomizeMirrorY()
                    .repeats(data.repeat, data.delay)
                    .missed(hit)
                    .name("animation")
                    .belowTokens(handler.animLevel)
                    .addOverride(
                        async (effect, data) => {
                            return data
                        })
                    //.waitUntilFinished(-500 + handler.explosionDelay)
                .effect()
                    .atLocation("animation")
                    //.file(explosion.data.file)
                    .scale({ x: scale, y: scale })
                    .delay(500 + explosion.delay)
                    .repeats(data.repeat, data.delay)
                    .belowTokens(explosion.below)
                    .playIf(() => { return explosion.data })
                    .addOverride(async (effect, data) => {
                        if (explosion.data) {
                            data.file = explosion.data.file;
                        }
                        return data;
                    })
                .sound()
                    .file(explosionSound.file)
                    .playIf(() => {return explosion && handler.explodeSound})
                    .delay(explosionSound.delay)
                    .volume(explosionSound.volume)
                    .repeats(data.repeat, data.delay)
                .effect()
                    .delay(targetFX.startDelay)
                    .file(targetFX.data?.file)
                    .atLocation(target)
                    .gridSize(canvas.grid.size)
                    .scale( targetFX.tFXScale * targetFX.scale)
                    .repeats(targetFX.repeat, targetFX.delay)
                    .belowTokens(targetFX.below)
                    .playIf(targetFX.enabled)
                .play()
                await wait(handler.animEnd)
                Hooks.callAll("aa.animationEnd", sourceToken, target)
        }
    }
    cast()
}
