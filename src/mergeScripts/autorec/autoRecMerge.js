import * as autorecMerge from "./merges/versionIndex.js";

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

        if (!autoObject) { return; }

        if (options.newSchema) {
            ui.notifications.info("Exporting your Autorec Menu before running Migration")
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
                //version: game.settings.get('autoanimations', 'aaAutorec-version')
            } 
        }

        if (this.upToDate(autoObject)) { return; }

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
                await game.settings.set('autoanimations', 'aaAutorec-melee', currentAutorec.melee)
            }
            if (options.range || options.submitAll) {
                await game.settings.set('autoanimations', 'aaAutorec-range', currentAutorec.range)
            }
            if (options.ontoken || options.submitAll) {
                await game.settings.set('autoanimations', 'aaAutorec-ontoken', currentAutorec.ontoken)
            }
            if (options.templatefx || options.submitAll) {
                await game.settings.set('autoanimations', 'aaAutorec-templatefx', currentAutorec.templatefx)
            }
            if (options.aura || options.submitAll) {
                await game.settings.set('autoanimations', 'aaAutorec-aura', currentAutorec.aura)
            }
            if (options.preset || options.submitAll) {
                await game.settings.set('autoanimations', 'aaAutorec-preset', currentAutorec.preset)
            }
            if (options.aefx || options.submitAll) {
                await game.settings.set('autoanimations', 'aaAutorec-aefx', currentAutorec.aefx)
            }
            await game.settings.set('autoanimations', 'aaAutorec', {version: Object.keys(this.migrations).map(n => Number(n)).reverse()[0]})
            //TO-DO: Create Version game setting
            //await game.settings.set('autoanimations', 'aaAutorec-version', Object.keys(this.migrations).map(n => Number(n)).reverse()[0])
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
            return await autorecMerge.mergeVersion05(currentAutorec)
        },
    }
}