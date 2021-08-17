import { JB2APATREONDB } from "../databases/jb2a-patreon-database.js";
import { JB2AFREEDB } from "../databases/jb2a-free-database.js";

const wait = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

export async function shieldSpell(handler) {
    function moduleIncludes(test) {
        return !!game.modules.get(test);
    }
    let obj01 = moduleIncludes("jb2a_patreon") === true ? JB2APATREONDB : JB2AFREEDB;
    //let itemName = handler.convertedName;
    let globalDelay = game.settings.get("autoanimations", "globaldelay");
    await wait(globalDelay);

    async function buildShieldFile(jb2a, handler) {
        const spellVariant = handler.spellVariant || "01";
        let color = handler.color || "blue";
        color = color.replace(/\s+/g, '');
        const shieldVar = handler.options.shieldVar || "outro_fade";
    
        const file01 = `autoanimations.shield.static.${spellVariant}.${color}.intro`;
        const file02 = `autoanimations.shield.static.${spellVariant}.${color}.loop`;
        const file03 = `autoanimations.shield.static.${spellVariant}.${color}.${shieldVar}`;
    
        const fileData = jb2a["shield"]["static"]["01"]["blue"]["intro"];
        const metadata = await getVideoDimensionsOf(fileData);
    
        return { file01, file02, file03, metadata };
    }
    
    let onToken = await buildShieldFile(obj01, handler);
    // builds Source Token file if Enabled, and pulls from flags if already set
    let sourceFX;
    if (handler.sourceEnable) {
        sourceFX = await buildFile(true, handler.sourceName, "static", handler.sourceVariant, handler.sourceColor);
    }

    let sourceToken = handler.actorToken;
    //let animWidth = onToken.metadata.width;
    let scale = ((sourceToken.w / onToken.metadata.width) * 1.75) * handler.scale



    async function cast() {
            new Sequence()
                .effect()
                    .atLocation(sourceToken)
                    .scale(handler.sourceScale)
                    .repeats(handler.sourceLoops, handler.sourceLoopDelay)
                    .belowTokens(handler.sourceLevel)
                    .waitUntilFinished(handler.sourceDelay)
                    .playIf(handler.sourceEnable)
                    .addOverride(async (effect, data) => {
                        if (handler.sourceEnable) {
                            data.file = sourceFX.file;
                        }
                        return data;
                    })
                .effect()
                    .file(onToken.file01)
                    .scale(scale)
                    .atLocation(sourceToken)
                    .waitUntilFinished(-500)        
                .effect()
                    .file(onToken.file02)
                    .scale(scale)
                    .atLocation(sourceToken)
                    .fadeIn(300)
                    .fadeOut(300)
                    .waitUntilFinished(-500)
                .effect()
                    .file(onToken.file03)
                    .scale(scale)
                    .atLocation(sourceToken)                          
                .play()
            //await wait(250)
    }
    cast()
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
