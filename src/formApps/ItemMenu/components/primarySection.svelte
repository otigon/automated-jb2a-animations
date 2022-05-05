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

    import {
        menuDBPath01,
        customFilePath01,
        customChecked01,
    } from "../menuStore.js";

    export let flagData;
    export let animType;
    export let animTypeSwitched;
    export let disablePlayOn;
    export let staticType;
    $: staticType = staticType;
    const options = flagData.options;

    let menuSelection = flagData.animType === "aura" ? "static" : flagData.animType;
    $: menuSelection = menuSelection;

    export let menuType = options.menuType ? Object.keys(aaTypeMenu[menuSelection])[0] : options.menuType;
    $: menuType = options.menuType = menuType;

    export let animation = flagData.animation ? Object.keys(aaNameMenu[menuSelection][menuType])[0] : flagData.animation;
    $: animation = flagData.animation = animation;

    let variant = options.variant ? Object.keys(aaVariantMenu[menuSelection][menuType][animation])[0] : options.variant;
    $: variant = options.variant = variant;

    let color = flagData.color ? Object.keys(aaColorMenu[menuSelection][menuType][animation][variant])[0] : flagData.color;
    $: color = flagData.color = color;

    let isCustom = options.enableCustom || false;
    $: isCustom = options.enableCustom = isCustom;

    let customPath = options.customPath;
    $: customPath = options.customPath = customPath;

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
    function onClick() {
        new TJSDialog({
            modal: false,
            draggable: true,
            resizable: true,
            title: "Primary Animation",
            stylesContent: { background: "rgba(125, 125, 125, 0.75)" },
            content: {
                class: PrimaryApp,
            },
        }).render(true);
    }
    function fullPreview() {
        console.log(TJSDialog)
        
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
                class="fas fa-video aa-video-preview"
                on:click={() => onClick()}
            />
        </div>
        <div
        class="flexcol"
        style="grid-row:1/2; grid-column:5/6"
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
    flagPath="PrimaryAnimation"
    {disablePlayOn}
    {animTypeSwitched}
    {animType}
    {flagData}
/>
<Options {animType} {menuType} {flagData} />
<SoundSettings audioPath="a01" {flagData} />

<style lang="scss">
</style>
