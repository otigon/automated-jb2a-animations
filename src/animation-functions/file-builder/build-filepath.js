import { JB2APATREONDB } from "../databases/jb2a-patreon-database.js";
import { JB2AFREEDB } from "../databases/jb2a-free-database.js";

export async function buildFile(getMeta, name, animationType, animationVariant, animationColor) {
    function moduleIncludes(test) {
        return !!game.modules.get(test);
    }
    const jb2a = moduleIncludes("jb2a_patreon") === true ? JB2APATREONDB : JB2AFREEDB;
    const path = name.replace(/melee|range|double/gi, function(x) {
        return "";
    });
    const type = animationType;

    const variantArray = Object.keys(jb2a[path][type]);
    const variant = variantArray.some(el => animationVariant.includes(el)) ? animationVariant : variantArray[0];

    let color = animationColor.replace(/\s+/g, '');
    const colorArray = Object.keys(jb2a[path][type][variant]);
    if (animationColor === "random") { 
        color = animationColor;
    } else {
        color = colorArray.some(el => color.includes(el)) ? color : colorArray[0];
    }

    const file = color === "random" ? `autoanimations.${path}.${type}.${variant}` : `autoanimations.${path}.${type}.${variant}.${color}`;
    const msFile = color === "random" ? `autoanimations.${path}.${type}.02` : `autoanimations.${path}.${type}.02.${color}`;
    const returnFile = `autoanimations.${path}.return.${variant}.${color}`

    let fileData;
    let metadata;
    if (getMeta) {
        fileData = color === "random" ? jb2a[path][type][variant][Object.keys(jb2a[path][type][variant])[0]][0] : jb2a[path][type][variant][color][0];
        metadata = await getVideoDimensionsOf(fileData);
    }
    console.log(fileData)
    return {file, msFile, metadata, returnFile, fileData}
}

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
