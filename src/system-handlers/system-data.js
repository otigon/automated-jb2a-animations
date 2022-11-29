import { uuidv4 } from "@typhonjs-fvtt/runtime/svelte/util";
import { debug } from "../constants/constants.js";
import { endTiming } from "../constants/timings.js";
//import { AASystemData } from "./getdata-by-system.js";
import { flagMigrations } from "../mergeScripts/items/itemFlagMerge.js";
import { AAAutorecFunctions } from "../aa-classes/aaAutorecFunctions.js";

export default class systemData {

    static async make(data) {
        //const systemID = game.system.id.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, "");
        //const data = external ? external : AASystemData[systemID] ? await AASystemData[systemID](msg, isChat) : await AASystemData.standardChat(msg)
        if (!data.item) { debug("Item Retrieval Failed", data); return {}; }

        //let isActiveEffect = external ? data.activeEffect : false;
        let isActiveEffect = data.activeEffect;

        const flags = await flagMigrations.handle(data.item, {isActiveEffect});

        return new systemData(data, flags);
    }

    constructor(data, flagData) {
        debug("Compiling Automated Animations data")
        this.gameSystem = game.system.id;

        const midiActive = game.modules.get('midi-qol')?.active;
        this.systemId = game.system.id;
        this.workflow = data.workflow;
        this.flags = flagData ?? {};
        //this.animation = this.flags.animation || "";

        this.reachCheck = data.reach || 0;
        this.item = data.item;
        this.itemUuid = this.item?.uuid || uuidv4();

        this.hasAttack = this.item?.hasAttack ?? false;
        this.hasDamage = this.item?.hasDamage ?? false;
        this.itemName = this.item.name?.toLowerCase() || this.item.sourceName?.toLowerCase();

        if (this.systemId === 'pf2e') {
            const pf2eActiveEffects = ['condition', 'effect'];
            this.isPF2eActiveEffect = this.item?.rules?.[0]?.key === "BattleForm" ? false : pf2eActiveEffects?.includes(this.item.type);
        }

        this.isActiveEffect = data.activeEffect;

        if (this.isActiveEffect) {
            if (this.systemId === 'pf2e') {
                this.itemName = this.item.name.replace(/[^A-Za-z0-9 .*_-]/g, "");
            } else {
                this.itemName = this.item.label || "placeholder";
            }
            this.workflow = "on";
        }

        if (this.workflow === "on") {
            this.workflowBackup = data.workflow || {};
        }

        this.itemMacro = this.item.flags?.itemacro?.macro?.name ?? "";
        this.itemType = this.item.type?.toLowerCase() ?? "";

        this.sourceToken = data.token?.isEmbedded ? data.token?.object : data.token;
        this.actor = data.token?.actor;
        this.allTargets = data.targets;
        this.hitTargets = data.hitTargets;
        this.hitTargetsId = data.hitTargets ? Array.from(this.hitTargets.filter(actor => actor.id).map(actor => actor.id)) : [];
        this.targetsId = Array.from(this.allTargets.filter(actor => actor.id).map(actor => actor.id));

        //midi-qol specific settings
        this.playOnMiss = data.playOnMiss || (midiActive || game.system.id === 'pf2e' ? game.settings.get("autoanimations", "playonmiss") : false) || false;

        this.animEnd = endTiming(this.animNameFinal);

        //this.autorecSettings = game.settings.get('autoanimations', 'aaAutorec');
        this.autorecSettings = {
            melee: game.settings.get("autoanimations", "aaAutorec-melee"),
            range: game.settings.get("autoanimations", "aaAutorec-range"),
            ontoken: game.settings.get("autoanimations", "aaAutorec-ontoken"),
            templatefx: game.settings.get("autoanimations", "aaAutorec-templatefx"),
            aura: game.settings.get("autoanimations", "aaAutorec-aura"),
            preset: game.settings.get("autoanimations", "aaAutorec-preset"),
            aefx: game.settings.get("autoanimations", "aaAutorec-aefx"),
        }

        this.rinsedName = this.itemName ? AAAutorecFunctions.rinseName(this.itemName) : "noitem";

        if (this.isActiveEffect || this.isPF2eActiveEffect) {
            this.autorecObject = AAAutorecFunctions.singleMenuSearch(this.autorecSettings.aefx, this.rinsedName);
        } else if (data.isTemplate) {
            this.autorecObject = AAAutorecFunctions.singleMenuSearch(this.autorecSettings.templatefx, this.rinsedName);
            if (!this.autorecObject) {
                this.autorecObject = AAAutorecFunctions.singleMenuSearch(this.autorecSettings.preset, this.rinsedName);
                this.autorecObject?.presetType === "proToTemp" ? "" : this.autorecObject = false;
            }
            if (!this.autorecObject) {
                this.autorecObject = AAAutorecFunctions.singleMenuSearch(this.autorecSettings.aura, this.rinsedName);
            }
        } else {
            this.autorecObject = AAAutorecFunctions.allMenuSearch(this.autorecSettings, this.rinsedName);
        }

        //Disabling the PF2e fallback to treat these as normal Active Effect type animations
        //if (!this.autorecObject && game.system.id === "pf2e") {
            /* fallback assignment for active effects, default assignment otherwise. */
            //this.autorecObject = AAAutorecFunctions.allMenuSearch(this.autorecSettings, this.rinsedName);
        //} 
    
        // If there is no match and there are alternative names, then attempt to use those names instead
        if (!this.autorecObject && data.extraNames?.length && !this.isActiveEffect && !this.isPF2eActiveEffect) {
            for (const name of data.extraNames) {
                const rinsedName = AAAutorecFunctions.rinseName(name);
                this.autorecObject = AAAutorecFunctions.allMenuSearch(this.autorecSettings, rinsedName);
                if (this.autorecObject) {
                    this.rinsedName = rinsedName;
                    break;
                }
            }
        }

        this.isEnabled = this.flags.isEnabled ?? true;
        this.isCustomized = this.isActiveEffect ? this.flags.isCustomized && this.flags.activeEffectType ? true : false : this.flags.isCustomized && this.flags.menu ? true : false;
        this.templateData = data.templateData ? data.templateData : undefined;

        if (this.isCustomized) {
            this.menu = this.flags.menu
        } else if (this.autorecObject ) {
            this.menu = this.autorecObject.menu
        }
    }

    get shouldPlayImmediately () {

        if (this.autorecObject || this.isCustomized) {
            const menuType = this.isCustomized ? this.menu : this.autorecObject.menu;
            const presetType = this.isCustomized ? this.flags?.preset?.presetType : this.autorecObject.presetType;

            return menuType === 'templatefx' || menuType === "aura" || (menuType === "preset" && (presetType === "proToTemp" || presetType === 'teleportation' || presetType === 'thunderwave'))
        } else {
            return false;
        }
        //return this.isOverrideAura || this.isAutorecAura || this.isOverrideTemplate || this.isAutorecTemplate || this.isOverrideTeleport || this.isAutorecTeleport || this.isThunderwave5e || this.isAutoThunderwave5e;
    }

    get onUse5e () {
        const menuType = this.isCustomized ? this.menu : this.autorecObject.menu;
        const presetType = this.isCustomized ? this.flags?.preset?.presetType : this.autorecObject.presetType;
        return menuType === "aura" || (menuType === "preset" && presetType === 'teleportation')

    }

    get isTemplateItem () {
        const menuType = this.isCustomized ? this.menu : this.autorecObject.menu;
        const presetType = this.isCustomized ? this.flags?.preset?.presetType : this.autorecObject.presetType;

        return menuType === 'templatefx' ||  (menuType === 'preset' && presetType === "proToTemp") || (menuType === 'preset' && presetType === "thunderwave")
    }

    get isAura () {
        return this.menu === "aura" 
    }

    get isTeleport() {
        if (this.menu !== 'preset') {
            return false;
        }
        if (this.isCustomized) {
            return this.flags.presetType === "teleportation";
        } else if (this.autorecObject) {
            return this.autorecObject.presetType === "teleportation";
        }
        //return this.menu === "preset" && 
    }

    get playOnUse() {
        const flags = this.isCustomized ? this.flags : this.autorecObject ? this.autorecObject : {};
        return this.menu === "preset" &&  flags.presetType === "teleportation" || this.menu === "aura";
    }

    get soundNoAnimation () {
        return this.flags.audio?.a01?.enable && this.flags.audio?.a01?.file
    }

    get macroOnly() {
        return this.flags.macro?.enable && this.flags.macro?.name
    }

    elevation(token = {}, abs = false, level = 0) {
        return abs ? level : level - 1; 
    }

    getSize(isRadius = false, size = 1, token, addToken = false) {
        return isRadius 
            ? addToken ? ((size * 2) + ((token.w ? (token.w / canvas.grid.size) : token.width))) : size * 2 
            : ((token.w ? (token.w / canvas.grid.size) : token.width)) * 1.5 * size;
    }

    getDistanceTo(target) {
        /*
        if (game.system.id === 'pf1') {
            const scene = game.scenes.active;
            const gridSize = scene.grid.size;

            const left = (token) => token.x;
            const right = (token) => token.x + token.w;
            const top = (token) => token.y;
            const bottom = (token) => token.y + token.h;

            const isLeftOf = right(this.sourceToken) <= left(target);
            const isRightOf = left(this.sourceToken) >= right(target);
            const isAbove = bottom(this.sourceToken) <= top(target);
            const isBelow = top(this.sourceToken) >= bottom(target);

            let x1 = left(this.sourceToken);
            let x2 = left(target);
            let y1 = top(this.sourceToken);
            let y2 = top(target);

            if (isLeftOf) {
                x1 += (this.sourceToken.document.width - 1) * gridSize;
            }
            else if (isRightOf) {
                x2 += (target.document.width - 1) * gridSize;
            }

            if (isAbove) {
                y1 += (this.sourceToken.document.height - 1) * gridSize;
            }
            else if (isBelow) {
                y2 += (target.document.height - 1) * gridSize;
            }

            const ray = new Ray({ x: x1, y: y1 }, { x: x2, y: y2 });
            const distance = canvas.grid.grid.measureDistances([{ ray }], { gridSpaces: true })[0];
            return distance;
        } else {  
        */ 
            return canvas.grid.measureDistance(this.sourceToken, target, {gridSpaces: true});
        //}
    }

    buildTargetSeq(targetFX, target, addDelay = 0) {
        let hit;
        if (this.playOnMiss) {
            hit = this.hitTargetsId.includes(target.id) ? true : false;
        } else {
            hit = true;
        }
    
        //const targetTokenGS = targetFX.options.isRadius ? targetFX.options.size * 2 : (target.w / canvas.grid.size) * 1.5 * targetFX.options.size;
        const setSize = this.getSize(targetFX.options.isRadius, targetFX.options.size, target)
    
        targetFX.targetSeq = new Sequence();
    
        let targetEffect = targetFX.targetSeq.effect()
        targetEffect.delay(targetFX.options.delay + addDelay)
        targetEffect.file(targetFX.path?.file, true)
        targetEffect.atLocation(target)
        targetEffect.size(setSize, { gridUnits: true })
        targetEffect.origin(this.itemUuid)
        targetEffect.repeats(targetFX.options.repeat, targetFX.options.repeatDelay)
        targetEffect.elevation(targetFX.options.isAbsolute ? targetFX.options.elevation : targetFX.options.elevation - 1, {absolute: targetFX.options.isAbsolute})
        if (targetFX.options.isMasked) {
            targetEffect.mask(target)
        }
        if (targetFX.options.rotateSource) {
            targetEffect.rotateTowards(this.sourceToken)
            targetEffect.rotate(180)    
        }
        if (targetFX.options.persistent) {
            targetEffect.persist(true, {persistTokenPrototype: true})
        }
        targetEffect.fadeOut(500)
        targetEffect.opacity(targetFX.options.opacity)
        targetEffect.zIndex(targetFX.options.zIndex)
        targetEffect.anchor({x: targetFX.options.anchor.x, y: targetFX.options.anchor.y})
        targetEffect.playbackRate(targetFX.options.playbackRate)

        return targetFX;
    }
    
    fakeSource(token) {
        let templateSource = Sequencer.EffectManager.getEffects({sceneId: canvas.scene.id, name: this.rinsedName})[0];
        if (!templateSource) { return token; }

        let gridSize = canvas.grid.size / 2;
        let tsXmin = templateSource.source.x - (templateSource.source.width / 2) + gridSize;
        let tsXmax = templateSource.source.x + (templateSource.source.width / 2) - gridSize;
        let tsYmin = templateSource.source.y - (templateSource.source.height / 2) + gridSize;
        let txYmax = templateSource.source.y + (templateSource.source.height / 2) - gridSize;
        let newX = Sequencer.Helpers.random_int_between(tsXmin, tsXmax);
        let newY = Sequencer.Helpers.random_int_between(tsYmin, txYmax);
        return {x: newX, y: newY}
    }
}



