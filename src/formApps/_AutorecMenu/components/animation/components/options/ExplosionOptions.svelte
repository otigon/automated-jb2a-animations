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

    /*
    $: below = $animation.explosion.options.below;
    $: buttonBelow = {
        icon: below ? "fas fa-check" : "fas fa-times",
        title: "autoanimations.menus.add",
        styles: { 'margin-left': 'auto', 'margin-right': 'auto', 'margin-top': '.1em', 'border-radius': '50%' },
    }

    $: mask = $animation.explosion.options.isMasked;
    $: buttonMask = {
        icon: mask ? "fas fa-check" : "fas fa-times",
        title: "autoanimations.menus.add",
        styles: { 'margin-left': 'auto', 'margin-right': 'auto', 'margin-top': '.1em', 'border-radius': '50%' },
    }
    */
</script>

<div class="aa-options-border">
    <TJSSvgFolder {folder}>
        <table class="d">
            <tr>
                <td>
                    <!--Set belowToken-->
                    <div class="form-group">
                        <label for="EBelow {animation._data.id}"
                            >{localize("autoanimations.menus.below")}
                        </label>
                        <input
                            type="checkbox"
                            id="EBelow {animation._data.id}"
                            bind:checked={$animation.explosion.options.below}
                        />
                    </div>
                </td>
                <td>
                    <!--Set the Z-Index of the Animation-->
                    <NumberInput
                        {animation}
                        label={localize("autoanimations.menus.z-index")}
                        section={"explosion"}
                        field={"zIndex"}
                    />
                </td>
                <td>
                    <!--Set Size of Animation-->
                    <ScaleRadius
                        {animation}
                        section={"explosion"}
                        field={"size"}
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
