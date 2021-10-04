
import { AUTOANIM } from "../item-sheet-handlers/config.js";
import { aaColorMenu, aaVariantMenu } from "../animation-functions/databases/jb2a-menu-options.js";
import { JB2AFREEDB } from "../animation-functions/databases/jb2a-free-database.js";
import { JB2APATREONDB } from "../animation-functions/databases/jb2a-patreon-database.js";

export class AATabFunctions {
    /*
    static menuColors(itemName, variant, type) {
        let animationColor;
        let colorMenu = aaColorMenu;
        let variantArray;
        try { variantArray = Object.keys(colorMenu[type][itemName]) }
        catch (exception) { }
        let variantNow;
        try {
            variantNow = variantArray.some(el => variant === el) ? variant : variantArray[0];
            //colorMenu[type][itemName][variantNow].random = game.i18n.localize(game.i18n.localize("AUTOANIM.random"));
            animationColor = colorMenu[type][itemName][variantNow];
        }
        catch (exception) { animationColor = null }
        return animationColor;

    }

    static rangeColors(itemName, damageType, variant) {

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
    
    static staticColors(itemName, spellVariant, bardAnimation, damageType, variant) {
        let name = itemName === "boulder" ? "boulderimpact" : itemName;
        let animationColor;
        let animVar = spellVariant;
        let colorMenu = aaColorMenu;
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
    */
    /*
    static variantOptions(itemName, type) {

        let name = itemName.replace(/melee|range|double/gi, function (x) {
            return "";
        });

        const variantMenu = aaVariantMenu;
        let variantOptions;

        try { variantOptions = variantMenu[type][name] }
        catch (exception) { }

        return variantOptions;
    }
    */
/*
    static variantLength(itemName, type) {
        let name = itemName.replace(/melee|range|double/gi, function (x) {
            return "";
        });

        const variantMenu = aaVariantMenu;
        let variantLength;
        try { variantLength = Object.keys(variantMenu[type][name]).length }
        catch (exception) { }
        return variantLength;

    }
    */
    /*
    static animationName(animType, patreon) {
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
    */
    static animTemplates(templateType) {
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
    /*
    static _variant(data) {
        const flags = data.autoanimations;
        if (!flags) { return; }

        const oldName = flags.animName
        if (!oldName) { return; }

        const newName = oldName.replace(/\s+/g, '').toLowerCase();
        const type = flags.animType;

        let variant;
        switch (true) {
            case type === 't2' || type === 't3':
                variant = flags.uaStrikeType;
                break;
            case type === 't4':
                variant = flags.rangedOptions?.rangeDmgType;
                break;
            case type === 't5':
            case type === 't6':
            case type === 't7':
                variant = flags.spellVar;
                break;
            case type === 't8':
                break;
            case type === 't9':
            case type === 't10':
                variant = flags.options?.variant;
                break;
            case type === 't11':
                break;
            case type === 't12':
                break;
            case type === 't13':
                variant = flags.spellVar;
                break;
            default:
                variant = '01'
        }
        return variant;
    }
    */
    static _customPreview(itemFlags, patreon) {
        const flags = itemFlags?.autoanimations;
        const jb2a = patreon? JB2APATREONDB : JB2AFREEDB;
        const colorMenu = aaColorMenu;
        const variantMenu = aaVariantMenu;
        if (!flags) { return; }

        //const customType = flags.animType || "";

        //const oldName = flags.animName
        //if (!oldName) { return; }

        const data = {
            newName: flags.animation,
            type: flags.animType || "",
            variant: flags.options?.variant,
            color: flags.color,
            dbPath: this._dbPath(flags.animType),
        };

        let file = 'no preview';

        const variantChoices = variantMenu[data.dbPath][data.newName];
        if (!variantChoices) { console.log("EXIT"); return file; }
        const variantCheck = this._variantCheck(data, variantMenu, jb2a)
        data.variant = variantCheck.defaultVariant;

        const colorChoices = colorMenu[data.dbPath][data.newName][data.variant];
        if (!colorChoices) { console.log("EXIT"); return file; }
        const colorCheck = this._colorCheck(data, colorMenu, jb2a)
        data.color = colorCheck.defaultColor.toLowerCase();

        switch (true) {
            case data.type === 't3':
                try { file = jb2a[data.dbPath][data.newName][data.variant][data.color][Object.keys(jb2a[data.dbPath][data.newName][data.variant][data.color])[1]][0] }
                catch (exception) { }
                break;
            default:
                try { file = jb2a[data.dbPath][data.newName][data.variant][data.color][0] }
                catch (exception) { }
        }

        return file;
    }
    /*
    static _customPreviesw(itemFlags, patreon) {
        const flags = itemFlags.autoanimations;
        const jb2a = patreon? JB2APATREONDB : JB2AFREEDB;
        const colorMenu = aaColorMenu;
        const variantMenu = aaVariantMenu;

        if (!flags) { return; }
        // name and color changes for t8, t9, t10
        const oldName = flags.animName
        if (!oldName) { return; }
        
        const data = {
            newName: oldName.replace(/\s+/g, '').toLowerCase(),
            type: flags.animType,
            variant: this._variant(itemFlags),
            color: flags.color,
            dbPath: this._dbPath(flags.animType),
        };

        switch (data.type) {
            case 't8':
                data.newName = flags.templates?.tempType;
                data.variant = flags.templates?.tempAnim ? flags.templates.tempAnim.replace(/\s+/g, '').toLowerCase() : "";
                data.color = flags.templates?.tempColor ? flags.templates.tempColor.replace(/\s+/g, '').toLowerCase() : "";
                break;
            case 't9':
            case 't10':
                data.newName = flags.explodeVariant ? flags.explodeVariant.replace(/\s+/g, '').toLowerCase() : "";
                data.variant = flags.options?.variant;
                data.color = flags.explodeColor ? flags.explodeColor.replace(/\s+/g, '').toLowerCase() : "";
                break;
        }
        let file = 'no preview';

        const variantChoices = variantMenu[data.dbPath][data.newName];
        if (!variantChoices) { console.log("EXIT"); return file; }
        const variantCheck = this._variantCheck(data, variantMenu, jb2a)
        data.variant = variantCheck.defaultVariant;

        const colorChoices = colorMenu[data.dbPath][data.newName][data.variant];
        if (!colorChoices) { console.log("EXIT"); return file; }
        const colorCheck = this._colorCheck(data, colorMenu, jb2a)
        data.color = colorCheck.defaultColor;

        switch (true) {
            case data.newName === 'magicmissile' || (data.newName === "scorchingray" && data.variant === '02'):
                try { file = jb2a[data.dbPath][data.newName][data.variant][data.color]['15ft'][1] }
                catch (exception) { }
                break;
            case data.newName === 'quarterstaff':
            case data.newName === 'halberd':
            case data.newName === 'spear' && data.variant === '01':
                try { file = jb2a[data.dbPath][data.newName][data.variant][data.color][1] }
                catch (exception) { }
                break;
            case data.type === 't4' || data.type === 't6':
                try { file = jb2a[data.dbPath][data.newName][data.variant][data.color][Object.keys(jb2a[data.dbPath][data.newName][data.variant][data.color])[1]] }
                catch (exception) { }
                break;
            case data.type === 't13':
                break;
            default:
                try { file = jb2a[data.dbPath][data.newName][data.variant][data.color] }
                catch (exception) { }
        }

        return file;
    }
    */
    static _variantCheck(data, variantMenu, jb2a) {
        let defaultVariant = data.variant;
        let inPlace = true;
        if (!Object.keys(jb2a[data.dbPath][data.newName]).includes(data.variant)) {
            inPlace = false;
            defaultVariant = variantMenu[data.dbPath][data.newName][Object.keys(variantMenu[data.dbPath][data.newName])[0]]
        }
        return { inPlace, defaultVariant };
    }

    static _colorCheck(data, colorMenu, jb2a) {
        let defaultColor = data.color;
        let inPlace = true;
        if (!Object.keys(jb2a[data.dbPath][data.newName][data.variant]).includes(data.color)) {
            inPlace = false;
            defaultColor = colorMenu[data.dbPath][data.newName][data.variant][Object.keys(colorMenu[data.dbPath][data.newName][data.variant])[0]]
        }
        return { inPlace, defaultColor };
    }

    static _dbPath(type) {
        switch (type) {
            case 't2':
                return 'melee';
            case 't3':
                return 'range';
            default:
                return 'static';
        }
    }
}