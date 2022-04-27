<script>
    import { localize } from "@typhonjs-fvtt/runtime/svelte/helper";
    import { getContext } from "svelte";
    import { fade, fly } from "svelte/transition";
    import TemplateOptions from "./templatePersistent.svelte";

    import { TJSDialog } from "@typhonjs-fvtt/runtime/svelte/application";
    import { ApplicationShell } from "@typhonjs-fvtt/runtime/svelte/component/core";
    import { menuAnimType } from '../menuStore.js';

    export let flagData;
    export let animType;
    export let menuType;

    const options = flagData.options || {};
    $: animType = animType;
    $: menuType = menuType;

    let repeat = options.repeat || 1;
    $: repeat = repeat;
    $: options.repeat = repeat

    let delay = options.delay || 250;
    $: delay = delay;
    $: options.delay = delay

    let scale = options.scale || 1;
    $: scale = scale;
    $: options.scale = scale

    let auraRadius = options.auraRadius;
    $: auraRadius = auraRadius;
    $: options.auraRadius = auraRadius;

    let belowToken = options.below || false;
    $: belowToken = belowToken;
    $: options.below = belowToken

    let opacity = options.opacity || 1;
    $: opacity = opacity > 1 ? 1 : opacity;
    $: options.opacity = opacity > 1 ? 1 : opacity;

    let unbindAlpha = options.unbindAlpha || 1;
    $: unbindAlpha = unbindAlpha;
    $: options.unbindAlpha = unbindAlpha;

    let unbindVisbility = options.unbindVisbility || 1;
    $: unbindVisbility = unbindVisbility;
    $: options.unbindVisbility = unbindVisbility;

    let persistent = options.persistent || false;
    $: persistent = persistent;
    $: options.persistent = persistent;

    let removeTemplate = options.removeTemplate || false;
    $: removeTemplate = removeTemplate;
    $: options.removeTemplate = removeTemplate;
    $: isRemove = removeTemplate ? "Yes" : "No";

    let scaleX = options.scaleX;
    $: scaleX = scaleX;
    $: options.scaleX = scaleX;

    let scaleY = options.scaleY;
    $: scaleY = scaleY;
    $: options.scaleY = scaleY;

    let persistType = options.persistType || false;
    $: persistType = persistType;
    $: options.persistType = persistType;

    let occlusionMode = options.occlusionMode || "3";
    $: occlusionMode = occlusionMode;
    $: options.occlusionMode = occlusionMode;

    let occlusionAlpha = options.occlusionAlpha || 0.5;
    $: occlusionAlpha = occlusionAlpha > 1 ? 1 : occlusionAlpha;
    $: options.occlusionAlpha =  occlusionAlpha > 1 ? 1 : occlusionAlpha;

    function below() {
        belowToken = !belowToken;
        console.log(menuSelection)
        console.log(isDisabled)
    }

    $: aboveBelow = belowToken ? "Below Token" : "Above Token";
    $: bindAlpha = unbindAlpha ? "Unbound" : "Bound";
    $: bindVisibility = unbindVisbility ? "Unbound" : "Bound";
    $: isPersistent = persistent ? "Persistent" : "Not Persistent"
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
    function switchRemove() {
        removeTemplate = !removeTemplate;
    }

    let menuSelection = flagData.animType;
    menuAnimType.subscribe(value => {
        menuSelection = value;
    })
    $: menuSelection = menuSelection;
    $: disabled01 = flagData.animType === "melee" || flagData.animType === "range" || menuSelection === "melee" || menuSelection === 'range';
    $: isDisabled = flagData.animType === "melee" || flagData.animType === "range" || menuSelection === "melee" || menuSelection === "range" ? false : persistent;
</script>

<div transition:fade={{duration: 500}}>
<h2>Options</h2>
<div class="aa-options"  in:fade={{duration: 500 }} out:fade={{duration: 500}}>
    <!--Persistent Setting-->
    <div class="flexcol {disabled01 ? "aa-disabled" : ""}" style="grid-row: 1 / 2; grid-column: 1 / 2;">
        <label for="">Persistence</label>
        <button on:click={() => switchPersistence()} disabled="{disabled01}" >{isPersistent}</button>
    </div>
    <!--Set Z-Index-->
    <div class="flexcol" style="grid-row: 1 / 2; grid-column: 2 / 3;">
        <label for="">Z-Index</label>
        <button class="oldCheck" on:click={() => below()}>{aboveBelow}</button>
    </div>
    <!--Bind/Unbind Visibility (for Persistent Effects)-->
    <div class="flexcol {disabled01 || animType === 'templatefx' ? "aa-disabled" : ""}" style="grid-row: 1 / 2; grid-column: 3 / 4;">
        <label for="">Visibility</label>
        <button on:click={() => switchVisibility()} disabled="{disabled01 || animType === 'templatefx' }" >{bindVisibility}</button>
    </div>
    <!--Bind/Unbind Opacity (for Persistent Effects)-->
    <div class="flexcol {disabled01 || animType === 'templatefx' ? "aa-disabled" : ""}" style="grid-row: 1 / 2; grid-column: 4 / 5;">
        <label for="">Alpha</label>
        <button on:click={() => switchAlpha()} disabled="{disabled01 || animType === 'templatefx' }" >{bindAlpha}</button>
    </div>
    <!--Set Number of times the animation plays-->
    <div class="flexcol {isDisabled ? "aa-disabled" : ""}" style="grid-row: 2 / 3; grid-column: 1 / 2;">
        <label for="">{localize("AUTOANIM.repeat")}</label>
        <input disabled={isDisabled} type="Number" bind:value={repeat} placeholder=1>
    </div>
    <!--Set delay between repeats-->
    <div class="flexcol {isDisabled ? "aa-disabled" : ""}" style="grid-row: 2 / 3; grid-column: 2 / 3;">
        <label for="">{localize("AUTOANIM.repeat")} {localize("AUTOANIM.delay")}</label>
        <input disabled={isDisabled} type="Number" bind:value={delay} placeholder=250>
    </div>
    <!--Set Scale of Animation. Not rendered if Anim Type is Templates-->
    {#if animType !== "templatefx"}
    {#if animType === "aura"}
    <div class="flexcol" style="grid-row: 2 / 3; grid-column: 3 / 4;">
        <label for="">Radius</label>
        <input type="Number" bind:value={auraRadius} placeholder=3.5 step=0.01>
    </div>
    {:else}
    <div class="flexcol {animType === "range" ? "aa-disabled" : ""}" style="grid-row: 2 / 3; grid-column: 3 / 4;">
        <label for="">{localize("AUTOANIM.scale")}</label>
        <input type="Number" disabled={animType === "range"} bind:value={scale} placeholder=1 step=0.01>
    </div>
    {/if}
    {/if}
    <!--Set Animation Opacity-->
    <div class="flexcol {disabled01 ? "aa-disabled" : ""}" style="grid-row: 2 / 3; grid-column: 4 / 5;" in:fade={{duration: 500 }} out:fade={{duration: 500}}>
        <label for="aaOpacity">{localize("AUTOANIM.opacity")}</label>
        <div class='form-group'>
            <input disabled="{disabled01}" type="Number" id="aaOpacity" bind:value={opacity} placeholder=1 min=0 max=1 step=0.01>
            <input disabled="{disabled01}" type="range" min=0 max=1 step=0.01 bind:value={opacity}>
        </div>
    </div>
    <!--Template Specific Settings-->
    {#if animType === "templatefx"}
    <!--Set Scale in X-->
    <div class="flexcol" style="grid-row: 2 / 3; grid-column: 3 / 4;">
        <label for="">{localize("AUTOANIM.scale")} X</label>
        <input type="Number" bind:value={scaleX} placeholder=1>
    </div>
    <!--Set Scale in Y-->
    <div class="flexcol" style="grid-row: 3 / 4; grid-column: 3 / 4;">
        <label for="">{localize("AUTOANIM.scale")} Y</label>
        <input type="Number" bind:value={scaleY} placeholder=1>
    </div>
    <!--Remove Template option-->
    <div class="flexcol" style="grid-row: 3 / 4; grid-column: 4 / 5;">
        <label for="">{localize("AUTOANIM.remove")}</label>
        <button class="{removeTemplate ? "selected" : "notSelected"}" on:click={() => switchRemove()}>{isRemove}</button>
    </div>
    <!--Template Specific Persistent options-->
    {#if persistent}
    <!--Set Persistent Type-->
    <div class="flexcol" style="grid-row: 3 / 4;grid-column: 1 / 3;" in:fade={{duration: 500 }} out:fade={{duration: 500}}>
        <label for="1">{localize("AUTOANIM.persistant")} {localize("AUTOANIM.type")}</label>
        <select
            bind:value={persistType}
            id="1"
            style="text-align: center;justify-self: center;margin-right:15%; margin-left:15%"
        >
            {#if menuType === "circle" || menuType === "square"}
            <option value="overheadtile">{localize("AUTOANIM.overheadtile")}</option>
            <option value="groundtile">{localize("AUTOANIM.groundtile")}</option>
            {/if}
            <option value="sequencerground">{localize("AUTOANIM.sequencereffect")}</option>
            <option value="attachtemplate">{localize("AUTOANIM.attachtotemplate")}</option>
        </select>
    </div>
    <!--Template Specific Persistent options for Overhead Tiles-->
    {#if persistType === "overheadtile"}
    <!--Set Occlusion Mode-->
    <div class="flexcol" style="grid-row: 4 / 5;grid-column: 1 / 3;" in:fade={{duration: 500 }} out:fade={{duration: 500}}>
        <label for="1">{localize("AUTOANIM.occlusionMode")}</label>
        <select
            bind:value={occlusionMode}
            id="1"
            style="text-align: center;justify-self: center;"
        >
            <option value="3">{localize("AUTOANIM.occlusion03")}</option>
            <option value="1">{localize("AUTOANIM.occlusion01")}</option>
            <option value="2">{localize("AUTOANIM.occlusion02")}</option>
            <option value="0">{localize("AUTOANIM.occlusion00")}</option>
        </select>
    </div>
    <!--Set Occlusion Alpha-->
    <div class="flexcol" style="grid-row: 4 / 5; grid-column: 3 / 4;" in:fade={{duration: 500 }} out:fade={{duration: 500}}>
        <label for="">{localize("AUTOANIM.occlusionAlpha")}</label>
        <div class='form-group'>
            <input type="Number" bind:value={occlusionAlpha} placeholder=1 min=0 max=1 step=0.01>
            <input type="range" min=0 max=1 step=0.01 bind:value={occlusionAlpha}>
        </div>
    </div>
    {/if}
    {/if}
    {/if}
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
    .aa-options select {
        text-align: center;
        font-weight: bold;
        min-height: 2em;
        border-radius: 5px;
    }
    h2 {
        font-family: "Modesto Condensed", "Palatino Linotype", serif;
        font-size:x-large;
        font-weight: bold;
        text-align: center;
        margin-right: 15%;
        margin-left: 15%;
        color: black;
    }
    .oldCheck {
        align-self: bottom;
    }
    .aa-options button {
        border-radius: 10px;
        border: 2px outset #8e8e8e;
        font-family: "Modesto Condensed", "Palatino Linotype", serif;
        font-weight: bold;
        font-size: large;
        height: auto;
    }
    .selected {
        background-color:rgba(25, 175, 2, 0.18);
        transition: background-color 0.5s
    }
    .notSelected {
        background-color: rgba(219, 132, 2, 0.18);
        transition: background-color 0.5s
    }
    .aa-options input:disabled {
        opacity: 0.3;
        transition: opacity 0.5s;
    }
    .aa-options button:disabled {
        opacity: 0.3;
        transition: opacity 0.5s;
    }
    .aa-disabled label {
        opacity:0.3;
        transition: opacity 0.5s;
    }
</style>
