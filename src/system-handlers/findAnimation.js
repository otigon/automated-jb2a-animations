import { flagMigrations } from "../mergeScripts/items/itemFlagMerge.js";
import { AAAutorecFunctions } from "../aa-classes/aaAutorecFunctions.js";

/*
export async function handleItem(data) {
    // GTFO if no Item was sent
    if (!data.item) { return; };

    // Check item Flags
    let itemCheck = await checkItem(data);

    // If Item is Disabled return false
    // If Item is customized return those flags
    if (!itemCheck.isEnabled) {
        return false;
    } else if (itemCheck.isEnabled && itemCheck.isCustomized) {
        return itemCheck.itemFlags
    }

    // Check Global Automatic Recognition menus for a match
    // If no match, return false
    let autorecCheck = checkAutorec(data)
    if (!autorecCheck) {
        return false;
    } else {
        return autorecCheck
    }
}
*/
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
    // If Item has Ammunition send it thru the Flag Merge
    const ammoFlags = ammoItem ? await flagMigrations.handle(ammoItem, {activeEffect: data.activeEffect}) || {} : null;
    
    const autorecSettings = {
        melee: game.settings.get("autoanimations", "aaAutorec-melee"),
        range: game.settings.get("autoanimations", "aaAutorec-range"),
        ontoken: game.settings.get("autoanimations", "aaAutorec-ontoken"),
        templatefx: game.settings.get("autoanimations", "aaAutorec-templatefx"),
        aura: game.settings.get("autoanimations", "aaAutorec-aura"),
        preset: game.settings.get("autoanimations", "aaAutorec-preset"),
        aefx: game.settings.get("autoanimations", "aaAutorec-aefx"),
    }

    let autorecObject;

    // If Item has Ammo, search for matching animations. If found, return it, otherwise keep going
    if (ammoItem && ammoFlags.isEnabled) {
        if (ammoFlags.isCustomized) {
            return ammoFlags;
        } else {
            autorecObject = AAAutorecFunctions.allMenuSearch(autorecSettings, rinsedAmmoName);
        }
        if (autorecObject) { return autorecObject }
    } 
    
    if (data.activeEffect) {
        if (itemFlags.isCustomized) {
            return itemFlags
        } else {
            autorecObject = AAAutorecFunctions.singleMenuSearch(autorecSettings.aefx, rinsedItemName);
            return autorecObject;
        }
    } else {
        if (itemFlags.isCustomized) {
            return itemFlags;
        } else {
            autorecObject = AAAutorecFunctions.allMenuSearch(autorecSettings, rinsedItemName);
            if (!autorecObject && data.extraNames?.length && !data.activeEffect) {
                for (const name of data.extraNames) {
                    const rinsedName = AAAutorecFunctions.rinseName(name);
                    autorecObject = AAAutorecFunctions.allMenuSearch(autorecSettings, rinsedName);
                    if (autorecObject) {
                        data.rinsedName = rinsedName;
                        break;
                    }
                }
            }
        }    
    }
    if (autorecObject && data.isTemplate) {
        let data = autorecObject;
        if (data.menu === "range" || data.menu === "melee" || data.menu === "ontoken") {
            autorecObject = AAAutorecFunctions.singleMenuSearch(autorecSettings.templatefx, rinsedItemName);
        }
    }
    return autorecObject;
}




function checkAutorec(data) {
    const item = data.item
    const ammoItem = data.ammoItem;
    let autorecSettings = {
        melee: game.settings.get("autoanimations", "aaAutorec-melee"),
        range: game.settings.get("autoanimations", "aaAutorec-range"),
        ontoken: game.settings.get("autoanimations", "aaAutorec-ontoken"),
        templatefx: game.settings.get("autoanimations", "aaAutorec-templatefx"),
        aura: game.settings.get("autoanimations", "aaAutorec-aura"),
        preset: game.settings.get("autoanimations", "aaAutorec-preset"),
        aefx: game.settings.get("autoanimations", "aaAutorec-aefx"),
    }

    // Get the Item name, remove special characters and toLowerCase 
    let itemName = !data.activeEffect || game.system.id === "pf2e" ? item.name : item.label;

    let rinsedAmmoName = ammoItem?.name ? AAAutorecFunctions.rinseName(ammoItem.name) : "";
    let rinsedName = itemName ? AAAutorecFunctions.rinseName(itemName) : "noitem";

    // Check certain menus based on inputs
    let autorecObject;
    if (data.activeEffect) {
        autorecObject = AAAutorecFunctions.singleMenuSearch(autorecSettings.aefx, rinsedName);
    } else {
        if (rinsedAmmoName) {
            autorecObject = AAAutorecFunctions.allMenuSearch(autorecSettings, rinsedAmmoName);
            if (!autorecObject) {
                autorecObject = AAAutorecFunctions.allMenuSearch(autorecSettings, rinsedName);
            }
        } else {
            autorecObject = AAAutorecFunctions.allMenuSearch(autorecSettings, rinsedName);
            if (!autorecObject && data.extraNames?.length && !data.activeEffect) {
                for (const name of data.extraNames) {
                    const rinsedName = AAAutorecFunctions.rinseName(name);
                    autorecObject = AAAutorecFunctions.allMenuSearch(autorecSettings, rinsedName);
                    if (autorecObject) {
                        data.rinsedName = rinsedName;
                        break;
                    }
                }
            }
        }
    }
    if (autorecObject && data.isTemplate) {
        let data = autorecObject;
        if (data.menu === "range" || data.menu === "melee" || data.menu === "ontoken") {
            autorecObject = AAAutorecFunctions.singleMenuSearch(autorecSettings.templatefx, rinsedName);
        }
    }
    return autorecObject;
}

async function checkItem(data) {
    // Send the Item thru the flag migrations if necessary. Returns early if no A-A flags
    //const itemFlags = await flagMigrations.handle(data.item, {activeEffect: data.activeEffect}) || {};
    let itemFlags;
    if (data.ammoItem) {
        itemFlags = await flagMigrations.handle(data.ammoItem, {activeEffect: data.activeEffect}) || {};
    } else {
        itemFlags = await flagMigrations.handle(data.item, {activeEffect: data.activeEffect}) || {};
    }

    let isEnabled = itemFlags.isEnabled ?? true;
    // If Item is disabled, return false
    if (!isEnabled) { return false }

    // Check if the item is customized
    let isCustomized = data.activeEffect
        ? itemFlags.isCustomized && itemFlags.activeEffectType ? true : false
        : itemFlags.isCustomized && itemFlags.menu ? true : false;
    
    // Return the Item Flags, Enabled and Customized
    return {
        isEnabled,
        isCustomized,
        itemFlags,
    }
}