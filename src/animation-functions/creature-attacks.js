import { JB2APATREONDB } from "./jb2a-patreon-database.js";
import { JB2AFREEDB } from "./jb2a-free-database.js";

let HitStutter =
    [{
        filterType: "images",
        filterId: "BloodyHitStutter",
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

const wait = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

async function creatureAttacks(handler) {
    
    let audio = handler.allSounds.item;
    let audioEnabled = handler.itemSound;

    function moduleIncludes(test) {
        return !!game.modules.get(test);
    }

    let obj01 = moduleIncludes("jb2a_patreon") === true ? JB2APATREONDB : JB2AFREEDB;

    let color;

    let tmMacro;

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

        let Scale;
        let Size = handler.actor.data.data.traits.size;
        switch (Size) {
            case "tiny":
            case "sm":
                Scale = 0.25;
                break;
            case "med":
                Scale = 0.5;
                break;
            case "lg":
                Scale = 0.75;
                break;
            case "huge":
                Scale = 1.15;
                break;
            case "grg":
                Scale = 1.4;
                break;
        }
        let globalDelay = game.settings.get("autoanimations", "globaldelay");
        await wait(globalDelay);
    
        for (var i = 0; i < arrayLength; i++) {
            //log(handler.allTargets[i]);
            let target = handler.allTargets[i];
            let obj02;
            let filePath;
            switch (true) {
                case (handler.itemNameIncludes("claw")):
                case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemClaw").toLowerCase()):
                    obj02 = "creatureclaw";
                    switch (true) {
                        case handler.color === "a1" || ``:
                        case !handler.color:
                            color = "red";
                            break;
                        default:
                            color = handler.color;
                    }        
                    filePath = obj01[obj02][color];
                    break;
                case (handler.itemNameIncludes("bite")):
                case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemBite").toLowerCase()):
                    obj02 = "creaturebite";
                    switch (true) {
                        case handler.color === "a1" || ``:
                        case !handler.color:
                            color = "red";
                            break;
                        default:
                            color = handler.color;
                    }        
                    filePath = obj01[obj02][color];
                    tmMacro = HitStutter;
                    break;
            }
            let spellAnim =
            {
                //                         File path to animation
                file: filePath,
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

            if (game.settings.get("autoanimations", "tmfx")) {
                await wait(250);
                TokenMagic.addFilters(target, tmMacro);
            }
        }
    }
    cast();
    if (audioEnabled) {
        await wait(audio.delay);
        AudioHelper.play({ src: audio.file, volume: audio.volume, autoplay: true, loop: false }, true);
    }
}

export default creatureAttacks;
