import { AAAutorecManager }     from "../formApps/_AutorecMenu/components/category/menuManager/AAAutorecManager";
import { custom_error }       from "../constants/constants";
import { uuidv4 }               from "@typhonjs-fvtt/runtime/svelte/util";

export class AutorecSanitizer
{
    static getMenu () {
        let menu = AAAutorecManager.getAutorecEntries();
        delete menu.version;
        return menu;
    }

    static async checkForDuplicates() {
        let menu = this.getMenu();
        let menuKeys = Object.keys(menu);
        for (let i = 0; i < menuKeys.length; i++) {
            var valueArr = menu[menuKeys[i]].map(function(item){ return item.id });
            var isDuplicate = valueArr.some(function(item, idx){ 
                return valueArr.indexOf(item) != idx 
            });
            if (isDuplicate) {
                custom_error(`The ${game.i18n.localize(`autoanimations.animTypes.${menuKeys[i]}`)} Global Menu contains Duplicate ID's, commencing Sanitization`);
                await this.cleanIds(menuKeys[i], menu);
            }
        }
    }

    static async cleanIds(menuId, menu) {
        let sanitizedMenu = menu[menuId];
        sanitizedMenu.forEach(section => section.id = uuidv4());
        game.settings.set('autoanimations', `aaAutorec-${menuId}`, sanitizedMenu)
        custom_error(`The ${game.i18n.localize(`autoanimations.animTypes.${menuId}`)} Global Menu has been corrected from catastrophic errors. Please refresh your game world`)
        //autoRecStores[menuId]?._data?.forEach(animation => animation._data.id = uuidv4())
    }

    static newSectionIds (menu) {
        menu.forEach(section => section.id = uuidv4());
        return menu;
    }

}