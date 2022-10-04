<svelte:options accessors={true} />

<script>
    import * as newData from "../../_AutorecMenu/store/default-data/newSection"

    import { getContext}        from "svelte";
    import { AnimationStore } from "../store/AnimationStore.js"
    import { ApplicationShell } from "@typhonjs-fvtt/runtime/svelte/component/core";
    import CategoryControl       from "./category/CategoryControl.svelte";
    import { TJSDocument } from '@typhonjs-fvtt/runtime/svelte/store';

    import { flagMigrations } from "../../../mergeScripts/items/itemFlagMerge.js"
    //import { constants}         from "../../../constants.js";

    export let elementRoot;
    export let storageStore = void 0;

    export let item;
    export let itemFlags;

    const doc = new TJSDocument(item);
    $:
    {
    $doc;
    $animation.label = $doc.label
    }

    let aaFlags = itemFlags.autoanimations || {};

    const { application } = getContext('external');
    let newFlagData = structuredClone(aaFlags);

    if (!newFlagData.hasOwnProperty('activeEffectType')) {
        newFlagData = newData.aefx("ontoken")
        newFlagData.activeEffectType = "ontoken";
    }
    if (!newFlagData.hasOwnProperty('isEnabled')) {
        newFlagData.isEnabled = true;
    }
    if (!newFlagData.hasOwnProperty('isCustomized')) {
        newFlagData.isCustomized = false;
    }
    //if (!newFlagData.hasOwnProperty('menu')) {
        //newFlagData.menu = "aefx";
    //}
    if (!newFlagData.hasOwnProperty('version')) {
        newFlagData.version = Object.keys(flagMigrations.migrations).map((n) => Number(n)).reverse()[0]
    }
    newFlagData.label = item.label;

    let animation = new AnimationStore(newFlagData)

    // Application position store reference. Stores need to be a top level variable to be accessible for reactivity.
    const position = application.position;

    // A debounced callback that serializes application state after 500-millisecond delay.
    const storeAppState = foundry.utils.debounce(() => $storageStore = application.state.get(), 500);

    // Reactive statement to invoke debounce callback on Position changes.
    $: storeAppState($position);
</script>

<ApplicationShell bind:elementRoot stylesContent={{ color: "black" }}>
    <CategoryControl {item} {animation} />
</ApplicationShell>
