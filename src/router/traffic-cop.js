import { AAITEMCHECK, AAITEMCHECKFREE } from "../animation-functions/item-arrays.js";

export async function trafficCop(handler) {
    const itemArray = moduleIncludes("jb2a_patreon") ? AAITEMCHECK : AAITEMCHECKFREE;
    if (handler.itemSound) {
        itemSound(handler);
    }
    const itemName = handler.convertedName;
    const animName = handler.animName;
    const animType = handler.animType;
    console.log(itemName)
    switch (true) {
        case animType === "t8" && handler.animOverride:
            //some do not need hook on template, depends on when damage is rolled
            Hooks.once("createMeasuredTemplate", (msg) => {
                templateAnimation(handler, msg);
            })
            break;
        case animType === "t9" && handler.animOverride:
        case animType === "t10" && handler.animOverride:
            explodeOnToken(handler);
            break;
        // aura effects, generally don't have attack/damage rolls
        case animType === "t11" && handler.animOverride:
            if (game.modules.get("Custom-Token-Animations")?.active) {
                ctaCall(handler);
            } else { ui.notifications.error("Custom Token Animations module must be Active") }
            break;
        case animType === "t12" && handler.animOverride:
            teleportation(handler);
            break;
        case animType === "t13" && handler.animOverride:
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
        case itemArray.melee.includes(itemName):
            meleeAnimation(handler);
            break;
        case itemArray.healing.includes(itemName):
        case itemArray.creatureattack.includes(itemName):
            onTokenAnimation(handler);
            break;
        case itemArray.spellattack.includes(itemName):
        case itemArray.ranged.includes(itemName):
            rangedAnimations(handler);
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
    }
}
