import { JB2APATREONDB } from "./databases/jb2a-patreon-database.js";
import { JB2AFREEDB } from "./databases/jb2a-free-database.js";
import { buildFile } from "./file-builder/build-filepath.js";
import { aaDebugger } from "../constants/constants.js"
const wait = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

async function ctaCall(handler, autoObject) {
    const aaDebug = game.settings.get("autoanimations", "debug")
    //let jb2a = moduleIncludes("jb2a_patreon") === true ? JB2APATREONDB : JB2AFREEDB;
    //let animName = handler.animName.replace(/\s+/g, '')
    const data = {}
    if (autoObject) {
        Object.assign(data, autoObject[0])
        data.itemName = data.animation || "";
        data.customPath = data.custom ? data.customPath : false;
        data.color = handler.options?.autoColor || data.color;
        data.tint = parseInt(data.tint.substr(1), 16);
    } else {
        data.itemName = handler.animName.replace(/\s+/g, '');
        data.variant = handler.spellVariant;
        data.color = handler.color;
        data.customPath = handler.enableCustom01 ? handler.custom01 : false;
        data.tint = parseInt(handler.animTint.substr(1), 16);
        data.opacity = handler.auraOpacity;
        data.scale = handler.selfRadius
        data.ignoretargets = handler.options?.ignoreTarget
        data.below = true;
    }
    if (aaDebug) { aaDebugger("CTA Aura Animation Start", data) }
    const sourceToken = handler.actorToken;
    const aura = await buildFile(true, data.itemName, "static", "01", data.color, data.customPath);
    if (handler.allTargets.length === 0 || data.ignoretargets) {
        selfAura()
    } else {
        targetAura();
        await wait (500)
        removeCTA()
    }

    async function selfAura() {

        let textureData = {
            belowToken: data.below,
            multiple: 0,
            opacity: data.opacity,
            radius: 2,
            rotation: "static",
            scale: data.scale,
            speed: 0,
            texturePath: aura.fileData,
            tint: data.tint,
            xScale: 0.5,
            yScale: 0.5
        }

        let pushActor = false;

        let name = data.itemName;

        let tokenName = sourceToken.name;

        CTA.addAnimation(sourceToken, textureData, pushActor, name)

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
                if (clsd === true) CTA.removeAnimByName(sourceToken, name, true, true);
            }
        },
            { width: 100, height: 75 }
        );
        d.options.resizable = true;
        d.render(true)
    }

    async function targetAura() {

        let arrayLength = handler.allTargets.length;
        for (var i = 0; i < arrayLength; i++) {

            let target = handler.allTargets[i];

            let textureData = {
                belowToken: data.below,
                multiple: 0,
                opacity: data.opacity,
                radius: 2,
                rotation: "static",
                scale: data.scale,
                speed: 0,
                texturePath: aura.fileData,
                tint: data.tint,
                xScale: 0.5,
                yScale: 0.5
            }

            let pushActor = false;

            let name = data.itemName;

            CTA.addAnimation(target, textureData, pushActor, name)
        }
    }

    async function removeCTA() {
        let clsd = false;
        let d = new Dialog({
            title: game.i18n.format("AUTOANIM.typeAuras"),
            buttons: {
                yes: {
                    label: game.i18n.format("AUTOANIM.removeAura"),
                    callback: (html) => { clsd = true }
                },
            },
            default: 'yes',
            close: () => {
                if (clsd === false) console.log('This was closed without using a button');
                if (clsd === true) {
                    let arrayLength = handler.allTargets.length;
                    let name = data.itemName;
                    for (var i = 0; i < arrayLength; i++) {
                        let target = handler.allTargets[i];
                        CTA.removeAnimByName(target, name, true, true);
                    }
                }
            }
        },
            { width: 'auto', height: 'auto' }
        );
        d.render(true)
    }
}

export default ctaCall;
/*
async function buildAuraFile(jb2a, handler) {
    let namePrior = handler.animName;
    const name = namePrior.replace(/\s+/g, '');
    const variant = handler.spellVariant || "01";
    let color;
    let file;
    if (handler.enableCustom01) {
        file = handler.custom01
    } else {
        switch (name) {
            case "fogcloud":
                color = "white";
                break;
            case "antilifeshell":
                color = "blue";
                break;
            default:
                color = handler.color
                color = color.replace(/\s+/g, '');
        }
        file = name === "cloudofdaggers" ? jb2a[name].static[variant][color] : jb2a[name].static[variant][color];
    }

    return { file }
}
*/