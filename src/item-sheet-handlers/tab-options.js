
import { AUTOANIM } from "./config.js";
import { aaColorMenu, aaVariantMenu } from "../animation-functions/databases/jb2a-menu-options.js";

export function menuColors (itemName, variant, type) {
    let animationColor;
    let colorMenu = aaColorMenu;
    let variantArray;
    try { variantArray = Object.keys(colorMenu[type][itemName]) }
    catch (exception) { }
    let variantNow;
    try {
        variantNow = variantArray.some(el => variant === el) ? variant : variantArray[0];
        colorMenu[type][itemName][variantNow].random = game.i18n.localize( game.i18n.localize("AUTOANIM.random"));
        animationColor = colorMenu[type][itemName][variantNow];
    }
    catch (exception) { animationColor = null }
    return animationColor;

}
/*
export function meleeColors(itemName, variant) {
    let animationColor;
    let colorMenu = aaColorMenu;

    try { colorMenu.melee[itemName][variant].random =  game.i18n.localize("AUTOANIM.random"); }
    catch (exception) { }

    let variantArray;
    try { variantArray = Object.keys(colorMenu.melee[itemName]) }
    catch (exception) { }
    try {
        variant = variantArray.some(el => variant === el) ? variant : variantArray[0];
        animationColor = colorMenu.localized(colorMenu.melee[itemName][variant]);
    }
    catch (exception) { animationColor = null }

    return animationColor;
}
*/
export function rangeColors(itemName, damageType, variant) {
    let animationColor;
    let animVar;
    let name = itemName.replace(/melee|range|double/gi, function(x) {
        return "";
    });
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

    try { colorMenu.range[name][animVar].random =  game.i18n.localize("AUTOANIM.random"); }
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
    let animVar= spellVariant;
    let colorMenu = aaColorMenu;

    try { colorMenu.static[name][animVar].random =  game.i18n.localize("AUTOANIM.random"); }
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

export function variantOptions(itemName, type) {
    
    let name = itemName.replace(/melee|range|double/gi, function(x) {
        return "";
    });

    const variantMenu = aaVariantMenu;
    let variantOptions;
    try { variantOptions = variantMenu[type][name]}
    catch (exception) { }
    return variantOptions;
}

export function variantLength(itemName, type) {
    let name = itemName.replace(/melee|range|double/gi, function(x) {
        return "";
    });

    const variantMenu = aaVariantMenu;
    let variantLength;
    try { variantLength = Object.keys(variantMenu[type][name]).length}
    catch (exception) { }
    return variantLength;

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
