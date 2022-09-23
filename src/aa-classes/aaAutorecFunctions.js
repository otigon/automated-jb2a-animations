//import { autoRecMigration } from "../mergeScripts/autorec/autoRecMerge.js";

export class AAAutorecFunctions {

    static rinseName(oldName) {
        if (!oldName) { return; }
        const newName = oldName.replace(/\s+/g, '').toLowerCase();
        return newName;
    }

    static combineAndSortMenus(menus) {
        let combinedMenus = [...menus.melee, ...menus.range, ...menus.ontoken,
            ...menus.templatefx, ...menus.aura, ...menus.preset,
            ...menus.aefx];

        let sortedMenus = combinedMenus.sort((a, b) => b.label.replace(/\s+/g, '').length - a.label.replace(/\s+/g, '').length);

        return sortedMenus;
    }

    static getAllLabelsInMenu(menu) {
        const nameArray = []

        for (var i = 0; i < menu.length; i++) {
            if (!menu[i].label) { continue }
            nameArray.push(this.rinseName(menu[i].label))
        }
        return nameArray;
    }

    static singleMenuSearch(menu, name) {
        if (!name) { 
            console.warn("Automated Animations | No Name was provided for the Global Menu search")
            return;
        }
        return menu.find(x => name.includes(this.rinseName(x.label))) || false;
    }

    static singleMenuStrictSearch(menu, name) {
        if (!name) { 
            console.warn("Automated Animations | No Name was provided for the Global Menu search")
            return;
        }
        return menu.find(x => name === this.rinseName(x.label)) || false;
    }

    static allMenuSearch(menus, name) {
        let combinedMenus = [...menus.melee, ...menus.range, ...menus.ontoken,
            ...menus.templatefx, ...menus.aura, ...menus.preset/*, ...menus.aefx*/];

        let sortedMenus = combinedMenus.sort((a, b) => b.label.replace(/\s+/g, '').length - a.label.replace(/\s+/g, '').length);

        return sortedMenus.find(x => x.label && name.includes(this.rinseName(x.label))) || false;
    }

    static exportMenu() {
        const data = (game.settings.get('autoanimations', 'aaAutorec'))
        const filename = `fvtt-autoanimations-autorecognition.json`;
        saveDataToFile(JSON.stringify(data, null, 2), "text/json", filename);
    }

    static async mergeMenus(updatedImport, selectedMenus) {
        console.warn("Merging the requested Menus", updatedImport, selectedMenus)

        let currentMenu = {
            melee:await game.settings.get('autoanimations', 'aaAutorec-melee'),
            range: await game.settings.get('autoanimations', 'aaAutorec-range'),
            ontoken: await game.settings.get('autoanimations', 'aaAutorec-ontoken'),
            templatefx: await game.settings.get('autoanimations', 'aaAutorec-templatefx'),
            aura: await game.settings.get('autoanimations', 'aaAutorec-aura'),
            preset: await game.settings.get('autoanimations', 'aaAutorec-preset'),
            aefx: await game.settings.get('autoanimations', 'aaAutorec-aefx'),
        }

        let mergeMenu = updatedImport;

        let mergeList = []
        if (selectedMenus.melee) { mergeList.push("melee")}
        if (selectedMenus.range) { mergeList.push("range")}
        if (selectedMenus.ontoken) { mergeList.push("ontoken")}
        if (selectedMenus.templatefx) { mergeList.push("templatefx")}
        if (selectedMenus.aura) { mergeList.push("aura")}
        if (selectedMenus.preset) { mergeList.push("preset")}
        if (selectedMenus.aefx) { mergeList.push("aefx")}

        console.log(mergeList, currentMenu, mergeMenu)

        for (var i = 0; i < mergeList.length; i++) {
            let existingMenu = currentMenu[mergeList[i]];
            let incomingMenu = mergeMenu[mergeList[i]];

            for (var a = 0; a < incomingMenu.length; a++) {
                let incomingSectionLabel = incomingMenu[a].label.replace(/\s+/g, '').toLowerCase();
                let newSection = existingMenu.find(section => {
                    return section.label.replace(/\s+/g, '').toLowerCase() === incomingSectionLabel;
                })
                if (!newSection) { currentMenu[mergeList[i]].push(incomingMenu[a])}
            }
            game.settings.set('autoanimations', `aaAutorec-${mergeList[i]}`, currentMenu[mergeList[i]])
        }
    }
}