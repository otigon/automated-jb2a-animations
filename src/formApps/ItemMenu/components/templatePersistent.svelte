<script>
    import { localize } from "@typhonjs-fvtt/runtime/svelte/helper";
    import { getContext } from "svelte";
    import { fade } from "svelte/transition";

    export let flagData;

    let persistType = flagData.options.persistType || false;
    $: persistType = persistType;
    $: flagData.options.persistType = persistType;

    let occlusionMode = flagData.options.occlusionMode || "3";
    $: occlusionMode = occlusionMode;
    $: flagData.options.occlusionMode = occlusionMode;

    let occlusionAlpha = flagData.options.occlusionAlpha || 0.5;
    $: occlusionAlpha = occlusionAlpha;
    $: flagData.options.occlusionAlpha = occlusionAlpha;
    
    function typeChange() {

    }
</script>

<div class="aa-options">
    <div class="flexcol" style="grid-row: 1 / 2;grid-column: 1 / 2;">
        <label for="1">Persistent {localize("AUTOANIM.type")}</label>
        <select
            bind:value={persistType}
            id="1"
            style="text-align: center;justify-self: center;"
        >
            <option value="overheadtile">{localize("AUTOANIM.overheadtile")}</option>
            <option value="groundtile">{localize("AUTOANIM.groundtile")}</option>
            <option value="sequencerground">{localize("AUTOANIM.sequencereffect")}</option>
            <option value="attachtemplate">{localize("AUTOANIM.attachtotemplate")}</option>
        </select>
    </div>
    <div class="flexcol" style="grid-row: 1 / 2;grid-column: 2 / 4;">
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
    <div class="flexcol" style="grid-row: 1 / 2; grid-column: 4 / 5;" in:fade={{duration: 500 }} out:fade={{duration: 500}}>
        <label for="">{localize("AUTOANIM.occlusionAlpha")}</label>
        <div class='form-group'>
            <input type="Number" bind:value={occlusionAlpha} placeholder=1 min=0 max=1 step=0.01>
            <input type="range" min=0 max=1 step=0.01 bind:value={occlusionAlpha}>
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
    .aa-options label {
        align-self: center;
    }
    .aa-options select {
        text-align: center;
        font-weight: bold;
        min-height: 2em;
        border-radius: 10px;
    }

</style>
