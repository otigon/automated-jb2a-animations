import { JB2APATREONDB } from "./jb2a-patreon-database.js";
import { JB2AFREEDB } from "./jb2a-free-database.js";

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

    switch (true) {
        case (handler.bards.bardTargetAnim === "music"):
            obj02T = "music";
            repeat = 10;
            switch (true) {
                case handler.color === "a1" || handler.color === ``:
                case !handler.color:
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
                case handler.color === "a1" || handler.color === ``:
                case !handler.color:
                    colorT = "green orange";
                    break;
                default:
                    colorT = handler.bards.bardTargetColor;
            }
    }

    let token = handler.actorToken;
    let target = handler.allTargets[0];
    let markerScale = canvas.grid.size * 1.5;
    let color02 = handler.bards.markerColor;
    let color02T = handler.bards.markerColorTarget;
    //console.log(color02);
    //console.log(color02);

    let markerPath = obj01['bardicinspiration']['marker'][color02];
    let markerPathTarget = obj01['bardicinspiration']['marker'][color02T];

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

    let tokenScale = (token.w / canvas.grid.size) * 0.5;
    let targetScale = (target.w / canvas.grid.size) * 0.5;
    /*
    async function markerCreate(markerToken) {

        let name = "Bardic Inspiration";

        let textureData = {
            texturePath: markerPath,
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
    */
    async function markerCreate(markerToken) {
        let spellAnim =
        {
            file: markerPath,
            position: token.center,
            anchor: {
                x: 0.5,
                y: 0.5
            },
            angle: 0,
            speed: 0,
            scale: {
                x: tokenScale,
                y: tokenScale
            },
            level: "ground"
        };
        canvas.autoanimationsG.playVideo(spellAnim);
        game.socket.emit('module.autoanimations', spellAnim);
    }
    /*
    async function markerCreateTarget(markerToken) {

        let name = "Bardic Inspiration";

        let textureData = {
            texturePath: markerPathTarget,
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
    */
    async function markerCreateTarget(markerToken) {
        let spellAnim =
        {
            file: markerPathTarget,
            position: target.center,
            anchor: {
                x: 0.5,
                y: 0.5
            },
            angle: 0,
            speed: 0,
            scale: {
                x: targetScale,
                y: targetScale
            },
            level: "ground"
        };
        canvas.autoanimationsG.playVideo(spellAnim);
        game.socket.emit('module.autoanimations', spellAnim);
    }
    /*
    async function markerDelete(markerToken) {
        let name = "Bardic Inspiration";
        CTA.removeAnimByName(markerToken, name, true, true);
        //CTA.removeAnimByName(markerToken, name, true, true);
    }
    */
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

            async function selfCasting() {
                canvas.autoanimations.playVideo(sourceAnim);
                game.socket.emit('module.autoanimations', sourceAnim);
            }

            if (handler.bardSelf) {
                selfCasting();
            }

            await wait(350)
        }
    }

    async function musicTarget(number) {
        let x = number
        for (var i = 0; i < x; i++) {
            let ranVar = Math.floor(Math.random() * 7 + 1).toString();
            let filePathTarget = obj01[obj02T][colorT][ranVar];
            let varXtarget = randomSpot(xMintarget, xMaxtarget);
            let varYtarget = randomSpot(yMintarget, yMaxtarget);

            let targetAnim =
            {
                file: filePathTarget,
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

            async function targetCasting() {
                canvas.autoanimations.playVideo(targetAnim);
                game.socket.emit('module.autoanimations', targetAnim);
            }

            if (target && handler.bardTarget) {
                targetCasting();
            }
            await wait(350)
        }
    }

    async function bardicInspiration() {

        let filePath = obj01[obj02]['inspire'][color];

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

        async function selfCasting() {
            canvas.autoanimations.playVideo(sourceAnim);
            game.socket.emit('module.autoanimations', sourceAnim);
        }
        if (handler.bardSelf) {
            selfCasting();
        }
    }

    async function bardicInspirationTarget() {

        let filePathTarget = obj01[obj02T]['inspire'][colorT]

        let varTarget = targetCenter(target);

        let targetAnim =
        {
            file: filePathTarget,
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

        async function targetCasting() {
            canvas.autoanimations.playVideo(targetAnim);
            game.socket.emit('module.autoanimations', targetAnim);
        }

        if (target && handler.bardTarget) {
            targetCasting();
        }
    }

    //let ctaActive = game.modules.get("Custom-Token-Animations")?.active;

    if (obj02 === "music") {

    }

    switch (true) {
        case obj02 === "music":
            music(10);
            if (handler.bards.marker) {
                if (handler.bardSelf) {
                    markerCreate(token);
                }
                await wait(3750);
            }
            break;
        default:
            bardicInspiration();
            if (handler.bards.marker) {
                if (handler.bardSelf) {
                    markerCreate(token);
                }
                await wait(3750);
            }
    }

    switch (true) {
        case obj02T === "music":
            musicTarget(10);
            if (handler.bards.marker) {
                if (target && handler.bardTarget) {
                    markerCreateTarget(target);
                }
                await wait(3750);
            }
            break;
        default:
            bardicInspirationTarget();
            if (handler.bards.marker) {
                if (target && handler.bardTarget) {
                    markerCreateTarget(target);
                }
                await wait(3750);
            }
    }
}
export default bardicInspiration;