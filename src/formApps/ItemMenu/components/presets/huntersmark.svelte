<script>
    import { localize } from "@typhonjs-fvtt/runtime/svelte/helper";
    import { fade } from "svelte/transition";
    import SoundSettings from "../soundSettings.svelte";

    import {
        aaColorMenu,
    } from "../../../../animation-functions/databases/jb2a-menu-options.js";

    export let flagData;
    const options = flagData.options;

    const hmVariants = ['eye', 'paw']
    let variant = hmVariants.includes(options.variant) ? options.variant : 'eye';
    $: variant = options.variant = variant

    const hmColors = Object.keys(aaColorMenu.static.spell.huntersmark.eye);
    let color = hmColors.includes(flagData.color)
        ? flagData.color
        : hmColors[0];
    $: color = flagData.color = color;

    let belowToken = options.below || false;
    $: belowToken = options.below = belowToken;
    $: aboveBelow = belowToken ? "Below Token" : "Above Token";

    let anchorX = options.anchorX || 0.5;
    $: anchorX = options.anchorX = anchorX > 1 ? 1 : anchorX;

    let anchorY = options.anchorY || 0.5;
    $: anchorY = options.anchorY = anchorY > 1 ? 1 : anchorY;

    let scale = options.scale || 1;
    $: scale = options.scale = scale;

    let persistent = options.persistent || false;
    $: persistent = options.persistent = persistent;
    $: isPersistent = persistent ? "Persistent" : "Not Persistent"

    function below() {
        belowToken = !belowToken;
    }
    function switchPersistence() {
        persistent = !persistent;
    }

</script>

<h1>Hunter's Mark</h1>
<div class="aa-4wide">
    <div class="flexcol" style="grid-row: 1 / 2;grid-column: 2 / 3;">
        <label for="">{localize("AUTOANIM.variant")}</label>
        <select bind:value={variant}>
            <option value="" />
            <option value="eye">{localize("AUTOANIM.eye")}</option>
            <option value="paw">{localize("AUTOANIM.paw")}</option>
        </select>
    </div>
    <div class="flexcol" style="grid-row: 1 / 2;grid-column: 3 / 4;">
        <label for="">{localize("AUTOANIM.color")}</label>
        <select bind:value={color}>
            {#each Object.entries(aaColorMenu.static.spell.huntersmark.eye) as [key, name]}
                <option value={key}>{name}</option>
            {/each}
        </select>
    </div>
</div>
<h2 style="margin-top:5px;">Options</h2>
<div class="aa-options">
        <!--Persistent Setting-->
        <div class="flexcol" style="grid-row: 1 / 2; grid-column: 1 / 2;">
            <label for="">Persistence</label>
            <button on:click={() => switchPersistence()}>{isPersistent}</button>
        </div>    
    <!--Set Z-Index-->
    <div class="flexcol" style="grid-row: 1 / 2; grid-column: 2 / 3;">
        <label for="">Z-Index</label>
        <button class="oldCheck" on:click={() => below()}>{aboveBelow}</button>
    </div>
    <div class="flexcol" style="grid-row: 2 / 3; grid-column: 3 / 4;">
        <label for="">{localize("AUTOANIM.scale")}</label>
        <input type="Number" bind:value={scale} placeholder="1" step="0.01" />
    </div>
    <div class="flexcol {persistent ? "" : "aa-disabled"}" style="grid-row: 1 / 2; grid-column: 3 / 4;">
        <label for="">{localize("AUTOANIM.anchorX")}</label>
        <input disabled={!persistent} type="Number" bind:value={anchorX} placeholder="1" step="0.01" />
    </div>
    <div class="flexcol {persistent ? "" : "aa-disabled"}" style="grid-row: 1 / 2; grid-column: 4 / 5;">
        <label for="">{localize("AUTOANIM.anchorY")}</label>
        <input disabled={!persistent} type="Number" bind:value={anchorY} placeholder="1" step="0.01" />
    </div>
</div>
<SoundSettings audioPath="a01" {flagData} />

<style lang="scss">
    .aa-4wide {
        display: grid;
        grid-template-columns: 16.5% 33.3% 33.3% 16.5%;
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
    .aa-4wide select {
        text-align: center;
        font-weight: bold;
        min-height: 2em;
        border-radius: 5px;
    }
    .aa-4wide label {
        align-self: center;
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
    .aa-options input:disabled {
        opacity: 0.3;
        transition: opacity 0.5s;
    }
    .aa-disabled label {
        opacity:0.3;
        transition: opacity 0.5s;
    }
</style>
