import { autoRecMigration } from "../../../../../mergeScripts/autorec/autoRecMerge";
import { custom_warning, custom_error } from "../../../../../constants/constants";

export class AAAutorecManager
{
    static async restoreDefault() {
        Hooks.call("AutomaticAnimations.Clear.Data");
    }

    // Returns the current Global Automatic Recognition Menus with Version
    static getAutorecEntries() {
        let menu = {
            melee: game.settings.get('autoanimations', 'aaAutorec-melee'),
            range: game.settings.get('autoanimations', 'aaAutorec-range'),
            ontoken: game.settings.get('autoanimations', 'aaAutorec-ontoken'),
            templatefx: game.settings.get('autoanimations', 'aaAutorec-templatefx'),
            aura: game.settings.get('autoanimations', 'aaAutorec-aura'),
            preset: game.settings.get('autoanimations', 'aaAutorec-preset'),
            aefx: game.settings.get('autoanimations', 'aaAutorec-aefx'),
            version: game.settings.get('autoanimations', 'aaAutorec').version,
        }
        return menu;
    }

    /**
     * 
     * @param {Object} data // Expects an Object containing all MetaData to tag on the Menu Entries 
     * @param {Object} options // Limit the Menus in which to tag with MetaData. Ex: {melee: true} will ONLY tag the Melee Menu entries with MetaData
     * @returns 
     */
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

        if (exportData.melee.length && (options?.melee || addAll)) {
            exportData.melee.forEach((a) => a.metaData = metaData);
            await game.settings.set("autoanimations", "aaAutorec-melee", exportData.melee);
        }
        if (exportData.range.length && (options?.range || addAll)) {
            exportData.range.forEach((a) => a.metaData = metaData);
            await game.settings.set("autoanimations", "aaAutorec-range", exportData.range);
        }
        if (exportData.ontoken.length && (options?.ontoken || addAll)) {
            exportData.ontoken.forEach((a) => a.metaData = metaData);
            await game.settings.set("autoanimations", "aaAutorec-ontoken", exportData.ontoken);
        }
        if (exportData.templatefx.length && (options?.templatefx || addAll)) {
            exportData.templatefx.forEach((a) => a.metaData = metaData);
            await game.settings.set("autoanimations", "aaAutorec-templatefx", exportData.templatefx);
        }
        if (exportData.aura.length && (options?.aura || addAll)) {
            exportData.aura.forEach((a) => a.metaData = metaData);
            await game.settings.set("autoanimations", "aaAutorec-aura", exportData.aura);
        }
        if (exportData.preset.length && (options?.preset || addAll)) {
            exportData.preset.forEach((a) => a.metaData = metaData);
            await game.settings.set("autoanimations", "aaAutorec-preset", exportData.preset);
        }
        if (exportData.aefx.length && (options?.aefx || addAll)) {
            exportData.aefx.forEach((a) => a.metaData = metaData);
            await game.settings.set("autoanimations", "aaAutorec-aefx", exportData.aefx);
        }

    }

    // Exports ALL Global Automatic Recognition Menus
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

    /**
     * 
     * @param {Object} menu // Expects a valid  Global Automatic Recognition Menu export
     * @param {*} options // Limit the Menus in which to perform the Merge. Ex: {melee: true} will ONLY merge the Melee Menus
     */
    static async mergeMenus(menu, options = {}) {
        let isValid = this._validateJson(menu);
        if (!isValid) {
            custom_error("You did not provide a valid JSON!");
            return;
        }
        const menuData = JSON.parse(menu)
        custom_warning("Merging the requested Menus", false, menuData, options)
        const updatedImport = await autoRecMigration.handle(menuData, {...options})

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
        if (options.melee) { mergeList.push("melee")};
        if (options.range) { mergeList.push("range")};
        if (options.ontoken) { mergeList.push("ontoken")};
        if (options.templatefx) { mergeList.push("templatefx")};
        if (options.aura) { mergeList.push("aura")};
        if (options.preset) { mergeList.push("preset")};
        if (options.aefx) { mergeList.push("aefx")};

        for (var i = 0; i < mergeList.length; i++) {
            let existingMenu = currentMenu[mergeList[i]];
            let incomingMenu = mergeMenu[mergeList[i]];

            for (var a = 0; a < incomingMenu.length; a++) {
                let incomingSectionLabel = incomingMenu[a].label.replace(/\s+/g, '').toLowerCase();
                let newSection = existingMenu.find(section => {
                    return section.label?.replace(/\s+/g, '')?.toLowerCase() === incomingSectionLabel;
                })
                if (!newSection) { currentMenu[mergeList[i]].push(incomingMenu[a])}
            }
            game.settings.set('autoanimations', `aaAutorec-${mergeList[i]}`, currentMenu[mergeList[i]])
        }
    }

    /**
     * 
     * @param {Object} menu // Expects a valid  Global Automatic Recognition Menu export
     * @param {*} options // Limit the Menus in which to perform the Overwrite. Ex: {melee: true} will ONLY overwrite the Melee Menus
     */
    static async overwriteMenus(menu, options = {}) {
        let isValid = this._validateJson(menu);
        if (!isValid) {
            custom_error("You did not provide a valid JSON!");
            return;
        }
        const menuData = JSON.parse(menu)
        await autoRecMigration.handle(menuData, {isOverwrite: true, shouldSubmit: true, ...options})
    }

    static _validateJson(json) {
        try {
            JSON.parse(json);
            return true;
        } catch (e) {
            return false;
        }
    }
}