import { JB2APATREONDB } from "./jb2a-patreon-database.js";
import { JB2AFREEDB } from "./jb2a-free-database.js";

const wait = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

async function breathWeapon(handler) {

    function moduleIncludes(test) {
        return !!game.modules.get(test);
    }

    let obj01 = moduleIncludes("jb2a_patreon") === true ? JB2APATREONDB : JB2AFREEDB;

    let obj02 = 'breathweapons';
    let obj03 = 'line';
    let type;
    let color;
    switch (handler.animName) {
        case 'fire':
        case game.i18n.format("AUTOANIM.dmgTypeFire").toLowerCase():
            type = 'fire';
            switch (true) {
                case handler.color === ``:
                case handler.color === 'a1':
                    color = 'orange';
                    break;
                default:
                    color = handler.color;
            }
            break;
        case 'acid':
        case game.i18n.format("AUTOANIM.dmgTypeAcid").toLowerCase():
            type = 'acid';
            switch (true) {
                case handler.color === ``:
                case handler.color === 'a1':
                    color = 'green';
                    break;
                default:
                    color = handler.color;
            }
            break;
        case 'lightning':
        case game.i18n.format("AUTOANIM.dmgTypeLightning").toLowerCase():
            type = 'lightning';
            switch (true) {
                case handler.color === ``:
                case handler.color === 'a1':
                    color = 'blue';
                    break;
                default:
                    color = handler.color;
            }
            break;
    }
    let filePath = obj01[obj02][obj03][type][color];

    let globalDelay = game.settings.get("autoanimations", "globaldelay");
    await wait(globalDelay);

    async function cast() {
        //Finds the center of the placed circular template and plays an animation using FXMaster
        const templateID = canvas.templates.placeables[canvas.templates.placeables.length - 1].data._id;
        let template;
        if (game.data.version === "0.7.9" || game.data.version === "0.7.10") {
            template = await canvas.templates.get(templateID);
        } else {
            template = await canvas.templates.documentCollection.get(templateID);
        }
        console.log(template);
        // Scaled globally, change divisor for different size animation.
        let Scale = (canvas.scene.data.grid / 155);
        //let token = handler.actorToken;
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
                x: 0.05,
                y: 0.5
            },
            angle: -template.data.direction,
            scale: {
                x: Scale,
                y: Scale
            }
        };
        canvas.autoanimations.playVideo(spellAnim);
        game.socket.emit('module.autoanimations', spellAnim);
    }
    cast();
}

export default breathWeapon;