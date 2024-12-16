<script>
    import { getContext }       from "svelte";

    import { localize }         from "#runtime/util/i18n";

    import { ripple }           from "#standard/action/animate/composable/ripple";

    import { TJSIconButton }    from "#standard/component/button";

    const { application } = getContext("#external");

    export let animation;


    if (!animation._data.advanced) {
        $animation.advanced = {
            exactMatch: false,
            excludedTerms: [],
            excludedType: {
                enabled: false,
                path: "",
                property: "",
            }
        };
    }

    $: isExactMatch = $animation.advanced.exactMatch;
    $: excludedTerms = $animation.advanced.excludedTerms;

    function addSection() {
        $animation.advanced.excludedTerms = [...excludedTerms, ""]
    }
    function removeThis(idx) {
        excludedTerms.splice(idx, 1);
        $animation.advanced.excludedTerms = [...excludedTerms]
    }

    const removeButton = {
       icon: "far fa-trash-can",
       efx: ripple(),
       title: "Delete"
    };

</script>

<header>
    <div style="text-align: center; font-size: 1.5em">
        <label for="">{localize("autoanimations.menus.advanced")} {localize("autoanimations.menus.recognition")} {localize("autoanimations.menus.features")}</label>
    </div>
</header>
<table class="c">
    <tr>
        <th colspan="2">
            <div>
                <input
                    type="checkbox"
                    bind:checked={$animation.advanced.exactMatch}
                />
                <label for="" style="font-size: 1.25em">{localize("autoanimations.menus.forceExact")}?</label>
            </div>
        </th>
    </tr>
</table>
<table class="c">
    <tr>
        <th colspan="2" style="padding-top: 1em">
            <div class={isExactMatch ? "aa-disableOpacity" : ""}>
                <div>
                    <label for="" style="font-size: 1.25em">{localize("autoanimations.menus.excludedSearchWords")}</label>
                </div>
                {#each $animation.advanced.excludedTerms as term, i}
                <div class="flexrow">
                    <input type=text bind:value={term}/>
                    <TJSIconButton button={removeButton} on:click={() => removeThis(i)} />
                </div>
                {/each}
                <button on:click={() => addSection()}>Add</button>
            </div>
        </th>
    </tr>
</table>
<table class="c">
    <tr>
        <th colspan="2" style="padding-top: 1em;">
            <div>
                <input
                    type="checkbox"
                    bind:checked={$animation.advanced.excludedType.enabled}
                />
                <label for="" style="font-size: 1.25em;">{localize("autoanimations.menus.exclude")} {localize("autoanimations.menus.item")} {localize("autoanimations.menus.property")}</label>
            </div>
        </th>
    </tr>
    <tr class={$animation.advanced.excludedType.enabled ? "" : "aa-disableOpacity"}>
        <th>
            <div style="margin-top: 1.5em">
                item.
            </div>
        </th>
        <th>
            <div class="flexrow">
                <div>
                    {localize("autoanimations.menus.path")}
                    <input type=text style="text-align: left" bind:value={$animation.advanced.excludedType.path}/>
                </div>
                <div>
                    {localize("autoanimations.menus.property")}
                    <input type=text bind:value={$animation.advanced.excludedType.property}/>
                </div>
            </div>
        </th>
    </tr>
</table>
<div class="aa-list" />

<style lang="scss">
    table label {
        position: relative;
        bottom: 0.3em;
        font-weight: bold;
    }
    table.c {
        width: 100%;
    }
</style>
