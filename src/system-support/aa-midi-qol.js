import { trafficCop } from "../router/traffic-cop.js"
import systemData from "../system-handlers/system-data.js"
/*
/ Midi-QOL Functions for DnD 5e and Star Wars 5e
*/
// setUpMidi for 5e/SW5e Animations on "Attack Rolls" (not specifically on damage)
export async function setUpMidi(workflow) {
    let handler = await systemData.make(workflow);
    if (!handler.item || !handler.sourceToken) {
        return;
    }
    if (handler.shouldPlayImmediately) { return; }
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
    trafficCop(handler)
}
// setUpMidiNoD for Animations on items that have NO Attack Roll. Active only if Animating on Attack Rolls
export async function setUpMidiNoAttack(workflow) {
    if (workflow.item?.hasAttack) { return; }
    let handler = await systemData.make(workflow);
    if (!handler.item || !handler.sourceToken) {
        return;
    }
    if (handler.shouldPlayImmediately) { return; }
    trafficCop(handler)
}
/*
// For AOE items when using Midi QOL
async function midiAOE(workflow) {
    if (killAllAnimations) { return; }
    const handler = await systemData.make(workflow);
    if (!handler.item || !handler.sourceToken) {
        return;
    }
    if (handler.shouldPlayImmediately) {
        trafficCop(handler);
    } else { return; }
}
*/
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
    if ((handler.shouldPlayImmediately) /*&& (breakOut === 0 || game.modules.get("betterrolls5e")?.active)*/) {
        trafficCop(handler);
    } else { return; }
}

export async function criticalCheck(workflow) {
    if (!workflow.isCritical && !workflow.isFumble) { return; }
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