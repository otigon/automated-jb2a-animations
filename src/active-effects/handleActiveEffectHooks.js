import { createActiveEffects, deleteActiveEffects, checkConcentration, toggleActiveEffects } from "./handleActiveEffects.js";
import { createRuleElementPF2e, deleteRuleElementPF2e } from "./pf2e/handlePF2eRuleElements.js";
import AAHandler from "../system-handlers/workflow-data.js";
import { debug } from "../constants/constants.js";
import { createRuleElementPtr, deleteRuleElementPtr } from "./ptr/handlePtrRuleElements.js";

const pf2eDeletedItems = new Map();
const ptrDeletedItems = new Map();

export function registerActiveEffectHooks() {
    switch (game.system.id) {
        case 'pf2e':
            Hooks.on("createItem", (item, data, userId) => {
                if (game.settings.get("autoanimations", "disableAEAnimations")) {
                    debug(`Active Effect Animations are Disabled`);
                    return;
                }    
                if (game.user.id !== userId) { return; }
                const aePF2eTypes = ['condition', 'effect', 'feat']
                if (!aePF2eTypes.includes(item.type)) {
                    debug("This is not a PF2e Ruleset, exiting early")
                    return;
                }
                if (item.system?.references?.parent && game.settings.get("autoanimations", "disableNestedEffects")) {
                    debug("This is a nested Ruleset, exiting early")
                    return;
                }            
                createRuleElementPF2e(item);
            })
            Hooks.on("preDeleteItem", (item, data, userId) => {
                if (shouldContinue(item, userId)) {
                    pf2eDeletedItems.set(item.id, {
                        item, 
                        token: item.parent?.token || canvas.tokens.placeables.find(token => token.actor?.items?.get(item.id) != null)
                    })    
                }
            })
            Hooks.on("deleteItem", (item, data, userId) => {
                if (shouldContinue(item, userId)) {
                    let itemData = pf2eDeletedItems.get(item.id);
                    if (!itemData) { return; }
                    deleteRuleElementPF2e(itemData)
                }
            })
            function shouldContinue(item, userId) {
                if (game.user.id !== userId) { return false; }
                if (!['condition', 'effect', 'feat'].includes(item.type)) { return false; }
                return true;
            }
            break;
        case "sfrpg":
            Hooks.on("updateItem", (item, diff, action, userId) => {
                if (game.user.id !== userId) { return; }
                Hooks.once("updateToken", async (token, actor, updates, userId) => {
                    if (game.user.id !== userId) { return; }
                    if (item.type !== 'feat') { return; }

                    if (!diff.isActive) {
                        deleteActiveEffects(item, token)
                    } else {
                        const sfrpgData = {
                            item,
                            token,
                            targets: game.user.targets
                        }
                        const handler = await AAHandler.make(sfrpgData)
                        trafficCop(handler);
                    }
                })
            })
        case "dnd5e":
            Hooks.on("updateActiveEffect", (data, toggle, other, userId) => {
                if (game.settings.get("autoanimations", "disableAEAnimations")) {
                    debug(`Active Effect Animations are Disabled`);
                    return;
                }
                if (game.user.id !== userId) { return; }
                toggleActiveEffects(data, toggle)
            });
        case "pf1":
            Hooks.on("createActiveEffect", async (effect, data, userId) => {
                if (game.settings.get("autoanimations", "disableAEAnimations")) {
                    debug(`Active Effect Animations are Disabled`);
                    return;
                }
                if (game.user.id !== userId) { return; }
                const item = fromUuidSync(effect.origin);
                if (item) {
                    const flagData = fromUuidSync(effect.origin).flags['autoanimations'];
                    if (flagData) {
                        await effect.update({ 'flags.autoanimations': flagData });
                    }
                    createActiveEffects(effect);
                }
            });
            Hooks.on("preDeleteActiveEffect", (effect, data, userId) => {
                if (game.user.id !== userId) { return; }

                deleteActiveEffects(effect);
            });
            break;
        case 'wfrp4e':
            Hooks.on("createActiveEffect", (effect, data, userId) => {
                if (game.settings.get("autoanimations", "disableAEAnimations")) {
                    debug(`Active Effect Animations are Disabled`);
                    return;
                }
                if (game.user.id !== userId) { return; }
                createActiveEffects(effect)
            });
            Hooks.on("preDeleteActiveEffect", (effect, data, userId) => {
                if (game.user.id !== userId) { return; }

                deleteActiveEffects(effect)
                if (game.modules.get('midi-qol')?.active) {
                    checkConcentration(effect)
                }
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
        case 'ptr':
            Hooks.on("createItem", (item, data, userId) => {
                if (game.settings.get("autoanimations", "disableAEAnimations")) {
                    debug(`Active Effect Animations are Disabled`);
                    return;
                }    
                if (game.user.id !== userId) { return; }
                const aePtrTypes = ['condition', 'effect']
                if (!aePtrTypes.includes(item.type)) {
                    debug("This is not a PTR Ruleset, exiting early")
                    return;
                }
                if (item.system?.references?.parent && game.settings.get("autoanimations", "disableNestedEffects")) {
                    debug("This is a nested Ruleset, exiting early")
                    return;
                }            
                createRuleElementPtr(item);
            })
            Hooks.on("preDeleteItem", (item, data, userId) => {
                if (ptrShouldContinue(item, userId)) {
                    ptrDeletedItems.set(item.id, {
                        item, 
                        token: item.parent?.token || canvas.tokens.placeables.find(token => token.actor?.items?.get(item.id) != null)
                    })    
                }
            })
            Hooks.on("deleteItem", (item, data, userId) => {
                if (ptrShouldContinue(item, userId)) {
                    let itemData = ptrDeletedItems.get(item.id);
                    if (!itemData) { return; }
                    deleteRuleElementPtr(itemData)
                }
            })
            function ptrShouldContinue(item, userId) {
                if (game.user.id !== userId) { return false; }
                if (!['condition', 'effect'].includes(item.type)) { return false; }
                return true;
            }
        default:
            Hooks.on("updateActiveEffect", (data, toggle, other, userId) => {
                if (game.settings.get("autoanimations", "disableAEAnimations")) {
                    debug(`Active Effect Animations are Disabled`);
                    return;
                }
                if (game.user.id !== userId) { return; }
                toggleActiveEffects(data, toggle)
            });
            Hooks.on("createActiveEffect", (effect, data, userId) => {
                if (game.settings.get("autoanimations", "disableAEAnimations")) {
                    debug(`Active Effect Animations are Disabled`);
                    return;
                }
                if (game.user.id !== userId) { return; }
                createActiveEffects(effect)
            });
            Hooks.on("preDeleteActiveEffect", (effect, data, userId) => {
                if (game.user.id !== userId) { return; }

                deleteActiveEffects(effect)
                if (game.modules.get('midi-qol')?.active) {
                    checkConcentration(effect)
                }
            });

    }
}
