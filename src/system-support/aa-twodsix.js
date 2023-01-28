import { trafficCop }       from "../router/traffic-cop.js"
import AAHandler            from "../system-handlers/workflow-data.js";
import { getRequiredData }  from "./getRequiredData.js";

export function systemHooks() {
    Hooks.on("createChatMessage", async (msg) => {
        if (msg.user.id !== game.user.id) { return };
        const flags = msg.flags?.twodsix ?? {};
        const itemUuid = flags.itemUUID;
        const tokenUuid = flags.tokenUUID;
        const actorUuid = flags.actorUUID;
        const rollClass = flags.rollClass;
        routeMessage({itemUuid, tokenUuid, actorUuid, workflow: msg, rollClass})
    });
}

async function routeMessage(input) {
    const requiredData = await getRequiredData(input);
    if (!requiredData.item) { return; }
    const hasDamage = requiredData.item.system?.damage ? true : false;
    const playtrigger = game.settings.get("autoanimations", "playtrigger")

    if (!hasDamage || (playtrigger === "onAttack" && input.rollClass !== "Damage")) {
        runTwoDSix(requiredData)
        return;
    }

    if (hasDamage && input.rollClass === "Damage" && playtrigger === "onDamage") {
        runTwoDSix(requiredData)
        return;
    }
}

async function runTwoDSix(data) {
    const handler = await AAHandler.make(data)
    trafficCop(handler);

}