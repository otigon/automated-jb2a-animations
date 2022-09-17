import { TJSDialog } from "@typhonjs-fvtt/runtime/svelte/application";

import CopyToAutorec from "./CopyToAutorec.svelte"
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
   let menu = game.i18n.localize(`autoanimations.animTypes.${animation._data.menu}`)
   return [
      {
         label: "Copy From Autorec",
         icon: "far fa-clone",
         onclick: () => animation.copyFromAutorec(isInAutorec)
      },
      {
         label: "Copy To Autorec", // TODO: localize,
         icon: "far fa-clone",

         onclick: async () => {
            if (!game.user.isGM) { 
               console.error("Automated Animations | NON-GM users cannot copy items to the Global Automatic Recognition Menu");
               return;
            }
            const label = animation.label !== "" ? `'${animation._data.label}'` : "'No Item Name'";
            /*
            const result = await TJSDialog.confirm({
               title: "Copy Item to Global Autorec",
               content: `Are you sure you want copy ${label} to the Global ${menu} Menu?`,
               draggable: false,
               modal: true
            })
            */
            new ItemToAutorec({animation}).render(true)

            //if (result) { animation.copyToAutorec() }
         }
      }
   ];
}
