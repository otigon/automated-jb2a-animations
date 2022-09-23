import { buildFile } from "../file-builder/build-filepath.js";

// Credit goes to Wasp-Sequencer Guy for the structure of the Fireball Sequence
export async function proToTemp(handler, animationData, config) {

    const data = animationData.primary;
    const sourceFX = animationData.sourceFX;

    const projectileAnimation = await buildFile(false, data.projectile.menuType, data.projectile.animation, "range", data.projectile.variant, data.projectile.color);
    const preExplosion = data.preExplosion.enable ? await buildFile(true, data.preExplosion.menuType, data.preExplosion.animation, "static", data.preExplosion.variant, data.preExplosion.color) : "";
    const explosion02 = data.explosion.animation !== "a1" ? await buildFile(true, data.explosion.menuType, data.explosion.animation, "static", data.explosion.variant, data.explosion.color) : "";

    const template = config ? config : canvas.templates.placeables[canvas.templates.placeables.length - 1];
    const sourceToken = handler.sourceToken;
    let size;
    let position;
    if (game.modules.get("dnd5e-helpers")?.active && (game.settings.get("dnd5e-helpers", "gridTemplateScaling") === 2 || game.settings.get("dnd5e-helpers", "gridTemplateScaling") === 3)) {
        const scale5e = template.document.distance / Math.sqrt(2);
        position = {
            x: template.x + (((scale5e / canvas.dimensions.distance) * canvas.grid.size) / 2),
            y: template.y + (((scale5e / canvas.dimensions.distance) * canvas.grid.size) / 2),
        }
        size = (canvas.grid.size * (template.document.distance / canvas.dimensions.distance));
    } else if (template.document?.t === 'rect') {
        const offset = canvas.grid.size * (template.width / canvas.dimensions.distance);
        position = {
            x: template.x + (offset / 2),
            y: template.y + (offset / 2),
        }
        size = (canvas.grid.size * (template.document.distance / canvas.dimensions.distance));
    } else {
        position = {
            x: template.x,
            y: template.y,
        }
        size = canvas.grid.size * ((template.document.distance * 2) / canvas.dimensions.distance);
    }
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
    // Extra Effects => Source Token if active
    if (sourceFX.enabled) {
        aaSeq.addSequence(sourceFX.sourceSeq)
    }
    if (data.projectile.sound.file) {
        aaSeq.sound()
            .file(data.projectile.sound.file, true)
            .volume(data.projectile.sound.volume)
            .delay(data.projectile.sound.delay)
            .repeats(data.projectile.sound.repeat, data.projectile.options.repeatDelay)
            .startTime(data.projectile.sound.startTime)
    }
    aaSeq.effect()
        .file(projectileAnimation.file)
        .atLocation(sourceToken)
        .stretchTo(position)
        .repeats(data.projectile.options.repeat, data.projectile.options.repeatDelay)
        .waitUntilFinished(data.projectile.options.wait)
    if (data.preExplosion.sound.file) {
        aaSeq.sound()
            .file(data.preExplosion.sound.file, true)
            .volume(data.preExplosion.sound.volume)
            .delay(data.preExplosion.sound.delay)
            .repeats(data.preExplosion.sound.repeat, data.preExplosion.options.repeatDelay)
            .startTime(data.preExplosion.sound.startTime)
    }
    if (data.preExplosion.enable) {
        aaSeq.effect()
            .file(preExplosion.file, true)
            .atLocation(position)
            .size(size * .35 * data.preExplosion.options.scale)
            .repeats(data.preExplosion.options.repeat, data.preExplosion.options.repeatDelay)
            .waitUntilFinished(data.preExplosion.options.wait)
    }
    if (data.explosion.sound.file) {
        aaSeq.sound()
            .file(data.explosion.sound.file, true)
            .volume(data.explosion.sound.volume)
            .delay(data.explosion.sound.delay)
            .repeats(data.explosion.sound.repeat, data.explosion.options.repeatDelay)
            .startTime(data.explosion.sound.startTime)
    }
    aaSeq.effect()
        .file(explosion02.file, true)
        .atLocation(position)
        .size(size * data.explosion.options.scale)
        .repeats(data.explosion.options.repeat, data.explosion.options.repeatDelay)
        .zIndex(5)
        .waitUntilFinished(-750 + data.explosion.options.wait)
    if (data.afterImage.customPath) {
        aaSeq.effect()
            .file(data.afterImage.customPath, true)
            .size(size)
            .atLocation(position)
            .elevation(0)
            .persist(true)
            .origin(handler.itemUuid)
            .fadeIn(250)
            .fadeOut(500)
    }
    if (data.playMacro && data.macro.playWhen === "0") {
        handler.templateData = config;
        let userData = data.macro.args;
        new Sequence()
            .macro(data.macro.name, handler.workflow, handler, userData)
            .play()
    }
    if (data.afterImage.enable && data.afterImage.persistent) { AAAnimationData.howToDelete("sequencerground") }
    aaSeq.play()
}