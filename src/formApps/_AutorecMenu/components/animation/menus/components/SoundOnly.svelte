<script>
    import { localize } from "@typhonjs-fvtt/runtime/svelte/helper";

    export let animation;
    let section = "soundOnly";
</script>


<div class="aa-soundOnly-border">
    <div style="padding-top: 10px">
        <h1>
            {localize("autoanimations.menus.sound")}
            {localize("autoanimations.menus.only")}
        </h1>
    </div>
    <div class="aa-Sound-container">
        <div style="grid-row: 1/2; grid-column: 1/2">
            {#if $animation.soundOnly.sound.enable && $animation.soundOnly.sound.file}
                <i
                    class="fas fa-music aa-video-preview"
                    on:click={() => animation.playSound(section)}
                />
            {/if}
        </div>
        <div style="grid-row: 1/2; grid-column: 2/4">
            <input
                type="text"
                bind:value={$animation.soundOnly.sound.file}
                style="font-weight:normal; font-size:small"
            />
        </div>
        <div style="grid-row: 1/2; grid-column: 4/5">
            <button
                class="file-picker"
                on:click|preventDefault={() => animation.selectSound(section)}
                ><i class="fas fa-file-import fa-fw" /></button
            >
        </div>
    </div>
    <table class="d" style="padding-left: 2em; padding-right: 2em">
        <tr>
            <td>
                <!--Set Start Time-->
                <div class="form-group">
                    <label for=""
                        >{localize("autoanimations.menus.start")}
                        {localize("autoanimations.menus.time")} (ms)</label
                    >
                    <input
                        type="number"
                        bind:value={$animation.soundOnly.sound.startTime}
                        placeholder="0"
                        step="0.01"
                    />
                </div>
            </td>
            <td>
                <!--Set Volume-->
                <div class="form-group">
                    <label for=""
                        >{localize(
                            "autoanimations.menus.volume"
                        )}</label
                    >
                    <input
                        type="number"
                        bind:value={$animation.soundOnly.sound.volume}
                        placeholder="0.5"
                        step="0.01"
                    />
                </div>
            </td>
            <td>
                <!--Set Delay-->
                <div class="form-group">
                    <label for=""
                        >{localize("autoanimations.menus.delay")}</label
                    >
                    <input
                        type="number"
                        bind:value={$animation.soundOnly.sound.delay}
                        placeholder="0"
                        step="0.01"
                    />
                </div>
            </td>
        </tr>
    </table>
</div>

<style lang="scss">
    .aa-Sound-container {
        display: grid;
        grid-template-columns: 5% 41% 41% 10%;
        grid-gap: 1%;
        padding-top: 5px;
        padding-bottom: 5px;
        align-items: center;
        margin-right: 6%;
        margin-left: 3%;
        font-size: small;
        font-weight: normal;
    }
    .aa-Sound-container button {
        border-radius: 10px;
        border: 2px outset rgb(142, 142, 142);
        font-family: "Modesto Condensed", "Palatino Linotype", serif;
        font-size: large;
        font-weight: bold;
        background: #dddddd;
    }
    h1 {
        font-family: "Modesto Condensed", "Palatino Linotype", serif;
        font-size: x-large;
        font-weight: bold;
        text-align: center;
        margin-right: 5%;
        margin-left: 5%;
    }
    .aa-soundOnly-border {
        margin-right: 3%;
        margin-left: 3%;
        border: 3px solid rgba(35, 143, 35, 0.6);
        border-radius: 5px;
        background: rgb(200 200 200);
        margin-bottom: 15px;
        padding-bottom: 15px;
    }
</style>
