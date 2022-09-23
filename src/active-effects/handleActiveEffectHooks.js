import { createActiveEffects, deleteActiveEffects, checkConcentration, toggleActiveEffects } from "./handleActiveEffects.js";
import { createRuleElementPF2e, deleteRuleElementPF2e } from "./pf2e/handlePF2eRuleElements.js";
import { debug } from "../constants/constants.js";

export function registerActiveEffectHooks() {
    switch (game.system.id) {
        case 'pf2e':
            Hooks.on("createItem", (item, data, userId) => {
                if (game.user.id !== userId) { return; }
                createRuleElementPF2e(item);
            })
            Hooks.on("preDeleteItem", (item, data, userId) => {
                if (game.user.id !== userId) { return; }
                deleteRuleElementPF2e(item)
            })
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
                        const handler = await systemData.make(sfrpgData)
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
    }
}
