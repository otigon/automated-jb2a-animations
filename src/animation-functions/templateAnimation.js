import { buildFile } from "./file-builder/build-filepath.js";
import { socketlibSocket } from "../socketset.js";
//import { thunderwaveAuto } from "./thunderwave.js"
import { aaDebugger } from "../constants/constants.js"
import { AAanimationData } from "../aa-classes/animation-data.js";
const wait = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

export async function templateAnimation(handler, animationData, config) {

    const sourceToken = handler.sourceToken;

    const template = config ? config : canvas.templates.placeables[canvas.templates.placeables.length - 1];
    const templateData = template.data || {};
    const templateType = templateData?.t;

    const data = animationData.primary;
    const sourceFX = animationData.sourceFX;
    if (data.isAuto) {
        data.type = data.type;
        data.persistent = data.persist || false;
    } else {
        data.type = handler.flags?.options?.tempType;
    }
    /*
    if (data.animation === 'thunderwave') {
        thunderwaveAuto(handler, data);
        return;
    }
    */
    const tempAnimation = await buildFile(false, data.menuType, data.animation, "templatefx", data.variant, data.color, data.customPath)

    if (handler.debug) { aaDebugger("Template Animation Start", animationData, tempAnimation) }

    let globalDelay = game.settings.get("autoanimations", "globaldelay");
    await wait(globalDelay);


    const templateTypes = ['sphere', 'cylinder', 'radius']

    if (data.persistent && (data.persistType === 'overheadtile' || data.persistType === 'groundtile')) {

        let trueSize;
        if (templateType === 'rect') {
            if (game.modules.get("dnd5e-helpers")?.active && (game.settings.get("dnd5e-helpers", "gridTemplateScaling") === 2 || game.settings.get("dnd5e-helpers", "gridTemplateScaling") === 3) && templateTypes.includes(handler.item.data?.data?.target?.type)) {
                trueSize = Math.sqrt(Math.pow(templateData.distance, 2) - Math.pow((handler.item.data?.data?.target?.value * 2), 2));
            } else {
                trueSize = templateData.width;
            }
        } else {
            trueSize = templateData.distance * 2;
        }

        const templateLength = canvas.grid.size * (trueSize / canvas.dimensions.distance);
        const isOverhead = data.persistType === 'overheadtile' ? true : false;

        const tileWidth = templateLength * data.scaleX;
        const tileHeight = templateLength * data.scaleY;

        const tileX = templateType === 'circle' ? (templateData.x - (tileWidth / 2)) : (templateData.x + ((templateLength - tileWidth) / 2));
        const tileY = templateType === 'circle' ? (templateData.y - (tileHeight / 2)) : (templateData.y + ((templateLength - tileHeight) / 2));

        const templateObject = {
            alpha: data.opacity,
            width: tileWidth,
            height: tileHeight,
            img: tempAnimation.fileData,
            overhead: isOverhead, // false sets Tile in canvas.background. true sets Tile to canvas.foreground
            occlusion: {
                alpha: data.occlusionAlpha,
                mode: data.occlusionMode,
            },
            video: {
                autoplay: true,
                loop: true,
                volume: 0,
            },
            flags: {
                autoanimations: {
                    origin: handler.itemUuid,
                }
            },
            x: tileX,
            y: tileY,
            z: 100,
        }
        let aaSeq = await new Sequence("Automated Animations")
        // Play Macro if Awaiting
        if (data.playMacro && data.macro.playWhen === "1") {
            handler.templateData = template;
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
        aaSeq.play()
        socketlibSocket.executeAsGM("placeTile", templateObject)
        if (data.removeTemplate) {
            if (data.persistType === 'overheadtile') {
                AAanimationData.howToDelete("overheadtile")
            } else {
                AAanimationData.howToDelete("groundtile")
            }
            canvas.scene.deleteEmbeddedDocuments("MeasuredTemplate", [templateData._id])
        }
    } else {

        const templateType = templateData.t;

        let aaSeq = await new Sequence("Automated Animations")
        if ((data.persistent && data.persistType !== "attachtemplate") || !data.persistent) {
            aaSeq.thenDo(function () {
                if (data.removeTemplate) {
                    canvas.scene.deleteEmbeddedDocuments("MeasuredTemplate", [template.id])
                }
            })
        }
        // Play Macro if Awaiting
        if (data.playMacro && data.macro.playWhen === "1") {
            let userData = data.macro.args;
            handler.templateData = template;
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
        if (templateType === 'cone' || templateType === 'ray') {
            const trueHeight = templateType === 'cone' ? templateData.distance : templateData.width * 2;
            const coneRaySeq = aaSeq.effect()
            coneRaySeq.file(tempAnimation.file)
            coneRaySeq.size({
                width: (canvas.grid.size * (templateData.distance / canvas.dimensions.distance)) * data.scaleX,
                height: (canvas.grid.size * (trueHeight / canvas.dimensions.distance)) * data.scaleY,
            })
            coneRaySeq.opacity(data.opacity)
            coneRaySeq.origin(handler.itemUuid)
            coneRaySeq.belowTokens(data.below)
            if (data.persistent) {
                coneRaySeq.persist(true)
                if (data.persistType === 'attachtemplate') {
                    coneRaySeq.attachTo(template)
                    coneRaySeq.rotateTowards(template, {attachTo: true})
                } else {
                    coneRaySeq.atLocation(template, { cacheLocation: true })
                    coneRaySeq.rotateTowards(template, {cacheLocation: true})
                }
            } else {
                coneRaySeq.atLocation(template, { cacheLocation: true })
                coneRaySeq.repeats(data.repeat, data.delay)
                coneRaySeq.rotateTowards(template, {cacheLocation: true})
            }
        }

        if (templateType === 'circle' || templateType === 'rect') {
            let trueSize;
            if (templateType === 'rect') {
                if (game.modules.get("dnd5e-helpers")?.active && (game.settings.get("dnd5e-helpers", "gridTemplateScaling") === 2 || game.settings.get("dnd5e-helpers", "gridTemplateScaling") === 3) && templateTypes.includes(handler.item.data?.data?.target?.type)) {
                    trueSize = Math.sqrt(Math.pow(templateData.distance, 2) - Math.pow((handler.item.data?.data?.target?.value * 2), 2));
                } else {
                    trueSize = templateData.width;
                }
            } else {
                trueSize = templateData.distance * 2;
            }
            let circRectSeq = aaSeq.effect()
            circRectSeq.file(tempAnimation.file)
            circRectSeq.size({
                width: canvas.grid.size * (trueSize / canvas.dimensions.distance) * data.scaleX,
                height: canvas.grid.size * (trueSize / canvas.dimensions.distance) * data.scaleY,
            })
            circRectSeq.opacity(data.opacity)
            circRectSeq.origin(handler.itemUuid)
            circRectSeq.belowTokens(data.below)
            if (data.persistent) {
                circRectSeq.persist(true)
                if (data.persistType === 'attachtemplate') {
                    circRectSeq.attachTo(template, { followRotation: true })
                } else {
                    circRectSeq.atLocation(template, { cacheLocation: true })
                    circRectSeq.persist()
                }
            } else {
                circRectSeq.atLocation(template, { cacheLocation: true })
                circRectSeq.repeats(data.repeat, data.delay)
            }
        }
        if (data.playMacro && data.macro.playWhen === "0") {
            handler.templateData = template;

            let userData = data.macro.args;
            new Sequence()
                .macro(data.macro.name, handler.workflow, handler, ...userData)
                .play()
        }
        aaSeq.play()
        if (data.persistType === 'sequencerground' && data.persistent) { AAanimationData.howToDelete("sequencerground") }
        await wait(500)
        Hooks.callAll("aa.animationEnd", sourceToken, "no-target")
    }
}
