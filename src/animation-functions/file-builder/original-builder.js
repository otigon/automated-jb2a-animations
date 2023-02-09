//import { JB2APATREONDB } from "../../database/jb2a-patreon-database.js";
//import { JB2AFREEDB } from "../../database/jb2a-free-database.js";
import { aaDatabase } from "../../database/databaseSort.js";

export async function buildFile(getMeta, dbType, name, animationType, animationVariant, animationColor, customPath) {
    if (!dbType && !customPath) {return false}
    let file;
    //let msFile;
    let color;
    let returnFile;
    let fileData;
    //let metadata;

    if (customPath) {
        file = customPath;
        fileData = customPath;
        //msFile = customPath;
        //if (getMeta) {
            //fileData = customPath;
            //metadata = await getVideoDimensionsOf(fileData);
        //}    
    } else {
        //const jb2a = moduleIncludes("jb2a_patreon") === true ? JB2APATREONDB : JB2AFREEDB;
        const jb2a = aaDatabase;
        const path = name.replace(/melee|range|double/gi, function (x) {
            return "";
        });
        color = animationColor.replace(/\s+/g, '');
        const menuType = dbType;
        const type = animationType;
        if (!jb2a[type][menuType][path]) { return {}; }
        const variantArray = Object.keys(jb2a[type][menuType][path]);
        const variant = variantArray.some(el => animationVariant === el) ? animationVariant : variantArray[0];

        const colorArray = Object.keys(jb2a[type][menuType][path][variant]);
        let markerCheck = colorArray.indexOf("_markers");
        if (markerCheck !== -1) { colorArray.splice( markerCheck, 1)}
        if (animationColor === "random") {
            color = animationColor;
        } else {
            color = colorArray.some(el => color === el) ? color : colorArray[0];
        }

        file = color === "random" ? `autoanimations.${type}.${[menuType]}.${path}.${variant}` : `autoanimations.${type}.${[menuType]}.${path}.${variant}.${color}`;
        //validateVideoPath(type, menuType, path, variant, color)
        //msFile = color === "random" ? `autoanimations.${type}.${[menuType]}.${path}.02` : `autoanimations.${type}.${[menuType]}.${path}.02.${color}`;
        //let file = color === "random" ? `autoanimations.${type}.${path}.${variant}` : `autoanimations.${type}.${path}.${variant}.${color}`;
        //let msFile = color === "random" ? `autoanimations.${type}.${path}.02` : `autoanimations.${type}.${path}.02.${color}`;
        const returnArray = Object.keys(jb2a.return.weapon);
        returnFile = returnArray.some(el => path === el) ? `autoanimations.return.weapon.${path}.${variant}.${color}` : "";
        fileData = color === "random" ? jb2a[type]?.[menuType]?.[path]?.[variant]?.[Object.keys(jb2a[type]?.[menuType]?.[path]?.[variant] || {})[0]][0] : jb2a[type]?.[menuType]?.[path]?.[variant]?.[color]?.[0];
        //metadata = await getVideoDimensionsOf(fileData);
    }

    return { file, returnFile, fileData }
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

function validateVideoPath(type, menuType, path, variant, color) {
    debugger
    if (Sequencer.Database.getPathsUnder(`autoanimations.${type}.${[menuType]}.${path}.${variant}.${color}`, true)) {
        return `autoanimations.${type}.${[menuType]}.${path}.${variant}.${color}`;
    }

    if (Sequencer.Database.getPathsUnder(`autoanimations.${type}.${[menuType]}.${path}.${variant}`, true)) {
        return `autoanimations.${type}.${[menuType]}.${path}.${variant}`
    }

}
