import { buildFile } from "./file-builder/build-filepath.js"
import { aaDebugger } from "../constants/constants.js";
import { AAanimationData } from "../aa-classes/animation-data.js";
//import { AAITEMCHECK } from "./item-arrays.js";

const wait = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

export async function explodeOnToken(handler) {
    const aaDebug = game.settings.get("autoanimations", "debug")

    let globalDelay = game.settings.get("autoanimations", "globaldelay");
    await wait(globalDelay);

    const sourceToken = handler.actorToken;
    let name = handler.explosionVariant;
    name = name === "boulder" ? "boulderimpact" : name;
    let customExplosionPath = handler.customExplode ? handler.customExplosionPath : false
    const explosion = await buildFile(true, name, "static", handler.variant, handler.explosionColor, customExplosionPath)

    // builds Source Token file if Enabled, and pulls from flags if already set
    const sourceFX = await AAanimationData._sourceFX(handler, sourceToken);
    // builds Target Token file if Enabled, and pulls from flags if already set
    const targetFX = await AAanimationData._targetFX(handler);
    const tokenScale = (1.5 * sourceToken.w / explosion.metadata.width)
    const animationScale = ((200 * handler.explosionRadius) / explosion.metadata.width)
    const optionScale = handler.options?.scale ?? 1;
    const scaleT10 = handler.options?.scaleToToken ? (tokenScale * optionScale) : animationScale;
    if (handler.animType === "t10") {
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
                .file(explosion.file)
                .atLocation(sourceToken)
                .repeats(handler.explosionLoops, handler.explosionDelay)
                //.missed(hit)
                .scale(scaleT10)
                .belowTokens(handler.animLevel)
                .addOverride(
                    async (effect, data) => {
                        return data
                    })
            .play()
        return
    } else {
        //.waitUntilFinished(-500 + handler.explosionDelay)

        async function cast() {
            let arrayLength = handler.allTargets.length;
            for (var i = 0; i < arrayLength; i++) {

                let target = handler.allTargets[i];
                if (targetFX.enabled) {
                    targetFX.tFXScale = 2 * target.w / targetFX.data.metadata.width;
                }        
    
            let hit;
            if (handler.playOnMiss) {
                hit = handler.hitTargetsId.includes(target.id) ? false : true;
            } else {
                hit = false;
            }
            let targetScale = (1.5 * target.w / explosion.metadata.width)
            let scaleT9 = handler.options?.scaleToToken ? (targetScale * optionScale) : animationScale;

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
                        .file(explosion.file)
                        .atLocation(target)
                        //.randomizeMirrorY()
                        .repeats(handler.explosionLoops, handler.explosionDelay)
                        .scale(scaleT9)
                        .belowTokens(handler.animLevel)
                        .playIf(() => { return arrayLength })
                    .effect()
                        .delay(targetFX.startDelay)
                        .atLocation(target)
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
                        .play()
            }
        }
        cast()
    }
}
