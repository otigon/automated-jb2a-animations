import {
    autorecData,
} from "../formApps/AutorecMenu/autorecPreviews.js";
import * as autorecMerge from "./merges/versionIndex.js";

export const autoRecMigration = {

    async handle(autoObject, shouldSubmit, updateMerge, options = {}) {

        if (!autoObject) { return; }
        if (this.upToDate(autoObject)) { return; }

        if (updateMerge) {
            ui.notifications.info("Exporting your Autorec Menu before running Migration")
            const data = (game.settings.get('autoanimations', 'aaAutorec'))
            const filename = `Autorec-Menu-Backup`;
            saveDataToFile(JSON.stringify(data, null, 2), "text/json", filename);    
        }

        ui.notifications.info("Automated Animations: Updating the Automatic Recognition Menu")
        let currentAutorec = autoObject;
        for (let [version, migration] of Object.entries(this.migrations)) {
            let flagVersion = currentAutorec.version;

            if (flagVersion >= Number(version)) continue;

            currentAutorec = await migration(currentAutorec)
        }
        if (!shouldSubmit) {
            return currentAutorec;
        } else {
            if (options.melee) {
                await game.settings.set('autoanimations', 'aaAutorec-melee', currentAutorec.melee)
            }
            if (options.range) {
                await game.settings.set('autoanimations', 'aaAutorec-range', currentAutorec.range)
            }
            if (options.ontoken) {
                await game.settings.set('autoanimations', 'aaAutorec-ontoken', currentAutorec.ontoken)
            }
            if (options.templatefx) {
                await game.settings.set('autoanimations', 'aaAutorec-templatefx', currentAutorec.templatefx)
            }
            if (options.aura) {
                await game.settings.set('autoanimations', 'aaAutorec-aura', currentAutorec.aura)
            }
            if (options.preset) {
                await game.settings.set('autoanimations', 'aaAutorec-preset', currentAutorec.preset)
            }
            if (options.aefx) {
                await game.settings.set('autoanimations', 'aaAutorec-aefx', currentAutorec.aefx)
            }
            //TO-DO: Create Version game setting
            //if (options.aefx) {
                //await game.settings.set('autoanimations', 'aaAutorec-version', newMenu.version)
            //}
            //await game.settings.set('autoanimations', 'aaAutorec', currentAutorec)
            //autorecData.set(currentAutorec)
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
            return await autorecMerge.mergeVersion06(currentAutorec)
        },
    }
}