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

export async function trafficCop(handler) {
    const itemArray = moduleIncludes("jb2a_patreon") ? AAITEMCHECK : AAITEMCHECKFREE;
    if (handler.itemSound) {
        itemSound(handler);
    }
    if (handler.animKill) { return; }
    const itemName = handler.convertedName;
    const animName = handler.animName;
    const animType = handler.animType;
    const override = handler.animOverride;
    //console.log(itemName)
    switch (true) {
        case itemArray.melee.includes(itemName):
            meleeAnimation(handler);
            break;
        case itemArray.spellattack.includes(itemName):
        case itemArray.ranged.includes(itemName):
            rangedAnimations(handler);
            break;
        case itemArray.healing.includes(itemName):
        case itemArray.creatureattack.includes(itemName):
            onTokenAnimation(handler);
            break;
        case animType === "t8" && override:
            if (game.modules.get("midi-qol")?.active) { return; }
            //some do not need hook on template, depends on when damage is rolled
            switch (game.system.id) {
                case "dnd5e":
                    if (game.modules.get("mars-5e")?.active) {
                        templateAnimation(handler);
                    } else {
                        Hooks.once("createMeasuredTemplate", () => {
                            templateAnimation(handler);
                        });
                    }
                    break;
                case "pf2e":
                    Hooks.once("createMeasuredTemplate", () => {
                        templateAnimation(handler);
                    });
                    break;
                default:
                    templateAnimation(handler);
            }
            break;
        case animType === "t9" && override:
        case animType === "t10" && override:
            explodeOnToken(handler);
            break;
        case animType === "t11" && override:
            if (game.modules.get("Custom-Token-Animations")?.active) {
                ctaCall(handler);
            } else { ui.notifications.error("Custom Token Animations module must be Active") }
            break;
        case animType === "t12" && override:
            teleportation(handler);
            break;
        case animType === "t13" && override:
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
        case itemName == "thunderwave":
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
        //case handler.itemSound:
        //itemSound(handler);
        //break;
    }
}
