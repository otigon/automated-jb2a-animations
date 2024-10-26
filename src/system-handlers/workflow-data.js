import { Hashing } from "#runtime/util";
import { debug, custom_notify } from "../constants/constants.js";
import { handleItem } from "./findAnimation.js";
// import { endTiming } from "../constants/timings.js";
import { sourceEffect, secondaryEffect, targetEffect, macroSection } from "./commonSequences.js";
import { AnimationState } from "../AnimationState.js";

export default class AAHandler {
    static async make(data) {
        if (!AnimationState.enabled) {
            custom_notify("Animations are Disabled from the Automated Animations Settings", true);
            return false;
        }
        // Deep Clones the data sent by the system prep
        let clonedData = foundry.utils.deepClone(data);

        // Checks the item for any animation data on the item itself, or in the global menu
        let animationData = await handleItem(clonedData);

        // Hook to signify the start of the A-A workflow;
        Hooks.callAll("AutomatedAnimations-WorkflowStart", clonedData, animationData);

        // Can be added from the above Hook to stop the A-A workflow
        if (clonedData.stopWorkflow) {
            debug(`Animation Workflow was interrupted by an External Source`, clonedData )
            return;
        }

        // recheckAnimation can be passed as a Boolean to let A-A know it needs to recheck for Animations.
        // Useful for changing out the Item to be processed mid-stream
        let newAnimationData;
        if (clonedData.recheckAnimation) {
            newAnimationData = await handleItem(clonedData);
            // If no Animation data is found for the newly passed Item, resets to the Original Item
            if (!newAnimationData) {
                clonedData.item = data.item
            }
        }

        // If no Animation data is matched, returns False and stops workflow
        if (!animationData && !newAnimationData) {
            debug(`No Animation matched for Item`, clonedData )
            return false;
        }

        // Determines the animation data to be used, either original or new.
        let finalAnimationData = newAnimationData ? newAnimationData : animationData
        return new AAHandler({...clonedData, finalAnimationData});
    }
    constructor (data) {
        debug("Compiling Automated Animations data");

        this.animationData = data.finalAnimationData;

        this.isActiveEffect = data.activeEffect ?? false;

        this.systemId = game.system.id;
        this.workflow = this.isActiveEffect ? "on" : data.workflow;
        if (this.isActiveEffect) {
            this.workflowBackup = data.workflow;
        }

        this.sourceToken = data.token?.isEmbedded ? data.token?.object : data.token;

        this.item = data.ammoItem || data.item;
        this.itemUuid = this.item?.uuid || Hashing.uuidv4();
        this.itemName = this.item.name ?? this.item.label;
        this.rinsedName = data.rinsedName || this.itemName ? this.itemName.replace(/\s+/g, '').toLowerCase() : "";

        this.reachCheck = data.reach || 0;
        this.allTargets = data.targets;
        this.hitTargets = data.hitTargets;
        this.hitTargetsId = data.hitTargets ? Array.from(this.hitTargets.filter(actor => actor.id).map(actor => actor.id)) : [];
        this.playOnMiss = data.playOnMiss ?? (game.modules.get('midi-qol')?.active || game.system.id === 'pf2e' ? game.settings.get("autoanimations", "playonmiss") : false) ?? false;

        this.menu = this.animationData.menu;

        this.templateData = data.templateData;

        this.sequenceData = {moduleName: "Automated Animations", softFail: !game.settings.get("autoanimations", "debug")}

        this.systemData = data;
        /**
         * Optional parameters passed from System Specific Settings thru this.systemData:
         * @param {Number} overrideRepeat // override the Repeat parameter for Primary and Secondary animations
         * @param {Boolean} forceMiss // force a Ranged animation to use the .missed() method
         * @param {Boolean} tieToDocuments // sets the Sequencer method for .tieToDocument()
         */
    }

    get isTemplateAnimation () {
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

    complileMacroSection(seq, macro, handler = this) {
        macroSection(seq, macro, handler)
    }
    runMacro(macro, handler = this) {
        let userData = macro.args;
        if (foundry.utils.isNewerVersion(game.version, 11)) {
            new Sequence(handler.sequenceData)
                .macro(macro.name, {args: [handler.workflow, handler, userData]})
                .play()
        } else {
            if (game.modules.get("advanced-macros")?.active) {
                new Sequence(handler.sequenceData)
                    .macro(macro.name, handler.workflow, handler, userData)
                    .play()
            } else {
                new Sequence(handler.sequenceData)
                    .macro(macro.name)
                    .play()
            }
        }
    }
    compileSourceEffect(sourceFX, seq, handler = this) {
        sourceEffect(sourceFX, seq, handler)
    }
    compileSecondaryEffect(secondary, seq, targetArray, targetEnabled = false, missable = false, handler = this) {
        secondaryEffect(secondary, seq, targetArray, targetEnabled, missable, handler)
    }
    compileTargetEffect(targetFX, seq, targetArray, missable = false, handler = this) {
        targetEffect(targetFX, seq, targetArray, missable, handler)
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
