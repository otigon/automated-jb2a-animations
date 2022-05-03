<script>
    import { localize } from "@typhonjs-fvtt/runtime/svelte/helper";
    import { fade } from "svelte/transition";
    import { TJSDialog } from "@typhonjs-fvtt/runtime/svelte/application";
    import SwitchApp from "../videoPreviews/switchApp.svelte";
    import ChooseAnimation from "./chooseAnimation.svelte";

    import {
        aaTypeMenu,
        aaNameMenu,
        aaVariantMenu,
        aaColorMenu,
    } from "../../../animation-functions/databases/jb2a-menu-options.js";
    import { menuDBPathSwitch } from "../menuStore.js";

    export let flagData;
    export let primaryMenuType;
    $: primaryMenuType = primaryMenuType;
    export let primaryAnimation;
    $: primaryAnimation = primaryAnimation;
    console.log(primaryMenuType)
    console.log(primaryAnimation)
    const returningWeapons = [
        "chakram",
        "dagger",
        "greatsword",
        "hammer",
        "javelin",
        "spear",
        "dart"
    ];
    let meleeSwitch = flagData.meleeSwitch;

    let switchType = meleeSwitch.switchType || "on";
    $: switchType = switchType;
    $: meleeSwitch.switchType = switchType;

    let menuType = meleeSwitch.menuType || Object.keys(aaTypeMenu.range)[0];
    $: menuType = meleeSwitch.menuType = menuType;
    // Sets Initial animation for Menu - Assigns to Flag when updated
    let animation = meleeSwitch.animation || Object.keys(aaNameMenu.range[menuType])[0];
    $: animation = meleeSwitch.animation = animation;
    // Sets Initial variant for Menu - Assigns to Flag when updated
    let variant = meleeSwitch.variant || Object.keys(aaVariantMenu.range[menuType][animation])[0];
    $: variant = meleeSwitch.variant = variant;
    // Sets Initial color for Menu - Assigns to Flag when updated
    let color = meleeSwitch.color || Object.keys(aaColorMenu.range[menuType][animation][variant])[0];
    $: color = meleeSwitch.color = color;

    let isCustom = meleeSwitch.enableCustom || false;
    $: isCustom = meleeSwitch.enableCustom = isCustom;

    let customPath = meleeSwitch.customPath;
    $: customPath = meleeSwitch.customPath = customPath;

    let returnEnabled = meleeSwitch.enable || false;
    let returnLabel = returnEnabled ? game.i18n.localize("autoanimations.menus.enabled") : game.i18n.localize("autoanimations.menus.disabled");

    function switchLabel() {
        returnEnabled = !returnEnabled;
        returnLabel = returnEnabled ? game.i18n.localize("autoanimations.menus.enabled") : game.i18n.localize("autoanimations.menus.disabled");
    }
    $: meleeSwitch.returning = returnEnabled;
    let isDisabled = false;
    $: {
        if (switchType === "custom" && returningWeapons.includes(animation) && menuType === "weapon") {
            isDisabled = false;
        } else if (switchType === "on" && primaryMenuType === "weapon" && returningWeapons.includes(primaryAnimation)) {
            isDisabled = false;
        } else {
            isDisabled = true;
            returnEnabled = meleeSwitch.returning = false;
            returnLabel = game.i18n.localize("autoanimations.menus.disabled")
        }
    }
    let detect = meleeSwitch.detect || "auto";
    $: meleeSwitch.detect = detect;
    let detectLabel = detect === "auto" ? "Automatic" : "Manual";
    $: detectLabel = detectLabel;
    function switchDetect() {
        detect = detect === "auto" ? "manual" : "auto";
        detectLabel = detect === "auto" ? "Automatic" : "Manual";
    }

    let range = meleeSwitch.range || 2;
    $: range = range;
    $: meleeSwitch.range = range;

    function onClick() {
        new TJSDialog({
            modal: false,
            draggable: true,
            resizable: true,
            title: "Range Switch Animation",
            stylesContent: { background: "rgba(125, 125, 125, 0.75)" },
            content: {
                class: SwitchApp,
            },
        }).render(true);
    }

    let switchFilePath;
    $: switchFilePath =
        color === "random"
            ? `autoanimations.range.${menuType}.${animation}.${variant}`
            : `autoanimations.range.${menuType}.${animation}.${variant}.${color}`;

    $: menuDBPathSwitch.set(switchFilePath);
    const disablePlayOn = true;
</script>

<div class="aa-header-section">
    <div class="aa-header">
        <div class="flexcol" style="grid-row:1/2; grid-column:2/3">
            <label for="">{localize("autoanimations.menus.melee")} {localize("autoanimations.menus.ranged")} {localize("autoanimations.menus.switch")}</label>
        </div>
        {#if menuType && switchType === "custom"}
            <div class="flexcol" style="grid-row:1/2; grid-column:1/2">
                <i
                    class="fas fa-video aa-video-preview"
                    on:click={() => onClick()}
                />
            </div>
        {/if}
    </div>
</div>
<div class="aa-select-animation" transition:fade>
    <div class="flexcol" style="grid-row: 1 / 2;grid-column: 2 / 3;">
        <label for="1"
            >{localize("autoanimations.menus.ranged")} {localize("autoanimations.menus.switch")}</label
        >
        <select
            bind:value={switchType}
            id="1"
            style="text-align: center;justify-self: center"
        >
            <option value="on">{localize("autoanimations.menus.enabled")}</option>
            <option value="off">{localize("autoanimations.menus.disabled")}</option>
            <option value="custom">{localize("autoanimations.menus.custom")}</option>
        </select>
    </div>
    <div
        class="flexcol {isDisabled ? 'aa-disabled' : ''}"
        style="grid-row:1/2; grid-column:3/4"
    >
        <label for="">{localize("autoanimations.menus.return")} {localize("autoanimations.menus.animation")}</label>
        <button
            disabled={isDisabled}
            class="oldCheck {returnEnabled && !isDisabled
                ? 'selected'
                : 'notSelected'}"
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
    animType="range"
    flagPath="MeleeSwitch"
    {disablePlayOn}
    {flagData}
/>

    {/if}
{#if switchType === "custom"}
    <div class="aa-4wide" transition:fade={{ duration: 500 }}>
        <div class="flexcol" style="grid-row:1/2; grid-column:2/3">
            <label for="">{localize("autoanimations.menus.rangeDetect")}</label>
            <button class="oldCheck" on:click={() => switchDetect()}
                >{detectLabel}</button
            >
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
                placeholder=2
            />
        </div>
    </div>
{/if}

<style lang="scss">
    .aa-select-animation {
        display: grid;
        grid-template-columns: 33.3% 33.3% 33.3%;
        grid-gap: 5px;
        padding: 5px;
        align-items: center;
        margin-right: 8%;
        margin-left: 5%;
        font-family: "Modesto Condensed", "Palatino Linotype", serif;
        font-size: large;
        font-weight: bold;
    }
    .aa-select-animation select {
        text-align: center;
        font-weight: bold;
        min-height: 2em;
        border-radius: 10px;
    }
    .aa-select-animation label {
        align-self: center;
    }
    .aa-select-animation button {
        border-radius: 10px;
        border: 2px solid black;
        font-family: "Modesto Condensed", "Palatino Linotype", serif;
        font-weight: bold;
        font-size: large;
    }
    .selected {
        background-color: rgba(25, 175, 2, 0.18);
        transition: background-color 0.5s;
    }
    .notSelected {
        background-color: rgba(219, 132, 2, 0.18);
        transition: background-color 0.5s;
    }
    .aa-4wide {
        display: grid;
        grid-template-columns: 25% 25% 25% 25%;
        grid-gap: 5px;
        padding: 5px;
        align-items: center;
        margin-right: 8%;
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
        border: 2px solid black;
        font-family: "Modesto Condensed", "Palatino Linotype", serif;
        font-weight: bold;
        font-size: large;
    }
    .aa-header-section {
        border-bottom: 2px solid rgba(120, 46, 34, 1);
        margin-right: 5%;
        margin-left: 5%;
    }
    .aa-header {
        display: grid;
        grid-template-columns: 10% 80% 10%;
        grid-gap: 5px;
        padding: 1px;
        align-items: center;
        margin-right: 8%;
        margin-left: 5%;
        font-family: "Modesto Condensed", "Palatino Linotype", serif;
        font-size: large;
        font-weight: bold;
        color: black;
    }
    .aa-header label {
        align-self: center;
        font-family: "Modesto Condensed", "Palatino Linotype", serif;
        font-size: x-large;
        font-weight: bold;
        text-align: center;
        margin-right: 5%;
        margin-left: 5%;
        color: black;
    }
    .aa-4wide input:disabled {
        opacity: 0.3;
        transition: opacity 0.5s;
    }
    .aa-select-animation button:disabled {
        opacity: 0.3;
        transition: opacity 0.5s;
    }
    .aa-disabled label {
        opacity:0.3;
        transition: opacity 0.5s;
    }
</style>
