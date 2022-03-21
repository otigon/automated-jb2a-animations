
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

        }
    }
}