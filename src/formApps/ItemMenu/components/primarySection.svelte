<script>
    import { localize } from "@typhonjs-fvtt/runtime/svelte/helper";
    import { fade } from "svelte/transition";
    import SoundSettings from "./soundSettings.svelte";
    import ChooseAnimation from "./chooseAnimation.svelte";
    import Options from "./options.svelte";
    import { TJSDialog } from "@typhonjs-fvtt/runtime/svelte/application";
    import PrimaryApp from "../videoPreviews/primaryApp.svelte";
    //import FullPreview from "../videoPreviews/fullPreviewApp.svelte";
    import TotalPreview from "../videoPreviews/fullPreview.js";
    import {
        aaTypeMenu,
        aaNameMenu,
        aaVariantMenu,
        aaColorMenu,
    } from "../../../animation-functions/databases/jb2a-menu-options.js";
    import { storeItemData } from "../itemPreviewStore.js"
    /*
    import {
        menuDBPath01,
        customFilePath01,
        customChecked01,
    } from "../menuStore.js";
    */
    export let flagData;
    export let animType;
    export let animTypeSwitched;
    export let disablePlayOn;
    export let staticType;
    $: staticType = staticType;
    //const options = flagData.options;
    const primaryData = flagData.primary;

    let menuSelection = flagData.animType === "aura" ? "static" : flagData.animType;
    $: menuSelection = menuSelection;

    export let menuType = !primaryData.menuType ? Object.keys(aaTypeMenu[menuSelection])[0] : primaryData.menuType;
    //$: menuType = primaryData.menuType = menuType;

    export let animation = !primaryData.animation ? Object.keys(aaNameMenu[menuSelection][menuType])[0] : primaryData.animation;
    //$: animation = primaryData.animation = animation;

    let variant = !primaryData.variant ? Object.keys(aaVariantMenu[menuSelection][menuType][animation])[0] : primaryData.variant;
    //$: variant = primaryData.variant = variant;

    let color = !primaryData.color ? Object.keys(aaColorMenu[menuSelection][menuType][animation][variant])[0] : primaryData.color;
    //$: color = primaryData.color = color;

    let isCustom = primaryData.enableCustom || false;
    //$: isCustom = primaryData.enableCustom = isCustom;

    let customPath = primaryData.customPath;
    //$: customPath = primaryData.customPath = customPath;

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

    /*
    let primaryFilePath;
    $: primaryFilePath =
            color === "random"
                ? `autoanimations.${menuSelection}.${menuType}.${animation}.${variant}`
                : `autoanimations.${menuSelection}.${menuType}.${animation}.${variant}.${color}`;
    // Sets Store variables for sending to the Video Previewer
    $: {
        menuDBPath01.set(primaryFilePath);
        customFilePath01.set(customPath);
        customChecked01.set(isCustom);
    }
    */
    function fullPreview() {
        new TotalPreview().render(true);
    }

</script>

<div class="aa-header-section">
    <div class="aa-header">
        <div class="flexcol" style="grid-row:1/2; grid-column:3/4">
            <label for="">{localize("autoanimations.menus.primary")} {localize("autoanimations.menus.animation")}</label>
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
