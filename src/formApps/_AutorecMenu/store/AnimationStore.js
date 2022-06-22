import { isObject } from "@typhonjs-fvtt/runtime/svelte/util";

export class AnimationStore {
   #data;

   /**
    * Stores the subscribers.
    *
    * @type {(function(AnimationStore): void)[]}
    */
   #subscriptions = [];

   constructor(data)
   {
      this.#data = data;
   }

   /**
    * @returns {string}
    */
   get id() { return this.#data.id; }

   /**
    * @returns {string}
    */
   get name() { return this.#data.name; }

   /**
    * @param {string}   id -
    */
   set id(id)
   {
      if (typeof id !== 'string') { throw new TypeError(`'id' is not a string.`); }
      this.#data.id = id;
      this.updateSubscribers();
   }

   /**
    * @param {string}   name -
    */
   set name(name)
   {
      if (typeof name !== 'string') { throw new TypeError(`'name' is not a string.`); }
      this.#data.name = name;
      this.updateSubscribers();
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

      this.updateSubscribers();
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
   updateSubscribers() {
      const subscriptions = this.#subscriptions;

      const data = this.#data;

      for (let cntr = 0; cntr < subscriptions.length; cntr++) { subscriptions[cntr](data); }
   }
}
