<script>
    import { localize } from "@typhonjs-fvtt/runtime/svelte/helper";

    import { TJSSvgFolder } from "@typhonjs-fvtt/svelte-standard/component";

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
                    <div class="form-group {!persistent ? '' : 'aa-disableOpacity'}">
                        <label for=""
                            >{localize("autoanimations.menus.repeat")}</label
                        >
                        <input
                            type="number"
                            bind:value={$animation.primary.options.repeat}
                            placeholder="1"
                        />
                    </div>
                </td>
                <td>
                    <!--Set delay between repeats-->
                    <div class="form-group {!persistent ? '' : 'aa-disableOpacity'}">
                        <label for=""
                            >{localize("autoanimations.menus.repeat")}
                            {localize("autoanimations.menus.delay")}</label
                        >
                        <input
                            type="number"
                            bind:value={$animation.primary.options.delay}
                            placeholder="250"
                        />
                    </div>
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
                    <div class="form-group {persistent ? '' : 'aa-disableOpacity'}">
                        <label for="Vis {animation._data.id}"
                            >{localize("autoanimations.menus.bind")} {localize("autoanimations.menus.visibility")}
                        </label>
                        <input
                            type="checkbox"
                            id="Vis {animation._data.id}"
                            bind:checked={$animation.primary.options.unbindVisibility}
                        />
                    </div>
                </td>
                <td>
                    <!--Set Alpha Binding-->
                    <div class="form-group {persistent ? '' : 'aa-disableOpacity'}">
                        <label for="Alpha {animation._data.id}"
                            >{localize("autoanimations.menus.bind")} {localize("autoanimations.menus.alpha")}
                        </label>
                        <input
                            type="checkbox"
                            id="Alpha {animation._data.id}"
                            bind:checked={$animation.primary.options.unbindAlpha}
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
                    <div class="flexcol">
                        <label for="aaOpacity"
                            >{localize("autoanimations.menus.opacity")}</label
                        >
                        <div class="form-group" style="display: flex; margin-right: 2em; margin-left: 2em;">
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
                    <!--Set Scale of Animation. Not rendered if Anim Type is Templates-->
                    <div
                        class="form-group"
                    >
                        <label for=""
                            >{localize("autoanimations.menus.scale")}</label
                        >
                        <input
                            type="number"
                            bind:value={$animation.primary.options.scale}
                            placeholder="1"
                            step="0.01"
                        />
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <div class="form-group">
                        <label for=""
                            >{localize("autoanimations.menus.z-index")}</label
                        >
                        <input
                            type="number"
                            bind:value={$animation.primary.options.zIndex}
                            placeholder="1"
                            step="1"
                        />
                    </div>
                </td>
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
