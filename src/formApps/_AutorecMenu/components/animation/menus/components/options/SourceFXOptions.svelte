<script>
    import { localize } from "@typhonjs-fvtt/runtime/svelte/helper";

    import { TJSSvgFolder } from "@typhonjs-fvtt/svelte-standard/component";

    import OptionsDialog from "./optionsInfoDialog.js";

    export let animation;

    const folder = {
        styles: {
            "--tjs-summary-font-family":
                '"Modesto Condensed", "Palatino Linotype", serif',
            "--tjs-summary-font-size": "1.2em",
            "--tjs-summary-chevron-size": "0.7em",
        },
        label: game.i18n.localize("autoanimations.menus.options"),
    };

    $: aboveBelow = $animation.source.options.below
        ? game.i18n.localize("autoanimations.menus.below")
        : game.i18n.localize("autoanimations.menus.above");

    $: maskLabel = $animation.source.options.isMasked
        ? game.i18n.localize("autoanimations.menus.enabled")
        : game.i18n.localize("autoanimations.menus.disabled");

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
            <!--Set Level of Animation-->
            <div class="flexcol" style="grid-row: 1 / 2; grid-column: 1 / 2;">
                <label for="">{localize("autoanimations.menus.level")}</label>
                <label for="Below Source {animation._data.id}" class="aa-setDim"
                    >{aboveBelow}</label
                >
                <input
                    type="checkbox"
                    id="Below Source {animation._data.id}"
                    hidden
                    bind:checked={$animation.source.options.below}
                />
            </div>
            <!--Set the Masking Boolean-->
            <div class="flexcol" style="grid-row: 1 / 2; grid-column: 2 / 3;">
                <label for="">{localize("autoanimations.menus.masking")}</label>
                <label for="Mask Source {animation._data.id}" class="aa-setDim"
                    >{maskLabel}</label
                >
                <input
                    type="checkbox"
                    id="Mask Source {animation._data.id}"
                    hidden
                    bind:checked={$animation.source.options.isMasked}
                />
            </div>
            <!--Set Number of times the animation plays-->
            <div
                class="flexcol"
                style="grid-row: 1 / 2; grid-column: 3 / 4;"
            >
                <label for="">{localize("autoanimations.menus.repeat")}</label>
                <input
                    type="number"
                    bind:value={$animation.source.options.repeat}
                    placeholder="1"
                />
            </div>
            <!--Set delay between repeats-->
            <div
                class="flexcol"
                style="grid-row: 1 / 2; grid-column: 4 / 5;"
            >
                <label for=""
                    >{localize("autoanimations.menus.repeat")}
                    {localize("autoanimations.menus.delay")}</label
                >
                <input
                    type="number"
                    bind:value={$animation.source.options.delay}
                    placeholder="250"
                />
            </div>
            <!--Set Scale of Animation-->
            <div class="flexcol" style="grid-row: 2 / 3; grid-column: 3 / 4;">
                <label for="">{localize("autoanimations.menus.scale")}</label>
                <input
                    type="number"
                    bind:value={$animation.source.options.scale}
                    placeholder="1"
                    step="0.01"
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
                        bind:value={$animation.source.options.opacity}
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
                        bind:value={$animation.source.options.opacity}
                    />
                </div>
            </div>
            <!--Set Z-Index of Animation-->
            <div class="flexcol" style="grid-row: 2 /3; grid-column: 1 / 2;">
                <label for="">{localize("autoanimations.menus.z-index")}</label>
                <input
                    type="number"
                    bind:value={$animation.source.options.zIndex}
                    placeholder="1"
                    step="1"
                />
            </div>
            <!--Set Delay of Primary Animation-->
            <div class="flexcol" style="grid-row: 2/3; grid-column: 4 / 5;">
                <label for=""
                    >{localize("autoanimations.menus.delay")}
                    {localize("autoanimations.menus.primary")}
                    {localize("autoanimations.menus.start")}</label
                >
                <input
                    type="number"
                    bind:value={$animation.source.options.delayAfter}
                    placeholder="1"
                    step="1"
                />
            </div>
        </div>
    </TJSSvgFolder>
</div>

<style lang="scss">
    .aa-adjust-pos {
        position: relative;
        left: 10px;
    }
    .aa-setDim {
        line-height: 1.25em;
        width: 6.75em;
        align-self: center;
        padding: 0;
        border-radius: 8px;
        font-family: "Modesto Condensed", "Palatino Linotype", serif;
        font-size: 1em;
        text-align: center;
        border: 2px outset rgb(142, 142, 142);
        color: black;
    }
</style>
