import { JB2APATREONDB } from "./jb2a-patreon-database.js";
import { JB2AFREEDB } from "./jb2a-free-database.js";

const wait = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

async function bardicInspiration(handler) {

    let audio = handler.allSounds.item;
    let audioEnabled = handler.itemSound;

    function moduleIncludes(test) {
        return !!game.modules.get(test);
    }

    let obj01 = moduleIncludes("jb2a_patreon") === true ? JB2APATREONDB : JB2AFREEDB;
    let obj02;
    let repeat;
    let color;
    //console.log(handler.bardAnim);
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
    let markerScale = canvas.grid.size * 1.5;
    let color02 = handler.bards.markerColor;
    //console.log(color02);

    let markerPath = obj01['bardicinspiration']['marker'][color02];
    let markerSelf = {
        alpha: 0.85,
        x: (token.x - (canvas.grid.size / 3)),
        y: (token.y - (canvas.grid.size / 3)),
        height: markerScale,
        width: markerScale,
        img: markerPath,
    };
    let markerTarget
    if (target) {
        markerTarget = {
            x: (target.x - (canvas.grid.size / 2)),
            y: (target.y - (canvas.grid.size / 2)),
            height: markerScale,
            width: markerScale,
            img: markerPath
        };
    }


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

    async function markerCreate(markerToken) {

        let name = "Bardic Inspiration";

        let textureData = {
            texturePath: "modules/jb2a_patreon/Library/Generic/Marker/MusicMarker_01_Regular_GreenOrange_400x400.webm",
            scale: "1.5",
            speed: 0,
            multiple: 1,
            rotation: "static",
            xScale: 0.5,
            yScale: 0.5,
            belowToken: true,
            radius: 2,
            opacity: 0.85,
            tint: 16777215,
            equip: false,
            lock: false
        }
        CTA.addAnimation(markerToken, textureData, false, name, null)
        //CTA.addAnimation(markerToken, textureData, false, name, null)
    }
    async function markerDelete(markerToken) {
        let name = "Bardic Inspiration";
        CTA.removeAnimByName(markerToken, name, true, true);
        //CTA.removeAnimByName(markerToken, name, true, true);
    }
    async function music(number) {
        let x = number
        for (var i = 0; i < x; i++) {
            let ranVar = Math.floor(Math.random() * 7 + 1).toString();
            //console.log(obj01[obj02][color]);
            //console.log(obj02);
            //console.log(color);
            let filePath = obj01[obj02][color][ranVar];
            let varX = randomSpot(xMin, xMax);
            let varY = randomSpot(yMin, yMax);
            let varXtarget = randomSpot(xMintarget, xMaxtarget);
            let varYtarget = randomSpot(yMintarget, yMaxtarget);

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
                    x: .5,
                    y: .5
                }
            };

            let targetAnim =
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

            async function selfCasting() {
                canvas.fxmaster.playVideo(sourceAnim);
                game.socket.emit('module.fxmaster', sourceAnim);
            }

            async function targetCasting() {
                canvas.fxmaster.playVideo(targetAnim);
                game.socket.emit('module.fxmaster', targetAnim);
            }
            if (handler.bardSelf) {
                selfCasting();
            }
            if (target && handler.bardTarget) {
                targetCasting();
            }
            await wait(350)
        }
    }
    async function bardicInspiration() {

        let filePath = obj01[obj02]['inspire'][color];

        let varTarget = targetCenter(target);
        let sourceAnim =
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
        let targetAnim =
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

        async function selfCasting() {
            //const selfMarker = await canvas.scene.createEmbeddedDocuments("Tile", [markerSelf]);
            canvas.fxmaster.playVideo(sourceAnim);
            game.socket.emit('module.fxmaster', sourceAnim);
            //let length = canvas.background.placeables.length;
            //let delete01 = canvas.background.placeables[length - 1];
            //await wait(2750);
            //canvas.scene.deleteEmbeddedDocuments("Tile", [delete01.id])
        }

        async function targetCasting() {
            //const targetMarker = await canvas.scene.createEmbeddedDocuments("Tile", [markerTarget]);
            canvas.fxmaster.playVideo(targetAnim);
            game.socket.emit('module.fxmaster', targetAnim);
            //let length = canvas.background.placeables.length;
            //let delete02 = canvas.background.placeables[length - 1];
            //await wait(3000);
            //canvas.scene.deleteEmbeddedDocuments("Tile", [delete02.id])
        }
        if (handler.bardSelf) {
            selfCasting();
        }
        if (target && handler.bardTarget) {
            targetCasting();
        }
    }
    let ctaActive = game.modules.get("Custom-Token-Animations")?.active;
    switch (true) {
        case obj02 === "music":
            music(10);
            if (handler.bards.marker && ctaActive) {
                if (handler.bards.marker) {
                    if (handler.bardSelf) {
                        markerCreate(token);
                    }
                    if (target && handler.bardTarget) {
                        markerCreate(target);
                    }
                    await wait(3750);
                    if (handler.bardSelf) {
                        markerDelete(token);
                    }
                    if (target && handler.bardTarget) {
                        markerDelete(target);
                    }
                }
            }
            break;
        default:
            bardicInspiration();
            if (handler.bards.marker && ctaActive) {
                if (handler.bardSelf) {
                    markerCreate(token);
                }
                if (target && handler.bardTarget) {
                    markerCreate(target);
                }
                await wait(3750);
                if (handler.bardSelf) {
                    markerDelete(token);
                }
                if (target && handler.bardTarget) {
                    markerDelete(target);
                }
            }
    }
    if (audioEnabled) {
        await wait(audio.delay);
        AudioHelper.play({ src: audio.file, volume: audio.volume, autoplay: true, loop: false }, true);
    }
}
export default bardicInspiration;