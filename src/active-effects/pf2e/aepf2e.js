import { aaDebugger } from "../../constants/constants.js";
import { flagMigrations } from "../../system-handlers/flagMerge.js";
import { trafficCop } from "../../router/traffic-cop.js";
import systemData from "../../system-handlers/system-data.js";

var killAllAnimations;
export function disableAnimations() {
    socket.off('module.sequencer')
    killAllAnimations = true;
}

export async function createActiveEffectsPF2e(item) {
    const wait = (delay) => new Promise((resolve) => setTimeout(resolve, delay));
    await wait(150)
    const aePF2eTypes = ['condition', 'effect', 'feat']
    const aaDebug = game.settings.get("autoanimations", "debug")
    if (!aePF2eTypes.includes(item.type)) { 
        if (aaDebug) { aaDebugger("This is not a PF2e Ruleset, exiting early") }
        return;
    }
    if (item.data?.data?.references?.parent && game.settings.get("autoanimations", "disableNestedEffects")) { 
        if (aaDebug) { aaDebugger("This is a nested Ruleset, exiting early") }
        return;
    }

    if (killAllAnimations) { return; }

    // Get the Item ID and Token it is on
    const itemId = item.id;
    const aeToken = canvas.tokens.placeables.find(token => token.actor?.items?.get(itemId) != null)
    if (!aeToken) {
        if (aaDebug) { aaDebugger("Failed to find the Token for the Active Effect") }
        return;
    }
    // Sets data for the System Handler
    const flagData = {
        aaAeStatus: "on",
        aaAeTokenId: aeToken.id
    }
    // Check if the Animation is already present on the Token
    //const flattenedName = item.name.toLowerCase()
    const aeNameField = item.name.replace(/[^A-Za-z0-9 .*_-]/g, "") + `${aeToken.id}`
    const checkAnim = await Sequencer.EffectManager.getEffects({ object: aeToken, name: aeNameField }).length > 0
    if (checkAnim) {
        if (aaDebug) { aaDebugger("Animation is already present on the Token, returning.") }
        return;
    }

    // If A-A flags are preset on the AE, ensure they are up-to-date
    if (item.data?.flags?.autoanimations) {
        await flagMigrations.handle(item);
    }
    // If no A-A flags are present, grab current Flag version and apply it to the effect (bypasses flag merge issues)
    if (!item.data?.flags?.autoanimation?.version) {
        flagData.version = Object.keys(flagMigrations.migrations).map(n => Number(n)).reverse()[0];
    }
    await item.update({ 'flags.autoanimations': flagData })

    // Initilizes the A-A System Handler
    const data = {
        token: aeToken,
        targets: [],
        item: item,
    }
    let handler = await systemData.make(null, null, data);

    // Exits early if Item or Source Token returns null. Total Failure
    if (!handler.item || !handler.sourceToken) {
        if (aaDebug) { aaDebugger("Failed to find the Item or Source Token", handler) }
        return;
    }

    // Sends the data to begin the animation Sequence
    trafficCop(handler);

}

export async function deleteActiveEffectsPF2e(item) {
    const aePF2eTypes = ['condition', 'effect', 'feat']
    if (!aePF2eTypes.includes(item.type)) { return; }
    
    const aaDebug = game.settings.get("autoanimations", "debug")

    // Finds all active Animations on the scene that match .origin(effect.uuid)
    let aaEffects = Sequencer.EffectManager.getEffects({ origin: item.uuid })

    // If no animations, exit early, Else continue with gathering data
    if (aaEffects.length > 0) {
        const itemData = item.data?.flags?.autoanimations ?? {};
        const data = {
            token: undefined,
            targets: [],
            item: item,
        };
        // Compile data for the system handler
        const handler = await systemData.make(null, null, data);

        // If a Macro is enabled on the Item, compile that data
        const macroData = {};
        if (itemData.macro?.enable && itemData.macro?.name && (itemData.override || itemData.killAnim)) {
            //Sets macro data if it is defined on the Item and is active
            macroData.shouldRun = true;
            macroData.name = itemData.macro?.name ?? "";
            macroData.args = itemData.macro?.args ? macroData.args.split(',').map(s => s.trim()) : "";
        } else if (handler.autorecObject && handler.autorecObject?.macro?.enable && handler.autorecObject?.macro?.name) {
            //Sets macro data if none is defined/active on the item and it is present in the Automatic Recognition Menu
            macroData.shouldRun = true;
            macroData.name = handler.autorecObject?.macro?.name ?? "";
            macroData.args = handler.autorecObject?.macro?.args ? macroData.args.split(',').map(s => s.trim()) : "";
        }

        // Filters the active Animations to isolate the ones active on the Token
        let currentEffect = aaEffects.filter(i => item.uuid.includes(i.source?.actor?.id));
        currentEffect = currentEffect.length < 1 ? aaEffects.filter(i => item.uuid.includes(i.source?.id)) : currentEffect;
        if (currentEffect.length < 0) { return; }

        // Sets the Source Token on the Handler document
        handler.sourceToken = currentEffect[0].source;
        // If no Item or Source Token was found, exit early with Debug
        if (!handler.item || !handler.sourceToken) {
            if (aaDebug) { aaDebugger("Failed to find the Item or Source Token", handler) }
            return;
        }

        // If a Macro was defined, it will run here with "off" as args[0]
        if (macroData.shouldRun) {
            let userData = macroData.args;
            new Sequence()
                .macro(macroData.name, "off", handler, ...userData)
                .play()
        }

        // End all Animations on the token with .origin(effect.uuid)
        Sequencer.EffectManager.endEffects({ origin: item.uuid, object: handler.sourceToken })
    } else {
        const itemData = item.data?.flags?.autoanimations ?? {};
        const aeToken = canvas.tokens.get(itemData.aaAeTokenId)
        const data = {
            token: aeToken,
            targets: [],
            item: item,
        };
        // Compile data for the system handler
        const handler = await systemData.make(null, null, data);
        const macroData = {};
        if ((handler.isCustomized && handler.macroOnly) || (handler.isDisabled && handler.macroOnly)) {
            //Sets macro data if it is defined on the Item and is active
            macroData.shouldRun = true;
            macroData.name = itemData.macro?.name ?? "";
            macroData.args = itemData.macro?.args ? macroData.args.split(',').map(s => s.trim()) : "";
        } else if (handler.autorecObject && handler.autorecObject?.macro?.enable && handler.autorecObject?.macro?.name) {
            //Sets macro data if none is defined/active on the item and it is present in the Automatic Recognition Menu
            macroData.shouldRun = true;
            macroData.name = handler.autorecObject?.macro?.name ?? "";
            macroData.args = handler.autorecObject?.macro?.args ? macroData.args.split(',').map(s => s.trim()) : "";
        }
        // If no Item or Source Token was found, exit early with Debug
        if (!handler.item || !handler.sourceToken) {
            if (aaDebug) { aaDebugger("Failed to find the Item or Source Token", handler) }
            return;
        }

        // If a Macro was defined, it will run here with "off" as args[0]
        if (macroData.shouldRun) {
            let userData = macroData.args;
            new Sequence()
                .macro(macroData.name, "off", handler, ...userData)
                .play()
        }
    }

}