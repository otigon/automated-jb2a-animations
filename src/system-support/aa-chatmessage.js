import { debug }            from "../constants/constants.js";
import { trafficCop }       from "../router/traffic-cop.js"
import AAHandler            from "../system-handlers/workflow-data.js";
import { AnimationState }   from "../AnimationState.js";
import { getRequiredData }  from "./getRequiredData.js";

export function systemHooks() {
    Hooks.on("createChatMessage", async (msg) => {checkChatMessage(msg) });
}

async function checkChatMessage(msg) {
    if (msg.user.id !== game.user.id || !AnimationState.enabled) { return };

    let findData = funkyTest(msg);
    if (!findData.itemId) { return; }
    let item = msg.item ?? msg.itemSource;
    let compiledData = await getRequiredData({
        itemId: findData.itemId,
        item: item,
        actorId: findData.actorId || msg.speaker?.actor,
        tokenId: findData.tokenId || msg.speaker?.token,
        workflow: msg,
    })
    const handler = await AAHandler.make(compiledData)
    if (!handler) { return; }
    if (!handler.item || !handler.sourceToken) { debug("No Item or Source Token", handler.item, handler.sourceToken); return;}
    trafficCop(handler);
}
/*
function findItemId(msg) {
    const systemId = game.system.id;
    let itemId;
    itemId = extractItemId(msg);
    if (!itemId) {
        const flags = msg.flags;
        itemId = flags.itemId ??
                flags.ItemId ??
                flags[systemId]?.itemId ??
                flags[systemId]?.ItemId ??
                msg.rolls[0]?.options?.itemId

    }
    return itemId;
}

function extractItemId(msg) {
    try {
        return $(msg.content).attr("data-item-id");
    } catch (exception) {
        console.log("COULD NOT GET ITEM ID")
        return null;
    }
}
*/
function funkyTest(msg) {
    let findItemId = $(msg.content).find(`[data-item-id]`);
    let itemId = findItemId?.[0]?.attributes?.['data-item-id']?.value;

    let findTokenId = $(msg.content).find(`[data-item-id]`);
    let tokenId = findTokenId?.[0]?.attributes?.['data-token-id']?.value;

    let findActorId = $(msg.content).find(`[data-actor-id]`);
    let actorId = findActorId?.[0]?.attributes?.['data-token-id']?.value;

    return {itemId, tokenId, actorId}
}
