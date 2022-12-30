import { debug } from "../constants/constants.js";

Hooks.once('aa.ready', async (jb2a) => { await menuOptions(jb2a) });
//const aaTypeMenu = {};
//const aaNameMenu = {};
//const aaColorMenu = {};
//const aaVariantMenu = {};
let aaReturnWeapons;
let aaRangeWeapons;

const newTypeMenu = {};
const newNameMenu = {};
const newVariantMenu = {};
const newColorMenu = {};

async function menuOptions(database) {
    aaReturnWeapons = Object.keys(database.return.weapon)
    aaRangeWeapons = Object.keys(database.range.weapon)
    const jb2a = database;

    const menuSets = ['range', 'return', 'melee', 'static', 'templatefx']

    //Object.keys(jb2a.melee).reduce((o, type) => ({...o, [type]: Object.keys(jb2a.melee[type]).forEach(function(a) {meleeMenu.animation.push({[a]: game.i18n.localize(`autoanimations.animations.${a}`)})} )}), {})
    /** Build new TYPE menu choices ending in Array */
    for (let section of menuSets) {
        newTypeMenu[section] = [];
        let currentTypeArray = [];

        Object.keys(jb2a[section]).forEach(
            function (a) {
                currentTypeArray.push(a)
                //if (!newTypeMenu[section][a]) { newTypeMenu[section][a] = []};
                newTypeMenu[section].push([ a, game.i18n.localize(`autoanimations.menuTypes.${a}`) ])
            }
        )
        currentTypeArray.sort((a, b) => a.localeCompare(b))
        currentTypeArray.forEach(function (d) {
            if (!newTypeMenu[section]) { newTypeMenu[section] = [] };
            newTypeMenu[section].push([ d, game.i18n.localize(`autoanimations.menuTypes.${d}`) ])
        })

    }

    /** Build new ANIMATION menu choices ending in Array */
    for (let section of menuSets) {
        newNameMenu[section] = {};
        let currentNameArray = [];
        Object.keys(jb2a[section]).forEach(
            function (a) {
                currentNameArray = [];
                Object.keys(jb2a[section][a]).forEach(function (b) {
                    currentNameArray.push(b)
                })
                currentNameArray.sort((a, b) => a.localeCompare(b))
                currentNameArray.forEach(function (d) {
                    if (!newNameMenu[section][a]) { newNameMenu[section][a] = [] };
                    newNameMenu[section][a].push([ d, game.i18n.localize(`autoanimations.animations.${d}`) ])
                })
            })
    }

    /** Build new VARIANT menu choices ending in Array */
    for (let section of menuSets) {
        newVariantMenu[section] = {};
        let currentVariantArray = [];
        Object.keys(jb2a[section]).forEach(
            function (a) {
                Object.keys(jb2a[section][a]).forEach(function (b) {
                    if (!newVariantMenu[section][a]) { newVariantMenu[section][a] = {} };
                    currentVariantArray = [];
                    Object.keys(jb2a[section][a][b]).forEach(function (c) {
                        currentVariantArray.push(c)
                    })
                    currentVariantArray.sort((a, b) => a.localeCompare(b))
                    currentVariantArray.forEach(function (d) {
                        if (!newVariantMenu[section][a][b]) { newVariantMenu[section][a][b] = [] };
                        newVariantMenu[section][a][b].push([d, game.i18n.localize(`autoanimations.variants.${d}`)])
                    })
                })
            })
    }

    /** Build new COLOR menu choices ending in Array */
    for (let section of menuSets) {
        newColorMenu[section] = {};
        let currentColorArray = [];
        Object.keys(jb2a[section]).forEach(
            function (a) {
                Object.keys(jb2a[section][a]).forEach(function (b) {
                    if (!newColorMenu[section][a]) { newColorMenu[section][a] = {} };
                    Object.keys(jb2a[section][a][b]).forEach(function (c) {
                        if (!newColorMenu[section][a][b]) { newColorMenu[section][a][b] = {} };
                        currentColorArray = [];
                        Object.keys(jb2a[section][a][b][c]).forEach(function (d) {
                            currentColorArray.push(d)
                        })
                        currentColorArray.sort((a, b) => a.localeCompare(b))
                        currentColorArray.forEach(function (d) {
                            if (!newColorMenu[section][a][b][c]) { newColorMenu[section][a][b][c] = [] };
                            if (d === "_markers") { return; }
                            newColorMenu[section][a][b][c].push([ d, game.i18n.localize(`autoanimations.colors.${d}`) ])
                        })

                    })
                })
            })
    }

    /** Adds "Random" to each color menu set */
    newAddRandom()
    async function newAddRandom() {
        Object.keys(newColorMenu).forEach(function (a) {
            Object.keys(newColorMenu[a]).forEach(function (b) {
                Object.keys(newColorMenu[a][b]).forEach(function (c) {
                    Object.keys(newColorMenu[a][b][c]).forEach(function (d) {
                        newColorMenu[a][b][c][d].push([ "random", game.i18n.localize('autoanimations.colors.random') ])
                    })
                })
            })
        })
    }

    /** Removes the _template from Range and Return menus */
    newTypeMenu.range.splice(0, 1);
    newTypeMenu.return.splice(0, 1);
    delete newNameMenu.range._template
    delete newNameMenu.return._template
    delete newVariantMenu.range._template
    delete newVariantMenu.return._template

    /*
    for (let section of menuSets) {
        aaTypeMenu[section] = Object.keys(jb2a[section]).reduce((o, type) => ({ ...o, [type]: game.i18n.localize(`autoanimations.menuTypes.${type}`) }), {});
        aaNameMenu[section] = Object.keys(jb2a[section]).reduce((o, type) => ({ ...o, [type]: Object.keys(jb2a[section][type]).reduce((o, name) => ({ ...o, [name]: game.i18n.localize(`autoanimations.animations.${name}`) }), {}) }), {});
        aaVariantMenu[section] = Object.keys(jb2a[section]).reduce((o, type) => ({ ...o, [type]: Object.keys(jb2a[section][type]).reduce((o, name) => ({ ...o, [name]: Object.keys(jb2a[section][type][name]).reduce((o, variant) => ({ ...o, [variant]: game.i18n.localize(`autoanimations.variants.${variant}`) }), {}) }), {}) }), {});
        aaColorMenu[section] = Object.keys(jb2a[section]).reduce((o, type) => ({ ...o, [type]: Object.keys(jb2a[section][type]).reduce((o, name) => ({ ...o, [name]: Object.keys(jb2a[section][type][name]).reduce((o, variant) => ({ ...o, [variant]: Object.keys(jb2a[section][type][name][variant]).reduce((o, color) => ({ ...o, [color]: game.i18n.localize(`autoanimations.colors.${color}`) }), {}) }), {}) }), {}) }), {});
    }
    */
    //await addRandom(aaColorMenu)
    //await remove_Template(aaTypeMenu)
    debug( "Compiled Select Menus", {newTypeMenu, newNameMenu, newVariantMenu, newColorMenu} )
}

export { aaReturnWeapons, newTypeMenu, newNameMenu, newVariantMenu, newColorMenu, aaRangeWeapons }


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
