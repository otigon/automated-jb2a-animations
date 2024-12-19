<script>
   import { getContext }   from "svelte";

    import { localize } from "#runtime/util/i18n";

    import { TJSSvgFolder } from "#standard/component/folder";

    import NumberInput      from "./inputComponents/NumberInput.svelte";
    import Opacity          from "./inputComponents/Opacity.svelte";

    //export let animation;
    let { animation} = getContext('animation-data');

    const folder = {
        styles: {
            "--tjs-summary-font-family":
                '"Modesto Condensed", "Palatino Linotype", serif',
            "--tjs-summary-font-size": "1.1em",
            "--tjs-summary-chevron-size": "0.7em",
        },
        label: "Effects",
    };

    $: tintEnabled = $animation.primary.options.tint;
    $: breathEnabled = $animation.primary.options.breath;
    $: alphaEnabled = $animation.primary.options.alpha;

    </script>

<div class="aa-options-border">
    <TJSSvgFolder {folder}>
        <table class="d">
            <tr>
                <th></th>
                <th style="text-align:center;">
                    <div class="flexrow">
                        <label for="" style="font-size: 1.2em">{localize('autoanimations.menus.color')} {localize('autoanimations.menus.tint')}</label>
                        <input
                        type="checkbox"
                        style="position:relative; right: 10px;bottom: 2px"
                        id="Filter {animation._data.id}"
                        bind:checked={$animation.primary.options.tint}
                        />
                    </div>
                </th>
                <th></th>
            </tr>
            <tr>
                <td>
                </td>
                <td class={tintEnabled ? "" : "aa-disableOpacity"}>
                    <!--Set Animation Opacity-->
                    <Opacity {animation} label={localize("autoanimations.menus.saturate")} field="tintSaturate" min="-1" max="1"/>
                </td>
                <td class={tintEnabled ? "" : "aa-disableOpacity"}>
                    <div class="flexcol">
                        <input
                            type="Text"
                            style="width: 10em; margin: auto"
                            bind:value={$animation.primary.options.tintColor}
                        />
                    </div>
                    <div class="form-group">
                        <input
                            type="color"
                            data-edit="color"
                            id="tint"
                            style="width: 10em;margin-left: 0;"
                            bind:value={$animation.primary.options.tintColor}
                        />
                    </div>
                </td>
            </tr>
        </table>
        <table class="d">
            <tr>
                <th>
                </th>
                <th style="text-align:center">
                    <div class="flexrow">
                    <label for="" style="font-size: 1.2em">Breath Effect</label>
                    <input
                    type="checkbox"
                    style="position:relative; right: 10px;bottom: 2px"
                    id="Breath {animation._data.id}"
                    bind:checked={$animation.primary.options.breath}
                />
                    </div>
                </th>
                <th style="align-content: center;font-weight: normal">
                </th>
            </tr>
            <tr class={breathEnabled ? "" : "aa-disableOpacity"}>
                <td>
                    <!--Set Fade In time-->
                    <NumberInput
                    {animation}
                    label=From
                    section="primary"
                    field="breathMin"
                    step="0.01"
                />
                </td>
                <td>
                    <!--Set Fade In time-->
                    <NumberInput
                    {animation}
                    label=To
                    section="primary"
                    field="breathMax"
                    step="0.01"
                />
                </td>
                <td>
                    <!--Set Fade In time-->
                    <NumberInput
                    {animation}
                    label=Duration
                    section="primary"
                    field="breathDuration"
                    step="1"
                />
                </td>
            </tr>
        </table>
        <table class="d">
            <tr>
                <th>
                </th>
                <th style="text-align:center">
                    <div class="flexrow">
                    <label for="" style="font-size: 1.2em">Alpha Effect</label>
                    <input
                            type="checkbox"
                            style="position:relative; right: 10px; bottom: 2px"
                            id="Fade {animation._data.id}"
                            bind:checked={$animation.primary.options.alpha}
                        />
                    </div>
                </th>
                <th></th>
            </tr>
            <tr class={alphaEnabled ? "" : "aa-disableOpacity"}>
                <td>
                    <!--Set Fade In time-->
                    <NumberInput
                    {animation}
                    label=From
                    section="primary"
                    field="alphaMin"
                    step="0.01"
                />
                </td>
                <td>
                    <!--Set Fade In time-->
                    <NumberInput
                    {animation}
                    label=To
                    section="primary"
                    field="alphaMax"
                    step="0.01"
                />
                </td>
                <td>
                    <!--Set Fade In time-->
                    <NumberInput
                    {animation}
                    label=Duration
                    section="primary"
                    field="alphaDuration"
                    step="1"
                />
                </td>
            </tr>
        </table>
    </TJSSvgFolder>
</div>

<style lang="scss">
</style>
