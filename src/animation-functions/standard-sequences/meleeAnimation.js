import { buildFile } from "../file-builder/build-filepath.js"
import { aaReturnWeapons, aaRangeWeapons } from "../../database/jb2a-menu-options.js";

export async function melee(handler, animationData) {
    const data = animationData.primary;
    const secondary = animationData.secondary;
    const sourceFX = animationData.sourceFX;
    const targetFX = animationData.targetFX;
    const macro = animationData.macro;

    const sourceToken = handler.sourceToken;
    const sourceTokenGS = (sourceToken.w / canvas.grid.size) * 5;

    const switchDisabled = game.settings.get("autoanimations", "rangeSwitch")

    const switchReturn = data.meleeSwitch.options.switchType === "on" && aaReturnWeapons.includes(data.video.animation)
        ? data.meleeSwitch.options.isReturning
        : data.meleeSwitch.options.switchType === "custom" && aaReturnWeapons.includes(data.meleeSwitch.video.animation)
            ? data.meleeSwitch.options.isReturning
            : false;

    let range = {};
    if (data.meleeSwitch.options.switchType === "on") {
        range = aaRangeWeapons.includes(data.video.animation) && !data.video.customPath ? await buildFile(false, data.video.menuType, data.video.animation, "range", data.video.variant, data.video.color, false) : {};
    } else if (data.meleeSwitch.options.switchType === "custom") {
        range = !data.meleeSwitch?.video?.customPath ? await buildFile(false, data.meleeSwitch.video.menuType, data.meleeSwitch.video.animation, "range", data.meleeSwitch.video.variant, data.meleeSwitch.video.color, data.meleeSwitch.video.customPath) : {};
    }

    let switchDistance = 5;
    if (handler.systemId === "swade") { switchDistance = 1 }
    if (handler.systemId === "alienrpg") { switchDistance = canvas.grid.distance * 1.5 }

    let rangeArray = [];
    let meleeArray = [];

    // Compile separate Range and Melee arrays where applicable, with Hit determination for Sequencer Miss effect
    for (let target of handler.allTargets) {
        let distanceTo = handler.getDistance(target);
        let rangeDistance = data.meleeSwitch.detect === "manual"
            ? data.meleeSwitch.range
            : (switchDistance / canvas.dimensions.distance) + handler.reachCheck;
        let hit = !handler.playOnMiss ? true : handler.hitTargetsId.includes(target.id) ? true : false;

        if ((distanceTo > rangeDistance) && range.file && !switchDisabled) {
            rangeArray.push({
                token: target,
                hit
            })
        } else {
            meleeArray.push({
                token: target,
                moveTo: distanceTo > rangeDistance ? true : false,
                hit
            })
        }
    }
    let aaSeq = await new Sequence(handler.sequenceData);
    // Play Macro if Awaiting
    if (macro && macro.playWhen === "1") {
        let userData = macro.args;
        aaSeq.macro(macro.name, handler.workflow, handler, userData)
    }
    // Extra Effects => Source Token if active
    if (sourceFX) {
        handler.compileSourceEffect(sourceFX, aaSeq)
    }
    // Primary Sound
    if (data.sound && meleeArray.length > 0) {
        aaSeq.addSequence(data.sound)
    }
    // Animation Start Hook
    aaSeq.thenDo(function () {
        Hooks.callAll("aa.animationStart", sourceToken, handler.allTargets)
    })

    if (meleeArray.length) {
        for (let i = 0; i < meleeArray.length; i++) {
            let currentTarget = meleeArray[i];

            let meleeSeq = aaSeq.effect()
            meleeSeq.file(data.path.file)
            meleeSeq.opacity(data.options.opacity)
            meleeSeq.atLocation(sourceToken)
            if (currentTarget.moveTo) {
                meleeSeq.moveTowards(currentTarget.token)
            } else {
                meleeSeq.rotateTowards(currentTarget.token)
                meleeSeq.anchor({ x: 0.4, y: 0.5 })
            }
            meleeSeq.size(sourceTokenGS * data.options.size, { gridUnits: true })
            meleeSeq.repeats(data.options.repeat, data.options.repeatDelay)
            meleeSeq.randomizeMirrorY()
            meleeSeq.missed(!currentTarget.hit)
            meleeSeq.name("spot" + ` ${currentTarget.token.id}`)
            meleeSeq.elevation(handler.elevation(sourceToken, data.options.isAbsolute, data.options.elevation), {absolute: data.options.isAbsolute})
            meleeSeq.zIndex(data.options.zIndex)
            if (i === meleeArray.length - 1 && data.options.isWait) {
                meleeSeq.waitUntilFinished(data.options.delay)
            } else if (!data.options.isWait) {
                meleeSeq.delay(data.options.delay)
            }
            meleeSeq.playbackRate(data.options.playbackRate)
        }

        if (secondary) {
            handler.compileSecondaryEffect(secondary, aaSeq, meleeArray.map(e => e.token), targetFX.enable, true)
        }    
        if (targetFX) {
            handler.compileTargetEffect(targetFX, aaSeq, meleeArray.map(e => e.token), true)
        }
    }

    if (rangeArray.length) {
        // Switch Sound
        if (data.meleeSwitch?.sound) {
            aaSeq.addSequence(data.meleeSwitch.sound)
        }

        // Range Switch attacks
        for (let i = 0; i < rangeArray.length; i++) {
            let currentTarget = rangeArray[i];

            let rangeSeq = aaSeq.effect()
            rangeSeq.file(range.file)
            rangeSeq.atLocation(sourceToken)
            rangeSeq.stretchTo(currentTarget.token)
            rangeSeq.opacity(data.options.opacity)
            rangeSeq.zIndex(data.options.zIndex)
            rangeSeq.repeats(data.options.repeat, data.options.repeatDelay)
            rangeSeq.missed(!currentTarget.hit)
            rangeSeq.name("spot" + ` ${currentTarget.token.id}`)
            rangeSeq.elevation(handler.elevation(sourceToken, data.options.isAbsolute, data.options.elevation), {absolute: data.options.isAbsolute})
            rangeSeq.playbackRate(data.options.playbackRate)

            if (i === rangeArray.length - 1 && data.options.isWait) {
                rangeSeq.waitUntilFinished(data.options.delay)
            } else if (!data.options.isWait) {
                rangeSeq.delay(data.options.delay)
            }
        }

        // Return Animation if Enabled
        if (switchReturn) {
            for (let i = 0; i < rangeArray.length; i++) {
                let currentTarget = rangeArray[i].token

                let returnSeq = aaSeq.effect()
                returnSeq.file(data.path.returnFile)
                returnSeq.opacity(data.options.opacity)
                returnSeq.atLocation(sourceToken)
                returnSeq.repeats(data.options.repeat, data.options.repeatDelay)
                returnSeq.stretchTo("spot" + ` ${currentTarget.id}`)
                returnSeq.zIndex(data.options.zIndex)
                returnSeq.playbackRate(data.options.playbackRate)
            }
        }
        if (secondary) {
            handler.compileSecondaryEffect(secondary, aaSeq, rangeArray.map(e => e.token), targetFX.enable, true)
        }    
        if (targetFX) {
            handler.compileTargetEffect(targetFX, aaSeq, rangeArray.map(e => e.token), true)
        }
    }

    // Macro if Concurrent
    if (macro && macro.playWhen === "0") {
        let userData = macro.args;
        new Sequence()
            .macro(macro.name, handler.workflow, handler, userData)
            .play()
    }

    // Macro if Awaiting Animation. This will respect the Delay/Wait options in the Animation chains
    if (macro && macro.playWhen === "3") {
        let userData = macro.args;
        aaSeq.macro(macro.name, handler.workflow, handler, userData)
    }
    
    aaSeq.play()

}