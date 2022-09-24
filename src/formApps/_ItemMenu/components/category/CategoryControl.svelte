<script>
  //import CategoryControl      from "./CategoryControl.svelte";
  import { ripple } from "@typhonjs-fvtt/svelte-standard/action";
  import { localize } from "@typhonjs-fvtt/runtime/svelte/helper";
  import { getContext } from "svelte";

  import {
    TJSMenu,
    TJSToggleIconButton,
  } from "@typhonjs-fvtt/svelte-standard/component";


  import CategoryList from "./CategoryList.svelte";
  import Slider from "../../../Menus/Components/options/inputComponents/Slider.svelte";

  import { AAAutorecFunctions } from "../../../../aa-classes/AAAutorecFunctions";
  import { copyToFrom } from "../../../Menus/Components/copyitem/copyToFrom";

  import NoneChosen from "./menus/NoneChosen.svelte";
  import * as changeSection from "../../../_AutorecMenu/store/default-data/newSection"

  async function switchVideo() {
    let newMenu = $animation.menu;
    if (!newMenu) { return; }

    let newData = changeSection[newMenu]($animation);
    if (!newMenu) { 
        delete $animation.data;
        $animation.primary = {};
        return;
      }
    switch (newMenu) {
      case "preset":
        $animation.macro = newData.macro;
        $animation.soundOnly = newData.soundOnly;
        $animation.presetType = newData.presetType;
        $animation.data = newData.data;
        delete $animation.primary;
        delete $animation.levels3d;
        delete $animation.meleeSwitch;
        delete $animation.secondary;
        delete $animation.primary;
        delete $animation.source;
        delete $animation.target;
        break;
      case "melee":
        $animation.levels3d = newData.levels3d;
        $animation.macro = newData.macro;
        $animation.meleeSwitch = newData.meleeSwitch;
        $animation.primary = newData.primary;
        $animation.secondary = newData.secondary;
        $animation.soundOnly = newData.soundOnly;
        $animation.source = newData.source;
        $animation.target = newData.target;
        delete $animation.data;
        break;
      case "range":
      case "ontoken":
        $animation.levels3d = newData.levels3d;
        $animation.macro = newData.macro;
        $animation.primary = newData.primary;
        $animation.secondary = newData.secondary;
        $animation.soundOnly = newData.soundOnly;
        $animation.source = newData.source;
        $animation.target = newData.target;
        delete $animation.meleeSwitch;
        delete $animation.presetType;
        delete $animation.data;
        break;
      default:
        $animation.macro = newData.macro;
        $animation.primary = newData.primary;
        $animation.secondary = newData.secondary;
        $animation.soundOnly = newData.soundOnly;
        $animation.source = newData.source;
        $animation.target = newData.target;
        delete $animation.levels3d;
        delete $animation.meleeSwitch;
        delete $animation.presetType;
        delete $animation.data;
        break;
    }
  }

  /**
   * @ItemStore
   */
  export let animation;

  export let item;

  const { application } = getContext("external");

  let autorecSettings = {
    melee: game.settings.get("autoanimations", "aaAutorec-melee"),
    range: game.settings.get("autoanimations", "aaAutorec-range"),
    ontoken: game.settings.get("autoanimations", "aaAutorec-ontoken"),
    templatefx: game.settings.get("autoanimations", "aaAutorec-templatefx"),
    aura: game.settings.get("autoanimations", "aaAutorec-aura"),
    preset: game.settings.get("autoanimations", "aaAutorec-preset"),
  };

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

  let itemName = item.name;
  //Check the Autorec Menu for a matching Section
  let isInAutorec = AAAutorecFunctions.allMenuSearch(
    autorecSettings,
    AAAutorecFunctions.rinseName(itemName)
  );

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
  $: menuType = $animation.menu;

  const buttonOverflow = {
    icon: "fas fa-ellipsis-v",
    efx: ripple(),
    title: "Copy To/From",
    styles: { "margin-left": "0.5em" },
    onClickPropagate: false, // Necessary to capture click for Firefox.
  };

  const subMenu = {
    items: copyToFrom(animation, isInAutorec),
  };

</script>

<header>
  <ul>
    <div style="grid-row: 1/2; grid-column: 1/2">
      <Slider {animation} label={disabledLabel} field="isEnabled" />
    </div>
    <div
      style="grid-row: 2/3; grid-column: 1/2"
      class={!isEnabled ? "aa-disableOpacity" : ""}
    >
      <Slider
        {animation}
        label={localize("autoanimations.menus.customize") + " " + "Item"}
        field="isCustomized"
      />
    </div>
    <div
      class="ammoButton {!isEnabled ? 'aa-disableOpacity' : ''}"
      style="grid-row:3/4; grid-column: 1/2"
    >
      <Slider
        {animation}
        label={localize("autoanimations.menus.useammo")}
        field="fromAmmo"
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
      style="grid-row: 2/4; grid-column: 2/4; padding-bottom: 10px;margin-left: 1.5em"
      class={!isEnabled || !isCustomized ? "aa-disableOpacity" : ""}
    >
      <label for="" style="font-weight:bold;"
        >{localize("autoanimations.menus.animation")}
        {localize("autoanimations.menus.type")}</label
      >
      <select bind:value={$animation.menu} on:change={async () => await switchVideo()}>
        <option value="melee"
          >{localize("autoanimations.animTypes.melee")}</option
        >
        <option value="range"
          >{localize("autoanimations.animTypes.range")}</option
        >
        <option value="ontoken"
          >{localize("autoanimations.animTypes.ontoken")}</option
        >
        <option value="templatefx"
          >{localize("autoanimations.animTypes.templatefx")}</option
        >
        <option value="aura">{localize("autoanimations.animTypes.aura")}</option
        >
        <option value="preset"
          >{localize("autoanimations.animTypes.preset")}</option
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
    <CategoryList {animation} />
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
