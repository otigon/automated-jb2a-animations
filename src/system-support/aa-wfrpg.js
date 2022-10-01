import { trafficCop } from "../router/traffic-cop.js"
import systemData from "../system-handlers/system-data.js"
import { AnimationState }   from "../AnimationState.js";

export function systemHooks() {
    Hooks.on("wfrp4e:rollWeaponTest", async (data, info) => {
        wfrpWeapon(data, info)
    });
    Hooks.on("wfrp4e:rollPrayerTest", async (data, info) => {
        wfrpPrayer(data, info)
    });
    Hooks.on("wfrp4e:rollCastTest", async (data, info) => {
        wfrpCast(data, info)
    });
    Hooks.on("wfrp4e:rollTraitTest", async (data, info) => {
        wfrpTrait(data, info)
    });
    Hooks.on("wfrp4e:rollTest", async (data, info) => {
        wfrpSkill(data, info)
    });
}

async function wfrpWeapon(data, info) {
    if (game.user.id !== info.user || !AnimationState.enabled) { return }
    let handler = await systemData.make({ item: data.weapon, targets: data.context?.targets, info: info });
    trafficCop(handler);
}
async function wfrpPrayer(data, info) {
    if (game.user.id !== info.user || !AnimationState.enabled) { return }
    if (data.result.outcome != "success" && game.settings.get('autoanimations', 'castOnlyOnSuccess')) { return }
    let handler = await systemData.make({ item: data.prayer, targets: data.context?.targets, info: info });
    trafficCop(handler);
}
async function wfrpCast(data, info) {
    if (game.user.id !== info.user || !AnimationState.enabled) { return }
    if (data.result.castOutcome != "success" && game.settings.get('autoanimations', 'castOnlyOnSuccess')) { return }
    let handler = await systemData.make({ item: data.spell, targets: data.context?.targets, info: info });
    trafficCop(handler);
}
async function wfrpTrait(data, info) {
    if (game.user.id !== info.user || !AnimationState.enabled) { return }
    let handler = await systemData.make({ item: data.trait, targets: data.context?.targets, info: info });
    trafficCop(handler);
}
async function wfrpSkill(data, info) {
    if (game.user.id !== info.user || !AnimationState.enabled) { return }
    if (data.result.outcome != "success" && game.settings.get('autoanimations', 'castOnlyOnSuccess')) { return }
    if (!data.skill) { return }
    let handler = await systemData.make({ item: data.skill, targets: data.context?.targets, info: info });
    trafficCop(handler);
}