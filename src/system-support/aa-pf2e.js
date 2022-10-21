import { trafficCop }       from "../router/traffic-cop.js"
import AAHandler            from "../system-handlers/workflow-data.js";
import { AnimationState }   from "../AnimationState.js";
import { debug }            from "../constants/constants.js";
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
        if (compiledData.item?.type === "effect" || compiledData.item?.type === "condition") {
            debug ("This is a Condition or Effect, exiting main workflow")
            return;
        }
        if (!compiledData.item) {
            debug("No Item Found, exiting main Workflow")
            return;
        }
        compiledData.hitTargets = checkOutcome(compiledData);
        runPF2e(compiledData)
    });
    Hooks.on("createMeasuredTemplate", async (template, data, userId) => {
        if (userId !== game.user.id || !AnimationState.enabled) { return };
        templateAnimation(await getRequiredData({itemUuid: template.flags?.pf2e?.origin?.uuid, templateData: template, workflow: template, isTemplate: true}))
    })    
}

async function templateAnimation(input) {
    debug("Template placed, checking for animations")
    if (!input.item) { 
        debug("No Item could be found")
        return;
    }
    const handler = await AAHandler.make(input)
    if (!handler) { return;}
    trafficCop(handler)
}

async function runPF2e(data) {
    const itemType = data.item.type;

    switch (itemType) {
        case "effect":
        case "condition":
            debug("This is an Effect or Condition, exiting main workflow in deference to Active Effects")
            break;
        case "spell":
            runPF2eSpells(data)
            break;
        case "weapon":
            if (!data.workflow.isRoll) { return; }
            runPF2eWeapons(data)
            break;
        case "consumable": 
            playPF2e(data)
            break;
        default:
            // Workaround for Feats and Actions not posting the Item UUID to the Template flags.
            // Recheck later if that data is added to the Template
            if (data.item?.type === "feat" || data.item.type === "action") {
                let hasAOE = await checkFeatForAOE(data);
                if (hasAOE) {
                    playPF2e(data)
                    return;
                }
            }
            if (itemHasDamage(data.item) && data.playOnDamage && data.workflow.isDamageRoll) {
                playPF2e(data)
            } else if (!itemHasDamage(data.item) && !data.workflow.isDamageRoll) {
                playPF2e(data)
            }
    }
}

async function checkFeatForAOE(data) {
    return data.item?.system?.description?.value?.includes("@Template")
}

function runPF2eWeapons (data) {
    const playOnDamage = data.playOnDamage;
    const msg = data.workflow;
    const isAttackRoll = msg.flags.pf2e?.context?.type?.includes("attack");

    data.extraNames = [];
    if (data.item.type === "weapon") {
        const baseType = game.i18n.localize(CONFIG.PF2E.baseWeaponTypes[data.item.baseType]);
        const group = game.i18n.localize(CONFIG.PF2E.weaponGroups[data.item.group]);
        data.extraNames.push(baseType, group);
    }

    //debugger
    if (playOnDamage && msg.isDamageRoll) {
        playPF2e(data);
    } else if (!playOnDamage && isAttackRoll) {
        playPF2e(data);
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
async function playPF2e(input) {
    if (!input.item) { 
        debug("No Item could be found")
        return;
    }
    const handler = await AAHandler.make(input)
    if (!handler) { return; }
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

function checkOutcome(input) {
    let outcome = input.workflow.flags?.pf2e?.context?.outcome;
    outcome = outcome ? outcome.toLowerCase() : "";
    let hitTargets;
    if (input.targets.length < 2 && !game.settings.get('autoanimations', 'playonDamageCore') && outcome) {
        if (outcome === 'success' || outcome === 'criticalsuccess') {
            hitTargets = input.targets;
        } else {
            hitTargets = false
        }
    } else {
        hitTargets = input.targets;
    }
    return hitTargets;
}

