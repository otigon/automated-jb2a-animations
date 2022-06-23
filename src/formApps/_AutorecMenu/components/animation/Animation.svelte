<script>
   import {
      ripple,
      rippleFocus }                 from '@typhonjs-fvtt/svelte-standard/action';

   import { localize }              from "@typhonjs-fvtt/runtime/svelte/helper";

   import {
      TJSInput,
      TJSMenu,
      TJSSvgFolder,
      TJSToggleIconButton }         from "@typhonjs-fvtt/svelte-standard/component";

   import TJSIconButton             from "../_tjs/TJSIconButton.svelte";

   import { createOverflowItems }   from "./createOverflowItems.js";

   import { aaSessionStorage }      from "../../../../sessionStorage.js";
   import { constants }             from "../../../../constants.js";

   /** @type {AnimationStore} */
   export let animation;

   /**
    * @type {object} Defines folder data for TJSIconFolder.
    */
   const folder = {
      store: aaSessionStorage.getStore(`${constants.moduleId}-anim-folder-${animation.id}`, false),
   };

   const input = {
      store: animation.stores.name,
      efx: rippleFocus(),
      placeholder: localize("autoanimations.menus.itemName")
   };

   const buttonDuplicate = {
      icon: "far fa-clone",
      efx: ripple(),
      styles: { "margin-left": "0.25em" },
      title: localize("autoanimations.menus.duplicate")
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

<section>
    <TJSSvgFolder {folder}>
        <TJSInput {input} slot=label />
<!-- TODO HAVE TO FIX TJSMenu positioning       -->
<!--        <TJSToggleIconButton button={overflowMenu} slot=summary-end>-->
<!--            <TJSMenu menu={{ items: createOverflowItems() }} />-->
<!--        </TJSToggleIconButton>-->

        <div slot=summary-end>
            <TJSIconButton button={buttonDuplicate} on:click={() => animation.duplicate() } />
            <TJSIconButton button={buttonDelete} on:click={() => animation.delete() } />
        </div>
        Content Forthcoming
    </TJSSvgFolder>
</section>

<style lang=scss>
  section {
    background: rgba(199, 199, 199, 0.85);
    border: 2px solid black;
    border-radius: 0.75em;

    margin-bottom: 3px;

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

  div {
    display: flex;
  }
</style>
