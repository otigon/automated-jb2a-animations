<svelte:options accessors={true} />

<script>
    import { localize } from "@typhonjs-fvtt/runtime/svelte/helper";
    import { getContext } from "svelte";
    import { fade, fly } from "svelte/transition";
    import { TJSDialog } from "@typhonjs-fvtt/runtime/svelte/application";
    import { ApplicationShell } from "@typhonjs-fvtt/runtime/svelte/component/core";
    import { setContext } from "svelte";
    import Options from "./options.svelte";
    import SoundSettings from "./soundSettings.svelte";
    import VideoPreview from "./videoPreview.svelte";
    import CustomPicker from "./customPicker.svelte";

    import {
        aaTypeMenu,
        aaNameMenu,
        aaVariantMenu,
        aaColorMenu,
    } from "../../../animation-functions/databases/jb2a-menu-options.js";

    export let flagData;

    const options = flagData.options || {};
    let animType = flagData.animType || "";
    $: animType = animType;
    $: flagData.animType = animType;

    let menuType = options.menuType || "";
    $: menuType = animType === "" ? "" : menuType;
    $: options.menuType = menuType;

    let animation = flagData.animation || "";
    $: animation = animType === "" || menuType === "" ? "" : animation;
    $: flagData.animation = animation;

    let variant = options.variant || "";
    $: variant =
        animType === "" || menuType === "" || animation === "" ? "" : variant;
    $: options.variant = variant;

    let color = flagData.color || "";
    $: color =
        animType === "" || menuType === "" || animation === "" || variant === ""
            ? ""
            : color;
    $: colorChoice = color === "random" ? "" : !color ? "" : `.${color}`;
    $: flagData.color = color;

    //let isCustom = options.enableCustom || false;
    let isCustom;
    $: isCustom = isCustom;

    let staticType = options.staticType || "source";
    $: staticType = staticType;
    $: options.staticType = staticType;
    //$: nameList = type != "" ? Object.entries(aaNameMenu.melee[type]) : "";

    $: menuSelection = animType === "aura" ? "static" : animType;

    //$: setContext("animationType", animType);

    function onClick() {
        TJSDialog.prompt({
            title: "Primary Video Preview",
            draggable: true,
            modal: false,
            height: "auto",
            width: "auto",
            classes: ["PrimaryPreview"],
            content: {
                class: VideoPreview,
                props: {
                    menuSelection,
                    menuType,
                    animation,
                    variant,
                    color,
                    customPath: flagData.options.customPath,
                    isCustom,
                },
            }, // You can set content with a Svelte component!
            label: "Ok",
        });
    }

    async function typeChange() {
        if (animType === "") {
            (menuType = ""), (animation = ""), (variant = ""), (color = "");
        } else {
            let menuSelection = animType === "aura" ? "static" : animType;
            menuType = Object.keys(aaTypeMenu[menuSelection])[0];
            animation = Object.keys(aaNameMenu[menuSelection][menuType])[0];
            variant = Object.keys(
                aaVariantMenu[menuSelection][menuType][animation]
            )[0];
            color = Object.keys(
                aaColorMenu[menuSelection][menuType][animation][variant]
            )[0];
        }
    }
    async function menuTypeChange() {
        let newMenuType = menuType;
        animation = Object.keys(aaNameMenu[menuSelection][newMenuType])[0];
        variant = Object.keys(
            aaVariantMenu[menuSelection][newMenuType][animation]
        )[0];
        color = Object.keys(
            aaColorMenu[menuSelection][newMenuType][animation][variant]
        )[0];
    }
    async function animationChange() {
        let newAnimation = animation;
        variant = Object.keys(
            aaVariantMenu[menuSelection][menuType][newAnimation]
        )[0];
        color = Object.keys(
            aaColorMenu[menuSelection][menuType][newAnimation][variant]
        )[0];
    }
    async function variantChange() {
        let newVariant = variant;
        color = Object.keys(
            aaColorMenu[menuSelection][menuType][animation][newVariant]
        )[0];
    }
</script>

<div transition:fade={{ duration: 500 }}>
    <div class="aa-select-animation">
        <div class="flexcol" style="grid-row: 1 / 2;grid-column: 2 / 3;">
            <label for="1">Animation Type</label>
            <select
                name="flags.autoanimations.animType"
                bind:value={animType}
                on:change={async () => await typeChange()}
                id="1"
                style="text-align: center;justify-self: center"
            >
                <option value="melee">{localize("AUTOANIM.melee")}</option>
                <option value="range">{localize("AUTOANIM.ranged")}</option>
                <option value="static">{localize("AUTOANIM.onToken")}</option>
                <option value="templatefx"
                    >{localize("AUTOANIM.templates")}</option
                >
                <option value="aura">{localize("AUTOANIM.typeAuras")}</option>
            </select>
        </div>
    </div>
    {#if animType != ""}
        <h1>Primary Animation</h1>
        <div class="aa-select-animation">
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
                        <option value="source"
                            >{localize("AUTOANIM.source")}</option
                        >
                        <option value="target"
                            >{localize("AUTOANIM.target")}</option
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
                    on:change={async () => await menuTypeChange()}
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
                    on:change={async () => await animationChange()}
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
                    on:change={async () => await variantChange()}
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
        <CustomPicker {flagData} bind:isCustom />
        <div class="aa-select-animation">
            <div class="flexcol" style="grid-row: 1/2; grid-column:2/3">
                <button on:click={() => onClick()}>Video Preview</button>
            </div>
        </div>
        {#if !isCustom}
            <p in:fade={{ duration: 500 }}>
                Database path: <strong
                    >autoanimations.{menuSelection}.{menuType}.{animation}.{variant}{colorChoice}</strong
                >
            </p>
        {:else}
            <p in:fade={{ duration: 500 }}>
                Custom Path: <strong>{flagData.options.customPath}</strong>
            </p>
        {/if}
        <Options {menuSelection} {flagData} />
        <SoundSettings {flagData} />
    {/if}
</div>

<style lang="scss">
    .aa-select-animation {
        display: grid;
        grid-template-columns: 33.3% 33.3% 33.3%;
        grid-gap: 5px;
        padding: 5px;
        align-items: center;
        margin-right: 8%;
        margin-left: 5%;
        font-family: "Modesto Condensed", "Palatino Linotype", serif;
        font-size: large;
        font-weight: bold;
    }
    .aa-select-animation select {
        text-align: center;
        font-weight: bold;
        min-height: 2em;
        border-radius: 5px;
    }

    .aa-select-animation label {
        align-self: center;
    }
    .aa-select-animation button {
        border-radius: 10px;
        border: 2px solid black;
        font-family: "Modesto Condensed", "Palatino Linotype", serif;
        font-size: large;
        font-weight: bold;
    }
    .isPopulated {
        box-shadow: 0 0 6px rgba(25, 175, 2, 0.6);
        transition: box-shadow 0.5s;
    }
    .isNotPopulated {
        box-shadow: 0 0 6px rgba(219, 132, 2, 0.7);
        transition: box-shadow 0.5s;
    }
    h1 {
        font-family: "Modesto Condensed", "Palatino Linotype", serif;
        font-size: x-large;
        font-weight: bold;
        text-align: center;
        margin-right: 5%;
        margin-left: 5%;
    }
    p {
        margin-left: 10%;
        margin-right: 10%;
        opacity: 60%;
        word-wrap: break-word;
    }
</style>
