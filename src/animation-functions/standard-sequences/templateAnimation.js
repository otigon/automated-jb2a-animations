import { socketlibSocket } from "../../socketset.js";
import { howToDelete } from "../../constants/constants.js";
const wait = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

export async function templatefx(handler, animationData, templateDocument) {

    const sourceToken = handler.sourceToken;

    const template = handler.templateData ? handler.templateData : templateDocument ? templateDocument : canvas.templates.placeables[canvas.templates.placeables.length - 1].document;
    //const templateData = template ? template || {}: template.document || {};;
    const templateType = template?.t;

    const data = animationData.primary;
    const secondary = animationData.secondary;
    const sourceFX = animationData.sourceFX;
    const targetFX = animationData.targetFX;
    const macro = animationData.macro;

    const templateTypes = ['sphere', 'cylinder', 'radius']

    let aaSeq = await new Sequence("Automated Animations")

    if ((data.options.persistent && data.options.persistType !== "attachtemplate") || !data.options.persistent) {
        aaSeq.thenDo(function () {
            if (data.options.removeTemplate) {
                canvas.scene.deleteEmbeddedDocuments("MeasuredTemplate", [template.id])
            }
        })
    }

    // Play Macro if Awaiting
    if (macro && macro.playWhen === "1") {
        let userData = macro.args;
        aaSeq.macro(macro.name, handler.workflow, handler, userData)
    }
    // Extra Effects => Source Token if active
    if (sourceFX.enable) {
        aaSeq.addSequence(sourceFX.sourceSeq)
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
            if (game.modules.get("dnd5e-helpers")?.active && (game.settings.get("dnd5e-helpers", "gridTemplateScaling") === 2 || game.settings.get("dnd5e-helpers", "gridTemplateScaling") === 3) && templateTypes.includes(handler.item.system?.target?.type)) {
                trueSize = Math.sqrt(Math.pow(template.distance, 2) - Math.pow((handler.item.system?.target?.value * 2), 2));
            } else {
                trueSize = template.width;
            }
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
                coneRaySeq.mask(template)
            }
            if (data.options.persistent) {
                templateSeq.persist(true)
                if (data.options.persistType === 'attachtemplate') {
                    templateSeq.attachTo(template)
                    templateSeq.rotateTowards(template, {attachTo: true})
                } else {
                    templateSeq.atLocation(template, { cacheLocation: true })
                    templateSeq.rotateTowards(template, {cacheLocation: true})
                }
            } else {
                templateSeq.atLocation(template, { cacheLocation: true })
                templateSeq.repeats(data.options.repeat, data.options.repeatDelay)
                templateSeq.rotateTowards(template, {cacheLocation: true})
            }
            if (!data.options.isWait) {
                templateSeq.delay(data.options.delay)
            }
        }

        if (templateType === 'circle' || templateType === 'rect') {
            let trueSize;
            if (templateType === 'rect') {
                if (game.modules.get("dnd5e-helpers")?.active && (game.settings.get("dnd5e-helpers", "gridTemplateScaling") === 2 || game.settings.get("dnd5e-helpers", "gridTemplateScaling") === 3) && templateTypes.includes(handler.item.system?.target?.type)) {
                    trueSize = Math.sqrt(Math.pow(template.distance, 2) - Math.pow((handler.item.system?.target?.value * 2), 2));
                } else {
                    trueSize = Math.sqrt(Math.pow(template.distance, 2)/2)
                }
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

    if (secondary && handler.allTargets.length) {
        if (secondary.sound) {
            aaSeq.addSequence(secondary.sound)
        }
        for (let i = 0; i < handler.allTargets.length; i++) {
            let currentTarget = handler.allTargets[i]
            let hit;
            if (handler.playOnMiss) {
                hit = handler.hitTargetsId.includes(currentTarget.id) ? true : false;
            } else {
                hit = true;
            }
            let secondarySeq = aaSeq.effect()
            secondarySeq.atLocation(currentTarget)
            secondarySeq.file(secondary.path?.file, true)
            secondarySeq.size(secondary.options.size * 2, { gridUnits: true })
            secondarySeq.repeats(secondary.options.repeat, secondary.options.repeatDelay)
            if (i === handler.allTargets.length - 1 && secondary.options.isWait && targetFX.enable) {
                secondarySeq.waitUntilFinished(secondary.options.delay)
            } else if (!secondary.options.isWait) {
                secondarySeq.delay(secondary.options.delay)
            }
            secondarySeq.elevation(handler.elevation(currentTarget, secondary.options.isAbsolute, secondary.options.elevation))
            secondarySeq.zIndex(secondary.options.zIndex)
            secondarySeq.opacity(secondary.options.opacity)
            secondarySeq.fadeIn(secondary.options.fadeIn)
            secondarySeq.fadeOut(secondary.options.fadeOut)
            if (secondary.options.rotateSource && sourceToken) {
                secondarySeq.rotateTowards(sourceToken)
                secondarySeq.rotate(180)    
            }    
            if (secondary.options.isMasked) {
                secondarySeq.mask(currentTarget)
            }
            secondarySeq.anchor({x: secondary.options.anchor.x, y: secondary.options.anchor.y})
            secondarySeq.playbackRate(secondary.options.playbackRate)
        }
    }

    if (handler.allTargets.length && targetFX.enable) {
        for (let target of handler.allTargets) {
            let targetSequence = handler.buildTargetSeq(targetFX, target);
            aaSeq.addSequence(targetSequence.targetSeq)
        }
    }

    if (macro && macro.playWhen === "0") {
        let userData = macro.args;
        new Sequence()
            .macro(macro.name, handler.workflow, handler, userData)
            .play()
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
        seq.file(data.path.file)
        seq.opacity(data.options.opacity)
        seq.origin(handler.itemUuid)
        seq.elevation(handler.elevation(sourceToken, data.options.isAbsolute, data.options.elevation))
        seq.zIndex(data.options.zIndex)
        seq.rotate(data.options.rotate)
        if (data.options.isMasked) {
            seq.mask(template)
        }
        seq.playbackRate(data.options.playbackRate)
    }

    function buildTile(tileX, tileY, isOverhead, tileWidth, tileHeight) {
        return {
            alpha: data.options.opacity,
            width: tileWidth,
            height: tileHeight,
            img: data.path.fileData,
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
