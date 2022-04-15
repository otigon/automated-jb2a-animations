<script>
    import { localize } from "@typhonjs-fvtt/runtime/svelte/helper";
    import { getContext } from "svelte";
    import { fade, fly } from "svelte/transition";
    import { TJSDialog } from "@typhonjs-fvtt/runtime/svelte/application";
    import { ApplicationShell } from "@typhonjs-fvtt/runtime/svelte/component/core";

    let repeat;
    let delay;
    let scale;
    let belowToken;
    $: belowToken = belowToken;

    function below() {
        belowToken = belowToken ? false : true;
    }
    export let animType;
    //$: menuAnim = getContext('animationType')

</script>
<h2>Options</h2>
{#if animType === "aura"}
<div>
    Successful Switch
</div>
{:else}
<div class="aa-options">
    <div class="flexcol" style="grid-row: 1 / 2; grid-column: 1 / 2;">
        <label for="">{localize("AUTOANIM.repeat")}</label>
        <input type="Number" bind:value={repeat} name="flags.autoanimations.options.repeat" placeholder=1>
    </div>
    <div class="flexcol" style="grid-row: 1 / 2; grid-column: 2 / 3;">
        <label for="">{localize("AUTOANIM.repeat")} {localize("AUTOANIM.delay")}</label>
        <input type="Number" bind:value={delay} name="flags.autoanimations.options.delay" placeholder=250>
    </div>
    <div class="flexcol" style="grid-row: 1 / 2; grid-column: 3 / 4;">
        <label for="">{localize("AUTOANIM.scale")}</label>
        <input type="Number" bind:value={scale} name="flags.autoanimations.options.scale" placeholder=1>
    </div>
    <div class="flexcol" style="grid-row: 1 / 2; grid-column: 4 / 5;">
        <button class="oldCheck {belowToken ? "selected" : "notSelected"}" on:click={() => below()}>{localize("AUTOANIM.below")}</button>
    </div>
</div>
{/if}

<style>
    .aa-options {
        display: grid;
        grid-template-columns: 25% 25% 25% 25%;
        grid-gap: 5px;
        padding: 5px;
        align-items: center;
        margin-right: 5%;
        margin-left: 5%;
        font-weight: bold;
    }
    .aa-options input {
        text-align: center;
        align-self: center;
        min-height: 2em;
    }
    .aa-options label {
        align-self: center;
    }
    h2 {
        font-family: "Modesto Condensed", "Palatino Linotype", serif;
        font-size:x-large;
        font-weight: bold;
        text-align: center;
        margin-right: 15%;
        margin-left: 15%;
    }
    .oldCheck {
        align-self: bottom;
    }
    .aa-options button {
        border-radius: 10px;
        border: 2px solid black;
    }
    .selected {
        background-color:rgba(25, 175, 2, 0.4);
        transition: background-color 0.5s
    }
    .notSelected {
        background-color: rgba(219, 132, 2, 0.4);
        transition: background-color 0.5s
    }

</style>
