import { AnimationState } from "../AnimationState.js";
import { debug } from "../constants/constants.js";
import { trafficCop } from "../router/traffic-cop.js";
import AAHandler from "../system-handlers/workflow-data.js";
import { getRequiredData } from "./getRequiredData.js";


export function systemHooks() {
    Hooks.on("createChatMessage", async (msg) => {checkChatMessage(msg) });
}

const TEST = {
    Melee: 'MeleeAttackTest',
    Thrown: 'ThrownAttackTest',
    Range: 'RangedAttackTest',
    Defense: 'PhysicalDefenseTest',
    Spell: 'SpellCastingTest',
    Drain: 'DrainTest',
    Skill: 'SkillTest',
}


function extractItemId(content) {
    try {
        return JSON.parse(msg.flags.anarchy['message-data']);
    } catch (exception) {
        console.log("COULD NOT GET ITEM ID")
        return null;
    }
};

async function checkChatMessage(msg) {
    if (msg.user.id !== game.user.id || !AnimationState.enabled) {
        return;
    }
    //msg.flags.anarchy['message-data']
    
    messageData = extractItemId(msg);
    let actorId =messageData.targeting.attackerTokenId;              // getting actor id
    let targets = Array.from(messageData.targeting.targetedTokenIds); // getting targets array
    let weaponId = messageData.weapon.id;            // getting item that is a weapon id


    let compiledData = await getRequiredData({
        item: weaponId,
        actor: actorId,
        targets: targets,
        workflow: weaponId,        
    })

    //5e example
    //await getRequiredData({item, actor: item.actor, workflow: item, rollAttackHook: {item, roll}, 
        //spellLevel})

    // Assuming Shadowrun Anarchy system uses a unique identifier like 'anarchyRoll'
    /*const roll = msg.flags?.anarchy?.anarchyRoll;
    if (!roll) {
        return;
    }*/

    if (!compiledData.item) { return; }
    runShadowrunAnarchy(compiledData)

}

// Export this module for other scripts to use
async function runShadowrunAnarchy(input) {
    const handler = await AAHandler.make(input)
    trafficCop(handler);
}
