import { JB2APATREONDB } from "./jb2a-patreon-database.js";
import { JB2AFREEDB } from "./jb2a-free-database.js";

const wait = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

async function huntersMark(handler) {

    function moduleIncludes(test) {
        return !!game.modules.get(test);
    }

    let obj01 = moduleIncludes("jb2a_patreon") === true ? JB2APATREONDB : JB2AFREEDB;
    let obj02 = 'huntersmark';


    let obj03 = handler.hmAnim;
    if (obj03 === "a1") { obj03 = "01" };
    let color;
    switch (handler.color) {
        case "a1":
        case ``:
            color = 'green';
            break;
        default:
            color = handler.color;
    }

    let myToken = handler.actorToken;
    let target = handler.allTargets[0];

    let hmLoop = obj01[obj02][obj03]['loop'][color];
    let hmPulse = obj01[obj02][obj03]['pulse'][color];

    let hmAnimPulseSelf = {
        file: hmPulse,
        position: myToken.center,
        anchor: {
            x: 0.5,
            y: 0.5
        },
        angle: 0,
        scale: {
            x: 1,
            y: 1
        }
    };

    let hmAnimPulseTarget = {
        file: hmPulse,
        position: target.center,
        anchor: {
            x: 0.5,
            y: 0.5
        },
        angle: 0,
        scale: {
            x: 1,
            y: 1
        }
    };

    let targetScale = target.actor.data.data.traits.size;
    let Scale;
    switch (true) {
        case targetScale === "lg":
            Scale = 0.4;
            break;
        case targetScale === "huge":
            Scale = 0.3;
            break;
        case targetScale === "grg":
            Scale = 0.3;
            break;
        default:
            Scale = 0.5;
    }

    let tintPre = "#FFFFFF";
    let tintPost = parseInt(tintPre.substr(1), 16);
    console.log(tintPost);
    let rotationData = {
        texturePath: hmLoop,
        scale: Scale,
        speed: 10,
        multiple: 1,
        rotation: "rotation",
        xScale: 0.5,
        yScale: 0.5,
        belowToken: false,
        radius: .25,
        opacity: 1,
        tint: tintPost,
        equip: false
    }

    let staticData = {
        belowToken: false,
        multiple: 1,
        opacity: 1,
        radius: 2,
        rotation: "static",
        scale: Scale,
        speed: 0,
        texturePath: hmLoop,
        tint: tintPost,
        xScale: 1,
        yScale: 0.5
    }

    let textureData = rotationData;

    if (handler.ctaOption) { textureData = staticData }

    let pushToken = true;

    let pushActor = false;

    let name = "Hunter's Mark";

    let update = false;

    let tokenName = target.name;

    canvas.fxmaster.playVideo(hmAnimPulseSelf);
    game.socket.emit('module.fxmaster', hmAnimPulseSelf)
    canvas.fxmaster.playVideo(hmAnimPulseTarget);
    game.socket.emit('module.fxmaster', hmAnimPulseTarget)

    if (game.modules.get("Custom-Token-Animations")?.active) {
        await wait(3000);

        CTA.addAnimation(target, textureData, pushActor, name)

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
                if (clsd === true) CTA.removeAnimByName(target, name, true, true);
            }
        },
        { width: 100, height: 75}
        );
        d.options.resizable = true;
        d.render(true)

    }

}

export default huntersMark;