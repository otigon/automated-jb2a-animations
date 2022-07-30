import { trafficCop } from "../router/traffic-cop.js"
import systemData from "../system-handlers/system-data.js"

export async function wfrpWeapon(data, info) {
    if (game.user.id !== info.user) { return }
    let handler = await systemData.make({ item: data.weapon, targets: data.context?.targets, info: info });
    trafficCop(handler);
}
export async function wfrpPrayer(data, info) {
    if (game.user.id !== info.user) { return }
    if (data.result.outcome != "success" && game.settings.get('autoanimations', 'castOnlyOnSuccess')) { return }
    let handler = await systemData.make({ item: data.prayer, targets: data.context?.targets, info: info });
    trafficCop(handler);
}
export async function wfrpCast(data, info) {
    if (game.user.id !== info.user) { return }
    if (data.result.castOutcome != "success" && game.settings.get('autoanimations', 'castOnlyOnSuccess')) { return }
    let handler = await systemData.make({ item: data.spell, targets: data.context?.targets, info: info });
    trafficCop(handler);
}
export async function wfrpTrait(data, info) {
    if (game.user.id !== info.user) { return }
    let handler = await systemData.make({ item: data.trait, targets: data.context?.targets, info: info });
    trafficCop(handler);
}
export async function wfrpSkill(data, info) {
    if (game.user.id !== info.user) { return }
    if (data.result.outcome != "success" && game.settings.get('autoanimations', 'castOnlyOnSuccess')) { return }
    if (!data.skill) { return }
    let handler = await systemData.make({ item: data.skill, targets: data.context?.targets, info: info });
    trafficCop(handler);
}