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

    $: aboveBelow = $animation.primary.options.below
        ? game.i18n.localize("autoanimations.menus.below")
        : game.i18n.localize("autoanimations.menus.above");
    $: isOnlyX = $animation.primary.options.onlyX
        ? "Yes"
        : "No";

    function optionsInfo() {
        new OptionsDialog().render(true);
    }
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
        <div class="aa-options" style="justify-items:center">
            <!--Set belowToken-->
            <div class="flexcol" style="grid-row: 1 / 2; grid-column: 1 / 2;">
                <label for="">{localize("autoanimations.menus.level")}</label>
                <label for="Below {animation._data.id}" class="aa-cblabel"
                    >{aboveBelow}</label
                >
                <input
                    type="checkbox"
                    id="Below {animation._data.id}"
                    hidden
                    bind:checked={$animation.primary.options.below}
                />
            </div>
            <!--Set Number of times the animation plays-->
            <div class="flexcol" style="grid-row: 1 / 2; grid-column: 3 / 4;">
                <label for="">{localize("autoanimations.menus.repeat")}</label>
                <input
                    type="number"
                    bind:value={$animation.primary.options.repeat}
                    placeholder="1"
                />
            </div>
            <!--Set delay between repeats-->
            <div class="flexcol" style="grid-row: 1 / 2; grid-column: 4 / 5;">
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
            <!--Set onlyX for Custom set animation-->
            <div class="flexcol" style="grid-row: 2 / 3; grid-column: 1 / 2;">
                <label for="">{localize("autoanimations.menus.only")} X</label>
                <label for="OnlyX {animation._data.id}" class="aa-cblabel"
                    >{isOnlyX}</label
                >
                <input
                    type="checkbox"
                    id="OnlyX {animation._data.id}"
                    hidden
                    bind:checked={$animation.primary.options.onlyX}
                />
            </div>
            <!--Set Animation Opacity-->
            <div class="flexcol" style="grid-row: 2 / 3; grid-column: 2 / 3;">
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
            <!--Set Z-Index of Animation-->
            <div>
                <div
                    class="flexcol"
                    style="grid-row: 1 / 2; grid-column: 2 / 3;"
                >
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
            </div>
        </div>
    </TJSSvgFolder>
</div>

<style lang="scss">
    .aa-adjust-pos {
        position: relative;
        left: 10px;
    }
</style>
