import { trafficCop }       from "../router/traffic-cop.js"
import AAHandler            from "../system-handlers/workflow-data.js";
import { getRequiredData }  from "./getRequiredData.js";

export function systemHooks() {
    Hooks.on("chatOutput", async (data) => {
        let compiledData = await getRequiredData({
           itemId: itemId,
           actorId: actorId,
           workflow: data,
       })
       runEd4(compiledData)
    });
}

async function runEd4(input) {
    const handler = await AAHandler.make(input);
    if (!handler) { return; }
    trafficCop(handler);
}
