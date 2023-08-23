// Support added by Wibble199

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
	const html = $(msg.content);

	// Item IDs not provided in message data, so try and pull from the HTML
	// For items, there is a `data-id` attribute in the root HTML content for the chat message
	const itemId = html.data('id');
	if (!!itemId) {
		return { itemId };
	}

	// Core systems are not items, but as far as I can tell AA only seems to use the item.name property, so we can just
	// pass a fake object if the template's title matches the mech's core system.
	// This is a bit hacky but seems to work :)
	const headerText = html.find('.lancer-header').text();
	if (typeof headerText === 'string' && !!headerText.length) {
		const headerTextRinised = rinseHeader(headerText);
		const actor = msg.speaker?.actor && game.actors.get(msg.speaker.actor);
		const frame = actor?.items.find(i => i.type === "frame");

		if (frame?.system?.core_system?.active_name?.toLowerCase() === headerTextRinised.toLowerCase()) {
			return { item: { name: headerTextRinised } };
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
