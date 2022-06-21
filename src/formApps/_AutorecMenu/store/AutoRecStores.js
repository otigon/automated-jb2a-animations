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
   #ontoken;

   /** @type {CategoryStore} */
   #preset;

   /** @type {CategoryStore} */
   #range;

   /** @type {CategoryStore} */
   #templatefx;

   constructor() {
   }

   get aefx() { return this.#aefx; }

   get aura() { return this.#aura; }

   get melee() { return this.#melee; }

   get preset() { return this.#preset; }

   get range() { return this.#range; }

   get ontoken() { return this.#ontoken; }

   get templatefx() { return this.#templatefx; }

   initialize() {
      this.#aefx = new CategoryStore('aaAutorec-aefx', AnimationStore, defaultData.aefx);
      this.#aura = new CategoryStore('aaAutorec-aura', AnimationStore, defaultData.aura);
      this.#melee = new CategoryStore('aaAutorec-melee', AnimationStore, defaultData.melee);
      this.#preset = new CategoryStore('aaAutorec-preset', AnimationStore, defaultData.preset);
      this.#range = new CategoryStore('aaAutorec-range', AnimationStore, defaultData.range);
      this.#ontoken = new CategoryStore('aaAutorec-ontoken', AnimationStore, defaultData.ontoken);
      this.#templatefx = new CategoryStore('aaAutorec-templatefx', AnimationStore, defaultData.templatefx);

// TODO: DEBUG REMOVE
// console.log(`!! AutoRecStores - ontoken:`)
//       for (const entry of this.#ontoken)
//       {
//          console.log(entry.toJSON())
//       }
   }
}

export const autoRecStores = new AutoRecStores();
