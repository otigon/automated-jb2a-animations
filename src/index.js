import { JB2APATREONDB } from "./database/jb2a-patreon-database.js";
import { JB2AFREEDB } from "./database/jb2a-free-database.js";
import { trafficCop } from "./router/traffic-cop.js";

import { jb2aAAPatreonDatabase } from "./database/jb2a-patreon-database.js";
import { jb2aAAFreeDatabase } from "./database/jb2a-free-database.js";

import systemData from "./system-handlers/system-data.js";

import { registerActiveEffectHooks } from "./active-effects/handleActiveEffectHooks";

import AAActiveEffectMenu from "./formApps/ActiveEffects/activeEffectMenu.js";
import AAAutorecMenu from "./formApps/AutorecMenu/aaAutorecMenu.js";

//import AAItemMenu from "./formApps/ItemMenu/itemMenu.js";
import AEMenuApp from "./formApps/_ActiveEffects/AEMenuApp.js";
import ItemMenuApp from "./formApps/_ItemMenu/ItemMenuApp.js";


import { setupSocket } from "./socketset.js";
import { flagMigrations } from "./mergeScripts/items/itemFlagMerge.js";
import { autoRecMigration } from "./mergeScripts/autorec/autoRecMerge.js";

import * as systemSupport from "./system-support/index.js"

import { AnimationState } from "./AnimationState.js";
import { initSettings } from "./initSettings.js";
import { gameSettings } from "./gameSettings.js";
import { autoRecStores }  from "./formApps/_AutorecMenu/store/AutoRecStores.js";

import { showAutorecMenu } from "./formApps/_AutorecMenu/showUI.js";
import { showMainMenu } from "./formApps/AutorecMenu/showMainUI.js";

import "../styles/newMenuCss.scss";

import { aaDeletedItems } from "./DeletedItems.js";

Hooks.once('socketlib.ready', function () {
    setupSocket();
});

Hooks.on('AutomaticAnimations.Open.Menu',() => showMainMenu());
Hooks.on('AutomaticAnimations.Open.Menu.New',() => showAutorecMenu());

Hooks.on('AutomaticAnimations.Clear.Data', async () => {
    await game.settings.set("autoanimations", "aaAutorec", void 0);
    await game.settings.set("autoanimations", "aaAutorec-aefx", void 0);
    await game.settings.set("autoanimations", "aaAutorec-aura", void 0);
    await game.settings.set("autoanimations", "aaAutorec-melee", void 0);
    await game.settings.set("autoanimations", "aaAutorec-preset", void 0);
    await game.settings.set("autoanimations", "aaAutorec-range", void 0);
    await game.settings.set("autoanimations", "aaAutorec-ontoken", void 0);
    await game.settings.set("autoanimations", "aaAutorec-templatefx", void 0);
});

// Places the A-A button on Item sheet header
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
            //new AAItemSettings(app.document, {}).render(true);
            new ItemMenuApp(app.document, {}).render(true, { focus: true });
            //new AAItemMenu(app.document, {}).render(true);
            //new ItemMenuApp(app.document, {}).render(true, { focus: true });
        }
    });

    html.closest('.app').find('.aa-item-settings').remove();
    let titleElement = html.closest('.app').find('.window-title');
    aaBtn.insertAfter(titleElement);

});

// Places the A-A button on Active Effect sheet header
Hooks.on(`renderActiveEffectConfig`, async (app, html, data) => {
    if (!game.user.isGM && game.settings.get("autoanimations", "hideFromPlayers")) {
        return;
    }
    const aaBtn = $(`<a class="aa-item-settings" title="A-A"><i class="fas fa-biohazard"></i>A-A</a>`);
    aaBtn.click(async ev => {
        //await flagMigrations.handle(app.document);
        new AEMenuApp(app.document, {}).render(true, { focus: true });
        //new AAActiveEffectMenu(app.document, {}).render(true);
    });
    html.closest('.app').find('.aa-item-settings').remove();
    let titleElement = html.closest('.app').find('.window-title');
    aaBtn.insertAfter(titleElement);
});

// Registers Database with Sequencer
Hooks.on("aa.initialize", async () => {

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
            ui.notifications.error(game.i18n.format("autoanimation.settings.error"));
        }
    }

    Sequencer.Database.registerEntries("autoanimations", obj01, true);
    if (game.settings.get("autoanimations", "killAllAnim") === "off") {
        console.log("ANIMATIONS ARE OFF")
        AnimationState.enabled = false;
    }
    Hooks.callAll('aa.ready', obj01)
});

Hooks.once('ready', async function () {
    initSettings(gameSettings);

    // Initializes all AutoRecStores backed by individual game settings.
    autoRecStores.initialize();


    /**
     * Runs the Autorec menu through migrations on start-up if necessary
     */

    /*
    if (game.settings.get('autoanimations', 'aaAutorec-version') < 5) {
        autoRecMigration.handle(game.settings.get('autoanimations', 'aaAutorec'), {shouldSubmit: true})
    } else {
        autoRecMigration.handle("systemMerge", {shouldSubmit: true, newSchema: true, submitAll: true})
    }
    */
    //if (isNewerVersion(game.modules.get('autoanimations').version, '3.5.0')) {
        //autoRecMigration.handle("systemMerge", {shouldSubmit: true, newSchema: true, submitAll: true})
    //} else {
        //autoRecMigration.handle(game.settings.get('autoanimations', 'aaAutorec'), {shouldSubmit: true, newSchema: true})
    //}

    // Register Hooks by system
    
    Hooks.on("deleteItem", async (item) => {storeDeletedItems(item)})

    if (game.modules.get("midi-qol")?.active) {
        switch (game.settings.get("autoanimations", "playonDamage")) {
            case (true):
                Hooks.on("midi-qol.DamageRollComplete", (workflow) => { systemSupport.aaMidiqol.setUpMidi(workflow) });
                //Hooks.on('midi-qol.preambleComplete', (workflow) => { midiAOE(workflow) });
                //Hooks.on("createChatMessage", (msg) => { systemSupport.aaMidiqol.midiTemplateAnimations(msg) });
                Hooks.on("midi-qol.RollComplete", (workflow) => { systemSupport.aaMidiqol.setUpMidiNoAttackDamage(workflow) });
                Hooks.on("dnd5e.displayCard", async (item, chat, options) => {systemSupport.aaMidiqol.useItem({item, chat, options})});
                Hooks.on("createMeasuredTemplate", async (template, data, userId) => {systemSupport.aaMidiqol.templateItem({template, data, userId})})
                break;
            case (false):
                Hooks.on("midi-qol.AttackRollComplete", (workflow) => { systemSupport.aaMidiqol.setUpMidi(workflow) });
                Hooks.on("midi-qol.RollComplete", (workflow) => { systemSupport.aaMidiqol.setUpMidiNoAttack(workflow) });
                //Hooks.on('midi-qol.preambleComplete', (workflow) => { midiAOE(workflow) });
                //Hooks.on("createChatMessage", (msg) => { systemSupport.aaMidiqol.midiTemplateAnimations(msg) });
                Hooks.on("dnd5e.displayCard", async (item, chat, options) => {systemSupport.aaMidiqol.useItem({item, chat, options})});
                Hooks.on("createMeasuredTemplate", async (template, data, userId) => {systemSupport.aaMidiqol.templateItem({template, data, userId})})
                break;
        }
        if (game.settings.get("autoanimations", "EnableCritical") || game.settings.get("autoanimations", "EnableCriticalMiss")) {
            Hooks.on("midi-qol.AttackRollComplete", (workflow) => { systemSupport.aaMidiqol.criticalCheck(workflow) })
        }
    } else {
        switch (game.system.id) {
            case "dnd5e":
                Hooks.on("dnd5e.displayCard", async (item, chat, card) => {systemSupport.aaDnd5e.useItem({item, chat, card})});
                Hooks.on("dnd5e.rollAttack", async (item, roll) => {systemSupport.aaDnd5e.rollAttack({item, roll})})
                Hooks.on("dnd5e.rollDamage", async (item, roll) => {systemSupport.aaDnd5e.rollDamage({item, roll})})
                Hooks.on("createMeasuredTemplate", async (template, data, userId) => {systemSupport.aaDnd5e.templateItem({template, data, userId})})
                break;
            case "sw5e":
                Hooks.on("createChatMessage", async (msg) => { systemSupport.aaDnd5e.runDnd5e(msg); });
                break;
            case "demonlord":
                Hooks.on("DL.Action", async (data) => { systemSupport.aaDemonlord.runDemonlord(data) });
                break;
            case "pf2e":
                Hooks.on("createChatMessage", async (msg) => { systemSupport.aaPf2e.runPf2e(msg) });
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
                    const itemId = extractItemId(msg.content);
                    if (!itemId) { return; }
                    const tokenId = msg.speaker.token;
                    const sourceToken = canvas.tokens.get(tokenId) || canvas.tokens.placeables.find(token => token.actor?.items?.get(itemId));

                    if (!sourceToken) { return; }

                    const item = sourceToken.actor?.items?.get(itemId)
                    if (item.type === 'feat') { return; }

                    if (!item.hasAttack && !item.hasDamage) {
                        let data = {}
                        systemSupport.aaSfrpg.runStarfinder(data, msg)
                    }
                });
                if (game.settings.get("autoanimations", "playonDamage")) {
                    Hooks.on("damageRolled", async (data) => {
                        Hooks.once("createChatMessage", async (msg) => {
                            if (msg.user.id !== game.user.id) { return };
                            systemSupport.aaSfrpg.runStarfinder(data, msg)
                        });
                    });
                } else {
                    Hooks.on("attackRolled", async (data) => {
                        Hooks.once("createChatMessage", async (msg) => {
                            if (msg.user.id !== game.user.id) { return };
                            systemSupport.aaSfrpg.runStarfinder(data, msg)
                        });
                    })
                    Hooks.on("damageRolled", async (data) => {
                        Hooks.once("createChatMessage", async (msg) => {
                            if (msg.user.id !== game.user.id) { return };
                            if (data.item.hasAttack) {
                                return;
                            } else {
                                systemSupport.aaSfrpg.runStarfinder(data, msg)
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
                        token = controlledTokens.find(token => token.actorId === SwadeTokenOrActor.id);
                    }
                    if (token) { SwadeTokenOrActor = token; }
                    systemSupport.aaSwade.runSwade(SwadeTokenOrActor, SwadeItem)
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
                    if (item.flags?.autoanimations?.animType === "template" || (item.flags?.autoanimations?.animType === "preset" && item.flags?.autoanimations?.animation === "fireball")) {
                        return //Return to prevent duplicate effects on placing a template.
                    } else { systemSupport.aaSwade.runSwade(actorOrToken, item) }
                });
                Hooks.on("BRSW-BeforePreviewingTemplate", async (template, data, ev) => {
                    const {actorOrToken, item} = await get_brsw_data (data)
                    systemSupport.aaSwade.runSwade(actorOrToken, item)
                })
                Hooks.on("BRSW-CreateItemCardNoRoll", async (data) => {
                    const {actorOrToken, item} = await get_brsw_data (data)
                    if (item.flags?.autoanimations?.animType === "template" || (item.flags?.autoanimations?.animType === "preset" && item.flags?.autoanimations?.animation === "fireball")) {
                        return //Return to prevent duplicate effects on placing a template.
                    } else { systemSupport.aaSwade.runSwade(actorOrToken, item) }
                })
                break;
            case "wfrp4e":
                Hooks.on("wfrp4e:rollWeaponTest", async (data, info) => {
                    //let targets = game.user.targets;
                    systemSupport.aaWfrpg.wfrpWeapon(data, info)
                });
                Hooks.on("wfrp4e:rollPrayerTest", async (data, info) => {
                    //let targets = game.user.targets;
                    systemSupport.aaWfrpg.wfrpPrayer(data, info)
                });
                Hooks.on("wfrp4e:rollCastTest", async (data, info) => {
                    //let targets = game.user.targets;
                    systemSupport.aaWfrpg.wfrpCast(data, info)
                });
                Hooks.on("wfrp4e:rollTraitTest", async (data, info) => {
                    //let targets = game.user.targets;
                    systemSupport.aaWfrpg.wfrpTrait(data, info)
                });
                Hooks.on("wfrp4e:rollTest", async (data, info) => {
                    //let targets = game.user.targets;
                    systemSupport.aaWfrpg.wfrpSkill(data, info)
                });

                break;
            case 'dcc':
                Hooks.on("createChatMessage", async (msg) => {  systemSupport.aaDcc.runDcc(msg) });
                break;
            /*
            Systems Working at Default level
            case "a5e":
            case "cyphersystem":
            case "alienrpg":
            case "pf1":
            case "D35E":
            case "forbidden-lands":
            case "starwarsffg":
            case 'ose':
            */
            default:
                Hooks.on("createChatMessage", async (msg) => {systemSupport.aaStandard.runStandard(msg) });
        }
    }
    registerActiveEffectHooks();

    Hooks.callAll("aa.initialize")
});

//export const aaDeletedItems = new Map();
//Hooks.on("deleteItem", async (item) => {getDeletedItems(item)})
function storeDeletedItems(item) {
    aaDeletedItems.set(item.id, item)
}

/* External call for animations
* sourceToken as the originating token
* targets as an array from the user
* item as the item instance being used
* options to override settings e.g. playOnMiss: true, hitTargets: Array of TokenIDs
*/
class AutoAnimations
{
    static async playAnimation(sourceToken, targets, item, options = {}) {
        if (!AnimationState.enabled) { return; }
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
window.AAAutoRec = AAAutorecMenu;
