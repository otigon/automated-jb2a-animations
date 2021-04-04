import colorChecks from "./colorChecks.js"

const wait = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

async function thunderwaveAuto(handler) {

    function moduleIncludes(test) {
        return !!game.modules.get(test);
    }

    let path00 = moduleIncludes("jb2a_patreon") === true ? `jb2a_patreon` : `JB2A_DnD5e`;

    let { type01, tint, color } = colorChecks(handler);

    switch (true) {
        case type01 === "default":
            type01 = "01";
        case tint === "default":
            tint = "Bright";
        case color === "default":
            color = "Blue";
    }

    const templateID = await canvas.templates.placeables[canvas.templates.placeables.length - 1].data._id;
    let template = await canvas.templates.get(templateID);
    let gridSize = canvas.scene.data.grid;
    let Scale = canvas.scene.data.grid / 200;
    let file = `modules/${path00}/Library/1st_Level/Thunderwave/`;

    let anFile = `${file}Thunderwave_${type01}_${tint}_${color}_BMid_600x600.webm`;
    let ang = 0;
    switch (true) {
        case ((handler.actorToken.data.x >= template.x && handler.actorToken.data.x <= (template.x + (gridSize * 2))) && (handler.actorToken.data.y >= template.y && handler.actorToken.data.y <= (template.y + (gridSize * 2)))):
            ang = 0;
            anFile = `${file}Thunderwave_${type01}_${tint}_${color}_Center_600x600.webm`;
            break;
        case ((handler.actorToken.data.x >= (template.x - gridSize)) && (handler.actorToken.data.x <= (template.x - (gridSize * 0.5)))) && ((handler.actorToken.data.y >= (template.y - gridSize)) && (handler.actorToken.data.y <= (template.y - (gridSize * 0.5)))):
            ang = 270;
            anFile = `${file}Thunderwave_${type01}_${tint}_${color}_BLeft_600x600.webm`;
            break;
        case ((handler.actorToken.data.x >= (template.x + (gridSize * 2.5))) && (handler.actorToken.data.x <= (template.x + (gridSize * 3)))) && ((handler.actorToken.data.y >= (template.y - gridSize)) && (handler.actorToken.data.y <= (template.y - (gridSize * 0.5)))):
            ang = 180;
            anFile = `${file}Thunderwave_${type01}_${tint}_${color}_BLeft_600x600.webm`;
            break;
        case (((handler.actorToken.data.x >= (template.x + (gridSize * 2.5))) && handler.actorToken.data.x <= (template.x + (gridSize * 3))) && ((handler.actorToken.data.y <= (template.y + (gridSize * 3))) && (handler.actorToken.data.y >= (template.y + (gridSize * 2.5))))):
            ang = 90;
            anFile = `${file}Thunderwave_${type01}_${tint}_${color}_BLeft_600x600.webm`;
            break;
        case ((handler.actorToken.data.x <= (template.x - (gridSize * 0.5))) && (handler.actorToken.data.x >= (template.x - gridSize))) && ((handler.actorToken.data.y <= (template.y + (gridSize * 3))) && (handler.actorToken.data.y >= (template.y + (gridSize * 2.5)))):
            ang = 0;
            anFile = `${file}Thunderwave_${type01}_${tint}_${color}_BLeft_600x600.webm`;
            break;
        case (handler.actorToken.data.x === (template.x + (gridSize * 3))) && ((handler.actorToken.data.y >= template.y) && handler.actorToken.data.y <= (template.y + (gridSize * 2))):
            ang = 90;
            break;
        case ((handler.actorToken.data.x >= template.x) && (handler.actorToken.data.x <= (template.x + (gridSize * 2)))) && ((handler.actorToken.data.y >= (template.y - gridSize)) && (handler.actorToken.data.y <= (template.y - (gridSize * 0.5)))):
            ang = 180;
            break;
        case ((handler.actorToken.data.x >= (template.x - gridSize)) && (handler.actorToken.data.x <= (template.x - (gridSize * 0.5)))) && ((handler.actorToken.data.y >= template.y) && handler.actorToken.data.y <= (template.y + (gridSize * 2))):
            ang = 270;
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
    if (game.settings.get("automated-jb2a-animations", "tmfx")) {
        await wait(500);
        TokenMagic.addUpdateFiltersOnTargeted(shockWave);
    }
}

export default thunderwaveAuto;