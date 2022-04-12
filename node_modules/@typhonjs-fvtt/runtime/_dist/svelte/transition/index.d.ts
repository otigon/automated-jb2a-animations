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
declare function rotate(node: HTMLElement, options: {
    delay?: number;
    duration?: number;
    easing?: Function;
    end?: number;
    initial?: number;
}): {
    duration: number;
    css: (() => string);
    delay: number;
    easing: (x: number) => number;
};
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
declare function rotateFade(node: HTMLElement, options: {
    delay?: number;
    duration?: number;
    easing?: Function;
    easingFade?: Function;
    easingRotate?: Function;
    end?: number;
    initial?: number;
}): {
    duration: number;
    css: (() => string);
    delay: number;
    easing: (x: number) => number;
};
declare function s_DEFAULT_TRANSITION(): any;
declare const s_DEFAULT_TRANSITION_OPTIONS: {};
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
declare function slideFade(node: HTMLElement, options: {
    delay?: number;
    duration?: number;
    easing?: Function;
    easingFade?: Function;
    easingSlide?: Function;
}): {
    duration: number;
    css: (() => string);
    delay: number;
    easing: (x: number) => number;
};

export { rotate, rotateFade, s_DEFAULT_TRANSITION, s_DEFAULT_TRANSITION_OPTIONS, slideFade };
