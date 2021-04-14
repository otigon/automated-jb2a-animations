import colorChecks from "./colorChecks.js"
import { JB2APATREONDB } from "./jb2a-patreon-database.js";
import { JB2AFREEDB } from "./jb2a-free-database.js";

const wait = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

async function onTargetSpells(handler) {

    function moduleIncludes(test) {
        return !!game.modules.get(test);
    }

    let obj01 = moduleIncludes("jb2a_patreon") === true ? JB2APATREONDB : JB2AFREEDB;

    let { tmColor } = colorChecks(handler);

    switch (true) {
        case tmColor === "default":
            tmColor = 0x107BD9;
    }

    let obj02;
    let color;
    switch (true) {
        case (handler.itemNameIncludes("cure", "wound")):
        case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemCureWounds").toLowerCase()):
            obj02 = "curewounds";
            switch (true) {
                case handler.color === "a1" || handler.color === ``:
                case !handler.color:
                    color = "blue";
                    break;
                default:
                    color = handler.color;
            }
            break;
        case (handler.itemNameIncludes("heal", "word")):
        case (handler.itemNameIncludes("generic", "heal")):
        case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemHealingWord").toLowerCase()):
        case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemGenericHealing").toLowerCase()):
            obj02 = "generichealing";
            switch (true) {
                case handler.color === "a1" || handler.color === ``:
                case !handler.color:
                    color = "blue";
                    break;
                default:
                    color = handler.color;
            }
            break;
    }
    let filePath = obj01[obj02][color]['400'];

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

            let tokenSize = target.actor.data.data.traits.size;
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
                    x: scale,
                    y: scale
                }
            };
            canvas.fxmaster.playVideo(spellAnim);
            game.socket.emit('module.fxmaster', spellAnim);

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
            if (game.settings.get("automated-jb2a-animations", "tmfx")) {
                TokenMagic.addUpdateFiltersOnTargeted(Holy);
            }
        }
    }
    cast();
}

export default onTargetSpells;