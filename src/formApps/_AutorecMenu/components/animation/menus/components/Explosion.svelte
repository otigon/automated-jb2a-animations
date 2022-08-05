<script>
    import { localize } from "@typhonjs-fvtt/runtime/svelte/helper";
    import { TJSSvgFolder } from "@typhonjs-fvtt/svelte-standard/component";

    import SoundSettings from "./SoundSettings.svelte";
    import VideoSelect from "./VideoSelect.svelte";

    export let animation;

    $: maskLabel = $animation.explosion.options.isMasked
        ? game.i18n.localize("autoanimations.menus.enabled")
        : game.i18n.localize("autoanimations.menus.disabled");

    $: aboveBelow = $animation.explosion.options.below
        ? game.i18n.localize("autoanimations.menus.below")
        : game.i18n.localize("autoanimations.menus.above");

    const folderOptions = {
        styles: {
            "--tjs-summary-font-family":
                '"Modesto Condensed", "Palatino Linotype", serif',
            "--tjs-summary-font-size": "1.2em",
            "--tjs-summary-chevron-size": "0.7em",
        },
    };

    const optionsFolder = {
        styles: {
            "--tjs-summary-font-family":
                '"Modesto Condensed", "Palatino Linotype", serif',
            "--tjs-summary-font-size": "1.2em",
            "--tjs-summary-chevron-size": "0.7em",
        },
    };
</script>

<div class="aa-options-border">
    <TJSSvgFolder
        folder={folderOptions}
        label={`${localize("autoanimations.menus.explosion")} ${
            $animation.explosion.enable
                ? localize("autoanimations.menus.enabled")
                : localize("autoanimations.menus.disabled")
        }`}
    >
        <div slot="summary-end">
            <input
                type="checkbox"
                style="align-self:center"
                title="Toggle Explosion On/Off"
                bind:checked={$animation.explosion.enable}
            />
        </div>
        <div class={!$animation.explosion.enable ? "aa-isDisabled" : ""}>
            <VideoSelect {animation} section="explosion" />
            <div class="aa-options-border">
                <TJSSvgFolder
                    {optionsFolder}
                    label={localize("autoanimations.menus.options")}
                >
                    <div class="aa-options" style="justify-items:center">
                        <!--Set the Masking Boolean-->
                        <div
                            class="flexcol"
                            style="grid-row: 1 / 2; grid-column: 1 / 2;"
                        >
                            <label for=""
                                >{localize(
                                    "autoanimations.menus.masking"
                                )}</label
                            >
                            <label
                                for="ExMask {animation._data.id}"
                                class="aa-setDim">{maskLabel}</label
                            >
                            <input
                                type="checkbox"
                                id="ExMask {animation._data.id}"
                                hidden
                                bind:checked={$animation.explosion.options
                                    .isMasked}
                            />
                        </div>
                        <div
                            class="flexcol"
                            style="grid-row: 1 / 2; grid-column: 2 / 3;"
                        >
                            <label for=""
                                >{localize(
                                    "autoanimations.menus.radius"
                                )}</label
                            >
                            <input
                                type="number"
                                bind:value={$animation.explosion.options.radius}
                                placeholder="1.5"
                                step="0.01"
                            />
                        </div>
                        <div
                            class="flexcol"
                            style="grid-row: 1 / 2; grid-column: 3 / 4;"
                        >
                            <label for=""
                                >{localize("autoanimations.menus.delay")}</label
                            >
                            <input
                                type="number"
                                bind:value={$animation.explosion.options.delay}
                                placeholder="1"
                            />
                        </div>
                        <div
                            class="flexcol"
                            style="grid-row: 1 / 2; grid-column: 4 / 5;"
                        >
                            <label for=""
                                >{localize("autoanimations.menus.level")}</label
                            >
                            <label
                                for="ExBelow {animation._data.id}"
                                class="aa-setDim">{aboveBelow}</label
                            >
                            <input
                                type="checkbox"
                                id="ExBelow {animation._data.id}"
                                hidden
                                bind:checked={$animation.explosion.options
                                    .below}
                            />
                        </div>
                        <!--Set Animation Opacity-->
                        <div
                            class="flexcol"
                            style="grid-row: 2 / 3; grid-column: 2 / 3;"
                        >
                            <label for="aaOpacity"
                                >{localize(
                                    "autoanimations.menus.opacity"
                                )}</label
                            >
                            <div class="form-group">
                                <input
                                    style="font-weight: normal;background:rgb(191 187 182);font-size:14px;height:1.5em;max-width: 3.5em;font-family: Signika, sans-serif;"
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
                                    style="border:none; background:none; padding-top:0.75em"
                                    type="range"
                                    min="0"
                                    max="1"
                                    step="0.01"
                                    bind:value={$animation.explosion.options
                                        .opacity}
                                />
                            </div>
                        </div>
                        <!--Set Z-Index of Animation-->
                        <div>
                            <div
                                class="flexcol"
                                style="grid-row: 2 / 3; grid-column: 3 / 4;"
                            >
                                <label for=""
                                    >{localize(
                                        "autoanimations.menus.z-index"
                                    )}</label
                                >
                                <input
                                    type="number"
                                    bind:value={$animation.explosion.options
                                        .zIndex}
                                    placeholder="1"
                                    step="1"
                                />
                            </div>
                        </div>
                    </div>
                </TJSSvgFolder>
            </div>
            <SoundSettings {animation} section="explosion" />
        </div>
    </TJSSvgFolder>
</div>

<style lang="scss">
    .aa-isDisabled {
        pointer-events: none;
        opacity: 0.4;
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
