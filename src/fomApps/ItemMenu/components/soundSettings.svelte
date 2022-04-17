<script>
    import { localize } from "@typhonjs-fvtt/runtime/svelte/helper";
    import { fade, scale } from "svelte/transition";

    export let flagData;

    let section01 = flagData.audio.a01 || {};

    let soundEnabled = section01.enable;
    let soundLabel = soundEnabled ? "Enabled" : "Disabled";
    $: soundLabel = soundLabel;
    function switchLabel () {
        soundEnabled = !soundEnabled;
        soundLabel = soundEnabled ? "Enabled" : "Disabled";
        section01.enable = soundEnabled;
    }

    let startTime;
    $: startTime = startTime;
    $: section01.startTime = startTime;

    let volume;
    $: volume = volume;
    $: section01.volume = volume;

    let delay;
    $: delay = delay;
    $: section01.startTime = delay;

    let soundPath = section01.file || "";
    $: soundPath = soundPath;
    $: section01.file = soundPath;

    async function selectCustom () {
        const current = soundPath;
        const picker = new FilePicker({
            type: "audio",
            current,
            callback: (path) => {
                soundPath = path;
            },
        });
        setTimeout(() => {
            picker.element[0].style.zIndex = `${Number.MAX_SAFE_INTEGER}`;
        }, 100);
        await picker.browse(current);
    };

</script>

<h2  in:fade={{duration: 500 }} out:fade={{duration: 500}}>{localize("AUTOANIM.primary")} {localize("AUTOANIM.sound")}</h2>
<div class=aa-3wide transition:fade={{duration: 500}}>
    <div style='grid-row:1/2; grid-column:2/3'>
        <button class="oldCheck {soundEnabled ? "selected" : "notSelected"}" on:click={() => switchLabel()}>{soundLabel}</button>
    </div>
</div>
{#if soundEnabled}
<div class="aa-customAnim-container {!soundEnabled ? "opacityBorder" : ""}"  transition:scale={{duration: 500}}>
    <div
        class="form-group"
        style="grid-row: 1/2; grid-column: 2/5; margin-right:10%; margin-left:10%"
        in:fade={{ duration: 500 }}
        out:fade={{ duration: 500 }}
    >
        <input type="text" bind:value={soundPath}  class={soundEnabled && soundPath != "" ? "isPopulated" : "isNotPopulated"}>
        <button class='file-picker {soundEnabled && soundPath != "" ? "isPopulated" : "isNotPopulated"}' on:click|preventDefault={() => selectCustom()}><i class="fas fa-file-import fa-fw" /></button>
    </div>
</div>
<div class=aa-3wide transition:scale={{duration: 500}}>
    <div class="flexcol" style="grid-row: 3 / 4; grid-column: 1 / 2;">
        <label for="">{localize("AUTOANIM.start")} {localize("AUTOANIM.time")}</label>
        <input type="Number" bind:value={startTime} placeholder=0>
    </div>
    <div class="flexcol" style="grid-row: 3 / 4; grid-column: 2 / 3;">
        <label for="">{localize("AUTOANIM.volume")}</label>
        <input type="Number" bind:value={volume} placeholder=0.5>
    </div>
    <div class="flexcol" style="grid-row: 3 / 4; grid-column: 3 / 4;">
        <label for="">{localize("AUTOANIM.delay")}</label>
        <input type="Number" bind:value={delay} placeholder=0>
    </div>
</div>
{/if}

<style lang="scss">
    .aa-3wide {
        display: grid;
        grid-template-columns: 33.3% 33.3% 33.3%;
        grid-gap: 5px;
        padding: 5px;
        align-items: center;
        margin-right: 10%;
        margin-left: 10%;
        font-family: "Modesto Condensed", "Palatino Linotype", serif;
        font-size: large;
        font-weight: bold;
    }
    .aa-3wide input {
        text-align: center;
        align-self: center;
        border-radius: 5px;
        width: 3em;
    }
    .aa-3wide label {
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
    .isPopulated {
        box-shadow: 0 0 6px rgba(25, 175, 2, 0.6);
        transition: box-shadow 0.5s
    }
    .isNotPopulated {
        box-shadow: 0 0 6px rgba(219, 132, 2, 0.7);
        transition: box-shadow 0.5s
    }
    .selected {
        background-color:rgba(25, 175, 2, 0.18);
        transition: background-color 0.5s
    }
    .notSelected {
        background-color: rgba(219, 132, 2, 0.18);
        transition: background-color 0.5s
    }
    .aa-3wide button {
        border-radius: 10px;
        border: 2px solid black;
        font-family: "Modesto Condensed", "Palatino Linotype", serif;
        font-weight: bold;
        font-size: large;
    }
    .aa-customAnim-container button {
        border-radius: 10px;
        border: 2px solid black;
        font-family: "Modesto Condensed", "Palatino Linotype", serif;
        font-size: large;
        font-weight: bold;
    }
</style>