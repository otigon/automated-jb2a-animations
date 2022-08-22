import { writable }           from "svelte/store";

import { localize }           from "@typhonjs-fvtt/runtime/svelte/helper";

import {
   createFilterQuery,
   WorldSettingArrayStore }   from "@typhonjs-fvtt/svelte-standard/store";

import { aaSessionStorage }   from "../../../../sessionStorage.js";
import { constants }          from "../../../../constants.js";
import { gameSettings }       from "../../../../gameSettings.js";

import { 
   aaTypeMenu,
   aaNameMenu,
   aaVariantMenu,
   aaColorMenu,
   newTypeMenu,
   newNameMenu,
   newVariantMenu,
   newColorMenu
} from "../../../../animation-functions/databases/jb2a-menu-options.js";

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
      super({
         gameSettings,
         namespace: constants.moduleId,
         key,
         StoreClass,
         defaultData,
         dataReducer: true
      });

      this.dataReducer.filters.add(CategoryStore.#filterSearch);

      this.#stores = {
         allFoldersOpened: writable(void 0),

         scrollTop: aaSessionStorage.getStore(`${constants.moduleId}-category-scrolltop-${key}`, 0)
      };
      console.log(newVariantMenu)
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
   calcAllFolderState()
   {
      let allFoldersOpened = true;

      for (const store of this.dataReducer)
      {
         if (!(allFoldersOpened &= store.folderState)) { break; }
      }

      this.#stores.allFoldersOpened.set(!!allFoldersOpened);
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

      this.updateSubscribers();
   }

   getMenuDB(section, idx, isOnToken) {
      let menuDB = isOnToken ? "static" : this._data[idx]._data.menu === "ontoken" || this._data[idx]._data.menu === "aura" ? "static" : this._data[idx]._data.menu;
      menuDB = section === 'explosion' ? "static" : menuDB;
      return menuDB
   }

   videoChange(data, section, idx) {
      //let menuDB = isOnToken ? "static" : this._data[idx]._data.menu === "ontoken" || this._data[idx]._data.menu === "aura" ? "static" : this._data[idx]._data.menu;
      //menuDB = section === 'explosion' ? "static" : menuDB;
      let menuDB = this._data[idx]._data[section].dbSection
      switch (data) {
         case "menuTypeList":
            let menuTypeMenu = newTypeMenu[menuDB] || [];
            //console.log(menuTypeMenu)
            return menuTypeMenu
         case "menuTypeChange":
            let menuType = this._data[idx]._data[section].video.menuType;
            this._data[idx]._data[section].video.animation = newNameMenu[menuDB][menuType][0][0] //Object.keys(aaNameMenu[menuDB][menuType])[0];
            this._data[idx]._data[section].video.variant = newVariantMenu[menuDB][menuType][this._data[idx]._data[section].video.animation][0][0] //Object.keys(aaVariantMenu[menuDB][menuType][this._data[idx]._data[section].video.animation])[0];
            this._data[idx]._data[section].video.color = newColorMenu[menuDB][menuType][this._data[idx]._data[section].video.animation][this._data[idx]._data[section].video.variant][0][0] //Object.keys(aaColorMenu[menuDB][menuType][this._data[idx]._data[section].video.animation][this._data[idx]._data[section].video.variant])[0];
            break;
         case "animationList":
            return newNameMenu[menuDB][this._data[idx]._data[section].video.menuType] || [];
         case "animationChange":
            let animation = this._data[idx]._data[section].video.animation;
            this._data[idx]._data[section].video.variant = newVariantMenu[menuDB][this._data[idx]._data[section].video.menuType][animation][0][0] //Object.keys(aaVariantMenu[menuDB][this._data[idx]._data[section].video.menuType][animation])[0];
            this._data[idx]._data[section].video.color = newColorMenu[menuDB][this._data[idx]._data[section].video.menuType][animation][this._data[idx]._data[section].video.variant][0][0] //Object.keys(aaColorMenu[menuDB][this._data[idx]._data[section].video.menuType][animation][this._data[idx]._data[section].video.variant])[0];
            break;
         case "variantList":
            return newVariantMenu[menuDB][this._data[idx]._data[section].video.menuType]?.[this._data[idx]._data[section].video.animation] || [];
         case "variantChange":
            this._data[idx]._data[section].video.color = newColorMenu[menuDB][this._data[idx]._data[section].video.menuType][this._data[idx]._data[section].video.animation][this._data[idx]._data[section].video.variant][0][0] //Object.keys(aaColorMenu[menuDB][this._data[idx]._data[section].video.menuType][this._data[idx]._data[section].video.animation][this._data[idx]._data[section].video.variant])[0];
            break;
         case "colorList":
            return newColorMenu[menuDB][this._data[idx]._data[section].video.menuType]?.[this._data[idx]._data[section].video.animation]?.[this._data[idx]._data[section].video.variant] || [];
         case "dbPath":
            return this._data[idx]._data[section].video.color === "random" 
            ? `autoanimations.${menuDB}.${this._data[idx]._data[section].video.menuType}.${this._data[idx]._data[section].video.animation}.${this._data[idx]._data[section].video.variant}`
            : `autoanimations.${menuDB}.${this._data[idx]._data[section].video.menuType}.${this._data[idx]._data[section].video.animation}.${this._data[idx]._data[section].video.variant}.${this._data[idx]._data[section].video.color}`
      }
   }
   get typeMenu() { return newTypeMenu }
   get animationMenu() { return newNameMenu }
   get variantMenu() { return newVariantMenu }
   get colorMenu() { return newColorMenu }

}

/**
 * @typedef {object} CategoryStores
 *
 * @property {import('svelte/store').Writable<boolean>} allFoldersOpen - True when all visible folders are open.
 *
 * @property {import('svelte/store').Writable<number>} scrollTop - Stores current scroll top.
 */
