<script>
    import { flip }              from "svelte/animate";
    import { quintOut }          from "svelte/easing";
    import { writable }          from "svelte/store";

    import { applyScrolltop }    from "@typhonjs-fvtt/runtime/svelte/action";
    import { animateEvents }     from "@typhonjs-fvtt/runtime/svelte/animate";

    import BuildMelee            from "../../../Menus/BuildMenu/BuildMelee.svelte";
    import BuildRange            from "../../../Menus/BuildMenu/BuildRange.svelte";
    import BuildOnToken          from "../../../Menus/BuildMenu/BuildOnToken.svelte";
    import BuildTemplateFx       from "../../../Menus/BuildMenu/BuildTemplateFX.svelte";
    import BuildAura             from "../../../Menus/BuildMenu/BuildAura.svelte";
    import BuildPreset           from "../../../Menus/BuildMenu/BuildPreset.svelte";
    import BuildActiveEffects    from "../../../Menus/BuildMenu/BuildActiveEffects.svelte";

    import Animation            from "../animation/Animation.svelte";

    /** @type {CategoryStore} */
    export let category;

    $: dataReducer = category.dataReducer;

    // Svelte doesn't have events for the animate directive; `animateEvents` wraps an animate function and provides
    // events, but also an optional ability to set a store w/ the current animation state. This is used below to set
    // the `no-scroll` class on the main element to remove overflow-y when animating.
    const isAnimating = writable(false);
    const flipWithEvents = animateEvents(flip, isAnimating);

    /**
     * When the data reducer count changes or there is any folder open / close changes invoke `calcAllFolderState`.
     * This is debounced as the all open / closed button may adjust many folder states.
     *
     * @type {Function}
     */
    const onFolderChange = foundry.utils.debounce(() => category.calcAllFolderState(), 100);

    $: onFolderChange($dataReducer);

    let newContentOptions = {
      "aaAutorec-melee": {
         component: BuildMelee,
      },
      "aaAutorec-range": {
         component: BuildRange,
      },
      "aaAutorec-ontoken": {
         component: BuildOnToken,
      },
      "aaAutorec-templatefx": {
         component: BuildTemplateFx,
      },
      "aaAutorec-aura": {
         component: BuildAura,
      },
      "aaAutorec-preset": {
         component: BuildPreset,
      },
      "aaAutorec-aefx": {
         component: BuildActiveEffects,
      }
   }

   $: menuRoute = newContentOptions[category.key].component
</script>

<main use:applyScrolltop={category.stores.scrollTop}
      class:no-scroll={$isAnimating}
      on:openAny={onFolderChange}
      on:closeAny={onFolderChange}>
        {#each [...$dataReducer] as animation, idx (animation.id)}
            <section animate:flipWithEvents={{duration: 250, easing: quintOut}}>
                <Animation {animation} {menuRoute} {idx} {category}/>
            </section>
        {/each}
</main>

<style lang=scss>
  main {
    position: relative;
    overflow-y: auto;
    padding: 0 3%;
    padding-bottom: 102px;
    scrollbar-width: thin;  // For Firefox
  }

  .no-scroll { overflow-y: hidden; }

  section {
    height: fit-content;
    width: 100%;
    margin-bottom: 3px;
  }
</style>
