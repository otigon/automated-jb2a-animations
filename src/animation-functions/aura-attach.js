import { buildFile } from "./file-builder/build-filepath.js";
import { aaDebugger } from "../constants/constants.js"

const wait = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

export async function auras(handler, autoObject) {
    const aaDebug = game.settings.get("autoanimations", "debug")
    //let jb2a = moduleIncludes("jb2a_patreon") === true ? JB2APATREONDB : JB2AFREEDB;
    //let animName = handler.animName.replace(/\s+/g, '')
    const gridSize = canvas.grid.size
    const data = {}
    if (autoObject) {
        Object.assign(data, autoObject[0])
        data.itemName = data.animation || "";
        data.customPath = data.custom ? data.customPath : false;
        data.color = handler.options?.autoColor || data.color;
        data.size = data.scale * 2 * gridSize;
        //data.tint = parseInt(data.tint.substr(1), 16);
    } else {
        data.itemName = handler.animName.replace(/\s+/g, '');
        data.variant = handler.spellVariant;
        data.color = handler.color;
        data.customPath = handler.enableCustom01 ? handler.custom01 : false;
        //data.tint = parseInt(handler.animTint.substr(1), 16);
        data.opacity = handler.auraOpacity;
        data.size = handler.selfRadius * 2 * gridSize
        data.ignoretargets = handler.options?.ignoreTarget
        data.below = true;
    }

    const easeArray = ['easeInOutCubic', 'easeInOutQuart', 'easeInQuad', 'easeInOutQuad', 'easeInCirc']

    if (aaDebug) { aaDebugger("CTA Aura Animation Start", data) }
    const sourceToken = handler.actorToken;
    const aura = await buildFile(true, data.itemName, "static", "01", data.color, data.customPath);
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
                .belowTokens(true)
                .file(aura.file)
                .gridSize(gridSize)
                .attachTo(sourceToken)
                .fadeIn(50)
                .animateProperty("sprite", "width", {from: 0, to: data.size, duration: 2500, ease: randomEase})
                .animateProperty("sprite", "height", {from: 0, to: data.size, duration: 2500, ease: randomEase})
                .animateProperty("sprite", "alpha", {from: 0, to: data.opacity, duration: 2500})
                .animateProperty("sprite", "rotation", {from: 0, to: 360, duration: 2500, ease: randomEase})
            .play()
    }

    async function targetAura() {
        let targets = handler.allTargets;
        let arrayLength = targets.length;
        for (var i = 0; i < arrayLength; i++) {

            let target = targets[i];
            let randomEase = easeArray[Math.floor(Math.random() * easeArray.length)]
            new Sequence()
                .effect()
                    //.atLocation(target)
                    .attachTo(target)
                    .persist()
                    .size(data.size)
                    .gridSize(gridSize)
                    .belowTokens(true)
                    .file(aura.file)
                    .fadeIn(50)
                    .animateProperty("sprite", "width", {from: 0, to: data.size, duration: 2500, ease: randomEase})
                    .animateProperty("sprite", "height", {from: 0, to: data.size, duration: 2500, ease: randomEase})
                    .animateProperty("sprite", "alpha", {from: 0, to: data.opacity, duration: 2500})
                    .animateProperty("sprite", "rotation", {from: 0, to: 360, duration: 2500, ease: randomEase})    
                .play()
        }
    }


}