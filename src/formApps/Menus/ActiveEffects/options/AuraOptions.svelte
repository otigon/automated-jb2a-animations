<script>
    import { localize }     from "@typhonjs-fvtt/runtime/svelte/helper";

    import { TJSSvgFolder, TJSIconButton } from "@typhonjs-fvtt/svelte-standard/component";

    import NumberInput      from "../../Components/options/inputComponents/NumberInput.svelte";
    import Opacity          from "../../Components/options/inputComponents/Opacity.svelte";
    import OptionsDialog    from "../../Components/options/optionsInfoDialog.js";
    import WaitDelay        from "../../Components/options/inputComponents/WaitDelay.svelte";

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
                    <NumberInput
                    {animation}
                    label={localize("autoanimations.menus.elevation")}
                    section={"primary"}
                    field={"elevation"}
                />
                </td>
                <td>
                    <!--Set Visibility Binding-->
                    <div>
                        <label for="Vis {animation._data.id}"
                            >{localize("autoanimations.menus.unbind") + " " + localize("autoanimations.menus.visibility")}
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
                            >{localize("autoanimations.menus.unbind") + " " + localize("autoanimations.menus.alpha")}
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
                    <Opacity {animation} section="primary" />
                </td>
                <td>
                    <!--Set Z-Index-->
                    <NumberInput
                    {animation}
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
                    {animation}
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
                    <WaitDelay {animation} section="primary"/>
                </td>
                <td></td>
            </tr>
        </table>
    </TJSSvgFolder>
</div>
