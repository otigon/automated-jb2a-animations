import { buildFile } from "./file-builder/build-filepath.js"
import { aaDebugger } from "../constants/constants.js"
//import { socketlibSocket } from "../socketset.js";
import { AAanimationData } from "../aa-classes/animation-data.js";
export async function teleportation(handler, animationData) {

    const sourceToken = handler.sourceToken;

    const data = animationData.primary;
    const sourceFX = animationData.sourceFX;

    if (data.isAuto) {
        data.itemName01 = data.subAnimation || "";
        data.itemName02 = data.subAnimation02 || "";
        data.teleDist = data.range || 30;
    } else {
        data.itemName01 = data.options?.name || "";
        data.itemName02 = data.options?.name02 || "";
    }

    const onToken = await buildFile(false, data.menuType, data.itemName01, "static", data.variant, data.color, data.customPath);
    const onToken02 = await buildFile(false, data.menuType02, data.itemName02, "static", data.variant02, data.color02, data.customPath02);

    if (handler.debug) { aaDebugger("Teleportation Animation Start", animationData, onToken, onToken02) }

    //const sourceScale = sourceToken.w;

    //let Scale = ((sourceScale / onToken.metadata.width) * data.scale) * 1.75;
    //let Scale02 = ((sourceScale / onToken02.metadata.width) * data.scale02) * 1.75;
    let sourceTokenGS = sourceToken.w / canvas.grid.size;

    const drawingSize = (sourceToken.w * canvas.grid.size) + (2 * ((data.teleDist / canvas.dimensions.distance) * canvas.grid.size));

    let userIDs = Array.from(game.users).map(user => user.id);
    let gmIDs = Array.from(game.users).filter(i => i.isGM).map(user => user.id)

    const hideBorder = data.hideFromPlayers ? gmIDs : userIDs;
    const userColor = game.user?.data?.color ? "0x" + game.user.data.color.replace(/^#/, '') : 0x0D26FF;
    const filePath = data.measureType === 'equidistant' ? "modules/autoanimations/src/images/teleportSquare.png" : "modules/autoanimations/src/images/teleportCircle.png"

    let aaSeq01 = new Sequence()
    aaSeq01.effect()
        .file(filePath)
        .atLocation(sourceToken)
        .size(((sourceTokenGS / canvas.grid.size) + 0.5 + (data.teleDist / canvas.dimensions.distance)) * 2, {gridUnits: true})
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

        if (checkDistance(sourceToken, { x: topLeft[0], y: topLeft[1] }) <= data.teleDist) {
            deleteTemplatesAndMove();
            canvas.app.stage.removeListener('pointerdown');
        } else {
            ui.notifications.error(game.i18n.format("AUTOANIM.teleport"))
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
        aaSeq.effect()
            .file(onToken.file)
            .atLocation(sourceToken)
            .belowTokens(data.below)
            //.scale(Scale)
            .size(sourceTokenGS * data.scale, {gridUnits: true})
            .randomRotation()
        aaSeq.wait(250)
        aaSeq.animation()
            .on(sourceToken)
            .opacity(0)
            .teleportTo({ x: gridPos[0], y: gridPos[1] })
        aaSeq.effect()
            .file(onToken02.file)
            .atLocation({ x: centerPos[0], y: centerPos[1] })
            .belowTokens(data.below)
            //.scale(Scale02)
            .size(sourceTokenGS * data.scale02, {gridUnits: true})
            .randomRotation()
        aaSeq.wait(1250 + data.delay)
        aaSeq.animation()
            .on(sourceToken)
            .opacity(1)
        if (data.playMacro && data.macro.playWhen === "0") {
            let userData = data.macro.args;
            new Sequence()
                .macro(data.macro.name, handler.workflow, handler, ...userData)
                .play()
        }
        aaSeq.play()
        /*
        new Sequence("Automated Animations")
            .addSequence(sourceFX.sourceSeq)
            .sound()
                .file(data.itemAudio.file, true)
                .volume(data.itemAudio.volume)
                .delay(data.itemAudio.delay)
                .playIf(data.playSound)
            .effect()
                .file(onToken.file)
                .atLocation(sourceToken)
                .scale(Scale)
                .randomRotation()
            .wait(250)
            .animation()
                .on(sourceToken)
                .opacity(0)
                .teleportTo({x: gridPos[0], y: gridPos[1]})
            .effect()
                .file(onToken02.file)
                .atLocation({x: centerPos[0], y: centerPos[1]})
                .scale(Scale02)
                .randomRotation()
            .wait(1250 + data.delay)
            .animation()
                .on(sourceToken)
                .opacity(1)
            .play();
        */
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
