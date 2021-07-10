//import { JB2APATREONDB } from "../jb2a-patreon-database.js";
//import { JB2AFREEDB } from "../jb2a-free-database.js";
//import getVideoDimensionsOf from ".../canvas-animation/video-metadata.js";

export async function buildWeaponFile(jb2a, itemName, handler) {

    let color = handler.color
    let dmgType = handler.rangedOptions?.rangeDmgType;
    let uaStrikeType = handler.uaStrikeType;
    let filePath;
    console.log("Build a file Item Name is " + itemName)
    switch (itemName) {
        case 'boulder':
        case 'siege':
        case 'rangejavelin':
        case 'rangesling':
        case 'rangehammer':
            filePath = jb2a[itemName]
            break;
        case 'arrow':
        case 'bolt':
        case 'bullet':
            filePath = jb2a[itemName][dmgType][color] || jb2a[itemName][dmgType][Object.keys(jb2a[itemName][dmgType])[0]]
            break;
        case 'snipe':
        case 'lasershot':
            filePath = jb2a[itemName][color] || jb2a[itemName][Object.keys(jb2a[itemName][dmgType])[0]]
            break;
        case 'unarmedstrike':
        case 'flurryofblows':
            filePath = jb2a[itemName][uaStrikeType];
            break;
        default:
            filePath = jb2a[itemName] || jb2a[itemName][Object.keys(jb2a[itemName])[0]]
    }
    console.log(filePath)
    console.log(filePath[Object.keys(filePath)[0]])
    let videoData = await getVideoDimensionsOf(filePath[Object.keys(filePath)[0]]);//get video metadata
    let data = {
        file: filePath,
        loops: handler.animationLoops,
        loopDelay: handler.loopDelay,
        level: handler.animLevel,
        metadata: videoData,
    }
    return data;
}

export async function buildRangedFile(jb2a, itemName, handler) {

    let color = handler.color
    let filePath;
    let fileData;
    let dmgType = handler.rangedOptions?.rangeDmgType;
    let variant = handler.spellVariant ?? "01";
    switch (itemName) {
        case "scorchingray":
            filePath = `autoanimations.${itemName}.${handler.spellVariant}.${color}`;
            break;
        case 'boulder':
        case 'siege':
        case 'rangejavelin':
        case 'rangesling':
        case 'rangehammer':
            filePath = `autoanimations.${itemName}`;
            break;
        case 'arrow':
        case 'bolt':
        case 'bullet':
            filePath = `autoanimations.${itemName}.${dmgType}.${color}`;
            break;
        default:
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

export async function buildExplosionFile(jb2a, handler) {
    let color = handler.explosionColor;
    let variant = handler.explosionVariant;
    let impactVariant = handler.impactVar
    //console.log(handler)
    let filePath;
    let fileData;
    if (variant === "impact") {
        if (impactVariant === "boulder") {
            filePath = jb2a['explosion'][variant][impactVariant];
        } else {
            filePath = jb2a['explosion'][variant][impactVariant][color];
        }
    } else {
        filePath = handler.explosionColor === "random" ? `autoanimations.explosion.${handler.explosionVariant}` : `autoanimations.explosion.${handler.explosionVariant}.${handler.explosionColor}`;
        fileData = handler.explosionColor === "random" ? jb2a['explosion'][variant][Object.keys(jb2a['explosion'][variant])[0]] : jb2a['explosion'][variant][color]
    }
    //console.warn(filePath)
    let videoData = await getVideoDimensionsOf(fileData);//get video metadata
    let scale = (canvas.grid.size * (handler.explosionRadius / canvas.dimensions.distance)) / videoData.width;
    //let vidWidth = videoData.width;
    let data = {
        file: filePath,
        scale: scale,//Scale based on pixels and input
        delay: handler.explosionDelay,//Tweak the delay for explosion
        level: handler.explosionLevel, //Boolean: above or under tokens
        metadata: videoData,
    }
    //console.log(data);
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