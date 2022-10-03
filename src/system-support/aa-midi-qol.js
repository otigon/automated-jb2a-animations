import { trafficCop } from "../router/traffic-cop.js"
import systemData from "../system-handlers/system-data.js"
import { debug } from "../constants/constants.js";
import { AnimationState }   from "../AnimationState.js";

/*
export function systemHooks() {
    switch (game.settings.get("autoanimations", "playonDamage")) {
        case (true):
            Hooks.on("midi-qol.DamageRollComplete", (workflow) => { setUpMidi(workflow) });
            //Hooks.on('midi-qol.preambleComplete', (workflow) => { midiAOE(workflow) });
            //Hooks.on("createChatMessage", (msg) => { systemSupport.aaMidiqol.midiTemplateAnimations(msg) });
            Hooks.on("midi-qol.RollComplete", (workflow) => { setUpMidiNoAttackDamage(workflow) });
            Hooks.on("dnd5e.displayCard", async (item, chat, options) => { useItem({ item, chat, options }) });
            Hooks.on("createMeasuredTemplate", async (template, data, userId) => { templateItem({ template, data, userId }) })
            break;
        case (false):
            Hooks.on("midi-qol.AttackRollComplete", (workflow) => { setUpMidi(workflow) });
            Hooks.on("midi-qol.RollComplete", (workflow) => { setUpMidiNoAttack(workflow) });
            //Hooks.on('midi-qol.preambleComplete', (workflow) => { midiAOE(workflow) });
            //Hooks.on("createChatMessage", (msg) => { systemSupport.aaMidiqol.midiTemplateAnimations(msg) });
            Hooks.on("dnd5e.displayCard", async (item, chat, options) => { useItem({ item, chat, options }) });
            Hooks.on("createMeasuredTemplate", async (template, data, userId) => { templateItem({ template, data, userId }) })
            break;
    }
    if (game.settings.get("autoanimations", "EnableCritical") || game.settings.get("autoanimations", "EnableCriticalMiss")) {
        Hooks.on("midi-qol.AttackRollComplete", (workflow) => { criticalCheck(workflow) })
    }
}
*/
/*
/ Midi-QOL Functions for DnD 5e and Star Wars 5e
*/
/*
// setUpMidi for 5e/SW5e Animations on "Attack Rolls" (not specifically on damage)
async function setUpMidi(workflow) {
    if (workflow.item?.hasAreaTarget || !AnimationState.enabled) { return; }
    let handler = await systemData.make(workflow);
    if (!handler.item || !handler.sourceToken) {
        return;
    }
    if (handler.shouldPlayImmediately) { return; }
    debug("Playing Animation on Attack Roll")
    trafficCop(handler);
}
// setUpMidiNoAD for Animations on items that have NO Attack or Damage rolls. Active if Animate on Damage true
async function setUpMidiNoAttackDamage(workflow) {
    if (workflow.item?.hasAttack || workflow.item?.hasDamage || !AnimationState.enabled) { return; }
    let handler = await systemData.make(workflow);
    if (!handler.item || !handler.sourceToken) {
        return;
    }
    if (handler.shouldPlayImmediately) { return; }
    debug("Playing Animation, Item has no Attack or Damage")
    trafficCop(handler)
}
// setUpMidiNoD for Animations on items that have NO Attack Roll. Active only if Animating on Attack Rolls
async function setUpMidiNoAttack(workflow) {
    if (workflow.item?.hasAttack || workflow.item?.hasAreaTarget || !AnimationState.enabled) { return; }
    let handler = await systemData.make(workflow);
    if (!handler.item || !handler.sourceToken) {
        return;
    }
    if (handler.shouldPlayImmediately) { return; }
    debug("Playing Animation, Item has no Attack")
    trafficCop(handler)
}
// For Auras and Teleportation
async function useItem(input) {
    if (input.item?.hasAreaTarget || input.item?.hasAttack || input.item?.hasDamage || !AnimationState.enabled) { return; }

    let handler = await systemData.make(input);
    if (!handler.item || !handler.sourceToken) { debug("No Item or Source Token", handler.item, handler.sourceToken); return;}
    debug("Playing Animation, Item has no Attack or Damage")
    trafficCop(handler)
}
// For Template Animations
async function templateItem(input) {
    if (input.userId !== game.user.id || !AnimationState.enabled) { return };

    const itemUuid = input.template?.flags?.dnd5e?.origin;
    const item = itemUuid ? await fromUuid(itemUuid) : "";
    if (!item) { return; }
    let handler = await systemData.make({item: item});
    if (!handler.item || !handler.sourceToken) { debug("No Item or Source Token", handler.item, handler.sourceToken); return;}
    debug("Playing Animation for Template")
    trafficCop(handler)
}
*/

export function systemHooks() {
    Hooks.on("midi-qol.DamageRollComplete", (workflow) => { damage(workflow) });
    Hooks.on("midi-qol.AttackRollComplete", (workflow) => { attack(workflow); criticalCheck(workflow) });
    Hooks.on("midi-qol.RollComplete", (workflow) => { useItem(workflow) }); // For items with no attack or damage
    Hooks.on("dnd5e.useItem", async (item, config, options) => { onUse({ item, config, options }) }); // For Teleportation and Auras
    Hooks.on("createMeasuredTemplate", async (template, data, userId) => { templateAnimation({ template, data, userId }) }) // For Template Animations

    //Hooks.on("midi-qol.AttackRollComplete", (workflow) => { criticalCheck(workflow) })
}

async function attack(input) {
    if (!AnimationState.enabled || input.item?.hasAreaTarget) { return };
    let playOnDamage = game.settings.get('autoanimations', 'playonDamage');
    if (playOnDamage) { return };

    let handler = await systemData.make(input);
    if (!handler.item || !handler.sourceToken || handler.playOnUse) { debug("No Item or Source Token", handler.item, handler.sourceToken); return;}
    
    debug("Playing Animation on Attack Roll")
    trafficCop(handler);
}

async function damage(input) {
    if (!AnimationState.enabled || input.item?.hasAreaTarget) { return };
    let playOnDamage = game.settings.get('autoanimations', 'playonDamage');
    if (!playOnDamage && input.item?.hasAttack) { return};
    debugger
    let handler = await systemData.make(input);
    if (!handler.item || !handler.sourceToken || handler.playOnUse) { debug("No Item or Source Token", handler.item, handler.sourceToken); return;}
    
    debug("Playing Animation on Damage Roll")
    trafficCop(handler);
}

async function useItem(input) {
    if (!AnimationState.enabled) { return };
    if (input.item?.hasDamage || input.item?.hasAttack || input.item?.hasAreaTarget) { return };

    let handler = await systemData.make(input);
    if (!handler.item || !handler.sourceToken) { debug("No Item or Source Token", handler.item, handler.sourceToken); return;}
    if (handler.playOnUse) { return };
    
    debug("Playing Animation, Item has no Attack or Damage")
    trafficCop(handler);
}

async function onUse(input) {
    if (!AnimationState.enabled) { return };
    if (input.item?.hasAttack) { return };

    let handler = await systemData.make(input);
    if (!handler.item || !handler.sourceToken) { debug("No Item or Source Token", handler.item, handler.sourceToken); return;}
    if (!handler.playOnUse) { return; }
    
    debug("Playing Aura or Teleportation Animation")
    trafficCop(handler);
}


async function templateAnimation(input) {
    if (!AnimationState.enabled) { return };
    debug("Playing Animation on Template Placement")
    const itemUuid = input.template?.flags?.dnd5e?.origin;
    const item = itemUuid ? await fromUuid(itemUuid) : "";
    if (!item) { return; }

    let handler = await systemData.make({item: item});
    if (!handler.item) { console.log("Automated Animations: No Item or Source Token", handler.item, handler.sourceToken); return;}
    if (handler.menu === "aura") { return; }
    trafficCop(handler)
}

async function criticalCheck(workflow) {
    if (!workflow.isCritical && !workflow.isFumble || !AnimationState.enabled) { return; }
    debug("Checking for Crit or Fumble")
    let critical = workflow.isCritical;
    let fumble = workflow.isFumble;
    let token;

    let critAnim = game.settings.get("autoanimations", "CriticalAnimation");
    let critMissAnim = game.settings.get("autoanimations", "CriticalMissAnimation");

    switch (true) {
        case (game.settings.get("autoanimations", "EnableCritical") && critical):
            token = canvas.tokens.get(workflow.tokenId);
            new Sequence()
                .effect()
                .file(critAnim)
                .atLocation(token)
                .play()
            break;
        case (game.settings.get("autoanimations", "EnableCriticalMiss") && fumble):
            token = canvas.tokens.get(workflow.tokenId);
            new Sequence()
                .effect()
                .file(critMissAnim)
                .atLocation(token)
                .play()
            break;
    }
}