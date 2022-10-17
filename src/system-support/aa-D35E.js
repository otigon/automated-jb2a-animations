import { trafficCop }       from "../router/traffic-cop.js"
import systemData           from "../system-handlers/system-data.js"
import { AnimationState }   from "../AnimationState.js";
import { getRequiredData }  from "./getRequiredData.js";
// WILL NEED REWORK AFTER THE V10 VERSION IS RELEASED
export function systemHooks() {
    Hooks.on("createChatMessage", async (msg) => {
        if (msg.user.id !== game.user.id || !AnimationState.enabled) { return };

        function extractItemId(content) {
            try {
                return $(content).attr("data-item-id");
            } catch (exception) {
                console.log("COULD NOT GET ITEM ID")
                return null;
            }
        }

        let compiledData = await getRequiredData({
            itemId: extractItemId(),
            actorId: msg.speaker?.actor,
            tokenId: msg.speaker?.token,
            workflow: msg,
        })
        runD35E(compiledData)
    });
}

async function runD35E(input) {
    let handler = await systemData.make(input)
    if (!handler.item) {
        return;
    }
    trafficCop(handler);
}