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

import AAActiveEffectMenu from "./formApps/ActiveEffects/activeEffectMenu.js";
import AAAutorecMenu from "./formApps/AutorecMenu/aaAutorecMenu.js";

import AAItemMenu from "./formApps/ItemMenu/itemMenu.js";

import { setupSocket } from "./socketset.js";
import { flagMigrations } from "./system-handlers/flagMerge.js";
import { autoRecMigration } from "./custom-recognition/autoRecMerge.js";

import * as systemSupport from "./system-support/index.js"

import { AnimationState } from "./AnimationState.js";
import { initSettings } from "./initSettings.js";
import { gameSettings } from "./gameSettings.js";
import { autoRecStores }  from "./formApps/_AutorecMenu/store/AutoRecStores.js";

import { showAutorecMenu } from "./formApps/_AutorecMenu/showUI.js";
import { showMainMenu } from "./formApps/AutorecMenu/showMainUI.js";

import "../styles/newMenuCss.scss";

import { aaDeletedItems } from "./DeletedItems.js";

const log = () => { };

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
            //new AAItemSettings(app.document, {}).render(true);
            new AAItemMenu(app.document, {}).render(true);
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
        AnimationState.enabled = false;
    }
});

Hooks.once('ready', async function () {
    initSettings(gameSettings);

    // Initializes all AutoRecStores backed by individual game settings.
    autoRecStores.initialize();

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
    autoRecMigration.handle(game.settings.get('autoanimations', 'aaAutorec'), true, true)
    if (game.modules.get("midi-qol")?.active) {
        Hooks.on("deleteItem", async (item) => {storeDeletedItems(item)})
        switch (game.settings.get("autoanimations", "playonDamage")) {
            case (true):
                Hooks.on("midi-qol.DamageRollComplete", (workflow) => { systemSupport.aaMidiqol.setUpMidi(workflow) });
                //Hooks.on('midi-qol.preambleComplete', (workflow) => { midiAOE(workflow) });
                Hooks.on("createChatMessage", (msg) => { systemSupport.aaMidiqol.midiTemplateAnimations(msg) });
                Hooks.on("midi-qol.RollComplete", (workflow) => { systemSupport.aaMidiqol.setUpMidiNoAttackDamage(workflow) });
                break;
            case (false):
                Hooks.on("midi-qol.AttackRollComplete", (workflow) => { systemSupport.aaMidiqol.setUpMidi(workflow) });
                Hooks.on("midi-qol.RollComplete", (workflow) => { systemSupport.aaMidiqol.setUpMidiNoAttack(workflow) });
                //Hooks.on('midi-qol.preambleComplete', (workflow) => { midiAOE(workflow) });
                Hooks.on("createChatMessage", (msg) => { systemSupport.aaMidiqol.midiTemplateAnimations(msg) });
                break;
        }
        if (game.settings.get("autoanimations", "EnableCritical") || game.settings.get("autoanimations", "EnableCriticalMiss")) {
            Hooks.on("midi-qol.AttackRollComplete", (workflow) => { systemSupport.aaMidiqol.criticalCheck(workflow) })
        }
    } else {
        Hooks.on("deleteItem", async (item) => {storeDeletedItems(item)})
        switch (game.system.id) {
            case "dnd5e":
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
                    const itemId = extractItemId(msg.data.content);
                    if (!itemId) { return; }
                    const tokenId = msg.data.speaker.token;
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
                        token = controlledTokens.find(token => token.data.actorId === SwadeTokenOrActor.id);
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
                    if (item.data.flags?.autoanimations?.animType === "template" || (item.data.flags?.autoanimations?.animType === "preset" && item.data.flags?.autoanimations?.animation === "fireball")) {
                        return //Return to prevent duplicate effects on placing a template.
                    } else { systemSupport.aaSwade.runSwade(actorOrToken, item) }
                });
                Hooks.on("BRSW-BeforePreviewingTemplate", async (template, data, ev) => {
                    const {actorOrToken, item} = await get_brsw_data (data)
                    systemSupport.aaSwade.runSwade(actorOrToken, item)
                })
                Hooks.on("BRSW-CreateItemCardNoRoll", async (data) => {
                    const {actorOrToken, item} = await get_brsw_data (data)
                    if (item.data.flags?.autoanimations?.animType === "template" || (item.data.flags?.autoanimations?.animType === "preset" && item.data.flags?.autoanimations?.animation === "fireball")) {
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
            Hooks.on("preDeleteActiveEffect", (effect, data, userId) => {
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
            Hooks.on("preDeleteItem", (item, data, userId) => {
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
            Hooks.on("preDeleteActiveEffect", (effect, data, userId) => {
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
class AutoAnimations {
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