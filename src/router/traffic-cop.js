//import { AAITEMCHECK, AAITEMCHECKFREE } from "../animation-functions/item-arrays.js";
//import thunderwaveAuto from "../animation-functions/thunderwave.js";
import { huntersMark } from "../animation-functions/custom-sequences/hunters-mark.js";
import { bardicInspiration } from "../animation-functions/custom-sequences/bardic-inspiration.js";
import { rangedAnimations } from "../animation-functions/rangedAnimation.js";
import { meleeAnimation } from "../animation-functions/meleeAnimation.js";
import { teleportation } from "../animation-functions/teleportation.js";
import { templateAnimation } from "../animation-functions/templateAnimation.js";
import { shieldSpell } from "../animation-functions/custom-sequences/shield.js";
import { sneakAttack } from "../animation-functions/custom-sequences/sneak-Attack.js";
import { bless } from "../animation-functions/custom-sequences/bless.js";
import { staticAnimation } from "../animation-functions/staticAnimation.js";
import { auras } from "../animation-functions/aura-attach.js";
//import { findObjectByName, autorecNameCheck, rinseName, getAllNames } from "../custom-recognition/autoFunctions.js";
import { aaDebugger } from "../constants/constants.js";
import { AutorecFunctions } from "../aa-classes/autorecFunctions.js";
import { fireball } from "../animation-functions/custom-sequences/fireball.js";
import { AAanimationData } from "../aa-classes/animation-data.js";
import { particleEffects } from "../animation-functions/particleSystem.js";
import { dualAttach } from "../animation-functions/custom-sequences/dual-attach.js";
import { thunderwaveAuto } from "../animation-functions/thunderwave.js";

const wait = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

export async function trafficCop(handler) {
    const aaDebug = game.settings.get("autoanimations", "debug")

    if (game.Levels3DPreview?._active) {

        if (handler.flags?.levels3d?.type) {
            if (aaDebug) { aaDebugger("Beginning Particle Animation for Custom Item Setting") }
            particleEffects(handler);
            return;
        } else if (!game.settings.get("autoanimations", "disableAutoRec")) {
            if (aaDebug) { aaDebugger("Automatic Recognition Beginning for Particle System") }
            const autoName = AutorecFunctions._rinseName(handler.itemName); //removes all spaces in the name
            const isAuto = AutorecFunctions.foundInAutorec(handler.autorecSettings, autoName);
            if (isAuto) {
                const autoObject = handler.autorecObject;
                particleEffects(handler, autoObject);
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
                aaSeq.macro(handler.flags?.macro?.name, handler.workflow, handler, ...userData)
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
        let animType = isCustom ? handler.animType : isAutorec.menuSection;
        let presetType = isCustom ? handler.flags?.animation : isAutorec.animation;
        if (!isCustom && animType === 'aefx') {
            animType = isAutorec.aeType;
            if (animType === 'preset') {
                presetType = isAutorec.menuType;
            }
        }
        if (!isCustom && animType === 'aefx' && animType === 'preset') {
            presetType = isAutorec.menuType;
        }
        const targets = handler.allTargets?.length ?? 0;
        const animationData = isCustom ? await AAanimationData._getAnimationData(handler) : await AAanimationData._getAnimationData(handler, isAutorec);
        if (!isCustom && isAutorec) {
            if (animationData.primary.soundOnly.enable || animationData.primary.macro.playWhen === "2") {
                const primaryData = animationData.primary;
                const macroData = primaryData.macro;

                let aaSeq = new Sequence();
                let play = false;

                if (animType === 'templates' || (animType === 'preset' && presetType === 'fireball') || (animType === 'preset' && presetType === 'thunderwave')) {
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
                        aaSeq.macro(macroData.name, handler.workflow, handler, [...userData])
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
                meleeAnimation(handler, animationData);
                break;
            case "range":
                if (targets === 0) {
                    Hooks.callAll("aa.animationEnd", handler.sourceToken, "no-target");
                    if (aaDebug) { aaDebugger("Range Animation End", "NO TARGETS") }
                    return;
                }
                Hooks.callAll("aa.preAnimationStart", handler.sourceToken);
                rangedAnimations(handler, animationData);
                break;
            case "static":
                Hooks.callAll("aa.preAnimationStart", handler.sourceToken);
                staticAnimation(handler, animationData);
                break;
            case "template":
            case "templates":
                //some do not need hook on template, depends on when damage is rolled
                switch (game.system.id) {
                    case "dnd5e":
                    case "pf2e":
                    case "sw5e":
                    case "tormenta20":
                    case "swade":
                        if (game.modules.get("mars-5e")?.active) {
                            templateAnimation(handler, animationData, config);
                        } else {
                            aaTemplateHook = Hooks.once("createMeasuredTemplate", (config) => {
                                templateAnimation(handler, animationData, config);
                            });
                            setTimeout(killHook, 30000)
                        }
                        break;
                    default:
                        templateAnimation(handler, animationData);
                }
                break;
            case "aura":
            case "auras":
                auras(handler, animationData)
                break;
            case "preset":
                switch (presetType) {
                    case "bardicinspiration":
                        bardicInspiration(handler, animationData);
                        break;
                    case "shieldspell":
                        shieldSpell(handler, animationData);
                        break;
                    case "huntersmark":
                        huntersMark(handler, animationData)
                        break;
                    case "dualattach":
                        dualAttach(handler, animationData)
                        break;
                    case "sneakattack":
                        sneakAttack(handler, animationData);
                        break;
                    case "bless":
                        bless(handler, animationData);
                        break;
                    case "teleportation":
                        teleportation(handler, animationData)
                        break;
                    case "thunderwave":
                        switch (game.system.id) {
                            case "dnd5e":
                            case "pf2e":
                            case "sw5e":
                            case "swade":
                                if (game.modules.get("mars-5e")?.active) {
                                    thunderwaveAuto(handler, animationData, config);
                                } else {
                                    aaTemplateHook = Hooks.once("createMeasuredTemplate", (config) => {
                                        thunderwaveAuto(handler, animationData, config);
                                    });
                                    setTimeout(killHook, 30000)
                                }
                                break;
                            default:
                                thunderwaveAuto(handler, animationData);
                        }
                        break;
                    case "fireball":
                        switch (game.system.id) {
                            case "dnd5e":
                            case "pf2e":
                            case "sw5e":
                            case "swade":
                                if (game.modules.get("mars-5e")?.active/* || game.modules.get('midi-qol')?.active*/) {
                                    fireball(handler, animationData);
                                } else {
                                    aaTemplateHook = Hooks.once("createMeasuredTemplate", (config) => {
                                        fireball(handler, animationData, config);
                                    });
                                    setTimeout(killHook, 30000)
                                }
                                break;
                            default:
                                fireball(handler, animationData);
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
