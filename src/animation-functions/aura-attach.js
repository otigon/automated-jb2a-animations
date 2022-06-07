import { buildFile } from "./file-builder/build-filepath.js";
import { aaDebugger } from "../constants/constants.js";
import { AAanimationData } from "../aa-classes/animation-data.js";

const wait = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

export async function auras(handler, animationData) {

    //const gridSize = canvas.grid.size
    const data = animationData.primary;
    const sourceFX = animationData.sourceFX;
    //const targetFX = animationData.targetFX;

    if (data.isAuto) {
        data.size = data.scale * 2;
    } else {
        data.size = data.auraRadius * 2;
    }

    const easeArray = ['easeInOutCubic', 'easeInOutQuart', 'easeInQuad', 'easeInOutQuad', 'easeInCirc']

    const sourceToken = handler.sourceToken;
    const aura = await buildFile(true, data.menuType, data.animation, "static", data.variant, data.color, data.customPath);

    if (handler.debug) { aaDebugger("Aura Animation Start", animationData, aura) }

    if (handler.isActiveEffect) {
        await wait(data.aeDelay)
    }

    if (handler.allTargets.length === 0 || data.ignoreTargets) {
        selfAura()
    } else {
        targetAura();
    }


    async function selfAura() {
        const randomEase = easeArray[Math.floor(Math.random() * easeArray.length)]
        let checkAnim = Sequencer.EffectManager.getEffects({ object: sourceToken, origin: handler.itemUuid }).length > 0
        //let playPersist = !checkAnim ? true : false;
        let nameField;
        if (handler.isActiveEffect) {
            nameField = handler.itemName + `${sourceToken.id}`;
        } else {
            nameField = sourceToken.name;
        }
        let aaSeq = new Sequence()
        if (data.playMacro && data.macro.playWhen === "1") {
            let userData = data.macro.args;
            aaSeq.macro(data.macro.name, handler.workflow, handler, ...userData)
                .play()
        }
        let adjustedSize = data.addTokenWidth ? data.size + (sourceToken.w / canvas.grid.size) : data.size;
        console.log(adjustedSize)
        if (!checkAnim) {
            let newEffect = aaSeq.effect();
            aaSeq.addSequence(sourceFX.sourceSeq)
            newEffect.persist()
            newEffect.origin(handler.itemUuid)
            newEffect.size(adjustedSize, { gridUnits: true })
            newEffect.belowTokens(data.below)
            if (data.isMasked) {
                newEffect.mask(sourceToken)
            }
            newEffect.file(aura.file)
            newEffect.attachTo(sourceToken, { bindAlpha: data.unbindAlpha, bindVisibility: data.unbindVisibility })
            newEffect.name(nameField)
            newEffect.opacity(data.opacity)
            newEffect.animateProperty("sprite", "width", { from: 0, to: adjustedSize, duration: 2500, ease: randomEase, gridUnits: true })
            newEffect.animateProperty("sprite", "height", { from: 0, to: adjustedSize, duration: 2500, ease: randomEase, gridUnits: true })
            newEffect.fadeIn(2500)
            newEffect.fadeOut(500)
            AAanimationData.howToDelete("sequencerground")
        }
        if (data.playMacro && data.macro.playWhen === "0") {
            let userData = data.macro.args;
            new Sequence()
                .macro(data.macro.name, handler.workflow, handler, [...userData])
                .play()
        }
        if (data.playSound) {
            aaSeq.addSequence(await AAanimationData._sounds({ animationData }))
        }
        aaSeq.play()
    }

    async function targetAura() {

        let randomEase = easeArray[Math.floor(Math.random() * easeArray.length)]

        let aaSeq = new Sequence()
        if (data.playMacro && data.macro.playWhen === "1") {
            let userData = data.macro.args;
            aaSeq.macro(data.macro.name, handler.workflow, handler, [...userData])
        }
        aaSeq.addSequence(sourceFX.sourceSeq)
        for (let target of handler.allTargets) {
            let checkAnim = Sequencer.EffectManager.getEffects({ object: target, origin: handler.itemUuid }).length > 0
            let adjustedSize = data.addTokenWidth ? data.size + (target.w / canvas.grid.size) : data.size;

            if (!checkAnim) {
                let newEffect = aaSeq.effect();
                newEffect.persist()
                newEffect.origin(handler.itemUuid)
                newEffect.size(adjustedSize, { gridUnits: true })
                newEffect.belowTokens(data.below)
                if (data.isMasked) {
                    newEffect.mask(target)
                }    
                newEffect.file(aura.file)
                newEffect.attachTo(target, { bindAlpha: data.unbindAlpha, bindVisibility: data.unbindVisibility })
                newEffect.name(`${target.name}-${handler.itemName}`)
                newEffect.opacity(data.opacity)
                newEffect.animateProperty("sprite", "width", { from: 0, to: adjustedSize, duration: 2500, ease: randomEase, gridUnits: true })
                newEffect.animateProperty("sprite", "height", { from: 0, to: adjustedSize, duration: 2500, ease: randomEase, gridUnits: true })
                newEffect.fadeIn(2500)
                newEffect.fadeOut(500)
            }

        }
        if (data.playSound) {
            aaSeq.addSequence(await AAanimationData._sounds({ animationData }))
        }
        // Macro if Concurrent
        if (data.playMacro && data.macro.playWhen === "0") {
            let userData = data.macro.args;
            new Sequence()
                .macro(data.macro.name, handler.workflow, handler, [...userData])
                .play()
        }
        aaSeq.play()
        AAanimationData.howToDelete("sequencerground")
    }
}