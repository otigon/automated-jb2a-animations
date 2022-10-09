import { TJSDialog } from "@typhonjs-fvtt/runtime/svelte/application";

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
         onclick: () => category.duplicateEntry(animation.id)
      },
      {
         label: "Delete", // TODO: localize,
         icon: "far fa-trash-alt",
         onclick: async () => {
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
         onclick: () => animation.getSource()
      }
   ];
}
