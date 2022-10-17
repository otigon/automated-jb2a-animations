import { trafficCop }       from "../router/traffic-cop.js"
import systemData           from "../system-handlers/system-data.js"
import { AnimationState }   from "../AnimationState.js";
import { getRequiredData }  from "./getRequiredData.js";

export function systemHooks() {
    Hooks.on("DL.Action", async (data) => {
        if (!AnimationState.enabled) { return; }
        const eventType = data.type

        let compiledData = await getRequiredData({
            itemId: data.itemId,
            hitTargets: Array.isArray(data.hitTargets) ? data.hitTargets : Array.from(data.hitTargets),
            token: data.sourceToken,
            targets: Array.isArray(data.targets) ? data.targets : Array.from(data.targets),
            workflow: data
        })
        if (game.settings.get("autoanimations", "playtrigger") === "hits") {
            targets = hitTargets;
        }

        const canRunAnimations = () => {
            const commonEventTypes = ["apply-healing"]
            if (!compiledData.item?.hasDamage() && !compiledData.item?.hasHealing()) {
                return true
            }
            if (game.settings.get("autoanimations", "playtrigger") === "rolldamage") {
                return commonEventTypes.concat(["roll-damage"]).includes(eventType)
            } if (game.settings.get("autoanimations", "playtrigger") === "applydamage") {
                return commonEventTypes.concat(["apply-damage"]).includes(eventType)
            }
            return commonEventTypes.concat(["roll-attack"]).includes(eventType)
        }

        if (eventType && !canRunAnimations()) {
            return {};
        }

        runDemonlord(compiledData)
    });
}

async function runDemonlord(data) {
    let handler = await systemData.make(data);
    if (!handler.item) { return; }
    trafficCop(handler);
}