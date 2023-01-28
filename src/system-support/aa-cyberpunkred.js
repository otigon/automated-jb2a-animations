import { debug }            from "../constants/constants.js";
import { trafficCop }       from "../router/traffic-cop.js"
import AAHandler            from "../system-handlers/workflow-data.js";
import { getRequiredData }  from "./getRequiredData.js";

export function systemHooks() {
    Hooks.on("createChatMessage", async (msg) => {checkChatMessage(msg) });
}

async function checkChatMessage(msg) {
    if (msg.user.id !== game.user.id) { return };

    let findData = funkyTest(msg)

    if (!findData.itemId) { 
        debug("Could not extract Item ID from Chat Message HTML")
        return; 
    }

    let compiledData = await getRequiredData({
        itemId: findData.itemId,
        actorId: msg.speaker?.actor || findData.actorId,
        tokenId:  msg.speaker?.token || findData.tokenId,
        workflow: msg,
    })

    compiledData.fireMode = getFireModeOptions(compiledData);

    let isAmmo = checkAmmo(compiledData);
    if (isAmmo) { compiledData.ammoItem = isAmmo }
    const handler = await AAHandler.make(compiledData)
    if (!handler?.item || !handler?.sourceToken) { debug("No Item or Source Token", handler); return;}
    trafficCop(handler);
}

function getFireModeOptions(data) {
    let item = data.item || {};
    let id = item.id;
    let parent = item.parent;
    const fireMode = parent?.flags?.["cyberpunk-red-core"]?.[`firetype-${id}`]
    /**
     * Fire Mode types
     * aimed
     * autofire
     * suppressive
     */
    let autofireEnabled = game.settings.get('autoanimations', 'autofire');
    if (!fireMode || !autofireEnabled) { return null; } else {
        data.forceMiss = fireMode === "suppressive";
        data.overrideRepeat = fireMode === "suppressive" || fireMode === "autofire" ? 10 : false;
    }
}

function checkAmmo(data) {
    let item = data.item || {};
    let token = data.token;
    let ammoId = item.system?.magazine?.ammoId?.split('.') ?? item.system?.magazine?.ammoData?.uuid?.split('.');


    let ammoItem;
    if (ammoId) {
        let trueId = ammoId[ammoId.length - 1];
        ammoItem = token.actor?.items?.get(trueId);
    }
    return ammoItem;
}

function funkyTest(msg) {
    let findItemId = $(msg.content).find(`[data-item-id]`);
    let itemId = findItemId?.[0]?.attributes?.['data-item-id']?.value;

    let findTokenId = $(msg.content).find(`[data-token-id]`);
    let tokenId = findTokenId?.[0]?.attributes?.['data-token-id']?.value;

    let findActorId = $(msg.content).find(`[data-actor-id]`);
    let actorId = findActorId?.[0]?.attributes?.['data-actor-id']?.value;

    return {itemId, tokenId, actorId}
}