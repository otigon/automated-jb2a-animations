<script>
    // import { localize } from "#runtime/util/i18n";

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
                <strong>Item Animation is enabled but not customized</strong>  <i class="fas fa-check aa-green"></i>
            </li>
        </ul>
        <ul>
            <li>
                <strong>Global Automatic Recogntion is matched</strong>  <i class="fas fa-check aa-green"></i>
            </li>
        </ul>
        <ul>
            <li>
                <strong>Menu: {autorecLabel} - Label: {isInAutorec.label}</strong>  <i class="fas fa-check aa-green"></i>
            </li>
        </ul>
    {:else if isEnabled && !isCustomized && !isInAutorec}
        <ul>
            <li>
                <strong>Item Animation is enabled but not customized</strong>  <i class="fas fa-check aa-green"></i>
            </li>
        </ul>
        <ul>
            <li>
                <strong>No Global Automatic Recognition is matched</strong>  <i class="fas fa-xmark aa-red"></i>
            </li>
        </ul>
    {:else if isEnabled && isCustomized}
        <ul>
            <li>
                <strong>Item Animation is enabled but not configured!!</strong>  <i class="fas fa-xmark aa-red"></i>
            </li>
        </ul>
        {#if isInAutorec}
        <ul>
            <li>
                <strong>Global Automatic Recognition will be used</strong>
            </li>
        </ul>
        <ul>
            <li>
                <strong>Global Automatic Recogntion is matched</strong>  <i class="fas fa-check aa-green"></i>
            </li>
        </ul>
        <ul>
            <li>
                <strong>Menu: {autorecLabel} - Label: {isInAutorec.label}</strong>  <i class="fas fa-check aa-green"></i>
            </li>
        </ul>
        {:else}
        <ul>
            <li>
                <strong>No Global Automatic Recognition is matched</strong>  <i class="fas fa-xmark aa-red"></i>
            </li>
        </ul>
        {/if}
    {:else}
        <ul>
            <li>
                <strong>Animations are disabled for this item</strong>  <i class="fas fa-xmark aa-red"></i>
            </li>
        </ul>

    {/if}
</div>

<style lang="scss">
    .aa-Info {
        font-size: 16px;
    }
</style>
