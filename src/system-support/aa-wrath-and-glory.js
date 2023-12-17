import { trafficCop }       from "../router/traffic-cop.js"
import AAHandler            from "../system-handlers/workflow-data.js";
import { getRequiredData }  from "./getRequiredData.js";

export function systemHooks() {
    Hooks.on("createChatMessage", async (msg) => {
        if (msg.user.id !== game.user.id) { return };
        const flags = msg.flags?.["wrath-and-glory"] ?? {};
        const itemId = flags.testData.testData.itemId;
        const actorId = flags.testData.context.speaker.actor;
        const tokenId = actorId.getActiveTokens()[0];
        /*const rollClass = flags.rollData.rollObject.class;*/
        routeMessage({itemId, tokenId, actorId, workflow: msg/*, rollClass*/})
    });
    Hooks.on("AutomatedAnimations-WorkflowStart", onWorkflowStart);
    Hooks.on("createMeasuredTemplate", async (template, data, userId) => {
        if (userId !== game.user.id) { return };
        templateAnimation(await getRequiredData({itemUuid: template.flags?.["wrath-and-glory"]?.origin, templateData: template, workflow: template, isTemplate: true}))
    })
}

console.log(itemId);
console.log(tokenId);
console.log(ActorId);

async function routeMessage(input) {
    const requiredData = await getRequiredData(input);
    if (!requiredData.item) { return; }
    runWrathandGlory(requiredData);
}

async function runWrathandGlory(data) {
    const handler = await AAHandler.make(data)
    trafficCop(handler);
}

/*function onWorkflowStart(clonedData, animationData) {
    // Repeat the animation in case of burst attacks.
    if (animationData.primary != null && clonedData.workflow.flags["wrath-and-glory"].rollData.maxAdditionalHit != null) {
        animationData.primary.options.repeat = (1 + clonedData.workflow.flags["wrath-and-glory"].rollData.maxAdditionalHit);
    }
}*/

async function templateAnimation(input) {
    if (!input.item) { 
        return;
    }
    const handler = await AAHandler.make(input)
    trafficCop(handler)
}