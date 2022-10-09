import { trafficCop } from "../router/traffic-cop.js"
import systemData from "../system-handlers/system-data.js"
import { AnimationState }   from "../AnimationState.js";

export function systemHooks() {
    Hooks.on("DL.Action", async (data) => { runDemonlord(data) });
}

async function runDemonlord(data) {
    if (!AnimationState.enabled) { return; }
    let handler = await systemData.make(data);
    if (!handler.item || !handler.sourceToken) {
        return;
    }
    trafficCop(handler);
}