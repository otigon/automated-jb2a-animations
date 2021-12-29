import { buildFile } from "../file-builder/build-filepath.js"
import { JB2APATREONDB } from "../databases/jb2a-patreon-database.js";
import { JB2AFREEDB } from "../databases/jb2a-free-database.js";
import { aaColorMenu } from "../databases/jb2a-menu-options.js";
import { AAanimationData } from "../../aa-classes/animation-data.js";
//import { AAITEMCHECK } from "./item-arrays.js";

const wait = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

export async function bless(handler, animationData) {
    function moduleIncludes(test) {
        return !!game.modules.get(test);
    }
    let obj01 = moduleIncludes("jb2a_patreon") === true ? JB2APATREONDB : JB2AFREEDB;
    //let itemName = handler.convertedName;
    let globalDelay = game.settings.get("autoanimations", "globaldelay");
    await wait(globalDelay);

    const data = animationData.primary;
    if (data.isAuto) {
        const autoOverridden = handler.autoOverride?.enable
        data.persistent = autoOverridden ? handler.autoOverride?.persistent : data.addCTA;
    }
    const bless = await buildBlessFile(obj01, data.color);
    // builds Source Token file if Enabled, and pulls from flags if already set
    //const sourceFX = await AAanimationData._sourceFX(handler, sourceToken);
    const gridSize = canvas.grid.size;
    const sourceToken = handler.actorToken;

    //let animWidth = onToken.metadata.width;
    const sourceScale = sourceToken.w;
    const scale = (sourceScale * 2.5 / bless.metadata.width) * data.scale// * handler.scale
    //const size = sourceToken.w * 1.5;
    //const scaledSize = (size * data.scale)

    if (handler.allTargets.length === 0) {

        const checkAnim = Sequencer.EffectManager.getEffects({ object: sourceToken, name: "bless" }).length > 0
        const playPersist = (!checkAnim && data.persistent) ? true : false;

        await new Sequence("Automated Animations")
        .sound()
            .file(data.itemAudio.file)
            .volume(data.itemAudio.volume)
            .delay(data.itemAudio.delay)
            .playIf(data.playSound)
        .effect()
            .file(bless.file01)
            .attachTo(sourceToken)
            .scale(scale)
            .gridSize(gridSize)
            .belowTokens(data.below)
            .waitUntilFinished(-500)
        .effect()
            .file(bless.file02)
            .scale(scale)
            .gridSize(gridSize)
            .attachTo(sourceToken)
            .belowTokens(data.below)
            .playIf(!data.persistent)
            .loopProperty("sprite", "scale.x", { from: (scale * 0.85), to: (scale * 1.15), duration: 2000, pingPong:true})
            .loopProperty("sprite", "scale.y", { from: (scale * 0.85), to: (scale * 1.15), duration: 2000, pingPong:true})
            //.filter("ColorMatrix", {hue: 120})
        .effect()
            .file(bless.file02)
            .scale(scale)
            .name("bless")
            .gridSize(gridSize)
            .attachTo(sourceToken)
            .belowTokens(data.below)
            .persist(data.persistent)
            .origin(handler.item.uuid)
            .playIf(playPersist)
            .loopProperty("sprite", "scale.x", { from: (scale * 0.85), to: (scale * 1.15), duration: 2000, pingPong:true})
            .loopProperty("sprite", "scale.y", { from: (scale * 0.85), to: (scale * 1.15), duration: 2000, pingPong:true})
            //.filter("ColorMatrix", {hue: 120})
        .play()
        if (playPersist) { AAanimationData.howToDelete("sequencerground") }
    }

    async function cast() {
        let arrayLength = handler.allTargets.length;
        for (var i = 0; i < arrayLength; i++) {

            let target = handler.allTargets[i];
            let targetScale = (target.w * 2 / bless.metadata.width) * data.scale

            const checkAnim = Sequencer.EffectManager.getEffects({ object: target, name: "bless" }).length > 0
            const playPersist = (!checkAnim && data.persistent) ? true : false;

            await new Sequence("Automated Animations")
                .sound()
                    .file(data.itemAudio.file)
                    .volume(data.itemAudio.volume)
                    .delay(data.itemAudio.delay)
                    .playIf(() => {
                        return data.itemAudio.enable && data.itemAudio.file;
                    })
                .effect()
                    .file(bless.file01)
                    .attachTo(target)
                    .scale(targetScale)
                    .gridSize(gridSize)
                    .belowTokens(data.below)
                    .waitUntilFinished(-500)
                .effect()
                    .file(bless.file02)
                    .name("bless")
                    .scale(targetScale)
                    .gridSize(gridSize)
                    .attachTo(target)
                    .belowTokens(data.below)
                    .playIf(!data.persistent)
                    .loopProperty("sprite", "scale.x", { from: (targetScale * 0.85), to: (targetScale * 1.15), duration: 2000, pingPong:true})
                    .loopProperty("sprite", "scale.y", { from: (targetScale * 0.85), to: (targetScale * 1.15), duration: 2000, pingPong:true})        
                .effect()
                    .file(bless.file02)
                    .name("bless")
                    .scale(targetScale)
                    .gridSize(gridSize)
                    .attachTo(target)
                    .belowTokens(data.below)
                    .persist(data.persistent)
                    .origin(handler.item.uuid)
                    .playIf(playPersist)
                    .loopProperty("sprite", "scale.x", { from: (targetScale * 0.85), to: (targetScale * 1.15), duration: 2000, pingPong:true})
                    .loopProperty("sprite", "scale.y", { from: (targetScale * 0.85), to: (targetScale * 1.15), duration: 2000, pingPong:true})        
                .play()
                if (playPersist) { AAanimationData.howToDelete("sequencerground") }
        }
    }
    cast()
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
