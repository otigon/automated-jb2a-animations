import { trafficCop }       from "../router/traffic-cop";
import AAHandler        from "../system-handlers/workflow-data.js";
import { debug }            from "../constants/constants.js";
import {getRequiredData }   from "./getRequiredData.js";

export function systemHooks() {
    Hooks.on("createChatMessage", async (msg) => {
        if (msg.user.id !== game.user.id) { return };
        const playOnDmg = game.settings.get("autoanimations", "playonDamageCore")
        let compiledData = await getRequiredData({
            item: await fromUuid(msg.flags.ptu?.origin?.uuid),
            itemId: msg.flags.ptu?.origin?.uuid,
            token: msg.token?.object,
            tokenId: msg.speaker?.token,
            actorId: msg.speaker?.actor,
            workflow: msg,
            playOnDamage: playOnDmg,
            bypassTemplates: true,
        });
        if (!compiledData.item) {
            debug("PTU | No Item Found, exiting main Workflow")
            return;
        }
        compiledData.hitTargets = checkOutcome(compiledData);
        runPtu(compiledData)
    });
    Hooks.on("createMeasuredTemplate", async (template, data, userId) => {
        if (userId !== game.user.id) { return };
        let compiledData = await getRequiredData({
            itemUuid: template.flags?.ptu?.origin?.uuid,
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
        debug("PTU | No Item could be found")
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
        const templateName = input.templateData.flags?.ptu?.origin?.name
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

async function runPtu(data) {
    const msg = data.workflow;
    const item = data.item;
    const playOnDamage = data.playOnDamage;
    const isDamageRoll = msg.isDamageRoll;

    if(item.type === "effect" || item.type === "condition") {
        debug ("PTU | This is a Condition or Effect, exiting main workflow")
        return;
    }

    if (!msg.isRoll) { return; }
    if (moveHasAOE(item)) { return; }
    if ((playOnDamage && isDamageRoll) || (!playOnDamage && !isDamageRoll)) {
        playPtu(data);
    }
}

async function playPtu(input) {
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
    let outcome = input.workflow.flags?.ptu?.context?.outcome;
    outcome = outcome ? outcome.toLowerCase() : "";
    let hitTargets;
    if (input.targets.length < 2
        && !game.settings.get('autoanimations', 'playonDamageCore')
        && outcome)
        {
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
