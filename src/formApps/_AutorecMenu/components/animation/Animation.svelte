<script>
   import {
      ripple,
      rippleFocus }                 from "@typhonjs-fvtt/svelte-standard/action";

   import {
      TJSInput,
      TJSMenu,
      TJSSvgFolder,
      TJSToggleIconButton }         from "@typhonjs-fvtt/svelte-standard/component";

   import { createOverflowItems }   from "./createOverflowItems.js";

   /** @type {AnimationStore} */
   export let animation;

   /** @type {CategoryStore} */
   export let category;

   //** Menu builder set in the Category List. Determines which menu set will be rendered*/
   export let menuRoute;
   export let idx;

   /**
    * @type {object} Defines folder data for TJSIconFolder.
    */
   const folder = {
      options: { chevronOnly: true, noKeys: true },
      store: animation.stores.folderOpen
   };

   const input = {
      store: animation.stores.label,
      efx: rippleFocus(),
      placeholder: "autoanimations.menus.itemName",
      options: { cancelOnEscKey: true }
   };

   const buttonOverflow = {
      icon: 'fas fa-ellipsis-v',
      efx: ripple(),
      styles: { 'margin-left': '0.5em' },
      onClickPropagate: false   // Necessary to capture click for Firefox.
   };

   const menu = {
      items: createOverflowItems(animation, category),
   };

   const folderOpen = animation.stores.folderOpen;

   // For performance reasons when the folder is closed the main content Svelte component is not rendered.
   // When the folder is closed `visible` is set to false with a slight delay to allow the closing animation to
   // complete.
   let visible = $folderOpen;

   $: if (!$folderOpen)
   {
      setTimeout(() => visible = false, 500);
   }
   else
   {
      visible = true;
   }
</script>

<div>
   <TJSSvgFolder {folder}>
        <TJSInput {input} slot=label />
        <TJSToggleIconButton button={buttonOverflow} slot=summary-end>
            <TJSMenu {menu} />
        </TJSToggleIconButton>
        {#if visible}
            <svelte:component this={menuRoute} {animation} {idx} {category}/>
        {/if}
   </TJSSvgFolder>
</div>

<style lang=scss>
  div {
    background: rgba(199, 199, 199, 0.85);
    border: 2px solid rgba(0, 0, 0, 0.75);
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
</style>
