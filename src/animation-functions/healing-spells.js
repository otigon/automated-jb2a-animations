import { JB2APATREONDB } from "./jb2a-patreon-database.js";
import { JB2AFREEDB } from "./jb2a-free-database.js";
import { TMFXCOLORS } from "./tmfxcolors.js";

const wait = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

async function onTargetSpells(handler) {

    function moduleIncludes(test) {
        return !!game.modules.get(test);
    }

    var randomProperty = function (obj) {
        var keys = Object.keys(obj);
        var keyLength = keys.length;
        var ranKey = Math.floor(Math.random() * keyLength);
        return keys[ranKey];
    };

    let obj01 = moduleIncludes("jb2a_patreon") === true ? JB2APATREONDB : JB2AFREEDB;
    let obj02;
    let color;
    let filePath;
    let size;
    let variant;
    if (handler.spellVariant === '02') {
        size = '600';
        variant = '02';
    } else {
        size = '400';
        variant = '01';

    }
    switch (true) {
        case (handler.itemNameIncludes("cure", "wound")):
        case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemCureWounds").toLowerCase()):
            obj02 = "curewounds";
            switch (true) {
                case handler.color === "a1" || handler.color === ``:
                case !handler.color:
                    color = "blue";
                    break;
                case handler.color === "random":
                    color = randomProperty(obj01[obj02]);
                    break;
                default:
                    color = handler.color;
            }
            filePath = obj01[obj02][color][size];
            break;
        case (handler.itemNameIncludes("heal", "word")):
        case (handler.itemNameIncludes("generic", "heal")):
        case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemHealingWord").toLowerCase()):
        case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemGenericHealing").toLowerCase()):
            obj02 = "generichealing";
            switch (true) {
                case handler.color === "a1" || handler.color === ``:
                case !handler.color:
                    switch (handler.spellVariant) {
                        case ('02'):
                            color = "green orange";
                            break;
                        default:
                            color = "blue";
                    }
                    break;
                case handler.color === "random":
                    color = randomProperty(obj01[obj02][variant]);
                    break;
                default:
                    color = handler.color;
            }
            filePath = obj01[obj02][variant][color][size];
            break;
    }
    let tmColor = TMFXCOLORS[color]();
    let globalDelay = game.settings.get("autoanimations", "globaldelay");
    await wait(globalDelay);

    async function cast() {
        var arrayLength;
        if (handler.allTargets.length === 0) {
            arrayLength = 1;
        } else {
            arrayLength = handler.allTargets.length;
        }
        //var arrayLength = handler.allTargets.length;
        for (var i = 0; i < arrayLength; i++) {
            let target;
            if (handler.allTargets.length === 0) {
                target = handler.actorToken;
            } else target = handler.allTargets[i];
            //let target = handler.allTargets[i];

            let tokenSize = target.actor.data.data?.traits?.size ?? "med";
            let divisor = 375;
            switch (true) {
                case (tokenSize === "lg"):
                    switch (true) {
                        case (handler.itemNameIncludes("heal")):
                        case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemHealingWord").toLowerCase()):
                        case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemGenericHealing").toLowerCase()):
                            divisor = 125;
                            break;
                        case (handler.itemNameIncludes("cure", "wound")):
                        case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemCureWounds").toLowerCase()):
                            divisor = 165;
                            break;
                        default:
                            divisor = 187;
                            break;
                    }
                    break;
                case (tokenSize === "huge"):
                    switch (true) {
                        case (handler.itemNameIncludes("heal")):
                        case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemHealingWord").toLowerCase()):
                        case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemGenericHealing").toLowerCase()):
                            divisor = 100;
                            break;
                        case (handler.itemNameIncludes("cure", "wound")):
                        case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemCureWounds").toLowerCase()):
                            divisor = 115;
                            break;
                        default:
                            divisor = 125;
                            break;
                    }
                    break;
                case (tokenSize === "sm"):
                case (tokenSize === "med"):
                default:
                    switch (true) {
                        case (handler.itemNameIncludes("heal")):
                        case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemHealingWord").toLowerCase()):
                        case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemGenericHealing").toLowerCase()):
                            divisor = 275;
                            break;
                        case (handler.itemNameIncludes("cure", "wound")):
                        case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemCureWounds").toLowerCase()):
                            divisor = 325;
                            break;
                        default:
                            divisor = 375;
                            break;
                    }
                    break;
            }
            let scale = canvas.scene.data.grid / divisor;
            let animLevel = handler.flags.animLevel ? "ground" : "above";
            console.log(animLevel);
            // Defining spell animation for FX Master
            let spellAnim =
            {
                file: filePath,
                position: target.center,
                anchor: {
                    x: 0.5,
                    y: 0.5
                },
                angle: 0,
                scale: {
                    x: scale * 1.5,
                    y: scale * 1.5
                },
                level: animLevel
            };
            if (animLevel === "ground") {
                canvas.autoanimationsG.playVideo(spellAnim);
                game.socket.emit('module.autoanimations', spellAnim);
            } else {
                canvas.autoanimations.playVideo(spellAnim);
                game.socket.emit('module.autoanimations', spellAnim);
            }

            let Holy =
                [{
                    filterType: "outline",
                    filterId: "myOutline",
                    autoDestroy: true,
                    padding: 10,
                    color: tmColor,
                    thickness: 1,
                    quality: 5,
                    zOrder: 9,
                    animated:
                    {
                        thickness:
                        {
                            active: true,
                            loopDuration: 800,
                            loops: 4,
                            animType: "syncCosOscillation",
                            val1: 1,
                            val2: 6
                        }
                    }
                }];
            if (game.settings.get("autoanimations", "tmfx")) {
                TokenMagic.addUpdateFiltersOnTargeted(Holy);
            }
        }
    }
    cast();
}

export default onTargetSpells;