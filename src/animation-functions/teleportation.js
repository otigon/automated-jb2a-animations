import { buildFile} from "./file-builder/build-filepath.js"
import { aaDebugger } from "../constants/constants.js"

export async function teleportation(handler, animationData) {
    const aaDebug = game.settings.get("autoanimations", "debug")

    if (handler.itemMacro.toLowerCase().includes("misty step")) {
        console.log("A-A Misty Step will not work with DAE SRD Misty Step");
        return;
    }
    const sourceToken = handler.actorToken;
    const actor = handler.actor;

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

    if (aaDebug) { aaDebugger("Teleportation Animation Start", data) }
    const onToken = await buildFile(true, data.itemName01, "static", data.variant, data.color, data.customPath);
    const onToken02 = await buildFile(true, data.itemName02, "static", data.variant02, data.color02, data.customPath02);

    const sourceScale = sourceToken.w;

    let Scale = ((sourceScale / onToken.metadata.width) * data.scale) * 1.75;
    let Scale02 = ((sourceScale / onToken02.metadata.width) * data.scale02) * 1.75;
    const x = data.teleDist;
    const y = canvas.dimensions.distance;
    const z = canvas.grid.size;

    if (!data.hideTemplate && data.measureType === 'alternating') {
        /*
        const templateData = ({
            t: "circle",
            user: game.user.id,
            x: sourceToken.center.x,
            y: sourceToken.center.y,
            direction: 0,
            distance: data.teleDist + (canvas.dimensions.distance / 2),
            borderColor: "#00FFFFFF",
            fillColor: null,
            flags: {
                world: {
                    Teleportation: {
                        ActorId: actor.id
                    }
                }
            }
        });
        canvas.scene.createEmbeddedDocuments("MeasuredTemplate", [templateData])
        */
        const circleDrawing = await canvas.scene.createEmbeddedDocuments("Drawing", [{
            type: "e",
            x: sourceToken.x - (((x / y) * z)),
            y: sourceToken.y - (((x / y) * z)),
            strokeWidth: 10,
            width: (((2 * x) + y) / y) * z,
            height: (((2 * x) + y) / y) * z,
            strokeColor: "#17FF00",
            strokeAlpha: 0.5,
            flags: {
                world: {
                    Teleportation: {
                        ActorId: actor.id
                    }
                }
            }
        }])
    }

    if (!data.hideTemplate && data.measureType === 'equidistant') {
        /*
        const length = data.teleDist + (canvas.dimensions.distance / 2);
        const templateData = ({
            t: "rect",
            user: game.user.id,
            x: sourceToken.x - (((data.teleDist / canvas.dimensions.distance) * canvas.grid.size) ),
            y: sourceToken.y - (((data.teleDist / canvas.dimensions.distance) * canvas.grid.size) ),
            width: length * 2,
            distance: Math.sqrt(2 * (Math.pow(length * 2, 2))),
            direction: 45,
            borderColor: null,
            fillColor: null,
            flags: {
                world: {
                    Teleportation: {
                        ActorId: actor.id
                    }
                }
            }
        });
        canvas.scene.createEmbeddedDocuments("MeasuredTemplate", [templateData])
        */
        const squareDrawing = await canvas.scene.createEmbeddedDocuments("Drawing", [{
            type: "r",
            x: sourceToken.x - (((x / y) * z)),
            y: sourceToken.y - (((x / y) * z)),
            strokeWidth: 10,
            width: (((2 * x) + y) / y) * z,
            height: (((2 * x) + y) / y) * z,
            strokeColor: "#17FF00",
            strokeAlpha: 0.5,
            flags: {
                world: {
                    Teleportation: {
                        ActorId: actor.id
                    }
                }
            }
        }])
    }

    let pos;
    canvas.app.stage.addListener('pointerdown', event => {
        if (event.data.button !== 0) { return }
        pos = event.data.getLocalPosition(canvas.app.stage);
        let ray = new Ray(sourceToken.center, pos)
        let centerPos = canvas.grid.getCenter(pos.x, pos.y);
        console.log(canvas.grid.measureDistance(sourceToken.center, {x: centerPos[0], y: centerPos[1]}, {gridSpaces: true}))
        if (data.measureType === 'alternating') {
            if (ray.distance > ((canvas.grid.size * (data.teleDist / canvas.dimensions.distance)) + (canvas.grid.size / 2))) {
                ui.notifications.error(game.i18n.format("AUTOANIM.teleport"))
            } else {
                deleteTemplatesAndMove();
                canvas.app.stage.removeListener('pointerdown');
            }
        } else {
            if (canvas.grid.measureDistance(sourceToken.center, {x: centerPos[0], y: centerPos[1]},  {gridSpaces: true}) <= data.teleDist) {
                deleteTemplatesAndMove();
                canvas.app.stage.removeListener('pointerdown');
            } else {
                ui.notifications.error(game.i18n.format("AUTOANIM.teleport"))
           }
        }
    });

    async function deleteTemplatesAndMove() {

        let gridPos = canvas.grid.getTopLeft(pos.x, pos.y);
        let centerPos = canvas.grid.getCenter(pos.x, pos.y);
        /*
        let removeTemplates = canvas.templates.placeables.filter(i => i.data.flags.world?.Teleportation?.ActorId === actor.id);
        removeTemplates = removeTemplates.map(template => template.id);
        if (removeTemplates) await canvas.scene.deleteEmbeddedDocuments("MeasuredTemplate", removeTemplates);
        */
        let removeDrawing = canvas.drawings.placeables.filter(i => i.data.flags.world?.Teleportation?.ActorId === actor.id);
        removeDrawing = removeDrawing.map(template => template.id);
        if (removeDrawing) await canvas.scene.deleteEmbeddedDocuments("Drawing", removeDrawing);

        new Sequence("Automated Animations")
            .addSequence(sourceFX.sourceSeq)
            .sound()
                .file(data.itemAudio.file)
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
    };


}
