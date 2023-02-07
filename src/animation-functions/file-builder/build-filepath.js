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
        filePath: aaDatabase[dbType][cleanType]?.[cleanAnimation]?.[cleanVariant]?.[cleanColor][0],
        // File contains the Database path structure to send to Sequencer
        file: color === "random" 
            ? `autoanimations.${dbType}.${[cleanType]}.${cleanAnimation}.${cleanVariant}` 
            : `autoanimations.${dbType}.${[cleanType]}.${cleanAnimation}.${cleanVariant}.${cleanColor}`,
        // ReturnFile contains the Database path for the return animation to send to Sequencer if it exists, otherwise false
        returnFile: returnArray.find(el => cleanAnimation === el) 
            ? color === "random"
            ? `autoanimations.return.weapon.${cleanAnimation}.${cleanVariant}`
            : `autoanimations.return.weapon.${cleanAnimation}.${cleanVariant}.${cleanColor}`
            : false,
        // Cleaned properties
        cleanProperties: {
            cleanType, cleanAnimation, cleanVariant, cleanColor
        },
        // Original properties
        originalProperties: {
            menuType, animation, variant, color
        }
    }

    function getCleanProperty(path, prop) {
        let newArray = Object.keys(path ?? {});
        return newArray.find(el => prop === el) ? prop : newArray[0] !== "_markers" ? newArray[0] : newArray[1]
    }
    function validateVideoPath(dbType, type, animation, variant, color) {
        debugger
        let dbPath = color === "random" ? `autoanimations.${dbType}.${[type]}.${animation}.${variant}` : `autoanimations.${dbType}.${[type]}.${animation}.${variant}.${color}`;
        if (Sequencer.Database.getPathsUnder(dbPath, true)) {
            return true;
        } else {
            return false;
        }
    }    
}
