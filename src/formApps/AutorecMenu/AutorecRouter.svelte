<script>
    import PrimaryMenuShell from "./primaryMenuShell.svelte";

    export let flags;
    export let type;
    export let flagData;
</script>

{#each Object.entries(flags) as menuSection, idx}
<div class="aaMenu-section">
        <PrimaryMenuShell {idx} {type} section={flags[idx]} {flagData}/>
</div>
{/each}


<style lang="scss">
    .aaMenu-section {
        background: rgba(199, 199, 199, 0.85);
        border: 2px solid black;
        border-radius: 10px;
        margin: 1.5% 3% 1.5% 3%;
    }
</style>