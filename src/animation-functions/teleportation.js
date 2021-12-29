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
        data.itemName = data.subAnimation || "";
        data.teleDist = data.range || 30;
    } else {
        data.itemName = data.options?.name || "";
    }
    if (aaDebug) { aaDebugger("Teleportation Animation Start", data) }
    const onToken = await buildFile(true, data.itemName, "static", "01", data.color, data.customPath);

    const sourceScale = sourceToken.w;

    let Scale = ((sourceScale / onToken.metadata.width) * data.scale) * 1.75;
    if (!data.hideTemplate) {
        const templateData = ({
            t: "circle",
            user: game.user.id,
            x: sourceToken.x + canvas.grid.size / 2,
            y: sourceToken.y + canvas.grid.size / 2,
            direction: 0,
            distance: data.teleDist,
            borderColor: "#00FFFFFF",
            fillColor: "#00FFFFFF",
            flags: {
                world: {
                    Teleportation: {
                        ActorId: actor.id
                    }
                }
            }
        });
        //let temp = new MeasuredTemplateDocument (templateData, canvas.scene)
        canvas.scene.createEmbeddedDocuments("MeasuredTemplate", [templateData])
    }

    let pos;
    canvas.app.stage.addListener('pointerdown', event => {
        if (event.data.button !== 0) { return }
        pos = event.data.getLocalPosition(canvas.app.stage);
        let ray = new Ray(sourceToken.center, pos)
        if (ray.distance > ((canvas.grid.size * (data.teleDist / canvas.dimensions.distance)) + (canvas.grid.size / 2))) {
            ui.notifications.error(game.i18n.format("AUTOANIM.teleport"))
        } else {
            deleteTemplatesAndMove();
            canvas.app.stage.removeListener('pointerdown');
        }
    });

    async function deleteTemplatesAndMove() {

        let gridPos = canvas.grid.getTopLeft(pos.x, pos.y);

        let removeTemplates = canvas.templates.placeables.filter(i => i.data.flags.world?.Teleportation?.ActorId === actor.id);
        removeTemplates = removeTemplates.map(template => template.id);
        if (removeTemplates) await canvas.scene.deleteEmbeddedDocuments("MeasuredTemplate", removeTemplates);

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
                .wait(750)
            .thenDo(async () => {
                if (game.data.version === "0.7.9" || game.data.version === "0.7.10") {
                    await sourceToken.update({
                        x: gridPos[0],
                        y: gridPos[1],
                        hidden: true
                    }, { animate: false });
                } else {
                    await sourceToken.document.update({
                        x: gridPos[0],
                        y: gridPos[1],
                        hidden: true
                    }, { animate: false });
                }
            })  
            .effect()
                .file(onToken.msFile)
                .atLocation(sourceToken)
                .scale(Scale)
                .randomRotation()
            .wait(1500)
            .thenDo(async () => {
                if (game.data.version === "0.7.9" || game.data.version === "0.7.10") {
                    await sourceToken.update({
                        hidden: false
                    }, { animate: false });
                    0
                } else {
                    await sourceToken.document.update({
                        hidden: false
                    }, { animate: false });
                }
            })
            .play();
    };


}
