<svelte:options accessors={true} />

<script>
    import { getContext }       from "svelte";

    import { ApplicationShell } from "#runtime/svelte/component/application";
    import { Timing }           from "#runtime/util";

    import { TJSSettingsSwap }  from "#standard/component/fvtt/settings";

    import CategorySelect       from "./category/CategorySelect.svelte";

    import SettingsFooter       from "./SettingsFooter.svelte";

    import { constants }        from "#constants";
    import { gameSettings }     from "#gameSettings";
    import { aaSessionStorage } from "#sessionStorage";

    import { AutorecSanitizer } from "../../../aa-classes/autorecSanityCheck.js"

    AutorecSanitizer.checkForDuplicates();

    export let elementRoot;

    const { application } = getContext("#external");

    // Get a store that is synchronized with session storage.
    const stateStore = aaSessionStorage.getStore(`${constants.moduleId}-autorec-appstate`);

    // Application position store reference. Stores need to be a top level variable to be accessible for reactivity.
    const position = application.position;

    // A debounced callback that serializes application state after 500-millisecond delay.
    const storePosition = Timing.debounce(() => $stateStore = application.state.current(), 500);

    // Reactive statement to invoke debounce callback on Position changes.
    $: storePosition($position);
</script>

<ApplicationShell bind:elementRoot>
    <TJSSettingsSwap settings={gameSettings} options={{ storage: aaSessionStorage }}>
        <CategorySelect />
        <SettingsFooter slot=settings-footer />
    </TJSSettingsSwap>
</ApplicationShell>
