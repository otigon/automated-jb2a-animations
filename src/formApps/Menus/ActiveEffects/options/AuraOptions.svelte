<script>
    import { getContext }       from "svelte";

    import { localize }         from "#runtime/util/i18n";

    import { TJSIconButton }    from "#standard/component/button";
    import { TJSSvgFolder }     from "#standard/component/folder";

    import NumberInput          from "../../Components/options/inputComponents/NumberInput.svelte";
    import Elevation            from "../../Components/options/inputComponents/Elevation.svelte";
    import Opacity              from "../../Components/options/inputComponents/Opacity.svelte";
    import OptionsDialog        from "../../Components/options/optionsInfoDialog.js";
    import WaitDelay            from "../../Components/options/inputComponents/WaitDelay.svelte";

    //export let animation;
    let { animation } = getContext('animation-data');

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
       }
    };

    $: filterEnabled = $animation.primary.options.enableFilter;
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
                    <Elevation section="primary" />
                </td>
                <td>
                    <!--Set Visibility Binding-->
                    <div>
                        <label for="Vis {animation._data.id}"
                            >{localize("autoanimations.menus.bind") + " " + localize("autoanimations.menus.visibility")}
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
                            >{localize("autoanimations.menus.bind") + " " + localize("autoanimations.menus.alpha")}
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
                    <Opacity section="primary" />
                </td>
                <td>
                    <!--Set Z-Index-->
                    <NumberInput
                    label={localize("autoanimations.menus.z-index")}
                    section={"primary"}
                    field={"zIndex"}
                    step="1"
                />
                </td>
                <td>
                    <div>
                        <label for=""><strong>{localize("autoanimations.menus.playOn")}</strong></label>
                    </div>
                    <div>
                        <label for="">{localize("autoanimations.menus.source")}</label>
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <!--Set Radius of Animation-->
                    <NumberInput
                    label={localize("autoanimations.menus.radius")}
                    section={"primary"}
                    field={"size"}
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
                    label={localize("autoanimations.menus.fadeOut")}
                    section="primary"
                    field="fadeOut"
                    step="1"
                />
                </td>
                <td>
                    <WaitDelay section="primary"/>
                </td>
                <td>
                    <NumberInput
                    label={localize("autoanimations.menus.playbackRate")}
                    section="primary"
                    field="playbackRate"
                    />
                </td>
            </tr>
        </table>
    </TJSSvgFolder>
</div>
