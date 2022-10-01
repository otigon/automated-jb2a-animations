import { trafficCop } from "../router/traffic-cop.js"
import systemData from "../system-handlers/system-data.js"
import { debug } from "../constants/constants.js";
import { AnimationState }   from "../AnimationState.js";

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
/*
/ Midi-QOL Functions for DnD 5e and Star Wars 5e
*/
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
/*
// Special cases required when using Midi-QOL. Houses only the Template Animations right now
export async function midiTemplateAnimations(msg) {
    if (game.user.id !== msg.user?.id) {
        return;
    }
    const handler = await systemData.make(msg, true);
    if (!handler.item || !handler.sourceToken) {
        return;
    }
    //let breakOut = checkMessege(msg);
    if ((handler.shouldPlayImmediately)) {
        trafficCop(handler);
    } else { return; }
}
*/
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