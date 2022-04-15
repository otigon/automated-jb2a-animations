<svelte:options accessors={true} />

<script>
    import { localize } from "@typhonjs-fvtt/runtime/svelte/helper";
    import { getContext } from "svelte";
    import { fade, scale } from "svelte/transition";
    import { TJSDialog } from "@typhonjs-fvtt/runtime/svelte/application";
    import { ApplicationShell } from "@typhonjs-fvtt/runtime/svelte/component/core";
    import {
        aaTypeMenu,
        aaNameMenu,
        aaVariantMenu,
        aaColorMenu,
    } from "../../../animation-functions/databases/jb2a-menu-options.js";

    const data = {};
    const options = data.options || {};

    export let animType = data.animType || "";
    export let menuType = options.menuType || "";
    export let animation = data.animation || "";
    export let variant = options.variant || "";
    export let color = options.color || "";

    let staticType = options.staticType || "source";
    //$: nameList = type != "" ? Object.entries(aaNameMenu.melee[type]) : "";

    $: menuType = animType === "" ? "" : menuType;
    $: animation = animType === "" || menuType === "" ? "" : animation;
    $: variant =
        animType === "" || menuType === "" || animation === "" ? "" : variant;
    $: color =
        animType === "" || menuType === "" || animation === "" || variant === ""
            ? ""
            : color;

    $: menuSelection = animType === "aura" ? "static" : animType;

    function onClick() {
        TJSDialog.prompt({
            title: "A modal dialog!",
            draggable: false,
            modal: true,
            content: "A cool modal dialog!", // You can set content with a Svelte component!
            label: "Ok",
        });
    }
</script>

<main>
    <div class="form-group">
        <label for="1">Animation Type</label>
        <select
            name="flags.autoanimations.animType"
            on:change={() => (menuType = "")}
            bind:value={animType}
            id="1"
            style="text-align: center;justify-self: center"
        >
            <option value="" />
            <option value="melee">{localize("AUTOANIM.melee")}</option>
            <option value="range">{localize("AUTOANIM.ranged")}</option>
            <option value="static">{localize("AUTOANIM.onToken")}</option>
            <option value="templatefx">{localize("AUTOANIM.templates")}</option>
            <option value="aura">{localize("AUTOANIM.typeAuras")}</option> 
        </select>
    </div>
    <div class="aa-select-animation">
        {#if animType === "static"}
            <div
                class="flexcol"
                style="grid-row: 1 / 2;grid-column: 2 / 3;"
                in:fade={{ duration: 500 }}
            >
                <label for="6">{localize("AUTOANIM.playOn")}</label>
                <select
                    name="flags.autoanimations.options.staticType"
                    bind:value={staticType}
                    id="6"
                    style="text-align: center;justify-self: center"
                >
                    <option value="source">{localize("AUTOANIM.source")}</option
                    >
                    <option value="target">{localize("AUTOANIM.target")}</option
                    >
                    <option value="targetDefault"
                        >{localize("AUTOANIM.targetDefault")}</option
                    >
                    <option value="sourcetarget"
                        >{localize("AUTOANIM.both")}</option
                    >
                </select>
            </div>
        {/if}
        <div class="flexcol" style="grid-row: 2 / 3;grid-column: 2 / 3;">
            <label for="2">{localize("AUTOANIM.type")}</label>
            <select
                name="flags.autoanimations.options.menuType"
                bind:value={menuType}
                on:change={() => (animation = "")}
                id="2"
            >
                <option value="" />
                {#if animType != ""}
                    {#each Object.entries(aaTypeMenu[menuSelection]) as [key, name]}
                        <option value={key}>{name}</option>
                    {/each}
                {/if}
            </select>
        </div>
        <div class="flexcol" style="grid-row: 3 / 4;grid-column: 1 / 2;">
            <label for="3">{localize("AUTOANIM.animation")}</label>
            <select
                name="flags.autoanimations.animation"
                bind:value={animation}
                on:change={() => (variant = "")}
                id="3"
            >
                <option value="" />
                {#if menuType != ""}
                    {#each Object.entries(aaNameMenu[menuSelection][menuType]) as [key, name]}
                        <option value={key}>{name}</option>
                    {/each}
                {/if}
            </select>
        </div>
        <div class="flexcol" style="grid-row: 3 / 4;grid-column: 2 / 3;">
            <label for="4">{localize("AUTOANIM.variant")}</label>
            <select
                name="flags.autoanimations.options.variant"
                bind:value={variant}
                on:change={() => (color = "")}
                id="4"
            >
                <option value="" />
                {#if (menuType != "") & (animation != "")}
                    {#each Object.entries(aaVariantMenu[menuSelection][menuType][animation]) as [key, name]}
                        <option value={key}>{name}</option>
                    {/each}
                {/if}
            </select>
        </div>
        <div class="flexcol" style="grid-row: 3 / 4;grid-column: 3 / 4;">
            <label for="5">{localize("AUTOANIM.color")}</label>
            <select name="flags.autoanimations.color" bind:value={color} id="5">
                <option value="" />
                {#if menuType != "" && animation != "" && variant != ""}
                    {#each Object.entries(aaColorMenu[menuSelection][menuType][animation][variant]) as [key, name]}
                        <option value={key}>{name}</option>
                    {/each}
                {/if}
            </select>
        </div>
    </div>
    <p>Selected type is {menuType}</p>
    <p>
        Database path is <strong
            >autoanimations.{menuSelection}.{menuType}.{animation}.{variant}.{color}</strong
        >
    </p>
</main>

<style lang="scss">
    .aa-select-animation {
        display: grid;
        grid-template-columns: 33.3% 33.3% 33.3%;
        grid-gap: 5px;
        padding: 5px;
        align-items: center;
        margin-right: 5%;
        margin-left: 5%;
    }
    .aa-select-animation select {
        text-align: center;
        font-weight: bold;
        min-height: 2em;
    }

    .aa-select-animation label {
        align-self: center;
    }
</style>
