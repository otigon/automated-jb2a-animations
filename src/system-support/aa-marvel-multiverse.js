import { debug }            from "../constants/constants.js";
import { trafficCop }       from "../router/traffic-cop.js";
import AAHandler            from "../system-handlers/workflow-data.js";
import { getRequiredData }  from "./getRequiredData.js";

// DnD5e System hooks provided to run animations
export function systemHooks() {

    Hooks.on("marvel-multiverse.rollAttack", async (item, roll) => {
        let playonAttack = game.settings.get('autoanimations', 'playonAttackCore')
        if (item.attack && playonAttack) { return; }   
        attack(await getRequiredData({item, actor: item.actor, workflow: item}))
    })
    Hooks.on("marvel-multiverse.calcDamage", async (item, roll) => {
        let playonDamage = game.settings.get('autoanimations', 'playonDamageCore')
        if (item.attack && !playonDamage) { return; }
        damage(await getRequiredData({item, actor: item.actor, workflow: item}))
    })

}

/**
 * 
 * @param {Boolean} attack // Checks if the item has Attack
 *  
 */

async function attack(input) {
    debug("Attack rolled, checking for animations");
    const handler = await AAHandler.make(input)
    if (!handler?.item || !handler?.sourceToken) { console.log("Automated Animations: No Item or Source Token", handler); return;}
    trafficCop(handler)
}
async function damage(input) {
    debug("Damage ready, checking for animations")
    const handler = await AAHandler.make(input)
    if (!handler?.item || !handler?.sourceToken) { console.log("Automated Animations: No Item or Source Token", handler); return;}
    trafficCop(handler)
}