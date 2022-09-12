<svelte:options accessors={true} />

<script>
    import { getContext}        from "svelte";

    import { ApplicationShell } from "@typhonjs-fvtt/runtime/svelte/component/core";

    import MenuManager from "./MenuManager.svelte"

    export let elementRoot;

    const { application } = getContext('external');

</script>

<ApplicationShell bind:elementRoot stylesContent={{ color: "black", background: "rgba(180, 180, 180, .8)" }}>
    <MenuManager />
</ApplicationShell>
