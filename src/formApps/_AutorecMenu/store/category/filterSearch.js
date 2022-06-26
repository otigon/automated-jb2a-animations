import { createFilterQuery } from '@typhonjs-fvtt/runtime/svelte/store';

/**
 * A filter function / Svelte store that can be used with DynArrayReducer and set as a store to TJSInput.
 *
 * @type {(data: object) => boolean}
 */
export const filterSearch = createFilterQuery('name');
