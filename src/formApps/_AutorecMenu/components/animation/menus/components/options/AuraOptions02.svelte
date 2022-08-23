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

    $: aboveBelow = $animation.primary.options.below
        ? game.i18n.localize("autoanimations.menus.below")
        : game.i18n.localize("autoanimations.menus.above");
    $: bindAlpha = $animation.primary.options.unbindAlpha
        ? game.i18n.localize("autoanimations.menus.unbound")
        : game.i18n.localize("autoanimations.menus.bound");
    $: bindVisibility = $animation.primary.options.unbindVisibility
        ? game.i18n.localize("autoanimations.menus.unbound")
        : game.i18n.localize("autoanimations.menus.bound");
    $: maskLabel = $animation.primary.options.isMasked
        ? game.i18n.localize("autoanimations.menus.enabled")
        : game.i18n.localize("autoanimations.menus.disabled");
    $: addWidth = $animation.primary.options.addTokenWidth
        ? game.i18n.localize("autoanimations.menus.yes")
        : game.i18n.localize("autoanimations.menus.no");
    $: ignoreTargets = $animation.primary.options.ignoreTarget
        ? game.i18n.localize("autoanimations.menus.yes")
        : game.i18n.localize("autoanimations.menus.no");

    function optionsInfo() {
        new OptionsDialog().render(true);
    }

    $: persistent = $animation.primary.options.persistent;
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
                <label for="Below {animation._data.id}" class="aa-setDim"
                    >{aboveBelow}</label
                >
                <input
                    type="checkbox"
                    id="Below {animation._data.id}"
                    hidden
                    bind:checked={$animation.primary.options.below}
                />
            </div>
            <!--Bind/Unbind Visibility (for Persistent Effects)-->
            <div class="flexcol" style="grid-row: 1 / 2; grid-column: 2 / 3;">
                <label for=""
                    >{localize("autoanimations.menus.visibility")}</label
                >
                <label for="Vis {animation._data.id}" class="aa-setDim"
                    >{bindVisibility}</label
                >
                <input
                    type="checkbox"
                    id="Vis {animation._data.id}"
                    hidden
                    bind:checked={$animation.primary.options.unbindVisibility}
                />
            </div>
            <!--Bind/Unbind Opacity (for Persistent Effects)-->
            <div class="flexcol" style="grid-row: 1 / 2; grid-column: 3 / 4;">
                <label for="">{localize("autoanimations.menus.alpha")}</label>
                <label for="Alpha {animation._data.id}" class="aa-setDim"
                    >{bindAlpha}</label
                >
                <input
                    type="checkbox"
                    id="Alpha {animation._data.id}"
                    hidden
                    bind:checked={$animation.primary.options.unbindAlpha}
                />
            </div>
            <!--Add Token Width?-->
            <div class="flexcol" style="grid-row: 2 / 3; grid-column: 4 / 5;">
                <label for=""
                    >{localize("autoanimations.menus.add")}
                    {localize("autoanimations.menus.token")}
                    {localize("autoanimations.menus.width")}</label
                >
                <label for="AddWidth {animation._data.id}" class="aa-setDim"
                    >{addWidth}</label
                >
                <input
                    type="checkbox"
                    id="AddWidth {animation._data.id}"
                    hidden
                    bind:checked={$animation.primary.options.addTokenWidth}
                />
            </div>
            <!--Ignore Targets?-->
            <div class="flexcol" style="grid-row: 1 / 2; grid-column: 4 / 5;">
                <label for=""
                    >{localize("autoanimations.menus.ignoreTargets")}</label
                >
                <label for="Ignore {animation._data.id}" class="aa-setDim"
                    >{ignoreTargets}</label
                >
                <input
                    type="checkbox"
                    id="Ignore {animation._data.id}"
                    hidden
                    bind:checked={$animation.primary.options.ignoreTarget}
                />
            </div>
            <!--Set the Masking Boolean-->
            <div class="flexcol" style="grid-row: 2 / 3; grid-column: 1 / 2;">
                <label for="">{localize("autoanimations.menus.masking")}</label>
                <label for="Mask {animation._data.id}" class="aa-setDim"
                    >{maskLabel}</label
                >
                <input
                    type="checkbox"
                    id="Mask {animation._data.id}"
                    hidden
                    bind:checked={$animation.primary.options.isMasked}
                />
            </div>
            <!--Set Animation Opacity-->
            <div class="flexcol" style="grid-row: 2 / 3; grid-column: 2 / 3;">
                <label for="aaOpacity" class="aa-opacity-pos"
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
            <div class="flexcol" style="grid-row: 2 /3; grid-column: 3 / 4;">
                <label for="">{localize("autoanimations.menus.z-index")}</label>
                <input
                    type="number"
                    bind:value={$animation.primary.options.zIndex}
                    placeholder="1"
                    step="1"
                />
            </div>
            <!--Set Scale of Animation-->
            <div class="flexcol" style="grid-row: 3 / 4; grid-column: 4 / 5;">
                <label for="">{localize("autoanimations.menus.radius")}</label>
                <input
                    type="number"
                    bind:value={$animation.primary.options.radius}
                    placeholder="1"
                    step="0.01"
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
        width: 7em;
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
