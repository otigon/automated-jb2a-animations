import { buildFile } from "./file-builder/build-filepath.js"
import { meleeSwitch } from "./meleeSwitch.js";
import { aaDebugger } from "../constants/constants.js";
import { AAanimationData } from "../aa-classes/animation-data.js";
//import { AAITEMCHECK } from "./item-arrays.js";
//import { animationDefault } from "./file-builder/options.js";
const wait = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

export async function meleeAnimation(handler, autoObject) {
    const aaDebug = game.settings.get("autoanimations", "debug")
    function moduleIncludes(test) {
        return !!game.modules.get(test);
    }
    let rangeSwitch;
    if (moduleIncludes("jb2a_patreon")) {
        rangeSwitch = ['sword', 'greatsword', 'mace', 'dagger', 'spear', 'greataxe', 'handaxe', 'lasersword']
    } else {
        rangeSwitch = ['dagger', 'lasersword']
    }
    // Sets JB2A database and Global Delay
    let globalDelay = game.settings.get("autoanimations", "globaldelay");
    await wait(globalDelay);

    const data = AAanimationData._meleeData(handler, autoObject);
    if (aaDebug) { aaDebugger("Melee Animation Start", data) }
    const attack = await buildFile(false, data.itemName, "melee", data.variant, data.color, data.customPath)

    const sourceToken = handler.actorToken;
    const sourceScale = data.itemName === "unarmedstrike" || data.itemName === "flurryofblows" ? sourceToken.w / canvas.grid.size * 0.85 : sourceToken.w / canvas.grid.size * 0.5;

    const explosion = handler.flags.explosion ? await AAanimationData._explosionData(handler) : {};
    const explosionSound = AAanimationData._explosionSound(handler);
    const sourceFX = await AAanimationData._sourceFX(handler, sourceToken);
    const targetFX = await AAanimationData._targetFX(handler);

    const scale = ((200 * handler.explosionRadius) / explosion.data?.metadata?.width) ?? 1;

    async function cast() {
        let arrayLength = handler.allTargets.length;
        for (var i = 0; i < arrayLength; i++) {

            let target = handler.allTargets[i];

            let moveTo = handler.getDistanceTo(target) > 5 ? true : false;
            //const switchName = handler.switchName;
            //const switchType = handler.switchType;
            //const switchDetect = handler.switchDetect;
            let noMelee = false;
            if (!game.settings.get("autoanimations", "rangeSwitch")) {
                switch (data.switchType) {
                    case "on":
                        if (rangeSwitch.some(el => data.itemName.includes(el))) {
                            if (handler.getDistanceTo(target) > (5 + handler.reachCheck)) {
                                noMelee = true;
                            }
                        }
                        break;
                    case "custom":
                        if (data.detect === "manual") {
                            if ((handler.getDistanceTo(target) / canvas.dimensions.distance) > handler.switchRange) {
                                noMelee = true;
                            }
                        } else if (handler.getDistanceTo(target) > (5 + handler.reachCheck)) {
                            noMelee = true;
                        }
                        break;
                }
            }
            if (noMelee) {
                await meleeSwitch(handler, target, autoObject)
            }
            else {
                if (targetFX.enabled) {
                    targetFX.tFXScale = 2 * target.w / targetFX.data.metadata.width;
                }
                console.log(targetFX)
                let hit;
                if (handler.playOnMiss) {
                    hit = handler.hitTargetsId.includes(target.id) ? false : true;
                } else {
                    hit = false;
                }
                await new Sequence()
                .sequence(sourceFX.sourceSeq)
                .thenDo(function () {
                    Hooks.callAll("aa.animationStart", sourceToken, target)
                })
                .effect()
                    //.delay(sourceOptions.delayAfter)
                    .file(attack.file)
                    .atLocation(sourceToken)
                    .rotateTowards(target)
                    //.JB2A()
                    .scale(sourceScale * data.scale)
                    .repeats(data.repeat, data.delay)
                    .randomizeMirrorY()
                    .missed(hit)
                    .name("animation")
                    .belowTokens(handler.animLevel)
                    .addOverride(async (effect, data) => {
                        data.anchor = { x: 0.4, y: 0.5 }
                        return data;
                    })
                    .playIf(!moveTo)
                .effect()
                    .file(attack.file)
                    .atLocation(sourceToken)
                    .moveTowards(target)
                    //.JB2A()
                    .scale(sourceScale * data.scale)
                    .repeats(data.repeat, data.delay)
                    .randomizeMirrorY()
                    .missed(hit)
                    .name("animation")
                    .belowTokens(handler.animLevel)
                    .playIf(moveTo)
                .effect()
                    .atLocation("animation")
                    //.file(explosion.file)
                    .scale({ x: scale, y: scale })
                    .delay(500 + explosion.delay)
                    .repeats(data.repeat, data.delay)
                    .belowTokens(explosion.below)
                    .playIf(handler.explosion)
                    .addOverride(async (effect, data) => {
                        if (explosion.data) {
                            data.file = explosion.data.file;
                        }
                        return data;
                    })
                    //.waitUntilFinished(explosionDelay)
                .sound()
                    .file(explosionSound.file)
                    .playIf(() => {return explosion.data && handler.explodeSound})
                    .delay(explosionSound.delay)
                    .volume(explosionSound.volume)
                    .repeats(data.repeat, data.delay)
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
                await wait(handler.animEnd)
                Hooks.callAll("aa.animationEnd", sourceToken, target)
            }
        }
    }
    cast()
}
