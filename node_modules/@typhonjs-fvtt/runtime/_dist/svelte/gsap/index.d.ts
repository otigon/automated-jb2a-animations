/**
 * @param {HTMLElement} node -
 *
 * @param {object}      options -
 *
 * @param {string}      options.type -
 *
 * @returns {*} GSAP method.
 */
declare function animate(node: HTMLElement, { type, ...args }: {
    type: string;
}): any;

export { animate };
