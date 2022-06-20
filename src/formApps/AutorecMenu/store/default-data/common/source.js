import { primary } from "./primary.js";

/**
 * Creates default source data.
 *
 * @returns {DataSource}
 */
export function source() {
   return {
      primary: primary(),

      options: {
         enable: false,
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
 * @property {DataPrimary} primary -
 *
 * @property {DataSourceOptions} options -
 */

/**
 * @typedef {object} DataSourceOptions
 *
 * @property {boolean}     enable - Enabled state.
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
 * @property {number}      repeat -
 *
 * @property {number}      scale -
 *
 * @property {number}      zIndex -
 */
