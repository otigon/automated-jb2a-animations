import { debug } from "../constants/constants.js";
import { trafficCop } from "../router/traffic-cop.js";
import systemData from "../system-handlers/system-data.js";

export function systemHooks() {
    Hooks.on("dnd5e.displayCard", async (item, chat, card) => {useItem({item, chat, card})});
    Hooks.on("dnd5e.rollAttack", async (item, roll) => {rollAttack({item, roll})})
    Hooks.on("dnd5e.rollDamage", async (item, roll) => {rollDamage({item, roll})})
    Hooks.on("createMeasuredTemplate", async (template, data, userId) => {templateItem({template, data, userId})})    
}

async function useItem(input, chat, card) {
    const animationNow = game.settings.get("autoanimations", "playonDamageCore");
    if (input.item?.hasAreaTarget || input.item?.hasAttack || input.item?.hasDamage) { return; }
    debug("Playing Animation on Item Use")
    let handler = await systemData.make(input);
    if (!handler.item || !handler.sourceToken) { console.log("Automated Animations: No Item or Source Token", handler.item, handler.sourceToken); return;}
    trafficCop(handler)
}
async function rollAttack(input) {
    const animationNow = game.settings.get("autoanimations", "playonDamageCore");
    if (input.item?.hasAreaTarget || (input.item?.hasDamage && animationNow)) { return; }
    debug("Playing Animation on Attack Roll")
    let handler = await systemData.make(input);
    if (!handler.item || !handler.sourceToken) { console.log("Automated Animations: No Item or Source Token", handler.item, handler.sourceToken); return;}
    trafficCop(handler)
}
async function rollDamage(input) {
    const animationNow = game.settings.get("autoanimations", "playonDamageCore");
    if (input.item?.hasAreaTarget || (input.item?.hasAttack && !animationNow)) { return; }
    debug("Playing Animation on Damage Roll")
    let handler = await systemData.make(input);
    if (!handler.item || !handler.sourceToken) { console.log("Automated Animations: No Item or Source Token", handler.item, handler.sourceToken); return;}
    trafficCop(handler)
}
async function templateItem(input) {
    if (input.userId !== game.user.id) { return };
    debug("Playing Animation on Template Placement")
    const itemUuid = input.template?.flags?.dnd5e?.origin;
    const item = itemUuid ? await fromUuid(itemUuid) : "";
    if (!item) { return; }
    let handler = await systemData.make({item: item});
    if (!handler.item || !handler.sourceToken) { console.log("Automated Animations: No Item or Source Token", handler.item, handler.sourceToken); return;}
    trafficCop(handler)
}

/*
export async function runDnd5e(msg) {
    if (msg.user.id !== game.user.id) { return };

    const animationNow = game.settings.get("autoanimations", "playonDamageCore");
    let handler;
    let rollType;
    switch (game.system.id) {
        case "dnd5e":
            handler = await systemData.make(msg);
            rollType = (msg.flags?.dnd5e?.roll?.type?.toLowerCase() ?? msg.flavor?.toLowerCase() ?? "pass");
            break;
        case "sw5e":
            handler = await systemData.make(msg);
            rollType = msg.flags?.sw5e?.roll?.type?.toLowerCase() ?? "pass";
            break;
    }

    if (!handler.item || !handler.sourceToken) {
        return;
    }

    switch (true) {
        case !handler.hasAttack && !handler.hasDamage:
            trafficCop(handler);
            break;
        case (handler.shouldPlayImmediately) && !rollType.includes("damage") && !rollType.includes("attack"):
            trafficCop(handler);
            break;
        case animationNow:
            if (rollType.includes("damage")) {
                if (handler.shouldPlayImmediately) { return; }
                trafficCop(handler);
            }
            break;
        case !animationNow:
            switch (true) {
                case game.modules.get("mre-dnd5e")?.active && game.settings.get("mre-dnd5e", "autoCheck") && !handler.hasAttack && handler.hasDamage && !rollType.includes("damage"):
                    trafficCop(handler);
                    break;
                case game.modules.get("mre-dnd5e")?.active && game.settings.get("mre-dnd5e", "autoCheck") && rollType.includes("damage"):
                    break;
                case rollType.includes("damage") && !handler.hasAttack:
                case rollType.includes('attack'):
                    if (handler.shouldPlayImmediately) { return; }
                    trafficCop(handler);
                    break;
                case game.modules.get("betterrolls5e")?.active && !handler.hasAttack && handler.hasDamage:
                    if (handler.shouldPlayImmediately) { return; }
                    trafficCop(handler);
                    break;
            }
            break;
    }
}
*/