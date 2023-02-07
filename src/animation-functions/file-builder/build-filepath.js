import { aaDatabase } from "../../database/databaseSort.js"

export async function buildFile(dbType, video, custom = true) {
    debugger
    const {menuType, animation, variant, color, customPath} = video;

    if (!dbType && (!customPath || !custom)) { return false }

    if (customPath) {
        return { file: customPath, fileData: customPath }
    }

    // Gathers all the DB path components and reverts them to defaults if there are errors
    const cleanType = getCleanProperty(aaDatabase[dbType], menuType);
    const cleanAnimation = getCleanProperty(aaDatabase[dbType][cleanType], animation);
    const cleanVariant = getCleanProperty(aaDatabase[dbType][cleanType][cleanAnimation], variant);
    const cleanColor = getCleanProperty(aaDatabase[dbType][cleanType][cleanAnimation][cleanVariant], color);

    // Gets the array or Return weapon keys from the database
    const returnArray = Object.keys(aaDatabase.return.weapon);
    
    return {
        // FilePath will get the actual filepath. This is only used in Static and Templates
        filePath: color === "random" 
            ? aaDatabase[dbType][cleanType]?.[cleanAnimation]?.[cleanVariant][0][0]
            : aaDatabase[dbType][cleanType]?.[cleanAnimation]?.[cleanVariant]?.[cleanColor][0],
        // File contains the Database path structure to send to Sequencer
        file: color === "random" 
            ? `autoanimations.${dbType}.${[cleanType]}.${cleanAnimation}.${cleanVariant}` 
            : `autoanimations.${dbType}.${[cleanType]}.${cleanAnimation}.${cleanVariant}.${cleanColor}`,
        // ReturnFile contains the Database path for the return animation to send to Sequencer
        returnFile: returnArray.some(el => cleanAnimation === el) 
            ? `autoanimations.return.weapon.${cleanAnimation}.${cleanVariant}.${cleanColor}` 
            : false,
        cleanProperties: {
            cleanType, cleanAnimation, cleanVariant, cleanColor
        },
        originalProperties: {
            menuType, animation, variant, color
        }
    }

    function getCleanProperty(path, prop) {
        let newArray = Object.keys(path ?? {});
        if (newArray.length) {
            clearMarker(newArray)
        }
        return cleanProperty(newArray, prop)
    }
    // If there is a _markers in this array, remove it. Mainly used for defaulting Patreon animations to Free
    function clearMarker(inArray) {
        let markerCheck = inArray.indexOf("_markers");
        if (markerCheck !== -1) {
            inArray.splice(markerCheck, 1)
        }
    }
    // If the set property does not exist, use the first one in the array
    function cleanProperty(inArray, prop) {
        return inArray.some(el => prop === el) ? prop : inArray[0]
    }
}
