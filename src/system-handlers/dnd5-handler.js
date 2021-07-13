export default class Dnd5Handler {
    constructor(msg) {
        //if (msg.alias === "User Logged In") {return}
        let msgAtr = this.extractItemId(msg.data.content);
        const itemId = msg.data?.flags?.dnd5e?.roll?.itemId || msgAtr || msg.data?.flags?.["midi-qol"]?.itemId;
        const tokenId = msg.data.speaker.token;  
        this._actorToken = canvas.tokens.get(tokenId) || canvas.tokens.placeables.find(token => token.actor?.items?.get(itemId) != null);

        if (!itemId || !this._actorToken) {
            return;
        }

        this._itemId = itemId;
        this._allTargets = Array.from(msg.user.targets);
        this._itemName = this._actorToken.actor?.items?.get(itemId)?.name?.toLowerCase() ?? "";
        this._itemSource = this._actorToken.actor.items.get(itemId)?.data?.data?.source?.toLowerCase() ?? "";
        this._itemType = this._actorToken.actor.items?.get(itemId)?.data?.type?.toLowerCase();
        this._itemMacro = this._actorToken.actor.items?.get(itemId)?.data?.flags?.itemacro?.macro?.data?.name ?? "";
        this._item = this._actorToken.actor.items?.get(itemId) ?? "";

        // getting flag data from Animation Tab
        this._flags = this._actorToken.actor.items?.get(itemId)?.data?.flags?.autoanimations ?? "";
        // 
        this._animLevel = this._flags.animLevel ?? false;
        this._animColor = this._flags?.color?.toLowerCase() ?? "";
        this._animName = this._flags.animName?.toLowerCase() ?? "";
        this._explodeColor = this._flags.explodeColor?.toLowerCase() ?? "";
        this._explodeDelay = this._flags.explodeDelay ?? 0;
        this._exAnimLevel = this._flags.exAnimLevel ?? false;
        this._impactVar = this._flags.impactVar ?? "";
        this._explodeRadius = this._flags.explodeRadius ?? 10;
        this._explodeVariant = this._flags.explodeVariant?.toLowerCase() ?? "";
        this._animExLoop = this._flags.explodeLoop ?? "";
        this._animType = this._flags.animType?.toLowerCase() ?? "";
        this._animKill = this._flags.killAnim;
        this._animOverride = this._flags.override;
        this._explosion = this._flags.explosion;
        this._dtvar = this._flags.dtvar?.toLowerCase() ?? "";
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
        this._bards = this._flags.bards ?? "";
        this._allSounds = this._flags.allSounds ?? "";
        this._itemSound = this._flags.allSounds?.item?.enableAudio ?? false;
        this._explodeSound = this._flags.allSounds?.explosion?.audioExplodeEnabled ?? false;
        this._spellLoops = this._flags.spellOptions?.spellLoops ?? 1;
        this._divineSmite = this._flags.divineSmite ?? "";
        this._rangedOptions = this._flags.rangedOptions ?? "";
        this._animLoops = this._flags.options?.loops ?? 1;
        this._loopDelay = this._flags.options?.loopDelay ?? 250;
        this._scale = this._flags.options?.scale ?? 1;
        this._templates = this._flags.templates ?? "";
        this._templatePersist = this._flags.templates?.persistent ?? false;
        this._templateOpacity = this._flags.templates?.opacity ?? 0.75;

        //console.log(this._animName);
        this._animNameFinal;
        switch (true) {
            case((!this._animOverride) || ((this._animOverride) && (this._animName === ``))):
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
        //console.log(this._animColorEffect);
    }

    get item () {
        return this._item;
    }
    
    get itemMacro () {
        return this._itemMacro;
    }

    get playOnMiss() {
        return false;
    }

    get actor() {
        return this._actorToken.actor;
    }
    
    get reachCheck() {
        let reach = 0;
        if (this._actorToken.actor?.data?.data?.details?.race?.toLowerCase() === 'bugbear') {
            reach += 5;
        }
        if (this._actorToken.actor?.items?.get(this._itemId)?.data?.data?.properties?.rch) {
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

    get targetAssistant() {
        return this._allTargets;
    }

    get isValid() {
        return true;
    }

    get itemType() {
        return this._actorToken.actor.items?.get(itemId).data?.type?.toLowerCase();
    }

    get checkSaves() {
        return;
    }

    get animColor() {
        return this._animColorEffect;
    }
            
    get color () {
        return this._animColor;
    }

    get defaultColor() {
        return this._defaultColor;
    }

    get animName() {
        return this._animNameFinal;
    }

    get impactVar() {
        return this._impactVar;
    }

    get explosionColor() {
        return this._explodeColor;
    }

    get explosionRadius() {
        return this._explodeRadius;
    }

    get explosionVariant() {
        return this._explodeVariant;
    }

    get explosionDelay() {
        return this._explodeDelay;
    }

    get explosionLevel() {
        return this._exAnimLevel;
    }

    get explosionLoops() {
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

    get explosion() {
        return this._explosion;
    }

    get dtvar() {
        return this._dtvar;
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

    get bards() {
        return this._bards;
    }

    get allSounds() {
        return this._allSounds;
    }

    get itemSound() {
        return this._itemSound;
    }

    get explodeSound() {
        return this._explodeSound
    }
  
    get spellLoops() {
        return this._spellLoops;
    }

    get divineSmite() {
        return this._divineSmite;
    }

    get hasAttack() {
        return this._item.hasAttack;
    }

    get flags() {
        return this._flags;
    }
    
    get rangedOptions() {
        return this._rangedOptions;
    }

    get animationLoops() {
        return this._animLoops;
    }

    get loopDelay() {
        return this._loopDelay;
    }

    get scale() {
        return this._scale;
    }
    get animLevel() {
        return this._animLevel;
    }

    get templates() {
        return this._templates;
    }

    get templatePersist() {
        return this._templatePersist
    }

    get templateOpacity() {
        return this._templateOpacity
    }

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

    extractItemId(content) {
        try {
            return $(content).attr("data-item-id");
        } catch (exception) {
            console.log("Autoanimations | Couldn´t extract data-item-id for message :", content);
            return null;
        }
    }
}
