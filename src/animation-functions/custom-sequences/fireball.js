import { buildFile } from "../file-builder/build-filepath.js"

// Credit goes to Wasp-Sequencer Guy for the structure of the Fireball Sequence
export async function fireball(handler, autoObject) {

    const data = {}

    if (autoObject) {
        Object.assign(data, autoObject);
        const autoOverridden = handler.flags?.autoOverride?.enable ?? false;
        const autoOverrideAfter = handler.flags?.autoOverride?.fireball?.afterEffect ?? false;
        const autoFireball = handler.flags?.autoOverride?.fireball ?? {};
        data.projectile = autoOverridden ? autoFireball.projectile : data.projectile;
        data.projectileVariant = autoFireball ? autoFireball.projectileVariant : data.projectilVariant ?? "01";
        data.projectileColor = autoOverridden ? autoFireball.projectileColor ?? data.projectileColor : data.projectileColor ?? "";
        data.projectileRepeat = data.projectileRepeat ?? 1;
        data.projectileDelay = data.projectileDelay ?? 250;
        data.wait01 = autoOverridden ? autoFireball.wait01 ?? -500 : data.wait01 ?? -500;

        data.explosion01 = data.explosion01;
        data.explosion01Variant = data.explosion01Variant ?? "01";
        data.explosion01Color = autoOverridden ? autoFireball.explosion01Color ?? "" : data.explosion01Color ?? "";
        data.explosion01Repeat = data.explosion01Repeat ?? 1;
        data.explosion01Delay = data.explosion01Delay ?? 250;
        data.explosion01Scale = data.explosion01Scale ?? 1;
        data.wait02 = data.wait02 ?? 500;

        data.explosion02 = data.explosion02;
        data.explosion02Variant = data.explosion02Variant ?? "01";
        data.explosion02Color = autoOverridden ? autoFireball.explosion02Color ?? "" : data.explosion02Color ?? "";
        data.explosion02Repeat = data.explosion02Repeat ?? 1;
        data.explosion02Delay = data.explosion02Delay ?? 250;
        data.explosion02Scale = data.explosion02Scale ?? 1;

        data.afterEffect = autoOverrideAfter ? autoFireball.afterEffect ?? false : data.afterEffect;
        data.afterEffectPath = autoOverrideAfter ? autoFireball.afterEffectPath ?? "" : data.afterEffectPath ?? "";
        data.wait03 = autoOverrideAfter ? autoFireball.wait03 ?? 500 : data.wait03 ?? 500;
    } else {
        const fireballFlags = handler.fireball ?? {};
        data.projectile = fireballFlags.projectile;
        data.projectileVariant = fireballFlags.projectileVariant ?? "01";
        data.projectileColor = fireballFlags.projectileColor ?? "";
        data.projectileRepeat = fireballFlags.projectileRepeat ?? 1;
        data.projectileDelay = fireballFlags.projectileDelay ?? 250;
        data.wait01 = fireballFlags.wait01 ?? -500;

        data.explosion01 = fireballFlags.explosion01;
        data.explosion01Variant = fireballFlags.explosion01Variant ?? "01";
        data.explosion01Color = fireballFlags.explosion01Color ?? "";
        data.explosion01Repeat = fireballFlags.explosion01Repeat ?? 1;
        data.explosion01Delay = fireballFlags.explosion01Delay ?? 250;
        data.explosion01Scale = fireballFlags.explosion01Scale ?? 1;
        data.wait02 = fireballFlags.wait01 ?? -500;

        data.explosion02 = fireballFlags.explosion02;
        data.explosion02Variant = fireballFlags.explosion02Variant ?? "01";
        data.explosion02Color = fireballFlags.explosion02Color ?? "";
        data.explosion02Repeat = fireballFlags.explosion02Repeat ?? 1;
        data.explosion02Delay = fireballFlags.explosion02Delay ?? 250;
        data.explosion02Scale = fireballFlags.explosion02Scale ?? 1;

        data.afterEffect = fireballFlags.afterEffect;
        data.afterEffectPath = fireballFlags.afterEffectPath ?? "";
        data.wait03 = fireballFlags.wait03 ?? 500;
        data.removeTemplate = handler.options?.removeTemplate ?? false;
    }
    console.log(data)
    let templateSound = handler.allSounds?.item;
    let templateVolume = 0.25;
    let templateDelay = 1;
    let templateFile = "";
    if (handler.itemSound) {
        templateVolume = templateSound?.volume ?? 0.25;
        templateDelay = templateSound?.delay === 0 ? 1 : templateSound?.delay;
        templateFile = templateSound?.file;
    }

    const projectileAnimation = await buildFile(false, data.projectile, "range", data.projectileVariant, data.projectileColor);
    const explosion01 = data.explosion01 !== "a1" ? await buildFile(true, data.explosion01, "static", data.explosion01Variant, data.explosion01Color) : "";
    const explosion02 = data.explosion02 !== "a1" ? await buildFile(true, data.explosion02, "static", data.explosion02Variant, data.explosion02Color) : "";

    let fireballTemplate = canvas.templates.placeables[canvas.templates.placeables.length - 1].data._id;//canvas.templates.get(args[0].templateId)
    let tokenD = handler.actorToken;
    let template = await canvas.templates.documentCollection.get(fireballTemplate)

    let size;
    let position;
    if (game.modules.get("dnd5e-helpers")?.active && (game.settings.get("dnd5e-helpers", "gridTemplateScaling") === 2 || game.settings.get("dnd5e-helpers", "gridTemplateScaling") === 3)) {
        const scale5e = template.data.distance / Math.sqrt(2);
        position = {
            x: template.data.x + (((scale5e / canvas.dimensions.distance) * canvas.grid.size) / 2),
            y: template.data.y + (((scale5e / canvas.dimensions.distance) * canvas.grid.size) / 2),
        }
        size = (canvas.grid.size * ((template.data.distance * 2) / canvas.dimensions.distance)) / 2;
    } else {
        position = {
            x: template.data.x,
            y: template.data.y,
        }
        size = canvas.grid.size * ((template.data.distance * 2) / canvas.dimensions.distance);
    }
    /*
    const position = {
        x: template.data.x,
        y: template.data.y,
    }
    */

    new Sequence("Automated Animations")
        .effect()
            .file(projectileAnimation.file)
            .atLocation(tokenD)
            .reachTowards(position)
            .repeats(data.projectileRepeat, data.projectileDelay)
            .waitUntilFinished(data.wait01)
            //.JB2A()
        .sound()
            .file(templateFile)
            .playIf(handler.itemSound)
            .delay(templateDelay)
            .volume(templateVolume)
        .effect()
            .file(explosion01.file)
            .playIf(data.explosion01 !== "a1")
            .atLocation(position)
            .size(size * .35 * data.explosion01Scale)
            .repeats(data.explosion01Repeat, data.explosion01Delay)
            .timeRange(0, 1200)
            .waitUntilFinished(data.wait02)
        .effect()
            .file(explosion02.file)
            .playIf(data.explosion02 !== "a1")
            .atLocation(position)
            .size(size * data.explosion02Scale)
            .repeats(data.explosion02Repeat, data.explosion02Delay)
            .zIndex(1)
        .effect()
            .file(explosion02.file)
            .playIf(data.explosion02 !== "a1")
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
            .origin(handler.item.uuid)
            .fadeIn(250)
            .playIf(data.afterEffect)
        .play()

        if (data.removeTemplate) {
            canvas.scene.deleteEmbeddedDocuments("MeasuredTemplate", [template.data._id])
        }
    
}