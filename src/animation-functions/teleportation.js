/*
The framework for the code below originated from Honeybadger (Trioderigon) for creating/deleting the Template and movingt the Token around.
*/
import { JB2APATREONDB } from "./jb2a-patreon-database.js";
import { JB2AFREEDB } from "./jb2a-free-database.js";
import getVideoDimensionsOf from "../canvas-animation/video-metadata.js";
import { buildTokenAnimationFile } from "./common-functions/build-filepath.js"

const wait = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

export async function teleportation(handler) {


    if (handler.itemMacro.toLowerCase().includes("misty step")) {
        console.log("A-A Misty Step will not work with DAE SRD Misty Step");
        return;
    }

    let audio = handler.allSounds.item;
    let audioEnabled = handler.itemSound;

    function moduleIncludes(test) {
        return !!game.modules.get(test);
    }

    let obj01 = moduleIncludes("jb2a_patreon") === true ? JB2APATREONDB : JB2AFREEDB;
    let itemName = handler.convertedName
    console.log(itemName)
    let onToken = await buildTokenAnimationFile(obj01, itemName, handler);

    let obj02;
    switch (true) {
        case (handler.animName.includes(game.i18n.format("AUTOANIM.itemMistyStep").toLowerCase())):
            obj02 = 'mistystep';
            break;
    }
    let color;
    switch (true) {
        case handler.color === "a1" || handler.color === ``:
        case !handler.color:
            color = "blue";
            break;
        default:
            color = handler.color;
    }

    const token = handler.actorToken;
    const actor = handler.actor;
    let anFile1 = obj01[obj02]['01'][color];
    let anFile2 = obj01[obj02]['02'][color];

    var videoData = await getVideoDimensionsOf(anFile1);
    var videoData2 = await getVideoDimensionsOf(anFile2);
    let videoWidth = videoData.width;
    //let duration = videoData.duration * 1000;
    let videoWidth2 = videoData2.width;
    let tokenWidth = token.w
    let Scale = (tokenWidth / videoWidth) * 1.5;
    //let Scale2 = (tokenWidth / videoWidth2) * 1.5;

    const wait = (delay) => new Promise((resolve) => setTimeout(resolve, delay))
    var templateRange = handler.teleRange;
    let range = await canvas.scene.createEmbeddedDocuments("MeasuredTemplate", [{
        t: "circle",
        user: game.user.id,
        x: token.x + canvas.grid.size / 2,
        y: token.y + canvas.grid.size / 2,
        direction: 0,
        distance: templateRange,
        borderColor: "#FF0000",
        flags: {
            world: {
                Teleportation: {
                    ActorId: actor.id
                }
            }
        }    
    }]);

    range;

    let pos;
    canvas.app.stage.addListener('pointerdown', event => {
        if (event.data.button !== 0) { return }
        pos = event.data.getLocalPosition(canvas.app.stage);
        deleteTemplatesAndMove();
        canvas.app.stage.removeListener('pointerdown');
    });

    async function deleteTemplatesAndMove() {

        let gridPos = canvas.grid.getTopLeft(pos.x, pos.y);

        let removeTemplates = canvas.templates.placeables.filter(i => i.data.flags.world?.Teleportation?.ActorId === actor.id);
        removeTemplates = removeTemplates.map(template => template.id);
        if(removeTemplates) await canvas.scene.deleteEmbeddedDocuments("MeasuredTemplate", removeTemplates);

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
