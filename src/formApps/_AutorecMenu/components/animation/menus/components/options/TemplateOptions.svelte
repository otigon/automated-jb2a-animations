<script>
    import { localize } from "@typhonjs-fvtt/runtime/svelte/helper";

    import { TJSSvgFolder } from "@typhonjs-fvtt/svelte-standard/component";

    import NumberInput from "../NumberInput.svelte";

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

    $: persistent = $animation.primary.options.persistent;

    $: currentType = $animation.primary.video.menuType;

    $: persistType = $animation.primary.options.persistType;
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
                    <!--Set belowToken-->
                    <div class="form-group">
                        <label for="Below {animation._data.id}"
                            >{localize("autoanimations.menus.below")}
                        </label>
                        <input
                            type="checkbox"
                            id="Below {animation._data.id}"
                            bind:checked={$animation.primary.options.below}
                        />
                    </div>
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
                    <!--Set Scale of Animation. Not rendered if Anim Type is Templates-->
                    <NumberInput
                        {animation}
                        label={localize("autoanimations.menus.scale") + " " + "X"}
                        section={"primary"}
                        field={"scaleX"}
                        step=0.01
                    />
                </td>
                <td>
                    <!--Set Scale of Animation. Not rendered if Anim Type is Templates-->
                    <NumberInput
                    {animation}
                    label={localize("autoanimations.menus.scale") + " " + "Y"}
                    section={"primary"}
                    field={"scaleY"}
                    step=0.01
                />
                </td>
            </tr>
            <tr>
                <td>
                    <!--Set Masking-->
                    <div class="form-group">
                        <label for="Remove {animation._data.id}"
                            >{localize("autoanimations.menus.remove")}
                        </label>
                        <input
                            type="checkbox"
                            id="Remove {animation._data.id}"
                            bind:checked={$animation.primary.options
                                .removeTemplate}
                        />
                    </div>
                </td>
                <td>
                    <!--Set Animation Opacity-->
                    <div class="flexcol">
                        <label for="aaOpacity"
                            >{localize("autoanimations.menus.opacity")}</label
                        >
                        <div
                            class="form-group"
                            style="display: flex; margin-right: 2em; margin-left: 2em;"
                        >
                            <input
                                type="number"
                                id="aaOpacity"
                                bind:value={$animation.primary.options.opacity}
                                placeholder="1"
                                min="0"
                                max="1"
                                step="0.01"
                            />
                            <input
                                style="border:none; background:none;margin-left: 3px"
                                type="range"
                                min="0"
                                max="1"
                                step="0.01"
                                bind:value={$animation.primary.options.opacity}
                            />
                        </div>
                    </div>
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
        </table>
        <table class="d">
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
                    <!--Choose Persistent Type-->
                    <div
                        class="form-group {!persistent
                            ? 'aa-disableOpacity'
                            : ''}"
                    >
                        <label for=""
                            >{localize("autoanimations.menus.persistant")}
                            {localize("autoanimations.menus.type")}</label
                        >
                        <select
                            bind:value={$animation.primary.options.persistType}
                            style="width:11em; height: 1em"
                        >
                            <option value="sequencerground"
                                >{localize(
                                    "autoanimations.menus.sequencereffect"
                                )}</option
                            >
                            <option value="attachtemplate"
                                >{localize(
                                    "autoanimations.menus.attachtotemplate"
                                )}</option
                            >
                            {#if currentType === "circle" || currentType === "square"}
                                <option value="overheadtile"
                                    >{localize(
                                        "autoanimations.menus.overheadtile"
                                    )}</option
                                >
                                <option value="groundtile"
                                    >{localize(
                                        "autoanimations.menus.groundtile"
                                    )}</option
                                >
                            {/if}
                        </select>
                    </div>
                </td>
            </tr>
            {#if persistType === "overheadtile" && persistent}
                <tr>
                    <td>
                        <!--Set Occlusion Mode-->
                        <div class="flexcol">
                            <label for=""
                                >{localize(
                                    "autoanimations.menus.occlusionMode"
                                )}</label
                            >
                            <select
                                bind:value={$animation.primary.options
                                    .occlusionMode}
                                style="text-align: center;align-self: center;width: 15em"
                            >
                                <option value="3"
                                    >{localize(
                                        "autoanimations.menus.occlusion03"
                                    )}</option
                                >
                                <option value="1"
                                    >{localize(
                                        "autoanimations.menus.occlusion01"
                                    )}</option
                                >
                                <option value="2"
                                    >{localize(
                                        "autoanimations.menus.occlusion02"
                                    )}</option
                                >
                                <option value="0"
                                    >{localize(
                                        "autoanimations.menus.occlusion00"
                                    )}</option
                                >
                            </select>
                        </div>
                    </td>
                    <td>
                        <!--Set Occlusion Alpha-->
                        <div class="flexcol">
                            <label for="aaOpacity"
                                >{localize(
                                    "autoanimations.menus.occlusionAlpha"
                                )}</label
                            >
                            <div
                                class="form-group"
                                style="display: flex; margin-right: 2em; margin-left: 2em;"
                            >
                                <input
                                    type="number"
                                    id="aaOpacity"
                                    bind:value={$animation.primary.options
                                        .occlusionAlpha}
                                    placeholder="1"
                                    min="0"
                                    max="1"
                                    step="0.01"
                                />
                                <input
                                    style="border:none; background:none;margin-left: 3px"
                                    type="range"
                                    min="0"
                                    max="1"
                                    step="0.01"
                                    bind:value={$animation.primary.options
                                        .occlusionAlpha}
                                />
                            </div>
                        </div>
                    </td>
                </tr>
            {/if}
        </table>
    </TJSSvgFolder>
</div>

<style lang="scss">
    .aa-adjust-pos {
        position: relative;
        left: 10px;
    }
</style>
