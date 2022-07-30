import { trafficCop } from "../router/traffic-cop.js"
import systemData from "../system-handlers/system-data.js"

export async function runStarfinder(data, msg) {
    const sfrpgData = { data, msg }
    const handler = await systemData.make(sfrpgData)
    //let tokenId = msg.data.speaker.token;
    //let sourceToken = canvas.tokens.get(tokenId);
    //let targets = Array.from(msg.user.targets);
    //let item = data.item;
    //AutoAnimations.playAnimation(sourceToken, targets, item)
    trafficCop(handler);
}