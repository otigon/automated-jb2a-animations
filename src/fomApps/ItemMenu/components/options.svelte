<script>
    import { localize } from "@typhonjs-fvtt/runtime/svelte/helper";
    import { getContext } from "svelte";
    import { fade } from "svelte/transition";
    import * as easingFuncs from 'svelte/easing';

    import { TJSDialog } from "@typhonjs-fvtt/runtime/svelte/application";
    import { ApplicationShell } from "@typhonjs-fvtt/runtime/svelte/component/core";

    let easing = easingFuncs.bounceInOut;
    
    let repeat;
    let delay;
    let scale;
    let belowToken;
    $: belowToken = belowToken;

    function below() {
        belowToken = belowToken ? false : true;
    }

    $: aboveBelow = belowToken ? "Below Token" : "Above Token";
</script>
<h2  in:fade={{duration: 500 }} out:fade={{duration: 500}}>Options</h2>
<div class="aa-options"  in:fade={{duration: 500 }} out:fade={{duration: 500}}>
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
        <label for="">Z-Index</label>
        <button class="oldCheck {belowToken ? "notSelected" : "selected"}" on:click={() => below()}>{aboveBelow}</button>
    </div>
</div>


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
        font-family: "Modesto Condensed", "Palatino Linotype", serif;
        font-weight: bold;
        font-size: large;
    }
    .selected {
        background-color:rgba(25, 175, 2, 0.4);
        transition: background-color 0.5s
    }
    .notSelected {
        background-color: rgba(219, 132, 2, 0.4);
        transition: background-color 0.5s
    }
    .aa-options input {
        border-radius: 5px;
    }

</style>
