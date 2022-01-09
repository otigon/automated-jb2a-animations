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
        data.itemName01 = data.options?.name01 || "";
        data.itemName02 = data.options?.name02 || "";
    }
    if (aaDebug) { aaDebugger("Teleportation Animation Start", data) }
    const onToken = await buildFile(true, data.itemName01, "static", data.variant, data.color, data.customPath);
    const onToken02 = await buildFile(true, data.itemName02, "static", data.variant02, data.color02, data.customPath02);

    const sourceScale = sourceToken.w;

    let Scale = ((sourceScale / onToken.metadata.width) * data.scale) * 1.75;
    let Scale02 = ((sourceScale / onToken02.metadata.width) * data.scale02) * 1.75;
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
        let centerPos = canvas.grid.getCenter(pos.x, pos.y);

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
                await sourceToken.document.update({
                    x: gridPos[0],
                    y: gridPos[1],
                    hidden: true
                }, { animate: false });
            })  
            .effect()
                .file(onToken02.file)
                .atLocation({x: centerPos[0], y: centerPos[1]})
                .scale(Scale02)
                .randomRotation()
            .wait(1500)
            .thenDo(async () => {
                await sourceToken.document.update({
                    hidden: false
                }, { animate: false });
            })
            .play();
    };


}
