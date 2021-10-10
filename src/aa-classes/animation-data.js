import { buildFile } from "../animation-functions/file-builder/build-filepath.js";
import { AAITEMCHECK } from "../animation-functions/item-arrays.js";
export class AAanimationData {

    static _primaryData (handler, autoObject) {
        const data = {};
        if (autoObject) {
            const autoOverridden = handler.options?.overrideAuto
            Object.assign(data, autoObject);
            data.animation = data.animation || "";
            data.customPath = data.custom ? data.customPath : false;
            data.color = autoOverridden ? handler.options?.autoColor : data.color;
            data.repeat = autoOverridden ? handler.options?.autoRepeat : data.repeat;
            data.delay = autoOverridden ? handler.options?.autoDelay : data.delay;
            data.scale = autoOverridden ? handler.options?.autoScale : data.scale;
            data.variant = autoOverridden ? handler.options?.autoVariant : data.variant;
            data.persistent = autoOverridden ? handler.options?.autoPersist : data.persistent;
        } else {
            data.animation = handler.animation;
            data.variant = handler.variant ?? "01";
            data.color = handler.color;
            data.customPath = handler.enableCustom ? handler.customPath : false;
            data.switchType = handler.meleeSwitch?.switchType ?? "on";
            data.repeat = handler.repeat;
            data.delay = handler.delay
            data.scale = handler.scale;
            data.below = handler.below;
            data.type = handler.options?.staticType ?? "targetDefault";
            data.persistent = handler.persistent;
        }
        return data;
    }
    /*
    static _meleeData(handler, autoObject) {
        const data = {};
        if (autoObject) {
            const autoOverridden = handler.options?.overrideAuto
            Object.assign(data, autoObject);
            data.animation = data.animation || "";
            data.customPath = data.custom ? data.customPath : false;
            data.color = autoOverridden ? handler.options?.autoColor : data.color;
            data.repeat = autoOverridden ? handler.options?.autoRepeat : data.repeat;
            data.delay = autoOverridden ? handler.options?.autoDelay : data.delay;
            data.scale = autoOverridden ? handler.options?.autoScale : data.scale;
            data.variant = autoOverridden ? handler.options?.autoVariant : data.variant;
        } else {
            data.animation = handler.animation;
            data.variant = handler.variant || "01";
            data.color = handler.color;
            data.customPath = handler.enableCustom ? handler.customPath : false;
            data.switchType = handler.meleeSwitch.switchType || "on";
            data.repeat = handler.repeat;
            data.delay = handler.delay
            data.scale = handler.scale;
            data.below = handler.below;
        }
        return data;
    }
    
    static _rangeData(handler, autoObject) {
        const data = {}
        if (autoObject) {
            const autoOverridden = handler.options?.overrideAuto
            Object.assign(data, autoObject)
            data.animation = data.animation;
            data.color = autoOverridden ? handler.options?.autoColor : data.color;
            data.repeat = autoOverridden ? handler.options?.autoRepeat : data.repeat;
            data.delay = autoOverridden ? handler.options?.autoDelay : data.delay;
        } else {
            data.animation = handler.animation;
            
            //if (data.itemName === "arrow") { data.dmgType = handler.rangedOptions?.rangeDmgType ?? "regular" } else {
                //data.dmgType = handler.rangedOptions?.rangeDmgType ?? "physical";
            //}
            //let dmgType;
            //if (data.itemName === "arrow") { dmgType = handler.rangedOptions?.rangeDmgType ?? "regular" } else {
                //dmgType = handler.rangedOptions?.rangeDmgType ?? "physical";
            //}
            
            //const variant = AAITEMCHECK.spellattack.some(el => data.itemName.includes(el)) ? handler.spellVariant : dmgType;
            data.variant = handler.variant;
            data.color = handler.color;
            data.repeat = handler.repeat;
            data.delay = handler.delay;
            data.below = handler.below;
        }
        return data;
    }
    */
    static _switchData(handler, autoObject) {
        const meleeSwitch = handler.meleeSwitch;
        const data = {};
        if (autoObject) {
            const autoOverridden = handler.options?.overrideAuto
            Object.assign(data, autoObject);
            data.switchAnimation = data.switchAnimation === undefined ? data.animation : data.switchAnimation;
            data.switchColor = data.switchColor === undefined ? data.color : data.switchColor;
            data.color = autoOverridden ? handler.options?.autoColor : data.color;
            data.repeat = autoOverridden ? handler.options?.autoRepeat : data.repeat;
            data.delay = autoOverridden ? handler.options?.autoDelay : data.delay;
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
        }
        return data;
    }
    /*
    static _staticData(handler, autoObject) {
        const data = {}
        if (autoObject) {
            const autoOverridden = handler.options?.overrideAuto
            Object.assign(data, autoObject)
            data.animation = data.animation || "";
            data.customPath = data.custom ? data.customPath : false;
            data.color = autoOverridden ? handler.options?.autoColor : data.color;
            data.repeat = autoOverridden ? handler.options?.autoRepeat : data.repeat;
            data.delay = autoOverridden ? handler.options?.autoDelay : data.delay;
            data.scale = autoOverridden ? handler.options?.autoScale : data.scale;
        } else {
            data.animation = handler.animation;
            data.variant = handler.options?.variant;
            data.color = handler.color;
            data.repeat = handler.repeat;
            data.delay = handler.delay;
            data.customPath = handler.enableCustom ? handler.customPath : false;
            data.below = handler.below;
            data.scale = handler.scale;
            data.type = handler.staticType;
        }
        return data;
    }
    */
    static async _explosionData(handler) {
        const explosions = handler.explosion;
        const explosion = {
            enabled: explosions.enable || false,
            animation: explosions.animation ?? "",
            variant: explosions.variant ?? "",
            color: explosions.color ?? "",
            delay: explosions.delay ?? 1,
            radius: explosions.radius ?? 1.5,
            enableCustom: explosions.enableCustom,
            customPath: explosions.enableCustom ? explosions.customPath : false,
            below: explosions.below || false,
        };
        explosion.data = explosion.enabled ? await buildFile(true, explosion.animation, "static", explosion.variant, explosion.color, explosion.customPath) : "";
        explosion.scale = ((200 * explosion.radius) / explosion.data?.metadata?.width) ?? 1;

        return explosion;
    }

    static _explosionSound(handler) {
        const explosionSound = {
            volume: handler.allSounds?.explosion?.volume || 0.25,
            delay: handler.allSounds?.explosion?.delay || 1,
            file: handler.allSounds?.explosion?.file || "",
        }
        return explosionSound;
    }

    static async _sourceFX(handler, sourceToken) {
        const source = handler.flags?.sourceToken || {};
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
        }
        if ((!sourceFX.animation || sourceFX.animation === "a1") && sourceFX.enabled) {
            sourceFX.enabled = false;
            console.warn("AUTOMATED ANIMATIONS || TokenFX Source Animation is enabled on this item but NO Animation is chosen!");
        }

        sourceFX.data = sourceFX.enabled ? await buildFile(true, sourceFX.animation, "static", sourceFX.variant, sourceFX.color, sourceFX.customSourcePath) : "";
        sourceFX.sFXScale = sourceFX.enabled ? 2 * sourceToken.w / sourceFX.data?.metadata?.width : 1;
        sourceFX.sourceSeq = new Sequence();
        sourceFX.sourceSeq.effect()
            .file(sourceFX.data.file)
            .atLocation(sourceToken)
            .gridSize(canvas.grid.size)
            .scale(sourceFX.sFXScale * sourceFX.scale)
            .repeats(sourceFX.repeat, sourceFX.delay)
            .belowTokens(sourceFX.below)
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
        }
        if ((!targetFX.animation || targetFX.animation === "a1")  && targetFX.enabled) {
            targetFX.enabled = false;
            console.warn("AUTOMATED ANIMATIONS || TokenFX Target Animation is enabled on this item but NO Animation is chosen!");
        }
        targetFX.data = targetFX.enabled ? await buildFile(true, targetFX.animation, "static", targetFX.variant, targetFX.color, targetFX.customTargetPath) : "";
        
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

        return targetFX
    }

    static _targetSequence(targetFX, target) {
        targetFX.tFXScale = targetFX.enabled ? 2 * target.w / targetFX.data.metadata.width : 1;
        targetFX.targetSeq = new Sequence();
        targetFX.targetSeq.effect()
            .delay(targetFX.startDelay)
            .file(targetFX.data?.file)
            .atLocation(target)
            .scale(targetFX.tFXScale * targetFX.scale)
            .repeats(targetFX.repeat, targetFX.delay)
            .belowTokens(targetFX.below)
            .gridSize(canvas.grid.size)
            .playIf(targetFX.enabled)

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
}