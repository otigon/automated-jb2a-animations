export default class Pf1Handler {
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

        this._allTargets = workflow.targets;

        this._itemName = item.name?.toLowerCase();
        this._itemSource = item.data?.data?.source?.toLowerCase() ?? '';
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

    getDistanceTo(target) {
        return MidiQOL.getDistance(target, this._actorToken);
    }

    itemIncludes() {
        return [...arguments].every(a => this._itemName?.includes(a) || this._itemSource?.includes(a));
    }
}