import colorChecks from "./colorChecks.js"

const wait = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

async function onTargetSpells(handler) {

    function moduleIncludes(test) {
        return !!game.modules.get(test);
    }

    let path00 = moduleIncludes("jb2a_patreon") === true ? `jb2a_patreon` : `JB2A_DnD5e`;

    let { type01, color, tmColor } = colorChecks(handler);

    switch (true) {
        case type01 === "default":
            type01 = "01";
        case color === "default":
            color = "Blue";
        case tmColor === "default":
            tmColor = 0x107BD9;
    }

    let path01;
    let path02;
    switch (true) {
        case (handler.itemNameIncludes("cure", "wound")):
        case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemCureWounds").toLowerCase()):
            path01 = "1st_Level/Cure_Wounds";
            path02 = "CureWounds";
            break;
        case (handler.itemNameIncludes("heal", "word")):
        case (handler.itemNameIncludes("generic", "heal")):
        case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemHealingWord").toLowerCase()):
        case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemGenericHealing").toLowerCase()):
            path01 = "Generic/Healing";
            path02 = "HealingAbility";
            break;
    }

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
                file: `modules/${path00}/Library/${path01}/${path02}_${type01}_${color}_400x400.webm`,
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