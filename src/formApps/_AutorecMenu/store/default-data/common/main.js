import { Hashing } from "#runtime/util";

/**
 * Creates the main properties that all animations share.
 *
 * @returns {DataMain}
 */
export function main({ label, soundOnly}) {
   if (typeof label !== 'string') { throw new TypeError(`'label' is not a string.`); }
   //if (typeof soundOnly !== 'boolean') { throw new TypeError(`'soundOnly' is not a boolean.`); }

   return {
      id: Hashing.uuidv4(),
      label: `autoanimations.animations.${label}`,
      soundOnly: {
         sound: {
            delay: 0,
            enable: false,
            startTime: 0,
            volume: 0.75,
         }
      }
   }
}

/**
 * @typedef {object} DataMain
 *
 * @property {string}   id - UUIDv4.
 *
 * @property {string}   label - Name of animation from i18n prepended with `autoanimations.animations.`.
 *
 * @property {boolean}  soundOnly - Show only primary sound options.
 */
