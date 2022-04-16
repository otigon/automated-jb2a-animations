<script>
    import { localize } from "@typhonjs-fvtt/runtime/svelte/helper";
    import { fade } from "svelte/transition";

    export let flagData;

    let section01 = flagData.audio.a01 || {};

    let soundEnabled;
    let soundLabel = "Disabled";
    $: soundLabel = soundLabel;
    function switchLabel () {
        soundEnabled = !soundEnabled;
        soundLabel = soundEnabled ? "Enabled" : "Disabled";
        section01.enable = soundEnabled;
    }
</script>

<h2  in:fade={{duration: 500 }} out:fade={{duration: 500}}>{localize("AUTOANIM.primary")} {localize("AUTOANIM.sound")}</h2>
<div class=aa-3wide>
    <div style='grid-row:1/2; grid-column:2/3'>
        <button class="oldCheck {soundEnabled ? "selected" : "notSelected"}" on:click={() => switchLabel()}>{soundLabel}</button>
    </div>
</div>

<style lang="scss">
    .aa-3wide {
        display: grid;
        grid-template-columns: 33.3% 33.3% 33.3%;
        grid-gap: 5px;
        padding: 5px;
        align-items: center;
        margin-right: 5%;
        margin-left: 5%;
        font-family: "Modesto Condensed", "Palatino Linotype", serif;
        font-size: large;
        font-weight: bold;
    }
    h2 {
        font-family: "Modesto Condensed", "Palatino Linotype", serif;
        font-size:x-large;
        font-weight: bold;
        text-align: center;
        margin-right: 15%;
        margin-left: 15%;
    }
    .selected {
        background-color:rgba(25, 175, 2, 0.4);
        transition: background-color 0.5s
    }
    .notSelected {
        background-color: rgba(219, 132, 2, 0.4);
        transition: background-color 0.5s
    }
    .aa-3wide button {
        border-radius: 10px;
        border: 2px solid black;
        font-family: "Modesto Condensed", "Palatino Linotype", serif;
        font-weight: bold;
        font-size: large;
    }
</style>