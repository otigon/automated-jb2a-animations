import { buildFile } from "../file-builder/build-filepath.js";
import { aaDebugger } from "../../constants/constants.js";
import { AAAnimationData } from "../../aa-classes/AAAnimationData.js";

const wait = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

export async function auraSeq(handler, animationData) {

    //const gridSize = canvas.grid.size
    const data = animationData.primary;
    const sourceFX = animationData.sourceFX;
    const targetFX = animationData.targetFX;
    const macro = animationData.macro;
    //const targetFX = animationData.targetFX;

    if (data.isAuto) {
        data.size = data.scale * 2;
    } else {
        data.size = data.auraRadius * 2;
    }

    const easeArray = ['easeInOutCubic', 'easeInOutQuart', 'easeInQuad', 'easeInOutQuad', 'easeInCirc']

    const sourceToken = handler.sourceToken;
    const aura = await buildFile(false, data.video.menuType, data.video.animation, "static", data.video.variant, data.video.color, data.video.customPath);

    if (handler.debug) { aaDebugger("Aura Animation Start", animationData, aura) }

    if (handler.isActiveEffect) {
        // TO-DO add AE Delay to Active Effect options
        //await wait(data.aeDelay)
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
        let aaSeq = new Sequence("Automated Animations")
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
            Hooks.callAll("aa.animationStart", sourceToken)
        })
        
        let adjustedSize = data.options.addTokenWidth ? data.options.radius * 2 + (sourceToken.w / canvas.grid.size) : data.options.radius * 2;
        console.log(adjustedSize)
        if (!checkAnim) {
            let newEffect = aaSeq.effect();
            //aaSeq.addSequence(sourceFX.sourceSeq)
            newEffect.persist()
            newEffect.origin(handler.itemUuid)
            newEffect.size(adjustedSize, { gridUnits: true })
            newEffect.elevation(data.options.elevation)
            if (data.options.isMasked) {
                newEffect.mask(sourceToken)
            }
            newEffect.file(aura.file)
            newEffect.attachTo(sourceToken, { bindAlpha: data.options.unbindAlpha, bindVisibility: data.options.unbindVisibility })
            newEffect.name(nameField)
            newEffect.opacity(data.options.opacity)
            newEffect.animateProperty("sprite", "width", { from: 0, to: adjustedSize, duration: 2500, ease: randomEase, gridUnits: true })
            newEffect.animateProperty("sprite", "height", { from: 0, to: adjustedSize, duration: 2500, ease: randomEase, gridUnits: true })
            newEffect.fadeIn(2500)
            newEffect.fadeOut(500)
            newEffect.zIndex(data.options.zIndex)
            AAAnimationData.howToDelete("sequencerground")
        }
        // Macro if Concurrent
        if (macro && macro.playWhen === "0") {
            let userData = macro.args;
            new Sequence()
                .macro(macro.name, handler.workflow, handler, userData)
                .play()
        }
        aaSeq.play()
    }

    async function targetAura() {

        let randomEase = easeArray[Math.floor(Math.random() * easeArray.length)]

        let aaSeq = new Sequence()
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
        for (let i = 0; i < handler.allTargets.length; i++) {
            let currentTarget = handler.allTargets[i]
        //for (let target of handler.allTargets) {
            let checkAnim = Sequencer.EffectManager.getEffects({ object: currentTarget, origin: handler.itemUuid }).length > 0
            let adjustedSize = data.options.addTokenWidth ? data.options.radius + (currentTarget.w / canvas.grid.size) : data.options.radius;

            if (!checkAnim) {
                let newEffect = aaSeq.effect();
                newEffect.persist()
                newEffect.origin(handler.itemUuid)
                newEffect.size(adjustedSize, { gridUnits: true })
                newEffect.elevation(data.options.elevation)
                if (data.options.isMasked) {
                    newEffect.mask(currentTarget)
                }    
                newEffect.file(aura.file)
                newEffect.attachTo(currentTarget, { bindAlpha: data.options.unbindAlpha, bindVisibility: data.options.unbindVisibility })
                newEffect.name(`${currentTarget.name}-${handler.itemName}`)
                newEffect.opacity(data.options.opacity)
                newEffect.animateProperty("sprite", "width", { from: 0, to: adjustedSize, duration: 2500, ease: randomEase, gridUnits: true })
                newEffect.animateProperty("sprite", "height", { from: 0, to: adjustedSize, duration: 2500, ease: randomEase, gridUnits: true })
                newEffect.fadeIn(2500)
                newEffect.fadeOut(500)
                newEffect.zIndex(data.options.zIndex)
            }
            if (i === handler.allTargets.length - 1 && data.options.isWait) {
                nextSeq.waitUntilFinished(data.options.delay)
            } else if (!data.options.isWait) {
                nextSeq.dely(data.options.delay)
            }
        }
        if (targetFX.enable) {
            for (let i = 0; i < handler.allTargets.length; i++) {
                let currentTarget = handler.allTargets[i]
            
                // Extra Effects => Target effect section
                if (targetFX.enable) {
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
        AAAnimationData.howToDelete("sequencerground")
    }
}