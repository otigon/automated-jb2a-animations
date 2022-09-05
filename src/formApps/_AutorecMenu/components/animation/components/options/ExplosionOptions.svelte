<script>
    import { localize } from "@typhonjs-fvtt/runtime/svelte/helper";

    import { TJSSvgFolder } from "@typhonjs-fvtt/svelte-standard/component";

    import NumberInput from "./inputComponents/NumberInput.svelte";
    import ScaleRadius from "./inputComponents/ScaleRadius.svelte";
    import Opacity from "./inputComponents/Opacity.svelte";

    export let animation;

    const folder = {
        label: game.i18n.localize("autoanimations.menus.options"),
        styles: {
            "--tjs-summary-font-family":
                '"Modesto Condensed", "Palatino Linotype", serif',
            "--tjs-summary-font-size": "1.1em",
            "--tjs-summary-chevron-size": "0.7em",
        },
    };

</script>

<div class="aa-options-border">
    <TJSSvgFolder {folder}>
        <table class="d">
            <tr>
                <td>
                    <!--Set Elevation of Animation-->
                    <NumberInput
                    {animation}
                    label={localize("autoanimations.menus.elevation")}
                    section="explosion"
                    field="elevation"
                    placeholder=1000
                    />
                </td>
                <td>
                    <!--Set the Z-Index of the Animation-->
                    <NumberInput
                        {animation}
                        label={localize("autoanimations.menus.z-index")}
                        section="explosion"
                        field="zIndex"
                    />
                </td>
                <td>
                    <!--Set Size of Animation-->
                    <ScaleRadius
                        {animation}
                        section="explosion"
                        field="size"
                        placeholder="1.5"
                        step="0.01"
                    />
                </td>
            </tr>
            <tr>
                <td>
                    <!--Set Masking-->
                    <div class="form-group">
                        <label for="EMasked {animation._data.id}"
                            >{localize("autoanimations.menus.mask")}
                        </label>
                        <input
                            type="checkbox"
                            id="EMasked {animation._data.id}"
                            bind:checked={$animation.explosion.options.isMasked}
                        />
                    </div>
                </td>
                <td>
                    <!--Set Animation Opacity-->
                    <Opacity {animation} section="explosion"/>
                </td>
            </tr>
        </table>
    </TJSSvgFolder>
</div>

<style lang="scss">
</style>
