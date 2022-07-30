import { trafficCop } from "../router/traffic-cop.js"
import systemData from "../system-handlers/system-data.js"

export async function runStandard(msg) {
    if (msg.user.id !== game.user.id) { return };
    let handler = await systemData.make(msg);
    if (!handler.item || !handler.sourceToken) {
        return;
    }
    trafficCop(handler);
}