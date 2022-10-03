import * as itemMerge from "./merges/versionIndex.js";

export const flagMigrations = {

    async handle(item, options = {}) {
        let flags = item.flags?.autoanimations;
        if (!flags) return;

        if (this.upToDate(flags)) return flags;

        if (flags.version && isNaN(flags.version)) {
            console.error("Your A-A Item data may be corrupted. Please log this in the Automated Animations GitHub issues");
            return flags;
        }
        let newFlagData = item.flags.autoanimations;
        for (let [version, migration] of Object.entries(this.migrations)) {
            let flagVersion = item.flags.autoanimations.version;

            if (flagVersion >= Number(version)) continue;

            newFlagData = await migration(newFlagData, options.isActiveEffect);
        }
        //let updatedFlags = item.flags?.autoanimations ?? {};
        if (!newFlagData) {
            await item.update({ 'flags.-=autoanimations': null })
            return void 0;
        } else {
            await item.update({ 'flags.-=autoanimations': null })
            await item.update({ 'flags.autoanimations': newFlagData })   
            return newFlagData;
        }
    },

    upToDate(flags) {
        const currentFlagVersion = Object.keys(this.migrations).map(n => Number(n)).reverse()[0]
        return flags.version >= currentFlagVersion;
    },

    migrations: {
        "1": async (item) => {
            return await itemMerge.version01(item)
        },
        "2": async (item) => {
            return await itemMerge.version02(item)
        },
        "3": async (item) => {
            return await itemMerge.version03(item)
        },
        "4": async (item) => {
            return await itemMerge.version04(item)
        },
        "5": async (item, isActiveEffect) => {
            return await itemMerge.version05(item, isActiveEffect)
        }
    }
}