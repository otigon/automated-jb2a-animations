import { JB2APATREONDB } from "./databases/jb2a-patreon-database.js";
import { JB2AFREEDB } from "./databases/jb2a-free-database.js";
import { buildFile } from "./file-builder/build-filepath.js";
import { socketlibSocket } from "../socketset.js";

const wait = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

export async function thunderwaveAuto(handler, autoObject) {

    function moduleIncludes(test) {
        return !!game.modules.get(test);
    }
    const data = {}
    if (autoObject) {
        const autoOverridden = handler.options?.overrideAuto
        Object.assign(data, autoObject[0])
        data.itemName = data.animation || "";
        data.customPath = data.custom ? data.customPath : false;
        data.color = autoOverridden ? handler.options?.autoColor : data.color;
        data.repeat = autoOverridden ? handler.options?.autoRepeat : data.repeat;
        data.delay = autoOverridden ? handler.options?.autoDelay : data.delay;
        data.variant = autoOverridden ? handler.options?.autoVariant : data.variant;
        data.occlusionMode = parseInt(data.occlusionMode);
    } else {
        data.itemName = handler.templates.tempAnim;
        data.variant = handler.spellVariant;
        data.color = handler.templates.tempColor;
        data.repeat = handler.templates.tempLoop;
        data.delay = handler.templates.loopDelay;
        data.customPath = handler.templates?.customAnim ? handler.templates.customPath : false;
        data.below = handler.animLevel;
        data.type = handler.templates.tempType;
        data.persist = handler.templatePersist;
        data.overhead = handler.templates.overhead;
        data.opacity = handler.templateOpacity;
        data.occlusionAlpha = handler.templates?.occlusionAlpha ?? "0";
        data.occlusionMode = parseInt(handler.templates?.occlusionMode ?? "3");
        data.removeTemplate = handler.templates.removeTemplate;
    }

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

    let templateSound = handler.allSounds?.item;
    let templateVolume = 0.25;
    let templateDelay = 1;
    let templateFile = "";
    if (handler.itemSound) {
        templateVolume = templateSound?.volume || 0.25;
        templateDelay = templateSound?.delay === 0 ? 1 : templateSound?.delay;
        templateFile = templateSound?.file;
    }

    let sourceFX;
    let sFXScale;
    if (handler.sourceEnable) {
        sourceFX = await buildFile(true, handler.sourceName, "static", handler.sourceVariant, handler.sourceColor);
        sFXScale = 2 * sourceToken.w / sourceFX.metadata.width;
    }

    const templateID = await canvas.templates.placeables[canvas.templates.placeables.length - 1].data._id;
    let template = await canvas.templates.get(templateID);
    let gridSize = canvas.scene.data.grid;

    let templateW = template.data.width;
    let templateLength = canvas.grid.size * (templateW / canvas.dimensions.distance);
    let scale = (100 / canvas.grid.size) * templateLength / 600;
    let xPos = handler.actorToken.data.x;
    let yPos = handler.actorToken.data.y;
    let tempY = template.data.y;
    let tempX = template.data.x;

    let filePath = obj01.static.rect['thunderwave'][color];
    let ang = 0;
    let anFile = filePath['mid'];;
    switch (true) {
        case ((xPos >= tempX && xPos <= (tempX + (gridSize * 2))) && (yPos >= tempY && yPos <= (tempY + (gridSize * 2)))):
            ang = 0;
            anFile = filePath['center'];
            break;
        case ((xPos >= (tempX - gridSize)) && (xPos <= (tempX - (gridSize * 0.5)))) && ((yPos >= (tempY - gridSize)) && (yPos <= (tempY - (gridSize * 0.5)))):
            ang = 270;
            anFile = filePath['left'];
            break;
        case ((xPos >= (tempX + (gridSize * 2.5))) && (xPos <= (tempX + (gridSize * 3)))) && ((yPos >= (tempY - gridSize)) && (yPos <= (tempY - (gridSize * 0.5)))):
            ang = 180;
            anFile = filePath['left'];
            break;
        case (((xPos >= (tempX + (gridSize * 2.5))) && xPos <= (tempX + (gridSize * 3))) && ((yPos <= (tempY + (gridSize * 3))) && (yPos >= (tempY + (gridSize * 2.5))))):
            ang = 90;
            anFile = filePath['left'];
            break;
        case ((xPos <= (tempX - (gridSize * 0.5))) && (xPos >= (tempX - gridSize))) && ((yPos <= (tempY + (gridSize * 3))) && (yPos >= (tempY + (gridSize * 2.5)))):
            ang = 0;
            anFile = filePath['left'];
            break;
        case (xPos >= (tempX + (gridSize * 2.5))) && ((yPos >= tempY) && yPos <= (tempY + (gridSize * 2))):
            ang = 90;
            anFile = filePath['mid'];
            break;
        case ((xPos >= tempX) && (xPos <= (tempX + (gridSize * 2)))) && ((yPos >= (tempY - gridSize)) && (yPos <= (tempY - (gridSize * 0.5)))):
            ang = 180;
            anFile = filePath['mid'];
            break;
        case ((xPos >= (tempX - gridSize)) && (xPos <= (tempX - (gridSize * 0.5)))) && ((yPos >= tempY) && yPos <= (tempY + (gridSize * 2))):
            ang = 270;
            anFile = filePath['mid'];
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
        new Sequence()
            .sound()
            .file(templateFile)
            .playIf(handler.itemSound)
            .delay(templateDelay)
            .volume(templateVolume)
            .repeats(handler.animationLoops, handler.loopDelay)
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
            .effect()
            .atLocation(handler.actorToken)
            .scale(sFXScale * handler.sourceScale)
            .repeats(handler.sourceLoops, handler.sourceLoopDelay)
            .belowTokens(handler.sourceLevel)
            .waitUntilFinished(handler.sourceDelay)
            .playIf(handler.sourceEnable)
            .addOverride(async (effect, data) => {
                if (handler.sourceEnable) {
                    data.file = sourceFX.file;
                }
                return data;
            })
            .thenDo(function () {
                Hooks.callAll("aa.animationStart", handler.actorToken, "no-target")
            })
            .effect()

                .file(anFile)
                .atLocation({x: tempX + (gridSize * 1.5), y: tempY + (gridSize * 1.5)})
                .anchor({x: 0.5, y: 0.5})
                .rotate(ang)
                .scale(scale)
                .belowTokens(false)
                .repeats(data.repeat, data.delay)
            .sound()
                .file(templateFile)
                .playIf(handler.itemSound)
                .delay(templateDelay)
                .volume(templateVolume)
                .repeats(data.repeat, data.delay)
            .play()
        await wait(500)
        Hooks.callAll("aa.animationEnd", handler.actorToken, "no-target")
    }
}

export default thunderwaveAuto;