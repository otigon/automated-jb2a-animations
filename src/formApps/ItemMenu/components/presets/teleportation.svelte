<script>
    import { localize } from "@typhonjs-fvtt/runtime/svelte/helper";
    import { fade } from "svelte/transition";
    import SoundSettings from "../soundSettings.svelte";
    import ChooseAnimation from "../chooseAnimation.svelte";

    export let flagData;
    export let presetType;
    const root = flagData.preset;
    root.teleportation ? root.teleportation : (root.teleportation = {});
    const preset = root.teleportation;

    let measureType = preset.measureType || "alternating";
    $: measureType = preset.measureType = measureType;

    let teleDist = preset.teleDist || 30;
    $: teleDist = preset.teleDist = teleDist;

    let hideFromPlayers = preset.hideFromPlayers || false;
    $: hideFromPlayers = preset.hideFromPlayers = hideFromPlayers;
    let isHidden = hideFromPlayers ? "Hidden" : "Not Hidden";
    $: isHidden = hideFromPlayers ? "Hidden" : "Not Hidden";
    function switchHide() {
        hideFromPlayers = !hideFromPlayers;
    }

    preset.start ? preset.start : preset.start = {};
    const start = preset.start;

    let menuType = start.menuType;
    $: menuType = start.menuType = menuType;

    let animation = start.animation;
    $: animation = start.animation = animation;

    let variant = start.variant;
    $: variant = start.variant = variant;

    let color = start.color;
    $: color = start.color = color;

    let isCustom = start.enableCustom || false;
    $: isCustom = start.enableCustom = isCustom;

    let customPath = start.customPath;
    $: customPath = start.customPath = customPath;

    let scale = start.scale || 1;
    $: scale = start.scale = scale;

    let belowToken = start.below || false;
    $: belowToken = start.below = belowToken;
    function below() {
        belowToken = !belowToken;
    }
    $: aboveBelow = belowToken ? "Below Token" : "Above Token";




    
    let belowToken02 = preset.below02 || false;
    $: belowToken02 = preset.below02 = belowToken02;
    function below02() {
        belowToken02 = !belowToken02;
    }
    $: aboveBelow02 = belowToken02 ? "Below Token" : "Above Token";

    let belowToken03 = preset.below03 || false;
    $: belowToken03 = preset.below03 = belowToken03;
    function below03() {
        belowToken03 = !belowToken03;
    }
    $: aboveBelow03 = belowToken03 ? "Below Token" : "Above Token";

    let menuType02 = preset.menuType02;
    $: menuType02 = preset.menuType02 = menuType02;

    let animation02 = preset.animation02;
    $: animation02 = preset.animation02 = animation02;

    let variant02 = preset.variant02;
    $: variant02 = preset.variant02 = variant02;

    let color02 = preset.color02;
    $: color02 = preset.color02 = color02;

    let isCustom02 = preset.enableCustom02 || false;
    $: isCustom02 = preset.enableCustom02 = isCustom02;

    let customPath02 = preset.customPath02;
    $: customPath02 = preset.customPath02 = customPath02;

    let delayAlpha = preset.delay || 250;
    $: delayAlpha = preset.delay = delayAlpha;

    let menuType03 = preset.menuType03;
    $: menuType03 = preset.menuType03 = menuType03;

    let animation03 = preset.animation03;
    $: animation03 = preset.animation03 = animation03;

    let variant03 = preset.variant03;
    $: variant03 = preset.variant03 = variant03;

    let color03 = preset.color03;
    $: color03 = preset.color03 = color03;

    let isCustom03 = preset.enableCustom03 || false;
    $: isCustom03 = preset.enableCustom03 = isCustom03;

    let customPath03 = preset.customPath03;
    $: customPath03 = preset.customPath03 = customPath03;

    let playbackRate03 = preset.playbackRate03 || 1;
    $: playbackRate03 = preset.playbackRate03 = playbackRate03;

    let enableBetween = preset.enableBetween || false;
    $: enableBetween = preset.enableBetween = enableBetween;
    function switchBetween() {
        enableBetween = !enableBetween;
    }
</script>

<h1 style="margin-bottom: 15px">Teleportation Preset</h1>
<h2 style="margin-top:10px;">Options</h2>
<div class="aa-3wide" transition:fade>
    <!--Measurement Type-->
    <div class="flexcol" style="grid-row: 1 / 2;grid-column: 1 / 2;">
        <label for="">{localize("AUTOANIM.animation")}</label>
        <select name="flags.autoanimations.animation" bind:value={measureType}>
            <option value="alternating">{localize("AUTOANIM.circle")}</option>
            <option value="equidistant">{localize("AUTOANIM.square")}</option>
        </select>
    </div>
    <div class="flexcol" style="grid-row: 1 / 2; grid-column: 2 / 3;">
        <label for="">Range</label>
        <input type="Number" bind:value={teleDist} step="0.01" />
    </div>
    <div class="flexcol" style="grid-row: 1 / 2; grid-column: 3 / 4;">
        <label for="">{localize("AUTOANIM.hideBorder")}</label>
        <button
            class={hideFromPlayers ? "selected" : "notSelected"}
            on:click={() => switchHide()}>{isHidden}</button
        >
    </div>
</div>
<h1 style="margin-top:10px;">Start Animation</h1>
<ChooseAnimation
    bind:menuType={menuType}
    bind:animation={animation}
    bind:variant={variant}
    bind:color={color}
    bind:isCustom={isCustom}
    bind:customPath={customPath}
    {presetType}
    presetSubType="Primary"
    flagPath="preset"
    animType="static"
    {flagData}
/>
<h2>Options</h2>
<div class="aa-options">
    <!--Set Z-Index-->
    <div class="flexcol" style="grid-row: 1 / 2; grid-column: 2 / 3;">
        <label for="">Z-Index</label>
        <button class="oldCheck" on:click={() => below()}>{aboveBelow}</button>
    </div>
    <div class="flexcol" style="grid-row: 1 / 2; grid-column: 3 / 4;">
        <label for="">Scale</label>
        <input type="Number" bind:value={scale} step="0.01" />
    </div>
</div>
<div class="aa-header-section">
    <div class="aa-header">
        <div class="flexcol" style="grid-row:1/2; grid-column:3/4">
            <label for="">Between Animation</label>
        </div>
        <div class="flexcol" style="grid-row:1/2; grid-column:5/6;">
            <i
                class="{enableBetween
                    ? 'fas fa-minus aa-red'
                    : 'fas fa-plus aa-green'} aaCenterToggle"
                on:click={() => switchBetween()}
            />
        </div>
    </div>
</div>
{#if enableBetween}
<ChooseAnimation
    bind:menuType={menuType03}
    bind:animation={animation03}
    bind:variant={variant03}
    bind:color={color03}
    bind:isCustom={isCustom03}
    bind:customPath={customPath03}
    {presetType}
    presetSubType="Tertiary"
    flagPath="preset"
    animType="range"
    {flagData}
/>
<h2>Options</h2>
<div class="aa-options">
    <!--Set Z-Index-->
    <div class="flexcol" style="grid-row: 1 / 2; grid-column: 2 / 3;">
        <label for="">Z-Index</label>
        <button class="oldCheck" on:click={() => below03()}>{aboveBelow03}</button>
    </div>
    <div class="flexcol" style="grid-row: 1 / 2; grid-column: 3 / 4;">
        <label for="">{localize("AUTOANIM.playbackRate")}</label>
        <input
            type="Number"
            bind:value={playbackRate03}
            placeholder="1"
            step="0.01"
        />
    </div>
</div>
{/if}
<h1 style="margin-top:10px;">End Animation</h1>
<ChooseAnimation
    bind:menuType={menuType02}
    bind:animation={animation02}
    bind:variant={variant02}
    bind:color={color02}
    bind:isCustom={isCustom02}
    bind:customPath={customPath02}
    {presetType}
    presetSubType="Secondary"
    flagPath="preset"
    animType="static"
    {flagData}
/>
<h2>Options</h2>
<div class="aa-options">
    <!--Set Z-Index-->
    <div class="flexcol" style="grid-row: 1 / 2; grid-column: 2 / 3;">
        <label for="">Z-Index</label>
        <button class="oldCheck" on:click={() => below02()}>{aboveBelow02}</button>
    </div>
    <div class="flexcol" style="grid-row: 1 / 2; grid-column: 3 / 4;">
        <label for="">Scale</label>
        <input type="Number" bind:value={scale} step="0.01" />
    </div>
    <div class="flexcol" style="grid-row: 1 / 2; grid-column: 4 / 5;">
        <label for="">Delay Token Alpha</label>
        <input type="Number" bind:value={delayAlpha} step="0.01" />
    </div>
</div>
<SoundSettings audioPath="a01" {flagData} />

<style lang="scss">
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
    h2 {
        font-family: "Modesto Condensed", "Palatino Linotype", serif;
        font-size: x-large;
        font-weight: bold;
        text-align: center;
        margin-right: 15%;
        margin-left: 15%;
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
    .aa-3wide input {
        text-align: center;
        align-self: center;
        border-radius: 5px;
        width: 3em;
        color: black;
    }
    .aa-3wide button {
        border-radius: 10px;
        border: 2px outset #8e8e8e;
        font-family: "Modesto Condensed", "Palatino Linotype", serif;
        font-weight: bold;
        font-size: large;
        height: auto;
    }
    .aa-options button {
        border-radius: 10px;
        border: 2px outset #8e8e8e;
        font-family: "Modesto Condensed", "Palatino Linotype", serif;
        font-weight: bold;
        font-size: large;
        height: auto;
    }
    .selected {
        background-color: rgba(25, 175, 2, 0.18);
        transition: background-color 0.5s;
    }
    .notSelected {
        background-color: rgba(219, 132, 2, 0.18);
        transition: background-color 0.5s;
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
</style>
