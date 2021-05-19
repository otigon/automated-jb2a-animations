import meleeExplosion from "./melee-explosion.js";
import { JB2APATREONDB } from "./jb2a-patreon-database.js";
import { JB2AFREEDB } from "./jb2a-free-database.js";
import { TMFXCOLORS } from "./tmfxcolors.js";

//import drawSpecialToward from "./fxmaster-drawTowards.js"

const wait = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

async function meleeRangeSwitch(handler) {

    function moduleIncludes(test) {
        return !!game.modules.get(test);
    }

    let obj01 = moduleIncludes("jb2a_patreon") === true ? JB2APATREONDB : JB2AFREEDB;

    let color
    switch (true) {
        case handler.color === "a1" || handler.color === ``:
        case !handler.color:
            color = "white";
            break;
        default:
            color = handler.color;
    }
    let fireColor = TMFXCOLORS[color]();

    let burn =
        [{
            filterType: "xfire",
            filterId: "meleeBurn",
            autoDestroy: true,
            time: 0,
            color: fireColor,
            blend: 1,
            amplitude: 1,
            dispersion: 0,
            chromatic: false,
            scaleX: 1,
            scaleY: 1,
            inlay: false,
            animated:
            {
                time:
                {
                    loopDuration: 500,
                    loops: 3,
                    active: true,
                    speed: -0.0015,
                    animType: "move"
                }
            }
        }];

    // delay before activating the Token Magic FX Macros, change inside the switch cases to adjust the timing
    let tmdelay = 1000;
    let Delay01;
    let Delay02;
    let Delay03;
    // delay before deleting Token Magic FX if needed, change inside switch cases to adjust the deletion
    let tmkill = 1000;
    // calls a Token Magic FX macro defined above, change inside the switch cases to desired TMFX
    //let tmMacro = bloodSplat;
    let obj02;
    let obj12;
    let obj03;

    switch (true) {
        case (handler.itemNameIncludes("handaxe")):
        case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemHandaxe").toLowerCase()):
            obj02 = "meleehandaxe";
            obj12 = "rangehandaxe";
            obj03 = "01";
            //tmMacro = bloodSplat;
            tmdelay = 1250;
            tmkill = 1500;
            Delay01 = 600;
            Delay02 = 900;
            Delay03 = 900;
            break;
        case (handler.itemNameIncludes("dagger")):
        case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemDagger").toLowerCase()):
            obj02 = "meleedagger";
            obj12 = "rangedagger";
            switch (true) {
                case handler.animDagThrVar === "kunai":
                    obj03 = "kunai";
                    break;
                case handler.animDagThrVar === "02":
                    obj03 = "02";
                    break;
                default:
                    obj03 = "01";
            }        
            tmdelay = 1000;
            tmkill = 1500;
            Delay01 = 600;
            Delay02 = 600;
            Delay03 = 600;
            break;
        case (handler.itemNameIncludes("spear")):
        case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemSpear").toLowerCase()):
            obj02 = "meleespear";
            obj12 = "rangespear";
            obj03 = "01";
            //tmMacro = bloodSplat;
            tmdelay = 1000;
            tmkill = 1500;
            Delay01 = 600;
            Delay02 = 1150;
            Delay03 = 850;
            break;
    }

    let rangeFilePath = obj01[obj12][obj03];
    let meleeFilePath = obj01[obj02][color];
    let globalDelay = game.settings.get("autoanimations", "globaldelay");
    await wait(globalDelay);

    async function cast() {
        var arrayLength = handler.allTargets.length;

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
                canvas.fxmaster.playVideo(targetTrainer);
                game.socket.emit('module.fxmaster', targetTrainer);
        }

        for (var i = 0; i < arrayLength; i++) {

            let target = handler.allTargets[i];

            let distance = handler.getDistanceTo(target);

            //log(distance);
            let range = 5;
            let ray = new Ray(handler.actorToken.center, target.center);

            let missAnim;
            var plusOrMinusRay = Math.random() < 0.5 ? -1 : 1;
            var plusOrMinusDist = Math.random() < 0.5 ? -1 : 1;
            let missHit;
            let missDist;

            let anDeg = -(ray.angle * 57.3 + missHit);
            let anDist = ray.distance + missDist;
            //////

            let grid = canvas.grid.size;
            var oddEvenX = Math.random() < 0.5 ? -1 : 1;
            var oddEvenY = Math.random() < 0.5 ? -1 : 1;
            let missMax;
            let missMin;
            let targetSize = target.actor.data.data.traits.size;
            switch (true) {
                case targetSize === "tiny":
                case targetSize === "sm":
                case targetSize === "med":
                    missMax = grid * 1.5;
                    missMin = grid * 0.5;
                    break;
                case targetSize === "lg":
                    missMax = grid * 2;
                    missMin = grid;
                    break;
                case targetSize === "huge":
                    missMax = (grid * 2.5);
                    missMin = (grid * 1.5);
                    break;
                case targetSize === "grg":
                    missMax = (grid * 3);
                    missMin = (grid * 2);
                    break;
            }
            let missHitRange = {
                'x': (target.center.x) + ((Math.floor(Math.random() * (missMax - missMin) + missMin)) * oddEvenX),
                'y': (target.center.y) + ((Math.floor(Math.random() * (missMax - missMin) + missMin)) * oddEvenY)
            }

            let hitSpot;
            switch (true) {
                case (handler.playOnMiss):
                    switch (true) {
                        case handler.hitTargetsId.includes(target.id):
                            hitSpot = target.center;
                            break;
                        default:
                            hitSpot = missHitRange;
                    }
                    break;
                default:
                    hitSpot = target.center;
            }
            let rangeRay = new Ray(handler.actorToken.center, hitSpot);

            /////////

            let file;
            let anFile;
            let anFileSize;
            let anchorX;
            let anScale;
            let anScaleY;
            let Scale;
            let spellAnim;

            switch (true) {
                case (distance > (range + handler.reachCheck)):

                    missAnim = Math.floor(Math.random() * 12) + 6;

                    switch (true) {
                        case (handler.playOnMiss):
                            switch (true) {
                                case handler.hitTargetsId.includes(target.id):
                                    hitSpot = target.center;
                                    break;
                                default:
                                    hitSpot = missHit;
                            }
                            break;
                        default:
                            hitSpot = target.center;
                    }

                    anDeg = -(rangeRay.angle * 57.3);
                    anDist = rangeRay.distance;

                    switch (true) {
                        case (anDist <= 600):
                            anFileSize = 600;
                            anFile = rangeFilePath[15];
                            anchorX = 0.2;
                            tmdelay = Delay01;
                            break;
                        case (anDist > 1200):
                            anFileSize = 1800;
                            anFile = rangeFilePath[45];
                            anchorX = 0.091;
                            tmdelay = Delay02;
                            break;
                        default:
                            anFileSize = 1200;
                            anFile = rangeFilePath[30];
                            anchorX = 0.125;
                            tmdelay = Delay03;
                            break;
                    }
                    anScale = anDist / anFileSize;
                    anScaleY = anDist <= 600 ? 0.6 : anScale;

                    spellAnim =
                    {
                        file: anFile,
                        position: handler.actorToken.center,
                        anchor: {
                            x: anchorX,
                            y: 0.5
                        },
                        angle: anDeg,
                        scale: {
                            x: anScale,
                            y: anScaleY
                        }
                    };

                    canvas.fxmaster.playVideo(spellAnim);
                    game.socket.emit('module.fxmaster', spellAnim);

                    switch (true) {
                        case handler.playOnMiss:
                            switch (true) {
                                case handler.hitTargetsId.includes(target.id):
                                    await wait(tmdelay);
                                    if (handler.animExplode && handler.animOverride) {
                                        meleeExplosion(handler, target);
                                    }
                                    break;
                                default:
                                    await wait(500);
                            }
                            break;
                        default:
                            await wait(tmdelay);
                            if (handler.animExplode && handler.animOverride) {
                                meleeExplosion(handler, target);
                            }
                    }
                    break;
                default:
                    // log("in range");
                    Scale = canvas.scene.data.grid / 175;
                    var plusOrMinus = Math.random() < 0.5 ? -1 : 1;

                    missAnim = Math.floor(Math.random() * 20) + 14;

                    switch (true) {
                        case (handler.playOnMiss):
                            switch (true) {
                                case handler.hitTargetsId.includes(target.id):
                                    missHit = 0;
                                    missDist = 0;
                                    break;
                                default:
                                    missHit = missAnim * plusOrMinusRay;
                                    missDist = canvas.grid.size * plusOrMinusDist;
                            }
                            break;
                        default:
                            missHit = 0;
                            missDist = 0;
                    }

                    anDeg = -(ray.angle * 57.3 + missHit);
                    anDist = ray.distance + missDist;

                    let meleeAnim =
                    {
                        file: meleeFilePath,
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
                        case distance <= 5:
                            canvas.fxmaster.playVideo(meleeAnim);
                            game.socket.emit('module.fxmaster', meleeAnim);
                            break;
                        default:
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

                                let ray = new Ray(tok1.center, tok2.center);
                                effectData.distance = ray.distance;
                                effectData.rotation = ray.angle + missHit;
                                // Throw effect locally
                                canvas.fxmaster.playVideo(effectData);
                                // And to other clients
                                game.socket.emit('module.fxmaster', effectData);
                            }

                            function castSpell(effect) {
                                drawSpecialToward(effect, handler.actorToken, target);
                            }


                            castSpell({
                                file: meleeFilePath,
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
                    }

                    switch (true) {
                        case handler.playOnMiss:
                            switch (true) {
                                case handler.hitTargetsId.includes(target.id):
                                    await wait(tmdelay);
                                    if (handler.animExplode && handler.animOverride) {
                                        meleeExplosion(handler, target);
                                    }
                                    if (game.settings.get("autoanimations", "tmfx")) {
                                        await wait(200);
                                        switch (true) {
                                            case (fireColor != "pass"):
                                                TokenMagic.addFilters(target, burn);
                                                break;
                                            default:
                                        }
                                    }
                                    break;
                                default:
                                    await wait(500);
                            }
                            break;
                        default:
                            await wait(tmdelay);
                            if (handler.animExplode && handler.animOverride) {
                                meleeExplosion(handler, target);
                            }
                            if (game.settings.get("autoanimations", "tmfx")) {
                                await wait(200);
                                switch (true) {
                                    case (fireColor != "pass"):
                                        TokenMagic.addFilters(target, burn);
                                        break;
                                    default:
                                }
                            }
                    }
            }
        }
    }
    cast();
}

export default meleeRangeSwitch;