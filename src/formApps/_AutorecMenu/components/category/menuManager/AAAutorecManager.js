import { autoRecMigration }                 from "../../../../../mergeScripts/autorec/autoRecMerge";
import { currentAutorecVersion }            from "../../../../../mergeScripts/autorec/autoRecMerge.js";
import { custom_warning, custom_error, custom_notify }     from "../../../../../constants/constants";
import { Hashing }                          from "#runtime/util";
import { AutorecSanitizer }                 from "../../../../../aa-classes/autorecSanityCheck";
import { defaultData }                      from "./defaultIndex";

export class AAAutorecManager
{
    static async restoreDefault() {
        let restoredMenu = defaultData();

        await game.settings.set("autoanimations", "aaAutorec", void 0);
        await game.settings.set("autoanimations", "aaAutorec-aefx", restoredMenu.aefx);
        await game.settings.set("autoanimations", "aaAutorec-aura", restoredMenu.aura);
        await game.settings.set("autoanimations", "aaAutorec-melee", restoredMenu.melee);
        await game.settings.set("autoanimations", "aaAutorec-preset", restoredMenu.preset);
        await game.settings.set("autoanimations", "aaAutorec-range", restoredMenu.range);
        await game.settings.set("autoanimations", "aaAutorec-ontoken", restoredMenu.ontoken);
        await game.settings.set("autoanimations", "aaAutorec-templatefx", restoredMenu.templatefx);
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

        let metaData = data || {};

        let exportData = {
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
            let newMelee = setMeta(exportData.melee)
            await game.settings.set("autoanimations", "aaAutorec-melee", newMelee);
        }
        if (exportData.range.length && (options?.range || addAll)) {
            let newRange = setMeta(exportData.range)
            await game.settings.set("autoanimations", "aaAutorec-range", newRange);
        }
        if (exportData.ontoken.length && (options?.ontoken || addAll)) {
            let newOnToken = setMeta(exportData.ontoken)
            await game.settings.set("autoanimations", "aaAutorec-ontoken", newOnToken);
        }
        if (exportData.templatefx.length && (options?.templatefx || addAll)) {
            let newTemplateFx = setMeta(exportData.templatefx)
            await game.settings.set("autoanimations", "aaAutorec-templatefx", newTemplateFx);
        }
        if (exportData.aura.length && (options?.aura || addAll)) {
            let newAura = setMeta(exportData.aura)
            await game.settings.set("autoanimations", "aaAutorec-aura", newAura);
        }
        if (exportData.preset.length && (options?.preset || addAll)) {
            let newPreset = setMeta(exportData.preset)
            await game.settings.set("autoanimations", "aaAutorec-preset", newPreset);
        }
        if (exportData.aefx.length && (options?.aefx || addAll)) {
            let newAefx = setMeta(exportData.aefx)
            await game.settings.set("autoanimations", "aaAutorec-aefx", newAefx);
        }

        function setMeta(menu) {
            let newMenu = foundry.utils.deepClone(menu);
            newMenu = AutorecSanitizer.newSectionIds(newMenu);
            newMenu.forEach((a) => a.metaData = metaData);
            return newMenu;
        }

    }

    // Exports ALL Global Automatic Recognition Menus
    static async exportMenu(string = "") {

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

        const filename = `fvtt-AutomatedAnimations-GlobalMenu${string}.json`;

        saveDataToFile(JSON.stringify(exportData, null, 2), "text/json", filename);
    }

    /**
     *
     * @param {Object} menu // Expects a valid  Global Automatic Recognition Menu export
     * @param {*} options // Limit the Menus in which to perform the Merge. Ex: {melee: true} will ONLY merge the Melee Menus
     */
    static async mergeMenus(menu, options = {}) {
        const currentVersion = currentAutorecVersion();
        if (menu.version > currentVersion) {
            custom_error("You are attempting to import a menu that is from a newer version of Automated Animations. Please update your module and try again", true);
            return;
        }
        custom_warning("Merging the requested Menus", false, menu, options)
        const updatedImport = await autoRecMigration.handle(menu, {...options})

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
                if (!newSection) {
                    incomingMenu[a].id = Hashing.uuidv4();
                    currentMenu[mergeList[i]].push(incomingMenu[a]);
                }
            }
            custom_notify(`${game.i18n.localize(`autoanimations.animTypes.${mergeList[i]}`)} Menu has been successfully merged`);
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

        const currentVersion = currentAutorecVersion();
        if (menuData.version > currentVersion) {
            custom_error("You are attempting to import a menu that is from a newer version of Automated Animations. Please update your module and try again", true);
            return;
        }

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
