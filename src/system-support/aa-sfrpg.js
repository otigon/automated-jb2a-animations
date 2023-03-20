import { trafficCop }       from "../router/traffic-cop.js"
import AAHandler            from "../system-handlers/workflow-data.js";
import { getRequiredData }  from "./getRequiredData.js";

export function systemHooks() {
    // TO-DO: Create chat message parsing function. SFRPG errors out on trying to post an item to chat
    Hooks.on("createChatMessage", async (msg) => {
        function extractItemId(content) {
            try {
                return $(content).attr("data-item-id");
            } catch (exception) {
                console.log("COULD NOT GET ITEM ID")
                return null;
            }
        }
        const itemId = extractItemId(msg.content);
        if (!itemId) { return; }
        const tokenId = msg.speaker.token;
        const sourceToken = canvas.tokens.get(tokenId) || canvas.tokens.placeables.find(token => token.actor?.items?.get(itemId));

        if (!sourceToken) { return; }

        const item = sourceToken.actor?.items?.get(itemId)
        if (item.type === 'feat') { return; }

        if (!item.hasAttack && !item.hasDamage) {
            let findData = funkyTest(msg);
            let compiledData = await getRequiredData({itemId: findData.itemId, tokenId: findData.tokenId, actorId: findData.actorId, workflow: msg})
            runStarfinder(compiledData)
        }
    });
    Hooks.on("damageRolled", async (data) => {
        if (!game.settings.get("autoanimations", "playonDamage") && data.item?.hasAttack) { return; }
        Hooks.once("createChatMessage", async (msg) => {
            if (msg.user.id !== game.user.id) { return };
            let compiledData = await getRequiredData({item: data.item, tokenId: msg.speaker.token, actorId: msg.speaker.actor, workflow: data})
            runStarfinder(compiledData)
        });
    });
    Hooks.on("attackRolled", async (data) => {
        if (game.settings.get("autoanimations", "playonDamage") && data.item?.hasDamage) { return; }
        Hooks.once("createChatMessage", async (msg) => {
            if (msg.user.id !== game.user.id) { return };
            let compiledData = await getRequiredData({item: data.item, tokenId: msg.speaker.token, actorId: msg.speaker.actor, workflow: data})
            runStarfinder(compiledData)
        });
    })
}

async function runStarfinder(data) {
    if (!data.item) { return; }
    const handler = await AAHandler.make(data)
    trafficCop(handler);
}

function funkyTest(msg) {
    //let findItemId = $(msg.content).find(`[data-item-id]`);
    let filterItemId = $(msg.content).filter(`[data-item-id]`);
    let itemId = filterItemId?.[0]?.attributes?.['data-item-id']?.value || filterItemId?.prevObject?.[0]?.attributes?.['data-item-id']?.value;
    if (!itemId) {
        const systemId = game.system.id;
        let flags = msg.flags;
        itemId = flags.itemId ??
                flags.ItemId ??
                flags[systemId]?.itemId ??
                flags[systemId]?.ItemId ??
                msg.rolls?.[0]?.options?.itemId
    }

    let filterTokenId = $(msg.content).filter(`[data-token-id]`);
    let tokenId = filterTokenId?.[0]?.attributes?.['data-token-id']?.value || filterTokenId?.prevObject?.[0]?.attributes?.['data-token-id']?.value;
    let splitTokenId = tokenId?.split(".");
    if (splitTokenId?.length > 1) {
        tokenId = splitTokenId[splitTokenId.length - 1]
    }

    let filterActorId = $(msg.content).filter(`[data-actor-id]`);
    let actorId = filterActorId?.[0]?.attributes?.['data-actor-id']?.value || filterActorId?.prevObject?.[0]?.attributes?.['data-actor-id']?.value;

    return {itemId, tokenId, actorId}
}
