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

        //this._allTargets = Array.from(workflow.targets);
        this._checkSave = Array.from(workflow.saves);
        //saves = Array.from(checkSave.filter(actor => actor.id).map(actor => actor.id));

        if (game.settings.get("automated-jb2a-animations", "playonhit")) {
            this._allTargets = Array.from(workflow.hitTargets);
        } else {
            this._allTargets = Array.from(workflow.targets);
        }    

        this._itemName = item.name?.toLowerCase();
        console.log(this._itemName);
        this._itemSource = item.data?.data?.source?.toLowerCase() ?? '';
        this._itemType = item.data.type.toLowerCase();
    }

    get actor() {
        return this._actor;
    }

    get actorRace() {
        // todo
        return "";
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

    getDistanceTo(target) {
        return MidiQOL.getDistance(target, this._actorToken);
    }

    itemIncludes() {
        return [...arguments].every(a => this._itemName?.includes(a) || this._itemSource?.includes(a));
    }
    itemSourceIncludes() {
        return [...arguments].every(a => this._itemSource?.includes(a));
    }
    itemNameIncludes() {
        return [...arguments].every(a => this._itemName?.includes(a));
    }
    itemTypeIncludes() {
        return [...arguments].every(a => this._itemType?.includes(a));
    }
}

