import { buildFile } from "../file-builder/build-filepath.js"

export async function teleportation(handler, animationData) {

    const sourceToken = handler.sourceToken;
    const data = animationData.primary;
    const macro = animationData.macro;
    //const sourceFX = animationData.sourceFX;


    const startFile = await buildFile("static", data.start, data.start.customPath);
    const endFile = await buildFile("static", data.end, data.end.customPath);
    const betweenFile = await buildFile("range", data.between, data.between.customPath);

    let sourceTokenGS = sourceToken.w / canvas.grid.size;

    let userIDs = Array.from(game.users).map(user => user.id);
    let gmIDs = Array.from(game.users).filter(i => i.isGM).map(user => user.id)

    const hideBorder = data.options.hideFromPlayers ? gmIDs : userIDs;
    //const userColor = game.user?.color ? "0x" + game.user.color.replace(/^#/, '') : 0x0D26FF;
    //const filePath = data.options.measureType === 'equidistant' ? "modules/autoanimations/animationPNG/teleportSquare.png" : "modules/autoanimations/animationPNG/teleportCircle.png"

    const delayFade = data.options.delayFade || 0;
    const delayReturn = data.options.delayReturn || 0;
    
    const borderSize = (sourceTokenGS / canvas.grid.size) + 0.5 + (data.options.range / canvas.dimensions.distance);

    const borderType = data.options.measureType === "equidistant" ? "roundedRect" : "circle";
    const borderLocation = borderType === "circle" ? {} : {offset: {x: -borderSize, y: -borderSize}, gridUnits: true};
    const borderData = {
        lineSize: 4,
        lineColor: game.user.color.toString(),
        radius: borderType === "circle" ? borderSize : .25,
        width: borderSize * 2,
        height: borderSize * 2,
        gridUnits: true,
        name: "teleBorder"
    }

    let borderSeq = await new Sequence(handler.sequenceData)
    let borderEffect = borderSeq.effect()
        .fadeIn(500)
        .persist()
        .fadeOut(500)
        .atLocation(sourceToken, borderLocation)
        .shape(borderType, borderData)
        .elevation(sourceToken?.document?.elevation + 1)
        .forUsers(hideBorder)
        .name("teleportation")
        .opacity(0.75)
    if (borderType === "circle") {
        borderEffect.loopProperty("shapes.teleBorder", "scale.x", { from: 0.98, to: 1.02, duration: 1500, pingPong: true, ease: "easeInOutSine" })
        borderEffect.loopProperty("shapes.teleBorder", "scale.y", { from: 0.98, to: 1.02, duration: 1500, pingPong: true, ease: "easeInOutSine" })    
    }
    borderSeq.play()

    let pos;
    
    if (game.Levels3DPreview?._active) { 
        const circle3d = data.options.range ? new game.Levels3DPreview.CONFIG.entityClass.RangeRingEffect(sourceToken, data.options.range, game.user.color) : null;
        const templateData = { t: "circle", user: game.user.id, distance: 5, x: 0, y: 0, fillColor: "#ffffff", width: 1, texture: "", direction: 0,}
        getPositionFrom3D();
        function getPositionFrom3D() { 
            game.Levels3DPreview.CONFIG.entityClass.Template3D.drawPreview(new MeasuredTemplateDocument(templateData), false).then((response) => {
                if(!response) return getPositionFrom3D();
                pos = {
                    x: response.x,
                    y: response.y,
                    elevation: parseFloat(response.flags.levels.elevation),
                }
    
                let topLeft = canvas.grid.getTopLeft(pos.x, pos.y);
    
                if (canvas.grid.measureDistance(sourceToken, { x: topLeft[0], y: topLeft[1] }, { gridSpaces: true }) <= data.options.range) {
                    //console.log(canvas.grid.measureDistance(sourceToken, { x: topLeft[0], y: topLeft[1] }, {gridSpaces: true}))
                    if (data.options.checkCollision && testCollision(pos)) {
                        ui.notifications.error("Your Path is Blocked!! Try Again")
                        return getPositionFrom3D();
                    } else {
                        circle3d?.remove();
                        deleteTemplatesAndMove();
                    }
                } else {
                    ui.notifications.error(game.i18n.format("autoanimations.settings.teleport"))
                    return getPositionFrom3D();
                }
            });
        }
    }
        

    canvas.app.stage.addListener('pointerdown', event => {
        if (event.data.button !== 0) { return }
        pos = event.data.getLocalPosition(canvas.app.stage);

        let topLeft = canvas.grid.getTopLeft(pos.x, pos.y);

        if (canvas.grid.measureDistance(sourceToken, { x: topLeft[0], y: topLeft[1] }, { gridSpaces: true }) <= data.options.range) {
            //console.log(canvas.grid.measureDistance(sourceToken, { x: topLeft[0], y: topLeft[1] }, {gridSpaces: true}))
            if (data.options.checkCollision && testCollision(pos)) {
                ui.notifications.error("Your Path is Blocked!! Try Again")
            } else {
                deleteTemplatesAndMove();
                canvas.app.stage.removeListener('pointerdown');    
            }
        } else {
            ui.notifications.error(game.i18n.format("autoanimations.settings.teleport"))
        }
    });

    function testCollision(pos) {
        let pointerCenter = {
            x: canvas.grid.getCenter(pos.x, pos.y)[0],
            y: canvas.grid.getCenter(pos.x, pos.y)[1],
        };
        return sourceToken.checkCollision(pointerCenter)
    }

    async function deleteTemplatesAndMove() {

        let gridPos = canvas.grid.getTopLeft(pos.x, pos.y);
        let centerPos;
        if (canvas.scene.gridType === 0) {
            centerPos = [gridPos[0] + sourceToken.w, gridPos[1] + sourceToken.w];
        } else {
            centerPos = canvas.grid.getCenter(pos.x, pos.y);
        }

        Sequencer.EffectManager.endEffects({ name: "teleportation" })

        let aaSeq = new Sequence(handler.sequenceData);

        // Play Macro if Awaiting
        if (macro && macro.playWhen === "1" && !macro?.args?.warpgateTemplate) {
            handler.complileMacroSection(aaSeq, macro)
        }

        let startX = sourceToken.center?.x;
        let startY = sourceToken.center?.y;

        if (data.sound) {
            aaSeq.addSequence(data.sound)
        }
        // Start Animation
        if (data.start) {
            let startEffect = aaSeq.effect()
            startEffect.file(startFile.file)
            startEffect.atLocation({x: startX, y: startY})
            startEffect.elevation(handler.elevation(sourceToken, data.start.options.isAbsolute, data.start.options.elevation), {absolute: data.start.options.isAbsolute})
            startEffect.size(sourceTokenGS * 1.5 * data.start.options.size, { gridUnits: true })
            startEffect.opacity(data.start.options.opacity)
            startEffect.fadeIn(data.start.options.fadeIn)
            startEffect.fadeOut(data.start.options.fadeOut)
            startEffect.delay(data.start.options.delay)
            startEffect.playbackRate(data.start.options.playbackRate)
            //startEffect.randomRotation()
            if (data.start.options.isMasked) {
                startEffect.mask(sourceToken)
            }
        }
        //aaSeq.wait(250)

        // Between Animation
        if (data.between) {
            let betweenEffect = aaSeq.effect()
            betweenEffect.file(betweenFile.file)
            betweenEffect.atLocation({x: startX, y: startY})
            betweenEffect.delay(data.between.options.delay)
            betweenEffect.elevation(handler.elevation(sourceToken, data.between.options.isAbsolute, data.between.options.elevation), {absolute: data.between.options.isAbsolute})
            betweenEffect.opacity(data.between.options.opacity)
            betweenEffect.stretchTo({ x: centerPos[0], y: centerPos[1] })
            betweenEffect.playbackRate(data.between.options.playbackRate)
        }

        // End Animation
        if (data.end) {
            let endEffect = aaSeq.effect()
            endEffect.file(endFile.file)
            endEffect.atLocation({ x: centerPos[0], y: centerPos[1] })
            endEffect.delay(data.end.options.delay)
            endEffect.elevation(handler.elevation(sourceToken, data.end.options.isAbsolute, data.end.options.elevation), {absolute: data.end.options.isAbsolute})
            endEffect.size(sourceTokenGS * 1.5 * data.end.options.size, { gridUnits: true })
            endEffect.fadeIn(data.end.options.fadeIn)
            endEffect.fadeOut(data.end.options.fadeOut)
            endEffect.playbackRate(data.end.options.playbackRate)
            //endEffect.randomRotation()
            if (data.end.options.isMasked) {
                endEffect.mask(sourceToken)
            }
        }

        // FadeOut Token
        if (data.options.alpha < 1) {
            let fadeSeq = aaSeq.animation()
            fadeSeq.on(sourceToken)
            fadeSeq.opacity(data.options.alpha)
            fadeSeq.delay(delayFade)
        }

        // Move Token
        let animSeq = aaSeq.animation()
        animSeq.on(sourceToken)
        //animSeq.opacity(data.start.options.alpha)
        animSeq.delay(data.options.delayMove)
        //animSeq.fadeOut(data.start.options.tokenOut)
        if (data.options.teleport) {
            animSeq.teleportTo({ x: gridPos[0], y: gridPos[1], elevation: pos.elevation })
        } else {
            animSeq.moveTowards({ x: gridPos[0], y: gridPos[1], elevation: pos.elevation })
            animSeq.moveSpeed(data.options.speed)
        }
        
        // Token to Full Opacity
        if (data.options.alpha < 1) {
            let tokenSeq = aaSeq.animation()
            tokenSeq.on(sourceToken)
            tokenSeq.opacity(1)
            tokenSeq.delay(delayFade + delayReturn)
            //tokenSeq.fadeIn(data.end.options.tokenIn)
        }

        // Macro if Concurrent
        if (macro && macro.playWhen === "0" && !macro?.args?.warpgateTemplate) {
            handler.runMacro(macro)
        }

        // Macro if Awaiting Animation. This will respect the Delay/Wait options in the Animation chains
        if (macro && macro.playWhen === "3") {
            handler.complileMacroSection(aaSeq, macro)
        }

        aaSeq.play()

    };
}
