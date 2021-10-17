Hooks.once('aa.ready', await autoRecMigration()) 
const autoRecMigration = {

    async handle(autoObject) {

        if (!autoObject) { return; }
        if (this.upToDate(autoObject)) { return; }

        for (let [version, migration] of Object.entries(this.migrations)) {
            let currentAutorec = game.settings.get('autoanimations', 'aaAutorec')
            let flagVersion = currentAutorec.version;

            if (flagVersion >= Number(version)) continue;

            await migration(currentAutorec)
        }
    },

    upToDate(autoObject) {
        const currentFlagVersion = Object.keys(this.migrations).map(n => Number(n)).reverse()[0];
        return autoObject.version >= currentFlagVersion;
    },

    migrations: {
        "1": async (currentAutorec) => {
            const static = currentAutorec.static;
            const staticLength = Object.keys(static).length;
            if (staticLength > 0) {
                for (var i = 0; i < staticLength; i++) {
                    switch (static[i].animation) {
                        case 'curewounds':
                        case 'generichealing':
                        case 'tollthedead':
                            static[i].staticOptions = 'staticSpells';
                            break;
                        case 'bite':
                        case 'claw':
                            static[i].staticOptions = 'creature';
                            break;
                        default:
                            static[i].staticOptions = 'explosion';
                    }
                }
            }
            const templates = currentAutorec.templates;
            const templateLength = Object.keys(templates).length;
            if (templateLength > 0) {
                for (var i = 0; i < templateLength; i++) {
                    switch (true) {
                        case templates[i].persist:
                            if (templates[i].overhead) {
                                templates[i].persistType = 'overheadtile';
                            } else {
                                templates[i].persistType = 'sequencerground';
                            }
                            break;
                    }
                }
            }
            currentAutorec.version = 1;
            console.log(currentAutorec)
        }
    }
}