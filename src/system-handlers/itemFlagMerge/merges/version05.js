export async function version05(flags) {

    if (!flags) { 
        console.error("Automated Animations | Critical A-A Flag Errors found in version 05 merge. Removing A-A flags from item")
        await item.update({ 'flags.-=autoanimations': null })
        return;
    }
    const v4Flags = item.data?.flags?.autoanimations || {};
    //const v5Flags = {};

    if (v4Flags.killAnim && !v4Flags.macro?.enable && !v4Flags.audio?.a01?.enable) {
        // Item is Disabled, and no Macro or Sound is set to play.
        const v5Flags = {
            isEnabled: false,
            isCustomized: false,
            fromAmmo: false,
            version: 5,
        }
        return v5Flags;
        //await item.update({ 'flags.-=autoanimations': null })
        //await item.update({ 'flags.autoanimations': v5Flags })
        return;
    } else if (v4Flags.killAnim && (v4Flags.macro?.enable || v4Flags.audio?.a01?.enable)) {
        // Item is Disabled and either a Macro or Sound is set to play.
        //v5Flags.killAnim = false;
        //v5Flags.macro = v4Flags.macro || {};
        //v5Flags.audio = v4Flags.audio || {};
        //v5Flags.version = 5;
        const v5Flags = {
            isEnabled: false,
            isCustomized: false,
            fromAmmo: false,
            version: 5,
        }
        return v5Flags;
        //await item.update({ 'flags.-=autoanimations': null })
        //await item.update({ 'flags.autoanimations': v5Flags })
        return;
    } else if (!v4Flags.killAnim && !v4Flags.override) {
        // Item is enabled but not customized, delete flags
        return void 0;
        //await item.update({ 'flags.-=autoanimations': null })
        //await item.update({ 'flags.autoanimations': v5Flags })
        return;
    } else if (v4Flags.override && (!v4Flags.options?.enableCustom) && (!v4Flags.animType || !v4Flags.options?.menuType || !v4Flags.animation || !v4Flags.options?.variant || !v4Flags.color)) {
        // Item is customized but has critical errors in the Animation settings. Delete flags
        return void 0;
        //await item.update({ 'flags.-=autoanimations': null })
        //return;
    } else if (v4Flags.autoOverride?.enable) {
        // Item was set to old Auto-Override, delete flags
        return void 0;
        //await item.update({ 'flags.-=autoanimations': null })
        //return;        
    } else {
        const type = v4Flags.animType === "static" ? "ontoken" : v4Flags.animType === "template" ? "templatefx" : v4Flags.animType;
        const v5Flags = {};

        switch(type) {
            case "preset":
                await routePreset(v4Flags, v5Flags);
                break;
            default:
                await convertV6(v4Flags, v5Flags, type);
                break;
        }
        v5Flags.version = 5;
        return v5Flags;
        //await item.update({ 'flags.-=autoanimations': null })
        //await item.update({ 'flags.autoanimations': v5Flags })
    }
    
    async function convertV6(oldMO, newMO, type) {

        let { animLevel, animType, animation, audio, autoOverride, color, explosions, killAnim, 
            levels3d, macro, meleeSwitch, options, override, preview, sourceToken, targetToken } = oldMO
        
        newMO.id = uuidv4();
        newMO.isEnabled = true;
        newMO.isCustomized = true;
        newMO.fromAmmo = options?.ammo ?? false;
        //v5Flags.label = name;

        if (type !== "aura" && type !== "templatefx") {
            newMO.levels3d = await new3d(oldMO);
        }

        newMO.macro = macro || {};

        if (type === "melee") {
            newMO.meleeSwitch = compileMeleeSwitch(oldMO);
        }

        newMO.menu = type;

        newMO.primary = {
            options: convertOptionsV6(oldMO, type),
            sound: {
                delay: oldMO.audio?.a01?.delay ?? 0,
                enable: oldMO.audio?.a01?.enable ?? false,
                startTime: oldMO.audio?.a01?.startTime ?? 0,
                volume: oldMO.audio?.a01?.volume ?? 1,
                file: oldMO.audio?.a01?.file,
            },
            video: {
                dbSection: setDBSection(type),
                menuType: options?.menuType,
                animation,
                variant: options?.variant,
                color,
                enableCustom: options?.enableCustom ?? false,
                customPath: options?.customPath ?? "",
            },
        }

        newMO.secondary = await convertExplosionV6(explosions, audio, oldMO)

        const primaryVideo = newMO.primary.video;
        if (!primaryVideo.menuType || !primaryVideo.animation || !primaryVideo.variant || !primaryVideo.color) {
            resetVideo(newMO.primary.video, type)
        }

        newMO.soundOnly = {
            sound: {
                enable: false,
                delay: oldMO.audio?.a01?.delay ?? 0,
                startTime: oldMO.audio?.a01?.startTime ?? 0,
                volume: oldMO.audio?.a01?.volume ?? 1,
                file: oldMO.audio?.a01?.file,
            }
        }

        newMO.source = convertExtraFX(sourceToken, audio, "source");
        newMO.target = convertExtraFX(targetToken, audio, "target");
        return newMO;
    }

    function convertExtraFX(extraFX, audio, section) {
        const oldData = extraFX || {};
        const sound = audio || {};
        const type = section === "source" ? "s01" : "t01";
        const data = {
            options: {
                addTokenWidth:false,
                delay: section === "source" ? oldData.delayAfter ?? 0 : oldData.delayStart ?? 0,
                elevation: oldData.animLevel ? 0 : 1000,
                fadeIn: 250,
                fadeOut: 500,
                isWait: true,
                isMasked: false,
                isRadius: false,
                opacity: oldData.opacity ?? 1,
                repeat: oldData.loops ?? 1,
                repeatDelay: oldData.loopDelay ?? 250,
                size: oldData.scale ?? 1,
                zIndex: 1,
            },
            sound: {
                delay: sound[type]?.delay ?? 0,
                enable: sound[type]?.enable ?? false,
                startTime: sound[type]?.startTime ?? 0,
                volume: sound[type]?.volume ?? 1,
                file: sound[type]?.file,
            },
            video: {
                dbSection: "static",
                menuType: oldData.menuType,
                animation: oldData.animation,
                variant: oldData.variant,
                color: oldData.color,
                enableCustom: oldData.enableCustom ?? false,
                customPath: oldData.customPath ?? "",
            }
        }
        let video = data.video;
        if (!video.menuType || !video.animation || !video.variant || !video.color) {
            resetVideo(data.video, "static")
        }
    }

    function compileMeleeSwitch(oldMO) {
        let oldData = oldMO.meleeSwitch || {};
        let oldSound = oldMO.audio || {};
        const data = {
            video: {
                dbSection: "range",
                menuType: oldData.menuType,
                animation: oldData.animation,
                variant: oldData.variant,
                color: oldData.color,
                enableCustom: false,
                customPath: "",
            },
            sound: {
                delay: oldSound.audio?.a02?.delay ?? 0,
                enable: oldSound.audio?.a02?.enable ?? false,
                startTime: oldSound.audio?.a02?.startTime ?? 0,
                volume: oldSound.audio?.a02?.volume ?? 1,
                file: oldSound.audio?.a02?.file,
            },
            options: {
                detect: oldData.detect || "automatic",
                range: oldData.range || 2,
                isReturning: oldData.returning ?? false,
                switchType: oldData.switchType || "on",
            }
        }
        const switchVideo = data.video;
        if (!switchVideo.menuType || !switchVideo.animation || !switchVideo.variant || !switchVideo.color) {
            resetVideo(data.video, "range")
        }
        return data;
    }

    function convertOptionsV6(oldMO, type) {
        const data = {};
        const options = oldMO.options || {};
        switch (type) {
            case "melee":
                data.isWait = false;
                data.delay = 0;
                data.elevation = oldMO.animLevel ? 0 : 1000;
                data.opacity = 1;
                data.repeat = options.repeat ?? 1;
                data.repeatDelay = options.delay ?? 0;
                data.size = options.scale ?? 1;
                data.zIndex = 1;
                break;
            case "range":
                data.isWait = false;
                data.delay = 0;
                data.elevation = oldMO.below ? 0 : 1000;
                data.onlyX = oldMO.onlyX ?? false;
                data.opacity = oldMO.opacity ?? 1;
                data.repeat = oldMO.repeat ?? 1;
                data.repeatDelay = oldMO.delay ?? 0;
                data.returning = false;
                data.zIndex = oldMO.zIndex ?? 1;
                break;
            case "ontoken":
                data.isWait = false;
                data.delay = 0;
                data.elevation = oldMO.below ? 0 : 1000;
                data.fadeIn = 250;
                data.fadeOut = 500;
                data.isMasked = false;
                data.isRadius = false;
                data.opacity = oldMO.opacity ?? 1;
                data.persistent = false;
                data.repeat = oldMO.repeat ?? 1;
                data.repeatDelay = oldMO.delay ?? 0;
                data.size = oldMO.scale ?? 1;
                data.playOn = oldMO.staticType === "targetDefault" ? "default" : oldMO.staticType === "sourceTarget" ? "both" : !oldMO.staticType ? "default" : oldMO.staticType;
                data.unbindAlpha = oldMO.unbindAlpha ?? false;
                data.unbindVisibility = oldMO.unbindVisibility ?? false;
                data.zIndex = oldMO.zIndex ?? 1;
                break;
            case "templatefx":
                data.isWait = false;
                data.delay = 0;
                data.elevation = oldMO.below ? 0 : 1000;
                data.isMasked = false;
                data.occlusionAlpha = oldMO.occlusionAlpha ?? 0;
                data.occlusionMode = oldMO.occlusionMode ?? 0;
                data.opacity = oldMO.opacity ?? 1;
                data.persistType = oldMO.persistType ?? 1;
                data.persistent = oldMO.persist ?? false;
                data.removeTemplate = oldMO.removeTemplate ?? 1;
                data.repeat = oldMO.repeat ?? 1;
                data.repeatDelay = oldMO.delay ?? 0;
                data.scaleX = oldMO.scaleX ?? 1;
                data.scaleY = oldMO.scaleY ?? 1;
                data.zIndex = oldMO.zIndex ?? 1;
                break;
            case "aura":
                data.isWait = false;
                data.delay = 0;
                data.addTokenWidth = oldMO.addTokenWidth ?? false;
                data.radius = oldMO.auraRadius ?? 3;
                data.elevation = oldMO.below ? 0 : 1000;
                data.ignoreTarget = oldMO.ignoretargets ?? false;
                data.isMasked = false;
                data.opacity = oldMO.opacity ?? 1;
                data.unbindAlpha = oldMO.unbindAlpha ?? false;
                data.unbindVisibility = oldMO.unbindVisibility ?? false;
                data.zIndex = oldMO.zIndex ?? 1;
                break;
        }
        return data;
    }

    async function new3d(oldData) {
        let newData = oldData.levels3d || {};
        let {type, addExplosion, ...rest} = newData;
        const data3d = {
            enable: type ? true : false,
            type: type || "",
            data: rest || {},
            explosion: addExplosion || {enable: false},
            sound: {enable: false},
        };
        return data3d;
    }

    function resetVideo(data, type) {
        switch (type) {
            case "melee":
                data.menuType = "weapon";
                data.animation = "dagger";
                data.variant = "01";
                data.color = "white";
                break;
            case "range":
                data.menuType = "weapon";
                data.animation = "arrow";
                data.variant = "regular";
                data.color = "regular";
                break;
            case "templatefx":
                data.menuType = "circle";
                data.animation = "calllightning";
                data.variant = "01";
                data.color = "blue";
                break;
            default:
                data.menuType = "spell";
                data.animation = "curewounds";
                data.variant = "01";
                data.color = "blue";
            }
    }

    async function convertExplosionV6(exp, audio, oldMO) {
        
        let data = {
            enable: exp?.enable ?? false,
            options: {
                elevation: exp?.below ? 0 : 1000,
                delay: exp?.delay ?? 250,
                isMasked: exp?.isMasked ?? false,
                isRadius: true,
                isWait: false,
                opacity: 1,
                size: exp?.radius ?? 1.5,
                repeat: oldMO.options?.repeat ?? 1,
                repeatDelay: oldMO.delay ?? 0,
                zIndex: 1,
            },
            sound: {
                delay: audio?.e01?.delay ?? 0,
                enable: audio?.e01?.enable ?? false,
                file: audio?.e01?.file ?? "",
                startTime: audio?.e01?.startTime ?? 0,
                volume: audio?.e01?.volume ?? 1,
            },
            video: {
                dbSection: "static",
                menuType: exp?.menuType,
                animation: exp?.animation,
                variant: exp?.variant,
                color: exp?.color,
                enableCustom: exp?.enableCustom ?? false,
                customPath: exp?.customPath ?? "",
            }
        };
        const video = data.video;
        if (!video.menuType || !video.animation || !video.variant || !video.color) {
            data.video.menuType = "spell";
            data.video.animation = "curewounds";
            data.video.variant = "01";
            data.video.color = "blue";
        }
        return data;
    }

    /**
     * Preset Conversions
     * Bardic Inspiration, Bless, Shield, Hunters Mark and Sneak Attack are removed
     */
    async function routePreset(oldMO, newMO) {
        //const oldMO = presetObject[i]
        //newMenu.preset[i] = {};
        //const newMO = newMenu.preset[i];
        //let newMO = {};
        let current;
        switch (oldMO.animation) {
            case "teleportation":
                current = await updateTele(oldMO, newMO);
                return current;
            case "dualattach":
                current = await updateDAttach(oldMO, newMO);
                return current;
            case "fireball":
                current = await updateFireball(oldMO, newMO);
                return current;
            case "thunderwave":
                current = await updateThunderwave(oldMO, newMO);
                return current;
            default:
                return "deleteFlags"
        }
    }

    async function updateDAttach(oldData, newData) {

        let { animLevel, animType, animation, audio, color, killAnim, macro, options, override, sourceToken, targetToken } = oldData;

        newData.id = uuidv4();
        newMO.isEnabled = true;
        newMO.isCustomized = true;
        newMO.fromAmmo = options?.ammo ?? false;
        newData.menu = "preset"
        newData.presetType = "dualattach";

        
        newData.macro = macro || {};
        //newData.label = name;
        newData.data = {
            video: {
                dbSection: "range",
                menuType: options?.menuType,
                animation: options?.name,
                variant: options?.variant,
                color,
                enableCustom: options?.enableCustom ?? false,
                customPath: options?.customPath ?? "",
            },
            options: {
                playbackRate: options?.playbackRate,
                onlyX: options?.onlyX ?? false,
                elevation: animLevel ? 0 : 1000,
            },
            sound: {
                delay: audio?.a01?.delay ?? 0,
                enable: audio?.a01?.enable ?? false,
                startTime: audio?.a01?.startTime ?? 0,
                volume: audio?.a01?.volume ?? 1,
            }
        };
        if (!newData.data.menuType || !newData.data.animation || !newData.data.variant || !newData.data.color) {
            resetVideo(newData.data, "range")
        }
        newData.soundOnly = {
            sound: {
                enable: false,
                delay: oldData.audio?.a01?.delay ?? 0,
                startTime: oldData.audio?.a01?.startTime ?? 0,
                volume: oldData.audio?.a01?.volume ?? 1,
                file: oldData.audio?.a01?.file,
            }
        }
        return newData;
    }

    async function updateFireball(oldData, newData) {
        newData.data = {};
        const root = newData.data;
        let { animLevel, animType, animation, audio, killAnim, macro, options, override, sourceToken, targetToken } = oldData;
        
        let fireballData = oldData.fireball || {};
        let {afterEffect, afterEffectPath, ex01Type, ex02Type, explosion01, explosion01Color, explosion01Delay, explosion01Repeat, 
            explosion01Scale, explosion01Variant, explosion02, explosion02Color, explosion02Delay, explosion02Repeat, explosion02Scale,
            explosion02Variant, projectile, projectileColor, projectileDelay, projectileRepeat, projectileVariant, rangeType, wait01, 
            wait02, wait03} = fireballData;

        newData.id = uuidv4();
        newMO.isEnabled = true;
        newMO.isCustomized = true;
        newMO.fromAmmo = options?.ammo ?? false;
        newData.menu = "preset"
        newData.presetType = "proToTemp";
    
        //root.audio = audio || {};
        newData.macro = macro || {};

        //root.removeTemplate = removeTemplate;
        root.projectile = {
            dbSection: "range",
            menuType: rangeType,
            animation: projectile,
            variant: projectileVariant,
            color: projectileColor,
            options: {
                repeat: projectileRepeat,
                repeatDelay: projectileDelay,
                wait: wait01,
                elevation: animLevel ? 0 : 1000,    
            },
            sound: {
                enable: audio?.a01?.enable ?? false,
                file: audio?.a01?.file ?? "",
                volume: audio?.a01?.volume ?? 1,
                startTime: audio?.a01?.startTime ?? 0,
                delay: audio?.a01?.delay ?? 0,
            }
        }
        if (!root.projectile.menuType || !root.projectile.animation || !root.projectile.variant || !root.projectile.color) {
            resetVideo(root.projectile, "range")
        }
        root.preExplosion = {
            dbSection: "static",
            menuType: ex01Type,
            animation: explosion01,
            variant: explosion01Variant,
            color: explosion01Color,
            options: {
                repeat: explosion01Repeat,
                repeatDelay: explosion01Delay,
                scale: explosion01Scale,
                wait: wait02,
                elevation: animLevel ? 0 : 1000,
            },
            sound: {
                enable: audio?.e01?.enable ?? false,
                file: audio?.e01?.file ?? "",
                volume: audio?.e01?.volume ?? 1,
                startTime: audio?.e01?.startTime ?? 0,
                delay: audio?.e01?.delay ?? 0,
            }
        }
        if (!root.preExplosion.menuType || !root.preExplosion.animation || !root.preExplosion.variant || !root.preExplosion.color) {
            root.preExplosion.enable = false;
            resetVideo(root.explosion01, "static")
        } else { root.preExplosion.enable = true }
        root.explosion = {
            dbSection: "static",
            menuType: ex02Type,
            animation: explosion02,
            variant: explosion02Variant,
            color: explosion02Color,
            options: {
                elevation: below ? 0 : 1000,
                repeat: explosion02Repeat,
                repeatDelay: explosion02Delay,
                scale: explosion02Scale,
                wait: wait03,
            },
            sound: {
                enable: audio?.e02?.enable ?? false,
                file: audio?.e02?.file ?? "",
                volume: audio?.e02?.volume ?? 1,
                startTime: audio?.e02?.startTime ?? 0,
                delay: audio?.e02?.delay ?? 0,
            }
        }
        if (!root.explosion.menuType || !root.explosion.animation || !root.explosion.variant || !root.explosion.color) {
            resetVideo(root.explosion, "range")
        }
        root.afterImage = {
            enable: afterEffect,
            customPath: afterEffectPath,
            options: {
                elevation: 0,
                persistent: false,
                scale: 1,
            }
        }
        newData.soundOnly = {
            sound: {
                enable: false,
                delay: oldData.audio?.a01?.delay ?? 0,
                startTime: oldData.audio?.a01?.startTime ?? 0,
                volume: oldData.audio?.a01?.volume ?? 1,
                file: oldData.audio?.a01?.file,
            }
        }
        return newData;
    }

    async function updateTele(oldData, newData) {
        newData.data = {};
        const root = newData.data;
        let { animLevel, animType, animation, audio, color, color02, killAnim, macro, options, override } = oldData;

        newData.id = uuidv4();
        newMO.isEnabled = true;
        newMO.isCustomized = true;
        newMO.fromAmmo = options?.ammo ?? false;
        newData.menu = "preset"
        newData.presetType = "teleportation";

        newData.macro = macro || {};

        root.options = {
            hideFromPlayers: false,
            range: options?.teleDist ?? 30,
            measureType: options?.measureType ?? "alternating",
        }
        root.sound = {
            delay: audio?.a01?.delay ?? 0,
            enable: audio?.a01?.enable ?? false,
            startTime: audio?.a01?.startTime ?? 0,
            volume: audio?.a01?.volume ?? 1,
        }
        root.start = {
            dbSection: "static",
            menuType: options?.menuType,
            animation: options?.name,
            variant: options?.variant,
            color: color,
            enableCustom: options.enableCustom ?? false,
            customPath: options.customPath ?? "",
            options: {
                elevation: animLevel ? 0 : 1000,
                size: options?.scale || 1,
            }
        }
        root.between = {
            dbSection: "range",
            enable: false,
            menuType: "weapon",
            animation: "arrow",
            variant: "regular",
            color: "regular",
            options: {

            }
        }
        root.end = {
            dbSection: "static",
            menuType: options?.menuType02,
            animation: options?.name02,
            variant: options?.variant02,
            color: color02,
            enableCustom: options?.enableCustom02 ?? false,
            customPath: options?.customPath02 ?? "",
            options: {
                elevation: animLevel ? 0 : 1000,
                size: options?.scale02 ?? 1,
                delay: options?.delay ?? 500,
            }
        }
        if (!root.start.menuType || !root.start.animation || !root.start.variant || !root.start.color) {
            resetVideo(root.start, "static")
        }
        if (!root.end.menuType || !root.end.animation || !root.end.variant || !root.end.color) {
            resetVideo(root.end, "static")
        }
        newData.soundOnly = {
            sound: {
                enable: false,
                delay: oldData.audio?.a01?.delay ?? 0,
                startTime: oldData.audio?.a01?.startTime ?? 0,
                volume: oldData.audio?.a01?.volume ?? 1,
                file: oldData.audio?.a01?.file,
            }
        }
        return newData;
    }

    async function updateThunderwave(oldData, newData) {
        let { animLevel, animType, animation, audio, color, killAnim, macro, options, override } = oldData;

        newData.id = uuidv4();
        newMO.isEnabled = true;
        newMO.isCustomized = true;
        newMO.fromAmmo = options?.ammo ?? false;
        newData.menu = "preset"
        newData.presetType = "thunderwave";

        newData.macro = macro || {};
        newData.data = {
            menuType: "spell",
            animation: "thunderwave",
            variant: "mid",
            color: color || "blue",
            options: {
                elevation: animLevel ? 0 : 1000,
                repeat: options?.repeat ?? 1,
                repeatDelay: options?.delay ?? 250,
                scaleX: options?.scaleX ?? 1,
                scaleY: options?.scaleY ?? 1,
                opacity: options?.opacity ?? 1,
                removeTemplate: options?.removeTemplate ?? false,
            }, 
            sound: {
                enable: audio?.a01?.enable ?? false,
                file: audio?.a01?.file ?? "",
                volume: audio?.a01?.volume ?? 1,
                startTime: audio?.a01?.startTime ?? 0,
                delay: audio?.a01?.delay ?? 0,
            }
        };
        newData.soundOnly = {
            sound: {
                enable: false,
                delay: oldData.audio?.a01?.delay ?? 0,
                startTime: oldData.audio?.a01?.startTime ?? 0,
                volume: oldData.audio?.a01?.volume ?? 1,
                file: oldData.audio?.a01?.file,
            }
        }
        return newData;
    }































    /*
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
        root.scale = v5Flags.options?.scale || 1;
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

        let { color, options, audio, macro, sourceToken, targetToken, animLevel, scale } = v4Flags;
        if (sourceToken?.enable) { convertSource(sourceToken) };
        if (targetToken?.enable) { convertTarget(targetToken) };

        v5Flags.audio = audio || {};
        v5Flags.macro = macro || {};
        root.below = animLevel;
        root.scale = scale || 1;
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
        root.customPath = customPath || "";
        root.playbackRate = playbackRate || 1;
        root.onlyX = onlyX || false;
        root.below = animLevel || false;
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
        const root = preset.huntersmark;

        let { audio, macro, sourceToken, targetToken, options, animLevel } = v4Flags;
        let { variant, scale, persistent, anchorX, anchorY, color } = options;
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
    */
    console.warn(`DEBUG | Automated Animations | Version 5 Flag Migration Complete`, v5Flags)
}