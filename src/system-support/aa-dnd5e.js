import { debug }            from "../constants/constants.js";
import { trafficCop }       from "../router/traffic-cop.js";
import systemData           from "../system-handlers/system-data.js";
import { AnimationState }   from "../AnimationState.js";
import { getRequiredData }  from "./getRequiredData.js";

// DnD5e System hooks provided to run animations
export function systemHooks() {
    //Hooks.on("dnd5e.displayCard", async (item, chat, options) => {useItem({item, chat, options})});
    Hooks.on('dnd5e.useItem', async (item, config, options) => {
        if (item?.hasAreaTarget || item.hasAttack || item.hasDamage || !AnimationState.enabled) { return; }
        useItem({item, actor: item.actor})
    })
    Hooks.on("dnd5e.rollAttack", async (item, roll) => {
        let playOnDamage = game.settings.get('autoanimations', 'playonDamageCore')
        if (!AnimationState.enabled || item.hasAreaTarget || (item.hasDamage && playOnDamage)) { return; }    
        attack({item, actor: item.actor})
    })
    Hooks.on("dnd5e.rollDamage", async (item, roll) => {
        let playOnDamage = game.settings.get('autoanimations', 'playonDamageCore')
        if (!AnimationState.enabled || item.hasAreaTarget || (item.hasAttack && !playOnDamage)) { return; }    
        damage({item, actor: item.actor})
    })
    Hooks.on("createMeasuredTemplate", async (template, data, userId) => {
        if (userId !== game.user.id || !AnimationState.enabled) { return };
        templateAnimation({itemUuid: template.flags?.dnd5e?.origin, template})
    })    
}

/**
 * 
 * @param {Boolean} hasAreaTarget // Checks to see if the item has an AOE template
 * @param {Boolean} hasAttack // Checks if the item has Attack
 * @param {Boolean} hasDamage // Checks if the item has Damage
 * @param {Boolean} AnimationState // Checks if Animations are disabled
 *  
 */

async function useItem(input) {
    debug("Item used, checking for animations")
    let requiredData = await getRequiredData(input);   
    const handler = await systemData.make(input.item, null, requiredData)
    //let handler = await systemData.make(input);
    if (!handler.item || !handler.sourceToken) { console.log("Automated Animations: No Item or Source Token", handler.item, handler.sourceToken); return;}
    trafficCop(handler)
}

async function attack(input) {
    let requiredData = await getRequiredData(input);
    checkAmmo(requiredData)
    checkReach(requiredData)
    debug("Attack rolled, checking for animations");
    const handler = await systemData.make(input.item, null, requiredData)
    //let handler = await systemData.make(input);
    if (!handler.item || !handler.sourceToken) { console.log("Automated Animations: No Item or Source Token", handler.item, handler.sourceToken); return;}
    trafficCop(handler)
}

async function damage(input) {
    let requiredData = await getRequiredData(input);   
    checkAmmo(requiredData)
    checkReach(requiredData)
    debug("Damage rolled, checking for animations")
    const handler = await systemData.make(input.item, null, requiredData)
    //let handler = await systemData.make(input);
    if (!handler.item || !handler.sourceToken) { console.log("Automated Animations: No Item or Source Token", handler.item, handler.sourceToken); return;}
    trafficCop(handler)
}

async function templateAnimation(input) {
    debug("Template placed, checking for animations")
    let requiredData = await getRequiredData(input);
    requiredData.templateData = input.template;
    let handler = await systemData.make(input.item, null, requiredData);
    if (!handler.item) { console.log("Automated Animations: No Item or Source Token", handler.item, handler.sourceToken); return;}
    trafficCop(handler)
}

function checkAmmo(data) {
    const ammo = data.item?.flags?.autoanimations?.fromAmmo;
    const ammoType = data.item?.system?.consume?.type;
    data.item = ammo && ammoType === "ammo" ? data.token?.actor?.items?.get(data.item?.system?.consume?.target) : data.item;
}

function checkReach(data) {
    let reach = 0;
    if (data.item.system?.properties?.rch) {
        reach += 1;
    }
    data.reach = reach;
}
