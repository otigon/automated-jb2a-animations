export function aefx(aeType) {
    if (aeType === "ontoken") {
        return {
            addTokenWidth: false,
            delay: 0,
            elevation: 1000,
            fadeIn: 250,
            fadeOut: 500,
            isMasked: false,
            isRadius: false,
            isWait: false,
            opacity: 1,
            persistent: false,
            playOn: "source",
            repeat: 1,
            repeatDelay: 250,
            size: 1,
            unbindAlpha: false,
            unbindVisibility: false,
            zIndex: 1,    
        }
    } else if (aeType === "aura") {
        return {
            addTokenWidth: true,
            delay: 0,
            elevation: 1000,
            fadeIn: 250,
            fadeOut: 500,    
            ignoreTarget: true,
            isMasked: false,
            isWait: false,
            opacity: 1,
            radius: 3,
            unbindAlpha: false,
            unbindVisibility: false,
            zIndex: 1,    
        }
    }
}

/**
 * @typedef {object} DataAEFXOnTokenOptions
 * 
 * @property {boolean}     addTokenWidth -
 * 
 * @property {number}      delay -
 *
 * @property {number}      elevation -
 *
 * @property {number}      fadeIn -
 *
 * @property {number}      fadeOut -
 *
 * @property {boolean}     isMasked -
 *
 * @property {boolean}     isRadius -
 *
 * @property {boolean}     isWait -
 *
 * @property {boolean}     persistent -
 *
 * @property {string}      playOn -
 *
 * @property {number}      repeat -
 *
 * @property {number}      repeatDelay -
 *
 * @property {number}      size -
 *
 * @property {boolean}     unbindAlpha -
 *
 * @property {boolean}     unbindVisibility -
 *
 * @property {number}      zIndex -
 */

/**
 * @typedef {object} DataAEFXAuraOptions
 * 
 * @property {boolean}     addTokenWidth -
 * 
 * @property {number}      delay -
 *
 * @property {number}      elevation -
 *
 * @property {number}      fadeIn -
 *
 * @property {number}      fadeOut -
 *
 * @property {boolean}     ignoreTarget -
 *
 * @property {boolean}     isMasked -
 *
 * @property {boolean}     isWait -
 *
 * @property {number}      opacity -
 *
 * @property {number}      size -
 *
 * @property {boolean}     unbindAlpha -
 *
 * @property {boolean}     unbindVisibility -
 *
 * @property {number}      zIndex -
 */
