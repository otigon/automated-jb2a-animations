import { buildFile } from "./file-builder/build-filepath.js";
import { AAITEMCHECK } from "./item-arrays.js";
export class AAanimationData {

static _meleeData (handler, autoObject) {
    const data = {};
    if (autoObject) {
        const autoOverridden = handler.options?.overrideAuto
        Object.assign(data, autoObject[0]);
        data.itemName = data.animation || "";
        data.customPath = data.custom ? data.customPath : false;
        data.color = autoOverridden ? handler.options?.autoColor : data.color;
        data.repeat = autoOverridden ? handler.options?.autoRepeat : data.repeat;
        data.delay = autoOverridden ? handler.options?.autoDelay : data.delay;
        data.scale = autoOverridden ? handler.options?.autoScale : data.scale;
    } else {
        data.itemName = handler.convertedName;
        data.variant = data.itemName === "unarmedstrike" || data.itemName === "flurryofblows" ? handler.uaStrikeType : "01";
        data.customPath = handler.enableCustom01 ? handler.custom01 : false;
        data.color = handler.color;
        data.switchType = handler.switchType;
        data.detect = handler.switchDetect;
        data.repeat = handler.animationLoops;
        data.delay = handler.loopDelay;
        data.scale = handler.scale;
    }
    return data;
}

static _rangeData (handler, autoObject) {
    const data = {}
    if (autoObject) {
        const autoOverridden = handler.options?.overrideAuto
        Object.assign(data, autoObject[0])
        data.itemName = data.animation;
        data.color = autoOverridden ? handler.options?.autoColor : data.color;
        data.repeat = autoOverridden ? handler.options?.autoRepeat : data.repeat;
        data.delay = autoOverridden ? handler.options?.autoDelay : data.delay;
    } else {
        data.itemName = handler.convertedName;
        if (data.itemName === "arrow") { data.dmgType = handler.rangedOptions?.rangeDmgType ?? "regular" } else {
            data.dmgType = handler.rangedOptions?.rangeDmgType ?? "physical";
        }
        let dmgType;
        if (data.itemName === "arrow") { dmgType = handler.rangedOptions?.rangeDmgType ?? "regular" } else {
            dmgType = handler.rangedOptions?.rangeDmgType ?? "physical";
        }    
        const variant = AAITEMCHECK.spellattack.some(el => data.itemName.includes(el)) ? handler.spellVariant : dmgType;
        data.variant = data.itemName === "rangelasersword" || data.itemName === "rangedagger" || data.itemName === "rangehandaxe" || data.itemName === "chakram" ? handler.dtvar : variant;
        data.color = handler.color;
        data.repeat = handler.animationLoops;
        data.delay = handler.loopDelay;
    }
    return data;
}

static _switchData (handler, autoObject) {
    const data = {};
    if (autoObject) {
        const autoOverridden = handler.options?.overrideAuto
        Object.assign(data, autoObject[0]);
        data.switchAnimation = data.switchAnimation === undefined ? data.animation : data.switchAnimation;
        data.switchColor = data.switchColor === undefined ? data.color : data.switchColor;
        data.color = autoOverridden ? handler.options?.autoColor : data.color;
        data.repeat = autoOverridden ? handler.options?.autoRepeat : data.repeat;
        data.delay = autoOverridden ? handler.options?.autoDelay : data.delay;
    } else {
        data.switchAnimation = handler.switchName || handler.convertedName;
        data.customPath = handler.enableCustom01 ? handler.custom01 : false;
        data.switchColor = handler.switchColor;
        data.switchType = handler.switchType;
        data.detect = handler.switchDetect;
        data.repeat = handler.animationLoops;
        data.delay = handler.loopDelay;
        data.return = handler.switchReturn
        data.switchVariant = data.switchAnimation === "lasersword" || data.switchAnimation === "dagger" || data.switchAnimation === "handaxe" ? handler.switchVariant : handler.switchDmgType;
    }
    return data;
}

static _staticData (handler, autoObject) {
    const data = {}
    if (autoObject) {
        const autoOverridden = handler.options?.overrideAuto
        Object.assign(data, autoObject[0])
        data.itemName = data.animation || "";
        data.customPath = data.custom ? data.customPath : false;
        data.color = autoOverridden ? handler.options?.autoColor : data.color;
        data.repeat = autoOverridden ? handler.options?.autoRepeat : data.repeat;
        data.delay = autoOverridden ? handler.options?.autoDelay : data.delay;
        data.scale = autoOverridden ? handler.options?.autoScale : data.scale;
    } else {
        data.itemName = handler.convertedName;
        data.variant = handler.spellVariant;
        data.color = handler.color;
        data.repeat = handler.animationLoops;
        data.delay = handler.loopDelay;
        data.customPath = handler.enableCustom01 ? handler.custom01 : false;
        data.below = handler.animLevel;
        data.scale = handler.scale;
    }
    return data;
}

static async _explosionData (handler) {
    const explosion = {
        customExplosionPath: handler.customExplode ? handler.customExplosionPath : false,
        delay: handler.explosionDelay || 1,
        below: handler.explosionLevel || false,
        
    };
    explosion.data = await buildFile(true, handler.explosionVariant, "static", "01", handler.explosionColor, explosion.customExplosionPath);
    return explosion;
}

static _explosionSound (handler) {
    const explosionSound = {
        volume: handler.allSounds?.explosion?.volume || 0.25,
        delay: handler.allSounds?.explosion?.delay || 1,
        file: handler.allSounds?.explosion?.file || "",
    }
    return explosionSound;
}

static _sourceFX(handler, sourceToken) {
    const sourceFX = {
        customSourcePath: handler.sourceCustomEnable ? handler.sourceCustomPath : false,
        repeat: handler.sourceLoops || 1,
        delay: handler.sourceLoopDelay || 250,
        below: handler.sourceLevel || false,
        startDelay: handler.sourceDelay || 500,
        scale: handler.sourceScale || 1,
    };
    return sourceFX;
}

static _targetFX(handler) {
    const targetFX = {
        customTargetPath: handler.targetCustomEnable ? handler.targetCustomPath : false,
        repeat: handler.targetLoops || 1,
        delay: handler.targetLoopDelay || 250,
        below: handler.targetLevel || false,
        startDelay: handler.targetDelay || 500,
        scale: handler.targetScale || 1,
    };
    return targetFX
}


}