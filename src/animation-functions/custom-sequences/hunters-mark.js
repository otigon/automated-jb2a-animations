import { JB2APATREONDB } from "./databases/jb2a-patreon-database.js";
import { JB2AFREEDB } from "./databases/jb2a-free-database.js";
import { buildHMFile } from "./file-builder/build-filepath.js"

const wait = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

async function huntersMark(handler) {

    function moduleIncludes(test) {
        return !!game.modules.get(test);
    }

    let obj01 = moduleIncludes("jb2a_patreon") === true ? JB2APATREONDB : JB2AFREEDB;

    let hmAnim = await buildHMFile(obj01, handler)
    let myToken = handler.actorToken;
    let target = handler.allTargets[0];

    let hmPulse = hmAnim.file01;
    let hmLoop = hmAnim.file02;

    let Scale = 0.5 //(target.w / hmAnim.metadata.width);

    let tintPre = "#FFFFFF";
    let tintPost = parseInt(tintPre.substr(1), 16);
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

    new Sequence()
        .effect()
            .file(hmPulse)
            .atLocation(myToken)
        .effect()
            .file(hmPulse)
            .atLocation(target)
        .play()

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