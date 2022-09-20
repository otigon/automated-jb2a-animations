export async function version04(flags) {
    const v4Flags = flags || {};
    const options = v4Flags.options || {}
    if (v4Flags.killAnim) {
        v4Flags.version = 4;
        //await item.update({ 'flags.-=autoanimations': null })
        //await item.update({ 'flags.autoanimations': v4Flags })
        return v4Flags;
    }
    if (v4Flags.sourceToken?.enable) {
        await convertExtraFX(v4Flags.sourceToken)
    }
    if (v4Flags.sourceToken?.enable) {
        await convertExtraFX(v4Flags.targetToken)
    }

    if (v4Flags.override) {
        const section = v4Flags.animType
        switch (section) {
            case 'melee':
                options.menuType = options.meleeType;
                if (v4Flags.explosions?.enable) {
                    await convertExplosion(v4Flags.explosions)
                }
                delete options.meleeType;
                break;
            case 'range':
                const genericRange = ['energyconduitsquare', 'energyconduitcircle', 'energybeam', 'heart', 'iceshard', 'musicnote', 'skull', 'energystrand'];
                if (genericRange.some(el => v4Flags.animation === el)) {
                    options.menuType = 'generic';
                    if (v4Flags.animation === "energyconduitcircle") {
                        v4Flags.animation = 'conduit';
                        options.variant = 'circle';
                    }
                    if (v4Flags.animation === "energyconduitsquare") {
                        v4Flags.animation = 'conduit';
                        options.variant = 'square';
                    }
                } else {
                    options.menuType = options.rangeType;
                }
                if (v4Flags.explosions?.enable) {
                    await convertExplosion(v4Flags.explosions)
                }
                delete options.rangeType;
                break;
            case 'static':
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

                switch (true) {
                    case conditions.some(el => v4Flags.animation === el):
                        options.menuType = 'conditions';
                        break;
                    case creature.some(el => v4Flags.animation === el):
                        options.menuType = 'creature';
                        break;
                    case energy.some(el => v4Flags.animation === el):
                        options.menuType = 'energy';
                        break;
                    case fire.some(el => v4Flags.animation === el):
                        options.menuType = 'fire';
                        break;
                    case generic.some(el => v4Flags.animation === el):
                        options.menuType = 'generic';
                        if (v4Flags.animation?.includes('outpulse')) {
                            options.variant = v4Flags.animation === 'outpulse02' ? '02' : '01';
                            v4Flags.animation = 'outpulse';
                        }
                        break;
                    case ice.some(el => v4Flags.animation === el):
                        options.menuType = 'ice';
                        break;
                    case lightning.some(el => v4Flags.animation === el):
                        options.menuType = 'lightning';
                        break;
                    case liquid.some(el => v4Flags.animation === el):
                        options.menuType = 'liquid';
                        v4Flags.animation = 'splash';
                        break;
                    case magicsign.some(el => v4Flags.animation === el):
                        options.menuType = 'magicsign';
                        break;
                    case marker.some(el => v4Flags.animation === el):
                        options.menuType = 'marker';
                        if (v4Flags.animation === 'circleofstars') { }
                        else if (v4Flags.animation === 'energystrand') {
                            v4Flags.animation = 'energystrand'
                        }
                        else {
                            switch (v4Flags.variant) {
                                case '03':
                                    v4Flags.animation = 'music';
                                    v4Flags.variant = '01';
                                    break;
                                case 'bubble':
                                    v4Flags.animation = 'bubble';
                                    v4Flags.variant = '01';
                                    break;
                                case 'energystrand':
                                    v4Flags.animation = 'energystrands';
                                    v4Flags.variant = '01'
                                    break;
                                default:
                                    v4Flags.animation = 'standard';
                                    v4Flags.variant = '01';
                            }
                        }
                        break;
                    case shieldfx.some(el => v4Flags.animation === el):
                        options.menuType = 'shieldfx';
                        switch (v4Flags.animation) {
                            case 'energyfieldtop':
                                v4Flags.animation = 'energyfield';
                                break;
                            case 'shieldfiretop':
                                v4Flags.animation = 'fire';
                                break;
                            case 'shieldicetop':
                                v4Flags.animation = 'ice';
                                break;
                            case 'shieldearthtop':
                                v4Flags.animation = 'earth';
                                break;
                            case 'shieldeldritchwebtop':
                                v4Flags.animation = 'eldritchweb';
                                break;
                        }
                        break;
                    case tokenborder.some(el => v4Flags.animation === el):
                        options.menuType = 'tokenborder';
                        if (v4Flags.animation === 'staticborder') {
                            v4Flags.animation = 'static';
                        } else {
                            v4Flags.animation = 'spinning';
                        }
                        break;
                    case fireball.some(el => v4Flags.animation === el):
                        options.menuType = 'spell';
                        v4Flags.animation = 'fireball';
                        options.variant = 'explode';
                        break;
                    default:
                        options.menuType = 'spell';
                }
                if (v4Flags.explosions?.enable) {
                    await convertExplosion(v4Flags.explosions)
                }

                delete options.staticOptions;

                break;
            case 'template':
                options.menuType = options.tempType === 'rect' ? 'square' : options.tempType
                switch (options.menuType) {
                    case "cone":
                        if (v4Flags.animation === 'breathweaponcone') {
                            v4Flags.animation = 'breathweapon';
                        }
                        break;
                    case "circle":
                        const circleTypes = ['dropct', 'fearct', 'heartct', 'horrorct', 'poisonct', 'runesct', 'shieldsct', 'crackedshieldct', 'skullct', 'snowflakesct', 'musicnotect'];
                        if (circleTypes.some(el => v4Flags.animation === el)) {
                            v4Flags.animation = v4Flags.animation.replace('ct', '')
                        }
                        switch (v4Flags.animation) {
                            case 'outpulse01':
                                v4Flags.animation = 'outpulse';
                                options.variant = '01';
                                break;
                            case 'outpulse02':
                                v4Flags.animation = 'outpulse';
                                options.variant = '02';
                                break;
                            case 'fireballloop':
                                v4Flags.animation = 'fireball';
                                options.variant = options.variant === 'nodebris' ? 'nodebris' : 'loop';
                                break;
                            case 'fireballexplode':
                                v4Flags.animation = 'fireball';
                                options.variant = 'explode';
                                break;
                        }
                        break;
                    case "square":
                        const squareTypes = ['dropct', 'fearct', 'heartct', 'horrorct', 'poisonct', 'runesct', 'shieldsct', 'crackedshieldct', 'skullct', 'snowflakesct']
                        if (squareTypes.some(el => v4Flags.animation === el)) {
                            v4Flags.animation = v4Flags.animation.replace('ct', '')
                        } else if (v4Flags.animation === 'musicnotest') {
                            v4Flags.animation = 'musicnote';
                        }
                        break;
                    case "ray":
                        if (v4Flags.animation === 'breathweaponline') {
                            v4Flags.animation = 'breathweapon';
                        }
                        break;
                }
                break;
            case 'aura':
                switch (v4Flags.animation) {
                    case "energystrand":
                        options.menuType = 'marker';
                        break;
                    case 'dodecahedron':
                        options.menuType = 'energy';
                        break;
                    case 'staticelectricity':
                        options.menuType = 'lightning';
                        break;
                    default:
                        options.menuType = 'spell';
                }
                break;
            case 'preset':
                switch (v4Flags.animation) {
                    case 'teleportation':
                        options.menuType = 'spell';
                        options.menuType02 = 'spell';
                        break;
                    case "dualattach":
                        switch (options.name) {
                            case 'energystrand':
                            case 'energybeam':
                                options.menuType = 'generic';
                                break;
                            default:
                                options.menuType = 'spell'
                        }
                        break;
                    case 'fireball':
                        const fire = ['eruption'];
                        const generic = ['boulderimpact', 'explosion', 'impact', 'outpulse01', 'outpulse02'];
                        const ice = ['snowflake'];
                        const liquid = ['liquidsplash'];
                        const fireball = ['fireballexplode']
                        const fireSettings = v4Flags.fireball || {};
                        switch (fireSettings.projectile) {
                            case 'energystrand':
                            case 'energybeam':
                                fireSettings.rangeType = 'generic';
                                break;
                            default:
                                fireSettings.rangeType = 'spell'
                        }
                        if (fireSettings.explosion01) {
                            switch (true) {
                                case fire.some(el => fireSettings.explosion01 === el):
                                    fireSettings.ex01Type = 'fire';
                                    break;
                                case generic.some(el => fireSettings.explosion01 === el):
                                    fireSettings.ex01Type = 'generic';
                                    if (fireSettings.explosion01?.includes('outpulse')) {
                                        fireSettings.explosion01 = 'outpulse';
                                        fireSettings.explosion01Variant = fireSettings.explosion01Variant === 'outpulse02' ? '02' : '01';
                                    }
                                    break;
                                case ice.some(el => fireSettings.explosion01 === el):
                                    fireSettings.ex01Type = 'ice';
                                    break;
                                case liquid.some(el => fireSettings.explosion01 === el):
                                    fireSettings.ex01Type = 'liquid';
                                    fireSettings.explosion01 = 'splash';
                                    break;
                                case fireball.some(el => fireSettings.explosion01 === el):
                                    fireSettings.ex01Type = 'spell';
                                    fireSettings.explosion01 = 'fireball';
                                    fireSettings.explosion01Variant = 'explode';
                                    break;
                                default:
                                    if (fireSettings.explosion01 === 'a1' || !fireSettings.explosion01) {
                                        fireSettings.ex01Type === ''
                                    } else {
                                        fireSettings.ex01Type = 'spell';
                                    }
                            }
                        }
                        if (fireSettings.explosion02) {
                            switch (true) {
                                case fire.some(el => fireSettings.explosion02 === el):
                                    fireSettings.ex02Type = 'fire';
                                    break;
                                case generic.some(el => fireSettings.explosion02 === el):
                                    fireSettings.ex02Type = 'generic';
                                    if (fireSettings.explosion02?.includes('outpulse')) {
                                        fireSettings.explosion02 = 'outpulse';
                                        fireSettings.explosion02Variant = fireSettings.explosion02Variant === 'outpulse02' ? '02' : '01';
                                    }
                                    break;
                                case ice.some(el => fireSettings.explosion02 === el):
                                    fireSettings.ex02Type = 'ice';
                                    break;
                                case liquid.some(el => fireSettings.explosion02 === el):
                                    fireSettings.ex02Type = 'liquid';
                                    fireSettings.explosion02 = 'splash';
                                    break;
                                case fireball.some(el => fireSettings.explosion02 === el):
                                    fireSettings.ex02Type = 'spell';
                                    fireSettings.explosion02 = 'fireball';
                                    fireSettings.explosion02Variant = 'explode';
                                    break;
                                default:
                                    if (fireSettings.explosion02 === 'a1' || !fireSettings.explosion02) {
                                        fireSettings.ex02Type === ''
                                    } else {
                                        fireSettings.ex02Type = 'spell';
                                    }
                            }
                        }
                        break;
                }
                break;
        }
        async function convertExplosion(flags) {
            if (flags.enableCustom) { return; } else {
                const fire = ['eruption'];
                const generic = ['boulderimpact', 'explosion', 'impact', 'outpulse01', 'outpulse02'];
                const ice = ['snowflake'];
                const liquid = ['liquidsplash'];
                const fireball = ['fireballexplode']
                switch (true) {
                    case fire.some(el => flags.animation === el):
                        flags.menuType = 'fire';
                        break;
                    case generic.some(el => flags.animation === el):
                        flags.menuType = 'generic';
                        if (flags.animation?.includes('outpulse')) {
                            flags.animation = 'outpulse';
                            flags.variant = flags.variant === 'outpulse02' ? '02' : '01';
                        }
                        break;
                    case ice.some(el => flags.animation === el):
                        flags.menuType = 'ice';
                        break;
                    case liquid.some(el => flags.animation === el):
                        flags.menuType = 'liquid';
                        flags.animation = 'splash';
                        break;
                    case fireball.some(el => flags.animation === el):
                        flags.menuType = 'spell';
                        flags.animation = 'fireball';
                        flags.variant = 'explode';
                        break;
                    default:
                        if (flags.animation === 'a1' || !flags.animation) {
                            flags.menuType === ''
                        } else {
                            flags.menuType = 'spell';
                        }
                }
            }
            return flags;
        }
    }
    async function convertExtraFX(flags) {
        const generic = ['explosion', 'impact'];
        const ice = ['icespikes', 'snowflake'];
        const fireball = ['fireballexplode']

        switch (true) {
            case flags.name?.includes('dizzystars'):
                flags.menuType = 'conditions';
                break;
            case flags.name?.includes('eruption'):
                flags.menuType = 'fire';
                break;
            case generic.some(el => flags.name === el):
                flags.menuType = 'generic';
                break;
            case ice.some(el => flags.name === el):
                flags.menuType = 'ice';
                break;
            case flags.name?.includes('liquidsplash'):
                flags.menuType = 'liquid';
                flags.name = 'splash';
                break;
            case flags.name?.includes('magicSign'):
                flags.menuType = 'magicsign';
                switch (flags.color) {
                    case 'blue':
                        flags.name = 'abjuration';
                        break;
                    case 'yellow':
                        flags.name = 'conjuration';
                        break;
                    default:
                        flags.name = 'divination';
                }
                flags.variant = '01';
                break;
            case flags.name?.includes('marker'):
                flags.menuType = 'marker';
                if (flags.name === 'circleofstars') { }
                else if (flags.name === 'energystrand') {
                    flags.name = 'energystrand'
                }
                else {
                    switch (flags.variant) {
                        case '03':
                            flags.name = 'music';
                            flags.variant = '01';
                            break;
                        case 'bubble':
                            flags.name = 'bubble';
                            flags.variant = '01';
                            break;
                        case 'energystrand':
                            flags.name = 'energystrands';
                            flags.variant = '01'
                            break;
                        default:
                            flags.name = 'standard';
                            flags.variant = '01';
                    }
                }
                break;
            case fireball.some(el => flags.name === el):
                flags.menuType = 'spell';
                flags.name = 'fireball';
                flags.variant = 'explode';
                break;
            default:
                flags.menuType = 'spell';
        }
    }
    v4Flags.version = 4;
    //await item.update({ 'flags.-=autoanimations': null })
    //await item.update({ 'flags.autoanimations': v4Flags })
    //console.warn(`DEBUG | Automated Animations | Version 3 Flag Migration Complete`, v4Flags)
    return v4Flags;
}