import { JB2APATREONDB } from "./jb2a-patreon-database.js";
import { JB2AFREEDB } from "./jb2a-free-database.js";
const wait = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

async function selfCast(handler) {

    let audio = handler.allSounds.item;
    let audioEnabled = audio.enableAudio;

    function moduleIncludes(test) {
        return !!game.modules.get(test);
    }
    let obj02 = handler.animName.toLowerCase();
    let property;
    switch (true) {
        case handler.animColor === "a1":
            property = 'blue';
            break;
        default:
            property = handler.animColor;
    }
    let testPath;

    let obj01 = moduleIncludes("jb2a_patreon") === true ? JB2APATREONDB : JB2AFREEDB;

    switch (handler.animName) {
        case  "shatter":
        case game.i18n.format("AUTOANIM.itemShatter").toLowerCase():
            testPath = obj01[obj02][property];
            break;
        case "thunderwave":
        case game.i18n.format("AUTOANIM.itemThunderwave").toLowerCase():
            testPath = obj01[obj02][property]['center'];
            break;
        case "antilife shell":
        case game.i18n.format("AUTOANIM.animAntiLifeShell").toLowerCase():
            testPath = obj01['antilifeshell']['antilifeshell'];
            break;
    }

    let divisor;
    let tokenSize = handler.actor.data.data.traits.size;
    switch (handler.selfRadius) {
        case "5":
            switch (tokenSize) {
                case "lg":
                    divisor = handler.animName === "thunderwave" ? 125 : 85;
                    break;
                case "huge":
                    divisor = handler.animName === "thunderwave" ? 90 : 62;
                    break;
                default:
                    divisor = handler.animName === "thunderwave" ? 175 : 125;
            }
            break;
        case "10":
            switch (tokenSize) {
                case "lg":
                    divisor = handler.animName === "thunderwave" ? 90 : 62; 
                    break;
                case "huge":
                    divisor = handler.animName === "thunderwave" ? 68 : 46;
                    break;
                default:
                    divisor = handler.animName === "thunderwave" ? 125 : 85; 
            }
            break;
        case "15":
            switch (tokenSize) {
                case "lg":
                    divisor = handler.animName === "thunderwave" ? 68 : 46;
                    break;
                case "huge":
                    divisor = handler.animName === "thunderwave" ? 58 : 42;
                    break;
                default:
                    divisor = handler.animName === "thunderwave" ? 90 : 62;
            }
            break;
        case "20":
            switch (tokenSize) {
                case "lg":
                    divisor = handler.animName === "thunderwave" ? 55 : 39;
                    break;
                case "huge":
                    divisor = handler.animName === "thunderwave" ? 52 : 35;
                    break;
                default:
                    divisor = handler.animName === "thunderwave" ? 68 : 46;
            }
            break;
        case "25":
            switch (tokenSize) {
                case "lg":
                    divisor = handler.animName === "thunderwave" ? 48 : 32;
                    break;
                case "huge":
                    divisor = handler.animName === "thunderwave" ? 45 : 30;
                    break;
                default:
                    divisor = handler.animName === "thunderwave" ? 55 : 39;
            }
            break;
        case "30":
            switch (tokenSize) {
                case "lg":
                    divisor = handler.animName === "thunderwave" ? 42 : 27;
                    break;
                case "huge":
                    divisor = handler.animName === "thunderwave" ? 40 : 26;
                    break;
                default:
                    divisor = handler.animName === "thunderwave" ? 48 : 32;
            }
            break;
    }

    let globalDelay = game.settings.get("autoanimations", "globaldelay");
    await wait(globalDelay);

    async function cast() {

        //let Scale = ((handler.actorToken.data.width + handler.actorToken.data.height) / 8);
        let Scale = canvas.scene.data.grid / divisor;
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
            }
        };

        canvas.fxmaster.playVideo(spellAnim);
        game.socket.emit('module.fxmaster', spellAnim);
    }
    cast();
    if (audioEnabled) {
        await wait(audio.delay);
        AudioHelper.play({ src: audio.file, volume: audio.volume, autoplay: true, loop: false }, true);
    }
}

export default selfCast;