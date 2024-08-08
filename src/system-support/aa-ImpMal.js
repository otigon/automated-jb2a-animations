import { trafficCop }       from "../router/traffic-cop.js"
import AAHandler            from "../system-handlers/workflow-data.js";
import { getRequiredData }  from "./getRequiredData.js";

export function systemHooks() {
    Hooks.on("createChatMessage", async (msg) => {
 		if (msg.user.id !== game.user.id) { return };
        const systemName = 'impmal';
	
	if (msg.flags[systemName].test.class =="WeaponTest") {
		let compiledData = await getRequiredData({
            actorId: msg.speaker.actor ?? msg.flags[systemName].test.context.speaker.actor,
            targets: compileTargets(msg.flags[systemName].test.context.targetSpeakers),
			itemId: msg.flags[systemName].test.context.weaponId,
	        workflow: msg,
		})	
		if (msg.flags[systemName].test.data.burst == true) compiledData.overrideRepeat=3
		if (msg.flags[systemName].test.data.rapidFire == true) compiledData.overrideRepeat=6

        if (!compiledData.item) { return; }
        runImpMal(compiledData)
        
	} else {
		 let compiledData = await getRequiredData({
            actorId: msg.speaker.actor ?? msg.flags[systemName].test.context.speaker.actor,
            targets: compileTargets(msg.flags[systemName].test.context.targetSpeakers),
			itemId: msg.flags[systemName].test.context.powerId,
	        workflow: msg,
        })
		if (!compiledData.item) { return; }
        runImpMal(compiledData)
	
	
	}
	});
}	

function compileTargets(targets) {
  if (!targets) { return []; }
  return Array.from(targets).map(sceneTarget => canvas.tokens.get(sceneTarget.token));
}

async function runImpMal(input) {
    console.log(input);
    const handler = await AAHandler.make(input);
    trafficCop(handler);
}
