import { JB2APATREONDB } from "./databases/jb2a-patreon-database.js";
import { JB2AFREEDB } from "./databases/jb2a-free-database.js";
import { buildAuraFile } from "./file-builder/build-filepath.js";

const wait = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

async function ctaCall(handler) {

    function moduleIncludes(test) {
        return !!game.modules.get(test);
    }

    let obj01 = moduleIncludes("jb2a_patreon") === true ? JB2APATREONDB : JB2AFREEDB;

    const aura = await buildAuraFile(obj01, handler);
    
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
        scale: handler.selfRadius,
        speed: 0,
        texturePath: aura.file,
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
