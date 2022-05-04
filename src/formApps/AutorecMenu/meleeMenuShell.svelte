<svelte:options accessors={true} />

<script>
    import PrimarySection from "../ItemMenu/components/primarySection.svelte";
    import ChooseAnimation from "../ItemMenu/components/chooseAnimation.svelte";
    import Options from "../ItemMenu/components/options.svelte";
    import SoundSettings from "../ItemMenu/components/soundSettings.svelte";
    import { localize } from "@typhonjs-fvtt/runtime/svelte/helper";

    export let flagData;
    $: flagData = flagData;
    const meleeSections = flagData.melee;
    console.log(meleeSections);
    flagData.explosions = {};
    flagData.audio = {};

    let menuType;
    $: menuType = menuType;
    let animation;
    $: animation = animation;
    let variant;
    $: variant = variant;
    let color;
    $: color = color;
    let isCustom;
    $: isCustom = isCustom;
    let customPath;
    $: customPath = customPath;
    let disablePlayOn = true;

</script>

<div>
    {#each Object.entries(meleeSections) as section, i}
        <div class="aaMenu-section">
        </div>
    {/each}
</div>

<style lang="scss">
    .aaMenu-section {
        background: rgba(199, 199, 199, 0.85);
        border: 2px solid black;
        border-radius: 10px;
        margin: 1.5% 3% 1.5% 3%;
    }
</style>
