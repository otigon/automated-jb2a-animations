<script>
    import { localize } from "@typhonjs-fvtt/runtime/svelte/helper";
    import { fade } from "svelte/transition";
    import SoundSettings from "../soundSettings.svelte";

    import {
        aaColorMenu,
    } from "../../../../animation-functions/databases/jb2a-menu-options.js";

    export let flagData;
    const root = flagData.preset;
    root.thunderwave ? root.thunderwave : root.thunderwave = {};
    const preset = root.thunderwave;
    preset.menuType = "spell";
    preset.animation = "thunderwave";

    const options = flagData.options;

    let color = preset.color || Object.keys(aaColorMenu.static.spell.thunderwave["mid"])[0];
    $: color = preset.color = color;

    let belowToken = preset.below || false;
    $: belowToken = preset.below = belowToken;
    $: aboveBelow = belowToken ? "Below Token" : "Above Token";

    let scaleX = preset.scaleX;
    $: scaleX = preset.scaleX = scaleX;

    let scaleY = preset.scaleY;
    $: scaleY = preset.scaleY = scaleY;

    let opacity = preset.opacity || 1;
    $: opacity = opacity > 1 ? 1 : opacity;
    $: preset.opacity = opacity > 1 ? 1 : opacity;

    let repeat = preset.repeat || 1;
    $: repeat = preset.repeat = repeat;

    let delay = preset.delay || 250;
    $: delay = preset.delay = delay;

    function below() {
        belowToken = !belowToken;
    }

    let removeTemplate = options.removeTemplate || false;
    $: removeTemplate = removeTemplate;
    $: options.removeTemplate = removeTemplate;
    $: isRemove = removeTemplate ? "Yes" : "No";
    function switchRemove() {
        removeTemplate = !removeTemplate;
    }
</script>

<div class="aaMenu-section">
<h1>Thunderwave 5e Preset</h1>
<div class="aa-3wide">
    <div class="flexcol" style="grid-row: 1 / 2;grid-column: 2 / 3;">
        <label for="">{localize("AUTOANIM.color")}</label>
        <select bind:value={color}>
            {#each Object.entries(aaColorMenu.static.spell.sneakattack["01"]) as [key, name]}
                <option value={key}>{name}</option>
            {/each}
        </select>
    </div>
</div>
<h2 style="margin-top:5px;">Options</h2>
<div class="aa-options">
    <!--Set Z-Index-->
    <div class="flexcol" style="grid-row: 1 / 2; grid-column: 1 / 2;">
        <label for="">Z-Index</label>
        <button class="oldCheck" on:click={() => below()}>{aboveBelow}</button>
    </div>
    <!--Remove Template option-->
    <div class="flexcol" style="grid-row: 1 / 2; grid-column: 2 / 3;">
        <label for="">{localize("AUTOANIM.remove")}</label>
        <button
            class={removeTemplate ? "selected" : "notSelected"}
            on:click={() => switchRemove()}>{isRemove}</button
        >
    </div>
    <div class="flexcol" style="grid-row: 1 / 2; grid-column: 3 / 4;">
        <label for="">{localize("AUTOANIM.scale")} X</label>
        <input type="Number" bind:value={scaleX} placeholder=1 step=0.01 />
    </div>
    <div class="flexcol" style="grid-row: 1 / 2; grid-column: 4 / 5;">
        <label for="">{localize("AUTOANIM.scale")} Y</label>
        <input type="Number" bind:value={scaleY} placeholder=1 step=0.01 />
    </div>
    <!--Set Number of times the animation plays-->
    <div
        class="flexcol"
        style="grid-row: 2 / 3; grid-column: 1 / 2;"
    >
        <label for="">{localize("AUTOANIM.repeat")}</label>
        <input
            type="Number"
            bind:value={repeat}
            placeholder=1
        />
    </div>
    <!--Set delay between repeats-->
    <div
        class="flexcol"
        style="grid-row: 2 / 3; grid-column: 2 / 3;"
    >
        <label for=""
            >{localize("AUTOANIM.repeat")} {localize("AUTOANIM.delay")}</label
        >
        <input
            type="Number"
            bind:value={delay}
            placeholder=250
        />
    </div>
    <!--Set Animation Opacity-->
    <div
        class="flexcol"
        style="grid-row: 2 / 3; grid-column: 3 / 4;"
    >
        <label for="aaOpacity">{localize("AUTOANIM.opacity")}</label>
        <div class="form-group">
            <input
                type="Number"
                id="aaOpacity"
                bind:value={opacity}
                placeholder=1
                min=0
                max=1
                step=0.01
            />
            <input
                type="range"
                min=0
                max=1
                step=0.01
                bind:value={opacity}
            />
        </div>
    </div>
</div>
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
    .selected {
        background-color: rgba(25, 175, 2, 0.18);
        transition: background-color 0.5s;
    }
    .notSelected {
        background-color: rgba(219, 132, 2, 0.18);
        transition: background-color 0.5s;
    }
</style>
