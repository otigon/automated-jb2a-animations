import { JB2APATREONDB } from "./databases/jb2a-patreon-database.js";
import { JB2AFREEDB } from "./databases/jb2a-free-database.js";

const wait = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

async function thunderwaveAuto(handler) {

    function moduleIncludes(test) {
        return !!game.modules.get(test);
    }

    let obj01 = moduleIncludes("jb2a_patreon") === true ? JB2APATREONDB : JB2AFREEDB;
    let color;

    switch (true) {
        case handler.color === "a1" || ``:
        case !handler.color:
            color = "blue";
            break;
        default:
            color = handler.color;
    }

    const templateID = await canvas.templates.placeables[canvas.templates.placeables.length - 1].data._id;
    let template = await canvas.templates.get(templateID);
    let gridSize = canvas.scene.data.grid;
    let Scale = canvas.scene.data.grid / 200;
    let xPos = handler.actorToken.data.x;
    let yPos = handler.actorToken.data.y;
    let tempY = template.data.y;
    let tempX = template.data.x;

    let filePath = obj01['thunderwave'][color];
    let ang = 0;
    let anFile = filePath['mid'];;
    switch (true) {
        case ((xPos >= tempX && xPos <= (tempX + (gridSize * 2))) && (yPos >= tempY && yPos <= (tempY + (gridSize * 2)))):
            ang = 0;
            anFile = filePath['center'];
            break;
        case ((xPos >= (tempX - gridSize)) && (xPos <= (tempX - (gridSize * 0.5)))) && ((yPos >= (tempY - gridSize)) && (yPos <= (tempY - (gridSize * 0.5)))):
            ang = 270;
            anFile = filePath['left'];
            break;
        case ((xPos >= (tempX + (gridSize * 2.5))) && (xPos <= (tempX + (gridSize * 3)))) && ((yPos >= (tempY - gridSize)) && (yPos <= (tempY - (gridSize * 0.5)))):
            ang = 180;
            anFile = filePath['left'];
            break;
        case (((xPos >= (tempX + (gridSize * 2.5))) && xPos <= (tempX + (gridSize * 3))) && ((yPos <= (tempY + (gridSize * 3))) && (yPos >= (tempY + (gridSize * 2.5))))):
            ang = 90;
            anFile = filePath['left'];
            break;
        case ((xPos <= (tempX - (gridSize * 0.5))) && (xPos >= (tempX - gridSize))) && ((yPos <= (tempY + (gridSize * 3))) && (yPos >= (tempY + (gridSize * 2.5)))):
            ang = 0;
            anFile = filePath['left'];
            break;
        case (xPos === (tempX + (gridSize * 3))) && ((yPos >= tempY) && yPos <= (tempY + (gridSize * 2))):
            ang = 90;
            anFile = filePath['mid'];
            break;
        case ((xPos >= tempX) && (xPos <= (tempX + (gridSize * 2)))) && ((yPos >= (tempY - gridSize)) && (yPos <= (tempY - (gridSize * 0.5)))):
            ang = 180;
            anFile = filePath['mid'];
            break;
        case ((xPos >= (tempX - gridSize)) && (xPos <= (tempX - (gridSize * 0.5)))) && ((yPos >= tempY) && yPos <= (tempY + (gridSize * 2))):
            ang = 270;
            anFile = filePath['mid'];
            break;
    }

    let globalDelay = game.settings.get("autoanimations", "globaldelay");
    await wait(globalDelay);
        new Sequence()
            .effect()
                .file(anFile)
                .atLocation({x: tempX + (gridSize * 1.5), y: tempY + (gridSize * 1.5)})
                .scale(Scale)
                .rotate(ang)
                .anchor({x: 0.5, y: 0.5})
                .repeats(5, 500)
            .play()
    async function cast() {


    }
    cast();
}

export default thunderwaveAuto;