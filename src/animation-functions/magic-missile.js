const wait = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

async function magicMissile(handler) {

    function moduleIncludes(test) {
        return !!game.modules.get(test);
    }

    let path00 = moduleIncludes("jb2a_patreon") === true ? `jb2a_patreon` : `JB2A_DnD5e`;

    let type01 = "01";
    let tint = "Regular";
    let color = "Purple";
    let shockWave =
        [{
            filterType: "wave",
            filterId: "shockWave",
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
                    loopDuration: 500,
                    loops: 3,
                    active: true,
                    speed: 0.0180,
                    animType: "move",
                }
            }
        }];


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

            let ray = new Ray(handler.actorToken.center, target.center);
            let anDeg = -(ray.angle * 57.3);
            let anDist = ray.distance;

            async function spellAnimation(number) {

                let x = number;
                let interval = 500;
                for (var i = 0; i < x; i++) {
                    setTimeout(function () {
                        let c1 = "Blue";
                        let c2 = "Green";
                        let c3 = "Purple";
                        let c4 = "Yellow";

                        var items = [c1, c2, c3, c4];

                        function random_color(items) {
                            return items[Math.floor(Math.random() * items.length)];
                        }

                        switch (true) {
                            case (handler.itemColorIncludes("blue")):
                                type01 = "01";
                                tint = "Regular";
                                color = "Blue";
                                break;
                            case (handler.itemColorIncludes("green")):
                                type01 = "01";
                                tint = "Regular";
                                color = "Green";
                                break;
                            case (handler.itemColorIncludes("purple")):
                                type01 = "01";
                                tint = "Regular";
                                color = "Purple";
                                break;
                            case (handler.itemColorIncludes("yellow")):
                                type01 = "01";
                                tint = "Regular";
                                color = "Yellow";
                                break;
                            case (handler.itemColorIncludes("random")):
                                type01 = "01";
                                tint = "Regular";
                                color = random_color(items);
                                break;
                        }


                        let file = `modules/${path00}/Library/1st_Level/Magic_Missile/`;

                        let mmA = `${file}MagicMissile_${type01}_${tint}_${color}_30ft_01_1600x400.webm`;
                        let mmB = `${file}MagicMissile_${type01}_${tint}_${color}_30ft_02_1600x400.webm`;
                        let mmC = `${file}MagicMissile_${type01}_${tint}_${color}_30ft_03_1600x400.webm`;
                        let mmD = `${file}MagicMissile_${type01}_${tint}_${color}_30ft_04_1600x400.webm`;
                        let mmE = `${file}MagicMissile_${type01}_${tint}_${color}_30ft_05_1600x400.webm`;
                        let mmF = `${file}MagicMissile_${type01}_${tint}_${color}_30ft_06_1600x400.webm`;
                        let mmG = `${file}MagicMissile_${type01}_${tint}_${color}_30ft_07_1600x400.webm`;
                        let mmH = `${file}MagicMissile_${type01}_${tint}_${color}_30ft_08_1600x400.webm`;
                        let mmI = `${file}MagicMissile_${type01}_${tint}_${color}_30ft_09_1600x400.webm`;

                        let mmAA = `${file}MagicMissile_${type01}_${tint}_${color}_60ft_01_2800x400.webm`;
                        let mmBB = `${file}MagicMissile_${type01}_${tint}_${color}_60ft_02_2800x400.webm`;
                        let mmCC = `${file}MagicMissile_${type01}_${tint}_${color}_60ft_03_2800x400.webm`;
                        let mmDD = `${file}MagicMissile_${type01}_${tint}_${color}_60ft_04_2800x400.webm`;
                        let mmEE = `${file}MagicMissile_${type01}_${tint}_${color}_60ft_05_2800x400.webm`;
                        let mmFF = `${file}MagicMissile_${type01}_${tint}_${color}_60ft_06_2800x400.webm`;
                        let mmGG = `${file}MagicMissile_${type01}_${tint}_${color}_60ft_07_2800x400.webm`;
                        let mmHH = `${file}MagicMissile_${type01}_${tint}_${color}_60ft_08_2800x400.webm`;
                        let mmII = `${file}MagicMissile_${type01}_${tint}_${color}_60ft_09_2800x400.webm`;

                        var itemsA = [mmA, mmB, mmC, mmD, mmE, mmF, mmG, mmH, mmI];
                        var itemsB = [mmAA, mmBB, mmCC, mmDD, mmEE, mmFF, mmGG, mmHH, mmII];


                        function random_itemA(itemsA) {
                            return itemsA[Math.floor(Math.random() * itemsA.length)];
                        }
                        function random_itemB(itemsB) {
                            return itemsB[Math.floor(Math.random() * itemsB.length)];
                        }



                        let anFile = random_itemA(itemsA);
                        let anFileSize = 600;
                        let anchorX = 0.125;
                        switch (true) {
                            case (anDist <= 1800):
                                anFileSize = 1200;
                                anFile = random_itemA(itemsA);
                                anchorX = 0.125;
                                break;
                            default:
                                anFileSize = 2400;
                                anFile = random_itemB(itemsB);
                                anchorX = 0.071;
                                break;
                        }

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
                        canvas.fxmaster.playVideo(spellAnim);
                        game.socket.emit('module.fxmaster', spellAnim);
                    }, i * interval);
                }
            }
            spellAnimation(3)
            if (game.settings.get("automated-jb2a-animations", "tmfx")) {
                // Activates the Token Magic FX after a delay
                await wait(1000)
                TokenMagic.addFilters(target, shockWave);
            }
        }
    }
    cast();
}

export default magicMissile;
