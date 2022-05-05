<svelte:options accessors={true} />

<script>
    import { fade, scale } from "svelte/transition";
    import ChooseAnimation from "../ItemMenu/components/chooseAnimation.svelte";
    import Options from "../ItemMenu/components/options.svelte";
    import SoundSettings from "../ItemMenu/components/soundSettings.svelte";
    import { localize } from "@typhonjs-fvtt/runtime/svelte/helper";
    import {
        aaTypeMenu,
        aaNameMenu,
        aaVariantMenu,
        aaColorMenu,
    } from "../../animation-functions/databases/jb2a-menu-options.js";

    export let flagData;
    export let type;
    export let idx;
    let section = flagData[type][idx];
    section.options ? section.options : (section.options = {});
    section.audio ? section.audio : (section.audio = {});
    const options = section.options;
    console.log(section);

    export let menuType = options.menuType;
    $: menuType = options.menuType = menuType;
    export let animation = section.animation;
    $: animation = section.animation = animation;
    let variant = options.variant;
    $: variant = options.variant = variant;
    let color = section.color;
    $: color = section.colro = color;
    let isCustom = options.enableCustom || false;
    $: isCustom = options.enableCustom = isCustom;
    let customPath = options.customPath;
    $: customPath = options.customPath = customPath;

    if (!menuType) {
        menuType = Object.keys(aaTypeMenu[type])[0];
        animation = Object.keys(aaNameMenu[type][menuType])[0];
        variant = Object.keys(aaVariantMenu[type][menuType][animation])[0];
        color = Object.keys(aaColorMenu[type][menuType][animation][variant])[0];
    }
    let isHidden = section.hidden || false;
    $: isHidden = section.hidden = isHidden;
    let customId = `${type}` + `${idx}`;
    let sectionName = section.name || "";
    $: sectionName = section.name = sectionName;
    function removeSection(idx) {
        delete flagData[type][idx]
        for (let i = 0; i < Object.entries(flagData[type]).length; i ++) {
            let compacted = {}
            Object.values(flagData[type]).forEach((val, idx) => compacted[idx] = val);
            flagData[type] = compacted;
        }
    }
</script>

<div class="form-group">
    <div class="aaToolTip" style="max-width: 1.5rem;margin-left: .75rem;">
        <input type="checkbox" id={customId} hidden bind:checked={isHidden} />
        <label for={customId}
            ><i class={isHidden ? "fas fa-plus fa-lg aa-green" : "fas fa-minus fa-lg aa-red"} /></label
        >
    </div>
    <input type="text" class="aa-nameField" bind:value={sectionName} placeholder={localize('AUTOANIM.itemName')} />
    <div class="aaToolTip" style="max-width: 1.5rem;margin-left: .75rem;text-shadow: 0 0 5px rgba(255, 0, 0, 0.687);">
        <i class="far fa-trash-alt fa-lg" on:click={() => removeSection(idx)}/>
    </div>
</div>
{#if !isHidden}
<div class="aa-header-section" transition:fade>
    <div class="aa-header">
        <div class="flexcol" style="grid-row:1/2; grid-column:3/4">
            <label for=""
                >{localize("autoanimations.menus.primary")}
                {localize("autoanimations.menus.animation")}</label
            >
        </div>
    </div>
</div>
<ChooseAnimation
    bind:menuType
    bind:animation
    bind:variant
    bind:color
    bind:isCustom
    bind:customPath
    flagPath="PrimaryAnimation"
    animTypeSwitched={true}
    disablePlayOn={true}
    animType={type}
    flagData={section}
    customId={`${type}-${idx}`}
/>
<Options animType={type} {menuType} flagData={section} />
<SoundSettings audioPath="a01" flagData={section} />
{/if}
<style lang="scss">
    .autorec-header {
        display: grid;
        grid-template-columns: 5% 5% 5% 5% 60% 5% 5% 5% 5%;
        grid-gap: 5px;
        padding: 5px;
        align-items: center;
    }
    .aa-nameField {
        background-color: rgba(210, 210, 210, 0.75);
        border: 1.5px outset rgba(0, 0, 0, 0.5);
        border-radius: 13px;
        text-align: center;
        font-weight: bold;
        font-size: large;
        color: black;
        box-shadow: 5px;
    }
    .aa-nameField:placeholder-shown{
        opacity:.40;
        color: black;
    }
</style>
