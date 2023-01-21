import { debug }            from "../constants/constants.js";
import { trafficCop }       from "../router/traffic-cop.js";
import AAHandler            from "../system-handlers/workflow-data.js";
import { AnimationState }   from "../AnimationState.js";
import { getRequiredData }  from "./getRequiredData.js";

// SW5e System hooks provided to run animations
export function systemHooks() {
    if (game.modules.get("midi-qol")?.active) {
        Hooks.on("midi-qol.AttackRollComplete", (workflow) => {
            let playOnDamage = game.settings.get('autoanimations', 'playonDamage');
            if (!AnimationState.enabled || workflow.item?.hasAreaTarget || (workflow.item?.hasDamage && playOnDamage)) { return };
            attack(getWorkflowData(workflow)); criticalCheck(workflow)
        });
        Hooks.on("midi-qol.DamageRollComplete", (workflow) => { 
            let playOnDamage = game.settings.get('autoanimations', 'playonDamage');
            if (!AnimationState.enabled || workflow.item?.hasAreaTarget || (!playOnDamage && workflow.item?.hasAttack)) { return };
            damage(getWorkflowData(workflow)) 
        });
        // Items with no Attack/Damage
        Hooks.on("midi-qol.RollComplete", (workflow) => {
            if (!AnimationState.enabled || workflow.item?.hasAreaTarget || workflow.item?.hasAttack || workflow.item?.hasDamage) { return };
            useItem(getWorkflowData(workflow))
        });
    
    } else {
        Hooks.on("sw5e.rollAttack", async (item, roll) => {
            let playOnDamage = game.settings.get('autoanimations', 'playonDamageCore')
            if (!AnimationState.enabled || item.hasAreaTarget || (item.hasDamage && playOnDamage)) { return; }   
            attack(await getRequiredData({item, actor: item.actor, workflow: item}))
        })
        Hooks.on("sw5e.rollDamage", async (item, roll) => {
            let playOnDamage = game.settings.get('autoanimations', 'playonDamageCore')
            if (!AnimationState.enabled || item.hasAreaTarget || (item.hasAttack && !playOnDamage)) { return; }
            damage(await getRequiredData({item, actor: item.actor, workflow: item}))
        })
        Hooks.on('sw5e.useItem', async (item, config, options) => {
            if (item?.hasAreaTarget || item.hasAttack || item.hasDamage || !AnimationState.enabled) { return; }
            useItem(await getRequiredData({item, actor: item.actor, workflow: item}))
        })
    }
    Hooks.on("createMeasuredTemplate", async (template, data, userId) => {
        if (userId !== game.user.id || !AnimationState.enabled) { return };
        templateAnimation(await getRequiredData({itemUuid: template.flags?.sw5e?.origin, templateData: template, workflow: template, isTemplate: true}))
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
    const handler = await AAHandler.make(input)
    if (!handler) { return; }
    if (!handler.item || !handler.sourceToken) { console.log("Automated Animations: No Item or Source Token", handler.item, handler.sourceToken); return;}
    trafficCop(handler)
    /*
        if (handler.isAura) {
        trafficCop(handler);
    } else {
        if (item?.hasAreaTarget || item.hasAttack || item.hasDamage) { return; }
        if (!handler.item || !handler.sourceToken) { console.log("Automated Animations: No Item or Source Token", handler.item, handler.sourceToken); return;}
        trafficCop(handler)    
    }
    */
}

async function attack(input) {
    checkAmmo(input)
    checkReach(input)
    debug("Attack rolled, checking for animations");
    const handler = await AAHandler.make(input)
    if (!handler) { return; }
    if (!handler.item || !handler.sourceToken) { console.log("Automated Animations: No Item or Source Token", handler.item, handler.sourceToken); return;}
    trafficCop(handler)
}

async function damage(input) {
    checkAmmo(input)
    checkReach(input)
    debug("Damage rolled, checking for animations")
    const handler = await AAHandler.make(input)
    if (!handler) { return; }
    if (!handler.item || !handler.sourceToken) { console.log("Automated Animations: No Item or Source Token", handler.item, handler.sourceToken); return;}
    trafficCop(handler)
}

async function templateAnimation(input) {
    debug("Template placed, checking for animations")
    if (!input.item) { 
        debug("No Item could be found")
        return;
    }
    const handler = await AAHandler.make(input)
    if (!handler) { return; }
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
        token: data.token,
        targets: Array.from(data.targets),
        hitTargets: Array.from(data.hitTargets),
        workflow: data,
    }
}

function criticalCheck(workflow) {
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
            new Sequence({moduleName: "Automated Animations", softFail: !game.settings.get("autoanimations", "debug")})
                .effect()
                .file(critAnim)
                .atLocation(token)
                .play()
            break;
        case (game.settings.get("autoanimations", "EnableCriticalMiss") && fumble):
            token = canvas.tokens.get(workflow.tokenId);
            new Sequence({moduleName: "Automated Animations", softFail: !game.settings.get("autoanimations", "debug")})
                .effect()
                .file(critMissAnim)
                .atLocation(token)
                .play()
            break;
    }
}



/*
import { trafficCop } from "../router/traffic-cop.js";
import systemData from "../system-handlers/system-data.js";
import { AnimationState }   from "../AnimationState.js";

export function systemHooks() {
    // Deactivating until SW5e is updated to Foundry V10
    //Hooks.on("createChatMessage", async (msg) => { runSW5e(msg); });
}
// Does Not work yet, need to revisit after SW5e releases a V10 compatible version
async function runSW5e(msg) {
    if (msg.user.id !== game.user.id || !AnimationState.enabled) { return };

    const animationNow = game.settings.get("autoanimations", "playonDamageCore");
    let handler;
    let rollType;
    switch (game.system.id) {
        case "dnd5e":
            handler = await systemData.make(msg);
            rollType = (msg.flags?.dnd5e?.roll?.type?.toLowerCase() ?? msg.flavor?.toLowerCase() ?? "pass");
            break;
        case "sw5e":
            handler = await systemData.make(msg);
            rollType = msg.flags?.sw5e?.roll?.type?.toLowerCase() ?? "pass";
            break;
    }

    if (!handler.item || !handler.sourceToken) {
        return;
    }

    switch (true) {
        case !handler.hasAttack && !handler.hasDamage:
            trafficCop(handler);
            break;
        case (handler.shouldPlayImmediately) && !rollType.includes("damage") && !rollType.includes("attack"):
            trafficCop(handler);
            break;
        case animationNow:
            if (rollType.includes("damage")) {
                if (handler.shouldPlayImmediately) { return; }
                trafficCop(handler);
            }
            break;
        case !animationNow:
            switch (true) {
                case game.modules.get("mre-dnd5e")?.active && game.settings.get("mre-dnd5e", "autoCheck") && !handler.hasAttack && handler.hasDamage && !rollType.includes("damage"):
                    trafficCop(handler);
                    break;
                case game.modules.get("mre-dnd5e")?.active && game.settings.get("mre-dnd5e", "autoCheck") && rollType.includes("damage"):
                    break;
                case rollType.includes("damage") && !handler.hasAttack:
                case rollType.includes('attack'):
                    if (handler.shouldPlayImmediately) { return; }
                    trafficCop(handler);
                    break;
                case game.modules.get("betterrolls5e")?.active && !handler.hasAttack && handler.hasDamage:
                    if (handler.shouldPlayImmediately) { return; }
                    trafficCop(handler);
                    break;
            }
            break;
    }
}
*/