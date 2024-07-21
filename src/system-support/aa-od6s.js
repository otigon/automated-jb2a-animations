/**
 * Support added by Madseumas
 */

import { trafficCop }       from "../router/traffic-cop.js"
import AAHandler            from "../system-handlers/workflow-data.js";
import { AnimationState }   from "../AnimationState.js";
import { getRequiredData }  from "./getRequiredData.js";

export function systemHooks() {
    Hooks.on("createChatMessage", async (msg) => {
        if (msg.user.id !== game.user.id || !AnimationState.enabled) { return }
        if (msg.getFlag('od6s', 'type') === 'damage') { return }
        if (msg.getFlag('od6s', 'isExplosive')) {
            if(!msg.getFlag('od6s','triggered')) { return }
        }

        // Was this from an actor-controlled vehicle?
        let tokenId = '';
        let actorId = '';
        if(msg.getFlag('od6s', 'vehicle') && msg.getFlag('od6s', 'vehicle') !== '') {
            const document = await fromUuid(msg.getFlag('od6s', 'vehicle'));
            if (document.documentName === 'Token') {
                tokenId = document.id;
                const actor = game.scenes.viewed.tokens.filter(t => t.id === document.id)[0].actor;
                actorId = actor.id;
            } else {
                /* Clean up later when both token and actor are embedded in the message flags */
                tokenId = msg.speaker?.token;
                actorId = msg.speaker?.actor;
            }
        } else {
            tokenId = msg.speaker?.token === null ? "" : msg.speaker?.token;
            actorId = msg.speaker?.actor;
        }

        let compiledData = await getRequiredData({
            itemId: msg.flags?.od6s?.itemId,
            actorId: actorId,
            tokenId: tokenId,
            workflow: msg,
        })
        runOd6s(compiledData)
    });
}

async function runOd6s(input) {
    const handler = await AAHandler.make(input)
    if (!handler) { return; }
    trafficCop(handler);
}
