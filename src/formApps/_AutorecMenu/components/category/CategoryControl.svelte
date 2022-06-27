<script>
    import {
       ripple,
       rippleFocus }            from "@typhonjs-fvtt/svelte-standard/action";

    import {
       TJSIconButton,
       TJSInput }               from "@typhonjs-fvtt/svelte-standard/component";

    import ButtonOpenCloseAll   from "./ButtonOpenCloseAll.svelte";

    /** @type {CategoryStore} */
    export let category;

    const buttonAdd = {
       icon: "fas fa-plus",
       efx: ripple(),
       title: "autoanimations.menus.add"
    };

    const input = {
       store: category.filterSearch,
       efx: rippleFocus(),
       placeholder: "autoanimations.menus.search",
       options: { clearOnEscKey: true }
    };

    const buttonDelete = {
       icon: "fas fa-sort-alpha-down",
       efx: ripple(),
       styles: { "margin-left": "auto" },
       title: "autoanimations.menus.sortmenu"
    };
</script>

<header>
    <TJSIconButton button={buttonAdd} on:click={() => category.add()} />
    <ButtonOpenCloseAll {category} />
    <TJSInput {input} />
    <TJSIconButton button={buttonDelete} on:click={() => category.sortAlpha()} />
</header>

<style lang=scss>
  header {
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;

    padding: 0.25em 0.25em;

    background: rgba(199, 199, 199, 0.85);
    border-bottom: 2px solid rgb(100, 100, 100);

    height: fit-content;
    width: 100%;

    // TJSInput styles
    --tjs-input-text-align: center;
    --tjs-input-border: 1.5px outset rgba(0, 0, 0, 0.5);
    --tjs-input-border-radius: 1em;
    --tjs-input-width: 70%;
  }
</style>
