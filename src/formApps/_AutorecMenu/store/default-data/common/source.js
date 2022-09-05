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
         elevation: 1000,
         delay: 0,
         wait: 0,
         isMasked: false,
         opacity: 1,
         repeat: 1,
         setRadius: false,
         size: 1,
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
 * @property {boolean}     below -
 *
 * @property {number}      delay -
 *
 * @property {number}      delayAfter -
 *
 * @property {boolean}     isMasked -
 *
 * @property {number}      opacity -
 *
 * @property {number}      repeat -
 *
 * @property {number}      scale -
 *
 * @property {number}      zIndex -
 */
