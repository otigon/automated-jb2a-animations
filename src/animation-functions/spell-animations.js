import { buildSpellFile } from "./common-functions/build-filepath.js"

const wait = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

async function betweenAnimation(handler) {
    function moduleIncludes(test) {
        return !!game.modules.get(test);
    }

    let obj01 = moduleIncludes("jb2a_patreon") === true ? JB2APATREONDB : JB2AFREEDB;
    let itemName = handler.convertedName;
    let globalDelay = game.settings.get("autoanimations", "globaldelay");
    await wait(globalDelay);

    async function cast() {

        for (var i = 0; i < arrayLength; i++) {
            let target = handler.allTargets[i];

            let ray = new Ray(handler.actorToken.center, target);
            let anDeg = -(ray.angle * 57.3);
            let anDist = ray.distance;

            let anFile;
            let anFileSize = 600;
            let anchorX = 0.2;
            let anScale;
            let anScaleY;
            let filePath = buildSpellFile(obj01, handler.convertedName, handler.flags)

            switch (itemName) {
                case "firebolt":
                case "scorchingray":
                case "eldritchblast":
                case "guidingbolt":
                    switch (true) {
                        case (anDist <= 1400):
                            anFileSize = 1200;
                            anFile = filePath['30'];
                            anchorX = 0.125;
                        break;
                        case (anDist <= 1400):
                            anFileSize = 3600;
                            anFile = filePath['90'];
                            anchorX = 0.05;
                        break;
                        default:
                            anFileSize = 2400;
                            anFile = filePath['60'];
                            anchorX = 0.071;
                    }
                    anScale = anDist / anFileSize;
                    break;
                case "rayoffrost":
                case "disintegrate":
                    switch (true) {
                        case (anDist <= 600):
                            anFileSize = 600;
                            anFile =filePath['15'];
                            anchorX = 0.2;
                            break;
                        case (anDist > 1200):
                            anFileSize = 1800;
                            anFile = filePath['45'];
                            anchorX = 0.091;
                            break;
                        default:
                            anFileSize = 1200;
                            anFile = filePath['30'];
                            anchorX = 0.125;
                            break;
                    }
                    anScale = anDist / anFileSize;
                    break;
                case "witchbolt":
                    switch (true) {
                        case (anDist <= 600):
                            anFileSize = 600;
                            anFile = filePath['15'];
                            anchorX = 0.2;
                            break;
                        default:
                            anFileSize = 1200;
                            anFile = filePath['30'];
                            anchorX = 0.125;
                            break;
                    }
                    anScale = anDist / anFileSize;
                    break;
            }
            let anim =
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
                    y: (anScaleY * plusOrMinus)
                }
            };
            canvas.autoanimations.playVideo(spellAnim);
            game.socket.emit('module.autoanimations', spellAnim);
        }

    }
    cast()
}
export default betweenAnimation;