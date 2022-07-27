

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
        melee: {},
        range: {},
        static: {},
        templatefx: {},
        aura: {},
        preset: {},
        aefx: {},
        version: 5,
    };

    /*
    async function compileNewMenu(data, type) {
        const dataLength = Object.keys(data).length;

        for (var i = 0; i < dataLength; i++) {
            const oldMO = data[i];
            newMenu[type][i] = {};
            const newMO = newMenu[type][i];

            let { name, animation, color, audio, macro, soundOnly, explosion, levels3d, ...rest } = oldMO
            newMO.id = randomID();
            newMO.name = name;
            newMO.hidden = true;
            newMO.animation = animation;
            newMO.color = color;
            newMO.options = rest;
            if (type === "templatefx") {
                newMO.options.persistent = newMO.options.persist || false;
            }
            newMO.audio = audio || {};
            newMO.macro = macro || {};
            newMO.levels3d = levels3d || {};
            newMO.soundOnly = soundOnly?.enable || false;
            newMO.explosions = explosion || {};
            if (!newMO.options.menuType || !newMO.options.variant || !newMO.animation || !newMO.color) {
                newMO.options.menuType = "";
                newMO.options.variant = "";
                newMO.animation = "";
                newMO.color = "";
            }
        }
    }
    */
    async function new3d(data) {
        let spriteType = data?.type || "";
        switch (spriteType) {
            case "sprite":
                return { type: data.type || "", sprites: data || {} }
            case "explosion":
                return { type: data.type || "", explosion: data || {} }
            case "ray":
                return { type: data.type || "", ray: data || {} }
            case "projectile":
                return { type: data.type || "", projectile: data || {} }
            default:
                return { type: "" }
        }
    }
    async function primaryMenu(oldMO, newMO, type) {

        let { menuType, variant, custom, customPath, name, animation, color, audio, macro,
            soundOnly, explosion, levels3d, meleeSwitch, ...rest } = oldMO
        newMO.id = randomID();
        newMO.name = name;
        newMO.hidden = true;
        //newMO.animation = animation;
        //newMO.color = color;
        newMO.options = rest;
        if (type) {
            newMO.options.persistent = newMO.options.persist || false;
        }
        newMO.primary = {
            menuType,
            animation,
            variant: variant,
            color,
            enableCustom: custom,
            customPath,
        }
        if (meleeSwitch) { newMO.meleeSwitch = meleeSwitch; }
        newMO.audio = audio || {};
        newMO.macro = macro || {};
        newMO.levels3d = await new3d(levels3d);
        newMO.soundOnly = soundOnly?.enable || false;
        newMO.explosions = explosion || {};
        if (!newMO.primary.menuType || !newMO.primary.variant || !newMO.primary.animation || !newMO.primary.color) {
            newMO.primary.menuType = "";
            newMO.primary.variant = "";
            newMO.primary.animation = "";
            newMO.primary.color = "";
        }
    }

    if (meleeObject) {
        const dataLength = Object.keys(meleeObject).length;
        for (var i = 0; i < dataLength; i++) {
            const oldMO = meleeObject[i]
            newMenu.melee[i] = {};
            const newMO = newMenu.melee[i];
            await primaryMenu(oldMO, newMO)
        }
        //await compileNewMenu(meleeObject, "melee")
    }
    if (rangeObject) {
        const dataLength = Object.keys(rangeObject).length;
        for (var i = 0; i < dataLength; i++) {
            const oldMO = rangeObject[i]
            newMenu.range[i] = {};
            const newMO = newMenu.range[i];
            await primaryMenu(oldMO, newMO)
        }
        //await compileNewMenu(rangeObject, "range")
    }
    if (staticObject) {
        const dataLength = Object.keys(staticObject).length;
        for (var i = 0; i < dataLength; i++) {
            const oldMO = staticObject[i]
            newMenu.static[i] = {};
            const newMO = newMenu.static[i];
            await primaryMenu(oldMO, newMO)
            newMO.options.staticType = oldMO.type;
        }
        //await compileNewMenu(staticObject, "static")
    }
    if (templateObject) {
        const dataLength = Object.keys(templateObject).length;
        for (var i = 0; i < dataLength; i++) {
            const oldMO = templateObject[i]
            newMenu.templatefx[i] = {};
            const newMO = newMenu.templatefx[i];
            await primaryMenu(oldMO, newMO, true)
            let thunderwaveVariants = ['left', 'mid', 'center'];
            if (newMO.primary.animation === "thunderwave") {
                if (thunderwaveVariants.some(el => !newMO.primary.variant.includes(el))) {
                    newMO.primary.variant = 'center'
                }
            }
            if (newMO.options?.persistent && newMO.options?.persistType === "attachtemplate" && newMO.options?.removeTemplate) {
                newMO.options.removeTemplate = false;
            }
        }
        //await compileNewMenu(templateObject, "templatefx")
    }
    if (auraObject) {
        const dataLength = Object.keys(auraObject).length;
        for (var i = 0; i < dataLength; i++) {
            const oldMO = auraObject[i]
            newMenu.aura[i] = {};
            const newMO = newMenu.aura[i];
            await primaryMenu(oldMO, newMO)
        }
        //await compileNewMenu(auraObject, "aura")
    }
    if (presetObject) {
        const presetLength = Object.keys(presetObject).length;
        for (var i = 0; i < presetLength; i++) {
            const oldMO = presetObject[i]
            newMenu.preset[i] = {};
            const newMO = newMenu.preset[i];
            switch (oldMO.animation) {
                case "bardicinspiration":
                    await updateBI(oldMO, newMO)
                    break;
                case "bless":
                    await updateBless(oldMO, newMO)
                    break;
                case "shieldspell":
                    await updateShield(oldMO, newMO)
                    break;
                case "teleportation":
                    await updateTele(oldMO, newMO)
                    break;
                case "dualattach":
                    await updateDAttach(oldMO, newMO)
                    break;
                case "fireball":
                    await updateFireball(oldMO, newMO)
                    break;
                case "huntersmark":
                    await updateHM(oldMO, newMO)
                    break;
                case "sneakattack":
                    await updateSneak(oldMO, newMO)
                    break;
                case "thunderwave":
                    await updateThunderwave(oldMO, newMO)
                    break;
            }

        }
    }
    if (aefxObject) {
        const aefxLength = Object.keys(aefxObject).length;
        for (var i = 0; i < aefxLength; i++) {
            const oldMO = aefxObject[i]
            newMenu.aefx[i] = {};
            const newMO = newMenu.aefx[i];
            switch (oldMO.aeType) {
                case "static":
                    await primaryMenu(oldMO, newMO)
                    newMO.animType = "static";
                    newMO.type = "source";
                    break;
                case "auras":
                    await primaryMenu(oldMO, newMO)
                    newMO.animType = "aura";
                    break;
                case "preset":
                    switch (oldMO.menuType) {
                        case "bless":
                            await updateBless(oldMO, newMO)
                            newMO.animType = "preset";
                            break;
                        case "shieldspell":
                            await updateShield(oldMO, newMO)
                            newMO.animType = "preset";
                            break;
                    }
                    break;
            }
            await primaryMenu(oldMO, newMO)
        }
    }

    async function updateBI(oldData, newData) {
        newData.id = randomID();
        newData.bardicinspiration = {};
        const root = newData.bardicinspiration;
        let { animateSelf, animateTarget, below, marker, name, scale, selfAnimation, selfColor, selfMarkerColor, targetAnimation, targetColor, targetMarkerColor, macro, audio } = oldData;
        root.audio = audio || {};
        root.macro = macro || {};
        newData.presetType = "bardicinspiration";
        root.below = below;
        root.scale = scale;
        newData.name = name;
        newData.hidden = true;
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
    async function updateBless(oldData, newData) {
        newData.id = randomID();
        newData.bless = {};
        const root = newData.bless;
        let { below, color, name, scale, macro, unbindAlpha, unbindVisibility, audio, addCTA: persistent, ...rest } = oldData;
        root.audio = audio || {};
        root.macro = macro || {};
        newData.presetType = "bless";
        newData.name = name;
        newData.hidden = true;
        root.below = below;
        root.scale = scale;
        root.menuType = "spell";
        root.animation = "bless";
        root.variant = "01";
        root.color = color;
        root.unbindAlpha = unbindAlpha || false;
        root.unbindVisibility = unbindVisibility || false;
        root.persistent = persistent;
    }
    async function updateShield(oldData, newData) {
        newData.id = randomID();
        newData.shield = {};
        const root = newData.shield;
        let { below, color, endeffect, name, scale, variant, macro, addCTA: persistent, unbindAlpha, unbindVisibility, audio } = oldData;
        root.audio = audio || {};
        root.macro = macro || {};
        newData.presetType = "shieldspell";
        newData.name = name;
        newData.hidden = true;
        root.menuType = "spell";
        root.animation = "shieldspell";
        root.variant = variant;
        root.color = color;
        root.endEffect = endeffect;
        root.unbindAlpha = unbindAlpha;
        root.unbindVisibility = unbindVisibility;
        root.persistent = persistent;
        root.below = below;
        root.scale = scale;
    }
    async function updateTele(oldData, newData) {
        newData.id = randomID();
        newData.teleportation = {};
        const root = newData.teleportation;
        let { menuType, subAnimation, variant, color, below, custom, customPath,
            hideTemplate, name, range, measureType, scale,
            menuType02, subAnimation02, variant02, color02, scale02, custom02, customPath02,
            macro, delay, audio } = oldData;
        root.audio = audio || {};
        root.macro = macro || {};
        newData.presetType = "teleportation";
        newData.name = name;
        newData.hidden = true;
        root.hideFromPlayers = hideTemplate;
        root.range = range;
        root.measureType = measureType;
        root.start = {
            menuType,
            animation: subAnimation,
            variant,
            color,
            below,
            enableCustom: custom || false,
            customPath,
            scale,
        }
        root.between = {
            enable: false,
        }
        root.end = {
            menuType: menuType02,
            animation: subAnimation02,
            variant: variant02,
            color: color02,
            below,
            enableCustom: custom02 || false,
            customPath: customPath02,
            scale: scale02,
            delay
        }
    }
    async function updateDAttach(oldData, newData) {
        newData.id = randomID();
        newData.dualattach = {};
        const root = newData.dualattach;
        let { name, below, macro, audio, menuType, subAnimation, variant, color, custom, customPath, playbackRate, onlyX } = oldData;
        root.audio = audio || {};
        root.macro = macro || {};
        newData.presetType = "dualattach";
        newData.name = name;
        newData.hidden = true;
        root.menuType = menuType;
        root.animation = subAnimation;
        root.variant = variant;
        root.color = color;
        root.enableCustom = custom || false;
        root.customPath = customPath;
        root.playbackRate = playbackRate;
        root.onlyX = onlyX;
        root.below = below;
    }
    async function updateFireball(oldData, newData) {
        newData.id = randomID();
        newData.fireball = {};
        const root = newData.fireball;
        let { audio, macro, name, below, animation, rangeType, projectile, projectilVariant, projectileColor, projectileRepeat, projectileDelay, wait01, removeTemplate,
            ex01Type, explosion01, explosion01Variant, explosion01Color, explosion01Repeat, explosion01Delay, explosion01Scale, wait02,
            ex02Type, explosion02, explosion02Variant, explosion02Color, explosion02Repeat, explosion02Delay, explosion02Scale,
            afterEffect, afterEffectPath, wait03 } = oldData;
        root.audio = audio || {};
        root.macro = macro || {};
        newData.presetType = "fireball";
        newData.name = name;
        newData.hidden = true;
        root.removeTemplate = removeTemplate;
        root.projectile = {
            menuType: rangeType,
            animation: projectile,
            variant: projectilVariant,
            color: projectileColor,
            repeat: projectileRepeat,
            delay: projectileDelay,
            wait: wait01,
            below: below,
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
            below: below,
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
        root.afterImage = {
            enable: afterEffect,
            customPath: afterEffectPath,
            below: true,
            scale: 1,
            wait: wait03,
        }
    }
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
    async function updateThunderwave(oldData, newData) {
        newData.id = randomID();
        newData.thunderwave = {};
        const root = newData.thunderwave;
        let { audio, macro, name, below, color, repeat, delay, scaleX, scaleY, opacity, removeTemplate, persist: persistent, persistType, occlusionMode, occlusionAlpha } = oldData;
        root.audio = audio || {};
        root.macro = macro || {};
        newData.name = name;
        newData.presetType = "thunderwave";
        newData.hidden = true;
        root.color = color;
        root.below = below;
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
    return newMenu;
}

export {mergeVersion05}