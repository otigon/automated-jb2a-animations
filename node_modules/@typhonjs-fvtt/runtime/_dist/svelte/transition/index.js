import { linear } from 'svelte/easing';
import 'svelte/internal';
import { fade, slide } from 'svelte/transition';

/**
 * Performs linear interpolation between a start & end value by given amount between 0 - 1 inclusive.
 *
 * @param {number}   start - Start value.
 *
 * @param {number}   end - End value.
 *
 * @param {number}   amount - Current amount between 0 - 1 inclusive.
 *
 * @returns {number} Linear interpolated value between start & end.
 */
function lerp(start, end, amount)
{
   return (1 - amount) * start + amount * end;
}

/**
 * Defines the application shell contract. If Svelte components export getter / setters for the following properties
 * then that component is considered an application shell.
 *
 * @type {string[]}
 */
const applicationShellContract = ['elementRoot'];

Object.freeze(applicationShellContract);

/**
 * Provides a rotate transition. For options `easing` is applied to to the rotate transition. The default easing is
 * linear.
 *
 * Note: that when reversing the transition that time goes from `1 - 0`, so if specific options are applied for
 * rotating out transition then `end` and `initial` are swapped.
 *
 * @param {HTMLElement} node - The transition node.
 *
 * @param {object}      options - Optional parameters.
 *
 * @param {number}      [options.delay] - Delay in ms before start of transition.
 *
 * @param {number}      [options.duration] - Total transition length in ms.
 *
 * @param {Function}    [options.easing=linear] - The easing function to apply to the rotate transition.
 *
 * @param {number}      [options.end=0] - End rotation in degrees.
 *
 * @param {number}      [options.initial=0] - Initial rotation in degrees.
 *
 * @returns {{duration: number, css: (function(*=): string), delay: number, easing: (x: number) => number}}
 *  Transition object.
 */
function rotate(node, options)
{
   const easingRotate = options.easing ?? linear;

   const initialDeg = options.initial ?? 0;
   const endDeg = options.end ?? 0;

   return {
      delay: options.delay ?? 0,
      duration: options.duration ?? 500,
      easing: linear,
      css: (t) =>
      {
         const rotateT = easingRotate(t);
         return `transform: rotate(${lerp(initialDeg, endDeg, rotateT)}deg)`;
      }
   };
}

/**
 * Combines rotate & fade transitions into a single transition. For options `easing` this is applied to both transitions,
 * however if provided `easingRotate` and / or `easingFade` will take precedence. The default easing is linear.
 *
 * Note: that when reversing the transition that time goes from `1 - 0`, so if specific options are applied for
 * rotating out transition then `end` and `initial` are swapped.
 *
 * @param {HTMLElement} node - The transition node.
 *
 * @param {object}      options - Optional parameters.
 *
 * @param {number}      [options.delay] - Delay in ms before start of transition.
 *
 * @param {number}      [options.duration] - Total transition length in ms.
 *
 * @param {Function}    [options.easing=linear] - The easing function to apply to both slide & fade transitions.
 *
 * @param {Function}    [options.easingFade=linear] - The easing function to apply to the fade transition.
 *
 * @param {Function}    [options.easingRotate=linear] - The easing function to apply to the rotate transition.
 *
 * @param {number}      [options.end=0] - End rotation in degrees.
 *
 * @param {number}      [options.initial=0] - Initial rotation in degrees.
 *
 * @returns {{duration: number, css: (function(*=): string), delay: number, easing: (x: number) => number}}
 *  Transition object.
 */
function rotateFade(node, options)
{
   const easingFade = options.easingFade || options.easing || linear;
   const easingRotate = options.easingRotate || options.easing || linear;

   const fadeTransition = fade(node);

   const initialDeg = options.initial ?? 0;
   const endDeg = options.end ?? 0;

   return {
      delay: options.delay ?? 0,
      duration: options.duration ?? 500,
      easing: linear,
      css: (t) =>
      {
         const fadeT = easingFade(t);
         const rotateT = easingRotate(t);

         return `transform: rotate(${lerp(initialDeg, endDeg, rotateT)}deg); ${fadeTransition.css(fadeT, 1 - fadeT)}`;
      }
   };
}

/**
 * Combines slide & fade transitions into a single transition. For options `easing` this is applied to both transitions,
 * however if provided `easingSlide` and / or `easingFade` will take precedence. The default easing is linear.
 *
 * @param {HTMLElement} node - The transition node.
 *
 * @param {object}      options - Optional parameters.
 *
 * @param {number}      [options.delay] - Delay in ms before start of transition.
 *
 * @param {number}      [options.duration] - Total transition length in ms.
 *
 * @param {Function}    [options.easing=linear] - The easing function to apply to both slide & fade transitions.
 *
 * @param {Function}    [options.easingFade=linear] - The easing function to apply to the fade transition.
 *
 * @param {Function}    [options.easingSlide=linear] - The easing function to apply to the slide transition.
 *
 * @returns {{duration: number, css: (function(*=): string), delay: number, easing: (x: number) => number}}
 *  Transition object.
 */
function slideFade(node, options)
{
   const fadeEasing = options.easingFade || options.easing || linear;
   const slideEasing = options.easingSlide || options.easing || linear;

   const fadeTransition = fade(node);
   const slideTransition = slide(node);

   return {
      delay: options.delay || 0,
      duration: options.duration || 500,
      easing: linear,
      css: (t) =>
      {
         const fadeT = fadeEasing(t);
         const slideT = slideEasing(t);
         return `${slideTransition.css(slideT, 1 - slideT)}; ${fadeTransition.css(fadeT, 1 - fadeT)}`;
      }
   };
}

const s_DEFAULT_TRANSITION = () => void 0;
const s_DEFAULT_TRANSITION_OPTIONS = {};

export { rotate, rotateFade, s_DEFAULT_TRANSITION, s_DEFAULT_TRANSITION_OPTIONS, slideFade };
//# sourceMappingURL=index.js.map
