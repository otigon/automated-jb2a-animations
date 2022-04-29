export * from './SvelteApplication.js';
export * from './TJSDialog.js';

// TODO: temporary
export * from './position/Position.js';

/**
 * @typedef {object} MountedAppShell - Application shell contract for Svelte components.
 *
 * @property {HTMLElement} elementRoot - The root element / exported prop.
 *
 * @property {HTMLElement} [elementContent] - The content element / exported prop.
 *
 * @property {HTMLElement} [elementTarget] - The target element / exported prop.
 */

/**
 * @typedef {object} StoreAppOptions - Provides a custom readable Svelte store for Application options state.
 *
 * @property {import('svelte/store').Readable.subscribe} subscribe - Subscribe to all app options updates.
 *
 * @property {import('svelte/store').Readable<boolean>} draggable - Derived store for `draggable` updates.
 *
 * @property {import('svelte/store').Readable<boolean>} minimizable - Derived store for `minimizable` updates.
 *
 * @property {import('svelte/store').Readable<boolean>} popOut - Derived store for `popOut` updates.
 *
 * @property {import('svelte/store').Readable<boolean>} resizable - Derived store for `resizable` updates.
 *
 * @property {import('svelte/store').Readable<string>} title - Derived store for `title` updates.
 *
 * @property {import('svelte/store').Readable<number>} zIndex - Derived store for `zIndex` updates.
 */

/**
 * @typedef {object} StoreUIOptions - Provides a custom readable Svelte store for UI options state.
 *
 * @property {import('svelte/store').Readable.subscribe} subscribe - Subscribe to all UI options updates.
 *
 * @property {import('svelte/store').Readable<ApplicationHeaderButton[]>} headerButtons - Derived store for
 *                                                                                        `headerButtons` updates.
 *
 * @property {import('svelte/store').Readable<boolean>} minimized - Derived store for `minimized` updates.
 */
