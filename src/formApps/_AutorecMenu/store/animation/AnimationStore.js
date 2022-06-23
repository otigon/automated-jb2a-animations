import { propertyStore }   from "@typhonjs-fvtt/runtime/svelte/store";

import {
   debounce,
   isObject,
   uuidv4 }                from "@typhonjs-fvtt/runtime/svelte/util";

import { storeWrapper }    from "../_tjs/storeWrapper.js";

export class AnimationStore {
   #category;

   #data;

   /**
    * Stores the subscribers.
    *
    * @type {(function(AnimationStore): void)[]}
    */
   #subscriptions = [];

   /** @type {AnimationPropertyStores} */
   #stores;

   /**
    * @param {object}   data -
    *
    * @param {CategoryStore} category - The associated category store.
    */
   constructor(data = {}, category)
   {
      this.#data = data;
      this.#category = category;

      // If an id is missing then add it.
      if (typeof data.id !== 'string') {
         this.#data.id = uuidv4();
      }

      // Provide a debounced callback to the category updateSubscribers method that is invoked by `storeWrapper`
      // on AnimationStore child stores. This throttles updates to serializing the main category store array when
      // AnimationStore data changes.
      const updateCategorySubscribers = debounce(category._updateSubscribers.bind(category), 500);

      this.#stores = {
         name: storeWrapper(propertyStore(this, 'name'), updateCategorySubscribers)
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
   get id() { return this.#data.id; }

   /**
    * @returns {string}
    */
   get name() { return this.#data.name ?? ''; }

   /**
    * @param {string}   id -
    */
   set id(id)
   {
      if (typeof id !== 'string') { throw new TypeError(`'id' is not a string.`); }
      this.#data.id = id;
      this._updateSubscribers();
   }

   /**
    * @param {string}   name -
    */
   set name(name)
   {
      if (typeof name !== 'string') { throw new TypeError(`'name' is not a string.`); }
      this.#data.name = name;
      this._updateSubscribers();
   }

   delete()
   {
      this.#category.delete(this);
   }

   duplicate()
   {
      const data = foundry.utils.deepClone(this.#data, { strict: true })
      data.id = uuidv4();
      data.name = `${this.#data.name ?? ''} + (COPY)`;

      this.#category.add(data);
   }

   destroy()
   {
      this.#category = void 0;
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
         this.#data.name = data.name;
      }

      if (data.id !== void 0)
      {
         if (typeof data.id !== 'string') { throw new TypeError(`'data.id' is not a string.`); }
         this.#data.id = data.id;
      }

      this._updateSubscribers();
   }

   toJSON() {
      return foundry.utils.deepClone(this.#data, { strict: true });
   }

   /**
    * @param {function(AnimationStore): void} handler - Callback function that is invoked on update / changes.
    *
    * @returns {(function(): void)} Unsubscribe function.
    */
   subscribe(handler) {
      this.#subscriptions.push(handler);  // add handler to the array of subscribers

      handler(this.#data);                // call handler with current value

      // Return unsubscribe function.
      return () => {
         const index = this.#subscriptions.findIndex((sub) => sub === handler);
         if (index >= 0) { this.#subscriptions.splice(index, 1); }
      };
   }

   /**
    * @protected
    */
   _updateSubscribers() {
      const subscriptions = this.#subscriptions;

      const data = this.#data;

      for (let cntr = 0; cntr < subscriptions.length; cntr++) { subscriptions[cntr](data); }
   }
}

/**
 * @typedef {object} AnimationPropertyStores
 *
 * @property {import('svelte/store').Writable<string>} name - Animation name.
 */
