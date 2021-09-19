//import { AAITEMCHECK, AAITEMCHECKFREE } from "../animation-functions/item-arrays.js";
//import thunderwaveAuto from "../animation-functions/thunderwave.js";
import ctaCall from "../animation-functions/CTAcall.js";
import huntersMark from "../animation-functions/custom-sequences/hunters-mark.js";
import bardicInspiration from "../animation-functions/custom-sequences/bardic-inspiration.js";
import { rangedAnimations } from "../animation-functions/rangedAnimation.js";
import { meleeAnimation } from "../animation-functions/meleeAnimation.js";
import { onTokenAnimation } from "../animation-functions/onTokenAnimation.js";
import { explodeOnToken } from "../animation-functions/explodeOnToken.js";
import { teleportation } from "../animation-functions/teleportation.js";
import { templateAnimation } from "../animation-functions/templateAnimation.js";
import { shieldSpell } from "../animation-functions/custom-sequences/shield.js";
import { sneakAttack } from "../animation-functions/custom-sequences/sneak-Attack.js";
import { bless } from "../animation-functions/custom-sequences/bless.js";
import { staticAnimation } from "../animation-functions/staticAnimation.js";
//import { findObjectByName, autorecNameCheck, rinseName, getAllNames } from "../custom-recognition/autoFunctions.js";
import { aaDebugger } from "../constants/constants.js";
import { AutorecFunctions} from "../aa-classes/autorecFunctions.js"

const wait = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

async function itemSound(handler) {
    let audio = handler.allSounds.item;
    if (handler.itemSound) {
        await wait(audio.delay);
        AudioHelper.play({ src: audio.file, volume: audio.volume, autoplay: true, loop: false }, true);
    }
}

export async function trafficCop(handler) {
    const aaDebug = game.settings.get("autoanimations", "debug")
    if (handler.itemSound) {
        itemSound(handler);
    }
    if (handler.animKill) {
        if (aaDebug) { aaDebugger("Animations Disabled on Item") }
        return;
    }
    //const itemName = handler.convertedName;
    const animName = handler.animName;
    const animType = handler.animType;
    const override = handler.animOverride;
    const targets = handler.allTargets?.length ?? 0;
    if (override) {
        if (aaDebug) { aaDebugger("Custom Switch Beginning", [animName, animType, override, targets]) }
        switch (animType) {
            case "t2":
            case "t3":
                if (targets === 0) {
                    Hooks.callAll("aa.animationEnd", handler.actorToken, "no-target");
                    if (aaDebug) { aaDebugger("Melee Animation End", "NO TARGETS") }
                    return;
                }
                Hooks.callAll("aa.preAnimationStart", handler.actorToken);
                meleeAnimation(handler);
                break;
            case "t4":
                if (targets === 0) {
                    Hooks.callAll("aa.animationEnd", handler.actorToken, "no-target");
                    if (aaDebug) { aaDebugger("Range Animation End", "NO TARGETS") }
                    return;
                }
                Hooks.callAll("aa.preAnimationStart", handler.actorToken);
                rangedAnimations(handler);
                break;
            case "t5":
                if (targets === 0) {
                    Hooks.callAll("aa.animationEnd", handler.actorToken, "no-target");
                    if (aaDebug) { aaDebugger("Creature Animation End", "NO TARGETS") }
                    return;
                }
                Hooks.callAll("aa.preAnimationStart", handler.actorToken);
                onTokenAnimation(handler);
                break;
            case "t6":
                if (targets === 0) {
                    Hooks.callAll("aa.animationEnd", handler.actorToken, "no-target");
                    if (aaDebug) { aaDebugger("Spell Animation End", "NO TARGETS") }
                    return;
                }
                Hooks.callAll("aa.preAnimationStart", handler.actorToken);
                rangedAnimations(handler);
                break;
            case "t7":
                onTokenAnimation(handler);
                break;
            case "t8":
                if (game.modules.get("midi-qol")?.active) { return; }
                //some do not need hook on template, depends on when damage is rolled
                switch (game.system.id) {
                    case "dnd5e":
                    case "pf2e":
                        if (game.modules.get("mars-5e")?.active) {
                            templateAnimation(handler);
                        } else {
                            Hooks.once("createMeasuredTemplate", () => {
                                templateAnimation(handler);
                            });
                        }
                        break;
                    default:
                        templateAnimation(handler);
                }
                break;
            case "t9":
            case "t10":
                explodeOnToken(handler);
                break;
            case "t11":
                if (game.modules.get("Custom-Token-Animations")?.active) {
                    ctaCall(handler);
                } else { ui.notifications.error("Custom Token Animations module must be Active") }
                break;
            case "t12":
                teleportation(handler);
                break;
            case "t13":
                switch (animName) {
                    case "bardicinspiration":
                        bardicInspiration(handler);
                        break;
                    case "shieldspell":
                        shieldSpell(handler);
                        break;
                    case "huntersmark":
                        huntersMark(handler)
                        break;
                    case "sneakattack":
                        sneakAttack(handler);
                        break;
                    case "bless":
                        bless(handler);
                        break;
                }
                break;
        }
    } else {
        if (!game.settings.get("autoanimations", "disableAutoRec")) {
            if (aaDebug) { aaDebugger("Automatic Recognition Beginning") }
            const autoRecSettings = game.settings.get('autoanimations', 'aaAutorec');

            const autoName = AutorecFunctions._rinseName(handler.itemName);

            switch (true) {
                case AutorecFunctions._autorecNameCheck(AutorecFunctions._getAllNames(autoRecSettings, 'melee'), autoName):
                    if (targets === 0) {
                        Hooks.callAll("aa.animationEnd", handler.actorToken, "no-target");
                        if (aaDebug) { aaDebugger("Melee Animation End", "NO TARGETS") }
                        return;
                    }
                    Hooks.callAll("aa.preAnimationStart", handler.actorToken);
                    const meleeAutoObject = AutorecFunctions._findObjectByName(autoRecSettings, 'melee', autoName);
                    if (aaDebug) { aaDebugger("Pre Melee Animation", meleeAutoObject) }
                    meleeAnimation(handler, meleeAutoObject);
                    break;
                case AutorecFunctions._autorecNameCheck(AutorecFunctions._getAllNames(autoRecSettings, 'range'), autoName):
                    if (targets === 0) {
                        Hooks.callAll("aa.animationEnd", handler.actorToken, "no-target");
                        if (aaDebug) { aaDebugger("Range Animation End", "NO TARGETS") }
                        return;
                    }
                    Hooks.callAll("aa.preAnimationStart", handler.actorToken);
                    const rangeAutoObject = AutorecFunctions._findObjectByName(autoRecSettings, 'range', autoName);
                    if (aaDebug) { aaDebugger("Pre Range Animation", rangeAutoObject) }
                    rangedAnimations(handler, rangeAutoObject);
                    break;
                case AutorecFunctions._autorecNameCheck(AutorecFunctions._getAllNames(autoRecSettings, 'static'), autoName):
                    Hooks.callAll("aa.preAnimationStart", handler.actorToken);
                    const staticAutoObject = AutorecFunctions._findObjectByName(autoRecSettings, 'static', autoName);
                    if (aaDebug) { aaDebugger("Pre Static Animation", staticAutoObject) }
                    staticAnimation(handler, staticAutoObject);
                    break;
                case AutorecFunctions._autorecNameCheck(AutorecFunctions._getAllNames(autoRecSettings, 'templates'), autoName):
                    const templateAutoObject = AutorecFunctions._findObjectByName(autoRecSettings, 'templates', autoName);
                    if (aaDebug) { aaDebugger("Pre Template Animation", templateAutoObject) }
                    Hooks.once("createMeasuredTemplate", () => {
                        templateAnimation(handler, templateAutoObject);
                    })
                    break;
                case AutorecFunctions._autorecNameCheck(AutorecFunctions._getAllNames(autoRecSettings, 'auras'), autoName):
                    const auraAutoObject = AutorecFunctions._findObjectByName(autoRecSettings, 'auras', autoName);
                    if (aaDebug) { aaDebugger("Pre CTA Animation", auraAutoObject) }
                    ctaCall(handler, auraAutoObject);
                    break;
                case AutorecFunctions._autorecNameCheck(AutorecFunctions._getAllNames(autoRecSettings, 'preset'), autoName):
                    const presetAutoObject = AutorecFunctions._findObjectByName(autoRecSettings, 'preset', autoName);
                    if (aaDebug) { aaDebugger("Pre Preset Animation", presetAutoObject) }
                    switch (presetAutoObject[0].animation) {
                        case 'bardicinspiration':
                            bardicInspiration(handler, presetAutoObject);
                            break;
                        case 'bless':
                            bless(handler, presetAutoObject);
                            break;
                        case 'shieldspell':
                            shieldSpell(handler, presetAutoObject);
                            break;
                        case 'teleportation':
                            teleportation(handler, presetAutoObject)
                            break;
                        case 'sneakattack' :
                            sneakAttack(handler, presetAutoObject)
                            break;
                    }
                    break;
                default:
                    aaDebugger(aaDebug, "No Automatic Recognition Found");
            }
        }
    }
}
