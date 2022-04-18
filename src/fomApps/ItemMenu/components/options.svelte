<script>
    import { localize } from "@typhonjs-fvtt/runtime/svelte/helper";
    import { getContext } from "svelte";
    import { fade, fly } from "svelte/transition";

    import { TJSDialog } from "@typhonjs-fvtt/runtime/svelte/application";
    import { ApplicationShell } from "@typhonjs-fvtt/runtime/svelte/component/core";

    export let flagData;
    export let menuSelection;

    const options = flagData.options || {};
    $: animType = flagData.animType;

    let repeat = options.repeat || 1;
    $: repeat = repeat;
    $: options.repeat = repeat

    let delay = options.delay || 250;
    $: delay = delay;
    $: options.delay = delay

    let scale = options.scale || 1;
    $: scale = scale;
    $: options.scale = scale

    let belowToken = options.below || false;
    $: belowToken = belowToken;
    $: options.below = belowToken

    let opacity = options.opacity || 1;
    $: opacity = opacity;
    $: options.opacity = opacity;

    let unbindAlpha = options.unbindAlpha || 1;
    $: unbindAlpha = unbindAlpha;
    $: options.unbindAlpha = unbindAlpha;

    let unbindVisbility = options.unbindVisbility || 1;
    $: unbindVisbility = unbindVisbility;
    $: options.unbindVisbility = unbindVisbility;

    let persistent = options.persistent || false;
    $: persistent = persistent;
    $: options.persistent = persistent;

    function below() {
        belowToken = !belowToken;
    }

    $: aboveBelow = belowToken ? "Below Token" : "Above Token";
    $: bindAlpha = unbindAlpha ? "Unbound" : "Bound";
    $: bindVisibility = unbindVisbility ? "Unbound" : "Bound";
    $: isPersistent = persistent ? "Persistent" : "Not Persistent"
    $: disabled01 = animType === 'melee' || animType === 'range';
    function switchAlpha() {
        unbindAlpha = !unbindAlpha;
    }
    function switchVisibility() {
        unbindVisbility = !unbindVisbility;
    }
    function switchPersistence() {
        persistent = !persistent;
        let newPersistance = persistent;
        if (newPersistance) {
            repeat = 1;
        }
    }

    $: isDisabled = menuSelection === "melee" || menuSelection === "range" ? false : persistent;
</script>

<div transition:fade={{duration: 500}}>
<h2>Options</h2>
<div class="aa-options"  in:fade={{duration: 500 }} out:fade={{duration: 500}}>
    <div class="flexcol {disabled01 ? "opacityBorder opacityLabel" : ""}" style="grid-row: 1 / 2; grid-column: 1 / 2;">
        <label for="">Persistence</label>
        <button on:click={() => switchPersistence()} disabled="{disabled01}" >{isPersistent}</button>
    </div>
    <div class="flexcol" style="grid-row: 1 / 2; grid-column: 2 / 3;">
        <label for="">Z-Index</label>
        <button class="oldCheck" on:click={() => below()}>{aboveBelow}</button>
    </div>
    <div class="flexcol {disabled01 ? "opacityBorder opacityLabel" : ""}" style="grid-row: 1 / 2; grid-column: 3 / 4;">
        <label for="">Visibility</label>
        <button on:click={() => switchVisibility()} disabled="{disabled01}" >{bindVisibility}</button>
    </div>
    <div class="flexcol {disabled01 ? "opacityBorder opacityLabel" : ""}" style="grid-row: 1 / 2; grid-column: 4 / 5;">
        <label for="">Alpha</label>
        <button on:click={() => switchAlpha()} disabled="{disabled01}" >{bindAlpha}</button>
    </div>
    <div class="flexcol {isDisabled ? "opacityBorder opacityLabel" : ""}" style="grid-row: 2 / 3; grid-column: 1 / 2;">
        <label for="">{localize("AUTOANIM.repeat")}</label>
        <input disabled={isDisabled} type="Number" bind:value={repeat} placeholder=1>
    </div>
    <div class="flexcol {isDisabled ? "opacityBorder opacityLabel" : ""}" style="grid-row: 2 / 3; grid-column: 2 / 3;">
        <label for="">{localize("AUTOANIM.repeat")} {localize("AUTOANIM.delay")}</label>
        <input disabled={isDisabled} type="Number" bind:value={delay} placeholder=250>
    </div>
    <div class="flexcol" style="grid-row: 2 / 3; grid-column: 3 / 4;">
        <label for="">{localize("AUTOANIM.scale")}</label>
        <input type="Number" bind:value={scale} placeholder=1 step=0.01>
    </div>
    <div class="flexcol {disabled01 ? "opacityInput" : ""}" style="grid-row: 2 / 3; grid-column: 4 / 5;" in:fade={{duration: 500 }} out:fade={{duration: 500}}>
        <label for="">{localize("AUTOANIM.opacity")}</label>
        <div class='form-group'>
            <input disabled="{disabled01}" type="Number" bind:value={opacity} placeholder=1 min=0 max=1 step=0.01>
            <input disabled="{disabled01}" type="range" min=0 max=1 step=0.01 bind:value={opacity}>
        </div>
    </div>
</div>
</div>

<style lang="scss">
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
    }
    .aa-options input {
        text-align: center;
        align-self: center;
        border-radius: 5px;
        width: 3em;
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
        height: auto;
    }
    .opacityBorder button{
        border: 2px solid rgba(133, 133, 133, 0.3);
        color: rgba(133, 133, 133, 0.3);
        transition: color 0.5s, border 0.5s;
    }
    .opacityBorder input {
        color: rgba(133, 133, 133, 0.3);
    }
    .opacityBorder label{
        color: rgba(133, 133, 133, 0.3);
        transition: color 0.5s;
    }
    .opacityInput label{
        color: rgba(133, 133, 133, 0.3);
        transition: color 0.5s;
    }
    .opacityInput input{
        color: rgba(133, 133, 133, 0.3);
        transition: color 0.5s;
    }
</style>
