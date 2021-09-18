import { buildFile} from "./file-builder/build-filepath.js"
import { aaDebugger } from "../constants/constants.js"

export async function teleportation(handler, autoObject) {
    const aaDebug = game.settings.get("autoanimations", "debug")

    if (handler.itemMacro.toLowerCase().includes("misty step")) {
        console.log("A-A Misty Step will not work with DAE SRD Misty Step");
        return;
    }
    const token = handler.actorToken;
    const actor = handler.actor;

    const data = {};
    if (autoObject) {
        const autoOverridden = handler.options?.overrideAuto
        Object.assign(data, autoObject[0]);
        data.itemName = data.subAnimation || "";
        data.customPath = data.custom ? data.customPath : false;
        data.color = autoOverridden ? handler.options?.autoColor : data.color;
        data.scale = autoOverridden ? handler.options?.autoScale : data.scale;
    } else {
        data.itemName = handler.convertedName;
        data.variant = data.itemName === "unarmedstrike" || data.itemName === "flurryofblows" ? handler.uaStrikeType : "01";
        data.customPath = handler.enableCustom01 ? handler.custom01 : false;
        data.color = handler.color;
        data.switchType = handler.switchType;
        data.detect = handler.switchDetect;
        data.scale = handler.scale;
        data.range = handler.teleRange;
        data.hideTemplate = handler.options?.hideTemplate;
    }
    if (aaDebug) { aaDebugger("Teleportation Animation Start", data) }
    const onToken = await buildFile(true, data.itemName, "static", "01", data.color, data.customPath);

    const sourceFX = AAanimationData._sourceFX(handler, sourceToken);
    sourceFX.data = handler.sourceEnable ? await buildFile(true, handler.sourceName, "static", handler.sourceVariant, handler.sourceColor, sourceFX.customSourcePath) : "";
    sourceFX.sFXScale = handler.sourceEnable ? 2 * sourceToken.w / sourceFX.data?.metadata?.width : 1;


    let Scale = ((token.w / onToken.metadata.width) * data.scale) * 1.75;
    if (!data.hideTemplate) {
        let range = MeasuredTemplate.create({
            t: "circle",
            user: game.user.id,
            x: token.x + canvas.grid.size / 2,
            y: token.y + canvas.grid.size / 2,
            direction: 0,
            distance: data.range,
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
        if (ray.distance > ((canvas.grid.size * (data.range / canvas.dimensions.distance)) + (canvas.grid.size / 2))) {
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
                .scale(sourceFX.sFXScale * sourceFX.scale)
                .repeats(sourceFX.repeat, sourceFX.delay)
                .belowTokens(sourceFX.below)
                .waitUntilFinished(sourceFX.startDelay)
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
