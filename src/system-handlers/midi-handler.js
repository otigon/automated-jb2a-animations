export default class MidiHandler {
    constructor(workflow) {
        const item = workflow.item;
        this._actorToken = canvas.tokens.get(workflow.tokenId) || canvas.tokens.placeables.find(token => token.actor.items.get(item._id) != null);
        const actor = this._actorToken?.actor;
        if (!item || !actor) {
            return;
        }
        this._item = item;
        this._actor = actor;

        this._actorToken = canvas.tokens.get(workflow.tokenId) || canvas.tokens.placeables.find(token => token.actor.items.get(item._id) != null);

        // getting flag data from Animation Tab
        this._flags = item.data?.flags?.autoanimations ?? "";;
        //
        this._animColor = this._flags?.color?.toLowerCase() ?? "";
        this._animName = this._flags.animName?.toLowerCase() ?? "";
        this._animExColor = this._flags.explodeColor?.toLowerCase() ?? "";
        this._animExRadius = this._flags.explodeRadius?.toLowerCase() ?? "";
        this._animExVariant = this._flags.explodeVariant?.toLowerCase() ?? "";
        this._animType = this._flags.animType?.toLowerCase() ?? "";
        this._animKill = this._flags.killAnim;
        this._animOverride = this._flags.override;
        this._animExplode = this._flags.explosion;
        this._animDgThrVar = this._flags.dtvar?.toLowerCase() ?? "";

        this._checkSave = Array.from(workflow.saves);

        if (game.settings.get("automated-jb2a-animations", "playonhit")) {
            this._allTargets = Array.from(workflow.hitTargets);
        } else {
            this._allTargets = Array.from(workflow.targets);
        }

        this._itemName = item.name?.toLowerCase() ?? '';;
        this._itemSource = item.data?.data?.source?.toLowerCase() ?? '';
        this._itemType = item.data.type.toLowerCase();

        this._animNameFinal;
        switch (true) {
            case ((!this._animOverride) || ((this._animOverride) && (this._animName === ``))):
                this._animNameFinal = this._itemName;
                break;
            default:
                this._animNameFinal = this._animName;
                break;
        }
        //console.log(this._animNameFinal);
        this._animColorEffect;
        switch (true) {
            case (this._animColor === ``):
                this._animColorEffect = this._itemSource;
                break;
            default:
                this._animColorEffect = this._animColor;
                break;
        }


    }

    get actor() {
        return this._actor;
    }

    get actorRace() {
        return this._actorToken.actor?.data?.data?.details?.race?.toLowerCase() ?? "";
    }

    get reachCheck() {
        return this._item.data.data.properties.rch;
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
        return this._item.data.type.toLowerCase();
    }

    get checkSaves() {
        return this._checkSaves;
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
        return MidiQOL.getDistance(target, this._actorToken);
    }

    itemIncludes() {
        return [...arguments].every(a => this._animNameFinal?.includes(a) || this._itemSource?.includes(a));
    }
    itemSourceIncludes() {
        return [...arguments].every(a => this._itemSource?.includes(a));
    }
    itemColorIncludes() {
        return [...arguments].every(a => this._animColorEffect?.includes(a));
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

