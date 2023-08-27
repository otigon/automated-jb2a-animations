import { AnimationState }   from "../AnimationState.js";
import { debug }            from "../constants/constants.js";
import { trafficCop }       from "../router/traffic-cop.js";
import AAHandler            from "../system-handlers/workflow-data.js";
import { getRequiredData }  from "./getRequiredData.js";

export function systemHooks() {
    Hooks.on("renderChatMessage", async (msg) => {
        let rawDataMsg = msg.getFlag('anarchy','message-data');
        if (!rawDataMsg){
            return;
        }
        const anarchyData = JSON.parse(msg.getFlag('anarchy','message-data'));
        checkChatMessageAnarchy(msg, anarchyData);
    });
}

async function checkChatMessageAnarchy(msg, anarchyData) {
    if (msg.user.id !== game.user.id || !AnimationState.enabled) { 
        return;
    }

    const compiledData = await computeCompiledDataAnarchy(msg, anarchyData);
    if (!compiledData) { 
        return;
    }

    if (await tryAnnimationWith(compiledData)) {
        return;
    }

    // Depending on the type of the attack (e.g., ranged, melee), you can add more cases
    switch (anarchyData.attackRoll.mode) {
        case "weapon":
            const weaponName = anarchyData.attackRoll.weapon.id; // Assuming the weapon id is a good fallback
            if (weaponName && await tryAnnimationWith(compiledData, weaponName)) {
                return;
            }
            break;
        // Add cases for other modes if needed
    }

    // If no specific mode matches, try using the skill name for animation
    const skill = anarchyData.attackRoll.skill.id;
    if (skill && await tryAnnimationWith(compiledData, skill)) {
        return;
    }
}

async function computeCompiledDataAnarchy(msg, anarchyData) {
    let actor = game.actors.get(anarchyData?.attackRoll?.actor?.id);
    debug('Anarchy actor', actor);
    let weaponId = anarchyData?.attackRoll?.weapon.id;
    let item = {
        id: weaponId,
        name: actor?.items?.get(weaponId)?.name,
    };
    
    debug('Anarchy content to  getRequiredData:', {
        item: item,
        actorId: actor,
    });
    const compiledData = await getRequiredData({
        item: item,
        actorId: msg.speaker?.actor,
        workflow: msg,
    });

    return compiledData;
}

async function tryAnnimationWith(compiledData, itemNameOverride) {
    if (itemNameOverride) {
        compiledData.item = {
            name: itemNameOverride
        }
    }

    const handler = await AAHandler.make(compiledData);
    if (handler?.item && handler.sourceToken) { 
        trafficCop(handler);
        return true;
    }

    return false;
}
