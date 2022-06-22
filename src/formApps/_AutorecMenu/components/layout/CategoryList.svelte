<script>
   /** @type {CategoryStore} */
   export let category;

   $: dataReducer = category.dataReducer;
</script>

<section>
    {#each [...$dataReducer] as animation (animation.id)}
        {animation.name}<br>
    {/each}
</section>

<style lang=scss>
    section {
      overflow-y: auto;
    }
</style>
