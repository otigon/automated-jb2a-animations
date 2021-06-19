import { JB2APATREONDB } from "./jb2a-patreon-database.js";
import { JB2AFREEDB } from "./jb2a-free-database.js";

const wait = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

async function mistyStep(handler) {

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
    let anFile1 = obj01[obj02]['01'][color];
    let anFile2 = obj01[obj02]['02'][color];

    let myScale = canvas.grid.size / 100 * .6;
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
        //fillColor: "#FF3366",
    }]);

    range;

    let pos;
    canvas.app.stage.addListener('pointerdown', event => {
        if (event.data.button !== 0) { return }
        pos = event.data.getLocalPosition(canvas.app.stage);
        deleteTemplatesAndMove();
        canvas.app.stage.removeListener('pointerdown');
    });


    const data = {
        file: anFile1,
        position: token.center,
        anchor: {
            x: .5,
            y: .5
        },
        angle: 0,
        speed: 0,
        scale: {
            x: myScale,
            y: myScale
        }
    }


    function playAnim(data) {
        canvas.autoanimations.playVideo(data);
        game.socket.emit('module.autoanimations', data);
    }
    function toggleVis(token) {
        token.toggleVisibility();
    }

    function moveToken(token, gridPos) {
        canvas.scene.updateEmbeddedDocuments("Token", [{ "_id": token.id, x: gridPos[0], y: gridPos[1] }], { animate: false });
    }    

    async function deleteTemplatesAndMove() {

        let gridPos = canvas.grid.getTopLeft(pos.x, pos.y);

        const data2 = {
            file: anFile2,
            position: {
                x: gridPos[0] + canvas.grid.size / 2,
                y: gridPos[1] + canvas.grid.size / 2
            },
            anchor: {
                x: .5,
                y: .5
            },
            angle: 0,
            speed: 0,
            scale: {
                x: -myScale,
                y: -myScale
            }
        }

        let templateLength = canvas.templates.placeables.length;
        let template01 = canvas.templates.placeables[templateLength - 1].id;
        await canvas.scene.deleteEmbeddedDocuments("MeasuredTemplate", [template01]);

        playAnim(data)
        await wait (750)
        toggleVis(token);
        
        await wait (375)
        moveToken(token, gridPos);
    
        await wait (375)
        playAnim(data2);
        
        await wait(1500)
        toggleVis(token);    
    };
}
export default mistyStep;
