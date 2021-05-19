import { JB2APATREONDB } from "./jb2a-patreon-database.js";
import { JB2AFREEDB } from "./jb2a-free-database.js";

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

async function rangedWeapons(handler) {

    function moduleIncludes(test) {
        return !!game.modules.get(test);
    }

    let obj01 = moduleIncludes("jb2a_patreon") === true ? JB2APATREONDB : JB2AFREEDB;

    let tmDelay;
    let colorWave =
        [{
            filterType: "wave",
            filterId: "colorWave",
            autoDestroy: true,
            time: 0,
            strength: 0.03,
            frequency: 15,
            maxIntensity: 4.0,
            minIntensity: 0.5,
            padding: 25,
            animated:
            {
                time:
                {
                    loopDuration: 750,
                    loops: 2,
                    active: true,
                    speed: 0.0180,
                    animType: "move",
                }
            }
        }];

    let tmMacro = "pass";

    let obj02;
    let Delay01 = 900;
    let Delay02 = 900;
    let Delay03 = 900;
    let color;
    switch (true) {
        case (handler.itemNameIncludes("hammer")):
        case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemThrowingHammer").toLowerCase()):
            obj02 = "rangehammer";
            tmMacro = hitStutter;
            Delay01 = 600;
            Delay02 = 800;
            Delay03 = 800;
            break;
        case (handler.itemNameIncludes("siege")):
        case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemSiegeBoulder").toLowerCase()):
            switch (true) {
                case (handler.color === "default"):
                    color = "White";
            }
            obj02 = "siege";
            tmMacro = hitStutter;
            Delay01 = 750;
            Delay02 = 1250;
            Delay03 = 1150;
            break;
        case (handler.itemNameIncludes("boulder")):
        case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemBoulder").toLowerCase()):
            switch (true) {
                case (handler.animColor === "a1"):
                    color = "White";
            }
            obj02 = "boulder";
            tmMacro = hitStutter
            Delay01 = 1250;
            Delay02 = 1750;
            Delay03 = 1550;
            break;
        case (handler.itemNameIncludes("laser")):
        case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemLaserBlast").toLowerCase()):
            switch (true) {
                case (handler.color === "a1"):
                case (!handler.color):
                    color = "blue";
                    break;
                default:
                    color = handler.color;
            }
            obj02 = "lasershot";
            tmMacro = colorWave;
            Delay01 = 500;
            Delay02 = 500;
            Delay03 = 500;
            break;
        case (handler.itemNameIncludes("sling")):
        case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemSling").toLowerCase()):
            switch (true) {
                case (handler.color === "default"):
                    color = "White";
            }
            obj02 = "rangesling";
            Delay01 = 2000;
            Delay02 = 2300;
            Delay03 = 2000;
            break;
        case (handler.itemNameIncludes("javelin")):
        case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemJavelin").toLowerCase()):
            switch (true) {
                case (handler.color === "default"):
                    color = "White";
            }
            obj02 = "rangejavelin";
            Delay01 = 750;
            Delay02 = 1250;
            Delay03 = 1050;
            break;
    }
    let filePath;
    switch (obj02) {
        case "lasershot":
            filePath = obj01[obj02][color]
            break;
        default:
            filePath = obj01[obj02];
    }
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

        switch (true) {
            case ((arrayLength === 0) && (game.settings.get("autoanimations", "targetingAssist"))):
                canvas.fxmaster.playVideo(targetTrainer);
                game.socket.emit('module.fxmaster', targetTrainer);
        }

        for (var i = 0; i < arrayLength; i++) {

            await wait(500)

            let target = handler.allTargets[i];

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
            let missHit = {
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
                            hitSpot = missHit;
                    }
                    break;
                default:
                    hitSpot = target.center;
            }
            let ray = new Ray(handler.actorToken.center, hitSpot);

            let anDeg = -(ray.angle * 57.3);
            let anDist = ray.distance;


            let anFile;
            //console.log(anFile);
            let anFileSize = 600;
            let anchorX = 0.2;
            switch (true) {
                case (handler.itemNameIncludes("hammer")):
                case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemThrowingHammer").toLowerCase()):
                case (handler.itemNameIncludes("kunai")):
                case (handler.itemNameIncludes("sling")):
                case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemSling").toLowerCase()):
                    switch (true) {
                        case (anDist <= 600):
                            anFileSize = 600;
                            anFile = filePath['15'];
                            anchorX = 0.2;
                            tmDelay = Delay01;
                            break;
                        case (anDist > 1200):
                            anFileSize = 1800;
                            anFile = filePath['45'];
                            anchorX = 0.091;
                            tmDelay = Delay02;
                            break;
                        default:
                            anFileSize = 1200;
                            anFile = filePath['30'];
                            anchorX = 0.125;
                            tmDelay = Delay03;
                            break;
                    }
                    break;
                case (handler.itemNameIncludes("siege")):
                case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemSiegeBoulder").toLowerCase()):
                case (handler.itemNameIncludes("boulder")):
                case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemBoulder").toLowerCase()):
                case (handler.itemNameIncludes("javelin")):
                case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemJavelin").toLowerCase()):
                case (handler.itemNameIncludes("laser")):
                case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemLaserBlast").toLowerCase()):
                    switch (true) {
                        case (anDist <= 1200):
                            anFileSize = 1200;
                            anFile = filePath['30'];
                            anchorX = 0.125;
                            tmDelay = Delay01;
                            break;
                        case (anDist > 2400):
                            anFileSize = 3600;
                            anFile = filePath['90'];
                            anchorX = 0.05;
                            tmDelay = Delay02;
                            break;
                        default:
                            anFileSize = 2400;
                            anFile = filePath['60'];
                            anchorX = 0.071;
                            tmDelay = Delay03;
                            break;
                    }
                    break;
                case (handler.itemNameIncludes("laser")):
                case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemLaserBlast").toLowerCase()):
                    switch (true) {
                        case (anDist <= 1200):
                            anFileSize = 1200;
                            anFile = filePath[color]['30'];
                            anchorX = 0.125;
                            tmDelay = Delay01;
                            break;
                        case (anDist > 2400):
                            anFileSize = 3600;
                            anFile = filePath[color]['90'];
                            anchorX = 0.05;
                            tmDelay = Delay02;
                            break;
                        default:
                            anFileSize = 2400;
                            anFile = filePath[color]['60'];
                            anchorX = 0.071;
                            tmDelay = Delay03;
                            break;
                    }
                    break;
            }
            console.log(anFile);
            let anScale = anDist / anFileSize;
            let anScaleY = anDist <= 600 ? 0.6 : anScale;
            /*
            let anScaleY = anScale;
            if (anDist <= 300) { anScaleY = 0.75 }
            if (anDist >= 400 && anDist <= 600) { anScaleY = anScale * 0.9 }
            if (anDist >= 700 && anDist <= 900) { anScaleY = 0.8 }
            if (anDist >= 1000 && anDist <= 1200) { anScaleY = anScale * 0.9 }
            if (anDist >= 1300 && anDist <= 1500) { anScaleY = 0.6 }
            if (anDist >= 1600 && anDist <= 1800) { anScaleY = 0.8 }
            if (anDist >= 1800) { anScaleY = anScale }
*/

            let spellAnim =
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

            let Repeater = 1;
            switch (true) {
                case (handler.itemNameIncludes("laser")):
                case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemLaserBlast").toLowerCase()):
                    Repeater = 3;
                    break;
                default:
                    Repeater = 1;
                    break;
            }

            async function SpellAnimation(number) {

                let x = number;
                let interval = 250;
                for (var i = 0; i < x; i++) {
                    setTimeout(function () {
                        canvas.fxmaster.playVideo(spellAnim);
                        game.socket.emit('module.fxmaster', spellAnim);
                    }, i * interval);
                }
            }
            SpellAnimation(Repeater)
            if (game.settings.get("autoanimations", "tmfx")) {
                switch (true) {
                    case (tmMacro === "pass"):
                        break;
                    default:
                        switch (true) {
                            case handler.playOnMiss:
                                switch (true) {
                                    case handler.hitTargetsId.includes(target.id):
                                        await wait(tmDelay);
                                        TokenMagic.addFilters(target, tmMacro);
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

export default rangedWeapons;