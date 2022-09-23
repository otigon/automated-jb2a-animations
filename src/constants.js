/**
 * Defines the main constants for module name and label.
 *
 * @type {{moduleId: string, moduleLabel: string}}
 */
const constants = {
   moduleId: "autoanimations",
   moduleLabel: "Automated Animations"
};

/**
 * @type {AASessionConstants} Defines all the module session storage static constants.
 */
const sessionConstants = {
   videoPreviewAppState: `${constants.moduleId}.video-preview.app-state`
};

export { constants, sessionConstants };

/**
 * @typedef {object} AASessionConstants
 *
 * @property {string} videoPreviewAppState - Stores the app state / position of the VideoPreview app.
 */
