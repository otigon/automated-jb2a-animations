import AUTORECOG from "./auto-recognition.js";

export function nameConversion(itemName) {
    let itemAutoRec = new AUTORECOG;
    let oldItemName = itemName.toLowerCase();
    console.log("old item name is " + oldItemName)
    let defaultColor;
    let newItemName = "pass";
    let autoRec;
    let jb2a = moduleIncludes("jb2a_patreon") === true ? "jb2a_patreon" : "JB2A_DnD5e";
    let autoPreview = "no preview";
    switch (true) {
        case oldItemName === "rangesword":
        case oldItemName === "rangegreatsword":
        case oldItemName === "rangegreataxe":
        case oldItemName === "rangemace":
        case oldItemName === "rangedagger":
        case oldItemName === "rangespear":
        case oldItemName === "rangehandaxe":
            newItemName = oldItemName;
            defaultColor = "white";
            break;
        case oldItemName === "rangelasersword":
            newItemName = oldItemName;
            defaultColor = "blue";
            break;
        case oldItemName === "rangelasersworddb":
            newItemName = oldItemName;
            defaultColor = "red";
            break;
        case oldItemName.includes("bardicinspiration"):
            newItemName = "bardicinspiration";
            defaultColor = "green orange";
            break;
        case itemAutoRec.rapier.some(el => oldItemName.includes(el)):
            newItemName = "rapier";
            defaultColor = "white";
            autoRec = game.i18n.format("AUTOANIM.itemRapier");
            autoPreview = `modules/${jb2a}/Library/Generic/Weapon_Attacks/Melee/Rapier01_01_Regular_White_800x600.webm`;
            break;
        case itemAutoRec.lasersword.some(el => oldItemName.includes(el)):
            newItemName = "lasersword";
            defaultColor = "blue";
            autoRec = game.i18n.format("AUTOANIM.itemLaserSword");
            autoPreview = `modules/${jb2a}/Library/Generic/Weapon_Attacks/Melee/LaserSword01_01_Regular_Blue_800x600.webm`;
            break;
        case itemAutoRec.greatsword.some(el => oldItemName.includes(el)):
            newItemName = "greatsword";
            defaultColor = "white";
            autoRec = game.i18n.format("AUTOANIM.itemGreatsword");
            autoPreview = `modules/${jb2a}/Library/Generic/Weapon_Attacks/Melee/GreatSword01_01_Regular_White_800x600.webm`;
            break;
        case itemAutoRec.sword.some(el => oldItemName.includes(el)):
            newItemName = "sword";
            defaultColor = "white";
            autoRec = game.i18n.format("AUTOANIM.itemSword");
            autoPreview = `modules/${jb2a}/Library/Generic/Weapon_Attacks/Melee/Sword01_01_Regular_White_800x600.webm`;
            break;
        case itemAutoRec.greatclub.some(el => oldItemName.includes(el)):
            newItemName = "greatclub";
            defaultColor = "white";
            autoRec = game.i18n.format("AUTOANIM.itemGreatclub");
            autoPreview = `modules/${jb2a}/Library/Generic/Weapon_Attacks/Melee/GreatClub01_01_Regular_White_800x600.webm`;
            break;
        case itemAutoRec.greataxe.some(el => oldItemName.includes(el)):
            newItemName = "greataxe";
            defaultColor = "white";
            autoRec = game.i18n.format("AUTOANIM.itemGreataxe");
            autoPreview = `modules/${jb2a}/Library/Generic/Weapon_Attacks/Melee/GreatAxe01_01_Regular_White_800x600.webm`;
            break;
        case itemAutoRec.mace.some(el => oldItemName.includes(el)):
            newItemName = "mace";
            defaultColor = "white";
            autoRec = game.i18n.format("AUTOANIM.itemMace");
            autoPreview = `modules/${jb2a}/Library/Generic/Weapon_Attacks/Melee/Mace01_01_Regular_White_800x600.webm`;
            break;
        case itemAutoRec.maul.some(el => oldItemName.includes(el)):
            newItemName = "maul";
            defaultColor = "white";
            autoRec = game.i18n.format("AUTOANIM.itemMaul");
            autoPreview = `modules/${jb2a}/Library/Generic/Weapon_Attacks/Melee/Maul01_01_Regular_White_800x600.webm`;
            break;
        case oldItemName === game.i18n.format("AUTOANIM.item1HS").toLowerCase():
            newItemName = "1hs";
            break;
        case oldItemName === game.i18n.format("AUTOANIM.item2HS").toLowerCase():
            newItemName = "2hs";
            break;
        case oldItemName === game.i18n.format("AUTOANIM.item1HB").toLowerCase():
            newItemName = "1hb";
            break;
        case oldItemName === game.i18n.format("AUTOANIM.item2HB").toLowerCase():
            newItemName = "2hb";
            break;
        case oldItemName === game.i18n.format("AUTOANIM.item1HP").toLowerCase():
            newItemName = "1hp";
            break;
        case oldItemName === game.i18n.format("AUTOANIM.item2HP").toLowerCase():
            newItemName = "2hp";
            break;
        case itemAutoRec.dagger.some(el => oldItemName.includes(el)):
            newItemName = "dagger";
            defaultColor = "white";
            autoRec = game.i18n.format("AUTOANIM.itemDagger");
            autoPreview = `modules/${jb2a}/Library/Generic/Weapon_Attacks/Melee/Dagger02_01_Regular_White_800x600.webm`;
            break;
        case itemAutoRec.handaxe.some(el => oldItemName.includes(el)):
            newItemName = "handaxe";
            defaultColor = "white";
            autoRec = game.i18n.format("AUTOANIM.itemHandaxe");
            autoPreview = `modules/${jb2a}/Library/Generic/Weapon_Attacks/Melee/HandAxe02_01_Regular_White_800x600.webm`;
            break;
        case itemAutoRec.spear.some(el => oldItemName.includes(el)):
            newItemName = "spear";
            defaultColor = "white";
            autoRec = game.i18n.format("AUTOANIM.itemSpear");
            autoPreview = `modules/${jb2a}/Library/Generic/Weapon_Attacks/Melee/Spear01_01_Regular_White_800x600.webm`;
            break;
        case itemAutoRec.arrow.some(el => oldItemName.includes(el)):
            newItemName = "arrow";
            defaultColor = "regular";
            autoRec = game.i18n.format("AUTOANIM.itemArrow");
            autoPreview = `modules/${jb2a}/Library/Generic/Weapon_Attacks/Ranged/Arrow01_01_Regular_White_15ft_1000x400.webm`;
            break;
        case itemAutoRec.rangehammer.some(el => oldItemName.includes(el)):
            newItemName = "rangehammer";
            break;
        case itemAutoRec.siege.some(el => oldItemName.includes(el)):
            newItemName = "siege";
            autoRec = game.i18n.format("AUTOANIM.itemSiegeBoulder");
            autoPreview = ``;
            break;
        case itemAutoRec.boulder.some(el => oldItemName.includes(el)):
            newItemName = "boulder";
            autoRec = game.i18n.format("AUTOANIM.itemBoulder");
            autoPreview = ``;
            break;
        case itemAutoRec.lasershot.some(el => oldItemName.includes(el)):
            newItemName = "lasershot";
            defaultColor = "blue";
            autoRec = game.i18n.format("AUTOANIM.itemLaserBlast");
            autoPreview = `modules/${jb2a}/Library/Generic/Weapon_Attacks/Ranged/LaserShot_01_Regular_Blue_30ft_1600x400.webm`;
            break;
        case itemAutoRec.rangejavelin.some(el => oldItemName.includes(el)):
            newItemName = "rangejavelin";
            autoRec = game.i18n.format("AUTOANIM.itemJavelin");
            autoPreview = ``;
            break;
        case itemAutoRec.rangesling.some(el => oldItemName.includes(el)):
            newItemName = "rangesling";
            autoRec = game.i18n.format("AUTOANIM.itemSling");
            autoPreview = ``;
            break;
        case itemAutoRec.thunderwave.some(el => oldItemName.includes(el)):
            newItemName = "thunderwave";
            defaultColor = "blue";
            break;
        case itemAutoRec.shatter.some(el => oldItemName.includes(el)):
            newItemName = "shatter";
            defaultColor = "blue";
            break;
        case itemAutoRec.magicmissile.some(el => oldItemName.includes(el)):
            newItemName = "magicmissile";
            defaultColor = "purple";
            autoRec = game.i18n.format("AUTOANIM.itemMagicMissile");
            autoPreview = `modules/${jb2a}/Library/1st_Level/Magic_Missile/MagicMissile_01_Regular_Purple_30ft_01_1600x400.webm`;
            break;
        case itemAutoRec.curewounds.some(el => oldItemName.includes(el)):
            newItemName = "curewounds";
            defaultColor = "blue";
            autoRec = game.i18n.format("AUTOANIM.itemCureWounds");
            autoPreview = ``;
            break;
        case itemAutoRec.generichealing.some(el => oldItemName.includes(el)):
            newItemName = "generichealing";
            defaultColor = "blue";
            autoRec = game.i18n.format("AUTOANIM.itemGenericHealing");
            autoPreview = `modules/${jb2a}/Library/1st_Level/Cure_Wounds/CureWounds_01_Blue_200x200.webm`;
            break;
        case itemAutoRec.firebolt.some(el => oldItemName.includes(el)):
            newItemName = "firebolt";
            defaultColor = "orange";
            autoRec = game.i18n.format("AUTOANIM.itemFireBolt");
            autoPreview = `modules/${jb2a}/Library/Cantrip/Fire_Bolt/FireBolt_01_Regular_Orange_30ft_1600x400.webm`;
            break;
        case itemAutoRec.rayoffrost.some(el => oldItemName.includes(el)):
            newItemName = "rayoffrost";
            defaultColor = "blue";
            autoRec = game.i18n.format("AUTOANIM.itemRayFrost");
            autoPreview = `modules/${jb2a}/Library/Cantrip/Ray_Of_Frost/RayOfFrost_01_Regular_Blue_15ft_1000x400.webm`;
            break;
        case itemAutoRec.witchbolt.some(el => oldItemName.includes(el)):
            newItemName = "witchbolt";
            defaultColor = "blue";
            autoRec = game.i18n.format("AUTOANIM.itemWitchBolt");
            autoPreview = `modules/${jb2a}/Library/1st_Level/Witch_Bolt/WitchBolt_01_Regular_Blue_15ft_1000x400.webm`;
            break;
        case itemAutoRec.eldritchblast.some(el => oldItemName.includes(el)):
            newItemName = "eldritchblast";
            defaultColor = "purple";
            autoRec = game.i18n.format("AUTOANIM.itemEldritchBlast");
            autoPreview = `modules/${jb2a}/Library/Cantrip/Eldritch_Blast/EldritchBlast_01_Regular_Purple_30ft_1600x400.webm`;
            break;
        case itemAutoRec.scorchingray.some(el => oldItemName.includes(el)):
            newItemName = "scorchingray";
            defaultColor = "orange";
            autoRec = game.i18n.format("AUTOANIM.itemScorchingRay");
            autoPreview = `modules/${jb2a}/Library/2nd_Level/Scorching_Ray/ScorchingRay_01_Regular_Orange_30ft_1600x400.webm`;
            break;
        case itemAutoRec.disintegrate.some(el => oldItemName.includes(el)):
            newItemName = "disintegrate";
            defaultColor = "green";
            autoRec = game.i18n.format("AUTOANIM.itemDisintegrate");
            autoPreview = `modules/${jb2a}/Library/6th_Level/Disintegrate/Disintegrate_01_Regular_Green01_15ft_1000x400.webm`;
            break;
        case itemAutoRec.guidingbolt.some(el => oldItemName.includes(el)):
            newItemName = "guidingbolt";
            defaultColor = "blue yellow";
            autoRec = game.i18n.format("AUTOANIM.itemGuidingBolt");
            autoPreview = `modules/${jb2a}/Library/1st_Level/Guiding_Bolt/GuidingBolt_01_Regular_BlueYellow_30ft_1600x400.webm`;
            break;
        case oldItemName === "shieldspell":
            newItemName = "shieldspell";
            break;
        case itemAutoRec.creaturebite.some(el => oldItemName.includes(el)):
            newItemName = "creaturebite";
            defaultColor = "red";
            autoRec = game.i18n.format("AUTOANIM.itemBite");
            autoPreview = `modules/${jb2a}/Library/Generic/Creature/Bite_01_Regular_Red_400x400.webm`;
            break;
        case itemAutoRec.creatureclaw.some(el => oldItemName.includes(el)):
            newItemName = "creatureclaw";
            defaultColor = "red";
            autoRec = game.i18n.format("AUTOANIM.itemClaw");
            autoPreview = `modules/${jb2a}/Library/Generic/Creature/Claws_01_Regular_Red_400x400.webm`;
            break;
        case itemAutoRec.huntersmark.some(el => oldItemName.includes(el)):
            newItemName = "huntersmark";
            defaultColor = "green";
            break;
        case itemAutoRec.unarmedstrike.some(el => oldItemName.includes(el)):
            newItemName = "unarmedstrike";
            defaultColor = "blue";
            autoRec = game.i18n.format("AUTOANIM.itemUnarmedStrike");
            autoPreview = `modules/${jb2a}/Library/Generic/Unarmed_Attacks/Unarmed_Strike/UnarmedStrike_01_Regular_Blue_Physical01_800x600.webm`;
            break;
        case itemAutoRec.flurryofblows.some(el => oldItemName.includes(el)):
            newItemName = "flurryofblows";
            defaultColor = "blue";
            autoRec = game.i18n.format("AUTOANIM.itemFlurryBlows");
            autoPreview = `modules/${jb2a}/Library/Generic/Unarmed_Attacks/Flurry_Of_Blows/FlurryOfBlows_01_Regular_Blue_Physical01_800x600.webm`;
            break;
        case itemAutoRec.calllightning.some(el => oldItemName.includes(el)):
            newItemName = "calllightning";
            defaultColor = "blue";
            break;
        case itemAutoRec.darkness.some(el => oldItemName.includes(el)):
            newItemName = "darkness";
            defaultColor = "black";
            break;
        case itemAutoRec.fogcloud.some(el => oldItemName.includes(el)):
            newItemName = "fogcloud";
            defaultColor = "white";
            break;
        case itemAutoRec.sleetstorm.some(el => oldItemName.includes(el)):
            newItemName = "sleetstorm";
            defaultColor = "blue";
            break;
        case itemAutoRec.spiritguardians.some(el => oldItemName.includes(el)):
            newItemName = "spiritguardians";
            defaultColor = "yellow blue";
            break;
        case itemAutoRec.wallofforce.some(el => oldItemName.includes(el)):
            newItemName = "wallofforce";
            defaultColor = "grey";
            break;
        case itemAutoRec.whirlwind.some(el => oldItemName.includes(el)):
            newItemName = "whirlwind";
            defaultColor = "blue grey";
            break;
        case itemAutoRec.mistystep.some(el => oldItemName.includes(el)):
            newItemName = "mistystep";
            defaultColor = "blue";
            break;
        case itemAutoRec.bolt.some(el => oldItemName.includes(el)):
            newItemName = "bolt";
            defaultColor = "orange";
            autoRec = game.i18n.format("AUTOANIM.bolt");
            autoPreview = `modules/${jb2a}/Library/Generic/Weapon_Attacks/Ranged/Bolt01_01_Regular_Orange_Physical_15ft_1000x400.webm`;
            break;
        case itemAutoRec.bullet.some(el => oldItemName.includes(el)):
            newItemName = "bullet";
            defaultColor = "orange";
            break;
        case itemAutoRec.snipe.some(el => oldItemName.includes(el)):
            newItemName = "snipe";
            defaultColor = "blue";
            break;
        case itemAutoRec.sneakattack.some(el => oldItemName.includes(el)):
            newItemName = "sneakattack";
            break;
    }
    if (newItemName === undefined) {
        console.warn("Does not match any automatically recognized name")
    }
    return [newItemName, defaultColor, autoRec, autoPreview];
    function moduleIncludes(test) {
        return !!game.modules.get(test);
    }
}

export function removeDefaults(item) {
    item.unsetFlag("autoanimations", "defaults")
}