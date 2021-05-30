import { JB2APATREONDB } from "./jb2a-patreon-database.js";
import { JB2AFREEDB } from "./jb2a-free-database.js";

const wait = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

async function magicMissile(handler) {

    let audio = handler.allSounds.item;
    let audioEnabled = handler.itemSound;

    function moduleIncludes(test) {
        return !!game.modules.get(test);
    }

    let obj01 = moduleIncludes("jb2a_patreon") === true ? JB2APATREONDB : JB2AFREEDB;

    let loopVar;
    switch (true) {
        case handler.spellLoops > 10:
            loopVar = 10;
            break;
        default:
            loopVar = handler.spellLoops;
    }
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

            let ray = new Ray(handler.actorToken.center, target.center);
            let anDeg = -(ray.angle * 57.3);
            let anDist = ray.distance;
            let globalDelay = game.settings.get("autoanimations", "globaldelay");
            await wait(globalDelay);
        
            async function spellAnimation(number) {

                let x = number;
                let interval = 500;
                for (var i = 0; i < x; i++) {
                    setTimeout(function () {
                        let c1 = "blue";
                        let c2 = "green";
                        let c3 = "purple";
                        let c4 = "yellow";
                        let c5 = "orange";

                        var items = [c1, c2, c3, c4, c5];
                        let ranVar = Math.floor(Math.random() * 9 + 1).toString();
                        function random_color(items) {
                            return items[Math.floor(Math.random() * items.length)];
                        }
                        let color;
                        switch (true) {
                            case handler.color === "a1" || ``:
                            case !handler.color:
                                color = "purple";
                                break;
                            case handler.color === "random":
                                color = random_color(items);
                                break;
                            default:
                                color = handler.color;
                        }

                        let filePath =  obj01['magicmissile'][color];
                        let anFile;
                        let anFileSize = 600;
                        let anchorX = 0.125;
                        switch (true) {
                            case (anDist <= 1800):
                                anFileSize = 1200;
                                anFile = filePath['30'][ranVar];
                                anchorX = 0.125;
                                break;
                            default:
                                anFileSize = 2400;
                                anFile = filePath['60'][ranVar];
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
                        canvas.autoanimations.playVideo(spellAnim);
                        game.socket.emit('module.autoanimations', spellAnim);
                    }, i * interval);
                }
            }
            spellAnimation(loopVar)
            if (game.settings.get("autoanimations", "tmfx")) {
                // Activates the Token Magic FX after a delay
                await wait(1000)
                TokenMagic.addFilters(target, shockWave);
            }
        }
    }
    cast();
    if (audioEnabled) {
        await wait(audio.delay);
        AudioHelper.play({ src: audio.file, volume: audio.volume, autoplay: true, loop: false }, true);
    }
}

export default magicMissile;