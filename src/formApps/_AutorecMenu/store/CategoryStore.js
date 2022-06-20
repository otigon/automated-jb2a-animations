import { constants }      from "../../../constants.js";
import { gameSettings }   from "../../../gameSettings.js";
import { AnimationStore } from "./AnimationStore.js";

/**
 * @template {AnimationStore} T
 */
export class CategoryStore {
   #StoreClass;

   /** @type {T[]} */
   #data = [];

   /**
    * Stores the subscribers.
    *
    * @type {(function(T[]): void)[]}
    */
   #subscriptions = [];

   constructor(key, StoreClass, defaultData) {
      if (!(StoreClass instanceof AnimationStore.constructor))
      {
         throw new TypeError(`'StoreClass' is not an instance of AnimationStore.`);
      }

      if (!Array.isArray(defaultData)) { throw new TypeError(`'defaultData' is not an array.`); }

      this.#StoreClass = StoreClass;

      gameSettings.register({
         moduleId: constants.moduleId,
         key,
         store: this,
         options: {
            scope: "world",
            config: false,
            default: defaultData,
            type: Array
         }
      });
   }

   /**
    * Provides an iterator for AnimationStore instances.
    *
    * @returns {Generator<T|undefined>} Generator / iterator of AnimationStore instances.
    * @yields {T}
    */
   *[Symbol.iterator]()
   {
      if (this.#data.length === 0) { return; }

      for (const entry of this.#data) { yield entry; }
   }

   /**
    * @returns {T[]}
    */
   get data() { return this.#data; }

   add(animation) {
      if (!(animation instanceof this.#StoreClass)) {
         throw new TypeError(`'animation' is not an instance of ${this.#StoreClass.constructor.name}.`);
      }
   }

   /**
    * Deletes a given animation from the category store.
    *
    * @param {T}  animation -
    */
   delete(animation) {
      if (!(animation instanceof AnimationStore)) {
         throw new TypeError(`'animation' is not an instance of AnimationStore.`);
      }

      const index = this.#data.findIndex((entry) => entry.id === id);

      if (index >= 0) {
         this.#data.splice(index, 1);
         this.#updateSubscribers();
      }
   }

   set(newData) {
      if (!Array.isArray(newData)) { throw new TypeError(`'newData' is not an Array.`); }

      const data = this.#data;

      // Create a set of all current entry IDs.
      const removeIDSet = new Set(data.reduce((array, current) => {
         array.push(current.id);
         return array;
      }, []));

      for (const newEntry of newData)
      {
         const id = newEntry.id;

         if (typeof id !== 'string') { throw new Error(`'newEntry.id' is not a string.`)}

         const index = data.findIndex((entry) => entry.id === id);

         if (index >= 0) {
            data[index].set(newEntry);
            removeIDSet.delete(id);
         }
         else {
            data.push(new this.#StoreClass(newEntry));
         }
      }

      // Remove entries that are no longer in data.
      for (const id of removeIDSet)
      {
         const index = data.findIndex((entry) => entry.id === id);
         if (index >= 0) { data.splice(index, 1); }
      }

      this.#updateSubscribers();
   }

   /**
    * Sorts data entries by name attribute.
    */
   sortAlpha() {
      this.#data.sort((a, b) => a.name.localeCompare(b.name));
      this.#updateSubscribers();
   }

   toJSON() {
      return foundry.utils.deepClone(this.#data, { strict: true });
   }

// -------------------------------------------------------------------------------------------------------------------

   /**
    * @param {function(T[]): void} handler - Callback function that is invoked on update / changes.
    *
    * @returns {(function(): void)} Unsubscribe function.
    */
   subscribe(handler) {
      this.#subscriptions.push(handler); // add handler to the array of subscribers

      handler(this.#data);                     // call handler with current value

      // Return unsubscribe function.
      return () => {
         const index = this.#subscriptions.findIndex((sub) => sub === handler);
         if (index >= 0) { this.#subscriptions.splice(index, 1); }
      };
   }

   #updateSubscribers() {
      const subscriptions = this.#subscriptions;

      const data = this.#data;

      for (let cntr = 0; cntr < subscriptions.length; cntr++) { subscriptions[cntr](data); }
   }
}
