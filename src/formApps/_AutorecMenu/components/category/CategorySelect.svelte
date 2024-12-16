<script>
    import CategoryControl      from "./CategoryControl.svelte";
    import CategoryList         from "./CategoryList.svelte";
    import { getContext } from "svelte";
    import { TJSIconButton, TJSToggleIconButton } from "#standard/component/button";

    import MenuManager from "./menuManager/MenuManagerApp.js"
    import { autoRecStores }    from "../../store/AutoRecStores.js";

    const selected = autoRecStores.selected;

    const bottomLabel = game.i18n.localize("autoanimations.menus.menuManager")

    const { application } = getContext("#external");
</script>

<header>
    <ul>
    {#each autoRecStores.categories as category}
        <li class:active={$selected === category} on:click={() => $selected = category} role=presentation>
            <i class={category.icon} />{category.label}
        </li>
        <span />
    {/each}
    </ul>
</header>

<CategoryControl category={$selected} />
<CategoryList category={$selected} />

<footer class="aa-AutorecManager" on:click={() => MenuManager.show()} role=presentation>
  <ul >
    {bottomLabel}
    </ul>
</footer>
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
        cursor: pointer;

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
  footer {
    position: absolute;
    bottom: 0;
    flex: none;
    padding: 0.5em 0.5em;
    cursor: pointer;

    background: rgb(159, 160, 160);
    transition: background .5s;
    border-top: 1px solid rgb(100, 100, 100);

    height: 40px;
    width: 100%;

    font-size: 1em;
    font-weight: bold;
    ul {
      display: flex;
      flex-wrap: nowrap;
      justify-content: center;
      align-items: center;
      height: 100%;

      padding: 0;
      margin: 0;
    }
  }
  footer:hover {
      text-shadow: 0 0 3px rgba(255, 0, 0, 0.4);
      //background: linear-gradient(64.5deg, rgb(167, 167, 167) 40%, rgb(120, 120, 120) 60% );
      background: rgb(145, 145, 145);
  }

</style>

