<script>
    import { localize } from "@typhonjs-fvtt/runtime/svelte/helper";

    import { TJSSvgFolder } from "@typhonjs-fvtt/svelte-standard/component";

    import NumberInput from "./inputComponents/NumberInput.svelte";
    import ScaleRadius from "./inputComponents/ScaleRadius.svelte";
    import Opacity from "./inputComponents/Opacity.svelte";

    export let animation;
    export let category;

    const folder = {
        styles: {
            "--tjs-summary-font-family":
                '"Modesto Condensed", "Palatino Linotype", serif',
            "--tjs-summary-font-size": "1.1em",
            "--tjs-summary-chevron-size": "0.7em",
        },
        label: game.i18n.localize("autoanimations.menus.options"),
    };

    /*
    $: below = $animation.source.options.below;
    $: buttonBelow = {
        icon: below ? "fas fa-check" : "fas fa-times",
        title: "autoanimations.menus.add",
        styles: { 'margin-left': 'auto', 'margin-right': 'auto', 'margin-top': '.1em', 'border-radius': '50%' },
    }

    $: mask = $animation.source.options.isMasked;
    $: buttonMask = {
        icon: mask ? "fas fa-check" : "fas fa-times",
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
                    <!--Set Elevation of Animation-->
                    <NumberInput
                    {animation}
                    label={localize("autoanimations.menus.elevation")}
                    section={"source"}
                    field={"elevation"}
                    />
                </td>
                <td>
                    <!--Set Number of times the animation plays-->
                    <NumberInput
                        {animation}
                        label={localize("autoanimations.menus.repeat")}
                        section={"source"}
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
                        section={"source"}
                        field={"delay"}
                        placeholder="250"
                    />
                </td>
            </tr>
            <tr>
                <td>
                    <!--Set OnlyX-->
                    <div class="form-group">
                        <label for="SMasked {animation._data.id}"
                            >{localize("autoanimations.menus.mask")}
                            <input
                                type="checkbox"
                                id="SMasked {animation._data.id}"
                                bind:checked={$animation.source.options
                                    .isMasked}
                            />
                        </label>
                    </div>
                </td>
                <td>
                    <!--Set Animation Opacity-->
                    <Opacity {animation} section="source" />
                </td>
                <td>
                    <!--Set Size of Animation-->
                    <ScaleRadius
                        {animation}
                        section={"source"}
                        field={"size"}
                        step="0.01"
                    />
                </td>
            </tr>
            <tr>
                <td>
                    <!--Set the Z-Index of the Animation-->
                    <NumberInput
                        {animation}
                        label={localize("autoanimations.menus.z-index")}
                        section={"source"}
                        field={"zIndex"}
                    />
                </td>
                <td>
                    <!--Set Delay for proceeding animation-->
                    <NumberInput
                        {animation}
                        label={localize("autoanimations.menus.wait")}
                        section={"source"}
                        field={"delayAfter"}
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
