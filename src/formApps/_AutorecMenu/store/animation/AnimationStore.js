import { propertyStore }   from "@typhonjs-fvtt/runtime/svelte/store";

import {
   debounce,
   isObject }              from "@typhonjs-fvtt/runtime/svelte/util";

import { storeCallback }   from "@typhonjs-fvtt/svelte-standard/store";

import { CategoryStore }   from "../category/CategoryStore.js";

export class AnimationStore extends CategoryStore.EntryStore {
   /** @type {AnimationPropertyStores} */
   #stores;

   /**
    * @param {object}   data -
    *
    * @param {CategoryStore} category - The associated category store.
    */
   constructor(data = {}, category)
   {
      super (data);

      // Provide a debounced callback to the category updateSubscribers method that is invoked by `storeCallback`
      // on AnimationStore child stores. This throttles updates to serializing the main category store array when
      // AnimationStore data changes.
      const updateCategorySubscribers = debounce(category._updateSubscribers.bind(category), 500);

      this.#stores = {
         name: storeCallback(propertyStore(this, 'name'), updateCategorySubscribers)
      };
   }

   /**
    * @returns {AnimationPropertyStores}
    */
   get stores() { return this.#stores; }

   // ----------------------------------------------------------------------------------------------------------------

   /**
    * @returns {string}
    */
   get name() { return this._data.name ?? ''; }

   destroy()
   {
   }

   /**
    * @param {object}   data -
    */
   set(data)
   {
      if (!isObject(data)) { throw new TypeError(`'data' is not an object.`); }

      if (data.name !== void 0)
      {
         if (typeof data.name !== 'string') { throw new TypeError(`'data.name' is not a string.`); }
         this._data.name = data.name;
      }

      this._updateSubscribers();
   }
}

/**
 * @typedef {object} AnimationPropertyStores
 *
 * @property {import('svelte/store').Writable<string>} name - Animation name.
 */
