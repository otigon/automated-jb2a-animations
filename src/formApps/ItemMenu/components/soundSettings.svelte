<script>
    import { localize } from "@typhonjs-fvtt/runtime/svelte/helper";
    import { fade, scale } from "svelte/transition";

    export let flagData;
    export let audioPath;
    flagData.audio ? flagData.audio : (flagData.audio = {});
    flagData.audio[audioPath]
        ? flagData.audio[audioPath]
        : (flagData.audio[audioPath] = {});

    let section01 = flagData.audio[audioPath];

    let soundEnabled = section01.enable || false;
    $: {
        soundEnabled = soundEnabled;
        section01.enable = soundEnabled;
    }

    function enableSound() {
        soundEnabled = !soundEnabled;
    }

    $: section01.enable = soundEnabled;

    let startTime = section01.startTime;
    $: startTime = startTime;
    $: section01.startTime = startTime;

    let volume = section01.volume;
    $: volume = volume;
    $: section01.volume = volume;

    let delay = section01.delay;
    $: delay = delay;
    $: section01.delay = delay;

    let soundPath = section01.file || "";
    $: soundPath = soundPath;
    $: section01.file = soundPath;

    async function selectCustom() {
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
    }

    function playSound() {
        AudioHelper.play(
            { src: soundPath, volume: volume, autoplay: true, loop: false },
            true
        );
    }
</script>

<div transition:fade>
    <div class="aa-header-section">
        <div class="aa-header">
            <div class="flexcol" style="grid-row:1/2; grid-column:3/4">
                <label for="">{localize("autoanimations.menus.sound")}</label>
            </div>
            {#if soundEnabled && soundPath}
                <div class="flexcol" style="grid-row:1/2; grid-column:1/2">
                    <i
                        class="fas fa-music aa-video-preview"
                        on:click={() => playSound()}
                    />
                </div>
            {/if}
            <div class="flexcol" style="grid-row:1/2; grid-column:5/6;">
                <i
                    class={soundEnabled
                        ? "fas fa-minus aa-red"
                        : "fas fa-plus aa-green"}
                    on:click={() => enableSound()}
                />
            </div>
        </div>
    </div>
    {#if soundEnabled}
        <div
            class="aa-customAnim-container {!soundEnabled
                ? 'opacityBorder'
                : ''}"
            transition:fade
        >
            <div
                class="form-group"
                style="grid-row: 1/2; grid-column: 2/5; margin-right:10%; margin-left:10%"
            >
                <input
                    type="text"
                    bind:value={soundPath}
                    class={soundEnabled && soundPath != ""
                        ? "isPopulated"
                        : "isNotPopulated"}
                />
                <button
                    class="file-picker {soundEnabled && soundPath != ''
                        ? 'isPopulated'
                        : 'isNotPopulated'}"
                    on:click|preventDefault={() => selectCustom()}
                    ><i class="fas fa-file-import fa-fw" /></button
                >
            </div>
        </div>
        <div class="aa-3wide" transition:fade>
            <div class="flexcol" style="grid-row: 3 / 4; grid-column: 1 / 2;">
                <label for=""
                    >{localize("autoanimations.menus.start")}
                    {localize("autoanimations.menus.time")}</label
                >
                <input
                    type="Number"
                    bind:value={startTime}
                    placeholder="0"
                    step="0.01"
                />
            </div>
            <div class="flexcol" style="grid-row: 3 / 4; grid-column: 2 / 3;">
                <label for="">{localize("autoanimations.menus.volume")}</label>
                <input
                    type="Number"
                    bind:value={volume}
                    placeholder="0.5"
                    step="0.01"
                />
            </div>
            <div class="flexcol" style="grid-row: 3 / 4; grid-column: 3 / 4;">
                <label for="">{localize("autoanimations.menus.delay")}</label>
                <input
                    type="Number"
                    bind:value={delay}
                    placeholder="0"
                    step="0.01"
                />
            </div>
        </div>
    {/if}
</div>

<style lang="scss">
    .aa-3wide {
        display: grid;
        grid-template-columns: 33.3% 33.3% 33.3%;
        grid-gap: 5px;
        align-items: center;
        margin-right: 8%;
        margin-left: 5%;
        padding-bottom: 10px;
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
    .isPopulated {
        box-shadow: 0 0 6px rgba(25, 175, 2, 0.6);
        transition: box-shadow 0.5s;
    }
    .isNotPopulated {
        box-shadow: 0 0 6px rgba(219, 132, 2, 0.7);
        transition: box-shadow 0.5s;
    }
    .aa-customAnim-container {
        font-weight: bold;
        font-size: small;
    }
    .aa-customAnim-container button {
        border-radius: 10px;
        border: 2px outset #dddddd;
        font-family: "Modesto Condensed", "Palatino Linotype", serif;
        font-size: large;
        font-weight: bold;
    }
    .aa-header-section {
        border-bottom: 1px solid rgba(120, 46, 34, 1);
        margin-right: 15%;
        margin-left: 15%;
        margin-bottom: 10px;
    }
    .aa-header {
        display: grid;
        grid-template-columns: 10% 20% 40% 20% 10%;
        grid-gap: 5px;
        padding: 1px;
        align-items: center;
        margin-right: 8%;
        margin-left: 5%;
        font-family: "Modesto Condensed", "Palatino Linotype", serif;
        font-size: large;
        font-weight: bold;
        color: black;
    }
    .aa-header label {
        align-self: center;
        font-family: "Modesto Condensed", "Palatino Linotype", serif;
        font-size: x-large;
        font-weight: bold;
        text-align: center;
        margin-right: 5%;
        margin-left: 5%;
        color: black;
    }
    .aa-red {
        color: red;
        transition: "color" 0.5s;
    }
    .aa-green {
        color: green;
        transition: "color" 0.5s;
    }
</style>
