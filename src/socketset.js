export var socketlibSocket = undefined;

export let setupSocket = () => {
    //@ts-ignore
    if (game.modules.get("socketlib")?.active) {
        socketlibSocket = window.socketlib.registerModule("autoanimations");
        socketlibSocket.register("placeTile", placeTile);
    }
};

export async function placeTile(data) {
    await canvas.scene.createEmbeddedDocuments("Tile", [data]);
}
