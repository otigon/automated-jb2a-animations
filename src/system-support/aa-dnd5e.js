import { debug }            from "../constants/constants.js";
import { trafficCop }       from "../router/traffic-cop.js";
import AAHandler            from "../system-handlers/workflow-data.js";
import { getRequiredData }  from "./getRequiredData.js";
import { AAAutorecFunctions } from "../aa-classes/aaAutorecFunctions.js";

// DnD5e System hooks provided to run animations
export function systemHooks() {
    if (game.modules.get("midi-qol")?.active) {
        Hooks.on("midi-qol.AttackRollComplete", (workflow) => {
            let playOnDamage = game.settings.get('autoanimations', 'playonDamage');
            if (workflow.item?.hasAreaTarget || (workflow.item?.hasDamage && playOnDamage)) { return };
            attack(getWorkflowData(workflow)); criticalCheck(workflow)
        });
        Hooks.on("midi-qol.DamageRollComplete", (workflow) => { 
            let playOnDamage = game.settings.get('autoanimations', 'playonDamage');
            if (workflow.item?.hasAreaTarget || (!playOnDamage && workflow.item?.hasAttack)) { return };
            damage(getWorkflowData(workflow)) 
        });
        // Items with no Attack/Damage
        Hooks.on("midi-qol.RollComplete", (workflow) => {
            if (workflow.item?.hasAreaTarget || workflow.item?.hasAttack || workflow.item?.hasDamage) { return };
            useItem(getWorkflowData(workflow))
        });
    
    } else if (game.modules.get("wire")?.active) {
        // WIRE handles triggering AA
    } else {
        Hooks.on("dnd5e.rollAttackV2", async (rolls, data) => {
            const roll = rolls[0];
            const activity = data.subject;
            const playOnDamage = game.settings.get('autoanimations', 'playonDamageCore');
            if (["circle", "cone", "cube", "cylinder", "line", "sphere", "square", "wall"].includes(activity?.target?.template?.type) || (activity?.damage?.parts?.length && activity?.type != "heal" && playOnDamage)) { return; }
            const itemData = await itemDataFromActivity(activity, "attack");
            criticalCheck(roll, itemData);
            attack(await getRequiredData({item: itemData, actor: itemData.parent, workflow: itemData, rollAttackHook: {itemData, roll}, spellLevel: roll?.data?.item?.level ?? void 0}));    
        });
        Hooks.on("dnd5e.rollDamageV2", async (rolls, data) => {
            const roll = rolls[0];
            const activity = data.subject;
            const playOnDamage = game.settings.get('autoanimations', 'playonDamageCore');
            if (["circle", "cone", "cube", "cylinder", "line", "sphere", "square", "wall"].includes(activity?.target?.template?.type) || (activity?.type == "attack" && !playOnDamage)) { return; }
            const itemData = await itemDataFromActivity(activity, "damage");
            damage(await getRequiredData({item: itemData, actor: itemData.parent, workflow: itemData, rollDamageHook: {itemData, roll}, spellLevel: roll?.data?.item?.level ?? void 0}));
        });
        Hooks.on('dnd5e.postUseActivity', async (activity, usageConfig, results) => {
            if (["circle", "cone", "cube", "cylinder", "line", "sphere", "square", "wall"].includes(activity?.target?.template?.type) || activity?.type == "attack" || (activity?.damage?.parts?.length && activity?.type != "heal")) { return; }
            const config = usageConfig;
            const options = results;
            const itemData = await itemDataFromActivity(activity, "utility");
            useItem(await getRequiredData({item: itemData, actor: itemData.parent, workflow: itemData, useItemHook: {itemData, config, options}, spellLevel: options?.flags?.dnd5e?.use?.spellLevel || void 0}));
        });
    }
    Hooks.on("createMeasuredTemplate", async (template, data, userId) => {
        if (userId !== game.user.id) { return };
        const activity = await fromUuid(template.flags?.dnd5e?.origin);
        const itemData = await itemDataFromActivity(activity, "template");
        templateAnimation(await getRequiredData({item: itemData, templateData: template, workflow: template, isTemplate: true}));
    });
    /*
    Hooks.on("createMeasuredTemplate", async (template, data, userId) => {
        if (userId !== game.user.id) { return };
        let spellLevel = void 0;
        Hooks.once("dnd5e.useItem", async (item, data, config) => {
            spellLevel = config?.flags?.dnd5e?.use?.spellLevel ?? void 0;
            templateAnimation(await getRequiredData({itemUuid: template.flags?.dnd5e?.origin, templateData: template, workflow: template, isTemplate: true, spellLevel}))
        })
    })
    */
}

/**
 * 
 * @param {Boolean} hasAreaTarget // Checks to see if the item has an AOE template
 * @param {Boolean} hasAttack // Checks if the item has Attack
 * @param {Boolean} hasDamage // Checks if the item has Damage
 *  
 */

async function itemDataFromActivity(activity, animationType) {
    const item = activity?.parent?.parent;
    const rinsedActivityName = activity?.name ? AAAutorecFunctions.rinseName(activity.name) : "noactivity";
    const autorecSettings = {
        melee: game.settings.get("autoanimations", "aaAutorec-melee"),
        range: game.settings.get("autoanimations", "aaAutorec-range"),
        ontoken: game.settings.get("autoanimations", "aaAutorec-ontoken"),
        templatefx: game.settings.get("autoanimations", "aaAutorec-templatefx"),
        aura: game.settings.get("autoanimations", "aaAutorec-aura"),
        preset: game.settings.get("autoanimations", "aaAutorec-preset"),
        aefx: game.settings.get("autoanimations", "aaAutorec-aefx")
    }
    const validMenus = {
        attack: ["melee", "ranged", "ontoken", "preset"],
        damage: ["melee", "ranged", "ontoken", "preset", "aura"],
        utility: ["ontoken", "preset", "aura"],
        template: ["templatefx", "preset"]
    }
    const menus = AAAutorecFunctions.sortAndFilterMenus(autorecSettings);
    const found = AAAutorecFunctions.allMenuSearch(menus, rinsedActivityName, activity?.name);
    const itemData = {
	uuid: item?.uuid,
	id: item?._id ?? item?.id,
	_id: item?._id ?? item?.id,
	parent: item?.parent,
	actor: item?.parent,
	name: found && validMenus?.[animationType].includes(found?.menu) && !["attack", "check", "damage", "enchant", "heal", "save", "summon", "utility"].includes(activity?.name?.trim()?.toLowerCase()) ? activity?.name : item?.name,
	type: item?.type,
	system: item?.system,
        flags: item?.flags
    }
    return itemData;
}

async function useItem(input) {
    debug("Item used, checking for animations")
    const handler = await AAHandler.make(input)
    if (!handler?.item || !handler?.sourceToken) { console.log("Automated Animations: No Item or Source Token", handler); return;}
    trafficCop(handler)
}

async function attack(input) {
    checkAmmo(input)
    checkReach(input)
    debug("Attack rolled, checking for animations");
    const handler = await AAHandler.make(input)
    if (!handler?.item || !handler?.sourceToken) { console.log("Automated Animations: No Item or Source Token", handler); return;}
    trafficCop(handler)
}

async function damage(input) {
    checkAmmo(input)
    checkReach(input)
    debug("Damage rolled, checking for animations")
    const handler = await AAHandler.make(input)
    if (!handler?.item || !handler?.sourceToken) { console.log("Automated Animations: No Item or Source Token", handler); return;}
    trafficCop(handler)
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

function checkAmmo(data) {
    //const ammo = data.item?.flags?.autoanimations?.fromAmmo;
    const ammoType = data.item?.system?.consume?.type;
    data.ammoItem = ammoType === "ammo" ? data.token?.actor?.items?.get(data.item?.system?.consume?.target) : null;
}

function checkReach(data) {
    let reach = 0;
    if (data.item.system?.properties?.rch) {
        reach += 1;
    }
    data.reach = reach;
}

function getWorkflowData(data) {
    return {
        item: data.item,
        token: data.rangeDetails?.attackingToken ?? data.token,
        targets: Array.from(data.targets),
        hitTargets: Array.from(data.hitTargets),
        spellLevel: data.castData?.castLevel ?? void 0,
        workflow: data,
    }
}

function criticalCheck(workflow, item = {}) {
    if (!workflow.isCritical && !workflow.isFumble) { return; }
    debug("Checking for Crit or Fumble")
    let critical = workflow.isCritical;
    let fumble = workflow.isFumble;
    let token = canvas.tokens.get(workflow.tokenId) || getTokenFromItem(item);;

    let critAnim = game.settings.get("autoanimations", "CriticalAnimation");
    let critMissAnim = game.settings.get("autoanimations", "CriticalMissAnimation");

    switch (true) {
        case (game.settings.get("autoanimations", "EnableCritical") && critical):
            new Sequence({moduleName: "Automated Animations", softFail: !game.settings.get("autoanimations", "debug")})
                .effect()
                .file(critAnim)
                .atLocation(token)
                .play()
            break;
        case (game.settings.get("autoanimations", "EnableCriticalMiss") && fumble):
            new Sequence({moduleName: "Automated Animations", softFail: !game.settings.get("autoanimations", "debug")})
                .effect()
                .file(critMissAnim)
                .atLocation(token)
                .play()
            break;
    }

    function getTokenFromItem(item) {
        let token = item?.parent?.token;
        if (token) { return token }
        let tokens = canvas.tokens.placeables.filter(token => token.actor?.items?.get(item.id));
        let trueToken = tokens.length > 1 ? tokens.find(x => x.id === _token.id) || tokens[0] : tokens[0];
        return trueToken;
    }
    
}
