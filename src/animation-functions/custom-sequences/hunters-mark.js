import { JB2APATREONDB } from "../databases/jb2a-patreon-database.js";
import { JB2AFREEDB } from "../databases/jb2a-free-database.js";
import { aaColorMenu } from "../databases/jb2a-menu-options.js";
import { AAanimationData } from "../../aa-classes/animation-data.js";

const wait = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

async function huntersMark(handler, autoObject) {

    function moduleIncludes(test) {
        return !!game.modules.get(test);
    }

    let jb2a = moduleIncludes("jb2a_patreon") === true ? JB2APATREONDB : JB2AFREEDB;

    const data = {};
    if (autoObject) {
        const autoOverridden = handler.autoOverride?.enable
        Object.assign(data, autoObject);
        data.animation = data.animation || "";
        data.variant = data.variant ?? "paw";
        data.scale = data.scale ?? 1;
        data.anchorX = data.anchorX ?? 0.5;
        data.anchorY = data.anchorY ?? 0.7;
        data.color = autoOverridden ? handler.autoOverride?.color : data.color;
        data.variant = autoOverridden ? handler.autoOverride?.variant : data.variant;
        data.scale = autoOverridden ? handler.autoOverride?.scale : data.scale;
        data.anchorX = autoOverridden ? handler.autoOverride?.anchorX : data.anchorX;
        data.anchorY = autoOverridden ? handler.autoOverride?.anchorY : data.anchorY;
        data.persist = autoOverridden ? handler.autoOverride?.persistent : data.persistent;
        data.itemAudio = {
            enable: data.enableSound || false,
            file: data.soundFile,
            volume: data.soundVolume || 0.25,
            delay: data.soundDelay || 0,
        }
    } else {
        data.animation = handler.animation;
        data.variant = handler.variant ?? "paw";
        data.color = handler.color;
        data.scale = handler.scale;
        data.below = false;
        data.anchorX = handler.anchorX;
        data.anchorY = handler.anchorY;
        data.persist = handler.persistent;
        data.itemAudio = {
            enable: handler.allSounds?.items?.enable || false,
            file: handler.allSounds?.items?.file,
            volume: handler.allSounds?.items?.volume || 0.25,
            delay: handler.allSounds?.items?.delay || 0,
        }
    }

    const sourceToken = handler.actorToken;
    let target = handler.allTargets[0] || null;

    const animLoop = data.variant + "loop";
    let hmPulse = data.color === 'random' ? `autoanimations.static.huntersmark.${data.variant}` : `autoanimations.static.huntersmark.${data.variant}.${data.color}`;

    let hmLoop = data.color === 'random' ? `autoanimations.static.huntersmark.${animLoop}` : `autoanimations.static.huntersmark.${animLoop}.${data.color}`

    const checkAnim = Sequencer.EffectManager.getEffects({ object: target, name: "huntersmark" }).length > 0

    const scale = data.scale || 1
    const finalScale = (canvas.grid.size / 200) * scale

    const playPersist = (!checkAnim && data.persist) ? true : false;
    await new Sequence("Automated Animations")
        .sound()
            .file(data.itemAudio.file)
            .volume(data.itemAudio.volume)
            .delay(data.itemAudio.delay)
            .playIf(() => {
                return data.itemAudio.enable && data.itemAudio.file;
            })
        .effect()
            .file(hmPulse)
            .atLocation(sourceToken)
        .effect()
            .file(hmPulse)
            .atLocation(target)
            .playIf(target)
            .waitUntilFinished()
        .effect()
            .file(hmLoop)
            .attachTo(target)
            .anchor({ x: data.anchorX, y: data.anchorY })
            .playIf(playPersist)
            .scale(finalScale)
            .gridSize(canvas.grid.size)
            .belowTokens(false)
            .name("huntersmark")
            .persist(true)
            .origin(handler.item.uuid)
        //.name(target.name)
        //.loopProperty("sprite", "rotation", { values: [0, 360], duration: 6000})
            .loopProperty("sprite", "scale.x", { from: (finalScale * 0.4), to: finalScale, duration: 4000, pingPong: true })
            .loopProperty("sprite", "scale.y", { from: (finalScale * 0.4), to: finalScale, duration: 4000, pingPong: true })
            .loopProperty("sprite", "alpha", { from: 0.25, to: 1, duration: 4000, pingPong: true })
        .play()
        //AAanimationData.removePersistentEffect(target, "huntersmark", canvas.scene.id)
        if (playPersist) { AAanimationData.howToDelete("sequencerground") }
}

export default huntersMark;