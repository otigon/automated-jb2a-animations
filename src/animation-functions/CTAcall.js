import { JB2APATREONDB } from "./jb2a-patreon-database.js";
import { JB2AFREEDB } from "./jb2a-free-database.js";

const wait = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

async function ctaCall(handler) {

    function moduleIncludes(test) {
        return !!game.modules.get(test);
    }

    let obj01 = moduleIncludes("jb2a_patreon") === true ? JB2APATREONDB : JB2AFREEDB;

    let obj02;
    let color;
    switch (handler.animName) {
        case "call lightning": 
        case game.i18n.format("AUTOANIM.animCallLightning").toLowerCase():
            obj02 = "calllightning";
            switch (true) {
                case handler.color === "a1" || ``:
                case !handler.color:
                    color = "blue";
                    break;
                default:
                    color = handler.color;
            }
            break;
        case "darkness": 
        case game.i18n.format("AUTOANIM.animDarkness").toLowerCase():
            obj02 = "darkness";
            switch (true) {
                case handler.color === "a1" || ``:
                case !handler.color:
                    color = "black";
                    break;
                default:
                    color = handler.color;
            }
            break;
        case "fog cloud": 
        case game.i18n.format("AUTOANIM.animFogCloud").toLowerCase():
            obj02 = "fogcloud";
            color = "white";
            break;
        case "sleetstorm": 
        case game.i18n.format("AUTOANIM.animSleetstorm").toLowerCase():
            obj02 = "sleetstorm";
            switch (true) {
                case handler.color === "a1" || ``:
                case !handler.color:
                    color = "blue";
                    break;
                default:
                    color = handler.color;
            }
            break;
        case "spirit guardians": 
        case game.i18n.format("AUTOANIM.animSpiritGuardians").toLowerCase():
            obj02 = "spiritguardians";
            switch (true) {
                case handler.color === "a1" || ``:
                case !handler.color:
                    color = "yellow blue";
                    break;
                default:
                    color = handler.color;
            }
            break;
        case "wall of force": 
        case game.i18n.format("AUTOANIM.animWallOfForce").toLowerCase():
            obj02 = "wallofforce";
            switch (true) {
                case handler.color === "a1" || ``:
                case !handler.color:
                    color = "grey";
                    break;
                default:
                    color = handler.color;
            }
            break;
        case "whirlwind": 
        case game.i18n.format("AUTOANIM.animWhirlwind").toLowerCase():
            obj02 = "whirlwind";
            switch (true) {
                case handler.color === "a1" || ``:
                case !handler.color:
                    color = "blue grey";
                    break;
                default:
                    color = handler.color;
            }
            break;
    }

    let filePath = obj01[obj02][color];
    console.log(filePath);
    let scale;
    let tokenSize = handler.actorToken.actor.data.data.traits.size;

    switch (true) {
        case handler.selfRadius === "5":
            switch (true) {
                case (tokenSize === "lg"):
                    scale = 2;
                    break;
                case (tokenSize === "huge"):
                    scale = 1.7;
                    break;
                default:
                    scale = 3;
            }
            break;
        case handler.selfRadius === "10":
            switch (true) {
                case (tokenSize === "lg"):
                    scale = 3;
                    break;
                case (tokenSize === "huge"):
                    scale = 2.4;
                    break;
                default:
                    scale = 5;
            }
            break;
        case handler.selfRadius === "15":
            switch (true) {
                case (tokenSize === "lg"):
                    scale = 4;
                    break;
                case (tokenSize === "huge"):
                    scale = 3;
                    break;
                default:
                    scale = 7;
            }
            break;
        case handler.selfRadius === "20":
            switch (true) {
                case (tokenSize === "lg"):
                    scale = 5;
                    break;
                case (tokenSize === "huge"):
                    scale = 3.7;
                    break;
                default:
                    scale = 9;
            }
            break;
        case handler.selfRadius === "25":
            switch (true) {
                case (tokenSize === "lg"):
                    scale = 6;
                    break;
                case (tokenSize === "huge"):
                    scale = 4.4;
                    break;
                default:
                    scale = 11;
            }
            break;
        case handler.selfRadius === "30":
            switch (true) {
                case (tokenSize === "lg"):
                    scale = 7;
                    break;
                case tokenSize === "huge":
                    scale = 5.1;
                    break;
                default:
                    scale = 13;
                    break;
            }
            break;
    }

    let token = handler.actorToken;
    let tintPre = handler.animTint;
    let tintPost = parseInt(tintPre.substr(1), 16);
    let auraOpacity = handler.auraOpacity;
    let textureData = {
        belowToken: true,
        multiple: 0,
        opacity: auraOpacity,
        radius: 2,
        rotation: "static",
        scale: scale,
        speed: 0,
        texturePath: filePath,
        tint: tintPost,
        xScale: 0.5,
        yScale: 0.5
    }

    let pushToken = true;

    let pushActor = false;

    let name = handler.animName;

    let update = false;
    let tokenName = token.name;

    CTA.addAnimation(token, textureData, pushActor, name)

    let clsd = false;
    let d = new Dialog({
        title: tokenName,
        buttons: {
            yes: {
                label: game.i18n.format("AUTOANIM.removeAura"),
                callback: (html) => { clsd = true }
            },
        },
        default: 'yes',
        close: () => {
            if (clsd === false) console.log('This was closed without using a button');
            if (clsd === true) CTA.removeAnimByName(token, name, true, true);
        }
    },
        { width: 100, height: 75 }
    );
    d.options.resizable = true;
    d.render(true)

}

export default ctaCall;
