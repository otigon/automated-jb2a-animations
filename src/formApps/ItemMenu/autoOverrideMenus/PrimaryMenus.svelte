<script>
    import { localize } from "@typhonjs-fvtt/runtime/svelte/helper";
    import { fade } from "svelte/transition";
    import { TJSDialog } from "@typhonjs-fvtt/runtime/svelte/application";

    import PrimaryApp from "../videoPreviews/primaryApp.svelte";
    import ChooseAnimation from "../components/chooseAnimation.svelte";
    import Options from "../components/options.svelte";
    import SoundSettings from "../components/soundSettings.svelte";
    import RangeSwitch from "../components/meleeRange.svelte";
    import ExplosionSettings from "../components/explosions.svelte";

    import {
        menuDBPath01,
        customFilePath01,
        customChecked01,
    } from "../menuStore.js";

    export let animType;
    export let autoObject;
    export let autoSection;
    //autoSection.options ? autoSection.options : (autoSection.options = {});
    const overrideOptions = autoSection.options;
    const options = autoSection.options;
    const menuSection = autoObject.menuSection;
    const primarySection = autoSection.primary

    export let menuType = primarySection.menuType || options.menuType;
    $: menuType = primarySection.menuType = menuType;
    export let animation = primarySection.animation;
    $: animation = primarySection.animation = animation;
    let variant = primarySection.variant;
    $: variant = primarySection.variant = variant;
    let color = primarySection.color;
    $: color = primarySection.color = color;

    let isCustom = primarySection.enableCustom || false;
    $: isCustom = primarySection.enableCustom = isCustom;
    let customPath = primarySection.customPath;
    $: customPath = primarySection.customPath = customPath;

    let primaryFilePath;
    $: primaryFilePath =
        color === "random"
            ? `autoanimations.${animType}.${menuType}.${animation}.${variant}`
            : `autoanimations.${animType}.${menuType}.${animation}.${variant}.${color}`;

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
</script>

<div class="aaMenu-section">
    <div class="aa-header-section">
        <div class="aa-header">
            <div class="flexcol" style="grid-row:1/2; grid-column:3/4">
                <label for="">Override Global Settings</label>
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
        </div>
    </div>
    <ChooseAnimation
        bind:menuType
        bind:animation
        bind:variant
        bind:color
        bind:isCustom
        bind:customPath
        customId="AutoOverride"
        flagPath="PrimaryAnimation"
        {animType}
        flagData={autoSection}
    />
    <Options {animType} {menuType} flagData={autoSection} />
    <SoundSettings audioPath="a01" flagData={autoSection} />
</div>
{#if animType === "melee"}
<div class="aaMenu-section">
    <RangeSwitch
        primaryAnimation={animation}
        primaryMenuType={menuType}
        flagData={autoSection}
    />
</div>
{/if}
{#if animType === "melee" || animType === "range" || animType === "static"}
<div class="aaMenu-section">
    <ExplosionSettings flagData={autoSection} />
</div>
{/if}


<style lang="scss">
</style>
