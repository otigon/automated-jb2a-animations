
import { AUTOANIM } from "./config.js";
import { aaColorMenu, aaVariantMenu } from "../animation-functions/databases/jb2a-menu-options.js";

import { getAllTheNames, findObjectByNameFull, autorecNameCheck, rinseName } from "../custom-recognition/autoFunctions.js";
import { JB2AFREEDB } from "../animation-functions/databases/jb2a-free-database.js";
import { JB2APATREONDB } from "../animation-functions/databases/jb2a-patreon-database.js";

export function menuColors(itemName, variant, type) {
    let animationColor;
    let colorMenu = aaColorMenu;
    let variantArray;
    try { variantArray = Object.keys(colorMenu[type][itemName]) }
    catch (exception) { }
    let variantNow;
    try {
        variantNow = variantArray.some(el => variant === el) ? variant : variantArray[0];
        colorMenu[type][itemName][variantNow].random = game.i18n.localize(game.i18n.localize("AUTOANIM.random"));
        animationColor = colorMenu[type][itemName][variantNow];
    }
    catch (exception) { animationColor = null }
    return animationColor;

}

export function rangeColors(itemName, damageType, variant) {

    let animationColor;
    let animVar;
    let name = itemName.replace(/melee|range|double/gi, function (x) {
        return "";
    });
    name = name === "siege" ? "siegeboulder" : name;
    switch (true) {
        case name === "arrow":
        case name === "bolt":
        case name === "bullet":
            animVar = damageType;
            break;
        case name === "lasersword":
        case name === "dagger":
        case name === "handaxe":
            animVar = variant;
            break;
    }
    let colorMenu = aaColorMenu;

    try { colorMenu.range[name][animVar].random = game.i18n.localize("AUTOANIM.random"); }
    catch (exception) { }

    let variantArray;
    try { variantArray = Object.keys(colorMenu.range[name]) }
    catch (exception) { }
    try {
        animVar = variantArray.some(el => animVar === el) ? animVar : variantArray[0];
        animationColor = colorMenu.range[name][animVar];
    }
    catch (exception) { animationColor = null }

    return animationColor;
}

export function staticColors(itemName, spellVariant, bardAnimation, damageType, variant) {
    let name = itemName === "boulder" ? "boulderimpact" : itemName;
    let animationColor;
    let animVar = spellVariant;
    let colorMenu = aaColorMenu;

    try { colorMenu.static[name][animVar].random = game.i18n.localize("AUTOANIM.random"); }
    catch (exception) { }

    let variantArray;
    try { variantArray = Object.keys(colorMenu.static[name]) }
    catch (exception) { }
    try {
        animVar = variantArray.some(el => animVar === el) ? animVar : variantArray[0];
        animationColor = colorMenu.static[name][animVar];
    }
    catch (exception) { animationColor = null }

    return animationColor;
}


export function autorecColors(itemName, flags) {
    const autoRecSettings = game.settings.get('autoanimations', 'aaAutorec');
    const autoName = rinseName(itemName)
    const nameArray = getAllTheNames(autoRecSettings);
    if (!autorecNameCheck(nameArray, autoName)) {
        return;
    }
    const colorMenu = aaColorMenu;
    const variantMenu = aaVariantMenu;
    let autorecSection = findObjectByNameFull(autoRecSettings, autoName);
    const autorecObject = autorecSection[0]
    if (autorecObject[0].custom) { return {colors: null, variantChoices: null} }
    let autorecType = autorecSection[1]
    /*
    switch (true) {
        case autorecType === 'melee':
        case autorecType === 'range':
            break;
        default:
            autorecType = 'static'
    }
    */
    let animationName = autorecType === 'preset' && autorecObject[0].animation === "teleportation" ? autorecObject[0].subAnimation : autorecObject[0].animation;
    if (autorecSection[1] === 'templates') {
        animationName = autorecObject[0].type;
    }
    if (autorecType !== 'melee' && autorecType !== 'range') { autorecType = 'static' }
    const name = animationName === 'shield' ? 'shieldspell' : animationName
    let variant;
    try { variant = !autorecObject[0].variant ? Object.keys(colorMenu[autorecType][name])[0] : autorecObject[0].variant; }
    catch (exception) { }
    //let variant = !autorecObject[0].variant ? Object.keys(colorMenu[autorecType][name])[0] : autorecObject[0].variant;
    if (autorecSection[1] === 'templates') {
        variant = autorecObject[0].animation;
    }
    let autoVariant;
    if (flags.autoanimations?.options?.overrideAuto) {
        autoVariant = flags.autoanimations?.options?.autoVariant;
    }
    variant = !autoVariant ? variant : autoVariant;
    let colors;
    try { colors = colorMenu[autorecType][name][variant] }
    catch (exception) { }
    let variantChoices;
    try { variantChoices = variantMenu[autorecType][name] }
    catch (exception) { }
    if (autorecSection[1] === "templates") { variantChoices = undefined }
    //let colors = colorMenu[autorecType][name][variant]
    return { colors, variantChoices };
}

export function checkAutoRec(itemName) {
    const autoRecSettings = game.settings.get('autoanimations', 'aaAutorec');
    const autoName = rinseName(itemName)
    const nameArray = getAllTheNames(autoRecSettings);
    let foundName = false;
    if (autorecNameCheck(nameArray, autoName)) {
        foundName = true;
    }
    return foundName;

}
export function variantOptions(itemName, type) {
    if (!itemName) { console.log("Name is Undefined while checking variantOptions"); return; }
    let name = itemName.replace(/melee|range|double/gi, function (x) {
        return "";
    });

    const variantMenu = aaVariantMenu;
    let variantOptions;

    try { variantOptions = variantMenu[type][name] }

    catch (exception) { }
    return variantOptions;
}

export function variantLength(itemName, type) {
    if (!itemName) { console.log("Name is Undefined while checking variantLength"); return; }
    let name = itemName.replace(/melee|range|double/gi, function (x) {
        return "";
    });

    const variantMenu = aaVariantMenu;
    let variantLength;
    try { variantLength = Object.keys(variantMenu[type][name]).length }
    catch (exception) { }
    return variantLength;

}

export function autoPreview(name, baseColor, patreon, autoOverridden) {
    if (!name) { console.log("Name is Undefined while fetching Video Preview"); return; }
    const autoName = rinseName(name)
    const autoRecSettings = game.settings.get('autoanimations', 'aaAutorec');
    const nameArray = getAllTheNames(autoRecSettings);
    if (!autorecNameCheck(nameArray, autoName)) {
        return;
    }
    const jb2a = patreon ? JB2APATREONDB : JB2AFREEDB;
    const autorecSection = findObjectByNameFull(autoRecSettings, autoName);

    const autorecObject = autorecSection[0]
    if (autorecObject[0].animation === 'bardicinspiration' || autorecObject[0].animation === 'bless' || autorecObject[0].animation === 'shieldspell') { return; }
    if (autorecObject[0].custom) { return autorecObject[0].customPath }

    let autorecType = autorecSection[1]

    let changeColor = baseColor;

    //if (!autorecObject[0].variant) {variant = Object.keys(jb2a[autorecType][autorecObject[0].animation])[0]}
    let animationName = autorecType === 'preset' ? autorecObject[0].subAnimation : autorecObject[0].animation;
    if (autorecType !== 'melee' && autorecType !== 'range') { autorecType = 'static' }
    if (autorecSection[1] === 'templates') {
        animationName = autorecObject[0].type;
    }
    let variant = !autorecObject[0].variant ? Object.keys(jb2a[autorecType][animationName])[0] : autorecObject[0].variant;
    if (!changeColor) {
        try { changeColor = Object.keys(jb2a[autorecType][animationName][variant])[0] }
        catch (exception) { changeColor = autorecObject[0].color }
    }
    let color = autoOverridden ? changeColor : autorecObject[0].color
    if (color === 'random') { color = autorecObject[0].color || "" }
    let file;
    if (animationName === 'magicmissile') {
        try { file = jb2a[autorecType][animationName][variant][color]['15ft'][1] }
        catch (exception) { }
    } else {
        try { file = autorecType === "range" ? jb2a[autorecType][animationName][variant][color][Object.keys(jb2a[autorecType][animationName][variant][color])[1]] : jb2a[autorecType][animationName][variant][color][0] }
        catch (exception) { }
    }
    return file;
}

export function animationName(animType, patreon) {
    let animationNames;
    switch (animType) {
        case "t2":
            animationNames = AUTOANIM.localized(AUTOANIM.animNameMeleeWeapon);
            break;
        case "t3":
            animationNames = patreon ? AUTOANIM.localized(AUTOANIM.animNameGenericDmg) : AUTOANIM.localized(AUTOANIM.animNameGenericDmgFree)
            break;
        case "t4":
            animationNames = patreon ? AUTOANIM.localized(AUTOANIM.animNameRangeWeapon) : AUTOANIM.localized(AUTOANIM.animNameRangeWeaponFree)
            break;
        case "t5":
            animationNames = AUTOANIM.localized(AUTOANIM.animCreatureAttack);
            break;
        case "t6":
            animationNames = AUTOANIM.localized(AUTOANIM.animNameAttackSpell);
            break;
        case "t7":
            animationNames = AUTOANIM.localized(AUTOANIM.animNameHealSpell);
            break;
        case "t10":
            animationNames = AUTOANIM.localized(AUTOANIM.selfemanation);
            break;
        case "t11":
            animationNames = AUTOANIM.localized(AUTOANIM.aura);
            break;
        case "t12":
            animationNames = AUTOANIM.localized(AUTOANIM.animTeleport);
            break;
        case "t13":
            animationNames = AUTOANIM.localized(AUTOANIM.animNameClassFeatures);
            break;
    }
    return animationNames;
}

export function animTemplates(templateType) {
    let templateChoices;
    switch (templateType) {
        case "circle":
            templateChoices = AUTOANIM.localized(AUTOANIM.circleAnimations)
            break;
        case "ray":
            templateChoices = AUTOANIM.localized(AUTOANIM.rayAnimations)
            break;
        case "rect":
            templateChoices = AUTOANIM.localized(AUTOANIM.rectangleAnimations)
            break;
        case "cone":
            templateChoices = AUTOANIM.localized(AUTOANIM.coneAnimations)
            break;
    }
    return templateChoices;
}