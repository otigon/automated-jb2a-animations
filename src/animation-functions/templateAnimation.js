import { buildFile } from "./file-builder/build-filepath.js";
import { socketlibSocket } from "../socketset.js";
import { thunderwaveAuto } from "./thunderwave.js"
import { aaDebugger } from "../constants/constants.js"
import { AAanimationData } from "../aa-classes/animation-data.js";
const wait = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

export async function templateAnimation(handler, autoObject) {
    const aaDebug = game.settings.get("autoanimations", "debug")
    const sourceToken = handler.actorToken;

    const data = {}
    if (autoObject) {
        const autoOverridden = handler.options?.overrideAuto
        Object.assign(data, autoObject[0])
        data.itemName = data.animation || "";
        data.customPath = data.custom ? data.customPath : false;
        data.color = autoOverridden ? handler.options?.autoColor : data.color;
        data.repeat = autoOverridden ? handler.options?.autoRepeat : data.repeat;
        data.delay = autoOverridden ? handler.options?.autoDelay : data.delay;
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
    if (aaDebug) { aaDebugger("Template Animation Start", data) }
    if (data.itemName === 'thunderwave') {
        thunderwaveAuto(handler, autoObject);
        return;
    }
    //let mode = handler.templates?.occlusionMode ?? "3";
    //const occlusionMode = parseInt(mode)
    //let occlusionAlpha = handler.templates?.occlusionAlpha ?? "0";

    //let customPath = handler.templates?.customAnim ? handler.templates.customPath : false;
    const tempAnimation = await buildFile(true, data.type, "static", data.itemName, data.color, data.customPath)
    //let sourceFX;
    //let sFXScale;
    //let customSourcePath; 
    const sourceFX = await AAanimationData._sourceFX(handler, sourceToken);

    const videoWidth = tempAnimation.metadata.width;
    const videoHeight = tempAnimation.metadata.height;

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
        //const occlusionAlpha = parseInt(alpha);
        if (data.persist && (data.type === "circle" || data.type === "rect")) {
            let templateData;
            if (data.overhead) {
                templateData = {
                    alpha: data.opacity,
                    width: tileWidth,
                    height: tileHeight,
                    img: tempAnimation.fileData,
                    // false sets it in canvas.background. true sets it to canvas.foreground
                    overhead: true,
                    occlusion: {
                        alpha: data.occlusionAlpha,
                        mode: data.occlusionMode,
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
                templateData = {
                    alpha: data.opacity,
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
            socketlibSocket.executeAsGM("placeTile", templateData)
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
                .sequence(sourceFX.sourceSeq)
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
                    .repeats(data.repeat, data.delay)
                .sound()
                    .file(templateFile)
                    .playIf(handler.itemSound)
                    .delay(templateDelay)
                    .volume(templateVolume)
                    .repeats(data.repeat, data.delay)
                .play()
            await wait(500)
            Hooks.callAll("aa.animationEnd", sourceToken, "no-target")
        }


    }
    cast();

}
