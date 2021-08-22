import { buildFile } from "./file-builder/build-filepath.js";
import { socketlibSocket } from "../socketset.js";
import { thunderwaveAuto } from "./thunderwave.js"

const wait = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

export async function templateAnimation(handler, msg) {

    if (handler.templates.tempAnim === 'thunderwave') {
        thunderwaveAuto(handler);
        return;
    }
    const sourceToken = handler.actorToken;
    let customPath = handler.templates?.customAnim ? handler.templates.customPath : false;
    let tempAnimation = await buildFile(true, handler.templates.tempType, "static", handler.templates.tempAnim, handler.templates.tempColor, customPath)
    let sourceFX;
    let sFXScale;
    let customSourcePath; 
    if (handler.sourceEnable) {
        customSourcePath = handler.sourceCustomEnable ? handler.sourceCustomPath : false;
        sourceFX = await buildFile(true, handler.sourceName, "static", handler.sourceVariant, handler.sourceColor, customSourcePath);
        sFXScale = 2 * sourceToken.w / sourceFX.metadata.width;
    }

    let videoWidth = tempAnimation.metadata.width;
    let videoHeight = tempAnimation.metadata.height;

    let globalDelay = game.settings.get("autoanimations", "globaldelay");
    await wait(globalDelay);

    let templateSound = handler.allSounds?.item;
    let templateVolume = 0.25;
    let templateDelay = 1;
    let templateFile = "";
    if (handler.itemSound) {
        templateVolume = templateSound?.volume || 0.25;
        templateDelay = templateSound?.delay === 0 ? 1 : templateSound?.delay;
        templateFile = templateSound?.file;
    }

    async function cast() {
        const templateID = canvas.templates.placeables[canvas.templates.placeables.length - 1].data._id;
        let template;
        template = await canvas.templates.documentCollection.get(templateID);
        let templateType = template.data?.t;
        let templateW;
        let templateLength;
        let scaleX;
        let scaleY;
        let rotate;
        let xAnchor;
        let yAnchor;
        let tileWidth;
        let tileHeight;
        let tileX;
        let tileY;
        //let scale = ((200 * handler.explosionRadius) / (canvas.dimensions.distance * videoData.width))
        switch (templateType) {
            case "ray":
                templateW = template.data.distance;
                templateLength = canvas.grid.size * (templateW / canvas.dimensions.distance);
                scaleX = (100 / canvas.grid.size) * templateLength / videoWidth;
                scaleY = 1;
                rotate = -template.data.direction;
                xAnchor = 0;
                yAnchor = 0.5;
                break;
            case "rect":
                if (game.modules.get("dnd5e-helpers")?.active && (game.settings.get("dnd5e-helpers", "gridTemplateScaling") === 2 || game.settings.get("dnd5e-helpers", "gridTemplateScaling") === 3) && handler.item.data.data.target.type === "sphere") {
                    templateW = Math.sqrt(Math.pow(template.data.distance, 2) - Math.pow((handler.item.data.data.target.value * 2), 2));
                    templateLength = canvas.grid.size * (templateW / canvas.dimensions.distance);
                    scaleX = (100 / canvas.grid.size) * templateLength / videoWidth;
                    scaleY = scaleX;
                    rotate = 0;
                    xAnchor = 0;
                    yAnchor = 0;
                    tileWidth = videoWidth * (templateLength / videoWidth);
                    tileHeight = videoHeight * (templateLength / videoHeight);
                    tileX = template.data.x;
                    tileY = template.data.y;
                } else {
                    templateW = template.data.width;
                    templateLength = canvas.grid.size * (templateW / canvas.dimensions.distance);
                    scaleX = (100 / canvas.grid.size) * templateLength / videoWidth;
                    scaleY = scaleX;
                    rotate = 0;
                    xAnchor = 0;
                    yAnchor = 0;
                    tileWidth = videoWidth * (templateLength / videoWidth);
                    tileHeight = videoHeight * (templateLength / videoHeight);
                    tileX = template.data.x;
                    tileY = template.data.y;
                }
                break;
            case "circle":
                templateW = template.data.distance * 2;
                templateLength = canvas.grid.size * (templateW / canvas.dimensions.distance);
                scaleX = (100 / canvas.grid.size) * templateLength / videoWidth;
                scaleY = scaleX;
                rotate = -template.data.direction;
                xAnchor = 0.5;
                yAnchor = 0.5;
                tileWidth = videoWidth * (templateLength / videoWidth);
                tileHeight = videoHeight * (templateLength / videoHeight);
                tileX = template.data.x - (tileWidth / 2);
                tileY = template.data.y - (tileHeight / 2);
                break;
            case "cone":
                templateW = template.data.distance;
                templateLength = canvas.grid.size * (templateW / canvas.dimensions.distance);
                scaleX = (100 / canvas.grid.size) * (templateLength / videoWidth);
                scaleY = scaleX * (template.data.angle * 0.026);
                rotate = -template.data.direction;
                xAnchor = 0;
                yAnchor = 0.5;
                break;
        }
        let mode = handler.templates?.occlusionMode ?? "3";
        const occlusionMode = parseInt(mode)
        let occlusionAlpha = handler.templates?.occlusionAlpha ?? "0";
        //const occlusionAlpha = parseInt(alpha);
        if (handler.templatePersist && (handler.templates.tempType === "circle" || handler.templates.tempType === "rect")) {
            let data;
            if (handler.templates.overhead) {
                data = {
                    alpha: handler.templateOpacity,
                    width: tileWidth,
                    height: tileHeight,
                    img: tempAnimation.fileData,
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
                    x: tileX,
                    y: tileY,
                    z: 100,
                }
            } else {
                data = {
                    alpha: handler.templateOpacity,
                    width: tileWidth,
                    height: tileHeight,
                    img: tempAnimation.fileData,
                    // false sets it in canvas.background. true sets it to canvas.foreground
                    overhead: false,
                    video: {
                        autoplay: true,
                        loop: true,
                        volume: 0,
                    },
                    x: tileX,
                    y: tileY,
                    z: 100,
                }
            }
            socketlibSocket.executeAsGM("placeTile", data)
            new Sequence()
                .sound()
                .file(templateFile)
                .playIf(handler.itemSound)
                .delay(templateDelay)
                .volume(templateVolume)
                .repeats(handler.animationLoops, handler.loopDelay)
                .play()
            if (handler.templates.removeTemplate) {
                canvas.scene.deleteEmbeddedDocuments("MeasuredTemplate", [template.data._id])
            }            
            //const newTile = await canvas.scene.createEmbeddedDocuments("Tile", [data]);    
        } else {
            if (handler.templates.removeTemplate) {
                canvas.scene.deleteEmbeddedDocuments("MeasuredTemplate", [template.data._id])
            }        
            await new Sequence()
                .effect()
                    .atLocation(sourceToken)
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
                    Hooks.callAll("aa.animationStart", sourceToken, "no-target")
                })
                .effect()
                    .file(tempAnimation.file)
                    .atLocation({ x: template.data.x, y: template.data.y })
                    .anchor({ x: xAnchor, y: yAnchor })
                    .rotate(rotate)
                    .scale({ x: scaleX, y: scaleY })
                    .belowTokens(false)
                    .repeats(handler.templates.tempLoop, handler.templates.loopDelay)
                .sound()
                    .file(templateFile)
                    .playIf(handler.itemSound)
                    .delay(templateDelay)
                    .volume(templateVolume)
                    .repeats(handler.animationLoops, handler.loopDelay)
                .play()
            await wait(500)
            Hooks.callAll("aa.animationEnd", sourceToken, "no-target")
        }


    }
    cast();

}
