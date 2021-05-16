export default class MidiHandler {
    constructor(workflow) {
        const item = workflow.item;
        this._actorToken = canvas.tokens.get(workflow.tokenId) || canvas.tokens.placeables.find(token => token.actor?.items?.get(item._id) != null);
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
        this._animExLoop = this._flags.explodeLoop ?? "";
        this._animType = this._flags.animType?.toLowerCase() ?? "";
        this._animKill = this._flags.killAnim;
        this._animOverride = this._flags.override;
        this._animExplode = this._flags.explosion;
        this._animDgThrVar = this._flags.dtvar?.toLowerCase() ?? "";
        this._selfRadius = this._flags.selfRadius ?? "";
        this._animTint = this._flags.animTint ?? "";
        this._auraOpacity = this._flags.auraOpacity ?? "";
        this._ctaOption = this._flags.ctaOption ?? "";
        this._hmAnim = this._flags.hmAnim ?? "";
        this._uaStrikeType = this._flags.uaStrikeType ?? "";
        this._teleDist = this._flags.teleDist ?? "";
        this._spellVar = this._flags.spellVar ?? "";
        this._bardTarget = this._flags.bards?.bardTarget ?? true;
        this._bardSelf = this._flags.bards?.bardSelf ?? true;
        this._bardAnim = this._flags.bards?.bardAnim ?? "";

        this._checkSave = Array.from(workflow.saves);
        this._savesId = Array.from(this._checkSave.filter(actor => actor.id).map(actor => actor.id));

        this._hitTargets = Array.from(workflow.hitTargets);
        this._hitTargetsId = Array.from(this._hitTargets.filter(actor => actor.id).map(actor => actor.id));
        this._targets = Array.from(workflow.targets);
        this._targetsId = Array.from(this._targets.filter(actor => actor.id).map(actor => actor.id));
        switch (true) {
            case (game.settings.get("automated-jb2a-animations", "playonmiss")):
                this._allTargets = Array.from(workflow.targets);
                break;
            case (game.settings.get("automated-jb2a-animations", "playonhit")):
                this._allTargets = Array.from(workflow.hitTargets);
                break;
            default:
                this._allTargets = Array.from(workflow.targets);
            }
        
        this._playOnMiss = game.settings.get("automated-jb2a-animations", "playonmiss");
        /*
        if (game.settings.get("automated-jb2a-animations", "playonhit")) {
            this._allTargets = Array.from(workflow.hitTargets);
        } else {
            this._allTargets = Array.from(workflow.targets);
        }
        */
        // separate due to Midi Hit Target List for Targeting Assistant
        this._targetAssistant = Array.from(workflow.targets);

        this._itemName = item.name?.toLowerCase() ?? '';;
        this._itemSource = item.data?.data?.source?.toLowerCase() ?? '';
        this._itemType = item.data.type.toLowerCase();
        this._itemMacro = this._item.data?.flags?.itemacro?.macro?.data?.name ?? "";

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
            case(this._animColor === ``):
                this._animColorEffect = this._itemSource;
                break;
            default:
                this._animColorEffect = this._animColor;
                break;
        }


    }

    get itemMacro () {
        return this._itemMacro;
    }

    get playOnMiss() {
        return this._playOnMiss;
    }

    get actor() {
        return this._actor;
    }

    get reachCheck() {
        let reach = 0;
        if (this._actorToken.actor?.data?.data?.details?.race?.toLowerCase() === 'bugbear') {
            reach += 5;
        }
        if (this._item.data?.data?.properties?.rch) {
            reach +=5;
        }
        return reach;
    }

    get actorToken() {
        return this._actorToken;
    }

    get allTargets() {
        return this._allTargets;
    }

    get hitTargetsId() {
        return this._hitTargetsId;
    }

    get targetsId() {
        return this._targetsId;
    }

    get targetAssistant() {
        return this._targetAssistant;
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
            
    get color () {
        return this._animColor;
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

    get animExLoop() {
        return this._animExLoop;
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

    get selfRadius() {
        return this._selfRadius;
    }

    get animTint() {
        return this._animTint;
    }

    get auraOpacity() {
        return this._auraOpacity;
    }

    get ctaOption() {
        return this._ctaOption;
    }

    get hmAnim() {
        return this._hmAnim;
    }

    get uaStrikeType() {
        return this._uaStrikeType;
    }

    get teleRange() {
        return this._teleDist;
    }

    get spellVariant() {
        return this._spellVar;
    }

    get bardTarget() {
        return this._bardTarget;
    }

    get bardSelf() {
        return this._bardSelf;
    }

    get bardAnim() {
        return this._bardAnim;
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

