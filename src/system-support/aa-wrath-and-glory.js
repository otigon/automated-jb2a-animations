import { trafficCop }       from "../router/traffic-cop.js"
import AAHandler            from "../system-handlers/workflow-data.js";
import { getRequiredData }  from "./getRequiredData.js";

export function systemHooks() {
    Hooks.on("createChatMessage", async (msg) => {
        if (msg.user.id !== game.user.id) { return };

        const systemName = 'wrath-and-glory';

        let compiledData = await getRequiredData({
            actorId: msg.speaker.actor ?? msg.flags[systemName].testData.context.speaker.actor,
            targets: compileTargets(msg.flags[systemName].testData.context.targets),
            itemId: msg.flags[systemName].testData.testData.itemId,
            workflow: msg,
        })
        if (!compiledData.item) { return; }
        runWrathandGlory(compiledData)
    });
}

function compileTargets(targets) {
  if (!targets) { return []; }
  return Array.from(targets).map(token => canvas.tokens.get(token._id));
}

async function runWrathandGlory(input) {
    const handler = await AAHandler.make(input);
    trafficCop(handler);
}