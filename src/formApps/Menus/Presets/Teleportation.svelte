<script>
    import { localize } from "@typhonjs-fvtt/runtime/svelte/helper";
    import {
        TJSSvgFolder,
        TJSIconButton,
    } from "@typhonjs-fvtt/svelte-standard/component";

    import SectionHeader from "../Components/SectionHeader.svelte";
    import VideoSelect from "../Components/VideoSelect.svelte";
    import Opacity from "./inputComponents/Opacity.svelte";
    import OptionsDialog from "../Components/options/optionsInfoDialog.js";
    import ScaleRadius from "./inputComponents/ScaleRadius.svelte";

    export let animation;
    export let category;
    export let idx;

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
            color: "rgba(50, 79, 245, 0.5)",
        },
    };

    const styling = {
        "--tjs-summary-font-family":
                '"Modesto Condensed", "Palatino Linotype", serif',
            "--tjs-summary-font-size": "1.1em",
            "--tjs-summary-chevron-size": "0.7em",
    }
    const betweenFolder = {
        styles: styling,
        label:
            game.i18n.localize("autoanimations.menus.between") +
            " " +
            game.i18n.localize("autoanimations.menus.animation"),
    };

    const startFolder = {
        styles: styling,
        label:
            game.i18n.localize("autoanimations.menus.start") +
            " " +
            game.i18n.localize("autoanimations.menus.animation"),
    };

    const endFolder = {
        styles: styling,
        label:
            game.i18n.localize("autoanimations.menus.end") +
            " " +
            game.i18n.localize("autoanimations.menus.animation"),
    };

    const isGM = game.user.isGM;

</script>

<div class="aa-options-border" style="padding-left: 1em; padding-right: 1em">
    <SectionHeader title={localize('autoanimations.menus.movement') + " " + localize('autoanimations.menus.options')} />
    <i 
        class="fas fa-info-circle aa-blue"
        style="position:relative; bottom: 30px; left: 30px; font-size: 1.2em"
        on:click={() => OptionsDialog.show("preset", "teleportation")}
    ></i>
    <table class="d">
        <tr>
            <td>
                <div>
                    <label for="">Range Marker</label>
                </div>
                <div class="flexcol">
                    <select
                        bind:value={$animation.data.options.measureType}
                        style="width: 95%; align-self: center"
                    >
                        <option value="alternating"
                            >{localize(
                                "autoanimations.menuTypes.circle"
                            )}</option
                        >
                        <option value="equidistant"
                            >{localize(
                                "autoanimations.menuTypes.square"
                            )}</option
                        >
                    </select>
                </div>
            </td>
            <td class={isGM ? "" : "aa-disableOpacity"}>
                <div>
                    <label for="Hide {animation._data.id}"
                        >{localize('autoanimations.menus.hideBorder')}</label
                    >
                </div>
                <div>
                    <input
                        type="checkbox"
                        id="Hide {animation._data.id}"
                        bind:checked={$animation.data.options.hideFromPlayers}
                    />
                </div>
            </td>
            <td>
                <div>
                    <label for="">{localize('autoanimations.menus.ranged')}</label>
                </div>
                <div>
                    <input
                        type="number"
                        bind:value={$animation.data.options.range}
                        placeholder="30"
                        step=".01"
                    />
                </div>
            </td>
        </tr>
        <tr>
            <td>
                <div>
                    <label for="Hide {animation._data.id}">{localize('autoanimations.menus.teleport')} {localize('autoanimations.menus.token')}</label>
                </div>
                <div>
                    <input
                        type="checkbox"
                        id="Hide {animation._data.id}"
                        bind:checked={$animation.data.options.teleport}
                    />
                </div>
            </td>
            <td>
                <div>
                    <label for="">Delay Movement</label>
                </div>
                <div>
                    <input
                        type="number"
                        bind:value={$animation.data.options.delayMove}
                        placeholder="30"
                        step=".01"
                    />
                </div>
            </td>
            <td
                class={$animation.data.options.teleport
                    ? "aa-disableOpacity"
                    : ""}
            >
                <div>
                    <label for="">{localize('autoanimations.menus.speed')}</label>
                </div>
                <div>
                    <input
                        type="number"
                        bind:value={$animation.data.options.speed}
                        placeholder="30"
                        step=".01"
                    />
                </div>
            </td>
        </tr>
        <tr>
            <td>
                <div class="flexcol">
                    <label for="">{localize("autoanimations.menus.token") + " " + localize("autoanimations.menus.alpha")}</label
                    >
                    <div
                        class="form-group"
                        style="display: flex; margin-right: 1.5em; margin-left: 1.5em;"
                    >
                        <input
                            type="number"
                            bind:value={$animation.data.options.alpha}
                            placeholder="1"
                            min="0"
                            max="1"
                            step="0.01"
                        />
                        <input
                            style="border:none; background:none;margin-left: 3px;"
                            type="range"
                            min="0"
                            max="1"
                            step="0.01"
                            bind:value={$animation.data.options.alpha}
                        />
                    </div>
                </div>                
            </td>
            <td>
                <div>
                    <label for=""
                        >{localize('autoanimations.menus.delay')} {localize('autoanimations.menus.fadeOut')}</label
                    >
                </div>
                <div>
                    <input
                        type="number"
                        bind:value={$animation.data.options.delayFade}
                        placeholder="1"
                        step="1"
                    />
                </div>
            </td>
            <td>
                <div>
                    <label for="">{localize('autoanimations.menus.delay')} {localize('autoanimations.menus.fadeIn')}</label>
                </div>
                <div>
                    <input
                        type="number"
                        bind:value={$animation.data.options.delayReturn}
                        placeholder="1"
                        step="1"
                    />
                </div>
            </td>
        </tr>
    </table>
</div>
<div class="aa-section-border">
    <TJSSvgFolder folder={startFolder}>
        <div slot="summary-end">
            <input
                type="checkbox"
                style="align-self:center"
                title="Toggle Source FX On/Off"
                bind:checked={$animation.data.start.enable}
            />
        </div>
    <VideoSelect
        {animation}
        {category}
        title="Start Animation"
        {idx}
        section="data"
        section02="start"
    />
    <div class="aa-options-border">
        <TJSSvgFolder {folder}>
            <table class="d">
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
                                bind:checked={$animation.data.start.options
                                    .isMasked}
                            />
                        </div>
                    </td>
                    <td>
                        <div>
                            <label for=""
                                >{localize(
                                    "autoanimations.menus.elevation"
                                )}</label
                            >
                        </div>
                        <div>
                            <input
                                type="number"
                                bind:value={$animation.data.start.options
                                    .elevation}
                                placeholder="1"
                                step="1"
                            />
                        </div>
                    </td>
                    <td>
                        <!--Set Size of Animation-->
                        <ScaleRadius
                            {animation}
                            section={"start"}
                            field={"size"}
                            step="0.01"
                        />
                    </td>
                </tr>
                <tr>
                    <td>
                        <!--Set Animation Opacity-->
                        <Opacity {animation} section="start" />
                    </td>
                    <td>
                        <div>
                            <label for=""
                                >{localize("autoanimations.menus.fadeIn")}</label
                            >
                        </div>
                        <div>
                            <input
                                type="number"
                                bind:value={$animation.data.start.options.fadeIn}
                                placeholder="1"
                                step="1"
                            />
                        </div>
                    </td>
                    <td>
                        <div>
                            <label for="">{localize("autoanimations.menus.fadeOut")}</label
                            >
                        </div>
                        <div>
                            <input
                                type="number"
                                bind:value={$animation.data.start.options.fadeOut}
                                placeholder="1"
                                step="1"
                            />
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>

                    </td>
                    <td>
                        <div>
                            <label for=""
                                >{localize("autoanimations.menus.delay")}</label
                            >
                        </div>
                        <div>
                            <input
                                type="number"
                                bind:value={$animation.data.start.options.delay}
                                placeholder="250"
                                step="1"
                            />
                        </div>
                    </td>
                    <td>

                    </td>
                </tr>
            </table>
        </TJSSvgFolder>
    </div>
    </TJSSvgFolder>
</div>
<div class="aa-section-border">
    <TJSSvgFolder folder={betweenFolder}>
        <div slot="summary-end">
            <input
                type="checkbox"
                style="align-self:center"
                title="Toggle Source FX On/Off"
                bind:checked={$animation.data.between.enable}
            />
        </div>
        <VideoSelect
            {animation}
            {category}
            title={localize('autoanimations.menus.between') + " " + localize('autoanimations.menus.animation')}
            {idx}
            section="data"
            section02="between"
        />
        <div class="aa-options-border">
            <TJSSvgFolder {folder}>
                <table class="d">
                    <tr>
                        <td>
                            <div>
                                <label for=""
                                    >{localize(
                                        "autoanimations.menus.elevation"
                                    )}</label
                                >
                            </div>
                            <div>
                                <input
                                    type="number"
                                    bind:value={$animation.data.between.options.elevation}
                                    placeholder="1"
                                    step="1"
                                />
                            </div>
                        </td>
                        <td>
                            <div>
                                <label for=""
                                    >{localize(
                                        "autoanimations.menus.playbackRate"
                                    )}</label
                                >
                            </div>
                            <div>
                                <input
                                    type="number"
                                    bind:value={$animation.data.between.options.playbackRate}
                                    placeholder="1"
                                    step=".01"
                                />
                            </div>
                        </td>
                        <td>
                            <!--Set Animation Opacity-->
                            <Opacity {animation} section="between" />
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <div>
                                <label for=""
                                    >{localize("autoanimations.menus.delay")}</label
                                >
                            </div>
                            <div>
                                <input
                                    type="number"
                                    bind:value={$animation.data.between.options.delay}
                                    placeholder="250"
                                    step="1"
                                />
                            </div>
                        </td>    
                        <td></td>
                    </tr>
                </table>
            </TJSSvgFolder>
        </div>
    </TJSSvgFolder>
</div>
<div class="aa-section-border">
    <TJSSvgFolder folder={endFolder}>
        <div slot="summary-end">
            <input
                type="checkbox"
                style="align-self:center"
                title="Toggle Source FX On/Off"
                bind:checked={$animation.data.end.enable}
            />
        </div>
    <VideoSelect
        {animation}
        {category}
        title="End Animation"
        {idx}
        section="data"
        section02="end"
    />
    <div class="aa-options-border">
        <TJSSvgFolder {folder}>
            <table class="d">
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
                                bind:checked={$animation.data.end.options
                                    .isMasked}
                            />
                        </div>
                    </td>
                    <td>
                        <div>
                            <label for=""
                                >{localize(
                                    "autoanimations.menus.elevation"
                                )}</label
                            >
                        </div>
                        <div>
                            <input
                                type="number"
                                bind:value={$animation.data.end.options
                                    .elevation}
                                placeholder="1"
                                step="1"
                            />
                        </div>
                    </td>
                    <td>
                        <!--Set Size of Animation-->
                        <ScaleRadius
                            {animation}
                            section={"end"}
                            field={"size"}
                            step="0.01"
                        />
                    </td>
                </tr>
                <tr>
                    <td>
                        <!--Set Animation Opacity-->
                        <Opacity {animation} section="end" />
                    </td>
                    <td>
                        <div>
                            <label for=""
                                >{localize("autoanimations.menus.fadeIn")}</label
                            >
                        </div>
                        <div>
                            <input
                                type="number"
                                bind:value={$animation.data.end.options.fadeIn}
                                placeholder="1"
                                step="1"
                            />
                        </div>
                    </td>
                    <td>
                        <div>
                            <label for=""
                                >{localize("autoanimations.menus.fadeOut")}</label
                            >
                        </div>
                        <div>
                            <input
                                type="number"
                                bind:value={$animation.data.end.options.fadeOut}
                                placeholder="1"
                                step="1"
                            />
                        </div>
                    </td>    
                </tr>
                <tr>
                    <td>

                    </td>
                    <td>
                        <div>
                            <label for=""
                                >{localize("autoanimations.menus.delay")}</label
                            >
                        </div>
                        <div>
                            <input
                                type="number"
                                bind:value={$animation.data.end.options.delay}
                                placeholder="250"
                                step="1"
                            />
                        </div>
                    </td>
                    <td>

                    </td>
                </tr>
            </table>
        </TJSSvgFolder>
    </div>
    </TJSSvgFolder>
</div>

<style lang="scss">
</style>
