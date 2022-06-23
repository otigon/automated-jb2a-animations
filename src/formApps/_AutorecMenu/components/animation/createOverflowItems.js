/**
 * Creates the items for the overflow menu.
 *
 * @param {AnimationStore} animation - Associated animation store.
 *
 * @returns {object[]} Overflow menu items.
 */
export function createOverflowItems(animation)
{
   return [
      {
         label: "autoanimations.menus.duplicate",
         icon: "far fa-clone",
         onclick: () => animation.duplicate()
      },
      {
         label: "Delete", // TODO: localize,
         icon: "far fa-trash-alt",
         onclick: () => animation.delete()
      }
   ];
}
