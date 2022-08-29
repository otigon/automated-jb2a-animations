<script>
    import { localize } from "@typhonjs-fvtt/runtime/svelte/helper";

    import { TJSSvgFolder } from "@typhonjs-fvtt/svelte-standard/component";

    import NumberInput from "./inputComponents/NumberInput.svelte";
    import Opacity from "./inputComponents/Opacity.svelte";

    //import { ripple } from "@typhonjs-fvtt/svelte-standard/action";

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

    /*
    $: below = $animation.primary.options.below;
    $: buttonBelow = {
        icon: below ? "fas fa-check" : "fas fa-times",
        efx: ripple(),
        title: "autoanimations.menus.add",
        styles: { 'margin-left': 'auto', 'margin-right': 'auto', 'margin-top': '.1em', 'border-radius': '50%' },
    }

    $: onlyX = $animation.primary.options.onlyX
    $: buttonOnlyX = {
        icon: onlyX ? "fas fa-check" : "fas fa-times",
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
                    <div class="form-group">
                        <label for="Below {animation._data.id}"
                            >{localize("autoanimations.menus.below")}
                        </label>
                        <input
                            type="checkbox"
                            id="Below {animation._data.id}"
                            bind:checked={$animation.primary.options.below}
                        />
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
                    <!--Set OnlyX-->
                    <div class="form-group">
                        <label for="OnlyX {animation._data.id}"
                            >{localize("autoanimations.menus.only")} X
                        </label>
                        <input
                            type="checkbox"
                            id="OnlyX {animation._data.id}"
                            bind:checked={$animation.primary.options.onlyX}
                        />
                    </div>
                </td>
                <td>
                    <!--Set Animation Opacity-->
                    <Opacity {animation} />
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
            </tr>
            <tr>
                <td></td>
                <td>
                    <NumberInput
                    {animation}
                    label={localize("autoanimations.menus.wait")}
                    section={"primary"}
                    field={"wait"}
                    step="0.01"
                />
                </td>
                <td></td>
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
