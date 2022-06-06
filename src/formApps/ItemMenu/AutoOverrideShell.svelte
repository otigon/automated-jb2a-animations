<script>
    import { localize } from "@typhonjs-fvtt/runtime/svelte/helper";
    import PrimaryMenus from "./autoOverrideMenus/PrimaryMenus.svelte";
    import PresetMenus from "./autoOverrideMenus/PresetMenu.svelte";

    export let flagData;
    export let autoObject;

    let animType = autoObject.menuSection;
    Object.keys(flagData.autoOverride).length > 1 ? flagData.autoOverride : flagData.autoOverride = {...flagData.autoOverride, ...autoObject};
    $: console.log(flagData)
    const autoSection = flagData.autoOverride;


</script>

{#if animType === "preset"}
    <PresetMenus {autoSection}/>
{:else}
    <PrimaryMenus {animType} flagPath="autoOverride" {flagData} />
{/if}

<style lang='scss'>

</style>