<script>
    import { flip }             from "svelte/animate";

    import { applyScrolltop }   from "../_tjs/applyScrolltop.js";

    import Animation            from "../animation/Animation.svelte";

    /** @type {CategoryStore} */
    export let category;

    $: dataReducer = category.dataReducer;
</script>

<main use:applyScrolltop={category.stores.scrollTop}>
    {#each [...$dataReducer] as animation (animation.id)}
        <section animate:flip={{duration: 250}}>
            <Animation {animation} />
        </section>
    {/each}
</main>

<style lang=scss>
  main {
    overflow-y: auto;
    padding: 0 3%;
    scrollbar-width: thin;
  }

  section {
    height: fit-content;
    width: 100%;
    margin-bottom: 3px;
  }
</style>
