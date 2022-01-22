import { buildFile } from "./file-builder/build-filepath.js";
import { socketlibSocket } from "../socketset.js";
import { thunderwaveAuto } from "./thunderwave.js"
import { aaDebugger } from "../constants/constants.js"
import { AAanimationData } from "../aa-classes/animation-data.js";
const wait = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

export async function templateAnimation(handler, animationData) {

    const sourceToken = handler.sourceToken;

    const data = animationData.primary;
    const sourceFX = animationData.sourceFX;
    if (data.isAuto) {
        data.type = data.type;
        data.persistent = data.persist || false;
    } else {
        data.type = handler.flags?.options?.tempType;
    }

    if (data.animation === 'thunderwave') {
        thunderwaveAuto(handler, data);
        return;
    }

    const tempAnimation = await buildFile(true, data.animation, "static", data.variant, data.color, data.customPath)

    if (handler.debug) { aaDebugger("Template Animation Start", animationData, tempAnimation) }

    let globalDelay = game.settings.get("autoanimations", "globaldelay");
    await wait(globalDelay);

    async function cast() {
        const templateObject = canvas.templates.placeables[canvas.templates.placeables.length - 1]

        const templateID = templateObject.data._id;
        const template = await canvas.templates.documentCollection.get(templateID);

        const templateType = template.data?.t;

        const templateTypes = ['sphere', 'cylinder', 'radius']

        if (data.persistent && (data.persistType === 'overheadtile' || data.persistType === 'groundtile')) {

            let trueSize;
            if (templateType === 'rect') {
                if (game.modules.get("dnd5e-helpers")?.active && (game.settings.get("dnd5e-helpers", "gridTemplateScaling") === 2 || game.settings.get("dnd5e-helpers", "gridTemplateScaling") === 3) && templateTypes.includes(handler.item.data?.data?.target?.type)) {
                    trueSize = Math.sqrt(Math.pow(template.data.distance, 2) - Math.pow((handler.item.data?.data?.target?.value * 2), 2));
                } else {
                    trueSize = template.data.width;
                }
            } else {
                trueSize = template.data.distance * 2;
            }

            const templateLength = canvas.grid.size * (trueSize / canvas.dimensions.distance);
            const isOverhead = data.persistType === 'overheadtile' ? true : false;

            const tileWidth = templateLength * data.scaleX;
            const tileHeight =  templateLength * data.scaleY;

            const tileX = templateType === 'circle' ? (template.data.x - (tileWidth / 2)) : (template.data.x + ((templateLength - tileWidth) / 2 ));
            const tileY = templateType === 'circle' ? (template.data.y - (tileHeight / 2)) : (template.data.y + ((templateLength - tileHeight) / 2 ));

            const templateData = {
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
                    x: tileX,
                    y: tileY,
                    z: 100,
                }
            socketlibSocket.executeAsGM("placeTile", templateData)
            new Sequence()
            .sound()
                .file(data.itemAudio.file, true)
                .volume(data.itemAudio.volume)
                .delay(data.itemAudio.delay)
                .playIf(data.playSound)
            .play()
            if (data.removeTemplate) {
                if (data.persistType === 'overheadtile') {
                    AAanimationData.howToDelete("overheadtile")
                } else {
                    AAanimationData.howToDelete("groundtile")
                }
                canvas.scene.deleteEmbeddedDocuments("MeasuredTemplate", [template.data._id])
            }
        }

        if (data.persistent && data.persistType === 'attachtemplate') {
            if (data.removeTemplate) {
                console.warn("You are attempting to delete the Template but the Animation is attached to it. You must manually delete it")
            }
            await new Sequence("Automated Animations")
                .addSequence(sourceFX.sourceSeq)
                .thenDo(function () {
                    Hooks.callAll("aa.animationStart", sourceToken, "no-target")
                })
                .sound()
                    .file(data.itemAudio.file, true)
                    .volume(data.itemAudio.volume)
                    .delay(data.itemAudio.delay)
                    .playIf(data.playSound)
                .effect()
                    .file(tempAnimation.file)
                    .attachTo(templateObject)
                    .persist(true)
                    .opacity(data.opacity)
                    .origin(handler.item.uuid)
                    .scaleToObject(data.scale)
                .play()
            await wait(500)
            Hooks.callAll("aa.animationEnd", sourceToken, "no-target")
        }

        if (!data.persistent || (data.persistent && data.persistType === 'sequencerground')) {

            const templateType = template.data.t;
            
            const rawr = await new Sequence("Automated Animations")
                rawr.addSequence(sourceFX.sourceSeq)
                rawr.thenDo(function () {
                    Hooks.callAll("aa.animationStart", sourceToken, "no-target")
                })
                rawr.sound()
                    .file(data.itemAudio.file, true)
                    .volume(data.itemAudio.volume)
                    .delay(data.itemAudio.delay)
                    .repeats(data.itemAudio.repeat, data.delay)
                    .playIf(data.playSound)

                if (templateType === 'cone' || templateType === 'ray') {
                    const trueHeight = templateType === 'cone' ? template.data.distance : template.data.width * 2;
                rawr.effect()
                    .file(tempAnimation.file)
                    .atLocation(template, { cacheLocation: true })
                    .rotateTowards(template)
                    .size({
                        width: (canvas.grid.size * (template.data.distance / canvas.dimensions.distance)) * data.scaleX,
                        height: (canvas.grid.size * (trueHeight / canvas.dimensions.distance)) * data.scaleY,
                    })
                    .scale(data.scale)
                    .anchor({ x: 0, y: 0.5 })
                    .opacity(data.opacity)
                    .origin(handler.item.uuid)
                    .belowTokens(data.below)
                    .repeats(data.repeat, data.delay)
                    .persist(data.persistent)
                }

                if (templateType === 'circle' || templateType === 'rect') {
                    let trueSize;
                    if (templateType === 'rect') {
                        if (game.modules.get("dnd5e-helpers")?.active && (game.settings.get("dnd5e-helpers", "gridTemplateScaling") === 2 || game.settings.get("dnd5e-helpers", "gridTemplateScaling") === 3) && templateTypes.includes(handler.item.data?.data?.target?.type)) {
                            trueSize = Math.sqrt(Math.pow(template.data.distance, 2) - Math.pow((handler.item.data?.data?.target?.value * 2), 2));
                        } else {
                            trueSize = template.data.width;
                        }
                    } else {
                        trueSize = template.data.distance * 2;
                    }
                rawr.effect()
                    .file(tempAnimation.file)
                    .atLocation(template, { cacheLocation: true })
                    .size({
                        width: canvas.grid.size * (trueSize / canvas.dimensions.distance) * data.scaleX,
                        height: canvas.grid.size * (trueSize / canvas.dimensions.distance)  * data.scaleY,
                    })
                    .opacity(data.opacity)
                    .origin(handler.item.uuid)
                    .belowTokens(data.below)
                    .repeats(data.repeat, data.delay)
                    .persist(data.persistent)
                }

                rawr.thenDo(function () {
                    if (data.removeTemplate) {
                        canvas.scene.deleteEmbeddedDocuments("MeasuredTemplate", [template.data._id])
                    }            
                })
                
                rawr.play()
                if (data.persistType === 'sequencerground' && data.persistent) { AAanimationData.howToDelete("sequencerground") }
            await wait(500)
            Hooks.callAll("aa.animationEnd", sourceToken, "no-target")
        }


    }
    cast();

}
