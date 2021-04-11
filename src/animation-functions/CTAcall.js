import colorChecks from "./colorChecks.js"

const wait = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

async function ctaCall(handler) {

    function moduleIncludes(test) {
        return !!game.modules.get(test);
    }

    let path00 = moduleIncludes("jb2a_patreon") === true ? `jb2a_patreon` : `JB2A_DnD5e`;


    let { tint, color } = colorChecks(handler);
    /*
    call lightning
    darkness
    fog cloud
    sleetstorm
    spirit guardians
    wall of force
    whirlwind
    */

    let file = `modules/${path00}/Library/`;
    let path;
    switch (true) {
        case handler.animName === "call lightning":
        case handler.animName === game.i18n.format("AUTOANIM.animCallLightning").toLowerCase():
            if (color === "default") { color = "Blue" };
            path = `3rd_Level/Call_Lightning/CallLightning_01_${color}_1000x1000.webm`;
            break;
        case handler.animName === "darkness":
        case handler.animName === game.i18n.format("AUTOANIM.animDarkness").toLowerCase():
            if (color === "default") { color = "Black" };
            path = `2nd_Level/Darkness/Darkness_01_${color}_600x600.webm`;
            break;
        case handler.animName === "fog cloud":
        case handler.animName === game.i18n.format("AUTOANIM.animFogCloud").toLowerCase():
            path = `1st_Level/Fog_Cloud/FogCloud_01_White_800x800.webm`;
            break;
        case handler.animName === "sleetstorm":
        case handler.animName === game.i18n.format("AUTOANIM.animSleetstorm").toLowerCase():
            if (color === "default") { color = "Blue" };
            path = `3rd_Level/Sleet_Storm/SleetStorm_01_${color}_800x800.webm`;
            break;
        case handler.animName === "spirit guardians":
        case handler.animName === game.i18n.format("AUTOANIM.animSpiritGuardians").toLowerCase():
            if (color === "default") { color = "BlueYellow", tint = "Light" };
            path = `3rd_Level/Spirit_Guardians/SpiritGuardians_01_${tint}_${color}_600x600.webm`;
            break;
        case handler.animName === "wall of force":
        case handler.animName === game.i18n.format("AUTOANIM.animWallOfForce").toLowerCase():
            if (color === "default") { color = "Grey" };
            path = `5th_Level/Wall_Of_Force/WallOfForce_01_${color}_Sphere_400x400.webm`;
            break;
        case handler.animName === "whirlwind":
        case handler.animName === game.i18n.format("AUTOANIM.animWhirlwind").toLowerCase():
            if (color === "default") { color = "BlueGrey_01" };
            path = `7th_Level/Whirlwind/Whirlwind_01_${color}_400x400.webm`;
            break;
    }

    let animPath = `${file}${path}`;


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
        texturePath: animPath,
        tint: tintPost,
        xScale: 0.5,
        yScale: 0.5
    }

    let pushToken = true;

    let pushActor = false;

    let name = handler.animName;

    let update = false;
    let tokenName = token.name;

    CTA.addAnimation(token, textureData, pushToken, pushActor, name, update)

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
            if (clsd === true) CTA.removeAnimByName(token, name, true);
        }
    },
    { width: 100, height: 75}
    );
    d.options.resizable = true;
    d.render(true)
}

export default ctaCall;