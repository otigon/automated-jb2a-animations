import { localize }           from "@typhonjs-fvtt/runtime/svelte/helper";

import {
   createFilterQuery,
   WorldSettingArrayStore }   from "@typhonjs-fvtt/svelte-standard/store";

import { aaSessionStorage }   from "../../../../sessionStorage.js";
import { constants }          from "../../../../constants.js";
import { gameSettings }       from "../../../../gameSettings.js";

export class CategoryStore extends WorldSettingArrayStore {
   /**
    * A filter function / Svelte store that can be used with DynArrayReducer and set as a store to TJSInput.
    *
    * @type {(data: object) => boolean}
    */
   static #filterSearch = createFilterQuery("name");

   /**
    * @type {CategoryStores}
    */
   #stores

   /**
    * @param {string}   key -
    *
    * @param {typeof import('svelte/store').Writable} StoreClass -
    *
    * @param {object[]} [defaultData] -
    */
   constructor(key, StoreClass, defaultData = []) {
      super({ gameSettings, moduleId: constants.moduleId, key, StoreClass, defaultData });

      this.dataReducer.filters.add(CategoryStore.#filterSearch);

      this.#stores = {
         scrollTop: aaSessionStorage.getStore(`${constants.moduleId}-category-scrolltop-${key}`, 0)
      };
   }

   get filterSearch() { return CategoryStore.#filterSearch; }

   get icon() { return localize(`autoanimations.app.${this.key}.icon`); }

   get label() { return localize(`autoanimations.app.${this.key}.label`); }

   /**
    * @returns {CategoryStores}
    */
   get stores() { return this.#stores; }

   /**
    * Sorts data entries by name attribute.
    */
   sortAlpha() {
      this._data.sort((a, b) => {
         const aName = a?.name ?? '';
         const bName = b?.name ?? '';
         return aName.localeCompare(bName);
      });

      this._updateSubscribers();
   }
}

/**
 * @typedef {object} CategoryStores
 *
 * @property {import('svelte/store').Writable<number>} scrollTop - Stores current scroll top.
 */
