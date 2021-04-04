import colorChecks from "./colorChecks.js"

const wait = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

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

    let path00 = moduleIncludes("jb2a_patreon") === true ? `jb2a_patreon` : `JB2A_DnD5e`;

    let { type01, tint, color, tmColor } = colorChecks(handler);

    switch (true) {
        case (type01 === "default"):
            type01 = "01";
        case (tint === "default"):
            tint = "Regular";
        break;
    }

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
        },
        {
            filterType: "xfire",
            filterId: "colorWave",
            autoDestroy: true,
            time: 0,
            color: tmColor,
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
                    loopDuration: 750,
                    loops: 2,
                    active: true,
                    speed: -0.0015,
                    animType: "move"
                }
            }
        }];

    let tmMacro = "pass";

    switch (true) {
        case (handler.itemColorIncludes("white")):
            tmMacro = bloodSplat;
            break;
    }

    let path01 = "Dagger02";
    let size = "400";
    let Delay01 = 900;
    let Delay02 = 900;
    let Delay03 = 900;
    switch (true) {
        case (handler.itemNameIncludes("hammer")):
        case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemThrowingHammer").toLowerCase()):
            switch (true) {
                case (color === "default"):
                    color = "White";
            }
            path01 = "Hammer01";
            tmMacro = hitStutter;
            Delay01 = 600;
            Delay02 = 800;
            Delay03 = 800;
            tint = "Regular";
            break;
        case (handler.itemNameIncludes("siege")):
        case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemSiegeBoulder").toLowerCase()):
            switch (true) {
                case (color === "default"):
                    color = "White";
            }
            path01 = "SiegeBoulder01";
            tmMacro = hitStutter;
            Delay01 = 750;
            Delay02 = 1250;
            Delay03 = 1150;
            size = "500";
            tint = "Regular";
            break;
        case (handler.itemNameIncludes("boulder")):
        case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemBoulder").toLowerCase()):
            switch (true) {
                case (color === "default"):
                    color = "White";
            }
            path01 = "BoulderToss01";
            tmMacro = hitStutter
            size = "500";
            Delay01 = 1250;
            Delay02 = 1750;
            Delay03 = 1550;
            tint = "Regular";
            break;
        case (handler.itemNameIncludes("laser")):
        case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemLaserBlast").toLowerCase()):
            switch (true) {
                case (color === "default"):
                    color = "Blue";
            }
            path01 = "LaserShot";
            tmMacro = colorWave;
            Delay01 = 500;
            Delay02 = 500;
            Delay03 = 500;
            break;
        case (handler.itemNameIncludes("sling")):
        case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemSling").toLowerCase()):
            switch (true) {
                case (color === "default"):
                    color = "White";
            }
            path01 = "SlingShot";
            Delay01 = 2000;
            Delay02 = 2300;
            Delay03 = 2000;
            tint = "Regular";
            break;
        case (handler.itemNameIncludes("javelin")):
        case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemJavelin").toLowerCase()):
            switch (true) {
                case (color === "default"):
                    color = "White";
            }
            path01 = "Javelin01";
            tmMacro = bloodSplat;
            Delay01 = 750;
            Delay02 = 1250;
            Delay03 = 1050;
            tint = "Regular";
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

        switch (true) {
            case ((arrayLength === 0) && (game.settings.get("automated-jb2a-animations", "targetingAssist"))):
                canvas.fxmaster.playVideo(targetTrainer);
                game.socket.emit('module.fxmaster', targetTrainer);
        }

        for (var i = 0; i < arrayLength; i++) {

            await wait(500)

            let target = handler.allTargets[i];

            let ray = new Ray(handler.actorToken.center, target.center);
            let anDeg = -(ray.angle * 57.3);
            let anDist = ray.distance;

            let file = `modules/${path00}/Library/Generic/Weapon_Attacks/Ranged`;

            let anFile = `${file}/${path01}_${type01}_${tint}_${color}_15ft_1000x${size}.webm`;
            console.log(anFile);
            let anFileSize = 600;
            let anchorX = 0.2;
            switch (true) {
                case (handler.itemNameIncludes("hammer")):
                case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemThrowingHammer").toLowerCase()):
                case (handler.itemNameIncludes("kunai")):
                case (handler.itemNameIncludes("sling")):
                case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemSling").toLowerCase()):
                    anFile = `${file}/${path01}_${type01}_${tint}_${color}_15ft_1000x${size}.webm`;
                    anFileSize = 600;
                    anchorX = 0.2;
                    switch (true) {
                        case (anDist <= 600):
                            anFileSize = 600;
                            anFile = `${file}/${path01}_${type01}_${tint}_${color}_15ft_1000x${size}.webm`;
                            anchorX = 0.2;
                            tmDelay = Delay01;
                            break;
                        case (anDist > 1200):
                            anFileSize = 1800;
                            anFile = `${file}/${path01}_${type01}_${tint}_${color}_45ft_2200x${size}.webm`;
                            anchorX = 0.091;
                            tmDelay = Delay02;
                            break;
                        default:
                            anFileSize = 1200;
                            anFile = `${file}/${path01}_${type01}_${tint}_${color}_30ft_1600x${size}.webm`;
                            anchorX = 0.125;
                            tmDelay = Delay03;
                            break;
                    }
                    break;
                case (handler.itemNameIncludes("arrow")):
                case (handler.itemNameIncludes("bow")):
                case (handler.itemNameIncludes("siege")):
                case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemSiegeBoulder").toLowerCase()):
                case (handler.itemNameIncludes("boulder")):
                case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemBoulder").toLowerCase()):
                case (handler.itemNameIncludes("javelin")):
                case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemJavelin").toLowerCase()):
                case (handler.itemNameIncludes("laser")):
                case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemLaserBlast").toLowerCase()):
                    anFile = `${file}/${path01}_${type01}_${tint}_${color}_30ft_1600x${size}.webm`;
                    anFileSize = 600;
                    anchorX = 0.125;
                    switch (true) {
                        case (anDist <= 1200):
                            anFileSize = 1200;
                            anFile = `${file}/${path01}_${type01}_${tint}_${color}_30ft_1600x${size}.webm`;
                            anchorX = 0.125;
                            tmDelay = Delay01;
                            break;
                        case (anDist > 2400):
                            anFileSize = 3600;
                            anFile = `${file}/${path01}_${type01}_${tint}_${color}_90ft_4000x${size}.webm`;
                            anchorX = 0.05;
                            tmDelay = Delay02;
                            break;
                        default:
                            anFileSize = 2400;
                            anFile = `${file}/${path01}_${type01}_${tint}_${color}_60ft_2800x${size}.webm`;
                            anchorX = 0.071;
                            tmDelay = Delay03;
                            break;
                    }
                    break;
            }

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
                if (game.settings.get("automated-jb2a-animations", "tmfx")) {
                    await wait(interval * x + 1500);
                    TokenMagic.deleteFilters(target, "BloodSplat");
                }
            }
            SpellAnimation(Repeater)
            if (game.settings.get("automated-jb2a-animations", "tmfx")) {
                switch (true) {
                    case (tmMacro === "pass"):
                        break;
                    default:
                        await wait(tmDelay);
                        TokenMagic.addFilters(target, tmMacro);
                        break;
                }
            }
        }
    }
    cast();
}

export default rangedWeapons;