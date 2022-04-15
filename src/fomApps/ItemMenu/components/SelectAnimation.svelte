<svelte:options accessors={true} />

<script>
    import { localize } from "@typhonjs-fvtt/runtime/svelte/helper";
    import { getContext } from "svelte";
    import { fade, fly } from "svelte/transition";
    import { TJSDialog } from "@typhonjs-fvtt/runtime/svelte/application";
    import { ApplicationShell } from "@typhonjs-fvtt/runtime/svelte/component/core";
    import { setContext } from "svelte";
    import Options from "./options.svelte"

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
    export let customPath = ""
    $: customPath = customPath;
    let isCustom;
    $: animType = animType;
    $: isCustom = isCustom;
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

    //$: setContext("animationType", animType);

    function onClick() {
        TJSDialog.prompt({
            title: "A modal dialog!",
            draggable: false,
            modal: true,
            content: "A cool modal dialog!", // You can set content with a Svelte component!
            label: "Ok",
        });
    }

    function customClick(x) {
        isCustom = isCustom ? false : true;
    }
</script>

<div class="aa-select-animation">
    <div class="flexcol" style="grid-row: 1 / 2;grid-column: 2 / 3;">
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
</div>
{#if animType != ""}
    <h1>Primary Animation</h1>
    <div class="aa-select-animation" in:fade={{ y: 200, duration: 500 }} out:fade={{duration: 500}}>
        {#if animType === "static"}
            <div
                class="flexcol"
                style="grid-row: 1 / 2;grid-column: 2 / 3;"
                in:fade={{ duration: 500 }}
                out:fade={{ duration: 500 }}
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
                disabled={isCustom}
                class={menuType != "" && !isCustom
                    ? "isPopulated"
                    : "isNotPopulated"}
            >
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
                disabled={isCustom}
                class={animation != "" && !isCustom
                    ? "isPopulated"
                    : "isNotPopulated"}
            >
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
                disabled={isCustom}
                class={variant != "" && !isCustom
                    ? "isPopulated"
                    : "isNotPopulated"}
            >
                {#if (menuType != "") & (animation != "")}
                    {#each Object.entries(aaVariantMenu[menuSelection][menuType][animation]) as [key, name]}
                        <option value={key}>{name}</option>
                    {/each}
                {/if}
            </select>
        </div>
        <div class="flexcol" style="grid-row: 3 / 4;grid-column: 3 / 4;">
            <label for="5">{localize("AUTOANIM.color")}</label>
            <select
                name="flags.autoanimations.color"
                bind:value={color}
                id="5"
                disabled={isCustom}
                class={color != "" && !isCustom
                    ? "isPopulated"
                    : "isNotPopulated"}
            >
                {#if menuType != "" && animation != "" && variant != ""}
                    {#each Object.entries(aaColorMenu[menuSelection][menuType][animation][variant]) as [key, name]}
                        <option value={key}>{name}</option>
                    {/each}
                {/if}
            </select>
        </div>
    </div>
    <div class="aa-customAnim-container" in:fade={{ y: 200, duration: 500 }}>
        <button class="{isCustom ? "selected" : "notSelected"}" on:click={() => customClick()}>Set {localize("AUTOANIM.custom")}</button>
        {#if isCustom}
            <div
                class="form-group"
                style="grid-row: 1/2; grid-column: 2/5"
                in:fade={{ duration: 500 }}
                out:fade={{ duration: 500 }}
            >
                <input type="text" bind:value={customPath}  class={customPath != "" ? "isPopulated" : "isNotPopulated"}>
            </div>
        {/if}
    </div>
    {#if !isCustom}
    <p transition:fade>
        Database path is <strong
            >autoanimations.{menuSelection}.{menuType}.{animation}.{variant}.{color}</strong
        >
    </p>
    {:else}
    <p transition:fade>
        Custom Path is <strong>{customPath}</strong>
    </p>
    {/if}
    <Options {animType}/>
{/if}

<style lang="scss">
    .aa-select-animation {
        display: grid;
        grid-template-columns: 33.3% 33.3% 33.3%;
        grid-gap: 5px;
        padding: 5px;
        align-items: center;
        margin-right: 5%;
        margin-left: 5%;
        font-family: "Modesto Condensed", "Palatino Linotype", serif;
        font-size: large;
        font-weight: bold;
    }
    .aa-select-animation select {
        text-align: center;
        font-weight: bold;
        min-height: 2em;
    }

    .aa-select-animation label {
        align-self: center;
    }
    .aa-customAnim-container {
        display: grid;
        grid-template-columns: 25% 25% 25% 25%;
        grid-gap: 5px;
        padding: 5px;
        margin-right: 6%;
        margin-left: 5%;
    }
    .aa-customAnim-container button {
        border-radius: 10px;
        border: 2px solid black;
    }
    .isPopulated {
        box-shadow: 0 0 6px rgba(25, 175, 2, 0.6);
        transition: box-shadow 0.5s
    }
    .isNotPopulated {
        box-shadow: 0 0 6px rgba(219, 132, 2, 0.7);
        transition: box-shadow 0.5s
    }
    h1 {
        font-family: "Modesto Condensed", "Palatino Linotype", serif;
        font-size:x-large;
        font-weight: bold;
        text-align: center;
        margin-right: 5%;
        margin-left: 5%;
    }
    .selected {
        background-color:rgba(25, 175, 2, 0.4);
        transition: background-color 0.5s
    }
    .notSelected {
        background-color: rgba(219, 132, 2, 0.4);
        transition: background-color 0.5s
    }
    p {
        margin-left: 10%;
        margin-right: 10%;
        opacity: 60%
    }
</style>
