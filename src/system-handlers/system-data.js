import { endTiming } from "../constants/timings.js";
import { AASystemData } from "./getdata-by-system.js";
import { flagMigrations } from "./flagMerge.js";
import { AutorecFunctions } from "../aa-classes/autorecFunctions.js";

export default class systemData {

    static async make(msg, isChat, external) {
        const systemID = game.system.id.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, "");
        const data = external ? external : await AASystemData[systemID](msg, isChat)
        if (!data.item) { /*this._log("Retrieval Failed")*/; return {}; }
        //this._log("Data Retrieved", data)

        const flags = await flagMigrations.handle(data.item);

        return new systemData(data, flags, msg);
    }

    constructor(systemData, flagData, msg) {
        this.debug = game.settings.get("autoanimations", "debug");
        this._log("Getting System Data")

        const data = systemData;
        this.gameSystem = game.system.id;

        const midiActive = game.modules.get('midi-qol')?.active;
        this.systemId = game.system.id;
        this.workflow = msg || "";
        this.flags = flagData ?? {};
        this.animation = this.flags.animation || "";

        this.reachCheck = data.reach || 0;
        this.item = data.item;
        this.itemUuid = this.item?.uuid;

        this.hasAttack = this.item?.hasAttack ?? false;
        this.hasDamage = this.item?.hasDamage ?? false;
        this.itemName = this.item.name?.toLowerCase() || this.item.sourceName?.toLowerCase();

        if (this.systemId === 'pf2e') {
            const pf2eRuleTypes = ['condition', 'effect', 'feat'];
            this.isPF2eRuleset = pf2eRuleTypes?.includes(this.item.type);    
        }

        this.isActiveEffect = this.item?.uuid?.includes("ActiveEffect") || this.isPF2eRuleset ? true : false;

        if (this.isActiveEffect) {
            if (this.systemId === 'dnd5e' || this.systemId === 'pf1' || this.systemId === 'wfrp4e' || this.systemId === "sfrpg") {
                this.itemName = this.item.data?.label || "placeholder";
            }
            if (this.systemId === 'pf2e') {
                this.itemName = this.item.name.replace(/[^A-Za-z0-9 .*_-]/g, "");
            }
            this.workflow = this.item.data?.flags?.autoanimations?.aaAeStatus;
        }

        this.itemMacro = this.item.data?.flags?.itemacro?.macro?.data?.name ?? "";
        this.itemType = this.item.data?.type?.toLowerCase() ?? "";

        this.sourceToken = data.token?.isEmbedded ? data.token?.object : data.token;
        this.actor = data.token?.actor;
        this.allTargets = data.targets;
        this.hitTargets = data.hitTargets;
        this.hitTargetsId = data.hitTargets ? Array.from(this.hitTargets.filter(actor => actor.id).map(actor => actor.id)) : [];
        this.targetsId = Array.from(this.allTargets.filter(actor => actor.id).map(actor => actor.id));

        //midi-qol specific settings
        this.playOnMiss = data.playOnMiss || (midiActive || game.system.id === 'pf2e' ? game.settings.get("autoanimations", "playonmiss") : false) || false;
        //this.playOnMiss = true;
        const midiSettings = midiActive ? game.settings.get("midi-qol", "ConfigSettings") : false
        this._gmAD = midiActive ? midiSettings?.gmAutoDamage : "";
        this._userAD = midiActive ? midiSettings?.autoRollDamage : "";


        this.isDisabled = this.flags.killAnim || false;
        this.isCustomized = this.flags.override || false;
        this.animType = this.flags.animType || "";

        this.bards = this.flags.bards ?? {};

        this.autorecOverrides = this.flags.autoOverride ?? {};

        this.animNameFinal;
        switch (true) {
            case ((!this.flags.override) || ((this.flags.override) && (this.animation === ``))):
                this.animNameFinal = this.itemName;
                break;
            default:
                this.animNameFinal = this.animation;
                break;
        }
        
        this.animEnd = endTiming(this.animNameFinal);
        this.autorecSettings = game.settings.get('autoanimations', 'aaAutorec');

        this.rinsedName = this.itemName ? AutorecFunctions._rinseName(this.itemName) : "noitem";
        this.isAutorecTemplateItem = AutorecFunctions._autorecNameCheck(AutorecFunctions._getAllNamesInSection(this.autorecSettings, 'templates'), this.rinsedName);
        this.autorecObject = this.isActiveEffect || this.pf2eRuleset ? AutorecFunctions._findObjectIn5eAE(this.autorecSettings, this.rinsedName) : AutorecFunctions._findObjectFromArray(this.autorecSettings, this.rinsedName);
    
        // If there is no match and there are alternative names, then attempt to use those names instead
        if (!this.autorecObject && data.extraNames?.length) {
            for (const name of data.extraNames) {
                const rinsedName = AutorecFunctions._rinseName(name);
                this.autorecObject = AutorecFunctions._findObjectFromArray(this.autorecSettings, rinsedName);
                if (this.autorecObject) {
                    this.rinsedName = rinsedName;
                    break;
                }
            }
        }

        this.isAutorecFireball = false;
        this.isAutorecAura = false;
        this.isAutorecTeleport = false;
        this.isAutoThunderwave5e = false;
        if (this.autorecObject && !this.isCustomized) {
            this.isAutorecFireball = this.autorecObject.menuSection === "preset" && this.autorecObject.animation === "fireball" ? true : false;
            this.isAutorecAura = this.autorecObject.menuSection === "auras" ? true : false;
            this.isAutorecTeleport = this.autorecObject?.menuSection === "preset" && this.autorecObject?.animation === 'teleportation' ? true : false;
            this.isAutoThunderwave5e = this.autorecObject?.menuSection === 'preset' && this.autorecObject?.animation === 'thunderwave' ? true : false;
        }
        this.isAutorecTemplate = (this.isAutorecTemplateItem || this.isAutorecFireball) && !this.isCustomized ? true : false;

        this.isOverrideTemplate = (this.animType === "template" && this.isCustomized) || (this.animType === "preset" && this.flags.animation === "fireball" && this.isCustomized) ? true : false;
        this.isOverrideAura = this.animType === "aura" && this.isCustomized ? true: false;
        this.isOverrideTeleport = (this.animType === "preset" && this.flags.animation === "teleportation") || this.isAutorecTeleport ? true : false;
        //this.isAutorecTeleport = this.autorecObject.menuSection === "preset" && this.autorecObject.animation === 'teleportation' ? true: false;
        this.decoupleSound = game.settings.get("autoanimations", "decoupleSound");
        this.isThunderwave5e = (this.animType === 'preset' && this.isCustomized && this.flags.animation === 'thunderwave'); 
    }

    get shouldPlayImmediately () {
        return this.isOverrideAura || this.isAutorecAura || this.isOverrideTemplate || this.isAutorecTemplate || this.isOverrideTeleport || this.isAutorecTeleport || this.isThunderwave5e || this.isAutoThunderwave5e;
    }

    get soundNoAnimation () {
        return this.flags.audio?.a01?.enable && this.flags.audio?.a01?.file
    }

    get macroOnly () {
        return this.flags.macro?.enable && this.flags.macro?.name
    }

    getDistanceTo(target) {
        if (game.system.id === 'pf1') {
            const scene = game.scenes.active;
            const gridSize = scene.data.grid;

            const left = (token) => token.data.x;
            const right = (token) => token.data.x + token.w;
            const top = (token) => token.data.y;
            const bottom = (token) => token.data.y + token.h;

            const isLeftOf = right(this.sourceToken) <= left(target);
            const isRightOf = left(this.sourceToken) >= right(target);
            const isAbove = bottom(this.sourceToken) <= top(target);
            const isBelow = top(this.sourceToken) >= bottom(target);

            let x1 = left(this.sourceToken);
            let x2 = left(target);
            let y1 = top(this.sourceToken);
            let y2 = top(target);

            if (isLeftOf) {
                x1 += (this.sourceToken.data.width - 1) * gridSize;
            }
            else if (isRightOf) {
                x2 += (target.data.width - 1) * gridSize;
            }

            if (isAbove) {
                y1 += (this.sourceToken.data.height - 1) * gridSize;
            }
            else if (isBelow) {
                y2 += (target.data.height - 1) * gridSize;
            }

            const ray = new Ray({ x: x1, y: y1 }, { x: x2, y: y2 });
            const distance = canvas.grid.grid.measureDistances([{ ray }], { gridSpaces: true })[0];
            return distance;
        } else {
            var x, x1, y, y1, d, r, segments = [], rdistance, distance;
            for (x = 0; x < this.sourceToken.data.width; x++) {
                for (y = 0; y < this.sourceToken.data.height; y++) {
                    const origin = new PIXI.Point(...canvas.grid.getCenter(this.sourceToken.data.x + (canvas.dimensions.size * x), this.sourceToken.data.y + (canvas.dimensions.size * y)));
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



