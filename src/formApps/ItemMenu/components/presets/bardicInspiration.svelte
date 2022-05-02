<script>
    import { localize } from "@typhonjs-fvtt/runtime/svelte/helper";
    import { fade } from "svelte/transition";
    import SoundSettings from "../soundSettings.svelte";
    import {
        aaVariantMenu,
        aaColorMenu,
    } from "../../../../animation-functions/databases/jb2a-menu-options.js";

    export let flagData;
    const root = flagData.preset;
    root.bardicinspiration
        ? root.bardicinspiration
        : (root.bardicinspiration = {});
    const preset = root.bardicinspiration;

    let bardSelf = preset.bardSelf || false;
    $: bardSelf = preset.bardSelf = bardSelf;

    let sourceAnimation = preset.bardAnim || "bardicinspiration";
    $: sourceAnimation = preset.bardAnim = sourceAnimation;
    let sourceType =
        sourceAnimation === "bardicinspiration" ? "spell" : "music";
    $: sourceType = sourceAnimation === "bardicinspiration" ? "spell" : "music";

    let sourceVariant =
        preset.bardVariant ||
        Object.keys(aaVariantMenu.static[sourceType][sourceAnimation])[0];
    $: sourceVariant = preset.bardVariant = sourceVariant;

    let sourceColor =
        preset.bardSelfColor ||
        Object.keys(
            aaColorMenu.static[sourceType][sourceAnimation][sourceVariant]
        )[0];
    $: sourceColor = preset.bardSelfColor = sourceColor;

    let bardTarget = preset.bardTarget || false;
    $: bardTarget = preset.bardTarget = bardTarget;

    let targetAnimation = preset.bardTargetAnim || "bardicinspiration";
    $: targetAnimation = preset.bardTargetAnim = targetAnimation;
    let targetType =
        targetAnimation === "bardicinspiration" ? "spell" : "music";
    $: targetType = targetAnimation === "bardicinspiration" ? "spell" : "music";

    let targetVariant =
        preset.bardTargetVariant ||
        Object.keys(aaVariantMenu.static[targetType][targetAnimation])[0];
    $: targetVariant = preset.bardTargetVariant = targetVariant;

    let targetColor =
        preset.bardTargetColor ||
        Object.keys(
            aaColorMenu.static[targetType][targetAnimation][targetVariant]
        )[0];
    $: targetColor = preset.bardTargetColor = targetColor;

    let markerEnable = preset.markerEnable || false;
    $: markerEnable = preset.markerEnable = markerEnable;

    let markerColorSelf =
        preset.markerColor ||
        Object.keys(aaColorMenu.static.spell.bardicinspiration.marker)[0];
    $: markerColorSelf = preset.markerColor = markerColorSelf;

    let markerColorTarget =
        preset.markerColorTarget ||
        Object.keys(aaColorMenu.static.spell.bardicinspiration.marker)[0];
    $: markerColorTarget = preset.markerColorTarget = markerColorTarget;

    let scale = preset.scale || 1;
    $: scale = preset.scale = scale;

    let belowToken = preset.below || false;
    $: belowToken = preset.below = belowToken;
    $: aboveBelow = belowToken ? "Below Token" : "Above Token";

    function below() {
        belowToken = !belowToken;
    }

    function switchSourceEnable() {
        bardSelf = !bardSelf;
        preset.bardSelf = bardSelf;
    }
    async function sourceAnimationChange() {
        let newAnimation = sourceAnimation;
        let newSourceType =
            newAnimation === "bardicinspiration" ? "spell" : "music";
        sourceVariant = Object.keys(
            aaVariantMenu.static[newSourceType][newAnimation]
        )[0];
        sourceColor = Object.keys(
            aaColorMenu.static[newSourceType][newAnimation][sourceVariant]
        )[0];
    }
    async function sourceVariantChange() {
        let newVariant = sourceVariant;
        sourceColor = Object.keys(
            aaColorMenu.static[sourceType][sourceAnimation][newVariant]
        )[0];
    }
    function switchTargetEnable() {
        bardTarget = !bardTarget;
        preset.bardTarget = bardTarget;
    }
    async function targetAnimationChange() {
        let newAnimation = targetAnimation;
        let newTargetType =
            newAnimation === "bardicinspiration" ? "spell" : "music";
        targetVariant = Object.keys(
            aaVariantMenu.static[newTargetType][newAnimation]
        )[0];
        targetColor = Object.keys(
            aaColorMenu.static[newTargetType][newAnimation][targetVariant]
        )[0];
    }
    async function targetVariantChange() {
        let newVariant = targetVariant;
        targetColor = Object.keys(
            aaColorMenu.static[targetType][targetAnimation][newVariant]
        )[0];
    }
    function switchMarkerEnable() {
        markerEnable = !markerEnable;
        preset.markerEnable = markerEnable;
    }
</script>

<div class="aaMenu-section">
<h1 style="margin-bottom: 15px">Bardic Inspiration Preset</h1>
<div class="aa-subheader-section">
    <div class="aa-subheader">
        <div class="flexcol" style="grid-row:1/2; grid-column:3/4">
            <label for="">Source Animation</label>
        </div>
        <div class="flexcol" style="grid-row:1/2; grid-column:5/6;">
            <i
                class="{bardSelf
                    ? 'fas fa-minus aa-red'
                    : 'fas fa-plus aa-green'} aaCenterToggle"
                on:click={() => switchSourceEnable()}
            />
        </div>
    </div>
</div>
{#if bardSelf}
    <div class="aa-3wide" transition:fade>
        <!--Animation Menu-->
        <div class="flexcol" style="grid-row: 3 / 4;grid-column: 1 / 2;">
            <label for="">{localize("AUTOANIM.animation")}</label>
            <select
                name="flags.autoanimations.animation"
                bind:value={sourceAnimation}
                on:change={async () => await sourceAnimationChange()}
            >
                <option value="bardicinspiration"
                    >{localize("AUTOANIM.bardicinspiration")}</option
                >
                <option value="notes">{localize("AUTOANIM.musicnote")}</option>
            </select>
        </div>
        <!--Variant Menu-->
        <div class="flexcol" style="grid-row: 3 / 4;grid-column: 2 / 3;">
            <label for="">{localize("AUTOANIM.variant")}</label>
            <select
                name="flags.autoanimations.options.variant"
                bind:value={sourceVariant}
                on:change={async () => await sourceVariantChange()}
            >
                {#each Object.entries(aaVariantMenu.static[sourceType][sourceAnimation]) as [key, name]}
                    <option value={key}>{name}</option>
                {/each}
            </select>
        </div>
        <!--Color Menu-->
        <div class="flexcol" style="grid-row: 3 / 4;grid-column: 3 / 4;">
            <label for="">{localize("AUTOANIM.color")}</label>
            <select name="flags.autoanimations.color" bind:value={sourceColor}>
                {#each Object.entries(aaColorMenu.static[sourceType][sourceAnimation][sourceVariant]) as [key, name]}
                    <option value={key}>{name}</option>
                {/each}
            </select>
        </div>
    </div>
{/if}
</div>
<div class="aaMenu-section">
<div class="aa-subheader-section">
    <div class="aa-subheader">
        <div class="flexcol" style="grid-row:1/2; grid-column:3/4">
            <label for="">Target Animation</label>
        </div>
        <div class="flexcol" style="grid-row:1/2; grid-column:5/6;">
            <i
                class="{bardTarget
                    ? 'fas fa-minus aa-red'
                    : 'fas fa-plus aa-green'} aaCenterToggle"
                on:click={() => switchTargetEnable()}
            />
        </div>
    </div>
</div>
{#if bardTarget}
    <div class="aa-3wide" transition:fade>
        <!--Animation Menu-->
        <div class="flexcol" style="grid-row: 3 / 4;grid-column: 1 / 2;">
            <label for="">{localize("AUTOANIM.animation")}</label>
            <select
                name="flags.autoanimations.animation"
                bind:value={targetAnimation}
                on:change={async () => await targetAnimationChange()}
            >
                <option value="bardicinspiration"
                    >{localize("AUTOANIM.bardicinspiration")}</option
                >
                <option value="notes">{localize("AUTOANIM.musicnote")}</option>
            </select>
        </div>
        <!--Variant Menu-->
        <div class="flexcol" style="grid-row: 3 / 4;grid-column: 2 / 3;">
            <label for="">{localize("AUTOANIM.variant")}</label>
            <select
                name="flags.autoanimations.options.variant"
                bind:value={targetVariant}
                on:change={async () => await targetVariantChange()}
            >
                {#each Object.entries(aaVariantMenu.static[targetType][targetAnimation]) as [key, name]}
                    <option value={key}>{name}</option>
                {/each}
            </select>
        </div>
        <!--Color Menu-->
        <div class="flexcol" style="grid-row: 3 / 4;grid-column: 3 / 4;">
            <label for="">{localize("AUTOANIM.color")}</label>
            <select name="flags.autoanimations.color" bind:value={targetColor}>
                {#each Object.entries(aaColorMenu.static[targetType][targetAnimation][targetVariant]) as [key, name]}
                    <option value={key}>{name}</option>
                {/each}
            </select>
        </div>
    </div>
{/if}
</div>
<div class="aaMenu-section">
<div class="aa-subheader-section">
    <div class="aa-subheader">
        <div class="flexcol" style="grid-row:1/2; grid-column:3/4">
            <label for="">Marker Animation</label>
        </div>
        <div class="flexcol" style="grid-row:1/2; grid-column:5/6;">
            <i
                class="{markerEnable
                    ? 'fas fa-minus aa-red'
                    : 'fas fa-plus aa-green'} aaCenterToggle"
                on:click={() => switchMarkerEnable()}
            />
        </div>
    </div>
</div>
{#if markerEnable}
    <div class="aa-3wide" transition:fade>
        <!--Color Menu-->
        <div class="flexcol" style="grid-row: 1 / 2;grid-column: 1 / 2;">
            <label for="">{localize("AUTOANIM.markerColor")}</label>
            <select bind:value={markerColorSelf}>
                {#each Object.entries(aaColorMenu.static.spell.bardicinspiration.marker) as [key, name]}
                    <option value={key}>{name}</option>
                {/each}
            </select>
        </div>
        <!--Color Menu-->
        <div class="flexcol" style="grid-row: 1 / 2;grid-column: 3 / 4;">
            <label for="">{localize("AUTOANIM.markerColorTarget")}</label>
            <select bind:value={markerColorTarget}>
                {#each Object.entries(aaColorMenu.static.spell.bardicinspiration.marker) as [key, name]}
                    <option value={key}>{name}</option>
                {/each}
            </select>
        </div>
    </div>
<h2 style="margin-top:5px;">Options</h2>
<div class="aa-options">
    <!--Set Z-Index-->
    <div class="flexcol" style="grid-row: 1 / 2; grid-column: 2 / 3;">
        <label for="">Z-Index</label>
        <button class="oldCheck" on:click={() => below()}>{aboveBelow}</button>
    </div>
    <div class="flexcol" style="grid-row: 1 / 2; grid-column: 3 / 4;">
        <label for="">{localize("AUTOANIM.scale")}</label>
        <input
            type="Number"
            bind:value={scale}
            placeholder=1
            step=0.01
        />
    </div>
</div>
{/if}
<SoundSettings audioPath="a01" {flagData} />
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
        border-radius: 10px;
    }
    .aa-3wide label {
        align-self: center;
    }
    h1 {
        font-family: "Modesto Condensed", "Palatino Linotype", serif;
        font-size: x-large;
        font-weight: bold;
        text-align: center;
        margin-right: 5%;
        margin-left: 5%;
        margin-top: 10px;
        color: black;
    }
    .aa-subheader {
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
    .aa-subheader label {
        align-self: center;
        font-family: "Modesto Condensed", "Palatino Linotype", serif;
        font-size: x-large;
        font-weight: bold;
        text-align: center;
        margin-right: 5%;
        margin-left: 5%;
        color: black;
    }
    .aa-subheader-section {
        border-bottom: 1px solid rgba(120, 46, 34, 1);
        margin-right: 10%;
        margin-left: 10%;
        margin-bottom: 5px;
        margin-top: 5px;
    }
    .aa-options {
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
        color: black;
    }
    .aa-options input {
        text-align: center;
        align-self: center;
        border-radius: 5px;
        width: 3em;
        color: black;
    }
    .aa-options label {
        align-self: center;
    }
    .aa-options button {
        border-radius: 10px;
        border: 2px outset #8e8e8e;
        font-family: "Modesto Condensed", "Palatino Linotype", serif;
        font-weight: bold;
        font-size: large;
        height: auto;
    }
    h2 {
        font-family: "Modesto Condensed", "Palatino Linotype", serif;
        font-size: x-large;
        font-weight: bold;
        text-align: center;
        margin-right: 15%;
        margin-left: 15%;
        color: black;
    }
</style>
