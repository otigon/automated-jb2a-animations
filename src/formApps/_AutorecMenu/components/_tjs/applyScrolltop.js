import { resizeObserver }  from "@typhonjs-fvtt/runtime/svelte/action";
import { isWritableStore } from '@typhonjs-fvtt/runtime/svelte/store';
import { debounce }        from '@typhonjs-fvtt/runtime/svelte/util';

/**
 * TODO: This is an updated action that will be moved to svelte-standard in next update.
 *
 * Provides an action to save `scrollTop` of an element with a vertical scrollbar. This action should be used on the
 * scrollable element and must include a writable store that holds the active store for the current `scrollTop` value.
 * You may switch the stores externally and this action will set the `scrollTop` based on the newly set store. This is
 * useful for instance providing a select box that controls the scrollable container.
 *
 * @param {HTMLElement} element - The target scrollable HTML element.
 *
 * @param {object}      store - The host store wrapping another store that is the `scrollTop` target.
 */
export function applyScrolltop(element, store)
{
   function storeUpdate(value)
   {
      if (!Number.isFinite(value)) { return; }

      // For some reason for scrollTop to take on first update from a new element setTimeout is necessary.
      setTimeout(() => element.scrollTop = value, 0)
   }

   let unsubscribe = store.subscribe(storeUpdate);

   const resizeControl = resizeObserver(element, debounce(() =>
   {
      if (isWritableStore(store)) { store.set(element.scrollTop); }
   }, 500));

   /**
    * Save target `scrollTop` to the current set store.
    *
    * @param {Event} event -
    */
   function onScroll(event)
   {
      if (isWritableStore(store)) { store.set(event.target.scrollTop); }
   }

   const debounceFn = debounce((e) => onScroll(e), 500);

   element.addEventListener('scroll', debounceFn);

   return {
      update: (newStore) =>
      {
         unsubscribe();
         store = newStore;
         unsubscribe = store.subscribe(storeUpdate)
      },

      destroy: () =>
      {
         element.removeEventListener('scroll', debounceFn);
         unsubscribe();
         resizeControl.destroy();
      }
   };
}
