import { gsap } from 'foundry-gsap';
export { gsap } from 'foundry-gsap';

/**
 * @param {HTMLElement} node -
 *
 * @param {object}      options -
 *
 * @param {string}      options.type -
 *
 * @returns {*} GSAP method.
 */
function animate(node, { type, ...args })
{
   const method = gsap[type];
   return method(node, args);
}

export { animate };
//# sourceMappingURL=index.js.map
