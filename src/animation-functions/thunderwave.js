import { JB2APATREONDB } from "./databases/jb2a-patreon-database.js";
import { JB2AFREEDB } from "./databases/jb2a-free-database.js";
//import { buildFile } from "./file-builder/build-filepath.js";
import { socketlibSocket } from "../socketset.js";
import { aaDebugger } from "../constants/constants.js";
import { AAanimationData } from "../aa-classes/animation-data.js";

const wait = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

export async function thunderwaveAuto(handler, animationData, config) {

    function moduleIncludes(test) {
        return !!game.modules.get(test);
    }

    const sourceToken = handler.sourceToken;
    const data = animationData.primary;
    const sourceFX = animationData.sourceFX;

    let obj01 = moduleIncludes("jb2a_patreon") === true ? JB2APATREONDB : JB2AFREEDB;
    let color;
    const colors = ['green', 'orange', 'purple', 'red', 'blue']
    function random_item(items) {
        return items[Math.floor(Math.random() * items.length)];
    }
    switch (true) {
        case data.color === "a1" || ``:
        case !data.color:
            color = "blue";
            break;
        case data.color === "random":
            color = random_item(colors);
        default:
            color = data.color;
    }

    //const templateID = await canvas.templates.placeables[canvas.templates.placeables.length - 1].data._id;
    //let template = await canvas.templates.get(templateID);
    const template = config ? config : canvas.templates.placeables[canvas.templates.placeables.length - 1];

    let filePath = obj01.static.spell.thunderwave;

    const getPosition = getRelativePosition(sourceToken, template)
    const angle = getPosition.angle;
    const anFile = filePath[getPosition.type][color]
    if (handler.debug) { aaDebugger("Thunderwave Animation Start", data, anFile) }

    let globalDelay = game.settings.get("autoanimations", "globaldelay");
    await wait(globalDelay);

    if (data.removeTemplate) {
        canvas.scene.deleteEmbeddedDocuments("MeasuredTemplate", [template.id])
    }
    if (data.persist && (data.type === "circle" || data.type === "rect")) {
        const gridSize = canvas.scene.data.grid;
        let tileData;
        if (data.overhead) {
            tileData = {
                alpha: data.opacity,
                width: gridSize * 3,
                height: gridSize * 3,
                img: anFile,
                // false sets it in canvas.background. true sets it to canvas.foreground
                overhead: true,
                occlusion: {
                    alpha: occlusionAlpha,
                    mode: occlusionMode,
                },
                video: {
                    autoplay: true,
                    loop: true,
                    volume: 0,
                },
                x: template.data.x,
                y: template.data.y,
                z: 100,
            }
        } else {
            tileData = {
                alpha: data.opacity,
                width: gridSize * 3,
                height: gridSize * 3,
                img: anFile,
                // false sets it in canvas.background. true sets it to canvas.foreground
                overhead: false,
                video: {
                    autoplay: true,
                    loop: true,
                    volume: 0,
                },
                x: template.data.x,
                y: template.data.y,
                z: 100,
            }
        }
        socketlibSocket.executeAsGM("placeTile", tileData)
        if (data.playSound) {
            let aaSeq = await new Sequence("Automated Animations")
            aaSeq.effect()
                .sound()
                .file(data.itemAudio.file, true)
                .volume(data.itemAudio.volume)
                .delay(data.itemAudio.delay)
            aaSeq.play()
        }
    } else {
        const gridSize = canvas.scene.data.grid;
        let aaSeq = await new Sequence("Automated Animations")
        // Play Macro if Awaiting
        if (data.playMacro && data.macro.playWhen === "1") {
            let userData = data.macro.args;
            aaSeq.macro(data.macro.name, handler.workflow, handler, ...userData)
        }
        // Extra Effects => Source Token if active
        if (sourceFX.enabled) {
            aaSeq.addSequence(sourceFX.sourceSeq)
        }
        if (data.playSound) {
            aaSeq.addSequence(await AAanimationData._sounds({ animationData }))
        }
        aaSeq.thenDo(function () {
            Hooks.callAll("aa.animationStart", sourceToken, "no-target")
        })
        aaSeq.effect()
            .file(anFile)
            .atLocation({ x: template.data.x + (gridSize * 1.5), y: template.data.y + (gridSize * 1.5) })
            .anchor({ x: 0.5, y: 0.5 })
            //.atLocation(template, { cacheLocation: true })
            .rotate(angle)
            //.scale(scale)
            .size(3, { gridUnits: true })
            .belowTokens(false)
            .repeats(data.repeat, data.delay)
        if (data.playMacro && data.macro.playWhen === "0") {
            let userData = data.macro.args;
            new Sequence()
                .macro(data.macro.name, handler.workflow, handler, ...userData)
                .play()
        }
        aaSeq.play()
        await wait(500)
        Hooks.callAll("aa.animationEnd", sourceToken, "no-target")
    }

    function getRelativePosition(token, template) {
        const xPos = token.data.x;
        const yPos = token.data.y;
        const tempY = template.data.y;
        const tempX = template.data.x;
        const gridSize = canvas.scene.data.grid;
        let type;
        let angle;
        switch (true) {
            case ((xPos >= tempX && xPos <= (tempX + (gridSize * 2))) && (yPos >= tempY && yPos <= (tempY + (gridSize * 2)))):
                type = 'center';
                angle = 0;
                break;
            case ((xPos >= (tempX - gridSize)) && (xPos <= (tempX - (gridSize * 0.5)))) && ((yPos >= (tempY - gridSize)) && (yPos <= (tempY - (gridSize * 0.5)))):
                type = 'left';
                angle = 270;
                break;
            case ((xPos >= (tempX + (gridSize * 2.5))) && (xPos <= (tempX + (gridSize * 3)))) && ((yPos >= (tempY - gridSize)) && (yPos <= (tempY - (gridSize * 0.5)))):
                type = 'left';
                angle = 180;
                break;
            case (((xPos >= (tempX + (gridSize * 2.5))) && xPos <= (tempX + (gridSize * 3))) && ((yPos <= (tempY + (gridSize * 3))) && (yPos >= (tempY + (gridSize * 2.5))))):
                type = 'left';
                angle = 90;
                break;
            case ((xPos <= (tempX - (gridSize * 0.5))) && (xPos >= (tempX - gridSize))) && ((yPos <= (tempY + (gridSize * 3))) && (yPos >= (tempY + (gridSize * 2.5)))):
                type = 'left';
                angle = 0;
                break;
            case (xPos >= (tempX + (gridSize * 2.5))) && ((yPos >= tempY) && yPos <= (tempY + (gridSize * 2))):
                type = 'mid';
                angle = 90;
                break;
            case ((xPos >= tempX) && (xPos <= (tempX + (gridSize * 2)))) && ((yPos >= (tempY - gridSize)) && (yPos <= (tempY - (gridSize * 0.5)))):
                type = 'mid';
                angle = 180;
                break;
            case ((xPos >= (tempX - gridSize)) && (xPos <= (tempX - (gridSize * 0.5)))) && ((yPos >= tempY) && yPos <= (tempY + (gridSize * 2))):
                type = 'mid';
                angle = 270;
                break;
            default:
                type = 'mid';
                angle = 0;
        }
        return { type, angle }
    }
}
