<svelte:options accessors={true} />

<script>
    import { getContext}        from "svelte";

    import { ApplicationShell } from "@typhonjs-fvtt/runtime/svelte/component/core";
    import { debounce }         from "@typhonjs-fvtt/runtime/svelte/util";

    import CategorySelect       from "./category/CategorySelect.svelte";

    import { aaSessionStorage } from "../../../sessionStorage.js";
    import { constants}         from "../../../constants.js";

    export let elementRoot;

    const context = getContext('external');

    // Get a store that is synchronized with session storage.
    const positionStore = aaSessionStorage.getStore(`${constants.moduleId}-autorec-position`);

    // Application position store reference. Stores need to be a top level variable to be accessible for reactivity.
    const position = context.application.position;

    // A debounced callback that serializes position after 500-millisecond delay.
    const storePosition = debounce((data) => $positionStore = data, 500);

    // Reactive statement to invoke debounce callback on Position changes.
    $: storePosition($position);
</script>

<ApplicationShell bind:elementRoot>
    <CategorySelect />
</ApplicationShell>
