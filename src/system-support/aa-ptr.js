import { trafficCop }       from "../router/traffic-cop";
import AAHandler        from "../system-handlers/workflow-data.js";
import { debug }            from "../constants/constants.js";
import {getRequiredData }   from "./getRequiredData.js";

export function systemHooks() {
    Hooks.on("createChatMessage", async (msg) => {
        if (msg.user.id !== game.user.id) { return };

        let compiledData = await getRequiredData({
            item: await fromUuid(msg.flags.ptr?.origin?.uuid),
            itemId: msg.flags.ptr?.origin?.uuid,
            token: msg.token?.object,
            tokenId: msg.speaker?.token,
            actorId: msg.speaker?.actor,
            workflow: msg,
            bypassTemplates: true,
        });
        if (!compiledData.item) {
            debug("PTR | No Item Found, exiting main Workflow")
            return;
        }
        compiledData.hitTargets = checkOutcome(compiledData);
        runPtr(compiledData)
    });
    Hooks.on("createMeasuredTemplate", async (template, data, userId) => {
        if (userId !== game.user.id) { return };
        let compiledData = await getRequiredData({
            itemUuid: template.flags?.ptr?.origin?.uuid,
            templateData: template,
            workflow: template,
            isTemplate: true
        }) 
        if (template.item) compiledData.item = template.item

        templateAnimation(compiledData)
    })
}

async function templateAnimation(input) {
    debug("Template placed, checking for animations")
    if (!input.item) { 
        debug("PTR | No Item could be found")
        return;
    }
    if (isNewerVersion(game.system.version, "5")) {
        if (input.item.isVariant) {
            input.isVariant = true
            input.originalItem = input.item.original
        }
    }
    else {
        // Spell variants can be identified by the template name
        const templateName = input.templateData.flags?.ptr?.origin?.name
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

async function runPtr(data) {
    const msg = data.workflow;
    const item = data.item;
    const playOnDamage = data.playOnDamage;
    const isDamageRoll = msg.isDamageRoll;
    
    if (!msg.isRoll) { return; }
    if (moveHasAOE(item)) { return; }
    if ((playOnDamage && isDamageRoll) || (!playOnDamage && !isDamageRoll)) {
        playPtr(data);
    }
}

async function playPtr(input) {
    if (!input.item) {
        debug("No Item could be found")
        return;
    }

    const handler = await AAHandler.make(input)
    trafficCop(handler);
}

function moveHasAOE(item) {
    return item.system.area?.value && item.system.area?.type;
}

function checkOutcome(input) {
    let outcome = input.workflow.flags?.ptr?.context?.outcome;
    outcome = outcome ? outcome.toLowerCase() : "";
    let hitTargets;
    if (input.targets.length < 2 && outcome) {
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
