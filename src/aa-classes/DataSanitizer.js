import { buildFile }                from "../animation-functions/file-builder/build-filepath.js";
import { custom_notify }            from "../constants/constants.js"
import { particleDefaultValues }    from "../animation-functions/levels-particles/particleDefaults.js";

export class DataSanitizer {

    static async _getAnimationData(handler, flagData) {
        if (!flagData) { return; }
        let menu = flagData.menu;
        menu = menu === "aefx" ? flagData.activeEffectType : menu;
        const data = {
            primary: menu === "preset" ? await this.compilePreset(flagData) : await this.compilePrimary(flagData, menu, handler),
            secondary: flagData.secondary ? await this.compileSecondary(flagData, handler) : false,
            sourceFX: await this.compileSource(handler, flagData),
            targetFX: flagData.target ? await this.compileTarget(flagData) : false,
            macro: await this.compileMacro(handler, flagData)
        }
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
        let soundSeq = new Sequence()
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
        if (data.video.menuType === 'shieldfx') { data.options.isShieldFX = true}
        data.path = await buildFile(false, data.video.menuType, data.video.animation, data.video.dbSection, data.video.variant, data.video.color, data.video.customPath)
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
                    delay: data.delay || 0,
                    elevation: data.elevation ?? 1000,
                    isAbsolute: data.isAbsolute ?? false,
                    isWait: data.isWait ?? false,
                    opacity: data.opacity ?? 1,
                    playbackRate: data.playbackRate || 1,
                    repeat: data.repeat || 1,
                    repeatDelay: data.repeatDelay ?? 1,
                    size: data.size || 1,
                    zIndex: data.zIndex || 1,
                };
            case "range":
                return {
                    animationSource: data.animationSource ?? false,
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
                    zIndex: data.zIndex || 1,
                };
            case "ontoken":
                return {
                    addTokenWidth: data.addTokenWidth ?? false,
                    anchor: this.convertToXY(data.anchor, true),
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
                    size: data.size || 1,
                    unbindAlpha: data.unbindAlpha ?? false,
                    unbindVisibility: data.unbindVisibility ?? false,
                    zIndex: data.zIndex || 1,
                };
            case "templatefx":
                return {
                    aboveTemplate: data.aboveTemplate ?? false,
                    anchor: data.anchor,
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
                    scale: this.convertToXY(data.scale),
                    scaleX: data.scaleX || 1,
                    scaleY: data.scaleY || 1,
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
                size: options.size || 1,
                zIndex: options.zIndex || 1,
            },
            //sound: this.setSound(sound, topLevel.primary.options),
        }
        let addSoundDelay = 0; 
        if (!data.options.isWait) {
            addSoundDelay = data.options.delay;
        }
        data.sound = this.setSound(sound, addSoundDelay, handler.systemData.overrideRepeat)
        data.path = secondary.enable ? await buildFile(false, data.video.menuType, data.video.animation, "static", data.video.variant, data.video.color, data.video.customPath) : "";

        return data;
    }

    static async compileSource(handler, flagData) {
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
                addTokenWidth: options.addTokenWidth ?? false,
                anchor: this.convertToXY(options.anchor, true),
                delay: options.delay ?? 0,
                elevation: options.elevation ?? 1000,
                isAbsolute: options.isAbsolute ?? false,
                fadeIn: options.fadeIn ?? 250,
                fadeOut: options.fadeOut ?? 500,
                isMasked: options.isMasked ?? false,
                isRadius: options.isRadius ?? false,
                isWait: options.isWait ?? false,
                opacity: options.opacity || 1,
                playbackRate: options.playbackRate || 1,
                repeat: options.repeat || 1,
                repeatDelay: options.repeatDelay || 1,
                size: options.size || 1,
                zIndex: options.zIndex || 1,
            },
            //sound: this.setSound(sound)
        }
        let addSoundDelay = 0; 
        if (!data.options.isWait) {
            addSoundDelay = data.options.delay;
        }
        data.sound = this.setSound(sound, addSoundDelay)

        //const sourceTokenGS = data.options.isRadius ? data.options.size * 2 : (handler.sourceToken.w / canvas.grid.size) * 1.5 * data.options.size;
        const sourceSize = handler.getSize(data.options.isRadius, data.options.size, handler.sourceToken, data.options.addTokenWidth)

        const sourceFile = data.enable ? await buildFile(false, data.video.menuType, data.video.animation, data.video.dbSection, data.video.variant, data.video.color, data.video.customPath) : "";

        data.sourceSeq = new Sequence();
        if (data.sound) {
            data.sourceSeq.addSequence(data.sound)
        }
        if (data.enable) {
            let sourceEffect = data.sourceSeq.effect()
            sourceEffect.file(sourceFile.file, true)
            sourceEffect.atLocation(handler.sourceToken)
            // TO-DO switch Scale/Radius
            sourceEffect.size(sourceSize, { gridUnits: true })
            sourceEffect.repeats(data.options.repeat, data.options.repeatDelay)
            sourceEffect.elevation(data.options.isAbsolute ? data.options.elevation : data.options.elevation - 1, {absolute: data.options.isAbsolute})
            sourceEffect.zIndex(data.options.zIndex)
            if (data.options.isMasked) {
                sourceEffect.mask(handler.sourceToken)
            }
            sourceEffect.opacity(data.options.opacity)
            sourceEffect.fadeIn(data.options.fadeIn)
            sourceEffect.fadeOut(data.options.fadeOut)
            if (data.options.isWait) {
                sourceEffect.waitUntilFinished(data.options.delay)
            } else {
                sourceEffect.delay(data.options.delay)
            }
            sourceEffect.anchor({x: data.options.anchor.x, y: data.options.anchor.y})
            sourceEffect.playbackRate(data.options.playbackRate)
        }
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
                delay: options.delay ?? 0,
                elevation: options.elevation ?? 1000,
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
                size: options.size || 1,
                unbindAlpha: options.unbindAlpha ?? false,
                unbindVisibility: options.unbindVisibility ?? false,
                zIndex: options.zIndex || 1,
            },
            sound: this.setSound(sound, options.delay ?? 0)
        }
        data.path = data.enable ? await buildFile(false, data.video.menuType, data.video.animation, "static", data.video.variant, data.video.color, data.video.customPath) : "";
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
        targetEffect.elevation(targetFX.options.elevation)
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

    static async compileParticleData(options3d) {
        const type = options3d.type;
        const options = options3d.data || {};

        const explode3d = options3d.addexplosion || {};
        const data = {
            type: type,
            speed: options.speed ?? particleDefaultValues[type].speed,
            repeat: options.repeat ?? particleDefaultValues[type].repeat,
            delay: options.delay ?? particleDefaultValues[type].delay,
            arc: options.arc ?? particleDefaultValues[type].arc,
            scale: options.scale ?? particleDefaultValues[type].scale,
            color01: options.color01 ?? particleDefaultValues[type].color01,
            color02: options.color02 ?? particleDefaultValues[type].color02,
            sprite: options.sprite ?? particleDefaultValues[type].sprite,
            life: options.life ?? particleDefaultValues[type].life,
            emittersize: options.emittersize ?? particleDefaultValues[type].emittersize,
            alpha: options.alpha ?? particleDefaultValues[type].alpha,
            mass: options.mass ?? particleDefaultValues[type].mass,
            gravity: options.gravity ?? particleDefaultValues[type].gravity,
            rate: options.rate ?? particleDefaultValues[type].rate,
            explosion: {
                enable: explode3d.enable || false,
                color01: explode3d.color01 ?? particleDefaultValues[type].explosion.color01,
                color02: explode3d.color02 ?? particleDefaultValues[type].explosion.color02,
                speed: explode3d.speed ?? particleDefaultValues[type].explosion.speed,
                gravity: explode3d.gravity ?? particleDefaultValues[type].explosion.gravity,
                life: explode3d.life ?? particleDefaultValues[type].explosion.life,
                rate: explode3d.rate ?? particleDefaultValues[type].explosion.rate,
                emittersize: explode3d.emittersize ?? particleDefaultValues[type].explosion.emittersize,
                alpha: explode3d.alpha ?? particleDefaultValues[type].explosion.alpha,
                mass: explode3d.mass ?? particleDefaultValues[type].explosion.mass,
                sprite: explode3d.sprite ?? particleDefaultValues[type].explosion.sprite,
                scale: explode3d.scale ?? particleDefaultValues[type].explosion.scale,
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
            data.projectile.path = await buildFile(false, data.projectile.menuType, data.projectile.animation, data.projectile.dbSection, data.projectile.variant, data.projectile.color, data.projectile.customPath)
            data.preExplosion.path = await buildFile(false, data.preExplosion.menuType, data.preExplosion.animation, data.preExplosion.dbSection, data.preExplosion.variant, data.preExplosion.color, data.preExplosion.customPath)
            data.explosion.path = await buildFile(false, data.explosion.menuType, data.explosion.animation, data.explosion.dbSection, data.explosion.variant, data.explosion.color, data.explosion.customPath)

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