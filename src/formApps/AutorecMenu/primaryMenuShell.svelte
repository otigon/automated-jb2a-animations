<svelte:options accessors={true} />

<script>
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

    export let section;
    export let idx;
    export let type;
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
</script>

<div class="aa-header-section">
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

<style lang="scss">
</style>
