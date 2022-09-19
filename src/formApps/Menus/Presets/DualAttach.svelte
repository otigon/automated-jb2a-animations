<script>
    import { TJSSvgFolder } from "@typhonjs-fvtt/svelte-standard/component";
    import { localize } from "@typhonjs-fvtt/runtime/svelte/helper";

    import VideoSelect      from "../Components/VideoSelect.svelte";
    import SoundSettings    from "../Components/SoundSettings.svelte";
    import Opacity          from "./inputComponents/Opacity02.svelte";

    export let animation;
    export let category;
    export let idx;

    const folder = {
        styles: {
            "--tjs-summary-font-family":
                '"Modesto Condensed", "Palatino Linotype", serif',
            "--tjs-summary-font-size": "1.1em",
            "--tjs-summary-chevron-size": "0.7em",
        },
        label: game.i18n.localize("autoanimations.menus.options"),
    };

    $: isCustom = $animation.data.video.enableCustom;
</script>

<div class="aa-section-border">
    <VideoSelect
        {animation}
        {category}
        title="Dual Attach"
        {idx}
        section="data"
    />
    <div class="aa-options-border">
        <TJSSvgFolder {folder}>
            <table class="d">
                <tr>
                    <td>
                        <div>
                            <label for=""
                                >{localize(
                                    "autoanimations.menus.elevation"
                                )}</label
                            >
                        </div>
                        <div>
                            <input
                                type="number"
                                bind:value={$animation.data.options.elevation}
                                placeholder="1"
                                step="1"
                            />
                        </div>
                    </td>
                    <td>
                        <Opacity {animation} />
                    </td>
                    <td>
                        <div>
                            <label for=""
                                >{localize(
                                    "autoanimations.menus.playbackRate"
                                )}</label
                            >
                        </div>
                        <div>
                            <input
                                type="number"
                                bind:value={$animation.data.options
                                    .playbackRate}
                                placeholder="1"
                                step=".01"
                            />
                        </div>
                    </td>
                </tr>
                <tr>
                    <td />
                    <td>
                        <!--Set Only X Scaling-->
                        <div class="form-group {!isCustom ? "aa-disableOpacity" : ""}">
                            <label for="Remove {animation._data.id}"
                                >{localize("autoanimations.menus.only")} X
                            </label>
                            <input
                                type="checkbox"
                                id="Remove {animation._data.id}"
                                bind:checked={$animation.data.options.onlyX}
                            />
                        </div>
                    </td>
                    <td />
                </tr>
            </table>
        </TJSSvgFolder>
    </div>
    <SoundSettings {animation} {category} {idx} section="data" />
</div>

<style lang="scss">
</style>
