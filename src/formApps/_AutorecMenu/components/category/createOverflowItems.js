import { TJSDialog } from "#runtime/svelte/application";

/**
 * Creates the items for the overflow menu.
 *
 * @param {CategoryStore} category - Associated category store.
 *
 * @returns {object[]} Overflow menu items.
 */
export function createOverflowItems(category)
{
   return [
      {
         label: "Delete All", // TODO: localize,
         icon: "far fa-trash-alt",
         onPress: async () => {
            const result = await TJSDialog.confirm({
               title: "Delete All Animations?",
               content: `Are you sure you want to delete all animations from '${category.label}'?`,
               draggable: false,
               modal: true
            })

            if (result) { category.clearEntries(); }
         }
      }
   ];
}
