<script>
   import {
      ripple,
      rippleFocus }                 from "@typhonjs-fvtt/svelte-standard/action";

   import {
      TJSIconButton,
      TJSInput,
      TJSMenu,
      TJSSvgFolder,
      TJSToggleIconButton }         from "@typhonjs-fvtt/svelte-standard/component";

   import { createOverflowItems }   from "./createOverflowItems.js";

   import { aaSessionStorage }      from "../../../../sessionStorage.js";
   import { constants }             from "../../../../constants.js";

   /** @type {AnimationStore} */
   export let animation;

   /** @type {CategoryStore} */
   export let category;

   /**
    * @type {object} Defines folder data for TJSIconFolder.
    */
   const folder = {
      options: { chevronOnly: true, noKeys: true },
      store: aaSessionStorage.getStore(`${constants.moduleId}-anim-folder-${animation.id}`, false)
   };

   const input = {
      store: animation.stores.name,
      efx: rippleFocus(),
      placeholder: "autoanimations.menus.itemName"
   };

   const buttonDuplicate = {
      icon: "far fa-clone",
      efx: ripple(),
      styles: { "margin-left": "0.25em" },
      title: "autoanimations.menus.duplicate"
   };

   const buttonDelete = {
      icon: "far fa-trash-alt",
      efx: ripple(),
      styles: { "margin-left": "0.25em" },
      title: "Delete" // TODO: localize
   };

   const overflowMenu = {
      icon: 'fas fa-ellipsis-v',
      efx: ripple(),
      styles: { 'margin-left': '4px' }
   };
</script>

<div>
    <TJSSvgFolder {folder}>
        <TJSInput {input} slot=label />
<!-- TODO HAVE TO FIX TJSMenu positioning       -->
<!--        <TJSToggleIconButton button={overflowMenu} slot=summary-end>-->
<!--            <TJSMenu menu={{ items: createOverflowItems() }} />-->
<!--        </TJSToggleIconButton>-->

        <span slot=summary-end class=no-summary-click>
            <TJSIconButton button={buttonDuplicate} on:click={() => category.duplicate(animation.id) } />
            <TJSIconButton button={buttonDelete} on:click={() => category.delete(animation.id) } />
        </span>
        Content Forthcoming
    </TJSSvgFolder>
</div>

<style lang=scss>
  div {
    background: rgba(199, 199, 199, 0.85);
    border: 2px solid black;
    border-radius: 0.75em;

    height: fit-content;
    width: 100%;

    // TJSIconFolder styles
    --tjs-summary-width: 98%;
    --tjs-summary-margin: 0 0 0 1%;

    // TJSInput styles
    --tjs-input-text-align: center;
    --tjs-input-border: 1.5px outset rgba(0, 0, 0, 0.5);
    --tjs-input-border-radius: 1em;
  }

  span {
    display: flex;
  }
</style>
