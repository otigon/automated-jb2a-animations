import { trafficCop } from "../router/traffic-cop.js"
import systemData from "../system-handlers/system-data.js"

/*
Known Systems Working at Default level
case "a5e":
case "cyphersystem":
case "alienrpg":
case "pf1":
case "D35E":
case "forbidden-lands":
case "starwarsffg":
case 'ose':
*/

export function systemHooks() {
    Hooks.on("createChatMessage", async (msg) => {runStandard(msg) });
}

async function runStandard(msg) {
    if (msg.user.id !== game.user.id) { return };
    let handler = await systemData.make(msg);
    if (!handler.item || !handler.sourceToken) {
        return;
    }
    trafficCop(handler);
}