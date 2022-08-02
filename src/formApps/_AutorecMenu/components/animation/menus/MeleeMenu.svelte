<script>
   import {
      ripple,
      rippleFocus }                 from "@typhonjs-fvtt/svelte-standard/action";

   import {
      TJSInput,
      TJSMenu,
      TJSSvgFolder,
      TJSToggleIconButton }         from "@typhonjs-fvtt/svelte-standard/component";

   import { createOverflowItems }   from "../createOverflowItems.js";

   import VideoSelect from "./VideoSelect.svelte";
   import MeleeOptions from "./MeleeOptions.svelte";

   /** @type {AnimationStore} */
   export let animation;
   //console.log(animation)
   /** @type {CategoryStore} */
   export let category;

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
   }
</script>

<div>
    <TJSSvgFolder {folder}>
        <TJSInput {input} slot=label />
        <TJSToggleIconButton button={buttonOverflow} slot=summary-end>
            <TJSMenu {menu} />
        </TJSToggleIconButton>
        <VideoSelect {animation}/>
        <MeleeOptions {animation}/>
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
