import { JB2APATREONDB } from "./jb2a-patreon-database.js";
import { JB2AFREEDB } from "./jb2a-free-database.js";
import meleeExplosion from "./melee-explosion.js";
import divineSmite from "./divine-smite.js";

const wait = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

async function unarmedStrike(handler) {

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
    switch (true) {
        case handler.uaStrikeType === "magical":
            obj02 = "magical";
            break;
        default:
            obj02 = "physical";
    }
    switch (true) {
        case handler.color === "a1" || handler.color === ``:
        case !handler.color:
            color = "blue";
            break;
        default:
            color = handler.color;
    }

    let globalDelay = game.settings.get("autoanimations", "globaldelay");
    await wait(globalDelay);

    function drawSpecialToward(effect, tok1, tok2) {
        const origin = {
            x: tok1.center.x,
            y: tok1.center.y
        }
        const effectData = mergeObject(effect, {
            position: {
                x: origin.x,
                y: origin.y
            }
        });
        /*
        let missAnim = 0.5;
        var plusOrMinusHit = Math.random() < 0.5 ? -1 : 1;
        let missHit;
        
        switch (true) {
            case (handler.playOnMiss):
                switch (true) {
                    case handler.hitTargetsId.includes(target.id):
                        missHit = 0;
                        break;
                    default:
                        missHit = missAnim * plusOrMinusHit;
                }
                break;
            default:
                missHit = 0;
        }
        */
        let ray = new Ray(tok1.center, tok2.center);
        effectData.distance = ray.distance;
        effectData.rotation = ray.angle;
        if (handler.divineSmite.dsEnable) {
            divineSmite(handler)
        }
        // Throw effect locally
        canvas.autoanimations.playVideo(effectData);
        // And to other clients
        game.socket.emit('module.autoanimations', effectData);
    }

    async function cast() {
        var arrayLength = handler.allTargets.length;

        //let tmMacro = "HitStutter";
        var targetCheck = handler.targetAssistant.length;
        let noTargetAnim = `modules/autoanimations/Animations/No_Target_400x400.webm`;
        let myToken = handler.actorToken;
        let targetTrainer =
        {
            file: noTargetAnim,
            position: myToken.center,
            anchor: {
                x: 0.5,
                y: 0.5
            },
            angle: 0,
            scale: {
                x: 0.25,
                y: 0.25
            }
        }

        switch (true) {
            case ((targetCheck === 0) && (game.settings.get("autoanimations", "targetingAssist"))):
                canvas.autoanimations.playVideo(targetTrainer);
                game.socket.emit('module.autoanimations', targetTrainer);
        }

        for (var i = 0; i < arrayLength; i++) {
            let target = handler.allTargets[i];
            let distance = handler.getDistanceTo(target);
            let range = 5;
            let ray = new Ray(handler.actorToken.center, target.center);
            let anDeg = -(ray.angle * 57.3);


            let ranVar = Math.floor(Math.random() * 2 + 1).toString();
            let obj;
            let filePath;
            switch (true) {
                case handler.itemNameIncludes("unarmed strike"):
                case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemUnarmedStrike").toLowerCase()):
                    obj = 'unarmedstrike';
                    if (handler.color === "random") {
                        color = randomProperty(obj01[obj][obj02]);
                    }
                    filePath = obj01[obj][obj02][color][ranVar];
                    break;
                case handler.itemNameIncludes("flurry of blows"):
                case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemFlurryBlows").toLowerCase()):
                    obj = 'flurryofblows';
                    if (handler.color === "random") {
                        color = randomProperty(obj01[obj][obj02]);
                    }
                    switch (handler.uaStrikeType) {
                        case ("magical"):
                            filePath = obj01[obj][obj02][color][ranVar];
                            break;
                        default:
                            filePath = obj01[obj][obj02][color];
                            break;
                    }
                    break;
            }

            // Scaled globally, change divisor to increase/decrease size of animation
            let Scale = canvas.scene.data.grid / 175;
            // randomly mirrors animation
            var plusOrMinus = Math.random() < 0.5 ? -1 : 1;

            let meleeAnim =
            {
                file: filePath,
                position: handler.actorToken.center,
                anchor: {
                    x: 0.4,
                    y: 0.5
                },
                angle: anDeg,
                scale: {
                    x: Scale,
                    y: (Scale * plusOrMinus)
                }
            };

            switch (true) {
                case distance <= range:
                    if (handler.divineSmite.dsEnable) {
                        divineSmite(handler)
                    }
                    canvas.autoanimations.playVideo(meleeAnim);
                    game.socket.emit('module.autoanimations', meleeAnim);
                    break;
                default:
                    function castSpell(effect) {
                        drawSpecialToward(effect, handler.actorToken, target);
                    }
                    castSpell({
                        file: filePath,
                        anchor: {
                            x: 0.4,
                            y: 0.5,
                        },
                        speed: 0,
                        angle: 0,
                        scale: {
                            x: Scale,
                            y: (Scale * plusOrMinus),
                        },
                        ease: "Linear"
                    });
            }
            /*
            function castSpell(effect) {
                if (handler.divineSmite.dsEnable) {
                    divineSmite(handler)
                }
                canvas.autoanimations.drawSpecialToward(effect, handler.actorToken, target);
            }

            castSpell({
                file: filePath,
                anchor: {
                    x: 0.4,
                    y: 0.5,
                },
                speed: 0,
                angle: 0,
                scale: {
                    x: Scale,
                    y: (Scale * plusOrMinus),
                },
            });
            */
            /*
            switch (true) {
                case (game.settings.get("autoanimations", "tmfx")):
                    await wait(500);
                    TokenMagic.addFilters(target, tmMacro);
                    break;
            }
            */

            if (handler.animExplode && handler.animOverride) {
                meleeExplosion(handler, target);
            }

        }
    }
    cast();
}

export default unarmedStrike;