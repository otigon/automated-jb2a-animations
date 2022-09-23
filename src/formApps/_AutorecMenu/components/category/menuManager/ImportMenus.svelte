<script>
    import { TJSDialog }    from "@typhonjs-fvtt/runtime/svelte/application";
    import { localize }     from "@typhonjs-fvtt/runtime/svelte/helper";
    import { getContext }   from "svelte";
    import { autoRecMigration } from "../../../../../mergeScripts/autorec/autoRecMerge.js";
    import { AAAutorecFunctions } from "../../../../../aa-classes/aaAutorecFunctions.js";
    import { AAAutorecManager } from "./AAAutorecManager.js"

    const { application } = getContext("external");

    export let type;
    export let menu;

    $: allMenus = false;
    $: melee = false;
    $: range = false;
    $: ontoken = false;
    $: templatefx = false;
    $: aura = false;
    $: preset = false;
    $: aefx = false;

    function switchAll() {
        let state = allMenus;
        melee = range = ontoken = templatefx = aura = preset = aefx = state;
    }

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
        const updatedImport = await autoRecMigration.handle(menu)
        AAAutorecManager.mergeMenus(menu, {...selectedMenus})
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
                    on:change={() => switchAll()}
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
