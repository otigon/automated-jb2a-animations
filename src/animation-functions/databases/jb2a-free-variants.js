import { JB2AFREEDB } from "./jb2a-free-database.js"

const jb2a = JB2AFREEDB;

let range = Object.keys(jb2a.range)
let melee = Object.keys(jb2a.melee)
let aaStatic = Object.keys(jb2a.static)
let rangeReturn = Object.keys(jb2a.return)

export const aaVariantsFree = {}

aaVariantsFree.range = range.reduce((o, key) => ({...o, [key]: Object.keys(jb2a.range[key]).reduce((o, variant) => ({...o, [variant]: `AUTOANIM.${variant}`}), {})}), {});

aaVariantsFree.return = rangeReturn.reduce((o, key) => ({...o, [key]: Object.keys(jb2a.return[key]).reduce((o, variant) => ({...o, [variant]: `AUTOANIM.${variant}`}), {})}), {});

aaVariantsFree.melee = melee.reduce((o, key) => ({...o, [key]: Object.keys(jb2a.melee[key]).reduce((o, variant) => ({...o, [variant]: `AUTOANIM.${variant}`}), {})}), {});

aaVariantsFree.static = aaStatic.reduce((o, key) => ({...o, [key]: Object.keys(jb2a.static[key]).reduce((o, variant) => ({...o, [variant]: `AUTOANIM.${variant}`}), {})}), {});

aaVariantsFree.localized = function (cfg) {
    return Object.keys(cfg).reduce((i18nCfg, key) => {
        i18nCfg[key] = game.i18n.localize(cfg[key]);
        return i18nCfg;
    }, {}
    );
};