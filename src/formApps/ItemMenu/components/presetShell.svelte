<script>
    import { localize } from "@typhonjs-fvtt/runtime/svelte/helper";
    import { fade } from "svelte/transition";
    import SoundSettings from "./soundSettings.svelte";

    import Bards from "./presets/bardicInspiration.svelte";
    import Bless from "./presets/bless.svelte";
    import DualAttach from "./presets/dualattach.svelte";
    import Fireball from "./presets/fireball.svelte";
    import HuntersMark from "./presets/huntersmark.svelte";
    import Shield from "./presets/shield.svelte";
    import SneakAttack from "./presets/sneakAttack.svelte";
    import Teleportation from "./presets/teleportation.svelte";
    import Thunderwave from "./presets/thunderwave.svelte";

    export let flagData;
    const preset = flagData.preset;

    export let presetType = preset.presetType;

</script>

{#if presetType === "bardicinspiration"}
    <Bards {presetType} {flagData}/>
{/if}
{#if presetType === "bless"}
    <Bless {flagData}/>
{/if}
{#if presetType === "dualattach"}
    <DualAttach {presetType} {flagData}/>
{/if}
{#if presetType === "fireball"}
    <Fireball {presetType} {flagData}/>
{/if}
{#if presetType === "huntersmark"}
    <HuntersMark {presetType} {flagData}/>
{/if}
{#if presetType === "shieldspell"}
    <Shield {presetType} {flagData}/>
{/if}
{#if presetType === "sneakattack"}
    <SneakAttack {presetType} {flagData}/>
{/if}
{#if presetType === "teleportation"}
    <Teleportation {presetType} {flagData}/>
{/if}
{#if presetType === "thunderwave"}
    <Thunderwave {presetType} {flagData}/>
{/if}

<style lang='scss'>

</style>