<script>
    import { localize } from "@typhonjs-fvtt/runtime/svelte/helper";

    import ItemInformation from "./ItemInformation.svelte";

    let currentSelected = "melee";

</script>

<ItemInformation {currentSelected}/>

<style lang="scss">

</style>
