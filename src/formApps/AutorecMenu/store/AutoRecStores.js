import { AnimationStore }  from "./AnimationStore.js";
import { CategoryStore }   from "./CategoryStore.js";

import * as defaultData    from "./default-data";

class AutoRecStores {
   /** @type {CategoryStore} */
   #aefx;

   /** @type {CategoryStore} */
   #aura;

   /** @type {CategoryStore} */
   #melee;

   /** @type {CategoryStore} */
   #preset;

   /** @type {CategoryStore} */
   #range;

   /** @type {CategoryStore} */
   #staticfx;

   /** @type {CategoryStore} */
   #templatefx;

   constructor() {
   }

   get aefx() { return this.#aefx; }

   get aura() { return this.#aura; }

   get melee() { return this.#melee; }

   get preset() { return this.#preset; }

   get range() { return this.#range; }

   get staticfx() { return this.#staticfx; }

   get templatefx() { return this.#templatefx; }

   initialize() {
      this.#aefx = new CategoryStore('aaAutorec-aefx', AnimationStore, defaultData.aefx);
      this.#aura = new CategoryStore('aaAutorec-aura', AnimationStore, defaultData.aura);
      this.#melee = new CategoryStore('aaAutorec-melee', AnimationStore, defaultData.melee);
      this.#preset = new CategoryStore('aaAutorec-preset', AnimationStore, defaultData.preset);
      this.#range = new CategoryStore('aaAutorec-range', AnimationStore, defaultData.range);
      this.#staticfx = new CategoryStore('aaAutorec-staticfx', AnimationStore, defaultData.staticfx);
      this.#templatefx = new CategoryStore('aaAutorec-templatefx', AnimationStore, defaultData.templatefx);
   }
}

export const autoRecStores = new AutoRecStores();
