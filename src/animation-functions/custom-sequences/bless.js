import { buildBlessFile, buildSourceTokenFile } from "../file-builder/build-filepath.js"
import { JB2APATREONDB } from "../databases/jb2a-patreon-database.js";
import { JB2AFREEDB } from "../databases/jb2a-free-database.js";
//import { AAITEMCHECK } from "./item-arrays.js";

const wait = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

export async function bless(handler) {
    function moduleIncludes(test) {
        return !!game.modules.get(test);
    }
    //console.log(JB2APATREONDB)
    let obj01 = moduleIncludes("jb2a_patreon") === true ? JB2APATREONDB : JB2AFREEDB;
    //let itemName = handler.convertedName;
    let globalDelay = game.settings.get("autoanimations", "globaldelay");
    await wait(globalDelay);

    // Random Color pull given object path
    //Builds standard File Path
    let bless = await buildBlessFile(obj01, handler);

    // builds Source Token file if Enabled, and pulls from flags if already set
    let sourceFX;
    if (handler.sourceEnable) {
        sourceFX = await buildSourceTokenFile(obj01, handler.sourceName, handler)
    }

    let sourceToken = handler.actorToken;
    //let animWidth = onToken.metadata.width;
    let scale = ((sourceToken.w / bless.metadata.width) * 2)// * handler.scale
    let addCTA = handler.options?.addCTA ? false : true
    if (handler.allTargets.length === 0) {
        new Sequence()
            .effect()
            .file(bless.file01)
            .atLocation(sourceToken)
            .scale(scale * handler.scale)
            .belowTokens(handler.animLevel)
            .waitUntilFinished(-500)
            .effect()
            .file(bless.file02)
            .scale(scale)
            .atLocation(sourceToken)
            .belowTokens(handler.animLevel)
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
                .scale(targetScale * handler.scale)
                .belowTokens(handler.animLevel)
                .waitUntilFinished(-500)
                .effect()
                .file(bless.file02)
                .scale(targetScale * handler.scale)
                .atLocation(target)
                .belowTokens(handler.animLevel)
                .playIf(addCTA)
                .play()
            //await wait(250)

        }
        if (handler.options?.addCTA) {
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
    if (handler.options?.addCTA) {
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
