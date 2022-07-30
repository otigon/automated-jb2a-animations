async function mergeVersion03(data) {
    let currentAutorec = data;
    
    const templateObject = currentAutorec.templates;
    if (templateObject) {
        const templateLength = Object.keys(templateObject).length;
        for (var i = 0; i < templateLength; i++) {
            templateObject[i].scaleX = templateObject[i].scale || 1;
            templateObject[i].scaleY = templateObject[i].scale || 1;
        }
    }
    const presetObject = currentAutorec.preset;
    if (presetObject) {
        const presetLength = Object.keys(presetObject).length;
        for (var i = 0; i < presetLength; i++) {
            if (presetObject[i].animation === "teleportation") {
                presetObject[i].measureType = "alternating";
                presetObject[i].custom02 = presetObject[i].custom ? true : false;
                presetObject[i].customPath02 = presetObject[i].custom ? presetObject[i].customPath : "";
                presetObject[i].subAnimation02 = presetObject[i].subAnimation ?? "mistystep";
                presetObject[i].variant = "01";
                presetObject[i].variant02 = "02";
                presetObject[i].color02 = presetObject[i].color ?? "blue";
                presetObject[i].scale02 = presetObject[i].scale || 1;
            }
        }
    }
    currentAutorec.version = 3;
    return currentAutorec;
}

export {mergeVersion03}