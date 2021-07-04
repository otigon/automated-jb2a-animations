export function nameConversion(itemName) {
    let oldItemName = itemName.toLowerCase();
    let newItemName;
    switch (oldItemName) {
        case "bardic inspiration":
        case game.i18n.format("AUTOANIM.bardicInspiration"):
            newItemName = "bardicinspiration";
            break;
        case "rapier":
        case game.i18n.format("AUTOANIM.itemRapier"):
            newItemName = "rapier";
            break;
        case "greatsword":
        case game.i18n.format("AUTOANIM.itemGreatsword"):
            newItemName = "greatsword";
            break;
        case game.i18n.format("AUTOANIM.itemSword"):
        case game.i18n.format("AUTOANIM.itemLongsword"):
        case game.i18n.format("AUTOANIM.itemShortsword"):
        case "scimitar":
        case game.i18n.format("AUTOANIM.itemScimitar"):
            newItemName = "sword";
            break;
        case "lasersword":
        case game.i18n.format("AUTOANIM.itemLaserSword"):
            newItemName = "lasersword";
            break;
        case "greatclub":
        case game.i18n.format("AUTOANIM.itemGreatclub"):
            newItemName = "greatclub";
            break;
        case "greataxe":
        case game.i18n.format("AUTOANIM.itemGreataxe"):
        case "battleaxe":
        case game.i18n.format("AUTOANIM.itemBattleaxe"):
            newItemName = "greataxe";
            break;
        case "mace":
        case game.i18n.format("AUTOANIM.itemMace"):
            newItemName = "mace";
            break;
        case "maul":
        case game.i18n.format("AUTOANIM.itemMaul"):
            newItemName = "maul";
            break;
        case game.i18n.format("AUTOANIM.item1HS"):
            newItemName = "1hs";
            break;
        case game.i18n.format("AUTOANIM.item2HS"):
            newItemName = "2hs";
            break;
        case game.i18n.format("AUTOANIM.item1HB"):
            newItemName = "1hb";
            break;
        case game.i18n.format("AUTOANIM.item2HB"):
            newItemName = "2hb";
            break;
        case game.i18n.format("AUTOANIM.item1HP"):
            newItemName = "1hp";
            break;
        case game.i18n.format("AUTOANIM.item2HP"):
            newItemName = "2hp";
            break;
        case "dagger":
        case game.i18n.format("AUTOANIM.itemDagger"):
            newItemName = "dagger";
            break;
        case "handaxe":
        case game.i18n.format("AUTOANIM.itemHandaxe"):
            newItemName = "handaxe";
            break;
        case "spear":
        case game.i18n.format("AUTOANIM.itemSpear"):
            newItemName = "spear";
            break;
        case "arrow":
        case game.i18n.format("AUTOANIM.itemArrow"):
        case "bow":
        case game.i18n.format("AUTOANIM.itemLongbow"):
        case game.i18n.format("AUTOANIM.itemShortbow"):
            newItemName = "arrow";
            break;
        case "throwing hammer":
        case game.i18n.format("AUTOANIM.itemThrowingHammer"):
            newItemName = "rangehammer";
            break;
        case "siege":
        case game.i18n.format("AUTOANIM.itemSiegeBoulder"):
            newItemName = "siege";
            break;
        case "boulder":
        case game.i18n.format("AUTOANIM.itemBoulder"):
            newItemName = "boulder";
            break;
        case "laser blast":
        case game.i18n.format("AUTOANIM.itemLaserBlast"):
            newItemName = "lasershot";
            break;
        case "javelin":
        case game.i18n.format("AUTOANIM.itemJavelin"):
            newItemName = "rangejavelin";
            break;
        case "sling":
        case game.i18n.format("AUTOANIM.itemSling"):
            newItemName = "rangesling";
            break;
        case "thunderwave":
        case game.i18n.format("AUTOANIM.itemThunderwave"):
            newItemName = "thunderwave";
            break;
        case "shatter":
        case game.i18n.format("AUTOANIM.itemShatter"):
            newItemName = "shatter";
            break;
        case "magic missile":
        case game.i18n.format("AUTOANIM.itemMagicMissile"):
            newItemName = "magicmissile";
            break;
        case "cure wounds":
        case game.i18n.format("AUTOANIM.itemCureWounds"):
            newItemName = "curewounds";
            break;
        case "healing word":
        case "generic healing":
        case game.i18n.format("AUTOANIM.itemHealingWord"):
        case game.i18n.format("AUTOANIM.itemGenericHealing"):
            newItemName = "generichealing";
            break;
        case "fire bolt":
        case game.i18n.format("AUTOANIM.itemFireBolt"):
            newItemName = "firebolt";
            break;
        case "ray of frost":
        case game.i18n.format("AUTOANIM.itemRayFrost"):
            newItemName = "rayoffrost";
            break;
        case "witch bolt":
        case game.i18n.format("AUTOANIM.itemWitchBolt"):
            newItemName = "witchbolt";
            break;
        case "eldritch blast":
        case game.i18n.format("AUTOANIM.itemEldritchBlast"):
            newItemName = "eldritchblast";
            break;
        case "scorching ray":
        case game.i18n.format("AUTOANIM.itemScorchingRay"):
            newItemName = "scorchingray";
            break;
        case "disintegrate":
        case game.i18n.format("AUTOANIM.itemDisintegrate"):
            newItemName = "disintegrate";
            break;
        case "guiding bolt":
        case game.i18n.format("AUTOANIM.itemGuidingBolt"):
            newItemName = "guidingbolt";
            break;
        case "shield":
        case game.i18n.format("AUTOANIM.itemShield"):
            newItemName = "shield";
            break;
        case "bite":
        case game.i18n.format("AUTOANIM.itemBite"):
            newItemName = "creaturebite";
            break;
        case "claw":
        case game.i18n.format("AUTOANIM.itemClaw"):
            newItemName = "creatureclaw";
            break;
        case "hunter's mark":
        case game.i18n.format("AUTOANIM.itemHM"):
            newItemName = "huntersmark";
            break;
        case "unarmed strike":
        case game.i18n.format("AUTOANIM.itemUnarmedStrike"):
            newItemName = "unarmedstrike";
            break;
        case "flurry of blows":
        case game.i18n.format("AUTOANIM.itemFlurryBlows"):
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
        console.warn("Does not match any automatically recognized name")
        return itemName;
    } else {
        return newItemName;
    }
}