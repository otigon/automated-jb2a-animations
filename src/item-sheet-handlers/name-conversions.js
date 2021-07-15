export function nameConversion(itemName) {
    let oldItemName = itemName.toLowerCase();
    console.log("old item name is " + oldItemName)
    let defaultColor;
    let newItemName;
    let autoRec;
    let jb2a = moduleIncludes("jb2a_patreon") === true ? "jb2a_patreon" : "JB2A_DnD5e";
    let autoPreview = "no preview";
    switch (oldItemName) {
        case "bardic inspiration":
        case game.i18n.format("AUTOANIM.bardicInspiration").toLowerCase():
            newItemName = "bardicinspiration";
            defaultColor = "green orange";
            break;
        case "rapier":
        case game.i18n.format("AUTOANIM.itemRapier").toLowerCase():
            newItemName = "rapier";
            defaultColor = "white";
            autoRec = game.i18n.format("AUTOANIM.itemRapier");
            autoPreview = `modules/${jb2a}/Library/Generic/Weapon_Attacks/Melee/Rapier01_01_Regular_White_800x600.webm`;
            break;
        case "greatsword":
        case game.i18n.format("AUTOANIM.itemGreatsword").toLowerCase():
            newItemName = "greatsword";
            defaultColor = "white";
            autoRec = game.i18n.format("AUTOANIM.itemGreatsword");
            autoPreview = `modules/${jb2a}/Library/Generic/Weapon_Attacks/Melee/GreatSword01_01_Regular_White_800x600.webm`;
            break;
        case game.i18n.format("AUTOANIM.itemSword").toLowerCase():
        case game.i18n.format("AUTOANIM.itemLongsword").toLowerCase():
        case game.i18n.format("AUTOANIM.itemShortsword").toLowerCase():
        case "scimitar":
        case game.i18n.format("AUTOANIM.itemScimitar").toLowerCase():
            newItemName = "sword";
            defaultColor = "white";
            autoRec = game.i18n.format("AUTOANIM.itemSword");
            autoPreview = `modules/${jb2a}/Library/Generic/Weapon_Attacks/Melee/Sword01_01_Regular_White_800x600.webm`;
            break;
        case "lasersword":
        case game.i18n.format("AUTOANIM.itemLaserSword").toLowerCase():
            newItemName = "lasersword";
            defaultColor = "blue";
            autoRec = game.i18n.format("AUTOANIM.itemLaserSword");
            autoPreview = `modules/${jb2a}/Library/Generic/Weapon_Attacks/Melee/LaserSword01_01_Regular_Blue_800x600.webm`;
            break;
        case "greatclub":
        case game.i18n.format("AUTOANIM.itemGreatclub").toLowerCase():
            newItemName = "greatclub";
            defaultColor = "white";
            autoRec = game.i18n.format("AUTOANIM.itemGreatclub");
            autoPreview = `modules/${jb2a}/Library/Generic/Weapon_Attacks/Melee/GreatClub01_01_Regular_White_800x600.webm`;
            break;
        case "greataxe":
        case game.i18n.format("AUTOANIM.itemGreataxe").toLowerCase():
        case "battleaxe":
        case game.i18n.format("AUTOANIM.itemBattleaxe").toLowerCase():
            newItemName = "greataxe";
            defaultColor = "white";
            autoRec = game.i18n.format("AUTOANIM.itemGreataxe");
            autoPreview = `modules/${jb2a}/Library/Generic/Weapon_Attacks/Melee/GreatAxe01_01_Regular_White_800x600.webm`;
            break;
        case "mace":
        case game.i18n.format("AUTOANIM.itemMace").toLowerCase():
            newItemName = "mace";
            defaultColor = "white";
            autoRec = game.i18n.format("AUTOANIM.itemMace");
            autoPreview = `modules/${jb2a}/Library/Generic/Weapon_Attacks/Melee/Mace01_01_Regular_White_800x600.webm`;
            break;
        case "maul":
        case game.i18n.format("AUTOANIM.itemMaul").toLowerCase():
            newItemName = "maul";
            defaultColor = "white";
            autoRec = game.i18n.format("AUTOANIM.itemMaul");
            autoPreview = `modules/${jb2a}/Library/Generic/Weapon_Attacks/Melee/Maul01_01_Regular_White_800x600.webm`;
            break;
        case game.i18n.format("AUTOANIM.item1HS").toLowerCase():
            newItemName = "1hs";
            break;
        case game.i18n.format("AUTOANIM.item2HS").toLowerCase():
            newItemName = "2hs";
            break;
        case game.i18n.format("AUTOANIM.item1HB").toLowerCase():
            newItemName = "1hb";
            break;
        case game.i18n.format("AUTOANIM.item2HB").toLowerCase():
            newItemName = "2hb";
            break;
        case game.i18n.format("AUTOANIM.item1HP").toLowerCase():
            newItemName = "1hp";
            break;
        case game.i18n.format("AUTOANIM.item2HP").toLowerCase():
            newItemName = "2hp";
            break;
        case "dagger":
        case game.i18n.format("AUTOANIM.itemDagger").toLowerCase():
            newItemName = "dagger";
            defaultColor = "white";
            autoRec = game.i18n.format("AUTOANIM.itemDagger");
            autoPreview = `modules/${jb2a}/Library/Generic/Weapon_Attacks/Melee/Dagger02_01_Regular_White_800x600.webm`;
            break;
        case "handaxe":
        case game.i18n.format("AUTOANIM.itemHandaxe").toLowerCase():
            newItemName = "handaxe";
            autoRec = game.i18n.format("AUTOANIM.itemHandaxe");
            autoPreview = `modules/${jb2a}/Library/Generic/Weapon_Attacks/Melee/HandAxe02_01_Regular_White_800x600.webm`;
            break;
        case "spear":
        case game.i18n.format("AUTOANIM.itemSpear").toLowerCase():
            newItemName = "spear";
            defaultColor = "white";
            autoRec = game.i18n.format("AUTOANIM.itemSpear");
            autoPreview = `modules/${jb2a}/Library/Generic/Weapon_Attacks/Melee/Spear01_01_Regular_White_800x600.webm`;
            break;
        case "arrow":
        case game.i18n.format("AUTOANIM.itemArrow").toLowerCase():
        case nameIncludes("bow"):
        case game.i18n.format("AUTOANIM.itemLongbow").toLowerCase():
        case game.i18n.format("AUTOANIM.itemShortbow").toLowerCase():
            newItemName = "arrow";
            defaultColor = "regular";
            autoRec = game.i18n.format("AUTOANIM.itemArrow");
            autoPreview = `modules/jb2a_patreon/Library/Generic/Weapon_Attacks/Ranged/Arrow02_01_Regular_Blue_Physical_15ft_1000x400.webm`;
            break;
        case "throwing hammer":
        case game.i18n.format("AUTOANIM.itemThrowingHammer").toLowerCase():
            newItemName = "rangehammer";
            break;
        case "siege boulder":
        case game.i18n.format("AUTOANIM.itemSiegeBoulder").toLowerCase():
            newItemName = "siege";
            autoRec = game.i18n.format("AUTOANIM.itemSiegeBoulder");
            autoPreview = ``;
            break;
        case "boulder":
        case game.i18n.format("AUTOANIM.itemBoulder").toLowerCase():
            newItemName = "boulder";
            autoRec = game.i18n.format("AUTOANIM.itemBoulder");
            autoPreview = ``;
            break;
        case "laser blast":
        case game.i18n.format("AUTOANIM.itemLaserBlast").toLowerCase():
            newItemName = "lasershot";
            defaultColor = "blue";
            autoRec = game.i18n.format("AUTOANIM.itemLaserBlast");
            autoPreview = `modules/${jb2a}/Library/Generic/Weapon_Attacks/Ranged/LaserShot_01_Regular_Blue_30ft_1600x400.webm`;
            break;
        case "javelin":
        case game.i18n.format("AUTOANIM.itemJavelin").toLowerCase():
            newItemName = "rangejavelin";
            autoRec = game.i18n.format("AUTOANIM.itemJavelin");
            autoPreview = ``;
            break;
        case "sling":
        case game.i18n.format("AUTOANIM.itemSling").toLowerCase():
            newItemName = "rangesling";
            autoRec = game.i18n.format("AUTOANIM.itemSling");
            autoPreview = ``;
            break;
        case "thunderwave":
        case game.i18n.format("AUTOANIM.itemThunderwave").toLowerCase():
            newItemName = "thunderwave";
            defaultColor = "blue";
            break;
        case "shatter":
        case game.i18n.format("AUTOANIM.itemShatter").toLowerCase():
            newItemName = "shatter";
            defaultColor = "blue";
            break;
        case "magic missile":
        case game.i18n.format("AUTOANIM.itemMagicMissile").toLowerCase():
            newItemName = "magicmissile";
            defaultColor = "purple";
            autoRec = game.i18n.format("AUTOANIM.itemMagicMissile");
            autoPreview = `modules/${jb2a}/Library/1st_Level/Magic_Missile/MagicMissile_01_Regular_Purple_30ft_01_1600x400.webm`;
            break;
        case "cure wounds":
        case game.i18n.format("AUTOANIM.itemCureWounds").toLowerCase():
            newItemName = "curewounds";
            defaultColor = "blue";
            autoRec = game.i18n.format("AUTOANIM.itemCureWounds");
            autoPreview = ``;
            break;
        case "healing word":
        case "generic healing":
        case game.i18n.format("AUTOANIM.itemHealingWord").toLowerCase():
        case game.i18n.format("AUTOANIM.itemGenericHealing").toLowerCase():
            newItemName = "generichealing";
            defaultColor = "blue";
            autoRec = game.i18n.format("AUTOANIM.itemGenericHealing");
            autoPreview = `modules/${jb2a}/Library/1st_Level/Cure_Wounds/CureWounds_01_Blue_200x200.webm`;
            break;
        case "fire bolt":
        case game.i18n.format("AUTOANIM.itemFireBolt").toLowerCase():
            newItemName = "firebolt";
            defaultColor = "orange";
            autoRec = game.i18n.format("AUTOANIM.itemFireBolt");
            autoPreview = `modules/${jb2a}/Library/Cantrip/Fire_Bolt/FireBolt_01_Regular_Orange_30ft_1600x400.webm`;
            break;
        case "ray of frost":
        case game.i18n.format("AUTOANIM.itemRayFrost").toLowerCase():
            newItemName = "rayoffrost";
            defaultColor = "blue";
            autoRec = game.i18n.format("AUTOANIM.itemRayFrost");
            autoPreview = `modules/${jb2a}/Library/Cantrip/Ray_Of_Frost/RayOfFrost_01_Regular_Blue_15ft_1000x400.webm`;
            break;
        case "witch bolt":
        case game.i18n.format("AUTOANIM.itemWitchBolt").toLowerCase():
            newItemName = "witchbolt";
            defaultColor = "blue";
            autoRec = game.i18n.format("AUTOANIM.itemWitchBolt");
            autoPreview = `modules/${jb2a}/Library/1st_Level/Witch_Bolt/WitchBolt_01_Regular_Blue_15ft_1000x400.webm`;
            break;
        case "eldritch blast":
        case game.i18n.format("AUTOANIM.itemEldritchBlast").toLowerCase():
            newItemName = "eldritchblast";
            defaultColor = "purple";
            autoRec = game.i18n.format("AUTOANIM.itemEldritchBlast");
            autoPreview = `modules/${jb2a}/Library/Cantrip/Eldritch_Blast/EldritchBlast_01_Regular_Purple_30ft_1600x400.webm`;
            break;
        case "scorching ray":
        case game.i18n.format("AUTOANIM.itemScorchingRay").toLowerCase():
            newItemName = "scorchingray";
            defaultColor = "orange";
            autoRec = game.i18n.format("AUTOANIM.itemScorchingRay");
            autoPreview = `modules/${jb2a}/Library/2nd_Level/Scorching_Ray/ScorchingRay_01_Regular_Orange_30ft_1600x400.webm`;
            break;
        case "disintegrate":
        case game.i18n.format("AUTOANIM.itemDisintegrate").toLowerCase():
            newItemName = "disintegrate";
            defaultColor = "green";
            autoRec = game.i18n.format("AUTOANIM.itemDisintegrate");
            autoPreview = `modules/${jb2a}/Library/6th_Level/Disintegrate/Disintegrate_01_Regular_Green01_15ft_1000x400.webm`;
            break;
        case "guiding bolt":
        case game.i18n.format("AUTOANIM.itemGuidingBolt").toLowerCase():
            newItemName = "guidingbolt";
            defaultColor = "blue yellow";
            autoRec = game.i18n.format("AUTOANIM.itemGuidingBolt");
            autoPreview = `modules/${jb2a}/Library/1st_Level/Guiding_Bolt/GuidingBolt_01_Regular_BlueYellow_30ft_1600x400.webm`;
            break;
        case "shield":
        case game.i18n.format("AUTOANIM.itemShield").toLowerCase():
            newItemName = "shield";
            break;
        case "bite":
        case game.i18n.format("AUTOANIM.itemBite").toLowerCase():
            newItemName = "creaturebite";
            defaultColor = "red";
            autoRec = game.i18n.format("AUTOANIM.itemBite");
            autoPreview = `modules/${jb2a}/Library/Generic/Creature/Bite_01_Regular_Red_400x400.webm`;
            break;
        case "claws":
        case game.i18n.format("AUTOANIM.itemClaw").toLowerCase():
            newItemName = "creatureclaw";
            defaultColor = "red";
            autoRec = game.i18n.format("AUTOANIM.itemClaw");
            autoPreview = `modules/${jb2a}/Library/Generic/Creature/Claws_01_Regular_Red_400x400.webm`;
            break;
        case "hunter's mark":
        case game.i18n.format("AUTOANIM.itemHM").toLowerCase():
            newItemName = "huntersmark";
            defaultColor = "green";
            break;
        case "unarmed strike":
        case game.i18n.format("AUTOANIM.itemUnarmedStrike").toLowerCase():
            newItemName = "unarmedstrike";
            defaultColor = "blue";
            autoRec = game.i18n.format("AUTOANIM.itemUnarmedStrike");
            autoPreview = `modules/${jb2a}/Library/Generic/Unarmed_Attacks/Unarmed_Strike/UnarmedStrike_01_Regular_Blue_Physical01_800x600.webm`;
            break;
        case "flurry of blows":
        case game.i18n.format("AUTOANIM.itemFlurryBlows").toLowerCase():
            newItemName = "flurryofblows";
            defaultColor = "blue";
            autoRec = game.i18n.format("AUTOANIM.itemFlurryBlows");
            autoPreview = `modules/${jb2a}/Library/Generic/Unarmed_Attacks/Flurry_Of_Blows/FlurryOfBlows_01_Regular_Blue_Physical01_800x600.webm`;
            break;
        case "call lightning":
        case game.i18n.format("AUTOANIM.animCallLightning").toLowerCase():
            newItemName = "calllightning";
            defaultColor = "blue";
            break;
        case "darkness":
        case game.i18n.format("AUTOANIM.animDarkness").toLowerCase():
            newItemName = "darkness";
            defaultColor = "black";
            break;
        case "fog cloud":
        case game.i18n.format("AUTOANIM.animFogCloud").toLowerCase():
            newItemName = "fogcloud";
            defaultColor = "white";
            break;
        case "sleetstorm":
        case game.i18n.format("AUTOANIM.animSleetstorm").toLowerCase():
            newItemName = "sleetstorm";
            defaultColor = "blue";
            break;
        case "spirit guardians":
        case game.i18n.format("AUTOANIM.animSpiritGuardians").toLowerCase():
            newItemName = "spiritguardians";
            defaultColor = "yellow blue";
            break;
        case "wall of force":
        case game.i18n.format("AUTOANIM.animWallOfForce").toLowerCase():
            newItemName = "wallofforce";
            defaultColor = "grey";
            break;
        case "whirlwind":
        case game.i18n.format("AUTOANIM.animWhirlwind").toLowerCase():
            newItemName = "whirlwind";
            defaultColor = "blue grey";
            break;
        case "misty step":
        case game.i18n.format("AUTOANIM.itemMistyStep").toLowerCase():
            newItemName = "mistystep";
            defaultColor = "blue";
            break;
        case "bolt":
        case game.i18n.format("AUTOANIM.bolt").toLowerCase():
            newItemName = "bolt";
            defaultColor = "orange";
            autoRec = game.i18n.format("AUTOANIM.bolt");
            autoPreview = `modules/${jb2a}/Library/Generic/Weapon_Attacks/Ranged/Bolt01_01_Regular_Orange_Physical_15ft_1000x400.webm`;
            break;
        case "bullet":
        case game.i18n.format("AUTOANIM.bullet").toLowerCase():
            newItemName = "bullet";
            defaultColor = "orange";
            break;
        case "snipe":
        case game.i18n.format("AUTOANIM.snipe").toLowerCase():
            newItemName = "snipe";
            defaultColor = "blue";
            break;
        case "sneak attack":
        case game.i18n.format("AUTOANIM.sneakattack").toLowerCase():
            newItemName = "sneakattack";
            break;
    }
    if (newItemName === undefined) {
        console.warn("Does not match any automatically recognized name")
    }
    return [newItemName, defaultColor, autoRec, autoPreview];
    function nameIncludes(test) {
        if (oldItemName.includes(test)) {
            return oldItemName;
        } else { return }
    }
    function moduleIncludes(test) {
        return !!game.modules.get(test);
    }
}