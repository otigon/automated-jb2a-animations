<script>
    import { localize } from "@typhonjs-fvtt/runtime/svelte/helper";

    import { TJSSvgFolder, TJSIconButton } from "@typhonjs-fvtt/svelte-standard/component";

    import SectionHeader    from "../Components/SectionHeader.svelte";
    import SoundSettings    from "../Components/SoundSettings.svelte";
    import Opacity          from "./inputComponents/Opacity02.svelte";
    import OptionsDialog    from "../Components/options/optionsInfoDialog.js";

    export let animation;
    export let category;
    export let idx;

    const title = "Thunderwave 5e";

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
</script>

<div class="aa-section-border">
    <SectionHeader {title} />
    <div class="aa-3wide aa-select-label">
        <div class="flexcol" style="grid-row: 1/2; grid-column: 2/3; margin-bottom: 1em">
            <label for="" style="align-self:center; font-size:1.2em">{localize("autoanimations.menus.color")}</label>
            <select bind:value={$animation.data.color}>
                {#each category.colorMenu.templatefx.square.thunderwave.mid as [key, name]}
                    <option value={key}>{name}</option>
                {/each}
            </select>
        </div>
    </div>
    <div class="aa-options-border">
        <TJSSvgFolder {folder}>
            <div slot="summary-end">
                <TJSIconButton button={optionsInfo} on:click={() => OptionsDialog.show("preset")}/>
            </div>
            <table class="d">
                <tr>
                    <td>
                        <div>
                            <label for=""
                                >{localize("autoanimations.menus.elevation")}</label
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
                        <div>
                            <label for=""
                                >{localize(
                                    "autoanimations.menus.repeat"
                                )}</label
                            >
                        </div>
                        <div>
                            <input
                                type="number"
                                bind:value={$animation.data.options.repeat}
                                placeholder="1"
                                step="1"
                            />
                        </div>
                    </td>
                    <td>
                        <div>
                            <label for=""
                                >{localize("autoanimations.menus.delay")}</label
                            >
                        </div>
                        <div>
                            <input
                                type="number"
                                bind:value={$animation.data.options.repeatDelay}
                                placeholder="1"
                                step="1"
                            />
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <Opacity {animation} />
                    </td>
                    <td>
                        <div>
                            <label for=""
                                >{localize("autoanimations.menus.scale")} X</label
                            >
                        </div>
                        <div>
                            <input
                                type="number"
                                bind:value={$animation.data.options.scaleX}
                                placeholder="1"
                                step=".01"
                            />
                        </div>
                    </td>
                    <td>
                        <div>
                            <label for=""
                                >{localize("autoanimations.menus.scale")} Y</label
                            >
                        </div>
                        <div>
                            <input
                                type="number"
                                bind:value={$animation.data.options.scaleY}
                                placeholder="1"
                                step=".01"
                            />
                        </div>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                        <!--Set Only X Scaling-->
                        <div class="form-group">
                            <label for="Remove {animation._data.id}"
                                >{localize("autoanimations.menus.remove")} X
                            </label>
                            <input
                                type="checkbox"
                                id="Remove {animation._data.id}"
                                bind:checked={$animation.data.options.removeTemplate}
                            />
                        </div>
                    </td>
                    <td></td>
                </tr>
            </table>
        </TJSSvgFolder>
    </div>
    <SoundSettings {category} {animation} {idx} section="data" />

</div>

<style lang="scss">
</style>
