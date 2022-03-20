Hooks.once('aa.ready', async (jb2a) => { await menuOptions(jb2a) });
const aaTypeMenu = {};
const aaNameMenu = {};
const aaColorMenu = {};
const aaVariantMenu = {};

async function menuOptions(database) {

const jb2a = database;

const menuSets = ['range', 'return', 'melee', 'static', 'templatefx']

for (let section of menuSets) {
    aaTypeMenu[section] =       Object.keys(jb2a[section]).reduce((o, type) => ({ ...o, [type]: game.i18n.localize(`AUTOANIM.${type}`) }), {});
    aaNameMenu[section] =       Object.keys(jb2a[section]).reduce((o, type) => ({...o, [type]: Object.keys(jb2a[section][type]).reduce((o, name) => ({...o, [name]: game.i18n.localize(`AUTOANIM.${name}`)}), {})}), {});
    aaVariantMenu[section] =    Object.keys(jb2a[section]).reduce((o, type) => ({...o, [type]: Object.keys(jb2a[section][type]).reduce((o, name) => ({...o, [name]: Object.keys(jb2a[section][type][name]).reduce((o, variant) => ({...o, [variant]: game.i18n.localize(`AUTOANIM.${variant}`)}), {})}), {})}), {});
    aaColorMenu[section] =      Object.keys(jb2a[section]).reduce((o, type) => ({...o, [type]: Object.keys(jb2a[section][type]).reduce((o, name) => ({...o, [name]: Object.keys(jb2a[section][type][name]).reduce((o, variant) => ({...o, [variant]: Object.keys(jb2a[section][type][name][variant]).reduce((o, color) => ({...o, [color]: game.i18n.localize(`AUTOANIM.${color}`)}), {})}), {})}), {})}), {});
}
await addRandom(aaColorMenu)
await remove_Template(aaTypeMenu)

/*
let range = Object.keys(jb2a.range)
let melee = Object.keys(jb2a.melee)
let aaStatic = Object.keys(jb2a.static)
let rangeReturn = Object.keys(jb2a.return)
let templatefx = Object.keys(jb2a.templatefx)

aaTypeMenu.range =    range.reduce((o, type) => ({...o, [type]: game.i18n.localize(`AUTOANIM.${type}`)}), {});
aaTypeMenu.return =    rangeReturn.reduce((o, type) => ({...o, [type]: game.i18n.localize(`AUTOANIM.${type}`)}), {});
aaTypeMenu.melee =    melee.reduce((o, type) => ({...o, [type]: game.i18n.localize(`AUTOANIM.${type}`)}), {});
aaTypeMenu.static =    aaStatic.reduce((o, type) => ({...o, [type]: game.i18n.localize(`AUTOANIM.${type}`)}), {});
aaTypeMenu.templatefx =  templatefx.reduce((o, type) => ({...o, [type]: game.i18n.localize(`AUTOANIM.${type}`)}), {});

remove_Template(aaTypeMenu)

aaNameMenu.range = range.reduce((o, type) => ({...o, [type]: Object.keys(jb2a.range[type]).reduce((o, name) => ({...o, [name]: game.i18n.localize(`AUTOANIM.${name}`)}), {})}), {});
aaNameMenu.return = rangeReturn.reduce((o, type) => ({...o, [type]: Object.keys(jb2a.return[type]).reduce((o, name) => ({...o, [name]: game.i18n.localize(`AUTOANIM.${name}`)}), {})}), {});
aaNameMenu.melee = melee.reduce((o, type) => ({...o, [type]: Object.keys(jb2a.melee[type]).reduce((o, name) => ({...o, [name]: game.i18n.localize(`AUTOANIM.${name}`)}), {})}), {});
aaNameMenu.static = aaStatic.reduce((o, type) => ({...o, [type]: Object.keys(jb2a.static[type]).reduce((o, name) => ({...o, [name]: game.i18n.localize(`AUTOANIM.${name}`)}), {})}), {});
aaNameMenu.templatefx = templatefx.reduce((o, type) => ({...o, [type]: Object.keys(jb2a.templatefx[type]).reduce((o, name) => ({...o, [name]: game.i18n.localize(`AUTOANIM.${name}`)}), {})}), {});

aaVariantMenu.range =  range.reduce((o, type) => ({...o, [type]: Object.keys(jb2a.range[type]).reduce((o, name) => ({...o, [name]: Object.keys(jb2a.range[type][name]).reduce((o, variant) => ({...o, [variant]: game.i18n.localize(`AUTOANIM.${variant}`)}), {})}), {})}), {});
aaVariantMenu.return = rangeReturn.reduce((o, type) => ({...o, [type]: Object.keys(jb2a.return[type]).reduce((o, name) => ({...o, [name]: Object.keys(jb2a.return[type][name]).reduce((o, variant) => ({...o, [variant]: game.i18n.localize(`AUTOANIM.${variant}`)}), {})}), {})}), {});
aaVariantMenu.melee = melee.reduce((o, type) => ({...o, [type]: Object.keys(jb2a.melee[type]).reduce((o, name) => ({...o, [name]: Object.keys(jb2a.melee[type][name]).reduce((o, variant) => ({...o, [variant]: game.i18n.localize(`AUTOANIM.${variant}`)}), {})}), {})}), {});
aaVariantMenu.static = aaStatic.reduce((o, type) => ({...o, [type]: Object.keys(jb2a.static[type]).reduce((o, name) => ({...o, [name]: Object.keys(jb2a.static[type][name]).reduce((o, variant) => ({...o, [variant]: game.i18n.localize(`AUTOANIM.${variant}`)}), {})}), {})}), {});
aaVariantMenu.templatefx = templatefx.reduce((o, type) => ({...o, [type]: Object.keys(jb2a.templatefx[type]).reduce((o, name) => ({...o, [name]: Object.keys(jb2a.templatefx[type][name]).reduce((o, variant) => ({...o, [variant]: game.i18n.localize(`AUTOANIM.${variant}`)}), {})}), {})}), {});

aaColorMenu.range = range.reduce((o, type) => ({...o, [type]: Object.keys(jb2a.range[type]).reduce((o, name) => ({...o, [name]: Object.keys(jb2a.range[type][name]).reduce((o, variant) => ({...o, [variant]: Object.keys(jb2a.range[type][name][variant]).reduce((o, color) => ({...o, [color]: game.i18n.localize(`AUTOANIM.${color}`)}), {})}), {})}), {})}), {});
aaColorMenu.return = rangeReturn.reduce((o, type) => ({...o, [type]: Object.keys(jb2a.return[type]).reduce((o, name) => ({...o, [name]: Object.keys(jb2a.return[type][name]).reduce((o, variant) => ({...o, [variant]: Object.keys(jb2a.return[type][name][variant]).reduce((o, color) => ({...o, [color]: game.i18n.localize(`AUTOANIM.${color}`)}), {})}), {})}), {})}), {});
aaColorMenu.melee = melee.reduce((o, type) => ({...o, [type]: Object.keys(jb2a.melee[type]).reduce((o, name) => ({...o, [name]: Object.keys(jb2a.melee[type][name]).reduce((o, variant) => ({...o, [variant]: Object.keys(jb2a.melee[type][name][variant]).reduce((o, color) => ({...o, [color]: game.i18n.localize(`AUTOANIM.${color}`)}), {})}), {})}), {})}), {});
aaColorMenu.static = aaStatic.reduce((o, type) => ({...o, [type]: Object.keys(jb2a.static[type]).reduce((o, name) => ({...o, [name]: Object.keys(jb2a.static[type][name]).reduce((o, variant) => ({...o, [variant]: Object.keys(jb2a.static[type][name][variant]).reduce((o, color) => ({...o, [color]: game.i18n.localize(`AUTOANIM.${color}`)}), {})}), {})}), {})}), {});
aaColorMenu.templatefx = templatefx.reduce((o, type) => ({...o, [type]: Object.keys(jb2a.templatefx[type]).reduce((o, name) => ({...o, [name]: Object.keys(jb2a.templatefx[type][name]).reduce((o, variant) => ({...o, [variant]: Object.keys(jb2a.templatefx[type][name][variant]).reduce((o, color) => ({...o, [color]: game.i18n.localize(`AUTOANIM.${color}`)}), {})}), {})}), {})}), {});

addRandom(aaColorMenu)
*/

//return {aaColorsPatreon, aaVariantsPatreon}
}

export {aaTypeMenu, aaNameMenu, aaVariantMenu, aaColorMenu}

async function addRandom(menu) {
    const menuSection = Object.keys(menu);
    const length = menuSection.length;
    for (var a = 0; a < length; a++) {
        let subsetTypes = Object.keys(menu[menuSection[a]]);
        let typesLength = subsetTypes.length;
        for (var c = 0; c < typesLength; c++) {
            let subsetNames = Object.keys(menu[menuSection[a]][subsetTypes[c]]);
            let namesLength = subsetNames.length;
            for (var i = 0; i < namesLength; i++) {
                let subsetVariants = Object.keys(menu[menuSection[a]][subsetTypes[c]][subsetNames[i]]);
                let variantsLength = subsetVariants.length;
                for (var z = 0; z < variantsLength; z++) {
                    menu[menuSection[a]][subsetTypes[c]][subsetNames[i]][subsetVariants[z]].random = game.i18n.localize('AUTOANIM.random');
                }
            }
        }
    }
}

async function remove_Template(menu) {
    const menuSection = Object.keys(menu);
    for (let section of menuSection) {
         delete menu[section]._template
    }
}
