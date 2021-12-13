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

    const data = AAanimationData._primaryData(handler, autoObject);

    if (aaDebug) { aaDebugger("Melee Animation Start", data) }
    const attack = await buildFile(false, data.animation, "melee", data.variant, data.color, data.customPath)

    const sourceToken = handler.actorToken;
    const sourceScale = data.animation === "unarmedstrike" || data.animation === "flurryofblows" ? sourceToken.w / canvas.grid.size * 0.85 : sourceToken.w / canvas.grid.size * 0.5;

    const explosion = handler.explosion.enable ? await AAanimationData._explosionData(handler) : {};
    const explosionSound = AAanimationData._explosionSound(handler);
    const sourceFX = await AAanimationData._sourceFX(handler, sourceToken);
    const targetFX = await AAanimationData._targetFX(handler);
    
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
                        if (rangeSwitch.some(el => data.animation.includes(el))) {
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
                /*
                if (targetFX.enabled) {
                    targetFX.tFXScale = 2 * target.w / targetFX.data.metadata.width;
                }
                */
                let targetSequence = AAanimationData._targetSequence(targetFX, target, handler);
                let hit;
                if (handler.playOnMiss) {
                    hit = handler.hitTargetsId.includes(target.id) ? false : true;
                } else {
                    hit = false;
                }
                
                await new Sequence("Automated Animations")
                .addSequence(sourceFX.sourceSeq)
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
                    .belowTokens(data.below)
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
                    .belowTokens(data.below)
                    .playIf(moveTo)
                .sound()
                    .file(data.itemAudio.file)
                    .volume(data.itemAudio.volume)
                    .delay(data.itemAudio.delay)
                    .playIf(() => {
                        return data.itemAudio.enable && data.itemAudio.file;
                    })
                .effect()
                    .atLocation("animation")
                    .file(explosion.data?.file)
                    .scale({ x: explosion.scale, y: explosion.scale })
                    .delay(500 + explosion.delay)
                    .repeats(data.repeat, data.delay)
                    .belowTokens(explosion.below)
                    .playIf(explosion.enabled)
                    //.waitUntilFinished(explosionDelay)
                .sound()
                    .file(explosionSound.file)
                    .playIf(() => {return explosion.data && handler.explodeSound})
                    .delay(explosionSound.delay)
                    .volume(explosionSound.volume)
                    .repeats(data.repeat, data.delay)
                .addSequence(targetSequence.targetSeq)
                .play()
                await wait(handler.animEnd)
                Hooks.callAll("aa.animationEnd", sourceToken, target)
            }
        }
    }
    cast()
}