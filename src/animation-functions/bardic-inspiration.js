import { JB2APATREONDB } from "./jb2a-patreon-database.js";
import { JB2AFREEDB } from "./jb2a-free-database.js";
import getVideoDimensionsOf from "../canvas-animation/video-metadata.js";

const wait = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

async function bardicInspiration(handler) {

    function moduleIncludes(test) {
        return !!game.modules.get(test);
    }

    let obj01 = moduleIncludes("jb2a_patreon") === true ? JB2APATREONDB : JB2AFREEDB;
    let obj02;
    let obj02T
    let colorT;
    let repeat;
    let color;
    switch (true) {
        case (handler.bardAnim === "music"):
            obj02 = "music";
            repeat = 10;
            switch (true) {
                case handler.bards.bardSelfColor === "a1" || handler.bards.bardSelfColor === ``:
                case !handler.bards.bardSelfColor:
                    color = "blue";
                    break;
                default:
                    color = handler.bards.bardSelfColor;
            }
            break;
        default:
            obj02 = "bardicinspiration";
            repeat = 1;
            switch (true) {
                case handler.bards.bardSelfColor === "a1" || handler.bards.bardSelfColor === ``:
                case !handler.bards.bardSelfColor:
                    color = "green orange";
                    break;
                default:
                    color = handler.bards.bardSelfColor;
            }
    }

    switch (true) {
        case (handler.bards.bardTargetAnim === "music"):
            obj02T = "music";
            repeat = 10;
            switch (true) {
                case handler.bards.bardTargetColor === "a1" || handler.bards.bardTargetColor === ``:
                case !handler.bards.bardTargetColor:
                    colorT = "blue";
                    break;
                default:
                    colorT = handler.bards.bardTargetColor;
            }
            break;
        default:
            obj02T = "bardicinspiration";
            repeat = 1;
            switch (true) {
                case handler.bards.bardTargetColor === "a1" || handler.bards.bardTargetColor === ``:
                case !handler.bards.bardTargetColor:
                    colorT = "green orange";
                    break;
                default:
                    colorT = handler.bards.bardTargetColor;
            }
    }

    let token = handler.actorToken;
    let target = handler.allTargets[0];
    let color02 = handler.bards.markerColor;
    let color02T = handler.bards.markerColorTarget;


    function randomSpot(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    function targetCenter(target) {
        return target?.center;
    }

    async function markerCreate(tokenMarker, path) {
        var videoData = await getVideoDimensionsOf(path);
        let videoHeight = videoData.height;
        let videoWidth = videoData.width;
        let duration = videoData.duration * 1000;

        let scaleX = (tokenMarker.w / videoWidth) * 2;

        let spellAnim =
        {
            file: path,
            position: tokenMarker.center,
            anchor: {
                x: 0.5,
                y: 0.5
            },
            angle: 0,
            speed: 0,
            scale: {
                x: scaleX,
                y: scaleX
            },
            below: true
        };
        canvas.autoanimationsG.playVideo(spellAnim);
        game.socket.emit('module.autoanimations', spellAnim);
    }

    async function music(number, token, path) {

        var videoData = await getVideoDimensionsOf(path['1']);
        let videoHeight = videoData.height;
        let videoWidth = videoData.width;
        let duration = videoData.duration * 1000;

        let scaleX = (token.w / videoWidth) * 1;

        let centerX = token.center.x;
        let centerY = token.center.y;
        let size = token.w;
        let xMax = centerX + size / 2;
        let xMin = centerX - size / 2;
        let yMax = centerY;
        let yMin = centerY - size / 2;

        let x = number
        for (var i = 0; i < x; i++) {
            let ranVar = Math.floor(Math.random() * 7 + 1).toString();
            let filePath = path[ranVar];
            let varX = randomSpot(xMin, xMax);
            let varY = randomSpot(yMin, yMax);

            let sourceAnim =
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
                    x: scaleX,
                    y: scaleX
                }
            };

            canvas.autoanimations.playVideo(sourceAnim);
            game.socket.emit('module.autoanimations', sourceAnim);


            await wait(350)
        }
    }

    async function bardicInspiration(biToken, path) {

        var videoData = await getVideoDimensionsOf(path);
        let videoHeight = videoData.height;
        let videoWidth = videoData.width;
        let duration = videoData.duration * 1000;

        let scaleX = (biToken.w / videoWidth) * 2;


        let sourceAnim =
        {
            file: path,
            position: biToken.center,
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

        canvas.autoanimations.playVideo(sourceAnim);
        game.socket.emit('module.autoanimations', sourceAnim);
    }
    //let ctaActive = game.modules.get("Custom-Token-Animations")?.active;
    let biFileToken;
    let biFileTarget;

    let markerPath;
    let markerPathTarget;

    let musicTokenPath;
    let musicTargetPath;

    if (handler.bards.bardSelf) {
        switch (true) {
            case obj02 === "music":
                musicTokenPath = obj01[obj02][color];
                music(10, token, musicTokenPath);
                if (handler.bards.marker) {
                    if (handler.bardSelf) {
                        markerPath = obj01['bardicinspiration']['marker'][color02];
                        markerCreate(token, markerPath);
                    }
                    await wait(3750);
                }
                break;
            default:
                biFileToken = obj01[obj02]['inspire'][color];
                bardicInspiration(token, biFileToken);
                if (handler.bards.marker) {
                    if (handler.bardSelf) {
                        markerPath = obj01['bardicinspiration']['marker'][color02];
                        markerCreate(token, markerPath);
                    }
                    await wait(3750);
                }
        }
    }
    if (handler.bards.bardTarget && target !== undefined) {
        switch (true) {
            case obj02T === "music":
                musicTargetPath = obj01[obj02T][colorT];
                music(10, target, musicTargetPath);
                if (handler.bards.marker) {
                    if (target && handler.bardTarget) {
                        markerPathTarget = obj01['bardicinspiration']['marker'][color02T];
                        markerCreate(target, markerPathTarget);
                    }
                    await wait(3750);
                }
                break;
            default:
                biFileTarget = obj01[obj02T]['inspire'][colorT];
                bardicInspiration(target, biFileTarget);
                if (handler.bards.marker) {
                    if (target && handler.bardTarget) {
                        markerPathTarget = obj01['bardicinspiration']['marker'][color02T];
                        markerCreate(target, markerPathTarget);
                    }
                    await wait(3750);
                }
        }
    }
}
export default bardicInspiration;