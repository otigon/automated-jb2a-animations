<script>
    import { AAAutorecFunctions } from "../../../../../aa-classes/AAAutorecFunctions";

    export let animation;

    const currentLabel = animation._data.label;
    const menu = Animation._data.menu;

    $: checkAutorec = "";
</script>

<div>
    <label for="">Input Label for the new Autorec Section</label>
    <input type="text" bind:value={$animation.label} />
</div>

<div>
    {$animation.label}
</div>

<style lang="scss">
</style>
