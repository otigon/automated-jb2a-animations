import { JB2APATREONDB } from "./animation-functions/databases/jb2a-patreon-database.js";
import { JB2AFREEDB } from "./animation-functions/databases/jb2a-free-database.js";
import { trafficCop } from "./router/traffic-cop.js";

import { jb2aAAPatreonDatabase } from "./animation-functions/databases/jb2a-patreon-database.js";
import { jb2aAAFreeDatabase } from "./animation-functions/databases/jb2a-free-database.js";

import systemData from "./system-handlers/system-data.js";
import { createActiveEffects5e, deleteActiveEffects5e, checkConcentration, toggleActiveEffects5e } from "./active-effects/ae5e.js";
import { createActiveEffectsPF2e, deleteActiveEffectsPF2e } from "./active-effects/pf2e/aepf2e.js";
import { createActiveEffectsPF1, deleteActiveEffectsPF1 } from "./active-effects/pf1/aePF1.js";
import { createActiveEffectswfrp4e, deleteActiveEffectswfrp4e } from "./active-effects/wfrp4e/aewfrp4e.js";
import { deleteEffectsSfrpg } from "./active-effects/sfrpg/aeSfrpg.js"

import AAItemSettings from "./item-sheet-handlers/animateTab.js";
import AAActiveEffectMenu from "./active-effects/aeMenus/activeEffectApp.js";
import aaSettings from "./settings.js";

import { teleportation } from "./animation-functions/teleportation.js";
import { setupSocket } from "./socketset.js";
import { flagMigrations } from "./system-handlers/flagMerge.js";
import { autoRecMigration } from "./custom-recognition/autoRecMerge.js";
const log = () => { };

Hooks.once('socketlib.ready', function () {
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
        if (autoObj.persist && (autoObj.menuType === 'circle' || autoObj.menuType === 'square')) {
            return options.fn(this);
        }
        return options.inverse(this);
    });
    Handlebars.registerHelper('sequencerOnly', function (autoObj, options) {
        if (autoObj.persist && (autoObj.menuType === 'ray' || autoObj.menuType === 'cone')) {
            return options.fn(this);
        }
        return options.inverse(this);
    });
    Handlebars.registerHelper('isAeSupported', function (options) {
        let supportedSystems = ['dnd5e', 'pf2e', 'pf1', 'wfrp4e', 'sfrpg']
        if (supportedSystems.includes(game.system.id)) {
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
        'modules/autoanimations/src/item-sheet-handlers/aa-templates/macrocall.html',
        'modules/autoanimations/src/active-effects/aeMenus/ae-animations.html',
        'modules/autoanimations/src/active-effects/aeMenus/ae-autorecMenu.html',
        'modules/autoanimations/src/custom-recognition/import-data.html',
    ]);

})

// sets the A-A button on the Item Sheet title bar
Hooks.on(`renderItemSheet`, async (app, html, data) => {
    if (!game.user.isGM && game.settings.get("autoanimations", "hideFromPlayers")) {
        return;
    }
    const pf2eRuleTypes = ['condition', 'effect'];
    const aaBtn = $(`<a class="aa-item-settings" title="A-A"><i class="fas fa-biohazard"></i>A-A</a>`);
    aaBtn.click(async ev => {
        await flagMigrations.handle(app.document);
        // if this is a PF1 "Buff" effect or PF2e Ruleset Item (Active Effects) spawn the Active Effect menu. Otherwise continue as normal
        if ((game.system.id === 'pf1' && app.item?.type === 'buff') || (game.system.id === 'pf2e' && pf2eRuleTypes.includes(app.item?.type))) {
            new AAActiveEffectMenu(app.document, {}).render(true);
        } else {
            new AAItemSettings(app.document, {}).render(true);
        }
    });
    html.closest('.app').find('.aa-item-settings').remove();
    let titleElement = html.closest('.app').find('.window-title');
    aaBtn.insertAfter(titleElement);
});

Hooks.on(`renderActiveEffectConfig`, async (app, html, data) => {
    if (!game.user.isGM && game.settings.get("autoanimations", "hideFromPlayers")) {
        return;
    }
    const aaBtn = $(`<a class="aa-item-settings" title="A-A"><i class="fas fa-biohazard"></i>A-A</a>`);
    aaBtn.click(async ev => {
        await flagMigrations.handle(app.document);
        new AAActiveEffectMenu(app.document, {}).render(true);
    });
    html.closest('.app').find('.aa-item-settings').remove();
    let titleElement = html.closest('.app').find('.window-title');
    aaBtn.insertAfter(titleElement);
});

// Registers Database with Sequencer
Hooks.on("aa.ready", () => {
    let obj01 = moduleIncludes("jb2a_patreon") === true ? JB2APATREONDB : JB2AFREEDB;
    Sequencer.Database.registerEntries("autoanimations", obj01, true);
    if (game.settings.get("autoanimations", "killAllAnim") === "off") {
        console.log("ANIMATIONS ARE OFF")
        socket.off('module.sequencer')//
        killAllAnimations = true;
    }
});

Hooks.once('ready', async function () {
    aaSettings();
    const s3Check = game.settings.get('autoanimations', 'jb2aLocation');
    const jb2aPatreonFound = moduleIncludes("jb2a_patreon");
    //const jb2aFreeFound = moduleIncludes("JB2A_DnD5e");
    let jb2aPath = game.settings.get('autoanimations', 'jb2aLocation');
    let s3Patreon;
  
    if (!jb2aPath || jb2aPath === "null") { 
        if (jb2aPatreonFound) {
            jb2aPath = 'modules/jb2a_patreon'
        } else {
            jb2aPath = 'modules/JB2A_DnD5e'
        }
    } else {
        if (jb2aPath.includes('patreon')) {
            s3Patreon = true;
        }
    }
    /*
    if (moduleIncludes("jb2a_patreon")) {
        await jb2aAAPatreonDatabase(jb2aPath)
    } else {
        await jb2aAAFreeDatabase(jb2aPath)
    }
    */
    let obj01;
    if (jb2aPatreonFound || s3Patreon) {
        await jb2aAAPatreonDatabase(jb2aPath)
        obj01 = JB2APATREONDB;
    } else {
        await jb2aAAFreeDatabase(jb2aPath)
        obj01 = JB2AFREEDB;
    }

    if (game.user.isGM && (!game.modules.get("JB2A_DnD5e") && !game.modules.get("jb2a_patreon"))) {
        if (s3Check && (s3Check.includes('jb2a_patreon') || s3Check.includes('JB2A_DnD5e'))) { } else {
            ui.notifications.error(game.i18n.format("AUTOANIM.error"));
        }
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
            case "a5e":
                Hooks.on("createChatMessage", async (msg) => { setupA5ESystem(msg) });
                break;
			case "cyphersystem":
                Hooks.on("createChatMessage", async (msg) => { setupCypherSystem(msg) });
                break;
            case "alienrpg":
                Hooks.on("createChatMessage", async (msg) => { setupAlienRPG(msg) });
                break;
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
                    const itemId = extractItemId(msg.data.content);
                    if (!itemId) { return; }
                    const tokenId = msg.data.speaker.token;
                    const sourceToken = canvas.tokens.get(tokenId) || canvas.tokens.placeables.find(token => token.actor?.items?.get(itemId));

                    if (!sourceToken) { return; }

                    const item = sourceToken.actor?.items?.get(itemId)
                    if (item.type === 'feat') { return; }

                    if (!item.hasAttack && !item.hasDamage) {
                        let data = {}
                        starFinder(data, msg)
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
                Hooks.on("swadeAction", async (SwadeTokenOrActor, SwadeItem) => {
                    const controlledTokens = canvas.tokens.controlled;
                    let token;
                    if (controlledTokens.length > 0) {
                        token = controlledTokens.find(token => token.data.actorId === SwadeTokenOrActor.id);
                    }
                    if (token) { SwadeTokenOrActor = token; }
                    swadeData(SwadeTokenOrActor, SwadeItem)
                });
                async function get_brsw_data (data) {
                    var tokenId = data.getFlag("betterrolls-swade2", "token");
                    if (tokenId) {
                        var token = canvas.tokens.get(tokenId);
                        var itemId = data.getFlag("betterrolls-swade2", "item_id");
                        var item = token.actor.items.get(itemId);
                        const actorOrToken = token
                        return {actorOrToken, item}
                    } else {
                        var actorId = data.getFlag("betterrolls-swade2", "actor");
                        var actor = game.actors.get(actorId);
                        var itemId = data.getFlag("betterrolls-swade2", "item_id");
                        var item = actor.items.get(itemId);
                        const actorOrToken = actor
                        return {actorOrToken, item}
                    }
                }
                Hooks.on("BRSW-RollItem", async (data, html) => {
                    const {actorOrToken, item} = await get_brsw_data (data)
                    if (item.data.flags?.autoanimations?.animType === "template" || (item.data.flags?.autoanimations?.animType === "preset" && item.data.flags?.autoanimations?.animation === "fireball")) {
                        return //Return to prevent duplicate effects on placing a template.
                    } else { swadeData(actorOrToken, item) }
                });
                Hooks.on("BRSW-BeforePreviewingTemplate", async (template, data, ev) => {
                    const {actorOrToken, item} = await get_brsw_data (data)
                    swadeData(actorOrToken, item)
                })
                Hooks.on("BRSW-CreateItemCardNoRoll", async (data) => {
                    const {actorOrToken, item} = await get_brsw_data (data)
                    if (item.data.flags?.autoanimations?.animType === "template" || (item.data.flags?.autoanimations?.animType === "preset" && item.data.flags?.autoanimations?.animation === "fireball")) {
                        return //Return to prevent duplicate effects on placing a template.
                    } else { swadeData(actorOrToken, item) }
                })
                break;
            case "wfrp4e":
                Hooks.on("wfrp4e:rollWeaponTest", async (data, info) => {
                    //let targets = game.user.targets;
                    wfrpWeapon(data, info)
                });
                Hooks.on("wfrp4e:rollPrayerTest", async (data, info) => {
                    //let targets = game.user.targets;
                    wfrpPrayer(data, info)
                });
                Hooks.on("wfrp4e:rollCastTest", async (data, info) => {
                    //let targets = game.user.targets;
                    wfrpCast(data, info)
                });
                Hooks.on("wfrp4e:rollTraitTest", async (data, info) => {
                    //let targets = game.user.targets;
                    wfrpTrait(data, info)
                });
                Hooks.on("wfrp4e:rollTest", async (data, info) => {
                    //let targets = game.user.targets;
                    wfrpSkill(data, info)
                });
                
                break;
            case 'ose':
                Hooks.on("createChatMessage", async (msg) => { oseReady(msg) });
                break;
            case 'dcc':
                Hooks.on("createChatMessage", async (msg) => { dccReady(msg) });
                break;
        }
    }
    //Active Effect Hooks
    switch (game.system.id) {
        case "sfrpg":
            Hooks.on("createActiveEffect", (item, data, userId) => {
                if (game.user.id !== userId) { return; }
                createActiveEffects5e(item);
            })
            Hooks.on("preDeleteActiveEffect", (item, data, userId) => {
                if (game.user.id !== userId) { return; }
                deleteActiveEffects5e(item)
            })
            //Hooks.on("itemActivationChanged", (actor, isActive, item) => {
            //})
            
            Hooks.on("updateItem", (item, diff, action, userId) => {
                if (game.user.id !== userId) { return; }
                Hooks.once("updateToken", async (token, actor, updates, userId) => {
                    if (game.user.id !== userId) { return; }
                    if (item.type !== 'feat') { return; }

                    if (!diff.data.isActive) {
                        deleteEffectsSfrpg(item, token)
                    } else {
                        const sfrpgData = {
                            item,
                            token,
                            targets: game.user.targets
                        }
                        const handler = await systemData.make(sfrpgData)
                        console.log(handler)
                        trafficCop(handler);
                    }
                })
            })
            
           /*
            // Alternative option... not as useful because Update Token is called so much
            Hooks.on("updateToken", async (token, actor, updates, userId) => {
                if (game.user.id !== userId) { return; }
                const itemId = Object.keys(updates.embedded?.hookData || {})[0]
                if (!itemId) {return;}
                const item = token.actor?.items?.get(itemId)
                if (!item) {return;}
                if (item.type !== 'feat') { return; }
                const activeStatus = updates.embedded?.hookData?.[item.id]?.data?.isActive;
                if (!activeStatus) {
                    deleteEffectsSfrpg(item, token)
                } else if (activeStatus){
                    const sfrpgData = {
                        item,
                        token,
                        targets: game.user.targets
                    }
                    const handler = await systemData.make(sfrpgData)
                    console.log(handler)
                    trafficCop(handler);
                }
            })
            */
            break;
        case "dnd5e":
            Hooks.on("createActiveEffect", (effect, data, userId) => {
                if (game.settings.get("autoanimations", "disableAEAnimations")) {
                    console.log(`DEBUG | Automated Animations | Active Effect Animations are Disabled`);
                    return;
                }
                if (game.user.id !== userId) { return; }
                createActiveEffects5e(effect)
            });
            Hooks.on("deleteActiveEffect", (effect, data, userId) => {
                if (game.user.id !== userId) { return; }

                deleteActiveEffects5e(effect)
                if (game.modules.get('midi-qol')?.active) {

                    checkConcentration(effect)
                }
            });
            Hooks.on("updateActiveEffect", (data, toggle, other, userId) => {
                if (game.settings.get("autoanimations", "disableAEAnimations")) {
                    console.log(`DEBUG | Automated Animations | Active Effect Animations are Disabled`);
                    return;
                }
                if (game.user.id !== userId) { return; }
                toggleActiveEffects5e(data, toggle)
            });
            //}
            break;
        case 'pf2e':
            Hooks.on("createItem", (item, data, userId) => {
                if (game.user.id !== userId) { return; }
                createActiveEffectsPF2e(item);
            })
            Hooks.on("deleteItem", (item, data, userId) => {
                if (game.user.id !== userId) { return; }
                deleteActiveEffectsPF2e(item)
            })
            break;
        case "pf1":
            Hooks.on("createActiveEffect", (effect, data, userId) => {
                if (game.settings.get("autoanimations", "disableAEAnimations")) {
                    console.log(`DEBUG | Automated Animations | Active Effect Animations are Disabled`);
                    return;
                }
                if (game.user.id !== userId) { return; }
                createActiveEffectsPF1(effect)
            });
            Hooks.on("deleteActiveEffect", (effect, data, userId) => {
                if (game.user.id !== userId) { return; }

                deleteActiveEffectsPF1(effect)
            });
            /*
            Hooks.on("updateActiveEffect", (data, toggle, other, userId) => {
                if (game.settings.get("autoanimations", "disableAEAnimations")) {
                    console.log(`DEBUG | Automated Animations | Active Effect Animations are Disabled`);
                    return;
                }
                if (game.user.id !== userId) { return; }
                toggleActiveEffectsPF1(data, toggle)
            });
            */
            //}
            break;
            case 'wfrp4e':
                Hooks.on("createActiveEffect", (item, data, userId) => {
                    if (game.user.id !== userId) { return; }
                    createActiveEffectswfrp4e(item);
                })
                Hooks.on("preDeleteActiveEffect", (item, data, userId) => {
                    if (game.user.id !== userId) { return; }
                    deleteActiveEffectswfrp4e(item)
                })
                break;
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
        let handler = await systemData.make(null, null, data)
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
    let handler = await systemData.make(workflow);
    if (!handler.item || !handler.sourceToken) {
        return;
    }
    if (handler.shouldPlayImmediately) { return; }
    trafficCop(handler);
}
// setUpMidiNoAD for Animations on items that have NO Attack or Damage rolls. Active if Animate on Damage true
async function setUpMidiNoAttackDamage(workflow) {
    if (killAllAnimations) { return; }
    if (workflow.item?.hasAttack || workflow.item?.hasDamage) { return; }
    let handler = await systemData.make(workflow);
    if (!handler.item || !handler.sourceToken) {
        return;
    }
    if (handler.shouldPlayImmediately) { return; }
    trafficCop(handler)
}
// setUpMidiNoD for Animations on items that have NO Attack Roll. Active only if Animating on Attack Rolls
async function setUpMidiNoAttack(workflow) {
    if (killAllAnimations) { return; }
    if (workflow.item?.hasAttack) { return; }
    let handler = await systemData.make(workflow);
    if (!handler.item || !handler.sourceToken) {
        return;
    }
    if (handler.shouldPlayImmediately) { return; }
    trafficCop(handler)
}
/*
// For AOE items when using Midi QOL
async function midiAOE(workflow) {
    if (killAllAnimations) { return; }
    const handler = await systemData.make(workflow);
    if (!handler.item || !handler.sourceToken) {
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
    const handler = await systemData.make(msg, true);
    if (!handler.item || !handler.sourceToken) {
        return;
    }
    //let breakOut = checkMessege(msg);
    if ((handler.shouldPlayImmediately) /*&& (breakOut === 0 || game.modules.get("betterrolls5e")?.active)*/) {
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
* Midi-QOL Critical Hit and Fumble animations
*
*/
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
            handler = await systemData.make(msg);
            rollType = (msg.data?.flags?.dnd5e?.roll?.type?.toLowerCase() ?? msg.data?.flavor?.toLowerCase() ?? "pass");
            break;
        case "sw5e":
            handler = await systemData.make(msg);
            rollType = msg.data?.flags?.sw5e?.roll?.type?.toLowerCase() ?? "pass";
            break;
    }

    if (!handler.item || !handler.sourceToken) {
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
            handler = await systemData.make(msg);
            break;
        case "D35E":
            handler = await systemData.make(msg);
            break;
    }
    if (!handler.item || !handler.sourceToken) {
        return;
    }
    trafficCop(handler)
}

/*
/ Sets Handler for Star Wars FFG
*/
async function swffgReady(msg) {
    if (killAllAnimations) { return; }
    if (game.user.id !== msg.user.id) { return }
    let handler = await systemData.make(msg);
    if (!handler.item || !handler.sourceToken) {
        return;
    }
    trafficCop(handler);
}

/*
/ Sets Handler for SWADE
*/
async function swadeData(SwadeTokenOrActor, SwadeItem) {
    if (killAllAnimations) { return; }
    let data = { SwadeTokenOrActor, SwadeItem }
    let handler = await systemData.make(data);
    if (!handler.item || !handler.sourceToken) {
        return;
    }
    trafficCop(handler);
}

/*
/ Sets Handler for Starfinder
*/
async function starFinder(data, msg) {
    if (killAllAnimations) { return; }
    const sfrpgData = { data, msg }
    const handler = await systemData.make(sfrpgData)
    //let tokenId = msg.data.speaker.token;
    //let sourceToken = canvas.tokens.get(tokenId);
    //let targets = Array.from(msg.user.targets);
    //let item = data.item;
    //AutoAnimations.playAnimation(sourceToken, targets, item)
    trafficCop(handler);
}

/*
/ Sets Handler for Cypher System
*/
async function setupCypherSystem(msg) {
    if (killAllAnimations) { return; }
    if (game.user.id !== msg.user.id) {
        return;
    }
    let handler = await systemData.make(msg);
    if (!handler.item || !handler.sourceToken) {
        return;
    }

    trafficCop(handler);
}

/*
/ Sets Handler for Tormenta 20
*/
async function setupTormenta20(msg) {
    if (killAllAnimations) { return; }
    if (game.user.id !== msg.user.id) {
        return;
    }
    let handler = await systemData.make(msg);
    if (!handler.item || !handler.sourceToken) {
        return;
    }
    /*
    if (game.user.id === msg.user.id) {
        switch (true) {
            case ((handler.animType === "t12") && (handler.isCustomized)):
                teleportation(handler);
                break;
        }
    }
    */
    trafficCop(handler);
}

/*
/ Sets Handler for Forbidden Lands
*/
async function fblReady(msg) {
    if (killAllAnimations) { return; }
    if (game.user.id !== msg.user.id) { return; }
    const handler = await systemData.make(msg);
    if (!handler.item || !handler.sourceToken) {
        return;
    }
    trafficCop(handler);
}
/*
/ Sets Handler for Demon Lord
*/
async function setupDemonLord(data) {
    if (killAllAnimations) { return; }
    let handler = await systemData.make(data);
    if (!handler.item || !handler.sourceToken) {
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
    const handler = await systemData.make(msg);
    if (!handler.item || !handler.sourceToken) {
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

async function setupA5ESystem(msg) {
    if (killAllAnimations) { return; }
    if (msg.user.id !== game.user.id) { return; }

    const handler = await systemData.make(msg);
    if (!handler.item || !handler.sourceToken) { return; } 

    trafficCop(handler);
}

/*
/ WFRP Functions
*/
async function wfrpWeapon(data, info) {
    if (killAllAnimations) { return; }
    if (game.user.id !== info.user) { return }
    let handler = await systemData.make({ item: data.weapon, targets: data.context?.targets, info: info });
    switch (true) {
        case ((handler.animType === "t12") && (handler.isCustomized)):
            teleportation(handler);
            break;
        default:
            trafficCop(handler);
    }
}
async function wfrpPrayer(data, info) {
    if (killAllAnimations) { return; }
    if (game.user.id !== info.user) { return }
    if (data.result.outcome != "success" && game.settings.get('autoanimations', 'castOnlyOnSuccess')) { return }
    let handler = await systemData.make({ item: data.prayer, targets: data.context?.targets, info: info });
    switch (true) {
        case ((handler.animType === "t12") && (handler.isCustomized)):
            teleportation(handler);
            break;
        default:
            trafficCop(handler);
    }
}
async function wfrpCast(data, info) {
    if (killAllAnimations) { return; }
    if (game.user.id !== info.user) { return }
    if (data.result.castOutcome != "success" && game.settings.get('autoanimations', 'castOnlyOnSuccess')) { return }
    let handler = await systemData.make({ item: data.spell, targets: data.context?.targets, info: info });
    switch (true) {
        case ((handler.animType === "t12") && (handler.isCustomized)):
            teleportation(handler);
            break;
        default:
            trafficCop(handler);
    }
}
async function wfrpTrait(data, info) {
    if (killAllAnimations) { return; }
    if (game.user.id !== info.user) { return }
    let handler = await systemData.make({ item: data.trait, targets: data.context?.targets, info: info });
    switch (true) {
        case ((handler.animType === "t12") && (handler.isCustomized)):
            teleportation(handler);
            break;
        default:
            trafficCop(handler);
    }
}
async function wfrpSkill(data, info) {
    if (killAllAnimations) { return; }
    if (game.user.id !== info.user) { return }
    if (data.result.outcome != "success" && game.settings.get('autoanimations', 'castOnlyOnSuccess')) { return }
    if (!data.skill) { return }
    let handler = await systemData.make({ item: data.skill, targets: data.context?.targets, info: info });
    switch (true) {
        case ((handler.animType === "t12") && (handler.isCustomized)):
            teleportation(handler);
            break;
        default:
            trafficCop(handler);
    }
}

async function oseReady(input) {
    if (killAllAnimations) { return; }
    if (input.user.id !== game.user.id) { return };
    let handler = await systemData.make(input)
    if (!handler.item || !handler.sourceToken) {
        return;
    }
    trafficCop(handler);
}

async function setupAlienRPG(input) {
    if (killAllAnimations) { return; }
    if (input.user.id !== game.user.id) { return };
    let handler = await systemData.make(input)
    if (!handler.item || !handler.sourceToken) {
        return;
    }
    trafficCop(handler);
}

async function dccReady(input) {
    if (killAllAnimations) { return; }
    if (input.user.id !== game.user.id) { return };

    if (!game.settings.get('dcc', 'useStandardDiceRoller')) {
        let handler = await systemData.make(input)
        if (!handler.item || !handler.sourceToken) {
            return;
        }
        trafficCop(handler);
    } else if (input.data?.flags?.dcc?.RollType === "Damage" || input.data?.flags?.dcc?.RollType === "SpellCheck") {
        let handler = await systemData.make(input)
        if (!handler.item || !handler.sourceToken) {
            return;
        }
        trafficCop(handler);
    }

}
