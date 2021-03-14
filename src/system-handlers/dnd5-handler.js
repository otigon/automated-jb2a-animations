export default class Dnd5Handler {
    constructor(msg) {
        const itemId = msg.data?.flags?.dnd5e?.roll?.itemId || $(msg.data.content).attr("data-item-id");
        //console.log(itemId);
        
        const tokenId = msg.data.speaker.token;  
        //console.log(tokenId);
        this._actorToken = canvas.tokens.get(tokenId) || canvas.tokens.placeables.find(token => token.actor.items.get(itemId) != null);
        //console.log(this._actorToken);
        //this._actorToken02 = canvas.tokens.get(tokenId);
        //console.log(this._actorToken02);
        this._allTargets = Array.from(msg.user.targets)
        this._itemName = this._actorToken.actor.items.get(itemId).name?.toLowerCase();
        //console.log(this._itemName);
        this._itemSource = this._actorToken.actor.items.get(itemId).data?.data?.source?.toLowerCase() ?? "";
        //console.log(this._itemSource);
        this._itemType = this._actorToken.actor.items?.get(itemId).data?.type?.toLowerCase();
        //console.log(this._itemType);
        this._animColor = this._actorToken.actor.items.get(itemId).data.flags?.autoanimations?.color?.toLowerCase() ?? "";
        //console.log(this._animColor);
        this._animType = this._actorToken.actor.items.get(itemId).data.flags?.autoanimations?.animName?.toLowerCase() ?? "";
        //console.log(this._animType);
        this._animName;
        switch (true) {
            case(this._animType === ``):
                this._animName = this._itemName;
                break;
            default:
                this._animName = this._animType;
                break;
        }
        this._animColorEffect;
        switch (true) {
            case(this._animColor === ``):
                this._animColorEffect = this._itemSource;
                break;
            default:
                this._animColorEffect = this._animColor;
                break;
        }
    }

    get actor() {
        return this._actorToken.actor;
    }

    get actorRace() {
        return this._actorToken.actor?.data?.data?.details?.race?.toLowerCase() ?? "";
    }

    get actorToken() {
        return this._actorToken;
    }

    get allTargets() {
        return this._allTargets;
    }

    get isValid() {
        return true;
    }

    get itemType() {
        return this._actorToken.actor.items?.get(itemId).data?.type?.toLowerCase();
    }

    get animColor() {
        return this._actorToken.actor.items.get(itemId).data.flags?.autoanimations.color?.toLowerCase() ?? "";
    }

    get animType() {
        return this._actorToken.actor.items.get(itemId).data.flags?.autoanimations.animName?.toLowerCase() ?? "";
    }
/*
    get killAnim() {
        return this._actorToken.actor.items.get(itemId).data.flags?.autoanimations?.animName?.toLowerCase() ?? "";
    }
*/
/*
    get itemType() {
        return this._actor.items.get(itemId).data.type.toLowerCase();
    }
*/
    getDistanceTo(target) {
        var x, x1, y, y1, d, r, segments = [], rdistance, distance;
        for (x = 0; x < this._actorToken.data.width; x++) {
            for (y = 0; y < this._actorToken.data.height; y++) {
                const origin = new PIXI.Point(...canvas.grid.getCenter(this._actorToken.data.x + (canvas.dimensions.size * x), this._actorToken.data.y + (canvas.dimensions.size * y)));
                for (x1 = 0; x1 < target.data.width; x1++) {
                    for (y1 = 0; y1 < target.data.height; y1++) {
                        const dest = new PIXI.Point(...canvas.grid.getCenter(target.data.x + (canvas.dimensions.size * x1), target.data.y + (canvas.dimensions.size * y1)));
                        const r = new Ray(origin, dest);
                        segments.push({ ray: r });
                    }
                }
            }
        }
        if (segments.length === 0) {
            return -1;
        }
        rdistance = canvas.grid.measureDistances(segments, { gridSpaces: true });
        distance = rdistance[0];
        rdistance.forEach(d => {
            if (d < distance)
                distance = d;
        });
        return distance;
    }
/*
    itemIncludes() {
        return [...arguments].every(a => this._itemName?.includes(a) || this._itemSource?.includes(a));
    }
    */
    itemIncludes() {
        return [...arguments].every(a => this._animName?.includes(a) || this._itemSource?.includes(a));
    }
    itemSourceIncludes() {
        return [...arguments].every(a => this._itemSource?.includes(a));
    }
    itemColorIncludes() {
        return [...arguments].every(a => this._animColorEffect?.includes(a));
    }
    itemNameIncludes() {
        return [...arguments].every(a => this._itemName?.includes(a));
    }
    itemTypeIncludes() {
        return [...arguments].every(a => this._itemType?.includes(a));
    }
    animNameIncludes() {
        return [...arguments].every(a => this._animType?.includes(a));
    }
}
