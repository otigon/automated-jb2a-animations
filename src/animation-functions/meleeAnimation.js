import { buildFile } from "./file-builder/build-filepath.js"
import { meleeSwitch } from "./meleeSwitch.js";
import { aaDebugger } from "../constants/constants.js";
import { AAanimationData } from "../aa-classes/animation-data.js";
//import { AAITEMCHECK } from "./item-arrays.js";
//import { animationDefault } from "./file-builder/options.js";
const wait = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

export async function meleeAnimation(handler, animationData) {

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

    const data = animationData.primary;
    const sourceFX = animationData.sourceFX;
    const targetFX = animationData.targetFX;

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

    const attack = await buildFile(false, data.animation, "melee", data.variant, data.color, data.customPath);
    const range = await buildFile(false, data.switchAnimation, "range", data.switchVariant, data.switchColor);

    if (handler.debug) { aaDebugger("Melee Animation Start", animationData, attack) }

    const sourceToken = handler.sourceToken;
    const sourceScale = data.animation === "unarmedstrike" || data.animation === "flurryofblows" ? sourceToken.w / canvas.grid.size * 0.85 : sourceToken.w / canvas.grid.size * 0.5;

    async function cast() {

        const rangeSwitchActive = game.settings.get("autoanimations", "rangeSwitch")
        /*
                let arrayLength = handler.allTargets.length;
                for (var i = 0; i < arrayLength; i++) {
        
                    let target = handler.allTargets[i];
        
                    let moveTo = handler.getDistanceTo(target) > 5 ? true : false;
                    //const switchName = handler.switchName;
                    //const switchType = handler.switchType;
                    //const switchDetect = handler.switchDetect;
                    let noMelee = false;
                    if (!rangeSwitchActive) {
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
                                    if ((handler.getDistanceTo(target) / canvas.dimensions.distance) > data.switchRange) {
                                        noMelee = true;
                                    }
                                } else if (handler.getDistanceTo(target) > (5 + handler.reachCheck)) {
                                    noMelee = true;
                                }
                                break;
                        }
                    }
                    if (noMelee) {
                        await meleeSwitch(handler, target, data, sourceFX, targetFX)
                    }
                    else {
                        */
        /*
        if (targetFX.enabled) {
            targetFX.tFXScale = 2 * target.w / targetFX.data.metadata.width;
        }
        */
        /*
        let targetSequence = AAanimationData._targetSequence(targetFX, target, handler);
        let hit;
        if (handler.playOnMiss) {
            hit = handler.hitTargetsId.includes(target.id) ? false : true;
        } else {
            hit = false;
        }
        */
        let aaSeq = await new Sequence("Automated Animations");
        // Macro section if Awaiting
        if (data.playMacro && data.macro.playWhen === "1") {
            let userData = data.macro.args;
            aaSeq.macro(data.macro.name, handler.workflow, handler, [...userData])
                .play()
        }
        // Extra Effects => SourceToken effect section
        if (sourceFX.enabled) {
            aaSeq.addSequence(sourceFX.sourceSeq)
        }

        // Animation Start AA Hook
        aaSeq.thenDo(function () {
            Hooks.callAll("aa.animationStart", sourceToken, handler.allTargets)
        })

        // Item Sound section
        if (data.itemAudio.enable) {
            aaSeq.sound()
                .file(data.itemAudio.file, true)
                .volume(data.itemAudio.volume)
                .delay(data.itemAudio.delay)
                //.repeats(data.itemAudio.repeat, data.delay)
                .playIf(data.playSound)
        }
        // Explosion Sound section
        if (data.explosion.audio.enabled && data.explosion.enabled) {
            console.log("ADDING EXPLOSION AUDIO")
            aaSeq.sound()
                .file(data.explosion?.audio?.file, true)
                .playIf(data.explosion?.playSound)
                .delay(data.explosion?.audio?.delay + data.explosion?.delay)
                .volume(data.explosion?.audio?.volume)
                .repeats(data.explosion?.audio?.repeat, data.delay)
        }

        // Build Effect Sections for each Target
        for (let target of handler.allTargets) {
            let distanceTo = handler.getDistanceTo(target)
            let moveTo = distanceTo > 5 ? true : false;
            let hit;
            if (handler.playOnMiss) {
                hit = handler.hitTargetsId.includes(target.id) ? false : true;
            } else {
                hit = false;
            }

            // check if this target gets a melee or range animation
            let noMelee = false;
            if (!rangeSwitchActive) {
                switch (data.switchType) {
                    case "on":
                        if (rangeSwitch.some(el => data.animation.includes(el))) {
                            if (distanceTo > (5 + handler.reachCheck)) {
                                noMelee = true;
                            }
                        }
                        break;
                    case "custom":
                        if (data.detect === "manual") {
                            if ((distanceTo / canvas.dimensions.distance) > data.switchRange) {
                                noMelee = true;
                            }
                        } else if (distanceTo > (5 + handler.reachCheck)) {
                            noMelee = true;
                        }
                        break;
                }
            }

            if (noMelee) {
                // Range Switch Animation effect sections
                /*
                ms.sound()
                    .file(data.switchAudio.file, true)
                    .volume(data.switchAudio.volume)
                    .delay(data.switchAudio.delay)
                    .repeats(data.switchAudio.repeat, data.delay)
                    .playIf(() => {
                        return data.switchAudio.enable && data.switchAudio.file && data.switchType !== "off";
                    })
                */
                    aaSeq.effect()
                    .file(range.file)
                    .atLocation(sourceToken)
                    .stretchTo(target)
                    .randomizeMirrorY()
                    .repeats(data.repeat, data.delay)
                    .missed(hit)
                    .name("spot" + ` ${target.id}`)
                    .belowTokens(data.below)
                if (switchReturn) {
                    aaSeq.effect()
                        .file(range.returnFile, true)
                        .delay(returnDelay)
                        .atLocation(sourceToken)
                        .repeats(data.repeat, data.delay)
                        .stretchTo("spot" + ` ${target.id}`)
                        .playIf(switchReturn)
                }
            } else {
                // Standard Melee Animation effect sections
                if (moveTo) {
                    aaSeq.effect()
                        .file(attack.file)
                        .atLocation(sourceToken)
                        .moveTowards(target)
                        .scale(sourceScale * data.scale)
                        .repeats(data.repeat, data.delay)
                        .randomizeMirrorY()
                        .missed(hit)
                        .name("spot" + ` ${target.id}`)
                        .belowTokens(data.below)
                } else {
                    aaSeq.effect()
                        .file(attack.file)
                        .atLocation(sourceToken)
                        .rotateTowards(target)
                        .scale(sourceScale * data.scale)
                        .repeats(data.repeat, data.delay)
                        .randomizeMirrorY()
                        .missed(hit)
                        .name("spot" + ` ${target.id}`)
                        .belowTokens(data.below)
                        .anchor({ x: 0.4, y: 0.5 })
                }
            }

            // add-on Explosion Animation effect sections
            if (data.explosion.enabled) {
                aaSeq.effect()
                    .atLocation("spot" + ` ${target.id}`)
                    .file(data.explosion?.data?.file, true)
                    .scale({ x: data.explosion?.scale, y: data.explosion?.scale })
                    .delay(data.explosion?.delay)
                    .repeats(data.repeat, data.delay)
                    .belowTokens(data.explosion?.below)
                    .playIf(data.explosion?.enabled)
            }

            // Extra Effects => Target effect section
            if (targetFX.enabled) {
                let targetSequence = AAanimationData._targetSequence(targetFX, target, handler);
                aaSeq.addSequence(targetSequence.targetSeq)
            }
        }
        if (data.playMacro && data.macro.playWhen === "0") {
            let userData = data.macro.args;
            new Sequence()
                .macro(data.macro.name, handler.workflow, handler, [...userData])
                .play()
        }
        aaSeq.play()
        await wait(handler.animEnd)
        Hooks.callAll("aa.animationEnd", sourceToken, handler.allTargets)
        /*
        await new Sequence("Automated Animations")
        .addSequence(sourceFX.sourceSeq)
        .thenDo(function () {
            Hooks.callAll("aa.animationStart", sourceToken, target)
        })
        .sound()
            .file(data.itemAudio.file, true)
            .volume(data.itemAudio.volume)
            .delay(data.itemAudio.delay)
            .repeats(data.itemAudio.repeat, data.delay)
            .playIf(data.playSound)
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
            //.waitUntilFinished(data.explosion?.delay)
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
            //.waitUntilFinished(data.explosion?.delay)
        .sound()
            .file(data.explosion?.audio?.file, true)
            .playIf(data.explosion?.playSound)
            .delay(data.explosion?.audio?.delay + data.explosion?.delay)
            .volume(data.explosion?.audio?.volume)
            .repeats(data.explosion?.audio?.repeat, data.delay)
        .effect()
            .atLocation("animation")
            .file(data.explosion?.data?.file, true)
            .scale({ x: data.explosion?.scale, y: data.explosion?.scale })
            .delay(data.explosion?.delay)
            .repeats(data.repeat, data.delay)
            .belowTokens(data.explosion?.below)
            .playIf(data.explosion?.enabled)
            //.waitUntilFinished(explosionDelay)
        .addSequence(targetSequence.targetSeq)
        .play()
        await wait(handler.animEnd)
        Hooks.callAll("aa.animationEnd", sourceToken, target)
        */
        //}
        //}
    }
    cast()
}