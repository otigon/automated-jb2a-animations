
export const flagMigrations = {

    async handle(item) {
        let flags = item.data?.flags?.autoanimations;
        if (!flags) return;

        if (this.upToDate(flags)) return flags;

        
        for (let [version, migration] of Object.entries(this.migrations)) {

            if (flags.version > version) continue;

            await migration(item);
        }

        const newFlags = item.data.flags.autoanimations;
        console.log(newFlags);
        return newFlags;
    },

    upToDate(flags) {
        const currentVersion = flags.version;
        if (flags.version >= currentVersion) { return true; } else {
            return false;
        }
    },

    migrations: {
        "1": async (item) => {
            const oldFlags = item.data?.flags?.autoanimations;
            const type = oldFlags.animType;
            let data;
            let explosion;
            switch (type) {
                case "t2":
                    data = {
                        animation: replaceName(oldFlags.animName),
                        variant: oldFlags.uaStrikeType ?? "01",
                        repeat: oldFlags.options?.loops ?? 1,
                        delay: oldFlags.options?.loopDelay ?? 250,
                        enableCustom: oldFlags.options?.enableCustom01 ?? false,
                        customPath: oldFlags.options?.customPath01 ?? "",
                        meleeType: "weapon",
                    }

                    await item.setFlag('autoanimations', 'animType', "melee")
                    await item.setFlag('autoanimations', 'animation', data.animation)
                    await item.setFlag('autoanimations', 'options.variant', data.variant)
                    await item.setFlag('autoanimations', 'options.repeat', data.repeat)
                    await item.setFlag('autoanimations', 'options.delay', data.delay)
                    await item.setFlag('autoanimations', 'options.enableCustom', data.enableCustom)
                    await item.setFlag('autoanimations', 'options.customPath', data.customPath)
                    await item.setFlag('autoanimations', 'options.meleeType', data.meleeType)
                    /*
                    if (oldFlags.explosion) {
                        await explosions(item)
                    }
                    */
                    await explosions(item);
                    
                    await item.setFlag('autoanimations', 'version', '1')

                    return item.data.flags.autoanimations;
                case "t3":
                    break;
                case "t4":
                    data = {
                        animation: replaceName(oldFlags.animName),
                        variant: t4VariantSwitch(replaceName(oldFlags.animName)),
                        repeat: oldFlags.options?.loops ?? 1,
                        delay: oldFlags.options?.loopDelay ?? 250,
                    }
                    await item.setFlag('autoanimations', 'animType', "range")
                    await item.setFlag('autoanimations', 'animation', data.animation)
                    await item.setFlag('autoanimations', 'options.variant', data.variant)
                    await item.setFlag('autoanimations', 'options.repeat', data.repeat)
                    await item.setFlag('autoanimations', 'options.delay', data.delay)

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

                    if (oldFlags.explosion) {
                        await explosions(item)
                    }

                    await item.setFlag('autoanimations', 'version', '1')

                    return item.data.flags.autoanimations;
                case "t5":
                    data = {
                        animation: replaceName(oldFlags.animName),
                        variant: "01",
                        repeat: oldFlags.options?.loops ?? 1,
                        delay: oldFlags.options?.loopDelay ?? 250,
                        enableCustom: oldFlags.options?.enableCustom01 ?? false,
                        customPath: oldFlags.options?.customPath01 ?? "",
                    }
                    await item.setFlag('autoanimations', 'options.staticType', "target")
                    await item.setFlag('autoanimations', 'animType', "static")
                    await item.setFlag('autoanimations', 'animation', data.animation)
                    await item.setFlag('autoanimations', 'options.variant', data.variant)
                    await item.setFlag('autoanimations', 'options.repeat', data.repeat)
                    await item.setFlag('autoanimations', 'options.delay', data.delay)
                    await item.setFlag('autoanimations', 'options.enableCustom', data.enableCustom)
                    await item.setFlag('autoanimations', 'options.customPath', data.customPath)

                    if (oldFlags.explosion) {
                        await explosions(item)
                    }

                    await item.setFlag('autoanimations', 'version', '1')

                    return item.data.flags.autoanimations;
                case "t6":
                    data = {
                        animation: replaceName(oldFlags.animName),
                        variant: oldFlags.spellVar ?? "01",
                        repeat: oldFlags.options?.loops ?? 1,
                        delay: oldFlags.options?.loopDelay ?? 250,
                    }
                    await item.setFlag('autoanimations', 'options.rangeType', "weapon")
                    await item.setFlag('autoanimations', 'animType', "range")
                    await item.setFlag('autoanimations', 'animation', data.animation)
                    await item.setFlag('autoanimations', 'options.variant', data.variant)
                    await item.setFlag('autoanimations', 'options.repeat', data.repeat)
                    await item.setFlag('autoanimations', 'options.delay', data.delay)

                    if (oldFlags.explosion) {
                        await explosions(item)
                    }

                    await item.setFlag('autoanimations', 'version', '1')

                    return item.data.flags.autoanimations;
                case "t7":
                    data = {
                        animation: replaceName(oldFlags.animName),
                        variant: oldFlags.spellVar ?? "01",
                        repeat: oldFlags.options?.loops ?? 1,
                        delay: oldFlags.options?.loopDelay ?? 250,
                        enableCustom: oldFlags.options?.enableCustom01 ?? false,
                        customPath: oldFlags.options?.customPath01 ?? "",
                    }
                    await item.setFlag('autoanimations', 'options.staticType', "targetDefault")
                    await item.setFlag('autoanimations', 'animType', "static")
                    await item.setFlag('autoanimations', 'animation', data.animation)
                    await item.setFlag('autoanimations', 'options.variant', data.variant)
                    await item.setFlag('autoanimations', 'options.repeat', data.repeat)
                    await item.setFlag('autoanimations', 'options.delay', data.delay)
                    await item.setFlag('autoanimations', 'options.enableCustom', data.enableCustom)
                    await item.setFlag('autoanimations', 'options.customPath', data.customPath)

                    if (oldFlags.explosion) {
                        await explosions(item)
                    }

                    await item.setFlag('autoanimations', 'version', '1')

                    return item.data.flags.autoanimations;
                case "t8":
                    data = {
                        tempType: oldFlags.templates?.TempType,
                        animation: replaceName(oldFlags.templates?.tempAnim),
                        variant: "01",
                        color: replaceName(oldFlags.templates?.tempColor),
                        removeTemplate: oldFlags.templates?.removeTemplate ?? false,
                        enableCustom: oldFlags.templates?.customAnim ?? false,
                        customPath: oldFlags.templates?.customPath ?? "",
                        persistent: oldFlags.templates?.persistent ?? false,
                        opacity: oldFlags.templates?.opacity ?? 0.75,
                        overhead: oldFlags.templates?.overhead ?? false,
                        occlusionMode: oldFlags.templates?.occlusionMode ?? "03",
                        occlusionAlpha: oldFlags.templates?.occlusionAlpha ?? 0.75,
                        repeat: oldFlags.templates?.tempLoop ?? 1,
                        delay: oldFlags.templates?.loopDelay ?? 250,
                    }
                    await item.setFlag('autoanimations', 'animType', "template")
                    await item.setFlag('autoanimations', 'options.tempType', data.tempType)
                    await item.setFlag('autoanimations', 'animation', data.animation)
                    await item.setFlag('autoanimations', 'options.variant', data.variant)
                    await item.setFlag('autoanimations', 'color', data.color)
                    await item.setFlag('autoanimations', 'options.removeTemplate', data.removeTemplate)
                    await item.setFlag('autoanimations', 'options.enableCustom', data.enableCustom)
                    await item.setFlag('autoanimations', 'options.customPath', data.customPath)
                    await item.setFlag('autoanimations', 'options.persistent', data.persistent)
                    await item.setFlag('autoanimations', 'options.opacity', data.opacity)
                    await item.setFlag('autoanimations', 'options.overhead', data.overhead)
                    await item.setFlag('autoanimations', 'options.occlusionMode', data.occlusionMode)
                    await item.setFlag('autoanimations', 'options.occlusionAlpha', data.occlusionAlpha)
                    await item.setFlag('autoanimations', 'options.repeat', data.repeat)
                    await item.setFlag('autoanimations', 'options.delay', data.delay)

                    await item.setFlag('autoanimations', 'version', '1')

                    return item.data.flags.autoanimations;
                case "t9":
                    data = {
                        animation: replaceName(oldFlags.explodeVariant),
                        variant: oldFlags.options?.variant ?? "01",
                        color: oldFlags.explodeColor ?? "white",
                        repeat: oldFlags.options?.loops ?? 1,
                        delay: oldFlags.options?.loopDelay ?? 250,
                        scale: oldFlags.options?.scale ?? 2,
                        enableCustom: oldFlags.options?.enableCustomExplosion ?? false,
                        customPath: oldFlags.options?.customExplosion ?? "",
                    }
                    await item.setFlag('autoanimations', 'animType', "static")
                    await item.setFlag('autoanimations', 'options.staticType', "target")
                    await item.setFlag('autoanimations', 'animation', data.animation)
                    await item.setFlag('autoanimations', 'options.variant', data.variant)
                    await item.setFlag('autoanimations', 'color', data.color)
                    await item.setFlag('autoanimations', 'options.repeat', data.repeat)
                    await item.setFlag('autoanimations', 'options.delay', data.delay)
                    await item.setFlag('autoanimations', 'options.scale', data.scale)
                    await item.setFlag('autoanimations', 'options.enableCustom', data.enableCustom)
                    await item.setFlag('autoanimations', 'options.customPath', data.customPath)

                    await item.setFlag('autoanimations', 'version', '1')

                    return item.data.flags.autoanimations;
                case "t10":
                    data = {
                        animation: replaceName(oldFlags.explodeVariant),
                        variant: oldFlags.options?.variant ?? "01",
                        color: oldFlags.explodeColor ?? "white",
                        repeat: oldFlags.options?.loops ?? 1,
                        delay: oldFlags.options?.loopDelay ?? 250,
                        scale: oldFlags.options?.scale ?? 2,
                        enableCustom: oldFlags.options?.enableCustomExplosion ?? false,
                        customPath: oldFlags.options?.customExplosion ?? "",
                    }
                    await item.setFlag('autoanimations', 'animType', "static")
                    await item.setFlag('autoanimations', 'options.staticType', "source")
                    await item.setFlag('autoanimations', 'animation', data.animation)
                    await item.setFlag('autoanimations', 'options.variant', data.variant)
                    await item.setFlag('autoanimations', 'color', data.color)
                    await item.setFlag('autoanimations', 'options.repeat', data.repeat)
                    await item.setFlag('autoanimations', 'options.delay', data.delay)
                    await item.setFlag('autoanimations', 'options.scale', data.scale)
                    await item.setFlag('autoanimations', 'options.enableCustom', data.enableCustom)
                    await item.setFlag('autoanimations', 'options.customPath', data.customPath)

                    await item.setFlag('autoanimations', 'version', '1')

                    return item.data.flags.autoanimations;
                case "t11":
                    data = {
                        animation: replaceName(oldFlags.animName),
                        variant: "01",
                        color: replaceName(oldFlags.color),
                        enableCustom: oldFlags.options?.enableCustom01 ?? false,
                        customPath: oldFlags.options?.customPath01 ?? "",
                        auraRadius: oldFlags.selfRadius ?? 3.5,
                        opacity: oldFlags.auraOpacity ?? 0.75,
                        ignoreTarget: oldFlags.options?.ignoreTarget ?? true,
                    }
                    await item.setFlag('autoanimations', 'animType', "aura")
                    await item.setFlag('autoanimations', 'animation', data.animation)
                    await item.setFlag('autoanimations', 'options.variant', data.variant)
                    await item.setFlag('autoanimations', 'color', data.color)
                    await item.setFlag('autoanimations', 'options.opacity', data.opacity)
                    await item.setFlag('autoanimations', 'options.auraRadius', data.auraRadius)
                    await item.setFlag('autoanimations', 'options.ignoreTarget', data.ignoreTarget)
                    await item.setFlag('autoanimations', 'options.enableCustom', data.enableCustom)
                    await item.setFlag('autoanimations', 'options.customPath', data.customPath)

                    await item.setFlag('autoanimations', 'version', '1')

                    return item.data.flags.autoanimations;
                case "t12":
                    data = {
                        animation: "teleportation",
                        name: replaceName(oldFlags.animName),
                        variant: "01",
                        color: replaceName(oldFlags.color),
                        teleDist: oldFlags.auraOpacity ?? 0.75,
                        hideTemplate: oldFlags.options?.hideTemplate ?? false,
                        scale: oldFlags.options?.scale ?? 1,
                        enableCustom: oldFlags.options?.enableCustom01 ?? false,
                        customPath: oldFlags.options?.customPath01 ?? "",
                    }
                    await item.setFlag('autoanimations', 'animType', "preset")
                    await item.setFlag('autoanimations', 'animation', "teleportation")
                    await item.setFlag('autoanimations', 'options.name', data.name)
                    await item.setFlag('autoanimations', 'options.variant', data.variant)
                    await item.setFlag('autoanimations', 'color', data.color)
                    await item.setFlag('autoanimations', 'options.teleDist', data.teleDist)
                    await item.setFlag('autoanimations', 'options.hideTemplate', data.hideTemplate)
                    await item.setFlag('autoanimations', 'options.scale', data.scale)
                    await item.setFlag('autoanimations', 'options.enableCustom', data.enableCustom)
                    await item.setFlag('autoanimations', 'options.customPath', data.customPath)

                    await item.setFlag('autoanimations', 'version', '1')

                    return item.data.flags.autoanimations;
                case "t13":

                    await item.setFlag('autoanimations', 'version', '1')

                    return item.data.flags.autoanimations;
            }
            async function explosions(item) {
                if (!oldFlags.explosion) { return; }
                const explosion = {
                    enable: true,
                    below: oldFlags.exAnimLevel ?? false,
                    radius: oldFlags.explodeRadius ?? 2,
                    delay: oldFlags.explodeDelay ?? 500,
                    animation: replaceName(oldFlags.explodeVariant),
                    variant: "01",
                    color: replaceName(oldFlags.explodeColor),
                    enableCustom: oldFlags.options?.enableCustomExplosion ?? false,
                    customPath: oldFlags.options?.customExplosion ?? "",
                }
                await item.setFlag('autoanimations', 'explosions.enable', explosion.enable)
                await item.setFlag('autoanimations', 'explosions.below', explosion.below)
                await item.setFlag('autoanimations', 'explosions.radius', explosion.radius)
                await item.setFlag('autoanimations', 'explosions.delay', explosion.delay)
                await item.setFlag('autoanimations', 'explosions.animation', explosion.animation)
                await item.setFlag('autoanimations', 'explosions.variant', explosion.variant)
                await item.setFlag('autoanimations', 'explosions.color', explosion.color)
                await item.setFlag('autoanimations', 'explosions.enableCustom', explosion.enableCustom)
                await item.setFlag('autoanimations', 'explosions.customPath', explosion.customPath)
            }

            function replaceName(name) {
                if (!name) { return "" }
                const newName = name.replace(/\s+/g, '').toLowerCase();
                return newName;
            }

        },
    }
}

//export default flagMigrations

/*
class AAFlagMigration {
    static async mergeFlags(item) {
        let flags = item.data?.flags?.autoanimations;
        if (!flags) { return; }

        if (this.upToDate(flags)) return flags;

        for (let [version, migrations] in Object.entries(this.migrations(item))) {
            if (flags.version > version) continue;

            flags = this.migrations(flags);
        }

    }

    static upToDate(flags) {
        if (flags.version > 1) { return true; } else {
            return false;
        }
    }

    static async migrations(item) {

    }
}
*/
/*
async function t2t3Merge(item) {
    const oldFlags = item.data?.flags?.autoanimations;

    const data = {
        animation: replaceName(oldFlags.animName),
        variant: oldFlags.uaStrikeType ?? "01",
        repeat: oldFlags.options?.loops ?? 1,
        delay: oldFlags.options?.loopDelay ?? 250,
        enableCustom: oldFlags.options?.enableCustom01 ?? false,
        customPath: oldFlags.options?.customPath01 ?? "",
    }
    await item.setFlag('autoanimations', 'animType', "t2")
    await item.setFlag('autoanimations', 'animation', data.animation)
    await item.setFlag('autoanimations', 'options.variant', data.variant)
    await item.setFlag('autoanimations', 'options.repeat', data.repeat)
    await item.setFlag('autoanimations', 'options.delay', data.delay)
    await item.setFlag('autoanimations', 'options.enableCustom', data.enableCustom)
    await item.setFlag('autoanimations', 'options.customPath', data.customPath)

    if (oldFlags.explosion) {
        await explosions(item)
    }
}

async function t4Merge(item) {
    const oldFlags = item.data?.flags?.autoanimations;

    const data = {
        animation: replaceName(oldFlags.animName),
        variant: t4VariantSwitch(replaceName(oldFlags.animName)),
        repeat: oldFlags.options?.loops ?? 1,
        delay: oldFlags.options?.loopDelay ?? 250,
    }
    await item.setFlag('autoanimations', 'animType', "t3")
    await item.setFlag('autoanimations', 'animation', data.animation)
    await item.setFlag('autoanimations', 'options.variant', data.variant)
    await item.setFlag('autoanimations', 'options.repeat', data.repeat)
    await item.setFlag('autoanimations', 'options.delay', data.delay)

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

    if (oldFlags.explosion) {
        await explosions(item)
    }
}

async function t5Merge(item) {
    const oldFlags = item.data?.flags?.autoanimations;

    const data = {
        animation: replaceName(oldFlags.animName),
        variant: "01",
        repeat: oldFlags.options?.loops ?? 1,
        delay: oldFlags.options?.loopDelay ?? 250,
        enableCustom: oldFlags.options?.enableCustom01 ?? false,
        customPath: oldFlags.options?.customPath01 ?? "",
    }
    await item.setFlag('autoanimations', 'options.staticType', "target")
    await item.setFlag('autoanimations', 'animType', "t4")
    await item.setFlag('autoanimations', 'animation', data.animation)
    await item.setFlag('autoanimations', 'options.variant', data.variant)
    await item.setFlag('autoanimations', 'options.repeat', data.repeat)
    await item.setFlag('autoanimations', 'options.delay', data.delay)
    await item.setFlag('autoanimations', 'options.enableCustom', data.enableCustom)
    await item.setFlag('autoanimations', 'options.customPath', data.customPath)

    if (oldFlags.explosion) {
        await explosions(item)
    }
}

async function t6Merge(item) {
    const oldFlags = item.data?.flags?.autoanimations;

    const data = {
        animation: replaceName(oldFlags.animName),
        variant: oldFlags.spellVar ?? "01",
        repeat: oldFlags.options?.loops ?? 1,
        delay: oldFlags.options?.loopDelay ?? 250,
    }
    await item.setFlag('autoanimations', 'options.rangeType', "weapon")
    await item.setFlag('autoanimations', 'animType', "t3")
    await item.setFlag('autoanimations', 'animation', data.animation)
    await item.setFlag('autoanimations', 'options.variant', data.variant)
    await item.setFlag('autoanimations', 'options.repeat', data.repeat)
    await item.setFlag('autoanimations', 'options.delay', data.delay)

    if (oldFlags.explosion) {
        await explosions(item)
    }
}

async function t7Merge(item) {
    const oldFlags = item.data?.flags?.autoanimations;

    const data = {
        animation: replaceName(oldFlags.animName),
        variant: oldFlags.spellVar ?? "01",
        repeat: oldFlags.options?.loops ?? 1,
        delay: oldFlags.options?.loopDelay ?? 250,
        enableCustom: oldFlags.options?.enableCustom01 ?? false,
        customPath: oldFlags.options?.customPath01 ?? "",
    }
    await item.setFlag('autoanimations', 'options.staticType', "targetDefault")
    await item.setFlag('autoanimations', 'animType', "t4")
    await item.setFlag('autoanimations', 'animation', data.animation)
    await item.setFlag('autoanimations', 'options.variant', data.variant)
    await item.setFlag('autoanimations', 'options.repeat', data.repeat)
    await item.setFlag('autoanimations', 'options.delay', data.delay)
    await item.setFlag('autoanimations', 'options.enableCustom', data.enableCustom)
    await item.setFlag('autoanimations', 'options.customPath', data.customPath)

    if (oldFlags.explosion) {
        await explosions(item)
    }
}

async function t8Merge(item) {
    const oldFlags = item.data?.flags?.autoanimations;

    const data = {
        tempType: oldFlags.templates?.TempType,
        animation: replaceName(oldFlags.templates?.tempAnim),
        variant: "01",
        color: replaceName(oldFlags.templates?.tempColor),
        removeTemplate: oldFlags.templates?.removeTemplate ?? false,
        enableCustom: oldFlags.templates?.customAnim ?? false,
        customPath: oldFlags.templates?.customPath ?? "",
        persistent: oldFlags.templates?.persistent ?? false,
        opacity: oldFlags.templates?.opacity ?? 0.75,
        overhead: oldFlags.templates?.overhead ?? false,
        occlusionMode: oldFlags.templates?.occlusionMode ?? "03",
        occlusionAlpha: oldFlags.templates?.occlusionAlpha ?? 0.75,
        repeat: oldFlags.templates?.tempLoop ?? 1,
        delay: oldFlags.templates?.loopDelay ?? 250,
    }
    await item.setFlag('autoanimations', 'animType', "t5")
    await item.setFlag('autoanimations', 'options.tempType', data.tempType)
    await item.setFlag('autoanimations', 'animation', data.animation)
    await item.setFlag('autoanimations', 'options.variant', data.variant)
    await item.setFlag('autoanimations', 'color', data.color)
    await item.setFlag('autoanimations', 'options.removeTemplate', data.removeTemplate)
    await item.setFlag('autoanimations', 'options.enableCustom', data.enableCustom)
    await item.setFlag('autoanimations', 'options.customPath', data.customPath)
    await item.setFlag('autoanimations', 'options.persistent', data.persistent)
    await item.setFlag('autoanimations', 'options.opacity', data.opacity)
    await item.setFlag('autoanimations', 'options.overhead', data.overhead)
    await item.setFlag('autoanimations', 'options.occlusionMode', data.occlusionMode)
    await item.setFlag('autoanimations', 'options.occlusionAlpha', data.occlusionAlpha)
    await item.setFlag('autoanimations', 'options.repeat', data.repeat)
    await item.setFlag('autoanimations', 'options.delay', data.delay)
}

async function t9Merge(item) {
    const oldFlags = item.data?.flags?.autoanimations;

    const data = {
        animation: replaceName(oldFlags.explodeVariant),
        variant: oldFlags.options?.variant ?? "01",
        color: oldFlags.explodeColor ?? "white",
        repeat: oldFlags.options?.loops ?? 1,
        delay: oldFlags.options?.loopDelay ?? 250,
        scale: oldFlags.options?.scale ?? 2,
        enableCustom: oldFlags.options?.enableCustomExplosion ?? false,
        customPath: oldFlags.options?.customExplosion ?? "",
    }
    await item.setFlag('autoanimations', 'animType', "t4")
    await item.setFlag('autoanimations', 'options.staticType', "target")
    await item.setFlag('autoanimations', 'animation', data.animation)
    await item.setFlag('autoanimations', 'options.variant', data.variant)
    await item.setFlag('autoanimations', 'color', data.color)
    await item.setFlag('autoanimations', 'options.repeat', data.repeat)
    await item.setFlag('autoanimations', 'options.delay', data.delay)
    await item.setFlag('autoanimations', 'options.scale', data.scale)
    await item.setFlag('autoanimations', 'options.enableCustom', data.enableCustom)
    await item.setFlag('autoanimations', 'options.customPath', data.customPath)
}

async function t10Merge(item) {
    const oldFlags = item.data?.flags?.autoanimations;

    const data = {
        animation: replaceName(oldFlags.explodeVariant),
        variant: oldFlags.options?.variant ?? "01",
        color: oldFlags.explodeColor ?? "white",
        repeat: oldFlags.options?.loops ?? 1,
        delay: oldFlags.options?.loopDelay ?? 250,
        scale: oldFlags.options?.scale ?? 2,
        enableCustom: oldFlags.options?.enableCustomExplosion ?? false,
        customPath: oldFlags.options?.customExplosion ?? "",
    }
    await item.setFlag('autoanimations', 'animType', "t4")
    await item.setFlag('autoanimations', 'options.staticType', "source")
    await item.setFlag('autoanimations', 'animation', data.animation)
    await item.setFlag('autoanimations', 'options.variant', data.variant)
    await item.setFlag('autoanimations', 'color', data.color)
    await item.setFlag('autoanimations', 'options.repeat', data.repeat)
    await item.setFlag('autoanimations', 'options.delay', data.delay)
    await item.setFlag('autoanimations', 'options.scale', data.scale)
    await item.setFlag('autoanimations', 'options.enableCustom', data.enableCustom)
    await item.setFlag('autoanimations', 'options.customPath', data.customPath)
}

async function t11Merge(item) {
    const oldFlags = item.data?.flags?.autoanimations;

    const data = {
        animation: replaceName(oldFlags.animName),
        variant: "01",
        color: replaceName(oldFlags.color),
        enableCustom: oldFlags.options?.enableCustom01 ?? false,
        customPath: oldFlags.options?.customPath01 ?? "",
        auraRadius: oldFlags.selfRadius ?? 3.5,
        opacity: oldFlags.auraOpacity ?? 0.75,
        ignoreTarget: oldFlags.options?.ignoreTarget ?? true,
    }
    await item.setFlag('autoanimations', 'animType', "t6")
    await item.setFlag('autoanimations', 'animation', data.animation)
    await item.setFlag('autoanimations', 'options.variant', data.variant)
    await item.setFlag('autoanimations', 'color', data.color)
    await item.setFlag('autoanimations', 'options.opacity', data.opacity)
    await item.setFlag('autoanimations', 'options.auraRadius', data.auraRadius)
    await item.setFlag('autoanimations', 'options.ignoreTarget', data.ignoreTarget)
    await item.setFlag('autoanimations', 'options.enableCustom', data.enableCustom)
    await item.setFlag('autoanimations', 'options.customPath', data.customPath)
}

async function t12Merge(item) {
    const oldFlags = item.data?.flags?.autoanimations;

    const data = {
        animation: "teleportation",
        name: replaceName(oldFlags.animName),
        variant: "01",
        color: replaceName(oldFlags.color),
        teleDist: oldFlags.auraOpacity ?? 0.75,
        hideTemplate: oldFlags.options?.hideTemplate ?? false,
        scale: oldFlags.options?.scale ?? 1,
        enableCustom: oldFlags.options?.enableCustom01 ?? false,
        customPath: oldFlags.options?.customPath01 ?? "",
    }
    await item.setFlag('autoanimations', 'animType', "t6")
    await item.setFlag('autoanimations', 'animation', "teleportation")
    await item.setFlag('autoanimations', 'options.name', data.name)
    await item.setFlag('autoanimations', 'options.variant', data.variant)
    await item.setFlag('autoanimations', 'color', data.color)
    await item.setFlag('autoanimations', 'options.teleDist', data.teleDist)
    await item.setFlag('autoanimations', 'options.hideTemplate', data.hideTemplate)
    await item.setFlag('autoanimations', 'options.scale', data.scale)
    await item.setFlag('autoanimations', 'options.enableCustom', data.enableCustom)
    await item.setFlag('autoanimations', 'options.customPath', data.customPath)

}
function replaceName(name) {
    if (!name) { return "" }
    const newName = name.replace(/\s+/g, '').toLowerCase();
    return newName;
}

async function explosions(item) {
    const explosion = {
        enable: true,
        below: oldFlags.exAnimLevel ?? false,
        radius: oldFlags.explodeRadius ?? 2,
        delay: oldFlags.explodeDelay ?? 500,
        animation: replaceName(oldFlags.explodeVariant),
        variant: "01",
        color: replaceName(oldFlags.explodeColor),
        enableCustom: oldFlags.options.enableCustomExplosion ?? false,
        customPath: oldFlags.options.customExplosion ?? "",
    }
    await item.setFlag('autoanimations', 'explosions.enable', explosion.enable)
    await item.setFlag('autoanimations', 'explosions.below', explosion.below)
    await item.setFlag('autoanimations', 'explosions.radius', explosion.radius)
    await item.setFlag('autoanimations', 'explosions.delay', explosion.delay)
    await item.setFlag('autoanimations', 'explosions.animation', explosion.animation)
    await item.setFlag('autoanimations', 'explosions.variant', explosion.variant)
    await item.setFlag('autoanimations', 'explosions.color', explosion.color)
    await item.setFlag('autoanimations', 'explosions.enableCustom', explosion.enableCustom)
    await item.setFlag('autoanimations', 'explosions.customPath', explosion.customPath)
}
*/