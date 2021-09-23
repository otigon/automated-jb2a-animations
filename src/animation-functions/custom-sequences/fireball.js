import { buildFile } from "../file-builder/build-filepath.js"

// Credit goes to Wasp-Sequencer Guy for the structure of the Fireball Sequence
export async function fireball(handler, autoObject) {

    const data = {}
    Object.assign(data, autoObject);
    const autoOverriden = handler.options?.overrideAuto;
    const autoOverrideAfter = handler.options?.autoFireball?.afterEffect;
    if (!autoOverriden) {
        data.projectileRepeat = data.projectileRepeat || 1;
        data.projectileDelay = data.projectileDelay || 250;
        data.explosion01Repeat = data.explosion01Repeat || 1;
        data.explosion01Delay = data.explosion01Delay || 250;
        data.explosion01Scale = data.explosion01Scale || 1;
        data.explosion02Repeat = data.explosion02Repeat || 1;
        data.explosion02Delay = data.explosion02Delay || 250;
        data.explosion02Scale = data.explosion02Scale || 1;
    } else {
        data.projectile = handler.options.autoFireball.projectile;
        data.projectileColor = handler.options.autoFireball.projectileColor || data.projectileColor;
        data.projectileRepeat = data.projectileRepeat || 1;
        data.projectileDelay = data.projectileDelay || 250;
        data.wait01 = handler.options.autoFireball.wait01 || data.projectileColor;

        data.explosion01Color = handler.options.autoFireball.explosion01Color || data.explosion01Color;
        data.explosion01Repeat = data.explosion01Repeat || 1;
        data.explosion01Delay = data.explosion01Delay || 250;
        data.explosion01Scale = data.explosion01Scale || 1;

        data.explosion02Color = handler.options.autoFireball.explosion02Color || data.explosion02Color;
        data.explosion02Repeat = data.explosion02Repeat || 1;
        data.explosion02Delay = data.explosion02Delay || 250;
        data.explosion02Scale = data.explosion02Scale || 1;
        data.afterEffect = autoOverrideAfter ? handler.options?.autoFireball?.afterEffect : data.afterEffect;
        data.afterEffectPath = autoOverrideAfter ? handler.options?.autoFireball?.afterEffectPath : data.afterEffectPath;
        data.wait03 = autoOverrideAfter ? handler.options?.autoFireball?.wait03 : data.wait03;
    }

    const projectileAnimation = await buildFile(false, data.projectile, "range", data.projectileVariant, data.projectileColor);
    const explosion01 = await buildFile(true, data.explosion01, "static", data.explosion01Variant, data.explosion01Color)
    const explosion02 = await buildFile(true, data.explosion02, "static", data.explosion02Variant, data.explosion02Color)

    let fireballTemplate = canvas.templates.placeables[canvas.templates.placeables.length - 1].data._id;//canvas.templates.get(args[0].templateId)
    let tokenD = handler.actorToken;
    let template = await canvas.templates.documentCollection.get(fireballTemplate)

    const size = canvas.grid.size * ((template.data.distance * 2) / canvas.dimensions.distance);

    const position = {
        x: template.data.x,
        y: template.data.y,
    }

    if (data.removeTemplate) {
        canvas.scene.deleteEmbeddedDocuments("MeasuredTemplate", [template.data._id])
    }

    new Sequence("Automated Animations")
        .effect()
            .file(projectileAnimation.file)
            .atLocation(tokenD)
            .reachTowards(position)
            .repeats(data.projectileRepeat, data.projectileDelay)
            .waitUntilFinished(data.wait01)
            .JB2A()
        .effect()
            .file(explosion01.file)
            .atLocation(position)
            .size(size * .35 * data.explosion01Scale)
            .repeats(data.explosion01Repeat, data.explosion01Delay)
            .timeRange(0, 1200)
            .waitUntilFinished(data.wait02)
        .effect()
            .file(explosion02.file)
            .atLocation(position)
            .size(size * data.explosion02Scale)
            .repeats(data.explosion02Repeat, data.explosion02Delay)
            .zIndex(1)
        .effect()
            .file(explosion02.file)
            .atLocation(position)
            .size(size * data.explosion02Scale)
            .zIndex(5)
            .waitUntilFinished(-750 + data.wait03)
        .effect()
            .file(data.afterEffectPath)
            .size(size)
            .atLocation(position)
            .belowTokens(true)
            .persist(true)
            .fadeIn(250)
            .playIf(data.afterEffect)
        .play()

}