import * as autorecMerge    from "./merges/versionIndex.js";
import { AutorecSanitizer } from "../../aa-classes/autorecSanityCheck.js";

export function currentAutorecVersion() {
    return Object.keys(autoRecMigration.migrations).map(n => Number(n)).reverse()[0];
}

export const autoRecMigration = {

    /**
     * 
     * @param {*} autoObject 
     * @param {
     * shouldSubmit: Boolean (Merges should be submitted), 
     * newSchema: Boolean (Is a new data Schema?), 
     * submitAll: Boolean (A-A ONLY override to submit ALL merged Menus)
     * } options 
     * @returns 
     */
    async handle(autoObject, options = {}) {

        if (options.newSchema) {
            ui.notifications.info("Automated Animations | Exporting your Global Automatic Recognition Menu before running Migration")
            const data = (game.settings.get('autoanimations', 'aaAutorec'))
            const filename = `Autorec-Menu-Backup`;
            saveDataToFile(JSON.stringify(data, null, 2), "text/json", filename);
            autoObject = {
                melee: game.settings.get('autoanimations', 'aaAutorec-melee'),
                range: game.settings.get('autoanimations', 'aaAutorec-range'),
                ontoken: game.settings.get('autoanimations', 'aaAutorec-ontoken'),
                templatefx: game.settings.get('autoanimations', 'aaAutorec-templatefx'),
                aura: game.settings.get('autoanimations', 'aaAutorec-aura'),
                preset: game.settings.get('autoanimations', 'aaAutorec-preset'),
                aefx: game.settings.get('autoanimations', 'aaAutorec-aefx'),
                version: game.settings.get('autoanimations', 'aaAutorec').version,
            }
        }

        if (!autoObject) { return; }

        if (this.upToDate(autoObject) && !options.isOverwrite) {
            return autoObject;
        }

        ui.notifications.info("Automated Animations: Updating the Automatic Recognition Menu")
        let currentAutorec = autoObject;
        for (let [version, migration] of Object.entries(this.migrations)) {
            let flagVersion = currentAutorec.version;

            if (flagVersion >= Number(version)) continue;

            currentAutorec = await migration(currentAutorec)
        }
        if (!options.shouldSubmit) {
            return currentAutorec;
        } else {
            if (options.melee || options.submitAll) {
                let newMelee = AutorecSanitizer.newSectionIds( currentAutorec.melee )
                await game.settings.set('autoanimations', 'aaAutorec-melee', newMelee)
            }
            if (options.range || options.submitAll) {
                let newRange = AutorecSanitizer.newSectionIds( currentAutorec.range )
                await game.settings.set('autoanimations', 'aaAutorec-range', newRange)
            }
            if (options.ontoken || options.submitAll) {
                let newOnToken = AutorecSanitizer.newSectionIds( currentAutorec.ontoken )
                await game.settings.set('autoanimations', 'aaAutorec-ontoken', newOnToken)
            }
            if (options.templatefx || options.submitAll) {
                let newTemplateFx = AutorecSanitizer.newSectionIds( currentAutorec.templatefx )
                await game.settings.set('autoanimations', 'aaAutorec-templatefx', newTemplateFx)
            }
            if (options.aura || options.submitAll) {
                let newAura = AutorecSanitizer.newSectionIds( currentAutorec.aura )
                await game.settings.set('autoanimations', 'aaAutorec-aura', newAura)
            }
            if (options.preset || options.submitAll) {
                let newPreset = AutorecSanitizer.newSectionIds( currentAutorec.preset )
                await game.settings.set('autoanimations', 'aaAutorec-preset', newPreset)
            }
            if (options.aefx || options.submitAll) {
                let newAefx = AutorecSanitizer.newSectionIds( currentAutorec.aefx )
                await game.settings.set('autoanimations', 'aaAutorec-aefx', newAefx)
            }
            if (Object.keys(this.migrations).map(n => Number(n)).reverse()[0] === 5) {
                game.settings.set('autoanimations', 'aaAutorec', {version: 5});
            } else {
                let versionHandler = game.settings.get('autoanimations', 'aaAutorec');
                versionHandler.version = Object.keys(this.migrations).map(n => Number(n)).reverse()[0];
                await game.settings.set('autoanimations', 'aaAutorec', versionHandler)    
            }
        }
        ui.notifications.info("Automatic Recognition Menu update is Complete!")
    },

    upToDate(autoObject) {
        const currentFlagVersion = Object.keys(this.migrations).map(n => Number(n)).reverse()[0];
        return autoObject.version >= currentFlagVersion;
    },

    migrations: {
        "1": async (currentAutorec) => {
            return await autorecMerge.mergeVersion01(currentAutorec)
        },
        "2": async (currentAutorec) => {
            return await autorecMerge.mergeVersion02(currentAutorec)
        },
        "3": async (currentAutorec) => {
            return await autorecMerge.mergeVersion03(currentAutorec)
        },
        "4": async (currentAutorec) => {
            return await autorecMerge.mergeVersion04(currentAutorec)
        },
        "5": async (currentAutorec) => {
            return await autorecMerge.mergeVersion05(currentAutorec)
        },
    }
}