<script>
    import { localize } from "@typhonjs-fvtt/runtime/svelte/helper";

    import { TJSSvgFolder } from "@typhonjs-fvtt/svelte-standard/component";

    import NumberInput from "./inputComponents/NumberInput.svelte";
    import ScaleRadius from "./inputComponents/ScaleRadius.svelte";
    import Opacity from "./inputComponents/Opacity.svelte";

    export let animation;

    const folder = {
        styles: {
            "--tjs-summary-font-family":
                '"Modesto Condensed", "Palatino Linotype", serif',
            "--tjs-summary-font-size": "1.1em",
            "--tjs-summary-chevron-size": "0.7em",
        },
        label: game.i18n.localize("autoanimations.menus.options"),
    };

    $: persistent = $animation.target.options.persistent;
    $: isRadius = $animation.target.options.isRadius;
</script>

<div class="aa-options-border">
    <TJSSvgFolder {folder}>
        <table class="d">
            <tr>
                <td>
                    <!--Set Elevation of Animation-->
                    <NumberInput
                    {animation}
                    label={localize("autoanimations.menus.elevation")}
                    section="target"
                    field="elevation"
                    placeholder=1000
                    />
                </td>
                <td>
                    <!--Set Number of times the animation plays-->
                    <NumberInput
                        {animation}
                        label={localize("autoanimations.menus.repeat")}
                        section="target"
                        field="repeat"
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
                        section="target"
                        field="repeatDelay"
                        placeholder="250"
                        isDisabled={persistent ? "aa-disableOpacity" : ""}
                    />
                </td>
            </tr>
            <tr>
                <td>
                    <!--Set OnlyX-->
                    <div class="form-group">
                        <label for="TPersist {animation._data.id}"
                            >{localize("autoanimations.menus.persistant")}
                        </label>
                        <input
                            type="checkbox"
                            id="TPersist {animation._data.id}"
                            bind:checked={$animation.target.options.persistent}
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
                        <label for="TVis {animation._data.id}"
                            >{localize("autoanimations.menus.bind")}
                            {localize("autoanimations.menus.visibility")}
                        </label>
                        <input
                            type="checkbox"
                            id="TVis {animation._data.id}"
                            bind:checked={$animation.target.options
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
                        <label for="TAlpha {animation._data.id}"
                            >{localize("autoanimations.menus.bind")}
                            {localize("autoanimations.menus.alpha")}
                        </label>
                        <input
                            type="checkbox"
                            id="TAlpha {animation._data.id}"
                            bind:checked={$animation.target.options.unbindAlpha}
                        />
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <!--Set Masking-->
                    <div class="form-group">
                        <label for="SMasked {animation._data.id}"
                            >{localize("autoanimations.menus.mask")}
                        </label>
                        <input
                            type="checkbox"
                            id="SMasked {animation._data.id}"
                            bind:checked={$animation.target.options.isMasked}
                        />
                    </div>
                </td>
                <td>
                    <!--Set Animation Opacity-->
                    <Opacity {animation} />
                </td>
                <td>
                    <!--Set the Z-Index of the Animation-->
                    <NumberInput
                        {animation}
                        label={localize("autoanimations.menus.z-index")}
                        section="target"
                        field="zIndex"
                    />
                </td>
            </tr>
            <tr>
                <td>
                    <!--Set Size of Animation-->
                    <ScaleRadius
                        {animation}
                        section="target"
                        field="size"
                        step="0.01"
                    />
                </td>
                <td>
                    <!--Add Token Width-->
                    <div class="form-group {isRadius ? "" : "aa-disableOpacity"}">
                        <label for="TWidth {animation._data.id}"
                            >{localize("autoanimations.menus.add")}
                            {localize("autoanimations.menus.token")}
                            {localize("autoanimations.menus.width")}
                        </label>
                        <input
                            type="checkbox"
                            id="TWidth {animation._data.id}"
                            bind:checked={$animation.target.options.addTokenWidth}
                        />
                    </div>
                </td>
                <td>
                    <NumberInput
                    {animation}
                    label={localize("autoanimations.menus.fadeIn")}
                    section="target"
                    field="fadeIn"
                    placeholder=250
                    />
                </td>
            </tr>
            <tr>
                <td>
                    <NumberInput
                    {animation}
                    label={localize("autoanimations.menus.fadeOut")}
                    section="target"
                    field="fadeOut"
                    placeholder=500
                    />
                </td>
                <td>
                    <!--Set Delay for proceeding animation-->
                    <NumberInput
                        {animation}
                        label={localize("autoanimations.menus.delay")}
                        section="target"
                        field="delay"
                    />
                </td>
                <td></td>
            </tr>
        </table>
    </TJSSvgFolder>
</div>

<style lang="scss">
</style>
