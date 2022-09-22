import { AAAnimationData } from "../aa-classes/AAAnimationData.js";
import { aaDebugger } from "../constants/constants.js";
import { AutorecFunctions } from "../aa-classes/autorecFunctions.js";

//import * as animationSeq from "../animation-functions/index.js"

//const wait = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

import * as animate from "../animation-functions"



export async function trafficCop(handler) {
    const aaDebug = game.settings.get("autoanimations", "debug");
    const autorecDisabled = game.settings.get("autoanimations", "disableAutoRec")

    if (!handler.isEnabled) { return; }
    if (!handler.isCustomized && !handler.autorecObject || (handler.autorecObject && autorecDisabled)) { return; }

    const data = handler.isCustomized ? handler.flags : handler.autorecObject;
    const animationData = await AAAnimationData._getAnimationData(handler, data)

    if (animationData.macro && animationData.macro.enable && animationData.macro.playWhen === "2") {
        new Sequence()
            .macro(animationData.macro.name, handler.workflow, handler, animationData.macro.args)
            .play()
        return;
    }

    if (data.soundOnly?.sound?.enable && data.soundOnly?.sound?.file) {
        const sound = {
            file: data.soundOnly?.sound?.file ?? "",
            volume: data.soundOnly?.sound?.volume ?? 0.75,
            delay: data.soundOnly?.sound?.delay ?? 0,
            startTime: data.soundOnly?.sound?.startTime ?? 0,
            repeat: data.soundOnly?.sound?.repeat ?? 1,
            repeatDelay: data.soundOnly?.sound?.repeatDelay ?? 250,
        }
        new Sequence()
            .sound()
                .file(sound.file)
                .volume(sound.volume)
                .delay(sound.delay)
                .startTime(sound.startTime)
                .repeats(sound.repeat, sound.repeatDelay)
            .play()
        return;
    }

    if (data.levels3d?.type && game.Levels3DPreview?._active) {
        animate.particleEffects(handler, data)
        return;
    }

    const animationType = data.menu === "preset" ? data.presetType : data.menu === "aefx" ? data.activeEffectType : data.menu;
    const targets = handler.allTargets?.length;

    if (animationType === "templatefx" || animationType === "proToTemp") {
        //sections for Template Hooks.once or straight to function
        switch (game.system.id) {
            case "a5e":
            case "pf2e":
            case "sw5e":
            case "tormenta20":
            case "swade":
                aaTemplateHook = Hooks.once("createMeasuredTemplate", (config) => {
                    animate[animationType](handler, animationData, config);
                });
                setTimeout(killHook, 30000)
            default:
                animate[animationType](handler, animationData);
        }
        return;
    } else {
        if (targets < 1 && (animationType === "melee" || animationType === "range")) {
            Hooks.callAll("aa.animationEnd", handler.sourceToken, "no-target");
            if (aaDebug) { aaDebugger(`${animationType} Animation End", "NO TARGETS`) }
            return;
        }
        Hooks.callAll("aa.preAnimationStart", animationData);
        animate[animationType](handler, animationData);
        return;
    }
    function killHook() {
        Hooks.off("createMeasuredTemplate", aaTemplateHook)
    }
}
