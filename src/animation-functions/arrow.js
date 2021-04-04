const wait = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

async function arrowOptionExplode(handler) {
    function moduleIncludes(test) {
        return !!game.modules.get(test);
    }

    let path00 = moduleIncludes("jb2a_patreon") === true ? `jb2a_patreon` : `JB2A_DnD5e`;

    let type01 = "01";
    let tint = "Regular";
    let color = "White";
    //let tmColor;
    //let tmMacro;

    switch (true) {
        case (handler.itemColorIncludes("green")):
            type01 = "01";
            tint = "Glowing";
            color = "Green";
            break;
        case (handler.itemColorIncludes("white")):
            type01 = "01";
            tint = "Regular";
            color = "White";
            break;
    }

    let type02 = "01";
    switch (true) {
        case handler.animExVariant.includes("02"):
            type02 = "02";
            break;
    }
    let color02 = "Orange";



    switch (true) {
        case (handler.animExColor.includes("blue")):
            color02 = "Blue";
            //tmColor = 0x0075B0;
            break;
        case (handler.animExColor.includes("orange")):
            color02 = "Orange";
            //tmColor = 0xBF6E00;
            break;
        case (handler.animExColor.includes("purple")):
            color02 = "Purple";
            //tmColor = 0xBF0099;
            break;
        case (handler.animExColor.includes("yellow")):
            color02 = "Yellow";
            //tmColor = 0xCFD204;
            break;
        case (handler.animExColor.includes("green")):
            color02 = "Green";
            //tmColor = 0x0EB400;
            break;
    }

    /*
        switch (true) {
            case (handler.itemIncludes("acid")):
                type02 = "01";
                color02 = "Green";
                tmColor = 0x60CC70;
                break;
            case (handler.itemIncludes("explosive")):
                type02 = "01";
                color02 = "Orange";
                tmColor = 0xFF9309;
                break;
            case (handler.itemIncludes("lightning")):
                type02 = "01";
                color02 = "Blue";
                tmColor = 0x053ABD;
                break;
    
        }
    */
    /*
        let Poison =
            [{
                filterType: "field",
                filterId: "Poisoned",
                shieldType: 3,
                gridPadding: 1,
                color: tmColor,
                time: 0,
                blend: 0,
                intensity: 0.9,
                lightAlpha: 1,
                lightSize: 0.7,
                scale: 1,
                radius: 1,
                chromatic: false,
                zOrder: 512,
                animated:
                {
                    time:
                    {
                        active: true,
                        speed: 0.0015,
                        animType: "move"
                    }
                }
            }];
    
        let letitBurn =
            [{
                filterType: "xfire",
                filterId: "Burning",
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
                autoDestroy: true,
                animated:
                {
                    time:
                    {
                        loopDuration: 1000,
                        loops: 2,
                        active: true,
                        speed: -0.0015,
                        animType: "move"
                    }
    
                }
            }];
            */
    /*
        let Electric =
            [{
                filterType: "electric",
                filterId: "Shocked",
                color: tmColor,
                time: 0,
                blend: 2,
                intensity: 5,
                animated:
                {
                    time:
                    {
                        active: true,
                        speed: 0.0020,
                        animType: "move"
                    }
    
                }
            }];
            */
    /*
        switch (true) {
            case (handler.itemIncludes("acid")):
                tmMacro = Poison;
                break;
            case (handler.itemIncludes("explosive")):
                tmMacro = letitBurn;
                break;
            case (handler.itemIncludes("lightning")):
                tmMacro = Electric;
                break;
    
        }
    */
    let divisor = 100;
    switch (true) {
        case (handler.animExRadius.includes("2")):
            divisor = 300;
            break;
        case (handler.animExRadius.includes("05")):
            divisor = 200;
            break;
        case (handler.animExRadius.includes("10")):
            divisor = 100;
            break;
        case (handler.animExRadius.includes("15")):
            divisor = 67;
        case (handler.animExRadius.includes("20")):
            divisor = 50;
            break;
        case (handler.animExRadius.includes("25")):
            divisor = 40;
            break;
        case (handler.animExRadius.includes("30")):
            divisor = 33;
            break;
        case (handler.animExRadius.includes("35")):
            divisor = 28.5;
            break;
        case (handler.animExRadius.includes("40")):
            divisor = 25;
            break;
        case (handler.animExRadius.includes("45")):
            divisor = 22.2;
            break;
        case (handler.animExRadius.includes("50")):
            divisor = 20;
            break;
        case (handler.animExRadius.includes("nuclear")):
            divisor = 10;
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
            let Scale = (canvas.scene.data.grid / divisor);

            await wait(500)

            let target = handler.allTargets[i];

            let ray = new Ray(handler.actorToken.center, target.center);
            let anDeg = -(ray.angle * 57.3);
            let anDist = ray.distance;

            // Animation file path
            let file = `modules/${path00}/Library/Generic/Weapon_Attacks/Ranged/`;

            // Checking for range to target to choose which file to pull
            let anFile = `${file}Arrow01_${type01}_${tint}_${color}_30ft_1600x400.webm`;
            let anFileSize = 600;
            let anchorX = 0.125;
            let boomDelay = 1250;
            switch (true) {
                case (anDist <= 1200):
                    anFileSize = 1200;
                    anFile = `${file}Arrow01_${type01}_${tint}_${color}_30ft_1600x400.webm`;
                    anchorX = 0.125;
                    boomDelay = 1250;
                    break;
                case (anDist > 2400):
                    anFileSize = 3600;
                    anFile = `${file}Arrow01_${type01}_${tint}_${color}_90ft_4000x400.webm`;
                    anchorX = 0.05;
                    boomDelay = 1750;
                    break;
                default:
                    anFileSize = 2400;
                    anFile = `${file}Arrow01_${type01}_${tint}_${color}_60ft_2800x400.webm`;
                    anchorX = 0.071;
                    boomDelay = 1500;
                    break;
            }

            // Scaling the Height of the animation for consistency across ranges
            let anScale = anDist / anFileSize;
            let anScaleY = anDist <= 600 ? 0.6 : anScale;

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

            let spellAnim2 =
            {
                file: `modules/${path00}/Library/Generic/Explosion/Explosion_${type02}_${color02}_400x400.webm`,
                position: target.center,
                anchor: {
                    x: 0.5,
                    y: 0.5
                },
                angle: 0,
                scale: {
                    x: Scale,
                    y: Scale
                }
            };

            canvas.fxmaster.playVideo(spellAnim);
            game.socket.emit('module.fxmaster', spellAnim);
            /*
            if (handler.animExplode && handler.animOverride) {
                await wait(boomDelay);
                explodeOnTarget(handler);
            }
            */
            switch (true) {
                case (handler.animExplode):
                    await wait(boomDelay);
                    canvas.fxmaster.playVideo(spellAnim2);
                    game.socket.emit('module.fxmaster', spellAnim2);
                    //TokenMagic.addUpdateFiltersOnTargeted(letitBurn);
                    //await wait(2500);
                    //TokenMagic.deleteFiltersOnTargeted("Shocked");
                    //await wait(50);
                    //TokenMagic.deleteFiltersOnTargeted("Burning");
                    //await wait(50);
                    // TokenMagic.deleteFiltersOnTargeted("Poisoned");
                    break;
            }


        }
    }
    cast();
}

export default arrowOptionExplode;