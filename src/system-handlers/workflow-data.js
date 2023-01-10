import { uuidv4 } from "@typhonjs-fvtt/runtime/svelte/util";
import { debug } from "../constants/constants.js";
import { handleItem } from "./findAnimation.js";
import { endTiming } from "../constants/timings.js";

export default class AAHandler {
    static async make(data) {
        const animationData = await handleItem(data);
        if (!animationData) { 
            debug(`No Animation matched for Item`, data )
            return false;
        }
        return new AAHandler({...data, animationData});
    }
    constructor (data) {
        debug("Compiling Automated Animations data");

        this.animationData = data.animationData;
        
        this.isActiveEffect = data.activeEffect ?? false;

        this.systemId = game.system.id;
        this.workflow = this.isActiveEffect ? "on" : data.workflow;
        if (this.isActiveEffect) {
            this.workflowBackup = data.workflow;
        }

        this.sourceToken = data.token?.isEmbedded ? data.token?.object : data.token;

        this.item = data.ammoItem || data.item;
        this.itemUuid = this.item?.uuid || uuidv4();
        this.itemName = !this.isActiveEffect || this.systemId === "pf2e" ? this.item.name : this.item.label;
        this.rinsedName = data.rinsedName || this.itemName ? this.itemName.replace(/\s+/g, '').toLowerCase() : "";

        this.reachCheck = data.reach || 0;
        this.allTargets = data.targets;
        this.hitTargets = data.hitTargets;
        this.hitTargetsId = data.hitTargets ? Array.from(this.hitTargets.filter(actor => actor.id).map(actor => actor.id)) : [];
        this.playOnMiss = data.playOnMiss ?? (game.modules.get('midi-qol')?.active || game.system.id === 'pf2e' ? game.settings.get("autoanimations", "playonmiss") : false) ?? false;

        this.menu = this.animationData.menu;

        this.templateData = data.templateData;

        this.systemData = data;
        /**
         * Optional parameters passed from System Specific Settings thru this.systemData:
         * @param {Number} overrideRepeat // override the Repeat parameter for Primary and Secondary animations
         * @param {Boolean} forceMiss // force a Ranged animation to use the .missed() method
         * @param {Boolean} tieToDocuments // sets the Sequencer method for .tieToDocument()
         */
    }

    get isTemplateItem () {
        const presetType = this.animationData.presetType;
        return this.menu === 'templatefx' ||  (this.menu === 'preset' && presetType === "proToTemp") || (this.menu === 'preset' && presetType === "thunderwave")
    }

    get isAura () {
        return this.menu === "aura" 
    }

    get isTeleport() {
        if (this.menu !== 'preset') {
            return false;
        }
        return this.animationData.presetType === "teleportation";
    }

    get macroActive() {
        return this.flags.macro?.enable && this.flags.macro?.name
    }

    // Sets the Elevation of the Effect
    elevation(token = {}, abs = false, level = 0) {
        return abs ? level : level - 1; 
    }

    // Sets the Size of the effect
    getSize(isRadius = false, size = 1, token, addToken = false) {
        return isRadius 
            ? addToken ? (size * 2) + (token.w / canvas.grid.size) : size * 2 
            : (token.w / canvas.grid.size) * 1.5 * size;
    }

    // Returns distance from Source Token to a given Target
    getDistance(target) {
        if (this.systemId === "pf1") {
            // This code was provided by David (AKA Claudekennilol) specific for PF1
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
            return distance / canvas.dimensions.distance;
        } else {
            // This code was written by TPosney for Midi-QOL. It is adapated here for A-A
            const t1 = this.sourceToken;
            const noResult = { distance: -1, acBonus: undefined };
            if (!canvas || !canvas.scene)
                return noResult;
            if (!canvas.grid || !canvas.dimensions)
                noResult;
            if (!t1 || !target)
                return noResult;
            if (!canvas || !canvas.grid || !canvas.dimensions)
                return noResult;
            //@ts-ignore
            const t1StartX = t1.document.width >= 1 ? 0.5 : t1.document.width / 2;
            const t1StartY = t1.document.height >= 1 ? 0.5 : t1.document.height / 2;
            const t2StartX = target.document.width >= 1 ? 0.5 : target.document.width / 2;
            const t2StartY = target.document.height >= 1 ? 0.5 : target.document.height / 2;
            var x, x1, y, y1, d, r, segments = [], rdistance, distance;
            for (x = t1StartX; x < t1.document.width; x++) {
                for (y = t1StartY; y < t1.document.height; y++) {
                    const origin = new PIXI.Point(...canvas.grid.getCenter(Math.round(t1.document.x + (canvas.dimensions.size * x)), Math.round(t1.document.y + (canvas.dimensions.size * y))));
                    for (x1 = t2StartX; x1 < target.document.width; x1++) {
                        for (y1 = t2StartY; y1 < target.document.height; y1++) {
                            const dest = new PIXI.Point(...canvas.grid.getCenter(Math.round(target.document.x + (canvas.dimensions.size * x1)), Math.round(target.document.y + (canvas.dimensions.size * y1))));
                            const r = new Ray(origin, dest);
                            segments.push({ ray: r });
                        }
                    }
                }
            }
            if (segments.length === 0) {
                return noResult;
            }
            rdistance = segments.map(ray => canvas.grid.measureDistances([ray], { gridSpaces: true })[0]);
            distance = rdistance[0];
            rdistance.forEach(d => {
                if (d < distance)
                    distance = d;
            });
            return distance / canvas.dimensions.distance;
        }
    }
    
    // Returns a Target Animation Sequence
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
    
    // Returns a pseudo Token X/Y for Ranged effects
    fakeSource() {
        let templateSource = Sequencer.EffectManager.getEffects({sceneId: canvas.scene.id, name: this.rinsedName})[0];
        if (!templateSource) { return this.sourceToken; }

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