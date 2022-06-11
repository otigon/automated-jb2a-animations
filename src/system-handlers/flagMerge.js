
export const flagMigrations = {

    async handle(item) {
        let flags = item.data?.flags?.autoanimations;
        if (!flags) return;

        if (this.upToDate(flags)) return flags;

        if (flags.version && isNaN(flags.version)) {
            console.error("Your A-A Item data may be corrupted. Please log this in the Automated Animations GitHub issues");
            return flags;
        }

        for (let [version, migration] of Object.entries(this.migrations)) {
            let flagVersion = item.data.flags.autoanimations.version;

            if (flagVersion >= Number(version)) continue;

            await migration(item);
        }

        return item.data.flags.autoanimations;
    },

    upToDate(flags) {
        const currentFlagVersion = Object.keys(this.migrations).map(n => Number(n)).reverse()[0]
        return flags.version >= currentFlagVersion
    },

    migrations: {
        "1": async (item) => {
            const oldFlags = item.data?.flags?.autoanimations;
            const type = oldFlags.animType;

            const data = {
                killAnim: oldFlags.killAnim ?? false,
                below: oldFlags.animLevel ?? false,
                override: oldFlags.override ?? false,
                //animType: 'function here',
                //animation: 'animation function here',
                //color: 'color funciton here',
                //'options.repeat': type === 't8' ? oldFlags.templates?.tempLoop || 1 : oldFlags.options?.loops || 1,
                //'options.delay': type === 't8' ? oldFlags.templates?.loopDelay || 250 : oldFlags.options?.loopDelay || 250,
                //'options.scale': oldFlags.options?.scale ?? 1,
                //enableCustom: 'function here',
                //customPath: 'function here',
                targetToken: oldFlags.targetToken?.enable ? oldFlags.targetToken : { enable: false },
                sourceToken: oldFlags.sourceToken?.enable ? oldFlags.sourceToken : { enable: false },
                allSounds: oldFlags.allSounds ?? {},
                autoOverride: oldFlags.options?.overrideAuto ? await overrideAuto() : { enable: false },
                version: 1,
            }

            if (oldFlags.override) {

                switch (type) {
                    case "t2":
                        data.animType = 'melee';
                        data.animation = replaceName(oldFlags.animName);
                        data.color = replaceName(oldFlags.color);
                        data.meleeSwitch = oldFlags.meleeSwitch?.switchType === "custom" ? await rangeSwitch() : { switchType: oldFlags.meleeSwitch?.switchType ?? 'on' };
                        data.explosions = oldFlags.explosion ? await explosions() : { enable: false };
                        data.options = {
                            meleeType: "weapon",
                            variant: oldFlags.uaStrikeType ?? "01",
                            repeat: oldFlags.options?.loops || 1,
                            delay: oldFlags.options?.loopDelay || 250,
                            scale: oldFlags.options?.scale ?? 1,
                            enableCustom: oldFlags.options?.enableCustom01 ?? false,
                            customPath: oldFlags.options?.customPath01 ?? "",
                        }

                        break;
                    case "t3":
                        let genericList = ['flurryofblows', 'unarmedstrike'];

                        data.animation = replaceName(oldFlags.animName);
                        data.animType = "melee";
                        data.color = replaceName(oldFlags.color);
                        data.meleeSwitch = oldFlags.meleeSwitch?.switchType === "custom" ? await rangeSwitch() : { switchType: oldFlags.meleeSwitch?.switchType ?? 'on' };
                        data.explosions = oldFlags.explosion ? await explosions() : { enable: false };
                        data.options = {
                            meleeType: genericList.includes(data.animation) ? "weapon" : "generic",
                            variant: oldFlags.uaStrikeType ?? "01",
                            repeat: oldFlags.options?.loops || 1,
                            delay: oldFlags.options?.loopDelay || 250,
                            scale: oldFlags.options?.scale ?? 1,
                            enableCustom: oldFlags.options?.enableCustom01 ?? false,
                            customPath: oldFlags.options?.customPath01 ?? "",
                        }

                        break;
                    case "t4":
                        data.animType = 'range';
                        data.animation = replaceName(oldFlags.animName);
                        data.color = replaceName(oldFlags.color);
                        data.explosions = oldFlags.explosion ? await explosions() : { enable: false };
                        data.options = {
                            rangeType: 'weapon',
                            variant: t4VariantSwitch(replaceName(oldFlags.animName)),
                            repeat: oldFlags.options?.loops || 1,
                            delay: oldFlags.options?.loopDelay || 250,
                        }

                        function t4VariantSwitch(name) {
                            switch (name) {
                                case 'bolt':
                                case 'bullet':
                                case 'arrow':
                                    return oldFlags.rangedOptions?.rangeDmgType ?? "01";
                                case 'lasersword':
                                case 'dagger':
                                case 'handaxe':
                                case 'chakram':
                                    return oldFlags.dtvar ?? "01";
                                default:
                                    return "01"
                            }
                        }

                        break;
                    case "t5":
                        data.animType = 'static';
                        data.animation = replaceName(oldFlags.animName);
                        data.color = replaceName(oldFlags.color);
                        data.explosions = oldFlags.explosion ? await explosions() : { enable: false };
                        data.options = {
                            staticType: 'target',
                            staticOptions: 'creature',
                            variant: "01",
                            repeat: oldFlags.options?.loops || 1,
                            delay: oldFlags.options?.loopDelay || 250,
                            scale: oldFlags.options?.scale ?? 1,
                            enableCustom: oldFlags.options?.enableCustom01 ?? false,
                            customPath: oldFlags.options?.customPath01 ?? "",
                        }

                        break;
                    case "t6":
                        data.animType = 'range';
                        data.animation = replaceName(oldFlags.animName);
                        data.color = replaceName(oldFlags.color);
                        data.explosions = oldFlags.explosion ? await explosions() : { enable: false };
                        data.options = {
                            rangeType: 'spell',
                            variant: oldFlags.spellVar ?? "01",
                            repeat: oldFlags.options?.loops || 1,
                            delay: oldFlags.options?.loopDelay || 250,
                        }

                        break;
                    case "t7":
                        data.animType = 'static';
                        data.animation = replaceName(oldFlags.animName);
                        data.color = replaceName(oldFlags.color);
                        data.explosions = oldFlags.explosion ? await explosions() : { enable: false };
                        data.options = {
                            staticType: "targetDefault",
                            staticOptions: 'staticSpells',
                            variant: oldFlags.spellVar ?? "01",
                            repeat: oldFlags.options?.loops || 1,
                            delay: oldFlags.options?.loopDelay || 250,
                            scale: oldFlags.options?.scale ?? 1,
                            enableCustom: oldFlags.options?.enableCustom01 ?? false,
                            customPath: oldFlags.options?.customPath01 ?? "",
                        }

                        break;
                    case "t8":
                        const tempAnimVar = await templateAnimation()
                        data.animType = 'template';
                        data.animation = tempAnimVar.name;
                        data.color = replaceName(oldFlags.templates?.tempColor);
                        data.options = {
                            tempType: oldFlags.templates?.tempType,
                            variant: tempAnimVar.variant,
                            removeTemplate: oldFlags.templates?.removeTemplate ?? false,
                            enableCustom: oldFlags.templates?.customAnim ?? false,
                            customPath: oldFlags.templates?.customPath ?? "",
                            persistent: oldFlags.templates?.persistent ?? false,
                            persistType: (oldFlags.templates?.persistent && oldFlags.templates?.overhead) ? 'overheadtile' : 'sequencerground',
                            opacity: oldFlags.templates?.opacity ?? 0.75,
                            overhead: oldFlags.templates?.overhead ?? false,
                            occlusionMode: oldFlags.templates?.occlusionMode ?? "03",
                            occlusionAlpha: oldFlags.templates?.occlusionAlpha ?? 0.75,
                            repeat: oldFlags.templates?.tempLoop || 1,
                            delay: oldFlags.templates?.loopDelay || 250,
                        }

                        break;
                    case "t9":
                    case "t10":
                        data.animType = 'static';
                        data.animation = replaceName(oldFlags.explodeVariant);
                        data.color = replaceName(oldFlags.explodeColor);
                        data.explosions = { enable: false };
                        data.options = {
                            staticType: type === 't9' ? 'target' : 'source',
                            staticOptions: 'explosion',
                            variant: oldFlags.options?.variant ?? "01",
                            repeat: oldFlags.explodeLoop || 1,
                            delay: oldFlags.explodeDelay || 250,
                            scale: oldFlags.options?.scale ?? 1,
                            enableCustom: oldFlags.options?.enableCustomExplosion ?? false,
                            customPath: oldFlags.options?.customExplosion ?? "",
                        }

                        break;
                    case "t11":
                        data.animType = 'aura';
                        data.animation = replaceName(oldFlags.animName);
                        data.color = replaceName(oldFlags.color);
                        data.options = {
                            variant: "01",
                            enableCustom: oldFlags.options?.enableCustom01 ?? false,
                            customPath: oldFlags.options?.customPath01 ?? "",
                            auraRadius: oldFlags.selfRadius ?? 3.5,
                            opacity: oldFlags.auraOpacity ?? 0.75,
                            ignoreTarget: oldFlags.ignoreTarget ?? false,
                        }

                        break;
                    case "t12":
                        data.animType = 'preset';
                        data.animation = "teleportation";
                        data.color = replaceName(oldFlags.color);
                        data.options = {
                            name: replaceName(oldFlags.animName),
                            variant: "01",
                            teleDist: oldFlags.teleDist ?? 30,
                            scale: oldFlags.options?.scale ?? 1,
                            hideTemplate: oldFlags.options?.hideTemplate ?? false,
                            enableCustom: oldFlags.options?.enableCustom01 ?? false,
                            customPath: oldFlags.options?.customPath01 ?? "",
                        }

                        break;
                    case "t13":
                        const presetName = replaceName(oldFlags.animName);
                        data.animType = 'preset';
                        data.animation = presetName;
                        data.color = replaceName(oldFlags.color);
                        switch (presetName) {
                            case 'shieldspell':
                                data.options = {
                                    variant: oldFlags.spellVar ?? "01",
                                    shieldVar: oldFlags.shieldVar ?? 'outro_explode',
                                }
                                break;
                            case 'bardicinspiration':
                                data.bards = oldFlags.bards;
                                break;
                            case 'huntersmark':
                                data.options = {
                                    variant: replaceName(oldFlags.hmAnim),
                                    persistent: oldFlags.ctaOption ?? false,
                                }
                                break;
                            case 'sneakattack':
                                data.options = {
                                    variant: "01",
                                }
                                break;
                            case 'bless':
                                data.options = {
                                    variant: "01",
                                    persistent: oldFlags.options.addCTA ?? false,
                                }
                                break;
                        }

                        break;
                }
            }

            async function overrideAuto() {
                const auto = oldFlags.options ?? {};
                const data = {
                    enable: true,
                    variant: auto.autoVariant ?? "01",
                    color: auto.autoColor ?? "",
                    repeat: auto.autoRepeat ?? 1,
                    endEffect: auto.endEffect ?? "outro_explode",
                    delay: auto.autoDelay ?? 250,
                    scale: auto.autoScale ?? 1,
                    fireball: auto.autoFireball ?? {},
                }
                return data;
            }
            /*
            if (oldFlags.options?.overrideAuto) {
                const auto = oldFlags.options ?? {};
                data.autoOverride = {
                    enable: true,
                    variant: auto.autoVariant ?? "01",
                    color: auto.autoColor ?? "",
                    repeat: auto.autoRepeat ?? 1,
                    delay: auto.autoDelay ?? 250,
                    scale: auto.autoScale ?? 1,
                    fireball: auto.autoFireball ?? {},
                }
            }
            */
            async function explosions() {
                //if (!oldFlags.explosion) { return; }
                const explosion = {
                    enable: true,
                    below: oldFlags.exAnimLevel ?? false,
                    radius: oldFlags.explodeRadius ?? 2,
                    delay: oldFlags.explodeDelay ?? 500,
                    animation: replaceName(oldFlags.explodeVariant) ?? "",
                    variant: "01",
                    color: replaceName(oldFlags.explodeColor),
                    enableCustom: oldFlags.options?.enableCustomExplosion ?? false,
                    customPath: oldFlags.options?.customExplosion ?? "",
                }
                return explosion;
            }

            async function rangeSwitch() {
                const data = {
                    animation: oldFlags.meleeSwitch?.animName ?? "",
                    variant: switchVariants(replaceName(oldFlags.animName)),
                    switchType: "custom",
                    color: oldFlags.meleeSwitch?.color ?? "white",
                    detect: oldFlags.meleeSwitch?.detect ?? "auto",
                    range: oldFlags.meleeSwitch?.detect === 'custom' ? oldFlags.meleeSwitch?.range ?? 2 : 2,
                    returning: oldFlags.meleeSwitch?.returning ?? false,
                }

                function switchVariants(name) {
                    switch (name) {
                        case 'bolt':
                        case 'bullet':
                        case 'arrow':
                            return oldFlags.meleeSwitch?.rangeDmgType ?? "01";
                        case 'lasersword':
                        case 'dagger':
                        case 'handaxe':
                            return oldFlags.meleeSwitch?.rangeVar ?? "01";
                        default:
                            return "01"
                    }
                }
                return data;
            }

            async function templateAnimation() {
                switch (oldFlags.templates?.tempType) {
                    case 'cone':
                        switch (oldFlags.templates?.tempAnim) {
                            case 'coneofcold':
                                return { name: 'coneofcold', variant: "01" };
                            case 'burninghands01':
                                return { name: 'burninghands', variant: '01' };
                            case 'burninghands02':
                                return { name: 'burninghands', variant: '02' };
                            default:
                                return { name: 'breathweaponcone', variant: oldFlags.templates?.tempAnim };
                        }
                    case 'ray':
                        switch (oldFlags.templates?.tempAnim) {
                            case 'lightningbolt01':
                                return { name: 'lightningbolt', variant: '01' };
                            case 'lightningbolt02':
                                return { name: 'lightningbolt', variant: '02' };
                            default:
                                return { name: 'breathweaponline', variant: oldFlags.templates?.tempAnim };
                        }
                    case "circle":
                        switch (oldFlags.templates?.tempAnim) {
                            case 'snowflake':
                                return { name: 'snowflake', variant: '01' };
                            case 'outpulse01':
                                return { name: 'outpulse01', variant: '01' };
                            case 'outpulse02':
                                return { name: 'outpulse02', variant: '01' };
                            case 'shatter':
                                return { name: 'shatter', variant: '01' };
                            case 'fogcloud':
                                return { name: 'fogcloud', variant: '01' };
                            case 'darkness':
                                return { name: 'darkness', variant: '01' };
                            case 'calllightning':
                                return { name: 'calllightning', variant: '01' };
                            case 'sleetstorm':
                                return { name: 'sleetstorm', variant: '01' };
                            case 'cloudofdaggers':
                                return { name: 'cloudofdaggers', variant: '01' };
                            case 'cloudofkunais':
                                return { name: 'cloudofdaggers', variant: '02' };
                            default:
                                return { name: 'explosion', variant: '01' }
                        }
                    case 'rect':
                        switch (oldFlags.templates?.tempAnim) {
                            case 'entangle':
                                return { name: 'entangle', variant: '01' };
                            case 'thunderwave':
                                return { name: 'thunderwave', variant: '01' };
                            default:
                                return { name: 'web', variant: '01' };
                        }
                    default:
                        return {};
                }
            }

            function replaceName(name) {
                if (!name) { return "" }
                const newName = name.replace(/\s+/g, '').toLowerCase();
                return newName;
            }

            await item.update({ 'flags.-=autoanimations': null })
            await item.update({ 'flags.autoanimations': data })

            return data;
        },
        "2": async (item) => {
            /**
             * allSounds.item.enableAudio --------------> audio.a01.enable
             * allSounds.item.file ---------------------> audio.a01.file
             * allSounds.item.delay --------------------> audio.a01.delay
             * allSounds.item.volume -------------------> audio.a01.volume
             * 
             * allSounds.explosion.audioExplodeEnabled -> audio.e01.enable
             * allSounds.explosion.file ----------------> audio.e01.file
             * allSounds.explosion.delay ---------------> audio.e01.delay
             * allSounds.explosion.volume --------------> audio.e01.volume
             * 
             */
            const v2Flags = item.data?.flags?.autoanimations || {};
            const allSounds = v2Flags.allSounds || {};
            v2Flags.audio = {
                a01: {
                    enable: allSounds.item?.enableAudio ?? false,
                    file: allSounds.item?.file ?? "",
                    delay: allSounds.item?.delay ?? 0,
                    volume: allSounds.item?.volume ?? 0.25,
                },
                e01: {
                    enable: allSounds.explosion?.audioExplodeEnabled || false,
                    file: allSounds.explosion?.file ?? "",
                    delay: allSounds.explosion?.delay ?? 0,
                    volume: allSounds.explosion?.volume ?? 0.25,
                }
            }
            v2Flags.version = 2;

            await item.update({ 'flags.-=autoanimations': null })
            await item.update({ 'flags.autoanimations': v2Flags })
            console.warn(`DEBUG | Automated Animations | Version 2 Flag Migration Complete`, v2Flags)
        },
        "3": async (item) => {
            const v3Flags = item.data?.flags?.autoanimations || {};
            if (v3Flags.killAnim) {
                v3Flags.version = 3;
                await item.update({ 'flags.-=autoanimations': null })
                await item.update({ 'flags.autoanimations': v3Flags })
                return;
            }
            if (v3Flags.override) {
                if (v3Flags.animType === 'template') {
                    v3Flags.options.scaleX = v3Flags.options.scale || 1;
                    v3Flags.options.scaleY = v3Flags.options.scale || 1;
                }
                if (v3Flags.animType === 'preset') {
                    if (v3Flags.animation === 'teleportation') {
                        v3Flags.options.measureType = 'alternating';
                        v3Flags.options.hideFromPlayers = v3Flags.options?.hideTemplate === true ? true : false;
                        v3Flags.options.enableCustom02 = v3Flags.options?.enableCustom ? true : false;
                        v3Flags.options.customPath02 = v3Flags.options?.enableCustom ? v3Flags.options?.customPath : "";
                        v3Flags.options.name02 = v3Flags.options?.name ?? "mistystep";
                        v3Flags.options.variant02 = "02";
                        v3Flags.color02 = v3Flags.color || "blue";
                        v3Flags.options.scale02 = v3Flags.options?.scale ?? 1;
                    }
                }
                v3Flags.version = 3;
                await item.update({ 'flags.-=autoanimations': null })
                await item.update({ 'flags.autoanimations': v3Flags })
                console.warn(`DEBUG | Automated Animations | Version 3 Flag Migration Complete`, v3Flags)
            }
        },
        "4": async (item) => {
            const v4Flags = item.data?.flags?.autoanimations || {};
            const options = v4Flags.options || {}
            if (v4Flags.killAnim) {
                v4Flags.version = 4;
                await item.update({ 'flags.-=autoanimations': null })
                await item.update({ 'flags.autoanimations': v4Flags })
                return;
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
            await item.update({ 'flags.-=autoanimations': null })
            await item.update({ 'flags.autoanimations': v4Flags })
            console.warn(`DEBUG | Automated Animations | Version 3 Flag Migration Complete`, v4Flags)
        },
        "5": async (item) => {

            if (!item.data?.flags?.autoanimations) { return; }
            const v4Flags = item.data?.flags?.autoanimations || {};
            const v5Flags = {}
            let primarySet = ['melee', 'range', 'static', 'template', 'aura']

            if (v4Flags.killAnim && !v4Flags.macro?.enable && !v4Flags.audio?.a01?.enable) {
                v5Flags.killAnim = true;
                v5Flags.version = 5;
                await item.update({ 'flags.-=autoanimations': null })
                await item.update({ 'flags.autoanimations': v5Flags })
                return;
            } else if (v4Flags.killAnim && (v4Flags.macro?.enable || v4Flags.audio?.a01?.enable)) {
                v5Flags.killAnim = false;
                v5Flags.macro = v4Flags.macro || {};
                v5Flags.audio = v4Flags.audio || {};
                await item.update({ 'flags.-=autoanimations': null })
                await item.update({ 'flags.autoanimations': v5Flags })
                return;
            } else if (!v4Flags.killAnim && !v4Flags.override) {
                await item.update({ 'flags.-=autoanimations': null })
                await item.update({ 'flags.autoanimations': v5Flags })
                return;
            }
            
            if (v4Flags.override) {
                if (primarySet.includes(v4Flags.animType)) {
                    await mergePrimary();
                    if (v5Flags.animType === "template") {v5Flags.animType = "templatefx"}
                    await item.update({ 'flags.-=autoanimations': null })
                    await item.update({ 'flags.autoanimations': v5Flags })
                    return;    
                }
                if (v4Flags.animType === "preset") {
                    v5Flags.version = 5;
                    v5Flags.preset = {};
                    v5Flags.animType = 'preset';
                    v5Flags.override = true;
                    v5Flags.killAnim = false;    
                    await mergePreset();
                    await item.update({ 'flags.-=autoanimations': null })
                    await item.update({ 'flags.autoanimations': v5Flags })
                    return;    
                }
            }

            async function new3d(data) {
                let spriteType = data?.type || "";
                switch (spriteType) {
                    case "sprite": 
                        return {type: data.type || "" , sprites: data || {}}
                    case "explosion":
                        return {type: data.type || "" , explosion: data || {}}
                    case "ray":
                        return {type: data.type || "" , ray: data || {}}
                    case "projectile":
                        return {type: data.type || "" , projectile: data || {}}
                    default:
                        return {type: ""}
                }
            }
            async function mergePrimary() {
                let { options, explosions, audio, macro, levels3d, sourceToken, targetToken,
                    meleeSwitch, killAnim, override, animType, animation, color, animLevel } = v4Flags;
                v5Flags.options ? v5Flags.options : v5Flags.options = {};
                const newOptions = v5Flags.options;
                v5Flags.killAnim = killAnim;
                v5Flags.override = override;
                v5Flags.animType = animType;
                v5Flags.primary = {
                    menuType: options?.menuType || "",
                    animation,
                    variant: options?.variant || "",
                    color,
                    enableCustom: options?.enableCustom || false,
                    customPath: options?.customPath || "",
                };
                v5Flags.version = 5;
                v5Flags.options = options;
                v5Flags.explosions = explosions || {};
                v5Flags.audio = audio || {};
                v5Flags.macro = macro || {};
                v5Flags.levels3d = await new3d(levels3d);
                v5Flags.meleeSwitch = meleeSwitch || {};
                v5Flags.preset = {};
                newOptions.below = animLevel;
                if (sourceToken?.enable) {
                    await convertSource(sourceToken)
                }
                if (targetToken?.enable) {
                    convertTarget(targetToken)
                }
            }
            async function convertSource(data) {
                let {menuType, name: animation, variant, color, enable, enableCustom, customPath, loops, loopDelay,
                    delayAfter, animLevel, ...rest} = data;
                v5Flags.options ? v5Flags.options : v5Flags.options = {};
                const newOptions = v5Flags.options;    
                v5Flags.sourceToken = {
                    enable,
                    delayAfter,
                    primary: {
                        menuType,
                        animation,
                        variant,
                        color,
                        enableCustom,
                        customPath
                    },
                    options: rest,
                }
                
                v5Flags.sourceToken.options.repeat = loops || 1;
                v5Flags.sourceToken.options.delay = loopDelay || 250;
                v5Flags.sourceToken.options.below = animLevel || false;
            }
            async function convertTarget(data) {
                let {menuType, name: animation, variant, color, enable, enableCustom, customPath, loops, loopDelay,
                    delayStart, animLevel, ...rest} = data;
                v5Flags.options ? v5Flags.options : v5Flags.options = {};
                const newOptions = v5Flags.options;    
    
                v5Flags.targetToken = {
                    enable,
                    delayStart,
                    primary: {
                        menuType,
                        animation,
                        variant,
                        color,
                        enableCustom,
                        customPath
                    },
                    options: rest,
                }
                v5Flags.targetToken.options.repeat = loops || 1;
                v5Flags.targetToken.options.delay = loopDelay || 250;
                v5Flags.targetToken.options.below = animLevel || false;
            }

            async function mergePreset() {
                const preset = v5Flags.preset
                switch (v4Flags.animation) {
                    case "bardicinspiration":
                        preset.bardicinspiration = {};
                        await updateBI()
                        break;
                    case "bless":
                        preset.bless = {};
                        await updateBless()
                        break;
                    case "shieldspell":
                        preset.shield = {};
                        await updateShield()
                        break;
                    case "teleportation":
                        preset.teleportation = {};
                        await updateTele()
                        break;
                    case "dualattach":
                        preset.dualattach = {};
                        await updateDAttach()
                        break;
                    case "fireball":
                        preset.fireball = {};
                        await updateFireball()
                        break;
                    case "huntersmark":
                        preset.huntersmark = {};
                        await updateHM()
                        break;
                    case "sneakattack":
                        preset.sneakattack = {};
                        await updateSneak()
                        break;
                    case "thunderwave":
                        preset.thunderwave = {};
                        await updateThunderwave()
                        break;
                }
            }

            async function updateBI() {
                const preset = v5Flags.preset;
                const root = preset.bardicinspiration;
                const bards = v4Flags.bards;
                preset.presetType = "bardicinspiration";
                let { bardSelf, bardAnim, bardVariant, bardSelfColor, bardTarget, bardTargetAnim, bardTargetVariant,
                    bardTargetColor, marker, markerColor, markerColorTarget} = bards;
                let {audio, macro, sourceToken, targetToken, animLevel} = v4Flags;
                v5Flags.audio = audio || {};
                v5Flags.macro = macro || {};
                root.below = animLevel;
                if (sourceToken?.enable) { convertSource(sourceToken) };
                if (targetToken?.enable) { convertTarget(targetToken) }
                preset.presetType = "bardicinspiration";
                root.below = below;
                root.scale = scale;
                root.self = {
                    enable: bardSelf || false,
                    animation: bardAnim === "music" ? "notes" : bardAnim,
                    variant: bardVariant,
                    color: bardSelfColor,
                }
                if (!root.self.animation || !root.self.color || !root.self.variant) {
                    root.self.enable = false;
                    root.self.animation = "";
                    root.self.variant = "";
                    root.self.color = "";
                }
                root.target = {
                    enable: bardTarget || false,
                    animation: bardTargetAnim === "music" ? "notes" : bardTargetAnim,
                    variant: bardTargetVariant,
                    color: bardTargetColor,
                }
                // TO-DO, assign VARIANTS somehow
                if (!root.target.animation || !root.target.color || !root.target.variant) {
                    root.target.enable = false;
                    root.target.animation = "";
                    root.target.variant = "";
                    root.target.color = "";
                }
                root.marker = {
                    enable: marker || false,
                    selfColor: markerColor || "",
                    targetColor: markerColorTarget || "",
                }
            }

            async function updateBless() {
                const preset = v5Flags.preset;
                const root = preset.bless;
                preset.presetType = "bless";
                if (sourceToken?.enable) { convertSource(sourceToken) };
                if (targetToken?.enable) { convertTarget(targetToken) };

                let { color, options, audio, macro, sourceToken, targetToken, animLevel } = v4Flags;

                v5Flags.audio = audio || {};
                v5Flags.macro = macro || {};
                root.below = animLevel;
                root.scale = scale;
                root.menuType = "spell";
                root.animation = "bless";
                root.variant = "01";
                root.color = color;
                root.unbindAlpha = options?.unbindAlpha || false;
                root.unbindVisibility = options?.unbindVisibility || false;
                root.persistent = options?.persistent || false;
            }

            async function updateShield() {
                const preset = v5Flags.preset;
                const root = preset.shield;

                let { audio, macro, sourceToken, options, color } = v4Flags;
                root.audio = audio || {};
                root.macro = macro || {};
                preset.presetType = "shieldspell";
                if (sourceToken?.enable) { convertSource(sourceToken) };

                root.menuType = "spell";
                root.animation = "shieldspell";
                root.variant = options.variant;
                root.color = color;

                root.endEffect = options.shieldVar;
                root.unbindAlpha = options.unbindAlpha;
                root.unbindVisibility = options.unbindVisibility;
                root.persistent = options.persistent;
                root.below = v5Flags.animLevel;
                root.scale = options.scale;
            }

            async function updateTele() {
                const preset = v5Flags.preset;
                preset.teleportation = {};
                const root = preset.teleportation;

                let { audio, macro, sourceToken, options, color, color02, animLevel} = v4Flags;
                let { measureType, teleDist, hideFromPlayers, menuType, name, variant, enableCustom, customPath, scale,
                    menuType02, name02, variant02, enableCustom02, customPath02, scale02, delay }= options;
                root.audio = audio || {};
                root.macro = macro || {};
                preset.presetType = "teleportation";
                if (sourceToken?.enable) { convertSource(sourceToken) };

                root.hideFromPlayers = hideFromPlayers;
                root.range = teleDist;
                root.measureType = measureType;
                root.start = {
                    menuType,
                    animation: name,
                    variant,
                    color,
                    below: animLevel,
                    enableCustom: enableCustom || false,
                    customPath,
                    scale,
                }
                root.between = {
                    enable: false,
                }
                root.end = {
                    menuType: menuType02,
                    animation: name02,
                    variant: variant02,
                    color: color02,
                    below: animLevel,
                    enableCustom: enableCustom02 || false,
                    customPath: customPath02,
                    scale: scale02,
                    delay
                }
            }

            async function updateDAttach() {
                const preset = v5Flags.preset;
                const root = preset.dualattach;

                let { audio, macro, sourceToken, options, color, animLevel } = v4Flags;
                let { menuType, name, variant, enableCustom, customPath, playbackRate, onlyX } = options;
                root.audio = audio || {};
                root.macro = macro || {};
                preset.presetType = "dualattach";
                if (sourceToken?.enable) { convertSource(sourceToken) };

                root.menuType = menuType;
                root.animation = name;
                root.variant = variant;
                root.color = color;
                root.enableCustom = enableCustom || false;
                root.customPath = customPath;
                root.playbackRate = playbackRate;
                root.onlyX = onlyX;
                root.below = animLevel;
            }

            async function updateFireball() {
                const preset = v5Flags.preset;
                const root = preset.fireball;

                let { audio, macro, options, sourceToken, animLevel } = v4Flags;
                let { rangeType, projectile, projectileVariant, projectileColor, projectileRepeat, projectileDelay, wait01,
                    ex01Type, explosion01, explosion01Variant, explosion01Color, explosion01Repeat, explosion01Delay, explosion01Scale, wait02,
                    ex02Type, explosion02, explosion02Variant, explosion02Color, explosion02Repeat, explosion02Delay, explosion02Scale,
                    afterEffect, afterEffectPath, wait03 } = v4Flags.fireball;
                root.audio = audio || {};
                root.macro = macro || {};
                preset.presetType = "fireball";
                if (sourceToken?.enable) { convertSource(sourceToken) };

                root.removeTemplate = options.removeTemplate || false;
                root.projectile = {
                    menuType: rangeType,
                    animation: projectile,
                    variant: projectileVariant,
                    color: projectileColor,
                    repeat: projectileRepeat,
                    delay: projectileDelay,
                    wait: wait01,
                    below: animLevel,
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
                    below: animLevel,
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
                if (!root.explosion02.menuType || !root.explosion02.animation || !root.explosion02.variant || !root.explosion02.color) {
                    root.explosion01.enable = false;
                } else { root.explosion02.enable = true }
                root.afterImage = {
                    enable: afterEffect,
                    customPath: afterEffectPath,
                    below: true,
                    scale: 1,
                    wait: wait03,
                }
            }

            async function updateHM() {
                const preset = v5Flags.preset;
                const root = preset.dualattach;

                let { audio, macro, sourceToken, targetToken, options, animLevel } = v4Flags;
                let { variant, scale, persistent, anchorX, anchorY } = options;
                root.audio = audio || {};
                root.macro = macro || {};
                preset.presetType = "huntersmark";
                if (sourceToken?.enable) { convertSource(sourceToken) };
                if (targetToken?.enable) { convertTarget(targetToken) }

                root.variant = variant;
                root.color = color;
                root.scale = scale;
                root.below = animLevel;
                root.persistent = persistent;
                root.anchorX = anchorX;
                root.anchorY = anchorY;
            }

            async function updateSneak() {
                const preset = v5Flags.preset;
                const root = preset.sneakattack;

                let { audio, macro, sourceToken, options, color, animLevel } = v4Flags;
                let { variant, scale, anchorX, anchorY } = options;
                root.audio = audio || {};
                root.macro = macro || {};
                preset.presetType = "sneakattack";
                if (sourceToken?.enable) { convertSource(sourceToken) };

                root.variant = variant;
                root.color = color;
                root.scale = scale;
                root.anchorX = anchorX;
                root.anchorY = anchorY;
                root.below = animLevel;
            }

            async function updateThunderwave() {
                const preset = v5Flags.preset;
                const root = preset.thunderwave;

                let { audio, macro, sourceToken, options, color, animLevel } = v4Flags;
                let { repeat, delay, scaleX, scaleY, opacity, removeTemplate, persistent, persistType, occlusionMode, occlusionAlpha } = options;
                root.audio = audio || {};
                root.macro = macro || {};
                preset.presetType = "thunderwave";
                if (sourceToken?.enable) { convertSource(sourceToken) };

                root.color = color;
                root.below = animLevel;
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

            console.warn(`DEBUG | Automated Animations | Version 5 Flag Migration Complete`, v5Flags)
        }
    }
}