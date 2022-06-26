import { propertyStore }   from "@typhonjs-fvtt/runtime/svelte/store";
import { isObject }        from "@typhonjs-fvtt/runtime/svelte/util";

import { CategoryStore }   from "../category/CategoryStore.js";

export class AnimationStore extends CategoryStore.EntryStore {
   /** @type {AnimationPropertyStores} */
   #stores;

   /**
    * @param {object}   data -
    */
   constructor(data = {})
   {
      super(data);

      this.#stores = {
         label: propertyStore(this, 'label')
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
   get label() { return this._data.label ?? ''; }

   /**
    * @param {string} label -
    */
   set label(label) { this.#stores.label.set(label); }

   /**
    * @param {object}   data -
    */
   set(data)
   {
      if (!isObject(data)) { throw new TypeError(`'data' is not an object.`); }

      if (data.label !== void 0)
      {
         if (typeof data.label !== 'string') { throw new TypeError(`'data.label' is not a string.`); }
         this._data.label = data.label;
      }

      this._updateSubscribers();
   }
}

/**
 * @typedef {object} AnimationPropertyStores
 *
 * @property {import('svelte/store').Writable<string>} label - Animation label.
 */
