import { trafficCop }       from "../router/traffic-cop.js"
import AAHandler            from "../system-handlers/workflow-data.js";
import { getRequiredData }  from "./getRequiredData.js";

export function systemHooks() {
    Hooks.on("createChatMessage", async (msg) => {
        if (msg.user.id !== game.user.id) { return };

        let compiledData = await getRequiredData({
            itemId: msg.flags?.itemID,
            actorId: msg.speaker?.actor,
            tokenId: msg.speaker?.token,
            workflow: msg,
        })
        runCypherSystem(compiledData)
    });
}

async function runCypherSystem(input) {
    const itemId = input.itemId;

    if (itemId == "recovery-roll")
    {
        if ( game.settings.get("autoanimations", "EnableOnRecoveryRoll"))
        {	let recoverAnim = game.settings.get("autoanimations", "RecoveryRollAnimation");
        
            new Sequence()
                .effect()
                .file(recoverAnim)
                .atLocation(token)
                .play();
        }
    }
    else
    {
        // others, things here can fire a Crit or Fumble
        // First crits etc
        
        var diceRoll = 10;
        if (input.workflow._roll != null)
        {
            diceRoll = input.workflow._roll?._total;
        }
        
        let critAnim = game.settings.get("autoanimations", "CriticalAnimation");
        let fumbleAnim = game.settings.get("autoanimations", "FumbleAnimation");
        
        switch (true) {
            case (game.settings.get("autoanimations", "EnableCritical") && diceRoll == 20):
                new Sequence()
                    .effect()
                    .file(critAnim)
                    .atLocation(token)
                    .play()
                break;
            case (game.settings.get("autoanimations", "EnableFumble") && diceRoll == 1):
                new Sequence()
                    .effect()
                    .file(fumbleAnim)
                    .atLocation(token)
                    .play()
                break;
        }
        
        if (diceRoll > 1)
        {
            // not a Fumble, actually PLAY the other animation if any (Start with Speed, Might and Intellect rolls, from embedded Character Sheet GUI)
            
            if (itemId == "might-roll")
            {
                if (game.settings.get("autoanimations", "EnableOnMightRoll"))
                {
                    let mightAnim = game.settings.get("autoanimations", "MightRollAnimation");
                    new Sequence()
                    .effect()
                    .file(mightAnim)
                    .atLocation(token)
                    .play()
                }
            }
            else if (itemId == "speed-roll")
            {
                if (game.settings.get("autoanimations", "EnableOnSpeedRoll"))
                {
                    let speedAnim = game.settings.get("autoanimations", "SpeedRollAnimation");
                    new Sequence()
                    .effect()
                    .file(speedAnim)
                    .atLocation(token)
                    .play()
                }
            }
            else if (itemId == "intellect-roll")
            {
                if (game.settings.get("autoanimations", "EnableOnIntellecRoll"))
                {
                    let intellectAnim = game.settings.get("autoanimations", "IntellectRollAnimation");
                    new Sequence()
                    .effect()
                    .file(intellectAnim)
                    .atLocation(token)
                    .play()
                }
            }
            else
            {		
                // otherwise, see if we can find an item connected to this message and play any animations attached to it
                //const item = token.actor.items?.get(itemId) ?? "";
    
                //const targets = Array.from(input.user.targets);
                if (!input.item) { return; }
                const handler = await AAHandler.make(input)
                trafficCop(handler);
            }
        }
    }
}