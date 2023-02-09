import { aaDatabase } from "../../database/databaseSort.js";
import { debug } from "../../constants/constants.js";

export async function buildFile(dbType, video, custom = true, options = {}) {
    const {menuType, animation, variant, color, customPath} = video;

    if (!dbType && (!customPath || !custom)) { return false }

    if (customPath) {
        return { file: customPath, fileData: customPath }
    }

    let cleanType = menuType;
    let cleanAnimation = animation;
    let cleanVariant = variant;
    let cleanColor = color;

    // If the database path cannot be validated, play animation with defaults
    if (!validateVideoPath(dbType, menuType, animation, variant, color)) {
        debug("Error found while building database path, reverting a default")
        cleanType = getCleanProperty(aaDatabase[dbType], menuType);
        cleanAnimation = getCleanProperty(aaDatabase[dbType][cleanType], animation);
        cleanVariant = getCleanProperty(aaDatabase[dbType][cleanType][cleanAnimation], variant);
        cleanColor = getCleanProperty(aaDatabase[dbType][cleanType][cleanAnimation][cleanVariant], color);
    }

    // Gets the array or Return weapon keys from the database
    const returnArray = Object.keys(aaDatabase.return.weapon);
    
    return {
        filePath: options.getTruePath ? filePath() : void 0,
        file: databasePath(),
        returnFile: options.isReturnable ? returnDatabasePath() : void 0,
        // Cleaned properties. Useful for debugging
        cleanProperties: {
            cleanType, cleanAnimation, cleanVariant, cleanColor
        },
        // Original properties. Useful for debugging
        originalProperties: {
            menuType, animation, variant, color
        }
    }

    function getCleanProperty(path, prop) {
        let newArray = Object.keys(path ?? {});
        return newArray.find(el => prop === el) ? prop : newArray[0] !== "_markers" ? newArray[0] : newArray[1]
    }
    function validateVideoPath() {
        if (!dbType || !menuType || !animation || !variant || !color) { return false; }
        let dbPath = color === "random" ? `autoanimations.${dbType}.${[menuType]}.${animation}.${variant}` : `autoanimations.${dbType}.${[menuType]}.${animation}.${variant}.${color}`;
        return !!Sequencer.Database.getEntry(dbPath, {softFail: true})
    }
    // Returns the actual filepath. This is only used in Static and Templates
    function filePath() {
        let colorOptions = Object.keys(aaDatabase[dbType][cleanType]?.[cleanAnimation]?.[cleanVariant])
        return color === "random"
                ? aaDatabase[dbType][cleanType]?.[cleanAnimation]?.[cleanVariant]?.[colorOptions[0]]?.[0]
                : aaDatabase[dbType][cleanType]?.[cleanAnimation]?.[cleanVariant]?.[cleanColor]?.[0]
    }
    // Returns the Database path structure to send to Sequencer
    function databasePath() {
        return color === "random"
                ? `autoanimations.${dbType}.${[cleanType]}.${cleanAnimation}.${cleanVariant}` 
                : `autoanimations.${dbType}.${[cleanType]}.${cleanAnimation}.${cleanVariant}.${cleanColor}`
    }
    // Returns the Database path for the return animation to send to Sequencer if it exists, otherwise false
    function returnDatabasePath() {
        return returnArray.find(el => cleanAnimation === el) 
        ? color === "random"
        ? `autoanimations.return.weapon.${cleanAnimation}.${cleanVariant}`
        : `autoanimations.return.weapon.${cleanAnimation}.${cleanVariant}.${cleanColor}`
        : false
    }
}
