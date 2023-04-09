export var socketlibSocket = undefined;

export let setupSocket = () => {
    //@ts-ignore
    if (game.modules.get("socketlib")?.active) {
        socketlibSocket = window.socketlib.registerModule("autoanimations");
        socketlibSocket.register("placeTile", placeTile);
        socketlibSocket.register("removeTile", removeTile);
        socketlibSocket.register("checkSettings", checkSettings);
    }
};

export async function placeTile(data) {
    await canvas.scene.createEmbeddedDocuments("Tile", [data]);
}

export async function removeTile(data) {
    await canvas.scene.deleteEmbeddedDocuments("Tile", data);
}

export async function checkSettings() {

    let photoSensitive = game.settings.get("core", "photosensitiveMode");
    let sequencerPermissions = game.settings.get("sequencer", "permissions-effect-create");
    let sequencerEffectsEnabled = game.settings.get("sequencer", "effectsEnabled");
    let sequencerSoundsEnabled = game.settings.get("sequencer", "soundsEnabled");
    let aaEffectsEnabled = game.settings.get("autoanimations", "killAllAnim") === "off" ? false : true;
    let aaAutorecDisabled = game.settings.get("autoanimations", "disableAutoRec");

    return {
        coreSettings: {photoSensitive},
        sequencerSettings: {permission: sequencerPermissions, effects: sequencerEffectsEnabled, sounds: sequencerSoundsEnabled},
        aaSettings: {effects: aaEffectsEnabled, autorec: aaAutorecDisabled}
    }
}