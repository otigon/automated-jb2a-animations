<script>
    import { getContext }   from "svelte";

    import { localize }     from "#runtime/util/i18n";

    import { TJSSvgFolder } from "#standard/component/folder";

    import Opacity          from "./inputComponents/Opacity.svelte";

    //export let animation;
    let { animation } = getContext('animation-data');
    export let section = "primary";
    const folder = {
        styles: {
            "--tjs-summary-font-family":
                '"Modesto Condensed", "Palatino Linotype", serif',
            "--tjs-summary-font-size": "1.1em",
            "--tjs-summary-chevron-size": "0.7em",
        },
    };

    $: tintEnabled = $animation[section].options.tint;

    </script>

<div class="aa-effect-border">
    <TJSSvgFolder
        {folder}
        label={localize("autoanimations.menus.colorTint")}
    >
        <div slot="summary-end">
            <input
                on:click|stopPropagation
                type="checkbox"
                style="align-self:center"
                title="Enable Color Tint"
                bind:checked={$animation[section].options.tint}
            />
        </div>
        <table class="d {tintEnabled ? "" : "aa-disableOpacity"}">
            <tr>
                <td>
                    <!--Set Animation Opacity-->
                    <Opacity {animation} label={localize("autoanimations.menus.contrast")} field="contrast" min="0" max="1" placeDefault=0 {section}/>
                </td>
                <td>
                    <!--Set Animation Opacity-->
                    <Opacity {animation} label={localize("autoanimations.menus.saturation")} field="saturation" min="-1" max="1" placeDefault=0 {section}/>
                </td>
                <td>
                    <div class="flexcol">
                        <input
                            type="Text"
                            style="width: 10em; margin: auto"
                            bind:value={$animation[section].options.tintColor}
                        />
                    </div>
                    <div class="form-group">
                        <input
                            type="color"
                            data-edit="color"
                            id="tint"
                            style="width: 10em;margin-left: 0;"
                            bind:value={$animation[section].options.tintColor}
                        />
                    </div>
                </td>
            </tr>
        </table>
    </TJSSvgFolder>
</div>

<style lang="scss">
</style>
