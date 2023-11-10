// Support added by Wibble199
// With thanks to @dodgepong (Lancer Weapon FX) for help

import AAHandler from "../system-handlers/workflow-data";
import { getRequiredData } from "./getRequiredData";
import { trafficCop } from "../router/traffic-cop";

export function systemHooks() {
	// The Lancer system does not expose any hooks for rolling items, so have to rely on reading the chat messages.
	Hooks.on("createChatMessage", async (msg) => {
		if (msg.user.id !== game.user.id) return;

		const itemData = getHandlerInputData(msg);
		if (!itemData) {
			return;
		}

		// getRequiredData attempts to resolve the token. It does so by first looking to see if an item has been passed
		// in the parameter object. If there is an item or item ID, it tries to get the owner of that item. This works
		// fine for weapons. However, in cases where the Lancer system does not provide an item/I'm using a fake item
		// (e.g. stabilize), then because getRequiredData can't access the item's owner, it defaults to using null as
		// the source token, even if I've provided a tokenId. So, if the itemData I've got from the chat message does
		// not contain either an itemId or an item object with an ID, then resolve the token here, and pass that in to
		// get around this issue.
		if (!itemData.itemId && !itemData.item?.id) {
			itemData.token = game.canvas.tokens.get(msg.speaker?.token);
		}

		const compiledData = await getRequiredData({
			...itemData,
			actorId: msg.speaker?.actor,
			tokenId: msg.speaker?.token,
			workflow: msg
		});

		const handler = await AAHandler.make(compiledData);
		if (!handler?.item || !handler?.sourceToken) return;
		
		trafficCop(handler);
	});
}

function getHandlerInputData(msg) {
	const parser = new DOMParser();
	const messageDocument = parser.parseFromString(msg.content, "text/html");

	// As far as I can tell AA only seems to use the item.name property, so in some cases here I just pass a fake object
	// if there is no actual item (such as for core systems, or things such as "Overheat"). It's hacky but seems to work


	// Try to grab the data from the roll data that is encoded in the template.
	// Massive shout out to @dodgepong for this!
	const encodedRollData = messageDocument.querySelector("[data-macro]")?.dataset["macro"];
	if (encodedRollData) {
		const rollData = JSON.parse(decodeURIComponent(atob(encodedRollData)));

		switch (rollData.fn) {
			case "prepareEncodedAttackMacro":
			case "prepareActivationMacro":
				// args[1] is the ID of the item that triggered the macro
				// If the user clicked the generic "Melee/Ranged" button, args[1] will be null. In this case we'll not
				// do any animation.
				const itemId = rollData.args[1];
				if (!!itemId) return { itemId };
				break;

			case "prepareTechMacro":
				// args[1] is the ID of the item that triggered the macro
				// If the user clicked the generic "Tech" button, args[1] will be null. In this case, return a fake obj
				// with the name "Tech Attack".
				const techId = rollData.args[1];
				if (!!techId) return { itemId: techId };
				return { item: { name: "Tech Attack" } };
			
			case "prepareOverheatMacro":
				return { item: { name: "Overheat" } };

			case "prepareStructureMacro":
				return { item: { name: "Structure Damage" } };
		}
	}

	// Item IDs not provided in message data, so try and pull from the HTML
	// For items, there is a `data-id` attribute in the root HTML content for the chat message
	const itemId = messageDocument.body.children[0]?.dataset["id"];
	if (!!itemId) {
		return { itemId };
	}

	// Some other systems (such as cores or NPC features), do not have an item ID or roll data, so see if we can grab
	// the name from the chat card header and sent that as a fake item.
	const headerText = messageDocument.querySelector('.lancer-header')?.textContent;
	if (typeof headerText === 'string' && !!headerText.length) {
		const headerTextRinised = rinseHeader(headerText);
		// Used to check here whether this was the core system, but there are other items too that don't have an ID nor
		// roll data. There's probably too many places to check, so going to make the assumption that if the chat card
		// has a header, that header text can be used as the item name.

		// Stabilize headers are "// <MECH NAME> HAS STABILIZED//", so special case for that.
		if (headerTextRinised.toLowerCase().endsWith("has stabilized")) {
			return { item: { name: "Stabilize" } };
		}

		return { item: { name: headerTextRinised } };
	}

	// Overcharging does not use the header like many other features, have to check a different element instead.
	const statHeaderText = messageDocument.querySelector(".lancer-stat-header")?.textContent;
	if (typeof statHeaderText === 'string' && !!statHeaderText.length) {
		const statHeaderTextRinsed = rinseHeader(statHeaderText);

		// Overcharging is in the form "// <MECH NAME> is OVERCHARGING //"
		if (statHeaderTextRinsed.toLowerCase().endsWith("is overcharging")) {
			return { item: { name: "Overcharge" } };
		}
	}

	// Otherwise, it's probably just a normal chat message or something, so ignore
	return false;
}

/** @param {string} headerText */
function rinseHeader(headerText) {
	if (headerText.startsWith("// "))
		headerText = headerText.slice(3);
	if (headerText.endsWith(" //"))
		headerText = headerText.slice(0, headerText.length - 3);
	return headerText;
}
