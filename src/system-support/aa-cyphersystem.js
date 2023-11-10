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
    if (input.itemId == "recovery-roll")
    {
        if ( game.settings.get("autoanimations", "EnableOnRecoveryRoll"))
        {
            new Sequence()
                .effect()
                .file(game.settings.get("autoanimations", "RecoveryRollAnimation"))
                .atLocation(input.token)
                .play();
        }
    }
    else
    {
        // others, things here can fire a Crit or Fumble
        // First crits etc
        
        const flagdata = input.workflow?.flags?.data;
        const diceRoll = flagdata?.roll?.total;
        
        if (diceRoll) {
            if (game.settings.get("autoanimations", "EnableCritical") && diceRoll >= 19)
            {
                new Sequence()
                    .effect()
                    .file(game.settings.get("autoanimations", "CriticalAnimation"))
                    .atLocation(input.token)
                    .play()
            }
            else if (game.settings.get("autoanimations", "EnableFumble") && diceRoll <= flagdata.gmiRange)
            {
                new Sequence()
                    .effect()
                    .file(game.settings.get("autoanimations", "FumbleAnimation"))
                    .atLocation(input.token)
                    .play()
            }
            else if (flagdata.pool == "Might" && game.settings.get("autoanimations", "EnableOnMightRoll"))
            {
                new Sequence()
                    .effect()
                    .file(game.settings.get("autoanimations", "MightRollAnimation"))
                    .atLocation(input.token)
                    .play()
            }
            else if (flagdata.pool == "Speed" && game.settings.get("autoanimations", "EnableOnSpeedRoll"))
            {
                new Sequence()
                    .effect()
                    .file(game.settings.get("autoanimations", "SpeedRollAnimation"))
                    .atLocation(input.token)
                    .play()
            }
            else if (flagdata.pool == "Intellect" && game.settings.get("autoanimations", "EnableOnIntellecRoll"))
            {
                new Sequence()
                    .effect()
                    .file(game.settings.get("autoanimations", "IntellectRollAnimation"))
                    .atLocation(input.token)
                    .play()
            }
        }

        // Always check for an Item animation, as well as the pool/critical/GMI animation
        if (input.item)
        {
            trafficCop(await AAHandler.make(input));
        }
    }
}