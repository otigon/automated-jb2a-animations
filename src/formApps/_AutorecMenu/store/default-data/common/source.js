import { sound } from "./sound.js";
import { video } from "./video.js";

/**
 * Creates default source data.
 *
 * @returns {DataSource}
 */
export function source() {
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
         isRadius: false,
         isWait: true,
         opacity: 1,
         repeat: 1,
         repeatDelay: 250,
         saturate: 0,
         size: 1,
         tint: false,
         tintColor: "#FFFFFF",
         zIndex: 1,
      },
   };
}

/**
 * @typedef {object} DataSource
 *
 * @property {boolean=false}     enable -
 *
 * @property {DataVideo}         video -
 *
 * @property {DataSound}         sound -
 *
 * @property {DataSourceOptions} options -
 */

/**
 * @typedef {object} DataSourceOptions
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
 * @property {number}      opacity -
 *
 * @property {number}      repeat -
 *
 * @property {number}      repeatDelay -
 *
 * @property {number}      size -
 *
 * @property {number}      zIndex -
 */
