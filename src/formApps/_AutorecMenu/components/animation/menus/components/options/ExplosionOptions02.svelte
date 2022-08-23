<script>
    import { localize } from "@typhonjs-fvtt/runtime/svelte/helper";

    import { TJSSvgFolder } from "@typhonjs-fvtt/svelte-standard/component";

    export let animation;

    const folder = {
        label: game.i18n.localize("autoanimations.menus.options"),
        styles: {
            "--tjs-summary-font-family":
                '"Modesto Condensed", "Palatino Linotype", serif',
            "--tjs-summary-font-size": "1.2em",
            "--tjs-summary-chevron-size": "0.7em",
        },
    };

    /*
    $: below = $animation.explosion.options.below;
    $: buttonBelow = {
        icon: below ? "fas fa-check" : "fas fa-times",
        title: "autoanimations.menus.add",
        styles: { 'margin-left': 'auto', 'margin-right': 'auto', 'margin-top': '.1em', 'border-radius': '50%' },
    }

    $: mask = $animation.explosion.options.isMasked;
    $: buttonMask = {
        icon: mask ? "fas fa-check" : "fas fa-times",
        title: "autoanimations.menus.add",
        styles: { 'margin-left': 'auto', 'margin-right': 'auto', 'margin-top': '.1em', 'border-radius': '50%' },
    }
    */
</script>

<div class="aa-options-border">
    <TJSSvgFolder {folder}>
        <table class="d">
            <tr>
                <td>
                    <!--Set belowToken-->
                    <div class="form-group">
                        <label for="EBelow {animation._data.id}"
                            >{localize("autoanimations.menus.below")}
                        </label>
                        <input
                            type="checkbox"
                            id="EBelow {animation._data.id}"
                            bind:checked={$animation.explosion.options.below}
                        />
                    </div>
                </td>
                <td>
                    <div class="form-group">
                        <label for=""
                            >{localize("autoanimations.menus.z-index")}</label
                        >
                        <input
                            type="number"
                            bind:value={$animation.explosion.options.zIndex}
                            placeholder="1"
                            step="1"
                        />
                    </div>
                </td>
                <td>
                    <!--Set delay between repeats-->
                    <div class="form-group">
                        <label for=""
                            >{localize("autoanimations.menus.delay")}</label
                        >
                        <input
                            type="number"
                            bind:value={$animation.explosion.options.delay}
                            placeholder="250"
                        />
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <!--Set Masking-->
                    <div class="form-group">
                        <label for="EMasked {animation._data.id}"
                            >{localize("autoanimations.menus.mask")}
                        </label>
                        <input
                            type="checkbox"
                            id="EMasked {animation._data.id}"
                            bind:checked={$animation.explosion.options.isMasked}
                        />
                    </div>
                </td>
                <td>
                    <!--Set Animation Opacity-->
                    <div class="flexcol">
                        <label for="aaOpacity"
                            >{localize("autoanimations.menus.opacity")}</label
                        >
                        <div class="form-group" style="display: flex; margin-right: 2em; margin-left: 2em;">
                            <input
                                type="number"
                                id="aaOpacity"
                                bind:value={$animation.explosion.options.opacity}
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
                                bind:value={$animation.explosion.options.opacity}
                            />
                        </div>
                    </div>
                </td>
                <td>
                    <!--Set Scale of Animation. Not rendered if Anim Type is Templates-->
                    <div
                        class="form-group"
                    >
                        <label for=""
                            >{localize("autoanimations.menus.radius")}</label
                        >
                        <input
                            type="number"
                            bind:value={$animation.explosion.options.radius}
                            placeholder="1.5"
                            step="0.01"
                        />
                    </div>
                </td>
            </tr>
        </table>
    </TJSSvgFolder>
</div>

<style lang="scss">
</style>
