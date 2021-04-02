function colorChecks(handler) {
    let type01 = "01";
    let tint = "Regular";
    let color;
    switch (true) {
        case (handler.itemNameIncludes("laser")):
            color = "Blue";
            break;
        default:
            color = "White";
    }
    let fireColor = "pass";
    let tmColor;
    switch (true) {
        case (handler.itemColorIncludes("white")):
            type01 = "01";
            tint = "Regular";
            color = "White";
            break;
        case (handler.itemColorIncludes("blue")):
            switch (true) {
                case (handler.itemNameIncludes("laser")):
                case (handler.itemNameIncludes("thunderwave")):
                case (handler.itemNameIncludes("shatter")):
                case (handler.itemNameIncludes("cure", "wound")):
                case (handler.itemNameIncludes("magic", "missile")):
                    type01 = "01";
                    break;
                default:
                    type01 = "Fire";
                    break;
            }
            switch (true) {
                case (handler.itemNameIncludes("claw")):
                case (handler.itemNameIncludes("thunderwave")):
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
        case (handler.itemColorIncludes("dark", "purple")):
            tint = "Dark";
            color = "Purple";
            tmColor = 0xAE00AE;
            break;
        case (handler.itemColorIncludes("dark", "green")):
            tint = "Dark";
            color = "Green";
            tmColor = 0x187C00;
            break;
        case (handler.itemColorIncludes("dark", "red")):
            switch (true) {
                case (handler.itemNameIncludes("claw")):
                case (handler.itemNameIncludes("bite")):
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
        case (handler.itemColorIncludes("green")):
            switch (true) {
                case (handler.itemNameIncludes("laser")):
                case (handler.itemNameIncludes("thunderwave")):
                case (handler.itemNameIncludes("shatter")):
                case (handler.itemNameIncludes("cure", "wound")):
                case (handler.itemNameIncludes("magic", "missile")):
                    type01 = "01";
                    break;
                default:
                    type01 = "Fire";
                    break;
            }
            switch (true) {
                case (handler.itemNameIncludes("claw")):
                case (handler.itemNameIncludes("thunderwave")):
                    tint = "Bright";
                    break;
                case (handler.itemNameIncludes("arrow")):
                case (handler.itemNameIncludes("bow")):
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
        case (handler.itemColorIncludes("orange")):
            switch (true) {
                case (handler.itemNameIncludes("laser")):
                case (handler.itemNameIncludes("thunderwave")):
                case (handler.itemNameIncludes("shatter")):
                    type01 = "01";
                    break;
                default:
                    type01 = "Fire";
                    break;
            }
            switch (true) {
                case (handler.itemNameIncludes("claw")):
                case (handler.itemNameIncludes("thunderwave")):
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
                    type01 = "01";
                    break;
                default:
                    type01 = "Fire";
                    break;
            }
            tint = "Regular";
            color = "Pink";
            fireColor = 0xD2049A;
            break;
        case (handler.itemColorIncludes("purple")):
            switch (true) {
                case (handler.itemNameIncludes("laser")):
                case (handler.itemNameIncludes("thunderwave")):
                case (handler.itemNameIncludes("shatter")):
                case (handler.itemNameIncludes("cure", "wound")):
                case (handler.itemNameIncludes("magic", "missile")):
                    type01 = "01";
                    break;
                default:
                    type01 = "Fire";
                    break;
            }
            switch (true) {
                case (handler.itemNameIncludes("laser", "sword")):
                case (handler.itemNameIncludes("bite")):
                case (handler.itemNameIncludes("magic", "missile")):
                    tint = "Regular";
                    break;
                case (handler.itemNameIncludes("claw")):
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
                case (handler.itemNameIncludes("thunderwave")):
                case (handler.itemNameIncludes("shatter")):
                case (handler.itemNameIncludes("cure", "wound")):
                    type01 = "01";
                    break;
                default:
                    type01 = "Fire";
                    break;
            }
            switch (true) {
                case (handler.itemNameIncludes("fire", "bolt")):
                case (handler.itemNameIncludes("thunderwave")):
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
                case (handler.itemNameIncludes("magic", "missile")):
                    type01 = "01";
                    break;
                default:
                    type01 = "Fire";
                    break;
            }

            switch (true) {
                case (handler.itemNameIncludes("claw")):
                    tint = "Bright";
                    break;
                default:
                    tint = "Regular";
                    break;
            }
            color = "Yellow";
            fireColor = 0xCFD204;
            tmColor = 0xFF0000;
            break;
        case (handler.itemColorIncludes("orange", "pink")):
            tint = "Regular";
            color = "OrangePink";
            tmColor = 0xC1005B;
            break;
        case (handler.itemColorIncludes("purple", "blue")):
            tint = "Regular";
            color = "PurpleBlue";
            tmColor = 0x00AFC1;
            break;
        case (handler.itemColorIncludes("blue", "yellow")):
            tint = "Regular";
            color = "BlueYellow";
            tmColor = 0xACC5C5;
            break;
        case (handler.itemColorIncludes("purple", "teal")):
            tint = "Regular";
            color = "PurpleTeal";
            tmColor = 0xC38CDC;
            break;


    }

    return { type01, tint, color, fireColor, tmColor };

}

export default colorChecks;