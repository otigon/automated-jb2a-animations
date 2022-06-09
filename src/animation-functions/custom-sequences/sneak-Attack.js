import { buildFile } from "../file-builder/build-filepath.js";
import { aaDebugger } from "../../constants/constants.js";
import { AAanimationData } from "../../aa-classes/animation-data.js";

const wait = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

export async function sneakAttack(handler, animationData) {

    const data = animationData.primary;
    const sourceFX = animationData.sourceFX;

    //const sneakData =  handler.flags?.preset?.sneakattack;
    const sneakData = data.isAuto ? handler.autorecObject?.sneakattack : handler.flags?.preset?.sneakattack;

    if (!sneakData) { return; }
    const cleanData = {
        color: sneakData.color || "darkgreen",
        anchorX: sneakData.anchorX || 0.5,
        anchorY: sneakData.anchorY || 0.5,
        below: sneakData.below || false,
        scale: sneakData.scale || 1,
    }

    const sneak = await buildFile(true, "spell", "sneakattack", "static", "01", cleanData.color)
    const sourceToken = handler.sourceToken;

    if (handler.debug) { aaDebugger("Sneak Attack Animation Start", animationData, sneak) }

    const sourceTokenGS = sourceToken.w / canvas.grid.size;

    async function cast() {
        let aaSeq = await new Sequence()
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
        aaSeq.effect()
            .file(sneak.file)
            .atLocation(sourceToken)
            .size(sourceTokenGS * 2 * cleanData.scale, {gridUnits: true})
            .belowTokens(cleanData.below)
            .anchor({ x: cleanData.anchorX, y: cleanData.anchorY })
        if (data.playSound) {
            aaSeq.addSequence(await AAanimationData._sounds({ animationData }))
        }
        if (data.playMacro && data.macro.playWhen === "0") {
            let userData = data.macro.args;
            new Sequence()
                .macro(data.macro.name, handler.workflow, handler, ...userData)
                .play()
        }
        aaSeq.play()
        Hooks.callAll("aa.animationEnd", sourceToken, handler.allTargets)
    }
    cast();

}