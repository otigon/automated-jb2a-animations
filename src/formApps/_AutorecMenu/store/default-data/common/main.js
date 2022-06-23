import { uuidv4 } from "@typhonjs-fvtt/runtime/svelte/util";

/**
 * Creates the main properties that all animations share.
 *
 * @returns {DataMain}
 */
export function main({ name, soundOnly = false}) {
   if (typeof name !== 'string') { throw new TypeError(`'name' is not a string.`); }
   if (typeof soundOnly !== 'boolean') { throw new TypeError(`'soundOnly' is not a boolean.`); }

   return {
      id: uuidv4(),
      name: `autoanimations.animations.${name}`,
      soundOnly
   }
}

/**
 * @typedef {object} DataMain
 *
 * @property {string}   id - UUIDv4.
 *
 * @property {string}   name - Name of animation from i18n prepended with `autoanimations.animations.`.
 *
 * @property {boolean}  soundOnly - Show only primary sound options.
 */
