import { JB2AFREEDB } from "./jb2a-free-database.js"

const jb2a = JB2AFREEDB;

let range = Object.keys(jb2a.range)
let melee = Object.keys(jb2a.melee)
let aaStatic = Object.keys(jb2a.static)
let rangeReturn = Object.keys(jb2a.return)

export const aaColorsFree = {}

aaColorsFree.range = range.reduce((o, key) => ({...o, [key]: Object.keys(jb2a.range[key]).reduce((o, variant) => ({...o, [variant]: Object.keys(jb2a.range[key][variant]).reduce((o, colors) => ({...o, [colors]: `AUTOANIM.${colors}`}), {})}), {})}), {});

aaColorsFree.return = rangeReturn.reduce((o, key) => ({...o, [key]: Object.keys(jb2a.return[key]).reduce((o, variant) => ({...o, [variant]: Object.keys(jb2a.return[key][variant]).reduce((o, colors) => ({...o, [colors]: `AUTOANIM.${colors}`}), {})}), {})}), {});

aaColorsFree.melee = melee.reduce((o, key) => ({...o, [key]: Object.keys(jb2a.melee[key]).reduce((o, variant) => ({...o, [variant]: Object.keys(jb2a.melee[key][variant]).reduce((o, colors) => ({...o, [colors]: `AUTOANIM.${colors}`}), {})}), {})}), {});

aaColorsFree.static = aaStatic.reduce((o, key) => ({...o, [key]: Object.keys(jb2a.static[key]).reduce((o, variant) => ({...o, [variant]: Object.keys(jb2a.static[key][variant]).reduce((o, colors) => ({...o, [colors]: `AUTOANIM.${colors}`}), {})}), {})}), {});

aaColorsFree.localized = function (cfg) {
    return Object.keys(cfg).reduce((i18nCfg, key) => {
        i18nCfg[key] = game.i18n.localize(cfg[key]);
        return i18nCfg;
    }, {}
    );
};