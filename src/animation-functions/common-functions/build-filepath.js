//import { JB2APATREONDB } from "../jb2a-patreon-database.js";
//import { JB2AFREEDB } from "../jb2a-free-database.js";
//import getVideoDimensionsOf from ".../canvas-animation/video-metadata.js";

export async function buildWeaponFile(jb2a, itemName, handler) {

    let color = handler.color === "a1" || !handler.color ? handler.defaultColor : handler.color
    //if (!color || color === "a1") { color = handler.defaultColor }
    let uaStrikeType = handler.uaStrikeType;
    let filePath;
    console.log("Build a file Item Name is " + itemName)
    switch (itemName) {
        case "1hs":
        case "2hs":
        case "1hp":
        case "2hp":
        case "1hb":
        case "2hb":
            filePath = `autoanimations.genericmelee.${itemName}`;
            break;
        case 'unarmedstrike':
        case 'flurryofblows':
            filePath = handler.color === "random" ? `autoanimations.${itemName}.${uaStrikeType}` : `autoanimations.${itemName}.${uaStrikeType}.${color}`;
            break;
        default:
            filePath = handler.color === "random" ? `autoanimations.${itemName}` : `autoanimations.${itemName}.${color}`
    }
    console.log(filePath)
    //console.log(filePath[Object.keys(filePath)[0]])
    //let videoData = await getVideoDimensionsOf(filePath[Object.keys(filePath)[0]]);//get video metadata
    let data = {
        file: filePath,
        loops: handler.animationLoops,
        loopDelay: handler.loopDelay,
        level: handler.animLevel,
        //metadata: videoData,
    }
    return data;
}

export async function buildRangedFile(jb2a, itemName, handler) {

    let color = handler.color
    let filePath;
    let fileData;
    let dmgType = handler.rangedOptions?.rangeDmgType;
    let variant = handler.spellVariant ?? "01";
    let dtvar = handler.dtvar ?? "01";
    switch (itemName) {
        case "scorchingray":
            filePath = handler.color === "random" ? `autoanimations.${itemName}.${handler.spellVariant}` : `autoanimations.${itemName}.${handler.spellVariant}.${color}`;
            break;
        case 'boulder':
        case 'siege':
        case 'rangejavelin':
        case 'rangesling':
        case 'rangehammer':
            filePath = `autoanimations.${itemName}`;
            break;
        case "rangedagger":
            filePath = `autoanimations.${itemName}.${dtvar}`;
            break;
        case "rangehandaxe":
        case "rangespear":
            filePath = `autoanimations.${itemName}.01`;
            break;
        case 'arrow':
        case 'bolt':
        case 'bullet':
            filePath = handler.color === "random" ? `autoanimations.${itemName}.${dmgType}` : `autoanimations.${itemName}.${dmgType}.${color}`;
            break;
        default:
            if (!handler.color || handler.color === "a1") { color = handler.defaultColor }
            filePath = handler.color === "random" ? `autoanimations.${itemName}` : `autoanimations.${itemName}.${color}`;
    }
    /*
    if (itemName === "scorchingray") {
        if (color === "random") {
            filePath = jb2a[itemName][variant];
            fileData = filePath[Object.keys(jb2a[itemName][variant])[0]]
        } else {
            filePath = `autoanimations.${itemName}.${handler.spellVariant}.${color}` || jb2a[itemName][variant][Object.keys(jb2a[itemName][variant])[0]];
            fileData = filePath;
        }
    } else {
        if (color === "random") {
            filePath = jb2a[itemName];
            fileData = filePath[Object.keys(jb2a[itemName])[0]]
        } else {
            filePath = `autoanimations.${itemName}.${color}`;
            fileData = filePath;
        }
    }
    */
    //let videoData = await getVideoDimensionsOf(fileData['30ft']);//get video metadata
    let data = {
        file: filePath,
        loops: handler.animationLoops,
        loopDelay: handler.loopDelay,
        level: handler.animLevel,
        //metadata: videoData,
    }
    //console.log(data)
    return data;
    console.warn(filePath)
}

export async function buildAfterFile(jb2a, handler) {
    let color = handler.explosionColor;
    let variant = handler.explosionVariant;
    let impactVariant = handler.impactVar;
    //console.log(handler)
    let filePath;
    let fileData;
    switch (true) {
        case variant === "impact":
            if (impactVariant === "boulder") {
                filePath = `autoanimations.explosion.${variant}.${impactVariant}`;
                fileData = jb2a['explosion'][variant][impactVariant];
            } else {
                filePath = handler.explosionColor === "random" ? `autoanimations.explosion.${variant}.${impactVariant}` : `autoanimations.explosion.${variant}.${impactVariant}.${color}`;
                fileData = jb2a['explosion'][variant][impactVariant][Object.keys(jb2a['explosion'][variant][impactVariant])[0]];
            }
            break;
        case variant === "antilife-shell":
            filePath = `autoanimations.explosion.antilifeshell`;
            fileData = jb2a['explosion']['antilifeshell'];
            break;
        default:
            filePath = handler.explosionColor === "random" ? `autoanimations.explosion.${handler.explosionVariant}` : `autoanimations.explosion.${handler.explosionVariant}.${handler.explosionColor}`;
            fileData = handler.explosionColor === "random" ? jb2a['explosion'][variant][Object.keys(jb2a['explosion'][variant])[0]] : jb2a['explosion'][variant][color]
    }
    /*
    if (variant === "impact") {
        if (impactVariant === "boulder") {
            filePath = `autoanimations.explosion.${variant}.${impactVariant}`;
            fileData = jb2a['explosion'][variant][impactVariant];
        } else {
            filePath = handler.explosionColor === "random" ? `autoanimations.explosion.${variant}.${impactVariant}` : `autoanimations.explosion.${variant}.${impactVariant}.${color}`;
            fileData = jb2a['explosion'][variant][impactVariant][Object.keys(jb2a['explosion'][variant][impactVariant])[0]];
        }
    } else {
        filePath = handler.explosionColor === "random" ? `autoanimations.explosion.${handler.explosionVariant}` : `autoanimations.explosion.${handler.explosionVariant}.${handler.explosionColor}`;
        fileData = handler.explosionColor === "random" ? jb2a['explosion'][variant][Object.keys(jb2a['explosion'][variant])[0]] : jb2a['explosion'][variant][color]
    }
    */
    //console.warn(filePath)
    let videoData = await getVideoDimensionsOf(fileData);//get video metadata
    let scale = (canvas.grid.size * (handler.explosionRadius / canvas.dimensions.distance)) / videoData.width;
    //let vidWidth = videoData.width;
    let data = {
        file: filePath,
        scale: scale,//Scale based on pixels and input
        loops: handler.explosionLoops,
        delay: handler.explosionDelay,//Tweak the delay for explosion
        level: handler.explosionLevel, //Boolean: above or under tokens
        metadata: videoData,
    }
    //console.log(data);
    return data;
}

export async function buildTokenAnimationFile(jb2a, itemName, handler) {
    let color = handler.color;
    let variant = handler.spellVariant ?? "01";
    let filePath;
    let filePath2;
    let fileData;
    console.log("Item Name for file build is " + itemName)
    switch (itemName) {
        case "generichealing":
            if (!handler.color || handler.color === "a1") { color = handler.defaultColor }
            filePath = color === "random" ? `autoanimations.${itemName}.${variant}` : `autoanimations.${itemName}.${variant}.${color}`;
            fileData = jb2a["generichealing"][variant][Object.keys(jb2a["generichealing"][variant])[0]]
            break;
        case "mistystep":
            if (!handler.color || handler.color === "a1") { color = handler.defaultColor }
            filePath = color === "random" ? `autoanimations.${itemName}.01` : `autoanimations.${itemName}.01.${color}`;
            filePath2 = color === "random" ? `autoanimations.${itemName}.02` : `autoanimations.${itemName}.02.${color}`;
            fileData = jb2a[itemName]["01"][Object.keys(jb2a[itemName]["01"])[0]]
            break;
        default:
            if (!handler.color || handler.color === "a1") { color = handler.defaultColor }
            filePath = color === "random" ? `autoanimations.${itemName}` : `autoanimations.${itemName}.${color}`;
            fileData = jb2a[itemName][Object.keys(jb2a[itemName])[0]]
            console.log(fileData)
            break;
    }
    let videoData = await getVideoDimensionsOf(fileData);//get video metadata
    let data = {
        file: filePath,
        file2: filePath2,
        loops: handler.animationLoops,
        loopDelay: handler.loopDelay,
        level: handler.animLevel,
        metadata: videoData,
    }
    console.log(data)
    return data;
}

export async function buildTemplateFile(jb2a, handler) {
    let flags = handler.templates;
    let filePath;
    let fileData;
    switch (handler.templates?.tempAnim) {
        case "fogcloud":
            filePath = `autoanimations.templates.${flags.tempType}.${flags.tempAnim}`;
            fileData = jb2a['templates'][flags.tempType][flags.tempAnim];
            break;
        default:
            filePath = flags.tempColor === "random" ? `autoanimations.templates.${flags.tempType}.${flags.tempAnim}` : `autoanimations.templates.${flags.tempType}.${flags.tempAnim}.${flags.tempColor}`;
            fileData = flags.tempColor === "random" ? jb2a['templates'][flags.tempType][flags.tempAnim][Object.keys(jb2a['templates'][flags.tempType][flags.tempAnim])[0]] : jb2a['templates'][flags.tempType][flags.tempAnim][flags.tempColor];
    }
    let videoData = await getVideoDimensionsOf(fileData);//get video metadata

    let data = {
        file: filePath,
        file2: fileData,
        loops: handler.templates.tempLoop,
        delay: handler.templates.loopDelay,
        level: handler.animLevel,
        metadata: videoData
    }
    console.log(data)
    return data;
}

var randomProperty = function (obj) {
    var keys = Object.keys(obj);
    var keyLength = keys.length;
    var ranKey = Math.floor(Math.random() * keyLength);
    return keys[ranKey];
};

function getVideoDimensionsOf(url) {
    return new Promise(resolve => {
        // create the video element
        const video = document.createElement('video');
        video.preload = "metadata";

        // place a listener on it
        video.addEventListener("loadedmetadata", function () {
            // retrieve dimensions
            const height = this.videoHeight;
            const width = this.videoWidth;
            const duration = this.duration
            // send back result
            resolve({ height, width, duration });
        }, false);
        video.src = url;

    });
}