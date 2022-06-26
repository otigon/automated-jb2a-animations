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
         name: propertyStore(this, 'name')
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

   /**
    * @param {string} name -
    */
   set name(name) { this.#stores.name.set(name); }

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
