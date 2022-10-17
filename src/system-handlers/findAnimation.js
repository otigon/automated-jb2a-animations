import { flagMigrations } from "../mergeScripts/items/itemFlagMerge.js";
import { AAAutorecFunctions } from "../aa-classes/aaAutorecFunctions.js";

export async function handleItem(data, activeEffect = false) {
    if (!data.item) { return; };

    let itemCheck = checkItem(data.item, activeEffect);

    if (!itemCheck.isEnabled) {
        return false;
    } else if (itemCheck.isEnabled && itemCheck.isCustomized) {
        return itemCheck.itemFlags;
    }

    let autorecCheck = checkAutorec(data.item)
    return autorecCheck;
}

async function checkAutorec(item) {
    let autorecSettings = {
        melee: game.settings.get("autoanimations", "aaAutorec-melee"),
        range: game.settings.get("autoanimations", "aaAutorec-range"),
        ontoken: game.settings.get("autoanimations", "aaAutorec-ontoken"),
        templatefx: game.settings.get("autoanimations", "aaAutorec-templatefx"),
        aura: game.settings.get("autoanimations", "aaAutorec-aura"),
        preset: game.settings.get("autoanimations", "aaAutorec-preset"),
        aefx: game.settings.get("autoanimations", "aaAutorec-aefx"),
    }

    let itemName = !activeEffect || game.system.id === "pf2e" ? item.name : item.label;

    let rinsedName = itemName ? AAAutorecFunctions.rinseName(itemName) : "noitem";

    let autorecObject;
    if (activeEffect) {
        autorecObject = AAAutorecFunctions.singleMenuSearch(autorecSettings.aefx, rinsedName);
    } else {
        autorecObject = AAAutorecFunctions.allMenuSearch(autorecSettings,rinsedName);
    }
    return autorecObject;
}

async function checkItem(item, activeEffect) {
    const itemFlags = await flagMigrations.handle(item, {activeEffect}) || {};

    let isEnabled = itemFlags.isEnabled ?? true;
    if (!isEnabled) { return false }

    let isCustomized = activeEffect
        ? itemFlags.isCustomized && itemFlags.activeEffectType ? true : false
        : itemFlags.isCustomized && itemFlags.menu ? true : false;
    if (isEnabled && isCustomized) {
        return itemFlags;
    }
    return {
        isEnabled,
        isCustomized,
        itemFlags,
    }
}