import { trafficCop } from "../router/traffic-cop.js"
import systemData from "../system-handlers/system-data.js"

export async function runSwade(SwadeTokenOrActor, SwadeItem) {
    let data = { SwadeTokenOrActor, SwadeItem }
    let handler = await systemData.make(data);
    if (!handler.item || !handler.sourceToken) {
        return;
    }
    trafficCop(handler);
}