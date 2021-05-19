import meleeExplosion from "./melee-explosion.js";

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
            //console.log(anDist);
            // Animation file path
            let file = `modules/${path00}/Library/Generic/Weapon_Attacks/Ranged/`;

            // Checking for range to target to choose which file to pull
            let anFile = `${file}Arrow01_${type01}_${tint}_${color}_30ft_1600x400.webm`;
            let anFileSize = 600;
            let anchorX = 0.125;
            let boomDelay = 1250;
            switch (true) {
                case (anDist <= 1000):
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
            let anScaleY;
            switch (true) {
                case anDist <= 300:
                    anScaleY = 0.4;
                    break;
                case anDist <= 600:
                    anScaleY = 0.5;
                    break;
                case anDist <= 900:
                    anScaleY = 0.6;
                    break;
                case anDist <= 1200:
                    anScaleY = 0.7;
                    break;
                case anDist <= 1500:
                    anScaleY = 0.7;
                    break;
                case anDist <= 1800:
                    anScaleY = 0.9;
                    break;
                default:
                    anScaleY = anScale;
                    break;
            }


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
            /*
            if (handler.animExplode && handler.animOverride) {
                await wait(boomDelay);
                explodeOnTarget(handler);
            }
            */

            switch (true) {
                case (handler.playOnMiss):
                    switch (true) {
                        case handler.hitTargetsId.includes(target.id):
                            await wait(boomDelay);
                            if (handler.animExplode && handler.animOverride) {
                                meleeExplosion(handler, target);
                            }
                            break;
                        default:
                            await wait(500);
                    }
                    break;
                default:
                    await wait(boomDelay);
                    if (handler.animExplode && handler.animOverride) {
                        meleeExplosion(handler, target);
                    }
            }
        }
    }
    cast();
}

export default arrowOptionExplode;