<script>
    import { localize } from "@typhonjs-fvtt/runtime/svelte/helper";

    import { TJSSvgFolder } from "@typhonjs-fvtt/svelte-standard/component";

    import SectionHeader from "../components/SectionHeader.svelte";
    import SoundSettings from "../components/SoundSettings.svelte";
    import Opacity from "./inputComponents/Opacity02.svelte";

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
                                bind:value={$animation.data.options.delay}
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
                                >{localize("autoanimations.menus.scale")}</label
                            >
                        </div>
                        <div>
                            <input
                                type="number"
                                bind:value={$animation.data.options.scale}
                                placeholder="1"
                                step=".01"
                            />
                        </div>
                    </td>

                </tr>
            </table>
        </TJSSvgFolder>
    </div>
    <SoundSettings {category} {animation} {idx} section="data" />

</div>

<style lang="scss">
</style>
