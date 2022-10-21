import { trafficCop }       from "../router/traffic-cop.js"
import AAHandler            from "../system-handlers/workflow-data.js";
import { AnimationState }   from "../AnimationState.js";
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
            let data = {}
            runStarfinder(data, msg)
        }
    });
    Hooks.on("damageRolled", async (data) => {
        if (!AnimationState.enabled || (!game.settings.get("autoanimations", "playonDamage") && data.item?.hasAttack)) { return; }
        Hooks.once("createChatMessage", async (msg) => {
            if (msg.user.id !== game.user.id) { return };
            let compiledData = await getRequiredData({item: data.item, tokenId: msg.speaker.token, actorId: msg.speaker.actor, workflow: data})
            runStarfinder(compiledData)
        });
    });
    Hooks.on("attackRolled", async (data) => {
        if (!AnimationState.enabled || (game.settings.get("autoanimations", "playonDamage") && data.item?.hasDamage)) { return; }
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
    if (!handler) { return; }
    trafficCop(handler);
}