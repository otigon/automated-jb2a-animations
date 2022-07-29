import { buildFile } from "../animation-functions/file-builder/build-filepath.js";
import { custom_notify } from "../constants/constants.js"
import { particleDefaultValues } from "../animation-functions/particleDefaults.js";

export class AAAnimationData {

    static async _getAnimationData(handler, autoObject) {
        const autorecData = autoObject ? autoObject : false;
        const data = {
            primary: await this._primaryData(handler, autorecData),
            //explosion: await this._explosionData(handler, autorecData),
            sourceFX: await this._sourceFX(handler, autorecData),
            targetFX: await this._targetFX(handler, autorecData),
        }
        return data;
    }

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
            customPath: primaryVideo.enableCustom ? flags.primary?.customPath : false,

            preset: flags.preset,

            options: options,
            zIndex: primaryOptions.zIndex || 1,
            isMasked: primaryOptions.isMasked || false,
            isReturning: primaryOptions.returning || false,
            addTokenWidth: primaryOptions.addTokenWidth || false,
            below: primaryOptions.below || false,
            aeDelay: primaryOptions.aeDelay || 250,
            repeat: primaryOptions.repeat || 1,
            delay: primaryOptions.delay || 250,
            scale: primaryOptions.scale || 1,
            scaleX: primaryOptions.scaleX || 1,
            scaleY: primaryOptions.scaleY || 1,
            opacity: primaryOptions.opacity || 1,
            persistent: primaryOptions.persistent || false,
            staticType: primaryOptions.staticType || "targetDefault",
            isShieldFX: primaryOptions.menuType === 'shieldfx' ? true : false,
            anchorX: primaryOptions.anchorX || 0.5,
            anchorY: primaryOptions.anchorY || 0.5,
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
                args: flags.macro?.args ? flags.macro.args.split(',').map(s => s.trim()) : "",
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

    static _targetSequence(targetFX, target, handler) {
        let hit;
        if (handler.playOnMiss) {
            hit = handler.hitTargetsId.includes(target.id) ? true : false;
        } else {
            hit = true;
        }

        //const playNow = (targetFX.enabled && hit) ? true : false;
        let targetTokenGS = target.w / canvas.grid.size

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
        targetEffect.delay(targetFX.startDelay)
        targetEffect.file(targetFX.data?.file, true)
        targetEffect.atLocation(target)
        //.scale(targetFX.tFXScale * targetFX.scale)
        targetEffect.size(targetTokenGS * 1.5 * targetFX.scale, { gridUnits: true })
        targetEffect.repeats(targetFX.repeat, targetFX.delay)
        targetEffect.belowTokens(targetFX.below)
        if (targetFX.isMasked) {
            targetEffect.mask(target)
        }
        targetEffect.persist(targetFX.persistent)
        targetEffect.fadeOut(500)
        targetEffect.opacity(targetFX.opacity)
        targetEffect.zIndex(targetFX.zIndex)
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
}