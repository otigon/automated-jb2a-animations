<script>
    import { localize } from "#runtime/util/i18n";

    export let currentSelected;
</script>

<div class="aa-options-info">
    {#if currentSelected === "melee"}
        <table id="options-table" cellpadding="0" cellspacing="0" border="1">
            <tr>
                <th colspan="2"> Item Settings</th>
            </tr>
            <tr>
                <td class="aa-table">
                    <strong
                        >{localize("autoanimations.menus.animation")}
                        {localize("autoanimations.menus.enabled")}</strong
                    >
                </td>
                <td> Turn Animations for this item ON or OFF </td>
            </tr>
            <tr>
                <td class="aa-table">
                    <strong
                        >{localize("autoanimations.menus.customize")}
                        {localize("autoanimations.menus.item")}</strong
                    >
                </td>
                <td>
                    Toggle custom Item Animation. If enabled the Autorec menu
                    will be disabled for this Item.
                </td>
            </tr>
        </table>
    {/if}
</div>

<style lang="scss">
    .aa-options-info {
        font-size: small;
    }
    #options-table th {
        padding-top: 12px;
        padding-bottom: 12px;
        text-align: center;
        background-color: #04aa6d;
        color: white;
    }
    #options-table {
        font-family: Arial, Helvetica, sans-serif;
        border-collapse: collapse;
        width: 100%;
    }
    #options-table td,
    #options-table th {
        border: 1px solid rgb(0, 0, 0);
        padding: 8px;
    }
    #options-table tr:nth-child(even) {
        background-color: rgb(240 238 227);
    }
    #options-table tr:nth-child(odd) {
        background-color: rgb(203 201 190);
    }
    .aa-table {
        text-align: center;
    }
</style>
