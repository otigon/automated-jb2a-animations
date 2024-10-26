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
    import WaitDelay            from "./inputComponents/WaitDelay.svelte";

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
            "--tjs-icon-button-diameter": "1.em",
            position: "relative",
            left: "10px",
            bottom: "-2px",
            color: "rgba(50, 79, 245, 0.5)"
        },
        clickPropagate: false
    }

    $: persistent = $animation.primary.options.persistent;
    $: isRadius = $animation.primary.options.isRadius;
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
                    <Elevation {animation} section="primary" />
                </td>
                <td>
                    <!--Set Number of times the animation plays-->
                    <NumberInput
                        {animation}
                        label={localize("autoanimations.menus.repeat")}
                        section="primary"
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
                        section="primary"
                        field="repeatDelay"
                        isDisabled={persistent ? "aa-disableOpacity" : ""}
                    />
                </td>
            </tr>
            <tr>
                <td>
                    <!--Set Persistence-->
                        <label for="Persist {animation._data.id}"
                            >{localize("autoanimations.menus.persistant")}
                        </label>
                        <input
                            type="checkbox"
                            id="Persist {animation._data.id}"
                            bind:checked={$animation.primary.options.persistent}
                        />
                </td>
                <td>
                    <!--Set Visibility Binding-->
                    <div
                        class="{persistent
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
                        class="{persistent
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
                    <div>
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
                    <!--Set Z-Index of Animation-->
                    <NumberInput
                        {animation}
                        label={localize("autoanimations.menus.z-index")}
                        section="primary"
                        field="zIndex"
                    />
                </td>
            </tr>
            <tr>
                <td>
                    <!--Set Size of Animation-->
                    <ScaleRadius
                        {animation}
                        section="primary"
                        field="size"
                        step="0.01"
                    />
                </td>
                <td>
                    <!--Add Token Width-->
                    <div class="{isRadius ? "" : "aa-disableOpacity"}">
                        <label for="Width {animation._data.id}"
                            >{localize("autoanimations.menus.add")}
                            {localize("autoanimations.menus.token")}
                            {localize("autoanimations.menus.width")}
                        </label>
                        <input
                            type="checkbox"
                            id="Width {animation._data.id}"
                            bind:checked={$animation.primary.options.addTokenWidth}
                        />
                    </div>
                </td>
                <td>
                    <NumberInput
                    {animation}
                    label={localize("autoanimations.menus.fadeIn")}
                    section="primary"
                    field="fadeIn"
                    placeholder=250
                    step="0.01"
                    />
                </td>
            </tr>
            <tr>
                <td>
                    <NumberInput
                    {animation}
                    label={localize("autoanimations.menus.fadeOut")}
                    section="primary"
                    field="fadeOut"
                    placeholder=500
                    step="0.01"
                    />
                </td>
                <td>
                    <div>
                        <label for="">{localize("autoanimations.menus.anchor")}</label>
                    </div>
                    <div>
                        <input type="text" placeholder="0.5" bind:value={$animation.primary.options.anchor}>
                    </div>
                </td>
                <td>
                    <!--Choose how to play the animation-->
                    <div>
                        <div>
                            <label for="">{localize("autoanimations.menus.playOn")}</label>
                        </div>
                        <div>
                            <select
                                bind:value={$animation.primary.options.playOn}
                                style="width:90%; height: 1em"
                            >
                                <option value="source"
                                >{localize("autoanimations.menus.source")}</option
                                >
                                <option value="target"
                                    >{localize("autoanimations.menus.target")}</option
                                >
                                <option value="default"
                                    >{localize(
                                        "autoanimations.menus.targetDefault"
                                    )}</option
                                >
                                <option value="both"
                                    >{localize("autoanimations.menus.both")}</option
                                >
                            </select>
                        </div>
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <NumberInput
                    {animation}
                    label={localize("autoanimations.menus.playbackRate")}
                    section="primary"
                    field="playbackRate"
                    />
                </td>
                <td>
                    <WaitDelay {animation}/>
                </td>
                <td></td>
            </tr>
        </table>
    </TJSSvgFolder>
</div>

<style lang="scss">
</style>
