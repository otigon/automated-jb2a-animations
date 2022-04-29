<svelte:options accessors={true} />

<script>
    import { localize } from "@typhonjs-fvtt/runtime/svelte/helper";
    import { fade, fly } from "svelte/transition";
    import { TJSDialog } from "@typhonjs-fvtt/runtime/svelte/application";
    import CustomPicker from "./customPicker.svelte";
    //import PrimaryPreview from "../videoPreviews/primary.js";
    //import ExplosionPreview from "../videoPreviews/explosion.js";
    import PrimaryApp from "../videoPreviews/primaryApp.svelte";
    import ExplosionApp from "../videoPreviews/explosionApp.svelte";

    import {
        menuDBPath01,
        customFilePath01,
        customChecked01,
        menuDBPath02,
        customFilePath02,
        customChecked02,
    } from "../menuStore.js";

    import {
        aaTypeMenu,
        aaNameMenu,
        aaVariantMenu,
        aaColorMenu,
    } from "../../../animation-functions/databases/jb2a-menu-options.js";

    // Receiving data from Parent
    export let flagData;
    export let flagPath;
    export let previewType;
    export let sectionTitle;
    export let animType;
    $: {
        animType = animType;
        animTypeChange();
    }

    // Defines the initial Flag path depending on the Section calling this Component
    let rootPath;
    let customRoot;
    switch (flagPath) {
        case "explosions":
            rootPath = flagData.explosions;
            customRoot = flagData.explosions;
            break;
        case "PrimaryAnimation":
            rootPath = flagData;
            customRoot = flagData.options;
    }

    // Sets the Flag Path depending on the section
    const options =
        flagPath === "explosions"
            ? flagData.explosions
            : rootPath.options || {};
    // Sets Initial menuType for Menu - Assigns to Flag when updated

    // For Database path
    let menuSelection =
        flagPath !== "PrimaryAnimation"
            ? "static"
            : animType === "aura"
            ? "static"
            : animType;
    $: menuSelection =
        flagPath !== "PrimaryAnimation"
            ? "static"
            : animType === "aura"
            ? "static"
            : animType;

    export let menuType =
        options.menuType || Object.keys(aaTypeMenu[menuSelection])[0];
    $: {
        menuType = menuType;
        options.menuType = menuType;
    }
    // Sets Initial animation for Menu - Assigns to Flag when updated
    let animation =
        rootPath.animation ||
        Object.keys(aaNameMenu[menuSelection][menuType])[0];
    $: {
        animation = animation;
        rootPath.animation = animation;
    }
    // Sets Initial variant for Menu - Assigns to Flag when updated
    let variant =
        options.variant ||
        Object.keys(aaVariantMenu[menuSelection][menuType][animation])[0];
    $: {
        variant = variant;
        options.variant = variant;
    }
    // Sets Initial color for Menu - Assigns to Flag when updated
    let color =
        rootPath.color ||
        Object.keys(
            aaColorMenu[menuSelection][menuType][animation][variant]
        )[0];
    $: {
        color = color;
        rootPath.color = color;
    }
    function animTypeChange() {
        if (flagPath !== "PrimaryAnimation") {
            return;
        }
        let menuSelection =
            flagPath !== "PrimaryAnimation"
                ? "static"
                : animType === "aura"
                ? "static"
                : animType;
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
    let isCustom;
    $: isCustom = isCustom;
    let customPath;
    $: customPath = customPath;

    //$: setContext("animationType", animType);

    //Launches the Video Preview
    function onClick(type) {
        new TJSDialog({
            modal: false,
            draggable: true,
            resizable: true,
            title:
                type === "primary" ? "Primary Animation" : "Explosion Preview",
            stylesContent: { background: "rgba(125, 125, 125, 0.75)" },
            content: {
                class: type === "primary" ? PrimaryApp : ExplosionApp,
            },
        }).render(true);
    }

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
    // Sets the A-A Database Path for sending to the Video Previewer
    let primaryFilePath;
    $: if (previewType === "primary") {
        primaryFilePath =
            color === "random"
                ? `autoanimations.${menuSelection}.${menuType}.${animation}.${variant}`
                : `autoanimations.${menuSelection}.${menuType}.${animation}.${variant}.${color}`;
    }
    let explosionFilePath;
    $: if (previewType === "explosion") {
        explosionFilePath =
            color === "random"
                ? `autoanimations.static.${menuType}.${animation}.${variant}`
                : `autoanimations.static.${menuType}.${animation}.${variant}.${color}`;
    }

    // Sets Store variables for sending to the Video Previewer
    $: if (previewType === "primary") {
        menuDBPath01.set(primaryFilePath);
        customFilePath01.set(customPath);
        customChecked01.set(isCustom);
    }
    $: if (previewType === "explosion") {
        menuDBPath02.set(explosionFilePath);
        customFilePath02.set(customPath);
        customChecked02.set(isCustom);
    }
    let onlyX = options.onlyX || false;
    $: {
        onlyX = onlyX;
        options.onlyX = onlyX;
    }

    export let explosionEnabled = rootPath.enable || false;
    $: {
        explosionEnabled = explosionEnabled;
        rootPath.enable = explosionEnabled;
    }
    let explosionLabel = explosionEnabled ? "Enabled" : "Disabled";
    $: explosionLabel = explosionEnabled ? "Enabled" : "Disabled";

    function enableExplosion() {
        explosionEnabled = !explosionEnabled;
    }
    // Handles the "Static Type" option for when On Token is selected
    let staticType = options.staticType || "source";
    $: {
        staticType = staticType;
        options.staticType = staticType;
    }

</script>

<div transition:fade>
    <div class="aa-header-section">
        <div class="aa-header">
            <div class="flexcol" style="grid-row:1/2; grid-column:3/4">
                <label for="">{sectionTitle}</label>
            </div>
            {#if (previewType === "primary" && menuType) || (previewType === "explosion" && animation && explosionEnabled)}
                <div class="flexcol" style="grid-row:1/2; grid-column:1/2">
                    <i
                        class="fas fa-video aa-video-preview"
                        on:click={() => onClick(previewType)}
                    />
                </div>
            {/if}
            {#if flagPath === "explosions"}
                <div class="flexcol" style="grid-row:1/2; grid-column:5/6;">
                    <i
                        class="{explosionEnabled
                            ? 'fas fa-minus aa-red'
                            : 'fas fa-plus aa-green'} aaCenterToggle"
                        on:click={() => enableExplosion()}
                    />
                </div>
            {/if}
        </div>
    </div>
    {#if (flagPath === "explosions" && explosionEnabled) || flagPath === "PrimaryAnimation"}
        <!--Unless spawned from "Explosions", Show the main Animation Type Select-->
        <div class="aa-3wide">
            <!--Type Menu-->
            <div
                class="flexcol {isCustom ? 'aa-disabled' : ''}"
                style="grid-row: 2 / 3;grid-column: 2 / 3;"
            >
                <label for="2">{localize("AUTOANIM.type")}</label>
                <select
                    name="flags.autoanimations.options.menuType"
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
            {#if animType === "static" && flagPath === "PrimaryAnimation"}
                <!--"Play On" select for the Static option-->
                <div
                    class="flexcol"
                    style="grid-row: 2 / 3;grid-column: 3 / 4;"
                    in:fly={{ x: 200, duration: 500 }}
                    out:fly={{ x: 200, duration: 500 }}
                >
                    <label for="6">{localize("AUTOANIM.playOn")}</label>
                    <select
                        name="flags.autoanimations.options.staticType"
                        bind:value={staticType}
                        id="6"
                        style="text-align: center;justify-self: center"
                    >
                        <option value="source"
                            >{localize("AUTOANIM.source")}</option
                        >
                        <option value="target"
                            >{localize("AUTOANIM.target")}</option
                        >
                        <option value="targetDefault"
                            >{localize("AUTOANIM.targetDefault")}</option
                        >
                        <option value="sourcetarget"
                            >{localize("AUTOANIM.both")}</option
                        >
                    </select>
                </div>
            {/if}
            <!--Animation Menu-->
            <div
                class="flexcol {isCustom ? 'aa-disabled' : ''}"
                style="grid-row: 3 / 4;grid-column: 1 / 2;"
            >
                <label for="3">{localize("AUTOANIM.animation")}</label>
                <select
                    name="flags.autoanimations.animation"
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
                <label for="4">{localize("AUTOANIM.variant")}</label>
                <select
                    name="flags.autoanimations.options.variant"
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
                <label for="5">{localize("AUTOANIM.color")}</label>
                <select
                    name="flags.autoanimations.color"
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
        <CustomPicker {flagPath} {flagData} bind:isCustom bind:customPath />
        <div class="aa-3wide">
            {#if animType === "range" && isCustom && flagPath === "PrimaryAnimation"}
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
                        >{localize("AUTOANIM.constantScaleY")}</label
                    >
                </div>
            {/if}
        </div>
    {/if}
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
    .aa-3wide select {
        text-align: center;
        font-weight: bold;
        min-height: 2em;
        border-radius: 5px;
    }
    .aa-3wide label {
        align-self: center;
    }
    .aa-header {
        display: grid;
        grid-template-columns: 10% 20% 40% 20% 10%;
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
    .aa-header-section {
        border-bottom: 2px solid rgba(120, 46, 34, 1);
        margin-right: 5%;
        margin-left: 5%;
        margin-bottom: 5px;
        margin-top: 5px;
    }
    .aa-red {
        color: red;
        transition: "color" 0.5s;
    }
    .aa-green {
        color: green;
        transition: "color" 0.5s;
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
