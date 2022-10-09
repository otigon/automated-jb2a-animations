import { trafficCop } from "../router/traffic-cop.js"
import systemData from "../system-handlers/system-data.js"
import { AnimationState }   from "../AnimationState.js";

export function systemHooks() {
    Hooks.on("createChatMessage", async (msg) => {
        function extractItemId(content) {
            try {
                return $(content).attr("data-item-id");
            } catch (exception) {
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
    if (game.settings.get("autoanimations", "playonDamage")) {
        Hooks.on("damageRolled", async (data) => {
            Hooks.once("createChatMessage", async (msg) => {
                if (msg.user.id !== game.user.id) { return };
                runStarfinder(data, msg)
            });
        });
    } else {
        Hooks.on("attackRolled", async (data) => {
            Hooks.once("createChatMessage", async (msg) => {
                if (msg.user.id !== game.user.id) { return };
                runStarfinder(data, msg)
            });
        })
        Hooks.on("damageRolled", async (data) => {
            Hooks.once("createChatMessage", async (msg) => {
                if (msg.user.id !== game.user.id) { return };
                if (data.item.hasAttack) {
                    return;
                } else {
                    runStarfinder(data, msg)
                }
            });
        })
    }
}

async function runStarfinder(data, msg) {
    if (!AnimationState.enabled) { return; }
    const sfrpgData = { data, msg }
    const handler = await systemData.make(sfrpgData)
    //let tokenId = msg.data.speaker.token;
    //let sourceToken = canvas.tokens.get(tokenId);
    //let targets = Array.from(msg.user.targets);
    //let item = data.item;
    //AutoAnimations.playAnimation(sourceToken, targets, item)
    trafficCop(handler);
}