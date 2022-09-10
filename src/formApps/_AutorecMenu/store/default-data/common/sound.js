/**
 * Creates default audio data.
 *
 * @param {DataSound}   [opts] - Optional parameters.
 *
 * @returns {DataSound}
 */
export function sound({ enable = false, delay = 0, file = void 0, startTime = 0, volume = 0.75, repeat = 1, repeatDelay = 250 } = {}) {
   return {
      enable,
      delay,
      file,
      repeat,
      repeatDelay,
      startTime,
      volume
   }
}

/**
 * @typedef {object} DataSound
 *
 * @property {boolean}     enable - Enabled state.
 *
 * @property {number}      delay - Positive delay time in milliseconds.
 *
 * @property {string|void} file - File path.
 *
 * @property {number}      startTime - Positive delay time in milliseconds.
 *
 * @property {number}      volume - Volume range from 0 - 1.
 */
