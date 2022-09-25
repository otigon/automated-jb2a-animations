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
                    <div class="form-group">
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
                    <div class="form-group">
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
                    <strong>{localize("autoanimations.menus.ignoreTargets")}</strong>
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
            </tr>
            <tr>
                <td>
                    <!--Set Animation Opacity-->
                    <Opacity {animation} section="primary" />
                </td>
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
                    <div class="form-group">
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
            </tr>
            <tr>
                <td></td>
                <td>
                    <WaitDelay {animation} section="primary"/>
                </td>
                <td></td>
            </tr>
        </table>
    </TJSSvgFolder>
</div>
