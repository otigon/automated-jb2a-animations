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
    <div transition:fade>
        <Bards {presetType} {flagData} />
    </div>
{/if}
{#if presetType === "bless"}
    <div transition:fade>
        <Bless {flagData} />
    </div>
{/if}
{#if presetType === "dualattach"}
    <div transition:fade>
        <DualAttach {presetType} {flagData} />
    </div>
{/if}
{#if presetType === "fireball"}
    <div transition:fade>
        <Fireball {presetType} {flagData} />
    </div>
{/if}
{#if presetType === "huntersmark"}
    <div transition:fade>
        <HuntersMark {presetType} {flagData} />
    </div>
{/if}
{#if presetType === "shieldspell"}
    <div transition:fade>
        <Shield {presetType} {flagData} />
    </div>
{/if}
{#if presetType === "sneakattack"}
    <div transition:fade>
        <SneakAttack {presetType} {flagData} />
    </div>
{/if}
{#if presetType === "teleportation"}
    <div transition:fade>
        <Teleportation {presetType} {flagData} />
    </div>
{/if}
{#if presetType === "thunderwave"}
    <div transition:fade>
        <Thunderwave {presetType} {flagData} />
    </div>
{/if}

<style lang="scss">
</style> 
