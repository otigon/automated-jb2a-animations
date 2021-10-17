export const autoRecMigration = {

    async handle(autoObject) {

        if (this.upToDate(autoObject)) { return; }

            for (let [version, migration] of Object.entries(this.migrations)) {
                let flagVersion = autoObject.version;

                if (flagVersion >= Number(version)) continue;

                await migration(autoObject)
            }
    },

    upToDate(autoObject) {
        const currentFlagVersion = Object.keys(this.migrations).map(n => Number(n)).reverse()[0];
        return autoObject.version >= currentFlagVersion;
    },

    migrations: {
        "1": async (autoObject) => {

        }
    }
}