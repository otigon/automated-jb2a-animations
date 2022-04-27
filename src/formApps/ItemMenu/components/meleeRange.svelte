<script>
    import { localize } from "@typhonjs-fvtt/runtime/svelte/helper";
    import { fade } from "svelte/transition";
    import { TJSDialog } from "@typhonjs-fvtt/runtime/svelte/application";
    import SwitchApp from "../videoPreviews/switchApp.svelte";

    import {
        aaTypeMenu,
        aaNameMenu,
        aaVariantMenu,
        aaColorMenu,
    } from "../../../animation-functions/databases/jb2a-menu-options.js";
    import { menuDBPathSwitch } from "../menuStore.js";

    export let flagData;
    const returningWeapons = [
        "chakram",
        "dagger",
        "greatsword",
        "hammer",
        "javelin",
        "spear",
    ];
    const meleeSwitch = flagData.meleeSwitch;

    let switchType = meleeSwitch.switchType || "on";
    $: switchType = switchType;
    $: meleeSwitch.switchType = switchType;

    let menuType = meleeSwitch.menuType || "";
    $: menuType = menuType;
    $: meleeSwitch.menuType = menuType;
    // Sets Initial animation for Menu - Assigns to Flag when updated
    let animation = meleeSwitch.animation || "";
    $: animation = menuType === "" ? "" : animation;
    $: meleeSwitch.animation = animation;
    // Sets Initial variant for Menu - Assigns to Flag when updated
    let variant = meleeSwitch.variant || "";
    $: variant = menuType === "" || animation === "" ? "" : variant;
    $: meleeSwitch.variant = variant;
    // Sets Initial color for Menu - Assigns to Flag when updated
    let color = meleeSwitch.color || "";
    $: color =
        menuType === "" || animation === "" || variant === "" ? "" : color;
    $: meleeSwitch.color = color;

    async function switchChange() {
        let newSwitchType = switchType;
        if (newSwitchType === "on") {
            menuType = Object.keys(aaTypeMenu.range)[0];
            animation = Object.keys(aaNameMenu.range[menuType])[0];
            variant = Object.keys(aaVariantMenu.range[menuType][animation])[0];
            color = Object.keys(
                aaColorMenu.range[menuType][animation][variant]
            )[0];
        }
    }
    async function menuTypeChange() {
        let newMenuType = menuType;
        animation = Object.keys(aaNameMenu.range[newMenuType])[0];
        variant = Object.keys(aaVariantMenu.range[newMenuType][animation])[0];
        color = Object.keys(
            aaColorMenu.range[newMenuType][animation][variant]
        )[0];
    }
    async function animationChange() {
        let newAnimation = animation;
        variant = Object.keys(aaVariantMenu.range[menuType][newAnimation])[0];
        color = Object.keys(
            aaColorMenu.range[menuType][newAnimation][variant]
        )[0];
    }
    async function variantChange() {
        let newVariant = variant;
        color = Object.keys(
            aaColorMenu.range[menuType][animation][newVariant]
        )[0];
    }

    let returnEnabled = meleeSwitch.enable;
    let returnLabel = returnEnabled ? "Enabled" : "Disabled";

    function switchLabel() {
        returnEnabled = !returnEnabled;
        returnLabel = returnEnabled ? "Enabled" : "Disabled";
    }
    $: meleeSwitch.returning = returnEnabled;
    let isDisabled = false;
    $: isDisabled =
        (switchType === "custom" &&
            returningWeapons.includes(animation) &&
            menuType === "weapon") ||
        switchType === "on"
            ? false
            : true;

    let detect = meleeSwitch.detect || "auto";
    let detectLabel = "Automatic";
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
</script>

<div class="aa-header-section">
    <div class="aa-header">
        <div class="flexcol" style="grid-row:1/2; grid-column:2/3">
            <label for="">Melee Range Switch</label>
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
            >{localize("AUTOANIM.ranged")} {localize("AUTOANIM.switch")}</label
        >
        <select
            name="flags.autoanimations.animType"
            bind:value={switchType}
            on:change={async () => await switchChange()}
            id="1"
            style="text-align: center;justify-self: center"
        >
            <option value="on">{localize("AUTOANIM.enabled")}</option>
            <option value="off">{localize("AUTOANIM.disabled")}</option>
            <option value="custom">{localize("AUTOANIM.custom")}</option>
        </select>
    </div>
    <div
        class="flexcol {isDisabled ? 'opacityButton opacityLabel' : ''}"
        style="grid-row:1/2; grid-column:3/4"
    >
        <label for="">Set Return</label>
        <button
            disabled={isDisabled}
            class="oldCheck {returnEnabled && !isDisabled
                ? 'selected'
                : 'notSelected'}"
            on:click={() => switchLabel()}>{returnLabel}</button
        >
    </div>
    {#if switchType === "custom"}
        <!--Type Menu-->
        <div class="flexcol" style="grid-row: 2 / 3;grid-column: 2 / 3;">
            <label for="2">{localize("AUTOANIM.type")}</label>
            <select
                name="flags.autoanimations.options.menuType"
                bind:value={menuType}
                on:change={async () => await menuTypeChange()}
                id="2"
                class={menuType != "" ? "isPopulated" : "isNotPopulated"}
            >
                {#each Object.entries(aaTypeMenu.range) as [key, name]}
                    <option value={key}>{name}</option>
                {/each}
            </select>
        </div>
        <!--Animation Menu-->
        <div class="flexcol" style="grid-row: 3 / 4;grid-column: 1 / 2;">
            <label for="3">{localize("AUTOANIM.animation")}</label>
            <select
                name="flags.autoanimations.animation"
                bind:value={animation}
                on:change={async () => await animationChange()}
                id="3"
                class={animation != "" ? "isPopulated" : "isNotPopulated"}
            >
                {#if menuType != ""}
                    {#each Object.entries(aaNameMenu.range[menuType]) as [key, name]}
                        <option value={key}>{name}</option>
                    {/each}
                {/if}
            </select>
        </div>
        <!--Variant Menu-->
        <div class="flexcol" style="grid-row: 3 / 4;grid-column: 2 / 3;">
            <label for="4">{localize("AUTOANIM.variant")}</label>
            <select
                name="flags.autoanimations.options.variant"
                bind:value={variant}
                on:change={async () => await variantChange()}
                id="4"
                class={variant != "" ? "isPopulated" : "isNotPopulated"}
            >
                {#if (menuType != "") & (animation != "")}
                    {#each Object.entries(aaVariantMenu.range[menuType][animation]) as [key, name]}
                        <option value={key}>{name}</option>
                    {/each}
                {/if}
            </select>
        </div>
        <!--Color Menu-->
        <div class="flexcol" style="grid-row: 3 / 4;grid-column: 3 / 4;">
            <label for="5">{localize("AUTOANIM.color")}</label>
            <select
                name="flags.autoanimations.color"
                bind:value={color}
                id="5"
                class={color != "" ? "isPopulated" : "isNotPopulated"}
            >
                {#if menuType != "" && animation != "" && variant != ""}
                    {#each Object.entries(aaColorMenu.range[menuType][animation][variant]) as [key, name]}
                        <option value={key}>{name}</option>
                    {/each}
                {/if}
            </select>
        </div>
    {/if}
</div>
{#if switchType === "custom"}
    <div class="aa-4wide" transition:fade={{ duration: 500 }}>
        <div class="flexcol" style="grid-row:1/2; grid-column:2/3">
            <label for="">{localize("AUTOANIM.rangeDetect")}</label>
            <button class="oldCheck" on:click={() => switchDetect()}
                >{detectLabel}</button
            >
        </div>
        <div
            class="flexcol {detect === 'auto' ? 'opacityButton' : ''}"
            style="grid-row: 1 / 2; grid-column: 3 / 5;"
        >
            <label for="">{localize("AUTOANIM.gridSquares")}</label>
            <input
                disabled={detect === "auto"}
                type="Number"
                bind:value={range}
                placeholder="2"
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
        border-radius: 5px;
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
    .opacityButton button {
        border: 2px solid rgba(133, 133, 133, 0.418);
        color: rgba(133, 133, 133, 0.418);
        transition: color 0.5s;
    }
    .opacityButton label {
        color: rgba(133, 133, 133, 0.3);
        transition: color 0.5s;
    }
    .opacityButton input {
        color: rgba(133, 133, 133, 0.3);
        transition: color 0.5s;
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
</style>
