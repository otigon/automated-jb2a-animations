import { endTiming } from "../constants/timings.js";
import { AASystemData } from "./getdata-by-system.js";
import { flagMigrations } from "./flagMerge.js";

export default class flagHandler {

    static async make(msg, isChat, external) {
        const systemID = game.system.id.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, "");
        const data = external ? external : AASystemData[systemID](msg, isChat)
        if (!data.item) { /*this._log("Retrieval Failed")*/; return {}; }
        //this._log("Data Retrieved", data)

        //console.log(data.item.data.flags.autoanimations)
        const flags = await flagMigrations.handle(data.item);
        //console.log(flags)

        return new flagHandler(data, flags)
    }

    constructor(systemData, flagData) {
        this.debug = game.settings.get("autoanimations", "debug");
        this._log("Getting System Data")
        //console.log(flagData)
        //const data = getSystemData(msg, isChat);
        //const systemID = game.system.id.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, "");
        const data = systemData;
        //if (!data) { this._log("Retrieval Failed"); return; }
        //this._log("Data Retrieved", data)
        //const item = data.item;
        //const token = data.token;
        //const targets = data.targets;
        //const hitTargets = data.hitTargets;
        const midiActive = game.modules.get('midi-qol')?.active;
        //console.log(data.item.data.flags.autoanimations)
        //this._flags = data.item.data?.flags?.autoanimations ?? "";
        this._flags = flagData ?? {};
        //console.log(data.item.data.flags.autoanimations)

        this._reach = data.reach || 0;
        this._item = data.item;
        //this._actorToken = data.token;
        //console.log(data.token.isEmbedded)
        this._actorToken = data.token.isEmbedded ? data.token.object : data.token;
        this._actor = data.token.actor;
        this._allTargets = data.targets;
        this._hitTargets = data.hitTargets;
        this._hitTargetsId = data.hitTargets ? Array.from(this._hitTargets.filter(actor => actor.id).map(actor => actor.id)) : undefined;
        this._targetsId = Array.from(this._allTargets.filter(actor => actor.id).map(actor => actor.id));

        //midi-qol specific settings
        this._playOnMiss = midiActive ? game.settings.get("autoanimations", "playonmiss") : false;
        const midiSettings = midiActive ? game.settings.get("midi-qol", "ConfigSettings") : false
        this._gmAD = midiActive ? midiSettings?.gmAutoDamage : "";
        this._userAD = midiActive ? midiSettings?.autoRollDamage : "";

        this._itemName = this._item.name?.toLowerCase() ?? "";
        this._itemMacro = this._item.data?.flags?.itemacro?.macro?.data?.name ?? "";

        this._animKill = this._flags.killAnim;
        this._below = this._flags.animLevel ?? false;
        this._animOverride = this._flags.override;
        this._animType = this._flags.animType || "";

        this._explosions = this._flags.explosions ?? {};
        this._bards = this._flags.bards ?? {};
        this._fireball = this._flags.fireball ?? {};
        this._meleeSwitch = this._flags.meleeSwitch || {};

        this._color = this._flags?.color?.toLowerCase() ?? "";
        this._animation = this._flags.animation?.toLowerCase() ?? "";

        this._options = this._flags.options ?? {};
        this._variant = this._options.variant || "01";
        this._repeat = this._options.repeat || 1;
        this._repeatDelay = this._options.delay || 250;
        this._scale = this._options.scale || 1;
        this._opacity = this._options.opacity || 0.75;
        this._persistent = this._options.persistent ?? false;
        this._enableCustom = this._options.enableCustom || false;
        this._customPath = this._options.customPath || "";
        this._auraRadius = this._options.auraRadius || "";
        this._teleDist = this._options.teleDist ?? 30;
        this._staticType = this._options.staticType || "source";
        this._anchorX = this._options.anchorX || 1;
        this._anchorY = this._options.anchorY || 1;

        this._autoOverride = this._flags.autoOverride ?? {};
        
        this._audio = this._flags.audio ?? {};
        this._allSounds = this._flags.allSounds ?? "";
        this._itemSound = this._flags.allSounds?.item?.enableAudio ?? false;
        this._explodeSound = this._flags.audio?.e01?.enable ?? false;


        this._animNameFinal;
        switch (true) {
            case ((!this._animOverride) || ((this._animOverride) && (this._animation === ``))):
                this._animNameFinal = this._itemName;
                break;
            default:
                this._animNameFinal = this._animation;
                break;
        }
        this._convertName = this._animation.replace(/\s+/g, '').toLowerCase();
        this._delay = endTiming(this._animNameFinal);
    }

    get convertedName() { return this._convertName; }
    get animEnd() { return this._delay }
    get itemMacro() { return this._itemMacro; }

    get autoOverride() { return this._autoOverride }
    
    get playOnMiss() { return this._playOnMiss }

    get actor() { return this._actor; }

    get reachCheck() { return this._reach; }

    get itemName() { return this._itemName }
    get item() { return this._item }
    get actorToken() { return this._actorToken; }
    get allTargets() { return this._allTargets; }
    get hitTargetsId() { return this._hitTargetsId; }
    get targetsId() { return this._targetsId; }

    get isValid() { return !!(this._item && this._actor); }
    get itemType() { return this._item.data.type.toLowerCase(); }

    get animKill() { return this._animKill; }
    get below() { return this._below; }
    get animOverride() { return this._animOverride; }
    get animType() { return this._animType; }

    get explosion() { return this._explosions; }
    get bards() { return this._bards; }
    get fireball() { return this._fireball }
    get meleeSwitch() { return this._meleeSwitch }

    get animation() { return this._animNameFinal; }
    get color() { return this._color; }

    get hmAnim() { return this._hmAnim; }

    get audio() { return this._audio }
    get allSounds() { return this._allSounds; }
    get itemSound() { return this._itemSound; }
    get explodeSound() { return this._explodeSound }

    get autoDamage() { return game.user.isGM ? this._gmAD : this._userAD; }
    get flags() { return this._flags; }

    get options() { return this._options }
    get variant() { return this._variant; }
    get repeat() { return this._repeat }
    get delay() { return this._repeatDelay }
    get scale() { return this._scale; }
    get opacity() { return this._opacity }
    get persistent() { return this._persistent }
    get enableCustom() { return this._enableCustom }
    get customPath() { return this._customPath }
    get auraRadius() { return this._auraRadius }
    get teleDist() { return this._teleDist; }
    get anchorX() { return this._anchorX; }
    get anchory() { return this._anchorY; }

    get hasAttack() { return this._item?.hasAttack ?? false; }
    get hasDamage() { return this._item?.hasDamage ?? false; }


    getDistanceTo(target) {
        if (game.system.id === 'pf1') {
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
            const distance = canvas.grid.grid.measureDistances([{ ray }], { gridSpaces: true })[0];
            return distance;
        } else {
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
    }

    _log(...args) {
        if (this.debug) console.log(`DEBUG | Automated Animations |`, ...args);
    }
}



