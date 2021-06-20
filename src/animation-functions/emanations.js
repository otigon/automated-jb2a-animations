  
import { JB2APATREONDB } from "./jb2a-patreon-database.js";
import { JB2AFREEDB } from "./jb2a-free-database.js";
const wait = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

async function selfCast(handler) {

    function moduleIncludes(test) {
        return !!game.modules.get(test);
    }
    let obj02 = handler.animExVariant;
    let property = obj02 === "impact" ? "boulder" : handler.animExColor;
    let loops = handler.animExLoop;
    let testPath;

    let obj01 = moduleIncludes("jb2a_patreon") === true ? JB2APATREONDB : JB2AFREEDB;

    switch (handler.animExVariant) {
        case "shatter":
        case game.i18n.format("AUTOANIM.itemShatter").toLowerCase():
            testPath = obj01[obj02][property];
            break;
        case "thunderwave":
        case game.i18n.format("AUTOANIM.itemThunderwave").toLowerCase():
            testPath = obj01[obj02][property]['center'];
            break;
        case "antilife-shell":
        case game.i18n.format("AUTOANIM.animAntiLifeShell").toLowerCase():
            testPath = obj01['antilifeshell']['antilifeshell'];
            break;
        default:
            testPath = obj01['explosion'][obj02][property];
    }

    let multiplier;
    switch (obj02) {
        case ('05'):
        case ('06'):
        case ('07'):
        case ('thunderwave'):
        case ('impact'):
            multiplier = 1500;
            break;
        default:
            multiplier = 1000;

    }

    let divisor = (multiplier * (1/handler.animExRadius));
    let globalDelay = game.settings.get("autoanimations", "globaldelay");
    await wait(globalDelay);

    async function cast() {

        //let Scale = ((handler.actorToken.data.width + handler.actorToken.data.height) / 8);
        let Scale = canvas.scene.data.grid / divisor;
        let level = handler.flags.animLevel;
        let animLevel = level ? "ground" : "above";

        let spellAnim =
        {
            file: testPath,
            position: handler.actorToken.center,
            anchor: {
                x: 0.5,
                y: 0.5
            },
            angle: 0,
            speed: 0,
            scale: {
                x: Scale,
                y: Scale
            },
            level: animLevel
        };


        async function SpellAnimation(number) {

            let x = number;
            let interval = 1000;
            for (var i = 0; i < x; i++) {
                setTimeout(function () {
                    if (level) {
                        canvas.autoanimationsG.playVideo(spellAnim);
                        game.socket.emit('module.autoanimations', spellAnim);
                    } else {
                        canvas.autoanimations.playVideo(spellAnim);
                        game.socket.emit('module.autoanimations', spellAnim);
                    }
                }, i * interval);
            }
        }
        // The number in parenthesis sets the number of times it loops
        SpellAnimation(loops)

        //canvas.fxmaster.playVideo(spellAnim);
        //game.socket.emit('module.fxmaster', spellAnim);
    }
    cast();
}

export default selfCast;