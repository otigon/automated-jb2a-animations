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
        const autoOverridden = handler.autoOverride?.enable
        Object.assign(data, autoObject)
        data.itemName = data.animation || "";
        data.customPath = data.custom ? data.customPath : false;
        data.variant = autoOverridden ? handler.autoOverride?.variant : data.variant;
        data.color = autoOverridden ? handler.autoOverride?.color : data.color;
        data.repeat = autoOverridden ? handler.autoOverride?.repeat : data.repeat;
        data.delay = autoOverridden ? handler.autoOverride?.delay : data.delay;
        data.occlusionMode = parseInt(data.occlusionMode);
        data.variant = autoOverridden ? handler.autoOverride?.variant : data.variant;
        data.persistType = data.overhead ? 'overheadtile' : data.persistType || 'sequencerground';
        data.scale = autoOverridden ? handler.autoOverride?.scale || 1 : data.scale || 1;
    } else {
        data.itemName = handler.convertedName;
        data.variant = handler.options?.variant;
        data.color = handler.color;
        data.repeat = handler.options?.repeat;
        data.delay = handler.options?.delay;
        data.customPath = handler.options?.enableCustom ? handler.options.customPath : false;
        data.below = handler.below;
        data.type = handler.options?.tempType;
        data.persist = handler.options?.persistent;
        data.overhead = handler.options?.overhead;
        data.opacity = handler.options?.opacity;
        data.occlusionAlpha = handler.options?.occlusionAlpha ?? "0";
        data.occlusionMode = parseInt(handler.options?.occlusionMode ?? "3");
        data.removeTemplate = handler.options?.removeTemplate;
        data.persistType = handler.options?.persistType || "sequencerground";
        data.scale = handler.options?.scale || 1;
    }

    if (aaDebug) { aaDebugger("Template Animation Start", data) }
    if (data.itemName === 'thunderwave') {
        thunderwaveAuto(handler, autoObject);
        return;
    }

    const tempAnimation = await buildFile(true, data.itemName, "static", data.variant, data.color, data.customPath)

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
        const templateObject = canvas.templates.placeables[canvas.templates.placeables.length - 1]

        const templateID = templateObject.data._id;
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
        const templateTypes = ['sphere', 'cylinder', 'radius']
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
                if (game.modules.get("dnd5e-helpers")?.active && (game.settings.get("dnd5e-helpers", "gridTemplateScaling") === 2 || game.settings.get("dnd5e-helpers", "gridTemplateScaling") === 3) && templateTypes.includes(handler.item.data.data.target.type)) {
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
        if (data.persist && (data.type === "circle" || data.type === "rect") && data.persistType === 'overheadtile') {

            const templateData = {
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
            socketlibSocket.executeAsGM("placeTile", templateData)
            new Sequence()
                .sound()
                .file(templateFile)
                .playIf(handler.itemSound)
                .delay(templateDelay)
                .volume(templateVolume)
                .repeats(data.repeat, data.delay)
                .play()
            if (data.removeTemplate) {
                canvas.scene.deleteEmbeddedDocuments("MeasuredTemplate", [template.data._id])
            }
            AAanimationData.howToDelete("overheadtile")
            //const newTile = await canvas.scene.createEmbeddedDocuments("Tile", [data]);    
        }
        if (data.persist && (data.type === "circle" || data.type === "rect") && data.persistType === 'groundtile') {

            const templateData = {
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
            socketlibSocket.executeAsGM("placeTile", templateData)
            new Sequence()
                .sound()
                .file(templateFile)
                .playIf(handler.itemSound)
                .delay(templateDelay)
                .volume(templateVolume)
                .repeats(data.repeat, data.delay)
                .play()
            if (data.removeTemplate) {
                canvas.scene.deleteEmbeddedDocuments("MeasuredTemplate", [template.data._id])
            }            
            AAanimationData.howToDelete("groundtile")
        }
        if (data.persist && data.persistType === 'sequencerground') {
            await new Sequence("Automated Animations")
                .addSequence(sourceFX.sourceSeq)
                .thenDo(function () {
                    Hooks.callAll("aa.animationStart", sourceToken, "no-target")
                })
                .effect()
                    .file(tempAnimation.file)
                    .atLocation(template)
                    .addOverride(async (effect, data) => {
                        
                        if (templateType === "cone" || templateType === "ray") {
                            data.anchor = { x: xAnchor, y: yAnchor };
                            return data;
                        }
                        return data;

                    })
                    //.anchor({ x: xAnchor, y: yAnchor })
                    .rotate(rotate)
                    .persist(data.persist)
                    .origin(handler.item.uuid)
                    .scale({ x: scaleX * data.scale, y: scaleY * data.scale })
                    .belowTokens(true)
                    .repeats(data.repeat, data.delay)
                .sound()
                    .file(templateFile)
                    .playIf(handler.itemSound)
                    .delay(templateDelay)
                    .volume(templateVolume)
                    .repeats(data.repeat, data.delay)
                .play()
            if (data.removeTemplate) {
                canvas.scene.deleteEmbeddedDocuments("MeasuredTemplate", [template.data._id])
            }            
            await wait(500)
            Hooks.callAll("aa.animationEnd", sourceToken, "no-target")
            AAanimationData.howToDelete("sequencerground")
        }

        if (data.persist && data.persistType === 'attachtemplate') {
            if (data.removeTemplate) {
                console.warn("You are attempting to delete the Template but the Animation is attached to it. You must manually delete it")
            }
            await new Sequence("Automated Animations")
                .addSequence(sourceFX.sourceSeq)
                .thenDo(function () {
                    Hooks.callAll("aa.animationStart", sourceToken, "no-target")
                })
                .effect()
                    .file(tempAnimation.file)
                    .attachTo(templateObject)
                    .persist(true)
                    .origin(handler.item.uuid)
                    .scaleToObject(data.scale)
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

        if (!data.persist) {
            await new Sequence("Automated Animations")
                .addSequence(sourceFX.sourceSeq)
                .thenDo(function () {
                    Hooks.callAll("aa.animationStart", sourceToken, "no-target")
                })
                .effect()
                    .file(tempAnimation.file)
                    .atLocation(template)
                    .addOverride(async (effect, data) => {
                        
                        if (templateType === "cone" || templateType === "ray") {
                            data.anchor = { x: xAnchor, y: yAnchor };
                            return data;
                        }
                        return data;

                    })
                    //.anchor({ x: xAnchor, y: yAnchor })
                    .rotate(rotate)
                    .persist(data.persist)
                    .origin(handler.item.uuid)
                    .scale({ x: scaleX * data.scale, y: scaleY * data.scale })
                    .belowTokens(true)
                    .repeats(data.repeat, data.delay)
                .sound()
                    .file(templateFile)
                    .playIf(handler.itemSound)
                    .delay(templateDelay)
                    .volume(templateVolume)
                    .repeats(data.repeat, data.delay)
                .play()
            if (data.removeTemplate) {
                canvas.scene.deleteEmbeddedDocuments("MeasuredTemplate", [template.data._id])
            }            
            await wait(500)
            Hooks.callAll("aa.animationEnd", sourceToken, "no-target")
        }

    }
    cast();

}
