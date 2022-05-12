<script>
    import { localize } from "@typhonjs-fvtt/runtime/svelte/helper";
    import PrimaryMenus from "./autoOverrideMenus/PrimaryMenus.svelte";
    import PresetMenus from "./autoOverrideMenus/PresetMenu.svelte";

    export let flagData;
    export let autoObject;

    let animType = autoObject.menuSection;
    const autoSection = flagData.autoOverride;


</script>

{#if animType === "preset"}
    <PresetMenus />
{:else}
    <PrimaryMenus {animType} {autoObject} {autoSection}/>
{/if}

<style lang='scss'>

</style>