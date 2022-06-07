Hooks.once('aa.ready', async (jb2a) => { await menuOptions(jb2a) });
const aaTypeMenu = {};
const aaNameMenu = {};
const aaColorMenu = {};
const aaVariantMenu = {};

async function menuOptions(database) {

const jb2a = database;

const menuSets = ['range', 'return', 'melee', 'static', 'templatefx']

for (let section of menuSets) {
    aaTypeMenu[section] =       Object.keys(jb2a[section]).reduce((o, type) => ({ ...o, [type]: game.i18n.localize(`autoanimations.menuTypes.${type}`) }), {});
    aaNameMenu[section] =       Object.keys(jb2a[section]).reduce((o, type) => ({...o, [type]: Object.keys(jb2a[section][type]).reduce((o, name) => ({...o, [name]: game.i18n.localize(`autoanimations.animations.${name}`)}), {})}), {});
    aaVariantMenu[section] =    Object.keys(jb2a[section]).reduce((o, type) => ({...o, [type]: Object.keys(jb2a[section][type]).reduce((o, name) => ({...o, [name]: Object.keys(jb2a[section][type][name]).reduce((o, variant) => ({...o, [variant]: game.i18n.localize(`autoanimations.variants.${variant}`)}), {})}), {})}), {});
    aaColorMenu[section] =      Object.keys(jb2a[section]).reduce((o, type) => ({...o, [type]: Object.keys(jb2a[section][type]).reduce((o, name) => ({...o, [name]: Object.keys(jb2a[section][type][name]).reduce((o, variant) => ({...o, [variant]: Object.keys(jb2a[section][type][name][variant]).reduce((o, color) => ({...o, [color]: game.i18n.localize(`autoanimations.colors.${color}`)}), {})}), {})}), {})}), {});
}
await addRandom(aaColorMenu)
await remove_Template(aaTypeMenu)

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
                    menu[menuSection[a]][subsetTypes[c]][subsetNames[i]][subsetVariants[z]].random = game.i18n.localize('autoanimations.colors.random');
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
