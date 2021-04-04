import colorChecks from "./colorChecks.js"

const wait = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

async function spellAttacks(handler) {

    function moduleIncludes(test) {
        return !!game.modules.get(test);
    }

    let path00 = moduleIncludes("jb2a_patreon") === true ? `jb2a_patreon` : `JB2A_DnD5e`;

    let { tint, color, tmColor } = colorChecks(handler);

    let path;
    let path2;

    switch (true) {
        case (handler.itemNameIncludes("fire", "bolt")):
        case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemFireBolt").toLowerCase()):
            path = "Cantrip/Fire_Bolt";
            path2 = "FireBolt_01";
            switch (true) {
                case (tint === "default"):
                    tint = "Regular";
                case (color === "default"):
                    color = "Orange";
                case (tmColor === "default"):
                    tmColor = 0xFF9309;
            }
            break;
        case (handler.itemNameIncludes("ray", "frost")):
        case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemRayFrost").toLowerCase()):
            path = "Cantrip/Ray_Of_Frost";
            path2 = "RayOfFrost_01";
            switch (true) {
                case (tint === "default"):
                    tint = "Regular";
                case (color === "default"):
                    color = "Blue";
                case (tmColor === "default"):
                    tmColor = 0xBBDDEE;
            }
            break;
        case (handler.itemNameIncludes("witch", "bolt")):
        case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemWitchBolt").toLowerCase()):
            path = "1st_Level/Witch_Bolt";
            path2 = "WitchBolt_01";
            switch (true) {
                case (tint === "default"):
                    tint = "Regular";
                case (color === "default"):
                    color = "Blue";
                case (tmColor === "default"):
                    tmColor = 0xAE00AE;
            }
            break;
        case (handler.itemNameIncludes("scorching", "ray")):
        case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemScorchingRay").toLowerCase()):
            path = "2nd_Level/Scorching_Ray";
            path2 = "ScorchingRay_01";
            switch (true) {
                case (tint === "default"):
                    tint = "Regular";
                case (color === "default"):
                    color = "Orange";
                case (tmColor === "default"):
                    tmColor = 0xFF9309;
            }
            break;
        case (handler.itemNameIncludes("disintegrate")):
        case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemDisintegrate").toLowerCase()):
            path = "6th_Level/Disintegrate";
            path2 = "Disintegrate_01";
            switch (true) {
                case (tint === "default"):
                    tint = "Regular";
                case (color === "default"):
                    color = "Green01";
                case (tmColor === "default"):
                    tmColor = 0x00AFC1;
            }
            break;
        case (handler.itemNameIncludes("eldritch blast")):
        case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemEldritchBlast").toLowerCase()):
            path = "Cantrip/Eldritch_Blast";
            path2 = "EldritchBlast_01";
            switch (true) {
                case (tint === "default"):
                    tint = "Regular";
                case (color === "default"):
                    color = "Purple";
                case (tmColor === "default"):
            }
            break;
    }


    let letitBurn =
        [{
            filterType: "xfire",
            filterId: "letitBurn",
            autoDestroy: true,
            time: 0,
            // Can change color in hex format
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
                    loops: 1,
                    active: true,
                    speed: -0.0015,
                    animType: "move"
                }

            }
        }];
    let frosty =
        [{
            filterType: "xfire",
            filterId: "Frosty",
            autoDestroy: true,
            color: tmColor,
            time: 0,
            blend: 5,
            amplitude: 1,
            dispersion: 0,
            chromatic: false,
            scaleX: 1,
            scaleY: 1,
            inlay: true,
            animated:
            {
                time:
                {
                    loopDuration: 1400,
                    loops: 1,
                    active: true,
                    speed: -0.0020,
                    animType: "move"
                }

            }
        }];
    let ashes =
        [{
            filterType: "fire",
            filterId: "Ashes",
            autoDestroy: true,
            intensity: 3,
            color: tmColor,
            amplitude: 2,
            time: 0,
            blend: 15,
            fireBlend: 1,
            alphaDiscard: true,
            zOrder: 50,
            animated:
            {
                time:
                {
                    loopDuration: 1000,
                    loops: 2,
                    active: true,
                    speed: -0.0024,
                    animType: "move"
                }
            }
        }];
    let electric =
        [{
            filterType: "electric",
            filterId: "Witchy",
            autoDestroy: true,
            color: tmColor,
            time: 0,
            blend: 2,
            intensity: 3,
            animated:
            {
                time:
                {
                    loopDuration: 1000,
                    loops: 4,
                    active: true,
                    speed: 0.0020,
                    animType: "move"
                }

            }
        }];

    let tmDelay;
    let tmKill;
    let tmMacro;

    switch (true) {
        case (handler.itemNameIncludes("fire", "bolt")):
        case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemFireBolt").toLowerCase()):
            //tmDelay = 1000;
            //tmKill = 500;
            //tmMacro = letitBurn;
            break;
        case (handler.itemNameIncludes("ray", "frost")):
        case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemRayFrost").toLowerCase()):
            tmDelay = 750;
            tmKill = 2000;
            tmMacro = frosty;
            break;
        case (handler.itemNameIncludes("witch", "bolt")):
        case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemWitchBolt").toLowerCase()):
            tmDelay = 50;
            tmKill = 4000;
            tmMacro = electric;
            break;
        case (handler.itemNameIncludes("scorching", "ray")):
        case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemScorchingRay").toLowerCase()):
            tmDelay = 500;
            tmKill = 750;
            tmMacro = letitBurn;
            break;
        case (handler.itemNameIncludes("disintegrate")):
        case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemDisintegrate").toLowerCase()):
            tmDelay = 500;
            tmKill = 2000;
            tmMacro = ashes;
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
            //log(target.id);
            let saves;
            function saveCheck(test) {
                if (saves?.includes(test)) return true;
            }

            let ray = new Ray(handler.actorToken.center, target.center);
            let anDeg = -(ray.angle * 57.3);
            let anDist = ray.distance;
            //console.log(anDist);
            let file = `modules/${path00}/Library/${path}`;

            let anFile;
            let anFileSize = 600;
            let anchorX = 0.2;

            switch (true) {
                case (handler.itemNameIncludes("fire", "bolt")):
                case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemFireBolt").toLowerCase()):
                case (handler.itemNameIncludes("scorching", "ray")):
                case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemScorchingRay").toLowerCase()):
                case (handler.itemNameIncludes("eldritch blast")):
                case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemEldritchBlast").toLowerCase()):
                    switch (true) {
                        case (anDist <= 1100):
                            anFileSize = 1200;
                            anFile = `${file}/${path2}_${tint}_${color}_30ft_1600x400.webm`;
                            anchorX = 0.125;
                            break;
                        case (anDist > 2100):
                            anFileSize = 3600;
                            anFile = `${file}/${path2}_${tint}_${color}_90ft_4000x400.webm`;
                            anchorX = 0.05;
                            break;
                        default:
                            anFileSize = 2400;
                            anFile = `${file}/${path2}_${tint}_${color}_60ft_2800x400.webm`;
                            anchorX = 0.071;
                            break;
                    }
                    break;
                case (handler.itemNameIncludes("ray", "frost")):
                case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemRayFrost").toLowerCase()):
                case (handler.itemNameIncludes("disintegrate")):
                case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemDisintegrate").toLowerCase()):
                    switch (true) {
                        case (anDist <= 600):
                            anFileSize = 600;
                            anFile = `${file}/${path2}_${tint}_${color}_15ft_1000x400.webm`;
                            anchorX = 0.2;
                            break;
                        case (anDist > 1200):
                            anFileSize = 1800;
                            anFile = `${file}/${path2}_${tint}_${color}_45ft_2200x400.webm`;
                            anchorX = 0.091;
                            break;
                        default:
                            anFileSize = 1200;
                            anFile = `${file}/${path2}_${tint}_${color}_30ft_1600x400.webm`;
                            anchorX = 0.125;
                            break;
                    }
                    break;
                case (handler.itemNameIncludes("witch bolt")):
                case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemWitchBolt").toLowerCase()):
                    switch (true) {
                        case (anDist <= 600):
                            anFileSize = 600;
                            anFile = `${file}/${path2}_${tint}_${color}_15ft_1000x400.webm`;
                            anchorX = 0.2;
                            break;
                        default:
                            anFileSize = 1200;
                            anFile = `${file}/${path2}_${tint}_${color}_30ft_1600x400.webm`;
                            anchorX = 0.125;
                            break;
                    }
                    break;
            }

            let anScale = anDist / anFileSize;
            //let anScaleY = anDist <= 600 ? 0.6 : anScale;

            let anScaleY = anScale;
            if (anDist <= 300) { anScaleY = 0.7 }
            if (anDist >= 400 && anDist <= 600) { anScaleY = anScale * 0.9 }
            if (anDist >= 700 && anDist <= 900) { anScaleY = 0.8 }
            if (anDist >= 1000 && anDist <= 1200) { anScaleY = anScale * 0.9 }
            if (anDist >= 1300 && anDist <= 1500) { anScaleY = 0.6 }
            if (anDist >= 1600 && anDist <= 1800) { anScaleY = 0.8 }
            if (anDist >= 1800) { anScaleY = anScale }


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

            handler.allTargets.forEach(async (i) => {
                canvas.fxmaster.playVideo(spellAnim);
                game.socket.emit('module.fxmaster', spellAnim);
                if (game.settings.get("automated-jb2a-animations", "tmfx")) {
                    switch (true) {
                        case (saveCheck(target.id)):
                            break;
                        default:
                            await wait(tmDelay);
                            TokenMagic.addFilters(target, tmMacro);
                    }
                }

            });


        }
    }
    cast();
}

export default spellAttacks;