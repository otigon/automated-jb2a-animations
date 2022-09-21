<script>
    import { localize } from "@typhonjs-fvtt/runtime/svelte/helper";
    import { fade } from "svelte/transition";
    import SoundSettings from "../soundSettings.svelte";

    import {
        aaColorMenu,
        aaVariantMenu,
    } from "../../../database/jb2a-menu-options.js";

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
    let color = shieldColors.includes(preset.color)
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
    <div class="aa-preset-header">
        <div class="flexcol" style="grid-row:1/2; grid-column:3/4">
            <label for="" style="font-size:xx-large; color: rgba(0, 0, 0, 0.6)"
                >{localize("autoanimations.presetTypes.shieldspell")}</label
            >
        </div>
    </div>
</div>
<div class="aaMenu-section">
    <div class="aa-3wide">
        <div class="flexcol" style="grid-row: 1 / 2;grid-column: 1 / 2;">
            <label for="4">{localize("autoanimations.menus.variant")}</label>
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
            <label for="">{localize("autoanimations.menus.color")}</label>
            <select bind:value={color}>
                {#each Object.entries(aaColorMenu.static.spell.shieldspell[variant]) as [key, name]}
                    <option value={key}>{name}</option>
                {/each}
            </select>
        </div>
        <div class="flexcol" style="grid-row: 1 / 2;grid-column: 3 / 4;">
            <label for="">{localize("autoanimations.menus.endEffect")}</label>
            <select bind:value={endEffect}>
                <option value="outro_explode"
                    >{localize("autoanimations.variants.explode")}</option
                >
                <option value="outro_fade">{localize("autoanimations.variants.fade")}</option>
            </select>
        </div>
    </div>
    <div class="aa-options-border">
    <h2 style="margin-top:5px; font-size:22px">{localize("autoanimations.menus.options")}</h2>
    <div class="aa-options">
        <!--Persistent Setting-->
        <div class="flexcol" style="grid-row: 1 / 2; grid-column: 1 / 2;">
            <label for="">{localize("autoanimations.menus.persistence")}</label>
            <button on:click={() => switchPersistence()}>{isPersistent}</button>
        </div>
        <!--Set Z-Index-->
        <div class="flexcol" style="grid-row: 1 / 2; grid-column: 2 / 3;">
            <label for="">{localize("autoanimations.menus.level")}</label>
            <button class="oldCheck" on:click={() => below()}
                >{aboveBelow}</button
            >
        </div>
        <!--Bind/Unbind Visibility (for Persistent Effects)-->
        <div class="flexcol" style="grid-row: 1 / 2; grid-column: 3 / 4;">
            <label for="">{localize("autoanimations.menus.visibility")}</label>
            <button on:click={() => switchVisibility()}>{bindVisibility}</button
            >
        </div>
        <!--Bind/Unbind Opacity (for Persistent Effects)-->
        <div class="flexcol" style="grid-row: 1 / 2; grid-column: 4 / 5;">
            <label for="">{localize("autoanimations.menus.alpha")}</label>
            <button on:click={() => switchAlpha()}>{bindAlpha}</button>
        </div>
        <div class="flexcol" style="grid-row: 2 / 3; grid-column: 3 / 4;">
            <label for="">{localize("autoanimations.menus.scale")}</label>
            <input
                type=number
                bind:value={scale}
                placeholder=1
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
