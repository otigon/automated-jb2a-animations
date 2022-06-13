<svelte:options accessors={true} />

<script>
    import { getContext } from "svelte";
    import { ApplicationShell } from "@typhonjs-fvtt/runtime/svelte/component/core";
    import { localize } from "@typhonjs-fvtt/runtime/svelte/helper";
    import { TJSDialog } from "@typhonjs-fvtt/runtime/svelte/application";
    import MenuManager from "./menuManager.svelte";
    import PrimaryMenuShell from "./primaryMenuShell.svelte";
    import PresetShell from "./PresetShell.svelte";
    import ActiveEffectShell from "./ActiveEffectShell.svelte";
    //import { flagMigrations } from "../../system-handlers/flagMerge.js";
    import { gameSettings } from "../../gameSettings.js";
    import {
        closePreviewWindow,
        storeAutorec,
        autorecData,
        databaseType,
    } from "./autorecPreviews.js";
    closePreviewWindow.set(false);
    import items from "./data/tabItems.js";
    import { fix_and_outro_and_destroy_block } from "svelte/internal";

    export let elementRoot;
    export let activeTabValue = 1;

    const handleClick = async (tabValue) => {
        let currentMenu = items.filter((obj) => {
            return obj.value === activeTabValue;
        })[0];
        databaseType.set(currentMenu.type);
        Object.values(ui.windows)
            .filter((app) => app.id === "Autorec-Video-Preview")
            .forEach((app) => app.close());
        activeTabValue = tabValue;
    };

    //const storeData = gameSettings.getStore("aaAutorec");

    //storeData.set(game.settings.get("autoanimations", "aaAutorec"));
    autorecData.set(game.settings.get("autoanimations", "aaAutorec"));
    let flagData = $autorecData;
    $: flagData = $autorecData = flagData;
    //$: flagData = $autorecData;

    $: storeAutorec.set(flagData);

    /*
    let flagData = {
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
    */
    $: menuListings = {
        melee: Object.values(flagData.melee),
        range: Object.values(flagData.range),
        static: Object.values(flagData.static),
        templatefx: Object.values(flagData.templatefx),
        aura: Object.values(flagData.aura),
        preset: Object.values(flagData.preset),
        aefx: Object.values(flagData.aefx),
    };
    let form = void 0;

    function manageMenu() {
        new TJSDialog({
            modal: false,
            draggable: true,
            resizable: true,
            title: "Autorec Menu Manager",
            stylesContent: { background: "rgba(125, 125, 125, 0.75)" },
            content: {
                class: MenuManager,
                props: {
                    app: application,
                },
            },
        }).render(true);
    }

    const { application } = getContext("external");

    let searchValue;

    async function applyFlags() {
        await game.settings.set("autoanimations", "aaAutorec", flagData);
        //$storeData = $storeData;
    }

    async function closeApp() {
        await game.settings.set("autoanimations", "aaAutorec", flagData);
        closePreviewWindow.set(true);
        application.close();
    }
    function addSection() {
        let currentMenu = items.filter((obj) => {
            return obj.value === activeTabValue;
        })[0];
        let menuLength = Object.keys(flagData[currentMenu.type]).length;
        flagData[currentMenu.type][menuLength] = {
            id: randomID(),
            hidden: true,
        };
        flagData = flagData;
    }
    /*
    let searchFunction = foundry.utils.debounce(() => {
        console.log("SEARCHING");
        let currentMenu = items.filter((obj) => {
            return obj.value === activeTabValue;
        })[0];
        const menuData = flagData[currentMenu.type];
        const mergedArray = [];
        const keys = Object.keys(menuData);
        const keyLength = keys.length;
        for (var i = 0; i < keyLength; i++) {
            var currentObject = menuData[keys[i]];
            if (!currentObject.name) {
                continue;
            }
            currentObject.menuSection = keys[i];
            mergedArray.push(currentObject);
        }
        mergedArray.sort((a, b) =>
            b.name.toLowerCase() > a.name.toLowerCase() ? -1 : 1
        );

        const sortedMenu = {};
        const newLength = mergedArray.length;
        for (var i = 0; i < newLength; i++) {
            var currentKey = i.toString();
            sortedMenu[currentKey] = mergedArray[currentKey];
        }

        flagData[currentMenu.type] = sortedMenu;
        flagData = flagData;
    }, 300);
    */
</script>

<ApplicationShell
    bind:elementRoot
    stylesContent={{ background: "rgba(125, 125, 125, 0.75)" }}
>
    <form
        bind:this={form}
        on:submit|preventDefault
        autocomplete="off"
        id="autorec-menu-aa"
        novalidate
    >
        <div class="aaTopSection">
            <div class="aa-autorec-tabs">
                {#each items as item}
                    <li
                        class="flexrow"
                        class:active={activeTabValue === item.value}
                    >
                        <span
                            class="aa-zoom"
                            on:click={() => handleClick(item.value)}
                            ><i class={item.icon} />{item.label}</span
                        >
                    </li>
                {/each}
            </div>
            <div class="form-group" style="margin-left: 3%;margin-right: 23%;">
                <label class="aa-sort aa-zoom" for="" style="max-width: 25%;"
                    ><i class="fas fa-sort-alpha-down fa-lg aa-green" />
                    {localize("autoanimations.menus.sortmenu")}</label
                >
                <input
                    type="text"
                    class="aa-nameField"
                    bind:value={searchValue}
                    placeholder={localize("autoanimations.menus.search")}
                />
            </div>
        </div>
        <div class="aaMidSection">
            <div style="margin-left:3%;margin-right:3%;">
                {#each items as item}
                    {#if activeTabValue == item.value}
                        {#if searchValue}
                            {#each menuListings[item.type] as menuSection, idx (menuSection.id)}
                                {#if menuSection.name && menuSection.name
                                        .toLowerCase()
                                        .includes(searchValue.toLowerCase())}
                                    {#if item.type === "preset"}
                                            <PresetShell
                                                bind:menuSection
                                                {idx}
                                                type={item.type}
                                                {flagData}
                                                bind:menuListings
                                            />
                                    {:else if item.type === "aefx"}
                                        <div class="aaMenu-section">
                                            <ActiveEffectShell
                                                bind:menuSection
                                                {idx}
                                                type={item.type}
                                                {flagData}
                                                bind:menuListings
                                            />
                                        </div>
                                    {:else}
                                        <div class="aaMenu-section">
                                            <PrimaryMenuShell
                                                bind:menuSection
                                                {idx}
                                                type={item.type}
                                                {flagData}
                                                bind:menuListings
                                            />
                                        </div>
                                    {/if}
                                {/if}
                            {/each}
                        {:else}
                            {#each menuListings[item.type] as menuSection, idx (menuSection.id)}
                                {#if item.type === "preset"}
                                    <PresetShell
                                        bind:menuSection
                                        {idx}
                                        type={item.type}
                                        {flagData}
                                        bind:menuListings
                                    />
                                {:else if item.type === "aefx"}
                                    <div class="aaMenu-section">
                                        <ActiveEffectShell
                                            bind:menuSection
                                            {idx}
                                            type={item.type}
                                            {flagData}
                                            bind:menuListings
                                        />
                                    </div>
                                {:else}
                                    <div class="aaMenu-section">
                                        <PrimaryMenuShell
                                            bind:menuSection
                                            {idx}
                                            type={item.type}
                                            {flagData}
                                            bind:menuListings
                                        />
                                    </div>
                                {/if}
                            {/each}
                        {/if}
                    {/if}
                {/each}
            </div>
        </div>
    </form>
    <div class="aaBottomSection" style="margin-bottom: 5px">
        <div class="aa-submit">
            <div class="flexcol" style="grid-row:1/2; grid-column:1/2">
                <button class="aa-addSection" on:click={() => addSection()}
                    >{localize("autoanimations.menus.add")}
                    {localize("autoanimations.menus.section")}</button
                >
            </div>
            <div class="flexcol" style="grid-row:1/2; grid-column:2/3">
                <button class="aa-manageMenu" on:click={() => manageMenu()}
                    >{localize("autoanimations.menus.menuManager")}</button
                >
            </div>
            <div class="flexcol" style="grid-row:2/3; grid-column:1/2">
                <button
                    class="footer-button aa-snclose"
                    type="submit"
                    on:click|preventDefault={() => applyFlags()}
                    >{localize("autoanimations.menus.submit")}</button
                >
            </div>
            <div class="flexcol" style="grid-row:2/3; grid-column:2/3;">
                <button class="aa-casubmit" on:click|preventDefault={closeApp}
                    >{localize("autoanimations.menus.close")}
                    {localize("autoanimations.menus.and")}
                    {localize("autoanimations.menus.submit")}</button
                >
            </div>
        </div>
    </div>
</ApplicationShell>

<style lang="scss">
    .aa-casubmit {
        background-color: rgb(115, 115, 115, 0.6);
    }
    .aa-snclose {
        background-color: rgb(140, 140, 140, 0.5);
    }
    .aa-manageMenu {
        background-color: rgba(219, 132, 2, 0.4);
    }
    .aa-addSection {
        background-color: rgba(25, 175, 2, 0.4);
    }
    .aaTopSection {
        position: absolute;
        top: 30px;
        left: 0;
        right: 0;
        border: 2px solid black;
        background: rgba(199, 199, 199, 0.85);
    }
    .aaMidSection {
        position: absolute;
        left: 0;
        right: 0;
        top: 100px;
        bottom: 85px;
        overflow: scroll;
    }
    .aaBottomSection {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        margin-right: 2%;
        margin-left: 2%;
        background: rgb(204, 204, 204);
        border: 2px solid black;
        border-radius: 10px;
    }
    .aa-submit {
        display: grid;
        grid-template-columns: 49.5% 49.5%;
        grid-gap: 1%;
        padding: 5px;
        align-items: center;
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
    .aa-autorec-tabs {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-around;
        height: auto;
        background: rgba(199, 199, 199, 0.85);
        //border-radius: 10px;
        align-items: center;
        padding-top: 5px;
        color: rgb(50, 50, 50);
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
    .aa-nameField:hover {
        text-shadow: 0 0 5px rgba(255, 0, 0, 0.687);
    }
    .aaMenu-section {
        background: rgba(199, 199, 199, 0.85);
        border: 2px solid black;
        border-radius: 10px;
        margin: 2px 0 2px 0;
    }
    .aa-nameField {
        background-color: rgba(210, 210, 210, 0.75);
        border: 1.5px outset rgba(0, 0, 0, 0.5);
        border-radius: 13px;
        text-align: center;
        font-weight: bold;
        font-size: large;
        color: black;
    }
    .aa-nameField:placeholder-shown {
        opacity: 0.4;
    }
    .aa-sort:hover {
        text-shadow: 0 0 5px rgba(255, 0, 0, 0.5);
    }
    .aa-sort {
        color: black;
        font-size: 12.25px;
    }
    .aa-zoom:hover {
        transform: scale(1.1);
    }
</style>
