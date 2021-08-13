import { JB2APATREONDB } from "../databases/jb2a-patreon-database.js"
import { JB2AFREEDB } from "../databases/jb2a-free-database.js";
/*
export default class animationDefaults {
    constructor () {

    }
}
*/
/*
function moduleIncludes(test) {
    return !!game.modules.get(test);
}
*/
let jb2a = JB2APATREONDB;

export const animationDefault = {
firebolt: {
    rangeVariants: Object.keys(jb2a.firebolt.range),
    rangeColors: Object.keys(jb2a.firebolt.range['01']),
},
rayoffrost: {
    rangeVariants: Object.keys(jb2a.rayoffrost.range),
    rangeColors: Object.keys(jb2a.rayoffrost.range['01']),
},
eldritchblast: {
    rangeVariants: Object.keys(jb2a.eldritchblast.range),
    rangeColors: Object.keys(jb2a.eldritchblast.range['01']),
},
curewounds: {
    rangeVariants: Object.keys(jb2a.curewounds.static),
    rangeColors: Object.keys(jb2a.curewounds.static['01']),
},
generichealing: {
    rangeVariants: Object.keys(jb2a.generichealing.static),
    rangeColors: Object.keys(jb2a.generichealing.static['01']),
},
witchbolt: {
    rangeVariants: Object.keys(jb2a.witchbolt.range),
    rangeColors: Object.keys(jb2a.witchbolt.range['01']),
},
scorchingray: {
    rangeVariants: Object.keys(jb2a.scorchingray.range),
    rangeColors01: Object.keys(jb2a.scorchingray.range['01']),
    rangeColors02: Object.keys(jb2a.scorchingray.range['02']),
},
disintegrate: {
    rangeVariants: Object.keys(jb2a.disintegrate.range),
    rangeColors: Object.keys(jb2a.disintegrate.range['01']),
},
magicmissile: {
    rangeVariants: Object.keys(jb2a.magicmissile.range),
    rangeColors: Object.keys(jb2a.magicmissile.range['01']),
},
guidingbolt: {
    rangeVariants: Object.keys(jb2a.guidingbolt.range),
    rangeColors01: Object.keys(jb2a.guidingbolt.range['01']),
    rangeColors02: Object.keys(jb2a.guidingbolt.range['02']),
},

}