<script>
    import { fade } from "svelte/transition";
    import { localize } from "@typhonjs-fvtt/runtime/svelte/helper";
    //import { ExtraFX } from "../../components/extraFX.svelte";

    export let enableSource;
    export let enableTarget;
    export let isDisabled;
    //export let menuSection;
    //export let flagData;
</script>

<div class="aa-5wide">
    <div
        class="flexcol aa-button-labels"
        style="grid-row: 1 / 2; grid-column: 1 / 2"
    >
        <label
            for=""
            class={enableSource ? "selected" : "notSelected"}
            style="border: 1px outset black; border-radius: 10px 20px"
            >{localize("autoanimations.menus.source")}</label
        >
    </div>
    {#if enableSource}
        <div
            class="flexcol"
            style="grid-row:1/2; grid-column:2/3"
        >
            <label for="" style="align-self:center" in:fade
                ><i class="fas fa-arrow-right fa-2xl" /></label
            >
        </div>
    {/if}
    <div
        class="flexcol aa-button-labels"
        style="grid-row: 1 / 2; grid-column: 3 / 4"
    >
        <label
            for=""
            class="selected"
            style="border: 1px outset black"
            >{localize("autoanimations.menus.primary")}</label
        >
    </div>
    {#if enableTarget}
        <div
            class="flexcol"
            style="grid-row:1/2; grid-column:4/5"
        >
            <label for="" style="align-self:center" in:fade
                ><i class="fas fa-arrow-right fa-2xl" /></label
            >
        </div>
    {/if}
    {#if !isDisabled}
    <div
        class="flexcol aa-button-labels"
        style="grid-row: 1 / 2; grid-column: 5 / 6"
    >
        <label
            for=""
            class={enableTarget ? "selected" : "notSelected"}
            style="border: 1px outset black; border-radius: 20px 10px"
            >{localize("autoanimations.menus.target")}</label
        >
    </div>
    {:else}
    <div
    class="flexcol aa-button-labels"
    style="grid-row: 1 / 2; grid-column: 5 / 6"
>
    <label
        for=""
        class={enableTarget ? "selected" : "notSelected"}
        style="border: 1px outset black; border-radius: 20px 10px rgba(219, 2, 2, 0.4);"
        >{localize("autoanimations.menus.target")}</label
    >
</div>
    {/if}
</div>
<div
    class="flexcol aa-extraFX-hint"
    style="grid-row:2/3; grid-column:1/6"
>
    <label for="" style="align-self:center"
        >Requires use of a Primary Animation</label
    >
</div>

<style lang='scss'>
    .aa-5wide {
        display: grid;
        grid-template-columns: 28% 5% 30% 5% 28%;
        grid-gap: 1%;
        padding: 5px;
        align-items: center;
        margin-right: 5%;
        margin-left: 5%;
        font-family: "Modesto Condensed", "Palatino Linotype", serif;
        font-size: large;
        font-weight: bold;
    }
    .selected {
        background-color: rgba(25, 175, 2, 0.4);
        transition: background-color 0.5s;
    }
    .notSelected {
        background-color: rgba(219, 132, 2, 0.4);
        transition: background-color 0.5s;
    }
    .aa-extraFX-hint label {
        font-family: "Modesto Condensed", "Palatino Linotype", serif;
        font-size: large;
        font-weight: bold;
    }

</style>