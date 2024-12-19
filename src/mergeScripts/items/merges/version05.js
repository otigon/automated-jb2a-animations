import { Hashing } from "#runtime/util";
import { custom_warning } from "../../../constants/constants";

export async function version05(flags, isActiveEffect) {

    if (!flags) {
        console.error("Automated Animations | Critical A-A Flag Errors found in version 05 merge. Removing A-A flags from item")
        await item.update({ 'flags.-=autoanimations': null })
        return;
    }
    const v4Flags = flags || {};
    //const v5Flags = {};

    if (v4Flags.killAnim && !v4Flags.macro?.enable && !v4Flags.audio?.a01?.enable) {
        // Item is Disabled, and no Macro or Sound is set to play.
        const v5Flags = {
            isEnabled: false,
            isCustomized: false,
            fromAmmo: false,
            version: 5,
        }
        custom_warning("Item is Disabled, and no Macro or Sound is set to play")
        return v5Flags;
        //await item.update({ 'flags.-=autoanimations': null })
        //await item.update({ 'flags.autoanimations': v5Flags })
        return;
    } else if (!v4Flags.killAnim && !v4Flags.override) {
        // Item is enabled but not customized, delete flags
        custom_warning("Item is enabled but not customized, delete flags")
        return void 0;
        //await item.update({ 'flags.-=autoanimations': null })
        //await item.update({ 'flags.autoanimations': v5Flags })
        return;
    } else if (v4Flags.override && v4Flags.animType !== "preset" && (!v4Flags.options?.enableCustom) && (!v4Flags.animType || !v4Flags.options?.menuType || !v4Flags.animation || !v4Flags.options?.variant || !v4Flags.color)) {
        // Item is customized but has critical errors in the Animation settings. Delete flags
        custom_warning("Item is customized but has critical errors in the Primary Animation settings. Delete flags")
        return void 0;
        //await item.update({ 'flags.-=autoanimations': null })
        //return;
    } else if (v4Flags.autoOverride?.enable) {
        // Item was set to old Auto-Override, delete flags
        custom_warning("Item was set to old Auto-Override, delete flags")
        return void 0;
        //await item.update({ 'flags.-=autoanimations': null })
        //return;
    }  else if (v4Flags.killAnim && (v4Flags.macro?.enable || v4Flags.audio?.a01?.enable)) {
        // Item is Disabled and either a Macro or Sound is set to play.
        const v5Flags = {};
        await convertV6(v4Flags, v5Flags, "melee");
        if (v4Flags.macro?.enable) {
            v5Flags.macro.playWhen = "2"
        }
        if (v4Flags.audio?.a01?.enable) {
            v5Flags.soundOnly.sound = v5Flags.primary.sound;
        }
        custom_warning("Item was Disabled and either a Macro or Sound is set to play, reorganizing flags")
        return v5Flags;
    } else {
        const type = v4Flags.animType === "static" ? "ontoken" : v4Flags.animType === "template" ? "templatefx" : v4Flags.animType;
        const v5Flags = {};
        if (isActiveEffect) {
            await routeActiveEffect(v4Flags, v5Flags);
        } else {
            switch(type) {
                case "preset":
                    await routePreset(v4Flags, v5Flags);
                    break;
                default:
                    await convertV6(v4Flags, v5Flags, type);
                    break;
            }
        }
        v5Flags.version = 5;
        custom_warning(`Automated Animations | Version 5 Flag Migration Complete`, false, v5Flags)
        return v5Flags;
    }

    async function convertV6(oldMO, newMO, type) {

        let { animLevel, animType, animation, audio, autoOverride, color, explosions, killAnim,
            levels3d, macro, meleeSwitch, options, override, preview, sourceToken, targetToken } = oldMO

        newMO.id = Hashing.uuidv4();
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
            sound: setSound(audio, "a01"),
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
            sound: setSound({}, "a01", true)
        }
        newMO.source = convertSourceFX(sourceToken, audio, "source");
        newMO.target = convertTargetFX(targetToken, audio, "target");
        return newMO;
    }

    function setSound(audio = {}, section = "a01", rebase = false) {
        if (rebase) {
            return {
                delay: 0,
                enable: false,
                file: "",
                startTime: 0,
                repeat: 1,
                repeatDelay: 250,
                volume: 1,
            }
        } else {
            return {
                delay: audio?.[section]?.delay ?? 0,
                enable: audio?.[section]?.enable ?? false,
                file: audio?.[section]?.file ?? "",
                startTime: audio?.[section]?.startTime ?? 0,
                volume: audio?.[section]?.volume ?? 1,
                repeat: 1,
                repeatDelay: 250,
            }
        }
    }

    function setDBSection(type) {
        return type === "aura" || type === "ontoken" ? "static" : type;
    }

    function convertSourceFX(extraFX, audio, section) {
        const oldData = extraFX || {};
        const data = {
            enable: oldData.enable ?? false,
            options: {
                addTokenWidth:false,
                anchor: "0.5",
                delay: oldData.delayAfter ?? 0,
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
            sound: setSound(audio, "s01"),
            video: {
                dbSection: "static",
                menuType: oldData.menuType,
                animation: oldData.name,
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
        return data;
    }

    function convertTargetFX(extraFX, audio, section) {
        const oldData = extraFX || {};
        const data = {
            enable: oldData.enable ?? false,
            options: {
                addTokenWidth:false,
                anchor: "0.5",
                delay: oldData.delayStart ?? 0,
                elevation: oldData.animLevel ? 0 : 1000,
                fadeIn: 250,
                fadeOut: 500,
                isMasked: false,
                isRadius: false,
                opacity: oldData.opacity ?? 1,
                persistent: oldData.persistent ?? false,
                repeat: oldData.loops ?? 1,
                repeatDelay: oldData.loopDelay ?? 250,
                size: oldData.scale ?? 1,
                unbindAlpha: false,
                unbindVisibility: false,
                zIndex: 1,
            },
            sound: setSound(audio, "t01"),
            video: {
                dbSection: "static",
                menuType: oldData.menuType,
                animation: oldData.name,
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
        return data;
    }

    function compileMeleeSwitch(oldMO) {
        let oldData = oldMO.meleeSwitch || {};
        let audio = oldMO.audio || {};
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
            sound: setSound(audio, "a02"),
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
                data.delay = 0;
                data.elevation = oldMO.animLevel ? 0 : 1000;
                data.isWait = false;
                data.opacity = 1;
                data.repeat = options.repeat ?? 1;
                data.repeatDelay = options.delay ?? 0;
                data.size = options.scale ?? 1;
                data.zIndex = 1;
                break;
            case "range":
                data.delay = 0;
                data.elevation = oldMO.below ? 0 : 1000;
                data.isReturning = false;
                data.isWait = false;
                data.onlyX = options.onlyX ?? false;
                data.opacity = options.opacity ?? 1;
                data.repeat = options.repeat ?? 1;
                data.repeatDelay = options.delay ?? 0;
                data.zIndex = options.zIndex ?? 1;
                break;
            case "ontoken":
                data.addTokenWidth = false;
                data.anchor = "0.5";
                data.delay = 0;
                data.elevation = oldMO.below ? 0 : 1000;
                data.fadeIn = 250;
                data.fadeOut = 500;
                data.isMasked = false;
                data.isRadius = false;
                data.isWait = false;
                data.opacity = options.opacity ?? 1;
                data.persistent = options.persistent ?? false;
                data.playOn = options.staticType === "targetDefault" ? "default" : options.staticType === "sourceTarget" ? "both" : !options.staticType ? "default" : options.staticType;
                data.repeat = options.repeat ?? 1;
                data.repeatDelay = options.delay ?? 0;
                data.size = options.scale ?? 1;
                data.unbindAlpha = options.unbindAlpha ?? false;
                data.unbindVisibility = options.unbindVisibility ?? false;
                data.zIndex = options.zIndex ?? 1;
                break;
            case "templatefx":
                data.delay = 0;
                data.elevation = oldMO.below ? 0 : 1000;
                data.isMasked = false;
                data.isWait = false;
                data.occlusionAlpha = options.occlusionAlpha ?? 0;
                data.occlusionMode = options.occlusionMode ?? 0;
                data.opacity = options.opacity ?? 1;
                data.persistent = options.persistent ?? false;
                data.persistType = options.persistType || "sequencerground";
                data.removeTemplate = options.removeTemplate ?? 1;
                data.repeat = options.repeat ?? 1;
                data.repeatDelay = options.delay ?? 0;
                data.rotate = 0;
                data.scale = `${options.scaleX ?? 1}, ${options.scaleY ?? 1}`
                //data.scaleX = options.scaleX ?? 1;
                //data.scaleY = options.scaleY ?? 1;
                data.zIndex = options.zIndex ?? 1;
                break;
            case "aura":
                data.addTokenWidth = options.addTokenWidth ?? false;
                data.alpha = false,
                data.alphaMax = 0.5,
                data.alphaMin = -0.5,
                data.alphaDuration = 1000,
                data.breath = false,
                data.breathMax = 1.05,
                data.breathMin = 0.95,
                data.breathDuration = 1000,
                data.delay = 0;
                data.elevation = options.below ? 0 : 1000;
                data.fadeIn = 250;
                data.fadeOut = 500;
                data.playOn = options.ignoreTarget ? "source" : "default";
                data.isRadius = true;
                data.isWait = false;
                data.opacity = options.opacity ?? 1;
                data.size = options.auraRadius ?? 3;
                data.tint = false,
                data.tintColor = "#FFFFFF",
                data.tintSaturate = 0,
                data.unbindAlpha = options.unbindAlpha ?? false;
                data.unbindVisibility = options.unbindVisibility ?? false;
                data.zIndex = options.zIndex ?? 1;
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
            secondary: {
                enable: addExplosion?.enable ?? false,
                data: addExplosion || {}
            },
            sound: setSound({}, "a01", true),
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
                addTokenWidth: false,
                anchor: "0.5",
                delay: exp?.delay ?? 250,
                elevation: exp?.below ? 0 : 1000,
                fadeIn: 250,
                fadeOut: 500,
                isMasked: exp?.isMasked ?? false,
                isRadius: true,
                isWait: false,
                opacity: 1,
                repeat: oldMO.options?.repeat ?? 1,
                repeatDelay: oldMO.delay ?? 0,
                size: exp?.radius ?? 1.5,
                zIndex: 1,
            },
            sound: setSound(audio, "e01"),
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

        newData.id = Hashing.uuidv4();
        newData.isEnabled = true;
        newData.isCustomized = true;
        newData.fromAmmo = options?.ammo ?? false;
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
                opacity: 1,
            },
            sound: setSound(audio, "a01"),
        };
        if (!newData.data.video.menuType || !newData.data.video.animation || !newData.data.video.variant || !newData.data.video.color) {
            resetVideo(newData.data.video, "range")
        }
        newData.soundOnly = {
            sound: setSound({}, "a01", true)
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

        newData.id = Hashing.uuidv4();
        newData.isEnabled = true;
        newData.isCustomized = true;
        newData.fromAmmo = options?.ammo ?? false;
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
                repeat: projectileRepeat ?? 1,
                repeatDelay: projectileDelay ?? 250,
                wait: wait01,
                elevation: animLevel ? 0 : 1000,
                removeTemplate: oldData?.options?.removeTemplate ?? false,
            },
            sound: setSound(audio, "a01"),
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
            sound: setSound(audio, "e01"),
        }
        if (!root.preExplosion.menuType || !root.preExplosion.animation || !root.preExplosion.variant || !root.preExplosion.color) {
            root.preExplosion.enable = false;
            resetVideo(root.preExplosion, "static")
        } else { root.preExplosion.enable = true }
        root.explosion = {
            dbSection: "static",
            menuType: ex02Type,
            animation: explosion02,
            variant: explosion02Variant,
            color: explosion02Color,
            options: {
                elevation: animLevel ? 0 : 1000,
                repeat: explosion02Repeat,
                repeatDelay: explosion02Delay,
                scale: explosion02Scale,
                wait: -500,
            },
            sound: setSound(audio, "e02"),
        }
        if (!root.explosion.menuType || !root.explosion.animation || !root.explosion.variant || !root.explosion.color) {
            resetVideo(root.explosion, "static")
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
            sound: setSound({}, "a01", true),
        }

        newData.secondary = {
            enable: false,
            options: {
                addTokenWidth: false,
                delay: 250,
                elevation: 1000,
                fadeIn: 250,
                fadeOut: 500,
                isMasked: false,
                isRadius: true,
                isWait: false,
                opacity: 1,
                repeat: 1,
                repeatDelay: 0,
                size: 1.5,
                zIndex: 1,
            },
            sound: setSound(audio, "e01"),
            video: {
                dbSection: "static",
                menuType: "spell",
                animation: "curewounds",
                variant: "01",
                color: "blue",
                enableCustom: false,
                customPath: "",
            }
        };

        newData.target = newExtraFX(true);

        return newData;
    }

    async function updateTele(oldData, newData) {
        newData.data = {};
        const root = newData.data;
        let { animLevel, animType, animation, audio, color, color02, killAnim, macro, options, override } = oldData;

        newData.id = Hashing.uuidv4();
        newData.isEnabled = true;
        newData.isCustomized = true;
        newData.fromAmmo = options?.ammo ?? false;
        newData.menu = "preset"
        newData.presetType = "teleportation";

        newData.macro = macro || {};

        root.options = {
            alpha: 0,
            delayFade: 750,
            delayMove: 1000,
            delayReturn:  options?.delay ?? 250,
            hideFromPlayers: options?.hideFromPlayers ?? false,
            measureType: options?.measureType ?? "alternating",
            range: options?.teleDist ?? 30,
            speed: 120,
            teleport: true,
        }
        root.sound = setSound(audio, "a01");
        root.start = {
            dbSection: "static",
            enable: true,
            menuType: options?.menuType,
            animation: options?.name,
            variant: options?.variant,
            color: color,
            enableCustom: options.enableCustom ?? false,
            customPath: options.customPath ?? "",
            options: {
                delay: 0,
                elevation: animLevel ? 0 : 1000,
                fadeIn: 250,
                fadeOut: 250,
                isMasked: false,
                opacity: 1,
                isRadius: false,
                size: options?.scale || 1.5,
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
                delay: 0,
                enable: false,
                elevation: 1000,
                opacity: 1,
                playbackRate: 1,
            }
        }
        root.end = {
            dbSection: "static",
            enable: true,
            menuType: options?.menuType02,
            animation: options?.name02,
            variant: options?.variant02,
            color: color02,
            enableCustom: options?.enableCustom02 ?? false,
            customPath: options?.customPath02 ?? "",
            options: {
                delay: 500,
                elevation: animLevel ? 0 : 1000,
                fadeIn: 250,
                fadeOut: 250,
                isMasked: false,
                isRadius: false,
                opacity: 1,
                size: options?.scale02 ?? 1,
            }
        }
        if (!root.start.menuType || !root.start.animation || !root.start.variant || !root.start.color) {
            resetVideo(root.start, "static")
        }
        if (!root.end.menuType || !root.end.animation || !root.end.variant || !root.end.color) {
            resetVideo(root.end, "static")
        }
        newData.soundOnly = {
            sound: setSound({}, "a01", true)
        }
        return newData;
    }

    async function updateThunderwave(oldData, newData) {
        let { animLevel, animType, animation, audio, color, killAnim, macro, options, override } = oldData;

        newData.id = Hashing.uuidv4();
        newData.isEnabled = true;
        newData.isCustomized = true;
        newData.fromAmmo = options?.ammo ?? false;
        newData.menu = "preset"
        newData.presetType = "thunderwave";

        newData.macro = macro || {};
        newData.data = {
            video: {
                dbSection: "templatefx",
                menuType: "square",
                animation: "thunderwave",
                variant: "mid",
                color: color || "blue",
            },
            options: {
                elevation: animLevel ? 0 : 1000,
                repeat: options?.repeat ?? 1,
                repeatDelay: options?.delay ?? 250,
                opacity: options?.opacity ?? 1,
                removeTemplate: options?.removeTemplate ?? false,
            },
            sound: setSound(audio, "a01"),
        };
        newData.soundOnly = {
            sound: setSound({}, "a01", true)
        }
        return newData;
    }

    /**
     * Active Effect Conversions
     * Shield and Bless converted to OnToken menu
     */
     async function routeActiveEffect(oldMO, newMO) {

        let current;
        switch (oldMO.animType) {
            case "static":
                current = await convertAEOnToken(oldMO, newMO);
                return current;
            case "aura":
                current = await convertAEAura(oldMO, newMO);
                return current;
            case "preset":
                switch(oldMO.animation) {
                    case "bless":
                        current = await convertAEBless(oldMO, newMO);
                        return current;
                    case "shieldspell":
                        current = await convertAEShield(oldMO, newMO);
                        return current;
                }

        }
    }

    function newExtraFX() {
        const data = {
            enable: false,
            options: {
                addTokenWidth: false,
                delay: 0,
                elevation: 1000,
                fadeIn: 250,
                fadeOut: 500,
                isMasked: false,
                isRadius: false,
                isWait: true,
                opacity: 1,
                repeat: 1,
                repeatDelay: 250,
                size: 1,
                zIndex: 1,
            },
            sound: setSound({}, "a01", true),
            video: {
                dbSection: "static",
                menuType: "spell",
                animation: "curewounds",
                variant: "01",
                color: "blue",
                enableCustom: false,
                customPath: "",
            }
        }
        return data;
    }

    async function convertAEOnToken(oldMO, newMO) {

        let { animLevel, animation, audio, color, explosions, macro, options } = oldMO;
        //let { aeDelay, aeType, animation, audio, below, color, custom, customPath, delay, explosion, macro, menuType, name,
            //opacity, persistent, repeat, scale, soundOnly, type, unbindAlpha, unbindVisibility, variant } = oldMO;

        newMO.id = Hashing.uuidv4();
        newMO.isEnabled = true;
        newMO.isCustomized = true;
        newMO.activeEffectType = "ontoken";

        newMO.primary = {
            options: {
                addTokenWidth: false,
                elevation: animLevel ? 0 : 1000,
                delay: 0,
                isMasked: false,
                isRadius: false,
                isWait: false,
                opacity: options?.opacity ?? 1,
                persistent: options?.persistent ?? false,
                playOn: "source",
                repeat: options?.repeat ?? 1,
                repeatDelay: options?.delay || 250,
                size: options?.scale || 1,
                unbindAlpha: options?.unbindAlpha ?? false,
                unbindVisibility: options?.unbindVisibility ?? false,
                zIndex: 1,
            },
            sound: setSound(audio, "a01"),
            video: {
                animation: animation,
                color: color,
                customPath: options?.customPath ?? "",
                dbSection: "static",
                enableCustom: options?.enableCustom ?? false,
                menuType: options?.menuType,
                variant: options?.variant,
            }
        }

        const newVideo = newMO.primary.video;
        if (!newVideo.menuType || !newVideo.animation || !newVideo.variant || !newVideo.color) {
            resetVideo(newMO.primary.video)
        }

        newMO.macro = macro || {};
        newMO.menu = "aefx";
        newMO.secondary = await convertExplosionV6(explosions, audio, oldMO)
        newMO.soundOnly = {
            sound: setSound({}, "a01", true),
        }
        newMO.source = newExtraFX();

        return newMO;
    }

    async function convertAEAura(oldMO, newMO) {

        let { animLevel, animType, animation, audio, color, macro, options } = oldMO;

        newMO.id = Hashing.uuidv4();
        newMO.isEnabled = true;
        newMO.isCustomized = true;
        newMO.activeEffectType = "ontoken";
        newMO.menu = "aefx";

        newMO.secondary = {
            enable: false,
            options: {},
            sound: setSound({}, "a01", true),
            video: {
                dbSection: "static",
                menuType: "spell",
                animation: "curewounds",
                variant: "01",
                color: "blue",
            }
        }

        newMO.primary = {
            options: {
                addTokenWidth: false,
                alpha: false,
                alphaMax: 0.5,
                alphaMin: -0.5,
                alphaDuration: 1000,
                breath: false,
                breathMax: 1.05,
                breathMin: 0.95,
                breathDuration: 1000,
                delay: 0,
                elevation: animLevel ? 0 : 1000,
                fadeIn: 250,
                fadeOut: 500,
                isRadius: true,
                isWait: true,
                opacity: options?.opacity || 1,
                playOn: "source",
                size: options?.auraRadius || 3,
                tint: false,
                tintColor: "#FFFFFF",
                tintSaturate: 0,
                unbindAlpha: options?.unbindAlpha ?? false,
                unbindVisibility: options?.unbindVisibility ?? false,
                zIndex: 1,
            },
            sound: setSound(audio, "a01"),
            video: {
                animation: animation,
                color: color,
                customPath: options?.customPath || "",
                dbSection: "static",
                enableCustom: options?.enableCustom ?? false,
                menuType: options?.menuType,
                variant: options?.variant,
            }
        }

        const newVideo = newMO.primary.video;
        if (!newVideo.menuType || !newVideo.animation || !newVideo.variant || !newVideo.color) {
            resetVideo(newMO.primary.video)
        }

        newMO.macro = macro || {};

        newMO.soundOnly = {
            sound: setSound({}, "a01", true)
        }

        newMO.source = newExtraFX();
        return newMO;
    }

    async function convertAEBless(oldMO, newMO) {

        let { animLevel, animType, animation, audio, color, macro, options } = oldMO;

        newMO.id = Hashing.uuidv4();
        newMO.isEnabled = true;
        newMO.isCustomized = true;
        newMO.activeEffectType = "ontoken";
        newMO.menu = "aefx";

        newMO.macro = macro || {};

        newMO.primary = {
            options: {
                addTokenWidth: false,
                delay: 0,
                elevation: animLevel ? 0 : 1000,
                fadeIn: 0,
                fadeOut: 500,
                isMasked: false,
                isRadius: false,
                isWait: true,
                opacity: 1,
                persistent: options?.persistent ?? false,
                playOn: "source",
                repeat: 1,
                repeatDelay: 250,
                size: options?.scale || 1,
                unbindAlpha: options?.unbindAlpha ?? false,
                unbindVisibility: options?.unbindVisibility ?? false,
                zIndex: 1,
            },
            sound: setSound({}, "a01", true),
            video: {
                dbSection: "static",
                menuType: "spell",
                animation: "bless",
                variant: "loop",
                color: color || "blue",
                enableCustom: false,
                customPath: "",
            },
        }

        newMO.secondary = {
            enable: false,
            options: {},
            sound: setSound({}, "a01", true),
            video: {
                dbSection: "static",
                menuType: "spell",
                animation: "curewounds",
                variant: "01",
                color: "blue",
                enableCustom: false,
                customPath: "",
            },
        }

        newMO.soundOnly = {
            sound: setSound({}, "a01", true)
        }

        newMO.source = {
            enable: true,
            options: {
                addTokenWidth: false,
                delay: -500,
                elevation: animLevel ? 0 : 1000,
                fadeIn: 250,
                fadeOut: 500,
                isMasked: false,
                isRadius: false,
                isWait: true,
                opacity: 1,
                repeat: 1,
                repeatDelay: 250,
                size: options?.scale || 1,
                zIndex: 1,
            },
            sound: setSound(audio, "a01"),
            video: {
                dbSection: "static",
                menuType: "spell",
                animation: "bless",
                variant: "intro",
                color: color || "blue",
                enableCustom: false,
                customPath: "",
            }
        }

        return newMO;
    }

    async function convertAEShield(oldMO, newMO) {

        let { animLevel, animType, animation, audio, color, macro, options } = oldMO;

        newMO.id = Hashing.uuidv4();
        newMO.isEnabled = true;
        newMO.isCustomized = true;
        newMO.activeEffectType = "ontoken";
        newMO.menu = "aefx";

        newMO.primary = {
            options:{
                isWait: true,
                delay: -1000,
                elevation: animLevel ? 0 : 1000,
                fadeIn: 250,
                fadeOut: 0,
                isMasked: false,
                isRadius: false,
                opacity: 1,
                persistent: options?.persistent || false,
                repeat: 1,
                repeatDelay: 250,
                size: options?.scale ?? 1,
                playOn: "source",
                unbindAlpha: options?.unbindAlpha ?? false,
                unbindVisibility: options?.unbindVisibility ?? false,
                zIndex: 1,
            },
            sound: setSound({}, "a01", true),
            video: {
                dbSection: "static",
                menuType: "shieldspell",
                animation: "loop",
                variant: options?.variant || "01",
                color: color || "blue",
                enableCustom: false,
                customPath: "",
            }
        }
        newMO.source = {
            enable: true,
            options: {
                delay: -500,
                elevation: animLevel ? 0 : 1000,
                fadeIn: 500,
                fadeOut: 0,
                isRadius: false,
                isWait: true,
                mask: false,
                repeat: 1,
                repeatDelay: 250,
                size: options?.scale || 1,
            },
            sound: setSound(audio, "a01"),
            video: {
                dbSection: "static",
                menuType: "shieldspell",
                animation: "intro",
                variant: options?.variant || "01",
                color: color || "blue",
                enableCustom: false,
                customPath: "",
            }
        }

        newMO.secondary = {
            enable: true,
            options: {
                delay: 0,
                elevation: animLevel ? 0 : 1000,
                isMasked: false,
                isRadius: false,
                isWait: false,
                repeat: 1,
                repeatDelay: 250,
                size: options?.scale || 1,
                opacity: 1,
                zIndex: 1,
            },
            sound: setSound({}, "a01", true),
            video:{
                dbSection: "static",
                menuType: "shieldspell",
                animation: options?.shieldVar || "outro_explode",
                variant: options?.variant || "01",
                color: color || "blue",
                enableCustom: false,
                customPath: "",
            }
        }

        newMO.macro = macro || {};

        newMO.soundOnly = {
            sound: setSound({}, "a01", true),
        }

        return newMO;
    }
}
