
import { AUTOANIM } from "./config.js";
import { aaColorsPatreon } from "../animation-functions/databases/jb2a-patreon-colors.js";
import { aaColorsFree } from "../animation-functions/databases/jb2a-free-colors.js";
import { aaVariantsPatreon } from "../animation-functions/databases/jb2a-patreon-variants.js";
import { aaVariantsFree } from "../animation-functions/databases/jb2a-free-variants.js";

export function meleeColors(itemName, patreon, variant) {
    //console.log(aaColorsPatreon)
    let animationColor;
    let colorMenu = patreon ? aaColorsPatreon : aaColorsFree;
    //console.log(colorMenu)

    try { colorMenu.melee[itemName][variant].random = "AUTOANIM.random"; }
    catch (exception) { }

    let variantArray;
    try { variantArray = Object.keys(colorMenu.melee[itemName]) }
    catch (exception) { }
    //console.log(variant)
    //console.log(variantArray)
    //preMenu.random = "AUTOANIM.random";
    try {
        variant = variantArray.some(el => variant === el) ? variant : variantArray[0];
        console.log(variant)
        animationColor = colorMenu.localized(colorMenu.melee[itemName][variant]);
    }
    catch (exception) { animationColor = null }

    return animationColor;
}

export function rangeColors(itemName, patreon, spellVariant, damageType, variant) {
    //console.log(aaColorsPatreon)
    //console.log(itemName)
    let animationColor;
    let animVar;
    let name = itemName.replace(/melee|range|double/gi, function(x) {
        return "";
    });
    //console.log(name)
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
        default:
            animVar = spellVariant;
    }
    let colorMenu = patreon ? aaColorsPatreon : aaColorsFree;
    //console.log(colorMenu)

    try { colorMenu.range[name][animVar].random = "AUTOANIM.random"; }
    catch (exception) { }

    let variantArray;
    try { variantArray = Object.keys(colorMenu.range[name]) }
    catch (exception) { }
    //console.log(animVar)
    //console.log(variantArray)
    //preMenu.random = "AUTOANIM.random";
    try {
        animVar = variantArray.some(el => animVar === el) ? animVar : variantArray[0];
        //console.log(animVar)
        animationColor = colorMenu.localized(colorMenu.range[name][animVar]);
    }
    catch (exception) { animationColor = null }

    return animationColor;
}

export function staticColors(itemName, patreon, spellVariant, bardAnimation, damageType, variant) {
    //console.log(itemName)
    let name = itemName === "boulder" ? "boulderimpact" : itemName;
    //console.log(name)
    let animationColor;
    let animVar= spellVariant;
    let colorMenu = patreon ? aaColorsPatreon : aaColorsFree;
    //console.log(colorMenu)

    try { colorMenu.static[name][animVar].random = "AUTOANIM.random"; }
    catch (exception) { }

    let variantArray;
    try { variantArray = Object.keys(colorMenu.static[name]) }
    catch (exception) { }
    //console.log(animVar)
    //console.log(variantArray)
    //preMenu.random = "AUTOANIM.random";
    try {
        animVar = variantArray.some(el => animVar === el) ? animVar : variantArray[0];
        console.log(animVar)
        animationColor = colorMenu.localized(colorMenu.static[name][animVar]);
    }
    catch (exception) { animationColor = null }

    return animationColor;
}

export function variantOptions(itemName, patreon, type) {
    
    let name = itemName.replace(/melee|range|double/gi, function(x) {
        return "";
    });

    const variantMenu = patreon ? aaVariantsPatreon : aaVariantsFree;
    console.log (variantMenu)
    let variantOptions;
    try { variantOptions = variantMenu.localized(variantMenu[type][name])}
    catch (exception) { }
    console.log(variantOptions)
    return variantOptions;
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

export function tokenAnimations() {
    return AUTOANIM.tokenAnimations
}
