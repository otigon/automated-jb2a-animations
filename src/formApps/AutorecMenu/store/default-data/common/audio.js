/**
 * Creates default audio data with optional explosion & melee switch data.
 *
 * @param {object}   [opts] - Optional parameters.
 *
 * @param {boolean}  [explosion] - Include `e01` entry for explosion DataAudio.
 *
 * @param {boolean}  [melee] - Include `a02` entry for melee switch DataAudio.
 *
 * @param {boolean}  [source] - Include `s01` entry for source DataAudio.
 *
 * @param {boolean}  [target] - Include `t01` entry for target DataAudio.
 *
 * @returns {{a01: DataAudio, s01?: DataAudio, t01?: DataAudio, a02?: DataAudio, e01?: DataAudio}}
 */
export function audio({ explosion = false, melee = false, source = false, target = false } = {}) {
   /**
    * @type {DataAudio}
    */
   const data = {
      enable: false,
      delay: 0,
      file: void 0,
      startTime: 0,
      volume: 0.75
   }

   /**
    * @type {{a01: DataAudio, a02?: DataAudio, e01?: DataAudio, s01?: DataAudio, t01?: DataAudio}}
    */
   const result = {
      a01: Object.assign({}, data)
   }

   if (explosion) { result.e01 = Object.assign({}, data); }
   if (melee) { result.a02 = Object.assign({}, data); }
   if (source) { result.s01 = Object.assign({}, data); }
   if (target) { result.t01 = Object.assign({}, data); }

   return result;
}

/**
 * @typedef DataAudio
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
