<svelte:options accessors={true} />

<script>
    import { fade } from "svelte/transition";
    import ChooseAnimation from "../ItemMenu/components/chooseAnimation.svelte";
    import Options from "../ItemMenu/components/options.svelte";
    import SoundSettings from "../ItemMenu/components/soundSettings.svelte";
    import AddExplosion from "../ItemMenu/components/explosions.svelte";

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
    export let menuSection;

    menuSection.options ? menuSection.options : (menuSection.options = {});
    menuSection.audio ? menuSection.audio : (menuSection.audio = {});
    const options = menuSection.options;

    export let menuType = options.menuType;
    $: menuType = options.menuType = menuType;
    export let animation = menuSection.animation;
    $: animation = menuSection.animation = animation;
    let variant = options.variant;
    $: variant = options.variant = variant;
    let color = menuSection.color;
    $: color = menuSection.color = color;
    let isCustom = options.enableCustom || false;
    $: isCustom = options.enableCustom = isCustom;
    let customPath = options.customPath;
    $: customPath = options.customPath = customPath;
    //console.log(menuType)
    if (!menuType) {
        menuType = Object.keys(aaTypeMenu[type])[0];
        animation = Object.keys(aaNameMenu[type][menuType])[0];
        variant = Object.keys(aaVariantMenu[type][menuType][animation])[0];
        color = Object.keys(aaColorMenu[type][menuType][animation][variant])[0];
    }
    let isHidden = menuSection.hidden || false;
    $: isHidden = menuSection.hidden = isHidden;
    let customId = `${type}` + `${idx}`;
    let sectionName = menuSection.name || "";
    $: sectionName = menuSection.name = sectionName;
    function removeSection(idx) {
        delete flagData[type][idx]

        for (let i = 0; i < Object.entries(flagData[type]).length; i ++) {
            let compacted = {}
            Object.values(flagData[type]).forEach((val, idx) => compacted[idx] = val);
            flagData[type] = compacted;
        }
        flagData = flagData;
    }
    const showExplosions = ['melee', 'range', 'static']

</script>

<div class="form-group">
    <div style="max-width: 1.5rem;margin-left: .75rem;">
        <input type="checkbox" id={customId} hidden bind:checked={isHidden} />
        <label for={customId}
            ><i class={isHidden ? "fas fa-plus fa-lg aa-green aa-zoom" : "fas fa-minus fa-lg aa-red aa-zoom"} /></label
        >
    </div>
    <input type="text" class="aa-nameField" bind:value={sectionName} placeholder={localize('AUTOANIM.itemName')} />
    <div class="aa-deleteSection" style="max-width: 1.5rem;margin-left: .75rem;">
        <i class="far fa-trash-alt fa-lg" on:click={() => removeSection(idx)}/>
    </div>
</div>
{#if !isHidden}
<div class="autorec-options flexcol" transition:fade>
    <div style="grid-row:1/2; grid-column:2/3">
        <label for=""><i class="far fa-clone aa-zoom"></i></label>
    </div>
    <div style="grid-row:1/2; grid-column:3/4">
        <label for=""><i class="fas fa-cube aa-zoom"></i></label>
    </div>
    <div style="grid-row:1/2; grid-column:8/9">
        <label for=""><i class="fas fa-music aa-zoom"></i></label>
    </div>
    <div style="grid-row:1/2; grid-column:9/10">
        <label for=""><i class="far fa-keyboard aa-zoom"></i></label>
    </div>
</div>
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
    animTypeSwitched={false}
    disablePlayOn={true}
    animType={type}
    flagData={menuSection}
    customId={`${type}-${idx}`}
/>
<Options animType={type} {menuType} flagData={menuSection} />
<SoundSettings audioPath="a01" flagData={menuSection} />
{#if showExplosions.includes(type)}
<AddExplosion flagData={menuSection} />
{/if}

{/if}
<style lang="scss">
    .autorec-options {
        display: grid;
        grid-template-columns: 10% 10% 10% 10% 10% 10% 10% 10% 10% 10%;
        grid-gap: 5px;
        padding: 5px;
        margin-right:8%;
        text-align:center;
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
    .aa-deleteSection {
        color:rgba(74, 74, 74, 0.824);
    }
    .aa-deleteSection:hover {
        text-shadow: 0 0 5px rgba(255, 0, 0, 0.687);
    }
    .aa-zoom:hover {
        transform: scale(1.2)
    }
</style>
