import { JB2APATREONDB } from "./jb2a-patreon-database.js";
import { JB2AFREEDB } from "./jb2a-free-database.js";

const wait = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

async function explodeOnTarget(handler) {

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
    let obj03;
    let color;
    let variant = handler.animExVariant;
    let impactVar = handler.flags.impactVar ?? "";
    let filePath;
    switch (true) {
        case handler.animExVariant === "shatter":
            obj02 = "shatter";
            color = handler.animExColor;
            if (handler.animExColor === "random") {
                color = randomProperty(obj01[obj02]);
            }
            filePath = obj01[obj02][color];
            break;
        case handler.animExVariant === "impact":
            obj02 = "explosion";
            if (impactVar === "boulder") {
                filePath = obj01[obj02][variant][impactVar];
            } else {
                if (handler.animExColor === "random") {
                    color = randomProperty(obj01[obj02][variant][impactVar]);
                } else {
                    color = handler.animExColor;
                }
                filePath = obj01[obj02][variant][impactVar][color]
            }
            break;
        default:
            obj02 = "explosion";
            color = handler.animExColor;
            if (handler.animExColor === "random") {
                color = randomProperty(obj01[obj02][variant]);
            }
            filePath = obj01[obj02][variant][color];
    }

    let multiplier;
    switch (variant) {
        case ('05'):
        case ('06'):
        case ('07'):
            multiplier = 1500;
            break;
        default:
            multiplier = 1000;
    }
    let divisor = (multiplier * (1 / (handler.animExRadius)));

    let globalDelay = game.settings.get("autoanimations", "globaldelay");
    await wait(globalDelay);

    async function cast() {
        var arrayLength = handler.allTargets.length;
        let loops = handler.animExLoop;
        let level = handler.flags.exAnimLevel;

        for (var i = 0; i < arrayLength; i++) {
            let target = handler.allTargets[i];
            let Scale = (canvas.scene.data.grid / divisor);

            // Defines the spell template for FXMaster
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
                    x: Scale,
                    y: Scale
                },
                ground: level
            };

            async function SpellAnimation(number) {

                let x = number;
                let interval = 1000;
                for (var i = 0; i < x; i++) {
                    setTimeout(function () {
                        if (level) {
                            canvas.autoanimationsG.playVideo(spellAnim);
                            game.socket.emit('module.autoanimations', spellAnim);
                        } else {
                            canvas.autoanimations.playVideo(spellAnim);
                            game.socket.emit('module.autoanimations', spellAnim);
                        }
                    }, i * interval);
                }
            }
            // The number in parenthesis sets the number of times it loops
            SpellAnimation(loops)
        }
    }
    cast();
}

export default explodeOnTarget;