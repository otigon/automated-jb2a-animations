import { buildFile } from "../file-builder/build-filepath.js"
import { buildTargetSeq } from "../buildTargetSeq.js";
import { aaReturnWeapons, aaRangeWeapons } from "../../database/jb2a-menu-options.js";

const wait = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

export async function melee(handler, animationData) {

    const data = animationData.primary;
    const secondary = animationData.secondary;
    const sourceFX = animationData.sourceFX;
    const targetFX = animationData.targetFX;
    const macro = animationData.macro;

    const switchReturn = data.meleeSwitch.options.switchType === "on" && aaReturnWeapons.includes(data.video.animation)
        ? data.meleeSwitch.options.isReturning
        : data.meleeSwitch.options.switchType === "custom" && aaReturnWeapons.includes(data.meleeSwitch.video.animation)
        ? data.meleeSwitch.options.isReturning
        : false;
    let returnDelay = 1000;

    switch (true) {
        case data.meleeSwitch.video.animation.includes('dagger'):
        case data.meleeSwitch.video.animation.includes('hammer'):
            returnDelay = 1000;
            break;
        default:
            returnDelay = 1500;
    }

    let range = {};
    if (data.meleeSwitch.options.switchType === "on") {
        range = aaRangeWeapons.includes(data.video.animation) ? await buildFile(false, data.video.menuType, data.video.animation, "range", data.video.variant, data.video.color, false) : {};
    } else if (data.meleeSwitch.options.switchType === "custom") {
        range = await buildFile(false, data.meleeSwitch.video.menuType, data.meleeSwitch.video.animation, "range", data.meleeSwitch.video.variant, data.meleeSwitch.video.color, data.meleeSwitch.video.customPath)
    }

    const sourceToken = handler.sourceToken;
    const sourceTokenGS = (sourceToken.w / canvas.grid.size) * 4;

    async function cast() {

        const rangeSwitchActive = game.settings.get("autoanimations", "rangeSwitch")

        let aaSeq = await new Sequence("Automated Animations");
        // Play Macro if Awaiting
        if (macro && macro.playWhen === "1") {
            let userData = macro.args;
            aaSeq.macro(macro.name, handler.workflow, handler, userData)
        }
        // Extra Effects => Source Token if active
        if (sourceFX.enable) {
            aaSeq.addSequence(sourceFX.sourceSeq)
        }
        // Primary Sound
        if (data.sound) {
            aaSeq.addSequence(data.sound)
        }
        // Animation Start Hook
        aaSeq.thenDo(function () {
            Hooks.callAll("aa.animationStart", sourceToken, handler.allTargets)
        })
        // Primary Animation
        for (let i = 0; i < handler.allTargets.length; i++) {
            let currentTarget = handler.allTargets[i]
            let distanceTo = handler.getDistanceTo(currentTarget)
            let switchDistance = 5;

            if (handler.gameSystem === "swade") { switchDistance = 1 }
            if (handler.gameSystem === "alienrpg") { switchDistance = canvas.grid.distance * 1.5 }
            let moveTo = distanceTo > switchDistance ? true : false;
            let hit;
            if (handler.playOnMiss) {
                hit = handler.hitTargetsId.includes(currentTarget.id) ? true : false;
            } else {
                hit = true;
            }

            let noMelee = false;
            if (!rangeSwitchActive && range.file) {
                switch (data.meleeSwitch.options.switchType) {
                    case "on":
                        if (distanceTo > (switchDistance + handler.reachCheck)) {
                            noMelee = true;
                        }
                        break;
                    case "custom":
                        if (data.detect === "manual") {
                            if ((distanceTo / canvas.dimensions.distance) > data.switchRange) {
                                noMelee = true;
                            }
                        } else if (distanceTo > (switchDistance + handler.reachCheck)) {
                            noMelee = true;
                        }
                        break;
                }
            }

            if (noMelee) {
                let rangeSeq = aaSeq.effect()
                    rangeSeq.file(range.file)
                    rangeSeq.atLocation(sourceToken)
                    rangeSeq.stretchTo(currentTarget)
                    rangeSeq.opacity(data.options.opacity)
                    rangeSeq.zIndex(data.options.zIndex)
                    rangeSeq.repeats(data.options.repeat, data.options.repeatDelay)
                    rangeSeq.missed(!hit)
                    rangeSeq.name("spot" + ` ${currentTarget.id}`)
                    rangeSeq.elevation(data.options.elevation)
                if (switchReturn) {
                    let returnSeq = aaSeq.effect()
                        returnSeq.file(range.returnFile, true)
                        returnSeq.opacity(data.options.opacity)
                        returnSeq.atLocation(sourceToken)
                        returnSeq.repeats(data.options.repeat, data.options.repeatDelay)
                        returnSeq.stretchTo("spot" + ` ${currentTarget.id}`)
                        if (data.options.isWait) {
                            returnSeq.waitUntilFinished(data.options.delay)
                            returnSeq.delay(returnDelay)
                        } else {
                            returnSeq.delay(returnDelay + data.options.delay)
                        }        
                }
                if (!switchReturn && i === handler.allTargets.length - 1 && data.options.isWait) {
                    rangeSeq.waitUntilFinished(data.options.delay)
                } else if (!data.options.isWait) {
                    rangeSeq.delay(data.options.delay)
                }    
            } else {
                let nextSeq = aaSeq.effect()
                nextSeq.file(data.path.file)
                nextSeq.opacity(data.options.opacity)
                nextSeq.atLocation(sourceToken)
                if (moveTo) {
                    nextSeq.moveTowards(currentTarget)
                } else {
                    nextSeq.rotateTowards(currentTarget)
                    nextSeq.anchor({ x: 0.4, y: 0.5 })
                }
                nextSeq.size(sourceTokenGS * data.options.size, {gridUnits: true})
                nextSeq.repeats(data.options.repeat, data.options.repeatDelay)
                nextSeq.randomizeMirrorY()
                nextSeq.missed(!hit)
                nextSeq.name("spot" + ` ${currentTarget.id}`)
                nextSeq.elevation(data.options.elevation)
                nextSeq.zIndex(data.options.zIndex)
                if (i === handler.allTargets.length - 1 && data.options.isWait) {
                    nextSeq.waitUntilFinished(data.options.delay)
                } else if (!data.options.isWait) {
                    nextSeq.delay(data.options.delay)
                }    
            }
        }
        // secondary animation and sound
        if (secondary) {
            if (secondary.sound) {
                aaSeq.addSequence(secondary.sound)
            }
            for (let i = 0; i < handler.allTargets.length; i++) {
                let currentTarget = handler.allTargets[i]
                let hit;
                if (handler.playOnMiss) {
                    hit = handler.hitTargetsId.includes(currentTarget.id) ? true : false;
                } else {
                    hit = true;
                }

                let secondarySeq = aaSeq.effect()
                secondarySeq.atLocation("spot" + ` ${currentTarget.id}`)
                secondarySeq.file(secondary.path?.file, true)
                secondarySeq.size(secondary.options.size * 2, { gridUnits: true })
                secondarySeq.repeats(secondary.options.repeat, secondary.options.repeatDelay)
                if (i === handler.allTargets.length - 1 && secondary.options.isWait && targetFX.enable) {
                    secondarySeq.waitUntilFinished(secondary.options.delay)
                } else if (!secondary.options.isWait) {
                    secondarySeq.delay(secondary.options.delay)
                }
                secondarySeq.elevation(secondary.options.elevation)
                secondarySeq.zIndex(secondary.options.zIndex)
                secondarySeq.opacity(secondary.options.opacity)
                secondarySeq.fadeIn(secondary.options.fadeIn)
                secondarySeq.fadeOut(secondary.options.fadeOut)
                if (secondary.options.isMasked) {
                    secondarySeq.mask(currentTarget)
                }
            }
        }
        // Target animation and sound
        if (targetFX.enable) {
            if (targetFX.sound) {
                aaSeq.addSequence(targetFX.sound)
            }
            for (let currentTarget of handler.allTargets) {
                let hit;
                if (handler.playOnMiss) {
                    hit = handler.hitTargetsId.includes(currentTarget.id) ? true : false;
                } else {
                    hit = true;
                }
                if (hit) {
                    let targetSequence = buildTargetSeq(targetFX, currentTarget, handler);
                    aaSeq.addSequence(targetSequence.targetSeq)
                }
            }
        }
        // Macro if Concurrent
        if (macro && macro.playWhen === "0") {
            let userData = macro.args;
            new Sequence()
                .macro(macro.name, handler.workflow, handler, userData)
                .play()
        }
        aaSeq.play()
        await wait(handler.animEnd)
        // Animation End Hook
        Hooks.callAll("aa.animationEnd", sourceToken, handler.allTargets)
    }
    cast()
}