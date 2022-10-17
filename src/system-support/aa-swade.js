import { trafficCop }       from "../router/traffic-cop.js"
import systemData           from "../system-handlers/system-data.js"
import { AnimationState }   from "../AnimationState.js";
import { getRequiredData }  from "./getRequiredData.js";

export function systemHooks() {
    Hooks.on("swadeAction", async (SwadeTokenOrActor, SwadeItem) => {
        const controlledTokens = canvas.tokens.controlled;
        let token;
        if (controlledTokens.length > 0) {
            token = controlledTokens.find(token => token.document.actorId === SwadeTokenOrActor.id);
        }
        if (token) { SwadeTokenOrActor = token; }
        runSwade(SwadeTokenOrActor, SwadeItem)
    });
    async function get_brsw_data (data) {
        var tokenId = data.getFlag("betterrolls-swade2", "token");
        if (tokenId) {
            var token = canvas.tokens.get(tokenId);
            var itemId = data.getFlag("betterrolls-swade2", "item_id");
            var item = token.actor.items.get(itemId);
            const actorOrToken = token
            return {actorOrToken, item}
        } else {
            var actorId = data.getFlag("betterrolls-swade2", "actor");
            var actor = game.actors.get(actorId);
            var itemId = data.getFlag("betterrolls-swade2", "item_id");
            var item = actor.items.get(itemId);
            const actorOrToken = actor
            return {actorOrToken, item}
        }
    }
    Hooks.on("BRSW-RollItem", async (data, html) => {
        const {actorOrToken, item} = await get_brsw_data (data)
        if (item.flags?.autoanimations?.menu === "templatefx" || (item.flags?.autoanimations?.menu === "preset" && item.flags?.autoanimations?.presetType === "proToTemp")) {
            return //Return to prevent duplicate effects on placing a template.
        } else { runSwade(actorOrToken, item) }
    });
    Hooks.on("BRSW-BeforePreviewingTemplate", async (template, data, ev) => {
        const {actorOrToken, item} = await get_brsw_data (data)
        runSwade(actorOrToken, item)
    })
    Hooks.on("BRSW-CreateItemCardNoRoll", async (data) => {
        const {actorOrToken, item} = await get_brsw_data (data)
        if (item.flags?.autoanimations?.menu === "templatefx" || (item.flags?.autoanimations?.menu === "preset" && item.flags?.autoanimations?.presetType === "proToTemp")) {
            return //Return to prevent duplicate effects on placing a template.
        } else { runSwade(actorOrToken, item) }
    })
}

// TO-DO, CHECK SWADE
async function runSwade(SwadeTokenOrActor, SwadeItem) {
    if (!AnimationState.enabled) { return; }
    let data = { SwadeTokenOrActor, SwadeItem }

    let handler = await systemData.make(await getRequiredData({item: SwadeItem, token: SwadeTokenOrActor}));
    if (!handler.item) {
        return;
    }
    trafficCop(handler);
}