import { buildFile } from "../file-builder/build-filepath.js"

export async function fireball(handler, autoObject) {

    const data = {}
    if (autoObject) {
        Object.assign(data, autoObject[0]);
    } else {

    }
    console.log(data)

    const projectileAnimation = await buildFile(false, data.projectile, "range", data.projectileVariant, data.projectileColor);
    const explosion01 = await buildFile(true, data.explosion01, "static", data.explosion01Variant, data.explosion01Color)
    const explosion02 = await buildFile(true, data.explosion02, "static", data.explosion02Variant, data.explosion02Color)

    let fireballTemplate = canvas.templates.placeables[canvas.templates.placeables.length - 1].data._id;//canvas.templates.get(args[0].templateId)
    let tokenD = handler.actorToken;
    let template = await canvas.templates.documentCollection.get(fireballTemplate)

    const size = canvas.grid.size * ((template.data.distance * 2) / canvas.dimensions.distance);
    const xPos = template.data.x;
    const yPos = template.data.y;

    let tileData = [{
        img: data.afterEffectPath,
        width: size,
        height: size,
        scale: 1,
        x: xPos - (size / 2),
        y: yPos - (size / 2),
        z: 10,
        rotation: 0,
        hidden: false,
        locked: false,
        alpha: 0
    }];
    let tile;
    if (data.afterEffect && data.afterEffectPath !== "") {
        tile = await canvas.scene.createEmbeddedDocuments("Tile", tileData)
    }

    console.log(template)

    if (data.removeTemplate) {
        canvas.scene.deleteEmbeddedDocuments("MeasuredTemplate", [template.data._id])
    }

    new Sequence("Automated Animations")
        .effect()
            .file(projectileAnimation.file)
            .atLocation(tokenD)
            .reachTowards({x: xPos, y: yPos})
            .waitUntilFinished(data.wait01)
            .JB2A()
        .effect()
            .file(explosion01.file)
            .atLocation({x: xPos, y: yPos})
            .size(size * .35)
            .timeRange(0, 1200)
            .waitUntilFinished(data.wait02)
        .effect()
            .file(explosion02.file)
            .atLocation({x: xPos, y: yPos})
            .size(size)
            .zIndex(1)
        .effect()
            .file(explosion02.file)
            .atLocation({x: xPos, y: yPos})
            .size(size)
            .zIndex(5)
            .waitUntilFinished(-750 + data.wait03)
        .animation()
            .on(tile[0])
            .fadeIn(250)
        /*
        .effect()
            .file("autoanimations.static.explosion.01.orange")
            .atLocation({x: xPos, y: yPos})
            .JB2A()
            .scale(4)
            .zIndex(5)
        */
        .play()
}