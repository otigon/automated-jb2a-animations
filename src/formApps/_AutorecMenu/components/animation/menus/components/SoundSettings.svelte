<script>
    import { localize } from "@typhonjs-fvtt/runtime/svelte/helper";
    import { TJSSvgFolder } from "@typhonjs-fvtt/svelte-standard/component";

    export let animation;
    export let section;

    const folder = {
        styles: {
            "--tjs-summary-font-family":
                '"Modesto Condensed", "Palatino Linotype", serif',
            "--tjs-summary-font-size": "1.2em",
            "--tjs-summary-chevron-size": "0.7em",
        },
    };
</script>

<div class="aa-options-border">
    <TJSSvgFolder
        {folder}
        label={`${localize("autoanimations.menus.sound")} ${
            $animation[section].sound.enable
                ? localize("autoanimations.menus.enabled")
                : localize("autoanimations.menus.disabled")
        }`}
    >
        <div slot="summary-end">
            <input
                type="checkbox"
                style="align-self:center"
                title="Toggle Sound On/Off"
                bind:checked={$animation[section].sound.enable}
            />
        </div>
        <div class={!$animation[section].sound.enable ? "aa-isDisabled" : ""}>
            <div class="aa-Sound-container">
                <div style="grid-row: 1/2; grid-column: 1/2">
                    {#if $animation[section].sound.enable && $animation[section].sound.file}
                        <i
                            class="fas fa-music aa-video-preview"
                            on:click={() => animation.playSound(section)}
                        />
                    {/if}
                </div>
                <div style="grid-row: 1/2; grid-column: 2/4">
                    <input
                        type="text"
                        bind:value={$animation[section].sound.file}
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
            <div class="aa-3wide">
                <div
                    class="flexcol"
                    style="grid-row: 3 / 4; grid-column: 1 / 2;"
                >
                    <label for=""
                        >{localize("autoanimations.menus.start")}
                        {localize("autoanimations.menus.time")} (ms)</label
                    >
                    <input
                        type="number"
                        bind:value={$animation[section].sound.startTime}
                        placeholder="0"
                        step="0.01"
                    />
                </div>
                <div
                    class="flexcol"
                    style="grid-row: 3 / 4; grid-column: 2 / 3;"
                >
                    <label for=""
                        >{localize("autoanimations.menus.volume")}</label
                    >
                    <input
                        type="number"
                        bind:value={$animation[section].sound.volume}
                        placeholder="0.5"
                        step="0.01"
                    />
                </div>
                <div
                    class="flexcol"
                    style="grid-row: 3 / 4; grid-column: 3 / 4;"
                >
                    <label for=""
                        >{localize("autoanimations.menus.delay")}</label
                    >
                    <input
                        type="number"
                        bind:value={$animation[section].sound.delay}
                        placeholder="0"
                        step="0.01"
                    />
                </div>
            </div>
        </div>
    </TJSSvgFolder>
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
    .aa-3wide input {
        text-align: center;
        align-self: center;
        border-radius: 5px;
        width: 3em;
        color: black;
        font-weight: normal;
        background: rgb(191 187 182);
        font-size: 14px;
        height: 1.5em;
        font-family: "Signika", sans-serif;
    }
    .aa-3wide label {
        align-self: center;
        font-size: large;
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
    .aa-isDisabled {
        pointer-events: none;
        opacity: 0.4;
    }
</style>
