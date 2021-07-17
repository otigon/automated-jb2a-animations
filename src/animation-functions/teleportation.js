/*
The framework for the code below originated from Honeybadger (Trioderigon) for creating/deleting the Template and movingt the Token around.
*/
import { JB2APATREONDB } from "./jb2a-patreon-database.js";
import { JB2AFREEDB } from "./jb2a-free-database.js";
import getVideoDimensionsOf from "../canvas-animation/video-metadata.js";
import { buildTokenAnimationFile } from "./common-functions/build-filepath.js"

export async function teleportation(handler) {


    if (handler.itemMacro.toLowerCase().includes("misty step")) {
        console.log("A-A Misty Step will not work with DAE SRD Misty Step");
        return;
    }
    function moduleIncludes(test) {
        return !!game.modules.get(test);
    }

    let obj01 = moduleIncludes("jb2a_patreon") === true ? JB2APATREONDB : JB2AFREEDB;
    let itemName = handler.convertedName
    //console.log(itemName)
    let onToken = handler.flags.defaults?.primary !== undefined ? handler.flags.defaults.primary : await buildTokenAnimationFile(obj01, itemName, handler);

    const token = handler.actorToken;
    const actor = handler.actor;

    let Scale = (token.w / onToken.metadata.width) * 1.5;

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

    let pos;
    canvas.app.stage.addListener('pointerdown', event => {
        if (event.data.button !== 0) { return }
        pos = event.data.getLocalPosition(canvas.app.stage);
        let ray = new Ray(token.center, pos)
        //console.log(ray.distance)
        //console.log(((canvas.grid.size * (handler.teleRange / canvas.dimensions.distance)) + (canvas.grid.size / 2)))
        //console.log(canvas.grid.distance)
        if (ray.distance > ((canvas.grid.size * (handler.teleRange / canvas.dimensions.distance)) + (canvas.grid.size / 2))) {
            ui.notifications.error("You selected a point out of range, choose again")
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
            .file(onToken.file)
            .atLocation(token)
            .JB2A()
            .scale(Scale)
            .randomRotation()
            .wait(750)
            .thenDo(async () => {
                await token.document.update({
                    x: gridPos[0],
                    y: gridPos[1],
                    hidden: true
                }, { animate: false });
            })
            .effect()
            .file(onToken.file2)
            .atLocation(token)
            .JB2A()
            .scale(Scale)
            .randomRotation()
            .wait(1500)
            .thenDo(async () => {
                await token.document.update({
                    hidden: false
                }, { animate: false });
            })
            .play();

    };


}
