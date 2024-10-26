<script>
    import { getContext }       from "svelte";

    import { localize }         from "#runtime/util/i18n";

    import { TJSIconButton }    from "#standard/component/button";
    import { TJSSvgFolder }     from "#standard/component/folder";

    import NumberInput          from "./inputComponents/NumberInput.svelte";
    import Elevation            from "./inputComponents/Elevation.svelte";
    import Opacity              from "./inputComponents/Opacity.svelte";
    import OptionsDialog        from "./optionsInfoDialog.js";
    import WaitDelay            from "./inputComponents/WaitDelay.svelte";

    import { aaReturnWeapons }  from "../../../../database/jb2a-menu-options.js";

    //import { ripple } from "#standard/action/animate/composable/ripple";

    //export let animation;
    //export let category;
    let { animation, category} = getContext('animation-data');

    const folder = {
        label: game.i18n.localize("autoanimations.menus.options"),
        styles: {
            "--tjs-summary-font-family":
                '"Modesto Condensed", "Palatino Linotype", serif',
            "--tjs-summary-font-size": "1.1em",
            "--tjs-summary-chevron-size": "0.7em",
        },
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

    $: menuType = $animation.primary.video.menuType;
    $: anim = $animation.primary.video.animation;
    $: shouldShow = menuType === "weapon" && aaReturnWeapons.includes(anim) ? true : false;
    $: isCustom = $animation.primary.video.enableCustom;
</script>

<div class="aa-options-border">
    <TJSSvgFolder {folder}>
        <div slot="summary-end">
            <TJSIconButton button={optionsInfo} on:click={() => OptionsDialog.show("range")}/>
        </div>
        <table class="d">
            <tr>
                <td>
                    <!--Set Elevation of Animation-->
                    <Elevation {animation} section="primary" />
                </td>
                <td>
                    <!--Set Number of times the animation plays-->
                    <NumberInput
                        {animation}
                        label={localize("autoanimations.menus.repeat")}
                        section="primary"
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
                        section="primary"
                        field="repeatDelay"
                        placeholder="250"
                    />
                </td>
            </tr>
            <tr>
                <td>
                    <!--Set OnlyX-->
                    <div class="{isCustom ? "" : "aa-disableOpacity"}">
                        <label for="OnlyX {animation._data.id}"
                            >{localize("autoanimations.menus.only")} X
                        </label>
                        <input
                            type="checkbox"
                            id="OnlyX {animation._data.id}"
                            bind:checked={$animation.primary.options.onlyX}
                        />
                    </div>
                </td>
                <td>
                    <!--Set Animation Opacity-->
                    <Opacity {animation} />
                </td>
                <td>
                    <!--Set the Z-Index of the Animation-->
                    <NumberInput
                        {animation}
                        label={localize("autoanimations.menus.z-index")}
                        section="primary"
                        field="zIndex"
                    />
                </td>
            </tr>
            <tr>
                <td>
                    <!--Set Return animation-->
                    <div class="{shouldShow ? "" : "aa-disableOpacity"}">
                        <label for="OnlyX {animation._data.id}"
                            >{localize("autoanimations.menus.return")} {localize("autoanimations.menus.animation")}
                        </label>
                        <input
                            type="checkbox"
                            id="OnlyX {animation._data.id}"
                            bind:checked={$animation.primary.options.isReturning}
                        />
                    </div>
                </td>
                <td>
                    <!--Set Random Offset-->
                    <div>
                        <label for="RandomOffset {animation._data.id}"
                            >{localize("autoanimations.menus.randomOffset")}
                        </label>
                        <input
                            type="checkbox"
                            id="RandomOffset {animation._data.id}"
                            bind:checked={$animation.primary.options.randomOffset}
                        />
                    </div>
                </td>
                <td>
                    <NumberInput
                    {animation}
                    label={localize("autoanimations.menus.playbackRate")}
                    section="primary"
                    field="playbackRate"
                    />
                </td>
            </tr>
            <tr>
                <td>
                    <!--Reverse Animation (Switch Source/Target)-->
                    <div>
                        <label for="TempSource {animation._data.id}"
                            >{localize("autoanimations.animations.reverse")} {localize("autoanimations.menus.animation")}
                        </label>
                        <input
                            type="checkbox"
                            id="TempSource {animation._data.id}"
                            bind:checked={$animation.primary.options.reverse}
                        />
                    </div>
                </td>
                <td>
                    <WaitDelay {animation}/>
                </td>
                {#if category.stores.animationSourceOption}
                <td>
                    <!--Set Source as Template Animation: EXPERITMENTAL-->
                    <div>
                        <label for="TempSource {animation._data.id}"
                            >{localize("autoanimations.menus.animation")} {localize("autoanimations.menus.source")}
                        </label>
                        <input
                            type="checkbox"
                            id="TempSource {animation._data.id}"
                            bind:checked={$animation.primary.options.animationSource}
                        />
                    </div>
                </td>
                {:else}
                <td></td>
                {/if}
            </tr>
        </table>
    </TJSSvgFolder>
</div>

<style lang="scss">
</style>
