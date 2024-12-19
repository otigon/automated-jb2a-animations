<script>
    import { getContext }        from "svelte";

    import { AAAutorecFunctions } from "../../../../aa-classes/aaAutorecFunctions.js";
    import { localize } from "#runtime/util/i18n";

    export let animation;
    export let item;

    const { application } = getContext("#external");

    const currentLabel = item.name;
    const menu = animation._data.menu;
    const currentMenu = game.settings.get(
        "autoanimations",
        `aaAutorec-${menu}`
    );

    $: nameToAdd = currentLabel;
    $: checkAutorec = AAAutorecFunctions.singleMenuStrictSearch(
        currentMenu,
        AAAutorecFunctions.rinseName(nameToAdd)
    );

    function submitNewEntry() {
        animation.copyToAutorec(nameToAdd)
        application.close()
    }
</script>

<div class="aa-CopyToAutorec">
    <div style="font-size: 1.3em">
        <label for=""
            ><strong>Adding entry to Global Automatic Recognition</strong> <br />
            <strong>{localize(`autoanimations.animTypes.${menu}`)} Menu</strong>
        </label>
    </div>
    <div style="margin-top: 1em">
        <label for=""
            >Input Label for the new {localize(
                `autoanimations.animTypes.${menu}`
            )} Section</label
        >
    </div>
    <div>
        <input
            type="text"
            style="width: 25em; margin:auto; border-radius: 1em"
            bind:value={nameToAdd}
        />
    </div>

    {#if checkAutorec}
        <div style="height: 2em; font-weight: bold; font-size: 1em; color: red">
            <label for="" style="margin-top:1em">
                {nameToAdd} already exists in the Global {localize(
                    `autoanimations.animTypes.${menu}`
                )} Menu!!
            </label>
        </div>
    {:else}
    <div style="height: 2em;">
    </div>
{/if}

    <button
        class="aa-copySubmitButton {checkAutorec ? "aa-disableOpacity" : ""}"
        on:click={() => submitNewEntry(nameToAdd)}
    >Submit</button>
</div>

<style lang="scss">
    .aa-CopyToAutorec {
        text-align:center;
    }
    .aa-copySubmitButton {
        margin-top: 1em;
        width: 15em;
        border-radius: 1em;
        border: 1px solid rgba(0, 0, 0, 0.4);
        background-color: rgba(0, 0, 0, 0.2);
    }
</style>
