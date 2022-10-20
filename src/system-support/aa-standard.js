import { trafficCop } from "../router/traffic-cop.js"
import systemData from "../system-handlers/system-data.js"
import { AnimationState }   from "../AnimationState.js";

/*
Known Systems Working at Default level
case "a5e":                                     Moved to it's own file
case "cyphersystem": // not updated to V10      Moved to it's own file, needs testing when it has V10 release
case "alienrpg": // not updated to V10          Moved to it's own file, needs testing when it has V10 release
case "pf1": -                                   Moved to it's own file
case "D35E": // not updated to V10              Moved to it's own file
case "forbidden-lands": -                       Moved to it's own file
case "starwarsffg":                             Moved to it's own file, new Hook
case 'ose':                                     Moved to it's own file
*/

export function systemHooks() {
    Hooks.on("createChatMessage", async (msg) => {runStandard(msg) });
}

async function runStandard(msg) {
    if (msg.user.id !== game.user.id || !AnimationState.enabled) { return };
    let handler = await systemData.make(msg);
    if (!handler.item || !handler.sourceToken) {
        return;
    }
    trafficCop(handler);
}