<script>
    import { localize } from "@typhonjs-fvtt/runtime/svelte/helper";
    import { fade } from "svelte/transition";
    import SoundSettings from "../soundSettings.svelte";

    import { aaColorMenu } from "../../../../animation-functions/databases/jb2a-menu-options.js";

    export let flagData;
    export let isAutoRec;

    /*Data Structure
        section: {
            bless: {
                menuType: "spell",
                animation: "bless",
                variant: "01",
                color: String,
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
    root.bless ? root.bless : (root.bless = {});
    const preset = root.bless;
    preset.menuType = "spell";
    preset.animation = "bless";
    preset.variant = "01";

    let color =
        preset.color || Object.keys(aaColorMenu.static.spell.bless.intro)[0];
    $: color = preset.color = color;

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
</script>

<div class="aaMenu-section">
    <div class="aa-3wide">
        <div class="flexcol" style="grid-row: 3 / 4;grid-column: 2 / 3;">
            <label for="">{localize("autoanimations.menus.color")}</label>
            <select bind:value={color}>
                {#each Object.entries(aaColorMenu.static.spell.bless.intro) as [key, name]}
                    <option value={key}>{name}</option>
                {/each}
            </select>
        </div>
    </div>
    <div class="aa-options-border">
        <h2 style="margin-top:5px;">{localize("autoanimations.menus.options")}</h2>
    <div class="aa-options">
        <!--Persistent Setting-->
        <div class="flexcol" style="grid-row: 1 / 2; grid-column: 1 / 2;">
            <label for="">{localize("autoanimations.menus.persistence")}</label>
            <button on:click={() => switchPersistence()}>{isPersistent}</button>
        </div>
        <!--Set Z-Index-->
        <div class="flexcol" style="grid-row: 1 / 2; grid-column: 2 / 3;">
            <label for="">{localize("autoanimations.menus.z-index")}</label>
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
