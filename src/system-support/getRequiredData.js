
export async function getRequiredData(data) {
    let {itemId, tokenId, item, token, targets} = data;

    if (!item && !token && !tokenId && itemId) {

    }


    if (!item) { item = await getItem(itemId); }
    if (!token) { token = getToken(tokenId, item); }
    if (!targets) { targets = Array.from(game.user.targets); }

    return {item, token, targets}
}

async function getItem(itemId) {    

    //return await fromUuid(`Item.${itemId}`);
}

function getToken(tokenId, item, itemId) {
    if (tokenId) {
        return canvas.scene.tokens.get(tokenId);
    } else if (!item) {
        return canvas.token.placeables.find(token => token.actor?.items?.get(itemId))
    } else {
        return item?.parent?.token ? item.parent.token : canvas.token.placeables.find(token => token.actor?.items?.get(item.id))
    }

    /*
    let token = item.parent.token 
                ? item.parent.token
                : tokenId
                ? canvas.tokens.get(tokenId)
                : canvas.tokens.placeables.find(token => token.actor?.items?.get(data.itemId) != null);
    return token;
    */
}
