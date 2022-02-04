import { JB2APATREONDB } from "./animation-functions/databases/jb2a-patreon-database.js";
import { JB2AFREEDB } from "./animation-functions/databases/jb2a-free-database.js";
import { trafficCop } from "./router/traffic-cop.js";

import flagHandler from "./system-handlers/system-data.js";

import AAItemSettings from "./item-sheet-handlers/animateTab.js";
import aaSettings from "./settings.js";

import { teleportation } from "./animation-functions/teleportation.js";
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
        'modules/autoanimations/src/item-sheet-handlers/aa-templates/animation-menus/levels3d.html',
        'modules/autoanimations/src/item-sheet-handlers/aa-templates/animation-menus/add-3Dexplosion.html',
    ]);

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
Hooks.on("sequencerReady", () => {
    let obj01 = moduleIncludes("jb2a_patreon") === true ? JB2APATREONDB : JB2AFREEDB;

    Sequencer.Database.registerEntries("autoanimations", obj01, true);
    if (game.settings.get("autoanimations", "killAllAnim") === "off") {
        console.log("ANIMATIONS ARE OFF")
        socket.off('module.sequencer')//
        killAllAnimations = true;
    }
});

Hooks.once('ready', function () {
    aaSettings();

    let obj01 = moduleIncludes("jb2a_patreon") === true ? JB2APATREONDB : JB2AFREEDB;

    if (game.user.isGM && (!game.modules.get("JB2A_DnD5e") && !game.modules.get("jb2a_patreon"))) {
        ui.notifications.error(game.i18n.format("AUTOANIM.error"));
    }
    autoRecMigration.handle(game.settings.get('autoanimations', 'aaAutorec'))
    if (game.modules.get("midi-qol")?.active) {
        log("midi IS active");
        switch (game.settings.get("autoanimations", "playonDamage")) {
            case (true):
                Hooks.on("midi-qol.DamageRollComplete", (workflow) => { setUpMidi(workflow) });
                //Hooks.on('midi-qol.preambleComplete', (workflow) => { midiAOE(workflow) });
                Hooks.on("createChatMessage", (msg) => { midiTemplateAnimations(msg) });
                Hooks.on("midi-qol.RollComplete", (workflow) => { setUpMidiNoAttackDamage(workflow) });
                break;
            case (false):
                Hooks.on("midi-qol.AttackRollComplete", (workflow) => { setUpMidi(workflow) });
                Hooks.on("midi-qol.RollComplete", (workflow) => { setUpMidiNoAttack(workflow) });
                //Hooks.on('midi-qol.preambleComplete', (workflow) => { midiAOE(workflow) });
                Hooks.on("createChatMessage", (msg) => { midiTemplateAnimations(msg) });
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
                });
                break;
            case "tormenta20":
                Hooks.on("createChatMessage", async (msg) => { setupTormenta20(msg) });
                break;
            case "demonlord":
                Hooks.on("DL.Action", async (data) => { setupDemonLord(data) });
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
                Hooks.on("swadeAction", async (SwadeTokenOrActor, SwadeItem) => {
                    const controlledTokens = canvas.tokens.controlled;
                    let token;
                    if (controlledTokens.length > 0) {
                        token = controlledTokens.find(token => token.data.actorId === SwadeTokenOrActor.id);
                    }
                    if (token) { SwadeTokenOrActor = token; }
                    swadeData(SwadeTokenOrActor, SwadeItem)
                });
                Hooks.on("BRSW-RollItem", async (data, html) => {
                    var tokenId = data.getFlag("betterrolls-swade2", "token");
                    if (tokenId) {
                        var token = canvas.tokens.get(tokenId);

                        var itemId = data.getFlag("betterrolls-swade2", "item_id");
                        var item = token.actor.items.get(itemId);

                        swadeData(token, item)
                    } else {
                        var actorId = data.getFlag("betterrolls-swade2", "actor");
                        var actor = game.actors.get(actorId);

                        var itemId = data.getFlag("betterrolls-swade2", "item_id");
                        var item = actor.items.get(itemId);

                        swadeData(actor, item)
                    }
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
            case 'ose':
                Hooks.on("createChatMessage", async (msg) => { oseReady(msg) });
                break;
        }
    }

    Hooks.callAll("aa.ready", obj01)
});

const wait = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

/* External call for animations
* sourceToken as the originating token
* targets as an array from the user
* item as the item instance being used
* options to override settings e.g. playOnMiss: true, hitTargets: Array of TokenIDs
*/
class AutoAnimations {
    static async playAnimation(sourceToken, targets, item, options = {}) {
        if (killAllAnimations) { return; }
        const data = {
            token: sourceToken,
            targets: targets,
            item: item,
            ...options
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
    //console.log(handler)
    if (!handler.item || !handler.actorToken) {
        return;
    }
    if (handler.shouldPlayImmediately) { return; }
    //console.log("Damage vs Attack Hook, AA Settings")
    trafficCop(handler);
}
// setUpMidiNoAD for Animations on items that have NO Attack or Damage rolls. Active if Animate on Damage true
async function setUpMidiNoAttackDamage(workflow) {
    if (killAllAnimations) { return; }
    if (workflow.item?.hasAttack || workflow.item?.hasDamage) { return; }
    let handler = await flagHandler.make(workflow);
    if (!handler.item || !handler.actorToken) {
        return;
    }
    if (handler.shouldPlayImmediately) { return; }
    //console.log("no Attack or Damage, Midi-Roll Complete hook")
    //console.log(workflow)
    trafficCop(handler)
}
// setUpMidiNoD for Animations on items that have NO Attack Roll. Active only if Animating on Attack Rolls
async function setUpMidiNoAttack(workflow) {
    if (killAllAnimations) { return; }
    if (workflow.item?.hasAttack) { return; }
    let handler = await flagHandler.make(workflow);
    if (!handler.item || !handler.actorToken) {
        return;
    }
    if (handler.shouldPlayImmediately) { return; }
    //console.log("no Attack, Midi Roll Complete Hook")
    trafficCop(handler)
}
/*
// For AOE items when using Midi QOL
async function midiAOE(workflow) {
    if (killAllAnimations) { return; }
    const handler = await flagHandler.make(workflow);
    if (!handler.item || !handler.actorToken) {
        return;
    }
    if (handler.shouldPlayImmediately) {
        trafficCop(handler);
    } else { return; }
}
*/
// Special cases required when using Midi-QOL. Houses only the Template Animations right now
async function midiTemplateAnimations(msg) {
    if (killAllAnimations) { return; }
    if (game.user.id !== msg.user?.id) {
        return;
    }
    const handler = await flagHandler.make(msg, true);
    if (!handler.item || !handler.actorToken) {
        return;
    }
    let breakOut = checkMessege(msg);
    if ((handler.shouldPlayImmediately) && (breakOut === 0 || game.modules.get("betterrolls5e")?.active)) {
        trafficCop(handler);
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

    if (!handler.item || !handler.actorToken) {
        return;
    }

    switch (true) {
        case !handler.hasAttack && !handler.hasDamage:
            trafficCop(handler);
            break;
        case (handler.shouldPlayImmediately) && !rollType.includes("damage") && !rollType.includes("attack"):
            trafficCop(handler);
            break;
        case animationNow:
            if (rollType.includes("damage")) {
                if (handler.shouldPlayImmediately) { return; }
                trafficCop(handler);
            }
            break;
        case !animationNow:
            switch (true) {
                case game.modules.get("mre-dnd5e")?.active && game.settings.get("mre-dnd5e", "autoCheck") && !handler.hasAttack && handler.hasDamage && !rollType.includes("damage"):
                    trafficCop(handler);
                    break;
                case game.modules.get("mre-dnd5e")?.active && game.settings.get("mre-dnd5e", "autoCheck") && rollType.includes("damage"):
                    break;
                case rollType.includes("damage") && !handler.hasAttack:
                case rollType.includes('attack'):
                    if (handler.shouldPlayImmediately) { return; }
                    trafficCop(handler);
                    break;
                case game.modules.get("betterrolls5e")?.active && !handler.hasAttack && handler.hasDamage:
                    if (handler.shouldPlayImmediately) { return; }
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
    if (!handler.item || !handler.actorToken) {
        return;
    }
    trafficCop(handler)
}

/*
/ Sets Handler for SWADE
*/
async function swadeData(SwadeTokenOrActor, SwadeItem) {
    if (killAllAnimations) { return; }
    let data = { SwadeTokenOrActor, SwadeItem }
    let handler = await flagHandler.make(data);
    if (!handler.item || !handler.actorToken) {
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
    if (!handler.item || !handler.actorToken) {
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
    if (!handler.item || !handler.actorToken) {
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
    if (!handler.item || !handler.actorToken) {
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
    if (!handler.item || !handler.actorToken) {
        return;
    }

    const itemType = handler.itemType;
    let damage; //= /*handler.item.damageValue ||*/ //handler.item?.data.data.damage?.length || handler.item?.data?.data?.damage?.value["0"]?.value;
    const spellType = handler.item?.data?.data?.spellType?.value ?? "utility";
    const playOnDmg = game.settings.get("autoanimations", "playonDamageCore")
    if (handler.shouldPlayImmediately && !msg.data.flavor?.toLowerCase().includes("damage")) {
        trafficCop(handler);
        return;
    }
    if (handler.shouldPlayImmediately) { return };
    switch (itemType) {
        case "spell":
            damage = handler.item?.data?.data?.damage?.value["0"]?.value;
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

async function oseReady(input) {
    if (killAllAnimations) { return; }
    if (input.user.id !== game.user.id) { return };
    let handler = await flagHandler.make(input)
    if (!handler.item || !handler.actorToken) {
        return;
    }
    trafficCop(handler);
}












