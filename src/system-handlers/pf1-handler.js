export default class Pf1Handler {
    constructor(message) {
        const item = message?.itemSource;
        const actor = item?.options?.actor;
    
        if (!item || !actor) {
            return;
        }

        this._item = item;
        this._actor = actor;    
        this._actorToken = canvas.tokens.ownedTokens.find(x => x.actor.id === actor.id);
        this._allTargets = Array.from(message.user.targets)
        this._itemName = item.name?.toLowerCase();

        // getting flag data from Animation Tab
        this._flags = item?.data?.flags?.autoanimations ?? "";;
        // 
        this._animColor = this._flags.color?.toLowerCase() ?? "";
        this._animName = this._flags.animName?.toLowerCase() ?? "";
        this._animExColor = this._flags.explodeColor?.toLowerCase() ?? "";
        this._animExRadius = this._flags.explodeRadius?.toLowerCase() ?? "";
        this._animExVariant = this._flags.explodeVariant?.toLowerCase() ?? "";
        this._animType = this._flags.animType?.toLowerCase() ?? "";
        this._animKill = this._flags.killAnim;
        this._animOverride = this._flags.override;
        this._animExplode = this._flags.explosion;
        this._animDgThrVar = this._flags.dtvar?.toLowerCase() ?? "";

        this._animNameFinal;
        switch (true) {
            case((!this._animOverride) || ((this._animOverride) && (this._animName === ``))):
                this._animNameFinal = this._itemName;
                break;
            default:
                this._animNameFinal = this._animName;
                break;
        }

    }

    get actor() {
        return this._actor;
    }

    get actorRace() {
        // todo
        return "";
    }

    get reachCheck() {
        // to do
        return 0;
    }

    get actorToken() {
        return this._actorToken;
    }

    get allTargets() {
        return this._allTargets;
    }

    get isValid() {
        return !!(this._item && this._actor);
    }

    get itemType() {
        return this._actor.items.get(this._item.id).data.type.toLowerCase();
    }

    get checkSaves() {
        return;
    }

    get animColor() {
        return this._animColorEffect;
    }

    get animName() {
        return this._animNameFinal;
    }

    get animExColor() {
        return this._animExColor;
    }

    get animExRadius() {
        return this._animExRadius;
    }

    get animExVariant() {
        return this._animExVariant;
    }

    get animType() {
        return this._animType;
    }

    get animKill() {
        return this._animKill;
    }

    get animOverride() {
        return this._animOverride;
    }

    get animExplode() {
        return this._animExplode;
    }

    get animDagThrVar() {
        return this._animDgThrVar;
    }

    getDistanceTo(target) {
        const scene = game.scenes.active;
        const gridSize = scene.data.grid;

        const left = (token) => token.data.x;
        const right = (token) => token.data.x + token.w;
        const top = (token) => token.data.y;
        const bottom = (token) => token.data.y + token.h;

        const isLeftOf = right(this._actorToken) <= left(target);
        const isRightOf = left(this._actorToken) >= right(target);
        const isAbove = bottom(this._actorToken) <= top(target);
        const isBelow = top(this._actorToken) >= bottom(target);

        let x1 = left(this._actorToken);
        let x2 = left(target);
        let y1 = top(this._actorToken);
        let y2 = top(target);

        if (isLeftOf) {
            x1 += (this._actorToken.data.width - 1) * gridSize;
        }
        else if (isRightOf) {
            x2 += (target.data.width - 1) * gridSize;
        }

        if (isAbove) {
            y1 += (this._actorToken.data.height - 1) * gridSize;
        }
        else if (isBelow) {
            y2 += (target.data.height - 1) * gridSize;
        }

        const ray = new Ray({ x: x1, y: y1 }, { x: x2, y: y2 });
        const distance = canvas.grid.grid.measureDistances([{ray}], {gridSpaces: true})[0];
        return distance;
    }

    itemIncludes() {
        return [...arguments].every(a => this._itemName?.includes(a));
    }

    itemSourceIncludes() {
        return [...arguments].every(a => this._itemSource?.includes(a));
    }
    itemColorIncludes() {
        return [...arguments].every(a => this._animColor?.includes(a));
    }
    itemNameIncludes() {
        return [...arguments].every(a => this._animNameFinal?.includes(a));
    }
    itemTypeIncludes() {
        return [...arguments].every(a => this._itemType?.includes(a));
    }
    animNameIncludes() {
        return [...arguments].every(a => this._animName?.includes(a));
    }

}