import { trafficCop }       from "../router/traffic-cop.js"
import systemData           from "../system-handlers/system-data.js"
import { AnimationState }   from "../AnimationState.js";
import { getRequiredData }  from "./getRequiredData.js";

export function systemHooks() {
    Hooks.on("createChatMessage", async (msg) => {
        if (msg.user.id !== game.user.id || !AnimationState.enabled) { return };
        const playOnDmg = game.settings.get("autoanimations", "playonDamageCore")

        let compiledData = await getRequiredData({
            item: msg.item,
            itemId: msg.flags.pf2e?.origin?.uuid,
            token: msg.token?.object,
            tokenId: msg.speaker?.token,
            actorId: msg.speaker?.actor,
            workflow: msg,
            playOnDamage: playOnDmg,
        })
        runPF2e(compiledData)
    });
    Hooks.on("createMeasuredTemplate", async (template, data, userId) => {
        if (userId !== game.user.id || !AnimationState.enabled) { return };
        console.log(template instanceof MeasuredTemplateDocument)
        templateAnimation(await getRequiredData({itemUuid: template.flags?.pf2e?.origin?.uuid, templateData: template, workflow: template}))
    })    
}

async function templateAnimation(input) {
    debug("Template placed, checking for animations")
    let handler = await systemData.make(input.workflow, null, input);
    if (!handler.item) { console.log("Automated Animations: No Item", handler.item, handler.sourceToken); return;}
    trafficCop(handler)
}

async function runPF2e(data) {
    console.log(data)
    const itemType = data.item.type;

    switch (itemType) {
        case "spell":
            runPF2eSpells(data)
            break;
        case "weapon":
            if (!data.workflow.isRoll) { return; }
            runPF2eWeapons(data)
            break;
    }

}

function runPF2eWeapons (data) {
    const playOnDamage = data.playOnDamage;
    const msg = data.workflow;
    const isAttackRoll = msg.flags.pf2e?.context?.type?.includes("attack");
    //debugger
    if (playOnDamage && msg.isDamageRoll) {
        playPF2e(data);
    } else if (!playOnDamage && isAttackRoll) {
        playPF2e(data);
    }
}

function findAttackOnItem(item) {
    const type = item.type;
    switch(type) {
        case "weapon":
            return true;
        case "spell":
        case "focus":
        case "ritual":
            return spellHasAttack(item)

             
    }
}

function findDamageOnItem(item) {
    const type = item.type;
    switch (type) {
        case "weapon":
            return item.dealsDamage
    }
}

async function runPF2eSpells(data) {
    const msg = data.workflow;
    const item = data.item;
    const playOnDamage = data.playOnDamage;
    const isDamageRoll = msg.isDamageRoll;
    const hasAttack = spellHasAttack(item);
    const spellType = getSpellType(item);

    switch (spellType) {
        case "utility":
        case "save":
            if (spellHasAOE(item)) { return; }
            if (itemHasDamage(item) && playOnDamage && msg.isDamageRoll) {
                playPF2e(data)
            } else if (!playOnDamage && !msg.isRoll) {
                playPF2e(data)
            } else if (!itemHasDamage(item)) {
                playPF2e(data)
            }
            break;
        case "attack":
            if (!msg.isRoll) { return; }
            if (playOnDamage && msg.isDamageRoll) {
                playPF2e(data);
            } else if (!playOnDamage && !msg.isDamageRoll) {
                playPF2e(data);
            } else if (!itemHasDamage(item) && !msg.isDamageRoll) {
                playPF2e(data);
            }
            break;
        case "heal":
            if (msg.isDamageRoll) {
                playPF2e(data);
            }
            break;
    }
}
async function playPF2e(data) {
    let handler = await systemData.make(data.workflow, null, data)
    trafficCop(handler);
}
/**
 * 
 * @param {Object} item 
 * @returns {String} spell || focus || ritual
 */
 function getSpellCategory(item) {
    return item.system.category.value;
}
/**
 * 
 * @param {Object} item 
 * @returns {String} utility || save || heal || attack
 */
function getSpellType(item) {
    return item.system.spellType?.value;
}
function spellHasAttack(item) {
    return getSpellType(item) === "attack"
}
function spellHasAOE(item) {
    return item.system.area?.value && item.system.area?.areaType;
}
async function saveSpell(data) {
    let handler = await systemData.make(data.workflow, null, data)
    trafficCop(handler);
}
async function spellUtility(data) {
    let handler = await systemData.make(data.workflow, null, data)
    trafficCop(handler);
}
async function spellAttack(data) {
    let handler = await systemData.make(data.workflow, null, data)
    trafficCop(handler);
}
async function healing(data) {
    let handler = await systemData.make(data.workflow, null, data)
    trafficCop(handler);
}


function itemHasDamage(item) {
    let damage = item.system?.damage?.value || {};
    return Object.keys(damage).length
}

/**
 * 
 * @param {Object} item 
 * @returns {String} Weapon's base type
 */
function getWeaponBaseType(item) {
    return item.baseType;
}

