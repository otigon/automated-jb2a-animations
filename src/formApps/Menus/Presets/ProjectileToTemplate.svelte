<script>
    import { localize } from "@typhonjs-fvtt/runtime/svelte/helper";
    import { TJSSvgFolder, TJSIconButton } from "@typhonjs-fvtt/svelte-standard/component";

    import SectionHeader    from "../Components/SectionHeader.svelte";
    import VideoSelect      from "../Components/VideoSelect.svelte";
    import SoundSettings    from "../Components/SoundSettingsNested.svelte";
    import Opacity          from "./inputComponents/Opacity.svelte";
    import Elevation        from "./inputComponents/Elevation.svelte";
    import OptionsDialog    from "../Components/options/optionsInfoDialog.js";
    import * as settings    from "../Components"
    export let animation;
    export let category;
    export let idx;

    const title = "Projectile to Template";

    const styling = {
            "--tjs-summary-font-family":
                '"Modesto Condensed", "Palatino Linotype", serif',
            "--tjs-summary-font-size": "1.1em",
            "--tjs-summary-chevron-size": "0.7em",
        }

    const optionsInfo = {
       icon: "fas fa-info-circle",
       title: "autoanimations.menus.quickReference",
       styles: {
          "--tjs-icon-button-diameter": "1.em",
          position: "relative",
          left: "10px",
          bottom: "-2px",
          color: "rgba(50, 79, 245, 0.5)"
       }
    };

    const folder = {
        styles: styling,
        label: game.i18n.localize("autoanimations.menus.options"),
    };
    const afterImage = {
        styles: styling,
        label: "After Image/Video",
    }
    const preExplode = {
        styles: styling,
        label: "Pre Explosion",
    }

</script>

<div class="aa-section-border">
    <VideoSelect
        {animation}
        section="data"
        section02="projectile"
        title="Projectile"
        {idx}
        {category}
    />
    <div class="aa-options-border">
        <TJSSvgFolder {folder}>
            <div slot="summary-end">
                <TJSIconButton button={optionsInfo} on:click={() => OptionsDialog.show("preset", "proToTemp")}/>
            </div>
            <table class="d">
                <tr>
                    <td>
                        <Elevation {animation} section="projectile" />
                    </td>
                    <td>
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
                                bind:value={$animation.data.projectile.options.repeat}
                                placeholder="1"
                                step="1"
                            />
                        </div>
                    </td>
                    <td>
                        <div>
                            <label for=""
                                >{localize('autoanimations.menus.repeat')} {localize("autoanimations.menus.delay")}</label
                            >
                        </div>
                        <div>
                            <input
                                type="number"
                                bind:value={$animation.data.projectile.options.repeatDelay}
                                placeholder="1"
                                step="1"
                            />
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <!--Set Masking-->
                        <div>
                            <label for="Remove {animation._data.id}"
                                >{localize("autoanimations.menus.remove")}
                            </label>
                            <input
                                type="checkbox"
                                id="Remove {animation._data.id}"
                                bind:checked={$animation.data.projectile.options.removeTemplate}
                            />
                        </div>
                    </td>
                    <td>
                        <div>
                            <label for=""
                                >{localize("autoanimations.menus.wait")}</label
                            >
                        </div>
                        <div>
                            <input
                                type="number"
                                bind:value={$animation.data.projectile.options.wait}
                                placeholder="1"
                                step="1"
                            />
                        </div>
                    </td>
                    <td>
                        <!--Set Animation Opacity-->
                        <Opacity {animation} section="projectile"/>
                    </td>
                </tr>
            </table>
        </TJSSvgFolder>
    </div>
    <SoundSettings {animation} {category} {idx} section="data" section02="projectile" />
</div>

<div class="aa-section-border">
    <TJSSvgFolder folder={preExplode}>
        <div slot="summary-end">
            <input
                type="checkbox"
                style="align-self:center"
                title="Toggle Source FX On/Off"
                bind:checked={$animation.data.preExplosion.enable}
            />
        </div>
        <div class={$animation.data.preExplosion.enable ? "" : "aa-disableOpacity"}>
            <VideoSelect
            {animation}
            section="data"
            section02="preExplosion"
            title="Pre Explosion"
            {idx}
            {category}
            />
            <div class="aa-options-border">
                <TJSSvgFolder {folder}>
                    <table class="d">
                        <tr>
                            <td>
                                <Elevation {animation} section="preExplosion" />
                            </td>
                            <td>
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
                                        bind:value={$animation.data.preExplosion.options.repeat}
                                        placeholder="1"
                                        step="1"
                                    />
                                </div>
                            </td>
                            <td>
                                <div>
                                    <label for=""
                                        >{localize('autoanimations.menus.repeat')} {localize("autoanimations.menus.delay")}</label
                                    >
                                </div>
                                <div>
                                    <input
                                        type="number"
                                        bind:value={$animation.data.preExplosion.options.repeatDelay}
                                        placeholder="1"
                                        step="1"
                                    />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div>
                                    <label for=""
                                        >{localize(
                                            "autoanimations.menus.scale"
                                        )}</label
                                    >
                                </div>
                                <div>
                                    <input
                                        type="number"
                                        bind:value={$animation.data.preExplosion.options.scale}
                                        placeholder="1"
                                        step=".01"
                                    />
                                </div>
                            </td>
                            <td>
                                <div>
                                    <label for=""
                                        >{localize(
                                            "autoanimations.menus.wait"
                                        )}</label
                                    >
                                </div>
                                <div>
                                    <input
                                        type="number"
                                        bind:value={$animation.data.preExplosion.options.wait}
                                        placeholder="1"
                                        step="1"
                                    />
                                </div>
                            </td>
                            <td>
                                <!--Set Animation Opacity-->
                                <Opacity {animation} section="preExplosion"/>
                            </td>
                            </tr>
                    </table>
                </TJSSvgFolder>
            </div>
            <SoundSettings {animation} {category} {idx} section="data" section02="preExplosion" />
        </div>
    </TJSSvgFolder>
</div>

<div class="aa-section-border">
    <VideoSelect
        {animation}
        section="data"
        section02="explosion"
        title="Primary Explosion"
        {idx}
        {category}
    />
    <div class="aa-options-border">
        <TJSSvgFolder {folder}>
            <table class="d">
                <tr>
                    <td>
                        <Elevation {animation} section="explosion" />
                    </td>
                    <td>
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
                                bind:value={$animation.data.explosion.options.repeat}
                                placeholder="1"
                                step="1"
                            />
                        </div>
                    </td>
                    <td>
                        <div>
                            <label for=""
                                >{localize('autoanimations.menus.repeat')} {localize("autoanimations.menus.delay")}</label
                            >
                        </div>
                        <div>
                            <input
                                type="number"
                                bind:value={$animation.data.explosion.options.repeatDelay}
                                placeholder="1"
                                step="1"
                            />
                        </div>
                    </td>
                </tr>
                    <td>
                        <div>
                            <label for=""
                                >{localize(
                                    "autoanimations.menus.scale"
                                )}</label
                            >
                        </div>
                        <div>
                            <input
                                type="number"
                                bind:value={$animation.data.explosion.options.scale}
                                placeholder="1"
                                step=".01"
                            />
                        </div>
                    </td>
                    <td>
                        <div>
                            <label for=""
                                >{localize(
                                    "autoanimations.menus.wait"
                                )}</label
                            >
                        </div>
                        <div>
                            <input
                                type="number"
                                bind:value={$animation.data.explosion.options.wait}
                                placeholder="1"
                                step="1"
                            />
                        </div>
                    </td>
                    <td>
                        <!--Set Animation Opacity-->
                        <Opacity {animation} section="explosion"/>
                    </td>
                <tr>
                </tr>
            </table>
        </TJSSvgFolder>
    </div>
    <SoundSettings {category} {animation} {idx} section="data" section02="explosion" />
</div>
<div class="aa-section-border">
    <TJSSvgFolder folder={afterImage}>
        <SectionHeader title="After Image" />
        <div slot="summary-end">
            <input
                type="checkbox"
                style="align-self:center"
                title="Toggle Source FX On/Off"
                bind:checked={$animation.data.afterImage.enable}
            />
        </div>
        <div class={$animation.data.afterImage.enable ? "" : "aa-disableOpacity"}>
        <div class="aa-customAnim-container">
            <div class="aa-custom" style="grid-row: 1/2; grid-column: 1/4; padding-top: 5px">
                <input
                    type="text"
                    bind:value={$animation.data.afterImage.customPath}
                    style="font-weight:normal; font-size:small; border-radius: 5px; border: 1px solid grey"
                />
            </div>
            <div class="aa-custom" style="grid-row: 1/2; grid-column: 4/5">
                <i class="fas fa-file-import"
                title="File Picker"
                style="font-size:1.5em"
                on:click|preventDefault={() => category.selectCustom("data", "afterImage", idx)}
                />
                <i class="fas fa-database"
                title="Sequencer Database Viewer"
                style="font-size:1.5em;margin-left: 10px"
                on:click|preventDefault={() => category.openSequencerViewer()}
                />

            </div>
        </div>
        <div class="aa-options-border">
            <table class="d">
                <tr>
                    <td>
                        <Elevation {animation} section="afterImage" />
                    </td>
                    <td>
                        <!--Set Persistence-->
                        <div>
                            <label for="Persist {animation._data.id}"
                                >{localize("autoanimations.menus.persistant")}
                            </label>
                            <input
                                type="checkbox"
                                id="Persist {animation._data.id}"
                                bind:checked={$animation.data.afterImage.options.persistent}
                            />
                        </div>
                    </td>
                    <td>
                        <div>
                            <label for=""
                                >{localize(
                                    "autoanimations.menus.scale"
                                )}</label
                            >
                        </div>
                        <div>
                            <input
                                type="number"
                                bind:value={$animation.data.afterImage.options.scale}
                                placeholder="1"
                                step=".01"
                            />
                        </div>
                    </td>
                </tr>
            </table>
        </div>
    </div>
    </TJSSvgFolder>
</div>

<svelte:component this={settings.Secondary} {animation} {category} {idx}/>
<svelte:component this={settings.Target} {animation} {category} {idx}/>

<style lang="scss">
    .aa-customAnim-container {
        display: grid;
        grid-template-columns: 22% 31.375% 31.375% 12.5%;
        grid-gap: 1%;
        padding-top: 5px;
        padding-bottom: 5px;
        align-items: center;
        margin-right: 6%;
        margin-left: 3%;
        font-size: small;
        font-weight: bold;
    }
</style>
