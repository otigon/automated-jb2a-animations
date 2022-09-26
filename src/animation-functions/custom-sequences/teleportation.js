import { buildFile } from "../file-builder/build-filepath.js"

export async function teleportation(handler, animationData) {

    const sourceToken = handler.sourceToken;
    const data = animationData.primary;
    const sourceFX = animationData.sourceFX;

    
    const startFile = await buildFile(true, data.start.menuType, data.start.animation, "static", data.start.variant, data.start.color, data.start.customPath);
    const endFile = await buildFile(true, data.end.menuType, data.end.animation, "static", data.end.variant, data.end.color, data.end.customPath);
    const betweenFile = await buildFile(false, data.between.menuType, data.between.animation, "range", data.between.variant, data.between.color, data.between.customPath);

    let sourceTokenGS = sourceToken.w / canvas.grid.size;

    let userIDs = Array.from(game.users).map(user => user.id);
    let gmIDs = Array.from(game.users).filter(i => i.isGM).map(user => user.id)

    const hideBorder = data.options.hideFromPlayers ? gmIDs : userIDs;
    const userColor = game.user?.color ? "0x" + game.user.color.replace(/^#/, '') : 0x0D26FF;
    const filePath = data.options.measureType === 'equidistant' ? "modules/autoanimations/styles/teleportSquare.png" : "modules/autoanimations/styles/teleportCircle.png"

    let aaSeq01 = new Sequence()
    aaSeq01.effect()
        .file(filePath)
        .atLocation(sourceToken)
        .size(((sourceTokenGS / canvas.grid.size) + 0.5 + (data.options.range / canvas.dimensions.distance)) * 2, {gridUnits: true})
        .fadeIn(500)
        .scaleIn(0, 500)
        .fadeOut(500)
        .name("teleportation")
        .elevation(0)
        .persist(true)
        .opacity(0.5)
        .filter("Glow", {
            distance: 10,
            outerStrength: 5,
            innerStrength: 5,
            color: userColor,
            quality: 0.2,
        })
        .forUsers(hideBorder)
    aaSeq01.play()

    let pos;
    canvas.app.stage.addListener('pointerdown', event => {
        if (event.data.button !== 0) { return }
        pos = event.data.getLocalPosition(canvas.app.stage);

        let topLeft = canvas.grid.getTopLeft(pos.x, pos.y);

        if (canvas.grid.measureDistance(sourceToken, { x: topLeft[0], y: topLeft[1] }) <= data.options.range) {
            deleteTemplatesAndMove();
            canvas.app.stage.removeListener('pointerdown');
        } else {
            ui.notifications.error(game.i18n.format("autoanimations.settings.teleport"))
        }
    });

    async function deleteTemplatesAndMove() {

        let gridPos = canvas.grid.getTopLeft(pos.x, pos.y);
        let centerPos;
        if (canvas.scene.gridType === 0) {
            centerPos = [gridPos[0] + sourceToken.w, gridPos[1] + sourceToken.w];
        } else {
            centerPos = canvas.grid.getCenter(pos.x, pos.y);
        }

        Sequencer.EffectManager.endEffects({ name: "teleportation" })

        let aaSeq = new Sequence();
        if (data.playMacro && data.macro.playWhen === "1") {
            let userData = data.macro.args;
            aaSeq.macro(data.macro.name, handler.workflow, handler, userData)
        }
        aaSeq.addSequence(sourceFX.sourceSeq)
        if (data.sound) {
            aaSeq.addSequence(data.sound)
        }
        let startEffect = aaSeq.effect()
            startEffect.file(startFile.file)
            startEffect.atLocation(sourceToken)
            startEffect.elevation(data.start.options.elevation)
            startEffect.size(sourceTokenGS * 1.5 * data.start.options.size, { gridUnits: true })
            startEffect.opacity(data.start.options.opacity)
            startEffect.fadeIn(500)
            startEffect.fadeOut(500)
            startEffect.randomRotation()
            if (data.start.options.isMasked) {
                startEffect.mask(sourceToken)
            }
        aaSeq.wait(250)
        if (data.between.options.enable) {
        let betweenEffect = aaSeq.effect()
            betweenEffect.file(betweenFile.file)
            betweenEffect.atLocation(sourceToken)
            betweenEffect.elevation(data.between.options.elevation)
            betweenEffect.opacity(data.between.options.opacity)
            betweenEffect.stretchTo({ x: centerPos[0], y: centerPos[1] })
            betweenEffect.playbackRate(data.between.options.playbackRate)
        }
        aaSeq.animation()
            .on(sourceToken)
            .opacity(data.start.options.alpha)
            .teleportTo({ x: gridPos[0], y: gridPos[1] })
        let endEffect = aaSeq.effect()
            endEffect.file(endFile.file)
            endEffect.atLocation({ x: centerPos[0], y: centerPos[1] })
            endEffect.elevation(data.end.options.elevation)
            endEffect.size(sourceTokenGS * 1.5 * data.end.options.size, { gridUnits: true })
            startEffect.fadeIn(500)
            startEffect.fadeOut(500)
            endEffect.randomRotation()
            if (data.end.options.isMasked) {
                endEffect.mask(sourceToken)
            }
        aaSeq.wait(1250 + data.end.options.delay)
        aaSeq.animation()
            .on(sourceToken)
            .fadeIn(500)
        if (data.playMacro && data.macro.playWhen === "0") {
            let userData = data.macro.args;
            new Sequence()
                .macro(data.macro.name, handler.workflow, handler, userData)
                .play()
        }
        aaSeq.play()
    };
}