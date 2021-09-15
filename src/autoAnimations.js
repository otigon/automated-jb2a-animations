import { JB2APATREONDB } from "./animation-functions/databases/jb2a-patreon-database.js";
import { JB2AFREEDB } from "./animation-functions/databases/jb2a-free-database.js";
import { trafficCop } from "./router/traffic-cop.js";

import Dnd5Handler from "./system-handlers/dnd5-handler.js";
import MidiHandler from "./system-handlers/midi-handler.js";
import Pf1Handler from "./system-handlers/pf1-handler.js";
import Dnd35Handler from "./system-handlers/dnd35-handler.js";
import Tormenta20Handler from './system-handlers/tormenta20-handler.js';
import DemonLordHandler from './system-handlers/demonlord-handler.js';
import StarWarsFfgHandler from './system-handlers/starwarsffg-handler.js';
import SwadeHandler from './system-handlers/swade-handler.js';
import GeneralAnimHandler from "./system-handlers/generalAnim-handler.js";
import SW5eHandler from "./system-handlers/sw5e-handler.js";
import WFRP4eHandler from "./system-handlers/wfrp4e-handler.js";
import PF2Handler from "./system-handlers/pf2-handler.js";
import ForbiddenLandsHandler from "./system-handlers/forbidden-lands-handler.js";

import AAItemSettings from "./item-sheet-handlers/animateTab.js";
import aaSettings from "./settings.js";

import { teleportation } from "./animation-functions/teleportation.js";
import { templateAnimation } from "./animation-functions/templateAnimation.js";
import { setupSocket, socketlibSocket } from "./socketset.js";
import { autorecNameCheck, getAllNames, rinseName } from "./custom-recognition/autoFunctions.js";

//import menuOptions from "./animation-functions/databases/jb2a-patreon-menus.js";
// just swap which of these two lines is commented to turn on/off all logging
//const log = console.log.bind(window.console);
const log = () => { };

Hooks.once('setup', function () {
    setupSocket();
});
var killAllAnimations;
function disableAnimations() {
    socket.off('module.sequencer')
    killAllAnimations = true;
}
Hooks.on('init', () => {
    Handlebars.registerHelper('ifEquals', function (arg1, arg2, options) {
        return (arg1 == arg2) ? options.fn(this) : options.inverse(this);
    });
    Handlebars.registerHelper('ifnoteq', function (a, b, options) {
        if (a != b) { return options.fn(this); }
        return options.inverse(this);
    });
    Handlebars.registerHelper("aaEach", function (colors, type, name, variant, options) {
        var ret = "";

        let context;
        context = colors[type][name][variant]
        for (var i = 0, j = context.length; i < j; i++) {
            ret = ret + options.fn(context[i]);
        }
        return ret;
    });
    Handlebars.registerHelper('concat', function (...params) {
        // Ignore the object appended by handlebars.
        if (typeof params[params.length - 1] === 'object') {
            params.pop();
        }

        return params.join('');
    });
    aaSettings();
    loadTemplates([
        'modules/autoanimations/src/custom-recognition/settings.html',
        'modules/autoanimations/src/custom-recognition/autorec-templates/aa-melee-autorec.html',
        'modules/autoanimations/src/custom-recognition/autorec-templates/aa-ranged-autorec.html',
        'modules/autoanimations/src/custom-recognition/autorec-templates/aa-static-autorec.html',
        'modules/autoanimations/src/custom-recognition/autorec-templates/aa-templates-autorec.html',
        'modules/autoanimations/src/custom-recognition/autorec-templates/aa-auras-autorec.html',
        'modules/autoanimations/src/custom-recognition/autorec-templates/aa-presets-autorec.html',
    ]);

    if (game.modules.get("midi-qol")?.active) {
        log("midi IS active");
        switch (game.settings.get("autoanimations", "playonDamage")) {
            case (true):
                Hooks.on("midi-qol.DamageRollComplete", (workflow) => { setUpMidi(workflow) });
                Hooks.on("createChatMessage", (msg) => { specialCaseAnimations(msg) });
                Hooks.on("midi-qol.RollComplete", (workflow) => { setUpMidiNoAD(workflow) });
                break;
            case (false):
                Hooks.on("midi-qol.AttackRollComplete", (workflow) => { setUpMidi(workflow) });
                Hooks.on("midi-qol.RollComplete", (workflow) => { setUpMidiNoA(workflow) });
                Hooks.on("createChatMessage", (msg) => { specialCaseAnimations(msg) });
                break;
        }
        if (game.settings.get("autoanimations", "EnableCritical") || game.settings.get("autoanimations", "EnableCriticalMiss")) {
            Hooks.on("midi-qol.AttackRollComplete", (workflow) => { criticalCheck(workflow) })
        }

    } else {
        switch (game.system.id) {
            case "pf1":
            case "D35E":
                Hooks.on("createChatMessage", async (msg) => { onCreateChatMessage(msg) });
                break;
            case "dnd5e":
            case "sw5e":
                Hooks.on("createChatMessage", async (msg) => {
                    setUp5eCore
                        (msg);
                    //specialCaseAnimations(msg);
                });
                //Hooks.on("preCreateChatMessage", async (msg, options, userId) => {dnd5ecrits(msg)});
                break;
            case "tormenta20":
                Hooks.on("createChatMessage", async (msg) => { setupTormenta20(msg) });
                break;
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
                break;
            case "pf2e":
                Hooks.on("createChatMessage", async (msg) => { pf2eReady(msg) });
                break;
            case "forbidden-lands":
                Hooks.on("createChatMessage", async (msg) => { fblReady(msg) });
                break;
            case "sfrpg":
                Hooks.on("createChatMessage", async (msg) => {
                    function extractItemId(content) {
                        try {
                            return $(content).attr("data-item-id");
                        } catch (exception) {
                            return null;
                        }
                    }
                    let itemId = extractItemId(msg.data.content);
                    let tokenId;
                    let sourceToken;
                    let targets;
                    let item;
                    if (itemId === undefined) {
                        return
                    } else {
                        item = sourceToken.actor.items?.get(itemId)
                    }
                    if (!item.hasAttack && !item.hasDamage) {
                        tokenId = msg.data.speaker.token;
                        sourceToken = canvas.tokens.get(tokenId);
                        targets = Array.from(msg.user.targets)
                        AutoAnimations.playAnimation(sourceToken, targets, item)
                    }
                });
                if (game.settings.get("autoanimations", "playonDamage")) {
                    Hooks.on("damageRolled", async (data) => {
                        Hooks.once("createChatMessage", async (msg) => {
                            if (msg.user.id !== game.user.id) { return };
                            starFinder(data, msg)
                        });
                    });
                } else {
                    Hooks.on("attackRolled", async (data) => {
                        Hooks.once("createChatMessage", async (msg) => {
                            if (msg.user.id !== game.user.id) { return };
                            starFinder(data, msg)
                        });
                    })
                    Hooks.on("damageRolled", async (data) => {
                        Hooks.once("createChatMessage", async (msg) => {
                            if (msg.user.id !== game.user.id) { return };
                            if (data.item.hasAttack) {
                                return;
                            } else {
                                starFinder(data, msg)
                            }
                        });
                    })
                }
                break;
            case "starwarsffg":
                Hooks.on("createChatMessage", async (msg) => { swffgReady(msg) });
                break;
            case "swade":
                Hooks.on("swadeAction", async (SwadeActor, SwadeItem) => { swadeData(SwadeActor, SwadeItem) });
                Hooks.on("BRSW-RollItem", async (data, html) => {
                    var actorId = data.getFlag("betterrolls-swade2", "actor");
                    var actor = game.actors.get(actorId);

                    var itemId = data.getFlag("betterrolls-swade2", "item_id");
                    var item = actor.items.get(itemId);

                    swadeData(actor, item) 
                });
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
})
// sets the A-A button on the Item Sheet title bar
Hooks.on(`renderItemSheet`, async (app, html, data) => {
    if (!game.user.isGM && game.settings.get("autoanimations", "hideFromPlayers")) {
        return;
    }
    const aaBtn = $(`<a class="aa-item-settings" title="A-A"><i class="fas fa-biohazard"></i>A-A</a>`);
    aaBtn.click(ev => {
        new AAItemSettings(app.document, {}).render(true);
    });
    html.closest('.app').find('.aa-item-settings').remove();
    let titleElement = html.closest('.app').find('.window-title');
    aaBtn.insertAfter(titleElement);
});
// Registers Database with Sequencer
Hooks.once('ready', function () {
    let obj01 = moduleIncludes("jb2a_patreon") === true ? JB2APATREONDB : JB2AFREEDB;

    Hooks.on("sequencer.ready", () => {
        SequencerDatabase.registerEntries("autoanimations", obj01);
        if (game.settings.get("autoanimations", "killAllAnim") === "off") {
            console.log("ANIMATIONS ARE OFF")
            socket.off('module.sequencer')//
            killAllAnimations = true;
        }
    });
    if (game.user.isGM && (!game.modules.get("JB2A_DnD5e") && !game.modules.get("jb2a_patreon"))) {
        ui.notifications.error(game.i18n.format("AUTOANIM.error"));
    }
    Hooks.callAll("aa.ready", obj01)
});

const wait = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

/* External call for animations
* sourcToken as the originating token
* targets as an array from the user
* item as the item instance being used
*/
class AutoAnimations {
    static playAnimation(sourceToken, targets, item) {
        if (killAllAnimations) { return; }
        let handler = new GeneralAnimHandler(sourceToken, targets, item);
        trafficCop(handler);
    }
}
window.AutoAnimations = AutoAnimations;

function moduleIncludes(test) {
    return !!game.modules.get(test);
}

/*
/ Midi-QOL Functions for DnD 5e and Star Wars 5e
*/
// setUpMidi for 5e/SW5e Animations on "Attack Rolls" (not specifically on damage)
function setUpMidi(workflow) {
    if (killAllAnimations) { return; }
    let handler = new MidiHandler(workflow);
    const templateItem = autorecNameCheck(getAllNames(game.settings.get('autoanimations', 'aaAutorec'), 'templates'), rinseName(handler.itemName));
    if (templateItem && !handler.animOverride) { return; }
    if (handler.animType === "t8" && handler.animOverride) { return; }
    trafficCop(handler);
}
// setUpMidiNoAD for Animations on items that have NO Attack or Damage rolls. Active if Animate on Damage true
function setUpMidiNoAD(workflow) {
    if (killAllAnimations) { return; }
    if (workflow.item?.hasAttack && workflow.item?.hasDamage) { return; }
    let handler = new MidiHandler(workflow);
    const templateItem = autorecNameCheck(getAllNames(game.settings.get('autoanimations', 'aaAutorec'), 'templates'), rinseName(handler.itemName));
    if (templateItem && !handler.animOverride) { return; }
    if (handler.animType === "t8" && handler.animOverride) { return; }
    trafficCop(handler)
}
// setUpMidiNoD for Animations on items that have NO Attack Roll. Active only if Animating on Attack Rolls
function setUpMidiNoA(workflow) {
    if (killAllAnimations) { return; }
    if (workflow.item?.hasAttack) { return; }
    let handler = new MidiHandler(workflow);
    const templateItem = autorecNameCheck(getAllNames(game.settings.get('autoanimations', 'aaAutorec'), 'templates'), rinseName(handler.itemName));
    if (templateItem && !handler.animOverride) { return; }
    if (handler.animType === "t8" && handler.animOverride) { return; }
    trafficCop(handler)
}
// Special cases required when using Midi-QOL. Houses only the Template Animations right now
async function specialCaseAnimations(msg) {
    if (killAllAnimations) { return; }
    if (game.user.id !== msg.user?.id) {
        return;
    }
    let breakOut = checkMessege(msg);
    if (breakOut === 0 || game.modules.get("betterrolls5e")?.active) {
        let handler = new Dnd5Handler(msg);
        if (handler.animType === "t8" && handler.animOverride) {
            Hooks.once("createMeasuredTemplate", (msg) => {
                templateAnimation(handler);
            })
            return;
        }
        const templateItem = autorecNameCheck(getAllNames(game.settings.get('autoanimations', 'aaAutorec'), 'templates'), rinseName(handler.itemName));
        if (templateItem && !handler.animOverride) {
            trafficCop(handler)
        }
    } else { return; }
}
function checkMessege(msg) {
    try {
        return msg.data?.flags['midi-qol'].type;
    } catch (exception) {
        return false;
    }
}

/*
/ Set up DnD5e and SW5e CORE (NON MIDI)
*/
function setUp5eCore(msg) {
    if (killAllAnimations) { return; }
    if (msg.user.id !== game.user.id) { return };

    const animationNow = game.settings.get("autoanimations", "playonDamageCore");
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
    if (!handler.item || handler.animKill) { return }
    const templateItem = autorecNameCheck(getAllNames(game.settings.get('autoanimations', 'aaAutorec'), 'templates'), rinseName(handler.itemName));
    const t8Template = handler.animType === "t8" && handler.animOverride ? true : false;
    switch (true) {
        case !handler.hasAttack && !handler.hasDamage:
            trafficCop(handler);
            break;
        case handler.animType === "t8" && !rollType.includes("damage") && handler.animOverride:
            trafficCop(handler);
            break;
        case templateItem && !rollType.includes("damage") && !rollType.includes("attack"):
            trafficCop(handler);
            break;
        case animationNow:
            if (rollType.includes("damage")) {
                if (t8Template || templateItem) { return; }
                trafficCop(handler);
            }
            break;
        case !animationNow:
            switch (true) {
                case game.modules.get("mre-dnd5e")?.active && game.settings.get("mre-dnd5e", "autoCheck") & !rollType.includes("damage"):
                    trafficCop(handler);
                    break;
                case rollType.includes("damage") && !handler.hasAttack:
                case rollType.includes('attack'):
                    if (t8Template || templateItem) { return; }
                    trafficCop(handler);
                    break;
                case game.modules.get("betterrolls5e")?.active && !handler.hasAttack && handler.hasDamage:
                    if (t8Template || templateItem) { return; }
                    trafficCop(handler);
                    break;
            }
            break;
    }
}

/*
/ sets Handler for PF1 and DnD3.5
*/
function onCreateChatMessage(msg) {
    if (killAllAnimations) { return; }
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
    /*
    if (game.user.id === msg.user.id) {
        switch (true) {
            case ((handler.animType === "t12") && (handler.animOverride)):
                teleportation(handler);
                break;
        }
    }
    */
    trafficCop(handler)
}

/*
/ Sets Handler for Star Wars FFG
*/
function swffgReady(msg) {
    if (killAllAnimations) { return; }
    let handler = new StarWarsFfgHandler(msg);
    trafficCop(handler);
}

/*
/ Sets Handler for SWADE
*/
function swadeData(SwadeActor, SwadeItem) {
    if (killAllAnimations) { return; }
    let handler = new SwadeHandler(SwadeActor, SwadeItem);
    trafficCop(handler);
}

/*
/ Sets Handler for Starfinder
*/
function starFinder(data, msg) {
    if (killAllAnimations) { return; }
    let tokenId = msg.data.speaker.token;
    let sourceToken = canvas.tokens.get(tokenId);
    let targets = Array.from(msg.user.targets);
    let item = data.item;
    AutoAnimations.playAnimation(sourceToken, targets, item)
}

/*
/ Sets Handler for Tormenta 20
*/
function setupTormenta20(msg) {
    if (killAllAnimations) { return; }
    let handler = new Tormenta20Handler(msg);
    if (game.user.id === msg.user.id) {
        switch (true) {
            case ((handler.animType === "t12") && (handler.animOverride)):
                teleportation(handler);
                break;
        }
    }
    if (game.user.id === msg.user.id) {
        return;
    }
    trafficCop(handler);
}

/*
/ Sets Handler for Forbidden Lands
*/
async function fblReady(msg) {
    if (killAllAnimations) { return; }
    if (game.user.id !== msg.user.id) { return; }
    const handler = new ForbiddenLandsHandler(msg);
    if (!handler.item || !handler.actorToken || handler.animKill) {
        return;
    }
    trafficCop(handler);
}
/*
/ Sets Handler for Demon Lord
*/
function setupDemonLord(data) {
    if (killAllAnimations) { return; }
    let handler = new DemonLordHandler(data);
    trafficCop(handler);
}

/*
/ Sets Handler for Pathfinder 2e and routes to animations
*/
async function pf2eReady(msg) {
    if (killAllAnimations) { return; }
    if (game.user.id !== msg.user.id) { return; }
    const handler = new PF2Handler(msg);
    if (!handler.item || !handler.actorToken || handler.animKill) {
        return;
    }
    const templateItem = autorecNameCheck(getAllNames(game.settings.get('autoanimations', 'aaAutorec'), 'templates'), rinseName(handler.itemName));
    const t8Template = handler.animType === "t8" && handler.animOverride ? true : false;
    const itemType = handler.itemType;
    const damage = handler.item.damageValue;
    const spellType = handler.item?.data?.data?.spellType?.value ?? "utility";
    const playOnDmg = game.settings.get("autoanimations", "playonDamageCore")
    if (t8Template) {
        if (msg.data.flavor?.toLowerCase().includes("damage")) { return; }
        trafficCop(handler);
        return;
    }
    if (templateItem && !t8Template && !msg.data.flavor?.toLowerCase().includes("damage")) {
        trafficCop(handler);
        return;
    }
    if (templateItem || t8Template) { return };
    switch (itemType) {
        case "spell":
            switch (spellType) {
                case "utility":
                    trafficCop(handler);
                    break;
                case "save":
                    if (!damage) {
                        trafficCop(handler);
                    } else if (msg.data.flavor?.toLowerCase().includes("damage")) {
                        trafficCop(handler);
                    }
                    break;
                case "heal":
                    if (msg.data.flavor?.toLowerCase().includes('healing')) {
                        trafficCop(handler);
                    }
                    break;
                case "attack":
                    switch (playOnDmg) {
                        case true:
                            if (msg.data.flavor?.toLowerCase().includes("damage")) {
                                trafficCop(handler);
                            }
                            break;
                        default:
                            if (msg.data.flags.pf2e?.context?.type.includes("attack")) {
                                trafficCop(handler);
                            }
                    }
                    break;
            }
            break;
        case "melee":
        case "weapon":
            switch (true) {
                case playOnDmg:
                    if (msg.data.flags.pf2e?.damageRoll /*msg.data.flavor?.toLowerCase().includes("damage")*/) {
                        trafficCop(handler);
                    }
                    break;
                default:
                    if (msg.data.flags.pf2e?.context?.type.includes("attack")) {
                        trafficCop(handler);
                    }
            }
            break;
        case "consumable":
        case "armor":
        case "feat":
        case "action":
        case "effect":
            trafficCop(handler);
            break;
    }
}

async function itemSound(handler) {
    let audio = handler.allSounds.item;
    if (handler.itemSound) {
        await wait(audio.delay);
        AudioHelper.play({ src: audio.file, volume: audio.volume, autoplay: true, loop: false }, true);
    }
}
async function criticalCheck(workflow) {
    if (killAllAnimations) { return; }
    if (!workflow.isCritical && !workflow.isFumble) { return; }
    let critical = workflow.isCritical;
    let fumble = workflow.isFumble;

    let token;

    let critAnim = game.settings.get("autoanimations", "CriticalAnimation");
    let critMissAnim = game.settings.get("autoanimations", "CriticalMissAnimation");

    switch (true) {
        case (game.settings.get("autoanimations", "EnableCritical") && critical):
            token = canvas.tokens.get(workflow.tokenId);
            new Sequence()
                .effect()
                .file(critAnim)
                .atLocation(token)
                .play()
            break;
        case (game.settings.get("autoanimations", "EnableCriticalMiss") && fumble):
            token = canvas.tokens.get(workflow.tokenId);
            new Sequence()
                .effect()
                .file(critMissAnim)
                .atLocation(token)
                .play()
            break;
    }
}
/*
/ WFRP Functions
*/
function wfrpWeapon(data, targets, info) {
    if (killAllAnimations) { return; }
    if (game.user.id !== info.user) { return }
    let item = data.weapon;
    let allTargets = Array.from(targets);
    let handler = new WFRP4eHandler(item, allTargets);
    switch (true) {
        case ((handler.animType === "t12") && (handler.animOverride)):
            teleportation(handler);
            break;
        default:
            trafficCop(handler);
    }
}
function wfrpPrayer(data, targets, info) {
    if (killAllAnimations) { return; }
    if (game.user.id !== info.user) { return }
    let item = data.prayer;
    let allTargets = Array.from(targets);
    let handler = new WFRP4eHandler(item, allTargets);
    switch (true) {
        case ((handler.animType === "t12") && (handler.animOverride)):
            teleportation(handler);
            break;
        default:
            trafficCop(handler);
    }
}
function wfrpCast(data, targets, info) {
    if (killAllAnimations) { return; }
    if (game.user.id !== info.user) { return }
    let item = data.spell;
    let allTargets = Array.from(targets);
    let handler = new WFRP4eHandler(item, allTargets);
    switch (true) {
        case ((handler.animType === "t12") && (handler.animOverride)):
            teleportation(handler);
            break;
        default:
            trafficCop(handler);
    }
}
function wfrpTrait(data, targets, info) {
    if (killAllAnimations) { return; }
    if (game.user.id !== info.user) { return }
    let item = data.trait;
    let allTargets = Array.from(targets);
    let handler = new WFRP4eHandler(item, allTargets);
    switch (true) {
        case ((handler.animType === "t12") && (handler.animOverride)):
            teleportation(handler);
            break;
        default:
            trafficCop(handler);
    }
}
function wfrpSkill(data, targets, info) {
    if (killAllAnimations) { return; }
    if (game.user.id !== info.user) { return }
    let item = data.skill;
    let allTargets = Array.from(targets);
    let handler = new WFRP4eHandler(item, allTargets);
    switch (true) {
        case ((handler.animType === "t12") && (handler.animOverride)):
            teleportation(handler);
            break;
        default:
            trafficCop(handler);
    }
}












