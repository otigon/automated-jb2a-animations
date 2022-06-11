import { buildFile } from "./file-builder/build-filepath.js"
import { aaDebugger } from "../constants/constants.js"
//import { socketlibSocket } from "../socketset.js";
import { AAanimationData } from "../aa-classes/animation-data.js";
export async function teleportation(handler, animationData) {

    const sourceToken = handler.sourceToken;
    const data = animationData.primary;
    const sourceFX = animationData.sourceFX;
    /*
    if (data.isAuto) {
        data.itemName01 = data.subAnimation || "";
        data.itemName02 = data.subAnimation02 || "";
        data.teleDist = data.range || 30;
    } else {
        data.itemName01 = data.options?.name || "";
        data.itemName02 = data.options?.name02 || "";
    }
    */
    //const root = handler.flags.preset?.teleportation;
    const root = data.isAuto ? handler.autorecObject?.teleportation : handler.flags?.preset?.teleportation;
    if (!root) { return; }
    const measureType = root.measureType || "alternating";
    const range = root.range || 30;
    const rootStart = root.start;
    const startData = {
        menuType: rootStart.menuType,
        animation: rootStart.animation,
        variant: rootStart.variant,
        color: rootStart.color,
        scale: rootStart.scale || 1,
        below: rootStart.below || false,
        isMasked: rootStart.isMasked || false,
        opacity: rootStart.opacity || 0,
        customPath: rootStart.enableCustom ? rootStart.customPath || "" : false,
    }
    const rootEnd = root.end;
    const endData = {
        menuType: rootEnd.menuType,
        animation: rootEnd.animation,
        variant: rootEnd.variant,
        color: rootEnd.color,
        scale: rootEnd.scale || 1,
        below: rootEnd.below || false,
        isMasked: rootEnd.isMasked || false,
        delay: rootEnd.delay || 0,
        customPath: rootEnd.enableCustom ? rootEnd.customPath || "" : false,
    }
    const rootBetween = root.between;
    const betweenData = {
        menuType: rootBetween.menuType,
        animation: rootBetween.animation,
        variant: rootBetween.variant,
        color: rootBetween.color,
        below: rootBetween.below || false,
        enable: rootBetween.enable || false,
        playbackRate: rootBetween.playbackRate || 1,
        customPath: rootBetween.enableCustom ? rootBetween.customPath || "" : false,
    }
    const startFile = await buildFile(true, startData.menuType, startData.animation, "static", startData.variant, startData.color, startData.customPath);
    const endFile = await buildFile(true, endData.menuType, endData.animation, "static", endData.variant, endData.color, endData.customPath);
    const betweenFile = await buildFile(false, betweenData.menuType, betweenData.animation, "range", betweenData.variant, betweenData.color, betweenData.customPath);
    console.log(startFile)
    console.log(endFile)
    console.log(betweenFile)

    //const onToken = await buildFile(true, data.menuType, data.itemName01, "static", data.variant, data.color, data.customPath);
    //const onToken02 = await buildFile(true, data.menuType02, data.itemName02, "static", data.variant02, data.color02, data.customPath02);

    if (handler.debug) { aaDebugger("Teleportation Animation Start", animationData, startFile, endFile) }

    let sourceTokenGS = sourceToken.w / canvas.grid.size;

    const drawingSize = (sourceToken.data?.width * canvas.grid.size) + (2 * ((range / canvas.dimensions.distance) * canvas.grid.size));

    let userIDs = Array.from(game.users).map(user => user.id);
    let gmIDs = Array.from(game.users).filter(i => i.isGM).map(user => user.id)

    const hideBorder = data.hideFromPlayers ? gmIDs : userIDs;
    const userColor = game.user?.data?.color ? "0x" + game.user.data.color.replace(/^#/, '') : 0x0D26FF;
    const filePath = measureType === 'equidistant' ? "modules/autoanimations/src/images/teleportSquare.png" : "modules/autoanimations/src/images/teleportCircle.png"

    let aaSeq01 = new Sequence()
    aaSeq01.effect()
        .file(filePath)
        .atLocation(sourceToken)
        .size({ width: drawingSize, height: drawingSize })
        .fadeIn(500)
        .scaleIn(0, 500)
        .fadeOut(500)
        .name("teleportation")
        .belowTokens(true)
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

        if (checkDistance(sourceToken, { x: topLeft[0], y: topLeft[1] }) <= range) {
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
        //let centerPos = canvas.grid.getCenter(pos.x, pos.y);

        Sequencer.EffectManager.endEffects({ name: "teleportation" })

        let aaSeq = new Sequence();
        if (data.playMacro && data.macro.playWhen === "1") {
            let userData = data.macro.args;
            aaSeq.macro(data.macro.name, handler.workflow, handler, ...userData)
        }
        aaSeq.addSequence(sourceFX.sourceSeq)
        if (data.playSound) {
            aaSeq.addSequence(await AAanimationData._sounds({ animationData }))
        }
        let startEffect = aaSeq.effect()
            startEffect.file(startFile.file)
            startEffect.atLocation(sourceToken)
            startEffect.belowTokens(startData.below)
            startEffect.size(sourceTokenGS * 1.5 * startData.scale, { gridUnits: true })
            startEffect.randomRotation()
            if (startData.isMasked) {
                startEffect.mask(sourceToken)
            }
        aaSeq.wait(250)
        if (betweenData.enable) {
        let betweenEffect = aaSeq.effect()
            betweenEffect.file(betweenFile.file)
            betweenEffect.atLocation(sourceToken)
            betweenEffect.stretchTo({ x: centerPos[0], y: centerPos[1] })
            betweenEffect.playbackRate(betweenData.playbackRate)
        }
        aaSeq.animation()
            .on(sourceToken)
            .opacity(startData.opacity)
            //.fadeOut(500)
            .teleportTo({ x: gridPos[0], y: gridPos[1] })
        let endEffect = aaSeq.effect()
            endEffect.file(endFile.file)
            endEffect.atLocation({ x: centerPos[0], y: centerPos[1] })
            endEffect.belowTokens(endData.below)
            endEffect.size(sourceTokenGS * 1.5 * endData.scale, { gridUnits: true })
            endEffect.randomRotation()
            if (endData.isMasked) {
                endEffect.mask(sourceToken)
            }
        aaSeq.wait(1250 + endData.delay)
        aaSeq.animation()
            .on(sourceToken)
            .fadeIn(500)
            //.opacity(1)
        if (data.playMacro && data.macro.playWhen === "0") {
            let userData = data.macro.args;
            new Sequence()
                .macro(data.macro.name, handler.workflow, handler, ...userData)
                .play()
        }
        aaSeq.play()
    };

    // Credit to TPosney / Midi-QOL for the Range Check
    function checkDistance(source, target) {
        var x, x1, y, y1, d, r, segments = [], rdistance, distance;
        for (x = 0; x < source.data.width; x++) {
            for (y = 0; y < source.data.height; y++) {
                const origin = new PIXI.Point(...canvas.grid.getCenter(source.data.x + (canvas.dimensions.size * x), source.data.y + (canvas.dimensions.size * y)));
                for (x1 = 0; x1 < 1; x1++) {
                    for (y1 = 0; y1 < 1; y1++) {
                        const dest = new PIXI.Point(...canvas.grid.getCenter(target.x + (canvas.dimensions.size * x1), target.y + (canvas.dimensions.size * y1)));
                        const r = new Ray(origin, dest);
                        segments.push({ ray: r });
                    }
                }
            }
        }
        if (segments.length === 0) {
            return -1;
        }
        rdistance = canvas.grid.measureDistances(segments, { gridSpaces: true });
        distance = rdistance[0];
        rdistance.forEach(d => {
            if (d < distance)
                distance = d;
        });
        return distance;
    }
    // Converting hex colors to HSL format
    /*
    function hexToHSL(H) {
        // Convert hex to RGB first
        let r = 0, g = 0, b = 0;
        if (H.length == 4) {
          r = "0x" + H[1] + H[1];
          g = "0x" + H[2] + H[2];
          b = "0x" + H[3] + H[3];
        } else if (H.length == 7) {
          r = "0x" + H[1] + H[2];
          g = "0x" + H[3] + H[4];
          b = "0x" + H[5] + H[6];
        }
        // Then to HSL
        r /= 255;
        g /= 255;
        b /= 255;
        let cmin = Math.min(r,g,b),
            cmax = Math.max(r,g,b),
            delta = cmax - cmin,
            h = 0,
            s = 0,
            l = 0;
      
        if (delta == 0)
          h = 0;
        else if (cmax == r)
          h = ((g - b) / delta) % 6;
        else if (cmax == g)
          h = (b - r) / delta + 2;
        else
          h = (r - g) / delta + 4;
      
        h = Math.round(h * 60);
      
        if (h < 0)
          h += 360;
      
        l = (cmax + cmin) / 2;
        s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
        s = +(s * 100).toFixed(1);
        l = +(l * 100).toFixed(1);
      
        //return "hsl(" + h + "," + s + "%," + l + "%)";
        return [h, s * 0.01, l * 0.01]
      }
      */
}
