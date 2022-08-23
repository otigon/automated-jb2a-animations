<script>
    import { localize } from "@typhonjs-fvtt/runtime/svelte/helper";

    import { TJSSvgFolder } from "@typhonjs-fvtt/svelte-standard/component";

    import NumberInput from "../NumberInput.svelte";

    export let animation;
    export let category;

    const folder = {
        styles: {
            "--tjs-summary-font-family":
                '"Modesto Condensed", "Palatino Linotype", serif',
            "--tjs-summary-font-size": "1.2em",
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
                    <!--Set belowToken-->
                    <div class="form-group">
                        <label for="SBelow {animation._data.id}"
                            >{localize("autoanimations.menus.below")}
                        </label>
                        <input
                            type="checkbox"
                            id="SBelow {animation._data.id}"
                            bind:checked={$animation.source.options.below}
                        />
                    </div>
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
                                bind:value={$animation.source.options.opacity}
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
                                bind:value={$animation.source.options.opacity}
                            />
                        </div>
                    </div>
                </td>
                <td>
                    <!--Set Scale of Animation. Not rendered if Anim Type is Templates-->
                    <NumberInput
                        {animation}
                        label={localize("autoanimations.menus.scale")}
                        section={"source"}
                        field={"scale"}
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
