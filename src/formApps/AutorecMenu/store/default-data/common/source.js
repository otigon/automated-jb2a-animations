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
      video: video(),
      sound: sound(),
      options: {
         below: false,
         delay: 0,
         delayAfter: 0,
         isMasked: false,
         opacity: 1,
         repeat: 1,
         scale: 1,
         zIndex: 1
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
