import { propertyStore }   from "@typhonjs-fvtt/runtime/svelte/store";

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
    * Invoked by WorldSettingArrayStore to provide custom duplication.
    *
    * @param {object}   data - A copy of local data w/ new ID already set.
    *
    * @param {CategoryStore} categoryStore - The source WorldSettingArrayStore instance.
    */
   static duplicate(data, categoryStore)
   {
      super.duplicate(data, categoryStore);

      // Provide a unique label appending an indexed counter.
      if (typeof data?.label === 'string')
      {
         let cntr = 1;
         const baseName = data.label ?? '';

         do
         {
            data.label = `${baseName}-${cntr++}`;
         } while (categoryStore.find((entry) => entry.label === data.label) !== void 0);
      }
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
