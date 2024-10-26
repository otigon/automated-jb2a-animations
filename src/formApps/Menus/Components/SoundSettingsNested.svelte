<script>
    import { getContext }   from "svelte";

    import { localize } from "#runtime/util/i18n";

    import { TJSSvgFolder } from "#standard/component/folder";

    //export let animation;
    //export let category;
    export let section;
    export let section02;
    //export let idx;

    let { animation, category, idx } = getContext('animation-data');

    // If the Sound object was not set, set it now
    if (!$animation[section][section02].sound) {
        $animation[section][section02].sound = {
            enable: false,
            delay: 0,
            file: "",
            repeat: 1,
            repeatDelay: 250,
            startTime: 0,
            volume: 0.75
        }
    }
    const folder = {
        styles: {
            "--tjs-summary-font-family":
                '"Modesto Condensed", "Palatino Linotype", serif',
            "--tjs-summary-font-size": "1.1em",
            "--tjs-summary-chevron-size": "0.7em",
        },
    };

    $: isValid = $animation[section][section02].sound.file && $animation[section][section02].sound.enable

    function checkMeta() {
        delete $animation.metaData
    }

</script>

<div class="aa-sound-border">
    <TJSSvgFolder
        {folder}
        label={localize("autoanimations.menus.sound")}
    >
        <div slot="summary-end">
            <input
                on:click|stopPropagation
                type="checkbox"
                style="align-self:center"
                title="Toggle Sound On/Off"
                bind:checked={$animation[section][section02].sound.enable}
                on:change={() => checkMeta()}
            />
        </div>
        <div class={!$animation[section][section02].sound.enable ? "aa-disableOpacity" : ""}>
            <div class="aa-Sound-container">
                <div style="grid-row: 1/2; grid-column: 1/2">
                        <i
                            class="fas fa-music aa-blue {isValid ? "" : "aa-disableOpacity"}"
                            style="font-size: 1.5em;"
                            title="Play Sound"
                            on:click={() => category.playSound(animation._data[section][section02].sound)}
                            role=presentation
                        />
                </div>
                <div style="grid-row: 1/2; grid-column: 2/3">
                    <input
                        type="text"
                        bind:value={$animation[section][section02].sound.file}
                        style="font-weight:normal; font-size:small"
                    />
                </div>
                <div style="grid-row: 1/2; grid-column: 3/4">
                    <i class="fas fa-file-import"
                       title="File Picker"
                       style="font-size:1.5em"
                       on:click|preventDefault={() => category.selectSoundNested(section, section02, idx)}
                       role=presentation
                    />
                </div>
            </div>
            <table class="d">
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
                                bind:value={$animation[section][section02].sound.startTime}
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
                                bind:value={$animation[section][section02].sound.volume}
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
                                bind:value={$animation[section][section02].sound.delay}
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
                                bind:value={$animation[section][section02].sound.repeat}
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
                                bind:value={$animation[section][section02].sound.repeatDelay}
                                placeholder="250"
                                step="1"
                            />
                        </div>
                    </td>
                </tr>
            </table>
        </div>
    </TJSSvgFolder>
</div>

<style lang="scss">
</style>
