<script>
    import { getContext }   from "svelte";
    import { localize }     from "#runtime/util/i18n";

    import { AAAutorecManager } from "./AAAutorecManager.js"

    const { application } = getContext("#external");

    export let type;
    export let menu;

    let allMenus = false, melee, range, ontoken, templatefx, aura, preset, aefx;

    $: melee = range = ontoken = templatefx = aura = preset = aefx = allMenus;

    function importSelected() {
        let selectedMenus = {
            melee,
            range,
            ontoken,
            templatefx,
            aura,
            preset,
            aefx
        }
        if (type === "merge") {
            mergeMenus(selectedMenus);
        } else if (type === "overwrite") {
            overwriteMenus(selectedMenus);
        }
        application.close();
    }

    async function mergeMenus(selectedMenus) {
        let isValid = validateJson(menu);
        if (!isValid) {
            custom_error("You did not provide a valid JSON!");
            return;
        }
        const menuData = JSON.parse(menu)

        function validateJson(json) {
        try {
            JSON.parse(json);
            return true;
        } catch (e) {
            return false;
        }
    }
        AAAutorecManager.mergeMenus(menuData, {...selectedMenus})
    }

    async function overwriteMenus(selectedMenus) {
        AAAutorecManager.overwriteMenus(menu, {shouldSubmit: true, ...selectedMenus})
    }
</script>

<header>
    <div style="text-align: center; font-size: 1.5em">
        <label for="">Choose Menus Import</label>
    </div>
</header>
<table class="e">
    <tr>
        <th colspan="2">
            <div>
                <input
                    type="checkbox"
                    bind:checked={allMenus}
                />
                <label for="">Check / Uncheck All</label>
            </div>
        </th>
    </tr>
    <tr>
        <td>
            <div>
                <input type="checkbox" bind:checked={melee} />
                <label for=""
                    >{localize("autoanimations.animTypes.melee")}</label
                >
            </div>
        </td>
        <td>
            <div>
                <input type="checkbox" bind:checked={range} />
                <label for=""
                    >{localize("autoanimations.animTypes.range")}</label
                >
            </div>
        </td>
    </tr>
    <tr>
        <td>
            <div>
                <input type="checkbox" bind:checked={ontoken} />
                <label for=""
                    >{localize("autoanimations.animTypes.ontoken")}</label
                >
            </div>
        </td>
        <td>
            <div>
                <input type="checkbox" bind:checked={templatefx} />
                <label for=""
                    >{localize("autoanimations.animTypes.templatefx")}</label
                >
            </div>
        </td>
    </tr>
    <tr>
        <td>
            <div>
                <input type="checkbox" bind:checked={aura} />
                <label for=""
                    >{localize("autoanimations.animTypes.aura")}</label
                >
            </div>
        </td>
        <td>
            <div>
                <input type="checkbox" bind:checked={preset} />
                <label for=""
                    >{localize("autoanimations.animTypes.preset")}</label
                >
            </div>
        </td>
    </tr>
    <tr>
        <td>
            <div>
                <input type="checkbox" bind:checked={aefx} />
                <label for="">{localize("autoanimations.animTypes.aefx")}</label
                >
            </div>
        </td>
    </tr>
</table>
<div class="aa-list" />

<footer>
    <button on:click={() => importSelected()}>Import</button>
</footer>

<style lang="scss">
    table label {
        position: relative;
        bottom: 0.3em;
        font-weight: bold;
    }
</style>
