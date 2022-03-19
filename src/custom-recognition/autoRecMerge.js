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
            await game.settings.set('autoanimations', 'aaAutorec', currentAutorec)
        }

    }
}