import { trafficCop }       from "../router/traffic-cop.js"
import AAHandler            from "../system-handlers/workflow-data.js";
import { debug }            from "../constants/constants.js";
import { getRequiredData }  from "./getRequiredData.js";

export function systemHooks() {
    Hooks.on("wfrp4e:rollWeaponTest", async (data, info) => {
        if (game.user.id !== info.user) { return }
        let compiledData = await getRequiredData({
            item: data.weapon,
            targets: compileTargets(data.context?.targets),
            tokenId: info.speaker?.token,
            actorId: info.speaker?.actor,
            workflow: data
        })
        compiledData.targets = data.context?.targets ? Array.from(data.context?.targets).map(token => canvas.tokens.get(token.token)) : [];
        runWarhammer(compiledData)
    });
    Hooks.on("wfrp4e:rollPrayerTest", async (data, info) => {
        if (data.result.outcome != "success" && game.settings.get('autoanimations', 'castOnlyOnSuccess')) { return }
        let compiledData = await getRequiredData({
            item: data.prayer,
            targets: compileTargets(data.context?.targets),
            tokenId: info.speaker?.token,
            actorId: info.speaker?.actor,
            workflow: data
        })
        runWarhammer(compiledData)
    });
    Hooks.on("wfrp4e:rollCastTest", async (data, info) => {
        if (game.user.id !== info.user) { return }
        if (data.result.castOutcome != "success" && game.settings.get('autoanimations', 'castOnlyOnSuccess')) { return }
        let compiledData = await getRequiredData({
            item: data.spell,
            targets: compileTargets(data.context?.targets),
            tokenId: info.speaker?.token,
            actorId: info.speaker?.actor,
            workflow: data
        })
        runWarhammer(compiledData)
    });
    Hooks.on("wfrp4e:rollTraitTest", async (data, info) => {
        if (game.user.id !== info.user) { return }
        let compiledData = await getRequiredData({
            item: data.trait,
            targets: compileTargets(data.context?.targets),
            tokenId: info.speaker?.token,
            actorId: info.speaker?.actor,
            workflow: data
        })
        runWarhammer(compiledData)
    });
    Hooks.on("wfrp4e:rollTest", async (data, info) => {
        if (game.user.id !== info.user) { return }
        if (data.result.outcome != "success" && game.settings.get('autoanimations', 'castOnlyOnSuccess')) { return }
        if (!data.skill) { return }
        let compiledData = await getRequiredData({
            item: data.skill,
            targets: compileTargets(data.context?.targets),
            tokenId: info.speaker?.token,
            actorId: info.speaker?.actor,
            workflow: data
        })
        runWarhammer(compiledData)
    });
    
    Hooks.on("createMeasuredTemplate", async (template, data, userId) => {
        if (userId !== game.user.id) { return };
        if (!template.flags?.wfrp4e?.itemuuid) { return; } 
        const uuid = template.flags.wfrp4e.itemuuid;
        templateAnimation(await getRequiredData({itemUuid: uuid, templateData: template, workflow: template, isTemplate: true}))
    });
}

async function runWarhammer(data) {
    if (!data.item) { return; }
    const handler = await AAHandler.make(data)
    trafficCop(handler);
}

function compileTargets(targets) {
    if (!targets) { return []; }
    return Array.from(targets).map(token => canvas.tokens.get(token.token));
}

async function templateAnimation(input) {
    debug("Template placed, checking for animations")
    if (!input.item) { 
        debug("No Item could be found")
        return;
    }
    const handler = await AAHandler.make(input)
    trafficCop(handler)
}