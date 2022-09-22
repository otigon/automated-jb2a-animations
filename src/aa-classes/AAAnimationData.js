import { buildFile } from "../animation-functions/file-builder/build-filepath.js";
import { custom_notify } from "../constants/constants.js"
import { particleDefaultValues } from "../animation-functions/levels-particles/particleDefaults.js";

export class AAAnimationData {

    static async _getAnimationData(handler, flagData) {
        if (!flagData) { return; }
        //const autorecData = autoObject ? autoObject : false;
        let menu = flagData.menu;
        menu = menu === "aefx" ? flagData.activeEffectType : menu;
        const data = {
            primary: menu === "preset" ? await this.compilePreset(handler, flagData) : await this.compilePrimary(handler, flagData),
            secondary: menu !== "preset" ? await this.compileSecondary(flagData) : false,
            sourceFX: await this.compileSource(handler, flagData),
            targetFX: flagData.menu === "aefx" ? false : await this.compileTarget(flagData),
            macro: await this.compileMacro(flagData)
        }
        return data;
    }

    static async compileMacro(flagData) {
        const macro = flagData;
        if (!macro || !macro.enable || !macro.name) { console.log("Automated Animations: Failed to compile Macro data"); return false}
        const data = {
            enable: macro.enable ?? false,
            name: macro.name ?? "",
            //args: flags.macro?.args ? flags.macro.args.split(',').map(s => s.trim()) : "",
            args: this.strToObj(macro.args),
            playWhen: macro.playWhen ?? "0",    
        }
        return data;
    }

    static setSound(data, addDelay = 0) {

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

    static async compilePrimary(handler, flagData) {
        const topLevel = flagData || {};
        const menu = handler.isActiveEffect ? topLevel.activeEffectType : topLevel.menu;

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
            options: this.setPrimaryOptions(options, menu),
            //sound: this.setSound(sound),
        }
        let addSoundDelay = 0; 
        if (!data.options.isWait) {
            addSoundDelay = data.options.delay;
        }
        data.sound = this.setSound(sound, addSoundDelay)
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

    static setPrimaryOptions(data, type) {
        switch (type) {
            case "melee":
                return {
                    delay: data.delay || 0,
                    elevation: data.elevation ?? 1000,
                    isWait: data.isWait ?? false,
                    opacity: data.opacity ?? 1,
                    repeat: data.repeat || 1,
                    repeatDelay: data.repeatDelay ?? 1,
                    size: data.size || 1,
                    zIndex: data.zIndex || 1,
                };
            case "range":
                return {
                    delay: data.delay || 0,
                    elevation: data.elevation ?? 1000,
                    isReturning: data.isReturning ?? false,
                    repeat: data.repeat || 1,
                    repeatDelay: data.repeatDelay ?? 1,
                    onlyX: data.onlyX ?? false,
                    opacity: data.opacity ?? 1,
                    isWait: data.isWait ?? false,
                    zIndex: data.zIndex || 1,
                };
            case "ontoken":
                return {
                    addTokenWidth: data.addTokenWidth ?? false,
                    delay: data.delay ?? 1,
                    elevation: data.elevation ?? 1000,
                    fadeIn: data.fadeIn ?? 250,
                    fadeOut: data.fadeOut ?? 500,
                    isMasked: data.isMasked ?? false,
                    isWait: data.isWait ?? false,
                    opacity: data.opacity ?? 1,
                    persistent: data.persistent ?? false,
                    playOn: data.playOn || "default",
                    repeat: data.repeat || 1,
                    repeatDelay: data.repeatDelay ?? 1,
                    size: data.size || 1,
                    isRadius: data.isRadius ?? false,
                    unbindAlpha: data.unbindAlpha ?? false,
                    unbindVisibility: data.unbindVisibility ?? false,
                    zIndex: data.zIndex || 1,
                };
            case "templatefx":
                return {
                    delay: data.delay ?? 1,
                    elevation: data.elevation ?? 1000,
                    isMasked: data.isMasked ?? false,
                    isWait: data.isWait ?? false,
                    occlusionMode: data.occlusionMode || "3",
                    occlusionAlpha: data.occlusionAlpha ?? 1,
                    opacity: data.opacity ?? 1,
                    persistent: data.persistent ?? false,
                    persistType: data.persistType || "sequencerground",
                    removeTemplate:  data.removeTemplate ?? false,
                    repeat: data.repeat || 1,
                    repeatDelay: data.repeatDelay ?? 1,
                    rotate: data.rotate ?? 0,
                    scaleX: data.scaleX || 1,
                    scaleY: data.scaleY || 1,
                    zIndex: data.zIndex || 1,
                };
            case "aura":
                return {
                    elevation: data.elevation ?? 1000,
                    unbindAlpha: data.unbindAlpha ?? false,
                    unbindVisibility: data.unbindVisibility ?? false,
                    ignoreTarget: data.ignoreTarget ?? false,
                    isMasked: data.isMasked ?? false,
                    isWait: data.isWait ?? false,
                    zIndex: data.zIndex || 1,
                    opacity: data.opacity ?? 1,
                    radius: data.radius || 3,
                    addTokenWidth: data.addTokenWidth ?? false,
                    delay: data.delay || 1,
                };
        }
    }

    static async compileSecondary(flagData) {
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
                delay: options.delay ?? 0,
                elevation: options.elevation ?? 1000,
                fadeIn: options.fadeIn ?? 250,
                fadeOut: options.fadeOut ?? 250,
                zIndex: options.zIndex || 1,
                size: options.size || 1,
                isRadius: options.isRadius ?? false,
                isMasked: options.isMasked ?? false,
                isWait: options.isWait ?? false,
                opacity: options.opacity || 1,
                repeat: options.repeat || 1,
                repeatDelay: options.repeatDelay ?? 250,
            },
            //sound: this.setSound(sound, topLevel.primary.options),
        }
        let addSoundDelay = 0; 
        if (!data.options.isWait) {
            addSoundDelay = data.options.delay;
        }
        data.sound = this.setSound(sound, addSoundDelay)
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
                delay: options.delay ?? 0,
                elevation: options.elevation ?? 1000,
                fadeIn: options.fadeIn ?? 250,
                fadeOut: options.fadeOut ?? 500,
                isWait: options.isWait ?? false,
                isMasked: options.isMasked ?? false,
                isRadius: options.isRadius ?? false,
                opacity: options.opacity || 1,
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

        const sourceTokenGS = data.options.isRadius ? data.options.size * 2 : (handler.sourceToken.w / canvas.grid.size) * 1.5 * data.options.size;

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
            sourceEffect.size(sourceTokenGS, { gridUnits: true })
            sourceEffect.repeats(data.options.repeat, data.options.repeatDelay)
            sourceEffect.elevation(data.options.elevation)
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
                delay: options.delay ?? 0,
                elevation: options.elevation ?? 1000,
                isMasked: options.isMasked ?? false,
                //isWait: options.isWait ?? false,
                isRadius: options.isRadius ?? false,
                repeat: options.repeat || 1,
                repeatDelay: options.repeatDelay ?? 250,
                persistent: options.persistent ?? false,
                unbindAlpha: options.unbindAlpha ?? false,
                unbindVisibility: options.unbindVisibility ?? false,
                opacity: options.opacity || 1,
                size: options.size || 1,
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

        //const playNow = (targetFX.enabled && hit) ? true : false;
        //let targetTokenGS = target.w / canvas.grid.size
        const targetTokenGS = targetFX.options.isRadius ? targetFX.options.size * 2 : (target.w / canvas.grid.size) * 1.5 * targetFX.options.size;

        //targetFX.tFXScale = targetFX.enable ? 2 * target.w / targetFX.data.metadata?.width : 1;
        targetFX.targetSeq = new Sequence();
        /*
        targetFX.targetSeq.sound()
            .file(targetFX.itemAudio?.file, true)
            .volume(targetFX.itemAudio?.volume)
            .delay(targetFX.itemAudio?.delay + targetFX.startDelay)
            .repeats(targetFX.repeat, targetFX.delay)
            .playIf(() => {
                return targetFX.itemAudio?.enable && targetFX.itemAudio?.file && targetFX.enabled;
            })
        */
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
    /*
    static async _sounds(soundSettings) {
        const data = soundSettings.animationData.primary;
        //const sourceFX = flagData.sourceFX;
        const targetFX = soundSettings.animationData.targetFX;
        let soundSeq = new Sequence();
        if (data.playSound || (data.playSwitchSound && soundSettings.switchSound)) {
            if (!soundSettings.switchSound) {
                soundSeq.sound()
                    .file(data.itemAudio.file, true)
                    .volume(data.itemAudio.volume)
                    .delay(data.itemAudio.delay)
                    .repeats(data.itemAudio.repeat, data.delay)
                    .startTime(data.itemAudio.startTime)
            } else if (soundSettings.switchSound && data.switchAudio?.enable) {
                soundSeq.sound()
                    .file(data.switchAudio.file, true)
                    .volume(data.switchAudio.volume)
                    .delay(data.switchAudio.delay)
                    .repeats(data.switchAudio.repeat, data.delay)
                    .startTime(data.switchAudio.startTime)
            }
        }
        if (data.explosion.playSound && soundSettings.explosionSound) {
            soundSeq.sound()
                .file(data.explosion?.audio?.file, true)
                .playIf(data.explosion?.playSound)
                .delay(data.explosion?.audio?.delay + data.explosion?.delay)
                .volume(data.explosion?.audio?.volume)
                .repeats(data.explosion?.audio?.repeat, data.delay)
                .startTime(data.explosion?.audio?.startTime)
        }
        if (targetFX.playSound && soundSettings.targetSound) {
            soundSeq.sound()
                .file(targetFX.itemAudio?.file, true)
                .volume(targetFX.itemAudio?.volume)
                .delay(targetFX.itemAudio?.delay + targetFX.startDelay)
                .repeats(targetFX.itemAudio?.repeat, targetFX.itemAudio?.soundDelay)
                .startTime(targetFX.itemAudio?.startTime)
        }
        return soundSeq;
    }

    static async _primaryData(handler, autoObject) {
        const flags = autoObject ? autoObject || {}: handler.flags || {};
        const meleeSwitch = flags.meleeSwitch || {};
        const options = flags.options || {};

        const primaryVideo = flags.primary?.video || {};
        const primaryOptions = flags.primary?.options || {};
        const primaryAudio = flags.primary?.sound || {};

        const data = {
            isAuto: autoObject ? true : false,
            menuType: primaryVideo.menuType,
            animation: primaryVideo.animation?.toLowerCase(),
            variant: primaryVideo.variant,
            color: primaryVideo.color?.toLowerCase() ?? "",
            enableCustom: primaryVideo.enableCustom || false,
            customPath: primaryVideo.enableCustom ? primaryVideo.customPath : false,

            preset: flags.preset,

            options: options,
            zIndex: primaryOptions.zIndex || 1,
            isMasked: primaryOptions.isMasked || false,
            isReturning: primaryOptions.returning || false,
            addTokenWidth: primaryOptions.addTokenWidth || false,
            elevation: primaryOptions.elevation ?? 1000,
            aeDelay: primaryOptions.aeDelay || 250,
            repeat: primaryOptions.repeat || 1,
            delay: primaryOptions.delay || 250,
            scale: primaryOptions.scale || 1,
            isRadius: primaryOptions.isRadius || false,
            size: primaryOptions.size || 1,
            radius: primaryOptions.radius || 1,
            scaleX: primaryOptions.scaleX || 1,
            scaleY: primaryOptions.scaleY || 1,
            opacity: primaryOptions.opacity || 1,
            persistent: primaryOptions.persistent || false,
            playOn: primaryOptions.playOn || "default",
            isShieldFX: primaryOptions.menuType === 'shieldfx' ? true : false,
            anchorX: primaryOptions.anchorX ?? 0.5,
            anchorY: primaryOptions.anchorY ?? 0.5,
            auraRadius: primaryOptions.auraRadius || 3.5,
            teleDist: primaryOptions.teleDist || 30,
            ignoreTargets: primaryOptions.ignoreTarget || false,
            tempType: primaryOptions.tempType || "circle",
            hideTemplate: primaryOptions.hideTemplate || false,
            removeTemplate: primaryOptions.removeTemplate ?? false,
            occlusionMode: parseInt(primaryOptions.occlusionMode ?? "3"),
            occlusionAlpha: primaryOptions.occlusionAlpha ?? "0",
            persistType: primaryOptions.persistType || "sequencerground",
            measureType: primaryOptions.measureType || "alternating",
            hideFromPlayers: primaryOptions.hideFromPlayers || false,
            playbackRate: primaryOptions.playbackRate || 1,
            onlyX: primaryOptions.onlyX ?? false,
            unbindAlpha: primaryOptions.unbindAlpha ? false : true,
            unbindVisibility: primaryOptions.unbindVisibility ? false : true,

            itemAudio: {
                enable: primaryAudio.enable || false,
                file: primaryAudio.file,
                volume: primaryAudio.volume || 0.25,
                delay: primaryAudio.delay || 0,
                repeat: handler.decoupleSound ? 1 : options.repeat || 1,
                startTime: primaryAudio.startTime || 0,
            },

            switchAnimation: meleeSwitch.switchType === 'custom' ? meleeSwitch.animation || "" : flags.primary?.animation || "",
            switchType: meleeSwitch.switchType || "on",
            switchColor: meleeSwitch.switchType === 'custom' ? meleeSwitch.color || "white" : flags.primary?.color || "",
            detect: meleeSwitch.detect ?? "auto",
            return: meleeSwitch.returning || false,
            switchVariant: meleeSwitch.switchType === 'custom' ? meleeSwitch.variant || "01" : flags.primary?.variant || '01',
            switchMenuType: meleeSwitch.menuType || "weapon",
            range: meleeSwitch.range ?? 2,
            switchAudio: {
                enable: flags.audio?.a02?.enable || false,
                file: flags.audio?.a02?.file,
                volume: flags.audio?.a02?.volume || 0.25,
                delay: flags.audio?.a02?.delay || 0,
                repeat: handler.decoupleSound ? 1 : options.repeat || 1,
                startTime: flags.audio?.a02?.startTime || 0,
            },
            explosion: await this._explosionData(handler, autoObject),

            macro: {
                enabled: flags.macro?.enable ?? false,
                name: flags.macro?.name ?? "",
                //args: flags.macro?.args ? flags.macro.args.split(',').map(s => s.trim()) : "",
                args: this.strToObj(flags.macro?.args),
                playWhen: flags.macro?.playWhen ?? "0",
            }
        }

        if (autoObject) {
            data.soundOnly = {
                enable: flags.soundOnly?.enable ?? false,
                file: flags.soundOnly?.file ?? "",
                volume: flags.soundOnly?.volume ?? 0.25,
                delay: flags.soundOnly?.delay ?? 0,
                startTime: flags.soundOnly?.startTime ?? 0,
            }
        }
        //data.macro.args = data.macro.preArgs.split(',').map(s => s.trim());
        data.playMacro = data.macro.enabled && data.macro.name ? true : false;
        data.playSound = data.itemAudio?.enable && data.itemAudio?.file ? true : false;
        data.playSwitchSound = data.switchAudio.enable && data.switchAudio.file && data.switchType !== "off" ? true : false;
        if (data.switchAnimation === 'shortsword') { data.switchAnimation = 'sword' };
        return data;
    }
    */
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
    /*
    static async _explosionData(handler, autorec) {
        const explosionData = autorec ? autorec.explosion || {} : handler.flags?.explosion || {};
        const video = explosionData.video || {};
        const options = explosionData.options || {};
        const sound = explosionData.sound || {};

        //const explosions = autorec.explosion ?? {};
        const explosion = {
            enabled: explosionData.enable || false,

            menuType: video.menuType || false,
            animation: video.animation || "",
            variant: video.variant ?? "",
            color: video.color || "",
            enableCustom: video.custom || false,
            customPath: video.custom ? video.customPath : false,

            delay: (options.delay || 1) + 500,
            radius: options.radius || 1.5,
            below: options.below || false,
            isMasked: options.isMasked || false,
            zIndex: options.zIndex || 1,
            opacity: options.opacity || 1,
            audio: {
                enable: sound.enable || false,
                file: sound.file ?? "",
                volume: sound.volume || 0.75,
                delay: sound.delay || 0,
                repeat: handler.decoupleSound ? 1 : autorec.primary?.options?.repeat || 1,
                startTime: sound.startTime || 0,
            },
        };
        explosion.playSound = explosion.enabled && explosion.audio?.enable && explosion.audio?.file !== "";
        explosion.data = explosion.enabled ? await buildFile(false, explosion.menuType, explosion.animation, "static", explosion.variant, explosion.color, explosion.customPath) : "";
        return explosion;
    }

    static async _sourceFX(handler, autorec) {
        const sourceData = autorec ? autorec.source || {} : handler.flags?.source || {};
        const video = sourceData.video || {};
        const options = sourceData.options || {};
        const sound = sourceData.sound || {};

        const sourceFX = {
            menuType: video.menuType,
            animation: video.animation,
            variant: video.variant,
            color: video.color,
            enableCustom: video.enableCustom || false,
            customPath: video.enableCustom ? video.customPath : false,

            enabled: sourceData.enable || false,

            repeat: options.repeat || 1,
            delay: options.delay || 250,
            below: options.below || false,
            isMasked: options.isMasked || false,
            startDelay: options.delayAfter || 500,
            scale: options.scale || 1,
            opacity: options.opacity || 1,
            zIndex: options.zIndex || 1,

            sound: {
                enable: sound.enable || false,
                file: sound.file,
                volume: sound.volume || 0.25,
                delay: sound.delay || 0,
                repeat: handler.decoupleSound ? 1 : options.repeat || 1,
                startTime: sound.startTime || 0,
            }
        }

        if (sourceData.enable && (sourceFX.animation === "a1" || !sourceFX.animation) && !sourceFX.customSourcePath) {
            sourceFX.enabled = false;
            console.warn("AUTOMATED ANIMATIONS || Target Animation is enabled on this item but NO Animation is chosen!");
        }
        const sourceTokenGS = handler.sourceToken.w / canvas.grid.size;
        //const sourceScale = handler.sourceToken.w;
        sourceFX.data = sourceFX.enabled ? await buildFile(false, sourceFX.menuType, sourceFX.animation, "static", sourceFX.variant, sourceFX.color, sourceFX.customSourcePath) : "";
        //sourceFX.sFXScale = sourceFX.enabled ? 2 * sourceScale / sourceFX.data?.metadata?.width : 1;
        sourceFX.sourceSeq = new Sequence();
        if (sourceFX.sound.enable && sourceFX.sound.file && sourceFX.enabled) {
            sourceFX.sourceSeq.sound()
                .file(sourceFX.sound.file, true)
                .volume(sourceFX.sound.volume)
                .delay(sourceFX.sound.delay)
                .startTime(sourceFX.sound.startTime)
        }
        if (sourceFX.enabled) {
            let sourceEffect = sourceFX.sourceSeq.effect()
            sourceEffect.file(sourceFX.data.file, true)
            sourceEffect.atLocation(handler.sourceToken)
            //.scale(sourceFX.sFXScale * sourceFX.scale)
            sourceEffect.size(sourceTokenGS * 1.5 * sourceFX.scale, { gridUnits: true })
            sourceEffect.repeats(sourceFX.repeat, sourceFX.delay)
            sourceEffect.belowTokens(sourceFX.below)
            sourceEffect.zIndex(sourceFX.zIndex)
            if (sourceFX.isMasked) {
                sourceEffect.mask(handler.sourceToken)
            }
            sourceEffect.opacity(sourceFX.opacity)
            sourceEffect.fadeOut(500)
            sourceEffect.waitUntilFinished(sourceFX.startDelay)
            //.playIf(sourceFX.enabled)
        }

        return sourceFX;
    }

    static async _targetFX(handler, autorec) {
        const targetData = autorec ? autorec.target || {} : handler.flags?.target || {};
        const video = targetData.video || {};
        const options = targetData.options || {};
        const sound = targetData.sound || {};

        const targetFX = {
            menuType: video.menuType,
            animation: video.animation,
            variant: video.variant,
            color: video.color,
            enableCustom: video.enableCustom || false,
            customPath: video.enableCustom ? video.customPath : false,

            enabled: targetData.enable || false,

            repeat: options.repeat || 1,
            delay: options.delay || 250,
            below: options.below || false,
            isMasked: options.isMasked || false,
            startDelay: options.delayAfter || 500,
            scale: options.scale || 1,
            opacity: options.opacity || 1,
            zIndex: options.zIndex || 1,

            sound: {
                enable: sound.enable || false,
                file: sound.file,
                volume: sound.volume || 0.25,
                delay: sound.delay || 0,
                repeat: handler.decoupleSound ? 1 : options.repeat || 1,
                startTime: sound.startTime || 0,
            }

        }

        if (targetData.enable && (targetFX.animation === "a1" || !targetFX.animation) && !targetFX.customTargetPath) {
            targetFX.enabled = false;
            console.warn("AUTOMATED ANIMATIONS || Target Animation is enabled on this item but NO Animation is chosen!");
        }
        targetFX.playSound = targetFX.sound.enable && targetFX.enabled && targetFX.sound.file ? true : false;
        targetFX.data = targetFX.enabled ? await buildFile(false, targetFX.menuType, targetFX.animation, "static", targetFX.variant, targetFX.color, targetFX.customTargetPath) : {};
        return targetFX
    }
    */

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

    static async compilePreset(handler, flagData) {
        const topLevel = flagData || {};
        const presetType = topLevel.presetType;

        switch (presetType) {
            case "proToTemp":
                return proToTemp();
            case "teleportation":
                return teleportation();
            case "dualattach":
                return dualAttach();
            case "thunderwave":
                return thunderwave();
        }

        function proToTemp () {
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
                    menuType: projectile.menuType,
                    animation: projectile.animation,
                    variant: projectile.variant,
                    color: projectile.color,
                    customPath: projectile.enableCustom && projectile.customPath ? projectile.customPath : false,
                    options: {
                        elevation: projectileOptions.elevation || 1000,
                        repeat: projectileOptions.repeat || 1,
                        repeatDelay: projectileOptions.repeatDelay || 250,
                        removeTemplate: projectileOptions.removeTemplate ?? false,
                        wait: projectileOptions.wait ?? -500,
                        opacity: projectileOptions.opacity ?? 1,
                    },
                    sound: setSound(projectileSound)
                },
                preExplosion: {
                    enable: preExplosion.enable || false,
                    menuType: preExplosion.menuType,
                    animation: preExplosion.animation,
                    variant: preExplosion.variant,
                    color: preExplosion.color,
                    customPath: preExplosion.enableCustom && preExplosion.customPath ? preExplosion.customPath : false,
                    options: {
                        elevation: preExplosionOptions.elevation ?? 1000,
                        repeat: preExplosionOptions.repeat || 1,
                        repeatDelay: preExplosionOptions.repeatDelay || 250,
                        scale: preExplosionOptions.scale || 1,
                        wait: preExplosionOptions.wait ?? -500,
                        opacity: preExplosionOptions.opacity ?? 1,
                    },
                    sound: setSound(preExplosionSound)
                },
                explosion: {
                    enable: explosion.enable || false,
                    menuType: explosion.menuType,
                    animation: explosion.animation,
                    variant: explosion.variant,
                    color: explosion.color,
                    customPath: explosion.enableCustom && explosion.customPath ? explosion.customPath : false,
                    options: {
                        elevation: explosionOptions.elevation ?? 1000,
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
                    options: {
                        elevation: afterImageOptions.elevation ?? 1000,
                        persistent: afterImageOptions.persistent ?? false,
                        scale: afterImageOptions.scale || 1,
                    }
                }, 
                soundOnly: {
                    enable: false,
                }    
            }
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
                start: {
                    menuType: start.menuType,
                    animation: start.animation,
                    variant: start.variant,
                    color: start.color,
                    customPath: start.enableCustom && start.customPath ? start.customPath : false,
                    options: {
                        alpha: startOptions.alpha ?? 0,
                        isMasked: startOptions.isMasked ?? false,
                        elevation: startOptions.elevation ?? 1000,
                        opacity: startOptions.opacity ?? 1,
                        size: startOptions.size ?? 1,
                        isRadius: startOptions.isRadius ?? false,
                    },
                },
                between: {
                    menuType: between.menuType,
                    animation: between.animation,
                    variant: between.variant,
                    color: between.color,
                    customPath: between.enableCustom && between.customPath ? between.customPath : false,
                    options: {
                        enable: betweenOptions.enable ?? false,
                        elevation: betweenOptions.elevation ?? 1000,
                        opacity: betweenOptions.opacity ?? 1,
                        playbackRate: betweenOptions.playbackRate ?? 1,
                    },
                },
                end: {
                    menuType: end.menuType,
                    animation: end.animation,
                    variant: end.variant,
                    color: end.color,
                    customPath: end.enableCustom && end.customPath ? end.customPath : false,
                    options: {
                        elevation: endOptions.elevation ?? 1000,
                        isMasked: endOptions.isMasked ?? false,
                        opacity: endOptions.opacity ?? 1,
                        isRadius: endOptions.isRadius ?? false,
                        size: endOptions.size ?? 1,
                        delay: endOptions.delay ?? 250,
                    },
                },
                options: {
                    hideFromPlayers: options.hideFromPlayers ?? false,
                    range: options.range ?? 30,
                    measureType: options.measureType || "alternating",
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
                    opacity: options.opacity ?? 1,
                    repeat: options.repeat || 1,
                    repeatDelay: options.repeatDelay ?? 250,
                    scale: options.scale || 1,
                },
                sound: this.setSound(sound)
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