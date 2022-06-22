<svelte:options accessors={true} />

<script>
    import { ApplicationShell } from "@typhonjs-fvtt/runtime/svelte/component/core";

    import CategorySelect from "./CategorySelect.svelte";

    export let elementRoot;
</script>

<ApplicationShell bind:elementRoot>
    <CategorySelect />
</ApplicationShell>
