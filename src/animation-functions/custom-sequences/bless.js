import { buildFile } from "../file-builder/build-filepath.js"
import { JB2APATREONDB } from "../databases/jb2a-patreon-database.js";
import { JB2AFREEDB } from "../databases/jb2a-free-database.js";
import { aaColorMenu } from "../databases/jb2a-menu-options.js";
import { AAanimationData } from "../../aa-classes/animation-data.js";
import { aaDebugger } from "../../constants/constants.js";
//import { AAITEMCHECK } from "./item-arrays.js";

const wait = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

export async function bless(handler, animationData) {
    function moduleIncludes(test) {
        return !!game.modules.get(test);
    }
    let obj01 = moduleIncludes("jb2a_patreon") === true ? JB2APATREONDB : JB2AFREEDB;

    let globalDelay = game.settings.get("autoanimations", "globaldelay");
    await wait(globalDelay);

    const data = animationData.primary;
    const sourceFX = animationData.sourceFX;
    if (data.isAuto) {
        const autoOverridden = handler.autorecOverrides?.enable
        data.persistent = autoOverridden ? handler.autorecOverrides?.persistent : data.addCTA;
    }
    const bless = await buildBlessFile(obj01, data.color);

    if (handler.debug) { aaDebugger("Aura Animation Start", animationData, bless) }

    // builds Source Token file if Enabled, and pulls from flags if already set
    //const sourceFX = await AAanimationData._sourceFX(handler, sourceToken);
    const sourceToken = handler.sourceToken;

    //let animWidth = onToken.metadata.width;
    const sourceScale = sourceToken.w;

    if (handler.allTargets.length === 0) {
        const sourceTokenGS = (sourceToken.w / canvas.grid.size) * 1.75 * data.scale;

        const checkAnim = Sequencer.EffectManager.getEffects({ object: sourceToken, origin: handler.itemUuid }).length > 0
        const playPersist = (!checkAnim && data.persistent) ? true : false;
        let aaSeq = await new Sequence()
        // Play Macro if Awaiting
        if (data.playMacro && data.macro.playWhen === "1") {
            let userData = data.macro.args;
            aaSeq.macro(data.macro.name, handler.workflow, handler, ...userData)
        }
        // Extra Effects => Source Token if active
        if (sourceFX.enabled) {
            aaSeq.addSequence(sourceFX.sourceSeq)
        }
        if (data.playSound) {
            aaSeq.addSequence(await AAanimationData._sounds({ animationData }))
        }
        // Animation Start Hook
        aaSeq.thenDo(function () {
            Hooks.callAll("aa.animationStart", sourceToken, handler.allTargets)
        })
        if (!checkAnim) {
            aaSeq.effect()
                .file(bless.file01)
                .attachTo(sourceToken, {bindAlpha: data.unbindAlpha, bindVisibility: data.unbindVisibility})
                .size(sourceTokenGS, { gridUnits: true })
                .belowTokens(data.below)
                .waitUntilFinished(-500)
            let endSection = aaSeq.effect();
            endSection.file(bless.file02)
            endSection.size(sourceTokenGS, { gridUnits: true })
            endSection.origin(handler.itemUuid)
            endSection.attachTo(sourceToken, {bindAlpha: data.unbindAlpha, bindVisibility: data.unbindVisibility})
            endSection.belowTokens(data.below)
            endSection.loopProperty("sprite", "width", { from: (sourceTokenGS * 0.95), to: (sourceTokenGS * 1.05), duration: 2000, pingPong: true, ease: 'easeInOutSine', gridUnits: true })
            endSection.loopProperty("sprite", "height", { from: (sourceTokenGS * 0.95), to: (sourceTokenGS * 1.05), duration: 2000, pingPong: true, ease: 'easeInOutSine', gridUnits: true })
            if (playPersist) { 
                if (handler.isActiveEffect) {
                    endSection.name(handler.itemName + `${sourceToken.id}`)
                } else {
                    endSection.name(sourceToken.id)
                }        
                endSection.persist()
            }
    }
        if (data.playMacro && data.macro.playWhen === "0") {
            let userData = data.macro.args;
            new Sequence()
                .macro(data.macro.name, handler.workflow, handler, ...userData)
                .play()
        }
        aaSeq.play()

        if (playPersist) { AAanimationData.howToDelete("sequencerground") }
    }

    if (handler.allTargets.length > 0) {

        let aaSeq = await new Sequence()
        // Play Macro if Awaiting
        if (data.playMacro && data.macro.playWhen === "1") {
            let userData = data.macro.args;
            aaSeq.macro(data.macro.name, handler.workflow, handler, ...userData)
        }
        // Extra Effects => Source Token if active
        if (sourceFX.enabled) {
            aaSeq.addSequence(sourceFX.sourceSeq)
        }
        if (data.playSound) {
            aaSeq.addSequence(await AAanimationData._sounds({ animationData }))
        }
        // Animation Start Hook
        aaSeq.thenDo(function () {
            Hooks.callAll("aa.animationStart", sourceToken, handler.allTargets)
        })

        for (let target of handler.allTargets) {
            let targetTokenGS = (target.w / canvas.grid.size) * 1.75 * data.scale
            let checkAnim = Sequencer.EffectManager.getEffects({ object: target, origin: handler.itemUuid }).length > 0
            let playPersist = (!checkAnim && data.persistent) ? true : false;
            if (!checkAnim) {
                aaSeq.effect()
                    .file(bless.file01)
                    .attachTo(target, {bindAlpha: data.unbindAlpha, bindVisibility: data.unbindVisibility})
                    .size(targetTokenGS, { gridUnits: true })
                    .belowTokens(data.below)
                    .waitUntilFinished(-500)
                let endSection = aaSeq.effect();
                endSection.file(bless.file02)
                endSection.size(targetTokenGS, { gridUnits: true })
                endSection.origin(handler.itemUuid)
                endSection.attachTo(target, {bindAlpha: data.unbindAlpha, bindVisibility: data.unbindVisibility})
                endSection.belowTokens(data.below)
                endSection.loopProperty("sprite", "width", { from: (targetTokenGS * 0.95), to: (targetTokenGS * 1.05), duration: 2000, pingPong: true, ease: 'easeInOutSine', gridUnits: true })
                endSection.loopProperty("sprite", "height", { from: (targetTokenGS * 0.95), to: (targetTokenGS * 1.05), duration: 2000, pingPong: true, ease: 'easeInOutSine', gridUnits: true })
                if (playPersist) { 
                    if (handler.isActiveEffect) {
                        endSection.name(handler.itemName + `${target.id}`)
                    } else {
                        endSection.name(target.id)
                    }        
                    endSection.persist()
                }
            }
        }
        if (data.playMacro && data.macro.playWhen === "0") {
            let userData = data.macro.args;
            new Sequence()
                .macro(data.macro.name, handler.workflow, handler, ...userData)
                .play()
        }
        aaSeq.play()
        //if (playPersist) { AAanimationData.howToDelete("sequencerground") }
    }
}

async function buildBlessFile(jb2a, baseColor) {
    let color = baseColor || "yellow";
    color = color.replace(/\s+/g, '');
    function random_item(items) {
        return items[Math.floor(Math.random() * items.length)];
    }
    color = color === "random" ? random_item(Object.keys(aaColorMenu.static.spell.bless['01'])) : color;
    const file01 = `autoanimations.static.spell.bless.intro.${color}`;
    const file02 = `autoanimations.static.spell.bless.loop.${color}`;
    //const ctaFile01 = jb2a.static.spell.bless['01'][color]["intro"];
    //const ctaFile02 = jb2a.static.spell.bless['01'][color]["loop"];

    //let metadata = await getVideoDimensionsOf(ctaFile01);
    //let metadata2 = await getVideoDimensionsOf(ctaFile02);

    return { file01, file02 }
}
/*
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
*/