import { trafficCop } from "../../router/traffic-cop.js";
import systemData from "../../system-handlers/system-data.js";
import { aaDebugger } from "../../constants/constants.js";
import { flagMigrations } from "../../system-handlers/flagMerge.js";
import { socketlibSocket } from "../../socketset.js";

var killAllAnimations;
export function disableAnimations() {
    socket.off('module.sequencer')
    killAllAnimations = true;
}

/**
 * 
 * @param {*} // The Active Effect being applied 
 * 
 */
export async function createActiveEffectsPF1(effect) {
    const wait = (delay) => new Promise((resolve) => setTimeout(resolve, delay));
    await wait(150)

    const aaDebug = game.settings.get("autoanimations", "debug")

    if (killAllAnimations) { return; }
    /*
    // Sets data for the System Handler
    const flagData = {
        aaAeStatus: "on",
    }
    */
    // Gets the Token that the Active Effect is applied to
    const aeToken = canvas.tokens.placeables.find(token => token.actor?.effects?.get(effect.id))
    if (!aeToken) {
        if (aaDebug) { aaDebugger("Failed to find the Token for the Active Effect") }
        return;
    }
    const aeNameField = effect.data?.label + `${aeToken.id}`
    const checkAnim = Sequencer.EffectManager.getEffects({ object: aeToken, name: aeNameField }).length > 0
    if (checkAnim) { 
        if (aaDebug) { aaDebugger("Animation is already present on the Token, returning.") }
        return;
    }

    // Checks to see if the BUFF has an Item Origin. If YES get that item, otherwise assign empty object
    const itemOrigin = effect.data.origin;
    const originatingItem = itemOrigin ? await fromUuid(itemOrigin) : {}
    /*
    // If A-A flags are preset on the AE, ensure they are up-to-date
    if (effect.data?.flags?.autoanimations) {
        await flagMigrations.handle(effect);
    }
    */
    // If A-A flags are preset on the Originating Item, ensure they are up-to-date
    if (originatingItem.data?.flags?.autoanimations) {
        await flagMigrations.handle(originatingItem);
    }

    const flagData = {} 
    if (originatingItem.data?.flags?.autoanimations) {
        // If the BUFF had an originating Item with A-A data, assign that data to flagData, and set status to "on"
        Object.assign(flagData, originatingItem.data?.flags?.autoanimations);
        flagData.aaAeStatus = "on";
        flagData.aaAeTokenId = aeToken.id
    } else {
        // If no A-A flags are present, grab current Flag version and apply it to the effect (bypasses flag merge issues)
        flagData.aaAeStatus = "on";
        flagData.version = Object.keys(flagMigrations.migrations).map(n => Number(n)).reverse()[0];
        flagData.aaAeTokenId = aeToken.id
    }
    /*
    // If no A-A flags are present, grab current Flag version and apply it to the effect (bypasses flag merge issues)
    if (!effect.data?.flags?.autoanimation?.version) {
        flagData.version = Object.keys(flagMigrations.migrations).map(n => Number(n)).reverse()[0];
    }
    */

    // Update the Active Effect flags with flagData
    await effect.update({ 'flags.autoanimations': flagData })

    // Initilizes the A-A System Handler
    const data = {
        token: aeToken,
        targets: [],
        item: effect,
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

/**
 * 
 * @param {*} effect // The Active Effect being removed
 * 
 */
export async function deleteActiveEffectsPF1(effect) {

    const aaDebug = game.settings.get("autoanimations", "debug")

    // Finds all active Animations on the scene that match .origin(effect.uuid)
    let aaEffects = Sequencer.EffectManager.getEffects({ origin: effect.uuid })

    // If no animations, exit early, Else continue with gathering data
    if (aaEffects.length > 0) {
        //const itemData = aaEffects[0].data?.flags?.autoanimations ?? {};
        const itemData = effect.data?.flags?.autoanimations ?? {};

        const data = {
            token: undefined,
            targets: [],
            item: effect,
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
        let currentEffect = aaEffects.filter(i => effect.uuid.includes(i.source?.actor?.id));
        currentEffect = currentEffect.length < 1 ? aaEffects.filter(i => effect.uuid.includes(i.source?.id)) : currentEffect;
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
        Sequencer.EffectManager.endEffects({ origin: effect.uuid, object: handler.sourceToken })
    } else {

        const itemData = effect.data?.flags?.autoanimations ?? {};
        const aeToken = canvas.tokens.get(itemData.aaAeTokenId)
        const data = {
            token: aeToken,
            targets: [],
            item: effect,
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

/**
 * 
 * @param {Active Effect being updated} effect 
 * @param {Toggle Check On/Off for Effect} toggle 
 */
/*
export async function toggleActiveEffectsPF1(effect, toggle) {

    if (toggle.disabled === true) {
        deleteActiveEffects5e(effect)
    } else if (toggle.disabled === false) {
        createActiveEffects5e(effect);
    }
}

export async function checkConcentration(effect) {
    const aaDebug = game.settings.get("autoanimations", "debug")

    // Check effect label and return if it is not equal to "concentrating"
    const label = effect.data?.label || "";
    if (label.toLowerCase() !== "concentrating") { return; }

    // Get Originating Item. If no Origin, return
    const origin = effect.data?.origin
    if (!origin) {
        if (aaDebug) { aaDebugger("Failed to find an Origin for Concentration") }
        return;
    }

    // Get arrays of Background and Foreground Tiles with the A-A Origin flag UUID matching the Effect Origin
    const bgTiles = canvas.background.placeables.filter(i => i.data?.flags?.autoanimations?.origin === origin)
    const fgTiles = canvas.foreground.placeables.filter(i => i.data?.flags?.autoanimations?.origin === origin);
    if (bgTiles.length < 1 && fgTiles.length < 1) {
        if (aaDebug) { aaDebugger("Failed to find any Tiles tied to Concentration") }
        return;
    }
    let tileIdArray = []
    if (bgTiles.length || fgTiles.length) {
        //if (bgTiles.length) {
        for (let tile of bgTiles) {
            tileIdArray.push(tile.id)
        }
        //}
        //if (fgTiles.length) {
        for (let tile of fgTiles) {
            tileIdArray.push(tile.id)
        }
        //}
        socketlibSocket.executeAsGM("removeTile", tileIdArray)
    }

    //Sequencer.EffectManager.endEffects({ origin: origin })

}
*/