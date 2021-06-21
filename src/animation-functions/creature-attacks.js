import { JB2APATREONDB } from "./jb2a-patreon-database.js";
import { JB2AFREEDB } from "./jb2a-free-database.js";
import getVideoDimensionsOf from "../canvas-animation/video-metadata.js";

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

    function moduleIncludes(test) {
        return !!game.modules.get(test);
    }

    var randomProperty = function (obj) {
        var keys = Object.keys(obj);
        var keyLength = keys.length;
        var ranKey = Math.floor(Math.random() * keyLength);
        return keys[ranKey];
    };

    let obj01 = moduleIncludes("jb2a_patreon") === true ? JB2APATREONDB : JB2AFREEDB;
    let color;
    let tmMacro;
    let sourceToken = handler.actorToken
    let tokenWidth = sourceToken.w

    async function cast() {
        var arrayLength = handler.allTargets.length;

        var targetCheck = handler.targetAssistant.length;
        let noTargetAnim = `modules/autoanimations/Animations/No_Target_400x400.webm`;
        let targetTrainer =
        {
            file: noTargetAnim,
            position: sourceToken.center,
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
                        case handler.color === "random":
                            color = randomProperty(obj01[obj02]);
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
                        case handler.color === "random":
                            color = randomProperty(obj01[obj02]);
                            break;
                        default:
                            color = handler.color;
                    }
                    filePath = obj01[obj02][color];
                    tmMacro = HitStutter;
                    break;
            }
            var videoData = await getVideoDimensionsOf(filePath);
            let videoHeight = videoData.height;
            let videoWidth = videoData.width;
            let duration = videoData.duration * 1000;
            let scaleX = (tokenWidth / videoWidth) * 1.75;

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
                    x: scaleX,
                    y: scaleX
                }
            };
            canvas.autoanimations.playVideo(spellAnim);
            game.socket.emit('module.autoanimations', spellAnim);

            if (game.settings.get("autoanimations", "tmfx")) {
                await wait(250);
                TokenMagic.addFilters(target, tmMacro);
            }
        }
    }
    cast();
}

export default creatureAttacks;
