<script>
    import { localize } from "@typhonjs-fvtt/runtime/svelte/helper";
    import { fade, fly } from "svelte/transition";

    export let isAutorec;
    export let flagData;
    const macros = flagData.macro;

    let name = macros.name;
    $: macros.name = name = name;

    let data = macros.args;
    $: macros.args = data = data;

    export let playWhen = macros.playWhen;
    $: macros.playWhen = playWhen = playWhen;

    export let animationDisabled = flagData.killAnim;
    $: animationDisabled = animationDisabled;
</script>

<div style="padding-top: 10px">
    <h1>{localize("autoanimations.menus.macro")}</h1>
</div>
<div class="aa-2wide">
    <div class="flexcol {animationDisabled ? "aa-disabled" : ""}" style="grid-row: 1 / 2;grid-column: 1 / 2;">
        <label for="">{localize("autoanimations.menus.playwhen")}</label>
        <select
            bind:value={playWhen}
            style="text-align: center;justify-self: center"
            disabled={animationDisabled}
        >
            <option value="0">{localize("autoanimations.menus.macroconcurrent")}</option>
            <option value="1">{localize("autoanimations.menus.awaitmacro")}</option>
            {#if isAutorec}
            <option value="2">{localize("autoanimations.menus.macroonly")}</option>
            {/if}
        </select>
    </div>
    <div class="flexcol" style="grid-row: 1 / 2;grid-column: 2 / 3;">
        <label for=""
            >{localize("autoanimations.menus.macro")} {localize("autoanimations.menus.name")}</label
        >
        <input type="text" bind:value={name} />
    </div>
    <div class="flexcol" style="grid-row: 2 / 3;grid-column: 1 / 3;">
        <label for="">{localize("autoanimations.menus.args")}</label>
        <input type="text" bind:value={data} />
    </div>
</div>

<style lang="scss">
    .aa-2wide {
        display: grid;
        grid-template-columns: 50% 50%;
        grid-gap: 5px;
        padding: 5px;
        align-items: center;
        margin-right: 2%;
        font-size: medium;
        font-weight: bold;
    }
    .aa-2wide select {
        text-align: center;
        font-weight: bold;
        min-height: 2em;
        border-radius: 10px;
    }
    .aa-2wide input {
        text-align: center;
        align-self: center;
        border-radius: 5px;
    }
    .aa-2wide label {
        align-self: center;
        font-family: "Modesto Condensed", "Palatino Linotype", serif;
        font-size: large;
        font-weight: bold;
    }
    h1 {
        font-family: "Modesto Condensed", "Palatino Linotype", serif;
        font-size: x-large;
        font-weight: bold;
        text-align: center;
        margin-right: 5%;
        margin-left: 5%;
    }
    .aa-disabled {
        opacity:0.4;
        transition: opacity 0.5s
    }
</style>
