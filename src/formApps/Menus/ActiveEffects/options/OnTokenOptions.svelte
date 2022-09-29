<script>
    import { localize } from "@typhonjs-fvtt/runtime/svelte/helper";

    import { TJSSvgFolder, TJSIconButton } from "@typhonjs-fvtt/svelte-standard/component";

    import NumberInput      from "../../Components/options/inputComponents/NumberInput.svelte";
    import ScaleRadius      from "../../Components/options/inputComponents/ScaleRadius.svelte";
    import Opacity          from "../../Components/options/inputComponents/Opacity.svelte";
    import OptionsDialog    from "../../Components/options/optionsInfoDialog.js";
    import WaitDelay        from "../../components/options/inputComponents/WaitDelay.svelte";

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

    $: persistent = $animation.primary.options.persistent;
    //$: isRadius = $animation.data.options.isRadius;

    const addWidth = game.i18n.localize("autoanimations.menus.add") + " " + game.i18n.localize("autoanimations.menus.token") + " " + game.i18n.localize("autoanimations.menus.width");

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
                    <NumberInput
                    {animation}
                    label={localize("autoanimations.menus.elevation")}
                    section={"primary"}
                    field={"elevation"}
                />
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
                            >{localize("autoanimations.menus.unbind")}
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
                            >{localize("autoanimations.menus.unbind")}
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
                    <Opacity {animation}/>
                </td>
                <td>
                    <!--Set Z-Index of Animation-->
                    <NumberInput
                        {animation}
                        label={localize("autoanimations.menus.z-index")}
                        section={"primary"}
                        field={"zIndex"}
                    />
                </td>
            </tr>
            <tr>
                <td>
                    <!--Set Scale of Animation. Not rendered if Anim Type is Templates-->
                    <ScaleRadius
                        {animation}
                        section={"primary"}
                        field={"size"}
                        step="0.01"
                    />
                </td>
                <td>
                    <!--Add Token Width-->
                    <div class="form-group {isRadius ? "" : "aa-disableOpacity"}">
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
                    <WaitDelay {animation} section="primary"/>
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
        </table>
    </TJSSvgFolder>
</div>
