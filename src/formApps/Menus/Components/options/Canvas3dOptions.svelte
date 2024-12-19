<script>
    import { getContext }       from "svelte";

    import { localize }         from "#runtime/util/i18n";

    import { TJSIconButton }    from "#standard/component/button";
    import { TJSSvgFolder }     from "#standard/component/folder";

    import OptionsDialog        from "./optionsInfoDialog.js";

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

    //export let animation;
    let { animation} = getContext('animation-data');
    if (typeof $animation.levels3d.data.autoSize !== "boolean") {
  $animation.levels3d.data.autoSize = true;
}

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

    $: type = $animation.levels3d.type;
</script>
{#if type !== "token"}
        <div class="aa-options-border" style="margin-top: .5em;">
            <h1>Colors</h1>
            <table class="d" style="padding-right: 4em; padding-left: 4em">
                <tr>
                    <td>
                        <div class="flexcol">
                            <label for=""
                                >{localize("autoanimations.menus.color")} 01
                            </label>
                            <input
                                type="Text"
                                style="width: 10em; margin: auto"
                                bind:value={$animation.levels3d.data.color01}
                            />
                        </div>
                        <div class="form-group">
                            <input
                                type="color"
                                data-edit="color"
                                id="tint"
                                style="width: 10em;margin-left: 0;"
                                bind:value={$animation.levels3d.data.color01}
                            />
                        </div>
                    </td>
                    {#if type !== "sprite"}
                    <td>
                        <div class="flexcol">
                            <label for=""
                                >{localize("autoanimations.menus.color")} 02
                            </label>
                            <input
                                type="Text"
                                style="width: 10em; margin: auto"
                                bind:value={$animation.levels3d.data.color02}
                            />
                        </div>
                        <div class="form-group">
                            <input
                                type="color"
                                data-edit="color"
                                id="tint"
                                style="width: 10em;margin-left: 0;"
                                bind:value={$animation.levels3d.data.color02}
                            />
                        </div>
                    </td>
                    {/if}
                </tr>
            </table>
        </div>
    <div class="aa-options-border">
        <TJSSvgFolder {folder}>
            <div slot="summary-end">
                <TJSIconButton button={optionsInfo} on:click={() => OptionsDialog.show("canvas3d")}/>
            </div>
            <table class="d">
                <tr>
                    <td>
                        <div class="flex-row">
                            <div>
                                <label for=""
                                    >{localize("autoanimations.menus.speed")}</label
                                >
                            </div>
                            <div>
                                <input
                                    type="number"
                                    bind:value={$animation.levels3d.data.speed}
                                    placeholder="5"
                                    step=".01"
                                />
                            </div>
                        </div>
                    </td>
                    <td>
                        <div class="flex-row">
                            <div>
                                <label for=""
                                    >{localize(
                                        "autoanimations.menus.repeat"
                                    )}</label
                                >
                            </div>
                            <div>
                                <input
                                    type="number"
                                    bind:value={$animation.levels3d.data.repeat}
                                    placeholder="1"
                                    step=".01"
                                />
                            </div>
                        </div>
                    </td>
                    <td>
                        <div class="flex-row">
                            <div>
                                <label for=""
                                    >{localize("autoanimations.menus.delay")}</label
                                >
                            </div>
                            <div>
                                <input
                                    type="number"
                                    bind:value={$animation.levels3d.data.delay}
                                    placeholder="0"
                                    step=".01"
                                />
                            </div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div class="flex-row">
                            <div>
                                <label for=""
                                    >{localize("autoanimations.menus.scale")}</label
                                >
                            </div>
                            <div>
                                <input
                                    type="number"
                                    bind:value={$animation.levels3d.data.scale}
                                    placeholder="1"
                                    step=".01"
                                />
                            </div>
                        </div>
                    </td>
                    <td>
                        <div class="flex-row">
                            <div>
                                <label for=""
                                    >{localize("autoanimations.menus.arc")}</label
                                >
                            </div>
                            <div>
                                <input
                                    type="number"
                                    bind:value={$animation.levels3d.data.arc}
                                    placeholder="5"
                                    step=".01"
                                />
                            </div>
                        </div>
                    </td>
                    <td>
                        <div class="flex-row">
                            <div>
                                <label for=""
                                    >{localize("autoanimations.menus.alpha")}</label
                                >
                            </div>
                            <div>
                                <input
                                    type="number"
                                    bind:value={$animation.levels3d.data.alpha}
                                    placeholder="0.5"
                                    step=".01"
                                />
                            </div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div class="flex-row">
                            <div>
                                <label for=""
                                    >{localize(
                                        "autoanimations.menus.gravity"
                                    )}</label
                                >
                            </div>
                            <div>
                                <input
                                    type="number"
                                    bind:value={$animation.levels3d.data.gravity}
                                    placeholder="0"
                                    step=".01"
                                />
                            </div>
                        </div>
                    </td>
                    <td>
                        <div class="flex-row">
                            <div>
                                <label for=""
                                    >{localize("autoanimations.menus.duration")}</label
                                >
                            </div>
                            <div>
                                <input
                                    type="number"
                                    bind:value={$animation.levels3d.data.duration}
                                    placeholder="3000"
                                    step=".01"
                                />
                            </div>
                        </div>
                    </td>
                    <td>
                        <div class="flex-row">
                            <div>
                                <label for=""
                                    >{localize("autoanimations.menus.life")}</label
                                >
                            </div>
                            <div>
                                <input
                                    type="number"
                                    bind:value={$animation.levels3d.data.life}
                                    placeholder="500"
                                    step=".01"
                                />
                            </div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div class="flex-row">
                            <div>
                                <label for=""
                                    >{localize(
                                        "autoanimations.menus.emiterSize"
                                    )}</label
                                >
                            </div>
                            <div>
                                <input
                                    type="number"
                                    bind:value={$animation.levels3d.data
                                        .emittersize}
                                    placeholder="0.0001"
                                    step=".0001"
                                />
                            </div>
                        </div>
                    </td>
                    <td>
                        <div class="flex-row">
                            <div>
                                <label for=""
                                    >{localize("autoanimations.menus.rate")}</label
                                >
                            </div>
                            <div>
                                <input
                                    type="number"
                                    bind:value={$animation.levels3d.data.rate}
                                    placeholder="10"
                                    step=".01"
                                />
                            </div>
                        </div>
                    </td>
                    <td>
                            <label for="3dRotateTowards {animation._data.id}"
                                >{localize("autoanimations.menus.rotateTowards")}
                            </label>
                            <input
                                type="checkbox"
                                id="3dRotateTowards {animation._data.id}"
                                bind:checked={$animation.levels3d.data.rotateTowards}
                            />
                    </td>
                </tr>
                <tr>
                    <td>
                        <label for="3dautoSize {animation._data.id}"
                            >{localize("autoanimations.menus.autoSize")}
                        </label>
                        <input
                            type="checkbox"
                            id="3dautoSize {animation._data.id}"
                            bind:checked={$animation.levels3d.data.autoSize}
                        />
                </td>
                <td>
                    <label for="3donCenter {animation._data.id}"
                        >{localize("autoanimations.menus.onCenter")}
                    </label>
                    <input
                        type="checkbox"
                        id="3donCenter {animation._data.id}"
                        bind:checked={$animation.levels3d.data.onCenter}
                    />
            </td>
                </tr>
                {#if $animation.levels3d.type === "sprite"}
                <tr>
                    <td>
                        <div>
                            <label for="">{localize("autoanimations.menus.rotation")} X</label>
                        </div>
                        <div>
                            <input
                            type=number
                            bind:value={$animation.levels3d.data.rotationX}
                            placeholder=0
                        />
                        </div>
                    </td>
                    <td>
                        <div>
                            <label for="">{localize("autoanimations.menus.rotation")} Y</label>
                        </div>
                        <div>
                            <input
                            type=number
                            bind:value={$animation.levels3d.data.rotationY}
                            placeholder=0
                        />
                        </div>
                    </td>
                    <td>
                        <div>
                            <label for="">{localize("autoanimations.menus.rotation")} Z</label>
                        </div>
                        <div>
                            <input
                            type=number
                            bind:value={$animation.levels3d.data.rotationZ}
                            placeholder=0
                        />
                        </div>
                    </td>
                </tr>
                {/if}
            </table>
        </TJSSvgFolder>
    </div>
{:else}
    <h1>{localize("autoanimations.menus.token")} {localize("autoanimations.menus.animation")}</h1>
    <div class="aa-options-border">
        <table class="d">
            <tr>
                <td>
                    <div>
                        <label for="">{localize("autoanimations.menus.type")}</label>
                    </div>
                    <div>
                        <select
                            bind:value={$animation.levels3d.data.animationType}
                        >
                            {#each Object.keys(tokenAnimations) as tokenAnim}
                                <option value={tokenAnim}
                                    >{localize(
                                        `autoanimations.tokenAnimations.${tokenAnim}`
                                    )}</option
                                >
                            {/each}
                        </select>
                    </div>
                </td>
                <td>
                    <div>
                        <label for="">{localize("autoanimations.menus.playOn")}</label>
                    </div>
                    <div>
                        <select
                            bind:value={$animation.levels3d.data.playOn}
                        >
                            <option value="source">{localize("autoanimations.menus.source")}</option>
                            <option value="target">{localize("autoanimations.menus.target")}</option>
                            <option value="default">{localize("autoanimations.menus.targetDefault")}</option>
                            <option value="both">{localize("autoanimations.menus.both")}</option>
                        </select>
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <div class="flex-row">
                        <div>
                            <label for=""
                                >{localize(
                                    "autoanimations.menus.repeat"
                                )}</label
                            >
                        </div>
                        <div>
                            <input
                                type="number"
                                bind:value={$animation.levels3d.data.repeat}
                                placeholder="1"
                                step=".01"
                            />
                        </div>
                    </div>
                </td>
                <td>
                    <div class="flex-row">
                        <div>
                            <label for=""
                                >{localize(
                                    "autoanimations.menus.resetTime"
                                )}</label
                            >
                        </div>
                        <div>
                            <input
                                type="number"
                                bind:value={$animation.levels3d.data.resetTime}
                                placeholder="100"
                                step="1"
                            />
                        </div>
                    </div>
                </td>
            </tr>
        </table>
    </div>
{/if}

<style lang="scss">
    h1 {
        font-family: "Modesto Condensed", "Palatino Linotype", serif;
        font-size: x-large;
        font-weight: bold;
        text-align: center;
        margin-right: 5%;
        margin-left: 5%;
        color: black;
        margin-top: 5px;
    }
</style>
