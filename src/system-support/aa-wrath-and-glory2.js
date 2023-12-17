import { trafficCop }       from "../router/traffic-cop.js"
import AAHandler            from "../system-handlers/workflow-data.js";
import { getRequiredData }  from "./getRequiredData.js";
// WILL NEED REWORK AFTER THE V10 VERSION IS RELEASED
export function systemHooks() {
    Hooks.on("createChatMessage", async (msg) => {
        if (msg.user.id !== game.user.id) { return };

        let compiledData = await getRequiredData({
            actorId: msg.flags["wrath-and-glory"].testData.context.speaker.actor
            itemId: msg.flags["wrath-and-glory"].testData.testData.itemId,
            targetIds: msg.flags["wrath-and-glory"].testData.context.targets
            tokenId: actorId.getActiveTokens()[0],
            workflow: msg,
        })
        if (!compiledData.item) { return; }
        runWrathandGlory(compiledData)
    });
}

async function runWrathandGlory(input) {
    const handler = await AAHandler.make(input)
    trafficCop(handler);
}