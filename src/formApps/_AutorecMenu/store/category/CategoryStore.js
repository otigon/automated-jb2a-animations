import { writable }           from "svelte/store";

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
   static #filterSearch = createFilterQuery("label");

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
         allFoldersOpened: writable(false),

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
    * In this case this solution is better than creating a derived store from the AnimationStore sessionStorage folder
    * state. The below code uses the current dataReducer count and is also triggered by any open / close of any children
    * folders. The calculation for "all folders open" can short circuit on the first false / closed value.
    *
    * @param {import('@typhonjs-fvtt/runtime/svelte/store').DynArrayReducer<AnimationStore>}   dataReducer -
    */
   calcAllFolderState(dataReducer)
   {
      let allFoldersOpened = true;

      for (const store of dataReducer)
      {
         if (!(allFoldersOpened &= store.folderState)) { break; }
      }

      this.#stores.allFoldersOpened.set(!!allFoldersOpened);

console.log(`!!! CS calcAllFolderState - 0 - allFoldersOpened: ${!!allFoldersOpened}`)
   }

   /**
    * Sorts data entries by name attribute.
    */
   sortAlpha() {
      this._data.sort((a, b) => {
         const aLabel = a?.label ?? '';
         const bLabel = b?.label ?? '';
         return aLabel.localeCompare(bLabel);
      });

      this._updateSubscribers();
   }
}

/**
 * @typedef {object} CategoryStores
 *
 * @property {import('svelte/store').Writable<number>} scrollTop - Stores current scroll top.
 */
