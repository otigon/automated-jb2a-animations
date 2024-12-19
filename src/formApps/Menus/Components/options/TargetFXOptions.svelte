<script>
    import { getContext }       from "svelte";

    import { localize }         from "#runtime/util/i18n";

    import { TJSIconButton }    from "#standard/component/button";
    import { TJSSvgFolder }     from "#standard/component/folder";

    import NumberInput          from "./inputComponents/NumberInput.svelte";
    import Elevation            from "./inputComponents/Elevation.svelte";
    import ScaleRadius          from "./inputComponents/ScaleRadius.svelte";
    import Opacity              from "./inputComponents/Opacity.svelte";
    import OptionsDialog        from "./optionsInfoDialog.js";

    //export let animation;
    let { animation} = getContext('animation-data');

    const folder = {
        styles: {
            "--tjs-summary-font-family":
                '"Modesto Condensed", "Palatino Linotype", serif',
            "--tjs-summary-font-size": "1.1em",
            "--tjs-summary-chevron-size": "0.7em",
        },
        label: game.i18n.localize("autoanimations.menus.options"),
    };

    const optionsInfo = {
        icon: "fas fa-info-circle",
        title: "autoanimations.menus.quickReference",
        styles: {
            "--tjs-icon-button-diameter": "1em",
            position: "relative",
            left: "10px",
            bottom: "-2px",
            color: "rgba(50, 79, 245, 0.5)"
        },
        clickPropagate: false
    }

    $: persistent = $animation.target.options.persistent;
    $: isRadius = $animation.target.options.isRadius;
</script>

<div class="aa-options-border">
    <TJSSvgFolder {folder}>
        <div slot="summary-end">
            <TJSIconButton button={optionsInfo} on:click={() => OptionsDialog.show("ontoken")}/>
        </div>
        <table class="d">
            <tr>
                <td>
                    <!--Set Elevation of Animation-->
                    <Elevation {animation} section="target" />
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
                    <div>
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
                        class="{persistent
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
                        class="{persistent
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
                    <div>
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
                    <Opacity {animation} section="target"/>
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
                    <div class="{isRadius ? "" : "aa-disableOpacity"}">
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
                    <div>
                        <label for="">{localize("autoanimations.menus.anchor")}</label>
                    </div>
                    <div>
                        <input type="text" placeholder="0.5" bind:value={$animation.target.options.anchor}>
                    </div>
                </td>
                <td>
                    <!--Set Masking-->
                    <div>
                        <label for="TarRotate {animation._data.id}"
                            >{localize('autoanimations.menus.sideImpact')}
                        </label>
                        <input
                            type="checkbox"
                            id="TarRotate {animation._data.id}"
                            bind:checked={$animation.target.options.rotateSource}
                        />
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <NumberInput
                    {animation}
                    label={localize("autoanimations.menus.playbackRate")}
                    section="target"
                    field="playbackRate"
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
