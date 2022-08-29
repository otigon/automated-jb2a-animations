<script>
    import { localize } from "@typhonjs-fvtt/runtime/svelte/helper";

    import { TJSSvgFolder } from "@typhonjs-fvtt/svelte-standard/component";

    import NumberInput from "./inputComponents/NumberInput.svelte";
    import Opacity from "./inputComponents/Opacity.svelte";

    export let animation;
    export let category;

    const folder = {
        styles: {
            "--tjs-summary-font-family":
                '"Modesto Condensed", "Palatino Linotype", serif',
            "--tjs-summary-font-size": "1.1em",
            "--tjs-summary-chevron-size": "0.7em",
        },
        label: game.i18n.localize("autoanimations.menus.options"),
    };

    $: persistent = $animation.primary.options.persistent;
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
                        <label for="Below {animation._data.id}"
                            >{localize("autoanimations.menus.below")}
                        </label>
                        <input
                            type="checkbox"
                            id="Below {animation._data.id}"
                            bind:checked={$animation.primary.options.below}
                        />
                    </div>
                </td>
                <td>
                    <!--Set Number of times the animation plays-->
                    <NumberInput
                        {animation}
                        label={localize("autoanimations.menus.repeat")}
                        section={"primary"}
                        field={"repeat"}
                        isDisabled={persistent ? "aa-disableOpacity" : ""}
                    />
                </td>
                <td>
                    <!--Set delay between repeats-->
                    <NumberInput
                        {animation}
                        label={localize("autoanimations.menus.repeat") +
                            " " +
                            localize("autoanimations.menus.delay")}
                        section={"primary"}
                        field={"delay"}
                        isDisabled={persistent ? "aa-disableOpacity" : ""}
                    />
                </td>
            </tr>
            <tr>
                <td>
                    <!--Set Persistence-->
                    <div class="form-group">
                        <label for="Persist {animation._data.id}"
                            >{localize("autoanimations.menus.persistant")}
                        </label>
                        <input
                            type="checkbox"
                            id="Persist {animation._data.id}"
                            bind:checked={$animation.primary.options.persistent}
                        />
                    </div>
                </td>
                <td>
                    <!--Set Visibility Binding-->
                    <div
                        class="form-group {persistent
                            ? ''
                            : 'aa-disableOpacity'}"
                    >
                        <label for="Vis {animation._data.id}"
                            >{localize("autoanimations.menus.bind")}
                            {localize("autoanimations.menus.visibility")}
                        </label>
                        <input
                            type="checkbox"
                            id="Vis {animation._data.id}"
                            bind:checked={$animation.primary.options
                                .unbindVisibility}
                        />
                    </div>
                </td>
                <td>
                    <!--Set Alpha Binding-->
                    <div
                        class="form-group {persistent
                            ? ''
                            : 'aa-disableOpacity'}"
                    >
                        <label for="Alpha {animation._data.id}"
                            >{localize("autoanimations.menus.bind")}
                            {localize("autoanimations.menus.alpha")}
                        </label>
                        <input
                            type="checkbox"
                            id="Alpha {animation._data.id}"
                            bind:checked={$animation.primary.options
                                .unbindAlpha}
                        />
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <!--Set Masking-->
                    <div class="form-group">
                        <label for="Masked {animation._data.id}"
                            >{localize("autoanimations.menus.mask")}
                        </label>
                        <input
                            type="checkbox"
                            id="Masked {animation._data.id}"
                            bind:checked={$animation.primary.options.isMasked}
                        />
                    </div>
                </td>
                <td>
                    <!--Set Animation Opacity-->
                    <Opacity {animation} />
                </td>
                <td>
                    <!--Set Scale of Animation. Not rendered if Anim Type is Templates-->
                    <NumberInput
                        {animation}
                        label={localize("autoanimations.menus.scale")}
                        section={"primary"}
                        field={"scale"}
                        step="0.01"
                    />
                </td>
            </tr>
            <tr>
                <td>
                    <!--Set Z-Index of Animation-->
                    <NumberInput
                        {animation}
                        label={localize("autoanimations.menus.z-index")}
                        section={"primary"}
                        field={"zIndex"}
                    />
                </td>
                <td>
                    <NumberInput
                    {animation}
                    label={localize("autoanimations.menus.wait")}
                    section={"primary"}
                    field={"wait"}
                    step="0.01"
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
