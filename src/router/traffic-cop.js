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
//credit to Steve Holgado on Stack Overflow
function findAllByKey(obj, keyToFind) {
    return Object.entries(obj)
        .reduce((acc, [key, value]) => (key === keyToFind)
            ? acc.concat(value)
            : (typeof value === 'object')
                ? acc.concat(findAllByKey(value, keyToFind))
                : acc
            , [])
}

function getAllNames(obj, type) {
    const nameArray = []
    let arrayLength = Object.keys(obj[type]).length
    for (var i = 0; i < arrayLength; i++) {
        nameArray.push(obj[type][i].name.toLowerCase())
    }
    return nameArray;
}

function findObject(data, type, itemName) {
    return Object.values(data[type]).filter(section => {
        return section.name.toLowerCase().includes(itemName.toLowerCase()) ? section : "";
    })

}

export async function trafficCop(handler) {
    const autoRecSettings = game.settings.get('autoanimations', 'aaAutorec');
    console.log(autoRecSettings)

    //console.log(findObject(autoRecSettings.melee, "Greatsword"))
    //const meleeLength = Object.keys(autoRecSettings.melee).length;
    //const meleeNameArray = findAllByKey(autoRecSettings.melee, 'name');
    //console.log(handler.item.name)
    //console.log(findAllByKey(autoRecSettings.melee, 'name'))
    const itemArray = moduleIncludes("jb2a_patreon") ? AAITEMCHECK : AAITEMCHECKFREE;
    if (handler.itemSound) {
        itemSound(handler);
    }
    if (handler.animKill) { return; }
    const itemName = handler.convertedName;
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
            const nameArrays = {
                melee: getAllNames(autoRecSettings, 'melee'),
                range: [...getAllNames(autoRecSettings, 'range'), ...getAllNames(autoRecSettings, 'attackspell')],
            }
            //console.log(nameArrays)
            //console.log(findAllByKey(autoRecSettings, "name"))
            switch (true) {
                case itemName === "thunderwave":
                    switch (true) {
                        case (game.modules.get("midi-qol")?.active && (handler.autoDamage === "none")):
                            thunderwaveAuto(handler);
                            break;
                        default:
                            Hooks.once("createMeasuredTemplate", () => {
                                thunderwaveAuto(handler);
                            })
                    }
                    break;
                //case nameArrays.melee.includes(handler.itemName):
                case nameArrays.melee.some(el => handler.itemName.includes(el)):
                    if (targets === 0) {
                        Hooks.callAll("aa.animationEnd", handler.actorToken, "no-target");
                        return;
                    }
                    Hooks.callAll("aa.preAnimationStart", handler.actorToken);
                    const meleeAutoObject = findObject(autoRecSettings, 'melee', handler.item.name)
                    console.log(meleeAutoObject)                
                    meleeAnimation(handler, meleeAutoObject);
                    break;
                case nameArrays.range.includes(handler.itemName):
                    //case itemArray.spellattack.includes(itemName):
                    //case itemArray.ranged.includes(itemName):
                    if (targets === 0) {
                        Hooks.callAll("aa.animationEnd", handler.actorToken, "no-target");
                        return;
                    }
                    Hooks.callAll("aa.preAnimationStart", handler.actorToken);
                    const rangeAutoObject = findObject(autoRecSettings, 'range', handler.item.name).length === 0 ? findObject(autoRecSettings, 'attackspell', handler.item.name) : findObject(autoRecSettings, 'range', handler.item.name)
                    console.log(rangeAutoObject)                
                    rangedAnimations(handler, rangeAutoObject);
                    break;
                case itemArray.healing.includes(itemName):
                case itemArray.creatureattack.includes(itemName):
                    Hooks.callAll("aa.preAnimationStart", handler.actorToken);
                    onTokenAnimation(handler);
                    break;
            }
        }
    }
}
