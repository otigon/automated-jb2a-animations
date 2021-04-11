function colorChecks(handler) {
    let type01 = "default";
    let tint = "default";
    let color = "default";
    let fireColor = "pass";
    let tmColor = "default";
    switch (true) {
        case (handler.itemColorIncludes("orange pink")):
            tint = "Regular";
            color = "OrangePink";
            tmColor = 0xC1005B;
            break;
        case (handler.itemColorIncludes("purple blue")):
            tint = "Regular";
            color = "PurpleBlue";
            tmColor = 0x60B2FF;
            break;
        case (handler.itemColorIncludes("blue yellow")):
        case handler.itemColorIncludes("yellow blue"):
            switch (true) {
                case handler.itemNameIncludes(game.i18n.format("AUTOANIM.animSpiritGuardians").toLowerCase()):
                    tint = "Light";
                    break;
                default:
                    tint = "Regular";
                    break;
            }
            type01 = "01";
            color = "BlueYellow";
            tmColor = 0xACC5C5;
            break;
        case (handler.itemColorIncludes("purple teal")):
            tint = "Regular";
            color = "PurpleTeal";
            tmColor = 0xC38CDC;
            break;
        case (handler.itemColorIncludes("dark blue")):
            tint = "Dark";
            type01 = "01";
            color = "Blue";
        case (handler.itemColorIncludes("dark purple")):
            tint = "Dark";
            type01 = "01";
            color = "Purple";
            tmColor = 0xAE00AE;
            break;
        case (handler.itemColorIncludes("dark green")):
            tint = "Dark";
            color = "Green";
            tmColor = 0x187C00;
            break;
        case (handler.itemColorIncludes("teal yellow")):
            type01 = "01";
            color = "TealYellow";
            break;
        case (handler.itemColorIncludes("dark red")):
            switch (true) {
                case (handler.itemNameIncludes("claw")):
                case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemClaw").toLowerCase()):
                case (handler.itemNameIncludes("bite")):
                case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemBite").toLowerCase()):
                case handler.itemNameIncludes(game.i18n.format("AUTOANIM.animSpiritGuardians").toLowerCase()):
                    type01 = "01";
                    break;
                default:
                    type01 = "Fire";
                    break;
            }
            tint = "Dark";
            color = "Red";
            tmColor = 0x8E0000;
            break;
        case (handler.itemColorIncludes("green orange")):
            type01 = "01";
            tint = "Light";
            color = "GreenOrange";
            break;
        case (handler.itemColorIncludes("pink purple")):
            type01 = "01";
            tint = "Light";
            color = "PinkPurple";
            break;
        case handler.itemColorIncludes("pink yellow"):
            type01 = "01";
            color = "PinkYellow";
            break;
        case handler.itemColorIncludes("blue orange"):
            type01 = "01";
            color = "BlueOrange";
            break;
        case handler.itemColorIncludes("blue grey"):
            type01 = "01";
            color = "BlueGrey_01";
            break;
        case (handler.itemColorIncludes("white")):
            type01 = "01";
            tint = "Regular";
            color = "White";
            break;
        case (handler.itemColorIncludes("blue")):
            switch (true) {
                case (handler.itemNameIncludes("laser")):
                case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemLaserSword").toLowerCase()):
                case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemLaserBlast").toLowerCase()):
                case (handler.itemNameIncludes("thunderwave")):
                case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemThunderwave").toLowerCase()):
                case (handler.itemNameIncludes("shatter")):
                case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemShatter").toLowerCase()):
                case (handler.itemNameIncludes("cure", "wound")):
                case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemCureWounds").toLowerCase()):
                case (handler.itemNameIncludes("heal", "word")):
                case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemHealingWord").toLowerCase()):
                case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemGenericHealing").toLowerCase()):
                case (handler.itemNameIncludes("magic", "missile")):
                case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemMagicMissile").toLowerCase()):
                case (handler.itemNameIncludes("claw")):
                case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemClaw").toLowerCase()):
                case (handler.itemNameIncludes("bite")):
                case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemBite").toLowerCase()):
                case (handler.itemNameIncludes(game.i18n.format("AUTOANIM.animSleetstorm").toLowerCase())):
                case (handler.itemNameIncludes(game.i18n.format("AUTOANIM.animCallLightning").toLowerCase())):
                case (handler.itemNameIncludes(game.i18n.format("AUTOANIM.animWallOfForce").toLowerCase())):
                case (handler.itemNameIncludes(game.i18n.format("AUTOANIM.animWhirlwind").toLowerCase())):
                    type01 = "01";
                    break;
                default:
                    type01 = "Fire";
                    break;
            }
            switch (true) {
                case (handler.itemNameIncludes("claw")):
                case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemClaw").toLowerCase()):
                case (handler.itemNameIncludes("thunderwave")):
                case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemThunderwave").toLowerCase()):
                    tint = "Bright";
                    break;
                default:
                    tint = "Regular";
                    break;
            }
            color = "Blue";
            fireColor = 0x008FC0;
            tmColor = 0xBBDDEE;
            break;
        case (handler.itemColorIncludes("green")):
            switch (true) {
                case (handler.itemNameIncludes("laser")):
                case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemLaserSword").toLowerCase()):
                case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemLaserBlast").toLowerCase()):
                case (handler.itemNameIncludes("thunderwave")):
                case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemThunderwave").toLowerCase()):
                case (handler.itemNameIncludes("shatter")):
                case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemShatter").toLowerCase()):
                case (handler.itemNameIncludes("cure", "wound")):
                case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemCureWounds").toLowerCase()):
                case (handler.itemNameIncludes("heal", "word")):
                case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemHealingWord").toLowerCase()):
                case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemGenericHealing").toLowerCase()):
                case (handler.itemNameIncludes("magic", "missile")):
                case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemMagicMissile").toLowerCase()):
                case (handler.itemNameIncludes("claw")):
                case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemClaw").toLowerCase()):
                case (handler.itemNameIncludes("bite")):
                case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemBite").toLowerCase()):
                case (handler.itemNameIncludes(game.i18n.format("AUTOANIM.animSleetstorm").toLowerCase())):
                case (handler.itemNameIncludes(game.i18n.format("AUTOANIM.animCallLightning").toLowerCase())):
                case (handler.itemNameIncludes(game.i18n.format("AUTOANIM.animWallOfForce").toLowerCase())):
                case (handler.itemNameIncludes(game.i18n.format("AUTOANIM.animWhirlwind").toLowerCase())):
                    type01 = "01";
                    break;
                default:
                    type01 = "Fire";
                    break;
            }
            switch (true) {
                case (handler.itemNameIncludes("claw")):
                case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemClaw").toLowerCase()):
                case (handler.itemNameIncludes("thunderwave")):
                case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemThunderwave").toLowerCase()):
                    tint = "Bright";
                    break;
                case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemArrow").toLowerCase()):
                case (handler.itemNameIncludes("bow")):
                case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemLongbow").toLowerCase()):
                case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemShortbow").toLowerCase()):
                    tint = "Glowing";
                    break;
                default:
                    tint = "Regular";
                    break;
            }
            switch (true) {
                case (handler.itemNameIncludes("disintegrate")):
                    color = "Green01";
                    break;
                default:
                    color = "Green";
                    break;
            }
            fireColor = 0x60EA01;
            tmColor = 0x59E81F;
            break;
        case handler.itemColorIncludes("grey"):
            type01 = "01";
            color = "Grey";
            break;
        case (handler.itemColorIncludes("orange")):
            switch (true) {
                case (handler.itemNameIncludes("laser")):
                case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemLaserSword").toLowerCase()):
                case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemLaserBlast").toLowerCase()):
                case (handler.itemNameIncludes("thunderwave")):
                case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemThunderwave").toLowerCase()):
                case (handler.itemNameIncludes("shatter")):
                case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemShatter").toLowerCase()):
                case (handler.itemNameIncludes("claw")):
                case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemClaw").toLowerCase()):
                case (handler.itemNameIncludes("bite")):
                case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemBite").toLowerCase()):
                case (handler.itemNameIncludes(game.i18n.format("AUTOANIM.animWallOfForce").toLowerCase())):
                case (handler.itemNameIncludes(game.i18n.format("AUTOANIM.animWhirlwind").toLowerCase())):
                    type01 = "01";
                    break;
                default:
                    type01 = "Fire";
                    break;
            }
            switch (true) {
                case (handler.itemNameIncludes("claw")):
                case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemClaw").toLowerCase()):
                case (handler.itemNameIncludes("thunderwave")):
                case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemThunderwave").toLowerCase()):
                    tint = "Bright";
                    break;
                default:
                    tint = "Regular";
                    break;
            }
            color = "Orange";
            fireColor = 0xF18A07;
            tmColor = 0xFF9309;
            break;
        case (handler.itemColorIncludes("pink")):
            switch (true) {
                case (handler.itemNameIncludes("laser")):
                case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemLaserSword").toLowerCase()):
                case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemLaserBlast").toLowerCase()):
                    type01 = "01";
                    break;
                default:
                    type01 = "Fire";
                    break;
            }
            tint = "Regular";
            color = "Pink";
            fireColor = 0xD2049A;
            tmColor = 0xD2049A;
            break;
        case (handler.itemColorIncludes("purple")):
            switch (true) {
                case (handler.itemNameIncludes("laser")):
                case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemLaserSword").toLowerCase()):
                case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemLaserBlast").toLowerCase()):
                case (handler.itemNameIncludes("thunderwave")):
                case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemThunderwave").toLowerCase()):
                case (handler.itemNameIncludes("shatter")):
                case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemShatter").toLowerCase()):
                case (handler.itemNameIncludes("cure", "wound")):
                case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemCureWounds").toLowerCase()):
                case (handler.itemNameIncludes("heal", "word")):
                case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemHealingWord").toLowerCase()):
                case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemGenericHealing").toLowerCase()):
                case (handler.itemNameIncludes("magic", "missile")):
                case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemMagicMissile").toLowerCase()):
                case (handler.itemNameIncludes("claw")):
                case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemClaw").toLowerCase()):
                case (handler.itemNameIncludes("bite")):
                case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemBite").toLowerCase()):
                case handler.itemNameIncludes("eldritch blast"):
                case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemEldritchBlast").toLowerCase()):
                case (handler.itemNameIncludes(game.i18n.format("AUTOANIM.animSleetstorm").toLowerCase())):
                case (handler.itemNameIncludes(game.i18n.format("AUTOANIM.animCallLightning").toLowerCase())):
                case (handler.itemNameIncludes(game.i18n.format("AUTOANIM.animWallOfForce").toLowerCase())):
                case (handler.itemNameIncludes(game.i18n.format("AUTOANIM.animWhirlwind").toLowerCase())):
                    type01 = "01";
                    break;
                default:
                    type01 = "Fire";
                    break;
            }
            switch (true) {
                case (handler.itemNameIncludes("lasersword")):
                case (handler.itemNameIncludes("laser")):
                case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemLaserSword").toLowerCase()):
                case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemLaserBlast").toLowerCase()):
                case (handler.itemNameIncludes("bite")):
                case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemBite").toLowerCase()):
                case (handler.itemNameIncludes("magic", "missile")):
                case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemMagicMissile").toLowerCase()):
                case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemEldritchBlast").toLowerCase()):
                case (handler.itemNameIncludes(game.i18n.format("AUTOANIM.animSleetstorm").toLowerCase())):
                case (handler.itemNameIncludes("fire bolt")):
                case (handler.itemNameIncludes("scorching ray")):
                    tint = "Regular";
                    break;
                case (handler.itemNameIncludes("claw")):
                case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemClaw").toLowerCase()):
                    tint = "Bright";
                    break;
                default:
                    tint = "Dark";
                    break;
            }
            color = "Purple";
            fireColor = 0x8B00C0;
            tmColor = 0xFF09E1;
            break;
        case (handler.itemColorIncludes("random")):
            type01 = "01";
            tint = "Regular";
            color = random_color(items);
            break;
        case (handler.itemColorIncludes("red")):
            switch (true) {
                case (handler.itemNameIncludes("laser")):
                case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemLaserSword").toLowerCase()):
                case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemLaserBlast").toLowerCase()):
                case (handler.itemNameIncludes("thunderwave")):
                case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemThunderwave").toLowerCase()):
                case (handler.itemNameIncludes("shatter")):
                case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemShatter").toLowerCase()):
                case (handler.itemNameIncludes("cure", "wound")):
                case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemCureWounds").toLowerCase()):
                case (handler.itemNameIncludes("claw")):
                case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemClaw").toLowerCase()):
                case (handler.itemNameIncludes("bite")):
                case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemBite").toLowerCase()):
                case (handler.itemNameIncludes(game.i18n.format("AUTOANIM.animCallLightning").toLowerCase())):
                case (handler.itemNameIncludes(game.i18n.format("AUTOANIM.animWallOfForce").toLowerCase())):
                    type01 = "01";
                    break;
                default:
                    type01 = "Fire";
                    break;
            }
            switch (true) {
                case (handler.itemNameIncludes("fire", "bolt")):
                case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemFireBolt").toLowerCase()):
                case (handler.itemNameIncludes("thunderwave")):
                case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemThunderwave").toLowerCase()):
                    tint = "Dark";
                    break;
                default:
                    tint = "Regular";
            }
            color = "Red";
            fireColor = 0xD20404;
            tmColor = 0xBB1414;
            break;
        case (handler.itemColorIncludes("yellow")):
            switch (true) {
                case (handler.itemNameIncludes("cure", "wound")):
                case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemCureWounds").toLowerCase()):
                case (handler.itemNameIncludes("heal", "word")):
                case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemHealingWord").toLowerCase()):
                case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemGenericHealing").toLowerCase()):
                case (handler.itemNameIncludes("magic", "missile")):
                case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemMagicMissile").toLowerCase()):
                case (handler.itemNameIncludes("claw")):
                case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemClaw").toLowerCase()):
                case (handler.itemNameIncludes("bite")):
                case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemBite").toLowerCase()):
                case (handler.itemNameIncludes(game.i18n.format("AUTOANIM.animCallLightning").toLowerCase())):
                case (handler.itemNameIncludes(game.i18n.format("AUTOANIM.animWallOfForce").toLowerCase())):
                    type01 = "01";
                    break;
                default:
                    type01 = "Fire";
                    break;
            }

            switch (true) {
                case (handler.itemNameIncludes("claw")):
                case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemClaw").toLowerCase()):
                    tint = "Bright";
                    break;
                default:
                    tint = "Regular";
                    break;
            }
            color = "Yellow";
            fireColor = 0xCFD204;
            tmColor = 0xE2F104;
            break;
        case (handler.itemColorIncludes("black")):
            color = "Black";
    }
    //console.log(tmColor);

    return { type01, tint, color, fireColor, tmColor };

}

export default colorChecks;