import colorChecks from "./colorChecks.js"
import explodeOnTarget from "./explode-ontarget.js";
import drawSpecialToward from "./fxmaster-drawTowards.js"

let bloodSplat =
    [{
        filterType: "splash",
        filterId: "BloodSplat",
        rank: 5,
        color: 0x990505,
        padding: 80,
        time: Math.random() * 1000,
        seed: Math.random(),
        splashFactor: 1,
        spread: 0.4,
        blend: 1,
        dimX: 1,
        dimY: 1,
        cut: false,
        textureAlphaBlend: true,
        anchorX: 0.32 + (Math.random() * 0.36),
        anchorY: 0.32 + (Math.random() * 0.36)
    }];

const wait = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

async function meleeRangeSwitch(handler) {

    function moduleIncludes(test) {
        return !!game.modules.get(test);
    }

    let path00 = moduleIncludes("jb2a_patreon") === true ? `jb2a_patreon` : `JB2A_DnD5e`;

    let { type01, tint, color, fireColor } = colorChecks(handler);

    switch (true) {
        case (type01 === "default"):
            type01 = "01";
        case (tint === "default"):
            tint = "Regular";
        case (color === "default"):
            color = "White";
    }

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
    let tmMacro = bloodSplat;
    let item11;
    let item01 = "Dagger02";

    //case handler.itemNameIncludes("handaxe"):
    //case handler.itemNameIncludes("spear"):

    switch (true) {
        case (handler.itemNameIncludes("handaxe")):
        case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemHandaxe").toLowerCase()):
            item01 = "HandAxe02";
            item11 = "HandAxe01";
            tmMacro = bloodSplat;
            tmdelay = 1250;
            tmkill = 1500;
            Delay01 = 600;
            Delay02 = 900;
            Delay03 = 900;
            break;
        case (handler.itemNameIncludes("dagger")):
        case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemDagger").toLowerCase()):
            item01 = "Dagger02";
            item11 = "Dagger01";
            tmMacro = bloodSplat;
            tmdelay = 1000;
            tmkill = 1500;
            Delay01 = 600;
            Delay02 = 600;
            Delay03 = 600;
            break;
        case (handler.itemNameIncludes("spear")):
        case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemSpear").toLowerCase()):
            item01 = "Spear01";
            item11 = "Spear01";
            tmMacro = bloodSplat;
            tmdelay = 1000;
            tmkill = 1500;
            Delay01 = 600;
            Delay02 = 1150;
            Delay03 = 850;
            break;
    }

    switch (true) {
        case (handler.animDagThrVar.includes("kunai")):
            item11 = "Kunai01";
            Delay01 = 600;
            Delay02 = 600;
            Delay03 = 600;
            break;
        case (handler.animDagThrVar.includes("02")):
            item11 = "Dagger02";
            Delay01 = 600;
            Delay02 = 600;
            Delay03 = 600;
            break;
    }

    async function cast() {
        var arrayLength = handler.allTargets.length;

        var targetCheck = handler.targetAssistant.length;
        let noTargetAnim = `modules/automated-jb2a-animations/Animations/No_Target_400x400.webm`;
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
            case ((targetCheck === 0) && (game.settings.get("automated-jb2a-animations", "targetingAssist"))):
                canvas.fxmaster.playVideo(targetTrainer);
                game.socket.emit('module.fxmaster', targetTrainer);
        }

        for (var i = 0; i < arrayLength; i++) {

            let target = handler.allTargets[i];

            let distance = handler.getDistanceTo(target);

            //log(distance);
            let range = 5;
            let ray = new Ray(handler.actorToken.center, target.center);
            let anDeg = -(ray.angle * 57.3);
            let anDist = ray.distance;

            let file;
            let anFile;
            let anFileSize;
            let anchorX;
            let anScale;
            let anScaleY;
            let Scale;
            let spellAnim;

            let path01 = `modules/${path00}/Library/Generic/Weapon_Attacks`;

            switch (true) {
                case (distance > (range + handler.reachCheck)):
                    file = `${path01}/Ranged/`;
                    switch (true) {
                        case (anDist <= 600):
                            anFileSize = 600;
                            anFile = `${file}/${item11}_01_Regular_White_15ft_1000x400.webm`;
                            anchorX = 0.2;
                            tmdelay = Delay01;
                            break;
                        case (anDist > 1200):
                            anFileSize = 1800;
                            anFile = `${file}/${item11}_01_Regular_White_45ft_2200x400.webm`;
                            anchorX = 0.091;
                            tmdelay = Delay02;
                            break;
                        default:
                            anFileSize = 1200;
                            anFile = `${file}/${item11}_01_Regular_White_30ft_1600x400.webm`;
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
                    await wait(tmdelay);
                    if (handler.animExplode && handler.animOverride) {
                        explodeOnTarget(handler);
                    }
                    if (game.settings.get("automated-jb2a-animations", "tmfx")) {
                        //await wait(200);
                        TokenMagic.addFilters(target, tmMacro)
                        await wait(tmkill);
                        TokenMagic.deleteFilters(target, "BloodSplat");
                    }
                    break;
                default:
                    // log("in range");
                    file = `${path01}/Melee/`;
                    Scale = canvas.scene.data.grid / 175;
                    var plusOrMinus = Math.random() < 0.5 ? -1 : 1;

                    let meleeAnim =
                    {
                        file: `${file}${item01}_${type01}_${tint}_${color}_800x600.webm`,
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
                            function castSpell(effect) {
                                drawSpecialToward(effect, handler.actorToken, target);
                            }
                            

                            castSpell({
                                file: `${file}${item01}_${type01}_${tint}_${color}_800x600.webm`,
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

                    await wait(tmdelay - 200);
                    if (handler.animExplode && handler.animOverride) {
                        explodeOnTarget(handler);
                    }
                    if (game.settings.get("automated-jb2a-animations", "tmfx")) {
                        await wait(200);
                        switch (true) {
                            case (fireColor != "pass"):
                                TokenMagic.addFilters(target, burn);
                                await wait(25);
                                //game.macros.getName(tmMacro).execute();
                                TokenMagic.addFilters(target, tmMacro);
                                break;
                            default:
                                TokenMagic.addFilters(target, tmMacro);
                        }
                        await wait(tmkill);
                        //TokenMagic.deleteFilters(target, "meleeBurn");
                        //await wait(50);
                        TokenMagic.deleteFilters(target, "BloodSplat");
                        break;
                    }
            }

        }
    }
    cast();
}

export default meleeRangeSwitch;