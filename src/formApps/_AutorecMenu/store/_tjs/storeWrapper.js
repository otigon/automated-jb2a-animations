import { isWritableStore } from "@typhonjs-fvtt/runtime/svelte/store";

/**
 * TODO: Refine this store helper function and add to TRL.
 *
 * Wraps a store `set` method to invoke a callback. This allows parent / child relationships between stores to
 * update directly without having to subscribe to the child store.
 *
 * @param {import('svelte/store').Writable} store - A store to wrap.
 *
 * @param {Function} setCallback - A callback to invoke after store set.
 *
 * @returns {import('svelte/store').Writable} wrapped store.
 */
export function storeWrapper(store, setCallback)
{
   if (!isWritableStore(store)) { throw new TypeError(`'store' is not a writable store.`); }
   if (typeof setCallback !== 'function') { throw new TypeError(`'setCallback' is not a function.`); }

   /** @type {import('svelte/store').Writable} */
   const wrapper = {
      set: (value) => {
         store.set(value);
         setCallback(store, value);
      },

      subscribe: store.subscribe
   };

   Object.freeze(wrapper);

   return wrapper;
}
