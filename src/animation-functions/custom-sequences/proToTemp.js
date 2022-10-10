//import { buildFile } from "../file-builder/build-filepath.js";
import { howToDelete } from "../../constants/constants.js";

// Credit goes to Wasp-Sequencer Guy for the structure of the Fireball Sequence
export async function proToTemp(handler, animationData, config) {

    const data = animationData.primary;
    const sourceFX = animationData.sourceFX;
    const secondary = animationData.secondary;
    const targetFX = animationData.targetFX;

    const template = config ? config : canvas.templates.placeables[canvas.templates.placeables.length - 1];
    const sourceToken = handler.sourceToken;

    let aaSeq = await new Sequence("Automated Animations")
    if (data.projectile.options.removeTemplate) {
        aaSeq.thenDo(function () {
            canvas.scene.deleteEmbeddedDocuments("MeasuredTemplate", [template.id])
        })
    }
    // Play Macro if Awaiting
    if (data.playMacro && data.macro.playWhen === "1") {
        handler.templateData = config;
        let userData = data.macro.args;
        aaSeq.macro(data.macro.name, handler.workflow, handler, userData)
    }
    // Source Effect if active
    if (sourceFX.enabled) {
        aaSeq.addSequence(sourceFX.sourceSeq)
    }
    //Projectile Sound and Animation
    if (data.projectile.sound) {
        aaSeq.addSequence(data.projectile.sound)
    }
    aaSeq.effect()
        .file(data.projectile.path.file)
        .atLocation(sourceToken)
        .stretchTo(template, { cacheLocation: true })
        .elevation(handler.elevation(sourceToken, data.projectile.options.isAbsolute, data.projectile.options.elevation))
        .repeats(data.projectile.options.repeat, data.projectile.options.repeatDelay)
        .waitUntilFinished(data.projectile.options.wait)
    if (data.preExplosion.sound) {
        aaSeq.addSequence(data.preExplosion.sound)
    }
    if (data.preExplosion.enable) {
        aaSeq.effect()
            .file(data.preExplosion.path.file, true)
            .atLocation(template, { cacheLocation: true })
            .elevation(handler.elevation(sourceToken, data.preExplosion.options.isAbsolute, data.preExplosion.options.elevation))
            .scaleToObject(data.preExplosion.options.scale)
            .repeats(data.preExplosion.options.repeat, data.preExplosion.options.repeatDelay)
            .waitUntilFinished(data.preExplosion.options.wait)
    }
    if (data.explosion.sound) {
        aaSeq.addSequence(data.explosion.sound)
    }
    aaSeq.effect()
        .file(data.explosion.path.file, true)
        .atLocation(template, { cacheLocation: true })
        .elevation(handler.elevation(sourceToken, data.explosion.options.isAbsolute, data.explosion.options.elevation))
        .scaleToObject(data.explosion.options.scale)
        .repeats(data.explosion.options.repeat, data.explosion.options.repeatDelay)
        .zIndex(5)
        .waitUntilFinished(-750 + data.explosion.options.wait)
    if (data.afterImage.customPath) {
        aaSeq.effect()
            .file(data.afterImage.customPath, true)
            .atLocation(template, { cacheLocation: true })
            .scaleToObject(data.afterImage.options.scale)
            .elevation(handler.elevation(sourceToken, data.afterImage.options.isAbsolute, data.afterImage.options.elevation))
            .persist(true)
            .origin(handler.itemUuid)
            .fadeIn(250)
            .fadeOut(500)
    }

    if (secondary) {
        if (secondary.sound) {
            aaSeq.addSequence(secondary.sound)
        }
        for (let i = 0; i < handler.allTargets.length; i++) {
            let currentTarget = handler.allTargets[i]

            let secondarySeq = aaSeq.effect()
            secondarySeq.atLocation(currentTarget)
            secondarySeq.file(secondary.path?.file, true)
            secondarySeq.size(secondary.options.size * 2, { gridUnits: true })
            secondarySeq.repeats(secondary.options.repeat, secondary.options.repeatDelay)
            if (i === handler.allTargets.length - 1 && secondary.options.isWait && targetFX.enable) {
                secondarySeq.waitUntilFinished(secondary.options.delay)
            } else if (!secondary.options.isWait) {
                secondarySeq.delay(secondary.options.delay)
            }
            secondarySeq.elevation(handler.elevation(currentTarget, secondary.options.isAbsolute, secondary.options.elevation))
            secondarySeq.zIndex(secondary.options.zIndex)
            secondarySeq.opacity(secondary.options.opacity)
            secondarySeq.fadeIn(secondary.options.fadeIn)
            secondarySeq.fadeOut(secondary.options.fadeOut)
            if (secondary.options.rotateSource) {
                secondarySeq.rotateTowards(sourceToken)
                secondarySeq.rotate(180)    
            }    
            if (secondary.options.isMasked) {
                secondarySeq.mask(currentTarget)
            }
            secondarySeq.anchor({x: secondary.options.anchor.x, y: secondary.options.anchor.y})
        }
    }

    if (targetFX.enable) {
        if (targetFX.sound) {
            aaSeq.addSequence(targetFX.sound)
        }
        for (let currentTarget of handler.allTargets) {
            let targetSequence = handler.buildTargetSeq(targetFX, currentTarget);
            aaSeq.addSequence(targetSequence.targetSeq)
        }
    }

    if (data.playMacro && data.macro.playWhen === "0") {
        handler.templateData = config;
        let userData = data.macro.args;
        new Sequence()
            .macro(data.macro.name, handler.workflow, handler, userData)
            .play()
    }
    if (data.afterImage.enable && data.afterImage.options.persistent) { howToDelete("sequencerground") }
    aaSeq.play()
}