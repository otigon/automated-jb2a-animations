<script>
    import { localize } from "@typhonjs-fvtt/runtime/svelte/helper";
    import { fade } from "svelte/transition";
    import SoundSettings from "../soundSettings.svelte";

    import { aaColorMenu } from "../../../animation-functions/databases/jb2a-menu-options.js";

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
    <div class="aa-preset-header">
        <div class="flexcol" style="grid-row:1/2; grid-column:3/4">
            <label for="" style="font-size:xx-large; color: rgba(0, 0, 0, 0.6)"
                >{localize("autoanimations.presetTypes.sneakattack")}</label
            >
        </div>
    </div>    
    <div class="aa-3wide">
        <div class="flexcol" style="grid-row: 1 / 2;grid-column: 2 / 3;">
            <label for="">{localize("autoanimations.menus.color")}</label>
            <select bind:value={color}>
                {#each Object.entries(aaColorMenu.static.spell.sneakattack["01"]) as [key, name]}
                    <option value={key}>{name}</option>
                {/each}
            </select>
        </div>
    </div>
    <div class="aa-options-border">
    <h2 style="margin-top:5px;">{localize("autoanimations.menus.options")}</h2>
    <div class="aa-options">
        <!--Set Z-Index-->
        <div class="flexcol" style="grid-row: 1 / 2; grid-column: 1 / 2;">
            <label for="">{localize("autoanimations.menus.z-index")}</label>
            <button class="oldCheck" on:click={() => below()}
                >{aboveBelow}</button
            >
        </div>
        <div class="flexcol" style="grid-row: 1 / 2; grid-column: 2 / 3;">
            <label for="">{localize("autoanimations.menus.scale")}</label>
            <input
                type=number
                bind:value={scale}
                step=0.01
            />
        </div>
        <div class="flexcol" style="grid-row: 1 / 2; grid-column: 3 / 4;">
            <label for="">{localize("autoanimations.menus.anchorX")}</label>
            <input
                type=number
                bind:value={anchorX}
                step=0.01
            />
        </div>
        <div class="flexcol" style="grid-row: 1 / 2; grid-column: 4 / 5;">
            <label for="">{localize("autoanimations.menus.anchorY")}</label>
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
    h2 {
        font-family: "Modesto Condensed", "Palatino Linotype", serif;
        font-size: x-large;
        font-weight: bold;
        text-align: center;
        margin-right: 5%;
        margin-left: 5%;
        color: black;
        border-bottom: 1px solid rgba(0, 0, 0, 0.4);
    }
</style>
