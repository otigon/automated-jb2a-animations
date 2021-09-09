import { AAITEMCHECK, AAITEMCHECKFREE } from "../animation-functions/item-arrays.js";
import thunderwaveAuto from "../animation-functions/thunderwave.js";
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
import { findObjectByName, autorecNameCheck, rinseName, getAllNames } from "../custom-recognition/autoFunctions.js";

const wait = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

function moduleIncludes(test) {
    return !!game.modules.get(test);
}
async function itemSound(handler) {
    let audio = handler.allSounds.item;
    if (handler.itemSound) {
        await wait(audio.delay);
        AudioHelper.play({ src: audio.file, volume: audio.volume, autoplay: true, loop: false }, true);
    }
}
/*
function getAllNames(obj, type) {
    const nameArray = []
    try {Object.keys(obj[type]).length} 
    catch (exception) {return nameArray}
    const arrayLength = Object.keys(obj[type]).length
    for (var i = 0; i < arrayLength; i++) {
        nameArray.push(obj[type][i].name.toLowerCase())
    }
    return nameArray;
}

function getAllTheNames(obj) {
    const nameArray = []
    const keys = Object.keys(obj)
    const keyLength = keys.length
    for (var i = 0; i < keyLength; i++) {
        var arrayLength = Object.keys(obj[keys[i]]).length
        var currentObject = obj[keys[i]]
        for (var k = 0; k < arrayLength; k++) {
            nameArray.push(currentObject[k].name.toLowerCase())
        }
    }
    return nameArray;
}

function findObjectByName(data, type, name) {
    return Object.values(data[type]).filter(section => {
        return section.name.toLowerCase() === (name.toLowerCase()) ? section : "";
    })
}

function findObjectByNameFull(data, name) {
    const keys = Object.keys(data)
    const keyLength = keys.length
    let newObject;
    for (var i = 1; i < keyLength; i++) {
        var currentObject = data[keys[i]]
        console.log(currentObject)
        newObject = Object.values(currentObject).filter(section => {
            return section.name.toLowerCase() === (name.toLowerCase()) ? section : "";
        })
        //console.log(newObject)
        if (newObject.length === 1) {return newObject}
    }
}

function autorecNameCheck(nameArray, name) {
    const arrayLength = nameArray.length;
    let nameFound = false;
    for (var i = 0; i < arrayLength; i++) {
        if (nameArray[i].toLowerCase() === name) {
            nameFound = true;
        }
    }
    //console.log(nameFound)
    return nameFound;
}

function rinseName(oldName) {
    let newName = oldName.replace(/[+1]|[+2]|[+3]/gi, function (x) {
        return "";
    });
    newName = newName.trim("\s+$/g", "")
    return newName;
}
*/
export async function trafficCop(handler) {
    //console.log(autoRecSettings)
    const itemArray = moduleIncludes("jb2a_patreon") ? AAITEMCHECK : AAITEMCHECKFREE;
    if (handler.itemSound) {
        itemSound(handler);
    }
    if (handler.animKill) { return; }
    //const itemName = handler.convertedName;
    const animName = handler.animName;
    const animType = handler.animType;
    const override = handler.animOverride;
    const targets = handler.allTargets?.length ?? 0;
    if (override) {
        switch (animType) {
            case "t2":
            case "t3":
                if (targets === 0) {
                    Hooks.callAll("aa.animationEnd", handler.actorToken, "no-target");
                    return;
                }
                Hooks.callAll("aa.preAnimationStart", handler.actorToken);
                meleeAnimation(handler);
                break;
            case "t4":
                if (targets === 0) {
                    Hooks.callAll("aa.animationEnd", handler.actorToken, "no-target");
                    return;
                }
                Hooks.callAll("aa.preAnimationStart", handler.actorToken);
                rangedAnimations(handler);
                break;
            case "t5":
                if (targets === 0) {
                    Hooks.callAll("aa.animationEnd", handler.actorToken, "no-target");
                    return;
                }
                Hooks.callAll("aa.preAnimationStart", handler.actorToken);
                onTokenAnimation(handler);
                break;
            case "t6":
                if (targets === 0) {
                    Hooks.callAll("aa.animationEnd", handler.actorToken, "no-target");
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
            const autoRecSettings = game.settings.get('autoanimations', 'aaAutorec');
            //const fullArray = getAllTheNames(autoRecSettings)
            const autoName = rinseName(handler.itemName);
            /*
            if (!autorecNameCheck(fullArray, autoName)) {
                return;
            }
            
            //const autoObject = findObjectByNameFull(autoRecSettings, autoName)
            //console.log(autoObject)
            const nameArrays = {
                melee: getAllNames(autoRecSettings, 'melee'),
                range: getAllNames(autoRecSettings, 'range'),
                static: getAllNames(autoRecSettings, 'static'),
                templates: getAllNames(autoRecSettings, 'templates'),
                auras: getAllNames(autoRecSettings, 'auras'),
            }
            */
            switch (true) {
                case autorecNameCheck(getAllNames(autoRecSettings, 'melee'), autoName):
                    if (targets === 0) {
                        Hooks.callAll("aa.animationEnd", handler.actorToken, "no-target");
                        return;
                    }
                    Hooks.callAll("aa.preAnimationStart", handler.actorToken);
                    const meleeAutoObject = findObjectByName(autoRecSettings, 'melee', autoName);
                    meleeAnimation(handler, meleeAutoObject);
                    break;
                case autorecNameCheck(getAllNames(autoRecSettings, 'range'), autoName):
                    if (targets === 0) {
                        Hooks.callAll("aa.animationEnd", handler.actorToken, "no-target");
                        return;
                    }
                    Hooks.callAll("aa.preAnimationStart", handler.actorToken);
                    const rangeAutoObject = findObjectByName(autoRecSettings, 'range', autoName);
                    rangedAnimations(handler, rangeAutoObject);
                    break;
                case autorecNameCheck(getAllNames(autoRecSettings, 'static'), autoName):
                    Hooks.callAll("aa.preAnimationStart", handler.actorToken);
                    const staticAutoObject = findObjectByName(autoRecSettings, 'static', autoName);
                    staticAnimation(handler, staticAutoObject);
                    break;
                case autorecNameCheck(getAllNames(autoRecSettings, 'templates'), autoName):
                    const templateAutoObject = findObjectByName(autoRecSettings, 'templates', autoName);
                    Hooks.once("createMeasuredTemplate", () => {
                        templateAnimation(handler, templateAutoObject);
                    })
                    break;
                case autorecNameCheck(getAllNames(autoRecSettings, 'auras'), autoName):
                    const auraAutoObject = findObjectByName(autoRecSettings, 'auras', autoName);
                    ctaCall(handler, auraAutoObject);
                    break;
                case autorecNameCheck(getAllNames(autoRecSettings, 'preset'), autoName):
                    const presetAutoObject = findObjectByName(autoRecSettings, 'preset', autoName);
                    console.log(presetAutoObject)
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
                    }
                    break;
            }
        }
    }
}
