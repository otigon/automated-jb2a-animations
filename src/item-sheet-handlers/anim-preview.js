import { JB2APATREONDB } from "../animation-functions/jb2a-patreon-database.js";
import { JB2AFREEDB } from "../animation-functions/jb2a-free-database.js";

function animPreview(item) {

    function moduleIncludes(test) {
        return !!game.modules.get(test);
    }

    let obj01 = moduleIncludes("jb2a_patreon") === true ? JB2APATREONDB : JB2AFREEDB;

    let itemName = item.animName.toLowerCase();
    let color;
    let obj02;
    let spellVar;
    let meleeVar;
    let preview;
    switch (true) {
        case item.animType === 't1':
            break;
        case item.animType === 't2':
            switch (itemName) {
                case "dagger":
                case game.i18n.format("AUTOANIM.itemDagger").toLowerCase():
                    obj02 = 'meleedagger';
                    switch (true) {
                        case item.color === ``:
                        case item.color === 'a1':
                        case item.color === 'random':
                            color = 'white';
                            break;
                        default:
                            color = item.color;
                    }
                    if (obj01[obj02][color] === undefined) { color = 'white' };
                    preview = obj01[obj02][color];
                    break;
                case "greataxe":
                case game.i18n.format("AUTOANIM.itemGreataxe").toLowerCase():
                    obj02 = 'greataxe';
                    switch (true) {
                        case item.color === ``:
                        case item.color === 'a1':
                        case item.color === 'random':
                            color = 'white';
                            break;
                        default:
                            color = item.color;
                    }
                    if (obj01[obj02][color] === undefined) { color = 'white' };
                    preview = obj01[obj02][color];
                    break;
                case "greatclub":
                case game.i18n.format("AUTOANIM.itemGreatclub").toLowerCase():
                    obj02 = 'greatclub';
                    switch (true) {
                        case item.color === ``:
                        case item.color === 'a1':
                        case item.color === 'random':
                            color = 'white';
                            break;
                        default:
                            color = item.color;
                    }
                    if (obj01[obj02][color] === undefined) { color = 'white' };
                    preview = obj01[obj02][color];
                    break;
                case "greatsword":
                case game.i18n.format("AUTOANIM.itemGreatsword").toLowerCase():
                    obj02 = 'greatsword';
                    switch (true) {
                        case item.color === ``:
                        case item.color === 'a1':
                        case item.color === 'random':
                            color = 'white';
                            break;
                        default:
                            color = item.color;
                    }
                    if (obj01[obj02][color] === undefined) { color = 'white' };
                    preview = obj01[obj02][color];
                    break;
                case "handaxe":
                case game.i18n.format("AUTOANIM.itemHandaxe").toLowerCase():
                    obj02 = 'meleehandaxe';
                    switch (true) {
                        case item.color === ``:
                        case item.color === 'a1':
                        case item.color === 'random':
                            color = 'white';
                            break;
                        default:
                            color = item.color;
                    }
                    if (obj01[obj02][color] === undefined) { color = 'white' };
                    preview = obj01[obj02][color];
                    break;
                case "lasersword":
                case game.i18n.format("AUTOANIM.itemLaserSword").toLowerCase():
                    obj02 = 'lasersword';
                    switch (true) {
                        case item.color === ``:
                        case item.color === 'a1':
                        case item.color === 'random':
                            color = 'white';
                            break;
                        default:
                            color = item.color;
                    }
                    if (obj01[obj02][color] === undefined) { color = 'white' };
                    preview = obj01[obj02][color];
                    break;
                case "mace":
                case game.i18n.format("AUTOANIM.itemMace").toLowerCase():
                    obj02 = 'mace';
                    switch (true) {
                        case item.color === ``:
                        case item.color === 'a1':
                        case item.color === 'random':
                            color = 'white';
                            break;
                        default:
                            color = item.color;
                    }
                    if (obj01[obj02][color] === undefined) { color = 'white' };
                    preview = obj01[obj02][color];
                    break;
                case "maul":
                case game.i18n.format("AUTOANIM.itemMaul").toLowerCase():
                    obj02 = 'maul';
                    switch (true) {
                        case item.color === ``:
                        case item.color === 'a1':
                        case item.color === 'random':
                            color = 'white';
                            break;
                        default:
                            color = item.color;
                    }
                    if (obj01[obj02][color] === undefined) { color = 'white' };
                    preview = obj01[obj02][color];
                    break;
                case "spear":
                case game.i18n.format("AUTOANIM.itemSpear").toLowerCase():
                    obj02 = 'meleespear';
                    switch (true) {
                        case item.color === ``:
                        case item.color === 'a1':
                        case item.color === 'random':
                            color = 'white';
                            break;
                        default:
                            color = item.color;
                    }
                    if (obj01[obj02][color] === undefined) { color = 'white' };
                    preview = obj01[obj02][color];
                    break;
                case "sword":
                case game.i18n.format("AUTOANIM.itemSword").toLowerCase():
                    obj02 = 'sword';
                    switch (true) {
                        case item.color === ``:
                        case item.color === 'a1':
                        case item.color === 'random':
                            color = 'white';
                            break;
                        default:
                            color = item.color;
                    }
                    if (obj01[obj02][color] === undefined) { color = 'white' };
                    preview = obj01[obj02][color];
                    break;
                case "rapier":
                case game.i18n.format("AUTOANIM.itemRapier").toLowerCase():
                    obj02 = 'rapier';
                    switch (true) {
                        case item.color === ``:
                        case item.color === 'a1':
                        case item.color === 'random':
                            color = 'white';
                            break;
                        default:
                            color = item.color;
                    }
                    if (obj01[obj02][color] === undefined) { color = 'white' };
                    preview = obj01[obj02][color];
                    break;
                default:
                    preview = "no image";
            }

            break;
        case item.animType === 't3':
            switch (itemName) {
                case "1 handed slashing":
                case game.i18n.format("AUTOANIM.item1HS").toLowerCase():
                    obj02 = 'genericmelee';
                    color = '1hs';
                    if (obj01[obj02][color] === undefined) { color = '1hs' };
                    preview = obj01[obj02][color];
                    break;
                case "1 handed piercing":
                case game.i18n.format("AUTOANIM.item1HP").toLowerCase():
                    obj02 = 'genericmelee';
                    color = '1hp';
                    if (obj01[obj02][color] === undefined) { color = '1hp' };
                    preview = obj01[obj02][color];
                    break;
                case "1 handed bludgeoning":
                case game.i18n.format("AUTOANIM.item1HB").toLowerCase():
                    obj02 = 'genericmelee';
                    color = '1hb';
                    if (obj01[obj02][color] === undefined) { color = '1hb' };
                    preview = obj01[obj02][color];
                    break;
                case "2 handed slashing":
                case game.i18n.format("AUTOANIM.item2HS").toLowerCase():
                    obj02 = 'genericmelee';
                    color = '2hs';
                    if (obj01[obj02][color] === undefined) { color = '2hs' };
                    preview = obj01[obj02][color];
                    break;
                case "2 handed piercing":
                case game.i18n.format("AUTOANIM.item2HP").toLowerCase():
                    obj02 = 'genericmelee';
                    color = '2hp';
                    if (obj01[obj02][color] === undefined) { color = '2hp' };
                    preview = obj01[obj02][color];
                    break;
                case "2 handed bludgeoning":
                case game.i18n.format("AUTOANIM.item2HB").toLowerCase():
                    obj02 = 'genericmelee';
                    color = '2hb';
                    if (obj01[obj02][color] === undefined) { color = '2hb' };
                    preview = obj01[obj02][color];
                    break;
                case "unarmed strike":
                case game.i18n.format("AUTOANIM.itemUnarmedStrike").toLowerCase():
                    obj02 = 'unarmedstrike';
                    switch (true) {
                        case item.color === ``:
                        case item.color === 'a1':
                        case item.color === 'random':
                            color = 'blue';
                            break;
                        default:
                            color = item.color;
                    }
                    switch (true) {
                        case item.uaStrikeType === ``:
                        case item.uaStrikeType === "physical":
                            if (obj01[obj02]['physical'][color] === undefined) { color = 'blue' };
                            preview = obj01[obj02]['physical'][color]['1'];
                            break;
                        default:
                            if (obj01[obj02]['magical'][color] === undefined) { color = 'blue' };
                            preview = obj01[obj02]['magical'][color]['1'];
                    }
                    break;
                case "flurry of blows":
                case game.i18n.format("AUTOANIM.itemFlurryBlows").toLowerCase():
                    obj02 = 'flurryofblows';
                    switch (true) {
                        case item.color === ``:
                        case item.color === 'a1':
                        case item.color === 'random':
                            color = 'blue';
                            break;
                        default:
                            color = item.color;
                    }
                    switch (true) {
                        case item.uaStrikeType === ``:
                        case item.uaStrikeType === "physical":
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
                case game.i18n.format("AUTOANIM.itemBoulder").toLowerCase():
                    obj02 = 'boulder';
                    preview = obj01[obj02]['30'];
                    break;
                case "javelin":
                case game.i18n.format("AUTOANIM.itemJavelin").toLowerCase():
                    obj02 = 'rangejavelin';
                    preview = obj01[obj02]['30'];
                    break;
                case "siege boulder":
                case game.i18n.format("AUTOANIM.itemSiegeBoulder").toLowerCase():
                    obj02 = 'siege';
                    preview = obj01[obj02]['30'];
                    break;
                case "sling":
                case game.i18n.format("AUTOANIM.itemSling").toLowerCase():
                    obj02 = 'rangesling';
                    preview = obj01[obj02]['15'];
                    break;
                case "throwing hammer":
                case game.i18n.format("AUTOANIM.itemThrowingHammer").toLowerCase():
                    obj02 = 'rangehammer';
                    preview = obj01[obj02]['15'];
                    break;
                case "laser blast":
                case game.i18n.format("AUTOANIM.itemLaserBlast").toLowerCase():
                    obj02 = 'lasershot';
                    switch (true) {
                        case item.color === ``:
                        case item.color === 'a1':
                        case item.color === 'random':
                            color = 'blue';
                            break;
                        default:
                            color = item.color;
                    }
                    if (obj01[obj02][color] === undefined) { color = 'blue' };
                    preview = obj01[obj02][color]['30'];
                    break;
            }
            break;
        case item.animType === 't5':
            switch (itemName) {
                case "bite":
                case game.i18n.format("AUTOANIM.itemBite").toLowerCase():
                    obj02 = "creaturebite";
                    switch (true) {
                        case item.color === ``:
                        case item.color === 'a1':
                        case item.color === 'random':
                            color = 'red';
                            break;
                        default:
                            color = item.color;
                    }
                    if (obj01[obj02][color] === undefined) { color = 'red' };
                    preview = obj01[obj02][color];
                    break;
                case "claw":
                case game.i18n.format("AUTOANIM.itemClaw").toLowerCase():
                    obj02 = "creatureclaw";
                    switch (true) {
                        case item.color === ``:
                        case item.color === 'a1':
                        case item.color === 'random':
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
                case game.i18n.format("AUTOANIM.itemDisintegrate").toLowerCase():
                    obj02 = "disintegrate";
                    switch (true) {
                        case item.color === ``:
                        case item.color === 'a1':
                        case item.color === 'random':
                            color = 'green';
                            break;
                        default:
                            color = item.color;
                    }
                    if (obj01[obj02][color] === undefined) { color = 'green' };
                    preview = obj01[obj02][color]['30'];
                    break;
                case "eldritch blast":
                case game.i18n.format("AUTOANIM.itemEldritchBlast").toLowerCase():
                    obj02 = "eldritchblast";
                    switch (true) {
                        case item.color === ``:
                        case item.color === 'a1':
                        case item.color === 'random':
                            color = 'purple';
                            break;
                        default:
                            color = item.color;
                    }
                    if (obj01[obj02][color] === undefined) { color = 'purple' };
                    preview = obj01[obj02][color]['30'];
                    break;
                case "fire bolt":
                case game.i18n.format("AUTOANIM.itemFireBolt").toLowerCase():
                    obj02 = "firebolt";
                    switch (true) {
                        case item.color === ``:
                        case item.color === 'a1':
                        case item.color === 'random':
                            color = 'orange';
                            break;
                        default:
                            color = item.color;
                    }
                    if (obj01[obj02][color] === undefined) { color = 'orange' };
                    preview = obj01[obj02][color]['30'];
                    break;
                case "magic missile":
                case game.i18n.format("AUTOANIM.itemMagicMissile").toLowerCase():
                    obj02 = "magicmissile";
                    switch (true) {
                        case item.color === ``:
                        case item.color === 'a1':
                        case item.color === 'random':
                            color = 'purple';
                            break;
                        default:
                            color = item.color;
                    }
                    if (obj01[obj02][color] === undefined) { color = 'purple' };
                    preview = obj01[obj02][color]['30']['1'];
                    break;
                case "ray of frost":
                case game.i18n.format("AUTOANIM.itemRayFrost").toLowerCase():
                    obj02 = "rayoffrost";
                    switch (true) {
                        case item.color === ``:
                        case item.color === 'a1':
                        case item.color === 'random':
                            color = 'blue';
                            break;
                        default:
                            color = item.color;
                    }
                    if (obj01[obj02][color] === undefined) { color = 'blue' };
                    preview = obj01[obj02][color]['30'];
                    break;
                case "scorching ray":
                case game.i18n.format("AUTOANIM.itemScorchingRay").toLowerCase():
                    obj02 = "scorchingray";
                    switch (true) {
                        case item.color === ``:
                        case item.color === 'a1':
                        case item.color === 'random':
                            color = 'orange';
                            break;
                        default:
                            color = item.color;
                    }
                    switch (true) {
                        case item.spellVar === ``:
                        case item.spellVar === 'a1':
                        case item.spellVar === '01':
                            spellVar = '01';
                            break;
                        default:
                            spellVar = '02';
                    }
                    if (obj01[obj02][spellVar][color] === undefined) { color = 'orange' };
                    switch (spellVar) {
                        case '02':
                            preview = obj01[obj02][spellVar][color]['30']['1'];
                            break;
                        default:
                            preview = obj01[obj02][spellVar][color]['30'];
                    }
                    break;
                case "witch bolt":
                case game.i18n.format("AUTOANIM.itemWitchBolt").toLowerCase():
                    obj02 = "witchbolt";
                    switch (true) {
                        case item.color === ``:
                        case item.color === 'a1':
                        case item.color === 'random':
                            color = 'blue';
                            break;
                        default:
                            color = item.color;
                    }
                    if (obj01[obj02][color] === undefined) { color = 'blue' };
                    preview = obj01[obj02][color]['30'];
                    break;
                case "guiding bolt":
                case game.i18n.format("AUTOANIM.itemGuidingBolt").toLowerCase():
                    obj02 = "guidingbolt";
                    switch (true) {
                        case item.color === ``:
                        case item.color === 'a1':
                        case item.color === 'random':
                            color = 'blue yellow';
                            break;
                        default:
                            color = item.color;
                    }
                    if (obj01[obj02][color] === undefined) { color = 'blue yellow' };
                    preview = obj01[obj02][color]['30'];
                    break;
                default:
                    preview = "no image";
            }
            break;
        case item.animType === 't7':
            switch (itemName) {
                case "cure wounds":
                case game.i18n.format("AUTOANIM.itemCureWounds").toLowerCase():
                    obj02 = "curewounds";
                    switch (true) {
                        case item.color === ``:
                        case item.color === 'a1':
                        case item.color === 'random':
                            color = 'blue';
                            break;
                        default:
                            color = item.color;
                    }
                    if (obj01[obj02][color] === undefined) { color = 'blue' };
                    preview = obj01[obj02][color]['400'];
                    break;
                case "generic healing":
                case game.i18n.format("AUTOANIM.itemGenericHealing").toLowerCase():
                    obj02 = "generichealing";
                    switch (true) {
                        case item.color === ``:
                        case item.color === 'a1':
                        case item.color === 'random':
                            color = 'blue';
                            break;
                        default:
                            color = item.color;
                    }
                    switch (true) {
                        case item.spellVar === ``:
                        case item.spellVar === 'a1':
                        case item.spellVar === '01':
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
            switch (item.explodeVariant) {
                case '01':
                case game.i18n.format("AUTOANIM.variant01").toLowerCase():
                    obj02 = "explosion";
                    switch (true) {
                        case item.explodeColor === ``:
                        case item.explodeColor === 'a1':
                        case item.explodeColor === 'random':
                            color = 'orange';
                            break;
                        default:
                            color = item.explodeColor;
                    }
                    if (obj01[obj02]['01'][color] === undefined) { color = 'orange' };
                    preview = obj01[obj02]['01'][color];
                    break;
                case '02':
                case game.i18n.format("AUTOANIM.variant02").toLowerCase():
                    obj02 = "explosion";
                    switch (true) {
                        case item.explodeColor === ``:
                        case item.explodeColor === 'a1':
                        case item.explodeColor === 'random':
                            color = 'blue';
                            break;
                        default:
                            color = item.explodeColor;
                    }
                    if (obj01[obj02]['02'][color] === undefined) { color = 'blue' };
                    preview = obj01[obj02]['02'][color];
                    break;
                case '03':
                case game.i18n.format("AUTOANIM.variant03").toLowerCase():
                    obj02 = "explosion";
                    switch (true) {
                        case item.explodeColor === ``:
                        case item.explodeColor === 'a1':
                        case item.explodeColor === 'random':
                            color = 'yellow blue';
                            break;
                        default:
                            color = item.explodeColor;
                    }
                    if (obj01[obj02]['03'][color] === undefined) { color = 'yellow blue' };
                    preview = obj01[obj02]['03'][color];
                    break;
                case '04':
                case game.i18n.format("AUTOANIM.variant04").toLowerCase():
                    obj02 = "explosion";
                    switch (true) {
                        case item.explodeColor === ``:
                        case item.explodeColor === 'a1':
                        case item.explodeColor === 'random':
                            color = 'blue';
                            break;
                        default:
                            color = item.explodeColor;
                    }
                    if (obj01[obj02]['04'][color] === undefined) { color = 'blue' };
                    preview = obj01[obj02]['04'][color];
                    break;
                case '05':
                case game.i18n.format("AUTOANIM.variant05").toLowerCase():
                    obj02 = "explosion";
                    switch (true) {
                        case item.explodeColor === ``:
                        case item.explodeColor === 'a1':
                        case item.explodeColor === 'random':
                            color = 'blue white';
                            break;
                        default:
                            color = item.explodeColor;
                    }
                    if (obj01[obj02]['05'][color] === undefined) { color = 'blue white' };
                    preview = obj01[obj02]['05'][color];
                    break;
                case '06':
                case game.i18n.format("AUTOANIM.variant06").toLowerCase():
                    obj02 = "explosion";
                    switch (true) {
                        case item.explodeColor === ``:
                        case item.explodeColor === 'a1':
                        case item.explodeColor === 'random':
                            color = 'blue white';
                            break;
                        default:
                            color = item.explodeColor;
                    }
                    if (obj01[obj02]['06'][color] === undefined) { color = 'blue white' };
                    preview = obj01[obj02]['06'][color];
                    break;
                case '07':
                case game.i18n.format("AUTOANIM.variant07").toLowerCase():
                    obj02 = "explosion";
                    switch (true) {
                        case item.explodeColor === ``:
                        case item.explodeColor === 'a1':
                        case item.explodeColor === 'random':
                            color = 'blue white';
                            break;
                        default:
                            color = item.explodeColor;
                    }
                    if (obj01[obj02]['07'][color] === undefined) { color = 'blue white' };
                    preview = obj01[obj02]['07'][color];
                    break;
                case 'shatter':
                case game.i18n.format("AUTOANIM.itemShatter").toLowerCase():
                    obj02 = "shatter";
                    switch (true) {
                        case item.explodeColor === ``:
                        case item.explodeColor === 'a1':
                        case item.explodeColor === 'random':
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
        case item.animType === 't9':
            switch (item.explodeVariant) {
                case '01':
                case game.i18n.format("AUTOANIM.variant01").toLowerCase():
                    obj02 = "explosion";
                    switch (true) {
                        case item.explodeColor === ``:
                        case item.explodeColor === 'a1':
                        case item.explodeColor === 'random':
                            color = 'orange';
                            break;
                        default:
                            color = item.explodeColor;
                    }
                    if (obj01[obj02]['01'][color] === undefined) { color = 'orange' };
                    preview = obj01[obj02]['01'][color];
                    break;
                case '02':
                case game.i18n.format("AUTOANIM.variant02").toLowerCase():
                    obj02 = "explosion";
                    switch (true) {
                        case item.explodeColor === ``:
                        case item.explodeColor === 'a1':
                        case item.explodeColor === 'random':
                            color = 'blue';
                            break;
                        default:
                            color = item.explodeColor;
                    }
                    if (obj01[obj02]['02'][color] === undefined) { color = 'blue' };
                    preview = obj01[obj02]['02'][color];
                    break;
                case '03':
                case game.i18n.format("AUTOANIM.variant03").toLowerCase():
                    obj02 = "explosion";
                    switch (true) {
                        case item.explodeColor === ``:
                        case item.explodeColor === 'a1':
                        case item.explodeColor === 'random':
                            color = 'yellow blue';
                            break;
                        default:
                            color = item.explodeColor;
                    }
                    if (obj01[obj02]['03'][color] === undefined) { color = 'yellow blue' };
                    preview = obj01[obj02]['03'][color];
                    break;
                case '04':
                case game.i18n.format("AUTOANIM.variant04").toLowerCase():
                    obj02 = "explosion";
                    switch (true) {
                        case item.explodeColor === ``:
                        case item.explodeColor === 'a1':
                        case item.explodeColor === 'random':
                            color = 'blue';
                            break;
                        default:
                            color = item.explodeColor;
                    }
                    if (obj01[obj02]['04'][color] === undefined) { color = 'blue' };
                    preview = obj01[obj02]['04'][color];
                    break;
                case '05':
                case game.i18n.format("AUTOANIM.variant05").toLowerCase():
                    obj02 = "explosion";
                    switch (true) {
                        case item.explodeColor === ``:
                        case item.explodeColor === 'a1':
                        case item.explodeColor === 'random':
                            color = 'blue white';
                            break;
                        default:
                            color = item.explodeColor;
                    }
                    if (obj01[obj02]['05'][color] === undefined) { color = 'blue white' };
                    preview = obj01[obj02]['05'][color];
                    break;
                case '06':
                case game.i18n.format("AUTOANIM.variant06").toLowerCase():
                    obj02 = "explosion";
                    switch (true) {
                        case item.explodeColor === ``:
                        case item.explodeColor === 'a1':
                        case item.explodeColor === 'random':
                            color = 'blue white';
                            break;
                        default:
                            color = item.explodeColor;
                    }
                    if (obj01[obj02]['06'][color] === undefined) { color = 'blue white' };
                    preview = obj01[obj02]['06'][color];
                    break;
                case '07':
                case game.i18n.format("AUTOANIM.variant07").toLowerCase():
                    obj02 = "explosion";
                    switch (true) {
                        case item.explodeColor === ``:
                        case item.explodeColor === 'a1':
                        case item.explodeColor === 'random':
                            color = 'blue white';
                            break;
                        default:
                            color = item.explodeColor;
                    }
                    if (obj01[obj02]['07'][color] === undefined) { color = 'blue white' };
                    preview = obj01[obj02]['07'][color];
                    break;
                case 'shatter':
                case game.i18n.format("AUTOANIM.itemShatter").toLowerCase():
                    obj02 = "shatter";
                    switch (true) {
                        case item.explodeColor === ``:
                        case item.explodeColor === 'a1':
                        case item.explodeColor === 'random':
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
                case game.i18n.format("AUTOANIM.variant01").toLowerCase():
                    obj02 = "explosion";
                    switch (true) {
                        case item.explodeColor === ``:
                        case item.explodeColor === 'a1':
                        case item.explodeColor === 'random':
                            color = 'orange';
                            break;
                        default:
                            color = item.explodeColor;
                    }
                    if (obj01[obj02]['01'][color] === undefined) { color = 'orange' };
                    preview = obj01[obj02]['01'][color];
                    break;
                case '02':
                case game.i18n.format("AUTOANIM.variant02").toLowerCase():
                    obj02 = "explosion";
                    switch (true) {
                        case item.explodeColor === ``:
                        case item.explodeColor === 'a1':
                        case item.explodeColor === 'random':
                            color = 'blue';
                            break;
                        default:
                            color = item.explodeColor;
                    }
                    if (obj01[obj02]['02'][color] === undefined) { color = 'blue' };
                    preview = obj01[obj02]['02'][color];
                    break;
                case '03':
                case game.i18n.format("AUTOANIM.variant03").toLowerCase():
                    obj02 = "explosion";
                    switch (true) {
                        case item.explodeColor === ``:
                        case item.explodeColor === 'a1':
                        case item.explodeColor === 'random':
                            color = 'yellow blue';
                            break;
                        default:
                            color = item.explodeColor;
                    }
                    if (obj01[obj02]['03'][color] === undefined) { color = 'yellow blue' };
                    preview = obj01[obj02]['03'][color];
                    break;
                case '04':
                case game.i18n.format("AUTOANIM.variant04").toLowerCase():
                    obj02 = "explosion";
                    switch (true) {
                        case item.explodeColor === ``:
                        case item.explodeColor === 'a1':
                        case item.explodeColor === 'random':
                            color = 'blue';
                            break;
                        default:
                            color = item.explodeColor;
                    }
                    if (obj01[obj02]['04'][color] === undefined) { color = 'blue' };
                    preview = obj01[obj02]['04'][color];
                    break;
                case '05':
                case game.i18n.format("AUTOANIM.variant05").toLowerCase():
                    obj02 = "explosion";
                    switch (true) {
                        case item.explodeColor === ``:
                        case item.explodeColor === 'a1':
                        case item.explodeColor === 'random':
                            color = 'blue white';
                            break;
                        default:
                            color = item.explodeColor;
                    }
                    if (obj01[obj02]['05'][color] === undefined) { color = 'blue white' };
                    preview = obj01[obj02]['05'][color];
                    break;
                case '06':
                case game.i18n.format("AUTOANIM.variant06").toLowerCase():
                    obj02 = "explosion";
                    switch (true) {
                        case item.explodeColor === ``:
                        case item.explodeColor === 'a1':
                        case item.explodeColor === 'random':
                            color = 'blue white';
                            break;
                        default:
                            color = item.explodeColor;
                    }
                    if (obj01[obj02]['06'][color] === undefined) { color = 'blue white' };
                    preview = obj01[obj02]['06'][color];
                    break;
                case '07':
                case game.i18n.format("AUTOANIM.variant07").toLowerCase():
                    obj02 = "explosion";
                    switch (true) {
                        case item.explodeColor === ``:
                        case item.explodeColor === 'a1':
                        case item.explodeColor === 'random':
                            color = 'blue white';
                            break;
                        default:
                            color = item.explodeColor;
                    }
                    if (obj01[obj02]['07'][color] === undefined) { color = 'blue white' };
                    preview = obj01[obj02]['07'][color];
                    break;
                case 'shatter':
                case game.i18n.format("AUTOANIM.itemShatter").toLowerCase():
                    obj02 = "shatter";
                    switch (true) {
                        case item.explodeColor === ``:
                        case item.explodeColor === 'a1':
                        case item.explodeColor === 'random':
                            color = 'blue';
                            break;
                        default:
                            color = item.explodeColor;
                    }
                    if (obj01[obj02][color] === undefined) { color = 'blue' };
                    preview = obj01[obj02][color];
                    break;
                case 'antilife-shell':
                case game.i18n.format("AUTOANIM.animAntiLifeShell").toLowerCase():
                    obj02 = "antilifeshell";
                    preview = obj01[obj02]['antilifeshell'];
                    break;
                case 'thunderwave':
                case game.i18n.format("AUTOANIM.itemThunderwave").toLowerCase():
                    obj02 = "thunderwave";
                    switch (true) {
                        case item.explodeColor === ``:
                        case item.explodeColor === 'a1':
                        case item.explodeColor === 'random':
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
                case "call lightning":
                case game.i18n.format("AUTOANIM.animCallLightning").toLowerCase():
                    obj02 = "calllightning";
                    switch (true) {
                        case item.color === ``:
                        case item.color === 'a1':
                        case item.color === 'random':
                            color = 'blue';
                            break;
                        default:
                            color = item.color;
                    }
                    if (obj01[obj02][color] === undefined) { color = 'blue' };
                    preview = obj01[obj02][color];
                    break;
                case "darkness":
                case game.i18n.format("AUTOANIM.animDarkness").toLowerCase():
                    obj02 = "darkness";
                    switch (true) {
                        case item.color === ``:
                        case item.color === 'a1':
                        case item.color === 'random':
                            color = 'black';
                            break;
                        default:
                            color = item.color;
                    }
                    if (obj01[obj02][color] === undefined) { color = 'black' };
                    preview = obj01[obj02][color];
                    break;
                case "fog cloud":
                case game.i18n.format("AUTOANIM.animFogCloud").toLowerCase():
                    obj02 = "fogcloud";
                    switch (true) {
                        case item.color === ``:
                        case item.color === 'a1':
                        case item.color === 'random':
                            color = 'white';
                            break;
                        default:
                            color = item.color;
                    }
                    if (obj01[obj02][color] === undefined) { color = 'white' };
                    preview = obj01[obj02][color];
                    break;
                case "sleetstorm":
                case game.i18n.format("AUTOANIM.animSleetstorm").toLowerCase():
                    obj02 = "sleetstorm";
                    switch (true) {
                        case item.color === ``:
                        case item.color === 'a1':
                        case item.color === 'random':
                            color = 'blue';
                            break;
                        default:
                            color = item.color;
                    }
                    if (obj01[obj02][color] === undefined) { color = 'blue' };
                    preview = obj01[obj02][color];
                    break;
                case "spirit guardians":
                case game.i18n.format("AUTOANIM.animSpiritGuardians").toLowerCase():
                    obj02 = "spiritguardians";
                    switch (true) {
                        case item.color === ``:
                        case item.color === 'a1':
                        case item.color === 'random':
                            color = 'yellow blue';
                            break;
                        default:
                            color = item.color;
                    }
                    if (obj01[obj02][color] === undefined) { color = 'yellow blue' };
                    preview = obj01[obj02][color];
                    break;
                case "wall of force":
                case game.i18n.format("AUTOANIM.animWallOfForce").toLowerCase():
                    obj02 = "wallofforce";
                    switch (true) {
                        case item.color === ``:
                        case item.color === 'a1':
                        case item.color === 'random':
                            color = 'grey';
                            break;
                        default:
                            color = item.color;
                    }
                    if (obj01[obj02][color] === undefined) { color = 'grey' };
                    preview = obj01[obj02][color];
                    break;
                case "whirlwind":
                case game.i18n.format("AUTOANIM.animWhirlwind").toLowerCase():
                    obj02 = "whirlwind";
                    switch (true) {
                        case item.color === ``:
                        case item.color === 'a1':
                        case item.color === 'random':
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
                case "misty step":
                case game.i18n.format("AUTOANIM.itemMistyStep").toLowerCase():
                    obj02 = 'mistystep';
                    switch (true) {
                        case item.color === ``:
                        case item.color === 'a1':
                        case item.color === 'random':
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
            switch (item.bards.bardAnim) {
                case "bardicinspiration":
                    obj02 = 'bardicinspiration';
                    switch (true) {
                        case item.color === ``:
                        case item.color === 'a1':
                        case item.color === 'random':
                            color = 'green orange';
                            break;
                        default:
                            color = item.color;
                    }
                    if (obj01[obj02]['inspire'][color] === undefined) { color = 'green orange' };
                    preview = obj01[obj02]['inspire'][color];
                    break;
                case "music":
                    obj02 = 'music';
                    switch (true) {
                        case item.color === ``:
                        case item.color === 'a1':
                        case item.color === 'random':
                            color = 'blue';
                            break;
                        default:
                            color = item.color;
                    }
                    if (obj01[obj02][color] === undefined) { color = 'blue' };
                    preview = obj01[obj02][color]['1'];
                    break;
            }
            break;
    }
    //console.log(preview);
    if (preview === undefined) { return "no preview" } else { return preview }
}
export default animPreview;
