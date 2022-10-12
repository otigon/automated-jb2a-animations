
export async function getRequiredData(data) {
    //let {item, itemId, itemUuid, itemName, tokenId, token, targets, actorId, actor} = data;

    if (!data.token) {
        data.token = getToken(data);
    }
    if (!data.item) {
        data.item = await getItem(data)
    }
    if (!data.targets) {
        data.targets = Array.from(game.user.targets)
    }

    return {item: data.item, token: data.token, targets: data.targets}
}

async function getItem(data) {
    let {item, itemId, itemUuid, itemName, tokenId, token, targets, actorId, actor} = data;

    if (item) { return item }
    /*
    if (itemUuid) {
        return await getItemFromItemUuid(itemUuid)
    } else if (itemId && (actorId || actor)) {
        let idActor = actor ? actor.id : actorId
        return await getItemFromUUID(idActor, itemId)
    } else if (token && itemId) {
        return getItemFromToken(token, itemId)
    } else if (token && itemName) {
        return getItemFromName(token, itemName)
    } else if (itemId) {
        return getItemFromIdBlind(itemId)
    } else {
        return null;
    }
    */
    return itemUuid 
            ? await getItemFromItemUuid(itemUuid)
            : itemId && (actorId || actor)
            ? await getItemFromUUID(idActor, itemId)
            : token && itemId
            ? getItemFromToken(token, itemId)
            : token && itemName
            ? getItemFromName(token, itemName)
            : itemId
            ? getItemFromIdBlind(itemId)
            : null
}
async function getItemFromItemUuid(uuid) {
    return fromUuid(uuid);
}
async function getItemFromUUID(actorId, itemId) {
    return fromUuid(`Actor.${actorId}.Item.${itemId}`);
}
function getItemFromToken(token, itemId) {
    return token.actor?.items?.get(itemId)
}
function getItemFromName(token, name) {
    let items = Array.from(token.actor.items);
    return items.find(x => x.name === name)
}
function getItemFromIdBlind(id) {
    for (let token of canvas.tokens.placeables) {
        let items = Array.from(token.actor.items);
        let foundItem = items.find(c => c.id === id);
        if (foundItem) { return foundItem}
    }
}

function getToken(data) {
    let {item, itemId, itemUuid, itemName, tokenId, token, targets, actorId, actor} = data;

    if (token) { return token }
    /*
    if (tokenId) {
        return getTokenFromScene(tokenId) || getTokenFromUUID(tokenId);
    } else if (item) {
        return item.parent?.token ?? getTokenFromItemID(item.id)
    } else if (itemId) {
        return getTokenFromItemID(itemId)
    } else {
        return null;
    }
    */
    return tokenId
            ? getTokenFromScene(tokenId) || getTokenFromUUID(tokenId)
            : item
            ? item.parent?.token ?? getTokenFromItemID(item.id)
            : itemId
            ? getTokenFromItemID(itemId)
            : null
}
function getTokenFromItemID(id) {
    return canvas.tokens.placeables.find(token => token.actor?.items?.get(id) != null)
}
function getTokenFromScene(id) {
    return canvas.scene.tokens.get(id);
}
function getTokenFromUUID(id) {
    return fromUuidSync(`${canvas.scene.uuid}.Token.${id}`).object;
}
