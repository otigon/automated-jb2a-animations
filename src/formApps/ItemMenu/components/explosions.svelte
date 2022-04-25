<script>
    import SelectAnimation from "./SelectAnimation.svelte";
    import SoundSettings from "./soundSettings.svelte";
    import { localize } from "@typhonjs-fvtt/runtime/svelte/helper";

    export let flagData;

    let explosions = flagData.explosions;
    
    let radius = explosions.radius;
    $: {
        radius = radius;
        explosions.radius = radius;
    }

    let delay = explosions.delay;
    $: {
        delay = delay;
        explosions.delay = delay;
    }

    let belowToken = explosions.below;
    $: {
        belowToken = belowToken;
        explosions.below = belowToken
    }

    $: aboveBelow = belowToken ? "Below Token" : "Above Token";
    function below() {
        belowToken = !belowToken;
    }

    let explosionEnabled;
    $: explosionEnabled = explosionEnabled;
</script>

<div>
    <SelectAnimation bind:explosionEnabled previewType="explosion" flagPath="explosions" sectionTitle="Explosion" {flagData} />
    {#if explosionEnabled}
    <h2>Options</h2>
    <div class='aa-3wide'>
        <div class="flexcol" style="grid-row: 1 / 2; grid-column: 1 / 3;">
            <label for="">{localize("AUTOANIM.radius")}</label>
            <input type="Number" bind:value={radius} placeholder="1.5" />
        </div>
        <div class="flexcol" style="grid-row: 1 / 2; grid-column: 3 / 4;">
            <label for="">{localize("AUTOANIM.delayMS")}</label>
            <input type="Number" bind:value={delay} placeholder="1" />
        </div>
        <div class="flexcol" style="grid-row: 1 / 2; grid-column: 4 / 5;">
            <label for="">Z-Index</label>
            <button class="oldCheck" on:click={() => below()}>{aboveBelow}</button>
        </div>
    </div>
    <SoundSettings audioPath="e01" {flagData} />
    {/if}
</div>

<style lang="scss">
    .aa-3wide {
        display: grid;
        grid-template-columns: 12.5% 25% 25% 25% 12.5%;
        grid-gap: 5px;
        padding: 5px;
        align-items: center;
        margin-right: 8%;
        margin-left: 5%;
        font-size: medium;
        font-weight: bold;
    }
    .aa-3wide input {
        text-align: center;
        align-self: center;
        border-radius: 5px;
        width: 3em;
    }
    .aa-3wide label {
        align-self: center;
        font-family: "Modesto Condensed", "Palatino Linotype", serif;
        font-size: large;
        font-weight: bold;
    }
    .aa-3wide button {
        border-radius: 10px;
        border: 2px outset #dddddd;
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
    }
</style>
