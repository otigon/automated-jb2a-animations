<script>
    import { localize } from "@typhonjs-fvtt/runtime/svelte/helper";

    import { TJSSvgFolder, TJSIconButton } from "@typhonjs-fvtt/svelte-standard/component";

    import NumberInput from "./inputComponents/NumberInput.svelte";
    import Opacity from "./inputComponents/Opacity.svelte";
    import WaitDelay from "./inputComponents/WaitDelay.svelte";

    import {aaReturnWeapons} from "../../../../animation-functions/databases/jb2a-menu-options.js"

    //import { ripple } from "@typhonjs-fvtt/svelte-standard/action";

    export let animation;
    export let category;

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
            color: "rgba(50, 79, 245, 0.5)"
        }
    }

    $: menuType = $animation.primary.video.menuType;
    $: anim = $animation.primary.video.animation;
    $: shouldShow = menuType === "weapon" && aaReturnWeapons.includes(anim) ? true : false;
    $: isCustom = $animation.primary.video.enableCustom;
</script>

<div class="aa-options-border">
    <TJSSvgFolder {folder}>
        <div slot="summary-end">
            <TJSIconButton button={optionsInfo} on:click={() => category.optionsInfo()}/>
        </div>
        <table class="d">
            <tr>
                <td>
                    <!--Set Elevation of Animation-->
                    <NumberInput
                    {animation}
                    label={localize("autoanimations.menus.elevation")}
                    section="primary"
                    field="elevation"
                    placeholder=1000
                    />
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
                    <div class="form-group {isCustom ? "" : "aa-disableOpacity"}">
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
                    <div class="form-group {shouldShow ? "" : "aa-disableOpacity"}">
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
                    <WaitDelay {animation}/>
                </td>
                <td></td>
            </tr>
        </table>
    </TJSSvgFolder>
</div>

<style lang="scss">
</style>
