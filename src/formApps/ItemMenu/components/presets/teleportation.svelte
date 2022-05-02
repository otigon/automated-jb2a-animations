<script>
    import { localize } from "@typhonjs-fvtt/runtime/svelte/helper";
    import { fade } from "svelte/transition";
    import { TJSDialog } from "@typhonjs-fvtt/runtime/svelte/application";
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

    //Set Start Animation variables
    preset.start ? preset.start : preset.start = {};
    const start = preset.start;
    let startMenuType = start.menuType;
    $: startMenuType = start.menuType = startMenuType;
    let startAnimation = start.animation;
    $: startAnimation = start.animation = startAnimation;
    let startVariant = start.variant;
    $: startVariant = start.variant = startVariant;
    let startColor = start.color;
    $: startColor = start.color = startColor;
    let startIsCustom = start.enableCustom || false;
    $: startIsCustom = start.enableCustom = startIsCustom;
    let startCustomPath = start.customPath || "";
    $: startCustomPath = start.customPath = startCustomPath;
    let startScale = start.scale || 1;
    $: startScale = start.scale = startScale;
    let startBelowToken = start.below || false;
    $: startBelowToken = start.below = startBelowToken;
    function startBelow() {
        startBelowToken = !startBelowToken;
    }
    $: startAboveBelow = startBelowToken ? "Below Token" : "Above Token";
    let startCustomId = "customPresetStart";



    //Set End Animation variables
    preset.end ? preset.end : preset.end = {};
    const end = preset.end;
    let endBelowToken = end.below || false;
    $: endBelowToken = end.below = endBelowToken;
    function endBelow() {
        endBelowToken = !endBelowToken;
    }
    $: endAboveBelow = endBelowToken ? "Below Token" : "Above Token";
    let endMenuType = end.menuType;
    $: endMenuType = end.menuType = endMenuType;
    let endAnimation = end.animation;
    $: endAnimation = end.animation = endAnimation;
    let endVariant = end.variant;
    $: endVariant = end.variant = endVariant;
    let endColor = end.color;
    $: endColor = end.color = endColor;
    let endIsCustom = end.enableCustom || false;
    $: endIsCustom = end.enableCustom = endIsCustom;
    let endCustomPath = end.customPath || "";
    $: endCustomPath = end.customPath = endCustomPath;
    let endScale = end.scale || 1;
    $: endScale = end.scale = endScale;
    let delayAlpha = end.delay || 250;
    $: delayAlpha = end.delay = delayAlpha;
    let endCustomId = "customPresetEnd";

    //Set Between Animation variables
    preset.between ? preset.between : preset.between = {};
    const between = preset.between;
    let betweenMenuType = between.menuType;
    $: betweenMenuType = between.menuType = betweenMenuType;
    let betweenAnimation = between.animation;
    $: betweenAnimation = between.animation = betweenAnimation;
    let betweenVariant = between.variant;
    $: betweenVariant = between.variant = betweenVariant;
    let betweenColor = between.color;
    $: betweenColor = between.color = betweenColor;
    let betweenIsCustom = between.enableCustom || false;
    $: betweenIsCustom = between.enableCustom = betweenIsCustom;
    let betweenCustomPath = between.customPath || "";
    $: betweenCustomPath = between.customPath = betweenCustomPath;
    let betweenPlaybackRate = between.playbackRate || 1;
    $: betweenPlaybackRate = between.playbackRate = betweenPlaybackRate;
    let enableBetween = between.enableBetween || false;
    $: enableBetween = between.enableBetween = enableBetween;
    function switchBetween() {
        enableBetween = !enableBetween;
    }
    let betweenBelowToken = between.below || false;
    $: betweenBelowToken = between.below = betweenBelowToken;
    function betweenBelow() {
        betweenBelowToken = !betweenBelowToken;
    }
    $: betweenAboveBelow = betweenBelowToken ? "Below Token" : "Above Token";
    let betweenCustomId = "customPresetBetween";
    let shouldShowOnlyX = true;
    function info() {
        new TJSDialog({
            modal: true,
            draggable: true,
            resizable: true,
            height: 200,
            width: 200,
            title: "Teleportation Preset",
            content: `<img src="modules/autoanimations/src/images/Teleportation.png" alt="">`,
        }).render(true);
    }
</script>

<div class="aaMenu-section">
<h1 style="margin-bottom: 15px">Teleportation Preset<i class="fas fa-info-circle aa-info-icon" on:click={() => info()}></i></h1>
<h2 style="margin-top:10px;">Options</h2>
<div class="aa-3wide">
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
        <input type="Number" bind:value={teleDist} step=0.01 />
    </div>
    <div class="flexcol" style="grid-row: 1 / 2; grid-column: 3 / 4;">
        <label for="">{localize("AUTOANIM.hideBorder")}</label>
        <button
            class={hideFromPlayers ? "selected" : "notSelected"}
            on:click={() => switchHide()}>{isHidden}</button
        >
    </div>
</div>
</div>
<div class="aaMenu-section">
<h1 style="margin-top:10px;">Start Animation</h1>
<ChooseAnimation
    bind:menuType={startMenuType}
    bind:animation={startAnimation}
    bind:variant={startVariant}
    bind:color={startColor}
    bind:isCustom={startIsCustom}
    bind:customPath={startCustomPath}
    bind:customId={startCustomId}
    {presetType}
    presetSubType="TeleStart"
    flagPath="preset"
    animType="static"
    {flagData}
/>
<h2>Options</h2>
<div class="aa-options">
    <!--Set Z-Index-->
    <div class="flexcol" style="grid-row: 1 / 2; grid-column: 2 / 3;">
        <label for="">Z-Index</label>
        <button class="oldCheck" on:click={() => startBelow()}>{startAboveBelow}</button>
    </div>
    <div class="flexcol" style="grid-row: 1 / 2; grid-column: 3 / 4;">
        <label for="">Scale</label>
        <input type="Number" bind:value={startScale} step=0.01 />
    </div>
</div>
</div>
<div class="aaMenu-section">
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
    bind:menuType={betweenMenuType}
    bind:animation={betweenAnimation}
    bind:variant={betweenVariant}
    bind:color={betweenColor}
    bind:isCustom={betweenIsCustom}
    bind:customPath={betweenCustomPath}
    bind:customId={betweenCustomId}
    {shouldShowOnlyX}
    {presetType}
    presetSubType="TeleBetween"
    flagPath="preset"
    animType="range"
    {flagData}
/>
<h2>Options</h2>
<div class="aa-options">
    <!--Set Z-Index-->
    <div class="flexcol" style="grid-row: 1 / 2; grid-column: 2 / 3;">
        <label for="">Z-Index</label>
        <button class="oldCheck" on:click={() => betweenBelow()}>{betweenAboveBelow}</button>
    </div>
    <div class="flexcol" style="grid-row: 1 / 2; grid-column: 3 / 4;">
        <label for="">{localize("AUTOANIM.playbackRate")}</label>
        <input
            type="Number"
            bind:value={betweenPlaybackRate}
            placeholder=1
            step=0.01
        />
    </div>
</div>
{/if}
</div>
<div class="aaMenu-section">
<h1 style="margin-top:10px;">End Animation</h1>
<ChooseAnimation
    bind:menuType={endMenuType}
    bind:animation={endAnimation}
    bind:variant={endVariant}
    bind:color={endColor}
    bind:isCustom={endIsCustom}
    bind:customPath={endCustomPath}
    bind:customId={endCustomId}
    {presetType}
    presetSubType="TeleEnd"
    flagPath="preset"
    animType="static"
    {flagData}
/>
<h2>Options</h2>
<div class="aa-options">
    <!--Set Z-Index-->
    <div class="flexcol" style="grid-row: 1 / 2; grid-column: 2 / 3;">
        <label for="">Z-Index</label>
        <button class="oldCheck" on:click={() => endBelow()}>{endAboveBelow}</button>
    </div>
    <div class="flexcol" style="grid-row: 1 / 2; grid-column: 3 / 4;">
        <label for="">Scale</label>
        <input type="Number" bind:value={endScale} step=0.01 />
    </div>
    <div class="flexcol" style="grid-row: 1 / 2; grid-column: 4 / 5;">
        <label for="">Delay Token Alpha</label>
        <input type="number" bind:value={delayAlpha} step=0.01 />
    </div>
</div>
<SoundSettings audioPath="a01" {flagData} />
</div>

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
        border-radius: 10px;
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
    .aa-info-icon {
        color:rgba(21, 154, 169, 0.75);
        position:relative;
        left: 20px;
    }
    .aa-info-icon:hover {
        color: rgba(7, 132, 25, 0.6)
    }
</style>
