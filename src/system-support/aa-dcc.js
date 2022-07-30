import { trafficCop } from "../router/traffic-cop.js"
import systemData from "../system-handlers/system-data.js"

export async function runDcc(input) {
    if (input.user.id !== game.user.id) { return };

    if (!game.settings.get('dcc', 'useStandardDiceRoller')) {
        let handler = await systemData.make(input)
        if (!handler.item || !handler.sourceToken) {
            return;
        }
        trafficCop(handler);
    } else if (input.data?.flags?.dcc?.RollType === "Damage" || input.data?.flags?.dcc?.RollType === "SpellCheck") {
        let handler = await systemData.make(input)
        if (!handler.item || !handler.sourceToken) {
            return;
        }
        trafficCop(handler);
    }
}