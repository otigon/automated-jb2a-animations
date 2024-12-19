import { trafficCop }       from "../router/traffic-cop.js"
import AAHandler            from "../system-handlers/workflow-data.js";
import { getRequiredData }  from "./getRequiredData.js";

export function systemHooks() {
    Hooks.on("createChatMessage", async (msg) => {
 		if (msg.user.id !== game.user.id) { return };
        const systemName = 'impmal';

        //v11 handling
        if(msg.flags[systemName]?.test) {
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
        }
        //v12 handling
        else {
            if (msg.system.class =="WeaponTest") {
	        	let compiledData = await getRequiredData({
                    actorId: msg.speaker.actor ?? msg.system.context.speaker.actor,
                    targets: compileTargets(msg.system.context.targetSpeakers),
	        		itemId: msg.system.context.weaponId,
	                workflow: msg,
	        	})	
	        	if (msg.system.data.burst == true) compiledData.overrideRepeat=3
	        	if (msg.system.data.rapidFire == true) compiledData.overrideRepeat=6
            
                if (!compiledData.item) { return; }
                runImpMal(compiledData)
                checkCrit(msg.system.result)

	        } else {
	        	 let compiledData = await getRequiredData({
                    actorId: msg.speaker.actor ?? msg.system.context.speaker.actor,
                    targets: compileTargets(msg.system.context.targetSpeakers),
	        		itemId: msg.system.context.powerId,
	                workflow: msg,
                })
	        	if (!compiledData.item) { return; }
                runImpMal(compiledData)	
	        }
        }
	});
}	

function compileTargets(targets) {
  if (!targets) { return []; }
  return Array.from(targets).map(sceneTarget => canvas.tokens.get(sceneTarget.token));
}

async function runImpMal(input) {
    const handler = await AAHandler.make(input);
    trafficCop(handler);
}

async function checkCrit(result) {
    if(!result.critical) return;

    let critAnim = game.settings.get("autoanimations", "criticalAnimation");
    if(!critAnim) return;

    let critSequence = new Sequence({moduleName: "Automated Animations", softFail: !game.settings.get("autoanimations", "debug")});

    for(let target of game.user.targets){
        critSequence
        .effect()
        .file(critAnim)
        .atLocation(target)
        .missed()
        .delay(100)
    }

    critSequence.play();
}
