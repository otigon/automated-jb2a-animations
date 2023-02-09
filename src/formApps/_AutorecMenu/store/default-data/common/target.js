import { sound } from "./sound.js";
import { video } from "./video.js";

/**
 * Creates default target data.
 *
 * @returns {DataTarget}
 */
export function target() {
   return {
      enable: false,
      video: { dbSection: "static", menuType: 'spell', animation: 'curewounds', variant: '01', color: 'blue', enableCustom: false, customPath: "" },
      sound: sound(),
      options: {
         addTokenWidth: false,
         anchor: "0.5",
         contrast: 0,
         delay: 0,
         elevation: 1000,
         fadeIn: 250,
         fadeOut: 500,
         isMasked: false,
         //isWait: false,
         isRadius: false,
         opacity: 1,
         persistent: false,
         repeat: 1,
         repeatDelay: 250,
         saturate: 0,
         size: 1,
         tint: false,
         tintColor: "#FFFFFF",
         unbindAlpha: false,
         unbindVisibility: false,
         zIndex: 1,
      }
   };
}

/**
 * @typedef {object} DataTarget
 *
 * @property {boolean=false}     enable -
 *
 * @property {DataVideo}         video -
 *
 * @property {DataSound}         sound -
 *
 * @property {DataTargetOptions} options -
 */

/**
 * @typedef {object} DataTargetOptions
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
 * @property {number}      opacity -
 *
 * @property {boolean}     persistent -
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
