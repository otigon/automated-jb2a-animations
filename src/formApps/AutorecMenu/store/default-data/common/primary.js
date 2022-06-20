import { sound as createSound } from "./sound.js";
import { video as createVideo } from "./video.js";

/**
 * Creates default primary data.
 *
 * @returns {DataPrimary}
 */
export function primary({ video = {}, sound = {}, options = {} } = {}) {
   return {
      video: createVideo(video),
      sound: createSound(sound),
      options
   }
}

/**
 * @typedef {object} DataPrimary
 *
 * @property {DataVideo}   video -
 *
 * @property {DataSound}   sound -
 *
 * @property {object}      options -
 */
