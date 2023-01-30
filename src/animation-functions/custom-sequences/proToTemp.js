//import { buildFile } from "../file-builder/build-filepath.js";
import { howToDelete } from "../../constants/constants.js";

// Credit goes to Wasp-Sequencer Guy for the structure of the Fireball Sequence
export async function proToTemp(handler, animationData, templateDocument) {

    const data = animationData.primary;
    const sourceFX = animationData.sourceFX;
    const secondary = animationData.secondary;
    const targetFX = animationData.targetFX;
    const macro = animationData.macro;

    const template = handler.templateData ? handler.templateData : templateDocument//canvas.templates.placeables[canvas.templates.placeables.length - 1];
    const sourceToken = handler.sourceToken;

    let aaSeq = await new Sequence(handler.sequenceData)
    if (data.projectile.options.removeTemplate) {
        aaSeq.thenDo(function () {
            canvas.scene.deleteEmbeddedDocuments("MeasuredTemplate", [template.id])
        })
    }
    
    // Play Macro if Awaiting
    if (macro && macro.playWhen === "1" && !macro?.args?.warpgateTemplate) {
        handler.complileMacroSection(aaSeq, macro)
    }

    // Extra Effects => Source Token if active
    if (sourceFX) {
        handler.compileSourceEffect(sourceFX, aaSeq)
    }
    //Projectile Sound and Animation
    if (data.projectile.sound) {
        aaSeq.addSequence(data.projectile.sound)
    }
    aaSeq.effect()
        .file(data.projectile.path.file)
        .atLocation(sourceToken)
        .stretchTo(template, { cacheLocation: true, randomOffset: data.projectile.options.randomOffset })
        .elevation(handler.elevation(sourceToken, data.projectile.options.isAbsolute, data.projectile.options.elevation), {absolute: data.projectile.options.isAbsolute})
        .repeats(data.projectile.options.repeat, data.projectile.options.repeatDelay)
        .playbackRate(data.projectile.options.playbackRate)
        .waitUntilFinished(data.projectile.options.wait)
    if (data.preExplosion.sound) {
        aaSeq.addSequence(data.preExplosion.sound)
    }
    if (data.preExplosion.enable) {
        aaSeq.effect()
            .file(data.preExplosion.path.file)
            .atLocation(template, { cacheLocation: true })
            .elevation(handler.elevation(sourceToken, data.preExplosion.options.isAbsolute, data.preExplosion.options.elevation), {absolute: data.preExplosion.options.isAbsolute})
            .scaleToObject(data.preExplosion.options.scale)
            .repeats(data.preExplosion.options.repeat, data.preExplosion.options.repeatDelay)
            .playbackRate(data.preExplosion.options.playbackRate)
            .waitUntilFinished(data.preExplosion.options.wait)
            .aboveLighting(data.preExplosion.options.aboveTemplate)
    }
    if (data.explosion.sound) {
        aaSeq.addSequence(data.explosion.sound)
    }
    aaSeq.effect()
        .file(data.explosion.path.file)
        .atLocation(template, { cacheLocation: true })
        .elevation(handler.elevation(sourceToken, data.explosion.options.isAbsolute, data.explosion.options.elevation), {absolute: data.explosion.options.isAbsolute})
        .scaleToObject(data.explosion.options.scale)
        .repeats(data.explosion.options.repeat, data.explosion.options.repeatDelay)
        .zIndex(5)
        .playbackRate(data.explosion.options.playbackRate)
        .waitUntilFinished(-750 + data.explosion.options.wait)
        .aboveLighting(data.explosion.options.aboveTemplate)
    if (data.afterImage.customPath) {
        aaSeq.effect()
            .file(data.afterImage.customPath)
            .atLocation(template, { cacheLocation: true })
            .scaleToObject(data.afterImage.options.scale)
            .elevation(handler.elevation(sourceToken, data.afterImage.options.isAbsolute, data.afterImage.options.elevation), {absolute: data.afterImage.options.isAbsolute})
            .persist(data.afterImage.options.persistent)
            .origin(handler.itemUuid)
            .fadeIn(250)
            .fadeOut(500)
    }

    if (secondary) {
        handler.compileSecondaryEffect(secondary, aaSeq, handler.allTargets, targetFX.enable, false)
    }
    if (targetFX) {
        handler.compileTargetEffect(targetFX, aaSeq, handler.allTargets, false)
    }

    if (macro && macro.playWhen === "0" && !macro?.args?.warpgateTemplate) {
        handler.runMacro(macro)
    }

    if (data.afterImage.enable && data.afterImage.options.persistent) { howToDelete("sequencerground") }

    // Macro if Awaiting Animation. This will respect the Delay/Wait options in the Animation chains
    if (macro && macro.playWhen === "3") {
        handler.complileMacroSection(aaSeq, macro)
    }
    
    aaSeq.play()

}