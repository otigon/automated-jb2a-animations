import { debug }            from "../constants/constants.js";
import { trafficCop }       from "../router/traffic-cop.js";
import AAHandler            from "../system-handlers/workflow-data.js";
import { getRequiredData }  from "./getRequiredData.js";

// ARS System hooks provided to run animations
export function systemHooks() {
	Hooks.on("createChatMessage", async (msg) => {
		if(msg.flags.criticaled){
			let critAnim = game.settings.get("autoanimations", "CriticalAnimation");
			// run critical attack
			new Sequence({moduleName: "Automated Animations", softFail: !game.settings.get("autoanimations", "debug")})
				.effect()
				.file(critAnim)
				.atLocation(canvas.tokens.get(msg.flags.targetLoc))
				.scaleToObject(2)
				.play();
	}

	if(msg.flags.fumbled){
		let critMissAnim = game.settings.get("autoanimations", "CriticalMissAnimation");
			new Sequence({ moduleName: "Automated Animations", softFail: !game.settings.get("autoanimations", "debug") })
				.effect()
				.file(critMissAnim)
				.atLocation(canvas.tokens.get(msg.speaker.token))
				.scaleToObject(2)
				.play();
	}
	   
	if(msg.flags.item){
		useItem(await getRequiredData({item: msg.flags.item, actor: msg.flags.actor, workflow: msg.flags.item}));
	}
	else if(msg.flags.action){
		useItem(await getRequiredData({item: msg.flags.action, actor: msg.flags.actor, workflow: msg.flags.action}));
	}
  });
	 
}

async function useItem(input) {
	debug("Item used, checking for animations")
	const handler = await AAHandler.make(input)
	if (!handler?.item || !handler?.sourceToken) { console.log("Automated Animations: No Item or Source Token", handler); return;}
	trafficCop(handler)
}

async function attack(input) {
	checkAmmo(input)
	debug("Attack rolled, checking for animations");
	const handler = await AAHandler.make(input)
	if (!handler?.item || !handler?.sourceToken) { console.log("Automated Animations: No Item or Source Token", handler); return;}
	trafficCop(handler)
}

function checkAmmo(data) {
	//const ammo = data.item?.flags?.autoanimations?.fromAmmo;
	const ammoType = data.item?.system?.consume?.type;
	data.ammoItem = ammoType === "ammo" ? data.token?.actor?.items?.get(data.item?.system?.consume?.target) : null;
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

// Pending implementation
/*
function criticalCheck(workflow, item = {}) {
    if (!workflow.isCritical && !workflow.isFumble) { return; }
    debug("Checking for Crit or Fumble")
    let critical = workflow.isCritical;
    let fumble = workflow.isFumble;
    let token = canvas.tokens.get(workflow.tokenId) || getTokenFromItem(item);;

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
*/
    function getTokenFromItem(item) {
        let token = item?.parent?.token;
        if (token) { return token }
        let tokens = canvas.tokens.placeables.filter(token => token.actor?.items?.get(item.id));
        let trueToken = tokens.length > 1 ? tokens.find(x => x.id === _token.id) || tokens[0] : tokens[0];
        return trueToken;
    }
