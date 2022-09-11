import { writable }           from "svelte/store";

import { localize }           from "@typhonjs-fvtt/runtime/svelte/helper";

import {
   createFilterQuery,
   WorldSettingArrayStore }   from "@typhonjs-fvtt/svelte-standard/store";


import { aaSessionStorage }   from "../../../../sessionStorage.js";
import { constants }          from "../../../../constants.js";
import { gameSettings }       from "../../../../gameSettings.js";

import OptionsDialog from "../../components/animation/components/options/optionsInfoDialog.js";
import CopyClipBoard from "../../components/animation/components/copyOnClick.svelte"
import VideoPreview from "../../components/animation/components/videoPreview/videoPreview.js";

import { 
   newTypeMenu,
   newNameMenu,
   newVariantMenu,
   newColorMenu,
   aaReturnWeapons,
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

         scrollTop: aaSessionStorage.getStore(`${constants.moduleId}-category-scrolltop-${key}`, 0),
         // This allow setting the current Index of the section for the Video Preview app
         videoIDX: writable(void 0),
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


   loadPreviews() {
      if (
         Object.values(ui.windows).find(
            (w) => w.id === `Autorec-Video-Preview`
         )
      ) { return; }

      new VideoPreview().render(true);
   }

   getMenuDB(section, idx, isOnToken) {
      let menuDB = isOnToken ? "static" : this._data[idx]._data.menu === "ontoken" || this._data[idx]._data.menu === "aura" ? "static" : this._data[idx]._data.menu;
      menuDB = section === 'secondary' ? "static" : menuDB;
      return menuDB
   }

   menuTypeList(menuDB = "static") {
      return newTypeMenu[menuDB] || [];
   }
   animationList(section, idx, section02 = "video", menuDB = "static") {
      let menuType = this._data[idx]._data[section][section02].menuType;

      return newNameMenu[menuDB][menuType] || [];
   }
   variantList(section, idx, section02 = "video", menuDB = "static") {
      let menuType = this._data[idx]._data[section][section02].menuType;
      let animation = this._data[idx]._data[section][section02].animation;

      return newVariantMenu[menuDB][menuType]?.[animation] || [];
   }
   colorList(section, idx, section02 = "video", menuDB = "static") {
      let menuType = this._data[idx]._data[section][section02].menuType;
      let animation = this._data[idx]._data[section][section02].animation;
      let variant = this._data[idx]._data[section][section02].variant;

      return newColorMenu[menuDB][menuType]?.[animation]?.[variant] || [];
   }

   async databaseToClipboard(section, idx, section02, dbSection) {
      const dbPath = await this.getDBPath(section, idx, section02, dbSection);
      const app = new CopyClipBoard({
          target: document.getElementById("clipboard"),
          props: {dbPath},
      });
      app.$destroy();
   };

   async getDBPath(section, idx, section02 = "video", menuDB = "static") {
      let menuType = this._data[idx]._data[section][section02].menuType;
      let animation = this._data[idx]._data[section][section02].animation;
      let variant = this._data[idx]._data[section][section02].variant;
      let color = this._data[idx]._data[section][section02].color;
      return color === "random" 
      ? `autoanimations.${menuDB}.${menuType}.${animation}.${variant}`
      : `autoanimations.${menuDB}.${menuType}.${animation}.${variant}.${color}`

   }
   menuTypeChange(section, idx, section02 = "video", menuDB = "static") {
      let menuType = this._data[idx]._data[section][section02].menuType;
      this._data[idx]._data[section][section02].animation = newNameMenu[menuDB][menuType][0][0];

      let animation = this._data[idx]._data[section][section02].animation;
      this._data[idx]._data[section][section02].variant = newVariantMenu[menuDB][menuType][animation][0][0];

      let variant = this._data[idx]._data[section][section02].variant;
      this._data[idx]._data[section][section02].color = newColorMenu[menuDB][menuType][animation][variant][0][0]
   }

   animationChange(section, idx, section02 = "video", menuDB = "static") {
      let menuType = this._data[idx]._data[section][section02].menuType;
      let animation = this._data[idx]._data[section][section02].animation;
      this._data[idx]._data[section][section02].variant = newVariantMenu[menuDB][menuType][animation][0][0];

      let variant = this._data[idx]._data[section][section02].variant;
      this._data[idx]._data[section][section02].color = newColorMenu[menuDB][menuType][animation][variant][0][0];
   }

   variantChange(section, idx, section02 = "video", menuDB = "static") {
      let menuType = this._data[idx]._data[section][section02].menuType;
      let animation = this._data[idx]._data[section][section02].animation;
      let variant = this._data[idx]._data[section][section02].variant;
      this._data[idx]._data[section][section02].color = newColorMenu[menuDB][menuType][animation][variant][0][0];
   }

   optionsInfo() {
      if (
         Object.values(ui.windows).find(
            (w) => w.id === `Options-Information`
         )
      ) { return; }
      new OptionsDialog().render(true)
   }
   get typeMenu() { return newTypeMenu }
   get animationMenu() { return newNameMenu }
   get variantMenu() { return newVariantMenu }
   get colorMenu() { return newColorMenu }
   get returnWeapons() { return aaReturnWeapons }

   async openMacro(data) {
      if (!data) {
         ui.warn(`Automated Animations: Cannot locate Macro ${data}`);
         return;
      }
      // Credit to Wasp, Zhell, Gazkhan and MrVauxs for the code in this section
      if (data.startsWith("Compendium")) {
          let packArray = data.split(".");
          let pack = game.packs.get(`${packArray[1]}.${packArray[2]}`);
          if (!pack) {
              ui.notifications.info(
                  `Autoanimations | Compendium ${packArray[1]}.${packArray[2]} was not found`
              );
              return;
          }
          let macroFilter = pack.index.filter((m) => m.data === packArray[3]);
          if (!macroFilter.length) {
              console.log("YES");
              ui.notifications.info(
                  `Autoanimations | A macro named ${packArray[3]} was not found in Compendium ${packArray[1]}.${packArray[2]}`
              );
              return;
          }
          let macroDocument = await pack.getDocument(macroFilter[0]._id);
          macroDocument.sheet.render(true);
      } else {
          if (!data) {
              return;
          }
          let getTest = game.macros.getName(data);
          if (!getTest) {
              ui.notifications.info(
                  `Autoanimations | Could not find the macro named ${data}`
              );
              return;
          }
          game.macros.getName(data).sheet.render(true);
      }
  }

  playSound(data) {
   const currentSection = data || {};
   const file = currentSection?.file;
   const volume = currentSection?.volume ?? .75;
   const startTime = currentSection?.startTime ?? 0;
   new Sequence()
       .sound()
       .file(file)
       .volume(volume)
       .startTime(startTime)
       .play();
   }

   async selectCustom(section, section02 = "video", idx) {
      const current = this._data[idx]._data[section][section02].customPath;
      const picker = new FilePicker({
         type: "imagevideo",
         current,
         callback: (path) => {
            this._data[idx]._data[section][section02].customPath = path;
            this._data[idx]._updateSubscribers()
            },
      });
      setTimeout(() => {
         picker.element[0].style.zIndex = `${Number.MAX_SAFE_INTEGER}`;
      }, 100);
      await picker.browse(current);

   }

   async selectSound(section, idx) {
      const current = this._data[idx]._data[section].sound.file;
      const picker = new FilePicker({
          type: "audio",
          current,
          callback: (path) => {
            this._data[idx]._data[section].sound.file = path;
            this._data[idx]._updateSubscribers()
            },
      });
      setTimeout(() => {
          picker.element[0].style.zIndex = `${Number.MAX_SAFE_INTEGER}`;
      }, 100);
      await picker.browse(current);
  }

  async selectSoundNested(section, section02, idx) {
   const current = this._data[idx]._data[section][section02].sound.file;
   const picker = new FilePicker({
       type: "audio",
       current,
       callback: (path) => {
         this._data[idx]._data[section][section02].sound.file = path;
         this._data[idx]._updateSubscribers()
      },
   });
   setTimeout(() => {
       picker.element[0].style.zIndex = `${Number.MAX_SAFE_INTEGER}`;
   }, 100);
   await picker.browse(current);
   }

   openSequencerViewer() {
      Sequencer.DatabaseViewer.show(true)
   }

}

/**
 * @typedef {object} CategoryStores
 *
 * @property {import('svelte/store').Writable<boolean>} allFoldersOpen - True when all visible folders are open.
 *
 * @property {import('svelte/store').Writable<number>} scrollTop - Stores current scroll top.
 */
