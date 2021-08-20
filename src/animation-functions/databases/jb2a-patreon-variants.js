import { JB2APATREONDB } from "./jb2a-patreon-database.js"

const jb2a = JB2APATREONDB;

let range = Object.keys(jb2a.range)
let melee = Object.keys(jb2a.melee)
let aaStatic = Object.keys(jb2a.static)
let rangeReturn = Object.keys(jb2a.return)

export const aaVariantsPatreon = {}

aaVariantsPatreon.range = range.reduce((o, key) => ({...o, [key]: Object.keys(jb2a.range[key]).reduce((o, variant) => ({...o, [variant]: `AUTOANIM.${variant}`}), {})}), {});

aaVariantsPatreon.return = rangeReturn.reduce((o, key) => ({...o, [key]: Object.keys(jb2a.return[key]).reduce((o, variant) => ({...o, [variant]: `AUTOANIM.${variant}`}), {})}), {});

aaVariantsPatreon.melee = melee.reduce((o, key) => ({...o, [key]: Object.keys(jb2a.melee[key]).reduce((o, variant) => ({...o, [variant]: `AUTOANIM.${variant}`}), {})}), {});

aaVariantsPatreon.static = aaStatic.reduce((o, key) => ({...o, [key]: Object.keys(jb2a.static[key]).reduce((o, variant) => ({...o, [variant]: `AUTOANIM.${variant}`}), {})}), {});

aaVariantsPatreon.localized = function (cfg) {
    return Object.keys(cfg).reduce((i18nCfg, key) => {
        i18nCfg[key] = game.i18n.localize(cfg[key]);
        return i18nCfg;
    }, {}
    );
};