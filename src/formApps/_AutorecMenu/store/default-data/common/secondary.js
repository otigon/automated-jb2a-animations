import { sound } from "./sound.js";
//import { video } from "./video.js";

/**
 * Creates default secondary data.
 *
 * @returns {DataSecondary}
 */
export function secondary() {
   return {
      enable: false,
      video: { dbSection: "static", menuType: 'spell', animation: 'curewounds', variant: '01', color: 'blue', enableCustom: false, customPath: "" },
      sound: sound(),
      options: {
         delay: 0,
         elevation: 1000,
         isWait: false,
         isMasked: false,
         opacity: 1,
         repeat: 1,
         repeatDelay: 250,
         isRadius: true,
         size: 1.5,
         zIndex: 1,
      }
   }
}
/**
 * @typedef {object} DataSecondary
 *
 * @property {boolean=false}        enable -
 *
 * @property {DataVideo}            video -
 *
 * @property {DataSound}            sound -
 *
 * @property {DataSecondaryOptions} options -
 */

/**
 * @typedef DataSecondaryOptions
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
