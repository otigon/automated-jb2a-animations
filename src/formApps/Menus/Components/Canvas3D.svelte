<script>
    import { getContext } from "svelte";

    import { localize } from "#runtime/util/i18n";

    import { FVTTFilePickerControl } from "#standard/application/control/filepicker";

    import Canvas3dOptions from "./options/Canvas3dOptions.svelte";
    import Canvas3DSecondary from "./options/Canvas3DSecondary.svelte";
    import Canvas3DTokenAnimation from "./options/Canvas3DAnimation.svelte";

    import SoundSettings from "./SoundSettings.svelte";

    //export let animation;
    //export let category;
    //export let idx
    let { animation, category, idx } = getContext("animation-data");

    let pEffects = game.Levels3DPreview?.CONFIG.PARTICLE_SYSTEMS?.ALL_PARTICLE_SYSTEMS_WITHOPTS || {};

    function setSprite(type) {
        let spritePath;
        switch (type) {
            case "explosion":
                spritePath = "modules/levels-3d-preview/assets/particles/dust.png";
                break;
            case "sprite":
                spritePath = "modules/canvas3dcompendium/assets/Tiles/RPG%20Items/Arrow_Golden.glb";
                break;
            default:
                spritePath = "modules/levels-3d-preview/assets/particles/emberssmall.png";
        }
        $animation.levels3d.data.spritePath = spritePath;
    }

    async function selectCustom() {
        const current = animation._data.levels3d.data.spritePath;

       const path = await FVTTFilePickerControl.browse({
          modal: true,
          type: "any",
          current,
       });

       if (path) {
          $animation.levels3d.data.spritePath = path;
       }
    }

    $: type = $animation.levels3d.type;
    $: isEnabled = $animation.levels3d.enable;
</script>

<h1>3D Canvas Particle Animations</h1>
<h3>Requires the 3D Canvas Module by Ripper</h3>
<table class="c">
    <td style="width: 20%; vertical-align: bottom; border:none">
        <div class="flexrow">
            <label for="Canvas3D {animation._data.id}">Enable</label>
            <input type="checkbox" style="position:relative; left: -10px" id="Canvas3D {animation._data.id}" bind:checked={$animation.levels3d.enable} />
        </div>
    </td>
    <td style="width: 60%; border:none" class={isEnabled ? "" : "aa-disableOpacity"}>
        <div class="flexcol" style="align-items: center;">
            <label for="">{localize("autoanimations.menus.type")}</label>
            <select bind:value={$animation.levels3d.type} on:change={() => setSprite(animation._data.levels3d.type)}>
                <option value="token">{localize(`autoanimations.menus.token`)} {localize(`autoanimations.menus.animation`)}</option>
                {#each Object.keys(pEffects) as effect}
                    {#if effect.includes("optgroup")}
                        <optgroup label={localize(`levels3dpreview.particleSystems.${effect}`)} />
                    {:else}
                        <option value={effect}>{localize(`levels3dpreview.particleSystems.${effect}`)}</option>
                    {/if}
                {/each}
            </select>
        </div>
    </td>
    <td style="width: 20%; border:none" />
</table>
<div class="aa-section-border {isEnabled ? '' : 'aa-disableOpacity'}">
    {#if type !== "token"}
        <table class="c">
            <tr>
                <td style="width: 6em; border: none;">
                    <div class="flexrow">
                        <label for="" class="aa-customFont">{localize("autoanimations.menus.sprite")}</label>
                    </div>
                </td>
                <td style=" border: none">
                    <input type="text" bind:value={$animation.levels3d.data.spritePath} style="font-weight:normal; font-size:small; border-radius: 5px;text-align:left; width: 100%" />
                </td>
                <td style="width: 4em;border: none">
                    <i class="fas fa-file-import" title="File Picker" style="font-size:1.5em" on:click|preventDefault={() => selectCustom()} role="presentation" />
                </td>
            </tr>
        </table>
    {/if}
    <Canvas3dOptions {animation} />
    <SoundSettings {animation} {category} {idx} section="levels3d" />
</div>
{#if type !== "token"}
    <div class="aa-section-border {isEnabled ? '' : 'aa-disableOpacity'}">
        <Canvas3DSecondary {animation} />
    </div>
    <div class="aa-section-border {isEnabled ? '' : 'aa-disableOpacity'}">
        <Canvas3DTokenAnimation {animation} />
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
    h3 {
        font-family: "Modesto Condensed", "Palatino Linotype", serif;
        font-size: medium;
        text-align: center;
        margin-right: 5%;
        margin-left: 5%;
        color: black;
        border: none;
    }

    table.c label {
        margin-top: 0.2em;
        font-family: "Modesto Condensed", "Palatino Linotype", serif;
        font-weight: bold;
        font-size: 1.5em;
    }
</style>
