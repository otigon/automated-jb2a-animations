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
         onclick: () => category.deleteEntry(animation.id)
      }
   ];
}
