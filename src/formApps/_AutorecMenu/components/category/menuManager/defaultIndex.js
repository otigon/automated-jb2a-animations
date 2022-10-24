import { loadDefault }      from "../../../store/default-data/index.js";
import { AutorecSanitizer } from "../../../../../aa-classes/autorecSanityCheck.js"

export function defaultData() {
    let defaultMenu = {
        melee: loadDefault('melee'),
        range: loadDefault('range'),
        ontoken: loadDefault('ontoken'),
        templatefx: loadDefault('templatefx'),
        aura: loadDefault('aura'),
        preset: loadDefault('preset'),
        aefx: loadDefault('aefx')
    }
     
    return {
        melee: newMenuIDs(foundry.utils.deepClone(defaultMenu.melee)),
        range: newMenuIDs(foundry.utils.deepClone(defaultMenu.range)),
        ontoken: newMenuIDs(foundry.utils.deepClone(defaultMenu.ontoken)),
        templatefx: newMenuIDs(foundry.utils.deepClone(defaultMenu.templatefx)),
        aura: newMenuIDs(foundry.utils.deepClone(defaultMenu.aura)),
        preset: newMenuIDs(foundry.utils.deepClone(defaultMenu.preset)),
        aefx: newMenuIDs(foundry.utils.deepClone(defaultMenu.aefx)),
    }

    /*
    return {
        melee: newMenuIDs(foundry.utils.deepClone(melee)),
        range: newMenuIDs(foundry.utils.deepClone(range)),
        ontoken: newMenuIDs(foundry.utils.deepClone(ontoken)),
        templatefx: newMenuIDs(foundry.utils.deepClone(templatefx)),
        aura: newMenuIDs(foundry.utils.deepClone(aura)),
        preset: newMenuIDs(foundry.utils.deepClone(preset)),
        aefx: newMenuIDs(foundry.utils.deepClone(aefx)),
    }
    */
}

function newMenuIDs(menu) {
    let newMenu = AutorecSanitizer.newSectionIds(menu)
    //let newMenu = menu.forEach(section => section.id = uuidv4());
    return newMenu;
}