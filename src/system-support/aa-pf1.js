import { trafficCop }       from "../router/traffic-cop.js"
import systemData           from "../system-handlers/system-data.js"
import { AnimationState }   from "../AnimationState.js";
import { getRequiredData }  from "./getRequiredData.js";

export function systemHooks() {
    Hooks.on("createChatMessage", async (msg) => {runPF1(msg) });
}

async function runPF1(msg) {
    if (msg.user.id !== game.user.id || !AnimationState.enabled) { return };
    debugger
    const item = msg.itemSource;
    const tokenId = msg.speaker?.token;

    const requiredData = await getRequiredData({item, tokenId})
    
    const handler = await systemData.make(null, null, requiredData);
    if (!handler.item || !handler.sourceToken) {
        return;
    }
    trafficCop(handler);
}