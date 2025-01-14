<script>
    import { applyScrolltop }    from "#runtime/svelte/action/dom/properties";

    import Animation            from "../animation/Animation.svelte";

    /** @type {CategoryStore} */
    export let category;

    $: dataReducer = category.dataReducer;

    /**
     * When the data reducer count changes or there is any folder open / close changes invoke `calcAllFolderState`.
     * This is debounced as the all open / closed button may adjust many folder states.
     *
     * @type {Function}
     */
    const onFolderChange = foundry.utils.debounce(() => category.calcAllFolderState(), 100);

    $: onFolderChange($dataReducer);
</script>

<main use:applyScrolltop={category.stores.scrollTop}
      on:openAny={onFolderChange}
      on:closeAny={onFolderChange}>
        {#each [...$dataReducer] as animation, idx (animation.id)}
            <section>
                <Animation {animation} {idx} {category}/>
            </section>
        {/each}
</main>

<style lang=scss>
  main {
    position: relative;
    overflow-y: auto;
    padding: 0 3%;
    padding-bottom: 150px;
    scrollbar-width: thin;  // For Firefox
  }

  section {
    height: fit-content;
    width: 100%;
    margin-bottom: 3px;
  }
</style>
