import { uuidv4 } from "@typhonjs-fvtt/runtime/svelte/util";

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

    async function new3d(oldData) {
        let newData = oldData || {};
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

    async function convertExplosionV6(exp, audio, oldMO) {

        let data = {
            enable: exp?.enable ?? false,
            options: {
                elevation: exp?.below ? 0 : 1000,
                delay: exp?.delay ?? 250,
                isMasked: exp?.isMasked ?? false,
                isRadius: true,
                isWait: false,
                opacity: exp?.opacity ?? 1,
                size: exp?.radius ?? 1.5,
                repeat: oldMO.repeat ?? 1,
                repeatDelay: oldMO.delay ?? 0,
                zIndex: exp?.zIndex ?? 1,
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

    async function convertV6(oldMO, newMO, type) {
        let { menuType, variant, custom, customPath, name, animation, color, audio, macro,
            soundOnly, explosion, levels3d, meleeSwitch, ...rest } = oldMO
        
            newMO.id = uuidv4();
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
            sound: {
                delay: oldMO.audio?.a01?.delay ?? 0,
                enable: oldMO.audio?.a01?.enable ?? false,
                startTime: oldMO.audio?.a01?.startTime ?? 0,
                volume: oldMO.audio?.a01?.volume ?? 1,
                file: oldMO.audio?.a01?.file,
            },
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
            }
        }

        newMO.source = newExtraFX();
        newMO.target = newExtraFX();
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
            sound: {
                delay: oldData.audio?.a02?.delay ?? 0,
                enable: oldData.audio?.a02?.enable ?? false,
                startTime: oldData.audio?.a02?.startTime ?? 0,
                volume: oldData.audio?.a02?.volume ?? 1,
                file: oldData.audio?.a02?.file,
            },
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
                data.isWait = false;
                data.delay = 0;
                data.elevation = oldMO.below ? 0 : 1000;
                data.opacity = oldMO.opacity ?? 1;
                data.repeat = oldMO.repeat ?? 1;
                data.repeatDelay = oldMO.delay ?? 0;
                data.size = oldMO.scale ?? 1;
                data.zIndex = oldMO.zIndex ?? 1;
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
                data.isMasked = oldMO.isMasked ?? false;
                data.isRadius = false;
                data.opacity = oldMO.opacity ?? 1;
                data.persistent = oldMO.persistent ?? false;
                data.repeat = oldMO.repeat ?? 1;
                data.repeatDelay = oldMO.delay ?? 0;
                data.size = oldMO.scale ?? 1;
                data.playOn = oldMO.type === "targetDefault" ? "default" : oldMO.type === "sourceTarget" ? "both" : !oldMO.type ? "default" : oldMO.type;
                data.unbindAlpha = oldMO.unbindAlpha ?? false;
                data.unbindVisibility = oldMO.unbindVisibility ?? false;
                data.zIndex = oldMO.zIndex ?? 1;
                break;
            case "templatefx":
                data.isWait = false;
                data.delay = 0;
                data.elevation = oldMO.below ? 0 : 1000;
                data.isMasked = oldMO.isMasked ?? false;
                data.occlusionAlpha = oldMO.occlusionAlpha ?? 0;
                data.occlusionMode = oldMO.occlusionMode ?? 0;
                data.opacity = oldMO.opacity ?? 1;
                data.persistType = oldMO.persistType || "sequencerground";
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
                data.radius = oldMO.scale ?? 3;
                data.elevation = oldMO.below ? 0 : 1000;
                data.ignoreTarget = oldMO.ignoretargets ?? false;
                data.isMasked = oldMO.isMasked ?? false;
                data.opacity = oldMO.opacity ?? 1;
                data.unbindAlpha = oldMO.unbindAlpha ?? false;
                data.unbindVisibility = oldMO.unbindVisibility ?? false;
                data.zIndex = oldMO.zIndex ?? 1;
                break;
        }
        return data;
    }

    function newExtraFX() {
        const data = {
            enable: false,
            options: {},
            sound: {
                delay: 0,
                enable: false,
                startTime: 0,
                volume: 0.75,
            },
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

    function setDBSection(type) {
        return type === "aura" || type === "ontoken" ? "static" : type;  
    }
    /*
    async function convertPrimaryV6(data, sound) {
        const primary = {};

        primary.sound = {
                delay: oldMO.audio?.a01?.delay ?? 0,
                enable: oldMO.audio?.a01?.enable ?? false,
                startTime: oldMO.audio?.a01?.startTime ?? 0,
                volume: oldMO.audio?.a01?.volume ?? 1,
        };
        primary.video = {
            menuType,
            animation,
            variant,
            color,
            enableCustom: custom,
            customPath,
        };
        return primary;
    }
    */
    if (meleeObject) {
        const dataLength = Object.keys(meleeObject).length;
        for (var i = 0; i < dataLength; i++) {
            const oldMO = meleeObject[i]
            //newMenu.melee[i] = {};
            //const newMO = newMenu.melee[i];
            let newMO = {};
            let current = await convertV6(oldMO, newMO, "melee")
            newMenu.melee.push(current)
        }
        //await game.settings.set('autoanimations', 'aaAutorec-melee', newMenu.melee)
    }
    if (rangeObject) {
        const dataLength = Object.keys(rangeObject).length;
        for (var i = 0; i < dataLength; i++) {
            const oldMO = rangeObject[i]
            //newMenu.range[i] = {};
            //const newMO = newMenu.range[i];
            let newMO = {};
            let current = await convertV6(oldMO, newMO, "range")
            newMenu.range.push(current)
            //await primaryMenu(oldMO, newMO)
        }
        //await game.settings.set('autoanimations', 'aaAutorec-range', newMenu.range)
    }
    if (staticObject) {
        const dataLength = Object.keys(staticObject).length;
        for (var i = 0; i < dataLength; i++) {
            const oldMO = staticObject[i]
            //newMenu.static[i] = {};
            //const newMO = newMenu.static[i];
            let newMO = {};
            let current = await convertV6(oldMO, newMO, "ontoken")
            newMenu.ontoken.push(current)
            //await primaryMenu(oldMO, newMO)
            //newMO.options.staticType = oldMO.type;
        }
        //await game.settings.set('autoanimations', 'aaAutorec-ontoken', newMenu.ontoken)
    }
    if (templateObject) {
        const dataLength = Object.keys(templateObject).length;
        for (var i = 0; i < dataLength; i++) {
            const oldMO = templateObject[i]
            //newMenu.templatefx[i] = {};
            //const newMO = newMenu.templatefx[i];
            let newMO = {};
            let current = await convertV6(oldMO, newMO, "templatefx");
            //await primaryMenu(oldMO, newMO, true)
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
        //await game.settings.set('autoanimations', 'aaAutorec-templatefx', newMenu.templatefx)
    }
    if (auraObject) {
        const dataLength = Object.keys(auraObject).length;
        for (var i = 0; i < dataLength; i++) {
            const oldMO = auraObject[i]
            //newMenu.aura[i] = {};
            //const newMO = newMenu.aura[i];
            let newMO = {};
            let current = await convertV6(oldMO, newMO, "aura");
            newMenu.aura.push(current)
            //await primaryMenu(oldMO, newMO)
        }
        //await game.settings.set('autoanimations', 'aaAutorec-aura', newMenu.aura)
    }

    if (presetObject) {
        const presetLength = Object.keys(presetObject).length;
        for (var i = 0; i < presetLength; i++) {
            const oldMO = presetObject[i]
            //newMenu.preset[i] = {};
            //const newMO = newMenu.preset[i];
            let newMO = {};
            let current;
            switch (oldMO.animation) {
                case "bardicinspiration":
                case "huntersmark":
                case "sneakattack":
                    break;
                case "teleportation":
                    current = await updateTele(oldMO, newMO);
                    newMenu.preset.push(current);
                    break;
                case "dualattach":
                    current = await updateDAttach(oldMO, newMO);
                    newMenu.preset.push(current);
                    break;
                case "fireball":
                    current = await updateFireball(oldMO, newMO);
                    newMenu.preset.push(current);
                    break;
                case "thunderwave":
                    current = await updateThunderwave(oldMO, newMO);
                    newMenu.preset.push(current);
                    break;
                //case "bless":
                    //current = await updateBless(oldMO, newMO);
                    //newMenu.preset.push(current);
                    //break;
                //case "shieldspell":
                    //current = await updateShield(oldMO, newMO);
                    //newMenu.preset.push(current);
                    //break;
            }
        }
        //await game.settings.set('autoanimations', 'aaAutorec-preset', newMenu.preset)
    }

    if (aefxObject) {
        const aefxLength = Object.keys(aefxObject).length;

        for (var i = 0; i < aefxLength; i++) {
            const oldMO = aefxObject[i]
            //newMenu.aefx[i] = {};
            //const newMO = newMenu.aefx[i];
            let newMO = {};
            let current;
            switch (oldMO.aeType) {
                case "static":
                    current = await convertAEOnToken(oldMO, newMO)
                    current.activeEffectType = "ontoken";
                    current.data.options.type = "source";
                    newMenu.aefx.push(current);
                    break;
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
            }
        }
        //await game.settings.set('autoanimations', 'aaAutorec-aefx', newMenu.aefx)
    }

    /*
    async function updateBless(oldMO, newMO) {

        let {addCTA, animation, audio, below, color, macro, name, scale, unbindAlpha, unbindVisibility} = oldMO;

        newMO.id = uuidv4();
        newMO.label = name;
        newMO.presetType = "dualAnim";

        newMO.macro = macro || {};

        newMO.data = {
            intro: {
                customPath: convertToCustom("intro"),
                options: {
                    elevation: below ? 0 : 1000,
                    fadeIn: 500,
                    opacity: 1,
                    size: scale || 1,
                    wait: -500,
                },
                sound: {
                    delay: audio?.a01?.delay ?? 0,
                    enable: audio?.a01?.enable ?? false,
                    file: audio?.a01?.file ?? "",
                    startTime: audio?.a01?.startTime ?? 0,
                    volume: audio?.a01?.volume ?? 1,
                },
            },
            loop: {
                customPath: convertToCustom("loop"),
                options: {
                    elevation: below ? 0 : 1000,
                    fadeOut: 500,
                    opacity: 1,
                    persistent: addCTA || false,
                    size: scale || 1,
                    unbindAlpha: unbindAlpha || false,
                    unbindVisibility: unbindVisibility || false,
                },
            },
        }

        function convertToCustom(inOut) {
            let newColor = color || "blue";

            return `autoanimations.static.spell.bless.${inOut}.${newColor}`
        }

        return newMO;
    }
    async function updateShield(oldMO, newMO) {

        let {addCTA, animation, audio, below, color, endeffect, macro, name, scale, unbindAlpha, unbindVisibility, variant} = oldMO;

        newMO.id = uuidv4();
        newMO.label = name;
        newMO.presetType = "tripleAnim";

        newMO.macro = macro || {};

        newMO.data = {
            intro: {
                customPath: convertToCustom("intro"),
                options: {
                    elevation: below ? 0 : 1000,
                    fadeIn: 500,
                    opacity: 1,
                    size: scale || 1,
                    wait: -500,
                },
                sound: {
                    delay: audio?.a01?.delay ?? 0,
                    enable: audio?.a01?.enable ?? false,
                    file: audio?.a01?.file ?? "",
                    startTime: audio?.a01?.startTime ?? 0,
                    volume: audio?.a01?.volume ?? 1,
                },
            },
            loop: {
                customPath: convertToCustom("loop"),
                options: {
                    elevation: below ? 0 : 1000,
                    fadeOut: 500,
                    opacity: 1,
                    persistent: addCTA || false,
                    size: scale || 1,
                    unbindAlpha: unbindAlpha || false,
                    unbindVisibility: unbindVisibility || false,
                    wait: -1000,
                },
            },
            outro: {
                customPath: convertToCustom("outro"),
                options: {
                    fadeOut: 500,
                    opacity: 1,
                    size: scale || 1,
                },
                sound: { enable: false }
            }
        }

        function convertToCustom(type) {
            let newColor = color || "blue";
            let newVariant = variant || "01";
            let newType = type || "loop"

            return `autoanimations.static.spell.shieldspell.${newType}.${newVariant}.${newColor}`
        }

        return newMO;
    }
    */
    async function updateTele(oldData, newData) {
        newData.id = uuidv4();
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
            hideFromPlayers: hideTemplate,
            range,
            measureType,
        }
        root.sound = {
            delay: audio?.a01?.delay ?? 0,
            enable: audio?.a01?.enable ?? false,
            startTime: audio?.a01?.startTime ?? 0,
            volume: audio?.a01?.volume ?? 1,
        }
        root.start = {
            dbSection: "static",
            menuType,
            animation: subAnimation,
            variant,
            color,
            enableCustom: custom || false,
            customPath,
            options: {
                elevation: below ? 0 : 1000,
                size: scale || 1,
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
            menuType: menuType02,
            animation: subAnimation02,
            variant: variant02,
            color: color02,
            enableCustom: custom02 || false,
            customPath: customPath02,
            options: {
                elevation: below ? 0 : 1000,
                size: scale02,
                delay,
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
        newData.id = uuidv4();

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
                elevation: below ? 0 : 1000,
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
        newData.id = uuidv4();
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
                elevation: below ? 0 : 1000,
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
                enable: soundOnly?.enable || false,
                delay: oldData.audio?.a01?.delay ?? 0,
                startTime: oldData.audio?.a01?.startTime ?? 0,
                volume: oldData.audio?.a01?.volume ?? 1,
                file: oldData.audio?.a01?.file,
            }
        }
        return newData;
    }
    /*
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
    async function updateBI(oldData, newData) {
        newData.id = uuidv4();
        newData.data = {};
        const root = newData.data;
        let { animateSelf, animateTarget, below, marker, name, scale, selfAnimation, selfColor, selfMarkerColor, targetAnimation, targetColor, targetMarkerColor, macro, audio } = oldData;
        root.audio = {
            delay: audio?.a01?.delay ?? 0,
            enable: audio?.a01?.enable ?? false,
            file: audio?.a01?.file ?? "",
            startTime: audio?.a01?.startTime ?? 0,
            volume: audio?.a01?.volume ?? 0,
        };
        root.macro = macro || {};
        newData.presetType = "bardicinspiration";
        //root.below = below;
        //root.scale = scale;
        newData.label = name;
        //newData.hidden = true;
        root.options = {
            below: below || false,
            scale: scale || 1,
        }
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
    */

    async function updateThunderwave(oldData, newData) {
        newData.id = uuidv4();
        //newData.data = {};
        //const root = newData.data;
        let { audio, macro, name, below, color, repeat, delay, scaleX, scaleY, opacity, removeTemplate, persist: persistent, persistType, occlusionMode, occlusionAlpha, soundOnly } = oldData;
        newData.macro = macro || {};
        newData.label = name;
        newData.presetType = "thunderwave";
        //newData.hidden = true;
        newData.data = {
            menuType: "spell",
            animation: "thunderwave",
            variant: "mid",
            color: color || "blue",
            options: {
                elevation: below ? 0 : 1000,
                repeat,
                delay,
                scaleX,
                scaleY,
                opacity,
                removeTemplate,
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

        newMO.id = uuidv4();
        newMO.label = name;

        newMO.secondary = await convertExplosionV6(explosion, audio, oldMO)

        newMO.data = {
            options: {
                addTokenWidth: false,
                aeDelay: aeDelay || 0,
                elevation: below ? 0 : 1000,
                delay: delay || 250,
                isMasked: false,
                isRadius: false,
                isWait: false,
                opacity: opacity,
                persistent: persistent || false,
                playOn: "source",
                repeat: repeat || 1,
                size: scale || 1,
                unbindAlpha: unbindAlpha || false,
                unbindVisibility: unbindVisibility || false,
                zIndex: 1,
            },
            sound: {
                delay: audio?.a01?.delay ?? 0,
                enable: audio?.a01?.enable ?? false,
                file: audio?.a01?.file ?? "",
                startTime: audio?.a01?.startTime ?? 0,
                volume: audio?.a01?.volume ?? 1,
            },
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

        const newVideo = newMO.data.video;
        if (!newVideo.menuType || !newVideo.animation || !newVideo.variant || !newVideo.color) {
            resetVideo(newMO.data.video)
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

        newMO.id = uuidv4();
        newMO.label = name;
        newMO.secondary = {
            enable: false,
            options: {},
            sound:{enable: false},
            video: {
                dbSection: "static",
                menuType: "spell",
                animation: "curewounds",
                variant: "01",
                color: "blue",
            }
        }

        newMO.data = {
            options: {
                addTokenWidth: false,
                aeDelay: aeDelay || 0,
                delay: 0,
                elevation: below ? 0 : 1000,
                ignoreTarget: true,
                isMasked: false,
                isRadius: true,
                isWait: true,
                opacity: opacity,
                size: scale || 1,
                unbindAlpha: unbindAlpha || false,
                unbindVisibility: unbindVisibility || false,
                zIndex: 1,
            },
            sound: {
                delay: audio?.a01?.delay ?? 0,
                enable: audio?.a01?.enable ?? false,
                file: audio?.a01?.file ?? "",
                startTime: audio?.a01?.startTime ?? 0,
                volume: audio?.a01?.volume ?? 1,
            },
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

        const newVideo = newMO.data.video;
        if (!newVideo.menuType || !newVideo.animation || !newVideo.variant || !newVideo.color) {
            resetVideo(newMO.data.video)
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

        newMO.id = uuidv4();
        newMO.label = name;
        newMO.menu = "aefx";

        newMO.macro = macro || {};
        newMO.secondary = {
            options: {},
            sound: {
                enable: false,
            },
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

        newMO.data = {
            options: {
                addTokenWidth: false,
                aeDelay: 0,
                delay: -500,
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
            sound: {
                delay: oldMO.audio?.a01?.delay ?? 0,
                enable: oldMO.audio?.a01?.enable ?? false,
                startTime: oldMO.audio?.a01?.startTime ?? 0,
                volume: oldMO.audio?.a01?.volume ?? 1,
                file: oldMO.audio?.a01?.file,
            },
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
                elevation: below ? 0 : 1000,
                mask: false,
                repeat: 1,
                repeatDelay: 250,
                size: scale || 1,
            },
            sound: {
                delay: 0,
                enable: false,
                file: "",
                startTime: 0,
                volume: 0.75,
            },
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

        return newMO;
    }

    async function convertAEShield(oldMO, newMO) {

        let { addCTA, aeType, animation, audio, below, color, custom, endEffect, macro, menuType, name,
            scale, soundOnly, type, unbindAlpha, unbindVisibility, variant } = oldMO;

        newMO.id = uuidv4();
        newMO.label = name;

        newMO.data = {
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
            sound: {
                delay: audio?.a01?.delay ?? 0,
                enable: audio?.a01?.enable ?? false,
                file: audio?.a01?.file ?? "",
                startTime: audio?.a01?.startTime ?? 0,
                volume: audio?.a01?.volume ?? 1,
            },
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
                delay: -500,
                elevation: below ? 0 : 1000,
                fadeIn: 500,
                fadeOut: 0,
                isRadius: false,
                isWait: true,
                mask: false,
                repeat: 1,
                repeatDelay: 250,
                size: scale || 1,
            },
            sound: {
                delay: 0,
                enable: false,
                file: "",
                startTime: 0,
                volume: 0.75,
            },
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
            sound: {
                enable: false,
            },
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

        newMO.source = newExtraFX();

        return newMO;
    }


    return newMenu;
}


export { mergeVersion05 }