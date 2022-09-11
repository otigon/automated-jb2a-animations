//import { buildFile } from "../file-builder/build-filepath.js"
import { aaDebugger } from "../../constants/constants.js"
import { AAAnimationData } from "../../aa-classes/AAAnimationData.js";
import { aaReturnWeapons } from "../databases/jb2a-menu-options.js";

const wait = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

export async function rangeSeq(handler, animationData) {
    function moduleIncludes(test) {
        return !!game.modules.get(test);
    }

    // Sets JB2A database and Global Delay
    //let jb2a = moduleIncludes("jb2a_patreon") === true ? JB2APATREONDB : JB2AFREEDB;
    let globalDelay = game.settings.get("autoanimations", "globaldelay");
    await wait(globalDelay);

    const data = animationData.primary;
    const secondary = animationData.secondary;
    const sourceFX = animationData.sourceFX;
    const targetFX = animationData.targetFX;
    const macro = animationData.macro;

    //const attack = await buildFile(false, data.video.menuType, data.video.animation, "range", data.video.variant, data.video.color, data.video.customPath)

    if (handler.debug) { aaDebugger("Ranged Animation Start", animationData) }

    const sourceToken = handler.sourceToken;
    const onlyX = data.enableCustom ? data.onlyX : false;
    /*
    let rangeSwitch;
    if (moduleIncludes("jb2a_patreon")) {
        rangeSwitch = ['sword', 'greatsword', 'mace', 'dagger', 'spear', 'greataxe', 'handaxe', 'lasersword', 'hammer', 'chakram']
    } else {
        rangeSwitch = ['dagger', 'lasersword']
    }
    */
    const switchReturn = aaReturnWeapons.some(el => data.video.animation.includes(el)) && !data.video.enableCustom ? data.options.isReturning : false;
    let returnDelay;
    switch (true) {
        case data.video.animation.includes('dagger'):
        case data.video.animation.includes('hammer'):
            returnDelay = 1000;
            break;
        default:
            returnDelay = 1500;
    }

    async function cast() {

        let aaSeq = await new Sequence("Automated Animations")

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
        //for (let currentTarget of handler.allTargets) {
            let currentTarget = handler.allTargets[i]
            let hit;
            if (handler.playOnMiss) {
                hit = handler.hitTargetsId.includes(currentTarget.id) ? true : false;
            } else {
                hit = true;
            }
            //if (hit) { targetSound = true }
            let nextSeq = aaSeq.effect()
            nextSeq.file(data.path.file)
            nextSeq.atLocation(sourceToken)
            nextSeq.stretchTo(currentTarget, { onlyX: onlyX })
            nextSeq.randomizeMirrorY()
            nextSeq.repeats(data.options.repeat, data.options.repeatDelay)
            nextSeq.opacity(data.options.opacity)
            nextSeq.missed(!hit)
            nextSeq.name("spot" + ` ${currentTarget.id}`)
            nextSeq.elevation(data.options.elevation)
            nextSeq.zIndex(data.options.zIndex)
            if (switchReturn) {
                let returnSeq = aaSeq.effect()
                returnSeq.file(data.path.returnFile, true)
                returnSeq.opacity(data.options.opacity)
                returnSeq.atLocation(sourceToken)
                returnSeq.repeats(data.options.repeat, data.options.repeatDelay)
                returnSeq.stretchTo("spot" + ` ${currentTarget.id}`)
                returnSeq.zIndex(data.options.zIndex)
                if (i === handler.allTargets.length - 1 && data.options.isWait) {
                    returnSeq.waitUntilFinished(data.options.delay)
                    returnSeq.delay(returnDelay)
                } else if (!data.options.isWait) {
                    returnSeq.delay(returnDelay + data.options.delay)
                }
            }
            /*
            if (!switchReturn) {
                if (data.options.isWait) {
                    nextSeq.waitUntilFinished(data.options.delay)
                } else {
                    nextSeq.delay(data.options.delay)
                }    
            }
            */
            if (i === handler.allTargets.length - 1 && !switchReturn && data.options.isWait) {
                nextSeq.waitUntilFinished(data.options.delay)
            } else if (!data.options.isWait) {
                nextSeq.delay(data.options.delay)
            }
        }
        // secondary animation and sound
        if (secondary) {
            if (secondary.sound) {
                aaSeq.addSequence(secondary.sound)
            }
            for (let i = 0; i < handler.allTargets.length; i++) {
            //for (let currentTarget of handler.allTargets) {
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
                    let targetSequence = AAAnimationData._targetSequence(targetFX, currentTarget, handler);
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
