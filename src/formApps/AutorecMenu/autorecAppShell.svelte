<svelte:options accessors={true} />
 
<script>
    import { getContext } from "svelte";
    import { fade, scale } from "svelte/transition";
    import { ApplicationShell } from "@typhonjs-fvtt/runtime/svelte/component/core";
    import { localize } from "@typhonjs-fvtt/runtime/svelte/helper";
    import MeleeMenuShell from "./meleeMenuShell.svelte";
    import RangeMenuShell from "./rangeMenuShell.svelte";
    import { flagMigrations } from "../../system-handlers/flagMerge.js";
    import Tabs from "./Tabs.svelte";

    export let elementRoot;
    const data = game.settings.get("autoanimations", "aaAutorec");

    export const flagData = {
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

    let items = [
        {
            label: "Melee",
            value: 1,
            icon: "fas fa-shield-alt",
            component: MeleeMenuShell,
        },
        {
            label: "Range",
            value: 2,
            icon: "fas fa-people-arrows",
            component: RangeMenuShell
        },
        {
            label: "On Token",
            value: 3,
            icon: "fas fa-child",
        },
        {
            label: "Templates",
            value: 4,
            icon: "fas fa-shapes",
        },
        {
            label: "Aura",
            value: 5,
            icon: "fab fa-creative-commons-by",
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
        <Tabs {items} {flagData} />
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
</style>
