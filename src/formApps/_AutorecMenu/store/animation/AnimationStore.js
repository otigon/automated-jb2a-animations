import { propertyStore } from "#runtime/svelte/store/writable-derived";

import { FVTTFilePickerControl } from "#standard/application/control/filepicker";

import { CategoryStore } from "../category/CategoryStore.js";

import { constants } from "#constants";
import { aaSessionStorage } from "#sessionStorage";

/*
import {
   aaTypeMenu,
   aaNameMenu,
   aaVariantMenu,
   aaColorMenu,
} from "../../../../animation-functions/databases/jb2a-menu-options.js";
*/

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
         delete data.metaData;
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

   async selectCustom(section, section02 = "video") {
      const current = this._data[section][section02].customPath;

      const path = await FVTTFilePickerControl.browse({
         modal: true,
         type: "imagevideo",
         current
      });

      if (path) {
         this._data[section][section02].customPath = path;
         this._updateSubscribers();
      }
   }

   async selectSound(section) {
      const current = this._data[section].sound.file;

      const path = await FVTTFilePickerControl.browse({
         modal: true,
         type: "audio",
         current
      });

      if (path) {
         this._data[section].sound.file = path;
         this._updateSubscribers();
      }
   }

   async getSource() {
      if (!this._data.metaData) {
         ui.notifications.info(`Automated Animations | No Defined MetaData on this Entry`)
      } else {
         console.log(this._data.metaData);
         ui.notifications.info("Automated Animations | MetaData logged to Dev Console");
         Hooks.callAll("AutomatedAnimations.metaData", this._data)
      }
   }
}

/**
 * @typedef {object} AnimationPropertyStores
 *
 * @property {import('svelte/store').Writable<boolean>} folderOpen - Session storage folder open store.
 *
 * @property {import('svelte/store').Writable<string>} label - Animation label.
 */
