<script>
    import { getContext }   from "svelte";

    import { localize }     from "#runtime/util/i18n";

    import { TJSSvgFolder } from "#standard/component/folder";

    //export let animation;
    let { animation } = getContext("animation-data");

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
            color: "rgba(50, 79, 245, 0.5)",
        },
        clickPropagate: false,
    };
    const folderOptions = {
        styles: {
            "--tjs-summary-font-family":
                '"Modesto Condensed", "Palatino Linotype", serif',
            "--tjs-summary-font-size": "1.1em",
            "--tjs-summary-chevron-size": "0.7em",
        },
    };

    let tokenAnimations = game.Levels3DPreview?.CONFIG?.tokenAnimations || {
        bow: {},
        breath: {},
        buff: {},
        charge: {},
        debuff: {},
        knockback: {},
        shake: {},
        slash: {},
        swipe: {},
        twirl: {},
    };

    if (!$animation.levels3d.tokens) {
        $animation.levels3d.tokens = {
            enable: false,
            source: false,
            target: false,
            sourceType: "twirl",
            sourcePlay: "start",
            targetType: "shake",
            targetPlay: "end"
        };
    }

    $: isEnabled = $animation.levels3d.tokens.enable;
</script>

<TJSSvgFolder folder={folderOptions} label="{localize("autoanimations.menus.token")} {localize("autoanimations.menus.animation")}">
    <div slot="summary-end">
        <input
            on:click|stopPropagation
            type="checkbox"
            style="align-self:center"
            title="Toggle Secondary On/Off"
            bind:checked={$animation.levels3d.tokens.enable}
        />
    </div>
    <div class="aa-options-border {isEnabled ? '' : 'aa-disableOpacity'}">
        <table class="c">
            <tr>
                <td>
                    <div>
                        <label for="3DSourceAnim {animation._data.id}"
                            >{localize("autoanimations.menus.source")} {localize("autoanimations.menus.token")}
                        </label>
                        <input
                            type="checkbox"
                            style="margin: auto"
                            id="3DSourceAnim {animation._data.id}"
                            bind:checked={$animation.levels3d.tokens.source}
                        />
                    </div>
                </td>
                <td>
                    <div
                        class={$animation.levels3d?.tokens?.source
                            ? ""
                            : "aa-disableOpacity"}
                    >
                        <div>
                            <label for="">{localize("autoanimations.menus.type")}</label>
                        </div>
                        <div>
                            <select
                                bind:value={$animation.levels3d.tokens.sourceType}
                            >
                                {#each Object.keys(tokenAnimations) as sourceAnim}
                                    <option value={sourceAnim}
                                        >{localize(
                                            `autoanimations.tokenAnimations.${sourceAnim}`
                                        )}</option
                                    >
                                {/each}
                            </select>
                        </div>
                    </div>
                </td>
                <td>
                    <div
                        class={$animation.levels3d?.tokens?.source
                            ? ""
                            : "aa-disableOpacity"}
                    >
                        <div>
                            <label for="">{localize("autoanimations.menus.playOn")}</label>
                        </div>
                        <div>
                            <select
                            bind:value={$animation.levels3d.tokens.sourcePlay}
                            >
                                <option value="start">{localize(`autoanimations.menus.start`)}</option>
                                <option value="end">{localize(`autoanimations.menus.end`)}</option>
                                <option value="both">{localize(`autoanimations.menus.both`)}</option>
                            </select>
                        </div>
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <label for="3DTargetAnim {animation._data.id}"
                        >{localize("autoanimations.menus.target")} {localize("autoanimations.menus.token")}
                    </label>
                    <input
                        type="checkbox"
                        style="margin: auto"
                        id="3DTargetAnim {animation._data.id}"
                        bind:checked={$animation.levels3d.tokens.target}
                    />
                </td>
                <td>
                    <div
                        class={$animation.levels3d?.tokens?.target
                            ? ""
                            : "aa-disableOpacity"}
                    >
                        <div>
                            <label for="">{localize("autoanimations.menus.type")}</label>
                        </div>
                        <div>
                            <select
                                bind:value={$animation.levels3d.tokens.targetType}
                            >
                                {#each Object.keys(tokenAnimations) as targetAnim}
                                    <option value={targetAnim}
                                        >{localize(
                                            `autoanimations.tokenAnimations.${targetAnim}`
                                        )}</option
                                    >
                                {/each}
                            </select>
                        </div>
                    </div>
                </td>
                <td>
                    <div
                        class={$animation.levels3d?.tokens?.target
                            ? ""
                            : "aa-disableOpacity"}
                    >
                        <div>
                        <label for="">{localize("autoanimations.menus.playOn")}</label>
                        </div>
                        <div>
                            <select
                                bind:value={$animation.levels3d.tokens.targetPlay}
                            >
                                <option value="start">{localize(`autoanimations.menus.start`)}</option>
                                <option value="end">{localize(`autoanimations.menus.end`)}</option>
                                <option value="both">{localize(`autoanimations.menus.both`)}</option>
                            </select>
                        </div>
                    </div>
                </td>
            </tr>
        </table>
    </div>
</TJSSvgFolder>

<style lang="scss">
</style>
