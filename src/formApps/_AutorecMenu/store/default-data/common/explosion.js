import { sound } from "./sound.js";
import { video } from "./video.js";

/**
 * Creates default explosion data.
 *
 * @returns {DataExplosion}
 */
export function explosion() {
   return {
      enable: false,
      video: { dbSection: "static", menuType: 'spell', animation: 'curewounds', variant: '01', color: 'blue', enableCustom: false, customPath: "" },
      sound: sound(),
      options: {
         elevation: 1000,
         isMasked: false,
         opacity: 1,
         setRadius: true,
         size: 1.5,
         zIndex: 1,
      }
   }
}
/**
 * @typedef {object} DataExplosion
 *
 * @property {boolean=false}        enable -
 *
 * @property {DataVideo}            video -
 *
 * @property {DataSound}            sound -
 *
 * @property {DataExplosionOptions} options -
 */

/**
 * @typedef DataExplosionOptions
 *
 * @property {boolean}     below -
 *
 * @property {number}      delay -
 *
 * @property {boolean}     isMasked -
 *
 * @property {number}      opacity -
 *
 * @property {number}      radius -
 *
 * @property {number}      zIndex -
 */
