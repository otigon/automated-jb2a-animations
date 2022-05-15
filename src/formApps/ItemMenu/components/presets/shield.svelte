<script>
    import { localize } from "@typhonjs-fvtt/runtime/svelte/helper";
    import { fade } from "svelte/transition";
    import SoundSettings from "../soundSettings.svelte";

    import {
        aaColorMenu,
        aaVariantMenu,
    } from "../../../../animation-functions/databases/jb2a-menu-options.js";

    export let flagData;
    export let isAutoRec;

    /*Data Structure
        section: {
            shield: {
                menuType: "spell",
                animation: "shieldspell",
                variant: String,
                color: String,
                endEffect: String,
                unbindAlpha: Boolean,
                unbindVisibility: Boolean,
                persistent: Boolean,
                below: Boolean,
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
    root.shield ? root.shield : (root.shield = {});
    const preset = root.shield;
    preset.menuType = "spell";
    preset.animation = "shieldspell";

    let variant =
        preset.variant || Object.keys(aaColorMenu.static.spell.shieldspell)[0];
    $: variant = preset.variant = variant;

    const shieldColors = Object.keys(
        aaColorMenu.static.spell.shieldspell[variant]
    );
    let color = shieldColors.includes(flagData.color)
        ? preset.color
        : shieldColors[0];
    $: color = preset.color = color;

    let endEffect = preset.endEffect || "outro_explode";
    $: endEffect = preset.endEffect = endEffect;

    let unbindAlpha = preset.unbindAlpha || false;
    $: unbindAlpha = preset.unbindAlpha = unbindAlpha;
    $: bindAlpha = unbindAlpha ? "Unbound" : "Bound";

    let unbindVisbility = preset.unbindVisbility || false;
    $: unbindVisbility = preset.unbindVisbility = unbindVisbility;
    $: bindVisibility = unbindVisbility ? "Unbound" : "Bound";

    let persistent = preset.persistent || false;
    $: persistent = preset.persistent = persistent;
    $: isPersistent = persistent ? "Persistent" : "Not Persistent";

    let belowToken = preset.below || false;
    $: belowToken = preset.below = belowToken;
    $: aboveBelow = belowToken ? "Below Token" : "Above Token";

    let scale = preset.scale || 1;
    $: scale = preset.scale = scale;

    function switchAlpha() {
        unbindAlpha = !unbindAlpha;
    }
    function switchVisibility() {
        unbindVisbility = !unbindVisbility;
    }
    function switchPersistence() {
        persistent = !persistent;
    }
    function below() {
        belowToken = !belowToken;
    }
    async function variantChange() {
        let newVariant = variant;
        color = Object.keys(
            aaColorMenu.static.spell.shieldspell[newVariant]
        )[0];
    }
</script>

<div class="aaMenu-section">
    <h1>Shield Animation Preset</h1>
    <div class="aa-3wide">
        <div class="flexcol" style="grid-row: 1 / 2;grid-column: 1 / 2;">
            <label for="4">{localize("AUTOANIM.variant")}</label>
            <select
                name="flags.autoanimations.options.variant"
                bind:value={variant}
                on:change={async () => await variantChange()}
            >
                {#each Object.entries(aaVariantMenu.static.spell.shieldspell) as [key, name]}
                    <option value={key}>{name}</option>
                {/each}
            </select>
        </div>
        <div class="flexcol" style="grid-row: 1 / 2;grid-column: 2 / 3;">
            <label for="">{localize("AUTOANIM.color")}</label>
            <select bind:value={color}>
                {#each Object.entries(aaColorMenu.static.spell.shieldspell[variant]) as [key, name]}
                    <option value={key}>{name}</option>
                {/each}
            </select>
        </div>
        <div class="flexcol" style="grid-row: 1 / 2;grid-column: 3 / 4;">
            <label for="">{localize("AUTOANIM.endEffect")}</label>
            <select bind:value={endEffect}>
                <option value="outro_explode"
                    >{localize("AUTOANIM.explode")}</option
                >
                <option value="outro_fade">{localize("AUTOANIM.fade")}</option>
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
            <button class="oldCheck" on:click={() => below()}
                >{aboveBelow}</button
            >
        </div>
        <!--Bind/Unbind Visibility (for Persistent Effects)-->
        <div class="flexcol" style="grid-row: 1 / 2; grid-column: 3 / 4;">
            <label for="">Visibility</label>
            <button on:click={() => switchVisibility()}>{bindVisibility}</button
            >
        </div>
        <!--Bind/Unbind Opacity (for Persistent Effects)-->
        <div class="flexcol" style="grid-row: 1 / 2; grid-column: 4 / 5;">
            <label for="">Alpha</label>
            <button on:click={() => switchAlpha()}>{bindAlpha}</button>
        </div>
        <div class="flexcol" style="grid-row: 2 / 3; grid-column: 3 / 4;">
            <label for="">{localize("AUTOANIM.scale")}</label>
            <input
                type=number
                bind:value={scale}
                placeholder=1
                step=0.01
            />
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
</style>
