import { trafficCop }       from "../router/traffic-cop.js"
import AAHandler            from "../system-handlers/workflow-data.js";
import { getRequiredData }  from "./getRequiredData.js";

export function systemHooks() {
    Hooks.on("createChatMessage", async (msg) => {
        if (msg.user.id !== game.user.id) { return };
        const item = msg.itemSource;
        const tokenId = msg.speaker?.token;
        const actorId = msg.speaker?.actor;
        runPF1({item, tokenId, actorId, workflow: msg})
    });
}

async function runPF1(input) {
    const requiredData = await getRequiredData(input)
    if (!requiredData.item) { return; }
    const handler = await AAHandler.make(requiredData)
    trafficCop(handler);
}