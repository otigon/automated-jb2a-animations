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
                <strong>Item Animation is enabled and customized</strong>
            </li>
        </ul>
        <ul>
            <li>
                <strong>Global Automatic Recognition is disabled for this item</strong>
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

<table class="overview">
    <tr>
        <td>
            <strong
                >{localize("autoanimations.menus.animation")}
                {localize("autoanimations.menus.enabled")}</strong
            >
        </td>
        <td> Turn Animations for this item ON or OFF </td>
    </tr>
    <tr>
        <td>
            <strong
                >{localize("autoanimations.menus.customize")}
                {localize("autoanimations.menus.item")}</strong
            >
        </td>
        <td>
            Toggle custom Item Animation. If enabled the Autorec menu will be
            disabled for this Item.
        </td>
    </tr>
    <tr>
        <td>
            <strong>Copy Autorec</strong>
        </td>
        <td> Copy a matching Autorec entry, if available, to this Item. </td>
    </tr>
    <tr>
        <td>
            <strong>Use Ammo</strong>
        </td>
        <td>
            <strong>DnD5e System ONLY.</strong> If enabled, this Item will use animations
            for active ammunition from the Global Automatic Recognition menu if one
            is found.
        </td>
    </tr>
</table>

<style lang="scss">
    table {
        border-collapse: separate;
        border: none;
        background: none;
        font-size: 0.8em;
        padding-right: 0.8em;
        padding-left: 0.8em;
    }
    table.overview {
        td {
            font-size: 15px;
        }
    }
    .aa-Info {
        font-size: 16px;
    }
</style>
