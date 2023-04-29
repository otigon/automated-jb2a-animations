import { debug }            from "../constants/constants.js";
import { trafficCop }       from "../router/traffic-cop.js";
import AAHandler            from "../system-handlers/workflow-data.js";
import { getRequiredData }  from "./getRequiredData.js";
import { matchAnimation }   from "../animation-matching/matchAnimation.js";

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
    
    } else {
        Hooks.on("dnd5e.preRollAttack", async (item, options) => {
            let spellLevel = options.spellLevel ?? void 0;
            Hooks.once("dnd5e.rollAttack", async (item, roll) => {
                criticalCheck(roll, item);
                // Compile Data
                let requiredData = await getRequiredData({item, actor: item.actor, workflow: item, rollAttackHook: {item, roll}, spellLevel});
                // Check Ammo and Reach
                checkAmmo(requiredData)
                checkReach(requiredData)

                // Check for matching Animation
                let animationFound = await findAnimation(item);

                // Check for play conditions. If it should play then continue, otherwise exit
                let playOnDamage = game.settings.get('autoanimations', 'playonDamageCore')
                if (item.hasAreaTarget || (item.hasDamage && playOnDamage)) { return; }
                
                // If no Animation matched, exit
                //if (!animationFound.length) {return;}

                // Add Animation fields
                requiredData.animations = animationFound;
                // Start Animation
                attack(requiredData)    
            })
        })
        Hooks.on("dnd5e.rollDamage", async (item, roll) => {
            // Check for matching Animation
            let animationFound = await findAnimation(item);
            // If no Animation matched, exit
            if (!animationFound.length) {return;}

            // Check for play conditions. If it should play then continue, otherwise exit
            let playOnDamage = game.settings.get('autoanimations', 'playonDamageCore')
            if (item.hasAreaTarget || (item.hasAttack && !playOnDamage)) { return; }

            // Compile Data
            let requiredData = await getRequiredData({item, actor: item.actor, workflow: item, rollDamageHook: {item, roll}, spellLevel: roll?.data?.item?.level ?? void 0});
            // Check Ammo and Reach
            checkAmmo(requiredData)
            checkReach(requiredData)            
            // Add Animation fields
            requiredData.animations = animationFound;
            // Start Animation            
            damage(requiredData)
        })
        Hooks.on('dnd5e.useItem', async (item, config, options) => {
            // Check for matching Animation
            let animationFound = await findAnimation(item);
            // If no Animation matched, exit
            if (!animationFound.length) {return;}

            // Check for play conditions. If it should play then continue, otherwise exit
            if (item?.hasAreaTarget || item.hasAttack || item.hasDamage) { return; }

            // Compile Data
            let requiredData = await getRequiredData({item, actor: item.actor, workflow: item, useItemHook: {item, config, options}, spellLevel: options?.flags?.dnd5e?.use?.spellLevel || void 0});
            // Add Animation fields
            requiredData.animations = animationFound;
            // Start Animation            
            useItem(requiredData)
        })
    }
    Hooks.on("createMeasuredTemplate", async (template, data, userId) => {
        if (userId !== game.user.id) { return };
        let spellLevel = void 0;
        Hooks.once("dnd5e.useItem", async (item, data, config) => {
            spellLevel = config?.flags?.dnd5e?.use?.spellLevel ?? void 0;
            templateAnimation(await getRequiredData({itemUuid: template.flags?.dnd5e?.origin, templateData: template, workflow: template, isTemplate: true, spellLevel}))
        })
    })
}

async function startWorkflow() {
    // Hook to signify the start of the A-A workflow;
    Hooks.callAll("AutomatedAnimations-WorkflowStart", clonedData, animationData);

    // Can be added from the above Hook to stop the A-A workflow    
    if (clonedData.stopWorkflow) { 
        debug(`Animation Workflow was interrupted by an External Source`, clonedData )
        return;
    }

    // recheckAnimation can be passed as a Boolean to let A-A know it needs to recheck for Animations.
    // Useful for changing out the Item to be processed mid-stream
    let newAnimationData;
    if (clonedData.recheckAnimation) {
        newAnimationData = await handleItem(clonedData);
        // If no Animation data is found for the newly passed Item, resets to the Original Item
        if (!newAnimationData) {
            clonedData.item = data.item
        }
    }

    // If no Animation data is matched, returns False and stops workflow
    if (!animationData && !newAnimationData) { 
        debug(`No Animation matched for Item`, clonedData )
        return false;
    }

    // Determines the animation data to be used, either original or new.
    let finalAnimationData = newAnimationData ? newAnimationData : animationData
    return new AAHandler({...clonedData, finalAnimationData});
}
async function findAnimation(item) {
    let animationMatched = await matchAnimation(item);
    console.log(animationMatched)
    return animationMatched;
}

/**
 * 
 * @param {Boolean} hasAreaTarget // Checks to see if the item has an AOE template
 * @param {Boolean} hasAttack // Checks if the item has Attack
 * @param {Boolean} hasDamage // Checks if the item has Damage
 *  
 */

async function useItem(input) {
    debug("Item used, checking for animations")
    const handler = await AAHandler.make(input)
    if (!handler?.item || !handler?.sourceToken) { console.log("Automated Animations: No Item or Source Token", handler); return;}
    trafficCop(handler)
}

async function attack(input) {
    /*
    checkAmmo(input)
    checkReach(input)
    debug("Attack rolled, checking for animations");
    const handler = await AAHandler.make(input)
    if (!handler?.item || !handler?.sourceToken) { console.log("Automated Animations: No Item or Source Token", handler); return;}
    trafficCop(handler)
    */

    let animations = input.animations;

    for (let animation of animations) {
        input.finalAnimationData = animation;
        trafficCop(new AAHandler(input))
    }
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
        token: data.token,
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
    let token = canvas.tokens.get(workflow.tokenId) || getTokenFromItem(item.id);;

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
