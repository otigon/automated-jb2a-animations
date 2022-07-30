import { trafficCop } from "../router/traffic-cop.js"
import systemData from "../system-handlers/system-data.js"

export async function runDemonlord(data) {
    let handler = await systemData.make(data);
    if (!handler.item || !handler.sourceToken) {
        return;
    }
    trafficCop(handler);
}