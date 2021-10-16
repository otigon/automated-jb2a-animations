import { buildFile } from "./file-builder/build-filepath.js";
import { aaDebugger } from "../constants/constants.js";
import { AAanimationData } from "../aa-classes/animation-data.js";

const wait = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

export async function auras(handler, autoObject) {
    const aaDebug = game.settings.get("autoanimations", "debug")
    //let jb2a = moduleIncludes("jb2a_patreon") === true ? JB2APATREONDB : JB2AFREEDB;
    //let animName = handler.animName.replace(/\s+/g, '')
    const gridSize = canvas.grid.size
    const data = {}
    if (autoObject) {
        const autoOverridden = handler.autoOverride?.enable
        Object.assign(data, autoObject)
        data.animation = data.animation || "";
        data.customPath = data.custom ? data.customPath : false;
        data.color = autoOverridden ? handler.autoOverride?.color : data.color;
        data.size = data.scale * 2 * gridSize;
        //data.tint = parseInt(data.tint.substr(1), 16);
    } else {
        data.animation = handler.animation;
        data.variant = handler.variant;
        data.color = handler.color;
        data.customPath = handler.enableCustom ? handler.customPath : false;
        //data.tint = parseInt(handler.animTint.substr(1), 16);
        data.opacity = handler.opacity;
        data.size = handler.auraRadius * 2 * gridSize
        data.ignoretargets = handler.options.ignoreTarget;
        data.below = handler.below;
    }

    const easeArray = ['easeInOutCubic', 'easeInOutQuart', 'easeInQuad', 'easeInOutQuad', 'easeInCirc']

    if (aaDebug) { aaDebugger("CTA Aura Animation Start", data) }
    const sourceToken = handler.actorToken;
    const aura = await buildFile(true, data.animation, "static", "01", data.color, data.customPath);
    if (handler.allTargets.length === 0 || data.ignoretargets) {
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
                .animateProperty("sprite", "rotation", {from: 0, to: 360, duration: 2500, ease: randomEase})
            .play()
        AAanimationData.howToDelete("sequencerground")
    }

    async function targetAura() {
        let targets = handler.allTargets;
        let arrayLength = targets.length;
        for (var i = 0; i < arrayLength; i++) {

            let target = targets[i];
            let randomEase = easeArray[Math.floor(Math.random() * easeArray.length)]

            let checkAnim = Sequencer.EffectManager.getEffects({ object: target, name: target.name + " " + aura.file }).length > 0
            let playPersist = !checkAnim ? true : false;

            new Sequence()
                .effect()
                    //.atLocation(target)
                    .attachTo(target)
                    .persist()
                    .name(target.name + " " + aura.file)
                    .size(data.size)
                    .gridSize(gridSize)
                    .playIf(playPersist)
                    .belowTokens(data.below)
                    .file(aura.file)
                    .fadeIn(50)
                    .animateProperty("sprite", "width", {from: 0, to: data.size, duration: 2500, ease: randomEase})
                    .animateProperty("sprite", "height", {from: 0, to: data.size, duration: 2500, ease: randomEase})
                    .animateProperty("sprite", "alpha", {from: 0, to: data.opacity, duration: 2500})
                    .animateProperty("sprite", "rotation", {from: 0, to: 360, duration: 2500, ease: randomEase})    
                .play()
        }
        AAanimationData.howToDelete("sequencerground")
    }


}