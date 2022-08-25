<script>
    import { localize } from "@typhonjs-fvtt/runtime/svelte/helper";

    import { TJSSvgFolder } from "@typhonjs-fvtt/svelte-standard/component";

    import NumberInput from "../NumberInput.svelte";

    export let animation;
    export let category;

    const folder = {
        label: game.i18n.localize("autoanimations.menus.options"),
        styles: {
            "--tjs-summary-font-family":
                '"Modesto Condensed", "Palatino Linotype", serif',
            "--tjs-summary-font-size": "1.1em",
            "--tjs-summary-chevron-size": "0.7em",
        },
    };

    const checked = "fas fa-check";
    const unChecked = "fas fa-times";

    /*
    $: below = $animation.primary.options.below;
    $: buttonBelow = {
        icon: below ? checked : unChecked,
        efx: ripple(),
        title: "autoanimations.menus.add",
        styles: { 'margin-left': 'auto', 'margin-right': 'auto', 'margin-top': '.1em', 'border-radius': '50%' },
    }
    */
</script>

<div class="aa-options-border">
    <TJSSvgFolder {folder}>
        <div slot="summary-end">
            <i
                class="fas fa-info-circle aa-info-icon aa-zoom aa-adjust-pos"
                title={localize("autoanimations.menus.quickReference")}
                on:click={() => category.optionsInfo()}
            />
        </div>
        <table class="d">
            <tr>
                <td>
                    <!--Set belowToken-->
                    <div class="flex-row">
                        <div>
                            <label for="Below {animation._data.id}"
                                >{localize("autoanimations.menus.below")}
                            </label>
                        </div>
                        <div>
                            <input
                                type="checkbox"
                                id="Below {animation._data.id}"
                                bind:checked={$animation.primary.options.below}
                            />
                        </div>
                    </div>
                </td>
                <td>
                    <!--Set Number of times the animation plays-->
                    <NumberInput
                        {animation}
                        label={localize("autoanimations.menus.repeat")}
                        section={"primary"}
                        field={"repeat"}
                    />
                </td>
                <td>
                    <!--Set delay between repeats-->
                    <NumberInput
                        {animation}
                        label={localize("autoanimations.menus.repeat") +
                            " " +
                            localize("autoanimations.menus.delay")}
                        section={"primary"}
                        field={"delay"}
                        placeholder="250"
                    />
                </td>
            </tr>
            <tr>
                <td>
                    <!--Set Animation Opacity-->
                    <div class="flex-row">
                        <div>
                            <label for="aaOpacity"
                                >{localize(
                                    "autoanimations.menus.opacity"
                                )}</label
                            >
                        </div>
                        <div
                            class="form-group"
                            style="display: flex; margin-right: 1em; margin-left: 1em;"
                        >
                            <input
                                type="number"
                                id="aaOpacity"
                                style="box-shadow: none; min-width: 3em"
                                bind:value={$animation.primary.options.opacity}
                                placeholder="1"
                                min="0"
                                max="1"
                                step="0.01"
                            />
                            <input
                                style="border:none; background:none;margin-left: 3px; box-shadow: none"
                                type="range"
                                min="0"
                                max="1"
                                step="0.01"
                                bind:value={$animation.primary.options.opacity}
                            />
                        </div>
                    </div>
                </td>
                <td>
                    <!--Set the Z-Index of the Animation-->
                    <NumberInput
                        {animation}
                        label={localize("autoanimations.menus.z-index")}
                        section={"primary"}
                        field={"zIndex"}
                    />
                </td>
                <td>
                    <!--Set Scale of Animation. Not rendered if Anim Type is Templates-->
                    <NumberInput
                        {animation}
                        label={localize("autoanimations.menus.scale")}
                        section={"primary"}
                        field={"scale"}
                        step="0.01"
                    />
                </td>
            </tr>
        </table>
    </TJSSvgFolder>
</div>

<style lang="scss">
    .aa-adjust-pos {
        position: relative;
        left: 10px;
    }
</style>
