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
            const auraObject = currentAutorec.auras;
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
                        meleeObject[i].switchMenuType = 'weapon';
                    }
                }
            }
            if (rangeObject) {
                const generic = ['energyconduitsquare', 'energyconduitcircle', 'energybeam', 'heart', 'iceshard', 'musicnote', 'skull', 'energystrand'];
                const rangeLength = Object.keys(rangeObject).length;
                for (var i = 0; i < rangeLength; i++) {
                    if (generic.some(el => rangeObject[i].animation === el)) {
                        rangeObject[i].menuType = 'generic';
                        if (rangeObject[i].animation === "energyconduitcircle") {
                            rangeObject[i].animation = 'conduit';
                            rangeObject[i].variant = 'circle';
                        }
                        if (rangeObject[i].animation === "energyconduitsquare") {
                            rangeObject[i].animation = 'conduit';
                            rangeObject[i].variant = 'square';
                        }
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
                const marker = ['marker', 'circleofstars', 'energystrand'];
                const shieldfx = ['energyfieldtop', 'shieldfiretop', 'shieldicetop', 'shieldearthtop', 'shieldeldritchwebtop'];
                const tokenborder = ['staticborder', 'spinningborder'];
                const fireball = ['fireballexplode']

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
                            staticObject[i].animation = 'splash';
                            break;
                        case magicsign.some(el => staticObject[i].animation === el):
                            staticObject[i].menuType = 'magicsign';
                            break;
                        case marker.some(el => staticObject[i].animation === el):
                            staticObject[i].menuType = 'marker';
                            if (staticObject[i].animation === 'circleofstars') { }
                            else if (staticObject[i].animation === 'energystrand') {
                                staticObject[i].animation = 'energystrand'
                            }
                            else {
                                switch (staticObject[i].variant) {
                                    case '03':
                                        staticObject[i].animation = 'music';
                                        staticObject[i].variant = '01';
                                        break;
                                    case 'bubble':
                                        staticObject[i].animation = 'bubble';
                                        staticObject[i].variant = '01';
                                        break;
                                    case 'energystrand':
                                        staticObject[i].animation = 'energystrands';
                                        staticObject[i].variant = '01'
                                        break;
                                    default:
                                        staticObject[i].animation = 'standard';
                                        staticObject[i].variant = '01';
                                }
                            }
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
                            staticObject[i].menuType = 'tokenborder';
                            if (staticObject[i].animation === 'staticborder') {
                                staticObject[i].animation = 'static';
                            } else {
                                staticObject[i].animation = 'spinning';
                            }
                            break;
                        case fireball.some(el => staticObject[i].animation === el):
                            staticObject[i].menuType = 'spell';
                            staticObject[i].animation = 'fireball';
                            staticObject[i].variant = 'explode';
                            break;
                        default:
                            staticObject[i].menuType = 'spell';
                    }
                }
            }
            if (templateObject) {
                const templateLength = Object.keys(templateObject).length;
                for (var i = 0; i < templateLength; i++) {
                    templateObject[i].menuType = templateObject[i].type === 'rect' ? 'square' : templateObject[i].type
                    switch (templateObject[i].menuType) {
                        case "cone":
                            if (templateObject[i].animation === 'breathweaponcone') {
                                templateObject[i].animation = 'breathweapon';
                            }
                            break;
                        case "circle":
                            const circleTypes = ['dropct', 'fearct', 'heartct', 'horrorct', 'poisonct', 'runesct', 'shieldsct', 'crackedshieldct', 'skullct', 'snowflakesct', 'musicnotect'];
                            if (circleTypes.some(el => templateObject[i].animation === el)) {
                                templateObject[i].animation = templateObject[i].animation.replace('ct', '')
                            }
                            switch (templateObject[i].animation) {
                                case 'outpulse01':
                                    templateObject[i].animation = 'outpulse';
                                    templateObject[i].variant = '01';
                                    break;
                                case 'outpulse02':
                                    templateObject[i].animation = 'outpulse';
                                    templateObject[i].variant = '02';
                                    break;
                                case 'fireballloop':
                                    templateObject[i].animation = 'fireball';
                                    templateObject[i].variant = templateObject[i].variant === 'nodebris' ? 'nodebris' : 'loop';
                                    break;
                                case 'fireballexplode':
                                    templateObject[i].animation = 'fireball';
                                    templateObject[i].variant = 'explode';
                                    break;
                            }
                            break;
                        case "square":
                            const squareTypes = ['dropct', 'fearct', 'heartct', 'horrorct', 'poisonct', 'runesct', 'shieldsct', 'crackedshieldct', 'skullct', 'snowflakesct']
                            if (squareTypes.some(el => templateObject[i].animation === el)) {
                                templateObject[i].animation = templateObject[i].animation.replace('ct', '')
                            } else if (templateObject[i].animation === 'musicnotest') {
                                templateObject[i].animation = 'musicnote';
                            }
                            break;
                        case "ray":
                            if (templateObject[i].animation === 'breathweaponline') {
                                templateObject[i].animation = 'breathweapon';
                            }
                            break;
                    }
                }
            }
            if (auraObject) {
                const auraLength = Object.keys(auraObject).length;
                for (var i = 0; i < auraLength; i++) {
                    switch (auraObject[i].animation) {
                        case "energystrand":
                            auraObject[i].menuType = 'marker';
                            break;
                        case 'dodecahedron':
                            auraObject[i].menuType = 'energy';
                            break;
                        case 'staticelectricity':
                            auraObject[i].menuType = 'lightning';
                            break;
                        default:
                            auraObject[i].menuType = 'spell';
                    }
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
                        case "dualattach":
                            switch (presetObject[i].subAnimation) {
                                case 'energystrand':
                                case 'energybeam':
                                    presetObject[i].menuType = 'generic';
                                    break;
                                default:
                                    presetObject[i].menuType = 'spell'
                            }
                            break;
                        case 'fireball':
                            const fire = ['eruption'];
                            const generic = ['boulderimpact', 'explosion', 'impact', 'outpulse01', 'outpulse02'];
                            const ice = ['snowflake'];
                            const liquid = ['liquidsplash'];
                            const fireball = ['fireballexplode']
                            switch (presetObject[i].projectile) {
                                case 'energystrand':
                                case 'energybeam':
                                    presetObject[i].rangeType = 'generic';
                                    break;
                                default:
                                    presetObject[i].rangeType = 'spell'
                            }
                            if (presetObject[i].explosion01) {
                                switch (true) {
                                    case fire.some(el => presetObject[i].explosion01 === el):
                                        presetObject[i].ex01Type = 'fire';
                                        break;
                                    case generic.some(el => presetObject[i].explosion01 === el):
                                        presetObject[i].ex01Type = 'generic';
                                        break;
                                    case ice.some(el => presetObject[i].explosion01 === el):
                                        presetObject[i].ex01Type = 'ice';
                                        break;
                                    case liquid.some(el => presetObject[i].explosion01 === el):
                                        presetObject[i].ex01Type = 'liquid';
                                        presetObject[i].explosion01 = 'splash';
                                        break;
                                    case fireball.some(el => presetObject[i].explosion01 === el):
                                        presetObject[i].ex01Type = 'spell';
                                        presetObject[i].explosion01 = 'fireball';
                                        presetObject[i].explosion01Variant = 'explode';
                                        break;
                                    default:
                                        presetObject[i].ex01Type = 'spell';
                                }            
                            }
                            if (presetObject[i].explosion02) {
                                switch (true) {
                                    case fire.some(el => presetObject[i].explosion02 === el):
                                        presetObject[i].ex02Type = 'fire';
                                        break;
                                    case generic.some(el => presetObject[i].explosion02 === el):
                                        presetObject[i].ex02Type = 'generic';
                                        break;
                                    case ice.some(el => presetObject[i].explosion02 === el):
                                        presetObject[i].ex02Type = 'ice';
                                        break;
                                    case liquid.some(el => presetObject[i].explosion02 === el):
                                        presetObject[i].ex02Type = 'liquid';
                                        presetObject[i].explosion02 = 'splash';
                                        break;
                                    case fireball.some(el => presetObject[i].explosion02 === el):
                                        presetObject[i].ex02Type = 'spell';
                                        presetObject[i].explosion02 = 'fireball';
                                        presetObject[i].explosion02Variant = 'explode';
                                        break;
                                    default:
                                        presetObject[i].ex02Type = 'spell';
                                }            
                            }
                            break;

                    }
                }
            }
            currentAutorec.version = 4;
            await game.settings.set('autoanimations', 'aaAutorec', currentAutorec)
        }

    }
}