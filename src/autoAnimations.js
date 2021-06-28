import Dnd5Handler from "./system-handlers/dnd5-handler.js";
import MidiHandler from "./system-handlers/midi-handler.js";
import Pf1Handler from "./system-handlers/pf1-handler.js";
import Dnd35Handler from "./system-handlers/dnd35-handler.js";
import Tormenta20Handler from './system-handlers/tormenta20-handler.js';
import DemonLordHandler from './system-handlers/demonlord-handler.js';
import SwadeHandler from './system-handlers/swade-handler.js';
import { AnimationTab } from "./item-sheet-handlers/item-sheet-config.js";
import GeneralAnimHandler from "./system-handlers/generalAnim-handler.js";
import SW5eHandler from "./system-handlers/sw5e-handler.js";
import WFRP4eHandler from "./system-handlers/wfrp4e-handler.js";

import spellAttacks from "./animation-functions/attack-spells.js";
import meleeWeapons from "./animation-functions/melee-attacks.js";
import meleeRangeSwitch from "./animation-functions/melee-range-attacks.js";
//import randomGenDmg from "./animation-functions/generic-damage.js";
import creatureAttacks from "./animation-functions/creature-attacks.js";
import rangedWeapons from "./animation-functions/ranged-weapons.js";
import thunderwaveAuto from "./animation-functions/thunderwave.js";
import shatterAuto from "./animation-functions/shatter.js";
import onTargetSpells from "./animation-functions/healing-spells.js";
import magicMissile from "./animation-functions/magic-missile.js";
import arrowOptionExplode from "./animation-functions/arrow.js";
import explodeOnTarget from "./animation-functions/explode-ontarget.js";
import castOnSelf from "./animation-functions/shield.js";
import selfCast from "./animation-functions/emanations.js";
import ctaCall from "./animation-functions/CTAcall.js";
import huntersMark from "./animation-functions/hunters-mark.js";
import bardicInspiration from "./animation-functions/bardic-inspiration.js";
import mistyStep from "./animation-functions/misty-step.js";
import unarmedStrike from "./animation-functions/unarmed-strike.js";
import mistyStepOld from "./animation-functions/misty-step-old.js";
import templateEffects from "./animation-functions/template-effects.js";
import AAItemSettings from "./item-sheet-handlers/animateTab.js";

import { AALayer, AAGroundLayer } from "./canvas-animation/AutoAnimationsLayer.js";
import ImagePicker from "./ImagePicker.js";

// just swap which of these two lines is commented to turn on/off all logging
//const log = console.log.bind(window.console);
const log = () => { };

function registerLayer() {
    if (game.data.version === "0.7.9" || game.data.version === "0.7.10") {
        const layers = mergeObject(Canvas.layers, {
            autoanimations: AALayer,
            autoanimationsG: AAGroundLayer
        });
        Object.defineProperty(Canvas, 'layers', {
            get: function () {
                return layers
            }
        });
    } else {
        CONFIG.Canvas.layers = foundry.utils.mergeObject(CONFIG.Canvas.layers, {
            autoanimations: AALayer,
            autoanimationsG: AAGroundLayer
        });
        if (!Object.is(Canvas.layers, CONFIG.Canvas.layers)) {
            console.error('Possible incomplete layer injection by other module detected! Trying workaround...')

            const layers = Canvas.layers
            Object.defineProperty(Canvas, 'layers', {
                get: function () {
                    return foundry.utils.mergeObject(layers, CONFIG.Canvas.layers)
                }
            })
        }
    }

    // workaround for other modules
}
function activateSocket() {
    game.socket.on("module.autoanimations", (data) => {
        //console.log(data.position);
        if (data.below) {
            canvas.autoanimationsG.playVideo(data);
        } else {
            canvas.autoanimations.playVideo(data);
        }
    });
}

Hooks.on('init', () => {

    registerLayer();
    activateSocket();

    game.settings.register("autoanimations", "runonlyonce", { // game.setting.register("NameOfTheModule", "VariableName",
        name: game.i18n.format("AUTOANIM.initpopup_name"),                  // Register a module setting with checkbox
        hint: game.i18n.format("AUTOANIM.initpopup_hint"),               // Description of the settings
        scope: "world",                                    // This specifies a client-stored setting
        config: true,                                       // This specifies that the setting appears in the configuration view
        type: Boolean,
        default: false,                                     // The default value for the setting
    });
    game.settings.register("autoanimations", "globaldelay", {
        name: game.i18n.format("AUTOANIM.globaldelay_name"),
        hint: game.i18n.format("AUTOANIM.globaldelay_hint"),
        scope: "world",
        config: true,
        default: 100,
        type: Number
    })
    game.settings.register("autoanimations", "animateLayer", {
        name: "Animations play above Overhead Tiles",
        hint: "Check to enable animations playing above Overhead Tiles (Requires a Refressh)",
        scope: "world",
        config: true,
        type: Boolean,
        default: false,
        onChange: () => { window.location.reload() }
    })
    game.settings.register("autoanimations", "videoLoop", {
        name: "Autoplay Video previews in A-A Tab?",
        hint: "Check this box to autoplay video previews",
        scope: "world",
        type: String,
        choices: {
            "0": "No Video Preview",
            "1": "Manually Play Video Preview",
            "2": "Autoplay Video Preview"
        },
        default: "0",
        config: true
    })
    game.settings.register("autoanimations", "hideFromPlayers", { // game.setting.register("NameOfTheModule", "VariableName",
        name: game.i18n.format("AUTOANIM.animtab_name"),                  // Register a module setting with checkbox
        hint: game.i18n.format("AUTOANIM.animtab_hint"),               // Description of the settings
        scope: "world",                                    // This specifies a client-stored setting
        config: true,                                       // This specifies that the setting appears in the configuration view
        type: Boolean,
        default: false,                                     // The default value for the setting
    });
    game.settings.register("autoanimations", "targetingAssist", {
        name: game.i18n.format("AUTOANIM.tarassist_name"),
        hint: game.i18n.format("AUTOANIM.tarassist_hint"),
        scope: "world",
        config: true,
        type: Boolean,
        default: false,
    });
    game.settings.register("autoanimations", "tmfx", {
        name: game.i18n.format("AUTOANIM.tfmxenable_name"),
        hint: game.i18n.format("AUTOANIM.tfmxenable_hint"),
        scope: 'world',
        type: Boolean,
        default: false,
        config: true,
    });
    switch (game.system.id) {
        case "demonlord": {
            if (!(game.data.version === "0.7.9" || game.data.version === "0.7.10")) {
                game.settings.register("autoanimations", "playtrigger", {
                    name: game.i18n.format("AUTOANIM.demonlordtrigger_name"),
                    hint: game.i18n.format("AUTOANIM.demonlordtrigger_hint"),
                    scope: "world",
                    type: String,
                    choices: {
                        "rollattack": game.i18n.format("AUTOANIM.demonlordtrigger_rollattack"),
                        "hits": game.i18n.format("AUTOANIM.demonlordtrigger_hits"),
                        "misses": game.i18n.format("AUTOANIM.demonlordtrigger_misses"),
                        "rolldamage": game.i18n.format("AUTOANIM.demonlordtrigger_rolldamage"),
                        "applydamage": game.i18n.format("AUTOANIM.demonlordtrigger_applydamage"),
                    },
                    default: "rollattack",
                    config: true
                })
            }
            break
        }
        case "dnd5e":
        case "sw5e":
            if (game.modules.get("midi-qol")?.active) {
                game.settings.register("autoanimations", "playonhit", {
                    name: game.i18n.format("AUTOANIM.midionhit_name"),
                    hint: game.i18n.format("AUTOANIM.midionhit_hint"),
                    scope: 'world',
                    type: Boolean,
                    default: false,
                    config: true,
                });
                game.settings.register("autoanimations", "playonmiss", {
                    name: game.i18n.format("AUTOANIM.midionmiss_name"),
                    hint: game.i18n.format("AUTOANIM.midionmiss_hint"),
                    scope: `world`,
                    type: Boolean,
                    default: false,
                    config: true,
                });
                game.settings.register("autoanimations", "playonDamage", {
                    name: game.i18n.format("AUTOANIM.midiondmg_name"),
                    hint: game.i18n.format("AUTOANIM.midiondmg_hint"),
                    scope: 'world',
                    type: Boolean,
                    default: false,
                    config: true,
                    onChange: () => { window.location.reload() }
                });
                if (game.data.version === "0.7.9" || game.data.version === "0.7.10") {
                    game.settings.register("autoanimations", "EnableCritical", {
                        name: game.i18n.format("AUTOANIM.crithit_name"),
                        hint: game.i18n.format("AUTOANIM.crithit_hint"),
                        scope: 'world',
                        type: Boolean,
                        default: false,
                        config: true,
                        onchange: () => { window.location.reload() }
                    });
                    game.settings.register("autoanimations", "CriticalAnimation", {
                        name: game.i18n.format("AUTOANIM.crithitAnim_name"),
                        scope: 'world',
                        type: ImagePicker.Image,
                        default: "modules/JB2A_DnD5e/Library/Generic/UI/Critical_02_Red_200x200.webm",
                        config: true,
                        onchange: () => { window.location.reload() }
                    });
                    game.settings.register("autoanimations", "EnableCriticalMiss", {
                        name: game.i18n.format("AUTOANIM.critmiss_name"),
                        hint: game.i18n.format("AUTOANIM.critmiss_hint"),
                        scope: 'world',
                        type: Boolean,
                        default: false,
                        config: true,
                        onchange: () => { window.location.reload() }
                    });
                    game.settings.register("autoanimations", "CriticalMissAnimation", {
                        name: game.i18n.format("AUTOANIM.critmissAnim_name"),
                        scope: 'world',
                        type: ImagePicker.Image,
                        default: "modules/JB2A_DnD5e/Library/Generic/UI/Miss_02_White_200x200.webm",
                        config: true,
                        onchange: () => { window.location.reload() }
                    });
                } else {
                    game.settings.register("autoanimations", "EnableCritical", {
                        name: game.i18n.format("AUTOANIM.crithit_name"),
                        hint: game.i18n.format("AUTOANIM.crithit_hint"),
                        scope: 'world',
                        type: Boolean,
                        default: false,
                        config: true,
                        onchange: () => { window.location.reload() }
                    });
                    game.settings.register("autoanimations", "CriticalAnimation", {
                        name: game.i18n.format("AUTOANIM.crithitAnim_name"),
                        //name: "Choose A File",
                        scope: 'world',
                        config: true,
                        type: String,
                        filePicker: true
                    });
                    game.settings.register("autoanimations", "EnableCriticalMiss", {
                        name: game.i18n.format("AUTOANIM.critmiss_name"),
                        hint: game.i18n.format("AUTOANIM.critmiss_hint"),
                        scope: 'world',
                        type: Boolean,
                        default: false,
                        config: true,
                        onchange: () => { window.location.reload() }
                    });
                    game.settings.register("autoanimations", "CriticalMissAnimation", {
                        name: game.i18n.format("AUTOANIM.critmissAnim_name"),
                        scope: 'world',
                        config: true,
                        type: String,
                        filePicker: true
                    });
                }
            } else {
                game.settings.register("autoanimations", "playonDamageCore", {
                    name: game.i18n.format("AUTOANIM.coreondmg_name"),
                    hint: game.i18n.format("AUTOANIM.coreondmg_hint"),
                    scope: 'world',
                    type: Boolean,
                    default: false,
                    config: true,
                });
            }
            break;
    }
    game.settings.register("autoanimations", "EnableShield", {
        name: game.i18n.format("AUTOANIM.enableshield_name"),
        hint: game.i18n.format("AUTOANIM.enableshield_hint"),
        scope: 'world',
        type: Boolean,
        default: false,
        config: true,
    });

    if (game.modules.get("midi-qol")?.active) {
        log("midi IS active");
        switch (game.settings.get("autoanimations", "playonDamage")) {
            case (true):
                Hooks.on("midi-qol.DamageRollComplete", (workflow) => { revItUpMidi(workflow) });
                Hooks.on("createChatMessage", (msg) => { specialCaseAnimations(msg) });
                break;
            case (false):
                Hooks.on("midi-qol.RollComplete", (workflow) => { revItUpMidi(workflow) });
                Hooks.on("createChatMessage", (msg) => { specialCaseAnimations(msg) });
                break;
        }
        if (game.settings.get("autoanimations", "EnableCritical") || game.settings.get("autoanimations", "EnableCriticalMiss")) {
            Hooks.on("midi-qol.AttackRollComplete", (workflow) => { criticalChecks(workflow) })
        }

    } else {
        switch (game.system.id) {
            case "pf1":
            case "D35E":
                Hooks.on("createChatMessage", async (msg) => { onCreateChatMessage(msg) });
                break;
            case "dnd5e":
            case "sw5e":
                Hooks.on("createChatMessage", async (msg) => { revItUp5eCore(msg) });
                //Hooks.on("preCreateChatMessage", async (msg, options, userId) => {dnd5ecrits(msg)});
                break;
            case "tormenta20":
                Hooks.on("createChatMessage", async (msg) => { setupTormenta20(msg) });
                break;
            case "demonlord": {
                if (game.data.version === "0.7.9" || game.data.version === "0.7.10") {
                    Hooks.on("DL.ApplyDamage", setupDemonLord);
                    Hooks.on("DL.ApplyHealing", setupDemonLord);
                } else {
                    Hooks.on("DL.Action", setupDemonLord);
                }
                break;
            }
            case "swade":
                Hooks.on("swadeAction", async (SwadeActor, SwadeItem) => { swadeData(SwadeActor, SwadeItem) });
                break;
            case "wfrp4e":
                Hooks.on("wfrp4e:rollWeaponTest", async (data, info) => {
                    let targets = game.user.targets;
                    wfrpWeapon(data, targets, info)
                });
                Hooks.on("wfrp4e:rollPrayerTest", async (data, info) => {
                    let targets = game.user.targets;
                    wfrpPrayer(data, targets, info)
                });
                Hooks.on("wfrp4e:rollCastTest", async (data, info) => {
                    let targets = game.user.targets;
                    wfrpCast(data, targets, info)
                });
                Hooks.on("wfrp4e:rollTraitTest", async (data, info) => {
                    let targets = game.user.targets;
                    wfrpTrait(data, targets, info)
                });
                Hooks.on("wfrp4e:rollTest", async (data, info) => {
                    let targets = game.user.targets;
                    wfrpSkill(data, targets, info)
                });
                break;
        }
        //Hooks.on("createMeasuredTemplate", async (msg) => { getTemplateParams(msg) });
    }
    path00 = moduleIncludes("jb2a_patreon") === true ? `jb2a_patreon` : `JB2A_DnD5e`;
})
let critAnim;
let critMissAnim;

Hooks.on(`renderItemSheet`, (app, html, data) => {
    if (!game.user.isGM && game.settings.get("autoanimations", "hideFromPlayers")) {
        return;
    }
    //AnimationTab.bind(app, html, data);

    let acceptedTypes;
    let typeLoc;
    switch (game.system.id) {
        case ("dnd5e"):
            acceptedTypes = ['weapon', 'spell', 'consumable', 'feat', 'equipment'];
            typeLoc = data.item.type;
            break;
    }
    if (acceptedTypes.includes(typeLoc)) {
        let title = "A-A";
        let openBtn = $(`<a class="open-item-effect" title="${title}"><i class="fas fa-biohazard"></i>${title}</a>`);
        openBtn.click(ev => {
            new AAItemSettings(app.document, {}).render(true);
        });
        html.closest('.app').find('.open-item-effect').remove();
        let titleElement = html.closest('.app').find('.window-title');
        openBtn.insertAfter(titleElement);
    }
});


Hooks.once('ready', function () {
    if (game.user.isGM && (!game.modules.get("JB2A_DnD5e") && !game.modules.get("jb2a_patreon"))) {
        ui.notifications.error(game.i18n.format("AUTOANIM.error"));
    }
    if (game.user.isGM && game.modules.get("tokenmagic")?.active) {
        game.settings.set("tokenmagic", "fxPlayerPermission", true);
    }
    if (game.modules.get("midi-qol")?.active) {
        critAnim = game.settings.get("autoanimations", "CriticalAnimation");
        console.log(critAnim);
        critMissAnim = game.settings.get("autoanimations", "CriticalMissAnimation");
        console.log(critMissAnim)
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
    if (msg.user.id !== game.user.id) { return };
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
    if (game.user.id === msg.user.id) {
        switch (true) {
            case ((handler.animType === "t12") && (handler.animOverride)):
                if (game.data.version === "0.7.9" || game.data.version === "0.7.10") {
                    mistyStepOld(handler);

                } else {
                    mistyStep(handler);
                }
                break;
        }
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
    if (game.user.id === msg.user.id) {
        switch (true) {
            case ((handler.animType === "t12") && (handler.animOverride)):
                if (game.data.version === "0.7.9" || game.data.version === "0.7.10") {
                    mistyStepOld(handler);

                } else {
                    mistyStep(handler);
                }
                break;
        }
    }
    if (game.user.id === msg.user.id) {
        return;
    }
    revItUp(handler);
}

function setupDemonLord(data) {
    let handler = new DemonLordHandler(data);
    revItUp(handler);
}

async function specialCaseAnimations(msg) {
    if (game.user.id !== msg.user.id) {
        return;
    }
    let handler = new Dnd5Handler(msg);
    switch (true) {
        case ((handler.animType === "t12") && (handler.animOverride)):
            if (game.data.version === "0.7.9" || game.data.version === "0.7.10") {
                mistyStepOld(handler);

            } else {
                mistyStep(handler);
            }
            break;
        case (handler.animType === "t8" && handler.animOverride):
            Hooks.once("createMeasuredTemplate", (msg) => {
                templateEffects(handler, msg);
            })
            break;
    }
}

function revItUp5eCore(msg) {
    if (msg.user.id !== game.user.id) { return };
    if (msg.data?.flavor?.includes("Long Rest")) { return };
    let handler;
    let rollType;
    switch (game.system.id) {
        case "dnd5e":
            handler = new Dnd5Handler(msg);
            rollType = (msg.data?.flags?.dnd5e?.roll?.type?.toLowerCase() ?? msg.data?.flavor?.toLowerCase() ?? "pass");
            break;
        case "sw5e":
            handler = new SW5eHandler(msg);
            rollType = msg.data?.flags?.sw5e?.roll?.type?.toLowerCase() ?? "pass";
            break;
    }
    if (!handler.item) { return }

    if (game.modules.get("mars-5e")?.active) {
        if (game.user.id === msg.user.id) {
            switch (true) {
                case ((handler.animType === "t12") && (handler.animOverride)):
                    if (game.data.version === "0.7.9" || game.data.version === "0.7.10") {
                        mistyStepOld(handler);

                    } else {
                        mistyStep(handler);
                    }
                    break;
            }
        }
        return;
    }

    if (handler.animType === "t11" && handler.animOverride) {
        if (game.modules.get("Custom-Token-Animations")?.active) {
            ctaCall(handler);
            return;
        }
    }
    if (handler.itemNameIncludes("bardic inspiration") || handler.itemNameIncludes(game.i18n.format("AUTOANIM.bardicInspiration").toLowerCase())) {
        bardicInspiration(handler);
    }

    if (handler.animType === "t8" && handler.animOverride) {
        Hooks.once("createMeasuredTemplate", (msg) => {
            templateEffects(handler, msg);
        });
        return;
    }

    if (game.user.id === msg.user.id) {
        switch (true) {
            case ((handler.animType === "t12") && (handler.animOverride)):
                if (game.data.version === "0.7.9" || game.data.version === "0.7.10") {
                    mistyStepOld(handler);

                } else {
                    mistyStep(handler);
                }
                break;
        }
    }

    //const rollType = (msg.data?.flags?.dnd5e?.roll?.type?.toLowerCase() ?? msg.data?.flavor?.toLowerCase() ?? "pass");
    if (game.settings.get("autoanimations", "playonDamageCore")) {
        if (rollType.includes("damage")) {
            //const itemType = myToken.actor.items.get(itemId).data.type.toLowerCase();
            if (handler.itemSound) {
                itemSound(handler);
            }
            if (game.modules.get("mre-dnd5e")?.active) {
                log("MRE is active");
                if (handler.itemIncludes("xxx") || handler.animKill) {
                    return;
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
                            }
                            break;
                        case (false):
                            revItUp(handler);
                            break;
                    }
                }

            } else { log("MRE is NOT active"); revItUp(handler); }
        }
        switch (true) {
            case (handler.itemTypeIncludes("spell") && handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemShield").toLowerCase())):
                castOnSelf(handler);
                break;
        }
    }
    if (!game.settings.get("autoanimations", "playonDamageCore")) {
        if (rollType.includes("damage")) {
            log("damage roll");
        } else
            if (rollType.includes("attack") || !handler.hasAttack) {
                if (handler.itemSound) {
                    itemSound(handler);
                }
                revItUp(handler)
            } else /*if (game.settings.get("autoanimations", "playonDamageCore") == false)*/ {
                if (handler.itemSound) {
                    itemSound(handler);
                }
                if (handler.itemIncludes("xxx") || handler.animKill) {
                    return;
                }

                else {
                    if (handler.itemSound) {
                        itemSound(handler);
                    }
                    switch (true) {
                        /*
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
                        */
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
                    }
                }

            }
    }

}
async function itemSound(handler) {
    let audio = handler.allSounds.item;
    if (handler.itemSound) {
        await wait(audio.delay);
        AudioHelper.play({ src: audio.file, volume: audio.volume, autoplay: true, loop: false }, true);
    }
}
async function revItUp(handler) {
    if (handler.itemSound) {
        itemSound(handler);
    }

    if (game.modules.get("midi-qol")?.active) { } else {
        switch (game.system.id) {
            case "dnd5e":
                if (game.modules.get("mars-5e")?.active) {
                    if (handler.animType === "t8" && handler.animOverride) {
                        templateEffects(handler);
                        return;
                    }
                } else if (handler.animType === "t8" && handler.animOverride) {
                    Hooks.once("createMeasuredTemplate", (msg) => {
                        templateEffects(handler, msg);
                    });
                    return;
                }
                break;
            default:
                if (handler.animType === "t8" && handler.animOverride) {
                    templateEffects(handler);
                    return;
                }
        }
    }

    switch (true) {
        // Use xxx in Item Source Field to exclude an item for On-Use customization
        case (handler.itemIncludes("xxx")):
        case (handler.animKill):
            break;
        case ((handler.animType === "t9") && handler.animOverride):
            explodeOnTarget(handler);
            break;
        case ((handler.animType === "t10") && handler.animOverride):
            selfCast(handler);
            break;
        case ((handler.animType === "t11") && handler.animOverride):
            if (game.modules.get("Custom-Token-Animations")?.active) {
                ctaCall(handler);
            }
            break;
        case handler.itemNameIncludes("bardic inspiration"):
        case handler.itemNameIncludes(game.i18n.format("AUTOANIM.bardicInspiration").toLowerCase()):
            bardicInspiration(handler);
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
            switch (true) {
                case (game.modules.get("midi-qol")?.active && (handler.autoDamage === "none")):
                    console.log(handler.autoDamage);
                    thunderwaveAuto(handler);
                    break;
                default:
                    Hooks.once("createMeasuredTemplate", () => {
                        console.log(handler.autoDamage);
                        thunderwaveAuto(handler);
                    })
            }
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
        case handler.itemNameIncludes("guiding bolt"):
        case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemGuidingBolt").toLowerCase()):
            spellAttacks(handler);
            break;
        case (handler.itemNameIncludes("shield")):
        case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemShield").toLowerCase()):
            castOnSelf(handler);
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
        case handler.itemNameIncludes("unarmed strike"):
        case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemUnarmedStrike").toLowerCase()):
        case handler.itemNameIncludes("flurry of blows"):
        case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemFlurryBlows").toLowerCase()):
            unarmedStrike(handler);
            break;
    }
}
async function criticalCheck(workflow) {

    if (!workflow.isCritical && !workflow.isFumble) { return; }
    let critical = workflow.isCritical;
    let fumble = workflow.isFumble;

    let token;
    let Anim;

    switch (true) {
        case (game.settings.get("autoanimations", "EnableCritical") && critical):
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
            canvas.autoanimations.playVideo(Anim);
            game.socket.emit('module.autoanimations', Anim);
            break;
        case (game.settings.get("autoanimations", "EnableCriticalMiss") && fumble):
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
            canvas.autoanimations.playVideo(Anim);
            game.socket.emit('module.autoanimations', Anim);
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

//WFRP Functions
function wfrpWeapon(data, targets, info) {
    if (game.user.id !== info.user) { return }
    let item = data.weapon;
    let allTargets = Array.from(targets);
    let handler = new WFRP4eHandler(item, allTargets);
    switch (true) {
        case ((handler.animType === "t12") && (handler.animOverride)):
            if (game.data.version === "0.7.9" || game.data.version === "0.7.10") {
                mistyStepOld(handler);

            } else {
                mistyStep(handler);
            }
            break;
        default:
            revItUp(handler);
    }
}
function wfrpPrayer(data, targets, info) {
    if (game.user.id !== info.user) { return }
    let item = data.prayer;
    let allTargets = Array.from(targets);
    let handler = new WFRP4eHandler(item, allTargets);
    switch (true) {
        case ((handler.animType === "t12") && (handler.animOverride)):
            if (game.data.version === "0.7.9" || game.data.version === "0.7.10") {
                mistyStepOld(handler);

            } else {
                mistyStep(handler);
            }
            break;
        default:
            revItUp(handler);
    }
}
function wfrpCast(data, targets, info) {
    if (game.user.id !== info.user) { return }
    let item = data.spell;
    let allTargets = Array.from(targets);
    let handler = new WFRP4eHandler(item, allTargets);
    switch (true) {
        case ((handler.animType === "t12") && (handler.animOverride)):
            if (game.data.version === "0.7.9" || game.data.version === "0.7.10") {
                mistyStepOld(handler);

            } else {
                mistyStep(handler);
            }
            break;
        default:
            revItUp(handler);
    }
}
function wfrpTrait(data, targets, info) {
    if (game.user.id !== info.user) { return }
    let item = data.trait;
    let allTargets = Array.from(targets);
    let handler = new WFRP4eHandler(item, allTargets);
    switch (true) {
        case ((handler.animType === "t12") && (handler.animOverride)):
            if (game.data.version === "0.7.9" || game.data.version === "0.7.10") {
                mistyStepOld(handler);

            } else {
                mistyStep(handler);
            }
            break;
        default:
            revItUp(handler);
    }
}
function wfrpSkill(data, targets, info) {
    if (game.user.id !== info.user) { return }
    let item = data.skill;
    let allTargets = Array.from(targets);
    let handler = new WFRP4eHandler(item, allTargets);
    switch (true) {
        case ((handler.animType === "t12") && (handler.animOverride)):
            if (game.data.version === "0.7.9" || game.data.version === "0.7.10") {
                mistyStepOld(handler);

            } else {
                mistyStep(handler);
            }
            break;
        default:
            revItUp(handler);
    }
}












