//import { AAAutorecFunctions } from "../aa-classes/aaAutorecFunctions.js";
import { debug } from "../constants/constants.js";

export async function matchAnimation(itemOrName, omitMenus = []) {
    let dataType = typeof itemOrName;
    let itemName = dataType === "string" ? itemOrName : dataType === "object" ? itemOrName.name || itemOrName.label : false;
    if (!itemName) { return; };
    if (dataType === "object") {
        let flagCheck = checkItemFlags(itemOrName);
        if (flagCheck === "exit") { return; } else if (flagCheck) { return flagCheck}
    }
    let autorecDisabled = game.settings.get("autoanimations", "disableAutoRec");
    if (autorecDisabled) {
        debug("Global Automatic Recognition menu is Disabled from the Module Settings");
        return false;
    }

    let rinsedName = rinseName(itemName);
    const globalMenus = {
        melee: game.settings.get("autoanimations", "aaAutorec-melee"),
        range: game.settings.get("autoanimations", "aaAutorec-range"),
        ontoken: game.settings.get("autoanimations", "aaAutorec-ontoken"),
        templatefx: game.settings.get("autoanimations", "aaAutorec-templatefx"),
        aura: game.settings.get("autoanimations", "aaAutorec-aura"),
        preset: game.settings.get("autoanimations", "aaAutorec-preset"),
        aefx: game.settings.get("autoanimations", "aaAutorec-aefx"),
    }

    if (omitMenus.length) {
        for (let menu of omitMenus) {
            delete globalMenus[menu]
        }
    }

    return searchMenuSet(await sortAndFilter(globalMenus), rinsedName, itemName)
}

export async function matchTemplateAnimation(itemOrName) {
    let dataType = typeof itemOrName;
    let itemName = dataType === "string" ? itemOrName : dataType === "object" ? itemOrName.name || itemOrName.label : false;
    if (!itemName) { return; };
    if (dataType === "object") {
        let flagCheck = checkItemFlags(itemOrName);
        if (flagCheck === "exit") { return; } else if (flagCheck) { return flagCheck}
    }
    let autorecDisabled = game.settings.get("autoanimations", "disableAutoRec");
    if (autorecDisabled) {
        debug("Global Automatic Recognition menu is Disabled from the Module Settings");
        return false;
    }

    let rinsedName = rinseName(itemName);
    let globalMenus = {
        templatefx: game.settings.get("autoanimations", "aaAutorec-templatefx"),
        preset: game.settings.get("autoanimations", "aaAutorec-preset").filter(x => x.presetType === "proToTemp"),
    };

    return searchMenuSet(await sortAndFilter(globalMenus), rinsedName, itemName)
}

function checkItemFlags(item) {
    let itemFlags = item.flags?.autoanimations ?? {};
    const itemIsEnabled = !!itemFlags.killAnim ? false : itemFlags.isEnabled ?? true;
    if (!itemIsEnabled) { return "exit"; }
    else if (itemFlags.isCustomized) { return itemFlags }
    else { return false; }
}

// Accepts an Object of menus
async function sortAndFilter(menus = {}) {
    let combinedMenus = [];
    let menuTypes = Object.keys(menus)
    for (let i = 0; i < menuTypes.length; i++) {
        combinedMenus.push(...menus[menuTypes[i]])
    }
    let sortedMenus = combinedMenus.sort((a, b) => b.label?.replace(/\s+/g, '').length - a.label?.replace(/\s+/g, '').length);
    return {
        exactMatchMenus: sortedMenus.filter(x => x.advanced?.exactMatch),
        bestMatchMenus: sortedMenus.filter(x => !x.advanced?.exactMatch),
    }
}

// Accepts an Object with a bestMatch and exactMatch Menus
function searchMenuSet(menus, rinsedName, exactName) {
    let exactMatches = menus.exactMatchMenus.filter(x => x.label && x.label === exactName);
    if (exactMatches.length) { return exactMatches; }
    return [menus.bestMatchMenus.find(x => 
        x.advanced?.excludedTerms?.length ? 
        x.label && rinsedName.includes(rinseName(x.label)) && !x.advanced.excludedTerms.some(el => rinsedName.includes(rinseName(el)))
        :
        x.label && rinsedName.includes(rinseName(x.label))
    )]
    || [];
}

function rinseName(oldName) {
    if (!oldName) { return; }
    const newName = oldName.replace(/\s+/g, '').toLowerCase();
    return newName;
}
