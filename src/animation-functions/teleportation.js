/*
The framework for the code below originated from Honeybadger (Trioderigon) for creating/deleting the Template and movingt the Token around.
*/
import { JB2APATREONDB } from "./databases/jb2a-patreon-database.js";
import { JB2AFREEDB } from "./databases/jb2a-free-database.js";
import { buildFile} from "./file-builder/build-filepath.js"

export async function teleportation(handler) {


    if (handler.itemMacro.toLowerCase().includes("misty step")) {
        console.log("A-A Misty Step will not work with DAE SRD Misty Step");
        return;
    }
    function moduleIncludes(test) {
        return !!game.modules.get(test);
    }
    const token = handler.actorToken;
    const actor = handler.actor;

    let obj01 = moduleIncludes("jb2a_patreon") === true ? JB2APATREONDB : JB2AFREEDB;
    let itemName = handler.convertedName
    let onToken = await buildFile(true, itemName, "static", "01", handler.color);

    let sourceFX;
    let sFXScale;
    if (handler.sourceEnable) {
        sourceFX = await buildFile(true, handler.sourceName, "static", handler.sourceVariant, handler.sourceColor);
        sFXScale = 2 * token.w / sourceFX.metadata.width;
    }


    let Scale = ((token.w / onToken.metadata.width) * handler.scale) * 1.75;
    if (!handler.options?.hideTemplate) {
        let range = MeasuredTemplate.create({
            t: "circle",
            user: game.user.id,
            x: token.x + canvas.grid.size / 2,
            y: token.y + canvas.grid.size / 2,
            direction: 0,
            distance: handler.teleRange,
            borderColor: "#FF0000",
            flags: {
                world: {
                    Teleportation: {
                        ActorId: actor.id
                    }
                }
            }
        });
    }

    let pos;
    canvas.app.stage.addListener('pointerdown', event => {
        if (event.data.button !== 0) { return }
        pos = event.data.getLocalPosition(canvas.app.stage);
        let ray = new Ray(token.center, pos)
        if (ray.distance > ((canvas.grid.size * (handler.teleRange / canvas.dimensions.distance)) + (canvas.grid.size / 2))) {
            ui.notifications.error(game.i18n.format("AUTOANIM.teleport"))
        } else {
            deleteTemplatesAndMove();
            canvas.app.stage.removeListener('pointerdown');
        }
    });

    async function deleteTemplatesAndMove() {

        let gridPos = canvas.grid.getTopLeft(pos.x, pos.y);

        let removeTemplates = canvas.templates.placeables.filter(i => i.data.flags.world?.Teleportation?.ActorId === actor.id);
        removeTemplates = removeTemplates.map(template => template.id);
        if (removeTemplates) await canvas.scene.deleteEmbeddedDocuments("MeasuredTemplate", removeTemplates);

        new Sequence()
            .effect()
                .atLocation(token)
                .scale(sFXScale * handler.sourceScale)
                .repeats(handler.sourceLoops, handler.sourceLoopDelay)
                .belowTokens(handler.sourceLevel)
                .waitUntilFinished(handler.sourceDelay)
                .playIf(handler.sourceEnable)
                .addOverride(async (effect, data) => {
                    if (handler.sourceEnable) {
                        data.file = sourceFX.file;
                    }
                    return data;
                })
            .effect()
                .file(onToken.file)
                .atLocation(token)
                .scale(Scale)
                .randomRotation()
                .waitUntilFinished(-2250)
            .animation()
                .on(token)
                .fadeOut(500)
            .wait(500)
            .animation()
                .on(token)
                .teleportTo({x: gridPos[0], y: gridPos[1]})
                .async()
            .effect()
                .file(onToken.msFile)
                .atLocation(token)
                .scale(Scale)
                .randomRotation()
            .wait(1500)
            .animation()
                .on(token)
                .fadeIn(500)
            .play();

    };


}
