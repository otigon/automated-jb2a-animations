export function getItemTokenFromMessage(msg) {

    const systemID = game.system.id;

    if (systemID === 'dnd5e') {
        const msgAtr = this.extractItemId(msg.data?.content);
        let itemId = msg.data?.flags?.dnd5e?.roll?.itemId || msgAtr || msg.data?.flags?.["midi-qol"]?.itemId;
        const tokenId = msg.data?.speaker?.token;
        const token = canvas.tokens.get(tokenId) || canvas.tokens.placeables.find(token => token.actor?.items?.get(itemId) != null);
        let item = token.actor?.items?.get(itemId);
        if (item.data?.flags?.autoanimations?.options?.ammo && item.data?.data?.consume?.type === "ammo") {
            itemId = item.data.data.consume.target;
            item = this._actorToken.actor.items?.get(itemId) ?? "";
        } 
        return { item, token };
    }
    if (systemID === 'D35E') {
        const itemId = this.extractItemId(msg.data?.content);
        const tokenId = msg.data?.speaker?.token;
        const token = canvas.tokens.get(tokenId) || canvas.tokens.placeables.find(token => token.actor?.items?.get(itemId) != null);
        const item = token.actor.items?.get(itemId) ?? null;
        return { item, token };
    }
    if (systemID === 'sw5e') {
        const itemId = msg.data?.flags?.sw5e?.roll?.itemId;
        const tokenId = msg.data?.speaker?.token;
        const token = canvas.tokens.get(tokenId) || canvas.tokens.placeables.find(token => token.actor?.items?.get(itemId) != null);
        const item = token.actor.items?.get(itemId) ?? "";
        return { item, token };
    }
    if (systemID === 'pf1') {
        const item = message?.itemSource;
        const tokenId = message.data.speaker.token;  
        const token = canvas.tokens.get(tokenId) || canvas.tokens.placeables.find(token => token.actor?.items?.get(item?.id) != null);
        return { item, token };
    }
    if (systemID === 'pf2e') {
        const item = msg.item;
        const token = msg.token || canvas.tokens.placeables.find(token => token.actor?.items?.get(item?.id) != null);
        return { item, token };
    }

}

function extractItemId(content) {
    try {
        return $(content).attr("data-item-id");
    } catch (exception) {
        console.log("Autoanimations | Couldn´t extract data-item-id for message :", content);
        return null;
    }
}
