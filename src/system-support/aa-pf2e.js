import { trafficCop }       from "../router/traffic-cop.js"
import AAHandler            from "../system-handlers/workflow-data.js";
import { debug }            from "../constants/constants.js";
import { getRequiredData }  from "./getRequiredData.js";

const PF2E_SIZE_TO_REACH = {
    tiny: 0,
    sm: 5,
    med: 5,
    lg: 5,
    huge: 10,
    grg: 15,
};

export function systemHooks() {
    Hooks.on("createChatMessage", async (msg) => {
        if (msg.author.id !== game.user.id) { return };
        const playOnDmg = game.settings.get("autoanimations", "playonDamageCore")
        if (msg.flags.pf2e?.context?.type === "damage-taken") {
            // This can be removed if later A-A can differentiate animations on the same item. I guess.
            debug ("Caught a damage-taken message thats not meant to be animated, exiting main workflow")
            return;
        }
        let compiledData = await getRequiredData({
            item: msg.item,
            itemId: msg.flags.pf2e?.origin?.uuid,
            token: msg.token?.object,
            tokenId: msg.speaker?.token,
            actorId: msg.speaker?.actor,
            workflow: msg,
            playOnDamage: playOnDmg,
            bypassTemplates: true,
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
        if (userId !== game.user.id) { return };
        let compiledData = await getRequiredData({
            itemUuid: template.flags?.pf2e?.origin?.uuid,
            templateData: template,
            workflow: template,
            isTemplate: true
        })
        // pf2e v5 includes on item getter on templates which handles variants
        if (template.item) compiledData.item = template.item

        templateAnimation(compiledData)
    })
}

async function templateAnimation(input) {
    debug("Template placed, checking for animations")
    if (!input.item) {
        debug("No Item could be found")
        return;
    }
    if (foundry.utils.isNewerVersion(game.system.version, "5")) {
        if (input.item.isVariant) {
            input.isVariant = true
            input.originalItem = input.item.original
        }
    }
    else {
        // Spell variants can be identified by the template name
        const templateName = input.templateData.flags?.pf2e?.origin?.name
        // If item and template name differ, the variant spell can be created by applying the variants overlay
        if (templateName && input.item.name !== templateName) {
            // Search for the variant overlay by name
            const overlayId = input.item.overlays.find(o => o.name == templateName)?._id
            if (overlayId) {
                input.item = input.item.loadVariant({ overlayIds: [overlayId] })
                input.isVariant = true;
                input.originalItem = input.item?.original;
            }
        }
    }

    const handler = await AAHandler.make(input)
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
            let hasDamage = itemHasDamage(data.item)
            //hasDamage && data.playOnDamage && data.workflow.isDamageRoll ? playPF2e(data) : !hasDamage && !data.workflow.isDamageRoll ? playPF2e(data) : playPF2e(data)
            if (hasDamage && data.playOnDamage && data.workflow.isDamageRoll) {
                playPF2e(data)
            } else if (!hasDamage && !data.workflow.isDamageRoll) {
                playPF2e(data)
            } else if (hasDamage && !data.playOnDamage && !data.workflow.isDamageRoll) {
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
    let spellType = getSpellType(item);

    if (item.isVariant) {
        data.isVariant = true
        data.originalItem = item.original;
    }

    if (foundry.utils.isNewerVersion(game.system.version, "5.8.3")) {
        // pf2e 5.9 removes spellType
        if (item.system.traits.value.includes("healing"))
            spellType = "heal"
        else if (item.system.traits.value.includes("attack"))
            spellType = "attack"
        else
            spellType = "save"
    }

    switch (spellType) {
        case "utility":
        case "save":
            if (spellHasAOE(item)) { return; }
            if (itemHasDamage(item) && msg.isDamageRoll) {
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

    if (input.item.traits) {
        const reachTrait = input.item.traits.find((t) => /^reach-\d+$/.test(t));
        let reachValue = reachTrait ? Number(reachTrait.replace("reach-", "")) : PF2E_SIZE_TO_REACH[input.item.actor?.size ?? "med"];
        if (!reachTrait && input.item.traits.has("reach")) {
            reachValue += 5;
        }

        input.reach = Math.round(reachValue / 5) - 1;
    }

    const handler = await AAHandler.make(input)
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
    return item.system.area?.value && item.system.area?.type;
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
    let damage =
        item.system?.damage?.value // before pf2e 5.9 spell damage
        || item.system?.damage // 5.9 spell damage
        || item.system?.damageRolls // strike damage
        || {};
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
