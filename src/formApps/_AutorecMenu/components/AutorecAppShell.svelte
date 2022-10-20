<svelte:options accessors={true} />

<script>
    import { getContext}        from "svelte";

    import { ApplicationShell } from "@typhonjs-fvtt/runtime/svelte/component/core";
    import { debounce }         from "@typhonjs-fvtt/runtime/svelte/util";

    import { TJSSettingsSwap }  from "@typhonjs-fvtt/svelte-standard/component";

    import CategorySelect       from "./category/CategorySelect.svelte";

    import SettingsFooter       from "./SettingsFooter.svelte";

    import { constants }        from "../../../constants.js";
    import { gameSettings }     from "../../../gameSettings.js";
    import { aaSessionStorage } from "../../../sessionStorage.js";

    export let elementRoot;

    const { application } = getContext('external');

    // Get a store that is synchronized with session storage.
    const stateStore = aaSessionStorage.getStore(`${constants.moduleId}-autorec-appstate`);

    // Application position store reference. Stores need to be a top level variable to be accessible for reactivity.
    const position = application.position;

    // A debounced callback that serializes application state after 500-millisecond delay.
    const storePosition = debounce(() => $stateStore = application.state.get(), 500);

    // Reactive statement to invoke debounce callback on Position changes.
    $: storePosition($position);
</script>

<ApplicationShell bind:elementRoot stylesContent={{ color: "black" }}>
    <TJSSettingsSwap settings={gameSettings} options={{ test: true }}>
        <CategorySelect />
        <SettingsFooter slot=settings-footer />
    </TJSSettingsSwap>
</ApplicationShell>
