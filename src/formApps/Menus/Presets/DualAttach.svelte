<script>
    import { getContext }       from "svelte";

    import { localize }         from "#runtime/util/i18n";

    import { TJSIconButton }    from "#standard/component/button";
    import { TJSSvgFolder }     from "#standard/component/folder";

    import VideoSelect          from "../Components/VideoSelect.svelte";
    import SoundSettings        from "../Components/SoundSettings.svelte";
    import Opacity              from "./inputComponents/Opacity02.svelte";
    import OptionsDialog        from "../Components/options/optionsInfoDialog.js";
    import Elevation            from "../Components/options/inputComponents/Elevation.svelte";

    //export let animation;
    //export let category;
    //export let idx;
    let { animation } = getContext('animation-data');

    const folder = {
        styles: {
            "--tjs-summary-font-family":
                '"Modesto Condensed", "Palatino Linotype", serif',
            "--tjs-summary-font-size": "1.1em",
            "--tjs-summary-chevron-size": "0.7em",
        },
        label: game.i18n.localize("autoanimations.menus.options"),
    };

    const optionsInfo = {
       icon: "fas fa-info-circle",
       title: "autoanimations.menus.quickReference",
       styles: {
          "--tjs-icon-button-diameter": "1.em",
          position: "relative",
          left: "10px",
          bottom: "-2px",
          color: "rgba(50, 79, 245, 0.5)"
       }
    };

    $: isCustom = $animation.data.video.enableCustom;
</script>

<div class="aa-section-border">
    <VideoSelect title="Dual Attach" section="data" />
    <div class="aa-options-border">
        <TJSSvgFolder {folder}>
            <div slot="summary-end">
                <TJSIconButton button={optionsInfo} on:click={() => OptionsDialog.show("preset", "dualattach")}/>
            </div>
            <table class="d">
                <tr>
                    <td>
                        <Elevation {animation} section="data" />
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
                        <div class="{!isCustom ? "aa-disableOpacity" : ""}">
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
    <SoundSettings section="data" />
</div>

<style lang="scss">
</style>
