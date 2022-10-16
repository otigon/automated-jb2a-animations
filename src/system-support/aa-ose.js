import { trafficCop }       from "../router/traffic-cop.js"
import systemData           from "../system-handlers/system-data.js"
import { AnimationState }   from "../AnimationState.js";
import { getRequiredData }  from "./getRequiredData.js";

export function systemHooks() {
    Hooks.on("createChatMessage", async (msg) => {
        if (msg.user.id !== game.user.id || !AnimationState.enabled) { return };

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
    let handler = await systemData.make(input.workflow, null, input)
    if (!handler.item) {
        return;
    }
    trafficCop(handler);
}