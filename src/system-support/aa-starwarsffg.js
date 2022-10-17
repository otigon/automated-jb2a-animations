import { trafficCop }       from "../router/traffic-cop.js"
import systemData           from "../system-handlers/system-data.js"
import { AnimationState }   from "../AnimationState.js";
import { getRequiredData }  from "./getRequiredData.js";

export function systemHooks() {
    Hooks.on("ffgDiceMessage", async (roll) => {
        if (!AnimationState.enabled) { return };

        let compiledData = await getRequiredData({
            item: roll.data,
            workflow: roll,
        })
        runStarwarsffg(compiledData)
    });
}

async function runStarwarsffg(input) {
    let handler = await systemData.make(input)
    if (!handler.item) {
        return;
    }
    trafficCop(handler);
}