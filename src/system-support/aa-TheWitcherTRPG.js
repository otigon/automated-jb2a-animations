import { debug } from "../constants/constants.js";
import { trafficCop } from "../router/traffic-cop.js"
import AAHandler from "../system-handlers/workflow-data.js";
import { getRequiredData } from "./getRequiredData.js";

export function systemHooks() {
    Hooks.on("createChatMessage", async (msg) => { checkMessage(msg) });
}

async function checkMessage(msg) {
    if (msg.user.id !== game.user.id) { return };

    let compiledData = await getRequiredData({
        item: msg.flags?.item,
        spell: msg.flags?.spell,
        attackSkill: msg.flags?.attackSkill,
        damage: msg.flags?.damage,
        actorId: msg.speaker?.actor,
        tokenId: msg.speaker?.token,
        sceneId: msg.speaker?.scene,
        alias: msg.speaker?.alias,
        extraNames: [],
        workflow: msg,
    })

    let attackSkillEnabled = game.settings.get('autoanimations', 'attackSkill');
    let damageEnabled = game.settings.get('autoanimations', 'damage');
    let spellEnabled = game.settings.get('autoanimations', 'spell');
    if (!attackSkillEnabled && !damageEnabled && !spellEnabled) { return null; }

    if (compiledData.attackSkill && attackSkillEnabled) {
        //all is fine
    } else if (compiledData.spell && spellEnabled) {
        compiledData.item = compiledData.spell;
    } else if (damageEnabled) {
        compiledData.item = { name: compiledData.damage ? "damage" : "no-damage" };
        compiledData.extraNames.push(compiledData.damage ? "damage" : "no-damage");
    } else {
        return null;
    }

    const handler = await AAHandler.make(compiledData)
    trafficCop(handler);
}