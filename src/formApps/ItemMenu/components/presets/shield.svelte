<script>
    import { localize } from "@typhonjs-fvtt/runtime/svelte/helper";
    import { fade } from "svelte/transition";
    import SoundSettings from "../soundSettings.svelte";

    import {
        aaColorMenu,
        aaVariantMenu,
    } from "../../../../animation-functions/databases/jb2a-menu-options.js";

    export let flagData;
    const options = flagData.options;

    const shieldVariants = Object.keys(aaColorMenu.static.spell.shieldspell);
    let variant = shieldVariants.includes(options.variant)
        ? options.variant
        : shieldVariants[0];
    $: variant = options.variant = variant;

    const shieldColors = Object.keys(
        aaColorMenu.static.spell.shieldspell[variant]
    );
    let color = shieldColors.includes(flagData.color)
        ? flagData.color
        : shieldColors[0];
    $: color = flagData.color = color;

    let shieldVar = options.shieldVar || "outro_explode";
    $: shieldVar = options.shieldVar = shieldVar

    let unbindAlpha = options.unbindAlpha || false;
    $: unbindAlpha = options.unbindAlpha = unbindAlpha;
    $: bindAlpha = unbindAlpha ? "Unbound" : "Bound";

    let unbindVisbility = options.unbindVisbility || false;
    $: unbindVisbility = options.unbindVisbility = unbindVisbility;
    $: bindVisibility = unbindVisbility ? "Unbound" : "Bound";

    let persistent = options.persistent || false;
    $: persistent = options.persistent = persistent;
    $: isPersistent = persistent ? "Persistent" : "Not Persistent";

    let belowToken = options.below || false;
    $: belowToken = options.below = belowToken;
    $: aboveBelow = belowToken ? "Below Token" : "Above Token";

    let scale = options.scale || 1;
    $: scale = options.scale = scale;

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

<h1>Shield Animation</h1>
<div class="aa-3wide">
    <div
        class="flexcol"
        style="grid-row: 1 / 2;grid-column: 1 / 2;"
    >
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
    <div class='flexcol' style='grid-row: 1 / 2;grid-column: 3 / 4;'>
        <label for="">{localize("AUTOANIM.endEffect")}</label>
        <select bind:value={shieldVar}>
            <option value="outro_explode">{localize("AUTOANIM.explode")}</option>
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
        <button class="oldCheck" on:click={() => below()}>{aboveBelow}</button>
    </div>
    <!--Bind/Unbind Visibility (for Persistent Effects)-->
    <div class="flexcol" style="grid-row: 1 / 2; grid-column: 3 / 4;">
        <label for="">Visibility</label>
        <button on:click={() => switchVisibility()}>{bindVisibility}</button>
    </div>
    <!--Bind/Unbind Opacity (for Persistent Effects)-->
    <div class="flexcol" style="grid-row: 1 / 2; grid-column: 4 / 5;">
        <label for="">Alpha</label>
        <button on:click={() => switchAlpha()}>{bindAlpha}</button>
    </div>
    <div class="flexcol" style="grid-row: 2 / 3; grid-column: 3 / 4;">
        <label for="">{localize("AUTOANIM.scale")}</label>
        <input type="Number" bind:value={scale} placeholder="1" step="0.01" />
    </div>
</div>
<SoundSettings audioPath="a01" {flagData} />

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
        border-radius: 5px;
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
