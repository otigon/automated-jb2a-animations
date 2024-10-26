import { TJSDialog } from "#runtime/svelte/application";

import AdvancedAutorec from "./advancedSearch/AdvancedAutorec.svelte";

/**
 * Creates the items for the overflow menu.
 *
 * @param {AnimationStore} animation - Associated animation store.
 *
 * @param {CategoryStore} category - Associated category store.
 *
 * @returns {object[]} Overflow menu items.
 */
export function createOverflowItems(animation, category)
{
   return [
      {
         label: "autoanimations.menus.duplicate",
         icon: "far fa-clone",
         onPress: () => category.duplicateEntry(animation.id)
      },
      {
         label: "Delete", // TODO: localize,
         icon: "far fa-trash-alt",
         onPress: async () => {
            const label = animation.label !== "" ? `'${animation.label}'` : "'No Item Name'";

            const result = await TJSDialog.confirm({
               title: "Delete Animation?",
               content: `Are you sure you want to delete: ${label}`,
               draggable: false,
               modal: true
            })

            if (result) { category.deleteEntry(animation.id) }
         }
      },
      {
         label: "Metadata",
         icon: "fas fa-heart-pulse",
         onPress: () => animation.getSource()
      },
      {
         label: "Advanced",
         icon: "fab fa-searchengin",
         onPress: async () => {
            new TJSDialog({
               modal: true,
               title: "Advanced Features: " + `${animation._data.label}`,
               content: {
                   class: AdvancedAutorec,
                   props: {
                       animation
                   },
               },
               defaultYes: false,
           }).render(true);
        }
      }
   ];
}
