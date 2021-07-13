export var socketlibSocket = undefined;

export let setupSocket = () => {
    //@ts-ignore
    socketlibSocket = window.socketlib.registerModule("autoanimations");
    socketlibSocket.register("placeTile", placeTile);
};

export async function placeTile(data) {
    await canvas.scene.createEmbeddedDocuments("Tile", [data]);
}
