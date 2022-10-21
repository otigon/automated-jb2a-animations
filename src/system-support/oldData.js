/* This is the previous method for 5e to gather all the relevant data from createChatMessage hook, before System hooks were implemented
export async function runDnd5e(msg) {
    if (msg.user.id !== game.user.id) { return };

    const animationNow = game.settings.get("autoanimations", "playonDamageCore");
    let handler;
    let rollType;
    switch (game.system.id) {
        case "dnd5e":
            handler = await systemData.make(msg);
            rollType = (msg.flags?.dnd5e?.roll?.type?.toLowerCase() ?? msg.flavor?.toLowerCase() ?? "pass");
            break;
        case "sw5e":
            handler = await systemData.make(msg);
            rollType = msg.flags?.sw5e?.roll?.type?.toLowerCase() ?? "pass";
            break;
    }

    if (!handler.item || !handler.sourceToken) {
        return;
    }

    switch (true) {
        case !handler.hasAttack && !handler.hasDamage:
            trafficCop(handler);
            break;
        case (handler.shouldPlayImmediately) && !rollType.includes("damage") && !rollType.includes("attack"):
            trafficCop(handler);
            break;
        case animationNow:
            if (rollType.includes("damage")) {
                if (handler.shouldPlayImmediately) { return; }
                trafficCop(handler);
            }
            break;
        case !animationNow:
            switch (true) {
                case game.modules.get("mre-dnd5e")?.active && game.settings.get("mre-dnd5e", "autoCheck") && !handler.hasAttack && handler.hasDamage && !rollType.includes("damage"):
                    trafficCop(handler);
                    break;
                case game.modules.get("mre-dnd5e")?.active && game.settings.get("mre-dnd5e", "autoCheck") && rollType.includes("damage"):
                    break;
                case rollType.includes("damage") && !handler.hasAttack:
                case rollType.includes('attack'):
                    if (handler.shouldPlayImmediately) { return; }
                    trafficCop(handler);
                    break;
                case game.modules.get("betterrolls5e")?.active && !handler.hasAttack && handler.hasDamage:
                    if (handler.shouldPlayImmediately) { return; }
                    trafficCop(handler);
                    break;
            }
            break;
    }
}
*/

// OLD MIDI-QOL WORKFLOW
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
