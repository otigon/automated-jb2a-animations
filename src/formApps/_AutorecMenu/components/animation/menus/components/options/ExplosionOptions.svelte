<script>
    import { localize } from "@typhonjs-fvtt/runtime/svelte/helper";

    import { TJSSvgFolder } from "@typhonjs-fvtt/svelte-standard/component";

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

    $: maskLabel = $animation.explosion.options.isMasked
        ? game.i18n.localize("autoanimations.menus.enabled")
        : game.i18n.localize("autoanimations.menus.disabled");

    $: aboveBelow = $animation.primary?.options?.below
        ? game.i18n.localize("autoanimations.menus.below")
        : game.i18n.localize("autoanimations.menus.above");
</script>

<div class="aa-options-border">
    <TJSSvgFolder {folder} label={localize("autoanimations.menus.options")}>
        <div class="aa-options" style="justify-items:center">
            <div class="flexcol" style="grid-row: 1 / 2; grid-column: 1 / 2;">
                <label for="">{localize("autoanimations.menus.level")}</label>
                <label for="ExBelow {animation._data.id}" class="aa-cblabel"
                    >{aboveBelow}</label
                >
                <input
                    type="checkbox"
                    id="ExBelow {animation._data.id}"
                    hidden
                    bind:checked={$animation.explosion.options.below}
                />
            </div>
            <!--Set Z-Index of Animation-->
            <div class="flexcol" style="grid-row: 1 / 2; grid-column: 2 / 3;">
                <label for="">{localize("autoanimations.menus.z-index")}</label>
                <input
                    type="number"
                    bind:value={$animation.explosion.options.zIndex}
                    placeholder="1"
                    step="1"
                />
            </div>
            <div class="flexcol" style="grid-row: 1 / 2; grid-column: 3 / 4;">
                <label for="">{localize("autoanimations.menus.delay")}</label>
                <input
                    type="number"
                    bind:value={$animation.explosion.options.delay}
                    placeholder="1"
                />
            </div>
            <!--Set the Masking Boolean-->
            <div class="flexcol" style="grid-row: 1 / 2; grid-column: 4 / 5;">
                <label for="">{localize("autoanimations.menus.masking")}</label>
                <label for="ExMask {animation._data.id}" class="aa-cblabel"
                    >{maskLabel}</label
                >
                <input
                    type="checkbox"
                    id="ExMask {animation._data.id}"
                    hidden
                    bind:checked={$animation.explosion.options.isMasked}
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
                        bind:value={$animation.explosion.options.opacity}
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
                        bind:value={$animation.explosion.options.opacity}
                    />
                </div>
            </div>
            <div class="flexcol" style="grid-row: 2 / 3; grid-column: 3 / 4;">
                <label for="">{localize("autoanimations.menus.radius")}</label>
                <input
                    type="number"
                    bind:value={$animation.explosion.options.radius}
                    placeholder="1.5"
                    step="0.01"
                />
            </div>
        </div>
    </TJSSvgFolder>
</div>

<style lang="scss">
</style>
