<script>
    import CategoryControl      from "./CategoryControl.svelte";
    import CategoryList         from "./CategoryList.svelte";

    import { autoRecStores }    from "../../store/AutoRecStores.js";

    const selected = autoRecStores.selected;
</script>

<header>
    <ul>
    {#each autoRecStores.categories as category}
        <li class:active={$selected === category} on:click={() => $selected = category}>
            <i class={category.icon} />{category.label}
        </li>
        <span />
    {/each}
    </ul>
</header>

<CategoryControl category={$selected} />
<CategoryList category={$selected} />

<style lang=scss>
  header {
    flex: none;
    padding: 0.5em 0.5em;

    background: rgb(204, 204, 204);
    border-bottom: 1px solid rgb(100, 100, 100);

    height: fit-content;
    width: 100%;

    ul {
      display: flex;
      flex-wrap: nowrap;
      justify-content: center;
      align-items: center;
      height: 100%;

      list-style-type: none;
      padding: 0;
      margin: 0;

      li {
        margin: auto;

        color: rgb(50, 50, 50);

        font-family: "Modesto Condensed", "Palatino Linotype", serif;
        font-size: 1.1em;
        font-weight: bold;
        vertical-align: middle;

        white-space: nowrap;
        transition: all .2s ease-in-out;

        &.active { text-shadow: 0 0 5px rgba(255, 0, 0, 0.687); }
        &:hover:not(.active) { transform: scale(1.05); }

        i { margin-right: 0.25em; }
      }

      span:not(:last-child) {
        display: inline-block;
        width: 1px;
        height: 75%;
        background: rgb(100, 100, 100);
      }
    }
  }
</style>

