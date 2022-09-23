<script>
    import { localize } from "@typhonjs-fvtt/runtime/svelte/helper";
    import { fade } from "svelte/transition";
    import { storeItemData } from "../ItemMenu/itemPreviewStore.js"
    import ChooseAnimation from "./chooseAnimation.svelte";
    import SoundSettings from "./soundSettings.svelte";
    import { aaReturnWeapons } from "../../database/jb2a-menu-options.js"
    import {
        storeAutorec,
    } from "../AutorecMenu/autorecPreviews.js";

    import {
        aaTypeMenu,
        aaNameMenu,
        aaVariantMenu,
        aaColorMenu,
    } from "../../database/jb2a-menu-options.js";

    export let flagData;
    export let primaryMenuType;
    export let previewStoreData;
    export let isAutoRec;
    export let isOverride;

    export let customId;
    $: primaryMenuType = primaryMenuType;
    export let primaryAnimation;
    $: primaryAnimation = primaryAnimation;

    const returningWeapons = aaReturnWeapons;
    const autoOverride = flagData.autoOverride;
    flagData.meleeSwitch ? flagData.meleeSwitch : (flagData.meleeSwitch = {});
    if (isOverride) {
        autoOverride.meleeSwitch ? autoOverride.meleeSwitch : autoOverride.meleeSwitch = {};
    }
    let meleeSwitch = isOverride ? flagData.autoOverride?.meleeSwitch : flagData.meleeSwitch;

    let switchType = meleeSwitch.switchType || "on";

    // Sets Initial Menu Type for Menu - Assigns to Flag when updated
    let menuType = meleeSwitch.menuType || Object.keys(aaTypeMenu.range)[0];

    // Sets Initial animation for Menu - Assigns to Flag when updated
    let animation =
        meleeSwitch.animation || Object.keys(aaNameMenu.range[menuType])[0];

    // Sets Initial variant for Menu - Assigns to Flag when updated
    let variant =
        meleeSwitch.variant ||
        Object.keys(aaVariantMenu.range[menuType][animation])[0];

    // Sets Initial color for Menu - Assigns to Flag when updated
    let color =
        meleeSwitch.color ||
        Object.keys(aaColorMenu.range[menuType][animation][variant])[0];

    let isCustom = meleeSwitch.enableCustom || false;

    let customPath = meleeSwitch.customPath;

    $: {
        switchType = meleeSwitch.switchType = switchType;
        menuType = meleeSwitch.menuType = menuType;
        animation = meleeSwitch.animation = animation;
        variant = meleeSwitch.variant = variant;
        color = meleeSwitch.color = color;
        isCustom = meleeSwitch.enableCustom = isCustom;
        customPath = meleeSwitch.customPath = customPath;
        if (isAutoRec) {$storeAutorec = previewStoreData};
        if (!isAutoRec) {storeItemData.set(previewStoreData)};
    }

    let returnEnabled = meleeSwitch.returning || false;
    $: returnEnabled = meleeSwitch.returning = returnEnabled;
    let returnLabel = returnEnabled
        ? game.i18n.localize("autoanimations.menus.enabled")
        : game.i18n.localize("autoanimations.menus.disabled");

    function switchLabel() {
        returnEnabled = !returnEnabled;
        returnLabel = returnEnabled
            ? game.i18n.localize("autoanimations.menus.enabled")
            : game.i18n.localize("autoanimations.menus.disabled");
    }
    $: meleeSwitch.returning = returnEnabled;
    let isDisabled = false;
    $: {
        if (
            switchType === "custom" &&
            returningWeapons.includes(animation) &&
            menuType === "weapon"
        ) {
            isDisabled = false;
        } else if (
            switchType === "on" &&
            primaryMenuType === "weapon" &&
            returningWeapons.includes(primaryAnimation)
        ) {
            isDisabled = false;
        } else {
            isDisabled = true;
            returnEnabled = meleeSwitch.returning = false;
            returnLabel = game.i18n.localize("autoanimations.menus.disabled");
        }
    }
    let detect = meleeSwitch.detect || "auto";
    $: meleeSwitch.detect = detect;
    let detectLabel = detect === "auto" ? game.i18n.localize("autoanimations.menus.automatic") : game.i18n.localize("autoanimations.menus.manual");
    $: detectLabel = detectLabel;
    function switchDetect() {
        detect = detect === "auto" ? "manual" : "auto";
        detectLabel = detect === "auto" ? game.i18n.localize("autoanimations.menus.automatic") : game.i18n.localize("autoanimations.menus.manual");
    }

    let range = meleeSwitch.range || 2;
    $: range = range;
    $: meleeSwitch.range = range;

    const disablePlayOn = true;
</script>

<div class="aa-header-section">
    <div class="aa-header">
        <div class="flexcol" style="grid-row:1/2; grid-column:2/3">
            <label for=""
                >{localize("autoanimations.menus.melee")}
                {localize("autoanimations.menus.ranged")}
                {localize("autoanimations.menus.switch")}</label
            >
        </div>
    </div>
</div>
<div class="aa-3wide" style="padding-top:5px;padding-bottom:5px;" in:fade>
    <div class="flexcol aa-select-label" style="grid-row: 1 / 2;grid-column: 2 / 3;">
        <label for="1"
            >{localize("autoanimations.menus.ranged")}
            {localize("autoanimations.menus.switch")}</label
        >
        <select
            bind:value={switchType}
            id="1"
            style="text-align: center;justify-self: center"
        >
            <option value="on"
                >{localize("autoanimations.menus.enabled")}</option
            >
            <option value="off"
                >{localize("autoanimations.menus.disabled")}</option
            >
            <option value="custom"
                >{localize("autoanimations.menus.custom")}</option
            >
        </select>
    </div>
    <div
        class="flexcol {isDisabled ? 'aa-disabled' : ''}"
        style="grid-row:1/2; grid-column:3/4"
    >
        <label for=""
            >{localize("autoanimations.menus.return")}
            {localize("autoanimations.menus.animation")}</label
        >
        <button
            disabled={isDisabled}
            class="aa-setDim {returnEnabled && !isDisabled
                ? 'aa-selected'
                : 'aa-notSelected'}"
            on:click={() => switchLabel()}>{returnLabel}</button
        >
    </div>
</div>
{#if switchType === "custom"}
    <ChooseAnimation
        bind:menuType
        bind:animation
        bind:variant
        bind:color
        bind:isCustom
        bind:customPath
        {customId}
        animType="range"
        flagPath="MeleeSwitch"
        {disablePlayOn}
        disableReturn={true}
        {flagData}
    />
{/if}
{#if switchType === "custom"}
    <div class="aa-4wide" in:fade>
        <div class="flexcol" style="grid-row:1/2; grid-column:2/3">
            <label for="">{localize("autoanimations.menus.rangeDetect")}</label>
            <button on:click={() => switchDetect()}>{detectLabel}</button>
        </div>
        <div
            class="flexcol {detect === 'auto' ? 'aa-disabled' : ''}"
            style="grid-row: 1 / 2; grid-column: 3 / 5;"
        >
            <label for="">{localize("autoanimations.menus.gridSquares")}</label>
            <input
                disabled={detect === "auto"}
                type="Number"
                bind:value={range}
                placeholder="2"
            />
        </div>
    </div>
{/if}
{#if switchType !== "off"}
    <SoundSettings audioPath="a02" {flagData} />
{/if}

<style lang="scss">
    .aa-3wide label {
        align-self: center;
    }
    .aa-3wide button {
        border-radius: 10px;
        border: 2px outset rgb(142, 142, 142);
        font-family: "Signika", sans-serif;
        font-weight: normal;
        color: black;
        font-size: 14px;
    }
    .aa-4wide {
        display: grid;
        grid-template-columns: 24.25% 24.25% 24.25% 24.25%;
        grid-gap: 1%;
        padding: 5px;
        align-items: center;
        margin-right: 5%;
        margin-left: 5%;
        font-weight: bold;
        font-family: "Modesto Condensed", "Palatino Linotype", serif;
        font-size: large;
    }
    .aa-4wide input {
        text-align: center;
        align-self: center;
        border-radius: 5px;
        width: 3em;
    }
    .aa-4wide label {
        align-self: center;
    }
    .aa-4wide button {
        border-radius: 10px;
        border: 2px outset rgb(142, 142, 142);
        font-family: "Signika", sans-serif;
        line-height: 1.25em;
        font-size: 14px;
        color:black
    }
    .aa-header {
        display: grid;
        grid-template-columns: 10% 78% 10%;
        grid-gap: 1%;
        padding: 1px;
        align-items: center;
        margin-right: 5%;
        margin-left: 5%;
        font-family: "Modesto Condensed", "Palatino Linotype", serif;
        font-size: large;
        font-weight: bold;
        color: black;
    }
    .aa-4wide input:disabled {
        opacity: 0.3;
        transition: opacity 0.5s;
    }
    .aa-3wide button:disabled {
        opacity: 0.3;
        transition: opacity 0.5s;
    }
    .aa-disabled label {
        opacity: 0.3;
        transition: opacity 0.5s;
    }
    .aa-setDim {
        line-height: 1.25em;
        width: 75%;
        align-self: center;
    }
    .aa-select-label label{
        font-size: large
    }
</style>
