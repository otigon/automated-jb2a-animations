<script>

    import { TJSSvgFolder } from "@typhonjs-fvtt/svelte-standard/component";
    import { localize } from "@typhonjs-fvtt/runtime/svelte/helper";

    import SoundSettings from "../components/SoundSettingsNested.svelte";
    import SectionHeader from "../components/SectionHeader.svelte";
    import Opacity from "./inputComponents/Opacity.svelte";
    import ScaleRadius from "./inputComponents/ScaleRadius.svelte";

    export let animation;
    export let category;
    export let idx;

    const folder = {
        styles: {
            "--tjs-summary-font-family":
                '"Modesto Condensed", "Palatino Linotype", serif',
            "--tjs-summary-font-size": "1.1em",
            "--tjs-summary-chevron-size": "0.7em",
        },
        label: game.i18n.localize("autoanimations.menus.options"),
    };

    $: persistent = $animation.data.loop.options.persistent;
</script>

<div class="aa-section-border">
    <SectionHeader title={localize("autoanimations.variants.intro") + " " + localize("autoanimations.menus.animation")}/>
    <table class="c">
        <tr>
            <td style=" border: none">
                <input
                type="text"
                bind:value={$animation.data.intro.customPath}
                style="font-weight:normal; font-size:small; border-radius: 5px; border: 1px solid grey"
                />
            </td>
            <td style="width: 12%;border: none">
                <i class="fas fa-file-import"
                title="File Picker"
                style="font-size:1.5em"
                on:click|preventDefault={() => category.selectCustom("data", "intro", idx)}
                />
                <i class="fas fa-database"
                title="Sequencer Database Viewer"
                style="font-size:1.5em;margin-left: 10px"
                on:click|preventDefault={() => category.openSequencerViewer()}
                />    
            </td>
        </tr>
    </table>
    <div class="aa-options-border">
        <TJSSvgFolder {folder}>
            <table class='d'>
                <tr>
                    <td>
                        <!--Set belowToken-->
                        <div class="form-group">
                            <label for="BelowIntro {animation._data.id}"
                                >{localize("autoanimations.menus.below")}
                            <input
                                type="checkbox"
                                id="BelowIntro {animation._data.id}"
                                bind:checked={$animation.data.intro.options.below}
                            /></label>
                        </div>
                    </td>
                    <td>
                        <!--Set Animation Opacity-->
                        <Opacity {animation} section="intro"/>
                    </td>
                    <td>
                        <!--Set Size of Animation-->
                        <ScaleRadius
                            {animation}
                            section={"intro"}
                            field={"size"}
                            step="0.01"
                        />
                    </td>    
                </tr>
                <tr>
                    <td>
                        <div>
                            <label for=""
                                >{localize("autoanimations.menus.wait")}</label
                            >
                        </div>
                        <div>
                            <input
                                type="number"
                                bind:value={$animation.data.intro.options.wait}
                                placeholder="1"
                                step="1"
                            />
                        </div>
                    </td>
                    <td>
                        <div>
                            <label for=""
                                >{localize("autoanimations.menus.fadeIn")}</label
                            >
                        </div>
                        <div>
                            <input
                                type="number"
                                bind:value={$animation.data.intro.options.fadeIn}
                                placeholder="1"
                                step="1"
                            />
                        </div>
                    </td>
                    <td></td>
                </tr>
            </table>
        </TJSSvgFolder>
    </div>
    <SoundSettings {animation} {category} {idx} section="data" section02="intro" />
</div>

<div class="aa-section-border">
    <SectionHeader title={localize("autoanimations.variants.loop") + " " + localize("autoanimations.menus.animation")}/>
    <table class="c">
        <tr>
            <td style=" border: none">
                <input
                type="text"
                bind:value={$animation.data.loop.customPath}
                style="font-weight:normal; font-size:small; border-radius: 5px; border: 1px solid grey"
                />
            </td>
            <td style="width: 12%;border: none">
                <i class="fas fa-file-import"
                title="File Picker"
                style="font-size:1.5em"
                on:click|preventDefault={() => category.selectCustom("data", "loop", idx)}
                />
                <i class="fas fa-database"
                title="Sequencer Database Viewer"
                style="font-size:1.5em;margin-left: 10px"
                on:click|preventDefault={() => category.openSequencerViewer()}
                />    
            </td>
        </tr>
    </table>
    <div class="aa-options-border">
        <TJSSvgFolder {folder}>
            <table class='d'>
                <tr>
                    <td>
                        <!--Set belowToken-->
                        <div class="form-group">
                            <label for="BelowIntro {animation._data.id}"
                                >{localize("autoanimations.menus.below")}
                            <input
                                type="checkbox"
                                id="BelowIntro {animation._data.id}"
                                bind:checked={$animation.data.loop.options.below}
                            /></label>
                        </div>
                    </td>
                    <td>
                        <!--Set Animation Opacity-->
                        <Opacity {animation} section="loop"/>
                    </td>
                    <td>
                        <!--Set Size of Animation-->
                        <ScaleRadius
                            {animation}
                            section={"loop"}
                            field={"size"}
                            step="0.01"
                        />
                    </td>    
                </tr>
                <tr>
                    <td>
                        <!--Set Persistence-->
                        <div class="form-group">
                            <label for="Persist {animation._data.id}"
                                >{localize("autoanimations.menus.persistant")}
                            
                            <input
                                type="checkbox"
                                id="Persist {animation._data.id}"
                                bind:checked={$animation.data.loop.options.persistent}
                            /></label>
                        </div>
                    </td>
                    <td>
                        <!--Set Visibility Binding-->
                        <div
                            class="form-group {persistent
                                ? ''
                                : 'aa-disableOpacity'}"
                        >
                            <label for="Vis {animation._data.id}"
                                >{localize("autoanimations.menus.bind")}
                                {localize("autoanimations.menus.visibility")}
                            
                            <input
                                type="checkbox"
                                id="Vis {animation._data.id}"
                                bind:checked={$animation.data.loop.options.unbindVisibility}
                            /></label>
                        </div>
                    </td>
                    <td>
                        <!--Set Alpha Binding-->
                        <div
                            class="form-group {persistent
                                ? ''
                                : 'aa-disableOpacity'}"
                        >
                            <label for="Alpha {animation._data.id}"
                                >{localize("autoanimations.menus.bind")}
                                {localize("autoanimations.menus.alpha")}
                            
                            <input
                                type="checkbox"
                                id="Alpha {animation._data.id}"
                                bind:checked={$animation.data.loop.options.unbindAlpha}
                            /></label>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                        <div>
                            <label for=""
                                >{localize("autoanimations.menus.fadeOut")}</label
                            >
                        </div>
                        <div>
                            <input
                                type="number"
                                bind:value={$animation.data.loop.options.fadeOut}
                                placeholder="1"
                                step="1"
                            />
                        </div>
                    </td>
                    <td></td>
                </tr>
            </table>
        </TJSSvgFolder>
    </div>
</div>

<style lang='scss'>
</style>