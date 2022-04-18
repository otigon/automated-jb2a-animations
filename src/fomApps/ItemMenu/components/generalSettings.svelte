<script>
    import { localize } from "@typhonjs-fvtt/runtime/svelte/helper";
    import { getContext } from "svelte";
    import { fade, fly } from "svelte/transition";
    import { TJSDialog } from "@typhonjs-fvtt/runtime/svelte/application";
    import { ApplicationShell } from "@typhonjs-fvtt/runtime/svelte/component/core";
    
    export let flagData;

    export let animationDisabled = flagData.killAnim;
    $: animationDisabled = animationDisabled;
    $: flagData.killAnim = animationDisabled;
    $: disabledLabel = disabledLabel;
    let disabledLabel = !animationDisabled ? game.i18n.localize("AUTOANIM.animation") + " " + game.i18n.localize("AUTOANIM.enabled") : game.i18n.localize("AUTOANIM.animation") + " " + game.i18n.localize("AUTOANIM.disabled");
    function switchDisabled() {
        animationDisabled = !animationDisabled;
        disabledLabel = animationDisabled ? game.i18n.localize("AUTOANIM.animation") + " " + game.i18n.localize("AUTOANIM.disabled") : game.i18n.localize("AUTOANIM.animation") + " " + game.i18n.localize("AUTOANIM.enabled");
        flagData.killAnim = animationDisabled;
    }


    export let isCustomized = flagData.override || false;
    $: isCustomized = isCustomized;
    function customize() {
        isCustomized = !isCustomized;
        flagData.override = isCustomized;
        console.log(flagData)
    }

    let overrideAuto;
    $: overrideAuto = overrideAuto;
    function override() {
        overrideAuto = !overrideAuto
        flagData.autoOverride.enable = overrideAuto;
    }

    let fromAmmo;
    $: fromAmmo = fromAmmo;
    function ammo () {
        fromAmmo = !fromAmmo;
        flagData.options.ammo = fromAmmo
    }
    /*
    export const generalFlagData = {
        killAnim: animationDisabled,
        override: isCustomized,
        autoOverride: {
            enable: overrideAuto,
        },
        options: {
            ammo: fromAmmo,
        }
    }
    */
</script>

<div class="aa-general-settings">
    <div class="flexcol" style="grid-row: 1 / 2; grid-column: 2 / 3;" transition:fade>
        <button class="oldCheck {animationDisabled ? "notSelected" : "selected"}" on:click={() => switchDisabled()}>{disabledLabel}</button>
    </div>
    {#if !animationDisabled}
    {#if !overrideAuto}
    <div class="flexcol" style="grid-row: 2 / 3; grid-column: 1 / 2;" transition:fade>
        <button disabled={overrideAuto} class="oldCheck {isCustomized ? "selected" : "notSelected"}" on:click={() => customize()}>{localize("AUTOANIM.customize")}</button>
    </div>
    {/if}
    {#if !isCustomized}
    <div class="flexcol" style="grid-row: 2 / 3; grid-column: 2 / 3;" transition:fade>
        <button disabled={isCustomized} class="oldCheck {overrideAuto ? "selected" : "notSelected"}" on:click={() => override()}>Override Autorec</button>
    </div>
    {/if}
    {#if !overrideAuto}
    <div class="flexcol" style="grid-row: 2 / 3; grid-column: 3 / 4;" transition:fade>
        <button class="oldCheck {fromAmmo ? "selected" : "notSelected"}" on:click={() => ammo()}>{localize("AUTOANIM.ammoAnimate")}</button>
    </div>
    {/if}
    {/if}
</div>


<style lang="scss">
    .selected {
        background-color:rgba(25, 175, 2, 0.18);
        transition: background-color 0.5s
    }
    .notSelected {
        background-color: rgba(219, 132, 2, 0.18);
        transition: background-color 0.5s
    }
    .aa-general-settings {
        display: grid;
        grid-template-columns: 33.3% 33.3% 33.3%;
        grid-gap: 5px;
        padding: 5px;
        align-items: center;
        margin-right: 1%;
        margin-left: 1%;
        font-family: "Modesto Condensed", "Palatino Linotype", serif;
        font-size: large;
        font-weight: bold;
        border-radius: 10px;
    }
    .aa-general-settings button{
        border-radius: 10px;
        border: 2px solid black;
        font-family: "Modesto Condensed", "Palatino Linotype", serif;
        font-weight: bold;
        font-size: large;
    }

</style>