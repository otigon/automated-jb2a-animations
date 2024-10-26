<script>
    import { localize } from "#runtime/util/i18n";
    import { getContext }   from "svelte";

    //export let animation;
    //export let category;
    //export let idx;

    let { animation, category, idx } = getContext('animation-data');

    let section = "soundOnly";

    $: isValid = $animation.soundOnly.sound.enable && $animation.soundOnly.sound.file
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
                <i
                    class="fas fa-music aa-blue {isValid ? "" : "aa-disableOpacity"}"
                    style="font-size: 1.5em;"
                    title="Play Sound"
                    on:click={() => category.playSound(animation._data[section].sound)}
                    role=presentation
                />
        </div>
        <div style="grid-row: 1/2; grid-column: 2/3">
            <input
                type="text"
                bind:value={$animation.soundOnly.sound.file}
                style="font-weight:normal; font-size:small"
            />
        </div>
        <div style="grid-row: 1/2; grid-column: 3/4">
            <i class="fas fa-file-import"
               title="File Picker"
               style="font-size:1.5em"
               on:click|preventDefault={() => category.selectSound(section, idx)}
               role=presentation
            />
        </div>
    </div>
    <table class="d" style="padding-left: 2em; padding-right: 2em">
        <tr>
            <td>
                <!--Set Start Time-->
                <div>
                    <label for=""
                        >{localize("autoanimations.menus.start")}
                        {localize("autoanimations.menus.time")} (ms)</label
                    >
                </div>
                <div>
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
                <div>
                    <label for=""
                        >{localize(
                            "autoanimations.menus.volume"
                        )}</label
                    >
                </div>
                <div>
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
                <div>
                    <label for=""
                        >{localize("autoanimations.menus.delay")}</label
                    >
                </div>
                <div>
                    <input
                        type="number"
                        bind:value={$animation.soundOnly.sound.delay}
                        placeholder="0"
                        step="0.01"
                    />
                </div>
            </td>
        </tr>
        <tr>
            <td>
                <!--Set Repeats-->
                <div>
                    <label for=""
                        >{localize("autoanimations.menus.repeat")}</label
                    >
                </div>
                <div>
                    <input
                        type="number"
                        bind:value={$animation.soundOnly.sound.repeat}
                        placeholder="1"
                        step="1"
                    />
                </div>
            </td>
            <td>
                <!--Set Repeat Delay-->
                <div>
                    <label for=""
                        >{localize("autoanimations.menus.repeat")} {localize("autoanimations.menus.delay")}</label
                    >
                </div>
                <div>
                    <input
                        type="number"
                        bind:value={$animation.soundOnly.sound.repeatDelay}
                        placeholder="250"
                        step="1"
                    />
                </div>
            </td>
        </tr>
    </table>
</div>

<style lang="scss">
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
        border: 3px solid rgba(21, 86, 21, 0.6);
        border-radius: 5px;
        background: rgb(200 200 200);
        margin-bottom: 15px;
        padding-bottom: 15px;
    }
</style>
