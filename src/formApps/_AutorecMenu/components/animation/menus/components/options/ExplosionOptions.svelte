<script>
    import { localize } from "@typhonjs-fvtt/runtime/svelte/helper";

    import { TJSSvgFolder } from "@typhonjs-fvtt/svelte-standard/component";

    import NumberInput from "../NumberInput.svelte";

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
                    <!--Set delay for explosion-->
                    <NumberInput
                        {animation}
                        label={localize("autoanimations.menus.delay")}
                        section={"explosion"}
                        field={"delay"}
                        placeholder="250"
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
                    <div class="flexcol">
                        <label for="aaOpacity"
                            >{localize("autoanimations.menus.opacity")}</label
                        >
                        <div
                            class="form-group"
                            style="display: flex; margin-right: 2em; margin-left: 2em;"
                        >
                            <input
                                type="number"
                                id="aaOpacity"
                                bind:value={$animation.explosion.options
                                    .opacity}
                                placeholder="1"
                                min="0"
                                max="1"
                                step="0.01"
                            />
                            <input
                                style="border:none; background:none;margin-left: 3px"
                                type="range"
                                min="0"
                                max="1"
                                step="0.01"
                                bind:value={$animation.explosion.options
                                    .opacity}
                            />
                        </div>
                    </div>
                </td>
                <td>
                    <!--Set Radius of Animation-->
                    <NumberInput
                        {animation}
                        label={localize("autoanimations.menus.radius")}
                        section={"explosion"}
                        field={"radius"}
                        placeholder="1.5"
                        step="0.01"
                    />
                </td>
            </tr>
        </table>
    </TJSSvgFolder>
</div>

<style lang="scss">
</style>
