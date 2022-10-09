export var socketlibSocket = undefined;

export let setupSocket = () => {
    //@ts-ignore
    if (game.modules.get("socketlib")?.active) {
        socketlibSocket = window.socketlib.registerModule("autoanimations");
        socketlibSocket.register("placeTile", placeTile);
        socketlibSocket.register("removeTile", removeTile);
    }
};

export async function placeTile(data) {
    await canvas.scene.createEmbeddedDocuments("Tile", [data]);
}

export async function removeTile(data) {
    await canvas.scene.deleteEmbeddedDocuments("Tile", data);
}