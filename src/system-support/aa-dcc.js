import { trafficCop }       from "../router/traffic-cop.js"
import systemData           from "../system-handlers/system-data.js"
import { AnimationState }   from "../AnimationState.js";
import { getRequiredData }  from "./getRequiredData.js";

export function systemHooks() {
    Hooks.on("createChatMessage", async (msg) => {
        if (msg.user.id !== game.user.id || !AnimationState.enabled) { return };

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
        let handler = await systemData.make(input)
        if (!handler.item) {
            return;
        }
        trafficCop(handler);
    } else if (input.flags?.dcc?.RollType === "Damage" || input.flags?.dcc?.RollType === "SpellCheck") {
        let handler = await systemData.make(input)
        if (!handler.item) {
            return;
        }
        trafficCop(handler);
    }
}