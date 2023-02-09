import { flagMigrations } from "../mergeScripts/items/itemFlagMerge.js";
import { AAAutorecFunctions } from "../aa-classes/aaAutorecFunctions.js";
import { debug } from "../constants/constants.js";

export async function handleItem(data) {

    // GTFO if no Item was sent
    if (!data.item) { return; };

    const item = data.item;
    const itemName = !data.activeEffect || game.system.id === "pf2e" ? item.name : item.label;
    const rinsedItemName = itemName ? AAAutorecFunctions.rinseName(itemName) : "noitem";

    const ammoItem = data.ammoItem;
    const rinsedAmmoName = ammoItem?.name ? AAAutorecFunctions.rinseName(ammoItem.name) : "";

    // Send Item thru Flag Merge
    const itemFlags = await flagMigrations.handle(data.item, {activeEffect: data.activeEffect}) || {};
    const itemIsEnabled = !!itemFlags.killAnim ? false : itemFlags.isEnabled ?? true;
    if (!itemIsEnabled) { return false}
    // If Item has Ammunition send it thru the Flag Merge
    const ammoFlags = ammoItem ? await flagMigrations.handle(ammoItem, {activeEffect: data.activeEffect}) || {isEnabled: true} : null;
    
    let autorecDisabled = game.settings.get("autoanimations", "disableAutoRec");
    if (autorecDisabled) {
        debug("Global Automatic Recognition menu is Disabled from the Module Settings");
    }

    const autorecSettings = {
        melee: game.settings.get("autoanimations", "aaAutorec-melee"),
        range: game.settings.get("autoanimations", "aaAutorec-range"),
        ontoken: game.settings.get("autoanimations", "aaAutorec-ontoken"),
        templatefx: game.settings.get("autoanimations", "aaAutorec-templatefx"),
        aura: game.settings.get("autoanimations", "aaAutorec-aura"),
        preset: game.settings.get("autoanimations", "aaAutorec-preset"),
        aefx: game.settings.get("autoanimations", "aaAutorec-aefx"),
    }

    let menus = AAAutorecFunctions.sortAndFilterMenus(autorecSettings);

    let autorecObject;

    // If Item has Ammo, search for matching animations. If found, return it, otherwise keep going
    if (ammoItem && ammoFlags.isEnabled) {
        if (ammoFlags.isCustomized) {
            return ammoFlags;
        } else if (!autorecDisabled) {
            autorecObject = AAAutorecFunctions.allMenuSearch(menus, rinsedAmmoName, ammoItem?.name || "");
        }
        if (autorecObject) { return autorecObject }
    } 
    
    if (data.activeEffect) {
        if (itemFlags.isCustomized) {
            return itemFlags
        } else if (!autorecDisabled) {
            autorecObject = AAAutorecFunctions.singleMenuSearch(autorecSettings.aefx, rinsedItemName, itemName);
            return autorecObject;
        }
    } else {
        if (itemFlags.isCustomized) {
            return itemFlags;
        } else if (!autorecDisabled) {
            autorecObject = AAAutorecFunctions.allMenuSearch(menus, rinsedItemName, itemName);
            if (!autorecObject && data.extraNames?.length && !data.activeEffect) {
                for (const name of data.extraNames) {
                    if (!name) { continue }
                    const rinsedName = AAAutorecFunctions.rinseName(name);
                    autorecObject = AAAutorecFunctions.allMenuSearch(menus, rinsedName, itemName);
                    if (autorecObject) {
                        data.rinsedName = rinsedName;
                        break;
                    }
                }
            }
        }    
    }
    
    if (autorecObject && data.isTemplate && !autorecDisabled) {
        let data = autorecObject;
        if (data.menu === "range" || data.menu === "melee" || data.menu === "ontoken") {
            autorecObject = AAAutorecFunctions.singleMenuSearch(autorecSettings.templatefx, rinsedItemName, itemName);
        }
    } else if ( data.isVariant && !autorecObject && data.isTemplate && !autorecDisabled) {
        // For use with Variant spell casting, based off PF2e. If the variant name is not found in the Global menu, it looks for one matching the original name
        let newItemName = input.originalItem?.name;
        let newRinsedName = newItemName ? AAAutorecFunctions.rinseName(newItemName) : "noitem";
        autorecObject = AAAutorecFunctions.allMenuSearch(menus, newRinsedName, newItemName);
    }
    return autorecObject;
}