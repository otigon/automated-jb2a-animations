<svelte:options accessors={true} />

<script>
    import { getContext } from "svelte";
    import { fade, scale } from "svelte/transition";
    import { ApplicationShell } from "@typhonjs-fvtt/runtime/svelte/component/core";
    import { localize } from "@typhonjs-fvtt/runtime/svelte/helper";
    import { AutorecFunctions } from "../../aa-classes/autorecFunctions.js"

    import ExplosionSettings from "../components/explosions.svelte"
    import GeneralSettings from "../components/generalSettings.svelte";
    import SoundSettings from "../components/soundSettings.svelte";
    import MacroField from "../components/macro.svelte";
    import PrimarySection from "../components/primarySection.svelte";
    import PresetMenu from "../components/presetShell.svelte";

    import { flagMigrations } from "../../system-handlers/flagMerge.js";


    export let elementRoot;
    export let item;
    export let itemFlags;
    export const flags = itemFlags.autoanimations || {};

    const oldName = item.name || item.sourceName;
    const autoCheck = AutorecFunctions._checkAutoRec(oldName);

    const wait = (delay) =>
        new Promise((resolve) => setTimeout(resolve, delay));

    let animationDisabled = flags.killAnim;
    let isCustomized = flags.override;
    $: isCustomized = isCustomized;

    export const flagData = {
        killAnim: flags.killAnim,
        //animLevel: flags.animLevel,
        override: flags.override,
        animType: flags.animType,
        //animation: flags.animation,
        //color: flags.color,
        primary: flags.primary || {},
        version: flags.version
            ? flags.version
            : Object.keys(flagMigrations.migrations)
                  .map((n) => Number(n))
                  .reverse()[0],

        options: flags.options || {},
        explosions: flags.explosions || {},
        audio: flags.audio || {},
        autoOverride: flags.autoOverride || {},
        macro: flags.macro || {},
        levels3d: flags.levels3d || {},
        sourceToken: flags.sourceToken || {},
        targetToken: flags.targetToken || {},
        meleeSwitch: flags.meleeSwitch || {},
        preset: flags.preset || {}
    };
    const preset = flagData.preset;
    let enableMacro;
    $: enableMacro = enableMacro;
    let showSound;
    $: showSound = animationDisabled ? true : false;
    let menuType;
    $: menuType = menuType;

    let form = void 0;
    const { application } = getContext("external");

    async function applyFlags() {
        const updatedFlags = {
            data: {
                flags: {
                    autoanimations: flagData,
                },
            },
        };
        await item.update(updatedFlags.data);
    }

    async function closeApp() {
        const updatedFlags = {
            data: {
                flags: {
                    autoanimations: flagData,
                },
            },
        };
        await item.update(updatedFlags.data);
        application.close();
    }

    // Sets Initial animType for Menu - Assigns to Flag when updated
    let animType = flagData.animType || "static";
    $: {
        animType = animType;
        flagData.animType = animType;
    }
    let presetType = preset.presetType;
    $: presetType = preset.presetType = presetType;
    let animTypeSwitched = false;
    async function typeSwitch() {
        animTypeSwitched = true;
        await wait(150);
        animTypeSwitched = false;
    }
    const disableAmmo = true;
    const disablePlayOn = true;
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
        id="item-menu-aa"
        class="overview"
    >
        <div class="aaTopSection" style="margin-top:5px" transition:fade>
            <div class="aa-tabs">
                <div
                    class="flexcol"
                    style="grid-row: 1 / 2; grid-column: 2 / 3;"
                >
                    <button
                        class="selected"
                        ><i class="fas fa-bomb" />
                        {localize("autoanimations.menus.primary")}
                        {localize("autoanimations.menus.animation")}</button
                    >
                </div>
            </div>
        </div>
            <div class="aaMidSection" transition:fade>
                <div class="aaMenu-section" transition:fade>
                    <GeneralSettings
                        bind:animationDisabled
                        bind:isCustomized
                        bind:enableMacro
                        {autoCheck}
                        {disableAmmo}
                        {flagData}
                    />
                    {#if autoCheck && !isCustomized && !animationDisabled}
                    <div class="aa-pickAnim" transition:fade>
                        <div class="flexcol" style="grid-row:1/2; grid-column:1/4">
                            <label for="" style="font-size:x-large"><strong>{oldName}</strong> {localize("autoanimations.menus.autorecognized")} </label>
                        </div>
                    </div>
                    {/if}
                    {#if isCustomized}
                        <div class="aa-pickAnim" transition:fade>
                            <div
                                class="flexcol"
                                style="grid-row: 1 / 2;grid-column: 2 / 3;"
                            >
                                <label for="1"
                                    >{localize("autoanimations.menus.animation")}
                                    {localize("autoanimations.menus.type")}</label
                                >
                                <select
                                    bind:value={animType}
                                    on:change={() => typeSwitch()}
                                    id="1"
                                    style="text-align: center;justify-self: center;background-color: rgba(21, 154, 169, 0.4);"
                                >
                                    <option value="static"
                                        >{localize(
                                            "autoanimations.animTypes.onToken"
                                        )}</option
                                    >
                                    <option value="aura"
                                        >{localize(
                                            "autoanimations.animTypes.typeAuras"
                                        )}</option
                                    >
                                    <option value="preset"
                                        >{localize(
                                            "autoanimations.animTypes.presets"
                                        )}</option
                                    >
                                </select>
                            </div>
                            {#if animType === "preset"}
                                <div
                                    class="flexcol"
                                    style="grid-row: 2 / 3;grid-column: 2 / 3;"
                                    transition:fade
                                >
                                    <label for="1"
                                        >{localize("autoanimations.menus.preset")}
                                        {localize("autoanimations.menus.type")}</label
                                    >
                                    <select
                                        bind:value={presetType}
                                        id="1"
                                        style="text-align: center;justify-self: center; background-color: rgba(21, 154, 169, 0.4);"
                                    >
                                        <option value="bless"
                                            >{localize(
                                                "autoanimations.presetTypes.bless"
                                            )}</option
                                        >
                                        <option value="shieldspell"
                                            >{localize(
                                                "autoanimations.presetTypes.shieldspell"
                                            )}</option
                                        >
                                    </select>
                                </div>
                            {/if}
                        </div>
                    {/if}
                </div>
                {#if enableMacro}
                    <div class="aaMenu-section" transition:fade>
                        <MacroField {flagData} />
                    </div>
                {/if}
                {#if showSound}
                    <div class="aaMenu-section" transition:fade>
                        <SoundSettings audioPath="a01" {flagData} />
                    </div>
                {/if}
                {#if !animationDisabled && isCustomized}
                        {#if animType === "preset"}
                            <PresetMenu {animTypeSwitched} {flagData} {presetType} />
                        {:else}
                        <div class="aaMenu-section">
                            <PrimarySection
                                {animTypeSwitched}
                                {animType}
                                {disablePlayOn}
                                {flagData}
                            />
                        </div>
                        {/if}
                    {#if animType === "static"}
                        <div class="aaMenu-section">
                            <ExplosionSettings {flagData} />
                        </div>
                    {/if}
                {/if}
            </div>
        <div class="aaBottomSection" style="margin-bottom: 5px">
            <div class="aa-submit">
                <div class="flexcol" style="grid-row:1/2; grid-column:1/2">
                    <button
                        class="footer-button"
                        type="submit"
                        on:click|preventDefault={applyFlags}>{localize("autoanimations.menus.submit")}</button
                    >
                </div>
                <div class="flexcol" style="grid-row:1/2; grid-column:2/3">
                    <button
                        class="footer-button"
                        on:click|preventDefault={closeApp}
                        >{localize("autoanimations.menus.close")} {localize("autoanimations.menus.and")} {localize("autoanimations.menus.submit")}</button
                    >
                </div>
            </div>
        </div>
    </form>
</ApplicationShell>

<style lang="scss">
    .aa-tabs {
        display: grid;
        grid-template-columns: 20% 60% 20%;
        grid-gap: 5px;
        padding: 5px;
        align-items: center;
        margin-right: 2%;
        font-family: "Modesto Condensed", "Palatino Linotype", serif;
        font-size: large;
        font-weight: bold;
    }
    .aa-tabs button {
        border-radius: 10px;
        border: 2px groove rgb(204, 204, 204);
        font-family: "Modesto Condensed", "Palatino Linotype", serif;
        font-weight: bold;
        font-size: large;
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
    .footer-button {
        border-radius: 5px;
        font-family: "Modesto Condensed", "Palatino Linotype", serif;
        font-size: large;
        font-weight: bold;
    }
    .aaTopSection {
        position: absolute;
        top: 30px;
        left: 1%;
        right: 0;
        background: rgb(204, 204, 204);
        border: 2px solid black;
        border-radius: 10px;
        margin-left: 2%;
        margin-right: 4%;
    }
    .aaMidSection {
        position: absolute;
        left: 0;
        right: 0;
        top: 88px;
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
    .selected {
        background-color: rgba(25, 175, 2, 0.4);
        transition: background-color 0.5s;
    }
    .aa-pickAnim {
        display: grid;
        grid-template-columns: 33.3% 33.3% 33.3%;
        grid-gap: 5px;
        padding: 5px;
        align-items: center;
        margin-right: 4%;
        margin-left: 1%;
        font-family: "Modesto Condensed", "Palatino Linotype", serif;
        font-size: large;
        font-weight: bold;
        color: black;
    }
    .aa-pickAnim select {
        text-align: center;
        font-weight: bold;
        min-height: 2em;
        border-radius: 10px;
    }
    .aa-pickAnim label {
        align-self: center;
    }
</style>
