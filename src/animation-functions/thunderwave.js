import { JB2APATREONDB } from "./databases/jb2a-patreon-database.js";
import { JB2AFREEDB } from "./databases/jb2a-free-database.js";
import { buildFile } from "./file-builder/build-filepath.js";
import { socketlibSocket } from "../socketset.js";
import { aaDebugger } from "../constants/constants.js";
import { AAanimationData } from "../aa-classes/animation-data.js";

const wait = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

export async function thunderwaveAuto(handler, data) {
    const aaDebug = game.settings.get("autoanimations", "debug")
    function moduleIncludes(test) {
        return !!game.modules.get(test);
    }
    /*
    const data = {}
    if (autoObject) {
        const autoOverridden = handler.autoOverride?.enable
        Object.assign(data, autoObject)
        //data.itemName = data.animation || "";
        data.customPath = data.custom ? data.customPath : false;
        data.color = autoOverridden ? handler.autoOverride?.color : data.color;
        data.repeat = autoOverridden ? handler.autoOverride?.repeat : data.repeat;
        data.delay = autoOverridden ? handler.autoOverride?.delay : data.delay;
        data.variant = autoOverridden ? handler.autoOverride?.variant : data.variant;
        data.occlusionMode = parseInt(data.occlusionMode);
    } else {
        //data.itemName = handler.convertedName;
        data.variant = handler.options?.variant;
        data.color = handler.color;
        data.repeat = handler.options?.repeat;
        data.delay = handler.options?.delay;
        data.customPath = handler.options?.customAnim ? handler.options.customPath : false;
        data.below = handler.animLevel;
        data.type = handler.options?.tempType;
        data.persist = handler.options?.persistent;
        data.overhead = handler.options?.overhead;
        data.opacity = handler.options?.opacity;
        data.occlusionAlpha = handler.options?.occlusionAlpha ?? "0";
        data.occlusionMode = parseInt(handler.options?.occlusionMode ?? "3");
        data.removeTemplate = handler.options?.removeTemplate;
    }
    */
    const sourceToken = handler.actorToken;
    if (aaDebug) { aaDebugger("Thunderwave Animation Start", data) }
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

    const sourceFX = await AAanimationData._sourceFX(handler, sourceToken);

    const templateID = await canvas.templates.placeables[canvas.templates.placeables.length - 1].data._id;
    let template = await canvas.templates.get(templateID);
    let gridSize = canvas.scene.data.grid;

    let templateW = template.data.width;
    let templateLength = canvas.grid.size * (templateW / canvas.dimensions.distance);
    let scale = (100 / canvas.grid.size) * templateLength / 600;
    let xPos = sourceToken.data.x;
    let yPos = sourceToken.data.y;
    let tempY = template.data.y;
    let tempX = template.data.x;

    let filePath = obj01.static.thunderwave;
    let ang = 0;
    let anFile = filePath['mid'];;
    switch (true) {
        case ((xPos >= tempX && xPos <= (tempX + (gridSize * 2))) && (yPos >= tempY && yPos <= (tempY + (gridSize * 2)))):
            ang = 0;
            anFile = filePath['center'][color];
            break;
        case ((xPos >= (tempX - gridSize)) && (xPos <= (tempX - (gridSize * 0.5)))) && ((yPos >= (tempY - gridSize)) && (yPos <= (tempY - (gridSize * 0.5)))):
            ang = 270;
            anFile = filePath['left'][color];
            break;
        case ((xPos >= (tempX + (gridSize * 2.5))) && (xPos <= (tempX + (gridSize * 3)))) && ((yPos >= (tempY - gridSize)) && (yPos <= (tempY - (gridSize * 0.5)))):
            ang = 180;
            anFile = filePath['left'][color];
            break;
        case (((xPos >= (tempX + (gridSize * 2.5))) && xPos <= (tempX + (gridSize * 3))) && ((yPos <= (tempY + (gridSize * 3))) && (yPos >= (tempY + (gridSize * 2.5))))):
            ang = 90;
            anFile = filePath['left'][color];
            break;
        case ((xPos <= (tempX - (gridSize * 0.5))) && (xPos >= (tempX - gridSize))) && ((yPos <= (tempY + (gridSize * 3))) && (yPos >= (tempY + (gridSize * 2.5)))):
            ang = 0;
            anFile = filePath['left'][color];
            break;
        case (xPos >= (tempX + (gridSize * 2.5))) && ((yPos >= tempY) && yPos <= (tempY + (gridSize * 2))):
            ang = 90;
            anFile = filePath['mid'][color];
            break;
        case ((xPos >= tempX) && (xPos <= (tempX + (gridSize * 2)))) && ((yPos >= (tempY - gridSize)) && (yPos <= (tempY - (gridSize * 0.5)))):
            ang = 180;
            anFile = filePath['mid'][color];
            break;
        case ((xPos >= (tempX - gridSize)) && (xPos <= (tempX - (gridSize * 0.5)))) && ((yPos >= tempY) && yPos <= (tempY + (gridSize * 2))):
            ang = 270;
            anFile = filePath['mid'][color];
            break;
    }
    let globalDelay = game.settings.get("autoanimations", "globaldelay");
    await wait(globalDelay);

    if (data.persist && (data.type === "circle" || data.type === "rect")) {
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
                x: tempX,
                y: tempY,
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
                x: tempX,
                y: tempY,
                z: 100,
            }
        }
        socketlibSocket.executeAsGM("placeTile", tileData)
        new Sequence("Automated Animations")
            .sound()
                .file(data.itemAudio.file)
                .volume(data.itemAudio.volume)
                .delay(data.itemAudio.delay)
                .playIf(data.playSound)        
            .play()
        if (data.removeTemplate) {
            canvas.scene.deleteEmbeddedDocuments("MeasuredTemplate", [template.data._id])
        }
        //const newTile = await canvas.scene.createEmbeddedDocuments("Tile", [data]);    
    } else {
        if (data.removeTemplate) {
            canvas.scene.deleteEmbeddedDocuments("MeasuredTemplate", [template.data._id])
        }
        await new Sequence()
            .addSequence(sourceFX.sourceSeq)
            .thenDo(function () {
                Hooks.callAll("aa.animationStart", sourceToken, "no-target")
            })
            .sound()
                .file(data.itemAudio.file)
                .volume(data.itemAudio.volume)
                .delay(data.itemAudio.delay)
                .repeats(data.repeat, data.delay)
                .playIf(data.playSound)        
            .effect()
                .file(anFile)
                .atLocation({x: tempX + (gridSize * 1.5), y: tempY + (gridSize * 1.5)})
                .anchor({x: 0.5, y: 0.5})
                .rotate(ang)
                .scale(scale)
                .belowTokens(false)
                .repeats(data.repeat, data.delay)
            .play()
        await wait(500)
        Hooks.callAll("aa.animationEnd", sourceToken, "no-target")
    }
}

export default thunderwaveAuto;