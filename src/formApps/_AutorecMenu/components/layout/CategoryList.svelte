<script>
   /** @type {CategoryStore} */
   export let category;
</script>

<section>
    {#each category.data as animation (animation.id)}
        {animation.name}<br>
    {/each}
</section>

<style lang=scss>
    section {
      background: rebeccapurple;
    }
</style>
