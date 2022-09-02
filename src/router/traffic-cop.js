//import { AAITEMCHECK, AAITEMCHECKFREE } from "../animation-functions/item-arrays.js";
//import thunderwaveAuto from "../animation-functions/thunderwave.js";
/*
import { huntersMark } from "../animation-functions/custom-sequences/hunters-mark.js";
import { bardicInspiration } from "../animation-functions/custom-sequences/bardic-inspiration.js";
import { rangedAnimations } from "../animation-functions/standard-sequences/rangedAnimation.js";
import { meleeAnimation } from "../animation-functions/standard-sequences/meleeAnimation.js";
import { teleportation } from "../animation-functions/custom-sequences/teleportation.js";
import { templateAnimation } from "../animation-functions/standard-sequences/templateAnimation.js";
import { shieldSpell } from "../animation-functions/custom-sequences/shield.js";
import { sneakAttack } from "../animation-functions/custom-sequences/sneak-Attack.js";
import { bless } from "../animation-functions/custom-sequences/bless.js";
import { staticAnimation } from "../animation-functions/standard-sequences/staticAnimation.js";
import { auras } from "../animation-functions/standard-sequences/aura-attach.js";
import { fireball } from "../animation-functions/custom-sequences/fireball.js";
import { particleEffects } from "../animation-functions/levels-particles/particleSystem.js";
import { dualAttach } from "../animation-functions/custom-sequences/dual-attach.js";
import { thunderwaveAuto } from "../animation-functions/custom-sequences/thunderwave.js";
*/
import { AAAnimationData } from "../aa-classes/AAAnimationData.js";
import { aaDebugger } from "../constants/constants.js";
import { AutorecFunctions } from "../aa-classes/autorecFunctions.js";

import * as animationSeq from "../animation-functions/index.js"

const wait = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

export async function trafficCop(handler) {
    const aaDebug = game.settings.get("autoanimations", "debug")

    if (game.Levels3DPreview?._active) {
        if (handler.flags?.levels3d?.type && handler.isCustomized) {
            if (aaDebug) { aaDebugger("Beginning Particle Animation for Custom Item Setting") }
            const animationData = await AAAnimationData._getAnimationData(handler);
            animationSeq.particleEffects(handler, false, animationData);
            return;
        } else if (!game.settings.get("autoanimations", "disableAutoRec")) {
            if (aaDebug) { aaDebugger("Automatic Recognition Beginning for Particle System") }
            const autoName = AutorecFunctions._rinseName(handler.itemName); //removes all spaces in the name
            const isAuto = AutorecFunctions.foundInAutorec(handler.autorecSettings, autoName);
            if (isAuto) {
                const autoObject = handler.autorecObject;
                const animationData = await AAAnimationData._getAnimationData(handler, handler.autorecObject);
                animationSeq.particleEffects(handler, autoObject, animationData);
                return;
            }
        } else {
            if (aaDebug) { aaDebugger("No Automatic Recognition Found") }
        }
        return;
    }

    if (handler.isDisabled) {
        if (handler.soundNoAnimation || handler.macroOnly) {
            let aaSeq = new Sequence()
            if (handler.soundNoAnimation) {
                const sound = {
                    file: handler.flags?.audio?.a01?.file ?? "",
                    volume: handler.flags?.audio?.a01?.volume ?? 0.75,
                    delay: handler.flags?.audio?.a01?.delay ?? 0,
                    startTime: handler.flags?.audio?.a01?.startTime ?? 0,
                }
                aaSeq.sound()
                    .file(sound.file)
                    .volume(sound.volume)
                    .delay(sound.delay)
                    .startTime(sound.startTime)
            }
            if (handler.macroOnly) {
                let userData = handler.flags?.macro?.args ? handler.flags.macro.args.split(',').map(s => s.trim()) : "";
                aaSeq.macro(handler.flags?.macro?.name, handler.workflow, handler, userData)
            }
            aaSeq.play()
        }
        return
    }
    /*
    if (handler.soundNoAnimation) {
        new Sequence()
            .sound()
            .file(handler.flags?.audio?.a01?.file)
            .volume(handler.flags?.audio?.a01?.volume)
            .delay(handler.flags?.audio?.a01?.delay)
            .play()
        return;
    } else if (handler.isDisabled) {
        return;
    }
    */

    const isCustom = handler.isCustomized;
    const isAutorec = handler.autorecObject;
    let aaTemplateHook;

    //const animationData = isCustom ? await AAanimationData._getAnimationData(handler) : await AAanimationData._getAnimationData(isAutorec)
    if (isCustom || (isAutorec && !game.settings.get("autoanimations", "disableAutoRec"))) {

        let animType = isCustom ? handler.animType : isAutorec.menu;
        let presetType = isCustom ? handler.flags?.preset?.presetType : isAutorec.presetType;
        if (!isCustom && animType === 'aefx') {
            animType = isAutorec.animType;
            if (animType === 'preset') {
                presetType = isAutorec.menuType;
            }
        }
        if (!isCustom && animType === 'aefx' && animType === 'preset') {
            presetType = isAutorec.presetType;
        }
        const targets = handler.allTargets?.length ?? 0;
        const animationData = isCustom ? await AAAnimationData._getAnimationData(handler) : await AAAnimationData._getAnimationData(handler, isAutorec);
        if (!isCustom && isAutorec) {
            if (animationData.primary.soundOnly.enable || animationData.primary.macro.playWhen === "2") {
                const primaryData = animationData.primary;
                const macroData = primaryData.macro;

                let aaSeq = new Sequence();
                let play = false;

                if (animType === 'templatefx' || (animType === 'preset' && presetType === 'fireball') || (animType === 'preset' && presetType === 'thunderwave')) {
                    switch (game.system.id) {
                        case "dnd5e":
                        case "pf2e":
                        case "sw5e":
                        case "swade":
                            if (game.modules.get("mars-5e")?.active) {
                                autoOnlyData()
                            } else {
                                aaTemplateHook = Hooks.once("createMeasuredTemplate", (config) => {
                                    autoOnlyData(config)
                                });
                                setTimeout(killHook, 30000)
                            }
                            break;
                        default:
                            autoOnlyData(config)
                    }
                    return;
                } else {
                    autoOnlyData()
                    return;
                }
                function autoOnlyData(config) {
                    if (primaryData.soundOnly.enable && primaryData.soundOnly.file) {
                        play = true;
                        aaSeq.sound()
                            .file(primaryData.soundOnly.file, true)
                            .volume(primaryData.soundOnly.volume)
                            .delay(primaryData.soundOnly.delay)
                    }

                    if (primaryData.playMacro && macroData.playWhen === '2') {
                        play = true;
                        handler.templateData = config;
                        let userData = macroData.args;
                        aaSeq.macro(macroData.name, handler.workflow, handler, userData)
                        //aaSeq.play()
                    }
                    if (play) { aaSeq.play() }
                }
            }
        }

        switch (animType) {
            case "melee":
                if (targets === 0) {
                    Hooks.callAll("aa.animationEnd", handler.sourceToken, "no-target");
                    if (aaDebug) { aaDebugger("Melee Animation End", "NO TARGETS") }
                    return;
                }
                Hooks.callAll("aa.preAnimationStart", handler.sourceToken);
                animationSeq.meleeSeq(handler, animationData);
                break;
            case "range":
                if (targets === 0) {
                    Hooks.callAll("aa.animationEnd", handler.sourceToken, "no-target");
                    if (aaDebug) { aaDebugger("Range Animation End", "NO TARGETS") }
                    return;
                }
                Hooks.callAll("aa.preAnimationStart", handler.sourceToken);
                animationSeq.rangeSeq(handler, animationData);
                break;
            case "ontoken":
                Hooks.callAll("aa.preAnimationStart", handler.sourceToken);
                animationSeq.ontokenSeq(handler, animationData);
                break;
            case "templatefx":
                //some do not need hook on template, depends on when damage is rolled
                switch (game.system.id) {
                    case "a5e":
                    case "dnd5e":
                    case "pf2e":
                    case "sw5e":
                    case "tormenta20":
                    case "swade":
                        if (game.modules.get("mars-5e")?.active) {
                            animationSeq.templateSeq(handler, animationData, config);
                        } else {
                            aaTemplateHook = Hooks.once("createMeasuredTemplate", (config) => {
                                animationSeq.templateSeq(handler, animationData, config);
                            });
                            setTimeout(killHook, 30000)
                        }
                        break;
                    default:
                        animationSeq.templateSeq(handler, animationData);
                }
                break;
            case "aura":
                animationSeq.auraSeq(handler, animationData)
                break;
            case "preset":
                switch (presetType) {
                    case "bardicinspiration":
                        animationSeq.biSeq(handler, animationData);
                        break;
                    case "shieldspell":
                        animationSeq.shieldSeq(handler, animationData);
                        break;
                    case "huntersmark":
                        animationSeq.hmSeq(handler, animationData)
                        break;
                    case "dualattach":
                        animationSeq.dualSeq(handler, animationData)
                        break;
                    case "sneakattack":
                        animationSeq.saSeq(handler, animationData);
                        break;
                    case "bless":
                        animationSeq.blessSeq(handler, animationData);
                        break;
                    case "teleportation":
                        animationSeq.teleportationSeq(handler, animationData)
                        break;
                    case "thunderwave":
                        switch (game.system.id) {
                            case "dnd5e":
                            case "pf2e":
                            case "sw5e":
                            case "swade":
                                if (game.modules.get("mars-5e")?.active) {
                                    animationSeq.twSeq(handler, animationData, config);
                                } else {
                                    aaTemplateHook = Hooks.once("createMeasuredTemplate", (config) => {
                                        animationSeq.twSeq(handler, animationData, config);
                                    });
                                    setTimeout(killHook, 30000)
                                }
                                break;
                            default:
                                animationSeq.twSeq(handler, animationData);
                        }
                        break;
                    case "fireball":
                        switch (game.system.id) {
                            case "dnd5e":
                            case "pf2e":
                            case "sw5e":
                            case "swade":
                                if (game.modules.get("mars-5e")?.active/* || game.modules.get('midi-qol')?.active*/) {
                                    animationSeq.fireballSeq(handler, animationData);
                                } else {
                                    aaTemplateHook = Hooks.once("createMeasuredTemplate", (config) => {
                                        animationSeq.fireballSeq(handler, animationData, config);
                                    });
                                    setTimeout(killHook, 30000)
                                }
                                break;
                            default:
                                animationSeq.fireballSeq(handler, animationData);
                        }
                        break;
                }
                break;
        }
    }

    function killHook() {
        Hooks.off("createMeasuredTemplate", aaTemplateHook)
    }
}
