import { trafficCop } from "../router/traffic-cop.js"
import AAHandler from "../system-handlers/workflow-data.js";
import { getRequiredData } from "./getRequiredData.js";

export function systemHooks() {
    Hooks.on("createChatMessage", async (msg) => { checkMessage(msg) });
}

async function checkMessage(msg) {
    if (msg.user.id !== game.user.id) { 
        return 
    };

    let flags = msg.flags?.SalvageUnion
    let compiledData = await getRequiredData({
        item: flags?.item,
        actorId: msg.speaker?.actor,
        tokenId: msg.speaker?.token,
        sceneId: msg.speaker?.scene,
        alias: msg.speaker?.alias,
        extraNames: [],
        workflow: msg,
    })

    const handler = await AAHandler.make(compiledData)
    trafficCop(handler);
}