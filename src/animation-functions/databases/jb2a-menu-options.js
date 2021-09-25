Hooks.once('aa.ready', async (jb2a) => { menuOptions(jb2a) });
const aaColorMenu = {};
const aaVariantMenu = {};
function menuOptions(database) {

const jb2a = database;

let range = Object.keys(jb2a.range)
let melee = Object.keys(jb2a.melee)
let aaStatic = Object.keys(jb2a.static)
let rangeReturn = Object.keys(jb2a.return)


aaColorMenu.range = range.reduce((o, key) => ({...o, [key]: Object.keys(jb2a.range[key]).reduce((o, variant) => ({...o, [variant]: Object.keys(jb2a.range[key][variant]).reduce((o, colors) => ({...o, [colors]: game.i18n.localize(`AUTOANIM.${colors}`)}), {})}), {})}), {});

aaColorMenu.return = rangeReturn.reduce((o, key) => ({...o, [key]: Object.keys(jb2a.return[key]).reduce((o, variant) => ({...o, [variant]: Object.keys(jb2a.return[key][variant]).reduce((o, colors) => ({...o, [colors]: game.i18n.localize(`AUTOANIM.${colors}`)}), {})}), {})}), {});

aaColorMenu.melee = melee.reduce((o, key) => ({...o, [key]: Object.keys(jb2a.melee[key]).reduce((o, variant) => ({...o, [variant]: Object.keys(jb2a.melee[key][variant]).reduce((o, colors) => ({...o, [colors]: game.i18n.localize(`AUTOANIM.${colors}`)}), {})}), {})}), {});

aaColorMenu.static = aaStatic.reduce((o, key) => ({...o, [key]: Object.keys(jb2a.static[key]).reduce((o, variant) => ({...o, [variant]: Object.keys(jb2a.static[key][variant]).reduce((o, colors) => ({...o, [colors]: game.i18n.localize(`AUTOANIM.${colors}`)}), {})}), {})}), {});

addRandom(aaColorMenu)

aaVariantMenu.range = range.reduce((o, key) => ({...o, [key]: Object.keys(jb2a.range[key]).reduce((o, variant) => ({...o, [variant]: game.i18n.localize(`AUTOANIM.${variant}`)}), {})}), {});

aaVariantMenu.return = rangeReturn.reduce((o, key) => ({...o, [key]: Object.keys(jb2a.return[key]).reduce((o, variant) => ({...o, [variant]: game.i18n.localize(`AUTOANIM.${variant}`)}), {})}), {});

aaVariantMenu.melee = melee.reduce((o, key) => ({...o, [key]: Object.keys(jb2a.melee[key]).reduce((o, variant) => ({...o, [variant]: game.i18n.localize(`AUTOANIM.${variant}`)}), {})}), {});

aaVariantMenu.static = aaStatic.reduce((o, key) => ({...o, [key]: Object.keys(jb2a.static[key]).reduce((o, variant) => ({...o, [variant]: game.i18n.localize(`AUTOANIM.${variant}`)}), {})}), {});

//return {aaColorsPatreon, aaVariantsPatreon}
}
export {aaColorMenu, aaVariantMenu}

function addRandom(menu) {
    const menuKeys = Object.keys(menu);
    const length = menuKeys.length;
    for (var a = 0; a < length; a++) {
        let subsetNames = Object.keys(menu[menuKeys[a]]);
        let namesLength = subsetNames.length;
        for (var c = 0; c < namesLength; c++) {
            let subsetVariants = Object.keys(menu[menuKeys[a]][subsetNames[c]]);
            let variantsLength = subsetVariants.length;
            for (var i = 0; i < variantsLength; i++) {
                menu[menuKeys[a]][subsetNames[c]][subsetVariants[i]].random = game.i18n.localize('AUTOANIM.random');
            }
        }
    }
}