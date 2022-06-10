<script>
    import { localize } from "@typhonjs-fvtt/runtime/svelte/helper";
    import { fade } from "svelte/transition";
    import SoundSettings from "./soundSettings.svelte";
    import ChooseAnimation from "./chooseAnimation.svelte";
    import Options from "./options.svelte";
    import TotalPreview from "../ItemMenu/videoPreviews/fullPreview.js";
    import {
        aaTypeMenu,
        aaNameMenu,
        aaVariantMenu,
        aaColorMenu,
    } from "../../animation-functions/databases/jb2a-menu-options.js";
    import { storeItemData } from "../ItemMenu/itemPreviewStore.js";

    export let flagData;
    export let animType;
    export let animTypeSwitched;
    export let disablePlayOn;
    export let staticType;
    $: staticType = staticType;

    const primaryData = flagData.primary;

    let menuSelection =
        flagData.animType === "aura" ? "static" : flagData.animType;
    $: menuSelection = menuSelection;

    export let menuType = !primaryData.menuType
        ? Object.keys(aaTypeMenu[menuSelection])[0]
        : primaryData.menuType;

    export let animation = !primaryData.animation
        ? Object.keys(aaNameMenu[menuSelection][menuType])[0]
        : primaryData.animation;

    let variant = !primaryData.variant
        ? Object.keys(aaVariantMenu[menuSelection][menuType][animation])[0]
        : primaryData.variant;

    let color = !primaryData.color
        ? Object.keys(
              aaColorMenu[menuSelection][menuType][animation][variant]
          )[0]
        : primaryData.color;

    let isCustom = primaryData.enableCustom || false;

    let customPath = primaryData.customPath;

    $: {
        menuType = primaryData.menuType = menuType;
        animation = primaryData.animation = animation;
        variant = primaryData.variant = variant;
        color = primaryData.color = color;
        isCustom = primaryData.enableCustom = isCustom;
        customPath = primaryData.customPath = customPath;
        //flagData = flagData;
        storeItemData.set(flagData);
    }

    function fullPreview() {
        new TotalPreview().render(true);
    }
</script>

<div class="aa-header-section">
    <div class="aa-header">
        <div class="flexcol" style="grid-row:1/2; grid-column:3/4">
            <label for=""
                >{localize("autoanimations.menus.primary")}
                {localize("autoanimations.menus.animation")}</label
            >
        </div>
        <div
            class="flexcol"
            style="grid-row:1/2; grid-column:1/2"
            transition:fade
        >
            <i
                class="fas fa-film aa-video-preview"
                title="Full Preview"
                on:click={() => fullPreview()}
            />
        </div>
    </div>
</div>
<ChooseAnimation
    bind:menuType
    bind:animation
    bind:variant
    bind:color
    bind:isCustom
    bind:customPath
    bind:menuSelection
    bind:staticType
    customId="PrimaryCustom"
    flagPath="PrimaryAnimation"
    {disablePlayOn}
    bind:animTypeSwitched
    {animType}
    {flagData}
/>
<Options {animType} {menuType} {flagData} />
<SoundSettings audioPath="a01" {flagData} />

<style lang="scss">
</style>
