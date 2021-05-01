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

    let actor = handler.actor;
    const token = handler.actorToken;
    const folder01 = "imports/custom_spellfx/";
    let anFile1 = obj01[obj02]['01'][color];
    let anFile2 = obj01[obj02]['02'][color];

    let anDeg;
    let ray;
    let myScale = canvas.grid.size / 100 * .6;
    const wait = (delay) => new Promise((resolve) => setTimeout(resolve, delay))

    let range = MeasuredTemplate.create({
        t: "circle",
        user: game.user._id,
        x: token.x + canvas.grid.size / 2,
        y: token.y + canvas.grid.size / 2,
        direction: 0,
        distance: 30,

        borderColor: "#FF0000",
        flags: {
            DAESRD: {
                MistyStep: {
                    ActorId: actor.id
                }
            }
        }

    });

    range.then(result => {
        let templateData = {
            t: "rect",
            user: game.user._id,
            distance: 7.5,
            direction: 45,
            x: 0,
            y: 0,
            fillColor: game.user.color,
            flags: {
                DAESRD: {
                    MistyStep: {
                        ActorId: actor.id
                    }
                }
            }
        };



        Hooks.once("createMeasuredTemplate", deleteTemplatesAndMove);

        let template = new game.dnd5e.canvas.AbilityTemplate(templateData);
        template.actorSheet = actor.sheet;
        template.drawPreview();

        async function deleteTemplatesAndMove(scene, template) {

            let removeTemplates = canvas.templates.placeables.filter(i => i.data.flags.DAESRD?.MistyStep?.ActorId === actor.id);


            if (token != undefined) {

                ray = new Ray(token.center, { x: template.x + canvas.grid.size / 2, y: template.y + canvas.grid.size / 2 });
                // Determines the angle
                anDeg = -(ray.angle * 57.3) - 90;

                const data = {
                    file: anFile1,
                    position: token.center,
                    anchor: {
                        x: .5,
                        y: .5
                    },
                    angle: anDeg,
                    speed: 0,
                    scale: {
                        x: myScale,
                        y: myScale
                    }
                }

                canvas.fxmaster.playVideo(data);
                game.socket.emit('module.fxmaster', data);

            }

            await canvas.templates.deleteMany([removeTemplates[0].id, removeTemplates[1].id]);
            token.update({ "hidden": !token.data.hidden })
            await token.update({ x: template.x, y: template.y }, { animate: false })
            await wait(1500);

            if (token != undefined) {

                anDeg = -(ray.angle * 57.3) - 90;



                const data2 = {
                    file: anFile2,
                    position: {
                        x: template.x + canvas.grid.size / 2,
                        y: template.y + canvas.grid.size / 2
                    },
                    anchor: {
                        x: .5,
                        y: .5
                    },
                    angle: anDeg,
                    speed: 0,
                    scale: {
                        x: -myScale,
                        y: -myScale
                    }
                }

                canvas.fxmaster.playVideo(data2);
                game.socket.emit('module.fxmaster', data2);

            }

            //await actor.deleteEmbeddedEntity("ActiveEffect", lastArg.effectId);
            await wait(1500);
            token.update({ "hidden": !token.data.hidden })

        };
    });
}
export default mistyStep;