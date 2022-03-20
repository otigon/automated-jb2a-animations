
import { aaMenuLists } from "../item-sheet-handlers/menu-lists.js";
import { aaColorMenu, aaVariantMenu } from "../animation-functions/databases/jb2a-menu-options.js";
import { JB2AFREEDB } from "../animation-functions/databases/jb2a-free-database.js";
import { JB2APATREONDB } from "../animation-functions/databases/jb2a-patreon-database.js";

export class AATabFunctions {

    static animTemplates(templateType) {
        let templateChoices;
        switch (templateType) {
            case "circle":
                templateChoices = aaMenuLists.circleAnimations
                break;
            case "ray":
                templateChoices = aaMenuLists.rayAnimations
                break;
            case "rect":
                templateChoices = aaMenuLists.rectangleAnimations
                break;
            case "cone":
                templateChoices = aaMenuLists.coneAnimations
                break;
        }
        return templateChoices;
    }

    static _customPreview(itemFlags, patreon) {

        const flags = itemFlags?.autoanimations;
        const jb2a = patreon? JB2APATREONDB : JB2AFREEDB;
        const colorMenu = aaColorMenu;
        const variantMenu = aaVariantMenu;
        if (!flags) { return; }

        const data = {
            newName: flags.animation,
            type: flags.animType || "",
            menuType: flags.options?.menuType || false,
            variant: flags.options?.variant,
            color: flags.color,
            dbPath: this._dbPath(flags.animType),
        };

        let file = 'no preview';
        if (!data.menuType) { return file; }
        if (!variantMenu[data.dbPath][data.menuType]) {return file;}
        const variantChoices = variantMenu[data.dbPath][data.menuType][data.newName];
        if (!variantChoices) { return file; }
        const variantCheck = this._variantCheck(data, variantMenu, jb2a)
        data.variant = variantCheck.defaultVariant;

        const colorChoices = colorMenu[data.dbPath][data.menuType][data.newName][data.variant];
        if (!colorChoices) { return file; }
        const colorCheck = this._colorCheck(data, colorMenu, jb2a)
        data.color = colorCheck.defaultColor.toLowerCase();

        switch (true) {
            case data.type === 'range':
                try { file = jb2a[data.dbPath][data.menuType][data.newName][data.variant][data.color][Object.keys(jb2a[data.dbPath][data.menuType][data.newName][data.variant][data.color])[1]][0] }
                catch (exception) { }
                break;
            default:
                try { file = jb2a[data.dbPath][data.menuType][data.newName][data.variant][data.color][0] }
                catch (exception) { }
        }

        return file;
    }

    static _variantCheck(data, variantMenu, jb2a) {
        let defaultVariant = data.variant;
        let inPlace = true;
        if (!Object.keys(jb2a[data.dbPath][data.menuType][data.newName]).includes(data.variant)) {
            inPlace = false;
            defaultVariant = variantMenu[data.dbPath][data.menuType][data.newName][Object.keys(variantMenu[data.dbPath][data.menuType][data.newName])[0]]
        }
        return { inPlace, defaultVariant };
    }

    static _colorCheck(data, colorMenu, jb2a) {
        let defaultColor = data.color;
        let inPlace = true;
        if (!Object.keys(jb2a[data.dbPath][data.menuType][data.newName][data.variant]).includes(data.color)) {
            inPlace = false;
            defaultColor = colorMenu[data.dbPath][data.menuType][data.newName][data.variant][Object.keys(colorMenu[data.dbPath][data.menuType][data.newName][data.variant])[0]]
        }
        return { inPlace, defaultColor };
    }

    static _dbPath(type) {
        switch (type) {
            case 'melee':
                return 'melee';
            case 'range':
                return 'range';
            case 'template':
                return 'templatefx';
            default:
                return 'static';
        }
    }
}