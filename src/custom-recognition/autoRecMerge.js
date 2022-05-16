export const autoRecMigration = {

    async handle(autoObject, shouldSubmit) {

        if (!autoObject) { return; }
        if (this.upToDate(autoObject)) { return; }

        ui.notifications.info("Automated Animations: Updating the Automatic Recognition Menu")
        let currentAutorec = autoObject;
        for (let [version, migration] of Object.entries(this.migrations)) {
            let flagVersion = currentAutorec.version;

            if (flagVersion >= Number(version)) continue;

            currentAutorec = await migration(currentAutorec)
        }
        if (shouldSubmit) {
            return currentAutorec;
        } else {
            await game.settings.set('autoanimations', 'aaAutorec', currentAutorec)
        }
        ui.notifications.info("Automatic Recognition Menu update is Complete!")
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
            return currentAutorec;
            //await game.settings.set('autoanimations', 'aaAutorec', currentAutorec)
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
            return currentAutorec;
            //await game.settings.set('autoanimations', 'aaAutorec', currentAutorec)
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
            return currentAutorec;
            //await game.settings.set('autoanimations', 'aaAutorec', currentAutorec)
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
                    let co = meleeObject[i];
                    if (co.custom) { } else {
                        if (generic.some(el => co.animation === el)) {
                            co.menuType = 'generic';
                        } else {
                            co.menuType = co.meleeType;
                        }
                    }
                    if (co.switchType === 'custom') {
                        co.switchMenuType = 'weapon';
                    }
                    if (co.explosion?.enable && !co.explosion.custom) {
                        const fire = ['eruption'];
                        const generic = ['boulderimpact', 'explosion', 'impact', 'outpulse01', 'outpulse02'];
                        const ice = ['snowflake'];
                        const liquid = ['liquidsplash'];
                        const fireball = ['fireballexplode']
                        switch (true) {
                            case fire.some(el => co.explosion.animation === el):
                                co.explosion.menuType = 'fire';
                                break;
                            case generic.some(el => co.explosion.animation === el):
                                co.explosion.menuType = 'generic';
                                if (co.explosion.animation.includes('outpulse')) {
                                    co.explosion.animation = 'outpulse';
                                    co.explosion.variant = co.explosion.variant === 'outpulse02' ? '02' : '01';
                                }
                                break;
                            case ice.some(el => co.explosion.animation === el):
                                co.explosion.menuType = 'ice';
                                break;
                            case liquid.some(el => co.explosion.animation === el):
                                co.explosion.menuType = 'liquid';
                                co.explosion.animation = 'splash';
                                break;
                            case fireball.some(el => co.explosion.animation === el):
                                co.explosion.menuType = 'spell';
                                co.explosion.animation = 'fireball';
                                co.explosion.variant = 'explode';
                                break;
                            default:
                                co.explosion.menuType = 'spell';
                        }
                    }
                }
            }
            if (rangeObject) {
                const generic = ['energyconduitsquare', 'energyconduitcircle', 'energybeam', 'heart', 'iceshard', 'musicnote', 'skull', 'energystrand'];
                const rangeLength = Object.keys(rangeObject).length;
                for (var i = 0; i < rangeLength; i++) {
                    let ro = rangeObject[i]
                    if (generic.some(el => ro.animation === el)) {
                        ro.menuType = 'generic';
                        if (ro.animation === "energyconduitcircle") {
                            ro.animation = 'conduit';
                            ro.variant = 'circle';
                        }
                        if (ro.animation === "energyconduitsquare") {
                            ro.animation = 'conduit';
                            ro.variant = 'square';
                        }
                    } else {
                        ro.menuType = ro.type;
                    }
                    if (ro.explosion?.enable && !ro.explosion.custom) {
                        const fire = ['eruption'];
                        const generic = ['boulderimpact', 'explosion', 'impact', 'outpulse01', 'outpulse02'];
                        const ice = ['snowflake'];
                        const liquid = ['liquidsplash'];
                        const fireball = ['fireballexplode']
                        switch (true) {
                            case fire.some(el => ro.explosion.animation === el):
                                ro.explosion.menuType = 'fire';
                                break;
                            case generic.some(el => ro.explosion.animation === el):
                                ro.explosion.menuType = 'generic';
                                if (ro.explosion.animation.includes('outpulse')) {
                                    ro.explosion.animation = 'outpulse';
                                    ro.explosion.variant = ro.explosion.variant === 'outpulse02' ? '02' : '01';
                                }
                                break;
                            case ice.some(el => ro.explosion.animation === el):
                                ro.explosion.menuType = 'ice';
                                break;
                            case liquid.some(el => ro.explosion.animation === el):
                                ro.explosion.menuType = 'liquid';
                                ro.explosion.animation = 'splash';
                                break;
                            case fireball.some(el => ro.explosion.animation === el):
                                ro.explosion.menuType = 'spell';
                                ro.explosion.animation = 'fireball';
                                ro.explosion.variant = 'explode';
                                break;
                            default:
                                ro.explosion.menuType = 'spell';
                        }
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
                    let so = staticObject[i];
                    switch (true) {
                        case conditions.some(el => so.animation === el):
                            so.menuType = 'conditions';
                            break;
                        case creature.some(el => so.animation === el):
                            so.menuType = 'creature';
                            break;
                        case energy.some(el => so.animation === el):
                            so.menuType = 'energy';
                            break;
                        case fire.some(el => so.animation === el):
                            so.menuType = 'fire';
                            break;
                        case generic.some(el => so.animation === el):
                            so.menuType = 'generic';
                            if (so.animation.includes('outpulse')) {
                                so.variant = so.animation === 'outpulse02' ? '02' : '01';
                                so.animation = 'outpulse';
                            }
                            break;
                            break;
                        case ice.some(el => so.animation === el):
                            so.menuType = 'ice';
                            break;
                        case lightning.some(el => so.animation === el):
                            so.menuType = 'lightning';
                            break;
                        case liquid.some(el => so.animation === el):
                            so.menuType = 'liquid';
                            so.animation = 'splash';
                            break;
                        case magicsign.some(el => so.animation === el):
                            so.menuType = 'magicsign';
                            break;
                        case marker.some(el => so.animation === el):
                            so.menuType = 'marker';
                            if (so.animation === 'circleofstars') { }
                            else if (so.animation === 'energystrand') {
                                so.animation = 'energystrand'
                            }
                            else {
                                switch (so.variant) {
                                    case '03':
                                        so.animation = 'music';
                                        so.variant = '01';
                                        break;
                                    case 'bubble':
                                        so.animation = 'bubble';
                                        so.variant = '01';
                                        break;
                                    case 'energystrand':
                                        so.animation = 'energystrands';
                                        so.variant = '01'
                                        break;
                                    default:
                                        so.animation = 'standard';
                                        so.variant = '01';
                                }
                            }
                            break;
                        case shieldfx.some(el => so.animation === el):
                            so.menuType = 'shieldfx';
                            switch (so.animation) {
                                case 'energyfieldtop':
                                    so.animation = 'energyfield';
                                    break;
                                case 'shieldfiretop':
                                    so.animation = 'fire';
                                    break;
                                case 'shieldicetop':
                                    so.animation = 'ice';
                                    break;
                                case 'shieldearthtop':
                                    so.animation = 'earth';
                                    break;
                                case 'shieldeldritchwebtop':
                                    so.animation = 'eldritchweb';
                                    break;
                            }
                            break;
                        case tokenborder.some(el => so.animation === el):
                            so.menuType = 'tokenborder';
                            if (so.animation === 'staticborder') {
                                so.animation = 'static';
                            } else {
                                so.animation = 'spinning';
                            }
                            break;
                        case fireball.some(el => so.animation === el):
                            so.menuType = 'spell';
                            so.animation = 'fireball';
                            so.variant = 'explode';
                            break;
                        default:
                            so.menuType = 'spell';
                    }
                    if (so.explosion?.enable && !so.explosion.custom) {
                        const fire = ['eruption'];
                        const generic = ['boulderimpact', 'explosion', 'impact', 'outpulse01', 'outpulse02'];
                        const ice = ['snowflake'];
                        const liquid = ['liquidsplash'];
                        const fireball = ['fireballexplode']
                        switch (true) {
                            case fire.some(el => so.explosion.animation === el):
                                so.explosion.menuType = 'fire';
                                break;
                            case generic.some(el => so.explosion.animation === el):
                                so.explosion.menuType = 'generic';
                                if (so.explosion.animation.includes('outpulse')) {
                                    so.explosion.animation = 'outpulse';
                                    so.explosion.variant = so.explosion.variant === 'outpulse02' ? '02' : '01';
                                }
                                break;
                            case ice.some(el => so.explosion.animation === el):
                                so.explosion.menuType = 'ice';
                                break;
                            case liquid.some(el => so.explosion.animation === el):
                                so.explosion.menuType = 'liquid';
                                so.explosion.animation = 'splash';
                                break;
                            case fireball.some(el => so.explosion.animation === el):
                                so.explosion.menuType = 'spell';
                                so.explosion.animation = 'fireball';
                                so.explosion.variant = 'explode';
                                break;
                            default:
                                so.explosion.menuType = 'spell';
                        }
                    }
                }
            }
            if (templateObject) {
                const templateLength = Object.keys(templateObject).length;
                for (var i = 0; i < templateLength; i++) {
                    let to = templateObject[i];
                    to.menuType = to.type === 'rect' ? 'square' : to.type
                    switch (to.menuType) {
                        case "cone":
                            if (to.animation === 'breathweaponcone') {
                                to.animation = 'breathweapon';
                            }
                            break;
                        case "circle":
                            const circleTypes = ['dropct', 'fearct', 'heartct', 'horrorct', 'poisonct', 'runesct', 'shieldsct', 'crackedshieldct', 'skullct', 'snowflakesct', 'musicnotect'];
                            if (circleTypes.some(el => to.animation === el)) {
                                to.animation = to.animation.replace('ct', '')
                            }
                            switch (to.animation) {
                                case 'outpulse01':
                                    to.animation = 'outpulse';
                                    to.variant = '01';
                                    break;
                                case 'outpulse02':
                                    to.animation = 'outpulse';
                                    to.variant = '02';
                                    break;
                                case 'fireballloop':
                                    to.animation = 'fireball';
                                    to.variant = to.variant === 'nodebris' ? 'nodebris' : 'loop';
                                    break;
                                case 'fireballexplode':
                                    to.animation = 'fireball';
                                    to.variant = 'explode';
                                    break;
                            }
                            break;
                        case "square":
                            const squareTypes = ['dropct', 'fearct', 'heartct', 'horrorct', 'poisonct', 'runesct', 'shieldsct', 'crackedshieldct', 'skullct', 'snowflakesct']
                            if (squareTypes.some(el => to.animation === el)) {
                                to.animation = to.animation.replace('ct', '')
                            } else if (to.animation === 'musicnotest') {
                                to.animation = 'musicnote';
                            }
                            break;
                        case "ray":
                            if (to.animation === 'breathweaponline') {
                                to.animation = 'breathweapon';
                            }
                            break;
                    }
                }
            }
            if (auraObject) {
                const auraLength = Object.keys(auraObject).length;
                for (var i = 0; i < auraLength; i++) {
                    let ao = auraObject[i];
                    switch (ao.animation) {
                        case "energystrand":
                            ao.menuType = 'marker';
                            break;
                        case 'dodecahedron':
                            ao.menuType = 'energy';
                            break;
                        case 'staticelectricity':
                            ao.menuType = 'lightning';
                            break;
                        default:
                            ao.menuType = 'spell';
                    }
                }

            }
            if (presetObject) {
                const presetLength = Object.keys(presetObject).length;
                for (var i = 0; i < presetLength; i++) {
                    let po = presetObject[i];
                    switch (po.animation) {
                        case 'teleportation':
                            po.menuType = 'spell';
                            po.menuType02 = 'spell';
                            break;
                        case "dualattach":
                            switch (po.subAnimation) {
                                case 'energystrand':
                                case 'energybeam':
                                    po.menuType = 'generic';
                                    break;
                                default:
                                    po.menuType = 'spell'
                            }
                            break;
                        case 'fireball':
                            const fire = ['eruption'];
                            const generic = ['boulderimpact', 'explosion', 'impact', 'outpulse01', 'outpulse02'];
                            const ice = ['snowflake'];
                            const liquid = ['liquidsplash'];
                            const fireball = ['fireballexplode']
                            switch (po.projectile) {
                                case 'energystrand':
                                case 'energybeam':
                                    po.rangeType = 'generic';
                                    break;
                                default:
                                    po.rangeType = 'spell'
                            }
                            if (po.explosion01) {
                                switch (true) {
                                    case fire.some(el => po.explosion01 === el):
                                        po.ex01Type = 'fire';
                                        break;
                                    case generic.some(el => po.explosion01 === el):
                                        po.ex01Type = 'generic';
                                        if (po.explosion01.includes('outpulse')) {
                                            po.explosion01 = 'outpulse';
                                            po.explosion01Variant = po.explosion01Variant === 'outpulse02' ? '02' : '01';
                                        }
                                        break;
                                    case ice.some(el => po.explosion01 === el):
                                        po.ex01Type = 'ice';
                                        break;
                                    case liquid.some(el => po.explosion01 === el):
                                        po.ex01Type = 'liquid';
                                        po.explosion01 = 'splash';
                                        break;
                                    case fireball.some(el => po.explosion01 === el):
                                        po.ex01Type = 'spell';
                                        po.explosion01 = 'fireball';
                                        po.explosion01Variant = 'explode';
                                        break;
                                    default:
                                        po.ex01Type = 'spell';
                                }
                            }
                            if (po.explosion02) {
                                switch (true) {
                                    case fire.some(el => po.explosion02 === el):
                                        po.ex02Type = 'fire';
                                        break;
                                    case generic.some(el => po.explosion02 === el):
                                        po.ex02Type = 'generic';
                                        if (po.explosion01.includes('outpulse')) {
                                            po.explosion01 = 'outpulse';
                                            po.explosion01Variant = po.explosion01Variant === 'outpulse02' ? '02' : '01';
                                        }
                                        break;
                                    case ice.some(el => po.explosion02 === el):
                                        po.ex02Type = 'ice';
                                        break;
                                    case liquid.some(el => po.explosion02 === el):
                                        po.ex02Type = 'liquid';
                                        po.explosion02 = 'splash';
                                        break;
                                    case fireball.some(el => po.explosion02 === el):
                                        po.ex02Type = 'spell';
                                        po.explosion02 = 'fireball';
                                        po.explosion02Variant = 'explode';
                                        break;
                                    default:
                                        po.ex02Type = 'spell';
                                }
                            }
                            break;

                    }
                }
            }
            currentAutorec.version = 4;
            return currentAutorec;
            //await game.settings.set('autoanimations', 'aaAutorec', currentAutorec)
        },
        "5": async (currentAutorec) => {
            const meleeObject = currentAutorec.melee;
            const rangeObject = currentAutorec.range;
            const staticObject = currentAutorec.static;
            const templateObject = currentAutorec.templates;
            const auraObject = currentAutorec.auras;
            const presetObject = currentAutorec.preset;
            const aefxObject = currentAutorec.aefx;

            const newMenu = {
                melee: {},
                range: {},
                static: {},
                templatefx: {},
                aura: {},
                preset: {},
                aefx: {},
                version: 5,
            };

            async function compileNewMenu(data, type) {
                const dataLength = Object.keys(data).length;

                for (var i = 0; i < dataLength; i++) {
                    const oldMO = data[i];
                    newMenu[type][i] = {};
                    const newMO = newMenu[type][i];

                    let { name, animation, color, audio, macro, soundOnly, explosion, levels3d, ...rest } = oldMO
                    newMO.id = randomID();
                    newMO.name = name;
                    newMO.hidden = true;
                    newMO.animation = animation;
                    newMO.color = color;
                    newMO.options = rest;
                    if (type === "templatefx") {
                        newMO.options.persistent = newMO.options.persist || false;
                    }
                    newMO.audio = audio || {};
                    newMO.macro = macro || {};
                    newMO.levels3d = levels3d || {};
                    newMO.soundOnly = soundOnly?.enable || false;
                    newMO.explosions = explosion || {};
                    if (!newMO.options.menuType || !newMO.options.variant || !newMO.animation || !newMO.color) {
                        newMO.options.menuType = "";
                        newMO.options.variant = "";
                        newMO.animation = "";
                        newMO.color = "";
                    }
                }
            }
            async function primaryMenu(oldMO, newMO, type) {

                let { menuType, variant, custom, customPath, name, animation, color, audio, macro,
                    soundOnly, explosion, levels3d, meleeSwitch, ...rest } = oldMO
                newMO.id = randomID();
                newMO.name = name;
                newMO.hidden = true;
                //newMO.animation = animation;
                //newMO.color = color;
                newMO.options = rest;
                if (type) {
                    newMO.options.persistent = newMO.options.persist || false;
                }
                newMO.primary = {
                    menuType,
                    animation,
                    variant: variant,
                    color,
                    enableCustom: custom,
                    customPath,
                }
                if (meleeSwitch) { newMO.meleeSwitch = meleeSwitch; }
                newMO.audio = audio || {};
                newMO.macro = macro || {};
                newMO.levels3d = levels3d || {};
                newMO.soundOnly = soundOnly?.enable || false;
                newMO.explosions = explosion || {};
                if (!newMO.primary.menuType || !newMO.primary.variant || !newMO.primary.animation || !newMO.primary.color) {
                    newMO.primary.menuType = "";
                    newMO.primary.variant = "";
                    newMO.primary.animation = "";
                    newMO.primary.color = "";
                }
            }

            if (meleeObject) {
                const dataLength = Object.keys(meleeObject).length;
                for (var i = 0; i < dataLength; i++) {
                    const oldMO = meleeObject[i]
                    newMenu.melee[i] = {};
                    const newMO = newMenu.melee[i];
                    await primaryMenu(oldMO, newMO)
                }
                //await compileNewMenu(meleeObject, "melee")
            }
            if (rangeObject) {
                const dataLength = Object.keys(rangeObject).length;
                for (var i = 0; i < dataLength; i++) {
                    const oldMO = rangeObject[i]
                    newMenu.range[i] = {};
                    const newMO = newMenu.range[i];
                    await primaryMenu(oldMO, newMO)
                }
                //await compileNewMenu(rangeObject, "range")
            }
            if (staticObject) {
                const dataLength = Object.keys(staticObject).length;
                for (var i = 0; i < dataLength; i++) {
                    const oldMO = staticObject[i]
                    newMenu.static[i] = {};
                    const newMO = newMenu.static[i];
                    await primaryMenu(oldMO, newMO)
                    newMO.staticType = oldMO.type;
                }
                //await compileNewMenu(staticObject, "static")
            }
            if (templateObject) {
                const dataLength = Object.keys(templateObject).length;
                for (var i = 0; i < dataLength; i++) {
                    const oldMO = templateObject[i]
                    newMenu.templatefx[i] = {};
                    const newMO = newMenu.templatefx[i];
                    await primaryMenu(oldMO, newMO, true)
                }
                //await compileNewMenu(templateObject, "templatefx")
            }
            if (auraObject) {
                const dataLength = Object.keys(auraObject).length;
                for (var i = 0; i < dataLength; i++) {
                    const oldMO = auraObject[i]
                    newMenu.aura[i] = {};
                    const newMO = newMenu.aura[i];
                    await primaryMenu(oldMO, newMO)
                }
                //await compileNewMenu(auraObject, "aura")
            }
            if (presetObject) {
                const presetLength = Object.keys(presetObject).length;
                for (var i = 0; i < presetLength; i++) {
                    const oldMO = presetObject[i]
                    newMenu.preset[i] = {};
                    const newMO = newMenu.preset[i];
                    switch (oldMO.animation) {
                        case "bardicinspiration":
                            await updateBI(oldMO, newMO)
                            break;
                        case "bless":
                            await updateBless(oldMO, newMO)
                            break;
                        case "shieldspell":
                            await updateShield(oldMO, newMO)
                            break;
                        case "teleportation":
                            await updateTele(oldMO, newMO)
                            break;
                        case "dualattach":
                            await updateDAttach(oldMO, newMO)
                            break;
                        case "fireball":
                            await updateFireball(oldMO, newMO)
                            break;
                        case "huntersmark":
                            await updateHM(oldMO, newMO)
                            break;
                        case "sneakattack":
                            await updateSneak(oldMO, newMO)
                            break;
                        case "thunderwave":
                            await updateThunderwave(oldMO, newMO)
                            break;
                    }

                }
            }
            if (aefxObject) {
                const aefxLength = Object.keys(aefxObject).length;
                for (var i = 0; i < aefxLength; i++) {
                    const oldMO = aefxObject[i]
                    newMenu.aefx[i] = {};
                    const newMO = newMenu.aefx[i];
                    switch (oldMO.aeType) {
                        case "static":
                            await primaryMenu(oldMO, newMO)
                            newMO.animType = "static";
                            newMO.type = "source";
                            break;
                        case "auras":
                            await primaryMenu(oldMO, newMO)
                            newMO.animType = "aura";
                            break;
                        case "preset":
                            switch(oldMO.menuType) {
                                case "bless":
                                    await updateBless(oldMO, newMO)
                                    newMO.animType = "preset";
                                    break;
                                case "shieldspell":
                                    await updateShield(oldMO, newMO)
                                    newMO.animType = "preset";
                                    break;
                            }
                            break;
                    }
                    await primaryMenu(oldMO, newMO)
                }
            }

            async function updateBI(oldData, newData) {
                newData.id = randomID();
                newData.bardicinspiration = {};
                const root = newData.bardicinspiration;
                let { animateSelf, animateTarget, below, marker, name, scale, selfAnimation, selfColor, selfMarkerColor, targetAnimation, targetColor, targetMarkerColor, macro, audio } = oldData;
                root.audio = audio || {};
                root.macro = macro || {};
                newData.presetType = "bardicinspiration";
                root.below = below;
                root.scale = scale;
                newData.name = name;
                newData.hidden = true;
                root.self = {
                    enable: animateSelf || false,
                    animation: selfAnimation === "music" ? "notes" : selfAnimation,
                    color: selfColor,
                }
                if (!root.self.animation || !root.self.color) {
                    root.self.animation = "";
                    root.self.variant = "";
                    root.self.color = "";
                } else if (root.self.animation === "bardicinspiration") {
                    root.self.variant = "inspire";
                } else { root.self.variant = "01" }
                root.target = {
                    enable: animateTarget || false,
                    animation: targetAnimation === "music" ? "notes" : targetAnimation,
                    color: targetColor,
                }
                // TO-DO, assign VARIANTS somehow
                if (!root.target.animation || !root.target.color) {
                    root.target.animation = "";
                    root.target.color = "";
                } else if (root.target.animation === "bardicinspiration") {
                    root.target.variant = "inspire";
                } else { root.target.variant = "01" }
                root.marker = {
                    enable: marker || false,
                    selfColor: selfMarkerColor || "",
                    targetColor: targetMarkerColor || "",
                }
            }
            async function updateBless(oldData, newData) {
                newData.id = randomID();
                newData.bless = {};
                const root = newData.bless;
                let { below, color, name, scale, macro, unbindAlpha, unbindVisibility, audio, addCTA: persistent, ...rest } = oldData;
                root.audio = audio || {};
                root.macro = macro || {};
                newData.presetType = "bless";
                newData.name = name;
                newData.hidden = true;
                root.below = below;
                root.scale = scale;
                root.menuType = "spell";
                root.animation = "bless";
                root.variant = "01";
                root.color = color;
                root.unbindAlpha = unbindAlpha || false;
                root.unbindVisibility = unbindVisibility || false;
                root.persistent = persistent;
            }
            async function updateShield(oldData, newData) {
                newData.id = randomID();
                newData.shield = {};
                const root = newData.shield;
                let { below, color, endeffect, name, scale, variant, macro, addCTA: persistent, unbindAlpha, unbindVisibility, audio } = oldData;
                root.audio = audio || {};
                root.macro = macro || {};
                newData.presetType = "shieldspell";
                newData.name = name;
                newData.hidden = true;
                root.menuType = "spell";
                root.animation = "shieldspell";
                root.variant = variant;
                root.color = color;
                root.endEffect = endeffect;
                root.unbindAlpha = unbindAlpha;
                root.unbindVisibility = unbindVisibility;
                root.persistent = persistent;
                root.below = below;
                root.scale = scale;
            }
            async function updateTele(oldData, newData) {
                newData.id = randomID();
                newData.teleportation = {};
                const root = newData.teleportation;
                let { menuType, subAnimation, variant, color, below, custom, customPath,
                    hideTemplate, name, range, measureType, scale,
                    menuType02, subAnimation02, variant02, color02, scale02, custom02, customPath02,
                    macro, delay, audio } = oldData;
                root.audio = audio || {};
                root.macro = macro || {};
                newData.presetType = "teleportation";
                newData.name = name;
                newData.hidden = true;
                root.hideFromPlayers = hideTemplate;
                root.range = range;
                root.measureType = measureType;
                root.start = {
                    menuType,
                    animation: subAnimation,
                    variant,
                    color,
                    below,
                    enableCustom: custom || false,
                    customPath,
                    scale,
                }
                root.between = {
                    enable: false,
                }
                root.end = {
                    menuType: menuType02,
                    animation: subAnimation02,
                    variant: variant02,
                    color: color02,
                    below,
                    enableCustom: custom02 || false,
                    customPath: customPath02,
                    scale: scale02,
                    delay
                }
            }
            async function updateDAttach(oldData, newData) {
                newData.id = randomID();
                newData.dualattach = {};
                const root = newData.dualattach;
                let { name, below, macro, audio, menuType, subAnimation, variant, color, custom, customPath, playbackRate, onlyX } = oldData;
                root.audio = audio || {};
                root.macro = macro || {};
                newData.presetType = "dualattach";
                newData.name = name;
                newData.hidden = true;
                root.menuType = menuType;
                root.animation = subAnimation;
                root.variant = variant;
                root.color = color;
                root.enableCustom = custom || false;
                root.customPath = customPath;
                root.playbackRate = playbackRate;
                root.onlyX = onlyX;
                root.below = below;
            }
            async function updateFireball(oldData, newData) {
                newData.id = randomID();
                newData.fireball = {};
                const root = newData.fireball;
                let { audio, macro, name, below, animation, rangeType, projectile, projectilVariant, projectileColor, projectileRepeat, projectileDelay, wait01, removeTemplate,
                    ex01Type, explosion01, explosion01Variant, explosion01Color, explosion01Repeat, explosion01Delay, explosion01Scale, wait02,
                    ex02Type, explosion02, explosion02Variant, explosion02Color, explosion02Repeat, explosion02Delay, explosion02Scale,
                    afterEffect, afterEffectPath, wait03 } = oldData;
                root.audio = audio || {};
                root.macro = macro || {};
                newData.presetType = "fireball";
                newData.name = name;
                newData.hidden = true;
                root.removeTemplate = removeTemplate;
                root.projectile = {
                    menuType: rangeType,
                    animation: projectile,
                    variant: projectilVariant,
                    color: projectileColor,
                    repeat: projectileRepeat,
                    delay: projectileDelay,
                    wait: wait01,
                    below: below,
                }
                root.explosion01 = {
                    menuType: ex01Type,
                    animation: explosion01,
                    variant: explosion01Variant,
                    color: explosion01Color,
                    repeat: explosion01Repeat,
                    delay: explosion01Delay,
                    scale: explosion01Scale,
                    wait: wait02,
                    below: below,
                }
                if (!root.explosion01.menuType || !root.explosion01.animation || !root.explosion01.variant || !root.explosion01.color) {
                    root.explosion01.enable = false;
                } else { root.explosion01.enable = true }
                root.explosion02 = {
                    menuType: ex02Type,
                    animation: explosion02,
                    variant: explosion02Variant,
                    color: explosion02Color,
                    repeat: explosion02Repeat,
                    delay: explosion02Delay,
                    scale: explosion02Scale,
                }
                root.afterImage = {
                    enable: afterEffect,
                    customPath: afterEffectPath,
                    below: true,
                    scale: 1,
                    wait: wait03,
                }
            }
            async function updateHM(oldData, newData) {
                newData.id = randomID();
                newData.huntersmark = {};
                const root = newData.huntersmark;
                let { below, name, macro, audio, variant, color, scale, persistent, anchorX, anchorY } = oldData;
                root.audio = audio || {};
                root.macro = macro || {};
                newData.name = name;
                newData.presetType = "huntersmark";
                newData.hidden = true;
                root.variant = variant;
                root.color = color;
                root.scale = scale;
                root.below = below;
                root.persistent = persistent;
                root.anchorX = anchorX;
                root.anchorY = anchorY;
            }
            async function updateSneak(oldData, newData) {
                newData.id = randomID();
                newData.sneakattack = {};
                const root = newData.sneakattack;
                let { audio, macro, name, below, variant, color, scale, anchorX, anchorY } = oldData;
                root.audio = audio || {};
                root.macro = macro || {};
                newData.name = name;
                newData.presetType = "sneakattack";
                newData.hidden = true;
                root.variant = variant;
                root.color = color;
                root.scale = scale;
                root.anchorX = anchorX;
                root.anchorY = anchorY;
                root.below = below;

            }
            async function updateThunderwave(oldData, newData) {
                newData.id = randomID();
                newData.thunderwave = {};
                const root = newData.thunderwave;
                let { audio, macro, name, below, color, repeat, delay, scaleX, scaleY, opacity, removeTemplate, persist: persistent, persistType, occlusionMode, occlusionAlpha } = oldData;
                root.audio = audio || {};
                root.macro = macro || {};
                newData.name = name;
                newData.presetType = "thunderwave";
                newData.hidden = true;
                root.color = color;
                root.below = below;
                root.repeat = repeat;
                root.delay = delay;
                root.scaleX = scaleX;
                root.scaleY = scaleY;
                root.opacity = opacity;
                root.removeTemplate = removeTemplate;
                root.persistent = persistent;
                root.persistType = persistType;
                root.occlusionMode = occlusionMode;
                root.occlusionAlpha = occlusionAlpha;
            }
            return newMenu;
            //await game.settings.set('autoanimations', 'aaAutorec', newMenu)
        },
    }
}