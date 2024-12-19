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

    $: isRadius = $animation.source.options.isRadius;
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
                    <Elevation {animation} section="source" />
                </td>
                <td>
                    <!--Set Number of times the animation plays-->
                    <NumberInput
                        {animation}
                        label={localize("autoanimations.menus.repeat")}
                        section="source"
                        field="repeat"
                    />
                </td>
                <td>
                    <!--Set delay between repeats-->
                    <NumberInput
                        {animation}
                        label={localize("autoanimations.menus.repeat") +
                            " " +
                            localize("autoanimations.menus.delay")}
                        section="source"
                        field="repeatDelay"
                        placeholder="250"
                    />
                </td>
            </tr>
            <tr>
                <td>
                    <!--Set OnlyX-->
                    <div>
                        <label for="SMasked {animation._data.id}"
                            >{localize("autoanimations.menus.mask")}
                            <input
                                type="checkbox"
                                id="SMasked {animation._data.id}"
                                bind:checked={$animation.source.options
                                    .isMasked}
                            />
                        </label>
                    </div>
                </td>
                <td>
                    <!--Set Animation Opacity-->
                    <Opacity {animation} section="source" />
                </td>
                <td>
                    <!--Set the Z-Index of the Animation-->
                    <NumberInput
                        {animation}
                        label={localize("autoanimations.menus.z-index")}
                        section="source"
                        field="zIndex"
                    />
                </td>
            </tr>
            <tr>
                <td>
                    <!--Set Size of Animation-->
                    <ScaleRadius
                        {animation}
                        section="source"
                        field="size"
                        step="0.01"
                    />
                </td>
                <td>
                    <!--Add Token Width-->
                    <div class="{isRadius ? "" : "aa-disableOpacity"}">
                        <label for="SWidth {animation._data.id}"
                            >{localize("autoanimations.menus.add")}
                            {localize("autoanimations.menus.token")}
                            {localize("autoanimations.menus.width")}
                        </label>
                        <input
                            type="checkbox"
                            id="SWidth {animation._data.id}"
                            bind:checked={$animation.source.options.addTokenWidth}
                        />
                    </div>
                </td>
                <td>
                    <div>
                        <label for="">{localize("autoanimations.menus.anchor")}</label>
                    </div>
                    <div>
                        <input type="text" placeholder="0.5" bind:value={$animation.source.options.anchor}>
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <NumberInput
                    {animation}
                    label={localize("autoanimations.menus.fadeIn")}
                    section="source"
                    field="fadeIn"
                    placeholder=250
                />
                </td>
                <td>
                    <NumberInput
                    {animation}
                    label={localize("autoanimations.menus.playbackRate")}
                    section="source"
                    field="playbackRate"
                    />
                </td>
                <td>
                    <NumberInput
                    {animation}
                    label={localize("autoanimations.menus.fadeOut")}
                    section="source"
                    field="fadeOut"
                    placeholder=500
                    />
                </td>
            </tr>
            <tr>
                <td>
                    <!--Set Persistence-->
                    <div>
                        <label for="Persist {animation._data.id}"
                            >{localize("autoanimations.menus.persistant")}
                            <input
                                type="checkbox"
                                id="Persist {animation._data.id}"
                                bind:checked={$animation.source.options.persistent}
                            />
                        </label>
                    </div>
                </td>
                <td>
                    <!--Set Delay for proceeding animation-->
                    <WaitDelay
                        {animation}
                        section="source"
                    />
                </td>
                <td></td>
            </tr>
        </table>
    </TJSSvgFolder>
</div>

<style lang="scss">
</style>
