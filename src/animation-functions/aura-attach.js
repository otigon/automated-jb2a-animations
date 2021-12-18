import { buildFile } from "./file-builder/build-filepath.js";
import { aaDebugger } from "../constants/constants.js";
import { AAanimationData } from "../aa-classes/animation-data.js";

const wait = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

export async function auras(handler, autoObject) {
    const aaDebug = game.settings.get("autoanimations", "debug")
    //let jb2a = moduleIncludes("jb2a_patreon") === true ? JB2APATREONDB : JB2AFREEDB;
    //let animName = handler.animName.replace(/\s+/g, '')
    /*
    const data = {}
    if (autoObject) {
        //const autoOverridden = handler.autoOverride?.enable
        Object.assign(data, autoObject)
        //data.animation = data.animation || "";
        //data.customPath = data.custom ? data.customPath : false;
        //data.color = autoOverridden ? handler.autoOverride?.color : data.color;
        data.size = data.scale * 2 * gridSize;
        //data.itemAudio = {
            //enable: data.enableSound || false,
            //file: data.soundFile,
            //volume: data.soundVolume || 0.25,
            //delay: data.soundDelay || 0,
        //}
        //data.tint = parseInt(data.tint.substr(1), 16);
    } else {
        //data.animation = handler.animation;
        //data.variant = handler.variant;
        //data.color = handler.color;
        //data.customPath = handler.enableCustom ? handler.customPath : false;
        //data.tint = parseInt(handler.animTint.substr(1), 16);
        //data.opacity = handler.opacity;
        data.size = handler.auraRadius * 2 * gridSize
        //data.ignoreTargets = handler.options.ignoreTarget;
        //data.below = handler.below;
        //data.itemAudio = {
            //enable: handler.allSounds?.items?.enable || false,
            //file: handler.allSounds?.items?.file,
            //volume: handler.allSounds?.items?.volume || 0.25,
            //delay: handler.allSounds?.items?.delay || 0,
        //}
    }
    */
    const gridSize = canvas.grid.size
    const data = await AAanimationData._primaryData(handler, autoObject);
    if (autoObject) {
        data.size = data.scale * 2 * gridSize;
    } else {
        data.size = data.auraRadius * 2 * gridSize;
    }

    const easeArray = ['easeInOutCubic', 'easeInOutQuart', 'easeInQuad', 'easeInOutQuad', 'easeInCirc']

    if (aaDebug) { aaDebugger("CTA Aura Animation Start", data) }
    const sourceToken = handler.actorToken;
    const aura = await buildFile(true, data.animation, "static", data.variant, data.color, data.customPath);
    if (handler.allTargets.length === 0 || data.ignoreTargets) {
        selfAura()
    } else {
        targetAura();
    }


    async function selfAura() {
        const randomEase = easeArray[Math.floor(Math.random() * easeArray.length)]
        new Sequence()
            .effect()
                //.atLocation(sourceToken)
                .persist()
                .origin(handler.item.uuid)
                .size(data.size)
                .belowTokens(data.below)
                .file(aura.file)
                .gridSize(gridSize)
                .attachTo(sourceToken)
                .name(sourceToken.name)
                .fadeIn(50)
                .animateProperty("sprite", "width", {from: 0, to: data.size, duration: 2500, ease: randomEase})
                .animateProperty("sprite", "height", {from: 0, to: data.size, duration: 2500, ease: randomEase})
                .animateProperty("sprite", "alpha", {from: 0, to: data.opacity, duration: 2500})
                //.animateProperty("sprite", "rotation", {from: 0, to: 360, duration: 2500, ease: randomEase})
            .sound()
                .file(data.itemAudio.file)
                .volume(data.itemAudio.volume)
                .delay(data.itemAudio.delay)
                .playIf(() => {
                    return data.itemAudio.enable && data.itemAudio.file;
                })
            .play()
        AAanimationData.howToDelete("sequencerground")
    }

    async function targetAura() {
        let targets = handler.allTargets;
        let arrayLength = targets.length;
        for (var i = 0; i < arrayLength; i++) {

            let target = targets[i];
            let randomEase = easeArray[Math.floor(Math.random() * easeArray.length)]

            let checkAnim = Sequencer.EffectManager.getEffects({ object: target, name: `${target.name}-${handler.itemName}` }).length > 0
            let playPersist = !checkAnim ? true : false;

            new Sequence()
                .effect()
                    //.atLocation(target)
                    .attachTo(target)
                    .persist()
                    .origin(handler.item.uuid)
                    .name(`${target.name}-${handler.itemName}`)
                    .size(data.size)
                    .gridSize(gridSize)
                    .playIf(playPersist)
                    .belowTokens(data.below)
                    .file(aura.file)
                    .fadeIn(50)
                    .animateProperty("sprite", "width", {from: 0, to: data.size, duration: 2500, ease: randomEase})
                    .animateProperty("sprite", "height", {from: 0, to: data.size, duration: 2500, ease: randomEase})
                    .animateProperty("sprite", "alpha", {from: 0, to: data.opacity, duration: 2500})
                    //.animateProperty("sprite", "rotation", {from: 0, to: 360, duration: 2500, ease: randomEase})
                .sound()
                    .file(data.itemAudio.file)
                    .volume(data.itemAudio.volume)
                    .delay(data.itemAudio.delay)
                    .playIf(() => {
                        return data.itemAudio.enable && data.itemAudio.file;
                    })
                .play()
        }
        AAanimationData.howToDelete("sequencerground")
    }


}