//import { JB2APATREONDB } from "../jb2a-patreon-database.js";
//import { JB2AFREEDB } from "../jb2a-free-database.js";
//import getVideoDimensionsOf from ".../canvas-animation/video-metadata.js";

export function buildWeaponFile(jb2a, itemName, flags) {

    let color = flags.color
    let dmgType = flags.rangedOptions?.rangeDmgType;
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
        default:
            filePath = jb2a[itemName][color] || jb2a[itemName][Object.keys(jb2a[itemName])[0]]
    }
    return filePath;
    console.warn(filePath)
}

export async function buildSpellFile(jb2a, itemName, flags) {

    let color = flags.color

    let filePath;
    let variant = flags.spellVar ?? "01";
    if (itemName === "scorchingray") {
        if (color === "random") { filePath = jb2a[itemName][variant] } else {
            filePath = jb2a[itemName][variant][color] || jb2a[itemName][variant][Object.keys(jb2a[itemName][variant])[0]]
        }
    } else {
        if (color === "random") { filePath = jb2a[itemName] } else {
            filePath = jb2a[itemName][color] || jb2a[itemName][Object.keys(jb2a[itemName])[0]];
        }
    }
    let videoData = await getVideoDimensionsOf(filePath['30']);//get video metadata
    let level = flags.animLevel;
    let loops = flags.options.loops;
    let data = {
        file: filePath,
        loops: flags.options.loops,
        loopDelay: flags.options.loopDelay,
        level: flags.animLevel,
        metadata: videoData,
    }
    //console.log(data)
    return data;
    console.warn(filePath)
}

export async function buildExplosionFile(jb2a, flags) {
    let color = flags.explodeColor;
    let variant = flags.explodeVariant;
    let impactVariant = flags.impactVar
    let filePath;
    if (variant === "impact") {
        if (impactVariant === "boulder") {
            filePath = jb2a['explosion'][variant][impactVariant];
        } else {
            filePath = jb2a['explosion'][variant][impactVariant][color];
        }
    } else {
        filePath = jb2a['explosion'][variant][color]
    }
    console.warn(filePath)
    let videoData = await getVideoDimensionsOf(filePath);//get video metadata
    let scale = (canvas.grid.size * (flags.explodeRadius / canvas.dimensions.distance)) / videoData.width;
    let delay = flags.explodeDelay;
    let level = flags.exAnimLevel;
    //let vidWidth = videoData.width;
    let data = {
        file: filePath,
        scale: scale,//Scale based on pixels and input
        delay: delay,//Tweak the delay for explosion
        level: level, //Boolean: above or under tokens
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