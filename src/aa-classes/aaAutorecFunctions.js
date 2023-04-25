//import { autoRecMigration } from "../mergeScripts/autorec/autoRecMerge.js";
import { debug } from "svelte/internal";
import { custom_warning } from "../constants/constants";

export class AAAutorecFunctions {

    static rinseName(oldName) {
        if (!oldName) { return; }
        const newName = oldName.replace(/\s+/g, '').toLowerCase();
        return newName;
    }

    static sortAndFilterMenus(menus) {

        let combinedMenus = [...menus.melee, ...menus.range, ...menus.ontoken,
            ...menus.templatefx, ...menus.aura, ...menus.preset];

        let sortedMenus = combinedMenus.sort((a, b) => b.label?.replace(/\s+/g, '').length - a.label?.replace(/\s+/g, '').length);
        return {
            exactMatchMenus: sortedMenus.filter(x => x.advanced?.exactMatch),
            bestMatchMenus: sortedMenus.filter(x => !x.advanced?.exactMatch),
        }
    }

    static allMenuSearch(menus, rinsedName, trueName) {
        return menus.exactMatchMenus.find(x => x.label && x.label === trueName)
        || 
        menus.bestMatchMenus.find(x => 
            x.advanced?.excludedTerms?.length ? 
            x.label && rinsedName.includes(this.rinseName(x.label)) && !x.advanced.excludedTerms.some(el => rinsedName.includes(this.rinseName(el)))
            :
            x.label && rinsedName.includes(this.rinseName(x.label))
        ) 
        || false;
    }
    /*
    static allMenuSearch(menus, name) {

        let combinedMenus = [...menus.melee, ...menus.range, ...menus.ontoken,
            ...menus.templatefx, ...menus.aura, ...menus.preset];

        let sortedMenus = combinedMenus.sort((a, b) => b.label?.replace(/\s+/g, '').length - a.label?.replace(/\s+/g, '').length);

        return sortedMenus.find(x => x.label && name.includes(this.rinseName(x.label))) || false;
    }
    */

    static allMenuTrueSearch(menus, rinsedName, trueName) {
        return menus.exactMatchMenus.find(x => x.label && x.label === trueName)
        || 
        menus.bestMatchMenus.find(x => 
            x.advanced?.excludedTerms?.length ? 
            x.label && rinsedName.includes(this.rinseName(x.label)) && !x.advanced.excludedTerms.some(el => rinsedName.includes(this.rinseName(el)))
            :
            x.label && rinsedName.includes(this.rinseName(x.label))
        ) 
        || false;
    }

    static sortAndFilterAllMenus(menus) {

        let combinedMenus = [...menus.melee, ...menus.range, ...menus.ontoken,
            ...menus.templatefx, ...menus.aura, ...menus.preset, ...menus.aefx];

        let sortedMenus = combinedMenus.sort((a, b) => b.label?.replace(/\s+/g, '').length - a.label?.replace(/\s+/g, '').length);
        return {
            exactMatchMenus: sortedMenus.filter(x => x.advanced?.exactMatch),
            bestMatchMenus: sortedMenus.filter(x => !x.advanced?.exactMatch),
        }
    }

    static singleMenuSearch(menu, rinsedName, trueName) {

        if (!rinsedName) { 
            custom_warning("No Name was provided for the Global Menu search")
            return;
        }

        let sortedMenu = menu.sort((a, b) => b.label.replace(/\s+/g, '').length - a.label?.replace(/\s+/g, '').length);

        let exactMatchMenus = sortedMenu.filter(x => x.advanced?.exactMatch);
        let bestMatchMenus = sortedMenu.filter(x => !x.advanced?.exactMatch);

        return exactMatchMenus.find(x => x.label && x.label === trueName)
        || 
        bestMatchMenus.find(x => 
            x.advanced?.excludedTerms?.length ? 
            x.label && rinsedName.includes(this.rinseName(x.label)) && !x.advanced.excludedTerms.some(el => rinsedName.includes(this.rinseName(el)))
            :
            x.label && rinsedName.includes(this.rinseName(x.label))
        ) 
        || false;        
        //return exactMatchMenus.find(x => x.label && x.label === trueName) || bestMatchMenus.find(x => x.label && name.includes(this.rinseName(x.label))) || false;
        //return sortedMenu.find(x => name.includes(this.rinseName(x.label))) || false;
    }

    static singleMenuStrictSearch(menu, name) {

        if (!name) { 
            custom_warning("No Name was provided for the Global Menu search")
            return;
        }

        return menu.find(x => name === this.rinseName(x.label)) || false;
    }

    static getAllLabelsInMenu(menu) {

        const nameArray = []

        for (var i = 0; i < menu.length; i++) {
            if (!menu[i].label) { continue }
            nameArray.push(this.rinseName(menu[i].label))
        }
        return nameArray;
    }

    static sortMenu(menu) {

        let sortedMenu = menu.sort((a, b) => b.label.replace(/\s+/g, '').length - a.label.replace(/\s+/g, '').length);

        return sortedMenus;
    }

    // If an Autorec section has advanced search features enabled for excluding an Item property, this will check that property against that of the item used
    static checkExcludedProperty(item, property, path = "") {
        if (!path || !property || !item) { return; }

        let value = path.split('.').reduce((a,b) => a[b], item);
        if (typeof value !== "string") {
            debug("Invalid path for Excluded Item type", path)
            return false
        }

        return this.rinseName(property) === this.rinseName(value)
    }
}