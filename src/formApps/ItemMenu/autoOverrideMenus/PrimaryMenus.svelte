<script>
    import { fade } from "svelte/transition";
    import TotalPreview from "../videoPreviews/fullPreview.js";
    import { storeItemData } from "../itemPreviewStore.js";
    import ChooseAnimation from "../../components/chooseAnimation.svelte";
    import Options from "../../components/options.svelte";
    import SoundSettings from "../../components/soundSettings.svelte";
    import RangeSwitch from "../../components/meleeRange.svelte";
    import ExplosionSettings from "../../components/explosions.svelte";

    export let animType;
    export let flagData;
    
    const autoSection = flagData.autoOverride;
    const options = autoSection.options;
    const primarySection = autoSection.primary

    export let menuType = primarySection.menuType || options.menuType;
    export let animation = primarySection.animation;
    let variant = primarySection.variant;
    let color = primarySection.color;
    let isCustom = primarySection.enableCustom || false;
    let customPath = primarySection.customPath;
    
    $: {
        menuType = primarySection.menuType = menuType;
        animation = primarySection.animation = animation;
        variant = primarySection.variant = variant;
        color = primarySection.color = color;
        isCustom = primarySection.enableCustom = isCustom;
        customPath = primarySection.customPath = customPath;
        console.log(flagData)
        storeItemData.set(flagData);
    }

    function fullPreview() {
        console.log($storeItemData)
        new TotalPreview().render(true);
    }
</script>

<div class="aaMenu-section">
    <div class="aa-header-section">
        <div class="aa-header">
            <div class="flexcol" style="grid-row:1/2; grid-column:3/4">
                <label for="">Override Global Settings</label>
            </div>
            <div
                class="flexcol"
                style="grid-row:1/2; grid-column:1/2"
                transition:fade
            >
                <i
                    class="fas fa-film aa-video-preview"
                    on:click={() => fullPreview()}
                />
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
        customId="AutoOverride"
        flagPath="PrimaryAnimation"
        {animType}
        {flagData}
    />
    <Options {animType} {menuType} flagData={autoSection} />
    <SoundSettings audioPath="a01" flagData={autoSection} />
</div>
{#if animType === "melee"}
<div class="aaMenu-section">
    <RangeSwitch
        primaryAnimation={animation}
        primaryMenuType={menuType}
        {flagData}
        previewStoreData={flagData}
        isOverride={true}
    />
</div>
{/if}
{#if animType === "melee" || animType === "range" || animType === "static"}
<div class="aaMenu-section">
    <ExplosionSettings isOverride={true} {flagData} />
</div>
{/if}


<style lang="scss">
</style>
