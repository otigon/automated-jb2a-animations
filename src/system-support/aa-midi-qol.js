import { trafficCop } from "../router/traffic-cop.js"
import systemData from "../system-handlers/system-data.js"
import { debug } from "../constants/constants.js";
/*
/ Midi-QOL Functions for DnD 5e and Star Wars 5e
*/
// setUpMidi for 5e/SW5e Animations on "Attack Rolls" (not specifically on damage)
export async function setUpMidi(workflow) {
    if (workflow.item?.hasAreaTarget) { return; }
    let handler = await systemData.make(workflow);
    if (!handler.item || !handler.sourceToken) {
        return;
    }
    if (handler.shouldPlayImmediately) { return; }
    debug("Playing Animation on Attack Roll")
    trafficCop(handler);
}
// setUpMidiNoAD for Animations on items that have NO Attack or Damage rolls. Active if Animate on Damage true
export async function setUpMidiNoAttackDamage(workflow) {
    if (workflow.item?.hasAttack || workflow.item?.hasDamage) { return; }
    let handler = await systemData.make(workflow);
    if (!handler.item || !handler.sourceToken) {
        return;
    }
    if (handler.shouldPlayImmediately) { return; }
    debug("Playing Animation, Item has no Attack or Damage")
    trafficCop(handler)
}
// setUpMidiNoD for Animations on items that have NO Attack Roll. Active only if Animating on Attack Rolls
export async function setUpMidiNoAttack(workflow) {
    if (workflow.item?.hasAttack || workflow.item?.hasAreaTarget) { return; }
    let handler = await systemData.make(workflow);
    if (!handler.item || !handler.sourceToken) {
        return;
    }
    if (handler.shouldPlayImmediately) { return; }
    debug("Playing Animation, Item has no Attack")
    trafficCop(handler)
}
// For Auras and Teleportation
export async function useItem(input) {
    if (input.item?.hasAreaTarget || input.item?.hasAttack || input.item?.hasDamage) { return; }

    let handler = await systemData.make(input);
    if (!handler.item || !handler.sourceToken) { debug("No Item or Source Token", handler.item, handler.sourceToken); return;}
    debug("Playing Animation, Item has no Attack or Damage")
    trafficCop(handler)
}
// For Template Animations
export async function templateItem(input) {
    if (input.userId !== game.user.id) { return };

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
export async function criticalCheck(workflow) {
    if (!workflow.isCritical && !workflow.isFumble) { return; }
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