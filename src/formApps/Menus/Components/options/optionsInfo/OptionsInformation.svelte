<script>
    import * as options from "./sections";

    export let tabStore;
</script>

<main>
    <div class="aa-options-info">
        <svelte:component this={options[$tabStore]} />
    </div>
</main>

<style lang="scss">
    .aa-options-info {
        font-size: small;
    }

    main {
        position: relative;
        overflow-y: auto;
        padding: 0 3%;
        padding-bottom: 68px;
        scrollbar-width: thin; // For Firefox
    }

</style>
