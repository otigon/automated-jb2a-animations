<script>
    import { getContext }   from "svelte";

    import { localize } from "#runtime/util/i18n";

    import { TJSSvgFolder } from "#standard/component/folder";

    //import SoundSettings from "./SoundSettings.svelte";
    import VideoSelect from "./VideoSelect.svelte";
    import Sound from "./SoundSettings.svelte"

    import { aaReturnWeapons } from "../../../database/jb2a-menu-options.js"

    //export let animation;
    //export let category;
    //export let idx;

    let { animation, category, idx } = getContext('animation-data');

    const folderOptions = {
        styles: {
            "--tjs-summary-font-family":
                '"Modesto Condensed", "Palatino Linotype", serif',
            "--tjs-summary-font-size": "1.1em",
            "--tjs-summary-chevron-size": "0.7em",
        },
    };

    const title = "Switch Animation";

    $: switchType = $animation.meleeSwitch.options.switchType;
    $: disableSection = switchType !== "custom";
    $: detect = $animation.meleeSwitch.options.detect;

    //$: shouldShow = menuType === "weapon" && aaReturnWeapons.includes(anim) ? true : false;
    $: anim = $animation.primary.video.animation;
    $: switchAnim = $animation.meleeSwitch.video.animation;
    $: shouldShow = switchType === "on" ? aaReturnWeapons.includes(anim) : switchType === "custom" ? aaReturnWeapons.includes(switchAnim) : false;
</script>

<div class="aa-sound-border">
    <TJSSvgFolder folder={folderOptions} label="Range Switch">
        <div
            slot="summary-end"
            style="position:relative; left: 10px"
            class="flexcol"
        >
            <select
                bind:value={$animation.meleeSwitch.options.switchType}
                style="width:6em"
            >
                <option value="on"
                    >{localize("autoanimations.settings.ON")}</option
                >
                <option value="off"
                    >{localize("autoanimations.settings.OFF")}</option
                >
                <option value="custom"
                    >{localize("autoanimations.menus.custom")}</option
                >
            </select>
        </div>
        <div class={disableSection ? "aa-disableOpacity" : ""}>
            <VideoSelect
                {animation}
                section="meleeSwitch"
                {title}
                {idx}
                {category}
            />
        </div>
        <div class={switchType === "off" ? "aa-disableOpacity" : ""}>
            <div class="aa-options-border">
                <table class="d">
                    <tr>
                        <td>
                            <div>
                                <label for=""
                                    >{localize(
                                        "autoanimations.menus.rangeDetect"
                                    )}</label
                                >
                            </div>
                            <div class="flexcol">
                                <select
                                    bind:value={$animation.meleeSwitch.options
                                        .detect}
                                    style="margin:auto"
                                >
                                    <option value="automatic"
                                        >{localize(
                                            "autoanimations.menus.automatic"
                                        )}</option
                                    >
                                    <option value="manual"
                                        >{localize(
                                            "autoanimations.menus.manual"
                                        )}</option
                                    >
                                </select>
                            </div>
                        </td>
                        <td>
                            <div
                                class={detect === "automatic"
                                    ? "aa-disableOpacity"
                                    : ""}
                            >
                                <div>
                                    <label for=""
                                        >{localize(
                                            "autoanimations.menus.gridSquares"
                                        )}</label
                                    >
                                </div>
                                <div>
                                    <input
                                        type="number"
                                        bind:value={$animation.meleeSwitch
                                            .options.range}
                                        placeholder="2"
                                        step="1"
                                    />
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <!--Set Return animation-->
                            <div class="form-group {shouldShow ? "" : "aa-disableOpacity"}">
                                <label for="OnlyX {animation._data.id}"
                                    >{localize("autoanimations.menus.return")} {localize("autoanimations.menus.animation")}
                                </label>
                                <input
                                    type="checkbox"
                                    id="OnlyX {animation._data.id}"
                                    bind:checked={$animation.meleeSwitch.options.isReturning}
                                />
                            </div>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
        <div class={switchType === "off" ? "aa-disableOpacity" : ""}>
            <Sound {animation} {category} {idx} section="meleeSwitch" />
        </div>
    </TJSSvgFolder>
</div>

<style lang="scss">
</style>
