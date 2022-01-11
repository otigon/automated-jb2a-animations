export var socketlibSocket = undefined;

export let setupSocket = () => {
    //@ts-ignore
    if (game.modules.get("socketlib")?.active) {
        socketlibSocket = window.socketlib.registerModule("autoanimations");
        socketlibSocket.register("placeTile", placeTile);
        socketlibSocket.register("placeDrawing", placeDrawing);
        socketlibSocket.register("deleteDrawing", deleteDrawing);
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