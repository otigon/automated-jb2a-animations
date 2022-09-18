<script>
    import { localize } from "@typhonjs-fvtt/runtime/svelte/helper";

    export let isEnabled;
    export let isCustomized;
    export let isInAutorec;

    let autorecLabel = isInAutorec
        ? game.i18n.localize(`autoanimations.animTypes.${isInAutorec.menu}`)
        : "";
</script>

<div class="aa-Info">
    {#if isEnabled && !isCustomized && isInAutorec}
        <ul>
            <li>
                <strong>Item Animation is enabled but not customized</strong>
            </li>
        </ul>
        <ul>
            <li>
                <strong>Global Automatic Recogntion is matched</strong>
            </li>
        </ul>
        <ul>
            <li>
                <strong>Menu: {autorecLabel} - Label: {isInAutorec.label}</strong>
            </li>
        </ul>
    {:else if isEnabled && !isCustomized && !isInAutorec}
        <ul>
            <li>
                <strong>Item Animation is enabled but not customized</strong>
            </li>
        </ul>
        <ul>
            <li>
                <strong>No Global Automatic Recognition is matched</strong>
            </li>
        </ul>
    {:else if isEnabled && isCustomized}
        <ul>
            <li>
                <strong>Item Animation is enabled but not configured!!</strong>
            </li>
        </ul>
        <ul>
            <li>
                <strong>Global Automatic Recognition will be used</strong>
            </li>
        </ul>
    {:else}
        <ul>
            <li>
                <strong>Animations are disabled for this item</strong>
            </li>
        </ul>
        
    {/if}
</div>

<style lang="scss">
    .aa-Info {
        font-size: 16px;
    }
</style>
