import { JB2APATREONDB } from "./jb2a-patreon-database.js";
import { JB2AFREEDB } from "./jb2a-free-database.js";

const wait = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

async function explodeTemplate(handler) {

    function moduleIncludes(test) {
        return !!game.modules.get(test);
    }

    let obj01 = moduleIncludes("jb2a_patreon") === true ? JB2APATREONDB : JB2AFREEDB;

    let obj02;
    let obj03;
    let color;
    let variant = handler.animExVariant;
    let filePath;
    switch (true) {
        case handler.animExVariant === "shatter":
            obj02 = "shatter";
            color = handler.animExColor;
            filePath = obj01[obj02][color];
            break;
        default:
            obj02 = "explosion";
            color = handler.animExColor;
            filePath = obj01[obj02][variant][color];
    }
    let multiplier;
    switch (variant) {
        case ('05'):
        case ('06'):
        case ('07'):
            multiplier = 1500;
            break;
        default:
            multiplier = 1000;
    }
    let divisor = (multiplier * (1/(handler.animExRadius)));
    
    let globalDelay = game.settings.get("autoanimations", "globaldelay");
    await wait(globalDelay);

    async function cast() {
        let loops = handler.animExLoop;
        //Finds the center of the placed circular template and plays an animation using FXMaster
        const templateID = canvas.templates.placeables[canvas.templates.placeables.length - 1].data._id;
        let template;
        if (game.data.version === "0.7.9" || game.data.version === "0.7.10") {
            template = await canvas.templates.get(templateID);
        } else {
            template = await canvas.templates.documentCollection.get(templateID);
        }
        // Scaled globally, change divisor for different size animation.
        let Scale = (canvas.scene.data.grid / divisor);
        //var handler.allTargets = Array.from(lastArg.targets);
        //let target = handler.allTargets[i];

        // Defines the spell template for FXMaster
        let spellAnim =
        {
            file: filePath,
            position: {
                x: template.data.x,
                y: template.data.y
            },
            anchor: {
                x: 0.5,
                y: 0.5
            },
            angle: 0,
            scale: {
                x: Scale,
                y: Scale
            }
        };

        async function SpellAnimation(number) {

            let x = number;
            let interval = 1000;
            for (var i = 0; i < x; i++) {
                setTimeout(function () {
                    canvas.autoanimations.playVideo(spellAnim);
                    game.socket.emit('module.autoanimations', spellAnim);
                }, i * interval);
            }
        }
        // The number in parenthesis sets the number of times it loops
        SpellAnimation(loops)

        let shockWave =
            [{
                filterType: "wave",
                filterId: "shockWave",
                autoDestroy: true,
                time: 0,
                strength: 0.03,
                frequency: 15,
                maxIntensity: 4.0,
                minIntensity: 0.5,
                padding: 25,
                animated:
                {
                    time:
                    {
                        loopDuration: 500,
                        loops: 5,
                        active: true,
                        speed: 0.0180,
                        animType: "move",
                    }
                }
            }];
        if (game.settings.get("autoanimations", "tmfx")) {
            await wait(400);
            TokenMagic.addUpdateFiltersOnTargeted(shockWave);
            //await wait(2500);
            //TokenMagic.deleteFiltersOnTargeted("burn");
            //await wait(250);
            //TokenMagic.deleteFiltersOnTargeted("shockWave");
        }
    }
    cast();
}

export default explodeTemplate;