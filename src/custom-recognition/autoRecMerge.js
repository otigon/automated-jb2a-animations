export const autoRecMigration = {

    async handle(autoObject) {

        if (!autoObject) { return; }
        if (this.upToDate(autoObject)) { return; }

        ui.notifications.info("Automated Animations: Merging the Automatic Recognition Menu")

        for (let [version, migration] of Object.entries(this.migrations)) {
            let currentAutorec = game.settings.get('autoanimations', 'aaAutorec')
            let flagVersion = currentAutorec.version;

            if (flagVersion >= Number(version)) continue;

            await migration(currentAutorec)
        }
        ui.notifications.info("Automatic Recognition Menu merge is Complete!")
    },

    upToDate(autoObject) {
        const currentFlagVersion = Object.keys(this.migrations).map(n => Number(n)).reverse()[0];
        return autoObject.version >= currentFlagVersion;
    },

    migrations: {
        "1": async (currentAutorec) => {
            const staticObject = currentAutorec.static;
            if (staticObject) {
                const staticLength = Object.keys(staticObject).length;
                for (var i = 0; i < staticLength; i++) {
                    switch (staticObject[i].animation) {
                        case 'curewounds':
                        case 'generichealing':
                        case 'tollthedead':
                            staticObject[i].staticOptions = 'staticSpells';
                            break;
                        case 'bite':
                        case 'claw':
                            staticObject[i].staticOptions = 'creature';
                            break;
                        default:
                            staticObject[i].staticOptions = 'explosion';
                    }
                }
            }
            const templates = currentAutorec.templates;
            if (templates) {
                const templateLength = Object.keys(templates).length;
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
            await game.settings.set('autoanimations', 'aaAutorec', currentAutorec)
        },
        "2": async (currentAutorec) => {
            const meleeObject = currentAutorec.melee;
            if (meleeObject) {
                const meleeLength = Object.keys(meleeObject).length;
                for (var i = 0; i < meleeLength; i++) {
                    meleeObject[i].meleeType = "weapon";
                }
            }
            currentAutorec.version = 2;
            await game.settings.set('autoanimations', 'aaAutorec', currentAutorec)
        },
        "3": async (currentAutorec) => {
            const templateObject = currentAutorec.templates;
            if (templateObject) {
                const templateLength = Object.keys(templateObject).length;
                for (var i = 0; i < templateLength; i++) {
                    templateObject[i].scaleX = templateObject[i].scale || 1;
                    templateObject[i].scaleY = templateObject[i].scale || 1;
                }
            }
            const presetObject = currentAutorec.preset;
            if (presetObject) {
                const presetLength = Object.keys(presetObject).length;
                for (var i = 0; i < presetLength; i++) {
                    if (presetObject[i].animation === "teleportation") {
                        presetObject[i].measureType = "alternating";
                        presetObject[i].custom02 = presetObject[i].custom ? true : false;
                        presetObject[i].customPath02 = presetObject[i].custom ? presetObject[i].customPath : "";
                        presetObject[i].subAnimation02 = presetObject[i].subAnimation ?? "mistystep";
                        presetObject[i].variant = "01";
                        presetObject[i].variant02 = "02";
                        presetObject[i].color02 = presetObject[i].color ?? "blue";
                        presetObject[i].scale02 = presetObject[i].scale || 1;
                    }
                }
            }
            currentAutorec.version = 3;
            await game.settings.set('autoanimations', 'aaAutorec', currentAutorec)
        }
    }
}