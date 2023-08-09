import { trafficCop }       from "../router/traffic-cop.js"
import AAHandler            from "../system-handlers/workflow-data.js";
import { getRequiredData }  from "./getRequiredData.js";

export function systemHooks() {
    Hooks.on("DL.Action", async (data) => {
        const eventType = data.type

        let compiledData = await getRequiredData({
            itemId: data.itemId,
            token: data.sourceToken,
            targets: Array.isArray(data.targets) ? data.targets : Array.from(data.targets),
            hitTargets: data.hitTargets ? Array.isArray(data.hitTargets) ? data.hitTargets : Array.from(data.hitTargets) : data.targets ? Array.isArray(data.targets) ? data.targets : Array.from(data.targets) : [],
            workflow: data
        })
        if (!compiledData.item) { return; }
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
            }
            if (game.settings.get("autoanimations", "playtrigger") === "applydamage") {
                return commonEventTypes.concat(["apply-damage"]).includes(eventType)
            }
            if (game.settings.get("autoanimations", "playtrigger") === "rollattack") {
                return commonEventTypes.concat(["roll-attack", "use-spell", "use-talent"]).includes(eventType);
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
    const handler = await AAHandler.make(data)
    trafficCop(handler);
}
