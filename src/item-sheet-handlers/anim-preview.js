import { JB2APATREONDB } from "../animation-functions/jb2a-patreon-database.js";
import { JB2AFREEDB } from "../animation-functions/jb2a-free-database.js";

function animPreview(item, name) {

    function moduleIncludes(test) {
        return !!game.modules.get(test);
    }

    let obj01 = moduleIncludes("jb2a_patreon") === true ? JB2APATREONDB : JB2AFREEDB;
    let jb2a = moduleIncludes("jb2a_patreon") === true ? true : false;
    //let itemName = item.animName.toLowerCase();
    let itemName = name;
    //console.log(item);
    let color;
    let obj02;
    let tempType;
    let tempAnim;
    let spellVar;
    let preview;
    let damageType;
    let enabled = item?.override ?? false;
    let file;
    if (enabled) {
        switch (true) {
            case item.animType === 't1':
                break;
            case item.animType === 't2':
                switch (itemName) {
                    case "dagger":
                        obj02 = 'meleedagger';
                        switch (item.color) {
                            case ``:
                            case 'a1':
                            case 'random':
                                color = 'white';
                                break;
                            default:
                                color = item.color;
                        }
                        if (obj01[obj02][color] === undefined) { color = 'white' };
                        preview = obj01[obj02][color];
                        break;
                    case "greataxe":
                        obj02 = 'greataxe';
                        switch (item.color) {
                            case ``:
                            case 'a1':
                            case 'random':
                                color = 'white';
                                break;
                            default:
                                color = item.color;
                        }
                        if (obj01[obj02][color] === undefined) { color = 'white' };
                        preview = obj01[obj02][color];
                        break;
                    case "greatclub":
                        obj02 = 'greatclub';
                        switch (item.color) {
                            case ``:
                            case 'a1':
                            case 'random':
                                color = 'white';
                                break;
                            default:
                                color = item.color;
                        }
                        if (obj01[obj02][color] === undefined) { color = 'white' };
                        preview = obj01[obj02][color];
                        break;
                    case "greatsword":
                        obj02 = 'greatsword';
                        switch (item.color) {
                            case ``:
                            case 'a1':
                            case 'random':
                                color = 'white';
                                break;
                            default:
                                color = item.color;
                        }
                        if (obj01[obj02][color] === undefined) { color = 'white' };
                        preview = obj01[obj02][color];
                        break;
                    case "handaxe":
                        obj02 = 'meleehandaxe';
                        switch (item.color) {
                            case ``:
                            case 'a1':
                            case 'random':
                                color = 'white';
                                break;
                            default:
                                color = item.color;
                        }
                        if (obj01[obj02][color] === undefined) { color = 'white' };
                        preview = obj01[obj02][color];
                        break;
                    case "lasersword":
                        obj02 = 'lasersword';
                        switch (item.color) {
                            case ``:
                            case 'a1':
                            case 'random':
                                color = 'white';
                                break;
                            default:
                                color = item.color;
                        }
                        if (obj01[obj02][color] === undefined) { color = 'white' };
                        preview = obj01[obj02][color];
                        break;
                    case "mace":
                        obj02 = 'mace';
                        switch (item.color) {
                            case ``:
                            case 'a1':
                            case 'random':
                                color = 'white';
                                break;
                            default:
                                color = item.color;
                        }
                        if (obj01[obj02][color] === undefined) { color = 'white' };
                        preview = obj01[obj02][color];
                        break;
                    case "maul":
                        obj02 = 'maul';
                        switch (item.color) {
                            case ``:
                            case 'a1':
                            case 'random':
                                color = 'white';
                                break;
                            default:
                                color = item.color;
                        }
                        if (obj01[obj02][color] === undefined) { color = 'white' };
                        preview = obj01[obj02][color];
                        break;
                    case "spear":
                        obj02 = 'meleespear';
                        switch (item.color) {
                            case ``:
                            case 'a1':
                            case 'random':
                                color = 'white';
                                break;
                            default:
                                color = item.color;
                        }
                        if (obj01[obj02][color] === undefined) { color = 'white' };
                        preview = obj01[obj02][color];
                        break;
                    case "sword":
                        obj02 = 'sword';
                        switch (item.color) {
                            case ``:
                            case 'a1':
                            case 'random':
                                color = 'white';
                                break;
                            default:
                                color = item.color;
                        }
                        if (obj01[obj02][color] === undefined) { color = 'white' };
                        preview = obj01[obj02][color];
                        break;
                    case "rapier":
                        obj02 = 'rapier';
                        switch (item.color) {
                            case ``:
                            case 'a1':
                            case 'random':
                                color = 'white';
                                break;
                            default:
                                color = item.color;
                        }
                        if (obj01[obj02][color] === undefined) { color = 'white' };
                        preview = obj01[obj02][color];
                        //console.log(preview);
                        break;
                    default:
                        preview = "no preview";
                }

                break;
            case item.animType === 't3':
                switch (itemName) {
                    case "1hs":
                        obj02 = 'genericmelee';
                        color = '1hs';
                        if (obj01[obj02][color] === undefined) { color = '1hs' };
                        preview = obj01[obj02][color];
                        break;
                    case "1hp":
                        obj02 = 'genericmelee';
                        color = '1hp';
                        if (obj01[obj02][color] === undefined) { color = '1hp' };
                        preview = obj01[obj02][color];
                        break;
                    case "1hb":
                        obj02 = 'genericmelee';
                        color = '1hb';
                        if (obj01[obj02][color] === undefined) { color = '1hb' };
                        preview = obj01[obj02][color];
                        break;
                    case "2hs":
                        obj02 = 'genericmelee';
                        color = '2hs';
                        if (obj01[obj02][color] === undefined) { color = '2hs' };
                        preview = obj01[obj02][color];
                        break;
                    case "2hp":
                        obj02 = 'genericmelee';
                        color = '2hp';
                        if (obj01[obj02][color] === undefined) { color = '2hp' };
                        preview = obj01[obj02][color];
                        break;
                    case "2hb":
                        obj02 = 'genericmelee';
                        color = '2hb';
                        if (obj01[obj02][color] === undefined) { color = '2hb' };
                        preview = obj01[obj02][color];
                        break;
                    case "unarmedstrike":
                        obj02 = 'unarmedstrike';
                        switch (item.color) {
                            case ``:
                            case 'a1':
                            case 'random':
                                color = 'blue';
                                break;
                            default:
                                color = item.color;
                        }
                        switch (item.uaStrikeType) {
                            case ``:
                            case "physical":
                                if (obj01[obj02]['physical'][color] === undefined) { color = 'blue' };
                                preview = obj01[obj02]['physical'][color]['1'];
                                break;
                            default:
                                if (obj01[obj02]['magical'][color] === undefined) { color = 'blue' };
                                preview = obj01[obj02]['magical'][color]['1'];
                        }
                        break;
                    case "flurryofblows":
                        obj02 = 'flurryofblows';
                        switch (item.color) {
                            case ``:
                            case 'a1':
                            case 'random':
                                color = 'blue';
                                break;
                            default:
                                color = item.color;
                        }
                        switch (item.uaStrikeType) {
                            case ``:
                            case "physical":
                                if (obj01[obj02]['physical'][color] === undefined) { color = 'blue' };
                                preview = obj01[obj02]['physical'][color];
                                break;
                            default:
                                if (obj01[obj02]['magical'][color] === undefined) { color = 'blue' };
                                preview = obj01[obj02]['magical'][color]['1'];
                        }
                        break;
                }
                break;
            case item.animType === 't4':
                switch (itemName) {
                    case "boulder":
                        obj02 = 'boulder';
                        preview = obj01[obj02]['30'];
                        break;
                    case "rangejavelin":
                        obj02 = 'rangejavelin';
                        preview = jb2a ? obj01[obj02]['30'] : "";
                        break;
                    case "siege":
                        obj02 = 'siege';
                        preview = obj01[obj02]['30'];
                        break;
                    case "rangesling":
                        obj02 = 'rangesling';
                        preview = jb2a ? obj01[obj02]['15'] : "";
                        break;
                    case "rangehammer":
                        obj02 = 'rangehammer';
                        preview = obj01[obj02]['15'];
                        break;
                    case "lasershot":
                        obj02 = 'lasershot';
                        switch (item.color) {
                            case ``:
                            case 'a1':
                            case 'random':
                                color = 'blue';
                                break;
                            default:
                                color = item.color;
                        }
                        if (obj01[obj02][color] === undefined) { color = 'blue' };
                        try {
                            return preview = obj01[obj02][color]['30'] || "no preview";;
                        } catch (exception) {
                            //console.log("Autoanimations | No path for animation :");
                            return "no preview";
                        }
                        break;
                    case "arrow":
                        obj02 = "arrow";
                        switch (item.color) {
                            case ``:
                            case 'a1':
                            case 'random':
                                color = 'physical';
                                break;
                            default:
                                color = item.color;
                        }
                        damageType = item.rangedOptions?.rangeDmgType ?? "physical";
                        try {
                            return preview = obj01[obj02][damageType][color]['30'] || "no preview";;
                        } catch (exception) {
                            //console.log("Autoanimations | No path for animation :");
                            return "no preview";
                        }
                        break;
                    case "bolt":
                        obj02 = "bolt";
                        switch (item.color) {
                            case ``:
                            case 'a1':
                            case 'random':
                                color = 'physical';
                                break;
                            default:
                                color = item.color;
                        }
                        damageType = item.rangedOptions?.rangeDmgType ?? "physical";
                        try {
                            return preview = obj01[obj02][damageType][color]['30'] || "no preview";;
                        } catch (exception) {
                            //console.log("Autoanimations | No path for animation :");
                            return "no preview";
                        }
                        break;
                    case "bullet":
                        obj02 = "bullet";
                        switch (item.color) {
                            case ``:
                            case 'a1':
                            case 'random':
                                color = 'physical';
                                break;
                            default:
                                color = item.color;
                        }
                        damageType = item.rangedOptions?.rangeDmgType ?? "physical";
                        try {
                            return preview = obj01[obj02][damageType][color]['30'] || "no preview";;
                        } catch (exception) {
                            //console.log("Autoanimations | No path for animation :");
                            return "no preview";
                        }
                        break;
                    case "snipe":
                        obj02 = "snipe";
                        switch (item.color) {
                            case ``:
                            case 'a1':
                            case 'random':
                                color = 'physical';
                                break;
                            default:
                                color = item.color;
                        }
                        try {
                            return preview = obj01[obj02][color]['30'] || "no preview";;
                        } catch (exception) {
                            //console.log("Autoanimations | No path for animation :");
                            return "no preview";
                        }
                        break;
                }
                break;
            case item.animType === 't5':
                switch (itemName) {
                    case "creaturebite":
                        obj02 = "creaturebite";
                        switch (item.color) {
                            case ``:
                            case 'a1':
                            case 'random':
                                color = 'red';
                                break;
                            default:
                                color = item.color;
                        }
                        if (obj01[obj02][color] === undefined) { color = 'red' };
                        preview = obj01[obj02][color];
                        break;
                    case "creatureclaw":
                        obj02 = "creatureclaw";
                        switch (item.color) {
                            case ``:
                            case 'a1':
                            case 'random':
                                color = 'red';
                                break;
                            default:
                                color = item.color;
                        }
                        if (obj01[obj02][color] === undefined) { color = 'red' };
                        preview = obj01[obj02][color];
                        break;
                }
                break;
            case item.animType === 't6':
                switch (itemName) {
                    case "disintegrate":
                        obj02 = "disintegrate";
                        switch (item.color) {
                            case ``:
                            case 'a1':
                            case 'random':
                                color = 'green';
                                break;
                            default:
                                color = item.color;
                        }
                        if (obj01[obj02][color] === undefined) { color = 'green' };
                        preview = obj01[obj02][color]['15'];
                        break;
                    case "eldritchblast":
                        obj02 = "eldritchblast";
                        switch (item.color) {
                            case ``:
                            case 'a1':
                            case 'random':
                                color = 'purple';
                                break;
                            default:
                                color = item.color;
                        }
                        if (obj01[obj02][color] === undefined) { color = 'purple' };
                        preview = obj01[obj02][color]['30'];
                        break;
                    case "firebolt":
                        obj02 = "firebolt";
                        switch (item.color) {
                            case ``:
                            case 'a1':
                            case 'random':
                                color = 'orange';
                                break;
                            default:
                                color = item.color;
                        }
                        if (obj01[obj02][color] === undefined) { color = 'orange' };
                        preview = obj01[obj02][color]['30'];
                        break;
                    case "magicmissile":
                        obj02 = "magicmissile";
                        switch (item.color) {
                            case ``:
                            case 'a1':
                            case 'random':
                                color = 'purple';
                                break;
                            default:
                                color = item.color;
                        }
                        if (obj01[obj02][color] === undefined) { color = 'purple' };
                        preview = obj01[obj02][color]['30']['1'];
                        break;
                    case "rayoffrost":
                        obj02 = "rayoffrost";
                        switch (item.color) {
                            case ``:
                            case 'a1':
                            case 'random':
                                color = 'blue';
                                break;
                            default:
                                color = item.color;
                        }
                        if (obj01[obj02][color] === undefined) { color = 'blue' };
                        preview = obj01[obj02][color]['15'];
                        break;
                    case "scorchingray":
                        obj02 = "scorchingray";
                        switch (item.color) {
                            case ``:
                            case 'a1':
                            case 'random':
                                color = 'orange';
                                break;
                            default:
                                color = item.color;
                        }
                        switch (item.spellVar) {
                            case '02':
                                spellVar = '02';
                                break;
                            default:
                                spellVar = '01';
                        }
                        console.log(obj01)
                        console.log(obj02)
                        console.log(spellVar)
                        console.log(color)
                        if (obj01[obj02][spellVar][color] === undefined) { color = 'orange' };
                        switch (spellVar) {
                            case '02':
                                preview = obj01[obj02][spellVar][color]['30']['1'];
                                break;
                            default:
                                preview = obj01[obj02][spellVar][color]['30'];
                        }
                        break;
                    case "witchbolt":
                        obj02 = "witchbolt";
                        switch (item.color) {
                            case ``:
                            case 'a1':
                            case 'random':
                                color = 'blue';
                                break;
                            default:
                                color = item.color;
                        }
                        if (obj01[obj02][color] === undefined) { color = 'blue' };
                        preview = obj01[obj02][color]['15'];
                        break;
                    case "guidingbolt":
                        obj02 = "guidingbolt";
                        switch (item.color) {
                            case ``:
                            case 'a1':
                            case 'random':
                                color = 'blue yellow';
                                break;
                            default:
                                color = item.color;
                        }
                        if (obj01[obj02][color] === undefined) { color = 'blue yellow' };
                        preview = obj01[obj02][color]['30'];
                        break;
                    default:
                        preview = "no preview";
                }
                break;
            case item.animType === 't7':
                switch (itemName) {
                    case "curewounds":
                        obj02 = "curewounds";
                        switch (item.color) {
                            case ``:
                            case 'a1':
                            case 'random':
                                color = 'blue';
                                break;
                            default:
                                color = item.color;
                        }
                        if (obj01[obj02][color] === undefined) { color = 'blue' };
                        preview = obj01[obj02][color]['400'];
                        break;
                    case "generichealing":
                        obj02 = "generichealing";
                        switch (item.color) {
                            case ``:
                            case 'a1':
                            case 'random':
                                color = 'blue';
                                break;
                            default:
                                color = item.color;
                        }
                        switch (item.spellVar) {
                            case ``:
                            case 'a1':
                            case '01':
                                spellVar = '01';
                                if (obj01[obj02][spellVar][color] === undefined) { color = 'blue' };
                                preview = obj01[obj02][spellVar][color]['400'];
                                break;
                            default:
                                spellVar = '02';
                                if (obj01[obj02][spellVar][color] === undefined) { color = 'green orange' };
                                preview = obj01[obj02][spellVar][color]['600'];
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
                    try {
                        return preview = obj01[obj02][tempType][tempAnim][color] || "no preview";;
                    } catch (exception) {
                        //console.log("Autoanimations | No path for animation :");
                        return "no preview";
                    }
                }
                break;
            case item.animType === 't9':
                switch (item.explodeVariant) {
                    case '01':
                        obj02 = "explosion";
                        switch (item.explodeColor) {
                            case ``:
                            case 'a1':
                            case 'random':
                                color = 'orange';
                                break;
                            default:
                                color = item.explodeColor;
                        }
                        if (obj01[obj02]['01'][color] === undefined) { color = 'orange' };
                        preview = obj01[obj02]['01'][color];
                        break;
                    case '02':
                        obj02 = "explosion";
                        switch (item.explodeColor) {
                            case ``:
                            case 'a1':
                            case 'random':
                                color = 'blue';
                                break;
                            default:
                                color = item.explodeColor;
                        }
                        if (obj01[obj02]['02'][color] === undefined) { color = 'blue' };
                        preview = obj01[obj02]['02'][color];
                        break;
                    case '03':
                        obj02 = "explosion";
                        switch (item.explodeColor) {
                            case ``:
                            case 'a1':
                            case 'random':
                                color = 'yellow blue';
                                break;
                            default:
                                color = item.explodeColor;
                        }
                        if (obj01[obj02]['03'][color] === undefined) { color = 'yellow blue' };
                        preview = obj01[obj02]['03'][color];
                        break;
                    case '04':
                        obj02 = "explosion";
                        switch (item.explodeColor) {
                            case ``:
                            case 'a1':
                            case 'random':
                                color = 'blue';
                                break;
                            default:
                                color = item.explodeColor;
                        }
                        if (obj01[obj02]['04'][color] === undefined) { color = 'blue' };
                        preview = obj01[obj02]['04'][color];
                        break;
                    case '05':
                        obj02 = "explosion";
                        switch (item.explodeColor) {
                            case ``:
                            case 'a1':
                            case 'random':
                                color = 'blue white';
                                break;
                            default:
                                color = item.explodeColor;
                        }
                        if (obj01[obj02]['05'][color] === undefined) { color = 'blue white' };
                        preview = obj01[obj02]['05'][color];
                        break;
                    case '06':
                        obj02 = "explosion";
                        switch (item.explodeColor) {
                            case ``:
                            case 'a1':
                            case 'random':
                                color = 'blue white';
                                break;
                            default:
                                color = item.explodeColor;
                        }
                        if (obj01[obj02]['06'][color] === undefined) { color = 'blue white' };
                        preview = obj01[obj02]['06'][color];
                        break;
                    case '07':
                        obj02 = "explosion";
                        switch (item.explodeColor) {
                            case ``:
                            case 'a1':
                            case 'random':
                                color = 'blue white';
                                break;
                            default:
                                color = item.explodeColor;
                        }
                        if (obj01[obj02]['07'][color] === undefined) { color = 'blue white' };
                        preview = obj01[obj02]['07'][color];
                        break;
                    case 'shatter':
                        obj02 = "shatter";
                        switch (item.explodeColor) {
                            case ``:
                            case 'a1':
                            case 'random':
                                color = 'blue';
                                break;
                            default:
                                color = item.explodeColor;
                        }
                        if (obj01[obj02][color] === undefined) { color = 'blue' };
                        preview = obj01[obj02][color];
                        break;
                }
                break;
            case item.animType === 't10':
                switch (item.explodeVariant) {
                    case '01':
                        obj02 = "explosion";
                        switch (item.explodeColor) {
                            case ``:
                            case 'a1':
                            case 'random':
                                color = 'orange';
                                break;
                            default:
                                color = item.explodeColor;
                        }
                        if (obj01[obj02]['01'][color] === undefined) { color = 'orange' };
                        preview = obj01[obj02]['01'][color];
                        break;
                    case '02':
                        obj02 = "explosion";
                        switch (item.explodeColor) {
                            case ``:
                            case 'a1':
                            case 'random':
                                color = 'blue';
                                break;
                            default:
                                color = item.explodeColor;
                        }
                        if (obj01[obj02]['02'][color] === undefined) { color = 'blue' };
                        preview = obj01[obj02]['02'][color];
                        break;
                    case '03':
                        obj02 = "explosion";
                        switch (item.explodeColor) {
                            case ``:
                            case 'a1':
                            case 'random':
                                color = 'yellow blue';
                                break;
                            default:
                                color = item.explodeColor;
                        }
                        if (obj01[obj02]['03'][color] === undefined) { color = 'yellow blue' };
                        preview = obj01[obj02]['03'][color];
                        break;
                    case '04':
                        obj02 = "explosion";
                        switch (item.explodeColor) {
                            case ``:
                            case 'a1':
                            case 'random':
                                color = 'blue';
                                break;
                            default:
                                color = item.explodeColor;
                        }
                        if (obj01[obj02]['04'][color] === undefined) { color = 'blue' };
                        preview = obj01[obj02]['04'][color];
                        break;
                    case '05':
                        obj02 = "explosion";
                        switch (item.explodeColor) {
                            case ``:
                            case 'a1':
                            case 'random':
                                color = 'blue white';
                                break;
                            default:
                                color = item.explodeColor;
                        }
                        if (obj01[obj02]['05'][color] === undefined) { color = 'blue white' };
                        preview = obj01[obj02]['05'][color];
                        break;
                    case '06':
                        obj02 = "explosion";
                        switch (item.explodeColor) {
                            case ``:
                            case 'a1':
                            case 'random':
                                color = 'blue white';
                                break;
                            default:
                                color = item.explodeColor;
                        }
                        if (obj01[obj02]['06'][color] === undefined) { color = 'blue white' };
                        preview = obj01[obj02]['06'][color];
                        break;
                    case '07':
                        obj02 = "explosion";
                        switch (item.explodeColor) {
                            case ``:
                            case 'a1':
                            case 'random':
                                color = 'blue white';
                                break;
                            default:
                                color = item.explodeColor;
                        }
                        if (obj01[obj02]['07'][color] === undefined) { color = 'blue white' };
                        preview = obj01[obj02]['07'][color];
                        break;
                    case 'shatter':
                        obj02 = "shatter";
                        switch (item.explodeColor) {
                            case ``:
                            case 'a1':
                            case 'random':
                                color = 'blue';
                                break;
                            default:
                                color = item.explodeColor;
                        }
                        if (obj01[obj02][color] === undefined) { color = 'blue' };
                        preview = obj01[obj02][color];
                        break;
                    case 'antilife-shell':
                        obj02 = "antilifeshell";
                        preview = obj01[obj02]['antilifeshell'];
                        break;
                    case 'thunderwave':
                        obj02 = "thunderwave";
                        switch (item.explodeColor) {
                            case ``:
                            case 'a1':
                            case 'random':
                                color = 'blue';
                                break;
                            default:
                                color = item.explodeColor;
                        }
                        if (obj01[obj02][color] === undefined) { color = 'blue' };
                        preview = obj01[obj02][color]['center'];
                        break;
                }
                break;
            case item.animType === 't11':
                switch (itemName) {
                    case "calllightning":
                        obj02 = "calllightning";
                        switch (item.color) {
                            case ``:
                            case 'a1':
                            case 'random':
                                color = 'blue';
                                break;
                            default:
                                color = item.color;
                        }
                        if (obj01[obj02][color] === undefined) { color = 'blue' };
                        preview = obj01[obj02][color];
                        break;
                    case "darkness":
                        obj02 = "darkness";
                        switch (item.color) {
                            case ``:
                            case 'a1':
                            case 'random':
                                color = 'black';
                                break;
                            default:
                                color = item.color;
                        }
                        if (obj01[obj02][color] === undefined) { color = 'black' };
                        preview = obj01[obj02][color];
                        break;
                    case "fogcloud":
                        obj02 = "fogcloud";
                        switch (item.color) {
                            case ``:
                            case 'a1':
                            case 'random':
                                color = 'white';
                                break;
                            default:
                                color = item.color;
                        }
                        if (obj01[obj02][color] === undefined) { color = 'white' };
                        preview = obj01[obj02][color];
                        break;
                    case "sleetstorm":
                        obj02 = "sleetstorm";
                        switch (item.color) {
                            case ``:
                            case 'a1':
                            case 'random':
                                color = 'blue';
                                break;
                            default:
                                color = item.color;
                        }
                        if (obj01[obj02][color] === undefined) { color = 'blue' };
                        preview = obj01[obj02][color];
                        break;
                    case "spiritguardians":
                        obj02 = "spiritguardians";
                        switch (item.color) {
                            case ``:
                            case 'a1':
                            case 'random':
                                color = 'yellow blue';
                                break;
                            default:
                                color = item.color;
                        }
                        if (obj01[obj02][color] === undefined) { color = 'yellow blue' };
                        preview = obj01[obj02][color];
                        break;
                    case "wallofforce":
                        obj02 = "wallofforce";
                        switch (item.color) {
                            case ``:
                            case 'a1':
                            case 'random':
                                color = 'grey';
                                break;
                            default:
                                color = item.color;
                        }
                        if (obj01[obj02][color] === undefined) { color = 'grey' };
                        preview = obj01[obj02][color];
                        break;
                    case "whirlwind":
                        obj02 = "whirlwind";
                        switch (item.color) {
                            case ``:
                            case 'a1':
                            case 'random':
                                color = 'blue grey';
                                break;
                            default:
                                color = item.color;
                        }
                        if (obj01[obj02][color] === undefined) { color = 'blue grey' };
                        preview = obj01[obj02][color];
                        break;
                }
                break;
            case item.animType === 't12':
                switch (itemName) {
                    case "mistystep":
                        obj02 = 'mistystep';
                        switch (item.color) {
                            case ``:
                            case 'a1':
                            case 'random':
                                color = 'blue';
                                break;
                            default:
                                color = item.color;
                        }
                        if (obj01[obj02]['01'][color] === undefined) { color = 'blue' };
                        preview = obj01[obj02]['01'][color];
                        break;
                }
                break;
            case item.animType === 't13':
                switch (itemName) {
                    case "bardicinspiration":
                        switch (item.bards?.bardAnim) {
                            case "bardicinspiration":
                                obj02 = 'bardicinspiration';
                                switch (item.bards?.bardSelfColor) {
                                    case ``:
                                    case 'a1':
                                    case 'random':
                                        color = 'green orange';
                                        break;
                                    default:
                                        color = item.bards?.bardSelfColor;
                                }
                                if (obj01[obj02]['inspire'][color] === undefined) { color = 'green orange' };
                                preview = obj01[obj02]['inspire'][color];
                                break;
                            case "music":
                                obj02 = 'music';
                                switch (item.bards?.bardSelfColor) {
                                    case ``:
                                    case 'a1':
                                    case 'random':
                                        color = 'blue';
                                        break;
                                    default:
                                        color = item.bards?.bardSelfColor;
                                }
                                if (obj01[obj02][color] === undefined) { color = 'blue' };
                                preview = obj01[obj02][color]['1'];
                                break;
                        }
                        break;
                    case "sneakattack":
                        obj02 = "sneakattack";
                        switch (item.color) {
                            case ``:
                            case 'a1':
                            case 'random':
                                color = 'dark green';
                                break;
                            default:
                                color = item.color;
                        }
                        if (obj01[obj02][color] === undefined) { color = 'dark green' };
                        preview = obj01[obj02][color];
                        break;
                }
                break;
        }
    }
    //console.log(preview);
    if (preview === undefined) { return "no preview" } else { return preview }
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
