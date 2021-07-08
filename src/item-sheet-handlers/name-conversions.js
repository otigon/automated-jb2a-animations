export function nameConversion(itemName) {
    let oldItemName = itemName.toLowerCase();
    let newItemName;
    switch (oldItemName) {
        case "bardic inspiration":
        case game.i18n.format("AUTOANIM.bardicInspiration").toLowerCase():
            newItemName = "bardicinspiration";
            break;
        case "rapier":
        case game.i18n.format("AUTOANIM.itemRapier").toLowerCase():
            newItemName = "rapier";
            break;
        case "greatsword":
        case game.i18n.format("AUTOANIM.itemGreatsword").toLowerCase():
            newItemName = "greatsword";
            break;
        case game.i18n.format("AUTOANIM.itemSword").toLowerCase():
        case game.i18n.format("AUTOANIM.itemLongsword").toLowerCase():
        case game.i18n.format("AUTOANIM.itemShortsword").toLowerCase():
        case "scimitar":
        case game.i18n.format("AUTOANIM.itemScimitar").toLowerCase():
            newItemName = "sword";
            break;
        case "lasersword":
        case game.i18n.format("AUTOANIM.itemLaserSword").toLowerCase():
            newItemName = "lasersword";
            break;
        case "greatclub":
        case game.i18n.format("AUTOANIM.itemGreatclub").toLowerCase():
            newItemName = "greatclub";
            break;
        case "greataxe":
        case game.i18n.format("AUTOANIM.itemGreataxe").toLowerCase():
        case "battleaxe":
        case game.i18n.format("AUTOANIM.itemBattleaxe").toLowerCase():
            newItemName = "greataxe";
            break;
        case "mace":
        case game.i18n.format("AUTOANIM.itemMace").toLowerCase():
            newItemName = "mace";
            break;
        case "maul":
        case game.i18n.format("AUTOANIM.itemMaul").toLowerCase():
            newItemName = "maul";
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
            break;
        case "handaxe":
        case game.i18n.format("AUTOANIM.itemHandaxe").toLowerCase():
            newItemName = "handaxe";
            break;
        case "spear":
        case game.i18n.format("AUTOANIM.itemSpear").toLowerCase():
            newItemName = "spear";
            break;
        case "arrow":
        case game.i18n.format("AUTOANIM.itemArrow").toLowerCase():
        case "bow":
        case game.i18n.format("AUTOANIM.itemLongbow").toLowerCase():
        case game.i18n.format("AUTOANIM.itemShortbow").toLowerCase():
            newItemName = "arrow";
            break;
        case "throwing hammer":
        case game.i18n.format("AUTOANIM.itemThrowingHammer").toLowerCase():
            newItemName = "rangehammer";
            break;
        case "siege boulder":
        case game.i18n.format("AUTOANIM.itemSiegeBoulder").toLowerCase():
            newItemName = "siege";
            break;
        case "boulder":
        case game.i18n.format("AUTOANIM.itemBoulder").toLowerCase():
            newItemName = "boulder";
            break;
        case "laser blast":
        case game.i18n.format("AUTOANIM.itemLaserBlast").toLowerCase():
            newItemName = "lasershot";
            break;
        case "javelin":
        case game.i18n.format("AUTOANIM.itemJavelin").toLowerCase():
            newItemName = "rangejavelin";
            break;
        case "sling":
        case game.i18n.format("AUTOANIM.itemSling").toLowerCase():
            newItemName = "rangesling";
            break;
        case "thunderwave":
        case game.i18n.format("AUTOANIM.itemThunderwave").toLowerCase():
            newItemName = "thunderwave";
            break;
        case "shatter":
        case game.i18n.format("AUTOANIM.itemShatter").toLowerCase():
            newItemName = "shatter";
            break;
        case "magic missile":
        case game.i18n.format("AUTOANIM.itemMagicMissile").toLowerCase():
            newItemName = "magicmissile";
            break;
        case "cure wounds":
        case game.i18n.format("AUTOANIM.itemCureWounds").toLowerCase():
            newItemName = "curewounds";
            break;
        case "healing word":
        case "generic healing":
        case game.i18n.format("AUTOANIM.itemHealingWord").toLowerCase():
        case game.i18n.format("AUTOANIM.itemGenericHealing").toLowerCase():
            newItemName = "generichealing";
            break;
        case "fire bolt":
        case game.i18n.format("AUTOANIM.itemFireBolt").toLowerCase():
            newItemName = "firebolt";
            break;
        case "ray of frost":
        case game.i18n.format("AUTOANIM.itemRayFrost").toLowerCase():
            newItemName = "rayoffrost";
            break;
        case "witch bolt":
        case game.i18n.format("AUTOANIM.itemWitchBolt").toLowerCase():
            newItemName = "witchbolt";
            break;
        case "eldritch blast":
        case game.i18n.format("AUTOANIM.itemEldritchBlast").toLowerCase():
            newItemName = "eldritchblast";
            break;
        case "scorching ray":
        case game.i18n.format("AUTOANIM.itemScorchingRay").toLowerCase():
            newItemName = "scorchingray";
            break;
        case "disintegrate":
        case game.i18n.format("AUTOANIM.itemDisintegrate").toLowerCase():
            newItemName = "disintegrate";
            break;
        case "guiding bolt":
        case game.i18n.format("AUTOANIM.itemGuidingBolt").toLowerCase():
            newItemName = "guidingbolt";
            break;
        case "shield":
        case game.i18n.format("AUTOANIM.itemShield").toLowerCase():
            newItemName = "shield";
            break;
        case "bite":
        case game.i18n.format("AUTOANIM.itemBite").toLowerCase():
            newItemName = "creaturebite";
            break;
        case "claw":
        case game.i18n.format("AUTOANIM.itemClaw").toLowerCase():
            newItemName = "creatureclaw";
            break;
        case "hunter's mark":
        case game.i18n.format("AUTOANIM.itemHM").toLowerCase():
            newItemName = "huntersmark";
            break;
        case "unarmed strike":
        case game.i18n.format("AUTOANIM.itemUnarmedStrike").toLowerCase():
            newItemName = "unarmedstrike";
            break;
        case "flurry of blows":
        case game.i18n.format("AUTOANIM.itemFlurryBlows").toLowerCase():
            newItemName = "flurryofblows";
            break;
        case "call lightning":
        case game.i18n.format("AUTOANIM.animCallLightning").toLowerCase():
            newItemName = "calllightning";
            break;
        case "darkness":
        case game.i18n.format("AUTOANIM.animDarkness").toLowerCase():
            newItemName = "darkness";
            break;
        case "fog cloud":
        case game.i18n.format("AUTOANIM.animFogCloud").toLowerCase():
            newItemName = "fogcloud";
            break;
        case "sleetstorm":
        case game.i18n.format("AUTOANIM.animSleetstorm").toLowerCase():
            newItemName = "sleetstorm";
            break;
        case "spirit guardians":
        case game.i18n.format("AUTOANIM.animSpiritGuardians").toLowerCase():
            newItemName = "spiritguardians";
            break;
        case "wall of force":
        case game.i18n.format("AUTOANIM.animWallOfForce").toLowerCase():
            newItemName = "wallofforce";
            break;
        case "whirlwind":
        case game.i18n.format("AUTOANIM.animWhirlwind").toLowerCase():
            newItemName = "whirlwind";
            break;
        case "misty step":
        case game.i18n.format("AUTOANIM.itemMistyStep").toLowerCase():
            newItemName = "mistystep";
            break;
        case "bolt":
        case game.i18n.format("AUTOANIM.bolt").toLowerCase():
            newItemName = "bolt";
            break;
        case "bullet":
        case game.i18n.format("AUTOANIM.bullet").toLowerCase():
            newItemName = "bullet";
            break;
        case "snipe":
        case game.i18n.format("AUTOANIM.snipe").toLowerCase():
            newItemName = "snipe";
            break;
        case "sneak attack":
        case game.i18n.format("AUTOANIM.sneakattack").toLowerCase():
            newItemName = "sneakattack";
            break;
    }
    if (newItemName === undefined) {
        //console.warn("Does not match any automatically recognized name")
        return itemName;
    } else {
        return newItemName;
    }
}