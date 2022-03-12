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
        },
        "4": async (currentAutorec) => {
            const meleeObject = currentAutorec.melee;
            const rangeObject = currentAutorec.range;
            const staticObject = currentAutorec.static;
            const templateObject = currentAutorec.templates;
            const presetObject = currentAutorec.preset;

            if (meleeObject) {
                const generic = ['1hs', '2hs', '1hp', '2hp', '1hb', '2hb']
                const meleeLength = Object.keys(meleeObject).length;
                for (var i = 0; i < meleeLength; i++) {
                    if (meleeObject[i].custom) { } else {
                        if (generic.some(el => meleeObject[i].animation === el)) {
                            meleeObject[i].menuType = 'generic';
                        } else {
                            meleeObject[i].menuType = meleeObject[i].meleeType;
                        }
                    }
                    if (meleeObject[i].switchType === 'custom') {
                        const generic = ['conduit', 'energybeam', 'heart', 'iceshard', 'musicnote', 'skull', 'energystrand'];
                        const spells = ['chainlightning', 'disintegrate', 'eldritchblast', 'fireballbeam', 'firebolt', 'guidingbolt', 'magicmissile', 'rayoffrost', 'scorchingray', 'witchbolt'];
                        if (generic.some(el => meleeObject[i].switchAnimation === el)) {
                            meleeObject[i].switchMenuType = 'generic';
                        } else if (spells.some(el => meleeObject[i].switchAnimation === el)) {
                            meleeObject[i].switchMenuType = 'spell';
                        } else {
                            meleeObject[i].switchMenuType = 'weapon';
                        }
                    }
                }
            }
            if (rangeObject) {
                const generic = ['conduit', 'energybeam', 'heart', 'iceshard', 'musicnote', 'skull', 'energystrand'];
                const rangeLength = Object.keys(rangeObject).length;
                for (var i = 0; i < rangeLength; i++) {
                    if (generic.some(el => rangeObject[i].animation === el)) {
                        rangeObject[i].menuType = 'generic';
                    } else {
                        rangeObject[i].menuType = rangeObject[i].type;
                    }

                }
            }
            if (staticObject) {
                const conditions = ['drop', 'fear', 'heart', 'horror', 'light', 'poison', 'runes', 'shields', 'crackedshield', 'skull', 'snowflakes', 'stun', 'dizzystars'];
                const creature = ['bite', 'claw'];
                const energy = ['energyfield', 'dodecahedron', 'shimmer', 'sparkles'];
                const fire = ['eruption', 'groundcrack', 'fireworks'];
                const generic = ['boulderimpact', 'explosion', 'impact', 'outpulse01', 'outpulse02', 'vortex', 'whirl'];
                const ice = ['icespikes', 'snowflake'];
                const lightning = ['lightningball', 'staticelectricity'];
                const liquid = ['liquidsplash'];
                const magicsign = ['magicSign'];
                const marker = ['marker'];
                const shieldfx = ['energyfieldtop', 'shieldfiretop', 'shieldicetop', 'shieldearthtop', 'shieldeldritchwebtop'];
                const tokenborder = ['staticborder', 'spinningborder'];

                const staticLength = Object.keys(staticObject).length;
                for (var i = 0; i < staticLength; i++) {
                    switch (true) {
                        case conditions.some(el => staticObject[i].animation === el):
                            staticObject[i].menuType = 'conditions';
                            break;
                        case creature.some(el => staticObject[i].animation === el):
                            staticObject[i].menuType = 'creature';
                            break;
                        case energy.some(el => staticObject[i].animation === el):
                            staticObject[i].menuType = 'energy';
                            break;
                        case fire.some(el => staticObject[i].animation === el):
                            staticObject[i].menuType = 'fire';
                            break;
                        case generic.some(el => staticObject[i].animation === el):
                            staticObject[i].menuType = 'generic';
                            break;
                        case ice.some(el => staticObject[i].animation === el):
                            staticObject[i].menuType = 'ice';
                            break;
                        case lightning.some(el => staticObject[i].animation === el):
                            staticObject[i].menuType = 'lightning';
                            break;
                        case liquid.some(el => staticObject[i].animation === el):
                            staticObject[i].menuType = 'liquid';
                            break;
                        case magicsign.some(el => staticObject[i].animation === el):
                            staticObject[i].menuType = 'magicsign';
                            break;
                        case marker.some(el => staticObject[i].animation === el):
                            staticObject[i].menuType = 'marker';
                            break;
                        case shieldfx.some(el => staticObject[i].animation === el):
                            staticObject[i].menuType = 'shieldfx';
                            switch (staticObject[i].animation) {
                                case 'energyfieldtop':
                                    staticObject[i].animation = 'energyfield';
                                    break;
                                case 'shieldfiretop':
                                    staticObject[i].animation = 'fire';
                                    break;
                                case 'shieldicetop':
                                    staticObject[i].animation = 'ice';
                                    break;
                                case 'shieldearthtop':
                                    staticObject[i].animation = 'earth';
                                    break;
                                case 'shieldeldritchwebtop':
                                    staticObject[i].animation = 'eldritchweb';
                                    break;
                            }
                            break;
                        case tokenborder.some(el => staticObject[i].animation === el):
                            staticObject[i].menuType = 'tokenBorder';
                            break;
                        default:
                            staticObject[i].menuType = 'spell';
                    }
                }
            }
            if (templateObject) {
                const templateLength = Object.keys(templateObject).length;
                for (var i = 0; i < templateLength; i++) {
                    templateObject[i].menuType = templateObject[i].type
                }
            }
            if (presetObject) {
                const presetLength = Object.keys(presetObject).length;
                for (var i = 0; i < presetLength; i++) {
                    switch (presetObject[i].animation) {
                        case 'teleportation':
                                presetObject[i].menuType = 'spell';
                                presetObject[i].menuType02 = 'spell';
                            break;
                        
                    }
                }
            }
            currentAutorec.version = 4;
            await game.settings.set('autoanimations', 'aaAutorec', currentAutorec)
        }

    }
}