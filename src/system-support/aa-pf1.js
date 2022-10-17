import { trafficCop }       from "../router/traffic-cop.js"
import systemData           from "../system-handlers/system-data.js"
import { AnimationState }   from "../AnimationState.js";
import { getRequiredData }  from "./getRequiredData.js";

export function systemHooks() {
    Hooks.on("createChatMessage", async (msg) => {
        if (msg.user.id !== game.user.id || !AnimationState.enabled) { return };
        const item = msg.itemSource;
        const tokenId = msg.speaker?.token;
        const actorId = msg.speaker?.actor;
        runPF1({item, tokenId, actorId, workflow: msg})
    });
}

async function runPF1(input) {
    const requiredData = await getRequiredData(input)
    const handler = await systemData.make(requiredData);
    if (!handler.item) {
        return;
    }
    trafficCop(handler);
}