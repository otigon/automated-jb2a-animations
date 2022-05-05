<svelte:options accessors={true} />

<script>
    import { getContext } from "svelte";
    import { fade, scale } from "svelte/transition";
    import { ApplicationShell } from "@typhonjs-fvtt/runtime/svelte/component/core";
    import { localize } from "@typhonjs-fvtt/runtime/svelte/helper";
    import MeleeMenuShell from "./meleeMenuShell.svelte";
    import RangeMenuShell from "./rangeMenuShell.svelte";
    import AutorecRouter from "./AutorecRouter.svelte";
    import PrimaryMenuShell from "./primaryMenuShell.svelte";
    import { flagMigrations } from "../../system-handlers/flagMerge.js";
    //import Tabs from "./Tabs.svelte";

    export let elementRoot;
    export let activeTabValue = 1;
    const handleClick = (tabValue) => () => (activeTabValue = tabValue);

    const data = game.settings.get("autoanimations", "aaAutorec");

    const flagData = {
        melee: data.melee || {},
        range: data.range || {},
        static: data.static || {},
        templatefx: data.templatefx || {},
        aura: data.aura || {},
        preset: data.preset || {},
        aefx: data.aefx || {},
        version:
            data.version ||
            Object.keys(flagMigrations.migrations)
                .map((n) => Number(n))
                .reverse()[0],
        search: "",
    };
    $: flagData = flagData;
    let meleeList = Object.values(flagData.melee);
    console.log(meleeList)

    let items = [
        {
            label: "Melee",
            value: 1,
            icon: "fas fa-shield-alt",
            type: "melee",
        },
        {
            label: "Range",
            value: 2,
            icon: "fas fa-people-arrows",
            type: "range",
        },
        {
            label: "On Token",
            value: 3,
            icon: "fas fa-child",
            type: "static",
        },
        {
            label: "Templates",
            value: 4,
            icon: "fas fa-shapes",
            type: "templatefx",
        },
        {
            label: "Aura",
            value: 5,
            icon: "fab fa-creative-commons-by",
            type: "static",
        },
        {
            label: "Preset",
            value: 6,
            icon: "fas fa-gift",
        },
        {
            label: "Active Effects",
            value: 7,
            icon: "fas fa-atom",
        },
    ];
    let form = void 0;
</script>

<ApplicationShell
    bind:elementRoot
    transition={scale}
    transitionOptions={{ duration: 500 }}
    stylesContent={{ background: "rgba(125, 125, 125, 0.75)" }}
>
    <form
        bind:this={form}
        on:submit|preventDefault
        autocomplete="off"
        id="autorec-menu-aa"
        novalidate
    >
        <div class="aa-autorec-header aaTopSection">
            {#each items as item}
                <li
                    class="{activeTabValue === item.value
                        ? 'active'
                        : ''} flexrow"
                >
                    <span on:click={handleClick(item.value)}
                        ><i class={item.icon} />{item.label}</span
                    >
                </li>
            {/each}
        </div>
        <div class="aaMidSection">
            {#each items as item}
                {#if activeTabValue == item.value}
                    {#each Object.values(flagData[item.type]) as menuSection, idx}
                        <div class="aaMenu-section">
                            <PrimaryMenuShell
                                bind:menuSection
                                {idx}
                                type={item.type}
                                {flagData}
                            />
                        </div>
                    {/each}
                {/if}
            {/each}
        </div>
        <div class="aaBottomSection" style="margin-bottom: 5px">
            <div class="aa-submit">
                <div class="flexcol" style="grid-row:1/2; grid-column:1/2">
                    <button class="footer-button" type="submit"
                        >{localize("autoanimations.menus.submit")}</button
                    >
                </div>
                <div class="flexcol" style="grid-row:1/2; grid-column:2/3">
                    <button class="footer-button"
                        >{localize("autoanimations.menus.close")}
                        {localize("autoanimations.menus.and")}
                        {localize("autoanimations.menus.submit")}</button
                    >
                </div>
            </div>
        </div>
    </form>
</ApplicationShell>

<style lang="scss">
    .aaTopSection {
        position: absolute;
        top: 30px;
        left: 1%;
        right: 1%;
    }
    .aaMidSection {
        position: absolute;
        left: 0;
        right: 0;
        top: 70px;
        bottom: 51px;
        overflow: scroll;
    }
    .aaBottomSection {
        position: absolute;
        bottom: 0;
        left: 1%;
        right: 0;
        margin-right: 4%;
        margin-left: 2%;
        background: rgb(204, 204, 204);
        border: 2px solid black;
        border-radius: 10px;
    }
    .aa-submit {
        display: grid;
        grid-template-columns: 50% 50%;
        grid-gap: 5px;
        padding: 5px;
        align-items: center;
        margin-right: 2%;
        font-family: "Modesto Condensed", "Palatino Linotype", serif;
        font-size: large;
        font-weight: bold;
    }
    .aa-submit button {
        border-radius: 10px;
        border: 2px outset #dddddd;
        font-family: "Modesto Condensed", "Palatino Linotype", serif;
        font-weight: bold;
        font-size: large;
    }
    .box {
        margin-bottom: 50px;
    }
    .aa-autorec-header {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-around;
        height: auto;
        background: rgba(199, 199, 199, 0.85);
        border: 2px solid black;
        border-radius: 10px;
        align-items: center;
        padding-top: 5px;
    }
    li {
        margin-bottom: -1px;
        height: 30px;
        font-family: "Modesto Condensed", "Palatino Linotype", serif;
        font-size: large;
        font-weight: bold;
        vertical-align: middle;
    }

    span {
        border: 1px solid transparent;
        border-top-left-radius: 0.25rem;
        border-top-right-radius: 0.25rem;
        display: block;
        cursor: pointer;
    }

    li.active > span {
        text-shadow: 0 0 5px rgba(255, 0, 0, 0.687);
    }
    .aaMenu-section {
        background: rgba(199, 199, 199, 0.85);
        border: 2px solid black;
        border-radius: 10px;
        margin: 1.5% 3% 1.5% 3%;
    }
</style>
