<script>
    import { getContext }       from "svelte";

    import { localize }         from "#runtime/util/i18n";

    import { TJSIconButton }    from "#standard/component/button";
    import { TJSSvgFolder }     from "#standard/component/folder";

    import NumberInput          from "./inputComponents/NumberInput.svelte";
    import Elevation            from "./inputComponents/Elevation.svelte";
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

</script>

<div class="aa-options-border">
    <TJSSvgFolder {folder}>
        <div slot="summary-end">
            <TJSIconButton button={optionsInfo} on:click={() => OptionsDialog.show("aura")}/>
        </div>
        <table class="d">
            <tr>
                <td>
                    <!--Set Elevation of Animation-->
                    <Elevation {animation} section="primary" />
                </td>
                <td>
                    <!--Set Visibility Binding-->
                    <div>
                        <label for="Vis {animation._data.id}"
                            >{localize("autoanimations.menus.bind")} {localize("autoanimations.menus.visibility")}
                        </label>
                        <input
                            type="checkbox"
                            id="Vis {animation._data.id}"
                            bind:checked={$animation.primary.options.unbindVisibility}
                        />
                    </div>
                </td>
                <td>
                    <!--Set Alpha Binding-->
                    <div>
                        <label for="Alpha {animation._data.id}"
                            >{localize("autoanimations.menus.bind")} {localize("autoanimations.menus.alpha")}
                        </label>
                        <input
                            type="checkbox"
                            id="Alpha {animation._data.id}"
                            bind:checked={$animation.primary.options.unbindAlpha}
                        />
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <!--Set Animation Opacity-->
                    <Opacity {animation} />
                </td>
                <td>
                    <!--Set Z-Index-->
                    <NumberInput
                    {animation}
                    label={localize("autoanimations.menus.z-index")}
                    section="primary"
                    field="zIndex"
                    step="1"
                />
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
                    <!--Set Radius of Animation-->
                    <NumberInput
                    {animation}
                    label={localize("autoanimations.menus.radius")}
                    section="primary"
                    field="size"
                    step="0.01"
                />
                </td>
                <td>
                    <!--Add Token Width-->
                    <div>
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
                    <!--Set Fade In time-->
                    <NumberInput
                    {animation}
                    label={localize("autoanimations.menus.fadeIn")}
                    section="primary"
                    field="fadeIn"
                    step="1"
                />
                </td>
            </tr>
            <tr>
                <td>
                    <!--Set Fade Out time-->
                    <NumberInput
                    {animation}
                    label={localize("autoanimations.menus.fadeOut")}
                    section="primary"
                    field="fadeOut"
                    step="1"
                />
                </td>
                <td>
                    <WaitDelay {animation}/>
                </td>
                <td>
                    <NumberInput
                    {animation}
                    label={localize("autoanimations.menus.playbackRate")}
                    section="primary"
                    field="playbackRate"
                    />
                </td>
            </tr>
        </table>
    </TJSSvgFolder>
</div>

<style lang="scss">
</style>
