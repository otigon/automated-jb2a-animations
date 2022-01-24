import { buildFile } from "./file-builder/build-filepath.js"
import { aaDebugger } from "../constants/constants.js"
import { AAanimationData } from "../aa-classes/animation-data.js";

const wait = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

export async function rangedAnimations(handler, animationData) {

    // Sets JB2A database and Global Delay
    //let jb2a = moduleIncludes("jb2a_patreon") === true ? JB2APATREONDB : JB2AFREEDB;
    let globalDelay = game.settings.get("autoanimations", "globaldelay");
    await wait(globalDelay);

    const data = animationData.primary;
    const sourceFX = animationData.sourceFX;
    const targetFX = animationData.targetFX;

    const attack = await buildFile(false, data.animation, "range", data.variant, data.color, data.customPath)

    if (handler.debug) { aaDebugger("Ranged Animation Start", animationData, attack) }

    const sourceToken = handler.sourceToken;
    const onlyX = data.enableCustom ? data.onlyX : false;

    async function cast() {
        //let arrayLength = handler.allTargets.length;
        //for (var i = 0; i < arrayLength; i++) {
            /*
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
            */
            /*
            if (data.macro.enabled && data.macro.name) {
                let executeMacro = new Sequence("Automated Animations");
                let userData = data.macro.args.split(',').map(s => s.trim());
                executeMacro.macro(data.macro.name, {sourceToken, target, animationData, handler}, ...userData)
                executeMacro.play()
            }
            */
            let aaSeq = await new Sequence("Automated Animations")
            /*
            if (data.playMacro) {
                let userData = data.macro.args;
                rs.macro(data.macro.name, handler.workflow, handler, [...userData])
            }
            */
        console.log(data)
        if (data.playMacro && data.macro.playWhen === "1") {
            let userData = data.macro.args;
            aaSeq.macro(data.macro.name, handler.workflow, handler, [...userData])
                .play()
        }
        if (sourceFX.enabled) {
            aaSeq.addSequence(sourceFX.sourceSeq)
        }
        aaSeq.thenDo(function () {
            Hooks.callAll("aa.animationStart", sourceToken, handler.allTargets)
        })
        if (data.itemAudio.enable) {
            aaSeq.sound()
                .file(data.itemAudio.file, true)
                .volume(data.itemAudio.volume)
                .delay(data.itemAudio.delay)
                .repeats(data.itemAudio.repeat, data.delay)
                .playIf(data.playSound)
        }
        if (data.explosion.audio.enabled && data.explosion.enabled) {
            console.log("ADDING EXPLOSION AUDIO")
            aaSeq.sound()
                .file(data.explosion?.audio?.file, true)
                .playIf(data.explosion?.playSound)
                .delay(data.explosion?.audio?.delay + data.explosion?.delay)
                .volume(data.explosion?.audio?.volume)
                .repeats(data.explosion?.audio?.repeat, data.delay)
        }
        for (let target of handler.allTargets) {
            let hit;
            if (handler.playOnMiss) {
                hit = handler.hitTargetsId.includes(target.id) ? false : true;
            } else {
                hit = false;
            }
            aaSeq.effect()
                .file(attack.file)
                .atLocation(sourceToken)
                .stretchTo(target, { onlyX: onlyX })
                .randomizeMirrorY()
                .repeats(data.repeat, data.delay)
                .missed(hit)
                .name("spot" + ` ${target.id}`)
                .belowTokens(data.below)
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
        console.log(aaSeq)
        aaSeq.play()
        await wait(handler.animEnd)
        Hooks.callAll("aa.animationEnd", sourceToken, handler.allTargets)
            /*
        await new Sequence("Automated Animations")
            .addSequence(sourceFX.sourceSeq)
            .thenDo(function() {
                Hooks.callAll("aa.animationStart", sourceToken, target)
            })
            .sound()
                .file(data.itemAudio.file, true)
                .volume(data.itemAudio.volume)
                .delay(data.itemAudio.delay)
                .repeats(data.itemAudio.repeat, data.delay)
                .playIf(data.playSound)
            .effect()
                .file(attack.file)
                .atLocation(sourceToken)
                .stretchTo(target, {onlyX: onlyX})
                .randomizeMirrorY()
                .repeats(data.repeat, data.delay)
                .missed(hit)
                .name("animation")
                .belowTokens(data.below)
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
            .addSequence(targetSequence.targetSeq)
            .play()
            */
            //await wait(handler.animEnd)
            //Hooks.callAll("aa.animationEnd", sourceToken, target)
        //}
    }
    cast()
}
