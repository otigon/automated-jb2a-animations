import { buildFile }                from "../animation-functions/file-builder/build-filepath.js";
import { custom_notify }            from "../constants/constants.js"
import { particleDefaultValues }    from "../animation-functions/levels-particles/particleDefaults.js";

export class DataSanitizer {

    static async _getAnimationData(handler, flagData) {
        if (!flagData) { return; }
        let menu = flagData.menu;
        menu = menu === "aefx" ? flagData.activeEffectType : menu;
        const data = {};

        //const data = {
            data.primary = menu === "preset" ? await this.compilePreset(flagData) : await this.compilePrimary(flagData, menu, handler),
            data.secondary = flagData.secondary ? await this.compileSecondary(flagData, handler) : false,
            data.sourceFX = await this.compileSource(flagData, data.primary),
            data.targetFX = flagData.target ? await this.compileTarget(flagData) : false,
            data.macro = await this.compileMacro(handler, flagData)
        //}
        return data;
    }

    static async compileMacro(handler, flagData) {
        const macro = flagData.macro;
        if (!macro || !macro.enable || !macro.name) { return false}
        const isItemMacro = macro.name.startsWith("ItemMacro");
        let itemMacro;
        if (isItemMacro) {
            itemMacro = handler.item.getMacro()
        }
        if (isItemMacro && !itemMacro.command) { return false}
        const data = {
            enable: macro.enable ?? false,
            name: isItemMacro ? itemMacro : macro.name,
            args: this.strToObj(macro.args),
            playWhen: macro.playWhen ?? "0",
        }
        return data;
    }

    static strToObj(data) {

        if (!data) { return []; }
        let obj = {};
        try {
            if (data && typeof data === 'string') {
                let objStr = data.replaceAll("\n", "").match(/\{(.)+\}/g);
                eval("obj =" + objStr);
            }
            return obj || data.split(',').map(s => s.trim())
        }
        catch (err) {
            return data.split(',').map(s => s.trim())
        }


    }

    static setSound(data, addDelay = 0, overrideRepeat = false) {

        const input = {
            enable: data.enable ?? false,
            file: data.file,
            delay: data.delay ?? 0,
            startTime: data.startTime ?? 0,
            volume: data.volume ?? 1,
            repeat: overrideRepeat || data.repeat || 1,
            repeatDelay: data.repeatDelay ?? 250,
        }
        if (!input.enable || !input.file) { return false }
        let soundSeq = new Sequence({moduleName: "Automated Animations", softFail: !game.settings.get("autoanimations", "debug")})
        let section = soundSeq.sound()
        section.file(input.file)
        section.delay(input.delay + addDelay)
        section.startTime(input.startTime)
        section.volume(input.volume)
        section.repeats(input.repeat, input.repeatDelay)
        return soundSeq;
    }

    static async compilePrimary(flagData, menu, handler) {
        const topLevel = flagData || {};

        const primary = topLevel.primary || topLevel.data || {};
        const options = primary.options || {};
        const sound = primary.sound || {};
        const video = primary.video || {};

        const data = {
            video: {
                dbSection: video.dbSection,
                menuType: video.menuType,
                animation: video.animation,
                variant: video.variant,
                color: video.color,
                customPath: video.enableCustom && video.customPath ? video.customPath : false,
            },
            options: this.setPrimaryOptions(options, menu, handler),
            //sound: this.setSound(sound),
        }
        let addSoundDelay = 0;
        if (!data.options.isWait) {
            addSoundDelay = data.options.delay;
        }
        data.sound = this.setSound(sound, addSoundDelay, handler.systemData.overrideRepeat)
        if (menu === "melee") {
            data.meleeSwitch = this.compileMeleeSwitch(topLevel.meleeSwitch)
        }
        if (data.video.menuType === 'shieldfx' && !video.enableCustom) { data.options.isShieldFX = true};

        let truePathRequired = ['static', 'templatefx'];
        let returnable = ['melee', 'range'];

        data.path = await buildFile(data.video.dbSection, data.video, data.video.customPath, {getTruePath: truePathRequired.some(el => el === data.video.dbSection), isReturnable: returnable.some(el => el === data.video.dbSection)})
        return data;
    }

    static compileMeleeSwitch(switchData) {
        const topLevel = switchData || {};

        const video = topLevel.video || {};
        const options = topLevel.options || {};
        const sound = topLevel.sound || {};

        const data = {
            video: {
                dbSection: "range",
                menuType: video.menuType,
                animation: video.animation,
                variant: video.variant,
                color: video.color,
                customPath: video.enableCustom && video.customPath ? video.customPath : false,
            },
            options: {
                detect: options.detect || "automatic",
                range: options.range || 2,
                isReturning: options.isReturning ?? false,
                switchType: options.switchType || "on",
            },
            sound: this.setSound(sound)
        }
        return data;
    }

    static setPrimaryOptions(data, type, handler) {
        switch (type) {
            case "melee":
                return {
                    contrast: data.contrast ?? 0,
                    delay: data.delay || 0,
                    elevation: data.elevation ?? 1000,
                    isAbsolute: data.isAbsolute ?? false,
                    isWait: data.isWait ?? false,
                    opacity: data.opacity ?? 1,
                    playbackRate: data.playbackRate || 1,
                    repeat: data.repeat || 1,
                    repeatDelay: data.repeatDelay ?? 1,
                    saturation: data.saturation ?? 0,
                    size: data.size || 1,
                    tint: data.tint ?? false,
                    tintColor: data.tintColor || "#FFFFFF",
                    zIndex: data.zIndex || 1,
                };
            case "range":
                return {
                    animationSource: data.animationSource ?? false,
                    contrast: data.contrast ?? 0,
                    fakeLocation: handler.fakeSource(),
                    delay: data.delay || 0,
                    elevation: data.elevation ?? 1000,
                    isAbsolute: data.isAbsolute ?? false,
                    isReturning: data.isReturning ?? false,
                    isWait: data.isWait ?? false,
                    onlyX: data.onlyX ?? false,
                    opacity: data.opacity ?? 1,
                    playbackRate: data.playbackRate || 1,
                    randomOffset: data.randomOffset ?? false,
                    repeat: handler.systemData.overrideRepeat || data.repeat || 1,
                    repeatDelay: data.repeatDelay ?? 1,
                    reverse: data.reverse ?? false,
                    saturation: data.saturation ?? 0,
                    tint: data.tint ?? false,
                    tintColor: data.tintColor || "#FFFFFF",
                    zIndex: data.zIndex || 1,
                };
            case "ontoken":
                return {
                    addTokenWidth: data.addTokenWidth ?? false,
                    anchor: this.convertToXY(data.anchor, true),
                    contrast: data.contrast ?? 0,
                    delay: data.delay ?? 1,
                    elevation: data.elevation ?? 1000,
                    isAbsolute: data.isAbsolute ?? false,
                    fadeIn: data.fadeIn ?? 250,
                    fadeOut: data.fadeOut ?? 500,
                    isMasked: data.isMasked ?? false,
                    isRadius: data.isRadius ?? false,
                    isWait: data.isWait ?? false,
                    opacity: data.opacity ?? 1,
                    persistent: data.persistent ?? false,
                    playbackRate: data.playbackRate || 1,
                    playOn: data.playOn || "default",
                    repeat: data.repeat || 1,
                    repeatDelay: data.repeatDelay ?? 1,
                    saturation: data.saturation ?? 0,
                    size: data.size || 1,
                    tint: data.tint ?? false,
                    tintColor: data.tintColor || "#FFFFFF",
                    unbindAlpha: data.unbindAlpha ?? false,
                    unbindVisibility: data.unbindVisibility ?? false,
                    zIndex: data.zIndex || 1,
                };
            case "templatefx":
                return {
                    aboveTemplate: data.aboveTemplate ?? false,
                    anchor: data.anchor,
                    contrast: data.contrast ?? 0,
                    delay: data.delay ?? 1,
                    elevation: data.elevation ?? 1000,
                    isAbsolute: data.isAbsolute ?? false,
                    isMasked: data.isMasked ?? false,
                    isWait: data.isWait ?? false,
                    occlusionMode: data.occlusionMode || "3",
                    occlusionAlpha: data.occlusionAlpha ?? 1,
                    opacity: data.opacity ?? 1,
                    persistent: data.persistent ?? false,
                    persistType: data.persistType || "sequencerground",
                    playbackRate: data.playbackRate || 1,
                    removeTemplate:  data.removeTemplate ?? false,
                    repeat: data.repeat || 1,
                    repeatDelay: data.repeatDelay ?? 1,
                    rotate: data.rotate ?? 0,
                    saturation: data.saturation ?? 0,
                    scale: this.convertToXY(data.scale),
                    tint: data.tint ?? false,
                    tintColor: data.tintColor || "#FFFFFF",
                    scaleX: data.scaleX || 1,
                    scaleY: data.scaleY || 1,
                    xray: data.xray ?? false,
                    zIndex: data.zIndex || 1,
                };
            case "aura":
                return {
                    addTokenWidth: data.addTokenWidth ?? false,
                    alpha: data.alpha ?? false,
                    alphaDuration: data.alphaDuration || 1000,
                    alphaMax: data.alphaMax ?? 0.5,
                    alphaMin: data.alphaMin ?? -0.5,
                    breath: data.breath ?? false,
                    breathDuration: data.breathDuration || 1000,
                    breathMax: data.breathMax ?? 1.05,
                    breathMin: data.breathMin ?? 0.95,
                    contrast: data.contrast ?? 0,
                    delay: data.delay || 1,
                    elevation: data.elevation ?? 1000,
                    isAbsolute: data.isAbsolute ?? false,
                    fadeIn: data.fadeIn ?? 250,
                    fadeOut: data.fadeOut ?? 500,
                    isWait: data.isWait ?? false,
                    opacity: data.opacity ?? 1,
                    playbackRate: data.playbackRate || 1,
                    playOn: data.playOn || "source",
                    size: data.size || 3,
                    tint: data.tint ?? false,
                    tintColor: data.tintColor || "#FFFFFF",
                    tintSaturate: data.tintSaturate ?? 0,
                    unbindAlpha: data.unbindAlpha ?? false,
                    unbindVisibility: data.unbindVisibility ?? false,
                    zIndex: data.zIndex || 1,
                };
        }
    }

    static convertToXY(input, isAnchor) {
        let dNum = isAnchor ? 0.5 : 1;
        if (!input) { return {x: dNum, y: dNum}}
        let parsedInput = input.split(',').map(s => s.trim());
        let posX = Number(parsedInput[0]);
        let posY = Number(parsedInput[1]);
        if (parsedInput.length === 2) {
            return {x: isNaN(posX) ? dNum : posX, y: isNaN(posY) ? dNum : posY}
        } else if( parsedInput.length === 1) {
            return {x: isNaN(posX) ? dNum : posX, y: isNaN(posX) ? dNum : posX}
        } else {
            return {x: dNum, y: dNum}
        }
    }

    static async compileSecondary(flagData, handler) {
        const topLevel = flagData || {};

        const secondary = topLevel.secondary || {};
        if (!secondary.enable) { return false; }
        const video = secondary.video || {};
        const options = secondary.options || {};
        const sound = secondary.sound || {};

        const data = {
            enable: secondary.enable ?? false,
            video: {
                dbSection: "static",
                menuType: video.menuType,
                animation: video.animation,
                variant: video.variant,
                color: video.color,
                customPath: video.enableCustom && video.customPath ? video.customPath : false,
            },
            options: {
                addTokenWidth: options.addTokenWidth ?? false,
                anchor: this.convertToXY(options.anchor, true),
                contrast: options.contrast ?? 0,
                delay: options.delay ?? 0,
                elevation: options.elevation ?? 1000,
                isAbsolute: options.isAbsolute ?? false,
                fadeIn: options.fadeIn ?? 250,
                fadeOut: options.fadeOut ?? 250,
                isMasked: options.isMasked ?? false,
                isRadius: options.isRadius ?? false,
                isWait: options.isWait ?? false,
                opacity: options.opacity || 1,
                playbackRate: options.playbackRate || 1,
                repeat: handler.systemData.overrideRepeat || options.repeat || 1,
                repeatDelay: options.repeatDelay ?? 250,
                rotateSource: options.rotateSource ?? false,
                saturation: options.saturation ?? 0,
                size: options.size || 1,
                tint: options.tint ?? false,
                tintColor: options.tintColor || "#FFFFFF",
                zIndex: options.zIndex || 1,
            },
            //sound: this.setSound(sound, topLevel.primary.options),
        }
        let addSoundDelay = 0;
        if (!data.options.isWait) {
            addSoundDelay = data.options.delay;
        }
        data.sound = this.setSound(sound, addSoundDelay, handler.systemData.overrideRepeat)
        data.path = secondary.enable ? await buildFile("static", data.video, data.video.customPath) : "";

        return data;
    }

    static async compileSource(flagData, primary) {
        const topLevel = flagData || {};
        const source = topLevel.source || {};
        const video = source.video || {};
        const options = source.options || {};
        const sound = source.sound || {};

        if (!source.enable) { return false; }

        const data = {
            enable: source.enable ?? false,
            video: {
                dbSection: "static",
                menuType: video.menuType,
                animation: video.animation,
                variant: video.variant,
                color: video.color,
                customPath: video.enableCustom && video.customPath ? video.customPath : false,
            },
            options: {
                animationSource: primary?.options?.animationSource ?? false,
                fakeLocation: primary?.options?.fakeLocation,
                addTokenWidth: options.addTokenWidth ?? false,
                anchor: this.convertToXY(options.anchor, true),
                contrast: options.contrast ?? 0,
                delay: options.delay ?? 0,
                elevation: options.elevation ?? 1000,
                isAbsolute: options.isAbsolute ?? false,
                fadeIn: options.fadeIn ?? 250,
                fadeOut: options.fadeOut ?? 500,
                isMasked: options.isMasked ?? false,
                isRadius: options.isRadius ?? false,
                isWait: options.isWait ?? false,
                opacity: options.opacity || 1,
                persistent: options.persistent ?? false,
                playbackRate: options.playbackRate || 1,
                repeat: options.repeat || 1,
                repeatDelay: options.repeatDelay || 1,
                saturation: options.saturation ?? 0,
                size: options.size || 1,
                tint: options.tint ?? false,
                tintColor: options.tintColor || "#FFFFFF",
                zIndex: options.zIndex || 1,
            },
            //sound: this.setSound(sound)
        }
        let addSoundDelay = 0;
        if (!data.options.isWait) {
            addSoundDelay = data.options.delay;
        }
        data.sound = this.setSound(sound, addSoundDelay)
        data.path = data.enable ? await buildFile(data.video.dbSection, data.video, data.video.customPath) : "";
        return data;
    }

    static async compileTarget(flagData) {
        const topLevel = flagData || {};

        const target = topLevel.target || {};
        const video = target.video || {};
        const options = target.options || {};
        const sound = target.sound || {};

        if (!target.enable) { return false; }

        const data = {
            enable: target.enable ?? false,
            video: {
                dbSection: "static",
                menuType: video.menuType,
                animation: video.animation,
                variant: video.variant,
                color: video.color,
                customPath: video.enableCustom && video.customPath ? video.customPath : false,
            },
            options: {
                addTokenWidth: options.addTokenWidth ?? false,
                anchor: this.convertToXY(options.anchor, true),
                contrast: options.contrast ?? 0,
                delay: options.delay ?? 0,
                elevation: options.elevation ?? 1000,
                fadeIn: options.fadeIn ?? 250,
                fadeOut: options.fadeOut ?? 250,
                isAbsolute: options.isAbsolute ?? false,
                isMasked: options.isMasked ?? false,
                //isWait: options.isWait ?? false,
                isRadius: options.isRadius ?? false,
                opacity: options.opacity || 1,
                playbackRate: options.playbackRate || 1,
                persistent: options.persistent ?? false,
                repeat: options.repeat || 1,
                repeatDelay: options.repeatDelay ?? 250,
                rotateSource: options.rotateSource ?? false,
                saturation: options.saturation ?? 0,
                size: options.size || 1,
                tint: options.tint ?? false,
                tintColor: options.tintColor || "#FFFFFF",
                unbindAlpha: options.unbindAlpha ?? false,
                unbindVisibility: options.unbindVisibility ?? false,
                zIndex: options.zIndex || 1,
            },
            sound: this.setSound(sound, options.delay ?? 0)
        }
        data.path = data.enable ? await buildFile("static", data.video, data.video.customPath) : "";
        return data;
    }

    static _targetSequence(targetFX, target, handler, addDelay = 0) {
        let hit;
        if (handler.playOnMiss) {
            hit = handler.hitTargetsId.includes(target.id) ? true : false;
        } else {
            hit = true;
        }

        const targetTokenGS = targetFX.options.isRadius ? targetFX.options.size * 2 : (target.w / canvas.grid.size) * 1.5 * targetFX.options.size;

        targetFX.targetSeq = new Sequence();

        let targetEffect = targetFX.targetSeq.effect()
        targetEffect.delay(targetFX.options.delay + addDelay)
        targetEffect.file(targetFX.path?.file, true)
        targetEffect.atLocation(target)
        //.scale(targetFX.tFXScale * targetFX.scale)
        targetEffect.size(targetTokenGS * 1.5 * targetFX.options.size, { gridUnits: true })
        targetEffect.repeats(targetFX.options.repeat, targetFX.options.repeatDelay)
        if (targetFX.options.elevation === 0) {
            effectAfterImage.belowTokens(true)
        } else {
            targetEffect.elevation(targetFX.options.elevation)
        }
        if (targetFX.options.isMasked) {
            targetEffect.mask(target)
        }
        targetEffect.persist(targetFX.options.persistent)
        targetEffect.fadeOut(500)
        targetEffect.opacity(targetFX.options.opacity)
        targetEffect.zIndex(targetFX.options.zIndex)
        //.playIf(playNow)

        return targetFX;
    }

    static howToDelete(type) {
        if (game.settings.get("autoanimations", "noTips")) { return; }
        let disableTips = "You can disabled these tips in the Automated Animations module settings"
        switch (type) {
            case 'overheadtile':
                custom_notify(`This is an OVERHEAD Tile. Use the Tile Foreground Layer to remove the Animation. ${disableTips}`)
                break;
            case 'groundtile':
                custom_notify(`This is an GROUND Tile. Use the Tile Layer to remove the Animation. ${disableTips}`)
                break;
            case 'sequencerground':
                custom_notify(`This is a SEQUENCER Persistent Effect. Use the Sequencer Effect Manager to remove the Animation. ${disableTips}`)
                break
        }
    }

    static async compileParticleData(animationData) {
        const options3d = animationData.levels3d;
        if (!options3d.enable) { return false; }
        const type = options3d.type;
        const options = options3d.data || {};
        const tokens = options3d.tokens || {};

        const secondary = options3d.secondary || {};
        const defaults = particleDefaultValues[type] ?? particleDefaultValues["projectile"];
        const data = {
            type: type,
            alpha: options.alpha ?? defaults.alpha,
            animationType: options.animationType ?? "twirl",
            arc: options.arc ?? defaults.arc,
            color01: options.color01 ?? defaults.color01,
            color02: options.color02 ?? defaults.color02,
            delay: options.delay ?? defaults.delay,
            emittersize: options.emittersize ?? defaults.emittersize,
            gravity: options.gravity ?? defaults.gravity,
            life: options.life ?? defaults.life,
            duration: options.duration ?? defaults.duration,
            mass: options.mass ?? defaults.mass,
            playOn: options.playOn ?? "source",
            rate: options.rate ?? defaults.rate,
            repeat: options.repeat ?? defaults.repeat,
            resetTime: options.resetTime ?? 100,
            rotateTowards: options.rotateTowards ?? false,
            rotationX: options.rotationX ?? 0,
            rotationY: options.rotationY ?? 0,
            rotationZ: options.rotationZ ?? 0,
            scale: options.scale ?? defaults.scale,
            speed: options.speed ?? defaults.speed,
            sprite: options.spritePath ?? defaults.sprite,
            autoSize: options.autoSize ?? defaults.autoSize,
            onCenter: options.onCenter ?? defaults.onCenter,
            sound: this.setSound(options3d.sound),
            tokenAnimation: {
                enable: tokens.enable ?? false,
                source: tokens.source ?? false,
                sourceType: tokens.sourceType ?? "twirl",
                sourceStart: tokens.sourcePlay !== "end"  ? true : false,
                sourceEnd: tokens.sourcePlay !== "start" ? true : false,
                target: tokens.target ?? false,
                targetType: tokens.targetType ?? "shake",
                targetStart: tokens.targetPlay !== "end"  ? true : false,
                targetEnd: tokens.targetPlay !== "start" ? true : false,
            },
            secondary: {
                enable: secondary.enable || false,
                alpha: secondary.data?.alpha ?? 0.5,
                color01: secondary.data?.color01 ?? "#FFFFFF",
                color02: secondary.data?.color02 ?? "#FFFFFF",
                emittersize: secondary.data?.emittersize ?? 1,
                gravity: secondary.data?.gravity ?? 2,
                life: secondary.data?.life ?? 500,
                mass: secondary.data?.mass ?? 100,
                rate: secondary.data?.rate ?? 10,
                scale: secondary.data?.scale ?? 1,
                speed: secondary.data?.speed ?? 1,
                autoSize: secondary.data?.autoSize ?? false,
                onCenter: secondary.data?.onCenter ?? false,
                duration: secondary.data?.duration ?? 3000,
                type: secondary.data?.type ?? "explosion",
                sprite: secondary.data?.spritePath ?? particleDefaultValues.explosion.sprite,
            }
        };
        return data;
    }

    static async compilePreset(flagData) {
        const topLevel = flagData || {};
        const presetType = topLevel.presetType;

        switch (presetType) {
            case "proToTemp":
                return await proToTemp();
            case "teleportation":
                return teleportation();
            case "dualattach":
                return dualAttach();
            case "thunderwave":
                return thunderwave();
        }

        async function proToTemp () {
            const flags = topLevel.data || {};
            const projectile = flags.projectile || {};
            const projectileOptions = projectile.options || {};
            const projectileSound = projectile.sound || {};
            const preExplosion = flags.preExplosion || {};
            const preExplosionOptions = preExplosion.options || {};
            const preExplosionSound = preExplosion.sound || {};
            const explosion = flags.explosion || {};
            const explosionOptions = explosion.options || {};
            const explosionSound = explosion.sound || {};
            const afterImage = flags.afterImage || {};
            const afterImageOptions = afterImage.options || {};

            const data = {
                projectile: {
                    dbSection: "range",
                    menuType: projectile.menuType,
                    animation: projectile.animation,
                    variant: projectile.variant,
                    color: projectile.color,
                    customPath: projectile.enableCustom && projectile.customPath ? projectile.customPath : false,
                    options: {
                        elevation: projectileOptions.elevation || 1000,
                        isAbsolute: projectileOptions.isAbsolute ?? false,
                        playbackRate: projectileOptions.playbackRate || 1,
                        randomOffset: projectileOptions.randomOffset ?? false,
                        repeat: projectileOptions.repeat || 1,
                        repeatDelay: projectileOptions.repeatDelay || 250,
                        removeTemplate: projectileOptions.removeTemplate ?? false,
                        wait: projectileOptions.wait ?? -500,
                        opacity: projectileOptions.opacity ?? 1,
                    },
                    sound: setSound(projectileSound)
                },
                preExplosion: {
                    dbSection: "static",
                    enable: preExplosion.enable || false,
                    menuType: preExplosion.menuType,
                    animation: preExplosion.animation,
                    variant: preExplosion.variant,
                    color: preExplosion.color,
                    customPath: preExplosion.enableCustom && preExplosion.customPath ? preExplosion.customPath : false,
                    options: {
                        aboveTemplate: preExplosionOptions.aboveTemplate ?? false,
                        elevation: preExplosionOptions.elevation ?? 1000,
                        isAbsolute: preExplosionOptions.isAbsolute ?? false,
                        playbackRate: preExplosionOptions.playbackRate || 1,
                        repeat: preExplosionOptions.repeat || 1,
                        repeatDelay: preExplosionOptions.repeatDelay || 250,
                        scale: preExplosionOptions.scale || 1,
                        wait: preExplosionOptions.wait ?? -500,
                        opacity: preExplosionOptions.opacity ?? 1,
                    },
                    sound: setSound(preExplosionSound)
                },
                explosion: {
                    dbSection: "static",
                    menuType: explosion.menuType,
                    animation: explosion.animation,
                    variant: explosion.variant,
                    color: explosion.color,
                    customPath: explosion.enableCustom && explosion.customPath ? explosion.customPath : false,
                    options: {
                        aboveTemplate: explosionOptions.aboveTemplate ?? false,
                        elevation: explosionOptions.elevation ?? 1000,
                        isAbsolute: explosionOptions.isAbsolute ?? false,
                        playbackRate: explosionOptions.playbackRate || 1,
                        repeat: explosionOptions.repeat || 1,
                        repeatDelay: explosionOptions.repeatDelay || 250,
                        scale: explosionOptions.scale || 1,
                        wait: explosionOptions.wait ?? -500,
                        opacity: explosionOptions.opacity ?? 1,
                    },
                    sound: setSound(explosionSound)

                },
                afterImage: {
                    customPath: afterImage.enable && afterImage.customPath ? afterImage.customPath : false,
                    enable: afterImage.enable ?? false,
                    options: {
                        elevation: afterImageOptions.elevation ?? 1000,
                        isAbsolute: afterImageOptions.isAbsolute ?? false,
                        persistent: afterImageOptions.persistent ?? false,
                        scale: afterImageOptions.scale || 1,
                    }
                },
                soundOnly: {
                    enable: false,
                }
            }
            data.projectile.path = await buildFile(data.projectile.dbSection, data.projectile, data.projectile.customPath)
            data.preExplosion.path = await buildFile(data.preExplosion.dbSection, data.preExplosion, data.preExplosion.customPath)
            data.explosion.path = await buildFile(data.explosion.dbSection, data.explosion, data.explosion.customPath)

            return data;
        }

        function teleportation() {
            const flags = topLevel.data || {};

            const start = flags.start || {};
            const startOptions = start.options || {};
            const between = flags.between || {};
            const betweenOptions = between.options || {};
            const end = flags.end || {};
            const endOptions = end.options || {};
            const options = flags.options || {};
            const sound = flags.sound || {};

            const data = {
                start: !start.enable ? false : {
                    menuType: start.menuType,
                    animation: start.animation,
                    variant: start.variant,
                    color: start.color,
                    customPath: start.enableCustom && start.customPath ? start.customPath : false,
                    options: {
                        //alpha: startOptions.alpha ?? 0,
                        delay: startOptions.delay ?? 0,
                        elevation: startOptions.elevation ?? 1000,
                        isAbsolute: startOptions.isAbsolute ?? false,
                        fadeIn: startOptions.fadeIn ?? 250,
                        fadeOut: startOptions.fadeOut ?? 500,
                        isMasked: startOptions.isMasked ?? false,
                        isRadius: startOptions.isRadius ?? false,
                        opacity: startOptions.opacity ?? 1,
                        playbackRate: startOptions.playbackRate || 1,
                        size: startOptions.size ?? 1,
                    },
                },
                between: !between.enable ? false :  {
                    menuType: between.menuType,
                    animation: between.animation,
                    variant: between.variant,
                    color: between.color,
                    customPath: between.enableCustom && between.customPath ? between.customPath : false,
                    options: {
                        delay: betweenOptions.delay ?? 0,
                        elevation: betweenOptions.elevation ?? 1000,
                        isAbsolute: betweenOptions.isAbsolute ?? false,
                        opacity: betweenOptions.opacity ?? 1,
                        playbackRate: betweenOptions.playbackRate ?? 1,
                    },
                },
                end: !end.enable ? false :  {
                    menuType: end.menuType,
                    animation: end.animation,
                    variant: end.variant,
                    color: end.color,
                    customPath: end.enableCustom && end.customPath ? end.customPath : false,
                    options: {
                        delay: endOptions.delay ?? 0,
                        elevation: endOptions.elevation ?? 1000,
                        isAbsolute: endOptions.isAbsolute ?? false,
                        fadeIn: startOptions.fadeIn ?? 250,
                        fadeOut: startOptions.fadeOut ?? 500,
                        isMasked: endOptions.isMasked ?? false,
                        isRadius: endOptions.isRadius ?? false,
                        opacity: endOptions.opacity ?? 1,
                        playbackRate: endOptions.playbackRate || 1,
                        size: endOptions.size ?? 1,
                    },
                },
                options: {
                    measureType: options.measureType || "alternating",
                    hideFromPlayers: options.hideFromPlayers ?? false,
                    range: options.range ?? 30,
                    teleport: options.teleport ?? false,
                    delayMove: options.delayMove ?? 0,
                    speed: options.speed || 6,
                    alpha: options.alpha ?? 1,
                    delayFade: options.delayFade ?? 0,
                    delayReturn: options.delayReturn ?? 0,
                    checkCollision: options.checkCollision ?? false,
                },
                sound: setSound(sound)
            }
            return data;
        }

        function dualAttach() {
            const flags = topLevel.data || {};

            const video = flags.video || {};
            const options = flags.options || {};
            const sound = flags.sound || {};

            const data = {
                video: {
                    menuType: video.menuType,
                    animation: video.animation,
                    variant: video.variant,
                    color: video.color,
                    customPath: video.enableCustom && video.customPath ? video.customPath : false,
                },
                options: {
                    elevation: options.elevation ?? 1000,
                    isAbsolute: options.isAbsolute ?? false,
                    onlyX: options.onlyX ?? false,
                    opacity: options.opacity ?? 1,
                    playbackRate: options.playbackRate,
                },
                sound: setSound(sound)
            }

            return data;
        }

        function  thunderwave() {
            const flags = topLevel.data || {};

            const options = flags.options || {};
            const sound = flags.sound || {};

            const data = {
                color: flags.color || "blue",
                options: {
                    elevation: options.elevation ?? 1000,
                    isAbsolute: options.isAbsolute ?? false,
                    opacity: options.opacity ?? 1,
                    repeat: options.repeat || 1,
                    repeatDelay: options.repeatDelay ?? 250,
                    removeTemplate: options.removeTemplate ?? false,
                },
                sound: setSound(sound)
            }
            return data;
        }

        function setSound(data, addDelay = 0) {

            const input = {
                enable: data.enable ?? false,
                file: data.file,
                delay: data.delay ?? 0,
                startTime: data.startTime ?? 0,
                volume: data.volume ?? 1,
                repeat: data.repeat || 1,
                repeatDelay: data.repeatDelay ?? 250,
            }
            if (!input.enable || !input.file) { return false }
            let soundSeq = new Sequence()
            let section = soundSeq.sound()
            section.file(input.file)
            section.delay(input.delay + addDelay)
            section.startTime(input.startTime)
            section.volume(input.volume)
            section.repeats(input.repeat, input.repeatDelay)
            return soundSeq;
        }

    }
}
/*
// Testing Hex to HSL conversion. Code from Jon Kantner https://css-tricks.com/converting-color-spaces-in-javascript/
function hexToHSL(H) {
    // Convert hex to RGB first
    let r = 0, g = 0, b = 0;
    if (H.length == 4) {
      r = "0x" + H[1] + H[1];
      g = "0x" + H[2] + H[2];
      b = "0x" + H[3] + H[3];
    } else if (H.length == 7) {
      r = "0x" + H[1] + H[2];
      g = "0x" + H[3] + H[4];
      b = "0x" + H[5] + H[6];
    }
    // Then to HSL
    r /= 255;
    g /= 255;
    b /= 255;
    let cmin = Math.min(r,g,b),
        cmax = Math.max(r,g,b),
        delta = cmax - cmin,
        h = 0,
        s = 0,
        l = 0;

    if (delta == 0)
      h = 0;
    else if (cmax == r)
      h = ((g - b) / delta) % 6;
    else if (cmax == g)
      h = (b - r) / delta + 2;
    else
      h = (r - g) / delta + 4;

    h = Math.round(h * 60);

    if (h < 0)
      h += 360;

    l = (cmax + cmin) / 2;
    s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
    s = +(s * 100).toFixed(1);
    l = +(l * 100).toFixed(1);

    return ({h: h, s: s/100, l: l/100})
  }
*/