import { JB2APATREONDB } from "./jb2a-patreon-database.js";
import { JB2AFREEDB } from "./jb2a-free-database.js";

const wait = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

async function mistyStep(handler) {

    function moduleIncludes(test) {
        return !!game.modules.get(test);
    }

    let obj01 = moduleIncludes("jb2a_patreon") === true ? JB2APATREONDB : JB2AFREEDB;
    let obj02 = 'mistystep';
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

    let range = MeasuredTemplate.create({
        t: "circle",
        user: game.user._id,
        x: token.x + canvas.grid.size / 2,
        y: token.y + canvas.grid.size / 2,
        direction: 0,
        distance: 32.5,
        borderColor: "#FF0000",
    });

    range.then(result => {
        let pos;
        canvas.app.stage.addListener('pointerdown', event => {
            pos = event.data.getLocalPosition(canvas.app.stage);
            console.log(`x: ${pos.x}, y: ${pos.y}`);
            deleteTemplatesAndMove();
        });

        async function deleteTemplatesAndMove(scene, template) {
            canvas.app.stage.removeListener('pointerdown');

            let gridPos = canvas.grid.getTopLeft(pos.x, pos.y);
            console.log(gridPos);
    
            if (token != undefined) {

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
                canvas.fxmaster.playVideo(data);
                game.socket.emit('module.fxmaster', data);
            }
            let templateLength = canvas.templates.placeables.length;
            let template01 = canvas.templates.placeables[(templateLength - 1)].id;
            await canvas.templates.get(template01).delete()
            await wait(750);
            token.update({ "hidden": !token.data.hidden })
            await token.update({ x: gridPos[0], y: gridPos[1] }, { animate: false })
            await wait(750);

            if (token != undefined) {

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

                canvas.fxmaster.playVideo(data2);
                game.socket.emit('module.fxmaster', data2);

            }
            await wait(1500);
            token.update({ "hidden": !token.data.hidden })
        };
    });
}
export default mistyStep;