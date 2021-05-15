import { JB2APATREONDB } from "./jb2a-patreon-database.js";
import { JB2AFREEDB } from "./jb2a-free-database.js";

const wait = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

async function bardicInspiration(handler) {

    function moduleIncludes(test) {
        return !!game.modules.get(test);
    }

    let obj01 = moduleIncludes("jb2a_patreon") === true ? JB2APATREONDB : JB2AFREEDB;
    let obj02;
    let repeat;
    let color;
    console.log(handler.bardAnim);
    switch (true) {
        case (handler.bardAnim === "music"):
            obj02 = "music";
            repeat = 10;
            switch (true) {
                case handler.color === "a1" || handler.color === ``:
                case !handler.color:
                    color = "blue";
                    break;
                default:
                    color = handler.color;
            }        
            break;
        default:
            obj02 = "bardicinspiration";
            repeat = 1;
            switch (true) {
                case handler.color === "a1" || handler.color === ``:
                case !handler.color:
                    color = "green orange";
                    break;
                default:
                    color = handler.color;
            }        
    }

    let token = handler.actorToken;
    let target = handler.allTargets[0];

    function randomSpot(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    function targetCenter(target) {
        return target?.center;
    }

    let centerX = token.center.x;
    let centerY = token.center.y;
    let grid = canvas.grid.size;
    let xMax = centerX + grid / 2;
    let xMin = centerX - grid / 2;
    let yMax = centerY;
    let yMin = centerY - grid / 2;

    let centerXtarget = target?.center.x;
    let centerYtarget = target?.center.y;
    let xMaxtarget = centerXtarget + grid / 2;
    let xMintarget = centerXtarget - grid / 2;
    let yMaxtarget = centerYtarget;
    let yMintarget = centerYtarget - grid / 2;

    async function cast(number) {
        let x = number;

        for (var i = 0; i < x; i++) {
            let ranVar = Math.floor(Math.random() * 7 + 1).toString();
            let filePath;
            let varX;
            let varY;
            let varXtarget;
            let varYtarget;
            let sourceAnim;
            let targetAnim;
            let varTarget;
            switch (obj02) {
                case "music":
                    filePath = obj01[obj02][color][ranVar];
                    varX = randomSpot(xMin, xMax);
                    varY = randomSpot(yMin, yMax);
                    varXtarget = randomSpot(xMintarget, xMaxtarget);
                    varYtarget = randomSpot(yMintarget, yMaxtarget);

                    sourceAnim =
                    {
                        file: filePath,
                        position: {
                            x: varX,
                            y: varY
                        },
                        anchor: {
                            x: 0.5,
                            y: 0.5
                        },
                        angle: 0,
                        scale: {
                            x: .5,
                            y: .5
                        }
                    };

                    targetAnim =
                    {
                        file: filePath,
                        position: {
                            x: varXtarget,
                            y: varYtarget
                        },
                        anchor: {
                            x: 0.5,
                            y: 0.5
                        },
                        angle: 0,
                        scale: {
                            x: .5,
                            y: .5
                        }
                    };
        
                    break;
                case "bardicinspiration":
                    filePath = obj01[obj02][color];
                    
                    varTarget = targetCenter(target);
                    sourceAnim =
                    {
                        file: filePath,
                        position: token.center,
                        anchor: {
                            x: 0.5,
                            y: 0.5
                        },
                        angle: 0,
                        scale: {
                            x: .5,
                            y: .5
                        }
                    };
                    targetAnim =
                    {
                        file: filePath,
                        position: varTarget,
                        anchor: {
                            x: 0.5,
                            y: 0.5
                        },
                        angle: 0,
                        scale: {
                            x: .5,
                            y: .5
                        }
                    };
            }

            if (handler.bardSelf) {
                canvas.fxmaster.playVideo(sourceAnim);
                game.socket.emit('module.fxmaster', sourceAnim);
            }
            if (target && handler.bardTarget) {
                canvas.fxmaster.playVideo(targetAnim);
                game.socket.emit('module.fxmaster', targetAnim);
            }
            await wait(500);
        }
    }
    cast(repeat);

}
export default bardicInspiration;