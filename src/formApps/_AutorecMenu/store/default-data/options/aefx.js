export function aefx(aeType) {
    if (aeType === "ontoken") {
        return {
            addTokenWidth: false,
            anchor: "0.5",
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
            alpha: false,
            alphaMax: 0.5,
            alphaMin: -0.5,
            alphaDuration: 1000,
            breath: false,
            breathMax: 1.05,
            breathMin: 0.95,
            breathDuration: 1000,    
            delay: 0,
            elevation: 1000,
            fadeIn: 250,
            fadeOut: 500,    
            isRadius: false,
            isWait: false,
            opacity: 1,
            playOn: "source",
            size: 3,
            tint: false,
            tintColor: "#FFFFFF",
            tintSaturate: 0,    
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
