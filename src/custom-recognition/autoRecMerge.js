import {
    autorecData,
} from "../formApps/AutorecMenu/autorecPreviews.js";
import * as autorecMerge from "./merges/versionIndex.js";

export const autoRecMigration = {

    async handle(autoObject, shouldSubmit, updateMerge) {

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
            await game.settings.set('autoanimations', 'aaAutorec', currentAutorec)
            autorecData.set(currentAutorec)
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