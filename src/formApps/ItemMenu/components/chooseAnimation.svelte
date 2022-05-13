<svelte:options accessors={true} />

<script>
    import { localize } from "@typhonjs-fvtt/runtime/svelte/helper";
    import { fade, fly } from "svelte/transition";
    import CustomPicker from "./customPicker.svelte";

    import {
        aaTypeMenu,
        aaNameMenu,
        aaVariantMenu,
        aaColorMenu,
    } from "../../../animation-functions/databases/jb2a-menu-options.js";

    // Receiving data from Parent
    export let flagData;
    export let flagPath;
    export let animType;
    export let presetType;
    export let presetSubType;
    export let animTypeSwitched = false;
    export let shouldShowOnlyX;
    export let disablePlayOn;
    export let isAutoRec;
    $: {
        animType = animType;
    }
    $: if (animTypeSwitched) {
        animTypeChange(flagPath);
    }
    // Defines the initial Flag path depending on the Section calling this Component
    let rootPath;
    let customRoot;
    let flagOptions;
    switch (flagPath) {
        case "explosions":
            rootPath = customRoot = flagOptions = flagData.explosions;
            break;
        case "PrimaryAnimation":
            rootPath =  customRoot = flagData.primary;
            flagOptions = flagData.options;
            break;
        case "sourceExtraFX":
            rootPath = customRoot = flagOptions = flagData.sourceToken;
            break;
        case "targetExtraFX":
            rootPath = customRoot = flagOptions = flagData.targetToken;
            break;
        case "preset":
            if (isAutoRec) {
                rootPath = customRoot = flagOptions = flagData[presetType];
            } else {
                rootPath = customRoot = flagOptions = flagData.preset[presetType];
            }
            break;
        case "MeleeSwitch":
            rootPath = customRoot = flagOptions = flagData.meleeSwitch;
            break;
        case "autoOverride":

            break;
    }
    // Sets the Flag Path depending on the section
    const options = flagOptions;
    // Sets Initial menuType for Menu - Assigns to Flag when updated
    // For Database path
    export let menuSelection = animType === "aura" ? "static" : animType;
    $: menuSelection = animType === "aura" ? "static" : animType;
    export let menuType =
        options.menuType || Object.keys(aaTypeMenu[menuSelection])[0];
    $: menuType = menuType;
    // Sets Initial animation for Menu - Assigns to Flag when updated
    export let animation =
        rootPath.animation ||
        Object.keys(aaNameMenu[menuSelection][menuType])[0];
    $: animation = animation;
    // Sets Initial variant for Menu - Assigns to Flag when updated
    export let variant =
        options.variant ||
        Object.keys(aaVariantMenu[menuSelection][menuType][animation])[0];
    $: variant = variant;
    // Sets Initial color for Menu - Assigns to Flag when updated
    export let color =
        rootPath.color ||
        Object.keys(
            aaColorMenu[menuSelection][menuType][animation][variant]
        )[0];
    $: color = color;
    function animTypeChange(type) {
        if (type !== "PrimaryAnimation") {
            return;
        }
        let menuSelection = animType === "aura" ? "static" : animType;
        menuType = Object.keys(aaTypeMenu[menuSelection])[0];
        animation = Object.keys(aaNameMenu[menuSelection][menuType])[0];
        variant = Object.keys(
            aaVariantMenu[menuSelection][menuType][animation]
        )[0];
        color = Object.keys(
            aaColorMenu[menuSelection][menuType][animation][variant]
        )[0];
    }

    // Determines if the Custom Path checkbox is checked, and updates CSS/Menu accordingly
    export let isCustom;
    $: isCustom = isCustom;
    export let customPath;
    $: customPath = customPath;
    export let customId;

    // Autopopulates Select Menus when they change
    async function menuTypeChange() {
        let newMenuType = menuType;
        animation = Object.keys(aaNameMenu[menuSelection][newMenuType])[0];
        variant = Object.keys(
            aaVariantMenu[menuSelection][newMenuType][animation]
        )[0];
        color = Object.keys(
            aaColorMenu[menuSelection][newMenuType][animation][variant]
        )[0];
    }
    async function animationChange() {
        let newAnimation = animation;
        variant = Object.keys(
            aaVariantMenu[menuSelection][menuType][newAnimation]
        )[0];
        color = Object.keys(
            aaColorMenu[menuSelection][menuType][newAnimation][variant]
        )[0];
    }
    async function variantChange() {
        let newVariant = variant;
        color = Object.keys(
            aaColorMenu[menuSelection][menuType][animation][newVariant]
        )[0];
    }

    let onlyX = options.onlyX || false;
    $: {
        onlyX = onlyX;
        options.onlyX = onlyX;
    }

    // Handles the "Static Type" option for when On Token is selected
    export let staticType = options.staticType || "source";
    $: {
        staticType = staticType;
        options.staticType = staticType;
    }
    let dbPath;
    $: {
        dbPath =
            color !== "random"
                ? `autoanimations.${animType}.${menuType}.${animation}.${variant}.${color}`
                : `autoanimations.${animType}.${menuType}.${animation}.${variant}`;
    }
</script>

<div transition:fade>
    <!--Unless spawned from "Explosions", Show the main Animation Type Select-->
    <div class="aa-3wide" transition:fade>
        <!--Type Menu-->
        <div
            class="flexcol {isCustom ? 'aa-disabled' : ''}"
            style="grid-row: 2 / 3;grid-column: 2 / 3;"
        >
            <label for="2">{localize("autoanimations.menus.type")}</label>
            <select
                bind:value={menuType}
                on:change={async () => await menuTypeChange()}
                id="2"
                disabled={isCustom}
                class={menuType != "" && !isCustom
                    ? "isPopulated"
                    : "isNotPopulated"}
            >
                {#if animType != ""}
                    {#each Object.entries(aaTypeMenu[menuSelection]) as [key, name]}
                        <option value={key}>{name}</option>
                    {/each}
                {/if}
            </select>
        </div>
        {#if animType === "static" && flagPath === "PrimaryAnimation" && !disablePlayOn}
            <!--"Play On" select for the Static option-->
            <div
                class="flexcol"
                style="grid-row: 2 / 3;grid-column: 3 / 4;"
                in:fly={{ x: 200, duration: 500 }}
                out:fly={{ x: 200, duration: 500 }}
            >
                <label for="6">{localize("autoanimations.menus.playOn")}</label>
                <select
                    bind:value={staticType}
                    id="6"
                    style="text-align: center;justify-self: center; background-color: rgba(21, 154, 169, 0.4);"
                >
                    <option value="source"
                        >{localize("autoanimations.menus.source")}</option
                    >
                    <option value="target"
                        >{localize("autoanimations.menus.target")}</option
                    >
                    <option value="targetDefault"
                        >{localize(
                            "autoanimations.menus.targetDefault"
                        )}</option
                    >
                    <option value="sourcetarget"
                        >{localize("autoanimations.menus.both")}</option
                    >
                </select>
            </div>
        {/if}
        <!--Animation Menu-->
        <div
            class="flexcol {isCustom ? 'aa-disabled' : ''}"
            style="grid-row: 3 / 4;grid-column: 1 / 2;"
        >
            <label for="3">{localize("autoanimations.menus.animation")}</label>
            <select
                bind:value={animation}
                on:change={async () => await animationChange()}
                id="3"
                disabled={isCustom}
                class={animation != "" && !isCustom
                    ? "isPopulated"
                    : "isNotPopulated"}
            >
                {#if menuType != ""}
                    {#each Object.entries(aaNameMenu[menuSelection][menuType]) as [key, name]}
                        <option value={key}>{name}</option>
                    {/each}
                {/if}
            </select>
        </div>
        <!--Variant Menu-->
        <div
            class="flexcol {isCustom ? 'aa-disabled' : ''}"
            style="grid-row: 3 / 4;grid-column: 2 / 3;"
        >
            <label for="4">{localize("autoanimations.menus.variant")}</label>
            <select
                bind:value={variant}
                on:change={async () => await variantChange()}
                id="4"
                disabled={isCustom}
                class={variant != "" && !isCustom
                    ? "isPopulated"
                    : "isNotPopulated"}
            >
                {#if (menuType != "") & (animation != "")}
                    {#each Object.entries(aaVariantMenu[menuSelection][menuType][animation]) as [key, name]}
                        <option value={key}>{name}</option>
                    {/each}
                {/if}
            </select>
        </div>
        <!--Color Menu-->
        <div
            class="flexcol {isCustom ? 'aa-disabled' : ''}"
            style="grid-row: 3 / 4;grid-column: 3 / 4;"
        >
            <label for="5">{localize("autoanimations.menus.color")}</label>
            <select
                bind:value={color}
                id="5"
                disabled={isCustom}
                class={color != "" && !isCustom
                    ? "isPopulated"
                    : "isNotPopulated"}
            >
                {#if menuType != "" && animation != "" && variant != ""}
                    {#each Object.entries(aaColorMenu[menuSelection][menuType][animation][variant]) as [key, name]}
                        <option value={key}>{name}</option>
                    {/each}
                {/if}
            </select>
        </div>
    </div>
    <CustomPicker
        {flagPath}
        {dbPath}
        {presetSubType}
        {presetType}
        {flagData}
        {customId}
        bind:isCustom
        bind:customPath
    />
    <div class="aa-3wide">
        {#if animType === "range" && isCustom && (flagPath === "PrimaryAnimation" || shouldShowOnlyX)}
            <div
                class="flexcol aa-button-labels"
                style="grid-row: 1 / 2; grid-column: 3 / 4;"
                transition:fade={{ duration: 500 }}
            >
                <input
                    type="checkbox"
                    id="constantY"
                    hidden
                    bind:checked={onlyX}
                />
                <label
                    for="constantY"
                    class={onlyX ? "selected" : "notSelected"}
                    >{localize("autoanimations.menus.constantScaleY")}</label
                >
            </div>
        {/if}
    </div>
</div>

<style lang="scss">
    .aa-3wide {
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
        color: black;
    }
    .aa-3wide label {
        align-self: center;
    }
    .isPopulated {
        box-shadow: 0 0 6px rgba(25, 175, 2, 0.6);
        transition: box-shadow 0.5s;
    }
    .isNotPopulated {
        box-shadow: 0 0 6px rgba(219, 132, 2, 0.7);
        transition: box-shadow 0.5s;
    }
    .selected {
        background-color: rgba(25, 175, 2, 0.18);
        transition: background-color 0.5s;
    }
    .notSelected {
        background-color: rgba(219, 132, 2, 0.18);
        transition: background-color 0.5s;
    }
    .aa-disabled label {
        opacity: 0.3;
        transition: opacity 0.5s;
    }
    .aa-3wide select:disabled {
        opacity: 0.3;
        transition: opacity 0.5s;
    }
</style>
