<script>
    import { fade } from "svelte/transition";

    import Bards from "../../components/presets/bardicInspiration.svelte";
    import Bless from "../../components/presets/bless.svelte";
    import DualAttach from "../../components/presets/dualattach.svelte";
    import Fireball from "../../components/presets/fireball.svelte";
    import HuntersMark from "../../components/presets/huntersmark.svelte";
    import Shield from "../../components/presets/shield.svelte";
    import SneakAttack from "../../components/presets/sneakAttack.svelte";
    import Teleportation from "../../components/presets/teleportation.svelte";
    import Thunderwave from "../../components/presets/thunderwave.svelte";

    export let autoSection;
    export let presetType = autoSection.presetType;

</script>

{#if presetType === "bardicinspiration"}
    <div transition:fade>
        <Bards {presetType} flagData={autoSection} isAutoRec={true}/>
    </div>
{/if}
{#if presetType === "bless"}
    <div transition:fade>
        <Bless flagData={autoSection} isAutoRec={true}/>
    </div>
{/if}
{#if presetType === "dualattach"}
    <div transition:fade>
        <DualAttach {presetType} flagData={autoSection} isAutoRec={true}/>
    </div>
{/if}
{#if presetType === "fireball"}
    <div transition:fade>
        <Fireball {presetType} flagData={autoSection} isAutoRec={true}/>
    </div>
{/if}
{#if presetType === "huntersmark"}
    <div transition:fade>
        <HuntersMark {presetType} flagData={autoSection} isAutoRec={true}/>
    </div>
{/if}
{#if presetType === "shieldspell"}
    <div transition:fade>
        <Shield {presetType} flagData={autoSection} isAutoRec={true}/>
    </div>
{/if}
{#if presetType === "sneakattack"}
    <div transition:fade>
        <SneakAttack {presetType} flagData={autoSection} isAutoRec={true}/>
    </div>
{/if}
{#if presetType === "teleportation"}
    <div transition:fade>
        <Teleportation {presetType} flagData={autoSection} isAutoRec={true}/>
    </div>
{/if}
{#if presetType === "thunderwave"}
    <div transition:fade>
        <Thunderwave {presetType} flagData={autoSection} isAutoRec={true}/>
    </div>
{/if}


<style lang='scss'>

</style>