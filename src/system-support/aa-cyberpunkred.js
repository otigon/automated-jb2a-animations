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

    let findData = funkyTest(msg)
    if (!findData.itemId) { return; }

    let compiledData = await getRequiredData({
        itemId: findData.itemId,
        actorId: findData.actorId || msg.speaker?.actor,
        tokenId: findData.tokenId || tokenId || msg.speaker?.token,
        workflow: msg,
    })

    let isAmmo = checkAmmo(compiledData);
    if (isAmmo) { compiledData.ammoItem = isAmmo }
    const handler = await AAHandler.make(compiledData)
    if (!handler) { return; }
    if (!handler.item || !handler.sourceToken) { debug("No Item or Source Token", handler.item, handler.sourceToken); return;}
    trafficCop(handler);
}

function checkAmmo(data) {
    let item = data.item;
    let token = data.token;
    let ammoId = item.system?.magazine?.ammoId;

    let ammoItem;
    if (ammoId) {
        ammoItem = token.actor?.items?.get(ammoId);
    }
    return ammoItem;
}

function funkyTest(msg) {
    let findItemId = $(msg.content).find(`[data-item-id]`);
    let itemId = findItemId?.[0]?.attributes?.['data-item-id']?.value;

    let findTokenId = $(msg.content).find(`[data-item-id]`);
    let tokenId = findTokenId?.[0]?.attributes?.['data-token-id']?.value;

    let findActorId = $(msg.content).find(`[data-actor-id]`);
    let actorId = findActorId?.[0]?.attributes?.['data-token-id']?.value;

    return {itemId, tokenId, actorId}
}