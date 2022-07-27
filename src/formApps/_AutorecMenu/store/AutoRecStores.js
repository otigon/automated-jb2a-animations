import { writable }        from "svelte/store";

import { AnimationStore }  from "./animation/AnimationStore.js";
import { CategoryStore }   from "./category/CategoryStore.js";

import { loadDefault }     from "./default-data";

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
      cat.push(this.#melee = new CategoryStore('aaAutorec-melee', AnimationStore, loadDefault("melee")));
      cat.push(this.#range = new CategoryStore('aaAutorec-range', AnimationStore, loadDefault("range")));
      cat.push(this.#ontoken = new CategoryStore('aaAutorec-ontoken', AnimationStore, loadDefault("ontoken")));
      cat.push(this.#templatefx = new CategoryStore('aaAutorec-templatefx', AnimationStore, loadDefault("templatefx")));
      cat.push(this.#aura = new CategoryStore('aaAutorec-aura', AnimationStore, loadDefault("aura")));
      cat.push(this.#preset = new CategoryStore('aaAutorec-preset', AnimationStore, loadDefault("preset")));
      cat.push(this.#aefx = new CategoryStore('aaAutorec-aefx', AnimationStore, loadDefault("aefx")));

      this.#selected = writable(this.#melee);
   }
}

export const autoRecStores = new AutoRecStores();
