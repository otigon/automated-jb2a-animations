<script>
    import { localize } from "@typhonjs-fvtt/runtime/svelte/helper";
    import { fade } from "svelte/transition";
    import SoundSettings from "../soundSettings.svelte";

    import { aaColorMenu } from "../../../../animation-functions/databases/jb2a-menu-options.js";

    export let flagData;
    export let isAutoRec;

    /*Data Structure
        section: {
            hunterksmark: {
                menuType: "spell",
                animation: "sneakattack",
                variant: "01",
                color: String,
                below: Boolean,
                anchorX: Number,
                anchorY: Number,
                scale: Number,
            }
        }
    */

    let root;
    if (isAutoRec) {
        root = flagData;
    } else {
        root = flagData.preset;
    }
    root.sneakattack ? root.sneakattack : (root.sneakattack = {});
    const preset = root.sneakattack;
    preset.menuType = "spell";
    preset.animation = "sneakattack";
    preset.variant = "01";

    let color =
        preset.color ||
        Object.keys(aaColorMenu.static.spell.sneakattack["01"])[0];
    $: color = preset.color = color;

    let belowToken = preset.below || false;
    $: belowToken = preset.below = belowToken;
    $: aboveBelow = belowToken ? "Below Token" : "Above Token";

    let anchorX = preset.anchorX || 0.5;
    $: anchorX = preset.anchorX = anchorX > 1 ? 1 : anchorX;

    let anchorY = preset.anchorY || 0.5;
    $: anchorY = preset.anchorY = anchorY > 1 ? 1 :anchorY;
    let scale = preset.scale || 1;
    $: scale = preset.scale = scale;

    function below() {
        belowToken = !belowToken;
    }
</script>

<div class="aaMenu-section">
    <h1>Sneak Attack Animation Preset</h1>
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
    <div class="aa-options-border">
    <h2 style="margin-top:5px;">Options</h2>
    <div class="aa-options">
        <!--Set Z-Index-->
        <div class="flexcol" style="grid-row: 1 / 2; grid-column: 1 / 2;">
            <label for="">Z-Index</label>
            <button class="oldCheck" on:click={() => below()}
                >{aboveBelow}</button
            >
        </div>
        <div class="flexcol" style="grid-row: 1 / 2; grid-column: 2 / 3;">
            <label for="">{localize("AUTOANIM.scale")}</label>
            <input
                type=number
                bind:value={scale}
                step=0.01
            />
        </div>
        <div class="flexcol" style="grid-row: 1 / 2; grid-column: 3 / 4;">
            <label for="">{localize("AUTOANIM.anchorX")}</label>
            <input
                type=number
                bind:value={anchorX}
                step=0.01
            />
        </div>
        <div class="flexcol" style="grid-row: 1 / 2; grid-column: 4 / 5;">
            <label for="">{localize("AUTOANIM.anchorY")}</label>
            <input
                type=number
                bind:value={anchorY}
                step=0.01
            />
        </div>
    </div>
    </div>
    <SoundSettings audioPath="a01" {flagData} />
</div>

<style lang="scss">
    .aa-3wide {
        display: grid;
        grid-template-columns: 32.67% 32.67% 32.67%;
        grid-gap: 1%;
        padding: 5px;
        align-items: center;
        margin-right: 5%;
        margin-left: 5%;
        font-family: "Modesto Condensed", "Palatino Linotype", serif;
        font-size: large;
        font-weight: bold;
        color: black;
    }
    .aa-3wide label {
        align-self: center;
    }
    .aa-options {
        display: grid;
        grid-template-columns: 24.25% 24.25% 24.25% 24.25%;
        grid-gap: 1%;
        padding: 5px;
        align-items: center;
        margin-right: 1%;
        margin-left: 1%;
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
</style>
