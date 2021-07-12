export function nameConversion(itemName) {
    let oldItemName = itemName.toLowerCase();
    console.log("old item name is " + oldItemName)
    let defaultColor;
    let newItemName;
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
            break;
        case "greatsword":
        case game.i18n.format("AUTOANIM.itemGreatsword").toLowerCase():
            newItemName = "greatsword";
            defaultColor = "white";
            break;
        case game.i18n.format("AUTOANIM.itemSword").toLowerCase():
        case game.i18n.format("AUTOANIM.itemLongsword").toLowerCase():
        case game.i18n.format("AUTOANIM.itemShortsword").toLowerCase():
        case "scimitar":
        case game.i18n.format("AUTOANIM.itemScimitar").toLowerCase():
            newItemName = "sword";
            defaultColor = "white";
            break;
        case "lasersword":
        case game.i18n.format("AUTOANIM.itemLaserSword").toLowerCase():
            newItemName = "lasersword";
            defaultColor = "blue";
            break;
        case "greatclub":
        case game.i18n.format("AUTOANIM.itemGreatclub").toLowerCase():
            newItemName = "greatclub";
            defaultColor = "white";
            break;
        case "greataxe":
        case game.i18n.format("AUTOANIM.itemGreataxe").toLowerCase():
        case "battleaxe":
        case game.i18n.format("AUTOANIM.itemBattleaxe").toLowerCase():
            newItemName = "greataxe";
            defaultColor = "white";
            break;
        case "mace":
        case game.i18n.format("AUTOANIM.itemMace").toLowerCase():
            newItemName = "mace";
            defaultColor = "white";
            break;
        case "maul":
        case game.i18n.format("AUTOANIM.itemMaul").toLowerCase():
            newItemName = "maul";
            defaultColor = "white";
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
            break;
        case "handaxe":
        case game.i18n.format("AUTOANIM.itemHandaxe").toLowerCase():
            newItemName = "handaxe";
            break;
        case "spear":
        case game.i18n.format("AUTOANIM.itemSpear").toLowerCase():
            newItemName = "spear";
            defaultColor = "white";
            break;
        case "arrow":
        case game.i18n.format("AUTOANIM.itemArrow").toLowerCase():
        case nameIncludes("bow"):
        case game.i18n.format("AUTOANIM.itemLongbow").toLowerCase():
        case game.i18n.format("AUTOANIM.itemShortbow").toLowerCase():
            newItemName = "arrow";
            defaultColor = "regular";
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
            defaultColor = "blue";
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
            break;
        case "cure wounds":
        case game.i18n.format("AUTOANIM.itemCureWounds").toLowerCase():
            newItemName = "curewounds";
            defaultColor = "blue";
            break;
        case "healing word":
        case "generic healing":
        case game.i18n.format("AUTOANIM.itemHealingWord").toLowerCase():
        case game.i18n.format("AUTOANIM.itemGenericHealing").toLowerCase():
            newItemName = "generichealing";
            defaultColor = "blue";
            break;
        case "fire bolt":
        case game.i18n.format("AUTOANIM.itemFireBolt").toLowerCase():
            newItemName = "firebolt";
            defaultColor = "orange";
            break;
        case "ray of frost":
        case game.i18n.format("AUTOANIM.itemRayFrost").toLowerCase():
            newItemName = "rayoffrost";
            defaultColor = "blue";
            break;
        case "witch bolt":
        case game.i18n.format("AUTOANIM.itemWitchBolt").toLowerCase():
            newItemName = "witchbolt";
            defaultColor = "blue";
            break;
        case "eldritch blast":
        case game.i18n.format("AUTOANIM.itemEldritchBlast").toLowerCase():
            newItemName = "eldritchblast";
            defaultColor = "purple";
            break;
        case "scorching ray":
        case game.i18n.format("AUTOANIM.itemScorchingRay").toLowerCase():
            newItemName = "scorchingray";
            defaultColor = "orange";
            break;
        case "disintegrate":
        case game.i18n.format("AUTOANIM.itemDisintegrate").toLowerCase():
            newItemName = "disintegrate";
            defaultColor = "green";
            break;
        case "guiding bolt":
        case game.i18n.format("AUTOANIM.itemGuidingBolt").toLowerCase():
            newItemName = "guidingbolt";
            defaultColor = "blue yellow";
            break;
        case "shield":
        case game.i18n.format("AUTOANIM.itemShield").toLowerCase():
            newItemName = "shield";
            break;
        case "bite":
        case game.i18n.format("AUTOANIM.itemBite").toLowerCase():
            newItemName = "creaturebite";
            defaultColor = "red";
            break;
        case "claws":
        case game.i18n.format("AUTOANIM.itemClaw").toLowerCase():
            newItemName = "creatureclaw";
            defaultColor = "red";
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
            break;
        case "flurry of blows":
        case game.i18n.format("AUTOANIM.itemFlurryBlows").toLowerCase():
            newItemName = "flurryofblows";
            defaultColor = "blue";
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
        return itemName;
    } else {
        return [newItemName, defaultColor];
    }
    function nameIncludes(test) {
        if (oldItemName.includes(test)) {
            return oldItemName;
        } else {return}
    }
}