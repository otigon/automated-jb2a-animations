<script>
    import { localize } from "@typhonjs-fvtt/runtime/svelte/helper";

    import { TJSSvgFolder } from "@typhonjs-fvtt/svelte-standard/component";

    import NumberInput from "../../components/options/inputComponents/NumberInput.svelte";
    import Opacity from "../../components/options/inputComponents/Opacity.svelte";

    export let animation;
    export let category;

    const folder = {
        styles: {
            "--tjs-summary-font-family":
                '"Modesto Condensed", "Palatino Linotype", serif',
            "--tjs-summary-font-size": "1.2em",
            "--tjs-summary-chevron-size": "0.7em",
        },
        label: game.i18n.localize("autoanimations.menus.options"),
    };

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
                    <!--Set Elevation of Animation-->
                    <NumberInput
                    {animation}
                    label={localize("autoanimations.menus.elevation")}
                    section={"data"}
                    field={"elevation"}
                />
                </td>
                <td>
                    <!--Set Visibility Binding-->
                    <div class="form-group">
                        <label for="Vis {animation._data.id}"
                            >{localize("autoanimations.menus.visibility")}
                        </label>
                        <input
                            type="checkbox"
                            id="Vis {animation._data.id}"
                            bind:checked={$animation.data.options.unbindVisibility}
                        />
                    </div>
                </td>
                <td>
                    <!--Set Alpha Binding-->
                    <div class="form-group">
                        <label for="Alpha {animation._data.id}"
                            >{localize("autoanimations.menus.alpha")}
                        </label>
                        <input
                            type="checkbox"
                            id="Alpha {animation._data.id}"
                            bind:checked={$animation.data.options.unbindAlpha}
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
                            bind:checked={$animation.data.options.isMasked}
                        />
                    </div>
                </td>
                <td>
                    <!--Ignore Targets?-->
                    <div class="form-group">
                        <label for="Ignore {animation._data.id}"
                            >{localize("autoanimations.menus.ignoreTargets")}
                       </label>
                        <input
                            type="checkbox"
                            id="Ignore {animation._data.id}"
                            bind:checked={$animation.data.options.ignoreTarget}
                        />
                    </div>
                </td>
                <td>
                    <!--Set Z-Index-->
                    <NumberInput
                    {animation}
                    label={localize("autoanimations.menus.z-index")}
                    section={"data"}
                    field={"zIndex"}
                    step="1"
                />
                </td>
            </tr>
            <tr>
                <td>
                    <!--Set Animation Opacity-->
                    <Opacity {animation} section="data" />
                </td>
                <td>
                    <!--Set Radius of Animation-->
                    <NumberInput
                    {animation}
                    label={localize("autoanimations.menus.radius")}
                    section={"data"}
                    field={"radius"}
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
                            bind:checked={$animation.data.options.addTokenWidth}
                        />
                    </div>
                </td>
            </tr>
            <tr>
                <td></td>
                <td>
                    <NumberInput
                    {animation}
                    label={localize("autoanimations.menus.wait")}
                    section={"data"}
                    field={"wait"}
                    step="0.01"
                />
                </td>
                <td></td>
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
