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

        const data = systemData;

        const midiActive = game.modules.get('midi-qol')?.active;

        this.flags = flagData ?? {};

        this.reachCheck = data.reach || 0;
        this.item = data.item;
        this.hasAttack = this._item?.hasAttack ?? false;
        this.hasDamage = this._item?.hasDamage ?? false;
        this.itemName = this._item.name?.toLowerCase() ?? "";
        this.itemMacro = this._item.data?.flags?.itemacro?.macro?.data?.name ?? "";
        this.itemType = this._item.data?.type?.toLowerCase() ?? "";

        //this._actorToken = data.token;
        //console.log(data.token.isEmbedded)
        this.actorToken = data.token.isEmbedded ? data.token.object : data.token;
        this.actor = data.token.actor;
        this.allTargets = data.targets;
        this._hitTargets = data.hitTargets;
        this.hitTargetsId = data.hitTargets ? Array.from(this._hitTargets.filter(actor => actor.id).map(actor => actor.id)) : undefined;
        this.targetsId = Array.from(this._allTargets.filter(actor => actor.id).map(actor => actor.id));

        //midi-qol specific settings
        this.playOnMiss = midiActive ? game.settings.get("autoanimations", "playonmiss") : false;
        const midiSettings = midiActive ? game.settings.get("midi-qol", "ConfigSettings") : false
        this._gmAD = midiActive ? midiSettings?.gmAutoDamage : "";
        this._userAD = midiActive ? midiSettings?.autoRollDamage : "";


        this.animKill = this.flags.killAnim || false;
        this.animOverride = this.flags.override || false;
        this.animType = this.flags.animType || "";

        //this.explosion = this.flags.explosions ?? {};
        this.bards = this.flags.bards ?? {};
        //this.fireball = this.flags.fireball ?? {};


        //this.animation = this.flags.animation?.toLowerCase() ?? "";

        //this.meleeSwitch = this.flags.meleeSwitch || {};
        //this.switchType = this.meleeSwitch.switchType || {};
        //this.switchAnimation = this.meleeSwitch.switchType === 'custom' ? this.meleeSwitch.animation : this.animation
        //this.switchColor = this.meleeSwitch.color || 'white';
        //this.detect = this.meleeSwitch.detect || "auto";
        //this.return = this.meleeSwitch.returning || false;
        //this.switchVariant = this.meleeSwitch.variant || '01';
        //this.range = this.meleeSwitch.range || 2;
        //this.switchType = this.meleeSwitch.switchType || 'on';

        //this.options = this.flags.options ?? {};
        //this.variant = this.options.variant || "01";
        //this.color = this.flags?.color?.toLowerCase() ?? "";
        //this.repeat = this.options.repeat || 1;
        //this.delay = this.options.delay || 250;
        //this.scale = this.options.scale || 1;
        //this.staticType = this.options.staticType || "targetDefault";
        //this.menuType = this.options.staticOptions === 'shieldfx' ? true : false;
        //this.opacity = this.options.opacity || 1;
        //this.persistent = this.options.persistent ?? false;
        //this.below = this.flags.animLevel ?? false;
        //this.enableCustom = this.options.enableCustom || false;
        //this.customPath = this.options.customPath || "";
        //this.auraRadius = this.options.auraRadius || "";
        //this.teleDist = this.options.teleDist ?? 30;
        //this.ignoreTargets = this.options.ignoreTargets || false;
        //this._staticType = this.options.staticType || "source";
        //this.anchorX = this.options.anchorX || 1;
        //this.anchorY = this.options.anchorY || 1;

        this.autoOverride = this.flags.autoOverride ?? {};
        /*
        this.audio = this.flags.audio ?? {};
        this.itemAudio = {
            enable: this.audio.a01?.enable || false,
            file: this.audio.a01?.file,
            volume: this.audio.a01?.volume || 0.25,
            delay: this.audio.a01?.delay || 0,
        }
        this.switchAudio = {
            enable: this.audio.a02?.enable || false,
            file: this.audio.a02?.file,
            volume: this.audio.a02?.volume || 0.25,
            delay: this.audio.a02?.delay || 0,
        }
        */
        //this.allSounds = this.flags.allSounds ?? "";
        //this.itemSound = this.flags.allSounds?.item?.enableAudio ?? false;
        //this.explodeSound = this.flags.audio?.e01?.enable ?? false;


/*
        this._animNameFinal;
        switch (true) {
            case ((!this._animOverride) || ((this._animOverride) && (this.animation === ``))):
                this._animNameFinal = this._itemName;
                break;
            default:
                this._animNameFinal = this.animation;
                break;
        }
        */
        this.convertedName = this.animation.replace(/\s+/g, '');
        this.animEnd = endTiming(this._animNameFinal);
    }

    get isValid() { return !!(this._item && this._actor); }
    //get itemType() { return this._item.data.type.toLowerCase(); }

    //get autoDamage() { return game.user.isGM ? this._gmAD : this._userAD; }


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



