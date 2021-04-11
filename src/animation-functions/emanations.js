import { JB2APATREONDB } from "./jb2a-patreon-database.js";
import { JB2AFREEDB } from "./jb2a-free-database.js";
const wait = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

async function selfCast(handler) {

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

    switch (true) {
        case handler.animName === "shatter":
        case handler.animName === game.i18n.format("AUTOANIM.itemShatter").toLowerCase():
            testPath = obj01[obj02][property];
            break;
        case handler.animName === "thunderwave":
        case handler.animName === game.i18n.format("AUTOANIM.itemThunderwave").toLowerCase():
            testPath = obj01[obj02][property]['center'];
            break;
        case handler.animName === "antilife shell":
        case handler.animName === game.i18n.format("AUTOANIM.animAntiLifeShell").toLowerCase():
            testPath = obj01['antilifeshell']['antilifeshell'];
            break;
    }

    let divisor;
    /*
    switch (true) {
        case (handler.selfRadius === "5"):
            switch (true) {
                case handler.animName === "shatter":
                case handler.animName === game.i18n.format("AUTOANIM.itemShatter").toLowerCase():
                case handler.animName === "antilife shell":
                case handler.animName === game.i18n.format("AUTOANIM.animAntiLifeShell").toLowerCase():
                    divisor = 125;
                    break;
                case handler.animName === "thunderwave":
                case handler.animName === game.i18n.format("AUTOANIM.itemThunderwave").toLowerCase():
                    divisor = 175;
                    break;
            }
            break;
        case (handler.selfRadius === "10"):
            switch (true) {
                case handler.animName === "shatter":
                case handler.animName === game.i18n.format("AUTOANIM.itemShatter").toLowerCase():
                case handler.animName === "antilife shell":
                case handler.animName === game.i18n.format("AUTOANIM.animAntiLifeShell").toLowerCase():
                    divisor = 85;
                    break;
                case handler.animName === "thunderwave":
                case handler.animName === game.i18n.format("AUTOANIM.itemThunderwave").toLowerCase():
                    divisor = 125;
                    break;
            }
            break;
        case (handler.selfRadius === "15"):
            switch (true) {
                case handler.animName === "shatter":
                case handler.animName === game.i18n.format("AUTOANIM.itemShatter").toLowerCase():
                case handler.animName === "antilife shell":
                case handler.animName === game.i18n.format("AUTOANIM.animAntiLifeShell").toLowerCase():
                    divisor = 62;
                    break;
                case handler.animName === "thunderwave":
                case handler.animName === game.i18n.format("AUTOANIM.itemThunderwave").toLowerCase():
                    divisor = 90;
                    break;
            }
            break;
        case (handler.selfRadius === "20"):
            switch (true) {
                case handler.animName === "shatter":
                case handler.animName === game.i18n.format("AUTOANIM.itemShatter").toLowerCase():
                case handler.animName === "antilife shell":
                case handler.animName === game.i18n.format("AUTOANIM.animAntiLifeShell").toLowerCase():
                    divisor = 46;
                    break;
                case handler.animName === "thunderwave":
                case handler.animName === game.i18n.format("AUTOANIM.itemThunderwave").toLowerCase():
                    divisor = 68;
                    break;
            }
            break;
        case (handler.selfRadius === "25"):
            switch (true) {
                case handler.animName === "shatter":
                case handler.animName === game.i18n.format("AUTOANIM.itemShatter").toLowerCase():
                case handler.animName === "antilife shell":
                case handler.animName === game.i18n.format("AUTOANIM.animAntiLifeShell").toLowerCase():
                    divisor = 39;
                    break;
                case handler.animName === "thunderwave":
                case handler.animName === game.i18n.format("AUTOANIM.itemThunderwave").toLowerCase():
                    divisor = 55;
                    break;
            }
            break;
        case (handler.selfRadius === "30"):
            switch (true) {
                case handler.animName === "shatter":
                case handler.animName === game.i18n.format("AUTOANIM.itemShatter").toLowerCase():
                case handler.animName === "antilife shell":
                case handler.animName === game.i18n.format("AUTOANIM.animAntiLifeShell").toLowerCase():
                    divisor = 32;
                    break;
                case handler.animName === "thunderwave":
                case handler.animName === game.i18n.format("AUTOANIM.itemThunderwave").toLowerCase():
                    divisor = 45;
                    break;
            }
            break;
    }
    */

    let tokenSize = handler.actor.data.data.traits.size;
    switch (true) {
        case handler.selfRadius === "5":
            switch (true) {
                case (tokenSize === "lg"):
                    if (handler.animName === "thunderwave") {divisor = 125;} else {divisor = 85;}
                    break;
                case (tokenSize === "huge"):
                    if (handler.animName === "thunderwave") {divisor = 90;} else {divisor = 62;}
                    break;
                default:
                    if (handler.animName === "thunderwave") {divisor = 175;} else {divisor = 125;}
            }
            break;
        case handler.selfRadius === "10":
            switch (true) {
                case (tokenSize === "lg"):
                    if (handler.animName === "thunderwave") {divisor = 90;} else {divisor = 62;}
                    break;
                case (tokenSize === "huge"):
                    if (handler.animName === "thunderwave") {divisor = 68;} else {divisor = 46;}
                    break;
                default:
                    if (handler.animName === "thunderwave") {divisor = 125;} else {divisor = 85;}
            }
            break;
        case handler.selfRadius === "15":
            switch (true) {
                case (tokenSize === "lg"):
                    if (handler.animName === "thunderwave") {divisor = 68;} else {divisor = 46;}
                    break;
                case (tokenSize === "huge"):
                    if (handler.animName === "thunderwave") {divisor = 58;} else {divisor = 42;}
                    break;
                default:
                    if (handler.animName === "thunderwave") {divisor = 90;} else {divisor = 62;}
            }
            break;
        case handler.selfRadius === "20":
            switch (true) {
                case (tokenSize === "lg"):
                    if (handler.animName === "thunderwave") {divisor = 55;} else {divisor = 39;}
                    break;
                case (tokenSize === "huge"):
                    if (handler.animName === "thunderwave") {divisor = 52;} else {divisor = 35;}
                    break;
                default:
                    if (handler.animName === "thunderwave") {divisor = 68;} else {divisor = 46;}
            }
            break;
        case handler.selfRadius === "25":
            switch (true) {
                case (tokenSize === "lg"):
                    if (handler.animName === "thunderwave") {divisor = 48;} else {divisor = 32;}
                    break;
                case (tokenSize === "huge"):
                    if (handler.animName === "thunderwave") {divisor = 45;} else {divisor = 30;}
                    break;
                default:
                    if (handler.animName === "thunderwave") {divisor = 55;} else {divisor = 39;}
            }
            break;
        case handler.selfRadius === "30":
            switch (true) {
                case (tokenSize === "lg"):
                    if (handler.animName === "thunderwave") {divisor = 42;} else {divisor = 27;}
                    break;
                case tokenSize === "huge":
                    if (handler.animName === "thunderwave") {divisor = 40;} else {divisor = 26;}
                    break;
                default:
                    if (handler.animName === "thunderwave") {divisor = 48;} else {divisor = 32;}
            }
            break;
    }


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
}

export default selfCast;