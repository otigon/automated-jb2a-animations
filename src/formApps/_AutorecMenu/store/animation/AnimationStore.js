import { propertyStore } from "@typhonjs-fvtt/runtime/svelte/store";

import { CategoryStore } from "../category/CategoryStore.js";
import { aaSessionStorage } from "../../../../sessionStorage.js";
import { constants } from "../../../../constants.js";

import {
   aaTypeMenu,
   aaNameMenu,
   aaVariantMenu,
   aaColorMenu,
} from "../../../../animation-functions/databases/jb2a-menu-options.js";


export class AnimationStore extends CategoryStore.EntryStore {
   /** @type {AnimationPropertyStores} */
   #stores;

   #sessionStorage = {}

   /**
    * @param {object}   data -
    */
   constructor(data = {}) {
      super(data);

      // Save sessionStorage ID.
      this.#sessionStorage.folderOpen = `${constants.moduleId}-anim-folder-${this.id}`;

      this.#stores = {
         folderOpen: aaSessionStorage.getStore(this.#sessionStorage.folderOpen, false),

         label: propertyStore(this, 'label'),
      };
   }

   /**
    * Invoked by WorldSettingArrayStore to provide custom duplication.
    *
    * @param {object}   data - A copy of local data w/ new ID already set.
    *
    * @param {CategoryStore} categoryStore - The source WorldSettingArrayStore instance.
    */
   static duplicate(data, categoryStore) {
      // Provide a unique label appending an indexed counter.
      if (typeof data?.label === 'string') {
         let cntr = 1;
         const baseName = data.label ?? '';

         do {
            data.label = `${baseName}-${cntr++}`;
         } while (categoryStore.findEntry((entry) => entry.label === data.label) !== void 0);
      }
   }

   /**
    * @returns {AnimationPropertyStores}
    */
   get stores() { return this.#stores; }

   // ----------------------------------------------------------------------------------------------------------------

   /**
    * @returns {boolean} Current folder open state.
    */
   get folderState() {
      return aaSessionStorage.getItem(this.#sessionStorage.folderOpen);
   }

   /**
    * @returns {string}
    */
   get label() { return this._data.label ?? ''; }

   /**
    * @param {boolean}  folderOpen - Sets folder opened state.
    */
   set folderState(folderOpen) { this.#stores.folderOpen.set(folderOpen); }

   /**
    * @param {string} label -
    */
   set label(label) { this.#stores.label.set(label); }

   /**
    * @param {object}   data -
    */
   set(data) {
      if (data.label !== void 0) {
         if (typeof data.label !== 'string') { throw new TypeError(`'data.label' is not a string.`); }
         this._data.label = data.label;
      }

      this._updateSubscribers();
   }
   
   async resetPrimaryVideoMenu(section, isOnToken) {
      const menuDB = isOnToken ? "static" : this._data.menu === "ontoken" || this._data.menu === "aura" ? "static" : this._data.menu;
      this._data[section].video.menuType = Object.keys(aaTypeMenu[menuDB])[0];
      this.primaryVideo("menuTypeChange", section, isOnToken);

   }
   primaryVideo(data, section, isOnToken) {
      let menuDB = isOnToken ? "static" : this._data.menu === "ontoken" || this._data.menu === "aura" ? "static" : this._data.menu;
      menuDB = section === 'explosion' ? "static" : menuDB;
      switch (data) {
         case "menuTypeList":
            let menuTypeMenu = Object.entries(aaTypeMenu[menuDB] || {});
            return menuTypeMenu
         case "menuTypeChange":
            let menuType = this._data[section].video.menuType;
            this._data[section].video.animation = Object.keys(aaNameMenu[menuDB][menuType])[0];
            this._data[section].video.variant = Object.keys(aaVariantMenu[menuDB][menuType][this._data[section].video.animation])[0];
            this._data[section].video.color = Object.keys(aaColorMenu[menuDB][menuType][this._data[section].video.animation][this._data[section].video.variant])[0];
            break;
         case "animationList":
            return Object.entries(aaNameMenu[menuDB][this._data[section].video.menuType])
         case "animationChange":
            let animation = this._data[section].video.animation;
            this._data[section].video.variant = Object.keys(aaVariantMenu[menuDB][this._data[section].video.menuType][animation])[0];
            this._data[section].video.color = Object.keys(aaColorMenu[menuDB][this._data[section].video.menuType][animation][this._data[section].video.variant])[0];
            break;
         case "variantList":
            return Object.entries(aaVariantMenu[menuDB][this._data[section].video.menuType][this._data[section].video.animation])
         case "variantChange":
            color = Object.keys(
               aaColorMenu[menuDB][this._data[section].video.menuType][this._data[section].video.animation][this._data[section].video.variant])[0];
            break;
         case "colorList":
            return Object.entries(aaColorMenu[menuDB][this._data[section].video.menuType][this._data[section].video.animation][this._data[section].video.variant]);
         case "dbPath":
            return this._data[section].video.color === "random" 
            ? `autoanimations.${menuDB}.${this._data[section].video.menuType}.${this._data[section].video.animation}.${this._data[section].video.variant}`
            : `autoanimations.${menuDB}.${this._data[section].video.menuType}.${this._data[section].video.animation}.${this._data[section].video.variant}.${this._data[section].video.color}`
      }
   }

   setCustom(path, section) {
      this._data[section].video.customPath = path;
   }
   async selectCustom(section) {
      const current = this._data[section].video.customPath;
      const picker = new FilePicker({
         type: "imagevideo",
         current,
         callback: (path) => {
            this.setCustom(path, section)
         },
      });
      setTimeout(() => {
         picker.element[0].style.zIndex = `${Number.MAX_SAFE_INTEGER}`;
      }, 100);
      await picker.browse(current);

   }
}

/**
 * @typedef {object} AnimationPropertyStores
 *
 * @property {import('svelte/store').Writable<boolean>} folderOpen - Session storage folder open store.
 *
 * @property {import('svelte/store').Writable<string>} label - Animation label.
 */
