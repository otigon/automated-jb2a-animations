
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
            debugger
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
                        repeat: oldFlags.options?.loops || 1,
                        delay: oldFlags.options?.loopDelay || 250,
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
                            data.options.variant = oldFlags.spellVar ?? "01";
                            break;
                        case 'bardicinspiration':
                            data.bards = oldFlags.bards;
                            break;
                        case 'huntersmark':
                            data.options.variant = replaceName(oldFlags.hmAnim);
                            data.options.persistent = oldFlags.ctaOption ?? false;
                            break;
                        case 'sneakattack':
                            data.options.variant = "01";
                            break;
                        case 'bless':
                            data.options.variant = "01";
                            data.options.persistent = oldFlags.options.addCTA ?? false;
                            break;
                    }

                    break;
            }

            async function overrideAuto() {
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
                                return {name: 'snowflake', variant: '01'};
                            case 'outpulse01':
                                return {name: 'outpulse01', variant: '01'};
                            case 'outpulse02':
                                return {name: 'outpulse02', variant: '01'};
                            case 'shatter':
                                return {name: 'shatter', variant: '01'};
                            case 'fogcloud':
                                return {name: 'fogcloud', variant: '01'};
                            case 'darkness':
                                return {name: 'darkness', variant: '01'};
                            case 'calllightning':
                                return {name: 'calllightning', variant: '01'};
                            case 'sleetstorm':
                                return {name: 'sleetstorm', variant: '01'};
                            case 'cloudofdaggers':
                                return {name: 'cloudofdaggers', variant: '01'};
                            case 'cloudofkunais':
                                return {name: 'cloudofdaggers', variant: '02'};
                            default: 
                                return {name: 'explosion', variant: '01'}
                        }
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
    }
}
