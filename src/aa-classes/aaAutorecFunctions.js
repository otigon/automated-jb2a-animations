import { autoRecMigration } from "../custom-recognition/autoRecMerge";

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
        return menu.find(x => name.includes(this.rinseName(x.label))) || false;
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
        console.log("Merging the requested Menus", updatedImport, selectedMenus)

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
    /*
    static async mergeMenu(json) {
        //const currentMenuBackup = (game.settings.get('autoanimations', 'aaAutorec'))
        //const filename = `Merged-Menu-Recovery.json`;
        //saveDataToFile(JSON.stringify(currentMenuBackup, null, 2), "text/json", filename);
        //ui.notifications.info("Exporting Menu Backup before Merging")

        // Imported Autorec Menu
        let newData = JSON.parse(json);

        newData = await autoRecMigration.handle(newData, false)
        // Existing Autorec Menu
        const oldData = game.settings.get('autoanimations', 'aaAutorec');
        // New Autorec Menu
        oldData.search = "";

        let idx;

        const menuSections = ['melee', 'range', 'static', 'templatefx', 'aura', 'preset', 'aefx']

        await mergeMenus();

        async function mergeMenus() {
            for (var i = 0; i < menuSections.length; i++) {
                if (!newData[menuSections[i]]) { return; }
                // Resets IDX to 0
                if (!oldData[menuSections[i]]) {
                    oldData[menuSections[i]] = {};
                }
                let sectionLength = Object.keys(oldData[menuSections[i]]).length
                idx = sectionLength === 0 ? 0 : sectionLength;

                // Sets Old and New Names arrays from the Section, spaces removed and toLowerCase()
                const newSectionNames = await getAllNamesInSection(newData, menuSections[i]);
                const oldSectionNames = await getAllNamesInSection(oldData, menuSections[i]);

                // If Existing Menu has no Section, check if New Menu has Section. If NO, return. If YES set Merged Section = New Section
                if (!oldData[menuSections[i]]) {
                    if (!newData[menuSections[i]]) {
                        oldData[menuSections[i]] = {};
                        return;
                    } else {
                        oldData[menuSections[i]] = newData[menuSections[i]];
                        return;
                    }
                }

                // Compare Existing versus New and build new Merged Object for Section
                //await checkOldData(oldData, oldSectionNames, newSectionNames, menuSections[i]);
                await checkNewData(newData, oldSectionNames, newSectionNames, menuSections[i]);
            }
        }

        async function getAllNamesInSection(obj, type) {
            const nameArray = []
            try { Object.keys(obj[type]).length }
            catch (exception) { return nameArray }
            const arrayLength = Object.keys(obj[type]).length
            for (var i = 0; i < arrayLength; i++) {
                if (!obj[type][i].name) { continue }

                nameArray.push(obj[type][i].name.replace(/\s+/g, '').toLowerCase())
            }
            return nameArray;
        }

        async function findObjectByName(data, type, name) {
            var newObject = Object.values(data[type])
                .sort((a, b) => b.name.replace(/\s+/g, '').length - a.name.replace(/\s+/g, '').length)
                .find(section => {
                    //cutting out all spaces
                    return name.includes(section.name.replace(/\s+/g, '').toLowerCase()) ? section : "";
                })

            return newObject
        }

        // Checks each Name field of the New Menu to see if it exists in the Current Menu. If it exists, continue, otherwise push to the new Merged Menu and increase IDX
        async function checkNewData(newData, oldArray, newArray, section) {

            let newDataLength = Object.keys(newData[section]).length;
            for (var i = 0; i < newDataLength; i++) {
                if (oldArray.includes(newArray[i])) {
                    continue;
                } else {
                    let newSection = await findObjectByName(newData, section, newArray[i]);
                    oldData[section][idx] = newSection;
                    idx = idx + 1;
                }
            }
        }
        await game.settings.set("autoanimations", "aaAutorec", oldData);
        autorecData.set(oldData)
    }
    */
   /*
    static async overwriteMenu(json) {
        const data = JSON.parse(json);
        console.warn("autoanimations | Import settings ", data);

        //const oldData = (game.settings.get('autoanimations', 'aaAutorec'))
        //const filename = `Overwritten-Menu-Recovery.json`;
        //saveDataToFile(JSON.stringify(oldData, null, 2), "text/json", filename);
        //ui.notifications.info("Exporting Menu Backup before Overwriting")
        console.log("hello trying this")
        await autoRecMigration.handle(data, true)
    }
    */

}