import { trafficCop }       from "../router/traffic-cop.js"
import systemData           from "../system-handlers/system-data.js"
import { debug }            from "../constants/constants.js";
import { AnimationState }   from "../AnimationState.js";
import { getRequiredData }  from "./getRequiredData.js";

export function systemHooks() {
    Hooks.on("midi-qol.DamageRollComplete", (workflow) => { 
        damage(getWorkflowData(workflow)) 
    });
    Hooks.on("midi-qol.AttackRollComplete", (workflow) => {
        attack(getWorkflowData(workflow)); criticalCheck(workflow)
    });
    Hooks.on("midi-qol.RollComplete", (workflow) => {
        useItem(getWorkflowData(workflow))
    }); // For items with no attack or damage
    Hooks.on("dnd5e.useItem", async (item, config, options) => { 
        if (item?.hasAreaTarget || item.hasAttack || item.hasDamage || !AnimationState.enabled) { return; }
        onUse({item, actor: item.actor})
        //onUse({ item, config, options }) 
    }); // For Teleportation and Auras
    Hooks.on("createMeasuredTemplate", async (template, data, userId) => {
        if (userId !== game.user.id || !AnimationState.enabled) { return };
        templateAnimation({itemUuid: template.flags?.dnd5e?.origin, template})
    })    

    //Hooks.on("midi-qol.AttackRollComplete", (workflow) => { criticalCheck(workflow) })
}

async function attack(input) {
    if (!AnimationState.enabled || input.item?.hasAreaTarget) { return };
    let playOnDamage = game.settings.get('autoanimations', 'playonDamage');
    if (playOnDamage) { return };
    checkAmmo(input)
    checkReach(input)
    let handler = await systemData.make(input.workflow, null, input);
    if (!handler.item || !handler.sourceToken || handler.playOnUse) { debug("No Item or Source Token", handler.item, handler.sourceToken); return;}
    
    debug("Playing Animation on Attack Roll")
    trafficCop(handler);
}

async function damage(input) {
    if (!AnimationState.enabled || input.item?.hasAreaTarget) { return };
    let playOnDamage = game.settings.get('autoanimations', 'playonDamage');
    if (!playOnDamage && input.item?.hasAttack) { return};
    checkAmmo(input)
    checkReach(input)
    let handler = await systemData.make(input.workflow, null, input);
    if (!handler.item || !handler.sourceToken || handler.playOnUse) { debug("No Item or Source Token", handler.item, handler.sourceToken); return;}
    
    debug("Playing Animation on Damage Roll")
    trafficCop(handler);
}

async function useItem(input) {
    if (!AnimationState.enabled) { return };
    if (input.item?.hasDamage || input.item?.hasAttack || input.item?.hasAreaTarget) { return };

    let handler = await systemData.make(input.workflow, null, input);
    if (!handler.item || !handler.sourceToken) { debug("No Item or Source Token", handler.item, handler.sourceToken); return;}
    if (handler.playOnUse) { return };
    
    debug("Playing Animation, Item has no Attack or Damage")
    trafficCop(handler);
}

async function onUse(input) {
    debug("Item used, checking for animations")
    let requiredData = await getRequiredData(input);   
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

async function criticalCheck(workflow) {
    if (!workflow.isCritical && !workflow.isFumble || !AnimationState.enabled) { return; }
    debug("Checking for Crit or Fumble")
    let critical = workflow.isCritical;
    let fumble = workflow.isFumble;
    let token;

    let critAnim = game.settings.get("autoanimations", "CriticalAnimation");
    let critMissAnim = game.settings.get("autoanimations", "CriticalMissAnimation");

    switch (true) {
        case (game.settings.get("autoanimations", "EnableCritical") && critical):
            token = canvas.tokens.get(workflow.tokenId);
            new Sequence()
                .effect()
                .file(critAnim)
                .atLocation(token)
                .play()
            break;
        case (game.settings.get("autoanimations", "EnableCriticalMiss") && fumble):
            token = canvas.tokens.get(workflow.tokenId);
            new Sequence()
                .effect()
                .file(critMissAnim)
                .atLocation(token)
                .play()
            break;
    }
}

function getWorkflowData(data) {
    return {
        item: data.item,
        token: data.token,
        targets: Array.from(data.targets),
        hitTargets: Array.from(data.hitTargets),
        workflow: data,
    }
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
