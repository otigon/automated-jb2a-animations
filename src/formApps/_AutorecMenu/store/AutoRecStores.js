import { writable }        from "svelte/store";

import { AnimationStore }  from "./AnimationStore.js";
import { CategoryStore }   from "./CategoryStore.js";

import * as defaultData    from "./default-data";

class AutoRecStores {
   /** @type {CategoryStore[]} */
   #categories = [];

   /**
    * Provides a writable store with the selected CategoryStore.
    *
    * @type {import('svelte/store').Writable<CategoryStore>}
    */
   #selected;

   /** @type {CategoryStore} */
   #aefx;

   /** @type {CategoryStore} */
   #aura;

   /** @type {CategoryStore} */
   #melee;

   /** @type {CategoryStore} */
   #ontoken;

   /** @type {CategoryStore} */
   #preset;

   /** @type {CategoryStore} */
   #range;

   /** @type {CategoryStore} */
   #templatefx;

   constructor() {
   }

   /**
    * @returns {CategoryStore[]}
    */
   get categories() { return this.#categories; }

   /**
    * @returns {import('svelte/store').Writable<CategoryStore>}
    */
   get selected() { return this.#selected; }

   // ----------------------------------------------------------------------------------------------------------------

   /** @returns {CategoryStore} */
   get aefx() { return this.#aefx; }

   /** @returns {CategoryStore} */
   get aura() { return this.#aura; }

   /** @returns {CategoryStore} */
   get melee() { return this.#melee; }

   /** @returns {CategoryStore} */
   get preset() { return this.#preset; }

   /** @returns {CategoryStore} */
   get range() { return this.#range; }

   /** @returns {CategoryStore} */
   get ontoken() { return this.#ontoken; }

   /** @returns {CategoryStore} */
   get templatefx() { return this.#templatefx; }

   /**
    * Initializes all stores and registers settings for each store.
    */
   initialize() {
      const cat = this.#categories;

      // Pushing in order of top menu bar category selection.
      cat.push(this.#melee = new CategoryStore('aaAutorec-melee', AnimationStore, defaultData.melee));
      cat.push(this.#range = new CategoryStore('aaAutorec-range', AnimationStore, defaultData.range));
      cat.push(this.#ontoken = new CategoryStore('aaAutorec-ontoken', AnimationStore, defaultData.ontoken));
      cat.push(this.#templatefx = new CategoryStore('aaAutorec-templatefx', AnimationStore, defaultData.templatefx));
      cat.push(this.#aura = new CategoryStore('aaAutorec-aura', AnimationStore, defaultData.aura));
      cat.push(this.#preset = new CategoryStore('aaAutorec-preset', AnimationStore, defaultData.preset));
      cat.push(this.#aefx = new CategoryStore('aaAutorec-aefx', AnimationStore, defaultData.aefx));

      this.#selected = writable(this.#melee);
   }
}

export const autoRecStores = new AutoRecStores();
