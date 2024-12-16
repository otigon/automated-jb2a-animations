<script>
  import { getContext } from "svelte";
  import { setContext } from "svelte";

  import { localize }   from "#runtime/util/i18n";

  import { ripple }     from "#standard/action/animate/composable/ripple";

  import { TJSToggleIconButton } from "#standard/component/button";
  import { TJSMenu } from "#standard/component/menu";

  //import CategoryControl      from "./CategoryControl.svelte";

  import CategoryList from "./CategoryList.svelte";
  import Slider from "../../../Menus/Components/options/inputComponents/Slider.svelte";

  import { AAAutorecFunctions } from "../../../../aa-classes/aaAutorecFunctions";
  import { copyToFrom } from "../../../Menus/Components/copyitem/copyToFrom";

  import NoneChosen from "./menus/NoneChosen.svelte";
  import { aefx } from "../../../_AutorecMenu/store/default-data/newSection/aefx.js"

  async function switchVideo() {
    let newMenu = $animation.activeEffectType;
    if (!newMenu) { return; }

    let newData = aefx($animation, newMenu);
    switch (newMenu) {
      case "ontoken":
        $animation.macro = newData.macro;
        $animation.primary = newData.primary;
        $animation.secondary = newData.secondary;
        $animation.soundOnly = newData.soundOnly;
        $animation.source = newData.source;
        break;
      default:
        $animation.macro = newData.macro;
        $animation.primary = newData.primary;
        $animation.secondary = newData.secondary;
        $animation.soundOnly = newData.soundOnly;
        $animation.source = newData.source;
        break;
    }
  }

  /**
   * @ItemStore
   */
  export let animation;
  setContext('animation-data', {animation, category: animation, idx: 0})

  export let item;

  const { application } = getContext("#external");

  let aefxMenu = game.settings.get("autoanimations", "aaAutorec-aefx");

  // Applies flags on Item Update wihtout Closing APP
  async function applyFlags() {
    await item.update({ 'flags.-=autoanimations': null })
    await item.update({ "flags.autoanimations": $animation });
  }

  // Applies flags on Item Update and Closes the APP
  async function closeApp() {
    await item.update({ 'flags.-=autoanimations': null })
    await item.update({ "flags.autoanimations": $animation });
    application.close();
  }

  //let itemName = item.label;
  //Check the Autorec Menu for a matching Section
  $: isInAutorec = AAAutorecFunctions.singleMenuSearch(aefxMenu, AAAutorecFunctions.rinseName($animation.label), $animation.label);

  let menu = isInAutorec
    ? game.i18n.localize(`autoanimations.animTypes.${isInAutorec.menu}`)
    : "";

  let newLabel = isInAutorec
    ? `Menu: ${menu} - Label: ${isInAutorec.label}`
    : `No Autorec match found`;

  $: disabledLabel = $animation.isEnabled
    ? game.i18n.localize("autoanimations.menus.animation") +
      " " +
      game.i18n.localize("autoanimations.menus.enabled")
    : game.i18n.localize("autoanimations.menus.animation") +
      " " +
      game.i18n.localize("autoanimations.menus.disabled");

  $: isEnabled = $animation.isEnabled;
  $: isCustomized = $animation.isCustomized;
  $: menuType = $animation.activeEffectType;

  const buttonOverflow = {
    icon: "fas fa-ellipsis-v",
    efx: ripple(),
    title: "Copy To/From",
    styles: { "margin-left": "0.5em" },
    clickPropagate: false, // Necessary to capture click for Firefox.
  };

  const subMenu = {
    items: copyToFrom(animation, item, aefxMenu, true),
  };

</script>

<header class="animation">
  <ul>
    <div style="grid-row: 1/2; grid-column: 1/2">
      <Slider label={disabledLabel} field="isEnabled" />
    </div>
    <div
      style="grid-row: 2/3; grid-column: 1/2"
      class={!isEnabled ? "aa-disableOpacity" : ""}
    >
      <Slider
        label={localize("autoanimations.menus.customize") + " " + "Item"}
        field="isCustomized"
      />
    </div>
    <div
      style="grid-row: 1 / 2; grid-column: 2/3;"
      class="autorecLabel {isInAutorec ? 'aa-bgGreen' : 'aa-bgRed'} {!isEnabled
        ? 'aa-disableOpacity'
        : ''}"
    >
      {#if isInAutorec}
        <label for="" style="font-size: 15px; font-weight:bold">
          {localize('autoanimations.menus.globalFound')} <br />
        </label>
      {:else}
        <label for="" style="font-size: 15px; font-weight:bold">
          {localize('autoanimations.menus.globalNotFound')}
        </label>
      {/if}
    </div>
    <div
      style="grid-row: 1/2; grid-column: 3/4"
      class={!isEnabled ? "aa-disableOpacity" : ""}
    >
      <TJSToggleIconButton button={buttonOverflow} slot="summary-end">
        <TJSMenu menu={subMenu} />
      </TJSToggleIconButton>
    </div>
    <div
      style="grid-row: 2/3; grid-column: 2/4; padding-bottom: 10px;margin-left: 1.5em"
      class={!isEnabled || !isCustomized ? "aa-disableOpacity" : ""}
    >
      <label for="" style="font-weight:bold;"
        >{localize("autoanimations.menus.animation")}
        {localize("autoanimations.menus.type")}</label
      >
      <select bind:value={$animation.activeEffectType} on:change={async () => await switchVideo()}>
        <option value="ontoken"
          >{localize("autoanimations.animTypes.ontoken")}</option
        >
        <option value="aura">{localize("autoanimations.animTypes.aura")}</option
        >
      </select>
    </div>
  </ul>
</header>

<main>
  {#if !menuType || !isEnabled || !isCustomized}
    <div class="sectionBorder">
      <svelte:component this={NoneChosen} {isEnabled} {isCustomized} {isInAutorec} />
    </div>
  {:else}
    <CategoryList/>
  {/if}
</main>

<footer>
  <ul>
    <button
      style="background-color: rgba(0, 0, 0, 0.2)"
      on:click|preventDefault={() => applyFlags()}>Submit</button
    >
    <button on:click|preventDefault={() => closeApp()}>Submit and Close</button>
  </ul>
</footer>

<style lang="scss">
  header {
    flex: none;
    padding: 0em 0.5em 0em 0.5em;

    background: rgb(204, 204, 204);
    border-bottom: 1px solid rgb(100, 100, 100);

    height: fit-content;
    width: 100%;
    //button {
    //border-radius: 1em;
    //background: rgba(0, 0, 0, 0.15);
    //border: 1px solid rgba(73, 73, 73, 0.5);
    //}
    .autorecLabel {
      border: 1px solid rgba(73, 73, 73, 0.5);
      border-radius: 1em;
      //height: 3em;
      //margin-right: 0.2em;
      //margin-left: 0.2em;
      font-size: 0.95em;
      text-align: center;
    }
    //@at-rootbutton:disabled {
    //opacity: 0.4;
    //}
    ul {
      display: grid;
      grid-template-columns: 40% 50% 10%;
      grid-auto-rows: 30px;
      //grid-gap: 1%;
      margin-bottom: 5px;
      align-items: center;
      align-items: center;

      //flex-wrap: nowrap;
      //justify-content: center;
      //align-items: center;
      //height: 100%;

      list-style-type: none;
      padding: 0;
      margin: 0;
    }
  }
  footer {
    position: absolute;
    bottom: 0;
    flex: none;
    padding: 0.5em 0.5em;

    background: rgb(160, 159, 159);
    border-top: 1px solid rgb(100, 100, 100);

    height: fit-content;
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
    button {
      border-radius: 1em;
      background: rgba(0, 0, 0, 0.35);
      border: 1px solid rgba(73, 73, 73, 0.5);
    }
  }
  main {
    position: relative;
    overflow-y: auto;
    padding: 0 3%;
    padding-bottom: 68px;
    scrollbar-width: thin; // For Firefox
  }
  .sectionBorder {
    background: rgb(186, 186, 186);
    border: 2px solid rgba(0, 0, 0, 0.75);
    border-radius: 0.75em;
    height: fit-content;
  }
</style>
