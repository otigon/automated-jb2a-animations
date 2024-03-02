import { trafficCop }       from "../router/traffic-cop.js"
import AAHandler            from "../system-handlers/workflow-data.js";
import { getRequiredData }  from "./getRequiredData.js";

export function systemHooks() {
    Hooks.on("createChatMessage", async (msg) => {
        if (msg.user.id !== game.user.id) { return };

        // Extract the item id from the Roll Damage button.
        // The item id is only available on successful spells casts and weapon attacks.
        function extractItemId(content) {
            try {
                let itemId = $(content).find('.magic-roll').attr("data-spell-id");
                if (!itemId) {
                    itemId = $(content).find('.weapon-roll').attr("data-weapon-id");
                }
                return itemId;
            } catch (exception) {
                console.log("COULD NOT GET ITEM ID")
                return null;
            }
        }

        // Extract the target id from the Roll Damage button
        // Only supports single target
        function extractTargets(content) {
            try {
                let targetId =  $(content).find('.magic-roll').attr("data-target-id");
                if (!targetId) {
                    targetId = $(content).find('.weapon-roll').attr("data-target-id");;
                }
                let target = targetId ? fromUuidSync(targetId) : null;
                if (target instanceof TokenDocument) {
                    target = target.object;
                }
                return target ? [target] : null;
            } catch (exception) {
                console.log("COULD NOT GET ITEM ID")
                return null;
            }
        }

        let compiledData = await getRequiredData({
            itemId: extractItemId(msg.content),
            targets: extractTargets(msg.content),
            actorId: msg.speaker?.actor,
            tokenId: msg.speaker?.token,
            workflow: msg,
        })
        if (!compiledData.item) { return; }
        runDragonbane(compiledData);
    });
}

async function runDragonbane(input) {
    const handler = await AAHandler.make(input);
    trafficCop(handler);
}