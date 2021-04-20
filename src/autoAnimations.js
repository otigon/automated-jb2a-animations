import Dnd5Handler from "./system-handlers/dnd5-handler.js";
import MidiHandler from "./system-handlers/midi-handler.js";
import Pf1Handler from "./system-handlers/pf1-handler.js";
import Dnd35Handler from "./system-handlers/dnd35-handler.js";
import Tormenta20Handler from './system-handlers/tormenta20-handler.js';
import SwadeHandler from './system-handlers/swade-handler.js';
import { AnimationTab } from "./item-sheet-handlers/item-sheet-config.js";
import GeneralAnimHandler from "./system-handlers/generalAnim-handler.js";

import spellAttacks from "./animation-functions/attack-spells.js";
import meleeWeapons from "./animation-functions/melee-attacks.js";
import meleeRangeSwitch from "./animation-functions/melee-range-attacks.js";
import randomGenDmg from "./animation-functions/generic-damage.js";
import creatureAttacks from "./animation-functions/creature-attacks.js";
import rangedWeapons from "./animation-functions/ranged-weapons.js";
import thunderwaveAuto from "./animation-functions/thunderwave.js";
import shatterAuto from "./animation-functions/shatter.js";
import onTargetSpells from "./animation-functions/healing-spells.js";
import magicMissile from "./animation-functions/magic-missile.js";
import arrowOptionExplode from "./animation-functions/arrow.js";
import explodeTemplate from "./animation-functions/explosion-template.js";
import explodeOnTarget from "./animation-functions/explode-ontarget.js";
import castOnSelf from "./animation-functions/shield.js";
import selfCast from "./animation-functions/emanations.js";
import ctaCall from "./animation-functions/CTAcall.js";
import huntersMark from "./animation-functions/hunters-mark.js";

import ImagePicker from "./ImagePicker.js";

// just swap which of these two lines is commented to turn on/off all logging
//const log = console.log.bind(window.console);
const log = () => { };

Hooks.on('init', () => {
    game.settings.register("automated-jb2a-animations", "runonlyonce", { // game.setting.register("NameOfTheModule", "VariableName",
        name: game.i18n.format("AUTOANIM.initpopup_name"),                  // Register a module setting with checkbox
        hint: game.i18n.format("AUTOANIM.initpopup_hint"),               // Description of the settings
        scope: "world",                                    // This specifies a client-stored setting
        config: true,                                       // This specifies that the setting appears in the configuration view
        type: Boolean,
        default: false,                                     // The default value for the setting
    });
    game.settings.register("automated-jb2a-animations", "globaldelay", {
        name: game.i18n.format("AUTOANIM.globaldelay_name"),
        hint: game.i18n.format("AUTOANIM.globaldelay_hint"),
        scope: "world",
        config: true,
        default: 100,
        type: Number
    })
    game.settings.register("automated-jb2a-animations", "hideFromPlayers", { // game.setting.register("NameOfTheModule", "VariableName",
        name: game.i18n.format("AUTOANIM.animtab_name"),                  // Register a module setting with checkbox
        hint: game.i18n.format("AUTOANIM.animtab_hint"),               // Description of the settings
        scope: "world",                                    // This specifies a client-stored setting
        config: true,                                       // This specifies that the setting appears in the configuration view
        type: Boolean,
        default: false,                                     // The default value for the setting
    });
    game.settings.register("automated-jb2a-animations", "targetingAssist", {
        name: game.i18n.format("AUTOANIM.tarassist_name"),
        hint: game.i18n.format("AUTOANIM.tarassist_hint"),
        scope: "world",
        config: true,
        type: Boolean,
        default: false,
    });
    game.settings.register("automated-jb2a-animations", "tmfx", {
        name: game.i18n.format("AUTOANIM.tfmxenable_name"),
        hint: game.i18n.format("AUTOANIM.tfmxenable_hint"),
        scope: 'world',
        type: Boolean,
        default: false,
        config: true,
    });
    switch (game.system.id) {
        case "dnd5e":
            if (game.modules.get("midi-qol")?.active) {
                game.settings.register("automated-jb2a-animations", "playonhit", {
                    name: game.i18n.format("AUTOANIM.midionhit_name"),
                    hint: game.i18n.format("AUTOANIM.midionhit_hint"),
                    scope: 'world',
                    type: Boolean,
                    default: false,
                    config: true,
                });
                game.settings.register("automated-jb2a-animations", "playonmiss", {
                    name: game.i18n.format("AUTOANIM.midionmiss_name"),
                    hint: game.i18n.format("AUTOANIM.midionmiss_hint"),
                    scope: `world`,
                    type: Boolean,
                    default: false,
                    config: true,
                });
                game.settings.register("automated-jb2a-animations", "playonDamage", {
                    name: game.i18n.format("AUTOANIM.midiondmg_name"),
                    hint: game.i18n.format("AUTOANIM.midiondmg_hint"),
                    scope: 'world',
                    type: Boolean,
                    default: false,
                    config: true,
                    onChange: () => { window.location.reload() }
                });
                game.settings.register("automated-jb2a-animations", "EnableCritical", {
                    name: game.i18n.format("AUTOANIM.crithit_name"),
                    hint: game.i18n.format("AUTOANIM.crithit_hint"),
                    scope: 'world',
                    type: Boolean,
                    default: false,
                    config: true,
                    onchange: () => { window.location.reload() }
                });
                game.settings.register("automated-jb2a-animations", "CriticalAnimation", {
                    name: game.i18n.format("AUTOANIM.crithitAnim_name"),
                    scope: 'world',
                    type: ImagePicker.Image,
                    default: "modules/JB2A_DnD5e/Library/Generic/UI/Critical_02_Red_200x200.webm",
                    config: true,
                    onchange: () => { window.location.reload() }
                });
                game.settings.register("automated-jb2a-animations", "EnableCriticalMiss", {
                    name: game.i18n.format("AUTOANIM.critmiss_name"),
                    hint: game.i18n.format("AUTOANIM.critmiss_hint"),
                    scope: 'world',
                    type: Boolean,
                    default: false,
                    config: true,
                    onchange: () => { window.location.reload() }
                });
                game.settings.register("automated-jb2a-animations", "CriticalMissAnimation", {
                    name: game.i18n.format("AUTOANIM.critmissAnim_name"),
                    scope: 'world',
                    type: ImagePicker.Image,
                    default: "modules/JB2A_DnD5e/Library/Generic/UI/Miss_02_White_200x200.webm",
                    config: true,
                    onchange: () => { window.location.reload() }
                });

            } else {
                game.settings.register("automated-jb2a-animations", "playonDamageCore", {
                    name: game.i18n.format("AUTOANIM.coreondmg_name"),
                    hint: game.i18n.format("AUTOANIM.coreondmg_hint"),
                    scope: 'world',
                    type: Boolean,
                    default: false,
                    config: true,
                });
            }
    }
    game.settings.register("automated-jb2a-animations", "EnableShield", {
        name: game.i18n.format("AUTOANIM.enableshield_name"),
        hint: game.i18n.format("AUTOANIM.enableshield_hint"),
        scope: 'world',
        type: Boolean,
        default: false,
        config: true,
    });

    if (game.modules.get("midi-qol")?.active) {
        log("midi IS active");
        switch (game.settings.get("automated-jb2a-animations", "playonDamage")) {
            case (true):
                Hooks.on("midi-qol.DamageRollComplete", (workflow) => { revItUpMidi(workflow) })
                break;
            case (false):
                Hooks.on("midi-qol.RollComplete", (workflow) => { revItUpMidi(workflow) })
                break;
        }
        if (game.settings.get("automated-jb2a-animations", "EnableCritical") || game.settings.get("automated-jb2a-animations", "EnableCriticalMiss")) {
            Hooks.on("midi-qol.AttackRollComplete", (workflow) => { criticalChecks(workflow) })
        }

    } else {
        switch (game.system.id) {
            case "pf1":
            case "D35E":
                Hooks.on("createChatMessage", async (msg) => { onCreateChatMessage(msg) });
                break;
            case "dnd5e":
                Hooks.on("createChatMessage", async (msg) => { revItUp5eCore(msg) });
                //Hooks.on("preCreateChatMessage", async (msg, options, userId) => {dnd5ecrits(msg)});
                break;
            case "tormenta20":
                Hooks.on("createChatMessage", async (msg) => { setupTormenta20(msg) });
                break;
            case "swade":
                Hooks.on("swadeAction", async (SwadeActor, SwadeItem) => { swadeData(SwadeActor, SwadeItem) });
        }
        //Hooks.on("createMeasuredTemplate", async (msg) => { getTemplateParams(msg) });
    }
    path00 = moduleIncludes("jb2a_patreon") === true ? `jb2a_patreon` : `JB2A_DnD5e`;
})
let critAnim;
let critMissAnim;

Hooks.on(`renderItemSheet`, (app, html, data) => {
    if (!game.user.isGM && game.settings.get("automated-jb2a-animations", "hideFromPlayers")) {
        return;
    }
    AnimationTab.bind(app, html, data);
});


Hooks.once('ready', function () {
    if (game.user.isGM && (!game.modules.get("JB2A_DnD5e") && !game.modules.get("jb2a_patreon"))) {
        ui.notifications.error(game.i18n.format("AUTOANIM.error"));
    }
    if (game.user.isGM && game.modules.get("tokenmagic")?.active) {
        game.settings.set("tokenmagic", "fxPlayerPermission", true);
    }
    if (game.modules.get("midi-qol")?.active) {
        critAnim = game.settings.get("automated-jb2a-animations", "CriticalAnimation");
        critAnim = critAnim.substring(7);
        critMissAnim = game.settings.get("automated-jb2a-animations", "CriticalMissAnimation");
        critMissAnim = critMissAnim.substring(7);
    }
});

const wait = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

var path00;

class AutoAnimations {
    static playAnimation(sourceToken, targets, item) {
        let handler = new GeneralAnimHandler(sourceToken, targets, item);
        revItUp(handler);
    }
}

window.AutoAnimations = AutoAnimations;

function moduleIncludes(test) {
    return !!game.modules.get(test);
}

function onCreateChatMessage(msg) {
    log('onCreateChatMessage', msg);
    let handler;
    switch (game.system.id) {
        case "pf1":
            handler = new Pf1Handler(msg);
            break;
        case "D35E":
            handler = new Dnd35Handler(msg);
            break;
    }

    revItUp(handler)
}

function swadeData(SwadeActor, SwadeItem) {
    let handler = new SwadeHandler(SwadeActor, SwadeItem);
    revItUp(handler);
}

function revItUpMidi(workflow) {
    let handler = new MidiHandler(workflow);
    revItUp(handler);
}

function criticalChecks(workflow) {
    criticalCheck(workflow);
}

function setupTormenta20(msg) {
    let handler = new Tormenta20Handler(msg);
    revItUp(handler);
}

function revItUp5eCore(msg) {
    if (game.modules.get("mars-5e")?.active) {
        return;
    }
    let handler = new Dnd5Handler(msg);

    const rollType = (msg.data?.flags?.dnd5e?.roll?.type?.toLowerCase() ?? msg.data?.flavor?.toLowerCase() ?? "pass");
    if (game.settings.get("automated-jb2a-animations", "playonDamageCore")) {
        if (rollType.includes("damage")) {
            //const itemType = myToken.actor.items.get(itemId).data.type.toLowerCase();
            if (game.modules.get("mre-dnd5e")?.active) {
                log("MRE is active");
                if (handler.itemIncludes("xxx") || handler.animKill) {
                } else {
                    switch (game.settings.get("mre-dnd5e", "autoDamage")) {
                        case (true):
                            switch (true) {
                                case (handler.itemNameIncludes("thunderwave")):
                                case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemThunderwave").toLowerCase()):
                                    Hooks.once("createMeasuredTemplate", () => {
                                        thunderwaveAuto(handler);
                                    })
                                    break;
                                case (handler.itemNameIncludes("shatter")):
                                case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemShatter").toLowerCase()):
                                    Hooks.once("createMeasuredTemplate", () => {
                                        shatterAuto(handler);
                                    })
                                    break;
                                case (handler.itemNameIncludes("grenade")):
                                case (handler.itemNameIncludes("bomb")):
                                case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemGrenade").toLowerCase()):
                                case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemBomb").toLowerCase()):
                                case (handler.animType === "t8"):
                                    Hooks.once("createMeasuredTemplate", () => {
                                        explodeTemplate(handler);
                                    })
                                    break;
                                default:
                                    revItUp(handler);
                            }
                            break;
                        case (false):
                            revItUp(handler);
                            break;
                    }
                }

            } else {
                log("MRE is NOT active");
                revItUp(handler);
            }
        }
        switch (true) {
            case (handler.itemTypeIncludes("spell") && handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemShield").toLowerCase())):
                castOnSelf(handler);
                break;
        }
    }
    if (!game.settings.get("automated-jb2a-animations", "playonDamageCore")) {
        if (rollType.includes("damage")) {
            log("damage roll");
        } else
            if (rollType.includes("attack")) {
                revItUp(handler)
            } else /*if (game.settings.get("automated-jb2a-animations", "playonDamageCore") == false)*/ {
                if (handler.itemIncludes("xxx") || handler.animKille) {
                }

                else {
                    switch (true) {
                        case (handler.itemNameIncludes("cure", "wound")):
                        case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemCureWounds").toLowerCase()):
                        case (handler.itemNameIncludes("heal", "word")):
                        case (handler.itemNameIncludes("generic", "heal")):
                        case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemHealingWord").toLowerCase()):
                        case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemGenericHealing").toLowerCase()):
                            onTargetSpells(handler);
                            break;
                        case (handler.itemNameIncludes("disintegrate")):
                        case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemDisintegrate").toLowerCase()):
                            spellAttacks(handler);
                            break;
                        case (handler.itemNameIncludes("magic", "missile")):
                        case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemMagicMissile").toLowerCase()):
                            magicMissile(handler);
                            break;
                        case (handler.itemNameIncludes("shield")):
                        case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemShield").toLowerCase()):
                            //case (handler.itemNameIncludes("second", "wind")):
                            //case (handler.itemNameIncludes("potion", "heal")):
                            castOnSelf(handler);
                            break;
                        case (handler.itemNameIncludes("catapult")):
                        case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemCatapult").toLowerCase()):
                            rangedWeapons(handler);
                            break;
                        //case (handler.itemNameIncludes("boulder")):
                        //case (handler.itemNameIncludes("siege")):
                        //rangedWeapons(handler)
                        //break;
                        case (handler.itemNameIncludes("thunderwave")):
                        case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemThunderwave").toLowerCase()):
                            Hooks.once("createMeasuredTemplate", () => {
                                thunderwaveAuto(handler);
                            })
                            break;
                        case (handler.itemNameIncludes("shatter")):
                        case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemShatter").toLowerCase()):
                            Hooks.once("createMeasuredTemplate", () => {
                                shatterAuto(handler);
                            })
                            break;
                        case (handler.itemNameIncludes("grenade")):
                        case (handler.itemNameIncludes("bomb")):
                        case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemGrenade").toLowerCase()):
                        case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemBomb").toLowerCase()):
                        case (handler.animType === "t8"):
                            Hooks.once("createMeasuredTemplate", () => {
                                explodeTemplate(handler);
                            })
                            break;
                    }
                }

            }
    }

}

async function revItUp(handler) {
    switch (true) {
        // Use xxx in Item Source Field to exclude an item for On-Use customization
        case (handler.itemIncludes("xxx")):
        case (handler.animKill):
            break;
        case ((handler.animType === "t9") && handler.animOverride):
            explodeOnTarget(handler);
            break;
        case ((handler.animType === "t8") && handler.animOverride):
            explodeTemplate(handler);
            break;
        case ((handler.animType === "t10") && handler.animOverride):
            selfCast(handler);
            break;
        case ((handler.animType === "t11") && handler.animOverride):
            if (game.modules.get("Custom-Token-Animations")?.active) {
                ctaCall(handler);
            }
            break;
        case handler.itemNameIncludes("rapier"):
        case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemRapier").toLowerCase()):
        case handler.itemNameIncludes("sword"):
        case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemSword").toLowerCase()):
        case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemGreatsword").toLowerCase()):
        case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemLongsword").toLowerCase()):
        case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemShortsword").toLowerCase()):
        case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemLaserSword").toLowerCase()):
        case handler.itemNameIncludes("greatclub"):
        case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemGreatclub").toLowerCase()):
        case handler.itemNameIncludes("greataxe"):
        case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemGreataxe").toLowerCase()):
        case handler.itemNameIncludes("battleaxe"):
        case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemBattleaxe").toLowerCase()):
        case handler.itemNameIncludes("mace"):
        case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemMace").toLowerCase()):
        case handler.itemNameIncludes("maul"):
        case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemMaul").toLowerCase()):
        case handler.itemNameIncludes("scimitar"):
        case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemScimitar").toLowerCase()):
        //case handler.itemNameIncludes("1 handed slashing"):
        case handler.itemNameIncludes(game.i18n.format("AUTOANIM.item1HS").toLowerCase()):
        //case handler.itemNameIncludes("2 handed slashing"):
        case handler.itemNameIncludes(game.i18n.format("AUTOANIM.item2HS").toLowerCase()):
        //case handler.itemNameIncludes("1 handed bludgeoning"):
        case handler.itemNameIncludes(game.i18n.format("AUTOANIM.item1HB").toLowerCase()):
        //case handler.itemNameIncludes("2 handed bludgeoning"):
        case handler.itemNameIncludes(game.i18n.format("AUTOANIM.item2HB").toLowerCase()):
        //case handler.itemNameIncludes("1 handed piercing"):
        case handler.itemNameIncludes(game.i18n.format("AUTOANIM.item1HP").toLowerCase()):
        //case handler.itemNameIncludes("2 handed piercing"):
        case handler.itemNameIncludes(game.i18n.format("AUTOANIM.item2HP").toLowerCase()):
            meleeWeapons(handler);
            break;
        case handler.itemNameIncludes("dagger"):
        case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemDagger").toLowerCase()):
        case handler.itemNameIncludes("handaxe"):
        case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemHandaxe").toLowerCase()):
        case handler.itemNameIncludes("spear"):
        case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemSpear").toLowerCase()):
            meleeRangeSwitch(handler);
            break;
        //case handler.itemNameIncludes("arrow"):
        case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemArrow").toLowerCase()):
        case handler.itemNameIncludes("bow"):
        case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemLongbow").toLowerCase()):
        case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemShortbow").toLowerCase()):
            arrowOptionExplode(handler);
            break;
        case (handler.itemNameIncludes("throwing hammer")):
        case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemThrowingHammer").toLowerCase()):
        case handler.itemNameIncludes("siege"):
        case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemSiegeBoulder").toLowerCase()):
        case (handler.itemNameIncludes("boulder")):
        case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemBoulder").toLowerCase()):
        case handler.itemNameIncludes("laser"):
        case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemLaserBlast").toLowerCase()):
        case (handler.itemNameIncludes("javelin")):
        case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemJavelin").toLowerCase()):
        case (handler.itemNameIncludes("sling")):
        case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemSling").toLowerCase()):
            rangedWeapons(handler);
            break;
        case (handler.itemNameIncludes("thunderwave")):
        case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemThunderwave").toLowerCase()):
            thunderwaveAuto(handler);
            break;
        case (handler.itemNameIncludes("shatter")):
        case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemShatter").toLowerCase()):
            shatterAuto(handler);
            break;
        case (handler.itemNameIncludes("magic missile")):
        case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemMagicMissile").toLowerCase()):
            magicMissile(handler);
            break;
        case (handler.itemNameIncludes("cure", "wounds")):
        case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemCureWounds").toLowerCase()):
        case (handler.itemNameIncludes("heal", "word")):
        case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemHealingWord").toLowerCase()):
        //case (handler.itemNameIncludes("generic", "heal")):
        case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemGenericHealing").toLowerCase()):
            onTargetSpells(handler);
            break;
        case (handler.itemNameIncludes("fire", "bolt")):
        case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemFireBolt").toLowerCase()):
        case (handler.itemNameIncludes("ray", "frost")):
        case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemRayFrost").toLowerCase()):
        case (handler.itemNameIncludes("witch", "bolt")):
        case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemWitchBolt").toLowerCase()):
        case (handler.itemNameIncludes("eldritch blast")):
        case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemEldritchBlast").toLowerCase()):
        case (handler.itemNameIncludes("scorching", "ray")):
        case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemScorchingRay").toLowerCase()):
        case (handler.itemNameIncludes("disintegrate")):
        case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemDisintegrate").toLowerCase()):
            spellAttacks(handler);
            break;
        case (handler.itemNameIncludes("shield")):
        case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemShield").toLowerCase()):
            castOnSelf(handler);
            break;
        case (handler.itemNameIncludes("grenade")):
        case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemGrenade").toLowerCase()):
        case (handler.itemNameIncludes("bomb")):
        case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemBomb").toLowerCase()):
            explodeTemplate(handler);
            break;
        case (handler.itemNameIncludes("bite") && !handler.itemNameIncludes("frost")):
        case (handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemBite").toLowerCase()) && !handler.itemNameIncludes("frost")):
        case (handler.itemNameIncludes("claw")):
        case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemClaw").toLowerCase()):
            creatureAttacks(handler);
            break;
        case (handler.itemNameIncludes("hunter's mark")):
        case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemHM").toLowerCase()):
            huntersMark(handler)
            break;
        /*
        case (handler.itemNameIncludes("potion", "heal")):
            castOnSelf(handler);
            break;
        case (handler.itemNameIncludes("second", "wind")):
            castOnSelf(handler);
            break;
        */
        case handler.itemNameIncludes("unarmed strike"):
        case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemUnarmedStrike").toLowerCase()):
            if (moduleIncludes("jb2a_patreon")) {
                randomGenDmg(handler);
            }
            break;

    }
}
async function criticalCheck(workflow) {
    let rollCheck = workflow.attackRoll.results[0];

    let token;
    let Anim;

    switch (true) {
        case (game.settings.get("automated-jb2a-animations", "EnableCritical") && rollCheck === 20):
            token = canvas.tokens.get(workflow.tokenId);
            Anim =
            {
                file: critAnim,
                position: token.center,
                anchor: {
                    x: 0.5,
                    y: 0.5
                },
                angle: 0,
                scale: {
                    x: 1,
                    y: 1
                }
            };
            canvas.fxmaster.playVideo(Anim);
            game.socket.emit('module.fxmaster', Anim);
            break;
        case (game.settings.get("automated-jb2a-animations", "EnableCriticalMiss") && rollCheck === 1):
            token = canvas.tokens.get(workflow.tokenId);
            Anim =
            {
                file: critMissAnim,
                position: token.center,
                anchor: {
                    x: 0.5,
                    y: 0.5
                },
                angle: 0,
                scale: {
                    x: 1,
                    y: 1
                }
            };
            canvas.fxmaster.playVideo(Anim);
            game.socket.emit('module.fxmaster', Anim);
            break;
    }
    /*
    Hooks.on("preCreateChatMessage", async (msg, options, userId) => {
        let rollData = JSON.parse(msg.roll)
        const critMin = rollData.terms[0].options.critical
        const rollTotal = rollData.terms[0].results.find(i => i.active).result

        if (rollTotal >= critMin) { stuff }
    })
    */

}
















