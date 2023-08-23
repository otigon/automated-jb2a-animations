import { trafficCop }       from "../router/traffic-cop.js"
import AAHandler            from "../system-handlers/workflow-data.js";
import { getRequiredData }  from "./getRequiredData.js";

export function systemHooks() {
  // Create queue to handle interaction between template and item.
  const queue = [];

  Hooks.on("createChatMessage", async (msg) => {
    if (msg.user.id !== game.user.id) { return };

    const item = await fromUuid(msg.flags?.a5e?.itemId);

    // Get from queue
    let templateData = [];
    while (queue.length && queue[0][0] === item.uuid) templateData.push(queue.shift()[1]);

    if (templateData.length) {
      templateData.forEach((data) => runA5e(data));
      return;
    }

    const compiledData = await getRequiredData({
      item: item,  
      itemUuid: msg.flags?.a5e?.itemId,
      actorId: msg.speaker?.actorId,
      tokenId: msg.speaker?.token,
      workflow: msg,
    });

    runA5e(compiledData);
  });

  Hooks.on('a5e.measuredTemplatePlaced', async (item, templateData, userId) => {
    if (userId !== game.user.id) return;
    if (templateData.length) templateData = templateData[0];
    else return;

    const compiledData = await getRequiredData({
      item,
      templateData: templateData,
      workflow: templateData,
      isTemplate: true,
    });

    // Add to queue
    queue.push([item.uuid, compiledData]);
  });
}

async function runA5e(input) {
  const handler = await AAHandler.make(input);
  if (!handler?.item || !handler?.sourceToken) return;
  trafficCop(handler);
}