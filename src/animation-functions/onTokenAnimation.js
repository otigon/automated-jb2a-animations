import { buildFile } from "./file-builder/build-filepath.js";
import { AAanimationData } from "../aa-classes/animation-data.js";
import { aaDebugger } from "../constants/constants.js"
//import { AAITEMCHECK } from "./item-arrays.js";

const wait = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

export async function onTokenAnimation(handler) {
    const aaDebug = game.settings.get("autoanimations", "debug")

    let itemName = handler.convertedName;
    let globalDelay = game.settings.get("autoanimations", "globaldelay");
    await wait(globalDelay);
    const sourceToken = handler.actorToken;

    // Random Color pull given object path
    //Builds standard File Path
    const customPath = handler.enableCustom01 ? handler.custom01 : false;
    const onToken = await buildFile(true, itemName, "static", handler.spellVariant, handler.color, customPath);
    // builds Source Token file if Enabled, and pulls from flags if already set
    const sourceFX = await AAanimationData._sourceFX(handler, sourceToken);
    // builds Target Token file if Enabled, and pulls from flags if already set
    const targetFX = await AAanimationData._targetFX(handler);

    const explosion = handler.flags?.explosion ? await AAanimationData._explosionData(handler) : {};
    const explosionSound = AAanimationData._explosionSound(handler);

    const exScale = ((200 * handler.explosionRadius) / explosion?.metadata?.width) ?? 1;
    let animWidth = onToken.metadata.width;
    if (handler.allTargets.length === 0 && (itemName === "curewounds" || itemName === "generichealing")) {
    new Sequence("Automated Animations")
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
        .thenDo(function() {
            Hooks.callAll("aa.animationStart", sourceToken, "no-target")
        })
        .effect()
            .file(onToken.file)
            .atLocation(sourceToken)
            .repeats(handler.animationLoops, handler.loopDelay)
            //.scale(((sourceToken.w / animWidth) * 1.5) * handler.scale)
            .size(sourceToken.w * 1.5)
            .belowTokens(handler.animLevel)
            .addOverride(
            async (effect, data) => {
                return data
            })
        .effect()
            .atLocation(sourceToken)
            .scale(exScale)
            .delay(500 + explosion.delay)
            //.randomizeMirrorY()
            .repeats(handler.animationLoops, handler.loopDelay)
            .belowTokens(handler.explosionLevel)
            .playIf(handler.explosion)
            .addOverride(async (effect, data) => {
                if (handler.explosion) {
                    data.file = explosion.data.file;
                }
                return data;
            })
        .sound()
            .file(explosionSound.file)
            .playIf(() => {return explosion && handler.explodeSound})
            .delay(explosionSound.delay)
            .volume(explosionSound.volume)
            .repeats(handler.animationLoops, handler.loopDelay)
        .play()
        await wait(500)
        Hooks.callAll("aa.animationEnd", sourceToken, "no-target")
    }
    //.waitUntilFinished(-500 + handler.explosionDelay)

    async function cast() {
        let arrayLength = handler.allTargets.length;
        for (var i = 0; i < arrayLength; i++) {

            let target = handler.allTargets[i];
            /*
            if (handler.targetEnable) {
                targetFX.tFXScale = 2 * target.w / targetFX.data.metadata.width;
            }
            */
            let targetSequence = AAanimationData._targetSequence(targetFX, target);

            let scale = itemName.includes("creature") ? (sourceToken.w / animWidth) * 1.5 : (target.w / animWidth) * 1.75
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
                .effect()
                    .file(onToken.file)
                    .atLocation(target)
                    //.randomizeMirrorY()
                    .repeats(handler.animationLoops, handler.loopDelay)
                    //.scale(scale * handler.scale)
                    .size(target.w * 1.5 * handler.scale)
                    .belowTokens(handler.animLevel)
                    .name("animation")
                    .playIf(() => { return arrayLength })
                .effect()
                    .atLocation("animation")
                    .scale(exScale)
                    .delay(500 + explosion.delay)
                    //.randomizeMirrorY()
                    .repeats(handler.animationLoops, handler.loopDelay)
                    .belowTokens(explosion.below)
                    .playIf(handler.explosion)
                    .addOverride(async (effect, data) => {
                        if (handler.explosion) {
                            data.file = explosion.file;
                        }
                        return data;
                    })
                .sound()
                    .file(explosionSound.file)
                    .playIf(() => {return handler.explosion && handler.explodeSound})
                    .delay(explosionSound.delay)
                    .volume(explosionSound.volume)
                    .repeats(handler.animationLoops, handler.loopDelay)
                .addSequence(targetSequence.targetSeq)
                /*
                .effect()
                    .delay(targetFX.startDelay)
                    .atLocation("animation")
                    .scale(targetFX.tFXScale * targetFX.scale)
                    .repeats(targetFX.repeat, targetFX.delay)
                    .belowTokens(targetFX.below)
                    .playIf(targetFX.enabled)
                    .addOverride(async (effect, data) => {
                        if (targetFX.enabled) {
                            data.file = targetFX.data.file;
                        }
                        return data;
                    })      
                */      
                .play()
                await wait(500)
                Hooks.callAll("aa.animationEnd", sourceToken, target)
        }
    }
    cast()
}
