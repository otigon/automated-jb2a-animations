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

    const attack = await buildFile(false, data.menuType, data.animation, "range", data.variant, data.color, data.customPath)

    if (handler.debug) { aaDebugger("Ranged Animation Start", animationData, attack) }

    const sourceToken = handler.sourceToken;
    const onlyX = data.enableCustom ? data.onlyX : false;

    async function cast() {

        let aaSeq = await new Sequence("Automated Animations")

        // Play Macro if Awaiting
        if (data.playMacro && data.macro.playWhen === "1") {
            let userData = data.macro.args;
            aaSeq.macro(data.macro.name, handler.workflow, handler, ...userData)
        }
        // Extra Effects => Source Token if active
        if (sourceFX.enabled) {
            aaSeq.addSequence(sourceFX.sourceSeq)
        }
        // Animation Start Hook
        aaSeq.thenDo(function () {
            Hooks.callAll("aa.animationStart", sourceToken, handler.allTargets)
        })
        let targetSound = false;
        // Target Effect sections
        for (let target of handler.allTargets) {
            let hit;
            if (handler.playOnMiss) {
                hit = handler.hitTargetsId.includes(target.id) ? true : false;
            } else {
                hit = true;
            }
            if (hit) { targetSound = true }
            aaSeq.effect()
                .file(attack.file)
                .atLocation(sourceToken)
                .stretchTo(target, { onlyX: onlyX })
                .randomizeMirrorY()
                .repeats(data.repeat, data.delay)
                .missed(!hit)
                .name("spot" + ` ${target.id}`)
                .belowTokens(data.below)
            if (data.explosion.enabled) {
                aaSeq.effect()
                    .atLocation("spot" + ` ${target.id}`)
                    .file(data.explosion?.data?.file, true)
                    //.scale({ x: data.explosion?.scale, y: data.explosion?.scale })
                    .size(data.explosion?.radius * 2, {gridUnits: true})
                    .delay(data.explosion?.delay)
                    .repeats(data.repeat, data.delay)
                    .belowTokens(data.explosion?.below)
            }
            if (targetFX.enabled && hit) {
                let targetSequence = AAanimationData._targetSequence(targetFX, target, handler);
                aaSeq.addSequence(targetSequence.targetSeq)
            }
        }
        aaSeq.addSequence(await AAanimationData._sounds({ animationData, targetSound, explosionSound: true }))
        // Macro if Concurrent
        if (data.playMacro && data.macro.playWhen === "0") {
            let userData = data.macro.args;
            new Sequence()
                .macro(data.macro.name, handler.workflow, handler, ...userData)
                .play()
        }
        aaSeq.play()
        await wait(handler.animEnd)
        // Animation End Hook
        Hooks.callAll("aa.animationEnd", sourceToken, handler.allTargets)
    }
    cast()
}
