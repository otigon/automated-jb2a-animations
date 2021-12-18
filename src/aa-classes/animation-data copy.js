import { buildFile } from "../animation-functions/file-builder/build-filepath.js";
import { AAITEMCHECK } from "../animation-functions/item-arrays.js";
export class AAanimationData {

    static async _primaryData(handler, autoObject) {
        
        if (autoObject) {
            const data = {};
            const autoOverridden = handler.autoOverride?.enable
            Object.assign(data, autoObject);
            data.animation = data.animation || "";
            data.customPath = data.custom ? data.customPath : false;
            data.color = autoOverridden ? handler.autoOverride?.color : data.color;
            data.repeat = autoOverridden ? handler.autoOverride?.repeat : data.repeat;
            data.delay = autoOverridden ? handler.autoOverride?.delay : data.delay;
            data.scale = autoOverridden ? handler.autoOverride?.scale || 1 : data.scale || 1;
            data.opacity = data.opacity || 1;
            data.variant = autoOverridden ? handler.autoOverride?.variant : data.variant;
            data.persistent = autoOverridden ? handler.autoOverride?.persistent : data.persistent;
            data.menuType = data.staticOptions === 'shieldfx' ? true : false;
            data.below = data.below ?? false;
            data.itemAudio = {
                enable: data.audio?.a01?.enable || false,
                file: data.audio?.a01?.file,
                volume: data.audio?.a01?.volume || 0.25,
                delay: data.audio?.a01?.delay || 0,
            }

            data.switchAnimation = data.switchAnimation === undefined ? data.animation : data.switchAnimation;
            data.switchColor = data.switchColor === undefined ? data.color : data.switchColor;
            data.switchAudio = {
                enable: data.audio?.a02?.enable || false,
                file: data.audio?.a02?.file,
                volume: data.audio?.a02?.volume || 0.25,
                delay: data.audio?.a02?.delay || 0,
            }
            //data.explosion = await this._explosionData(handler, true)

            data.removeTemplate = data.removeTemplate || false;
            data.occlusionMode = parseInt(data.occlusionMode ?? "3");
            data.occlusionAlpha = data.occlusionAlpha ?? "0";
            data.persistType = data.persistType || "sequencerground";

            data.ignoreTargets = data.ignoretargets || false;

            data.explosion = await this._explosionData(handler, true)
            return data;
        } else {
            const flags = handler.flags;
            const meleeSwitch = flags.meleeSwitch || {};//
            const options = flags.options || {};
            const data = {
                animation: flags.animation?.toLowerCase(),//
                color: flags.color?.toLowerCase() ?? "",//
                below: flags.animLevel || false,//

                options: options,
                variant: options.variant || "01",//
                repeat: options.repeat || 1,//
                delay: options.delay || 250,//
                scale: options.scale || 1,//
                opacity: options.opacity || 1,//
                persistent: options.persistent || false,//
                enableCustom = options.enableCustom || false,//
                customPath: options.enableCustom ? options.customPath : false,//
                staticType: options.staticType || "targetDefault",//
                menuType: options.staticOptions === 'shieldfx' ? true : false,//
                anchorX: options.anchorX || 1,
                anchorY: options.anchorY || 1,
                auraRadius: options.auraRadius || 3.5,//
                teleDist: options.teleDist || 30,//
                ignoreTargets: options.ignoreTargets || false,//
                tempType: options.tempType || "circle",
                hideTemplate: options.hideTemplate || false,
                removeTemplate: options.removeTemplate ?? false,
                occlusionMode: parseInt(options.occlusionMode ?? "3"),
                occlusionAlpha: options.occlusionAlpha ?? "0",
                persistType: options.persistType || "sequencerground",

                itemAudio: {//
                    enable: flags.audio?.a01?.enable || false,//
                    file: flags.audio?.a01?.file,//
                    volume: flags.audio?.a01?.volume || 0.25,//
                    delay: flags.audio?.a01?.delay || 0,//
                },//

                switchAnimation: meleeSwitch.switchType === 'custom' ? meleeSwitch.animation || "" : flags.animation || "",//
                switchType: meleeSwitch.switchType || "on",//
                switchColor: meleeSwitch.color || "white",//
                detect: meleeSwitch.detect ?? "auto",//
                return: meleeSwitch.returning || false,//
                switchVariant: meleeSwitch.variant ?? "01",
                range: meleeSwitch.range ?? 2,//
                switchType: meleeSwitch.switchType ?? "on",//
                switchAudio: {//
                    enable: flags.audio?.a02?.enable || false,//
                    file: flags.audio?.a02?.file,//
                    volume: flags.audio?.a02?.volume || 0.25,//
                    delay: flags.audio?.a02?.delay || 0,//
                },//


        
                explosion: await this._explosionData(handler, false),
            }
            //data.switchAnimation = meleeSwitch.switchType === 'custom' ? meleeSwitch.animation : handler.animation;
            if (data.switchAnimation === 'shortsword') { data.switchAnimation = 'sword' };
            //data.switchColor = meleeSwitch.color || "white";
            //data.switchType = meleeSwitch.switchType ?? "on";
            //data.detect = meleeSwitch.detect ?? "auto";
            //data.repeat = handler.repeat;
            //data.delay = handler.delay;
            //data.return = meleeSwitch.returning;
            //data.below = handler.below;
            //data.switchVariant = meleeSwitch.variant ?? "";
            //data.range = meleeSwitch.range ?? 2;
            //data.switchAudio = {
                //enable: handler.audio?.a02?.enable || false,
                //file: handler.audio?.a02?.file,
                //volume: handler.audio?.a02?.volume || 0.25,
                //delay: handler.audio?.a02?.delay || 0,
            //}
            //data.explosion = await this._explosionData(handler, false)

            return data;
            /*
            data.animation = handler.animation;
            data.variant = handler.variant ?? "01";
            data.color = handler.color;
            data.customPath = handler.enableCustom ? handler.customPath : false;
            data.switchType = handler.meleeSwitch?.switchType ?? "on";
            data.repeat = handler.repeat;
            data.delay = handler.delay
            data.scale = handler.scale;
            data.opacity = handler.options?.opacity || 1;
            data.below = handler.below;
            data.type = handler.options?.staticType ?? "targetDefault";
            data.menuType = handler.options?.staticOptions === 'shieldfx' ? true : false;
            data.persistent = handler.persistent;
            data.itemAudio = {
                enable: handler.audio?.a01?.enable || false,
                file: handler.audio?.a01?.file,
                volume: handler.audio?.a01?.volume || 0.25,
                delay: handler.audio?.a01?.delay || 0,
            }
            data.explosion = await this._explosionData(handler, false)
            */
        }
        //console.log(data)
        //return data;
    }
/*
    static async _switchData(handler, autoObject) {
        const meleeSwitch = handler.meleeSwitch;
        const data = {};
        if (autoObject) {
            const autoOverridden = handler.autoOverride?.enable
            Object.assign(data, autoObject);
            data.switchAnimation = data.switchAnimation === undefined ? data.animation : data.switchAnimation;
            data.switchColor = data.switchColor === undefined ? data.color : data.switchColor;
            data.color = autoOverridden ? handler.autoOverride?.color : data.color;
            data.repeat = autoOverridden ? handler.autoOverride?.repeat : data.repeat;
            data.delay = autoOverridden ? handler.autoOverride?.delay : data.delay;
            data.below = data.below ?? false;
            data.switchAudio = {
                enable: data.audio?.a02?.enable || false,
                file: data.audio?.a02?.file,
                volume: data.audio?.a02?.volume || 0.25,
                delay: data.audio?.a02?.delay || 0,
            }
            data.explosion = await this._explosionData(handler, true)
        } else {
            data.switchAnimation = meleeSwitch.switchType === 'custom' ? meleeSwitch.animation : handler.animation;
            if (data.switchAnimation === 'shortsword') { data.switchAnimation = 'sword' };
            data.switchColor = meleeSwitch.color || "white";
            data.switchType = meleeSwitch.switchType ?? "on";
            data.detect = meleeSwitch.detect ?? "auto";
            data.repeat = handler.repeat;
            data.delay = handler.delay;
            data.return = meleeSwitch.returning;
            data.below = handler.below;
            data.switchVariant = meleeSwitch.variant ?? "";
            data.range = meleeSwitch.range ?? 2;
            data.switchAudio = {
                enable: handler.audio?.a02?.enable || false,
                file: handler.audio?.a02?.file,
                volume: handler.audio?.a02?.volume || 0.25,
                delay: handler.audio?.a02?.delay || 0,
            }
            data.explosion = await this._explosionData(handler, false)
        }
        return data;
    }
*/
    static async _explosionData(handler, autorec) {
        if (autorec) {
            const explosion = {
                enabled: false,
                animation: "",
                variant: "",
                color: "",
                delay: 1,
                radius: 1.5,
                enableCustom: false,
                customPath: false,
                below: false,
                audio: {
                    enable: false,
                    //file: handler.audio?.e01?.file,
                    volume: 0.25,
                    delay: 0,
                }
            }
            explosion.data = "";
            explosion.scale = 1;

            return explosion;
        } else {
            const explosions = handler.flags.explosion || {};
            const explosion = {
                enabled: explosions.enable || false,
                animation: explosions.animation ?? "",
                variant: explosions.variant ?? "",
                color: explosions.color ?? "",
                delay: explosions.delay ?? 1,
                radius: explosions.radius ?? 1.5,
                enableCustom: explosions.enableCustom || false,
                customPath: explosions.enableCustom ? explosions.customPath : false,
                below: explosions.below || false,
                audio: {
                    enable: handler.flags.audio?.e01?.enable || false,
                    file: handler.flags.audio?.e01?.file,
                    volume: handler.flags.audio?.e01?.volume || 0.25,
                    delay: handler.flags.audio?.e01?.delay || 0,
                }
            };
            explosion.data = explosion.enabled ? await buildFile(true, explosion.animation, "static", explosion.variant, explosion.color, explosion.customPath) : "";
            explosion.scale = ((200 * explosion.radius) / explosion.data?.metadata?.width) ?? 1;

            return explosion;
        }
    }
    /*
    static _explosionSound(handler) {
        const explosionSound = {
            enable: handler.audio?.e01?.enable || false,
            file: handler.audio?.e01?.file,
            volume: handler.audio?.e01?.volume || 0.25,
            delay: handler.audio?.e01?.delay || 0,
        }
        return explosionSound;
    }
    */
    static async _sourceFX(handler, sourceToken) {
        const source = handler.flags.sourceToken || {};
        const enableCustom = source.enableCustom || false;
        const sourceFX = {
            enabled: source.enable || false,
            customSourcePath: enableCustom ? source.customPath : false,
            repeat: source.loops || 1,
            delay: source.loopDelay || 250,
            below: source.animLevel || false,
            startDelay: source.delayAfter || 500,
            scale: source.scale || 1,
            animation: source.name || "",
            color: source.color,
            variant: source.variant,
            opacity: source.opacity || 1,
            itemAudio: {
                enable: handler.flags.audio?.s01?.enable || false,
                file: handler.flags.audio?.s01?.file,
                volume: handler.flags.audio?.s01?.volume || 0.25,
                delay: handler.flags.audio?.s01?.delay || 0,
            },
        }

        if (source.enable && source.name === "a1" && !source.enableCustom) {
            sourceFX.enabled = false;
            console.warn("AUTOMATED ANIMATIONS || Target Animation is enabled on this item but NO Animation is chosen!");
        }
        const sourceScale = sourceToken.w;
        sourceFX.data = sourceFX.enabled ? await buildFile(true, sourceFX.animation, "static", sourceFX.variant, sourceFX.color, sourceFX.customSourcePath) : "";
        sourceFX.sFXScale = sourceFX.enabled ? 2 * sourceScale / sourceFX.data?.metadata?.width : 1;
        sourceFX.sourceSeq = new Sequence();
        sourceFX.sourceSeq.sound()
            .file(sourceFX.itemAudio.file)
            .volume(sourceFX.itemAudio.volume)
            .delay(sourceFX.itemAudio.delay)
            .playIf(() => {
                return sourceFX.itemAudio.enable && sourceFX.itemAudio.file && sourceFX.enabled;
            })
        sourceFX.sourceSeq.effect()
            .file(sourceFX.data.file)
            .atLocation(sourceToken)
            .gridSize(canvas.grid.size)
            .scale(sourceFX.sFXScale * sourceFX.scale)
            .repeats(sourceFX.repeat, sourceFX.delay)
            .belowTokens(sourceFX.below)
            .opacity(sourceFX.opacity)
            .waitUntilFinished(sourceFX.startDelay)
            .playIf(sourceFX.enabled)

        return sourceFX;
    }

    static async _targetFX(handler) {
        const target = handler.flags?.targetToken || {};
        const enableCustom = target.enableCustom || false;
        const targetFX = {
            enabled: target.enable || false,
            customTargetPath: enableCustom ? target.customPath : false,
            repeat: target.loops || 1,
            delay: target.loopDelay || 250,
            below: target.animLevel || false,
            startDelay: target.delayStart || 500,
            scale: target.scale || 1,
            animation: target.name || "",
            color: target.color,
            variant: target.variant,
            persistent: target.persistent || false,
            opacity: target.opacity || 1,
            itemAudio: {
                enable: handler.flags.audio?.t01?.enable || false,
                file: handler.flags.audio?.t01?.file,
                volume: handler.flags.audio?.t01?.volume || 0.25,
                delay: handler.flags.audio?.t01?.delay || 0,
            },
        }

        if (target.enable && target.name === "a1" && !target.enableCustom) {
            targetFX.enabled = false;
            console.warn("AUTOMATED ANIMATIONS || Target Animation is enabled on this item but NO Animation is chosen!");
        }
        targetFX.data = targetFX.enabled ? await buildFile(true, targetFX.animation, "static", targetFX.variant, targetFX.color, targetFX.customTargetPath) : {};
        /*
        targetFX.targetSeq = new Sequence();
        targetFX.targetSeq.effect()
            .delay(targetFX.startDelay)
            .file(targetFX.data?.file)
            //.atLocation(target)
            //.scale(targetFX.tFXScale * targetFX.scale)
            .repeats(targetFX.repeat, targetFX.delay)
            .belowTokens(targetFX.below)
            .gridSize(canvas.grid.size)
            .playIf(targetFX.enabled)
        */
        return targetFX
    }

    static _targetSequence(targetFX, target, handler) {
        let hit;
        if (handler.playOnMiss) {
            hit = handler.hitTargetsId.includes(target.id) ? true : false;
        } else {
            hit = true;
        }

        const playNow = (targetFX.enabled && hit) ? true : false;

        targetFX.tFXScale = targetFX.enabled ? 2 * target.w / targetFX.data.metadata?.width : 1;
        targetFX.targetSeq = new Sequence();
        targetFX.targetSeq.sound()
            .file(targetFX.itemAudio.file)
            .volume(targetFX.itemAudio.volume)
            .delay(targetFX.itemAudio.delay)
            .playIf(() => {
                return targetFX.itemAudio.enable && targetFX.itemAudio.file;
            })
        targetFX.targetSeq.effect()
            .delay(targetFX.startDelay)
            .file(targetFX.data?.file)
            .atLocation(target)
            .scale(targetFX.tFXScale * targetFX.scale)
            .repeats(targetFX.repeat, targetFX.delay)
            .belowTokens(targetFX.below)
            .persist(targetFX.persistent)
            .gridSize(canvas.grid.size)
            .opacity(targetFX.opacity)
            .playIf(playNow)

        return targetFX;
    }

    static async _variant(handler) {

    }

    static removePersistentEffect(token, effectName, sceneID) {
        let clsd = false;
        const tokenName = token.name;
        let d = new Dialog({
            title: tokenName,
            buttons: {
                yes: {
                    label: "Remove " + effectName,
                    callback: (html) => { clsd = true }
                },
            },
            default: 'yes',
            close: () => {
                if (clsd === false) console.log('This was closed without using a button');
                if (clsd === true) Sequencer.EffectManager.endEffects({ object: token, name: effectName, sceneId: sceneID });
            }
        },
            { width: 100, height: 75 }
        );
        d.options.resizable = true;
        d.render(true)
    }

    static howToDelete(type) {
        switch (type) {
            case 'overheadtile':
                ui.notifications.info("This is an OVERHEAD Tile. Use the Tile Foreground Layer to remove the Animation")
                break;
            case 'groundtile':
                ui.notifications.info("This is an GROUND Tile. Use the Tile Layer to remove the Animation")
                break;
            case 'sequencerground':
                ui.notifications.info("This is SEQUENCER Persistent Effect. Use the Sequencer Effect Manager to remove the Animation")
                break
        }
    }
}