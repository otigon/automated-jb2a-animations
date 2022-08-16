<script>
    import { localize } from "@typhonjs-fvtt/runtime/svelte/helper";

    import { TJSSvgFolder } from "@typhonjs-fvtt/svelte-standard/component";

    import OptionsDialog from "./optionsInfoDialog.js";

    export let animation;

    const folder = {
        label: game.i18n.localize("autoanimations.menus.options"),
        styles: {
            "--tjs-summary-font-family":
                '"Modesto Condensed", "Palatino Linotype", serif',
            "--tjs-summary-font-size": "1.2em",
            "--tjs-summary-chevron-size": "0.7em",
        },
    };

    $: aboveBelow = $animation.primary?.options?.below
        ? game.i18n.localize("autoanimations.menus.below")
        : game.i18n.localize("autoanimations.menus.above");

    function optionsInfo() {
        new OptionsDialog().render(true);
    }

    $: below = $animation.primary.options.below;
</script>

<div class="aa-options-border">
    <TJSSvgFolder {folder}>
        <div slot="summary-end">
            <i
                class="fas fa-info-circle aa-info-icon aa-zoom aa-adjust-pos"
                title={localize("autoanimations.menus.quickReference")}
                on:click={() => optionsInfo()}
            />
        </div>
        <table class="d">
            <tr>
                <td>
                    <!--Set belowToken-->
                    <div class="form-group">
                        <label for="Below {animation._data.id}"
                            >{aboveBelow}</label
                        >
                        <input
                            type="checkbox"
                            id="Below {animation._data.id}"
                            bind:checked={$animation.primary.options.below}
                        />
                    </div>
                </td>
                <td>
                    <div class="form-group">
                        <label for=""
                            >{localize("autoanimations.menus.z-index")}</label
                        >
                        <input
                            type="number"
                            bind:value={$animation.primary.options.zIndex}
                            placeholder="1"
                            step="1"
                        />
                    </div>
                </td>
                <td>
                    <!--Set delay between repeats-->
                    <div class="form-group">
                        <label for=""
                            >{localize("autoanimations.menus.repeat")}
                            {localize("autoanimations.menus.delay")}</label
                        >
                        <input
                            type="number"
                            bind:value={$animation.primary.options.delay}
                            placeholder="250"
                        />
                    </div>
                </td>
                <td>
                    <!--Set Number of times the animation plays-->
                    <div class="form-group">
                        <label for=""
                            >{localize("autoanimations.menus.repeat")}</label
                        >
                        <input
                            type="number"
                            bind:value={$animation.primary.options.repeat}
                            placeholder="1"
                        />
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <!--Set Animation Opacity-->
                    <div class="flexcol">
                        <label for="aaOpacity"
                            >{localize("autoanimations.menus.opacity")}</label
                        >
                        <div class="form-group">
                            <input
                                style="font-weight: normal;background:rgb(191 187 182);font-size:14px;height:1.5em;max-width: 3.5em;font-family: Signika, sans-serif;"
                                type="number"
                                id="aaOpacity"
                                bind:value={$animation.primary.options.opacity}
                                placeholder="1"
                                min="0"
                                max="1"
                                step="0.01"
                            />
                            <input
                                style="border:none; background:none; padding-top:0.75em"
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
                    <!--Set Scale of Animation. Not rendered if Anim Type is Templates-->
                    <div
                        class="form-group"
                    >
                        <label for=""
                            >{localize("autoanimations.menus.scale")}</label
                        >
                        <input
                            type="number"
                            bind:value={$animation.primary.options.scale}
                            placeholder="1"
                            step="0.01"
                        />
                    </div>
                </td>
                <td> checkbox3</td>
            </tr>
        </table>
    </TJSSvgFolder>
</div>

<style lang="scss">
    .aa-adjust-pos {
        position: relative;
        left: 10px;
    }
    table {
        border-collapse: collapse;
        border: 1px solid black;
    }
    table.d {
        table-layout: fixed;
        width: 100%;
    }
    td {
        border: 1px solid black;
        text-align: center;
    }
    input {
        width:2em;
    }
</style>
