import { primary } from "./primary.js";

/**
 * Creates default target data.
 *
 * @returns {DataTarget}
 */
export function target() {
   return {
      primary: primary(),

      options: {
         enable: false,
         below: false,
         delay: 0,
         delayAfter: 0,
         isMasked: false,
         opacity: 1,
         persistent: false,
         repeat: 1,
         scale: 1,
         unbindAlpha: false,
         unbindVisibility: false,
         zIndex: 1
      }
   };
}

/**
 * @typedef {object} DataTarget
 *
 * @property {DataPrimary} primary -
 *
 * @property {DataTargetOptions} options -
 */

/**
 * @typedef {object} DataTargetOptions
 *
 * @property {boolean}     enable - Enabled state.
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
 * @property {boolean}     persistent -
 *
 * @property {number}      repeat -
 *
 * @property {number}      scale -
 *
 * @property {boolean}     unbindAlpha -
 *
 * @property {boolean}     unbindVisibility -
 *
 * @property {number}      zIndex -
 */
