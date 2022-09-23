import { autoRecMigration } from "../../../../../mergeScripts/autorec/autoRecMerge";

export class AAAutorecManager
{
    static async restoreDefault() {
        Hooks.call("AutomaticAnimations.Clear.Data");
    }

    static async addMetaData(data, options) {

        if (!data) { return; }
        let addAll = false;
        if (!options) { addAll = true; }

        const metaData = data || {};

        const exportData = {
            melee: await game.settings.get("autoanimations", "aaAutorec-melee"),
            range: await game.settings.get("autoanimations", "aaAutorec-range"),
            ontoken: await game.settings.get("autoanimations", "aaAutorec-ontoken"),
            templatefx: await game.settings.get("autoanimations", "aaAutorec-templatefx"),
            aura: await game.settings.get("autoanimations", "aaAutorec-aura"),
            preset: await game.settings.get("autoanimations", "aaAutorec-preset"),
            aefx: await game.settings.get("autoanimations", "aaAutorec-aefx"),
            version: await game.settings.get('autoanimations', 'aaAutorec').version,
        };

        if (exportData.melee.length && (options.melee || addAll)) {
            exportData.melee.forEach((a) => a.metaData = metaData);
            await game.settings.set("autoanimations", "aaAutorec-melee", exportData.melee);
        }
        if (exportData.range.length && (options.range || addAll)) {
            exportData.range.forEach((a) => a.metaData = metaData);
            await game.settings.set("autoanimations", "aaAutorec-range", exportData.range);
        }
        if (exportData.ontoken.length && (options.ontoken || addAll)) {
            exportData.ontoken.forEach((a) => a.metaData = metaData);
            await game.settings.set("autoanimations", "aaAutorec-ontoken", exportData.ontoken);
        }
        if (exportData.templatefx.length && (options.templatefx || addAll)) {
            exportData.templatefx.forEach((a) => a.metaData = metaData);
            await game.settings.set("autoanimations", "aaAutorec-templatefx", exportData.templatefx);
        }
        if (exportData.aura.length && (options.aura || addAll)) {
            exportData.aura.forEach((a) => a.metaData = metaData);
            await game.settings.set("autoanimations", "aaAutorec-aura", exportData.aura);
        }
        if (exportData.preset.length && (options.preset || addAll)) {
            exportData.preset.forEach((a) => a.metaData = metaData);
            await game.settings.set("autoanimations", "aaAutorec-preset", exportData.preset);
        }
        if (exportData.aefx.length && (options.aefx || addAll)) {
            exportData.aefx.forEach((a) => a.metaData = metaData);
            await game.settings.set("autoanimations", "aaAutorec-aefx", exportData.aefx);
        }

    }

    static async exportMenu() {

        const exportData = {
            melee: await game.settings.get("autoanimations", "aaAutorec-melee"),
            range: await game.settings.get("autoanimations", "aaAutorec-range"),
            ontoken: await game.settings.get("autoanimations", "aaAutorec-ontoken"),
            templatefx: await game.settings.get("autoanimations", "aaAutorec-templatefx"),
            aura: await game.settings.get("autoanimations", "aaAutorec-aura"),
            preset: await game.settings.get("autoanimations", "aaAutorec-preset"),
            aefx: await game.settings.get("autoanimations", "aaAutorec-aefx"),
            version: await game.settings.get('autoanimations', 'aaAutorec').version,
        };

        const filename = `fvtt-autoanimations-autorecognition.json`;

        saveDataToFile(JSON.stringify(exportData, null, 2), "text/json", filename);    
    }


    static async mergeMenus(menu, menus = {}) {
        console.warn("Automated Animations: Merging the requested Menus", menu, menus)
        const updatedImport = await autoRecMigration.handle(menu, {...menus})

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
        if (menus.melee) { mergeList.push("melee")};
        if (menus.range) { mergeList.push("range")};
        if (menus.ontoken) { mergeList.push("ontoken")};
        if (menus.templatefx) { mergeList.push("templatefx")};
        if (menus.aura) { mergeList.push("aura")};
        if (menus.preset) { mergeList.push("preset")};
        if (menus.aefx) { mergeList.push("aefx")};

        //console.log(mergeList, currentMenu, mergeMenu)

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

    static async overwriteMenus(menu, options = {}) {
        await autoRecMigration.handle(menu, {isOverwrite: true, shouldSubmit: true, ...options})
    }

}