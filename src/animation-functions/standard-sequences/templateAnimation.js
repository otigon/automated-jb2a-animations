import { socketlibSocket } from "../../socketset.js";
import { howToDelete } from "../../constants/constants.js";
const wait = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

export async function templatefx(handler, animationData, templateDocument) {

    const sourceToken = handler.sourceToken;

    const template = handler.templateData ? handler.templateData : templateDocument //? templateDocument : canvas.templates.placeables[canvas.templates.placeables.length - 1].document;
    //const templateData = template ? template || {}: template.document || {};;
    const templateType = template?.t;

    const data = animationData.primary;
    const secondary = animationData.secondary;
    const sourceFX = animationData.sourceFX;
    const targetFX = animationData.targetFX;
    const macro = animationData.macro;

    const templateTypes = ['sphere', 'cylinder', 'radius']

    let aaSeq = await new Sequence(handler.sequenceData)

    if ((data.options.persistent && data.options.persistType !== "attachtemplate") || !data.options.persistent) {
        aaSeq.thenDo(function () {
            if (data.options.removeTemplate) {
                canvas.scene.deleteEmbeddedDocuments("MeasuredTemplate", [template.id])
            }
        })
    }

    // Play Macro if Awaiting
    if (macro && macro.playWhen === "1" && !macro?.args?.warpgateTemplate) {
        handler.complileMacroSection(aaSeq, macro)
    }
    // Extra Effects => Source Token if active
    if (sourceFX) {
        handler.compileSourceEffect(sourceFX, aaSeq)
    }
    // Primary Sound
    if (data.sound) {
        aaSeq.addSequence(data.sound)
    }

    aaSeq.thenDo(function () {
        Hooks.callAll("aa.animationStart", sourceToken, "no-target")
    })

    if (data.options.persistent && (data.options.persistType === 'overheadtile' || data.options.persistType === 'groundtile')) {

        let trueSize;
        if (templateType === 'rect') {
            trueSize = template.width;
        } else {
            trueSize = template.distance * 2;
        }

        const templateLength = canvas.grid.size * (trueSize / canvas.dimensions.distance);
        const isOverhead = data.options.persistType === 'overheadtile' ? true : false;

        const tileWidth = templateLength * data.options.scale.x;
        const tileHeight = templateLength * data.options.scale.y;

        const tileX = templateType === 'circle' ? (template.x - (tileWidth / 2)) : (template.x + ((templateLength - tileWidth) / 2));
        const tileY = templateType === 'circle' ? (template.y - (tileHeight / 2)) : (template.y + ((templateLength - tileHeight) / 2));

        const templateObject = buildTile(tileX, tileY, isOverhead, tileWidth, tileHeight);
        aaSeq.thenDo(function () {
            socketlibSocket.executeAsGM("placeTile", templateObject);
        })

    } else {

        //const templateType = templateData.t;

        const templateSeq = aaSeq.effect();
        if (templateType === 'cone' || templateType === 'ray') {
            const trueHeight = templateType === 'cone' ? template.distance : template.width * 2;
            setPrimary(templateSeq)
            templateSeq.size({
                width: (canvas.grid.size * (template.distance / canvas.dimensions.distance)) * data.options.scale.x,
                height: (canvas.grid.size * (trueHeight / canvas.dimensions.distance)) * data.options.scale.y,
            })
            if (data.options.isMasked) {
                templateSeq.mask(template)
            }
            if (data.options.persistent) {
                templateSeq.persist(true)
                if (data.options.persistType === 'attachtemplate') {
                    templateSeq.attachTo(template)
                    templateSeq.rotateTowards(template, { attachTo: true })
                } else {
                    templateSeq.atLocation(template, { cacheLocation: true })
                    templateSeq.rotateTowards(template, { cacheLocation: true })
                }
            } else {
                templateSeq.atLocation(template, { cacheLocation: true })
                templateSeq.repeats(data.options.repeat, data.options.repeatDelay)
                templateSeq.rotateTowards(template, { cacheLocation: true })
            }
            if (!data.options.isWait) {
                templateSeq.delay(data.options.delay)
            }
        }

        if (templateType === 'circle' || templateType === 'rect') {
            let trueSize;
            if (templateType === 'rect') {
                trueSize = Math.sqrt(Math.pow(template.distance, 2) / 2)
            } else {
                trueSize = template.distance * 2;
            }
            setPrimary(templateSeq)
            templateSeq.size({
                width: canvas.grid.size * (trueSize / canvas.dimensions.distance) * data.options.scale.x,
                height: canvas.grid.size * (trueSize / canvas.dimensions.distance) * data.options.scale.y,
            })
            if (data.options.persistent) {
                templateSeq.persist(true)
                if (data.options.persistType === 'attachtemplate') {
                    templateSeq.attachTo(template, { followRotation: true })
                } else {
                    templateSeq.atLocation(template, { cacheLocation: true })
                    templateSeq.persist()
                }
            } else {
                templateSeq.atLocation(template, { cacheLocation: true })
                templateSeq.repeats(data.options.repeat, data.options.repeatDelay)
            }
            if (!data.options.isWait) {
                templateSeq.delay(data.options.delay)
            }
        }
    }

    if (handler.allTargets.length > 0 && data.options.isWait) {
        aaSeq.wait(data.options.delay || 250)
    }

    if (secondary) {
        handler.compileSecondaryEffect(secondary, aaSeq, handler.allTargets, targetFX.enable, false)
    }
    if (targetFX) {
        handler.compileTargetEffect(targetFX, aaSeq, handler.allTargets, false)
    }

    if (macro && macro.playWhen === "0" && !macro?.args?.warpgateTemplate) {
        handler.runMacro(macro)
    }

    // Macro if Awaiting Animation. This will respect the Delay/Wait options in the Animation chains
    if (macro && macro.playWhen === "3") {
        handler.complileMacroSection(aaSeq, macro)
    }

    aaSeq.play()

    if (data.options.persistent) {
        switch (data.options.persistType) {
            case "overheadtile":
                howToDelete("overheadtile")
                break;
            case "groundtile":
                howToDelete("groundtile")
                break;
            case "sequencerground":
                howToDelete("sequencerground")
                break;
        }
    }

    await wait(500)
    Hooks.callAll("aa.animationEnd", sourceToken, "no-target")


    function setPrimary(seq) {
        seq.anchor(convertToXY(data.options.anchor))
        seq.file(data.path.file)
        seq.opacity(data.options.opacity)
        seq.origin(handler.itemUuid)
        if (data.options.elevation === 0) {
            seq.belowTokens(true)
        } else {
            seq.elevation(handler.elevation(sourceToken, data.options.isAbsolute, data.options.elevation), { absolute: data.options.isAbsolute })
        }
        seq.zIndex(data.options.zIndex)
        seq.rotate(data.options.rotate)
        if (data.options.isMasked) {
            seq.mask(template)
        }
        seq.playbackRate(data.options.playbackRate)
        seq.name(handler.rinsedName)
        seq.aboveLighting(data.options.aboveTemplate)
        seq.xray(data.options.xray)
        if (data.options.tint) {
            seq.tint(data.options.tintColor)
            seq.filter("ColorMatrix", { contrast: data.options.contrast, saturate: data.options.saturation })
        }
        function convertToXY(input) {
            let menuType = data.video.menuType;
            let templateType = template.t;
            let defaultAnchor = templateType === "circle" || templateType === "rect" ? { x: 0.5, y: 0.5 } : { x: 0, y: 0.5 };
            if (!input) { return defaultAnchor }
            let dNum = menuType === "cone" || menuType === "ray"
                ? input || "0, 0.5"
                : input || "0.5, 0.5"
            //if (!input) { return {x: dNum, y: dNum}}
            let parsedInput = dNum.split(',').map(s => s.trim());
            let posX = Number(parsedInput[0]);
            let posY = Number(parsedInput[1]);
            if (parsedInput.length === 2) {
                return { x: posX, y: posY }
            } else if (parsedInput.length === 1) {
                return { x: posX, y: posX }
            }
        }
    }

    function buildTile(tileX, tileY, isOverhead, tileWidth, tileHeight) {
        return {
            alpha: data.options.opacity,
            width: tileWidth,
            height: tileHeight,
            img: data.path.filePath,
            texture: { src: data.path.filePath }, // v12 uses this instead of img:
            overhead: isOverhead, // false sets Tile in canvas.background. true sets Tile to canvas.foreground
            occlusion: {
                alpha: `${data.options.occlusionAlpha}`,
                mode: data.options.occlusionMode,
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
    }
}
