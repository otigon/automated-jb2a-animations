import { JB2APATREONDB } from "./animation-functions/databases/jb2a-patreon-database.js";
import { JB2AFREEDB } from "./animation-functions/databases/jb2a-free-database.js";
import { trafficCop } from "./router/traffic-cop.js";
import { AutorecFunctions } from "./aa-classes/autorecFunctions.js";

import flagHandler from "./system-handlers/flag-handler.js";

import AAItemSettings from "./item-sheet-handlers/animateTab.js";
import aaSettings from "./settings.js";
import { AASystemData } from "./system-handlers/getdata-by-system.js";

import { teleportation } from "./animation-functions/teleportation.js";
import { templateAnimation } from "./animation-functions/templateAnimation.js";
import { setupSocket } from "./socketset.js";
import { flagMigrations } from "./system-handlers/flagMerge.js";
import { autoRecMigration } from "./custom-recognition/autoRecMerge.js";
const log = () => { };

Hooks.once('setup', function () {
    setupSocket();
});
var killAllAnimations;
export function disableAnimations() {
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
    Handlebars.registerHelper('aaConcat', function (...params) {
        // Ignore the object appended by handlebars.
        if (typeof params[params.length - 1] === 'object') {
            params.pop();
        }

        return params.join('');
    });
    Handlebars.registerHelper('matchOverhead', function (autoObj, options) {
        if (autoObj.persist && (autoObj.type === 'circle' || autoObj.type === 'rect')) {
            return options.fn(this);
        }
        return options.inverse(this);
    });
    Handlebars.registerHelper('sequencerOnly', function (autoObj, options) {
        if (autoObj.persist && (autoObj.type === 'ray' || autoObj.type === 'cone')) {
            return options.fn(this);
        }
        return options.inverse(this);
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
        'modules/autoanimations/src/item-sheet-handlers/aa-templates/animations.html',
        'modules/autoanimations/src/item-sheet-handlers/aa-templates/item-audio.html',
        'modules/autoanimations/src/item-sheet-handlers/aa-templates/pre-postfx.html',
        'modules/autoanimations/src/item-sheet-handlers/aa-templates/animation-menus/item-melee.html',
        'modules/autoanimations/src/item-sheet-handlers/aa-templates/animation-menus/item-ranged.html',
        'modules/autoanimations/src/item-sheet-handlers/aa-templates/animation-menus/item-ontoken.html',
        'modules/autoanimations/src/item-sheet-handlers/aa-templates/animation-menus/item-templates.html',
        'modules/autoanimations/src/item-sheet-handlers/aa-templates/animation-menus/item-auras.html',
        'modules/autoanimations/src/item-sheet-handlers/aa-templates/animation-menus/item-presets.html',
        'modules/autoanimations/src/item-sheet-handlers/aa-templates/animation-menus/item-autoOverride.html',
        'modules/autoanimations/src/item-sheet-handlers/aa-templates/animation-menus/add-explosion.html',
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
            case "demonlord":
                Hooks.on("DL.Action", setupDemonLord);
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
    aaBtn.click(async ev => {
        await flagMigrations.handle(app.document);
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
    autoRecMigration.handle(game.settings.get('autoanimations', 'aaAutorec'))
    Hooks.callAll("aa.ready", obj01)
});

const wait = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

/* External call for animations
* sourcToken as the originating token
* targets as an array from the user
* item as the item instance being used
*/
class AutoAnimations {
    static async playAnimation(sourceToken, targets, item) {
        if (killAllAnimations) { return; }
        const data = {
            token: sourceToken,
            targets: targets,
            item: item,
        }
        let handler = await flagHandler.make(null, null, data)
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
async function setUpMidi(workflow) {
    if (killAllAnimations) { return; }
    let handler = await flagHandler.make(workflow);
    if (!handler.item || !handler.actorToken) {
        return;
    }
    const templateItem = AutorecFunctions._autorecNameCheck(AutorecFunctions._getAllNames(game.settings.get('autoanimations', 'aaAutorec'), 'templates'), AutorecFunctions._rinseName(handler.itemName));
    if (templateItem && !handler.animOverride) { return; }
    if ((handler.animType === "template" && handler.animOverride) || (handler.animType === 'preset' && handler.animation === 'fireball' && handler.animOverride)) { return; }
    trafficCop(handler);
}
// setUpMidiNoAD for Animations on items that have NO Attack or Damage rolls. Active if Animate on Damage true
async function setUpMidiNoAD(workflow) {
    if (killAllAnimations) { return; }
    if (workflow.item?.hasAttack && workflow.item?.hasDamage) { return; }
    let handler = await flagHandler.make(workflow);
    if (!handler.item || !handler.actorToken) {
        return;
    }
    const templateItem = AutorecFunctions._autorecNameCheck(AutorecFunctions._getAllNames(game.settings.get('autoanimations', 'aaAutorec'), 'templates'), AutorecFunctions._rinseName(handler.itemName));
    if (templateItem && !handler.animOverride) { return; }
    if ((handler.animType === "template" && handler.animOverride) || (handler.animType === 'preset' && handler.animation === 'fireball' && handler.animOverride)) { return; }
    trafficCop(handler)
}
// setUpMidiNoD for Animations on items that have NO Attack Roll. Active only if Animating on Attack Rolls
async function setUpMidiNoA(workflow) {
    if (killAllAnimations) { return; }
    if (workflow.item?.hasAttack) { return; }
    let handler = await flagHandler.make(workflow);
    if (!handler.item || !handler.actorToken) {
        return;
    }
    const autoRecSettings = game.settings.get('autoanimations', 'aaAutorec');
    const autoName = AutorecFunctions._rinseName(handler.itemName);
    const getObject = AutorecFunctions._findObjectFromArray(autoRecSettings, autoName)
    let fireball;
    if (getObject) {
        fireball = getObject.menuSection === 'preset' && (getObject.animation === 'fireball') ? true : false;
    }

    const templateItem = AutorecFunctions._autorecNameCheck(AutorecFunctions._getAllNames(game.settings.get('autoanimations', 'aaAutorec'), 'templates'), AutorecFunctions._rinseName(handler.itemName));
    if ((templateItem || fireball) && !handler.animOverride) { return; }
    if ((handler.animType === "template" && handler.animOverride) || (handler.animType === 'preset' && handler.animation === 'fireball' && handler.animOverride)) { return; }
    trafficCop(handler)
}

// Special cases required when using Midi-QOL. Houses only the Template Animations right now
async function specialCaseAnimations(msg) {
    if (killAllAnimations) { return; }
    if (game.user.id !== msg.user?.id) {
        return;
    }

    const data = AASystemData["dnd5e"](msg, true);
    if (!data || !data.item || !data.token) { return; }
    const itemType = data.item.data?.flags?.autoanimations?.animType;

    const autoRecSettings = game.settings.get('autoanimations', 'aaAutorec');
    const autoName = data.item.name ? AutorecFunctions._rinseName(data.item.name.toLowerCase()) : "noitem";
    const getObject = AutorecFunctions._findObjectFromArray(autoRecSettings, autoName);
    let fireball;
    if (getObject) {
        fireball = getObject.menuSection === 'preset' && (getObject.animation === 'fireball') ? true : false;
    }

    const templateItem = AutorecFunctions._autorecNameCheck(AutorecFunctions._getAllNames(game.settings.get('autoanimations', 'aaAutorec'), 'templates'), AutorecFunctions._rinseName(data.item.name.toLowerCase()));
    if (((itemType === "template" || itemType === "t8") || itemType === "preset" && data.item.data?.flags?.autoanimations?.animation === "fireball") || ((templateItem || fireball) && !data.item.data?.flags?.autoanimations?.override)) { } else {
        return;
    }

    let breakOut = checkMessege(msg);
    if (breakOut === 0 || game.modules.get("betterrolls5e")?.active) {
        let handler = await flagHandler.make(msg, true);
        if (!handler.item || !handler.actorToken) {
            return;
        }
        //const autoRecSettings = game.settings.get('autoanimations', 'aaAutorec');
        //const autoName = AutorecFunctions._rinseName(handler.itemName);
        //const getObject = AutorecFunctions._findObjectFromArray(autoRecSettings, autoName)
        //let fireball;
        //if (getObject) {
        //    fireball = getObject.menuSection === 'preset' && (getObject.animation === 'fireball') ? true : false;
        //}    
        if (handler.animType === "template" && handler.animOverride) {
            Hooks.once("createMeasuredTemplate", (msg) => {
                templateAnimation(handler);
            })
            return;
        }
        if (handler.animType === 'preset' && handler.animation === 'fireball' && handler.animOverride) {
            trafficCop(handler);
            return;
        }
        //const templateItem = AutorecFunctions._autorecNameCheck(AutorecFunctions._getAllNames(game.settings.get('autoanimations', 'aaAutorec'), 'templates'), AutorecFunctions._rinseName(handler.itemName));
        if ((templateItem || fireball) && !handler.animOverride) {
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
async function setUp5eCore(msg) {
    if (killAllAnimations) { return; }
    if (msg.user.id !== game.user.id) { return };

    const animationNow = game.settings.get("autoanimations", "playonDamageCore");
    let handler;
    let rollType;
    switch (game.system.id) {
        case "dnd5e":
            handler = await flagHandler.make(msg);
            rollType = (msg.data?.flags?.dnd5e?.roll?.type?.toLowerCase() ?? msg.data?.flavor?.toLowerCase() ?? "pass");
            break;
        case "sw5e":
            handler = await flagHandler.make(msg);
            rollType = msg.data?.flags?.sw5e?.roll?.type?.toLowerCase() ?? "pass";
            break;
    }
    if (!handler.item || !handler.actorToken || handler.animKill) {
        return;
    }

    const autoRecSettings = game.settings.get('autoanimations', 'aaAutorec');

    const autoName = AutorecFunctions._rinseName(handler.itemName);

    const getObject = AutorecFunctions._findObjectFromArray(autoRecSettings, autoName)

    let fireball;
    if (getObject) {
        fireball = getObject.menuSection === 'preset' && (getObject.animation === 'fireball') ? true : false;
    }

    const templateItem = AutorecFunctions._autorecNameCheck(AutorecFunctions._getAllNames(autoRecSettings, 'templates'), AutorecFunctions._rinseName(handler.itemName));
    const t5Template = handler.animType === "template" && handler.animOverride ? true : false;
    switch (true) {
        case !handler.hasAttack && !handler.hasDamage:
            trafficCop(handler);
            break;
        case handler.animType === "template" && !rollType.includes("damage") && handler.animOverride:
            trafficCop(handler);
            break;
        case (templateItem || fireball) && !rollType.includes("damage") && !rollType.includes("attack"):
            trafficCop(handler);
            break;
        case animationNow:
            if (rollType.includes("damage")) {
                if (t5Template || templateItem || fireball) { return; }
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
                    if (t5Template || templateItem || fireball) { return; }
                    trafficCop(handler);
                    break;
                case game.modules.get("betterrolls5e")?.active && !handler.hasAttack && handler.hasDamage:
                    if (t5Template || templateItem || fireball) { return; }
                    trafficCop(handler);
                    break;
            }
            break;
    }
}

/*
/ sets Handler for PF1 and DnD3.5
*/
async function onCreateChatMessage(msg) {
    if (killAllAnimations) { return; }
    if (msg.user.id !== game.user.id) { return };
    log('onCreateChatMessage', msg);
    let handler;
    switch (game.system.id) {
        case "pf1":
            handler = await flagHandler.make(msg);
            break;
        case "D35E":
            handler = await flagHandler.make(msg);
            break;
    }
    if (!handler?.item || !handler?.actorToken || handler?.animKill) {
        return;
    }
    trafficCop(handler)
}

/*
/ Sets Handler for SWADE
*/
async function swadeData(SwadeActor, SwadeItem) {
    if (killAllAnimations) { return; }
    let data = { SwadeActor, SwadeItem }
    let handler = await flagHandler.make(data);
    if (!handler.item || !handler.actorToken || handler.animKill) {
        return;
    }
    trafficCop(handler);
}

/*
/ Sets Handler for Starfinder
*/
async function starFinder(data, msg) {
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
async function setupTormenta20(msg) {
    if (killAllAnimations) { return; }
    let handler = await flagHandler.make(msg);
    if (!handler.item || !handler.actorToken || handler.animKill) {
        return;
    }
    if (game.user.id === msg.user.id) {
        switch (true) {
            case ((handler.animType === "t12") && (handler.animOverride)):
                teleportation(handler);
                break;
        }
    }
    if (game.user.id !== msg.user.id) {
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
    const handler = await flagHandler.make(msg);
    if (!handler.item || !handler.actorToken || handler.animKill) {
        return;
    }
    trafficCop(handler);
}
/*
/ Sets Handler for Demon Lord
*/
async function setupDemonLord(data) {
    if (killAllAnimations) { return; }
    let handler = await flagHandler.make(data);
    if (!handler.item || !handler.actorToken || handler.animKill) {
        return;
    }
    trafficCop(handler);
}

/*
/ Sets Handler for Pathfinder 2e and routes to animations
*/
async function pf2eReady(msg) {
    if (killAllAnimations) { return; }
    if (game.user.id !== msg.user.id) { return; }
    const handler = await flagHandler.make(msg);
    if (!handler.item || !handler.actorToken || handler.animKill) {
        return;
    }

    const autoRecSettings = game.settings.get('autoanimations', 'aaAutorec');
    const autoName = AutorecFunctions._rinseName(handler.itemName);
    const getObject = AutorecFunctions._findObjectFromArray(autoRecSettings, autoName)
    let fireball;
    if (getObject) {
        fireball = getObject.menuSection === 'preset' && (getObject.animation === 'fireball') ? true : false;
    }

    const templateItem = AutorecFunctions._autorecNameCheck(AutorecFunctions._getAllNames(autoRecSettings, 'templates'), AutorecFunctions._rinseName(handler.itemName));
    const t5Template = handler.animType === "template" && handler.animOverride ? true : false;
    const itemType = handler.itemType;
    const damage = /*handler.item.damageValue || */handler.item?.damage?.length;

    const spellType = handler.item?.data?.data?.spellType?.value ?? "utility";
    const playOnDmg = game.settings.get("autoanimations", "playonDamageCore")
    if (t5Template) {
        if (msg.data.flavor?.toLowerCase().includes("damage")) { return; }
        trafficCop(handler);
        return;
    }
    if ((templateItem || fireball) && !t5Template && !msg.data.flavor?.toLowerCase().includes("damage")) {
        trafficCop(handler);
        return;
    }
    if (templateItem || fireball || t5Template) { return };
    switch (itemType) {
        case "spell":
            switch (spellType) {
                case "utility":
                    if (!damage) {
                        trafficCop(handler);
                    } else if (msg.data.flavor?.toLowerCase().includes("damage")) {
                        trafficCop(handler);
                    }
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
                    if (handler.item.data?.data?.category?.value === "focus") {
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
async function wfrpWeapon(data, targets, info) {
    if (killAllAnimations) { return; }
    if (game.user.id !== info.user) { return }
    let handler = await flagHandler.make({ item: data.weapon, targets: targets, info: info });
    switch (true) {
        case ((handler.animType === "t12") && (handler.animOverride)):
            teleportation(handler);
            break;
        default:
            trafficCop(handler);
    }
}
async function wfrpPrayer(data, targets, info) {
    if (killAllAnimations) { return; }
    if (game.user.id !== info.user) { return }
    let handler = await flagHandler.make({ item: data.prayer, targets: targets, info: info });
    switch (true) {
        case ((handler.animType === "t12") && (handler.animOverride)):
            teleportation(handler);
            break;
        default:
            trafficCop(handler);
    }
}
async function wfrpCast(data, targets, info) {
    if (killAllAnimations) { return; }
    if (game.user.id !== info.user) { return }
    let handler = await flagHandler.make({ item: data.spell, targets: targets, info: info });
    switch (true) {
        case ((handler.animType === "t12") && (handler.animOverride)):
            teleportation(handler);
            break;
        default:
            trafficCop(handler);
    }
}
async function wfrpTrait(data, targets, info) {
    if (killAllAnimations) { return; }
    if (game.user.id !== info.user) { return }
    let handler = await flagHandler.make({ item: data.trait, targets: targets, info: info });
    switch (true) {
        case ((handler.animType === "t12") && (handler.animOverride)):
            teleportation(handler);
            break;
        default:
            trafficCop(handler);
    }
}
async function wfrpSkill(data, targets, info) {
    if (killAllAnimations) { return; }
    if (game.user.id !== info.user) { return }
    let handler = await flagHandler.make({ item: data.skill, targets: targets, info: info });
    switch (true) {
        case ((handler.animType === "t12") && (handler.animOverride)):
            teleportation(handler);
            break;
        default:
            trafficCop(handler);
    }
}












