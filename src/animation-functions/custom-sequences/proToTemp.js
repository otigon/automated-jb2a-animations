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
    const effect1 = aaSeq.effect()
        .file(data.projectile.path.file)
        .atLocation(sourceToken)
        .stretchTo(template, { cacheLocation: true, randomOffset: data.projectile.options.randomOffset })
        .repeats(data.projectile.options.repeat, data.projectile.options.repeatDelay)
        .playbackRate(data.projectile.options.playbackRate)
        .waitUntilFinished(data.projectile.options.wait)

    if (data.projectile.options.elevation === 0) {
        effect1.belowTokens(true)
    } else {
        effect1.elevation(handler.elevation(sourceToken, data.projectile.options.isAbsolute, data.projectile.options.elevation), { absolute: data.projectile.options.isAbsolute })
    }
    if (data.preExplosion.sound) {
        aaSeq.addSequence(data.preExplosion.sound)
    }
    if (data.preExplosion.enable) {
        const effectExplode = aaSeq.effect()
            .file(data.preExplosion.path.file)
            .atLocation(template, { cacheLocation: true })
            .scaleToObject(data.preExplosion.options.scale)
            .repeats(data.preExplosion.options.repeat, data.preExplosion.options.repeatDelay)
            .playbackRate(data.preExplosion.options.playbackRate)
            .waitUntilFinished(data.preExplosion.options.wait)
            .aboveLighting(data.preExplosion.options.aboveTemplate)

        if (data.preExplosion.options.elevation === 0) {
            effectExplode.belowTokens(true)
        } else {
            effectExplode.elevation(handler.elevation(sourceToken, data.preExplosion.options.isAbsolute, data.preExplosion.options.elevation), { absolute: data.preExplosion.options.isAbsolute })
        }
    }
    if (data.explosion.sound) {
        aaSeq.addSequence(data.explosion.sound)
    }
    const effect2 = aaSeq.effect()
        .file(data.explosion.path.file)
        .atLocation(template, { cacheLocation: true })
        .scaleToObject(data.explosion.options.scale)
        .repeats(data.explosion.options.repeat, data.explosion.options.repeatDelay)
        .zIndex(5)
        .playbackRate(data.explosion.options.playbackRate)
        .waitUntilFinished(-750 + data.explosion.options.wait)
        .aboveLighting(data.explosion.options.aboveTemplate)

    if (data.explosion.options.elevation === 0) {
        effect2.belowTokens(true)
    } else {
        effect2.elevation(handler.elevation(sourceToken, data.explosion.options.isAbsolute, data.explosion.options.elevation), { absolute: data.explosion.options.isAbsolute })
    }
    if (data.afterImage.customPath) {
        const effectAfterImage = aaSeq.effect()
            .file(data.afterImage.customPath)
            .atLocation(template, { cacheLocation: true })
            .scaleToObject(data.afterImage.options.scale)
            .persist(data.afterImage.options.persistent)
            .origin(handler.itemUuid)
            .fadeIn(250)
            .fadeOut(500)

        if (data.afterImage.options.elevation === 0) {
            effectAfterImage.belowTokens(true)
        } else {
            effectAfterImage.elevation(handler.elevation(sourceToken, data.afterImage.options.isAbsolute, data.afterImage.options.elevation), { absolute: data.afterImage.options.isAbsolute })
        }
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