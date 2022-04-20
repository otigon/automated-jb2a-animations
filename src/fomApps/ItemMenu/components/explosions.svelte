<script>
    import SelectAnimation from "./SelectAnimation.svelte";
    import SoundSettings from "./soundSettings.svelte";

    export let flagData;
</script>

<div>
    <SelectAnimation previewType="explosion" flagPath="explosions" {flagData} />
    <SoundSettings audioPath="e01" {flagData} />
</div>

<style lang="scss">
</style>
