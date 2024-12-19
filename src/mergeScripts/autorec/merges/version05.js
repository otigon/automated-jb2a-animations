import { Hashing } from "#runtime/util";

async function mergeVersion05(data) {
    let currentAutorec = data;

    const meleeObject = currentAutorec.melee;
    const rangeObject = currentAutorec.range;
    const staticObject = currentAutorec.static;
    const templateObject = currentAutorec.templates;
    const auraObject = currentAutorec.auras;
    const presetObject = currentAutorec.preset;
    const aefxObject = currentAutorec.aefx;

    const newMenu = {
        melee: [],
        range: [],
        ontoken: [],
        templatefx: [],
        aura: [],
        preset: [],
        aefx: [],
        version: 5,
    };

    if (meleeObject) {
        const dataLength = Object.keys(meleeObject).length;
        for (var i = 0; i < dataLength; i++) {
            const oldMO = meleeObject[i]
            let newMO = {};
            let current = await convertV6(oldMO, newMO, "melee")
            newMenu.melee.push(current)
        }
    }
    if (rangeObject) {
        const dataLength = Object.keys(rangeObject).length;
        for (var i = 0; i < dataLength; i++) {
            const oldMO = rangeObject[i]
            let newMO = {};
            let current = await convertV6(oldMO, newMO, "range")
            newMenu.range.push(current)
        }
    }
    if (staticObject) {
        const dataLength = Object.keys(staticObject).length;
        for (var i = 0; i < dataLength; i++) {
            const oldMO = staticObject[i]
            let newMO = {};
            let current = await convertV6(oldMO, newMO, "ontoken")
            newMenu.ontoken.push(current)
        }
    }
    if (templateObject) {
        const dataLength = Object.keys(templateObject).length;
        for (var i = 0; i < dataLength; i++) {
            const oldMO = templateObject[i]
            let newMO = {};
            let current = await convertV6(oldMO, newMO, "templatefx");
            let thunderwaveVariants = ['left', 'mid', 'center'];
            if (current.primary.video.animation === "thunderwave") {
                if (thunderwaveVariants.some(el => !current.primary.video.variant.includes(el))) {
                    current.primary.video.variant = 'center'
                }
            }
            if (current.primary.options?.persistent && current.primary.options?.persistType === "attachtemplate" && current.primary.options?.removeTemplate) {
                current.primary.options.removeTemplate = false;
            }
            newMenu.templatefx.push(current)
        }
    }
    if (auraObject) {
        const dataLength = Object.keys(auraObject).length;
        for (var i = 0; i < dataLength; i++) {
            const oldMO = auraObject[i]
            let newMO = {};
            let current = await convertV6(oldMO, newMO, "aura");
            newMenu.aura.push(current)
        }
    }

    if (presetObject) {
        const presetLength = Object.keys(presetObject).length;
        for (var i = 0; i < presetLength; i++) {
            const oldMO = presetObject[i]
            let newMO = {};
            let current;
            switch (oldMO.animation) {
                case "bardicinspiration":
                case "bless":
                case "shieldspell":
                case "huntersmark":
                case "sneakattack":
                    break;
                case "teleportation":
                    current = await updateTele(oldMO, newMO);
                    current.menu = "preset";
                    newMenu.preset.push(current);
                    break;
                case "dualattach":
                    current = await updateDAttach(oldMO, newMO);
                    current.menu = "preset";
                    newMenu.preset.push(current);
                    break;
                case "fireball":
                    current = await updateFireball(oldMO, newMO);
                    current.menu = "preset";
                    newMenu.preset.push(current);
                    break;
                default:
                    current = await updateThunderwave(oldMO, newMO);
                    current.menu = "preset";
                    newMenu.preset.push(current);
            }
        }
    }

    if (aefxObject) {
        const aefxLength = Object.keys(aefxObject).length;

        for (var i = 0; i < aefxLength; i++) {
            const oldMO = aefxObject[i]
            let newMO = {};
            let current;
            switch (oldMO.aeType) {
                case "auras":
                    current = await convertAEAura(oldMO, newMO)
                    current.activeEffectType = "aura";
                    newMenu.aefx.push(current);
                    break;
                case "preset":
                    switch (oldMO.menuType) {
                        case "bless":
                            current = await convertAEBless(oldMO, newMO)
                            current.activeEffectType = "ontoken";
                            newMenu.aefx.push(current);
                            break;
                        case "shieldspell":
                            current = await convertAEShield(oldMO, newMO)
                            current.activeEffectType = "ontoken";
                            newMenu.aefx.push(current);
                            break;
                    }
                    break;
                default:
                    current = await convertAEOnToken(oldMO, newMO)
                    current.activeEffectType = "ontoken";
                    newMenu.aefx.push(current);
            }
        }
    }

    async function new3d(oldData) {
        let newData = oldData || {};
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
                opacity: exp?.opacity ?? 1,
                repeat: oldMO.repeat ?? 1,
                repeatDelay: oldMO.delay ?? 0,
                size: exp?.radius ?? 1.5,
                zIndex: exp?.zIndex ?? 1,
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

    async function convertV6(oldMO, newMO, type) {
        let { menuType, variant, custom, customPath, name, animation, color, audio, macro,
            soundOnly, explosion, levels3d, meleeSwitch, ...rest } = oldMO;

            newMO.id = Hashing.uuidv4();
        newMO.label = name;

        if (type !== "aura" && type !== "templatefx") {
            newMO.levels3d = await new3d(levels3d);
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
                menuType,
                animation,
                variant,
                color,
                enableCustom: custom,
                customPath,
            },
        }

        newMO.secondary = await convertExplosionV6(explosion, audio, oldMO)

        const primaryVideo = newMO.primary.video;
        if (!primaryVideo.menuType || !primaryVideo.animation || !primaryVideo.variant || !primaryVideo.color) {
            resetVideo(newMO.primary.video, type)
        }

        newMO.soundOnly = {
            sound: {
                enable: soundOnly?.enable || false,
                delay: oldMO.audio?.a01?.delay ?? 0,
                startTime: oldMO.audio?.a01?.startTime ?? 0,
                volume: oldMO.audio?.a01?.volume ?? 1,
                file: oldMO.audio?.a01?.file,
                repeat: 1,
                repeatDelay: 250,
            }
        }

        newMO.source = newExtraFX();
        newMO.target = newExtraFX(true);
        return newMO;
    }

    function compileMeleeSwitch(oldMO) {
        let oldData = oldMO || {};
        const data = {
            video: {
                dbSection: "range",
                menuType: oldData.switchMenuType,
                animation: oldData.switchAnimation,
                variant: oldData.switchVariant,
                color: oldData.switchColor,
                enableCustom: false,
                customPath: "",
            },
            sound:  setSound(oldMO?.audio, "a02"),
            options: {
                detect: oldData.detect || "automatic",
                range: oldData.range || 2,
                isReturning: oldData.return ?? false,
                switchType: oldData.switchType || "on",
            }
        }
        const switchVideo = data.video;
        if (!switchVideo.menuType || !switchVideo.animation || !switchVideo.variant || !switchVideo.color) {
            resetVideo(data.video, "range")
        }
        return data;
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

    function convertOptionsV6(oldMO, type) {
        const data = {};

        switch (type) {
            case "melee":
                data.delay = 0;
                data.elevation = oldMO.below ? 0 : 1000;
                data.isWait = false;
                data.opacity = oldMO.opacity ?? 1;
                data.repeat = oldMO.repeat ?? 1;
                data.repeatDelay = oldMO.delay ?? 0;
                data.size = oldMO.scale ?? 1;
                data.zIndex = oldMO.zIndex ?? 1;
                break;
            case "range":
                data.delay = 0;
                data.elevation = oldMO.below ? 0 : 1000;
                data.isReturning = false;
                data.isWait = false;
                data.onlyX = oldMO.onlyX ?? false;
                data.opacity = oldMO.opacity ?? 1;
                data.repeat = oldMO.repeat ?? 1;
                data.repeatDelay = oldMO.delay ?? 0;
                data.zIndex = oldMO.zIndex ?? 1;
                break;
            case "ontoken":
                data.addTokenWidth = false;
                data.anchor = "0.5";
                data.delay = 0;
                data.elevation = oldMO.below ? 0 : 1000;
                data.fadeIn = 250;
                data.fadeOut = 500;
                data.isMasked = oldMO.isMasked ?? false;
                data.isRadius = false;
                data.isWait = false;
                data.opacity = oldMO.opacity ?? 1;
                data.persistent = oldMO.persistent ?? false;
                data.playOn = oldMO.type === "targetDefault" ? "default" : oldMO.type === "sourceTarget" ? "both" : !oldMO.type ? "default" : oldMO.type;
                data.repeat = oldMO.repeat ?? 1;
                data.repeatDelay = oldMO.delay ?? 0;
                data.size = oldMO.scale ?? 1;
                data.unbindAlpha = oldMO.unbindAlpha ?? false;
                data.unbindVisibility = oldMO.unbindVisibility ?? false;
                data.zIndex = oldMO.zIndex ?? 1;
                break;
            case "templatefx":
                data.delay = 0;
                data.elevation = oldMO.below ? 0 : 1000;
                data.isMasked = oldMO.isMasked ?? false;
                data.isWait = false;
                data.occlusionAlpha = oldMO.occlusionAlpha ?? 0;
                data.occlusionMode = oldMO.occlusionMode ?? 0;
                data.opacity = oldMO.opacity ?? 1;
                data.persistent = oldMO.persist ?? false;
                data.persistType = oldMO.persistType || "sequencerground";
                data.removeTemplate = oldMO.removeTemplate ?? 1;
                data.repeat = oldMO.repeat ?? 1;
                data.repeatDelay = oldMO.delay ?? 0;
                data.rotate = 0;
                data.scale = `${oldMO.scaleX ?? 1}, ${oldMO.scaleY ?? 1}`
                //data.scaleX = oldMO.scaleX ?? 1;
                //data.scaleY = oldMO.scaleY ?? 1;
                data.zIndex = oldMO.zIndex ?? 1;
                break;
            case "aura":
                data.addTokenWidth = oldMO.addTokenWidth ?? false;
                data.alpha = false,
                data.alphaMax = 0.5,
                data.alphaMin = -0.5,
                data.alphaDuration = 1000,
                data.breath = false,
                data.breathMax = 1.05,
                data.breathMin = 0.95,
                data.breathDuration = 1000,
                data.delay = 0;
                data.elevation = oldMO.below ? 0 : 1000;
                data.fadeIn = 250;
                data.fadeOut = 500;
                data.playOn = oldMO.ignoretargets ? "source" : "default";
                data.isRadius = true;
                data.isWait = false;
                data.opacity = oldMO.opacity ?? 1;
                data.size = oldMO.scale ?? 3;
                data.tint = false,
                data.tintColor = "#FFFFFF",
                data.tintSaturate = 0,
                data.unbindAlpha = oldMO.unbindAlpha ?? false;
                data.unbindVisibility = oldMO.unbindVisibility ?? false;
                data.zIndex = oldMO.zIndex ?? 1;
                break;
        }
        return data;
    }

    function newExtraFX(target = false) {
        if (target) {
            return {
                enable: false,
                options: {
                    addTokenWidth: false,
                    anchor: "0.5",
                    delay: 0,
                    elevation: 1000,
                    fadeIn: 250,
                    fadeOut: 500,
                    isMasked: false,
                    isWait: false,
                    isRadius: false,
                    opacity: 1,
                    persistent: false,
                    repeat: 1,
                    repeatDelay: 250,
                    size: 1,
                    unbindAlpha: false,
                    unbindVisibility: false,
                    zIndex: 1,
                },
                sound:  setSound({}, "t01", true),
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
        } else {
            return {
                enable: false,
                options: {
                    addTokenWidth: false,
                    anchor: "0.5",
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
                sound:  setSound({}, "s01", true),
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
        }
    }

    function setDBSection(type) {
        return type === "aura" || type === "ontoken" ? "static" : type;
    }

    async function updateTele(oldData, newData) {
        newData.id = Hashing.uuidv4();
        newData.data = {};
        const root = newData.data;
        let { menuType, subAnimation, variant, color, below, custom, customPath,
            hideTemplate, name, range, measureType, scale,
            menuType02, subAnimation02, variant02, color02, scale02, custom02, customPath02,
            macro, delay, audio, soundOnly } = oldData;
        newData.macro = macro || {};
        newData.presetType = "teleportation";
        newData.label = name;
        //newData.hidden = true;
        root.options = {
            alpha: 0,
            delayFade: 750,
            delayMove: 1000,
            delayReturn: delay ?? 250,
            hideFromPlayers: hideTemplate ?? false,
            measureType: measureType ?? "alternating",
            range: range ?? 30,
            speed: 120,
            teleport: true,
        }
        root.sound =  setSound(audio, "a01");
        root.start = {
            enable: true,
            dbSection: "static",
            menuType,
            animation: subAnimation,
            variant,
            color,
            enableCustom: custom || false,
            customPath,
            options: {
                delay: 0,
                elevation: below ? 0 : 1000,
                fadeIn: 250,
                fadeOut: 250,
                isMasked: false,
                opacity: 1,
                isRadius: false,
                size: scale || 1.5,
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
                elevation: 1000,
                opacity: 1,
                playbackRate: 1,
            }
        }
        root.end = {
            enable: true,
            dbSection: "static",
            menuType: menuType02,
            animation: subAnimation02,
            variant: variant02,
            color: color02,
            enableCustom: custom02 || false,
            customPath: customPath02,
            options: {
                delay: 500,
                elevation: below ? 0 : 1000,
                fadeIn: 250,
                fadeOut: 250,
                isMasked: false,
                isRadius: false,
                opacity: 1,
                size: scale02 ?? 1,
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
                enable: soundOnly?.enable || false,
                delay: oldData.audio?.a01?.delay ?? 0,
                startTime: oldData.audio?.a01?.startTime ?? 0,
                volume: oldData.audio?.a01?.volume ?? 1,
                file: oldData.audio?.a01?.file,
            }
        }
        return newData;
    }
    async function updateDAttach(oldData, newData) {
        newData.id = Hashing.uuidv4();

        let { name, below, macro, audio, menuType, subAnimation, variant, color, custom, customPath, playbackRate, onlyX, soundOnly } = oldData;
        newData.macro = macro || {};
        newData.presetType = "dualattach";
        newData.label = name;
        newData.data = {
            video: {
                dbSection: "range",
                menuType,
                animation: subAnimation,
                variant,
                color,
                enableCustom: custom || false,
                customPath: customPath || "",
            },
            options: {
                playbackRate,
                onlyX,
                opacity: 1,
                elevation: below ? 0 : 1000,
            },
            sound: setSound(audio, "a01"),
        };
        if (!newData.data.video.menuType || !newData.data.video.animation || !newData.data.video.variant || !newData.data.video.color) {
            resetVideo(newData.data.video, "range")
        }
        newData.soundOnly = {
            sound: {
                enable: soundOnly?.enable || false,
                delay: oldData.audio?.a01?.delay ?? 0,
                startTime: oldData.audio?.a01?.startTime ?? 0,
                volume: oldData.audio?.a01?.volume ?? 1,
                file: oldData.audio?.a01?.file,
            }
        }
        return newData;
    }
    async function updateFireball(oldData, newData) {
        newData.id = Hashing.uuidv4();
        newData.data = {};
        const root = newData.data;
        let { audio, macro, name, below, animation, rangeType, projectile, projectilVariant, projectileColor, projectileRepeat, projectileDelay, wait01, removeTemplate,
            ex01Type, explosion01, explosion01Variant, explosion01Color, explosion01Repeat, explosion01Delay, explosion01Scale, wait02,
            ex02Type, explosion02, explosion02Variant, explosion02Color, explosion02Repeat, explosion02Delay, explosion02Scale,
            afterEffect, afterEffectPath, wait03, soundOnly } = oldData;
        //root.audio = audio || {};
        newData.macro = macro || {};
        newData.presetType = "proToTemp";
        newData.label = name;
        //root.removeTemplate = removeTemplate;
        root.projectile = {
            dbSection: "range",
            menuType: rangeType,
            animation: projectile,
            variant: projectilVariant,
            color: projectileColor,
            options: {
                repeat: projectileRepeat,
                repeatDelay: projectileDelay,
                wait: wait01,
                elevation: below ? 0 : 1000,
                removeTemplate: removeTemplate,
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
                elevation: below ? 0 : 1000,
            },
            sound:  setSound(audio, "e01"),
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
                elevation: below ? 0 : 1000,
                repeat: explosion02Repeat,
                repeatDelay: explosion02Delay,
                scale: explosion02Scale,
                wait: wait03,
            },
            sound: setSound(audio, "e01"),
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
                enable: soundOnly?.enable || false,
                delay: oldData.audio?.a01?.delay ?? 0,
                startTime: oldData.audio?.a01?.startTime ?? 0,
                volume: oldData.audio?.a01?.volume ?? 1,
                file: oldData.audio?.a01?.file,
            }
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

    async function updateThunderwave(oldData, newData) {
        newData.id = Hashing.uuidv4();
        //newData.data = {};
        //const root = newData.data;
        let { audio, macro, name, below, color, repeat, delay, scaleX, scaleY, opacity, removeTemplate, persist: persistent, persistType, occlusionMode, occlusionAlpha, soundOnly } = oldData;
        newData.macro = macro || {};
        newData.label = name;
        newData.presetType = "thunderwave";
        //newData.hidden = true;
        newData.data = {
            video: {
                dbSection: "templatefx",
                menuType: "square",
                animation: "thunderwave",
                variant: "mid",
                color: color || "blue",
            },
            options: {
                elevation: below ? 0 : 1000,
                repeat: repeat || 1,
                repeatDelay: delay ?? 250,
                opacity: opacity ?? 1,
                removeTemplate: removeTemplate ?? false,
            },
            sound: setSound(audio, "a01"),
        };
        newData.soundOnly = {
            sound: {
                enable: soundOnly?.enable || false,
                delay: oldData.audio?.a01?.delay ?? 0,
                startTime: oldData.audio?.a01?.startTime ?? 0,
                volume: oldData.audio?.a01?.volume ?? 1,
                file: oldData.audio?.a01?.file,
            }
        }
        return newData;
    }

    async function convertAEOnToken(oldMO, newMO) {

        let { aeDelay, aeType, animation, audio, below, color, custom, customPath, delay, explosion, macro, menuType, name,
            opacity, persistent, repeat, scale, soundOnly, type, unbindAlpha, unbindVisibility, variant } = oldMO;

        newMO.id = Hashing.uuidv4();
        newMO.label = name;
        newMO.menu = "aefx";
        newMO.secondary = await convertExplosionV6(explosion, audio, oldMO)

        newMO.primary = {
            options: {
                addTokenWidth: false,
                elevation: below ? 0 : 1000,
                delay: delay || 250,
                isMasked: false,
                isRadius: false,
                isWait: false,
                opacity: opacity || 1,
                persistent: persistent || false,
                playOn: "source",
                repeat: repeat || 1,
                size: scale || 1,
                unbindAlpha: unbindAlpha || false,
                unbindVisibility: unbindVisibility || false,
                zIndex: 1,
            },
            sound: setSound(audio, "a01"),
            video: {
                animation: animation,
                color: color,
                customPath: customPath || "",
                dbSection: "static",
                enableCustom: custom || false,
                menuType: menuType,
                variant: variant,
            }
        }

        const newVideo = newMO.primary.video;
        if (!newVideo.menuType || !newVideo.animation || !newVideo.variant || !newVideo.color) {
            resetVideo(newMO.primary.video)
        }

        newMO.macro = macro || {};

        newMO.soundOnly = {
            sound: {
                delay: audio?.a01?.delay ?? 0,
                enable: soundOnly?.enable ?? false,
                file: audio?.a01?.file ?? "",
                startTime: audio?.a01?.startTime ?? 0,
                volume: audio?.a01?.volume ?? 1,
            }
        }

        newMO.source = newExtraFX();

        return newMO;
    }

    async function convertAEAura(oldMO, newMO) {

        let { aeDelay, aeType, animation, audio, below, color, custom, customPath, macro, menuType, name,
            opacity, scale, soundOnly, type, unbindAlpha, unbindVisibility, variant } = oldMO;

        newMO.id = Hashing.uuidv4();
        newMO.label = name;
        newMO.menu = "aefx";

        newMO.secondary = {
            enable: false,
            options: {},
            sound:setSound({}, "a01", true),
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
                elevation: below ? 0 : 1000,
                fadeIn: 250,
                fadeOut: 500,
                isRadius: true,
                isWait: true,
                opacity: opacity || 1,
                playOn: "source",
                size: scale || 1,
                tint: false,
                tintColor: "#FFFFFF",
                tintSaturate: 0,
                unbindAlpha: unbindAlpha || false,
                unbindVisibility: unbindVisibility || false,
                zIndex: 1,
            },
            sound: setSound(audio, "a01"),
            video: {
                animation: animation,
                color: color,
                customPath: customPath || "",
                dbSection: "static",
                enableCustom: custom || false,
                menuType: menuType,
                variant: variant,
            }
        }

        const newVideo = newMO.primary.video;
        if (!newVideo.menuType || !newVideo.animation || !newVideo.variant || !newVideo.color) {
            resetVideo(newMO.primary.video)
        }

        newMO.macro = macro || {};

        newMO.soundOnly = {
            sound: {
                delay: audio?.a01?.delay ?? 0,
                enable: soundOnly?.enable ?? false,
                file: audio?.a01?.file ?? "",
                startTime: audio?.a01?.startTime ?? 0,
                volume: audio?.a01?.volume ?? 1,
            }
        }

        newMO.source = newExtraFX();
        return newMO;
    }

    async function convertAEBless(oldMO, newMO) {

        let { addCTA, aeType, animation, audio, below, color, custom, macro, menuType, name,
            scale, soundOnly, type, unbindAlpha, unbindVisibility, variant } = oldMO;

        newMO.id = Hashing.uuidv4();
        newMO.label = name;
        newMO.menu = "aefx";

        newMO.macro = macro || {};

        newMO.primary = {
            options: {
                addTokenWidth: false,
                delay: 0,
                elevation: below ? 0 : 1000,
                fadeIn: 0,
                fadeOut: 500,
                isMasked: false,
                isRadius: false,
                isWait: true,
                opacity: 1,
                persistent: addCTA || false,
                playOn: "source",
                repeat: 1,
                repeatDelay: 250,
                size: scale || 1,
                unbindAlpha: unbindAlpha || false,
                unbindVisibility: unbindVisibility || false,
                zIndex: 1,

            },
            sound: setSound({}, "a01", true),
            video: {
                dbSection: "static",
                menuType: "spell",
                animation: "bless",
                variant: "intro",
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
            sound: {
                enable: soundOnly?.enable || false,
                delay: oldMO.audio?.a01?.delay ?? 0,
                startTime: oldMO.audio?.a01?.startTime ?? 0,
                volume: oldMO.audio?.a01?.volume ?? 1,
                file: oldMO.audio?.a01?.file,
            }
        }

        newMO.source = {
            enable: true,
            options: {
                addTokenWidth: false,
                delay: -500,
                elevation: below ? 0 : 1000,
                fadeIn: 250,
                fadeOut: 500,
                isMasked: false,
                isRadius: false,
                isWait: true,
                opacity: 1,
                repeat: 1,
                repeatDelay: 250,
                size: scale || 1,
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

        let { addCTA, aeType, animation, audio, below, color, custom, endEffect, macro, menuType, name,
            scale, soundOnly, type, unbindAlpha, unbindVisibility, variant } = oldMO;

        newMO.id = Hashing.uuidv4();
        newMO.label = name;
        newMO.menu = "aefx";

        newMO.primary = {
            options:{
                isWait: true,
                delay: -1000,
                elevation: below ? 0 : 1000,
                fadeIn: 250,
                fadeOut: 0,
                isMasked: false,
                isRadius: false,
                opacity: 1,
                persistent: addCTA || false,
                repeat: 1,
                repeatDelay: 250,
                size: scale ?? 1,
                playOn: "source",
                unbindAlpha: unbindAlpha ?? false,
                unbindVisibility: unbindVisibility ?? false,
                zIndex: 1,
            },
            sound: setSound({}, "a01", true),
            video: {
                dbSection: "static",
                menuType: "shieldspell",
                animation: "loop",
                variant: variant || "01",
                color: color || "blue",
                enableCustom: false,
                customPath: "",
            }
        }
        newMO.source = {
            enable: true,
            options: {
                addTokenWidth: false,
                delay: -500,
                elevation: below ? 0 : 1000,
                fadeIn: 500,
                fadeOut: 0,
                isMasked: false,
                isRadius: false,
                isWait: true,
                opacity: 1,
                repeat: 1,
                repeatDelay: 250,
                size: scale || 1,
                zIndex: 1,
            },
            sound: setSound(audio, "a01"),
            video: {
                dbSection: "static",
                menuType: "shieldspell",
                animation: "intro",
                variant: variant || "01",
                color: color || "blue",
                enableCustom: false,
                customPath: "",
            }
        }

        newMO.secondary = {
            options: {
                delay: 0,
                elevation: below ? 0 : 1000,
                isMasked: false,
                isRadius: false,
                isWait: false,
                repeat: 1,
                repeatDelay: 250,
                size: scale || 1,
                opacity: 1,
                zIndex: 1,
            },
            sound: setSound({}, "a01", true),
            video:{
                dbSection: "static",
                menuType: "shieldspell",
                animation: endEffect || "outro_explode",
                variant: variant || "01",
                color: color || "blue",
                enableCustom: false,
                customPath: "",
            }
        }

        newMO.macro = macro || {};

        newMO.soundOnly = {
            sound: {
                delay: audio?.a01?.delay ?? 0,
                enable: soundOnly?.enable ?? false,
                file: audio?.a01?.file ?? "",
                startTime: audio?.a01?.startTime ?? 0,
                volume: audio?.a01?.volume ?? 1,
            }
        }

        return newMO;
    }
    return newMenu;
}


export { mergeVersion05 }
