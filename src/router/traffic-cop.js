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

const wait = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

export async function trafficCop(handler) {
    const aaDebug = game.settings.get("autoanimations", "debug")

    if (game.Levels3DPreview?._active) {

        if (handler.flags?.levels3d?.type) {
            if (aaDebug) { aaDebugger("Beginning Particle Animation for Custom Item Setting") }
            particleEffects(handler);
            return;
        }

        if (!game.settings.get("autoanimations", "disableAutoRec")) {
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

    if (handler.soundNoAnimation) {
        new Sequence()
            .sound()
            .file(handler.flags?.audio?.a01?.file)
            .volume(handler.flags?.audio?.a01?.volume)
            .delay(handler.flags?.audio?.a01?.delay)
            .play()
        return;
    } else if (handler.animKill) {
        return;
    }
    const animType = handler.animType;
    const animName = handler.flags?.animation;
    const override = handler.animOverride;
    const targets = handler.allTargets?.length ?? 0;
    let aaTemplateHook;
    if (override) {
        const animationData = await AAanimationData._getAnimationData(handler)
        if (aaDebug) { aaDebugger("Custom Switch Beginning", [animName, animType, override, targets, handler.flags]) }
        switch (animType) {
            case "melee":
                if (targets === 0) {
                    Hooks.callAll("aa.animationEnd", handler.actorToken, "no-target");
                    if (aaDebug) { aaDebugger("Melee Animation End", "NO TARGETS") }
                    return;
                }
                Hooks.callAll("aa.preAnimationStart", handler.actorToken);
                meleeAnimation(handler, animationData);
                break;
            case "range":
                if (targets === 0) {
                    Hooks.callAll("aa.animationEnd", handler.actorToken, "no-target");
                    if (aaDebug) { aaDebugger("Range Animation End", "NO TARGETS") }
                    return;
                }
                Hooks.callAll("aa.preAnimationStart", handler.actorToken);
                rangedAnimations(handler, animationData);
                break;
            case "static":
                Hooks.callAll("aa.preAnimationStart", handler.actorToken);
                staticAnimation(handler, animationData);
                break;
            case "template":
                //some do not need hook on template, depends on when damage is rolled
                switch (game.system.id) {
                    case "dnd5e":
                    case "pf2e":
                        if (game.modules.get("mars-5e")?.active) {
                            templateAnimation(handler, animationData);
                        } else {
                            aaTemplateHook = Hooks.once("createMeasuredTemplate", () => {
                                templateAnimation(handler, animationData);
                            });
                            setTimeout(killHook, 30000)
                        }
                        break;
                    default:
                        templateAnimation(handler, animationData);
                }
                break;
            case "aura":
                auras(handler, animationData)
                break;
            case "preset":
                switch (animName) {
                    case "bardicinspiration":
                        bardicInspiration(handler);
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
                    case "fireball":
                        switch (game.system.id) {
                            case "dnd5e":
                            case "pf2e":
                                if (game.modules.get("mars-5e")?.active/* || game.modules.get('midi-qol')?.active*/) {
                                    fireball(handler);
                                } else {
                                    aaTemplateHook = Hooks.once("createMeasuredTemplate", () => {
                                        fireball(handler);
                                    });
                                    setTimeout(killHook, 30000)
                                }
                                break;
                            default:
                                fireball(handler);
                        }
                        break;
                }
                break;
        }
    } else {
        if (!game.settings.get("autoanimations", "disableAutoRec")) {
            if (aaDebug) { aaDebugger("Automatic Recognition Beginning") }
            //const autoRecSettings = game.settings.get('autoanimations', 'aaAutorec');
            //const autoNameList = AutorecFunctions._getAllTheNames(autoRecSettings);//gets ALL names in Autorec sorted longest to shortest
            //const isAuto = AutorecFunctions._autorecNameCheck(autoNameList, autoName); //checks autoNameList against current name
            const autoName = AutorecFunctions._rinseName(handler.itemName); //removes all spaces in the name
            const isAuto = AutorecFunctions.foundInAutorec(handler.autorecSettings, autoName);

            if (isAuto) {
                //const autoObject = AutorecFunctions._findObjectFromArray(handler.autorecSettings, autoName) // combines Autorec menus and sorts by name length, returns object
                const autoObject = handler.autorecObject;
                const animationData = await AAanimationData._getAnimationData(handler, autoObject)
                switch (autoObject.menuSection) {
                    case 'melee':
                        if (targets === 0) {
                            Hooks.callAll("aa.animationEnd", handler.actorToken, "no-target");
                            if (aaDebug) { aaDebugger("Melee Animation End", "NO TARGETS") }
                            return;
                        }
                        Hooks.callAll("aa.preAnimationStart", handler.actorToken);
                        if (aaDebug) { aaDebugger("Pre Melee Animation", autoObject) }
                        meleeAnimation(handler, animationData);
                        break;
                    case 'range':
                        if (targets === 0) {
                            Hooks.callAll("aa.animationEnd", handler.actorToken, "no-target");
                            if (aaDebug) { aaDebugger("Range Animation End", "NO TARGETS") }
                            return;
                        }
                        Hooks.callAll("aa.preAnimationStart", handler.actorToken);
                        if (aaDebug) { aaDebugger("Pre Range Animation", autoObject) }
                        rangedAnimations(handler, animationData);
                        break;
                    case 'static':
                        Hooks.callAll("aa.preAnimationStart", handler.actorToken);
                        if (aaDebug) { aaDebugger("Pre Static Animation", autoObject) }
                        staticAnimation(handler, animationData);
                        break;
                    case 'templates':
                        if (aaDebug) { aaDebugger("Pre Template Animation", autoObject) }
                        aaTemplateHook = Hooks.once("createMeasuredTemplate", () => {
                            templateAnimation(handler, animationData);
                        })
                        setTimeout(killHook, 30000)
                        break;
                    case 'auras':
                        if (aaDebug) { aaDebugger("Pre CTA Animation", autoObject) }
                        auras(handler, animationData)
                        break;
                    case 'preset':
                        if (aaDebug) { aaDebugger("Pre Preset Animation", autoObject) }
                        switch (autoObject.animation) {
                            case 'bardicinspiration':
                                bardicInspiration(handler, autoObject);
                                break;
                            case 'bless':
                                bless(handler, animationData);
                                break;
                            case 'shieldspell':
                                shieldSpell(handler, animationData);
                                break;
                            case 'huntersmark':
                                huntersMark(handler, animationData);
                                break;
                            case "dualattach":
                                dualAttach(handler, animationData)
                                break;            
                            case 'teleportation':
                                teleportation(handler, animationData);
                                break;
                            case 'sneakattack':
                                sneakAttack(handler, animationData);
                                break;
                            case "fireball":
                                switch (game.system.id) {
                                    case "dnd5e":
                                    case "pf2e":
                                        if (game.modules.get("mars-5e")?.active/* || game.modules.get('midi-qol')?.active*/) {
                                            fireball(handler, autoObject, true);
                                        } else {
                                            aaTemplateHook = Hooks.once("createMeasuredTemplate", () => {
                                                fireball(handler, autoObject, true);
                                            });
                                            setTimeout(killHook, 30000)
                                        }
                                        break;
                                    default:
                                        fireball(handler, autoObject, true);
                                }
                                break;
                        }
                        break;
                }
            } else {
                if (aaDebug) { aaDebugger("No Automatic Recognition Found") }
            }
        }
    }
    function killHook() {
        Hooks.off("createMeasuredTemplate", aaTemplateHook)
    }
}
