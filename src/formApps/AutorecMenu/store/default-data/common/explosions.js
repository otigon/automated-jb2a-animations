/**
 * Creates default explosion data.
 *
 * @returns {DataExplosions}
 */
export function explosions() {
   return {
      enable: false,
      enableCustom: false,
      animation: void 0,
      below: false,
      color: void 0,
      customPath: void 0,
      delay: 0,
      isMasked: false,
      menuType: void 0,
      opacity: 1,
      radius: 1.5,
      variant: void 0,
      zIndex: 1
   }
}

/**
 * @typedef DataExplosions
 *
 * @property {boolean}     enable - Enabled state.
 *
 * @property {boolean}     enableCustom - Custom enabled state.
 *
 * @property {string}      animation -
 *
 * @property {boolean}     below -
 *
 * @property {string}      color -
 *
 * @property {string}      customPath -
 *
 * @property {number}      delay -
 *
 * @property {boolean}     isMasked -
 *
 * @property {string}      menuType -
 *
 * @property {number}      opacity -
 *
 * @property {number}      radius -
 *
 * @property {string}      variant -
 *
 * @property {number}      zIndex -
 */
