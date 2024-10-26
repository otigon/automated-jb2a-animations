<script>
   import { setContext }            from "svelte";

   import {
      ripple,
      rippleFocus }                 from "#standard/action/animate/composable/ripple";

   import { TJSSvgFolder }          from "#standard/component/folder";
   import { TJSInput }              from "#standard/component/form";

   import OverflowSlot              from "./OverflowSlot.svelte";

   import { createOverflowItems }   from "./createOverflowItems.js";

   import { selectBuildMenu }       from "../../../Menus/BuildMenu/selectBuildMenu.js";

   /** @type {AnimationStore} */
   export let animation = void 0;

   /** @type {CategoryStore} */
   export let category = void 0;

   //** Menu builder set in the Category List. Determines which menu set will be rendered*/
   export let idx = void 0;

   setContext('animation-data', {animation, category, idx})

   /**
    * @type {object} Defines folder data for TJSIconFolder.
    */
   const folder = {
      options: { chevronOnly: true },
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
      clickPropagate: false   // Necessary to capture click for Firefox.
   };

   const menu = {
      items: createOverflowItems(animation, category),
   };

   $: isExactMatch = $animation.advanced?.exactMatch;
   $: excludedTerms = $animation.advanced?.excludedTerms;
   $: exactMatchButton = {
       icon: isExactMatch ? "fas fa-equals" : excludedTerms?.length ? "fas fa-not-equal" : "",
       title: isExactMatch ? "Exact Match" : excludedTerms?.length ? "Has Excluded Terms" : "",
    };
</script>

<div class=animation>
   <TJSSvgFolder {folder}>
         <TJSInput {input} slot=label />
         <OverflowSlot info={exactMatchButton} {menu} slot=summary-end/>
         <svelte:component this={selectBuildMenu(category.key)} {animation} {idx} {category}/>
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
