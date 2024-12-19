<svelte:options accessors={true} />

<script>
    //import * as common from "../../_AutorecMenu/store/default-data/common"
    import * as newData from "../../_AutorecMenu/store/default-data/newSection"

    import { getContext}        from "svelte";
    import { AnimationStore } from "../store/AnimationStore.js"
    import { ApplicationShell } from "#runtime/svelte/component/application";
    import CategoryControl       from "./category/CategoryControl.svelte";
    import { TJSDocument } from "#runtime/svelte/store/fvtt/document";

    import { flagMigrations } from "../../../mergeScripts/items/itemFlagMerge.js"
    // import { constants }         from "#constants";

    export let elementRoot;
    export let storageStore = void 0;

    export let item;
    export let itemFlags;

    const doc = new TJSDocument(item);
    $:
    {
    $doc;
    $animation.label = $doc.name
    }

    let aaFlags = itemFlags.autoanimations || {};

    const { application } = getContext("#external");
    let newFlagData = foundry.utils.deepClone(aaFlags);

    if (!newFlagData.hasOwnProperty('menu')) {
        newFlagData = newData.melee()
        //newFlagData.activeEffectType = "ontoken";
    }
    if (!newFlagData.hasOwnProperty('isEnabled')) {
        newFlagData.isEnabled = true;
    }
    if (!newFlagData.hasOwnProperty('isCustomized')) {
        newFlagData.isCustomized = false;
    }
    if (!newFlagData.hasOwnProperty('fromAmmo')) {
        newFlagData.fromAmmo = false;
    }
    if (!newFlagData.hasOwnProperty('version')) {
        newFlagData.version = Object.keys(flagMigrations.migrations).map((n) => Number(n)).reverse()[0]
    }
    newFlagData.label = item.name;

    let animation = new AnimationStore(newFlagData)

    // Application position store reference. Stores need to be a top level variable to be accessible for reactivity.
    const position = application.position;

    // A debounced callback that serializes application state after 500-millisecond delay.
    const storeAppState = foundry.utils.debounce(() => $storageStore = application.state.current(), 500);

    // Reactive statement to invoke debounce callback on Position changes.
    $: storeAppState($position);
</script>

<ApplicationShell bind:elementRoot stylesContent={{ color: "black" }}>
    <CategoryControl {item} {animation} />
</ApplicationShell>
