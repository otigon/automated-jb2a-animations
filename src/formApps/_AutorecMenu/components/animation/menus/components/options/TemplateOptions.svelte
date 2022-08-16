<script>
    import { localize } from "@typhonjs-fvtt/runtime/svelte/helper";

    import { TJSSvgFolder } from "@typhonjs-fvtt/svelte-standard/component";
    import { primary } from "../../../../../store/default-data/common/primary.js";

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

    $: isPersistent = $animation.primary.options.persistent
        ? game.i18n.localize("autoanimations.menus.persistant")
        : game.i18n.localize("autoanimations.menus.not") +
          " " +
          game.i18n.localize("autoanimations.menus.persistant");
    $: maskLabel = $animation.primary.options.isMasked
        ? game.i18n.localize("autoanimations.menus.enabled")
        : game.i18n.localize("autoanimations.menus.disabled");
    $: isRemoved = $animation.primary.options.removeTemplate
        ? game.i18n.localize("autoanimations.menus.yes")
        : game.i18n.localize("autoanimations.menus.no");

    function optionsInfo() {
        new OptionsDialog().render(true);
    }

    $: persistent = $animation.primary.options.persistent;

    $: currentType = $animation.primary.video.menuType;
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
            <!--Persistent Setting-->
            <div class="flexcol" style="grid-row: 1 / 2; grid-column: 1 / 2;">
                <label for=""
                    >{localize("autoanimations.menus.persistence")}</label
                >
                <label for="Persist {animation._data.id}" class="aa-cblabel"
                    >{isPersistent}</label
                >
                <input
                    type="checkbox"
                    id="Persist {animation._data.id}"
                    hidden
                    bind:checked={$animation.primary.options.persistent}
                />
            </div>
            <!--Set Level of Animation-->
            <div class="flexcol" style="grid-row: 1 / 2; grid-column: 2 / 3;">
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
            <!--Set the Masking Boolean-->
            <div class="flexcol" style="grid-row: 1 / 2; grid-column: 3 / 4;">
                <label for="">{localize("autoanimations.menus.masking")}</label>
                <label for="Mask {animation._data.id}" class="aa-cblabel"
                    >{maskLabel}</label
                >
                <input
                    type="checkbox"
                    id="Mask {animation._data.id}"
                    hidden
                    bind:checked={$animation.primary.options.isMasked}
                />
            </div>
            <!--Should the Template be removed?-->
            <div class="flexcol" style="grid-row: 1 / 2; grid-column: 4 / 5;">
                <label for="">{localize("autoanimations.menus.remove")}</label>
                <label for="Remove {animation._data.id}" class="aa-cblabel"
                    >{isRemoved}</label
                >
                <input
                    type="checkbox"
                    id="Remove {animation._data.id}"
                    hidden
                    bind:checked={$animation.primary.options.removeTemplate}
                />
            </div>
            <!--Set Number of times the animation plays-->
            <div
                class="flexcol {persistent ? 'aa-disableOpacity' : ''}"
                style="grid-row: 2 / 3; grid-column: 1 / 2;"
            >
                <label for="">{localize("autoanimations.menus.repeat")}</label>
                <input
                    type="number"
                    bind:value={$animation.primary.options.repeat}
                    placeholder="1"
                />
            </div>
            <!--Set delay between repeats-->
            <div
                class="flexcol {persistent ? 'aa-disableOpacity' : ''}"
                style="grid-row: 2 / 3; grid-column: 2 / 3;"
            >
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
            <!--Set Scale X of Animation-->
            <div class="flexcol" style="grid-row: 2 / 3; grid-column: 3 / 4;">
                <label for="">{localize("autoanimations.menus.scale")} X</label>
                <input
                    type="number"
                    bind:value={$animation.primary.options.scaleX}
                    placeholder="1"
                    step="0.01"
                />
            </div>
            <!--Set Scale Y of Animation-->
            <div class="flexcol" style="grid-row: 2 / 3; grid-column: 4 / 5;">
                <label for="">{localize("autoanimations.menus.scale")} Y</label>
                <input
                    type="number"
                    bind:value={$animation.primary.options.scaleY}
                    placeholder="1"
                    step="0.01"
                />
            </div>
            <!--Set Animation Opacity-->
            <div class="flexcol" style="grid-row: 3 / 4; grid-column: 2 / 3;">
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
            <div class="flexcol" style="grid-row: 3 /4; grid-column: 3 / 4;">
                <label for="">{localize("autoanimations.menus.z-index")}</label>
                <input
                    type="number"
                    bind:value={$animation.primary.options.zIndex}
                    placeholder="1"
                    step="1"
                />
            </div>
        </div>
        <!--Persistent Options-->
        <div
            class="aa-options {$animation.primary.options.persistent
                ? ''
                : 'aa-disableOpacity'}"
            style="justify-items:center"
        >
            <!--Choose Persistent Type-->
            <div class="flexcol" style="grid-row: 1 / 3;grid-column: 1 / 3">
                <label for=""
                    >{localize("autoanimations.menus.persistant")}
                    {localize("autoanimations.menus.type")}</label
                >
                <select
                    bind:value={$animation.primary.options.persistType}
                    style="text-align: center;align-self: center;margin-right:15%; margin-left:15%; width: 15em"
                >
                    {#if currentType === "circle" || currentType === "square"}
                        <option value="overheadtile"
                            >{localize(
                                "autoanimations.menus.overheadtile"
                            )}</option
                        >
                        <option value="groundtile"
                            >{localize(
                                "autoanimations.menus.groundtile"
                            )}</option
                        >
                    {/if}
                    <option value="sequencerground"
                        >{localize(
                            "autoanimations.menus.sequencereffect"
                        )}</option
                    >
                    <option value="attachtemplate"
                        >{localize(
                            "autoanimations.menus.attachtotemplate"
                        )}</option
                    >
                </select>
            </div>
            <!--Set Occlusion Mode-->
            <div
                class="flexcol {$animation.primary.options.persistType ===
                'overheadtile'
                    ? ''
                    : 'aa-disableOpacity'}"
                style="grid-row: 1 / 2;grid-column: 3 / 5;"
            >
                <label for=""
                    >{localize("autoanimations.menus.occlusionMode")}</label
                >
                <select
                    bind:value={$animation.primary.options.occlusionMode}
                    style="text-align: center;align-self: center;width: 15em"
                >
                    <option value="3"
                        >{localize("autoanimations.menus.occlusion03")}</option
                    >
                    <option value="1"
                        >{localize("autoanimations.menus.occlusion01")}</option
                    >
                    <option value="2"
                        >{localize("autoanimations.menus.occlusion02")}</option
                    >
                    <option value="0"
                        >{localize("autoanimations.menus.occlusion00")}</option
                    >
                </select>
            </div>
            <!--Set Occlusion Alpha-->
            <div
                class="flexcol {$animation.primary.options.persistType ===
                'overheadtile'
                    ? ''
                    : 'aa-disableOpacity'}"
                style="grid-row: 2 / 3; grid-column: 3 / 5;"
            >
                <label for=""
                    >{localize("autoanimations.menus.occlusionAlpha")}</label
                >
                <div class="form-group">
                    <input
                        type="number"
                        style="font-weight: normal;background:rgb(191 187 182);font-size:14px;height:1.5em;max-width: 3.5em;font-family: Signika, sans-serif;"
                        bind:value={$animation.primary.options.occlusionAlpha}
                        placeholder="1"
                        min="0"
                        max="1"
                        step="0.01"
                    />
                    <input
                        type="range"
                        style="background:none;border:none"
                        min="0"
                        max="1"
                        step="0.01"
                        bind:value={$animation.primary.options.occlusionAlpha}
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
    .aa-disableOpacity {
        pointer-events: none;
        opacity: 0.4;
    }
</style>
