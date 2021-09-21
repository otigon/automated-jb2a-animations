import { buildFile } from "../file-builder/build-filepath.js"
import { socketlibSocket } from "../../socketset.js";

// Credit goes to Wasp-Sequencer Guy for the structure of the Fireball Sequence
export async function fireball(handler, autoObject) {

    const data = {}
    if (autoObject) {
        Object.assign(data, autoObject[0]);
    } else {

    }

    const projectileAnimation = await buildFile(false, data.projectile, "range", data.projectileVariant, data.projectileColor);
    const explosion01 = await buildFile(true, data.explosion01, "static", data.explosion01Variant, data.explosion01Color)
    const explosion02 = await buildFile(true, data.explosion02, "static", data.explosion02Variant, data.explosion02Color)

    let fireballTemplate = canvas.templates.placeables[canvas.templates.placeables.length - 1].data._id;//canvas.templates.get(args[0].templateId)
    let tokenD = handler.actorToken;
    let template = await canvas.templates.documentCollection.get(fireballTemplate)

    const size = canvas.grid.size * ((template.data.distance * 2) / canvas.dimensions.distance);
    const xPos = template.data.x;
    const yPos = template.data.y;
    const filePath = data.afterEffectPath;
    let tileData = {
        alpha: 0,
        width: size,
        height: size,
        img: filePath,
        x: xPos - (size / 2),
        y: yPos - (size / 2),
        z: 10,
    };


    let tile;
    //let isImage;
    //let isImage;
    if (data.afterEffect && (data.afterEffectPath !== "") && game.modules.get('socketlib')?.active) {
        //const imageTypes = ['webp', 'jpeg', 'png']
        //isImage = imageTypes.some(el => filePath.toLowerCase().includes(el)) ? true : false;
        await socketlibSocket.executeAsGM("placeTile", tileData)
        //const tileId = canvas.scene.data.tiles[canvas.scene.data.tiles.length - 1]._id;
        //console.log(tileId)
        tile = canvas.scene.data.tiles.contents[canvas.scene.data.tiles.contents.length - 1]
        //tile = await canvas.scene.createEmbeddedDocuments("Tile", tileData)
        //console.log(tile)

    }

    if (data.removeTemplate) {
        canvas.scene.deleteEmbeddedDocuments("MeasuredTemplate", [template.data._id])
    }

    new Sequence("Automated Animations")
        .effect()
            .file(projectileAnimation.file)
            .atLocation(tokenD)
            .reachTowards({ x: xPos, y: yPos })
            .waitUntilFinished(data.wait01)
            .JB2A()
        .effect()
            .file(explosion01.file)
            .atLocation({ x: xPos, y: yPos })
            .size(size * .35)
            .timeRange(0, 1200)
            .waitUntilFinished(data.wait02)
        .effect()
            .file(explosion02.file)
            .atLocation({ x: xPos, y: yPos })
            .size(size)
            .zIndex(1)
        .effect()
            .file(explosion02.file)
            .atLocation({ x: xPos, y: yPos })
            .size(size)
            .zIndex(5)
            .waitUntilFinished(-750 + data.wait03)
        .thenDo(function () {
            if (data.afterEffect && data.afterEffectPath !== "" && game.modules.get('socketlib')?.active) {
                new Sequence()
                    .animation()
                        .on(tile)
                        .fadeIn(250)
                    .play()
            }
        })
        /*
        .effect()
            .file(data.afterEffectPath)
            .atLocation({ x: xPos, y: yPos })
            .size(size * 0.85)
            .belowTokens(true)
            .persist(true)
            .extraEndDuration(15000)
            .playIf(!isImage)
        */
        .play()

}