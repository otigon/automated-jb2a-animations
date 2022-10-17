import { trafficCop }       from "../router/traffic-cop.js"
import systemData           from "../system-handlers/system-data.js"
import { AnimationState }   from "../AnimationState.js";
import { getRequiredData }  from "./getRequiredData.js";

export function systemHooks() {
    Hooks.on("wfrp4e:rollWeaponTest", async (data, info) => {
        if (game.user.id !== info.user || !AnimationState.enabled) { return }
        let compiledData = await getRequiredData({
            item: data.weapon,
            targets: data.context?.targets,
            tokenId: info.speaker?.token,
            actorId: info.speaker?.actor,
            workflow: data
        })
        runWarhammer(compiledData)
    });
    Hooks.on("wfrp4e:rollPrayerTest", async (data, info) => {
        if (data.result.outcome != "success" && game.settings.get('autoanimations', 'castOnlyOnSuccess')) { return }
        let compiledData = await getRequiredData({
            item: data.prayer,
            targets: data.context?.targets,
            tokenId: info.speaker?.token,
            actorId: info.speaker?.actor,
            workflow: data
        })
        runWarhammer(compiledData)
    });
    Hooks.on("wfrp4e:rollCastTest", async (data, info) => {
        if (game.user.id !== info.user || !AnimationState.enabled) { return }
        if (data.result.castOutcome != "success" && game.settings.get('autoanimations', 'castOnlyOnSuccess')) { return }
        let compiledData = await getRequiredData({
            item: data.spell,
            targets: data.context?.targets,
            tokenId: info.speaker?.token,
            actorId: info.speaker?.actor,
            workflow: data
        })
        runWarhammer(compiledData)
    });
    Hooks.on("wfrp4e:rollTraitTest", async (data, info) => {
        if (game.user.id !== info.user || !AnimationState.enabled) { return }
        let compiledData = await getRequiredData({
            item: data.prayer,
            targets: data.context?.targets,
            tokenId: info.speaker?.token,
            actorId: info.speaker?.actor,
            workflow: data
        })
        runWarhammer(compiledData)
    });
    Hooks.on("wfrp4e:rollTest", async (data, info) => {
        if (game.user.id !== info.user || !AnimationState.enabled) { return }
        if (data.result.outcome != "success" && game.settings.get('autoanimations', 'castOnlyOnSuccess')) { return }
        if (!data.skill) { return }
        let compiledData = await getRequiredData({
            item: data.skill,
            targets: data.context?.targets,
            tokenId: info.speaker?.token,
            actorId: info.speaker?.actor,
            workflow: data
        })
        runWarhammer(compiledData)
    });
}

async function runWarhammer(data) {
    const handler = await systemData.make(data);
    if (!handler.item) { return; }
    trafficCop(handler);
}

/*
async function wfrpWeapon(data, info) {
    let handler = await systemData.make(data, );
    trafficCop(handler);
}
async function wfrpPrayer(data, info) {
    let handler = await systemData.make({data, info}, null, { item: data.prayer, targets: data.context?.targets, info: info });
    trafficCop(handler);
}
async function wfrpCast(data, info) {
    let handler = await systemData.make({ item: data.spell, targets: data.context?.targets, info: info });
    trafficCop(handler);
}
async function wfrpTrait(data, info) {
    let handler = await systemData.make({ item: data.trait, targets: data.context?.targets, info: info });
    trafficCop(handler);
}
async function wfrpSkill(data, info) {
    let handler = await systemData.make({ item: data.skill, targets: data.context?.targets, info: info });
    trafficCop(handler);
}
*/