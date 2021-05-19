import { JB2APATREONDB } from "./jb2a-patreon-database.js";
import { JB2AFREEDB } from "./jb2a-free-database.js";

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

    let filePath = obj01['thunderwave'][color];
    let ang = 0;
    let anFile = filePath['mid'];;
    switch (true) {
        case ((handler.actorToken.data.x >= template.x && handler.actorToken.data.x <= (template.x + (gridSize * 2))) && (handler.actorToken.data.y >= template.y && handler.actorToken.data.y <= (template.y + (gridSize * 2)))):
            ang = 0;
            anFile = filePath['center'];
            break;
        case ((handler.actorToken.data.x >= (template.x - gridSize)) && (handler.actorToken.data.x <= (template.x - (gridSize * 0.5)))) && ((handler.actorToken.data.y >= (template.y - gridSize)) && (handler.actorToken.data.y <= (template.y - (gridSize * 0.5)))):
            ang = 270;
            anFile = filePath['left'];
            break;
        case ((handler.actorToken.data.x >= (template.x + (gridSize * 2.5))) && (handler.actorToken.data.x <= (template.x + (gridSize * 3)))) && ((handler.actorToken.data.y >= (template.y - gridSize)) && (handler.actorToken.data.y <= (template.y - (gridSize * 0.5)))):
            ang = 180;
            anFile = filePath['left'];
            break;
        case (((handler.actorToken.data.x >= (template.x + (gridSize * 2.5))) && handler.actorToken.data.x <= (template.x + (gridSize * 3))) && ((handler.actorToken.data.y <= (template.y + (gridSize * 3))) && (handler.actorToken.data.y >= (template.y + (gridSize * 2.5))))):
            ang = 90;
            anFile = filePath['left'];
            break;
        case ((handler.actorToken.data.x <= (template.x - (gridSize * 0.5))) && (handler.actorToken.data.x >= (template.x - gridSize))) && ((handler.actorToken.data.y <= (template.y + (gridSize * 3))) && (handler.actorToken.data.y >= (template.y + (gridSize * 2.5)))):
            ang = 0;
            anFile = filePath['left'];
            break;
        case (handler.actorToken.data.x === (template.x + (gridSize * 3))) && ((handler.actorToken.data.y >= template.y) && handler.actorToken.data.y <= (template.y + (gridSize * 2))):
            ang = 90;
            anFile = filePath['mid'];
            break;
        case ((handler.actorToken.data.x >= template.x) && (handler.actorToken.data.x <= (template.x + (gridSize * 2)))) && ((handler.actorToken.data.y >= (template.y - gridSize)) && (handler.actorToken.data.y <= (template.y - (gridSize * 0.5)))):
            ang = 180;
            anFile = filePath['mid'];
            break;
        case ((handler.actorToken.data.x >= (template.x - gridSize)) && (handler.actorToken.data.x <= (template.x - (gridSize * 0.5)))) && ((handler.actorToken.data.y >= template.y) && handler.actorToken.data.y <= (template.y + (gridSize * 2))):
            ang = 270;
            anFile = filePath['mid'];
            break;
    }

    let spellAnim =
    {
        file: anFile,
        position: {
            x: (template.x + (gridSize * 1.5)),
            y: (template.y + (gridSize * 1.5))
        },
        anchor: {
            x: 0.5,
            y: 0.5
        },
        angle: ang,
        scale: {
            x: Scale,
            y: Scale
        }
    };
    let globalDelay = game.settings.get("autoanimations", "globaldelay");
    await wait(globalDelay);

    async function spellAnimation(number) {

        let x = number;
        // This is the interval in between the start of each animation on the loop in milliseconds
        let interval = 750;
        for (var i = 0; i < x; i++) {
            setTimeout(function () {
                canvas.fxmaster.playVideo(spellAnim);
                game.socket.emit('module.fxmaster', spellAnim);
            }, i * interval);
        }
    }
    spellAnimation(5);

    let shockWave =
        [{
            filterType: "wave",
            filterId: "shockWave",
            autoDestroy: true,
            time: 0,
            strength: 0.03,
            frequency: 10,
            maxIntensity: 2.0,
            minIntensity: 0.5,
            padding: 25,
            animated:
            {
                time:
                {
                    loopDuration: 900,
                    loops: 5,
                    active: true,
                    speed: 0.0180,
                    animType: "move",
                }
            }
        }];
    if (game.settings.get("autoanimations", "tmfx")) {
        await wait(500);
        TokenMagic.addUpdateFiltersOnTargeted(shockWave);
    }
}

export default thunderwaveAuto;