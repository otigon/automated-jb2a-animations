<script>
    import { getContext }       from "svelte";

    import { localize }         from "#runtime/util/i18n";

    import { FVTTFilePickerControl } from "#standard/application/control/filepicker";

    import { TJSIconButton }    from "#standard/component/button";
    import { TJSSvgFolder }     from "#standard/component/folder";

    import OptionsDialog        from "./optionsInfoDialog.js";

    //export let animation;
    let { animation} = getContext('animation-data');

    if (typeof $animation.levels3d.secondary.data.autoSize !== "boolean") {
        $animation.levels3d.secondary.data.autoSize = true;
}

if(!$animation.levels3d.secondary.data.spritePath) {
    $animation.levels3d.secondary.data.spritePath = "modules/levels-3d-preview/assets/particles/dust.png";
}

    let pEffects = game.Levels3DPreview?.CONFIG.PARTICLE_SYSTEMS?.TARGET_ONLY_PARTICLE_SYSTEMS || {};

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
    const folderOptions = {
        styles: {
            "--tjs-summary-font-family":
                '"Modesto Condensed", "Palatino Linotype", serif',
            "--tjs-summary-font-size": "1.1em",
            "--tjs-summary-chevron-size": "0.7em",
        },
    };

    async function selectCustom() {
        const current = animation._data.levels3d.secondary.data.spritePath;

        const path = await FVTTFilePickerControl.browse({
            modal: true,
            type: "any",
            current
        });

        if (path) {
            $animation.levels3d.secondary.data.spritePath = path;
        }
    }

    $: isEnabled = $animation.levels3d.secondary.enable
</script>
<TJSSvgFolder
    folder={folderOptions}
    label={localize("autoanimations.animations.explosion")}
>
    <div slot="summary-end">
        <input
            on:click|stopPropagation
            type="checkbox"
            style="align-self:center"
            title="Toggle Secondary On/Off"
            bind:checked={$animation.levels3d.secondary.enable}
        />
    </div>
    <div class="flexcol" style="align-items: center;">
        <label for=""
            >{localize("autoanimations.menus.type")}</label
        >
        <select
            bind:value={$animation.levels3d.secondary.data.type}
        >
        {#each Object.keys(pEffects) as effect}
        <option value={effect}
            >{localize(
                `levels3dpreview.particleSystems.${effect}`
            )}</option
        >
    {/each}
     </select>
    </div>
    <table class="c">
        <tr>
            <td style="width: 6em; border: none;">
                <div class="flexrow">
                    <label for="" class="aa-customFont">{localize('autoanimations.menus.sprite')}</label>
                </div>
            </td>
            <td style=" border: none">
                <input
                type="text"
                bind:value={$animation.levels3d.secondary.data.spritePath}
                style="font-weight:normal; font-size:small; border-radius: 5px;text-align:left; width: 100%"
                />
            </td>
            <td style="width: 4em;border: none">
                <i class="fas fa-file-import"
                title="File Picker"
                style="font-size:1.5em"
                on:click|preventDefault={() => selectCustom()}
                role=presentation
                />
            </td>
        </tr>
    </table>
    <div class="{isEnabled ? "" : "aa-disableOpacity"}">
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
                                bind:value={$animation.levels3d.secondary.data.color01}
                            />
                        </div>
                        <div class="form-group">
                            <input
                                type="color"
                                data-edit="color"
                                id="tint"
                                style="width: 10em;margin-left: 0;"
                                bind:value={$animation.levels3d.secondary.data.color01}
                            />
                        </div>
                    </td>
                    <td>
                        <div class="flexcol">
                            <label for=""
                                >{localize("autoanimations.menus.color")} 02
                            </label>
                            <input
                                type="Text"
                                style="width: 10em; margin: auto"
                                bind:value={$animation.levels3d.secondary.data.color02}
                            />
                        </div>
                        <div class="form-group">
                            <input
                                type="color"
                                data-edit="color"
                                id="tint"
                                style="width: 10em;margin-left: 0;"
                                bind:value={$animation.levels3d.secondary.data.color02}
                            />
                        </div>
                    </td>
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
                                        bind:value={$animation.levels3d.secondary.data.speed}
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
                                        >{localize("autoanimations.menus.scale")}</label
                                    >
                                </div>
                                <div>
                                    <input
                                        type="number"
                                        bind:value={$animation.levels3d.secondary.data.scale}
                                        placeholder="0.7"
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
                                        bind:value={$animation.levels3d.secondary.data.alpha}
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
                                        bind:value={$animation.levels3d.secondary.data.gravity}
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
                                        bind:value={$animation.levels3d.secondary.data.duration}
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
                                        bind:value={$animation.levels3d.secondary.data.life}
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
                                        bind:value={$animation.levels3d.secondary.data.emittersize}
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
                                        bind:value={$animation.levels3d.secondary.data.rate}
                                        placeholder="10"
                                        step=".01"
                                    />
                                </div>
                            </div>
                            <td>
                                <label for="3dautoSize {animation._data.id}"
                                    >{localize("autoanimations.menus.autoSize")}
                                </label>
                                <input
                                    type="checkbox"
                                    id="3dautoSize {animation._data.id}"
                                    bind:checked={$animation.levels3d.secondary.data.autoSize}
                                />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label for="3donCenter {animation._data.id}"
                                >{localize("autoanimations.menus.onCenter")}
                            </label>
                            <input
                                type="checkbox"
                                id="3donCenter {animation._data.id}"
                                bind:checked={$animation.levels3d.secondary.data.onCenter}
                            />
                    </td>
                        <td></td>
                        <td></td>
                    </tr>
                </table>
            </TJSSvgFolder>
        </div>
    </div>
</TJSSvgFolder>

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
