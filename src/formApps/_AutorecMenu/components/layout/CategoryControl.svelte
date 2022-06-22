<script>
    import { localize }         from "@typhonjs-fvtt/runtime/svelte/helper";

    import {
       ripple,
       rippleFocus }            from '@typhonjs-fvtt/svelte-standard/action';

    import { TJSInput }         from '@typhonjs-fvtt/svelte-standard/component';

    // TODO: This component will be added to @typhonjs-fvtt/svelte-standard
    import TJSIconButton        from "../_tjs/TJSIconButton.svelte";

    /** @type {CategoryStore} */
    export let category;

    const searchInput = {
       store: category.filterSearch,
       efx: rippleFocus(),
       placeholder: localize("autoanimations.menus.search"),
    };

    const alphaSortButton = {
       icon: 'fas fa-sort-alpha-down',
       efx: ripple(),
       styles: { 'margin-left': '4px' }
    };
</script>

<section>
    <TJSInput input={searchInput}/>
    <TJSIconButton button={alphaSortButton} on:click={() => category.sortAlpha()}/>
</section>

<style lang=scss>
  section {
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;

    padding: 0.25em 0.25em;

    background: rgb(204, 204, 204);
    border-bottom: 1px solid rgb(100, 100, 100);

    height: fit-content;
    width: 100%;

    // TJSInput styles
    --tjs-input-text-align: center;
    --tjs-input-border: 1.5px outset rgba(0, 0, 0, 0.5);
    --tjs-input-border-radius: 1em;
  }
</style>
