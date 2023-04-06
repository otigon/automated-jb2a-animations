import { trafficCop }       from "../router/traffic-cop.js"
import AAHandler            from "../system-handlers/workflow-data.js";
import { getRequiredData }  from "./getRequiredData.js";

export function systemHooks() {
    Hooks.on("ds4.rollItem", async (data) => {
        let compiledData = await getRequiredData({
           itemId: data.id,
           actorId: data.actor,
           workflow: data,
       })
       runDs4(compiledData)
    });
}

async function runDs4(input) {
    const handler = await AAHandler.make(input);
    if (!handler) { return; }
    trafficCop(handler);
}