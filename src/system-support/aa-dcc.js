import { trafficCop } from "../router/traffic-cop.js"
import systemData from "../system-handlers/system-data.js"
import { AnimationState }   from "../AnimationState.js";

export function systemHooks() {
    Hooks.on("createChatMessage", async (msg) => {  runDcc(msg) });
}

async function runDcc(input) {
    if (input.user.id !== game.user.id || !AnimationState.enabled) { return };

    if (!game.settings.get('dcc', 'useStandardDiceRoller')) {
        let handler = await systemData.make(input)
        if (!handler.item || !handler.sourceToken) {
            return;
        }
        trafficCop(handler);
    } else if (input.flags?.dcc?.RollType === "Damage" || input.flags?.dcc?.RollType === "SpellCheck") {
        let handler = await systemData.make(input)
        if (!handler.item || !handler.sourceToken) {
            return;
        }
        trafficCop(handler);
    }
}