<script>
    import {
       ripple,
       rippleFocus }                from "#standard/action/animate/composable/ripple";

    import {
       TJSIconButton,
       TJSToggleIconButton }        from "#standard/component/button";

    import { TJSInput }             from "#standard/component/form";

    import { TJSMenu }              from "#standard/component/menu";

    import { Hashing }              from "#runtime/util";

    import ButtonOpenCloseAll       from "./ButtonOpenCloseAll.svelte";
    import { createOverflowItems }  from "./createOverflowItems.js";

    //import * as addDefaultData from "./addSections.js"
    import * as newSection from "../../store/default-data/newSection"
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
       type: "search"
    };

    const buttonSort = {
       icon: "fas fa-sort-alpha-down",
       efx: ripple(),
       styles: { "margin-left": "auto" },
       title: "autoanimations.menus.sortmenu"
    };

    const buttonOverflow = {
       icon: 'fas fa-ellipsis-v',
       efx: ripple(),
       styles: { 'margin-left': '0.5em' }
    };

    $: menu = {
       items: createOverflowItems(category),
    }

    $: menuTab = category.key.split("-")[1];

    function addEntry() {
      let newData = newSection[menuTab]()
      //newData.id = Hashing.uuidv4();
      category.createEntry(newData)
    }
</script>

<header>
    <TJSIconButton button={buttonAdd} on:click={() => addEntry()} />
    <ButtonOpenCloseAll {category} />
    <TJSInput {input} />
    <TJSIconButton button={buttonSort} on:click={() => category.sortAlpha()} />
    <TJSToggleIconButton button={buttonOverflow}>
        <TJSMenu {menu} />
    </TJSToggleIconButton>
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
