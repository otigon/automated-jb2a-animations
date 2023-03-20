import { trafficCop }       from "../router/traffic-cop.js"
import AAHandler            from "../system-handlers/workflow-data.js";
import { getRequiredData }  from "./getRequiredData.js";

export function systemHooks() {
    Hooks.on("createChatMessage", async (msg) => {
        if (msg.user.id !== game.user.id) { return };

        let compiledData = await getRequiredData({
            itemId: msg.flags?.ose?.itemId,
            actorId: msg.speaker?.actor,
            tokenId: msg.speaker?.token,
            workflow: msg,
        })
        runOse(compiledData)
    });
}

async function runOse(input) {
    const handler = await AAHandler.make(input);
    if (!handler?.item) { return; }
    trafficCop(handler);
}