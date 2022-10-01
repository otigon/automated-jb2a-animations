import { trafficCop } from "../router/traffic-cop.js"
import systemData from "../system-handlers/system-data.js"

export function systemHooks() {
    Hooks.on("createChatMessage", async (msg) => { runPf2e(msg) });
}

async function runPf2e(msg) {
    if (game.user.id !== msg.user.id) { return; }
    const handler = await systemData.make(msg);
    if (!handler.item || !handler.sourceToken) {
        return;
    }

    const itemType = handler.itemType;
    let damage; //= /*handler.item.damageValue ||*/ //handler.item?.data.data.damage?.length || handler.item?.data?.data?.damage?.value["0"]?.value;
    const spellType = handler.item?.system?.spellType?.value ?? "utility";
    const playOnDmg = game.settings.get("autoanimations", "playonDamageCore")
    if (handler.shouldPlayImmediately && !msg.flavor?.toLowerCase().includes("damage")) {
        trafficCop(handler);
        return;
    }
    if (handler.shouldPlayImmediately) { return };
    switch (itemType) {
        case "spell":
            damage = handler.item?.system?.damage?.value["0"]?.value;
            switch (spellType) {
                case "utility":
                    if (!damage) {
                        trafficCop(handler);
                    } else if (msg.flavor?.toLowerCase().includes("damage")) {
                        trafficCop(handler);
                    }
                    break;
                case "save":
                    if (!damage) {
                        trafficCop(handler);
                    } else if (msg.flavor?.toLowerCase().includes("damage")) {
                        trafficCop(handler);
                    }
                    break;
                case "heal":
                    if (msg.flavor?.toLowerCase().includes('healing')) {
                        trafficCop(handler);
                    }
                    if (handler.item.system?.category?.value === "focus") {
                        trafficCop(handler);
                    }
                    break;
                case "attack":
                    switch (playOnDmg) {
                        case true:
                            if (msg.flavor?.toLowerCase().includes("damage")) {
                                trafficCop(handler);
                            }
                            break;
                        default:
                            if (msg.flags.pf2e?.context?.type.includes("attack")) {
                                trafficCop(handler);
                            }
                    }
                    break;
            }
            break;
        case "melee":
        case "weapon":
            handlePf2eStrike(msg, handler, playOnDmg)
            break;
        case "consumable":
        case "armor":
        case "feat":
        case "action":
        case "effect":
            if (handler.item.rules.findIndex(x => x.key === "Strike") >= 0) {
                const wasHandled = handlePf2eStrike(msg, handler, playOnDmg);
                if (!wasHandled) {
                    trafficCop(handler);
                }
            }
            else {
                trafficCop(handler);
            }
            break;
    }

    function handlePf2eStrike(msg, handler, playOnDmg) {
        const isDamageRoll = !!msg.flags.pf2e?.damageRoll; /*msg.data.flavor?.toLowerCase().includes("damage")*/
        const isAttackRoll = msg.flags.pf2e?.context?.type.includes("attack");
        if (!isAttackRoll && !isDamageRoll) {
            return false;
        }
        switch (true) {
            case playOnDmg:
                if (isDamageRoll) {
                    trafficCop(handler);
                }
                break;
            default:
                if (isAttackRoll) {
                    trafficCop(handler);
                }
        }
        return true;
    }
    
}