import { JB2APATREONDB } from "./jb2a-patreon-database.js";
import { JB2AFREEDB } from "./jb2a-free-database.js";

const wait = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

async function unarmedStrike(handler) {

    function moduleIncludes(test) {
        return !!game.modules.get(test);
    }

    let obj01 = moduleIncludes("jb2a_patreon") === true ? JB2APATREONDB : JB2AFREEDB;
    let obj02;
    let color;
    switch (true) {
        case handler.uaStrikeType === "magical":
            obj02 = "magical";
            break;
        default:
            obj02 = "physical";
    }
    switch (true) {
        case handler.color === "a1" || handler.color === ``:
        case !handler.color:
            color = "blue";
            break;
        default:
            color = handler.color;
    }

    let globalDelay = game.settings.get("autoanimations", "globaldelay");
    await wait(globalDelay);

    async function cast() {
        var arrayLength = handler.allTargets.length;

        //let tmMacro = "HitStutter";
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
            let ranVar = Math.floor(Math.random() * 2 + 1).toString();
            let obj;
            let filePath;
            switch (true) {
                case handler.itemNameIncludes("unarmed strike"):
                case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemUnarmedStrike").toLowerCase()):
                    obj = 'unarmedstrike';
                    filePath = obj01[obj][obj02][color][ranVar];
                    break;
                case handler.itemNameIncludes("flurry of blows"):
                case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemFlurryBlows").toLowerCase()):
                    obj = 'flurryofblows';
                    switch (handler.uaStrikeType) {
                        case ("magical"):
                            filePath = obj01[obj][obj02][color][ranVar];
                            break;
                        default:
                            filePath = obj01[obj][obj02][color];
                            break;
                    }
                    break;
            }
            console.log(obj01);
            console.log(obj);
            console.log(obj02);
            console.log(color);
            console.log(ranVar);
            console.log(filePath);


            // Scaled globally, change divisor to increase/decrease size of animation
            let Scale = canvas.scene.data.grid / 175;
            // randomly mirrors animation
            var plusOrMinus = Math.random() < 0.5 ? -1 : 1;

            function castSpell(effect) {
                canvas.fxmaster.drawSpecialToward(effect, handler.actorToken, target);
            }

            castSpell({
                file: filePath,
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
            /*
            switch (true) {
                case (game.settings.get("autoanimations", "tmfx")):
                    await wait(500);
                    TokenMagic.addFilters(target, tmMacro);
                    break;
            }
            */

            if (handler.animExplode && handler.animOverride) {
                explodeOnTarget(handler);
            }

        }
    }
    cast();
}

export default unarmedStrike;