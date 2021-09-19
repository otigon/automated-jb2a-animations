import { buildFile } from "../file-builder/build-filepath.js"
import { JB2APATREONDB } from "../databases/jb2a-patreon-database.js";
import { JB2AFREEDB } from "../databases/jb2a-free-database.js";
import { aaColorMenu } from "../databases/jb2a-menu-options.js";
import { AAanimationData } from "../../aa-classes/animation-data.js";
//import { AAITEMCHECK } from "./item-arrays.js";

const wait = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

export async function bless(handler, autoObject) {
    function moduleIncludes(test) {
        return !!game.modules.get(test);
    }
    let obj01 = moduleIncludes("jb2a_patreon") === true ? JB2APATREONDB : JB2AFREEDB;
    //let itemName = handler.convertedName;
    let globalDelay = game.settings.get("autoanimations", "globaldelay");
    await wait(globalDelay);

    // Random Color pull given object path
    //Builds standard File Path
    const data = {};
    if (autoObject) {
        const autoOverridden = handler.options?.overrideAuto
        Object.assign(data, autoObject[0]);
        data.itemName = data.animation || "";
        data.color = autoOverridden ? handler.options?.autoColor : data.color;
        data.scale = autoOverridden ? handler.options?.autoScale : data.scale;
    } else {
        data.itemName = handler.convertedName;
        data.color = handler.color;
        data.scale = handler.scale || 1;
        data.below = handler.animLevel;
        data.addCTA = handler.options?.addCTA;
    }
    const bless = await buildBlessFile(obj01, data.color);
    // builds Source Token file if Enabled, and pulls from flags if already set
    //const sourceFX = await AAanimationData._sourceFX(handler, sourceToken);

    const sourceToken = handler.actorToken;
    //let animWidth = onToken.metadata.width;
    const scale = ((sourceToken.w / bless.metadata.width) * 2)// * handler.scale
    let addCTA = data.addCTA ? false : true
    if (handler.allTargets.length === 0) {
        new Sequence()
        .effect()
            .file(bless.file01)
            .atLocation(sourceToken)
            .scale(scale * data.scale)
            .belowTokens(data.below)
            .waitUntilFinished(-500)
        .effect()
            .file(bless.file02)
            .scale(scale)
            .atLocation(sourceToken)
            .belowTokens(data.below)
            .play()
    }

    async function cast() {
        let arrayLength = handler.allTargets.length;
        for (var i = 0; i < arrayLength; i++) {

            let target = handler.allTargets[i];
            if (handler.targetEnable) {
                tFXScale = 2 * target.w / targetFX.metadata.width;
            }

            let targetScale = ((target.w / bless.metadata.width) * 2)
            new Sequence()
                .effect()
                    .file(bless.file01)
                    .atLocation(target)
                    .scale(targetScale * data.scale)
                    .belowTokens(data.below)
                    .waitUntilFinished(-500)
                .effect()
                    .file(bless.file02)
                    .scale(targetScale * data.scale)
                    .atLocation(target)
                    .belowTokens(data.below)
                    .playIf(addCTA)
                .play()
            //await wait(250)

        }
        if (data.addCTA) {
            await wait((bless.metadata.duration * 1000) - 500)
            cTa()
        }
    }
    cast()

    async function cTa() {
        let arrayLength = handler.allTargets.length;
        for (var i = 0; i < arrayLength; i++) {

            let target = handler.allTargets[i];

            let textureData = {
                belowToken: true,
                multiple: 0,
                opacity: 1.0,
                radius: 2,
                rotation: "static",
                scale: 2 * handler.scale,
                speed: 0,
                texturePath: bless.ctaFile02,
                tint: 16777215,
                xScale: 0.5,
                yScale: 0.5
            }

            let pushActor = false;

            let name = handler.animName;


            CTA.addAnimation(target, textureData, pushActor, name)
        }
    }
    if (data.addCTA) {
        await wait ((bless.metadata.duration * 1000) - 500);
        removeCTA()
    }
    async function removeCTA() {
        let clsd = false;
        let d = new Dialog({
            title: "A-A",
            buttons: {
                yes: {
                    label: game.i18n.format("AUTOANIM.removeAura"),
                    icon: '<i class="fas fa-biohazard"></i>',
                    callback: (html) => { clsd = true }
                },
            },
            default: 'yes',
            close: () => {
                if (clsd === false) console.log('This was closed without using a button');
                if (clsd === true) {
                    let arrayLength = handler.allTargets.length;
                    let name = handler.animName;
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

async function buildBlessFile(jb2a, baseColor) {
    let color = baseColor || "yellow";
    color = color.replace(/\s+/g, '');
    function random_item(items)
    {
    return items[Math.floor(Math.random()*items.length)];
    }
    color = color === "random" ? random_item(Object.keys(aaColorMenu.static.bless['01'])) : color;
    const file01 = `autoanimations.static.bless.01.${color}.intro`;
    const file02 = `autoanimations.static.bless.01.${color}.loop`;
    const ctaFile01 = jb2a.static.bless['01'][color]["intro"];
    const ctaFile02 = jb2a.static.bless['01'][color]["loop"];

    let metadata = await getVideoDimensionsOf(ctaFile01);
    let metadata2 = await getVideoDimensionsOf(ctaFile02);

    return { file01, file02, ctaFile01, ctaFile02, metadata, metadata2 }
}
function getVideoDimensionsOf(url) {
    return new Promise(resolve => {
        // create the video element
        const video = document.createElement('video');
        video.preload = "metadata";

        // place a listener on it
        video.addEventListener("loadedmetadata", function () {
            // retrieve dimensions
            const height = this.videoHeight;
            const width = this.videoWidth;
            const duration = this.duration
            // send back result
            resolve({ height, width, duration });
        }, false);
        video.src = url;

    });
}
