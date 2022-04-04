export var socketlibSocket = undefined;
import { createActiveEffects5e, deleteActiveEffects5e, checkConcentration, toggleActiveEffects5e } from "./active-effects/ae5e.js";

export let setupSocket = () => {
    //@ts-ignore
    if (game.modules.get("socketlib")?.active) {
        socketlibSocket = window.socketlib.registerModule("autoanimations");
        socketlibSocket.register("placeTile", placeTile);
        socketlibSocket.register("placeDrawing", placeDrawing);
        socketlibSocket.register("deleteDrawing", deleteDrawing);
        socketlibSocket.register("removeTile", removeTile);
    }
};

export async function placeTile(data) {
    await canvas.scene.createEmbeddedDocuments("Tile", [data]);
}

export async function placeDrawing(data) {
    await canvas.scene.createEmbeddedDocuments("Drawing", [data]);
}

export async function deleteDrawing(data) {
    await canvas.scene.deleteEmbeddedDocuments("Drawing", data);
}

export async function removeTile(data) {
    await canvas.scene.deleteEmbeddedDocuments("Tile", data);
}