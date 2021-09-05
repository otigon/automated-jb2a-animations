import { buildFile } from "./file-builder/build-filepath.js"
import { meleeSwitch } from "./meleeSwitch.js";
//import { AAITEMCHECK } from "./item-arrays.js";
//import { animationDefault } from "./file-builder/options.js";
const wait = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

export async function meleeAnimation(handler, autoObject) {
    function moduleIncludes(test) {
        return !!game.modules.get(test);
    }
    let rangeSwitch;
    if (moduleIncludes("jb2a_patreon")) {
        rangeSwitch = ['sword', 'greatsword', 'mace', 'dagger', 'spear', 'greataxe', 'handaxe', 'lasersword']
    } else {
        rangeSwitch = ['dagger', 'lasersword']
    }
    // Sets JB2A database and Global Delay
    let globalDelay = game.settings.get("autoanimations", "globaldelay");
    await wait(globalDelay);

    //Builds Primary File Path and Pulls from flags if already set
    /*
    let itemName = handler.convertedName;
    let variant = itemName === "unarmedstrike" || itemName === "flurryofblows" ? handler.uaStrikeType : "01";
    let customPath = handler.enableCustom01 ? handler.custom01 : false;
    */
    const data = {};
    if (autoObject) {
        Object.assign(data, autoObject[0]);
        data.itemName = data.animation || "";
        data.customPath = data.custom ? data.customPath : false;
        data.color = handler.options?.autoColor || data.color;
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
    const attack = await buildFile(false, data.itemName, "melee", data.variant, data.color, data.customPath)
    //let attack = await buildWeaponFile(obj01, itemName, handler)
    const sourceToken = handler.actorToken;
    const sourceScale = data.itemName === "unarmedstrike" || data.itemName === "flurryofblows" ? sourceToken.w / canvas.grid.size * 0.85 : sourceToken.w / canvas.grid.size * 0.5;

    //Builds Explosion File Path if Enabled, and pulls from flags if already set
    //let explosion;
    //let customExplosionPath;
    const explosion = {};
    if (handler.flags.explosion) {
        explosion.customExplosionPath = handler.customExplode ? handler.customExplosionPath : false;
        explosion.data = await buildFile(true, handler.explosionVariant, "static", "01", handler.explosionColor, explosion.customExplosionPath)
    }

    //const explosionSound = handler.allSounds?.explosion;
    //let explosionVolume = 0.25;
    //let explosionDelay = 1;
    //let explosionFile = "";
    const explosionSound = {};
    explosionSound.volume = handler.allSounds?.explosion?.volume || 0.25;
    explosionSound.delay = handler.allSounds?.explosion?.delay || 1;
    explosionSound.file = handler.allSounds?.explosion?.file || "";
    /*
    if (handler.explodeSound) {
        explosionVolume = explosionSound?.volume || 0.25;
        explosionDelay = explosionSound?.delay === 0 ? 1 : explosionSound?.delay;
        explosionFile = explosionSound?.file;
    }
    */
    // builds Source Token file if Enabled, and pulls from flags if already set
    //let sourceFX;
    //let sFXScale;
    //let customSourcePath;
    const sourceFX = {};
    if (handler.sourceEnable) {
        sourceFX.customSourcePath = handler.sourceCustomEnable ? handler.sourceCustomPath : false;
        sourceFX.data = await buildFile(true, handler.sourceName, "static", handler.sourceVariant, handler.sourceColor, sourceFX.customSourcePath);
        sourceFX.sFXScale = 2 * sourceToken.w / sourceFX.data.metadata.width;
    }
    // builds Target Token file if Enabled, and pulls from flags if already set
    //let targetFX;
    //let tFXScale;
    //let customTargetPath; 
    const targetFX = {};
    if (handler.targetEnable) {
        targetFX.customTargetPath = handler.targetCustomEnable ? handler.targetCustomPath : false;
        targetFX.data = await buildFile(true, handler.targetName, "static", handler.targetVariant, handler.targetColor, targetFX.customTargetPath);
    }

    //logging explosion Scale
    let scale = ((200 * handler.explosionRadius) / explosion?.data?.metadata?.width) ?? 1;

    async function cast() {
        let arrayLength = handler.allTargets.length;
        for (var i = 0; i < arrayLength; i++) {

            let target = handler.allTargets[i];

            let moveTo = handler.getDistanceTo(target) > 5 ? true : false;
            //const switchName = handler.switchName;
            //const switchType = handler.switchType;
            //const switchDetect = handler.switchDetect;
            let noMelee = false;
            if (!game.settings.get("autoanimations", "rangeSwitch")) {
                switch (data.switchType) {
                    case "on":
                        if (rangeSwitch.some(el => data.itemName.includes(el))) {
                            if (handler.getDistanceTo(target) > (5 + handler.reachCheck)) {
                                noMelee = true;
                            }
                        }
                        break;
                    case "custom":
                        if (data.detect === "manual") {
                            if ((handler.getDistanceTo(target) / canvas.dimensions.distance) > handler.switchRange) {
                                noMelee = true;
                            }
                        } else if (handler.getDistanceTo(target) > (5 + handler.reachCheck)) {
                            noMelee = true;
                        }
                        break;
                }
            }
            if (noMelee) {
                await meleeSwitch(handler, target, autoObject)
            }
            else {
                if (handler.targetEnable) {
                    targetFX.tFXScale = 2 * target.w / targetFX.data.metadata.width;
                }

                let hit;
                if (handler.playOnMiss) {
                    hit = handler.hitTargetsId.includes(target.id) ? false : true;
                } else {
                    hit = false;
                }
                await new Sequence()
                .effect()
                    .atLocation(sourceToken)
                    .scale(sourceFX.sFXScale * handler.sourceScale)
                    .repeats(handler.sourceLoops, handler.sourceLoopDelay)
                    .belowTokens(handler.sourceLevel)
                    .waitUntilFinished(handler.sourceDelay)
                    .playIf(handler.sourceEnable)
                    .addOverride(async (effect, data) => {
                        if (handler.sourceEnable) {
                            data.file = sourceFX.data.file;
                        }
                        return data;
                    })
                .thenDo(function () {
                    Hooks.callAll("aa.animationStart", sourceToken, target)
                })
                .effect()
                    //.delay(sourceOptions.delayAfter)
                    .file(attack.file)
                    .atLocation(sourceToken)
                    .rotateTowards(target)
                    //.JB2A()
                    .scale(sourceScale * data.scale)
                    .repeats(data.repeat, data.delay)
                    .randomizeMirrorY()
                    .missed(hit)
                    .name("animation")
                    .belowTokens(handler.animLevel)
                    .addOverride(async (effect, data) => {
                        data.anchor = { x: 0.4, y: 0.5 }
                        return data;
                    })
                    .playIf(!moveTo)
                .effect()
                    .file(attack.file)
                    .atLocation(sourceToken)
                    .moveTowards(target)
                    //.JB2A()
                    .scale(sourceScale * data.scale)
                    .repeats(data.repeat, data.delay)
                    .randomizeMirrorY()
                    .missed(hit)
                    .name("animation")
                    .belowTokens(handler.animLevel)
                    .playIf(moveTo)
                .effect()
                    .atLocation("animation")
                    //.file(explosion.file)
                    .scale({ x: scale, y: scale })
                    .delay(500 + handler.explosionDelay)
                    .repeats(data.repeat, data.delay)
                    .belowTokens(handler.explosionLevel)
                    .playIf(() => { return explosion.data })
                    .addOverride(async (effect, data) => {
                        if (explosion.data) {
                            data.file = explosion.data.file;
                        }
                        return data;
                    })
                    //.waitUntilFinished(explosionDelay)
                .sound()
                    .file(explosionSound.file)
                    .playIf(() => {return explosion.data && handler.explodeSound})
                    .delay(explosionSound.delay)
                    .volume(explosionSound.volume)
                    .repeats(data.repeat, data.delay)
                .effect()
                    .delay(handler.targetDelay)
                    .atLocation(target)
                    .scale(targetFX.tFXScale * handler.targetScale)
                    .repeats(handler.targetLoops, handler.targetLoopDelay)
                    .belowTokens(handler.targetLevel)
                    .playIf(handler.targetEnable)
                    .addOverride(async (effect, data) => {
                        if (handler.targetEnable) {
                            data.file = targetFX.data.file;
                        }
                        return data;
                    })
                    .play()
                await wait(handler.animEnd)
                Hooks.callAll("aa.animationEnd", sourceToken, target)
            }
        }
    }
    cast()
}
