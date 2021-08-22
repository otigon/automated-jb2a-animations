import { buildFile} from "./file-builder/build-filepath.js"

export async function teleportation(handler) {


    if (handler.itemMacro.toLowerCase().includes("misty step")) {
        console.log("A-A Misty Step will not work with DAE SRD Misty Step");
        return;
    }
    const token = handler.actorToken;
    const actor = handler.actor;

    let itemName = handler.convertedName
    let customPath = handler.enableCustom01 ? handler.custom01 : false;
    let onToken = await buildFile(true, itemName, "static", "01", handler.color, customPath);

    let sourceFX;
    let sFXScale;
    let customSourcePath; 
    if (handler.sourceEnable) {
        customSourcePath = handler.sourceCustomEnable ? handler.sourceCustomPath : false;
        sourceFX = await buildFile(true, handler.sourceName, "static", handler.sourceVariant, handler.sourceColor, customSourcePath);
        sFXScale = 2 * sourceToken.w / sourceFX.metadata.width;
    }


    let Scale = ((token.w / onToken.metadata.width) * handler.scale) * 1.75;
    if (!handler.options?.hideTemplate) {
        let range = MeasuredTemplate.create({
            t: "circle",
            user: game.user.id,
            x: token.x + canvas.grid.size / 2,
            y: token.y + canvas.grid.size / 2,
            direction: 0,
            distance: handler.teleRange,
            borderColor: "#FF0000",
            flags: {
                world: {
                    Teleportation: {
                        ActorId: actor.id
                    }
                }
            }
        });
    }

    let pos;
    canvas.app.stage.addListener('pointerdown', event => {
        if (event.data.button !== 0) { return }
        pos = event.data.getLocalPosition(canvas.app.stage);
        let ray = new Ray(token.center, pos)
        if (ray.distance > ((canvas.grid.size * (handler.teleRange / canvas.dimensions.distance)) + (canvas.grid.size / 2))) {
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

        new Sequence()
            .effect()
                .atLocation(token)
                .scale(sFXScale * handler.sourceScale)
                .repeats(handler.sourceLoops, handler.sourceLoopDelay)
                .belowTokens(handler.sourceLevel)
                .waitUntilFinished(handler.sourceDelay)
                .playIf(handler.sourceEnable)
                .addOverride(async (effect, data) => {
                    if (handler.sourceEnable) {
                        data.file = sourceFX.file;
                    }
                    return data;
                })
            .effect()
                .file(onToken.file)
                .atLocation(token)
                .scale(Scale)
                .randomRotation()
                .wait(750)
            .thenDo(async () => {
                if (game.data.version === "0.7.9" || game.data.version === "0.7.10") {
                    await token.update({
                        x: gridPos[0],
                        y: gridPos[1],
                        hidden: true
                    }, { animate: false });
                } else {
                    await token.document.update({
                        x: gridPos[0],
                        y: gridPos[1],
                        hidden: true
                    }, { animate: false });
                }
            })  
            .effect()
                .file(onToken.msFile)
                .atLocation(token)
                .scale(Scale)
                .randomRotation()
            .wait(1500)
            .thenDo(async () => {
                if (game.data.version === "0.7.9" || game.data.version === "0.7.10") {
                    await token.update({
                        hidden: false
                    }, { animate: false });
                    0
                } else {
                    await token.document.update({
                        hidden: false
                    }, { animate: false });
                }
            })
            .play();
    };


}
