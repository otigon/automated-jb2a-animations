import { trafficCop }       from "../router/traffic-cop.js"
import AAHandler            from "../system-handlers/workflow-data.js";
import { getRequiredData }  from "./getRequiredData.js";

export function systemHooks() {
    Hooks.on("createChatMessage", async (msg) => {
        if (msg.user.id !== game.user.id) { return };

        let compiledData = await getRequiredData({
            itemId: msg.flags?.dcc?.ItemId,
            actorId: msg.speaker?.actor,
            tokenId: msg.speaker?.token,
            workflow: msg,
        })
        runDcc(compiledData)
    });
}

async function runDcc(input) {

    if (!game.settings.get('dcc', 'useStandardDiceRoller')) {
        const handler = await AAHandler.make(input)
        trafficCop(handler);
    } else if (input.flags?.dcc?.RollType === "Damage" || input.flags?.dcc?.RollType === "SpellCheck") {
        const handler = await AAHandler.make(input)
        trafficCop(handler);
    }
}