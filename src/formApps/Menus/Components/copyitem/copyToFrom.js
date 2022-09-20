import { TJSDialog } from "@typhonjs-fvtt/runtime/svelte/application";

import ItemToAutorec from "./itemToAutorec.js";

/**
 * Creates the items for the overflow menu.
 *
 * @param {AnimationStore} animation - Associated animation store.
 *
 * @param {CategoryStore} category - Associated category store.
 *
 * @returns {object[]} Overflow menu items.
 */
export function copyToFrom(animation, isInAutorec) {
   let menu = game.i18n.localize(`autoanimations.animTypes.${isInAutorec.menu}`)
   let contents = [];
   let copyFrom = {
      label: "Copy From Autorec",
      icon: "far fa-clone",
      onclick: async () => {
         if (!animation._data.isEnabled) { return; }
         if (!game.user.isGM) {
            console.error("Automated Animations | NON-GM users cannot copy items to the Global Automatic Recognition Menu");
            return;
         }
         const label = isInAutorec.label;

         const result = await TJSDialog.confirm({
            title: "Copy Item From Global Menu",
            content: `Are you sure you want copy <strong>${label}</strong> from the <strong>Global ${menu} Menu?</strong>`,
            draggable: false,
            modal: true
         })

         if (result) { animation.copyFromAutorec(isInAutorec) }
      }
   }

   let copyTo = {
      label: "Copy To Autorec", // TODO: localize,
      icon: "far fa-clone",

      onclick: async () => {
         if (!animation._data.isEnabled) { return; }
         if (!game.user.isGM) {
            console.error("Automated Animations | NON-GM users cannot copy items to the Global Automatic Recognition Menu");
            return;
         }
         if (!animation._data.isEnabled || !animation._data.menu) {
            ui.notifications.info("Automated Animations | There is no data present on this item to copy to the Global Automatic Recognition Menu");
            return;
         }
         //const label = animation.label !== "" ? `'${animation._data.label}'` : "'No Item Name'";

         new ItemToAutorec({ animation }).render(true)
      }
   }

   if (game.user.isGM) {
      contents.push(copyFrom)
      contents.push(copyTo)
   } else {
      contents.push(copyFrom)
   }

   return contents;
}
