<script>
    import { localize } from "@typhonjs-fvtt/runtime/svelte/helper";
    import { fade } from "svelte/transition";
    import { TJSDialog } from "@typhonjs-fvtt/runtime/svelte/application";
    import CustomPicker from "./customPicker.svelte";
    import {
        aaTypeMenu,
        aaNameMenu,
        aaVariantMenu,
        aaColorMenu,
    } from "../../../animation-functions/databases/jb2a-menu-options.js";
    import {
        menuDBPathSourceFX,
        customFilePathSourceFX,
        customCheckedSourceFX,
        menuDBPathTargetFX,
        customFilePathTargetFX,
        customCheckedTargetFX,
        extraSource,
        extraTarget,
    } from "../menuStore.js";
    import SourceFxApp from "../videoPreviews/sourceFXApp.svelte";
    import TargetFxApp from "../videoPreviews/targetFXApp.svelte";

    export let flagData;
    export let flagPath;
    export let sectionTitle;
    let root;
    switch (flagPath) {
        case "sourceExtraFX":
            root = flagData.sourceToken;
            break;
        case "targetExtraFX":
            root = flagData.targetToken;
            break;
    }
    let preBuild = root.menuType;
    export let menuType = root.menuType
        ? root.menuType
        : Object.keys(aaTypeMenu.static)[0];
    $: menuType = root.menuType = menuType;
    export let animation =
        preBuild && root.name
            ? root.name
            : Object.keys(aaNameMenu.static[menuType])[0];
    $: animation = root.name = animation;
    export let variant =
        preBuild && root.variant
            ? root.variant
            : Object.keys(aaVariantMenu.static[menuType][animation])[0];
    $: variant = root.variant = variant;
    export let color =
        preBuild && root.color
            ? root.color
            : Object.keys(aaColorMenu.static[menuType][animation][variant])[0];
    $: color = root.color = color;

    export let isCustom;
    $: isCustom = isCustom;
    export let customPath;
    $: customPath = customPath;

    async function menuTypeChange() {
        let newMenuType = menuType;
        animation = Object.keys(aaNameMenu.static[newMenuType])[0];
        variant = Object.keys(aaVariantMenu.static[newMenuType][animation])[0];
        color = Object.keys(
            aaColorMenu.static[newMenuType][animation][variant]
        )[0];
    }
    async function animationChange() {
        let newAnimation = animation;
        variant = Object.keys(aaVariantMenu.static[menuType][newAnimation])[0];
        color = Object.keys(
            aaColorMenu.static[menuType][newAnimation][variant]
        )[0];
    }
    async function variantChange() {
        let newVariant = variant;
        color = Object.keys(
            aaColorMenu.static[menuType][animation][newVariant]
        )[0];
    }

    function onClick(flagPath) {
        new TJSDialog({
            modal: false,
            draggable: true,
            resizable: true,
            id: "Field01",
            title:
                flagPath === "sourceExtraFX"
                    ? "Extra Source Effect"
                    : "Extra Target Effect",
            stylesContent: { background: "rgba(125, 125, 125, 0.75)" },
            content: {
                class: flagPath === "sourceExtraFX" ? SourceFxApp : TargetFxApp,
            },
        }).render(true);
    }
    let sourceFilePath;
    $: if (flagPath === "sourceExtraFX") {
        sourceFilePath =
            color === "random"
                ? `autoanimations.static.${menuType}.${animation}.${variant}`
                : `autoanimations.static.${menuType}.${animation}.${variant}.${color}`;
    }
    let targetFilePath;
    $: if (flagPath === "targetExtraFX") {
        targetFilePath =
            color === "random"
                ? `autoanimations.static.${menuType}.${animation}.${variant}`
                : `autoanimations.static.${menuType}.${animation}.${variant}.${color}`;
    }
    $: if (flagPath === "sourceExtraFX") {
        menuDBPathSourceFX.set(sourceFilePath);
        customFilePathSourceFX.set(customPath);
        customCheckedSourceFX.set(isCustom);
    }
    $: if (flagPath === "targetExtraFX") {
        menuDBPathTargetFX.set(targetFilePath);
        customFilePathTargetFX.set(customPath);
        customCheckedTargetFX.set(isCustom);
    }

    export let enableSection =
        flagPath === "sourceExtraFX"
            ? flagData.sourceToken.enable || false
            : flagPath === "targetExtraFX"
            ? flagData.targetToken.enable || false
            : true;
    $: enableSection = enableSection;

    let enableSource = flagData.sourceToken.enable || false;
    $: enableSource = flagData.sourceToken.enable = enableSource;

    let enableTarget = flagData.targetToken.enable || false;
    $: enableTarget = flagData.targetToken.enable = enableTarget;

    let enabledLabel = root.enable ? "Enabled" : "Disabled";
    $: enabledLabel =
        flagPath == "sourceExtraFX"
            ? enableSection
                ? "Enabled"
                : "Disabled"
            : enableSection
            ? "Enabled"
            : "Disabled";

    $: {
        if (flagPath === "sourceExtraFX") {
            extraSource.set(enableSection);
        }
    }

    $: {
        if (flagPath === "targetExtraFX") {
            extraTarget.set(enableSection);
        }
    }
    $: root.enable = enableSection;
    function switchEnable() {
        enableSection = !enableSection;
    }
</script>

<div class="aa-header-section">
    <div class="aa-header">
        <div class="flexcol" style="grid-row:1/2; grid-column:3/4">
            <label for="">{sectionTitle}</label>
        </div>
        {#if enableSection}
        <div class="flexcol" style="grid-row:1/2; grid-column:1/2">
            <i
                class="fas fa-video aa-video-preview"
                on:click={() => onClick(flagPath)}
            />
        </div>
        {/if}
        <div class="flexcol" style="grid-row:1/2; grid-column:5/6;">
            <i class="{enableSection ? "fas fa-minus aa-red" : "fas fa-plus aa-green"} aaCenterToggle" on:click={() => switchEnable()}></i>
        </div>
    </div>
</div>
{#if enableSection}
    <div class="aa-3wide" transition:fade={{ duration: 500 }}>
        <!--Type Menu-->
        <div class="flexcol" style="grid-row: 2 / 3;grid-column: 2 / 3;">
            <label for="2">{localize("AUTOANIM.type")}</label>
            <select
                bind:value={menuType}
                on:change={async () => await menuTypeChange()}
                id="2"
                disabled={isCustom}
                class={menuType != "" && !isCustom
                    ? "isPopulated"
                    : "isNotPopulated"}
            >
                {#each Object.entries(aaTypeMenu.static) as [key, name]}
                    <option value={key}>{name}</option>
                {/each}
            </select>
        </div>
        <!--Animation Menu-->
        <div class="flexcol" style="grid-row: 3 / 4;grid-column: 1 / 2;">
            <label for="3">{localize("AUTOANIM.animation")}</label>
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
                    {#each Object.entries(aaNameMenu.static[menuType]) as [key, name]}
                        <option value={key}>{name}</option>
                    {/each}
                {/if}
            </select>
        </div>
        <!--Variant Menu-->
        <div class="flexcol" style="grid-row: 3 / 4;grid-column: 2 / 3;">
            <label for="4">{localize("AUTOANIM.variant")}</label>
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
                    {#each Object.entries(aaVariantMenu.static[menuType][animation]) as [key, name]}
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
                disabled={isCustom}
                class={color != "" && !isCustom
                    ? "isPopulated"
                    : "isNotPopulated"}
            >
                {#if menuType != "" && animation != "" && variant != ""}
                    {#each Object.entries(aaColorMenu.static[menuType][animation][variant]) as [key, name]}
                        <option value={key}>{name}</option>
                    {/each}
                {/if}
            </select>
        </div>
    </div>
    <CustomPicker {flagPath} {flagData} bind:isCustom bind:customPath />
{/if}

<style lang="scss">
    .aa-header-section {
        border-bottom: 2px solid rgba(120, 46, 34, 1);
        margin-right: 5%;
        margin-left: 5%;
        margin-bottom: 5px;
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
    }
    .aa-3wide select {
        text-align: center;
        font-weight: bold;
        min-height: 2em;
        border-radius: 10px;
    }
    .aa-3wide label {
        align-self: center;
    }
    .aa-red {
        color: red;
        transition: "color" 0.5s;
    }
    .aa-green {
        color: green;
        transition: "color" 0.5s;
    }
</style>
