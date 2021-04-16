function colorChecks(handler) {
    let type01 = "default";
    let tint = "default";
    let color = "default";
    let fireColor = "pass";
    let tmColor = "default";
    switch (true) {
        case (handler.itemColorIncludes("orange pink")):
            tmColor = 0xC1005B;
            break;
        case (handler.itemColorIncludes("purple blue")):
            tmColor = 0x60B2FF;
            break;
        case (handler.itemColorIncludes("blue yellow")):
        case handler.itemColorIncludes("yellow blue"):
            tmColor = 0xACC5C5;
            break;
        case (handler.itemColorIncludes("purple teal")):
            tmColor = 0xC38CDC;
            break;
        case (handler.itemColorIncludes("dark blue")):
            color = "Blue";
        case (handler.itemColorIncludes("dark purple")):
            tmColor = 0xAE00AE;
            break;
        case (handler.itemColorIncludes("dark green")):
            tmColor = 0x187C00;
            break;
        case (handler.itemColorIncludes("dark red")):
            tmColor = 0x8E0000;
            break;
        case (handler.itemColorIncludes("blue")):
            fireColor = 0x008FC0;
            tmColor = 0xBBDDEE;
            break;
        case (handler.itemColorIncludes("green")):
            fireColor = 0x60EA01;
            tmColor = 0x59E81F;
            break;
        case (handler.itemColorIncludes("orange")):
            fireColor = 0xF18A07;
            tmColor = 0xFF9309;
            break;
        case (handler.itemColorIncludes("pink")):
            fireColor = 0xD2049A;
            tmColor = 0xD2049A;
            break;
        case (handler.itemColorIncludes("purple")):
            fireColor = 0x8B00C0;
            tmColor = 0xFF09E1;
            break;
        case (handler.itemColorIncludes("random")):
            type01 = "01";
            tint = "Regular";
            color = random_color(items);
            break;
        case (handler.itemColorIncludes("red")):
            fireColor = 0xD20404;
            tmColor = 0xBB1414;
            break;
        case (handler.itemColorIncludes("yellow")):
            fireColor = 0xCFD204;
            tmColor = 0xE2F104;
            break;
    }
    //console.log(tmColor);

    return { type01, tint, color, fireColor, tmColor };

}

export default colorChecks;