import { trafficCop }       from "../router/traffic-cop.js"
import AAHandler            from "../system-handlers/workflow-data.js";
import { getRequiredData }  from "./getRequiredData.js";

const idLocations = [
    ['.magic-roll', 'data-spell-id'],
    ['.weapon-roll', 'data-weapon-id'],
    ['.ability-use', 'data-ability-id']
];

export function systemHooks() {
    Hooks.on("createChatMessage", async (msg) => {
        if (msg.user.id !== game.user.id) { return };

        // Extract the item id from the Roll Damage button.
        // The item id is only available on successful spells casts, weapon attacks, and ability uses.
        function extractItemId(content) {
            try {
                return idLocations.reduce(
                    (id, location) => id || $(content).find(location[0]).attr(location[1]),
                    null
                );
            } catch (exception) {
                console.log("COULD NOT GET ITEM ID")
                return null;
            }
        }

        let compiledData = await getRequiredData({
            itemId: extractItemId(msg.content),
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
