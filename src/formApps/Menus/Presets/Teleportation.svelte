<script>
    import { getContext }   from "svelte";

    import { localize }     from "#runtime/util/i18n";

    import { TJSSvgFolder } from "#standard/component/folder";

    import VideoSelect      from "../Components/VideoSelect.svelte";
    import Opacity          from "./inputComponents/Opacity.svelte";
    import Elevation        from "./inputComponents/Elevation.svelte";
    import OptionsDialog    from "../Components/options/optionsInfoDialog.js";
    import ScaleRadius      from "./inputComponents/ScaleRadius.svelte";
    import SoundSettings    from "../Components/SoundSettings.svelte";


    //export let animation;
    //export let category;
    //export let idx;
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

    const styling = {
        "--tjs-summary-font-family":
            '"Modesto Condensed", "Palatino Linotype", serif',
        "--tjs-summary-font-size": "1.1em",
        "--tjs-summary-chevron-size": "0.7em",
    };
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
    <div class="aa-SectionHeader" style="text-align:center">
        <div>
            <label for=""
                >{localize("autoanimations.menus.movement") +
                    " " +
                    localize("autoanimations.menus.options")}</label
            >
            <i
                class="fas fa-info-circle aa-blue"
                style="font-size: 1.2em"
                title="Quick Reference"
                on:click={() => OptionsDialog.show("preset", "teleportation")}
                role=presentation
            />
        </div>
    </div>
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
                        >{localize("autoanimations.menus.hideBorder")}</label
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
                    <label for=""
                        >{localize("autoanimations.menus.ranged")}</label
                    >
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
                    <label for="Hide {animation._data.id}"
                        >{localize("autoanimations.menus.teleport")}
                        {localize("autoanimations.menus.token")}</label
                    >
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
                    <label for=""
                        >{localize("autoanimations.menus.speed")}</label
                    >
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
                    <label for=""
                        >{localize("autoanimations.menus.token") +
                            " " +
                            localize("autoanimations.menus.alpha")}</label
                    >
                    <div
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
                        >{localize("autoanimations.menus.delay")}
                        {localize("autoanimations.menus.fadeOut")}</label
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
                    <label for=""
                        >{localize("autoanimations.menus.delay")}
                        {localize("autoanimations.menus.fadeIn")}</label
                    >
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
        <tr>
            <td></td>
            <td>
                <div>
                    <label for="Collision {animation._data.id}"
                        >{localize("autoanimations.menus.checkCollision")}
                        </label
                    >
                </div>
                <div>
                    <input
                        type="checkbox"
                        id="Collision {animation._data.id}"
                        bind:checked={$animation.data.options.checkCollision}
                    />
                </div>
            </td>
            <td></td>
        </tr>
    </table>
</div>
<SoundSettings section="data" />
<div class="aa-section-border">
    <TJSSvgFolder folder={startFolder}>
        <div slot="summary-end">
            <input
                on:click|stopPropagation
                type="checkbox"
                style="align-self:center"
                title="Toggle Source FX On/Off"
                bind:checked={$animation.data.start.enable}
            />
        </div>
        <div class={$animation.data.start.enable ? "" : "aa-disableOpacity"}>
            <VideoSelect
                title="Start Animation"
                section="data"
                section02="start"
            />
            <div class="aa-options-border">
                <TJSSvgFolder {folder}>
                    <table class="d">
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
                                        bind:checked={$animation.data.start
                                            .options.isMasked}
                                    />
                                </div>
                            </td>
                            <td>
                                <Elevation section="start" />
                            </td>
                            <td>
                                <!--Set Size of Animation-->
                                <ScaleRadius
                                    section={"start"}
                                    field={"size"}
                                    step="0.01"
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <!--Set Animation Opacity-->
                                <Opacity section="start" />
                            </td>
                            <td>
                                <div>
                                    <label for=""
                                        >{localize(
                                            "autoanimations.menus.fadeIn"
                                        )}</label
                                    >
                                </div>
                                <div>
                                    <input
                                        type="number"
                                        bind:value={$animation.data.start
                                            .options.fadeIn}
                                        placeholder="1"
                                        step="1"
                                    />
                                </div>
                            </td>
                            <td>
                                <div>
                                    <label for=""
                                        >{localize(
                                            "autoanimations.menus.fadeOut"
                                        )}</label
                                    >
                                </div>
                                <div>
                                    <input
                                        type="number"
                                        bind:value={$animation.data.start
                                            .options.fadeOut}
                                        placeholder="1"
                                        step="1"
                                    />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div>
                                    <label for="">{localize("autoanimations.menus.playbackRate")}</label>
                                </div>
                                <div>
                                    <input
                                        type="number"
                                        bind:value={$animation.data.start.options.playbackRate}
                                        placeholder="1"
                                        step=".1"
                                    />
                                </div>
                            </td>
                            <td>
                                <div>
                                    <label for=""
                                        >{localize(
                                            "autoanimations.menus.delay"
                                        )}</label
                                    >
                                </div>
                                <div>
                                    <input
                                        type="number"
                                        bind:value={$animation.data.start
                                            .options.delay}
                                        placeholder="250"
                                        step="1"
                                    />
                                </div>
                            </td>
                            <td />
                        </tr>
                    </table>
                </TJSSvgFolder>
            </div>
        </div>
    </TJSSvgFolder>
</div>
<div class="aa-section-border">
    <TJSSvgFolder folder={betweenFolder}>
        <div slot="summary-end">
            <input
                on:click|stopPropagation
                type="checkbox"
                style="align-self:center"
                title="Toggle Source FX On/Off"
                bind:checked={$animation.data.between.enable}
            />
        </div>
        <div class={$animation.data.between.enable ? "" : "aa-disableOpacity"}>
            <VideoSelect
                title={localize("autoanimations.menus.between") +
                    " " +
                    localize("autoanimations.menus.animation")}
                section="data"
                section02="between"
            />
            <div class="aa-options-border">
                <TJSSvgFolder {folder}>
                    <table class="d">
                        <tr>
                            <td>
                                <Elevation section="between" />
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
                                        bind:value={$animation.data.between
                                            .options.playbackRate}
                                        placeholder="1"
                                        step=".01"
                                    />
                                </div>
                            </td>
                            <td>
                                <!--Set Animation Opacity-->
                                <Opacity section="between" />
                            </td>
                        </tr>
                        <tr>
                            <td />
                            <td>
                                <div>
                                    <label for=""
                                        >{localize(
                                            "autoanimations.menus.delay"
                                        )}</label
                                    >
                                </div>
                                <div>
                                    <input
                                        type="number"
                                        bind:value={$animation.data.between
                                            .options.delay}
                                        placeholder="250"
                                        step="1"
                                    />
                                </div>
                            </td>
                            <td />
                        </tr>
                    </table>
                </TJSSvgFolder>
            </div>
        </div>
    </TJSSvgFolder>
</div>
<div class="aa-section-border">
    <TJSSvgFolder folder={endFolder}>
        <div slot="summary-end">
            <input
                on:click|stopPropagation
                type="checkbox"
                style="align-self:center"
                title="Toggle Source FX On/Off"
                bind:checked={$animation.data.end.enable}
            />
        </div>
        <div class={$animation.data.end.enable ? "" : "aa-disableOpacity"}>
            <VideoSelect
                title="End Animation"
                section="data"
                section02="end"
            />
            <div class="aa-options-border">
                <TJSSvgFolder {folder}>
                    <table class="d">
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
                                        bind:checked={$animation.data.end
                                            .options.isMasked}
                                    />
                                </div>
                            </td>
                            <td>
                                <Elevation section="end" />
                            </td>
                            <td>
                                <!--Set Size of Animation-->
                                <ScaleRadius
                                    section={"end"}
                                    field={"size"}
                                    step="0.01"
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <!--Set Animation Opacity-->
                                <Opacity section="end" />
                            </td>
                            <td>
                                <div>
                                    <label for=""
                                        >{localize(
                                            "autoanimations.menus.fadeIn"
                                        )}</label
                                    >
                                </div>
                                <div>
                                    <input
                                        type="number"
                                        bind:value={$animation.data.end.options
                                            .fadeIn}
                                        placeholder="1"
                                        step="1"
                                    />
                                </div>
                            </td>
                            <td>
                                <div>
                                    <label for=""
                                        >{localize(
                                            "autoanimations.menus.fadeOut"
                                        )}</label
                                    >
                                </div>
                                <div>
                                    <input
                                        type="number"
                                        bind:value={$animation.data.end.options
                                            .fadeOut}
                                        placeholder="1"
                                        step="1"
                                    />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div>
                                    <label for="">{localize("autoanimations.menus.playbackRate")}</label>
                                </div>
                                <div>
                                    <input
                                        type="number"
                                        bind:value={$animation.data.end.options.playbackRate}
                                        placeholder="1"
                                        step=".1"
                                    />
                                </div>
                            </td>
                            <td>
                                <div>
                                    <label for=""
                                        >{localize(
                                            "autoanimations.menus.delay"
                                        )}</label
                                    >
                                </div>
                                <div>
                                    <input
                                        type="number"
                                        bind:value={$animation.data.end.options
                                            .delay}
                                        placeholder="250"
                                        step="1"
                                    />
                                </div>
                            </td>
                            <td />
                        </tr>
                    </table>
                </TJSSvgFolder>
            </div>
        </div>
    </TJSSvgFolder>
</div>

<style lang="scss">
    .aa-SectionHeader {
        border-bottom: 2px solid rgba(181, 69, 52, 0.5);
        margin-right: 5%;
        margin-left: 5%;
        margin-bottom: 5px;
        label {
            align-self: center;
            font-family: "Modesto Condensed", "Palatino Linotype", serif;
            font-size: x-large;
            font-weight: bold;
            text-align: center;
            margin-right: 6%;
            margin-left: 6%;
            color: black;
            padding: 2px;
        }
    }
</style>
