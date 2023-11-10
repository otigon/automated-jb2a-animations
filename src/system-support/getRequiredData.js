import { aaDeletedItems } from "../deletedItems";

export async function getRequiredData(data) {
    //let {item, itemId, itemUuid, itemName, token, tokenId, tokenUuid, targets, targetIds, actorId, actor, templateId, ammoId} = data;

    // set up token and item ... and try to set up token some more if it still doesn't work
    if (!data.token) {
        data.token = getToken(data);
    }
    if (!data.item) {
        data.item = await getItem(data)
    }
    // Super hacky way of trying to get an AOE item cast by the Magic Items module
    if (!data.item && data.itemUuid) {
        if (game.modules.get("magicitems")?.active) {
            const splitUuid = data.itemUuid.split('.');
            const id = splitUuid[splitUuid.length - 1];
            data.item = game.packs.get("dnd5e.spells")?.index?.get(id)
        }
    }
    if (!data.token && data.item) {
        // Last ditch effort to find a token
        data.token = data.item.parent?.token ?? getTokenFromItemID(data.item.id) ?? _token
    }
    if (!data.token) {
        data.token = _token;
    }

    // set up targets
    if (!data.targets && data.targetIds?.length) {
        data.targets = data.targetIds.map((id) => canvas.scene.tokens.get(id)?.object).filter(x => !!x);
    }
    if (!data.targets) {
        data.targets = Array.from(game.user.targets)
    }

    // set up ammo
    if (data.ammoId && !data.ammoItem && data.token) {
        data.ammoItem = getItemFromToken(data.token, data.ammoId);
    }

    // set up template
    if (!data.templateData && data.templateDataId) {
        data.templateData = canvas.scene.templates.get(data.templateDataId);
    }
    if (data.templateData) {
        data.isTemplate = true;
    }

    // set up empty name arrays so each system handler doesn't have to define them on their own
    data.extraNames ||= [];
    data.overrideNames ||= [];

    return { ...data }
    //return {item: data.item, token: data.token, targets: data.targets}
}

async function getItem(data) {
    let {item, itemId, itemUuid, itemName, token, tokenId, tokenUuid, targets, actorId, actor} = data;
    return itemUuid 
            ? await getItemFromUuid(itemUuid)
            : token && itemId
            ? getItemFromToken(token, itemId)
            : tokenId && itemId
            ? getItemFromTokenId(tokenId, itemId)
            : tokenUuid && itemId
            ? getItemFromTokenUuid(tokenUuid, itemId)
            : token && itemName
            ? getItemFromName(token, itemName)
            : itemId && (actorId || actor)
            ? await getItemFromCompiledUuid(itemId, actor, actorId)
            : itemId
            ? checkDeletedItems(itemId) || getItemFromIdBlind(itemId)
            : null
}
async function getItemFromUuid(uuid) {
    return await fromUuid(uuid) || checkDeletedItems(uuid)
}
function checkDeletedItems(id) {
    let idSplit = id.split('.');
    return aaDeletedItems.get(idSplit[idSplit.length - 1]) || false;
}
// TO-DO: This can return null in some instances, follow up 
async function getItemFromCompiledUuid(itemId, actor, actorId) {
    const idActor = actor ? actor.id : actorId;
    return await fromUuid(`Actor.${idActor}.Item.${itemId}`);
}
function getItemFromToken(token, itemId) {
    return token.actor?.items?.get(itemId)
}
function getItemFromTokenId(tokenId, itemId) {
    let token = getTokenFromScene(tokenId) || getTokenFromCompiledUuid(tokenId);
    if (!token) { return; }
    return getItemFromToken(token, itemId);
}
function getItemFromTokenUuid(tokenUuid, itemId) {
    let token = getTokenFromUuid(tokenUuid);
    if (!token) { return; }
    return getItemFromToken(token, itemId);
}
function getItemFromName(token, name) {
    let items = Array.from(token.actor.items);
    return items.find(x => x.name === name)
}
function getItemFromIdBlind(id) {
    for (let token of canvas.tokens.placeables) {
        let items = Array.from(token.actor.items);
        let foundItem = items.find(c => c.id === id);
        if (foundItem) { return foundItem || false}
    }
}


function getToken(data) {
    let {item, itemId, itemUuid, itemName, token, tokenId, tokenUuid, targets, actorId, actor} = data;

    return item
            ? item.parent?.token ?? getTokenFromItemID(item.id) 
            : tokenUuid
            ? getTokenFromUuid(tokenUuid)
            : tokenId
            ? getTokenFromScene(tokenId) || getTokenFromCompiledUuid(tokenId)
            : itemId
            ? getTokenFromItemID(itemId)
            : actor || actorId
            ? getTokenFromActor(actor, actorId)
            : null
}
function getTokenFromItemID(id) {
    let tokens = canvas.tokens.placeables.filter(token => token.actor?.items?.get(id));
    let trueToken = tokens.length > 1 ? tokens.find(x => x.id === _token.id) || tokens[0] : tokens[0];
    return trueToken;
}
function getTokenFromScene(id) {
    return canvas.scene.tokens.get(id);
}
function getTokenFromUuid(uuid) {
    return fromUuidSync(uuid)?.object;
}
function getTokenFromCompiledUuid(id) {
    return fromUuidSync(`${canvas.scene.uuid}.Token.${id}`)?.object;
}
function getTokenFromActor(actor, actorId) {
    let idActor = actor ? actor.id : actorId;
    let foundActor = fromUuidSync(idActor);
    if (!foundActor) { return null }
    let token = foundActor.getActiveTokens();
    return Array.isArray(token) ? token[0] : token;
}
