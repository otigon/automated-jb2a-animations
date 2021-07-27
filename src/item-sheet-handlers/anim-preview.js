import { JB2APATREONDB } from "../animation-functions/jb2a-database.js/jb2a-patreon-database.js";
import { JB2AFREEDB } from "../animation-functions/jb2a-database.js/jb2a-free-database.js";
import { buildTargetTokenFile } from "../animation-functions/file-builder/build-filepath.js";

function animPreview(flags, name) {

    function moduleIncludes(test) {
        return !!game.modules.get(test);
    }

    let obj01 = moduleIncludes("jb2a_patreon") === true ? JB2APATREONDB : JB2AFREEDB;
    let jb2a = moduleIncludes("jb2a_patreon") === true ? true : false;
    //let itemName = item.animName.toLowerCase();
    let itemName = name;
    let item = flags.autoanimations ?? "";
    //console.log(item);
    let color;
    let obj02;
    let tempType;
    let tempAnim;
    let spellVar;
    let preview = "no preview";
    let damageType;
    let enabled = item?.override ?? false;
    let file;
    if (enabled) {
        switch (true) {
            case item.animType === 't1':
                break;
            case item.animType === 't2':
                color = item.color
                switch (itemName) {
                    case "dagger":
                    case "handaxe":
                    case "spear":
                        obj02 = 'melee' + itemName;
                        try { preview = obj01[obj02][color] }
                        catch (exception) { preview = "no preview" }
                        break;
                    default:
                        try { preview = obj01[itemName][color] }
                        catch (exception) { preview = "no preview" }
                        //console.log(preview);
                        break;
                }
                break;
            case item.animType === 't3':
                color = item.color
                switch (itemName) {
                    case "unarmedstrike":
                    case "flurryofblows":
                        switch (item.uaStrikeType) {
                            case ``:
                            case "physical":
                                try { preview = obj01[itemName]['physical'][color]['1'] }
                                catch (exception) { preview = "no preview" }
                                break;
                            default:
                                try { preview = obj01[itemName]['magical'][color]['1'] }
                                catch (exception) { preview = "no preview" }
                        }
                        break;
                    default:
                        try { preview = obj01.genericmelee[itemName] }
                        catch (exception) { preview = "no preview" }
                }
                break;
            case item.animType === 't4':
                color = item.color
                switch (itemName) {
                    case "boulder":
                    case "rangejavelin":
                    case "siege":
                    case "rangesling":
                        try { preview = obj01[itemName]['30ft'] }
                        catch (exception) { preview = "no preview"; }
                        break;
                    case "rangedagger":
                    case "rangehandaxe":
                        try { preview = obj01[itemName][item.dtvar]['30ft'] }
                        catch (exception) { preview = "no preview"; }
                        break;
                    case "rangehammer":
                    case "rangespear":
                        try { preview = obj01[itemName]['01']['30ft'] }
                        catch (exception) { preview = "no preview"; }
                        break;
                    case "lasershot":
                    case "snipe":
                    case "rangelasersword":
                    case "rangelasersworddb":
                    case "rangesword":
                    case "rangegreataxe":
                        try { preview = obj01[itemName][color]['30ft'] }
                        catch (exception) { preview = "no preview"; }
                        break;
                    case "arrow":
                    case "bolt":
                    case "bullet":
                        damageType = item.rangedOptions?.rangeDmgType;
                        try { preview = obj01[itemName][damageType][color]['30ft'] }
                        catch (exception) { preview = "no preview" }
                        break;
                    default:
                        try { preview = obj01[itemName]['white']['30ft'] }
                        catch (exception) { preview = "no preview"; }
                }
                break;
            case item.animType === 't5':
                color = item.color;
                switch (itemName) {
                    case "creaturebite":
                    case "creatureclaw":
                        try { preview = obj01[itemName][color] }
                        catch (exception) { preview = "no preview"; }
                        break;
                    default:
                        try { preview = obj01[itemName][color] }
                        catch (exception) { preview = "no preview"; }
                }
                break;
            case item.animType === 't6':
                color = item.color;
                if (item.options?.enableCustom01) {
                    preview = item.options?.customPath01
                } else {
                    switch (itemName) {
                        case "scorchingray":
                            switch (item.spellVar) {
                                case '02':
                                    spellVar = '02';
                                    break;
                                default:
                                    spellVar = '01';
                            }
                            switch (spellVar) {
                                case '02':
                                    try { preview = obj01[itemName][spellVar][color]['30ft'][0] }
                                    catch (exception) { preview = "no preview"; }
                                    break;
                                default:
                                    try { preview = obj01[itemName][spellVar][color]['30ft'] }
                                    catch (exception) { preview = "no preview"; }
                            }
                            break;
                        case "magicmissile":
                            try { preview = obj01[itemName][color]['30ft'][0] }
                            catch (exception) { preview = "no preview"; }
                            break;
                        default:
                            try { preview = obj01[itemName][color]['30ft'] }
                            catch (exception) { preview = "no preview"; }
                    }
                }
                break;
            case item.animType === 't7':
                color = item.color;
                switch (itemName) {
                    case "curewounds":
                        try { preview = obj01[itemName][color] }
                        catch (exception) { preview = "no preview"; }
                        break;
                    case "generichealing":
                        switch (item.spellVar) {
                            case '02':
                                spellVar = '02';
                                try { preview = obj01[itemName][spellVar][color] }
                                catch (exception) { preview = "no preview"; }        
                                break;
                            default:
                                spellVar = '01';
                                try { preview = obj01[itemName][spellVar][color] }
                                catch (exception) { preview = "no preview"; }        
                        }
                        break;
                }
                break;
            case item.animType === 't8':
                obj02 = "templates";
                tempType = item.templates?.tempType;
                color = item.templates?.tempColor;
                tempAnim = item.templates?.tempAnim;
                if (item.templates?.customAnim) {
                    preview = item.templates?.customPath;
                } else {
                    try {preview = obj01[obj02][tempType][tempAnim][color]} 
                    catch (exception) {"no preview"}
                }
                break;
            case item.animType === 't9':
                switch (item.explodeVariant) {
                    case 'boulder':
                        preview = obj01.explosion.boulder
                        break;
                    case 'shatter':
                    case "thunderwave":
                    case 'antilife-shell':
                        try { preview = obj01.explosion[item.explodeVariant][item.explodeColor] }
                        catch (exception) { preview = "no preview" }
                        break;
                    default:
                        try { preview = obj01.explosion[item.explodeVariant][item.explodeColor][0] }
                        catch (exception) { preview = "no preview" }
                        break;
                }
                break;
            case item.animType === 't10':
                switch (item.explodeVariant) {
                    case 'boulder':
                        preview = obj01.explosion.boulder
                        break;
                    case 'shatter':
                    case "thunderwave":
                    case 'antilife-shell':
                        try { preview = obj01.explosion[item.explodeVariant][item.explodeColor] }
                        catch (exception) { preview = "no preview" }
                        break;
                    default:
                        try { preview = obj01.explosion[item.explodeVariant][item.explodeColor][0] }
                        catch (exception) { preview = "no preview" }
                        break;
                }
                break;
            case item.animType === 't11':
                color = item.color;
                try { preview = obj01[itemName][color] }
                catch (exception) { preview = "no preview"; }
                break;
            case item.animType === 't12':
                color = item.color;
                switch (itemName) {
                    case "mistystep":
                        try { preview = obj01[itemName]['01'][color] }
                        catch (exception) { preview = "no preview"; }        
                        break;
                }
                break;
            case item.animType === 't13':
                switch (itemName) {
                    case "bardicinspiration":
                        color = item.bards?.bardSelfColor;
                        switch (item.bards?.bardAnim) {
                            case "bardicinspiration":
                                try { preview = obj01[itemName]['inspire'][color] }
                                catch (exception) { preview = "no preview"; }                
                                break;
                            case "music":
                                try { preview = obj01[itemName][color] }
                                catch (exception) { preview = "no preview"; }                
                                break;
                        }
                        break;
                }
                break;
        }
    }
    //console.log(preview);
    return preview

    function testPath(path) {
        try {
            return path;
        } catch (exception) {
            console.log("Autoanimations | Couldn´t extract data-item-id for message :", content);
            return undefined;
        }
    }
}
function checkPath(content) {
    try {
        return content;
    } catch (exception) {
        //console.log("Autoanimations | Couldn´t extract data-item-id for message :", content);
        return null;
    }
}
export default animPreview;
