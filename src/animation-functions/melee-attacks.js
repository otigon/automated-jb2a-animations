import meleeExplosion from "./melee-explosion.js";
import { JB2APATREONDB } from "./jb2a-patreon-database.js";
import { JB2AFREEDB } from "./jb2a-free-database.js";
import { TMFXCOLORS } from "./tmfxcolors.js";

//import drawSpecialToward from "./fxmaster-drawTowards.js"


const wait = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

let hitStutter =
    [{
        filterType: "images",
        filterId: "HitStutter",
        time: 0,
        nbImage: 2,
        alphaImg: 1.0,
        alphaChr: 0.0,
        autoDestroy: true,
        blend: 4,
        ampX: 0.03,
        ampY: 0.03,
        zOrder: 20,
        animated:
        {
            time:
            {
                active: true,
                speed: 0.070,
                animType: "move",
                loopDuration: 200,
                loops: 2
            },
            anchorX:
            {
                animType: "chaoticOscillation",
                loopDuration: 100,
                val1: 0.40,
                val2: 0.60,
                loops: 4
            }
        }
    }];

async function meleeWeapons(handler) {

    function moduleIncludes(test) {
        return !!game.modules.get(test);
    }

    let obj01 = moduleIncludes("jb2a_patreon") === true ? JB2APATREONDB : JB2AFREEDB;

    let color;

    switch (true) {
        case handler.color === "a1" || ``:
        case !handler.color:
            switch (true) {
                case handler.itemNameIncludes("lasersword"):
                case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemLaserSword").toLowerCase()):
                    color = "blue";
                    break;
                default:
                    color = "white";
            }
            break;
        default:
            color = handler.color;
    }
    //console.log(color);

    // delay before activating the Token Magic FX Macros, change inside the switch cases to adjust the timing
    let tmDelay = 1000;
    // delay before deleting Token Magic FX if needed, change inside switch cases to adjust the deletion
    let tmKill = 1000;
    // calls a Token Magic FX macro defined above, change inside the switch cases to desired TMFX
    let tmMacro = "HitStutter";

    let obj02 = "meleedagger";
    switch (true) {
        case (handler.itemNameIncludes("rapier")):
        case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemRapier").toLowerCase()):
            obj02 = "rapier";
            tmDelay = 900;
            tmKill = 1600;
            //tmMacro = bloodSplat;
            break;
        case (handler.itemNameIncludes("greatsword")):
        case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemGreatsword").toLowerCase()):
            obj02 = "greatsword";
            tmDelay = 1600;
            tmKill = 1600;
            tmMacro = hitStutter;
            break;
        case (handler.itemNameIncludes("greatclub")):
        case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemGreatclub").toLowerCase()):
            obj02 = "greatclub";
            tmDelay = 1100;
            tmKill = 1600;
            tmMacro = hitStutter;
            break;
        case (handler.itemNameIncludes("greataxe")):
        case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemGreataxe").toLowerCase()):
        case (handler.itemNameIncludes("battleaxe")):
        case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemBattleaxe").toLowerCase()):
            obj02 = "greataxe";
            tmDelay = 1600;
            tmKill = 1600;
            tmMacro = hitStutter;
            break;
        case (handler.itemNameIncludes("mace")):
        case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemMace").toLowerCase()):
            obj02 = "mace";
            tmDelay = 1100;
            tmKill = 1600;
            tmMacro = hitStutter;
            break;
        case (handler.itemNameIncludes("lasersword")):
        case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemLaserSword").toLowerCase()):
            obj02 = "lasersword";
            tmDelay = 1300;
            tmKill = 1600;
            //tmMacro = bloodSplat;
            break;
        case (handler.itemNameIncludes("sword")):
        case (handler.itemNameIncludes("scimitar")):
        case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemSword").toLowerCase()):
        case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemScimitar").toLowerCase()):
        case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemLongsword").toLowerCase()):
        case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemShortsword").toLowerCase()):
            obj02 = "sword";
            tmDelay = 1300;
            tmKill = 1600;
            //tmMacro = bloodSplat;
            break;
        case (handler.itemNameIncludes("maul")):
        case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemMaul").toLowerCase()):
            obj02 = "maul";
            tmDelay = 1900;
            tmKill = 1600;
            tmMacro = hitStutter;
            break;
        //case (handler.itemNameIncludes("1 handed slashing")):
        case handler.itemNameIncludes(game.i18n.format("AUTOANIM.item1HS").toLowerCase()):
            obj02 = "genericmelee";
            color = "1hs";
            break;
        //case (handler.itemNameIncludes("2 handed slashing")):
        case handler.itemNameIncludes(game.i18n.format("AUTOANIM.item2HS").toLowerCase()):
            obj02 = "genericmelee";
            color = "2hs";
            tmDelay = 500;
            tmKill = 750;
            tmMacro = hitStutter;
            break;
        //case (handler.itemNameIncludes("1 handed piercing")):
        case handler.itemNameIncludes(game.i18n.format("AUTOANIM.item1HP").toLowerCase()):
            obj02 = "genericmelee";
            color = "1hp";
            break;
        //case (handler.itemNameIncludes("2 handed piercing")):
        case handler.itemNameIncludes(game.i18n.format("AUTOANIM.item2HP").toLowerCase()):
            obj02 = "genericmelee";
            color = "2hp";
            tmDelay = 200;
            tmKill = 500;
            tmMacro = hitStutter;
            break;
        //case (handler.itemNameIncludes("1 handed bludgeoning")):
        case handler.itemNameIncludes(game.i18n.format("AUTOANIM.item1HB").toLowerCase()):
            obj02 = "genericmelee";
            color = "1hb";
            tmDelay = 500;
            tmKill = 750;
            tmMacro = hitStutter;
            break;
        case (handler.itemNameIncludes("2 handed bludgeoning")):
        case handler.itemNameIncludes(game.i18n.format("AUTOANIM.item2HB").toLowerCase()):
            obj02 = "genericmelee";
            color = "2hb";
            tmDelay = 500;
            tmKill = 750;
            tmMacro = hitStutter;
            break;
    }
    let filePath = obj01[obj02][color];
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
    let globalDelay = game.settings.get("autoanimations", "globaldelay");
    await wait(globalDelay);
    async function cast() {
        var arrayLength = handler.allTargets.length;
        //console.log(arrayLength);
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

        /*
        UrlExists(anim, function (status) {
            if (status === 404) {
                anim = `${file}/GreatAxe01_Fire_Regular_Red_800x600.webm`;
                console.log("failure");
            }
        });
        */
        for (var i = 0; i < arrayLength; i++) {
            let target = handler.allTargets[i];


            // Scaled globally, change divisor to increase/decrease size of animation
            let Scale = canvas.scene.data.grid / 175;
            // randomly mirrors animation
            var plusOrMinus = Math.random() < 0.5 ? -1 : 1;


            let distance = handler.getDistanceTo(target);
            let range = 5;

            let ray = new Ray(handler.actorToken.center, target.center);
            let missAnim = Math.floor(Math.random() * 45) + 30;
            var plusOrMinusRay = Math.random() < 0.5 ? -1 : 1;
            let missHit;

            switch (true) {
                case (handler.playOnMiss):
                    switch (true) {
                        case handler.hitTargetsId.includes(target.id):
                            missHit = 0;
                            break;
                        default:
                            missHit = missAnim * plusOrMinusRay;
                    }
                    break;
                default:
                    missHit = 0;
            }

            let anDeg = -(ray.angle * 57.3 + missHit);

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



            switch (true) {
                case distance <= range:
                    canvas.fxmaster.playVideo(meleeAnim);
                    game.socket.emit('module.fxmaster', meleeAnim);
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
                    });

            }


            switch (true) {
                case handler.playOnMiss:
                    switch (true) {
                        case handler.hitTargetsId.includes(target.id):
                            await wait(tmDelay - 200);
                            if (handler.animExplode && handler.animOverride) {
                                meleeExplosion(handler, target);
                            }
                            if (game.settings.get("autoanimations", "tmfx")) {
                                await wait(200);
                                switch (true) {
                                    case (fireColor != "pass"):
                                        TokenMagic.addFilters(target, burn);
                                        await wait(50);
                                        TokenMagic.addFilters(target, tmMacro);
                                        break;
                                    default:
                                        TokenMagic.addFilters(target, tmMacro);
                                        break;
                                }
                            }
                            break;
                        default:
                            await wait(500);
                    }
                    break;
                default:
                    await wait(tmDelay - 200);
                    if (handler.animExplode && handler.animOverride) {
                        meleeExplosion(handler, target);
                    }
                    if (game.settings.get("autoanimations", "tmfx")) {
                        await wait(200);
                        switch (true) {
                            case (fireColor != "pass"):
                                TokenMagic.addFilters(target, burn);
                                await wait(50);
                                TokenMagic.addFilters(target, tmMacro);
                                break;
                            default:
                                TokenMagic.addFilters(target, tmMacro);
                                break;
                        }
                    }
            }
        }
    }
    cast();
}

export default meleeWeapons;